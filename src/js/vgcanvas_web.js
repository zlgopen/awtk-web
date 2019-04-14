function  VGCanvas() {
}

VGCanvas.init = function() {
  var canvas = document.getElementById('awtk-lcd');

  VGCanvas.canvas = canvas;
  TBrowser.adjustCanvas(canvas);
  VGCanvas.ctx = canvas.getContext('2d');
  VGCanvas.width = parseInt(canvas.style.width);
  VGCanvas.height = parseInt(canvas.style.height);

  console.log(`VGCanvas.init ${VGCanvas.width} x ${VGCanvas.height} `);

  return true;
}

VGCanvas.createFBO = function() {
  let canvas = VGCanvas.canvas;
  let fbo = document.createElement("canvas");

  fbo.name = "fbo";
  fbo.width = VGCanvas.width;
  fbo.height = VGCanvas.height;

  return ImageCache.add(fbo);
}

VGCanvas.destroyFBO = function(id) {
  ImageCache.remove(id);

  return true;
}

VGCanvas.bindFBO = function(id) {
  let fbo = ImageCache.get(id);

  VGCanvas.ctx = fbo.getContext('2d');

  return true;
}

VGCanvas.unbindFBO = function(id) {
  let canvas = VGCanvas.canvas;

  VGCanvas.ctx = canvas.getContext('2d');

  return true;
}

VGCanvas.getWidth = function() {
  return VGCanvas.width;
}

VGCanvas.getHeight = function() {
  return VGCanvas.height;
}

VGCanvas.getDevicePixelRatio = function() {
  return TBrowser.getDevicePixelRatio();
}

VGCanvas.save = function() {
  VGCanvas.ctx.save();

  return true;
}

VGCanvas.restore = function() {
  VGCanvas.ctx.restore();

  return true;
}

VGCanvas.setMitterLimit = function(value) {
  VGCanvas.ctx.miterLimit = value;

  return true;
}

VGCanvas.setLineJoint = function(value) {
  VGCanvas.ctx.lineJoin = value;

  return true;
}

VGCanvas.setLineCap = function(value) {
  VGCanvas.ctx.lineCap = value;

  return true;
}

VGCanvas.setStrokeColor = function(value) {
  VGCanvas.ctx.strokeStyle = pointerToString(value);

  return true;
}

VGCanvas.setFillColor = function(value) {
  VGCanvas.ctx.fillStyle = pointerToString(value);

  return true;
}

VGCanvas.setGlobalAlpha = function(value) {
  VGCanvas.ctx.globalAlpha = value;

  return true;
}

VGCanvas.setLineWidth = function(value) {
  VGCanvas.ctx.lineWidth = value;

  return true;
}

VGCanvas.fill = function() {
  VGCanvas.ctx.fill();

  return true;
}

VGCanvas.stroke = function() {
  VGCanvas.ctx.stroke();

  return true;
}

VGCanvas.beginPath = function() {
  VGCanvas.ctx.beginPath();

  return true;
}

VGCanvas.closePath = function() {
  VGCanvas.ctx.closePath();

  return true;
}

VGCanvas.moveTo = function(x, y) {
  VGCanvas.ctx.moveTo(x, y);

  return true;
}

VGCanvas.lineTo = function(x, y) {
  VGCanvas.ctx.lineTo(x, y);

  return true;
}

VGCanvas.quadTo = function(cpx, cpy, x, y) {
  VGCanvas.ctx.quadraticCurveTo(cpx, cpy, x, y);

  return true;
}

VGCanvas.bezierTo = function(cp1x, cp1y, cp2x, cp2y, x, y) {
  VGCanvas.ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);

  return true;
}

VGCanvas.arcTo = function(x1, y1, x2, y2, r) {
  VGCanvas.ctx.arcTo(x1, y1, x2, y2, r);

  return true;
}

VGCanvas.arc = function(x, y, r, start, end, ccw) {
  VGCanvas.ctx.arc(x, y, r, start, end, ccw);

  return true;
}

VGCanvas.rotate = function(rad) {
  VGCanvas.ctx.rotate(rad);

  return true;
}

VGCanvas.scale = function(x, y) {
  VGCanvas.ctx.scale(x, y);

  return true;
}

VGCanvas.translate = function(x, y) {
  VGCanvas.ctx.translate(x, y);

  return true;
}

VGCanvas.isPointIntPath = function(x, y) {
  return VGCanvas.ctx.isPointInPath(x, y);
}

VGCanvas.transform = function(a, b, c, d, e, f) {
  VGCanvas.ctx.transform(a, b, c, d, e, f);

  return true;
}

VGCanvas.setTransform = function(a, b, c, d, e, f) {
  VGCanvas.ctx.setTransform(a, b, c, d, e, f);

  return true;
}

VGCanvas.ellipse = function(x, y, rx, ry) {
  VGCanvas.ctx.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2);

  return true;
}

VGCanvas.roundRect = function(x, y, w, h, radius) {
  let ctx = VGCanvas.ctx;

  if (radius > 1) {
    var r = x + w;
    var b = y + h;
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
  } else {
    ctx.rect(x, y, w, h);
  }

  return true;
}

VGCanvas.clipRect = function(x, y, w, h) {
  VGCanvas.ctx.rect(x, y, w, h);
  VGCanvas.ctx.clip();
  VGCanvas.ctx.beginPath();

  return true;
}

VGCanvas.setFont = function(name, size) {
  let fontSize = (size || 18);
  let font = Math.round(fontSize) + "px " + "Sans";
  //let font = Math.round(fontSize) + "px " + pointerToString(name);

  VGCanvas.ctx.font = font;

  return true;
}

VGCanvas.setTextAlign = function(value) {
  VGCanvas.ctx.textAlign = pointerToString(value);

  return true;
}

VGCanvas.setTextBaseline = function(value) {
  VGCanvas.ctx.textBaseline = pointerToString(value);

  return true;
}

VGCanvas.fillText = function(text, x, y, max_width) {
  let str = pointerToString(text);
  VGCanvas.ctx.fillText(str, x, y, max_width);

  return true;
}

VGCanvas.measureText = function(text) {
  let str = pointerToString(text);

  let width = VGCanvas.ctx.measureText(str).width;

  return Math.round(width);
}

VGCanvas.drawImage = function(id, sx, sy, sw, sh, dx, dy, dw, dh) {
  let image = ImageCache.get(id);
  VGCanvas.ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);

  return true;
}

VGCanvas.setFillLinearGradient = function(sx, sy, ex, ey, scolor, ecolor) {
  let startColor = pointerToString(scolor);
  let endColor = pointerToString(ecolor);
  let ctx = VGCanvas.ctx;

  grd = ctx.createLinearGradient(sx, sy, ex, ey);
  grd.addColorStop(0.000, startColor);
  grd.addColorStop(1.000, endColor);

  ctx.fillStyle = grd;

  return true;
}

VGCanvas.setStrokeLinearGradient = function(sx, sy, ex, ey, scolor, ecolor) {
  let startColor = pointerToString(scolor);
  let endColor = pointerToString(ecolor);
  let ctx = VGCanvas.ctx;

  grd = ctx.createLinearGradient(sx, sy, ex, ey);
  grd.addColorStop(0.000, startColor);
  grd.addColorStop(1.000, endColor);

  ctx.strokeStyle = grd;

  return true;
}

VGCanvas.setFillRadialGradient = function(cx, cy, ir, or, scolor, ecolor) {
  let startColor = pointerToString(scolor);
  let endColor = pointerToString(ecolor);
  let ctx = VGCanvas.ctx;

  grd = ctx.createRadialGradient(cx, cy, ir, cx, cy, or);
  grd.addColorStop(0.000, startColor);
  grd.addColorStop(1.000, endColor);

  ctx.fillStyle = grd;

  return true;
}

VGCanvas.setStrokeRadialGradient = function(cx, cy, ir, or, scolor, ecolor) {
  let startColor = pointerToString(scolor);
  let endColor = pointerToString(ecolor);
  let ctx = VGCanvas.ctx;

  grd = ctx.createRadialGradient(cx, cy, ir, cx, cy, or);
  grd.addColorStop(0.000, startColor);
  grd.addColorStop(1.000, endColor);

  ctx.strokeStyle = grd;

  return true;
}
