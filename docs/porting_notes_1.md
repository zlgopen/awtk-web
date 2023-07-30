# AWTK WEB 版移植笔记-基础

将一个 C 语言写的 hello world 编译成 web 版本是很简单的，网上有大量这样的例子。写这样的例子是必要的，让我们能够快速入门，但是实际项目则要复杂的多，这里会介绍一些 emscripten 的基础知识，同时强调移植 AWTK 过程中遇到的问题，希望能让大家少走弯路。

## 一、命令行参数

* 1.EXPORTED\_FUNCTIONS 用于导出应用程序中 C 的函数供 JS 调用。如：

```
-s EXPORTED_FUNCTIONS="['_awtk_web_init']"
```

函数名前面要加下划线，比如函数名为 awtk\_web\_init，导出的名称则为_awtk\_web\_init。

对于小的项目，导出的函数很少，直接写在命令行也是可以的。对于大的项目，导出的函数很多，应该把内容写到文件中，通过@符合告诉 emcc 从文件中读取导出的函数，这样维护起来会方便很多。如：

```
-s EXPORTED_FUNCTIONS=@configs/export_app_funcs.json
```

configs/export\_app\_funcs.json 的内容：

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

* 2.EXTRA\_EXPORTED\_RUNTIME\_METHODS 用于导出 runtime 中的函数供 JS 调用。如：

```
-s EXTRA_EXPORTED_RUNTIME_METHODS ="['cwrap']"
```

同理，将它的内容放在文件中，也是更可取的方法。如：

```
-s EXTRA_EXPORTED_RUNTIME_METHODS=@configs/export_runtime_funcs.json
```

configs/export\_runtime\_funcs.json 的内容：

```
[
    "ccall",
    "cwrap",
    "addFunction",
    "removeFunction",
    "addOnPostRun",
    "addOnInit",
    "addOnExit",
    "addOnPreMain",
    "UTF8ToString"
]
```

* 3. 调试和优化

对于大的项目，调试版本最好不要加-g 标志，产生的代码实在太大了，可能让浏览器处于假死状态，根本没法调试。用缺省生成的代码调试基本上就 OK 了。

发布版本建议加-Os，代码体积会大大减小，而且它会把数据独立出来，提高加载的速度。

* 4. 调试的宏。

emcc 生成的常量数据的首地址并不会按 32bit/64bit 对齐，AWTK 就踩到这个坑里了，SAFE_HEAP 宏有助于发现这个问题。建议定义下列这些宏：

```
-DSAFE_HEAP=1 -DASSERTIONS=1 -DSTACK_OVERFLOW_CHECK=1
```

后来我给 AWTK 的常量全加上了对齐的属性：

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

* 5. 命令行参数过长的问题

对于一个大型项目，在 Windows 平台下，命令行参数很容易超长。最简单的办法就是将 emcc 的参数写入文件中，通过@符合告诉 emcc 从文件读取。如：

```
emcc -v @args.txt
```

## 二、C 语言调用 JS 的函数

* 1. 头文件

包含 emscripten.h 头文件，它提供了一些方法，让 C 语言调用 JS 的函数。

```
#include <emscripten.h>
```

* 2. 通过 emscripten\_run\_script 调用。

如：
```
emscripten_run_script("alert('hi')");
```

* 3. 通过 EM\_JS/EM\_ASM 调用。

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

* 4. 通过 EM\_ASM\_INT 之类的宏调用。

这是最快也是最简单的调用方式，AWTK 里基本上都是采用这种方式调用的。如：

C 端代码：

```
static ret_t vgcanvas_web_save(vgcanvas_t *vgcanvas) {
  int32_t ret = EM_ASM_INT({ return VGCanvas.save(); }, 0); 

  return ret ? RET_OK : RET_FAIL;
}
```

JS 端代码：

```
VGCanvas.save = function () {
  VGCanvas.ctx.save();

  return true;
}
```

**传递数值参数也非常简单。**如：

C 端代码：

```
static ret_t vgcanvas_web_move_to(vgcanvas_t *vgcanvas, float_t x, float_t y) {
  EM_ASM_INT({ return VGCanvas.moveTo($0, $1); }, x, y);
    
  return RET_OK;
}   
```

JS 端代码：

```
VGCanvas.moveTo = function (x, y) {
  VGCanvas.ctx.moveTo(x, y);
  
  return true;
} 
```

**传递字符串参数就麻烦一点了**。如：

C 端代码：

```
static ret_t vgcanvas_web_set_text_align(vgcanvas_t *vgcanvas,
                                         const char *text_align) {
  EM_ASM_INT({ return VGCanvas.setTextAlign($0); }, text_align);
  return RET_OK;
} 
```

JS 端代码：

```
VGCanvas.setTextAlign = function (value) {
  VGCanvas.ctx.textAlign = pointerToString(value);

  return true;
}
```

字符串参数传递到 JS 函数里时，JS 函数拿到的内存地址的偏移量，需要把它解码出来，生成 JS 的字符串对象。pointerToString 函数是这样实现的：

```
function pointerToString(pointer) {
  return pointer && Module.UTF8ToString(pointer, 1024) || null;
}
```

> Module.UTF8ToString 函数需要在前面介绍的 EXTRA\_EXPORTED\_RUNTIME\_METHODS 中导出才能使用。

AWTK 中还用了二进制数据作为参数，网上没有见到相关的例子，只好自己去看代码研究了。AWTK 里需要把位图数据 (rgba 颜色值），传递到 JS 中，再设置到画布里。具体做法是这样的：

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

mutableImage.addr 是 rgba 数据的地址，它是用 malloc 分配出来的，我看了 malloc 函数的实现，它就相对于 Module.HEAP32 的字节数偏移量。由于 HEAP32 是 4 字节数据，在作为偏移量使用时，需要右移 2 位：

```
  let start = mutableImage.addr >> 2;
```

再通过 subarray 从 HEAP32 中获取这段数据：

```  
  let array = Module.HEAP32.subarray(start, end);
```

另外这里值得一提的是，imageData.data 是 Int8Array，要转换成 Int32Array，可以用下列方式：

```
  let imageData = ctx.getImageData(0, 0, w, h);
  let data = new Int32Array(imageData.data.buffer);
```

按下面这种方式，则是把每一个元素从 8bit 扩展成 32bit 了。

```
  let imageData = ctx.getImageData(0, 0, w, h);
  let data = new Int32Array(imageData.data);
```

## 三、JS 调用 C 的函数

要在 JS 里调用 C 的函数，一般用 Module.cwrap 包装一下，它需要提供以下参数：

* 函数名
* 返回值
* 参数列表

参数和返回值的类型有：

* number 
* string
* array

如：

```
Awtk._onImCommit = Module.cwrap('awtk_web_on_im_commit', 'number', ['string', 'number']);

Awtk.onImCommit = function (text, timestamp) {
  return Awtk._onImCommit(text, timestamp);
}
```

常见的用法的在文档中都有清楚的说明，这里不再赘述。如果参数是一个回调函数，就稍微麻烦一点。

* 1. 要导出 addFunction/removeFunction（参考前面）

* 2. 要指定参数 RESERVED\_FUNCTION\_POINTERS。

如：

```
-s RESERVED_FUNCTION_POINTERS=1000
```

* 3. 调用 addFunction 把函数转成一个 number，再作为参数传入。

如：

```
widget_on(this.nativeObj, type, Module.addFunction(wrap_on_event(on_event)), ctx);

```

最麻烦的是函数用完之后，要调用 removeFunction 把函数从表里移出，对于同步调用的回调函数这没有什么问题，但是对异步调用函数，特别是多次调用的异步函数，什么时候可以移出只有 C 代码里才知道，所以需要在 C 代码里添加处理。如：

```
#ifdef AWTK_WEB_JS
#include <emscripten.h>
#endif /*AWTK_WEB_JS*/

static ret_t emitter_item_destroy(emitter_item_t* iter) {
  if (iter->on_destroy) {
    iter->on_destroy(iter);
  }

#ifdef AWTK_WEB_JS
  EM_ASM_INT({ return TBrowser.releaseFunction($0); }, iter->handler);
#endif /*AWTK_WEB_JS*/

  memset(iter, 0x00, sizeof(emitter_item_t));
  TKMEM_FREE(iter);

  return RET_OK;
}
```
