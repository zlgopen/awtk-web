let gAwtkCanvasInfo = {};

function awtkCanvasInit() {
  var canvas = document.getElementById('awtk-lcd');

  gAwtkCanvasInfo.canvas = canvas;
  gAwtkCanvasInfo.ctx = canvas.getContext('2d'); 

  console.log("awtkCanvasInit");

  return true;
}

function awtkCanvasCreateFBO() {
  let canvas = gAwtkCanvasInfo.canvas; 
  let fbo = document.createElement("canvas");

  fbo.name="fbo";
  fbo.width = canvas.width;
  fbo.height = canvas.height;
  
  return imageCacheAddImage(fbo);
}

function awtkCanvasDestroyFBO(id) {
  imageCacheRemoveImage(id);

  return true;
}

function awtkCanvasBindFBO(id) {
  let fbo = imageCacheGetImage(id);

  gAwtkCanvasInfo.ctx = fbo.getContext('2d'); 

  return true;
}

function awtkCanvasUnbindFBO(id) {
  let canvas = gAwtkCanvasInfo.canvas; 

  gAwtkCanvasInfo.ctx = canvas.getContext('2d'); 

  return true;
}

function awtkCanvasGetWidth() {
  return gAwtkCanvasInfo.canvas.width;
}

function awtkCanvasGetHeight() {
  return gAwtkCanvasInfo.canvas.height;
}

function awtkCanvasGetDevicePixelRatio() {
  return window.devicePixelRatio;
}

function awtkCanvasSave() {
  gAwtkCanvasInfo.ctx.save();

  return true;
}

function awtkCanvasRestore() {
  gAwtkCanvasInfo.ctx.restore();

  return true;
}

function awtkCanvasSetMitterLimit(value) {
  gAwtkCanvasInfo.ctx.miterLimit = value;

  return true;
}

function awtkCanvasSetLineJoint(value) {
  gAwtkCanvasInfo.ctx.lineJoin = value;

  return true;
}

function awtkCanvasSetLineCap(value) {
  gAwtkCanvasInfo.ctx.lineCap = value;

  return true;
}

function awtkCanvasSetStrokeColor(value) {
  gAwtkCanvasInfo.ctx.strokeStyle = pointerToString(value);

  return true;
}

function awtkCanvasSetFillColor(value) {
  gAwtkCanvasInfo.ctx.fillStyle = pointerToString(value);

  return true;
}

function awtkCanvasSetGlobalAlpha(value) {
  gAwtkCanvasInfo.ctx.globalAlpha = value;

  return true;
}

function awtkCanvasSetLineWidth(value) {
  gAwtkCanvasInfo.ctx.lineWidth = value;

  return true;
}

function awtkCanvasFill() {
  gAwtkCanvasInfo.ctx.fill();

  return true;
}

function awtkCanvasStroke() {
  gAwtkCanvasInfo.ctx.stroke();

  return true;
}

function awtkCanvasBeginPath() {
  gAwtkCanvasInfo.ctx.beginPath();

  return true;
}

function awtkCanvasClosePath() {
  gAwtkCanvasInfo.ctx.closePath();

  return true;
}

function awtkCanvasMoveTo(x, y) {
  gAwtkCanvasInfo.ctx.moveTo(x, y);

  return true;
}

function awtkCanvasLineTo(x, y) {
  gAwtkCanvasInfo.ctx.lineTo(x, y);

  return true;
}

function awtkCanvasQuadTo(cpx, cpy, x, y) {
  gAwtkCanvasInfo.ctx.quadraticCurveTo(cpx, cpy, x, y);

  return true;
}

function awtkCanvasBezierTo(cp1x, cp1y, cp2x, cp2y, x, y) {
  gAwtkCanvasInfo.ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);

  return true;
}

function awtkCanvasArcTo(x1, y1, x2, y2, r) {
  gAwtkCanvasInfo.ctx.arcTo(x1, y1, x2, y2, r);

  return true;
}

function awtkCanvasArc(x, y, r, start, end, ccw) {
  gAwtkCanvasInfo.ctx.arc(x, y, r, start, end, ccw);

  return true;
}

function awtkCanvasRotate(rad) {
  gAwtkCanvasInfo.ctx.rotate(rad);

  return true;
}

function awtkCanvasScale(x, y) {
  gAwtkCanvasInfo.ctx.scale(x, y);

  return true;
}

function awtkCanvasTranslate(x, y) {
  gAwtkCanvasInfo.ctx.translate(x, y);

  return true;
}

function awtkCanvasIsPointIntPath(x, y) {
  return gAwtkCanvasInfo.ctx.isPointInPath(x, y);
}

function awtkCanvasTransform(a, b, c, d, e, f) {
  gAwtkCanvasInfo.ctx.transform(a, b, c, d, e, f);

  return true;
}

function awtkCanvasSetTransform(a, b, c, d, e, f) {
  gAwtkCanvasInfo.ctx.setTransform(a, b, c, d, e, f);

  return true;
}

function awtkCanvasEllipse(x, y, rx, ry) {
  gAwtkCanvasInfo.ctx.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2);

  return true;
}

function awtkCanvasRoundRect(x, y, w, h, radius) {
  var r = x + w;
  var b = y + h;
  let ctx = gAwtkCanvasInfo.ctx;

  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(r - radius, y);
  ctx.quadraticCurveTo(r, y, r, y + radius);
  ctx.lineTo(r, y + h - radius);
  ctx.quadraticCurveTo(r, b, r - radius, b);
  ctx.lineTo(x + radius, b);
  ctx.quadraticCurveTo(x, b, x, b - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);

  return true;
}

function awtkCanvasClipRect(x, y, w, h) {
  gAwtkCanvasInfo.ctx.beginPath();
  gAwtkCanvasInfo.ctx.rect(x, y, w, h);
  gAwtkCanvasInfo.ctx.clip();
  gAwtkCanvasInfo.ctx.beginPath();

  return true;
}

function awtkCanvasSetFont(name, size) {
  let font = Math.round(size) + "px " + pointerToString(name);
  gAwtkCanvasInfo.ctx.font = font;

  return true;
}

function awtkCanvasSetTextAlign(value) {
  gAwtkCanvasInfo.ctx.textAlign = pointerToString(value);

  return true;
}

function awtkCanvasSetTextBaseline(value) {
  gAwtkCanvasInfo.ctx.textBaseline = pointerToString(value);

  return true;
}

function awtkCanvasFillText(text, x, y, max_width) {
  let str = pointerToString(text);
  gAwtkCanvasInfo.ctx.fillText(str, x, y, max_width);

  return true;
}

function awtkCanvasMeasureText(text) {
  let str = pointerToString(text);
  
  let width = gAwtkCanvasInfo.ctx.measureText(str).width;

  return Math.round(width);
}

function awtkCanvasDrawImage(id, sx, sy, sw, sh, dx, dy, dw, dh) {
  let image = imageCacheGetImage(id);
  gAwtkCanvasInfo.ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);

  return true;
}

function awtkCanvasSetFillLinearGradient(sx, sy, ex, ey, scolor, ecolor) {
  let startColor = pointerToString(scolor);
  let endColor = pointerToString(ecolor);
  let ctx = gAwtkCanvasInfo.ctx;

  grd = ctx.createLinearGradient(sx, sy, ex, ey);
  grd.addColorStop(0.000, startColor);
  grd.addColorStop(1.000, endColor);

  ctx.fillStyle = grd;

  return true;
}

function awtkCanvasSetStrokeLinearGradient(sx, sy, ex, ey, scolor, ecolor) {
  let startColor = pointerToString(scolor);
  let endColor = pointerToString(ecolor);
  let ctx = gAwtkCanvasInfo.ctx;

  grd = ctx.createLinearGradient(sx, sy, ex, ey);
  grd.addColorStop(0.000, startColor);
  grd.addColorStop(1.000, endColor);

  ctx.strokeStyle = grd;

  return true;
}

function awtkCanvasSetFillRadialGradient(cx, cy, ir, or, scolor, ecolor) {
  let startColor = pointerToString(scolor);
  let endColor = pointerToString(ecolor);
  let ctx = gAwtkCanvasInfo.ctx;

  grd = ctx.createRadialGradient(cx, cy, ir, cx, cy, or);
  grd.addColorStop(0.000, startColor);
  grd.addColorStop(1.000, endColor);

  ctx.fillStyle = grd;

  return true;
}

function awtkCanvasSetStrokeRadialGradient(cx, cy, ir, or, scolor, ecolor) {
  let startColor = pointerToString(scolor);
  let endColor = pointerToString(ecolor);
  let ctx = gAwtkCanvasInfo.ctx;

  grd = ctx.createRadialGradient(cx, cy, ir, cx, cy, or);
  grd.addColorStop(0.000, startColor);
  grd.addColorStop(1.000, endColor);

  ctx.strokeStyle = grd;

  return true;
}
