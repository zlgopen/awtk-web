# AWTK WEB 版移植笔记-图片

前面我们介绍了，为减小代码的体积，提高解码的速度，我们选择了使用浏览器的图片解码，而不是 stbimage 去解码。实际操作并非那么简单，其中遇到不少问题。

* 浏览器的图片加载是异步的，而 AWTK 的图片加载是同步的。

* 浏览器的图片 Image 在 AWTK 中没法直接表示。

* AWTK 中的图片名称是抽象的。比如名为 earth 图片，可能是 png、也可能是 jpg 或其它图片格式，这个由资源管理器自动检查。这种方式在浏览器中，会造成大量网络请求，就不太实用了。

* AWTK 不能直接操作浏览器的 Image 对象中的数据，要实现 mutable image 就得另外想办法。

## 一、资源列表

为了解决异步的问题和图片名到 URL 的自动映射的问题，我们用工具生成一个资源列表。

> 资源列表在 build.py 中自动生成。
 
```
const g_awtk_assets = {
  image: [
    {name:"arrow_up_o", uri:"assets/raw/images/x1/arrow_up_o.png", w:24, h:24},
    {name:"arrow_up_p", uri:"assets/raw/images/x1/arrow_up_p.png", w:24, h:24},
    {name:"backspace", uri:"assets/raw/images/x1/backspace.png", w:16, h:16},
    {name:"battery_0", uri:"assets/raw/images/x1/battery_0.png", w:57, h:32},
    {name:"battery_1", uri:"assets/raw/images/x1/battery_1.png", w:57, h:32},
    {name:"battery_2", uri:"assets/raw/images/x1/battery_2.png", w:57, h:32},
    {name:"battery_3", uri:"assets/raw/images/x1/battery_3.png", w:57, h:32},
    {name:"battery_4", uri:"assets/raw/images/x1/battery_4.png", w:57, h:32},
    {name:"battery_5", uri:"assets/raw/images/x1/battery_5.png", w:57, h:32},
...
}
```

有了资源列表，我们就可以：

* 同步获取图片的信息，先构建图片对象，再异步加载。

* 同时也很容易通过图片名字，去找到对应的 URL。

优先找满足当前 DPI 的图片，如果找不到再使用 x1 的图片。

```
AssetsManager.getImageByDPI = function (name, dpi) {
  let anydpi = '/xx/';
  const assets = g_awtk_assets['image'];
  if (assets) {
    const asset = assets.find(iter => {
      return name == iter.name && (iter.uri.indexOf(anydpi) >= 0 || iter.uri.indexOf(dpi) >= 0);;
    });

    return asset;
  }

  return null;
}

AssetsManager.getImage = function (name) {
  let dpi = '/x' + TBrowser.getDevicePixelRatio() + '/';
  let asset = AssetsManager.getImageByDPI(name, dpi);

  if(!asset) {
    asset = AssetsManager.getImageByDPI(name, '/x1/');
  }

  if(!asset) {
    console.log('Not found ' + name);
  }

  return asset;
}
```

## 二、image loader 的实现

AWTK 已经对 image loader 做了抽象，在移植到 WEB 平台时只要实现 image loader 接口就行了，在 C 语言这一层，只是对 JS 的包装。C 语言这边 id 是 image 的唯一标识，对应 JS 那边的 Image 对象。

```
static ret_t image_loader_web_load(image_loader_t *l, const asset_info_t *asset,
                                   bitmap_t *image) {
  int32_t w = 0;
  int32_t h = 0;
  int32_t id = 0;
  const char *name = NULL;
  return_value_if_fail(l != NULL && asset != NULL && image != NULL,
                       RET_BAD_PARAMS);

  name = asset->name;
  id = EM_ASM_INT({ return ImageLoader.load(pointerToString($0)); }, name);
  w = EM_ASM_INT({ return ImageLoader.getWidth(pointerToString($0)); }, name);
  h = EM_ASM_INT({ return ImageLoader.getHeight(pointerToString($0)); }, name);

  memset(image, 0x00, sizeof(bitmap_t));
  image->w = w;
  image->h = h;
  image->specific = tk_pointer_from_int(id);

  return (w > 0 && h > 0) ? RET_OK : RET_NOT_FOUND;
}
```

在 JS 一侧，通过 ImageCache 建立 ID 与 Image 对象之间的关系。

```
ImageLoader.load = function (name) {
  let id = ImageCache.getIdOfName(name);
  if (id !== ImageCache.invalidImageId) {
    return id;
  } else {
    let uri = AssetsManager.getImageURI(name);
    if (uri) {
      let image = new Image();
      image.src = uri;
      image.name = name;
      image.onload = function() {
        console.log('image loaded: ' + name + ' ' + uri);
        Awtk.requestRepaint(1);
      }
      return ImageCache.add(image);
    }
  }
  return ImageCache.invalidImageId;
}
```

在图片加载完成后，调用 Awtk.requestRepaint 请求重绘。

## 三、mutable 图片

浏览器中的图片是只读的，但在 AWTK 中，有时需要直接修改图片的数据，比如颜色选择器。可以动态修改图片内容的图片，我们称为 mutable 图片

我们用 canvas 来模拟 mutable 图片：

```
TBrowser.createMutableImage = function (name, addr, w, h, line_length, format) {
  const image = TBrowser.createCanvas(name, w, h);

  image.name = name;
  image.addr = addr;
  image.format = format;
  image.line_length = line_length;

  return image;
}
```

当数据有变化时，调用 updateMutableImage 将 C 语言这边的内存数据同步到 Canvas 中去：

```
VGCanvas.updateMutableImage = function (id) {
  let mutableImage = ImageCache.get(id);

  let w = mutableImage.width;
  let h = mutableImage.height;
  let size = mutableImage.width * mutableImage.height;
  let start = mutableImage.addr >> 2;
  let end = start + size;
  let array = Module.HEAP32.subarray(start, end);
  let ctx = mutableImage.getContext('2d');
  let imageData = ctx.getImageData(0, 0, w, h);
  let data = new Int32Array(imageData.data.buffer);

  for (let i = 0; i < size; i++) {
    data[i] = array[i];
  }
  ctx.putImageData(imageData, 0, 0, 0, 0, w, h);

  return true;
}
```

官方文档并没有介绍如何在 C 和 JS 之间传递二进制数据，从 malloc 的实现代码可以看到，malloc 分配的数据在 Module.HEAP32 中，我们把它取出来即可。
