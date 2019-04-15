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

TBrowser.isMobile = function () {
    return false;
}

