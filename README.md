# AWTK-WEB


## 一、介绍

AWTK-WEB让AWTK能够在浏览器中运行，其包括两个方面的意思：

* 1.让用C语言开发的AWTK应用程序，在不需要修改源码的情况下，能在浏览器中运行。

> 这样做的意义主要在于，可以很方便的向客户展示项目。你只需分享一个链接，客户就可以在浏览器中打开，并看到实际的运行效果。

* 2.把AWTK编译成一个JS库，你可以用JS开发AWTK应用程序，并在浏览器中运行。

> AWTK-JS让AWTK支持用JS来开发AWTK应用程序，并在嵌入式系统中运行，但不能在浏览器中运行。而AWTK-WEB则是让AWTK支持用JS来开发AWTK应用程序，并且能够在浏览器中运行(我们尽量保证AWTK-JS和AWTK-WEB对外提供的API保持兼容)。


在线演示: [http://zlgopen.bceapp.com](http://zlgopen.bceapp.com/)

## 二、编译demoui

1.先安装必要的软件包

* [scons](https://scons.org/)
* [python](https://www.python.org/)。
* [nodejs](https://nodejs.org/en/)
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

## 三、运行

1.启动web服务器(需安装nodejs)

```
npm install http-server -g
http-server webroot
```

> 使用其它web服务器均可。

2.用浏览器打开[http://localhost:8080/demoui/index.html](http://localhost:8080/demoui/index.html)

## 四、让自己的app在web中运行

让自己的app在web中运行非常简单，只需编写一个JSON格式的描述文件即可。里面指明项目名、版本号、资源位置和.c文件列表。

> 不需要main函数，应用程序以application_init为入口。 

如：

* awtk-hello的描述文件：

```
{
  "name":"hello",
  "version":"1.0",
  "assets" : "assets",
  "sources":["src/main.c", "src/window1.c"]
}
```

* demoui的描述文件：

```
{
  "name":"demoui",
  "version":"1.0",
  "assets" : "assets",
  "sources":["demo_ui_app.c"]
}
```

然后使用buid.py编译：

```
python build.py your_app_path_your_app.json all
```

生成的文件在webroot目录下，以项目名为名的子目录中，部署的时候直接把该目录拷贝到web服务器上即可。


## 五、已知问题

* 只能调用awtk、标准C库，和其它有源代码的库。
* 不支持模态对话框。dialog\_modal不会生效，而dialog\_quit会直接关闭对话框。
* 不支持GIF文件(正在研究)。
* 不支持颜色选择器(正在研究)。
* 不支持mutable image(正在研究)。
* 加载特殊字体(正在研究)。


## 六、注意事项

* 1. 在Windows下emscripten自带的python环境与系统的python环境有冲突，需要指定python的完整路径。如:

```
C:\Users\user\AppData\Local\Programs\Python\Python37\python.exe build.py ..\awtk\demos\demo_ui_web.json all
```



