## 新版改动

### 改用 cmake 编译 c/c++代码。

* 生成的代码更小，加载速度快。
* 可以增量编译，不用每次都重新编译所有代码。
* 编译脚本容易维护，AWTK-iOS/AWTK-Android/AWTK-HarmonyOS/AWTK-Web 之间共享大部分编译脚本。

### js 代码分成 5 个文件

分开之后，在开发 JS 具有更强的灵活性，可以只更新资源或应用程序的代码。

* 资源描述文件：js/assets_web.js
* awtk 的 js 文件： js/awtk_web.js
* awtk c/c++ 代码生成的 js 文件： js/awtk_asm.wasm

> 下面文件仅在 app_type 为 js 时有效

* awtk c/c++ 代码导出的 js API 文件： awtk_api.js
* 应用程序的 js 文件 app.js

### 测试与发布

* build 为编译的临时目录，如果需要调试，可以将 web 服务的根目录指向 build。

> 用下面的脚本启动 web 服务，自动将 web 服务的根目录指向 build。

```sh
./start_web_debug.sh
```

* webroot 为生成的 web 服务的根目录，可以直接用于发布。

> 用下面的脚本启动 web 服务，自动将 web 服务的根目录指向 webroot。

```sh
./start_web.sh 
```

### URL 说明

* index.html 为 demo 的入口，在指定范围内显示界面。
* app.html 为 demo 的入口，满窗口显示界面。
* simulator.html 为 demo 的入口，在模拟器中显示界面。
