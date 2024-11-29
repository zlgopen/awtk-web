function Awtk() {}

function downloadMultipleBinaryFiles(files, onAllDone, onFail) {
  var totalFiles = files.length;
  var loadedFiles = 0;
  var fileContents = [];

  function handleFileLoad(event) {
    var xhr = event.target;
    if (xhr.readyState === XMLHttpRequest.DONE) {
      loadedFiles++;
      if (xhr.status === 200) {
        fileContents.push({
          url: xhr.responseURL,
          data: new Uint8Array(/** @type{!ArrayBuffer} */ (xhr.response)),
        });
      } else {
        onFail(xhr.statusText);
      }

      if (loadedFiles === totalFiles) {
        onAllDone(fileContents);
      }
    }
  }

  for (var i = 0; i < totalFiles; i++) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", files[i], true);
    xhr.responseType = "arraybuffer";
    xhr.onload = handleFileLoad;
    xhr.onerror = function () {
      onFail(xhr.statusText);
    };
    xhr.send();
  }
}

function copyArrayToMemory(array) {
  var pointer = Module._malloc(array.length);
  Module.HEAPU8.set(array, pointer);
  return pointer;
}

function freeMemory(pointer) {
  Module._free(pointer);
}

Awtk.init = function () {
  Awtk._init = Module.cwrap("awtk_web_init", "number", [
    "number",
    "number",
    "number",
    "number",
  ]);
  Awtk._deinit = Module.cwrap("awtk_web_deinit", "number", []);
  Awtk._mainLoopStep = Module.cwrap("awtk_web_main_loop_step", "number", [
    "number",
  ]);
  Awtk._requestRepaint = Module.cwrap("awtk_web_request_repaint", "number", [
    "number",
  ]);

  Awtk._onImCommit = Module.cwrap("awtk_web_on_im_commit", "number", [
    "string",
    "number",
  ]);
  Awtk._onKeyDown = Module.cwrap("awtk_web_on_key_down", "number", [
    "number",
    "number",
  ]);
  Awtk._onKeyUp = Module.cwrap("awtk_web_on_key_up", "number", [
    "number",
    "number",
  ]);
  Awtk._onWheel = Module.cwrap("awtk_web_on_wheel", "number", [
    "number",
    "number",
  ]);

  Awtk._onPointerDown = Module.cwrap("awtk_web_on_pointer_down", "number", [
    "number",
    "number",
    "number",
  ]);
  Awtk._onPointerMove = Module.cwrap("awtk_web_on_pointer_move", "number", [
    "number",
    "number",
    "number",
  ]);
  Awtk._onPointerUp = Module.cwrap("awtk_web_on_pointer_up", "number", [
    "number",
    "number",
    "number",
  ]);
  Awtk._onTouch = Module.cwrap("awtk_web_on_touch", "number", [
    "number",
    "number",
    "number",
    "number",
    "number",
  ]);

  AssetsManager.preloadFonts();
  EventsSource.init(document.getElementById("awtk-lcd"));

  let loading = document.getElementById("loading");

  if (loading) {
    loading.remove();
  }

  function onAllDone(fileContents) {
    if (fileContents.length == 2) {
      Awtk.romfsHeaderData = copyArrayToMemory(fileContents[0].data);
      const romfsHeaderSize = fileContents[0].data.length;
      Awtk.romfsBodyData = copyArrayToMemory(fileContents[1].data);
      const romfsBodySize = fileContents[1].data.length;

      Awtk._init(
        Awtk.romfsHeaderData,
        romfsHeaderSize,
        Awtk.romfsBodyData,
        romfsBodySize
      );
    } else {
      Awtk._init(0, 0, 0, 0);
    }
  }
  function onFail(errorMessage) {
    console.error("文件下载失败:", errorMessage);
  }

  let headerURL = "data/romfs.header";
  if (TBrowser.rootUri) {
    headerURL = TBrowser.rootUri + "/" + headerURL;
  }
  let bodyURL = "data/romfs.body";
  if (TBrowser.rootUri) {
    bodyURL = TBrowser.rootUri + "/" + bodyURL;
  }

  if (TBrowser.config && TBrowser.config.romfs) {
    downloadMultipleBinaryFiles([headerURL, bodyURL], onAllDone, onFail);
  } else {
    Awtk._init(0, 0, 0, 0);
  }

  return 0;
};

Awtk.deinit = function () {
  if (Awtk.romfsHeaderData) {
    freeMemory(Awtk.romfsHeaderData);
  }

  if (Awtk.romfsBodyData) {
    freeMemory(Awtk.romfsBodyData);
  }
  return Awtk._deinit();
};

Awtk.run = function () {
  return Awtk._run();
};

Awtk.mainLoopStep = function (timestamp) {
  return Awtk._mainLoopStep(timestamp);
};

Awtk.requestRepaint = function (reason) {
  return Awtk._requestRepaint(reason);
};

Awtk.mainLoopStep = function (timestamp) {
  return Awtk._mainLoopStep(timestamp);
};

Awtk.onKeyDown = function (key, timestamp) {
  return Awtk._onKeyDown(key, timestamp);
};

Awtk.onKeyUp = function (key, timestamp) {
  return Awtk._onKeyUp(key, timestamp);
};

Awtk.onImCommit = function (text, timestamp) {
  return Awtk._onImCommit(text, timestamp);
};

Awtk.onWheel = function (delta, timestamp) {
  return Awtk._onWheel(delta, timestamp);
};

Awtk.onPointerDown = function (x, y, timestamp) {
  return Awtk._onPointerDown(x, y, timestamp);
};

Awtk.onPointerMove = function (x, y, timestamp) {
  return Awtk._onPointerMove(x, y, timestamp);
};

Awtk.onPointerUp = function (x, y, timestamp) {
  return Awtk._onPointerUp(x, y, timestamp);
};

Awtk.onTouch = function (type, id, x, y, timestamp) {
  return Awtk._onTouch(type, id, x, y, timestamp);
};

window.isLoaded = false;
window.onload = function () {
  window.isLoaded = true;
};

var Module = typeof Module !== "undefined" ? Module : {};
Module.onRuntimeInitialized = function () {
  if (!window.isLoaded) {
    window.onload = function () {
      window.isLoaded = true;
      Awtk.init();
    };
  } else {
    Awtk.init();
  }
};

window.onunload = function () {
  Awtk.deinit();
};
