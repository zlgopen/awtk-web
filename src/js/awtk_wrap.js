function Awtk() {

}

Awtk.init = function () {
  Awtk._init = Module.cwrap('awtk_web_init', 'number', []);
  Awtk._deinit = Module.cwrap('awtk_web_deinit', 'number', []);
  Awtk._mainLoopStep = Module.cwrap('awtk_web_main_loop_step', 'number', ['number']);

  Awtk._onImCommit = Module.cwrap('awtk_web_on_im_commit', 'number', ['string', 'number']);
  Awtk._onKeyDown = Module.cwrap('awtk_web_on_key_down', 'number', ['number', 'number']);
  Awtk._onKeyUp = Module.cwrap('awtk_web_on_key_up', 'number', ['number', 'number']);
  Awtk._onWheel = Module.cwrap('awtk_web_on_wheel', 'number', ['number', 'number']);

  Awtk._onPointerDown = Module.cwrap('awtk_web_on_pointer_down', 'number',
    ['number', 'number', 'number']);
  Awtk._onPointerMove = Module.cwrap('awtk_web_on_pointer_move', 'number',
    ['number', 'number', 'number']);
  Awtk._onPointerUp = Module.cwrap('awtk_web_on_pointer_up', 'number',
    ['number', 'number', 'number']);

  EventsSource.init(document.getElementById("awtk-lcd"))

  return Awtk._init();
}

Awtk.deinit = function () {
  return Awtk._deinit();
}

Awtk.run = function () {
  return Awtk._run();
}

Awtk.mainLoopStep = function (timestamp) {
  return Awtk._mainLoopStep(timestamp);
}

Awtk.mainLoopStep = function (timestamp) {
  return Awtk._mainLoopStep(timestamp);
}

Awtk.onKeyDown = function (key, timestamp) {
  return Awtk._onKeyDown(key, timestamp);
}

Awtk.onKeyUp = function (key, timestamp) {
  return Awtk._onKeyUp(key, timestamp);
}

Awtk.onImCommit = function (text, timestamp) {
  return Awtk._onImCommit(text, timestamp);
}

Awtk.onWheel = function (delta, timestamp) {
  return Awtk._onWheel(delta, timestamp);
}

Awtk.onPointerDown = function (x, y, timestamp) {
  return Awtk._onPointerDown(x, y, timestamp);
}

Awtk.onPointerMove = function (x, y, timestamp) {
  return Awtk._onPointerMove(x, y, timestamp);
}

Awtk.onPointerUp = function (x, y, timestamp) {
  return Awtk._onPointerUp(x, y, timestamp);
}

var Module = typeof Module !== 'undefined' ? Module : {};
Module.onRuntimeInitialized = function () {
  Awtk.init();
}

window.onunload = function() {
  Awtk.deinit();
}
