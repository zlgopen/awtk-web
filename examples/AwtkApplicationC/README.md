# AWTK 应用程序

## 准备

获取 awtk 并编译，可以通过以下两种方法：

1. 安装 [AWStudio](https://awtk.zlg.cn/awstudio/download.html)

安装完 AWStudio 后，打开 AWTK Designer 后新建或打开一个项目，在插件管理页面的已安装列表可以看到AWTK插件，选择编译或重新编译即可。

2. 前往 GitHub 获取

打开 Git Bash，执行如下命令：

```
git clone https://github.com/zlgopen/awtk.git
cd awtk; scons; cd -
```

## 运行

1. 编译

```
scons
```

2. 生成项目的资源文件

```
python ./scripts/update_res.py all
```

3. 运行

```
./bin/demo
```

## FAQ

### 设置 APP 运行时是否显示控制台窗口

如果 Windows 平台不想在运行程序时弹出控制台窗口，请在当前项目目录下的 `src/main.c` 文件中添加宏定义，如下所示：

```c
#define APP_ENABLE_CONSOLE FALSE
```

> 该定义需要在`#include "awtk_main.inc"`前添加。

### 设置 APP 标题栏的标题

如果需要修改 APP 标题栏的标题（运行程序时窗口左上角显示的名称），请在当前项目目录下的 `src/main.c` 添加宏定义，例如：

```c
#define APP_NAME "HelloWorld"
```

> 该定义需要在`#include "awtk_main.inc"`前添加。

### 设置 APP 可执行文件的名称

如果需要修改生成的可执行文件名称，请修改`src/SConscript`文件里的内容，如下所示

```python
env.Program(os.path.join(BIN_DIR, 'HelloWorld'), sources, LIBS = env['LIBS'])
```

将上述代码中的"HelloWorld"修改成想要的名称再进行编译即可。

### 设置 APP 依赖的库

如果需要设置依赖的库，可以打开项目目录中的`Sconstruct`文件，修改 DEPENDS_LIBS。关于 DEPENDS_LIBS 的更多信息，请参阅 [如何添加第三方库](http://awtk.zlg.cn/docs/awtk_docs/HowTo/how_to_use_3rd_libs.html)。

### 设置 APP 的图标

如果需要修改应用程序的图标，有两种方法（只适用于 Windows 平台）：

1. 用 VC 创建的 .res 文件代替 当前依赖的 awtk 的SDK 包中的 `awtk/win32_res`里的 awtk.res 文件；
2. 用 [ResEdit](http://rsdt.free.fr/ResEdit-x64.7z) 直接编辑上述文件。

**1. 生成兼容 [mingw](https://sourceforge.net/projects/mingw-w64) 的 res**

1. awtk.rc 转为 utf8（或者 utf8 with BOM） 的编码；
2. 注释 rc 文件中的 #include "targetver.h" 代码；
3. windres 工具重新导出 res 文件。（windres 是 mingw 提供的 exe）

```bash
windres awtk.rc -O coff awtk.res
```

**2. 生成兼容 mingw 的 x86 格式 res**

步骤与上一小节一致，但最后使用 windres 工具导出 res 文件时，需要加上 `--target=pe-i386` 参数，命令如下：

```bash
windres awtk.rc -O coff awtk_x86.res --target=pe-i386
```

### scripts目录的文件介绍

在`scripts`目录下，存放着几个脚本，下面简单介绍一下几个脚本的作用。

| 文件                                         | 作用                                                         |
| -------------------------------------------- | ------------------------------------------------------------ |
| [update_res.py](./scripts/update_res.py)     | 用于打包资源，使用方法可以查看该目录下的 [README.md](./scripts/README.md) 文档。 |
| [awtk_locator.py](./scripts/awtk_locator.py) | 帮助搜索依赖的 AWTK，更多信息请参阅 [如何查找AWTK SDK](http://awtk.zlg.cn/docs/awtk_docs/FAQ/2.AWTK%20Designer.html#编译项目时-是如何搜索awtk-sdk的-搜索的顺序是什么样的)。 |
| [app_helper.py](./scripts/app_helper.py)     | 帮助加载 AWTK 应用的公共编译参数，完成编译设置，以及编译 APP 依赖的库。 |
| [release.py](./scripts/release.py)           | 用于生成发布包，执行程序后会在项目目录生成 release 文件夹。  |

