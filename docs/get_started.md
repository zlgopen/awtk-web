# AWTK-WEB 快速入门

## 一、配置文件格式

目前已经Web和Android等平台的编译配置统一起来，具体格式请参考[特殊平台编译配置](https://github.com/zlgopen/awtk/blob/master/docs/build_config.md)

## 二、构建脚本 build.py 的用法

请参考 README.md

## 三、开发 C 语言版本的 AWTK 应用程序

### 1. 编写代码

用 C 语言开发 [AWTK](https://github.com/zlgopen/awtk) 应用程序然后编译成 WEB 版本，开发流程和以前一样，只是函数入口为 application_init。

如：

```
#include "awtk.h"

static ret_t on_click(void* ctx, event_t* e) {
  log_debug("on_click\n");
  return RET_OK;
}

static ret_t on_long_press(void* ctx, event_t* e) {
  log_debug("on_long_press\n");
  return RET_OK;
}

void application_init() {
  widget_t* win = window_create(NULL, 0, 0, 0, 0);
  widget_t* ok = button_create(win, 0, 0, 0, 0);

  widget_set_text(ok, L"ok");
  widget_set_self_layout_params(ok, "center", "middle", "50%", "30");
  widget_on(ok, EVT_CLICK, on_click, NULL);
  widget_on(ok, EVT_LONG_PRESS, on_long_press, NULL);

  widget_layout(win);
}
```

### 2. 编写配置文件

> 请参考前面关于配置文件的文档。

### 3. 用 build.py 编译。

> 请参考 build.py 脚本的使用方法。

## 四、开发 Javascript 版本的 AWTK 应用程序

### 1. 编写代码

用 Javascript 开发在浏览器上运行的 [AWTK](https://github.com/zlgopen/awtk) 应用程序，和使用 [AWTK-JS](https://github.com/zlgopen/awtk-js)  开发在嵌入式系统上运行的 [AWTK](https://github.com/zlgopen/awtk) 应用程序基本上是一样的，如果注意一些细节，甚至不需要修改代码，即可在两个平台上运行。细节上的不同，后面我们在详细介绍。这里先看个例子：

```
function applicationInit() {
  var win = TWindow.create(null, 0, 0, 0, 0);
  var ok = TButton.create(win, 0, 0, 0, 0);

  ok.setText("ok");
  ok.setSelfLayoutParams("center", "middle", "50%", "30");

  ok.on(TEventType.CLICK, function(evt) {
    var e = TPointerEvent.cast(evt);
    console.log("on click: " + e.x + " " + e.y);

    return TRet.OK;
  });

  win.layout();
}

applicationInit()
```

### 2. 编写配置文件

> 请参考前面关于配置文件的文档。

### 3. 用 build.py 编译。

> 请参考 build.py 脚本的使用方法。

### 四、AWTK-WEB-JS 和 AWTK-JS 不同

两者在 API 上基本上是一样的，但是由于浏览器和 Jerryscript 的差异，导致少量功能无法做到完全一致，需要应用程序自行规避。

* 1.AWTK-WEB-JS 不支持模态对话框。
* 2.AWTK-WEB-JS 中的 print 函数是打印。请使用 console.log 输出调试信息。
* 3.AWTK-WEB-JS 不支持自动回收在 wasm 中分配的对象（如：color/rect/value 等）。如果希望两者通用，请避免使用这类函数。
