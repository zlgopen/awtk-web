# AWTK WEB版移植笔记-基础

将一个C语言写的hello world编译成web版本是很简单的，网上有大量这样的例子。写这样的例子是必要的，让我们能够快速入门，但是实际项目则要复杂的多，这里会介绍一些emscripten的基础知识，同时强调移植AWTK过程中遇到的问题，希望能让大家少走弯路。

## 一、命令行参数

* 1.EXPORTED\_FUNCTIONS 用于导出应用程序中C的函数供JS调用。如：

```
-s EXPORTED_FUNCTIONS="['_awtk_web_init']"
```

函数名前面要加下划线，比如函数名为awtk\_web\_init，导出的名称则为_awtk\_web\_init。

对于小的项目，导出的函数很少，直接写在命令行也是可以的。对于大的项目，导出的函数很多，应该把内容写到文件中，通过@符合告诉emcc从文件中读取导出的函数，这样维护起来会方便很多。如：

```
-s EXPORTED_FUNCTIONS=@configs/export_app_funcs.json
```

configs/export\_app\_funcs.json的内容：

```
[
    "_awtk_web_init",
    "_awtk_web_deinit",
    "_awtk_web_main_loop_step",
    "_awtk_web_on_key_down",
    "_awtk_web_on_key_up",
    "_awtk_web_on_wheel",
    "_awtk_web_on_pointer_down",
    "_awtk_web_on_pointer_move",
    "_awtk_web_on_im_commit",
    "_awtk_web_on_pointer_up"
]
```

* 2.EXTRA\_EXPORTED\_RUNTIME\_METHODS 用于导出runtime中的函数供JS调用。如：

```
-s EXTRA_EXPORTED_RUNTIME_METHODS ="['cwrap']"
```

同理，将它的内容放在文件中，也是更可取的方法。如：

```
-s EXTRA_EXPORTED_RUNTIME_METHODS=@configs/export_runtime_funcs.json
```

configs/export\_runtime\_funcs.json的内容：

```
[
    "ccall",
    "cwrap",
    "addOnPostRun",
    "addOnInit",
    "addOnExit",
    "addOnPreMain",
    "UTF8ToString"
]
```

* 3.调试和优化

对于大的项目，调试版本最好不要加-g标志，产生的代码实在太大了，可能让浏览器处于假死状态，根本没法调试。用缺省生成的代码调试基本上就OK了。

发布版本建议加-Os，代码体积会大大减小，而且它会把数据独立出来，提高加载的速度。

* 4.调试的宏。

emcc生成的常量数据的首地址并不会按32bit/64bit对齐，AWTK就踩到这个坑里了，SAFE_HEAP宏有助于发现这个问题。建议定义下列这些宏：

```
-DSAFE_HEAP=1 -DASSERTIONS=1 -DSTACK_OVERFLOW_CHECK=1
```

后来我给AWTK的常量全加上了对齐的属性：

```
#ifdef _MSC_VER
#define TK_CONST_DATA_ALIGN(v) __declspec(align(8)) v
#else
#define TK_CONST_DATA_ALIGN(v) v __attribute__((aligned(8)))
#endif /*_MSC_VER*/
```

```
TK_CONST_DATA_ALIGN(const unsigned char data_a_b_c_any[]) = { 
0x08,0x00,0x00,0x01,0x04,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x61,0x2d,0x62,0x2d,0x63,0x2e,0x61,0x6e,
0x79,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,
0x00,0x00,0x00,0x00,0x61,0x62,0x63,0x0a,0x00,0x00,0x00,0x00,};/*52*/
```

* 5.命令行参数过长的问题

对于一个大型项目，在Windows平台下，命令行参数很容易超长。最简单的办法就是将emcc的参数写入文件中，通过@符合告诉emcc从文件读取。如：

```
emcc -v @args.txt
```

## 二、C语言调用JS的函数

* 1.头文件

包含emscripten.h头文件，它提供了一些方法，让C语言调用JS的函数。

```
#include <emscripten.h>
```

* 2.通过emscripten\_run\_script调用。

如：
```
emscripten_run_script("alert('hi')");
```

* 3.通过EM\_JS/EM\_ASM调用。

如：

```
#include <emscripten.h>

EM_JS(void, call_alert, (), {
  alert('hello world!');
  throw 'all done';
});

int main() {
  call_alert();
  return 0;
}
```

```
#include <emscripten.h>

int main() {
  EM_ASM(
    alert('hello world!');
    throw 'all done';
  );
  return 0;
}
```

* 4. 通过EM\_ASM\_INT子类的宏调用。

这是最快也是最简单的调用方式，AWTK里基本上都是采用这种方式调用的。如：

C端代码：

```
static ret_t vgcanvas_web_save(vgcanvas_t *vgcanvas) {
  int32_t ret = EM_ASM_INT({ return VGCanvas.save(); }, 0); 

  return ret ? RET_OK : RET_FAIL;
}
```

JS端代码：

```
VGCanvas.save = function () {
  VGCanvas.ctx.save();

  return true;
}
```

**传递数值参数也非常简单。**如：

C端代码：

```
static ret_t vgcanvas_web_move_to(vgcanvas_t *vgcanvas, float_t x, float_t y) {
  EM_ASM_INT({ return VGCanvas.moveTo($0, $1); }, x, y);
    
  return RET_OK;
}   
```

JS端代码：

```
VGCanvas.moveTo = function (x, y) {
  VGCanvas.ctx.moveTo(x, y);
  
  return true;
} 
```

**传递字符串参数就麻烦一点了**。如：

C端代码：

```
static ret_t vgcanvas_web_set_text_align(vgcanvas_t *vgcanvas,
                                         const char *text_align) {
  EM_ASM_INT({ return VGCanvas.setTextAlign($0); }, text_align);
  return RET_OK;
} 
```

JS端代码：

```
VGCanvas.setTextAlign = function (value) {
  VGCanvas.ctx.textAlign = pointerToString(value);

  return true;
}
```

字符串参数传递到JS函数里时，JS函数拿到的内存地址的偏移量，需要把它解码出来，生成JS的字符串对象。pointerToString函数是这样实现的：

```
function pointerToString(pointer) {
  return pointer && Module.UTF8ToString(pointer, 1024) || null;
}
```

> Module.UTF8ToString函数需要在前面介绍的EXTRA\_EXPORTED\_RUNTIME\_METHODS中导出才能使用。

AWTK中还用了二进制数据作为参数，网上没有见到相关的例子，只好自己去看代码研究了。AWTK里需要把位图数据(rgba颜色值)，传递到JS中，再设置到画布里。具体做法是这样的：

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

  for(let i = 0; i < size; i++) {
    data[i] = array[i];
  }                                         
  ctx.putImageData(imageData, 0, 0, 0, 0, w, h);

  return true;
}
```

mutableImage.addr是rgba数据的地址，它是用malloc分配出来的，我看了malloc函数的实现，它就相对于Module.HEAP32的字节数偏移量。由于HEAP32是4字节数据，在作为偏移量使用时，需要右移2位：

```
  let start = mutableImage.addr >> 2;
```

再通过subarray从HEAP32中获取这段数据：

```  
  let array = Module.HEAP32.subarray(start, end);
```

另外这里值得一提的是，imageData.data是Int8Array，要转换成Int32Array，可以用下列方式：

```
  let imageData = ctx.getImageData(0, 0, w, h);
  let data = new Int32Array(imageData.data.buffer);
```

按下面这种方式，则是把每一个元素从8bit扩展成32bit了。

```
  let imageData = ctx.getImageData(0, 0, w, h);
  let data = new Int32Array(imageData.data);
```

## 三、JS调用C的函数

