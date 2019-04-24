function TBrowser() {

}

TBrowser.getDevicePixelRatio = function () {
  return window.devicePixelRatio || 1;
}

TBrowser.adjustCanvas = function (canvas) {
  let view = TBrowser.getViewPort();
  let dpr = TBrowser.getDevicePixelRatio();

  canvas.width = view.width * dpr;
  canvas.height = view.height * dpr;

  canvas.style.position = 'absolute';
  canvas.style.left = "0px";
  canvas.style.top = "0px";
  canvas.style.width = view.width + "px";
  canvas.style.height = view.height + "px";

}

TBrowser.supportWebAssembly = function () {
  if (typeof WebAssembly === "object" &&
    typeof WebAssembly.instantiate === "function") {
    return true;
  } else {
    return false;
  }
}

TBrowser.getViewPort = function () {
  let width = 0;
  let height = 0;

  if (window.displayInfo) {
    width = window.displayInfo.width;
    height = window.displayInfo.height;
  } else if (typeof window.innerWidth != 'undefined') {
    width = window.innerWidth;
    height = window.innerHeight;
  } else if (typeof document.documentElement != 'undefined' &&
    typeof document.documentElement.clientWidth !=
    'undefined' && document.documentElement.clientWidth != 0) {
    width = document.documentElement.clientWidth;
    height = document.documentElement.clientHeight;
  } else {
    width = document.getElementsByTagName('body')[0].clientWidth;
    height = document.getElementsByTagName('body')[0].clientHeight;
  }

  return {
    width: width,
    height: height
  };
}

TBrowser.updateDate = function () {
  TBrowser.date = new Date();
}

TBrowser.getFullYear = function () {
  return TBrowser.date.getFullYear();
}

TBrowser.getMonth = function () {
  return TBrowser.date.getMonth() + 1;
}

TBrowser.getDate = function () {
  return TBrowser.date.getDate();
}

TBrowser.getHours = function () {
  return TBrowser.date.getHours();
}

TBrowser.getMinutes = function () {
  return TBrowser.date.getMinutes();
}

TBrowser.getSeconds = function () {
  return TBrowser.date.getSeconds();
}

TBrowser.getDay = function () {
  return TBrowser.date.getDay();
}

TBrowser.getParam = function (name, defval) {
  let search = window.location.search;

  if (search) {
    let start = search.indexOf(name + '=');

    if (start >= 0) {
      start += name.length + 1;
      let str = search.substring(start);
      let end = str.indexOf('&');

      if (end >= 0) {
        str = str.substring(0, end);
      }

      return str;
    }
  }

  return defval;
}

TBrowser.init = function () {
  var u = navigator.userAgent;

  TBrowser.ie9 = u.indexOf('MSIE 9.0') >= 0;
  TBrowser.ie10 = u.indexOf('MSIE 10.0') >= 0;
  TBrowser.ie = u.indexOf('MSIE') >= 0 || u.indexOf('Trident') >= 0;
  TBrowser.android = u.indexOf('Android') >= 0 && u.indexOf('Linux') >= 0;
  TBrowser.iPhone = u.indexOf('iPhone') >= 0;
  TBrowser.iPad = u.indexOf('iPad') >= 0;
  TBrowser.blackberry = u.indexOf('BlackBerry') >= 0;
  TBrowser.firefoxMobile = u.indexOf('Mobile') >= 0 && u.indexOf('Firefox') >= 0;
  TBrowser.windowPhone = u.indexOf('Windows Phone') >= 0;
  TBrowser.webkit = u.indexOf("WebKit") >= 0;
  TBrowser.weixin = u.indexOf("MicroMessenger") >= 0;
  TBrowser.weibo = u.indexOf("weibo") >= 0;
  TBrowser.qq = u.indexOf("QQ") >= 0;
  TBrowser.linux = u.indexOf("Linux") >= 0;
  TBrowser.windows = u.indexOf("Windows") >= 0;
  TBrowser.macosx = u.indexOf("Mac OS X") >= 0;
}

TBrowser.isMobile = function () {
  return TBrowser.iPhone || TBrowser.android || TBrowser.windowPhone;
}


TBrowser.init();