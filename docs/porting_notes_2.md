# AWTK WEB 版移植笔记-字体

完整的中文字体至少得两三兆，如果编译 WEB 版本时，要带一个完整的中文字体文件，那资源的体积就没法容忍了。解决这个问题的唯一办法就是，缺省字体使用浏览器自带的字体，只有特殊字体才使用应用程序自己的字体。

缺省字体使用浏览器自带的字体的前提是，不能使用 SDL 来渲染，因为把 SDL 转换成 WEB 版本后，没法修改里面的代码去使用浏览器的字体。幸好 [AWTK](https://github.com/zlgopen/awtk) 在设计之初，就采用了兼容 HTML5 Canvas 的 2D API，所以渲染这一块我们完全避开了 SDL，而采用 HTML5 Canvas 的 2D API。

这样，只需要在实现 VGCanvas.setFont 函数时，稍作处理即可：如果是缺省字体，我们就用配置中指定的字体或 sans 字体。

```
VGCanvas.setFont = function (name, size) {
  let fontName = pointerToString(name);
  let fontSize = Math.round(size || 18) + "px ";

  if (!(fontName) || fontName.indexOf('default') == 0) {
    fontName = TBrowser.config.defaultFont || 'sans';
  }

  VGCanvas.ctx.font = fontSize + fontName;

  return true;
}
```

特殊字体通常用来显示一些具有艺术效果的数字和字母，这些字体浏览器是通常没有的，需要使用应用程序自带的。幸好这些字体体积不大，不会有什么大的问题。

在初始化时，我们预先加载这些字体，以便应用程序尽早可以使用：

```
AssetsManager.preloadFonts = function () {
  const fonts = g_awtk_assets['font'];
  if(fonts && fonts.length > 0) {
    fonts.forEach(function(iter){
      if(iter.name.indexOf('default') != 0) {
        TBrowser.loadFont(iter.name, iter.uri);    
      }   
    }); 
  }

  return true;
}
```

在浏览器中加载自己的 TTF 字体很简单，注入一段 CSS 到浏览器中即可：

```
TBrowser.injectCSS = function (str) {
  var node = document.createElement('style');

  node.innerHTML = str;
  node.onload = function() {
    console.log('load:' + str);
    Awtk.requestRepaint(2);
  }
  document.head.appendChild(node);

  return true;
}

TBrowser.loadFont = function (name, url) {
  let css = `@font-face {
    font-family: ${name};
    src: url('${url}');
    }`;

  return TBrowser.injectCSS(css);
}
```

font-family 就是字体的名称，[AWTK](https://github.com/zlgopen/awtk) 的应用程序还是按原来的方式使用字体，不需要做任何修改。

> 其它的 GUI 的 WEB 版本，基本上都使用了 SDL 进行渲染，即使只是演示英文版，体积已经是 AWTK 的数十倍了，要是加上中文字体那就更惨不忍睹了。
> 

在 CSS 加载完成后，调用 Awtk.requestRepaint 重绘界面。

> 其实我不太确定 CSS 加载完成时字体是否加载完成，主要是也没找到字体加载完成的事件，暂时先这样吧。
