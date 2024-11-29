function TBrowser() {}

TBrowser.supportDirtyRect = function () {
  return true;
};

TBrowser.supportWebGL = function () {
  if (TBrowser.config.nowebgl) {
    console.log("WebGL is disabled.");
    return false;
  }

  var canvas = document.createElement("canvas");
  var gl =
    canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

  if (gl && gl instanceof WebGLRenderingContext) {
    return true;
  } else {
    return false;
  }
};

TBrowser.supportWebAssembly = function () {
  if (
    typeof WebAssembly === "object" &&
    typeof WebAssembly.instantiate === "function"
  ) {
    return true;
  } else {
    return false;
  }
};

TBrowser.getDevicePixelRatio = function () {
  const dpr = window.devicePixelRatio || 1;

  return Math.min(2, dpr);
};

TBrowser.adjustCanvasToViewPort = function (canvas) {
  let view = TBrowser.getViewPort();
  let dpr = TBrowser.getDevicePixelRatio();

  let size = {};
  size.width = TBrowser.config.width || view.width;
  size.height = TBrowser.config.height || view.height;

  canvas.width = size.width * dpr;
  canvas.height = size.height * dpr;

  canvas.style.position = "absolute";
  canvas.style.left = "0px";
  canvas.style.top = "0px";
  canvas.style.width = size.width + "px";
  canvas.style.height = size.height + "px";

  return true;
};

TBrowser.createCanvas = function (name, w, h) {
  const canvas = document.createElement("canvas");

  canvas.width = w;
  canvas.height = h;
  canvas.name = name;

  return canvas;
};

TBrowser.createMainCanvas = function () {
  if (!TBrowser.mainCanvas) {
    const canvas = TBrowser.createCanvas("awtk-lcd", 0, 0);

    TBrowser.adjustCanvasToViewPort(canvas);

    TBrowser.mainCanvas = canvas;
    document.body.appendChild(canvas);
  }

  return TBrowser.mainCanvas;
};

TBrowser.createFboCanvas = function () {
  if (!TBrowser.fboCanvas) {
    const canvas = TBrowser.createCanvas("awtk-lcd-fbo", 0, 0);

    TBrowser.adjustCanvasToViewPort(canvas);

    TBrowser.fboCanvas = canvas;
    document.body.appendChild(canvas);
    canvas.hidden = true;
  }

  return TBrowser.fboCanvas;
};

TBrowser.activateCanvas = function (bind_fbo) {
  if (TBrowser.activeCanvas) {
    TBrowser.activeCanvas.hidden = true;
  }

  if (bind_fbo) {
    TBrowser.activeCanvas = TBrowser.fboCanvas;
    console.log(`bind fbo`);
  } else {
    TBrowser.activeCanvas = TBrowser.mainCanvas;
    let ctx = TBrowser.getActiveContext();
    ctx.drawImage(TBrowser.fboCanvas, 0, 0);
    console.log(`unbind fbo`);
  }

  if (TBrowser.activeCanvas) {
    TBrowser.activeCanvas.hidden = false;
  }

  return true;
};

TBrowser.getActiveContext = function () {
  let ctx = null;
  let canvas = TBrowser.activeCanvas;
  if (canvas === TBrowser.mainCanvas) {
    ctx = canvas.getContext("2d");
  } else {
    if (!canvas.ctxwebgl) {
      ctx = CanvasRenderingContext2DWebGL.create(canvas, {});
      canvas.ctxwebgl = ctx;
    }
    ctx = canvas.ctxwebgl;
  }

  return ctx;
};

TBrowser.createOfflineCanvas = function (name, w, h) {
  return TBrowser.createCanvas(name, w, h);
};

TBrowser.createMutableImage = function (name, addr, w, h, line_length, format) {
  const image = TBrowser.createCanvas(name, w, h);

  image.name = name;
  image.addr = addr;
  image.format = format;
  image.line_length = line_length;

  return image;
};

TBrowser.getViewPort = function () {
  let width = 0;
  let height = 0;

  if (window.displayInfo) {
    width = window.displayInfo.width;
    height = window.displayInfo.height;
  } else if (typeof window.innerWidth != "undefined") {
    width = window.innerWidth;
    height = window.innerHeight;
  } else if (
    typeof document.documentElement != "undefined" &&
    typeof document.documentElement.clientWidth != "undefined" &&
    document.documentElement.clientWidth != 0
  ) {
    width = document.documentElement.clientWidth;
    height = document.documentElement.clientHeight;
  } else {
    width = document.getElementsByTagName("body")[0].clientWidth;
    height = document.getElementsByTagName("body")[0].clientHeight;
  }

  return {
    width: width,
    height: height,
  };
};

TBrowser.updateDate = function () {
  TBrowser.date = new Date();
};

TBrowser.getFullYear = function () {
  return TBrowser.date.getFullYear();
};

TBrowser.getMonth = function () {
  return TBrowser.date.getMonth() + 1;
};

TBrowser.getDate = function () {
  return TBrowser.date.getDate();
};

TBrowser.getHours = function () {
  return TBrowser.date.getHours();
};

TBrowser.getMinutes = function () {
  return TBrowser.date.getMinutes();
};

TBrowser.getSeconds = function () {
  return TBrowser.date.getSeconds();
};

TBrowser.getDay = function () {
  return TBrowser.date.getDay();
};

TBrowser.getParam = function (name, defval) {
  let search = window.location.search;

  if (search) {
    let start = search.indexOf(name + "=");

    if (start >= 0) {
      start += name.length + 1;
      let str = search.substring(start);
      let end = str.indexOf("&");

      if (end >= 0) {
        str = str.substring(0, end);
      }

      return str;
    }
  }

  return defval;
};

TBrowser.init = function (rootUri, nonce) {
  var u = navigator.userAgent;
  TBrowser.rootUri = rootUri;
  TBrowser.nonce = nonce;

  TBrowser.ie9 = u.indexOf("MSIE 9.0") >= 0;
  TBrowser.ie10 = u.indexOf("MSIE 10.0") >= 0;
  TBrowser.ie = u.indexOf("MSIE") >= 0 || u.indexOf("Trident") >= 0;
  TBrowser.android = u.indexOf("Android") >= 0 && u.indexOf("Linux") >= 0;
  TBrowser.iPhone = u.indexOf("iPhone") >= 0;
  TBrowser.iPad = u.indexOf("iPad") >= 0;
  TBrowser.blackberry = u.indexOf("BlackBerry") >= 0;
  TBrowser.firefoxMobile =
    u.indexOf("Mobile") >= 0 && u.indexOf("Firefox") >= 0;
  TBrowser.windowPhone = u.indexOf("Windows Phone") >= 0;
  TBrowser.webkit = u.indexOf("WebKit") >= 0;
  TBrowser.weixin = u.indexOf("MicroMessenger") >= 0;
  TBrowser.weibo = u.indexOf("weibo") >= 0;
  TBrowser.qq = u.indexOf("QQ") >= 0;
  TBrowser.linux = u.indexOf("Linux") >= 0;
  TBrowser.windows = u.indexOf("Windows") >= 0;
  TBrowser.macosx = u.indexOf("Mac OS X") >= 0;

  TBrowser.config.width = TBrowser.getParam("width", TBrowser.config.width);
  TBrowser.config.height = TBrowser.getParam("height", TBrowser.config.height);
  TBrowser.config.nowebgl = TBrowser.getParam(
    "nowebgl",
    TBrowser.config.nowebgl
  );
  TBrowser.config.fontScale = TBrowser.getParam(
    "fontScale",
    TBrowser.config.fontScale || 1
  );
  TBrowser.config.defaultFont = TBrowser.getParam(
    "defaultFont",
    TBrowser.config.defaultFont || "sans"
  );
  TBrowser.config.fontOffset = parseInt(
    TBrowser.getParam("fontOffset", TBrowser.config.fontOffset || 0)
  );

  if (!TBrowser.supportWebGL()) {
    TBrowser.getActiveContext = function () {
      return TBrowser.mainCanvas.getContext("2d");
    };

    TBrowser.activateCanvas = function (anim) {
      return true;
    };

    TBrowser.createFboCanvas = function () {
      return null;
    };

    console.log("TBrowser.init: webgl not supported.");
  } else {
    console.log("TBrowser.init: webgl supported.");
  }

  return true;
};

TBrowser.loadAWTK = function () {
  if (TBrowser.supportWebAssembly()) {
    TBrowser.loadScript("js/awtk_asm.js");
  } else {
    TBrowser.loadScript("js/awtk.js");
  }

  return true;
};

TBrowser.isMobile = function () {
  return TBrowser.iPhone || TBrowser.android || TBrowser.windowPhone;
};

TBrowser.loadScript = function (url) {
  var node = document.createElement("script");

  if (TBrowser.nonce) {
    node.setAttribute("nonce", TBrowser.nonce);
  }

  if (TBrowser.rootUri) {
    url = TBrowser.rootUri + "/" + url;
  }

  node.src = url;
  node.onload = function () {
    console.log("loaded: " + url);
  };

  document.head.appendChild(node);

  return true;
};

TBrowser.injectCSS = function (str) {
  var node = document.createElement("style");

  node.innerHTML = str;
  node.onload = function () {
    console.log("load:" + str);
    Awtk.requestRepaint(2);
  };
  document.head.appendChild(node);

  return true;
};

TBrowser.loadFont = function (name, url) {
  let css = `@font-face { 
    font-family: ${name}; 
    src: url('${url}'); 
    }`;

  return TBrowser.injectCSS(css);
};

TBrowser.funcArrary = {};

TBrowser.findArraryItem = function (dic, key) {
  for (var k in dic) {
    if (k == key) {
      return true;
    }
  }
  return false;
};

TBrowser.addFunction = function (func, p) {
  var funcID = Module.addFunction(func, p);
  console.log("addFunction:", funcID);
  if (TBrowser.findArraryItem(TBrowser.funcArrary, funcID)) {
    TBrowser.funcArrary[funcID]++;
  } else {
    TBrowser.funcArrary[funcID] = 1;
  }

  return funcID;
};

TBrowser.releaseFunction = function (funcID) {
  const RESERVED_FUNCTION_POINTERS = 1000;
  if (funcID > 0 && funcID < RESERVED_FUNCTION_POINTERS) {
    if (
      TBrowser.findArraryItem(TBrowser.funcArrary, funcID) &&
      --TBrowser.funcArrary[funcID] <= 0
    ) {
      console.log("removeFunction:", funcID);
      Module.removeFunction(funcID);
      delete TBrowser.funcArrary[funcID];
    }
  } else {
    console.log("not js function:" + funcID);
  }
  return true;
};

TBrowser.readBinary = (url) => {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, false);
  xhr.send(null);
  return new Uint8Array(/** @type{!ArrayBuffer} */ (xhr.response));
};
