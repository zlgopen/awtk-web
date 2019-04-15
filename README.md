# AWTK-WEB

> 本项目处于起步阶段，有兴趣的朋友可以关注。

## 介绍

AWTK-WEB让AWTK能够在浏览器中运行，其包括两个方面的意思：

* 1.让用C语言开发的AWTK应用程序，在不需要修改源码的情况下，能在浏览器中运行。

> 这样做的意义主要在于，可以很方便的向客户展示项目。你只需分享一个链接，客户就可以在浏览器中打开，并看到实际的运行效果。

* 2.把AWTK编译成一个JS库，你可以用JS开发AWTK应用程序，并在浏览器中运行。

> AWTK-JS让AWTK支持用JS来开发AWTK应用程序，并在嵌入式系统中运行，但不能在浏览器中运行。而AWTK-WEB则是让AWTK支持用JS来开发AWTK应用程序，并且能够在浏览器中运行(我们尽量保证AWTK-JS和AWTK-WEB对外提供的API保持兼容)。

## 编译

1.先[安装emscripten](https://emscripten.org/docs/getting_started/downloads.html#sdk-download-and-install)，并设置环境变量。


2.编译

```
python build.py ../awtk/demos/demo_ui_web.json all
```

## 运行

1.启动web服务器(需安装nodejs)

```
npm install http-server -g
http-server webroot
```

2.用浏览器打开[http://localhost:8080/demoui/index.html](http://localhost:8080/demoui/index.html)

## 参考资源

* http://openwares.net/2018/11/29/webassembly_cwrap_bigstring/
* https://www.cntofu.com/book/150/zh/ch2-c-js/ch2-07-ccall-cwrap.md
