# AWTK-WEB

## 一、介绍

AWTK-WEB让AWTK能够在浏览器中运行，其包括几个方面的意思：

* 1.让用C语言开发的AWTK应用程序，在不需要修改源码的情况下，能在浏览器中运行。

> 这样做的意义主要在于，可以很方便的向客户展示项目。你只需分享一个链接，客户就可以在浏览器中打开，并看到实际的运行效果。

* 2.把AWTK编译成一个JS库，你可以用JS开发AWTK应用程序，并在浏览器中运行。

> AWTK-JS让AWTK支持用JS来开发AWTK应用程序，并在嵌入式系统中运行，但不能在浏览器中运行。而AWTK-WEB则是让AWTK支持用JS来开发AWTK应用程序，并且能够在浏览器中运行(我们尽量保证AWTK-JS和AWTK-WEB对外提供的API保持兼容)。

* 3.AWTK在浏览器中运行是在各种小程序中运行的基础。

在线演示: [http://zlgopen.bceapp.com](http://zlgopen.bceapp.com/)

## 二、目标

AWTK-WEB不是简单的把AWTK编译成JS，让它在浏览器中运行，那样就无法满足一些非功能性的需求。我们把AWTK-WEB当作一个全新平台去移植，并充分考虑WEB平台的特点，有针对性的去实现以下的目标。

* 小。在web上运行的应用程序，体积小是非常重要的，体积越小打开越快，这直接影响用户体验。

> 为了减小代码的体积，AWTK去掉了SDL和stb等库的依赖，尽量使用浏览器本身的功能，这极大程度减小了代码的体积。
>
> 为了减小资源的体积，AWTK的缺省字体使用了浏览器的字体，输入法使用浏览器的输入法。

我们可以对比一下各个GUI的wasm文件的大小。

  | GUI          | wasm大小   |  网址  |
  | --------     | -----:     | :---- |
  | QT           | 9M        |   http://example.qt.io/qt-webassembly/SensorTagDemo/SensorTagDemo.html    |
  | QT           | 3M        |   http://example.qt.io/qt-webassembly/opengl/hellowindow/hellowindow.html    |
  | LittleVG     | 1.3M      |   https://littlevgl.com/demo-basic    |
  | AWTK         | 150K      |   http://zlgopen.bceapp.com/awtk/demos/demoui/index.html    |


* 快。Android手机浏览器性能普遍不高，要到达实用价值，性能优化至关重要。

> AWTK-WEB的窗口动画采用了webGL直接贴图进行优化，在支持WEBGL的浏览器中，窗口动画性能接近原生效果。

* 省电。在手机等电池供电的系统上，省电是必须要考虑的。

> AWTK-WEB启用脏矩形算法，界面不变就不绘制，有变化只绘制变化的区域，这极大的降低了电能的消耗。

* 跨平台。除了在PC的各种浏览器(除老的IE浏览器)上运行，还需要在Android和iOS上运行。AWTK-WEB的基本要求只是浏览器支持HTML5的canvas，所在Chorom、Firefox和IE等主流浏览器，以及目前流行的Android和iOS设备上都能正常运行。

> 在最新的红米4的浏览器中，QT和LittleVG纷纷表示无法运行。


## 三、编译

1.先安装必要的软件包

* [scons](https://scons.org/)
* [python](https://www.python.org/)。
* [emscripten](https://emscripten.org/docs/getting_started/downloads.html#sdk-download-and-install)

> 设置emscripten的环境变量。

2.编译awtk本身

```
git clone https://github.com/zlgopen/awtk.git
cd awtk
scons -j 8
```

3.编译demoui

```
git clone https://github.com/zlgopen/awtk-web.git
cd awtk-web
python build.py ../awtk/demos/demo_ui_web.json all
```

## 四、运行

1.启动web服务器

```
python -m http.server 8080 --directory webroot
```

> 使用其它web服务器均可。

2.用浏览器打开[http://localhost:8080/demoui/index.html](http://localhost:8080/demoui/index.html)

## 五、已知问题

* GIF文件仅在saferi和iOS上工作。
* 只能调用awtk、标准C库，和其它有源代码的库。
* 不支持模态对话框。dialog\_modal不会生效，而dialog\_quit会直接关闭对话框。

## 六、注意事项

* 1. 在Windows下emscripten自带的python环境与系统的python环境有冲突，需要指定python的完整路径。如:

```
C:\Users\user\AppData\Local\Programs\Python\Python37\python.exe build.py ..\awtk\demos\demo_ui_web.json all
```

或

```
.\build.py ..\awtk\demos\demo_ui_web.json all
```

## 七、文档

1.[快速入门](docs/get_started.md)

2.[移植笔记-序](docs/porting_notes_0.md)

3.[移植笔记-基础知识](docs/porting_notes_1.md)



