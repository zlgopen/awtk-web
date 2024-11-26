# AWTK 应用程序

C 语言开发的 AWTK 示例程序，用于生成 WEB 应用程序，演示使用 lib 的方式调用第三方库的函数。

第三方库也需要用 emsdk 编译成 wasm 格式的 .a 文件。如果使用 cmake，可以参考 3rd/foo/CMakeLists.txt

在使用本示例前：

* 先进入 3rd/foo，修改 build.sh，将 emsdk 指向正确的位置；然后运行 build.sh，生成第三方库 libfoo.a
* 修改 build.json，将 linkflags 和 includes 指向正确的路径。
* 后续操作和其它一样。
