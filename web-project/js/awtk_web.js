function TBrowser() {}

TBrowser.supportDirtyRect = function() {
  return true;
}

TBrowser.supportWebGL = function () {
  if(TBrowser.config.nowebgl) {
    console.log("WebGL is disabled.");
    return false;
  }

  var canvas = document.createElement("canvas");
  var gl = canvas.getContext("webgl") ||
    canvas.getContext("experimental-webgl");

  if (gl && gl instanceof WebGLRenderingContext) {
    return true;
  } else {
    return false;
  }
}

TBrowser.supportWebAssembly = function () {
  if (typeof WebAssembly === "object" &&
    typeof WebAssembly.instantiate === "function") {
    return true;
  } else {
    return false;
  }
}

TBrowser.getDevicePixelRatio = function () {
  const dpr = window.devicePixelRatio || 1;

  return Math.min(2, dpr);
}

TBrowser.adjustCanvasToViewPort = function (canvas) {
  let view = TBrowser.getViewPort();
  let dpr = TBrowser.getDevicePixelRatio();
  
  let size = {};
  size.width = TBrowser.config.width || view.width;
  size.height = TBrowser.config.height || view.height;

  canvas.width = size.width * dpr;
  canvas.height = size.height * dpr;

  canvas.style.position = 'absolute';
  canvas.style.left = "0px";
  canvas.style.top = "0px";
  canvas.style.width = size.width + "px";
  canvas.style.height = size.height + "px";

  return true;
}

TBrowser.createCanvas = function (name, w, h) {
  const canvas = document.createElement("canvas");

  canvas.width = w;
  canvas.height = h;
  canvas.name = name;

  return canvas;
}

TBrowser.createMainCanvas = function () {
  if (!TBrowser.mainCanvas) {
    const canvas = TBrowser.createCanvas("awtk-lcd", 0, 0);

    TBrowser.adjustCanvasToViewPort(canvas);

    TBrowser.mainCanvas = canvas;
    document.body.appendChild(canvas);
  }

  return TBrowser.mainCanvas;
}

TBrowser.createFboCanvas = function () {
  if (!TBrowser.fboCanvas) {
    const canvas = TBrowser.createCanvas("awtk-lcd-fbo", 0, 0);

    TBrowser.adjustCanvasToViewPort(canvas);

    TBrowser.fboCanvas = canvas;
    document.body.appendChild(canvas);
    canvas.hidden = true;
  }

  return TBrowser.fboCanvas;
}

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
}

TBrowser.getActiveContext = function () {
  let ctx = null;
  let canvas = TBrowser.activeCanvas;
  if (canvas === TBrowser.mainCanvas) {
    ctx = canvas.getContext('2d');
  } else {
    if (!canvas.ctxwebgl) {
      ctx = CanvasRenderingContext2DWebGL.create(canvas, {});
      canvas.ctxwebgl = ctx;
    }
    ctx = canvas.ctxwebgl;
  }

  return ctx;
}

TBrowser.createOfflineCanvas = function (name, w, h) {
  return TBrowser.createCanvas(name, w, h);
}

TBrowser.createMutableImage = function (name, addr, w, h, line_length, format) {
  const image = TBrowser.createCanvas(name, w, h);

  image.name = name;
  image.addr = addr;
  image.format = format;
  image.line_length = line_length;

  return image;
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

TBrowser.init = function (rootUri, nonce) {
  var u = navigator.userAgent;
  TBrowser.rootUri = rootUri;
  TBrowser.nonce = nonce;

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

  TBrowser.config.width = TBrowser.getParam('width', TBrowser.config.width);
  TBrowser.config.height = TBrowser.getParam('height', TBrowser.config.height);
  TBrowser.config.nowebgl = TBrowser.getParam('nowebgl', TBrowser.config.nowebgl);
  TBrowser.config.fontScale = TBrowser.getParam('fontScale', TBrowser.config.fontScale || 1);
  TBrowser.config.defaultFont = TBrowser.getParam('defaultFont', TBrowser.config.defaultFont || "sans");
  TBrowser.config.fontOffset = parseInt(TBrowser.getParam('fontOffset', TBrowser.config.fontOffset || 0));

  if (!TBrowser.supportWebGL()) {
    TBrowser.getActiveContext = function () {
      return TBrowser.mainCanvas.getContext('2d');
    }

    TBrowser.activateCanvas = function (anim) {
      return true;
    }

    TBrowser.createFboCanvas = function () {
      return null;
    }
    
    console.log('TBrowser.init: webgl not supported.');
  } else {
    console.log('TBrowser.init: webgl supported.');
  }

  return true;
}

TBrowser.loadAWTK = function () {
  if (TBrowser.supportWebAssembly()) {
    TBrowser.loadScript('js/awtk_asm.js');
  } else {
    TBrowser.loadScript('js/awtk.js');
  }

  return true;
}

TBrowser.isMobile = function () {
  return TBrowser.iPhone || TBrowser.android || TBrowser.windowPhone;
}

TBrowser.loadScript= function (url) {
  var node = document.createElement('script');

  if (TBrowser.nonce) { 
    node.setAttribute('nonce', TBrowser.nonce);
  }
      
  if (TBrowser.rootUri) {
    url = TBrowser.rootUri + '/' + url;
  }

  node.src=url;
  node.onload = function() {
    console.log('loaded: ' + url);
  }

  document.head.appendChild(node);

  return true;
}

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

TBrowser.funcArrary = {};

TBrowser.findArraryItem = function(dic, key) {
  for (var k in dic) {
    if (k == key) {
      return true;
    }
  }
  return false;
}

TBrowser.addFunction = function(func, p) {
  var funcID = Module.addFunction(func, p);
  console.log("addFunction:", funcID);
  if (TBrowser.findArraryItem(TBrowser.funcArrary, funcID)) {
    TBrowser.funcArrary[funcID]++;
  } else {
    TBrowser.funcArrary[funcID] = 1;
  }

  return funcID;
}

TBrowser.releaseFunction = function(funcID) {
  const RESERVED_FUNCTION_POINTERS = 1000;
  if(funcID > 0 && funcID < RESERVED_FUNCTION_POINTERS) {
    if (TBrowser.findArraryItem(TBrowser.funcArrary, funcID) && --TBrowser.funcArrary[funcID] <= 0) {
      console.log('removeFunction:', funcID);
      Module.removeFunction(funcID);
      delete TBrowser.funcArrary[funcID];
    } 
  } else {
    console.log('not js function:' + funcID);
  }
  return true;
}

TBrowser.readBinary = (url) => { 
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    xhr.send(null);
    return new Uint8Array(/** @type{!ArrayBuffer} */(xhr.response));
};   


TBrowser.config = {"fontScale": "0.8", "defaultFont": "sans"};

(function () {
var sinTable = [];
for(var i = 0; i < 360; i++) {
	var rad = i/57.2957;
	sinTable.push(Math.sin(rad) + 0.000001);
}

Math.sinFast = function(rad) {
	var index = ((rad * 57.2957)>>0)%360;
	if(index < 0) {
		index += 360;
	}

	return sinTable[index];
}

Math.cosFast = function(rad) {
	return Math.sinFast(rad + Math.PI*0.5);
}

}());

/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */

"use strict";

/**
 * @class Common utilities
 * @name glMatrix
 */
var glMatrix = {};

// Configuration Constants
glMatrix.EPSILON = 0.000001;
glMatrix.ARRAY_TYPE = (typeof Float32Array !== 'undefined') ? Float32Array : Array;
glMatrix.RANDOM = Math.random;
glMatrix.ENABLE_SIMD = false;

// Capability detection
glMatrix.SIMD_AVAILABLE = (glMatrix.ARRAY_TYPE === this.Float32Array) && ('SIMD' in this);
glMatrix.USE_SIMD = glMatrix.ENABLE_SIMD && glMatrix.SIMD_AVAILABLE;

/**
 * Sets the type of array used when creating new vectors and matrices
 *
 * @param {Type} type Array type, such as Float32Array or Array
 */
glMatrix.setMatrixArrayType = function(type) {
    glMatrix.ARRAY_TYPE = type;
}

var degree = Math.PI / 180;

/**
* Convert Degree To Radian
*
* @param {Number} a Angle in Degrees
*/
glMatrix.toRadian = function(a){
     return a * degree;
}

/**
 * Tests whether or not the arguments have approximately the same value, within an absolute
 * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less 
 * than or equal to 1.0, and a relative tolerance is used for larger values)
 * 
 * @param {Number} a The first number to test.
 * @param {Number} b The second number to test.
 * @returns {Boolean} True if the numbers are approximately equal, false otherwise.
 */
glMatrix.equals = function(a, b) {
	return Math.abs(a - b) <= glMatrix.EPSILON*Math.max(1.0, Math.abs(a), Math.abs(b));
}

/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */

/**
 * @class 2x3 Matrix
 * @name mat2d
 * 
 * @description 
 * A mat2d contains six elements defined as:
 * <pre>
 * [a, c, tx,
 *  b, d, ty]
 * </pre>
 * This is a short form for the 3x3 matrix:
 * <pre>
 * [a, c, tx,
 *  b, d, ty,
 *  0, 0, 1]
 * </pre>
 * The last row is ignored so the array is shorter and operations are faster.
 */
var mat2d = {};

/**
 * Creates a new identity mat2d
 *
 * @returns {mat2d} a new 2x3 matrix
 */
mat2d.create = function() {
    var out = new glMatrix.ARRAY_TYPE(6);
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    out[4] = 0;
    out[5] = 0;
    return out;
};

/**
 * Creates a new mat2d initialized with values from an existing matrix
 *
 * @param {mat2d} a matrix to clone
 * @returns {mat2d} a new 2x3 matrix
 */
mat2d.clone = function(a) {
    var out = new glMatrix.ARRAY_TYPE(6);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    return out;
};

/**
 * Copy the values from one mat2d to another
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the source matrix
 * @returns {mat2d} out
 */
mat2d.copy = function(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    return out;
};

/**
 * Set a mat2d to the identity matrix
 *
 * @param {mat2d} out the receiving matrix
 * @returns {mat2d} out
 */
mat2d.identity = function(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    out[4] = 0;
    out[5] = 0;
    return out;
};

/**
 * Set the components of a mat2d to the given values
 *
 * @param {mat2d} out the receiving matrix
 * @param {Number} a Component A (index 0)
 * @param {Number} b Component B (index 1)
 * @param {Number} c Component C (index 2)
 * @param {Number} d Component D (index 3)
 * @param {Number} tx Component TX (index 4)
 * @param {Number} ty Component TY (index 5)
 * @returns {mat2d} out
 */
mat2d.set = function(out, a, b, c, d, tx, ty) {
    out[0] = a;
    out[1] = b;
    out[2] = c;
    out[3] = d;
    out[4] = tx;
    out[5] = ty;
    return out;
};

/**
 * Multiplies two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */
mat2d.multiply = function (out, a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5],
        b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5];
    out[0] = a0 * b0 + a2 * b1;
    out[1] = a1 * b0 + a3 * b1;
    out[2] = a0 * b2 + a2 * b3;
    out[3] = a1 * b2 + a3 * b3;
    out[4] = a0 * b4 + a2 * b5 + a4;
    out[5] = a1 * b4 + a3 * b5 + a5;
    return out;
};

/**
 * Alias for {@link mat2d.multiply}
 * @function
 */
mat2d.mult = function (out, a, b0, b1, b2, b3, b4, b5) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];

    out[0] = a0 * b0 + a2 * b1;
    out[1] = a1 * b0 + a3 * b1;
    out[2] = a0 * b2 + a2 * b3;
    out[3] = a1 * b2 + a3 * b3;
    out[4] = a0 * b4 + a2 * b5 + a4;
    out[5] = a1 * b4 + a3 * b5 + a5;

    return out;
};


/**
 * Rotates a mat2d by the given angle
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */
//mat2d.rotate = function (out, a, rad) {
//    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5],
//        s = mat2d.sin(rad),
//        c = mat2d.cos(rad);
//    out[0] = a0 *  c + a2 * s;
//    out[1] = a1 *  c + a3 * s;
//    out[2] = a0 * -s + a2 * c;
//    out[3] = a1 * -s + a3 * c;
//    out[4] = a4;
//    out[5] = a5;
//    return out;
//};

mat2d.rotate = function (a, rad) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3],
        s = mat2d.sin(rad),
        c = mat2d.cos(rad);
    a[0] = a0 *  c + a2 * s;
    a[1] = a1 *  c + a3 * s;
    a[2] = a0 * -s + a2 * c;
    a[3] = a1 * -s + a3 * c;
};
/**
 * Scales the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to translate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat2d} out
 **/
//mat2d.scale = function(out, a, v0, v1) {
//    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
//    out[0] = a0 * v0;
//    out[1] = a1 * v0;
//    out[2] = a2 * v1;
//    out[3] = a3 * v1;
//    out[4] = a4;
//    out[5] = a5;
//    return out;
//};

mat2d.scale = function(a, v0, v1) {
    a[0] *= v0;
    a[1] *= v0;
    a[2] *= v1;
    a[3] *= v1;
};

/**
 * Translates the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to translate
 * @param {vec2} v the vec2 to translate the matrix by
 * @returns {mat2d} out
 **/
//mat2d.translate = function(out, a, v0, v1) {
//    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
//
//    out[0] = a0;
//    out[1] = a1;
//    out[2] = a2;
//    out[3] = a3;
//    out[4] = a0 * v0 + a2 * v1 + a4;
//    out[5] = a1 * v0 + a3 * v1 + a5;
//    return out;
//};

mat2d.translate = function(a, v0, v1) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5];
    a[4] = a0 * v0 + a2 * v1 + a4;
    a[5] = a1 * v0 + a3 * v1 + a5;
};

mat2d.points = [{x:0, y:0}, {x:0, y:0}, {x:0, y:0}, {x:0, y:0}];

mat2d.transformPoint = function(m, x, y, index) {
	var p = mat2d.points[index||0];

    p.x = m[0] * x + m[2] * y + m[4];
    p.y = m[1] * x + m[3] * y + m[5];
    
    return p;
};

mat2d.transformPointInt = function(m, x, y, index) {
	var p = mat2d.points[index||0];

    p.x = ((m[0] * x + m[2] * y + m[4]) * 10) >> 0;
    p.y = ((m[1] * x + m[3] * y + m[5]) * 10) >> 0;
    
    return p;
};

mat2d.transformPoints = function(m, arr) {
	for(var i = 0; i < arr.length; i+=2) {
		var x = arr[i];
		var y = arr[i+1];
		arr[i] = m[0] * x + m[2] * y + m[4];
		arr[i+1] = m[1] * x + m[3] * y + m[5];
	}

	return arr;
}

mat2d.sin = Math.sinFast;
mat2d.cos = Math.cosFast;

/*
 * File: shader.js
 * Author:  Li XianJing <xianjimli@hotmail.com>
 * Brief: webgl shader program
 * 
 * Copyright (c) 2015 - 2016 Holaverse Inc.
 * Copyright (c) 2018 - 2019  Guangzhou ZHIYUAN Electronics Co.,Ltd.
 * 
 */

function WebGLProgram() {
}

WebGLProgram.activeProgram = null;
WebGLProgram.prototype.create = function(gl, buffer, fsSource, vsSource) {
	this.gl = gl;
	this.buffer = buffer;

	var program = gl.createProgram();
	var fragmentShader = this.createShader(gl.FRAGMENT_SHADER, fsSource);
	var vertexShader = this.createShader(gl.VERTEX_SHADER, vsSource);

	gl.attachShader(program, vertexShader);
	gl.attachShader(program, fragmentShader);
	gl.linkProgram(program);

	var lineStatus = gl.getProgramParameter(program, gl.LINK_STATUS);
	if(!lineStatus) {
		alert("Could not initialise shaders:" + gl.getProgramInfoLog(program));
	}

	this.program = program;
	this.init();

	return this;
}

WebGLProgram.prototype.init = function() {
}

WebGLProgram.prototype.createShader = function(type, source) {
	var gl = this.gl;
	var shader = gl.createShader(type);

	gl.shaderSource(shader, source);
	gl.compileShader(shader);

	if(!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
		alert(gl.getShaderInfoLog(shader));
		return null;
	}

	return shader;
}

WebGLProgram.prototype.use = function() {
	if(WebGLProgram.activeProgram !== this.program) {
		this.gl.useProgram(this.program);
		WebGLProgram.activeProgram = this.program;
	}
}

WebGLProgram.prototype.destroy = function() {
	this.gl.deleteProgram(this.program);
	this.gl.program = null;
}

WebGLProgram.prototype.createDataBuffer = function(data) {
	return Int16DataBuffer.create(data);
}

WebGLProgram.prototype.getDataBufferElementSize = function() {
	return 2;
}

WebGLProgram.prototype.getDataBufferElementType = function() {
	return this.gl.SHORT;
}

/*
 * File: draw_image.js
 * Author:  Li XianJing <xianjimli@hotmail.com>
 * Brief: shader to draw image.
 * 
 * Copyright (c) 2015 - 2016 Holaverse Inc.
 * Copyright (c) 2018 - 2019  Guangzhou ZHIYUAN Electronics Co.,Ltd.
 * 
 */

function WebGLProgramDrawImage(name, gl, buffer, custom) {
	var fs = this.fs.replace(/custom-shader/, custom);

	this.name = name;
	this.create(gl, buffer, fs, this.vs);

	WebGLProgramDrawImage.programs[name] = this;
}

WebGLProgramDrawImage.prototype = new WebGLProgram();
WebGLProgramDrawImage.prototype.fs = [
	"precision mediump float;",
	"varying vec4 color;",
	"varying vec2 vTextureCoord;",
	"uniform vec4 size;",
	"uniform sampler2D texture;",
	"void main(void) {",
	"custom-shader",
	"}"].join("\n");

WebGLProgramDrawImage.prototype.vs = [
	"precision mediump float;",
	"attribute vec4 aTextureCoord;",
	"attribute vec2 aVertexPosition;",
	"uniform vec4 size;",
	"varying vec4 color;",
	"varying vec2 vTextureCoord;",
	"void main(void) {",
	"    vec2 viewSize = size.xy;",
	"    vec2 textureSize = size.zw;",
	"    vec2 pos = (vec2(aVertexPosition.x/10.0, viewSize.y-aVertexPosition.y/10.0)/ viewSize) * 2.0 - 1.0;",
	"    gl_Position = vec4(pos, 0, 1.0);",
	"    vec2 v = vec2(aTextureCoord.x, aTextureCoord.y)/textureSize;",
	"    vTextureCoord = vec2(v.s, 1.0-v.t);",
	"    float alpha = aTextureCoord.z/256.0;",
	"    float tint = aTextureCoord.w/256.0;",
	"    color = vec4(tint, tint, tint, alpha);",
	"}"].join("\n");

WebGLProgramDrawImage.prototype.init = function() {
	var gl = this.gl;
	var program = this.program;

	program.aTextureCoord = gl.getAttribLocation(program, "aTextureCoord");
	program.aVertexPosition = gl.getAttribLocation(program, "aVertexPosition");

	program.size = gl.getUniformLocation(program, "size");
	program.samplerUniform = gl.getUniformLocation(program, "texture");

	return;
}
	
WebGLProgramDrawImage.prototype.addTriangle = function(dataBuffer, alpha, tint, u0, v0, x0, y0, u1, v1, x1, y1, u2, v2, x2, y2) {
	var isClockWise = (x1-x0)*(y2-y1)-(y1-y0)*(x2-x1) >= 0;
	if(isClockWise) {
		return dataBuffer.pushX(
				u0, v0, alpha, tint, x0, y0, 
				u1, v1, alpha, tint, x1, y1, 
				u2, v2, alpha, tint, x2, y2
			);
	}else{
		return dataBuffer.pushX(
				u0, v0, alpha, tint, x0, y0, 
				u2, v2, alpha, tint, x2, y2,
				u1, v1, alpha, tint, x1, y1 
			);
	}
}

WebGLProgramDrawImage.prototype.draw = function(image, _bufferData) {
	this.use();

	var gl = this.gl;
	var program = this.program;
	var elementType = this.getDataBufferElementType();
	var elementSize = this.getDataBufferElementSize();
	var stride = elementSize * 6;

	var texture = image.texture;
	if(image.dirty) {
		texture.update();
	}

	var bufferData = _bufferData;
	var vetexCount = bufferData.size/6;
	gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
	gl.bufferData(gl.ARRAY_BUFFER, bufferData, gl.DYNAMIC_DRAW);

	gl.activeTexture(gl.TEXTURE0);
	gl.bindTexture(gl.TEXTURE_2D, texture);

	gl.vertexAttribPointer(program.aTextureCoord, 4, elementType, false, stride, 0);
	gl.enableVertexAttribArray(program.aTextureCoord);

	gl.vertexAttribPointer(program.aVertexPosition, 2, elementType, false, stride, elementSize * 4);
	gl.enableVertexAttribArray(program.aVertexPosition);
	
	gl.uniform4f(program.size, gl.w, gl.h, texture.w, texture.h);
	
	gl.drawArrays(gl.TRIANGLES, 0, vetexCount);
}

WebGLProgramDrawImage.defaultCustomFs = [
	"  vec4 c = texture2D(texture, vTextureCoord);",
	"  gl_FragColor = vec4(c.xyz*color.w,color.w);",
	""].join("\n");

WebGLProgramDrawImage.create = function(gl, buffer) {
	var program = new WebGLProgramDrawImage("normal", gl, buffer, WebGLProgramDrawImage.defaultCustomFs);

	return program;
}

WebGLProgramDrawImage.grayCustomFs = [
	"    vec4 c = texture2D(texture, vTextureCoord);",
	"    float gray = c.r*0.3 + c.g*0.59 + c.b*0.11;",
	"    gl_FragColor = vec4(gray, gray, gray, c.a) * color;"].join("\n");

WebGLProgramDrawImage.createGray = function(gl, buffer) {
	var program = new WebGLProgramDrawImage("gray", gl, buffer, WebGLProgramDrawImage.grayCustomFs);

	return program;
}

WebGLProgramDrawImage.programs = {};
WebGLProgramDrawImage.init = function(gl, buffer) {
	WebGLProgramDrawImage.create(gl, buffer);
	WebGLProgramDrawImage.createGray(gl, buffer);
}

WebGLProgramDrawImage.get = function(name) {
	return WebGLProgramDrawImage.programs[name] || WebGLProgramDrawImage.programs.normal;
}
/*
 * File: draw_primitives.js
 * Author:  Li XianJing <xianjimli@hotmail.com>
 * Brief: shader to stroke/fill lines and curve.
 * 
 * Copyright (c) 2015 - 2016 Holaverse Inc.
 * Copyright (c) 2018 - 2019  Guangzhou ZHIYUAN Electronics Co.,Ltd.
 * 
 */

function WebGLProgramDrawPrimitives(gl, buffer) {
	this.create(gl, buffer, this.fs, this.vs);
}

WebGLProgramDrawPrimitives.prototype = new WebGLProgram();
WebGLProgramDrawPrimitives.prototype.fs = [
	"precision mediump float;",
	'varying vec4 vColor;',
	"void main(void) {",
	"    gl_FragColor = vColor;",
	"}"].join("\n");

WebGLProgramDrawPrimitives.prototype.vs = [
	"precision mediump float;",
	'attribute vec2 aVertexPosition;',
	"uniform vec4 aSizeAlphaTint;",
	"uniform vec4 aColor;",
	'varying vec4 vColor;',
	"void main(void) {",
	"   vec2 size = vec2(aSizeAlphaTint.x, aSizeAlphaTint.y);",
	"   float tint = aSizeAlphaTint.z/256.0;",
	"	float alpha = aSizeAlphaTint.w/256.0;",
	"   vec3 pos = vec3(aVertexPosition.x/10.0, aVertexPosition.y/10.0, 1.0);",
	"   vec2 pos2 = (vec2(pos.x, size.y-pos.y)/size) * 2.0 - 1.0;",
	"   gl_Position = vec4(pos2, 0, 1.0);",
	"	vColor = aColor * vec4(tint, tint, tint, alpha);",
	"}"].join("\n");

WebGLProgramDrawPrimitives.prototype.init = function() {
	var gl = this.gl;
	var program = this.program;

	program.aVertexPosition = gl.getAttribLocation(program, "aVertexPosition");

	program.aColor = gl.getUniformLocation(program, "aColor");
	program.aSizeAlphaTint = gl.getUniformLocation(program, "aSizeAlphaTint");

	return;
}

WebGLProgramDrawPrimitives.prototype.clip = function(start, end) {
	this.draw(this.gl.TRIANGLE_FAN, start, end);
}

WebGLProgramDrawPrimitives.prototype.stroke = function(start, end) {
	this.draw(this.gl.LINE_STRIP, start, end);
}

WebGLProgramDrawPrimitives.prototype.fill = function(start, end) {
	this.draw(this.gl.TRIANGLE_FAN, start, end);
}

WebGLProgramDrawPrimitives.prototype.prepareDraw = function(bufferData, color, alpha, tint) {
	this.use();

	var gl = this.gl;
	var program = this.program;
	var elementType = this.getDataBufferElementType();
	var elementSize = this.getDataBufferElementSize();

	gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
	gl.bufferData(gl.ARRAY_BUFFER, bufferData, gl.DYNAMIC_DRAW);

	gl.vertexAttribPointer(program.aVertexPosition, 2, elementType, false, 0, 0);
	gl.enableVertexAttribArray(program.aVertexPosition);
	
	gl.uniform4f(program.aColor, color.r, color.g, color.b, color.a);
	gl.uniform4f(program.aSizeAlphaTint, gl.w, gl.h, tint, alpha);
}

WebGLProgramDrawPrimitives.prototype.draw = function(type, start, end) {
	var gl = this.gl;
	var begin = start >> 1;
	var n = (end - start) >> 1;

	gl.drawArrays(type, begin, n);
}


WebGLProgramDrawPrimitives.prototype.createDataBuffer = function(data) {
	return Int16DataBuffer.create(data);
}

WebGLProgramDrawPrimitives.prototype.getDataBufferElementSize = function() {
	return 2;
}

WebGLProgramDrawPrimitives.prototype.getDataBufferElementType = function() {
	return this.gl.SHORT;
}


function isArrayish(obj) {
	if (!obj) {
		return false;
	}

	return obj instanceof Array || Array.isArray(obj) ||
		(obj.length >= 0 && (obj.splice instanceof Function ||
			(Object.getOwnPropertyDescriptor(obj, (obj.length - 1)) && obj.constructor.name !== 'String')));
};

var concat = Array.prototype.concat;
var slice = Array.prototype.slice;

function swizzle(args) {
	var results = [];

	for (var i = 0, len = args.length; i < len; i++) {
		var arg = args[i];

		if (isArrayish(arg)) {
			// http://jsperf.com/javascript-array-concat-vs-push/98
			results = concat.call(results, slice.call(arg));
		} else {
			results.push(arg);
		}
	}

	return results;
};

swizzle.wrap = function (fn) {
	return function () {
		return fn(swizzle(arguments));
	};
};

var colorNames = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};

var reverseNames = {};
// create a list of reverse color names
for (var name in colorNames) {
	if (colorNames.hasOwnProperty(name)) {
		reverseNames[colorNames[name]] = name;
	}
}

var cs = {
	to: {}
};

cs.get = function (string) {
	var prefix = string.substring(0, 3).toLowerCase();
	var val;
	var model;
	switch (prefix) {
		case 'hsl':
			val = cs.get.hsl(string);
			model = 'hsl';
			break;
		case 'hwb':
			val = cs.get.hwb(string);
			model = 'hwb';
			break;
		default:
			val = cs.get.rgb(string);
			model = 'rgb';
			break;
	}

	if (!val) {
		return null;
	}

	return {model: model, value: val};
};

cs.abbrreg = /^#([a-fA-F0-9]{3})$/;
cs.hexreg = /^#([a-fA-F0-9]{6})$/;
cs.rgbareg = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
cs.perreg = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
cs.keywordreg = /(\D+)/;

cs.cache = {};
cs.get.rgb = function (string) {
	var color = cs.cache[string];

	if(!color) {
		color = cs.get.rgbSlow(string);
		cs.cache[string] = color;
	}

	return color;
}

cs.get.rgbSlow = function (string) {
	var i;
	var match;

	var rgb = [0, 0, 0, 1];
	if (!string) {
		return rgb;
	}

	if (match = string.match(cs.abbrreg)) {
		match = match[1];

		for (i = 0; i < 3; i++) {
			rgb[i] = parseInt(match[i] + match[i], 16);
		}
	} else if (match = string.match(cs.hexreg)) {
		match = match[1];

		for (i = 0; i < 3; i++) {
			// https://jsperf.com/slice-vs-substr-vs-substring-methods-long-string/19
			var i2 = i * 2;
			rgb[i] = parseInt(match.slice(i2, i2 + 2), 16);
		}
	} else if (match = string.match(cs.rgbareg)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = parseInt(match[i + 1], 0);
		}

		if (match[4]) {
			rgb[3] = parseFloat(match[4]);
		}
	} else if (match = string.match(cs.perreg)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
		}

		if (match[4]) {
			rgb[3] = parseFloat(match[4]);
		}
	} else if (match = string.match(cs.keywordreg)) {
		if (match[1] === 'transparent') {
			return [0, 0, 0, 0];
		}

		rgb = colorNames[match[1]];

		if (!rgb) {
			return null;
		}

		rgb[3] = 1;

		return rgb;
	}

	for (i = 0; i < rgb.length; i++) {
		rgb[i] = clamp(rgb[i], 0, 255);
	}
	rgb[3] = clamp(rgb[3], 0, 1);

	return rgb;
};

cs.get.hsl = function (string) {
	if (!string) {
		return null;
	}

	var hsl = /^hsla?\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
	var match = string.match(hsl);

	if (match) {
		var alpha = parseFloat(match[4]);
		var h = ((parseFloat(match[1]) % 360) + 360) % 360;
		var s = clamp(parseFloat(match[2]), 0, 100);
		var l = clamp(parseFloat(match[3]), 0, 100);
		var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);

		return [h, s, l, a];
	}
};

cs.get.hwb = function (string) {
	if (!string) {
		return null;
	}

	var hwb = /^hwb\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
	var match = string.match(hwb);

	if (match) {
		var alpha = parseFloat(match[4]);
		var h = ((parseFloat(match[1]) % 360) + 360) % 360;
		var w = clamp(parseFloat(match[2]), 0, 100);
		var b = clamp(parseFloat(match[3]), 0, 100);
		var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
		return [h, w, b, a];
	}
};

cs.to.hex = function (rgb) {
	return '#' + hexDouble(rgb[0]) + hexDouble(rgb[1]) + hexDouble(rgb[2]);
};

cs.to.rgb = function () {
	var rgba = swizzle(arguments);

	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + rgba[0] + ', ' + rgba[1] + ', ' + rgba[2] + ')'
		: 'rgba(' + rgba[0] + ', ' + rgba[1] + ', ' + rgba[2] + ', ' + rgba[3] + ')';
};

cs.to.rgb.percent = function () {
	var rgba = swizzle(arguments);

	var r = Math.round(rgba[0] / 255 * 100);
	var g = Math.round(rgba[1] / 255 * 100);
	var b = Math.round(rgba[2] / 255 * 100);

	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + r + '%, ' + g + '%, ' + b + '%)'
		: 'rgba(' + r + '%, ' + g + '%, ' + b + '%, ' + rgba[3] + ')';
};

cs.to.hsl = function () {
	var hsla = swizzle(arguments);
	return hsla.length < 4 || hsla[3] === 1
		? 'hsl(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%)'
		: 'hsla(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%, ' + hsla[3] + ')';
};

// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
// (hwb have alpha optional & 1 is default value)
cs.to.hwb = function () {
	var hwba = swizzle(arguments);

	var a = '';
	if (hwba.length >= 4 && hwba[3] !== 1) {
		a = ', ' + hwba[3];
	}

	return 'hwb(' + hwba[0] + ', ' + hwba[1] + '%, ' + hwba[2] + '%' + a + ')';
};

cs.to.keyword = function (rgb) {
	return reverseNames[rgb.slice(0, 3)];
};

// helpers
function clamp(num, min, max) {
	return Math.min(Math.max(min, num), max);
}

function hexDouble(num) {
	var str = num.toString(16).toUpperCase();
	return (str.length < 2) ? '0' + str : str;
}

/*
 * File: typed_array_ext.js
 * Author:  Li XianJing <xianjimli@hotmail.com>
 * Brief: some functions to extend typed array.
 * 
 * Copyright (c) 2015 - 2016 Holaverse Inc.
 * Copyright (c) 2018 - 2019  Guangzhou ZHIYUAN Electronics Co.,Ltd.
 * 
 */

Int16Array.prototype.push = function() {
	var arr = arguments;
	var size = this.size;
	var length = this.length;

	var n = arr.length;
	for(var i = 0; i < n && size < length; i++) {
		this[size++] = arr[i];
	}
	this.size = size;

	return this;
}

Int16Array.prototype.extend = function() {
	var size = this.size;
	var newSize = this.length + 1024;
	var newDataBuffer = Int16Array.create(newSize);

	newDataBuffer.size = size;
	for(var i = 0; i < size; i++) {
		newDataBuffer[i] = this[i];
	}

	return newDataBuffer;
}

Float32Array.prototype.extend = function() {
	var size = this.size;
	var newSize = this.length + 1024;
	var newDataBuffer = Float32Array.create(newSize);

	newDataBuffer.size = size;
	for(var i = 0; i < size; i++) {
		newDataBuffer[i] = this[i];
	}

	return newDataBuffer;
}

Int16Array.prototype.pushX = function() {
	var me = this;
	var arr = arguments;
	var n = arr.length;

	if((this.size + 1024 + n) > this.length) {
		me = this.extend();
	}

	var start = this.size;
	for(var i = 0; i < n; i++, start++) {
		me[start] = arr[i];
	}
	me.size += n;

	return me;
}

Int16Array.prototype.push1 = function(a) {
	var me = this;
	if((this.size + 10) >= this.length) {
		me = this.extend();
	}
	
	me[this.size++] = a;

	return me;
}

Float32Array.prototype.push1 = function(a) {
	var me = this;
	if((this.size + 10) >= this.length) {
		me = this.extend();
	}
	
	me[this.size++] = a;

	return me;
}

Int16Array.prototype.push2 = function(a, b) {
	var me = this;
	if((this.size + 10) >= this.length) {
		me = this.extend();
	}
	
	me[this.size++] = a;
	me[this.size++] = b;

	return me;
}

Float32Array.prototype.push2 = function(a, b) {
	var me = this;
	if((this.size + 10) >= this.length) {
		me = this.extend();
	}
	
	me[this.size++] = a;
	me[this.size++] = b;

	return me;
}

Float32Array.prototype.pushX = function() {
	var me = this;
	var arr = arguments;
	var n = arr.length;

	if((this.size + 1024 + n) > this.length) {
		me = this.extend();
	}

	var start = this.size;
	for(var i = 0; i < n; i++, start++) {
		me[start] = arr[i];
	}
	me.size += n;

	return me;
}

Float32Array.prototype.pushArr = Int16Array.prototype.pushArr = function(arr) {
	var me = this;
	var n = arr.length;

	if((this.size + 1024 + n) > this.length) {
		me = this.extend();
	}

	var start = this.size;
	for(var i = 0; i < n; i++, start++) {
		me[start] = arr[i];
	}
	me.size += n;

	return me;
}

Float32Array.prototype.reset = Int16Array.prototype.reset = function() {
	this.size = 0;

	return this;
}

Int16Array.create = function(data) {
	var arr = new Int16Array(data);	
	arr.size = 0;

	return arr;
}

Float32Array.create = function(data) {
	var arr = new Float32Array(data);	
	arr.size = 0;

	return arr;
}

Int16Array.prototype.dup = function() {
	var size = this.size;
	var newDataBuffer = Int16Array.create(size);

	for(var i = 0; i < size; i++) {
		newDataBuffer[i] = this[i];
	}
	newDataBuffer.size = size;

	return newDataBuffer;
}

Float32Array.prototype.dup = function() {
	var size = this.size;
	var newDataBuffer = Float32Array.create(size);

	for(var i = 0; i < size; i++) {
		newDataBuffer[i] = this[i];
	}
	newDataBuffer.size = size;

	return newDataBuffer;
}

Float32Array.prototype.slice = Int16Array.prototype.slice = Array.prototype.slice;

function Int16DataBuffer(initSize) {
	this.size = 0;
	this.capacity = initSize;

	this.buffer = new ArrayBuffer(initSize * 2);
	this.init16Buffer = new Int16Array(this.buffer);
}

Int16DataBuffer.prototype.extendTo = function(size) {
	var buffer = new ArrayBuffer(size * 2);
	var init16Buffer = new Int16Array(buffer);

	init16Buffer.set(this.init16Buffer, 0);

	this.capacity = size; 
	this.buffer = buffer;
	this.init16Buffer = init16Buffer;
}

Int16DataBuffer.prototype.extendIfFull = function(n) {
	if((this.size + n) > this.capacity) {
		this.extendTo(Math.round(this.capacity * 1.2) + n);
	}
}

Int16DataBuffer.prototype.pushX = function() {
	var arr = arguments;
	var n = arr.length;
	var offset = this.size;
	this.extendIfFull(n);

	this.size += n;
	var buffer = this.init16Buffer;
	for(var i = 0; i < n; i++, offset++) {
		buffer[offset] = arr[i];
	}

	return this;
}

Int16DataBuffer.prototype.push1 = function(a) {
	this.extendIfFull(1);
	this.init16Buffer[this.size++] = a;

	return this;
}

Int16DataBuffer.prototype.push2 = function(a, b) {
	this.extendIfFull(2);
	this.init16Buffer[this.size++] = a;
	this.init16Buffer[this.size++] = b;

	return this;
}

Int16DataBuffer.prototype.push3 = function(a, b, c) {
	this.extendIfFull(3);
	this.init16Buffer[this.size++] = a;
	this.init16Buffer[this.size++] = b;
	this.init16Buffer[this.size++] = c;

	return this;
}

Int16DataBuffer.prototype.push4 = function(a, b, c, d) {
	this.extendIfFull(4);
	this.init16Buffer[this.size++] = a;
	this.init16Buffer[this.size++] = b;
	this.init16Buffer[this.size++] = c;
	this.init16Buffer[this.size++] = d;

	return this;
}

Int16DataBuffer.prototype.push5 = function(a, b, c, d, e) {
	this.extendIfFull(5);
	this.init16Buffer[this.size++] = a;
	this.init16Buffer[this.size++] = b;
	this.init16Buffer[this.size++] = c;
	this.init16Buffer[this.size++] = d;
	this.init16Buffer[this.size++] = e;

	return this;
}

Int16DataBuffer.prototype.push6 = function(a, b, c, d, e, f) {
	this.extendIfFull(6);
	this.init16Buffer[this.size++] = a;
	this.init16Buffer[this.size++] = b;
	this.init16Buffer[this.size++] = c;
	this.init16Buffer[this.size++] = d;
	this.init16Buffer[this.size++] = e;
	this.init16Buffer[this.size++] = f;

	return this;
}

Int16DataBuffer.prototype.reset = function() {
	this.size = 0;
}

Int16DataBuffer.prototype.getReadBuffer = function() {
	var buffer = new Int16Array(this.buffer, 0, this.size);
	buffer.size = this.size;

	return buffer;
}

Int16DataBuffer.prototype.getWriteBuffer = function(n) {
	this.extendIfFull(n);
	var buffer = this.init16Buffer;

	return buffer;
}

Int16DataBuffer.prototype.getBufferType = function() {
	return "init16";
}

Int16DataBuffer.prototype.getElementBytes = function() {
	return 2;
}

Int16DataBuffer.prototype.dup = function() {
	var db = Int16DataBuffer.create(this.size);

	var n = this.size;
	db.size = this.size;
	var src = this.init16Buffer;
	var dst = db.init16Buffer;

	for(var i = 0; i < n; i++) {
		dst[i] = src[i];
	}

	return db;
}

Int16DataBuffer.create = function(initSize) {
	var db = new Int16DataBuffer(initSize);

	return db;
}


Math.normalize = function(x, y, r)
{
    var d = Math.sqrt(x*x+y*y);
    if (d > 0.000001) {
        var id = 1.0 / d;
        r.x = x * id;
        r.y = y * id;
    }
	r.d = d;

    return r;
}

Math.cross = function(dx0, dy0, dx1, dy1) 
{ 
	return dx1*dy0 - dx0*dy1; 
}

Math.ptEquals = function(x1, y1, x2, y2, tol)
{
	var dx = x2 - x1;
	var dy = y2 - y1;
	return dx*dx + dy*dy < tol*tol;
}

Math.distPtSeg = function(x, y, px, py, qx, qy)
{
	var pqx, pqy, dx, dy, d, t;
	pqx = qx-px;
	pqy = qy-py;
	dx = x-px;
	dy = y-py;
	d = pqx*pqx + pqy*pqy;
	t = pqx*dx + pqy*dy;
	if (d > 0) t /= d;
	if (t < 0) t = 0;
	else if (t > 1) t = 1;
	dx = px + t*pqx - x;
	dy = py + t*pqy - y;
	return dx*dx + dy*dy;
}

function parseFontSize(font) {
	var fontSize = 12;
	var arr = font.match(/\d+pt|\d+px/g);
	if(arr) {
		var size = arr[0];
		fontSize = parseInt(size);
		if(size.indexOf("pt") > 0) {
			fontSize = Math.round(fontSize * 1.2);
		}
	}

	return fontSize;
}

function CanvasRenderingContext2DWebGL(options){
	this.distTol = 0.01;
	this.tessTol = 0.0025;
	this.currentID = 1000;

	this.fps = 0;
	this.lastX = 0;
	this.lastY = 0;
	this.firstX = 0;
	this.firstY = 0;
	this.showFPS = false;
	this.renderTimes = 0;
	this.startTime = Date.now();
	this.lastSeconds = (this.startTime/1000) >> 0;
	this.drawCalls = 0;
	this.drawImageCalls = 0;
	this.drawImageCount = 0;
	this.fillCount = 0;
	this.strokeCount = 0;
	this.clipLevel = 0;
	this.canvasWidth = 0;
	this.canvasHeight = 0;
	this.canvasWidth10 = 0;
	this.canvasHeight10 = 0;
	this.zeroPoint = {x:0, y:0};
	this.tempRect = {x:0, y:0, w:0, h:0};
	this.webglOptions = options || CanvasRenderingContext2DWebGL.webglOptions;
}

CanvasRenderingContext2DWebGL.webglOptions = {
	antialias: false, 
	stencil: true, 
	preserveDrawingBuffer:true, 
	premultipliedAlpha:false
};

CanvasRenderingContext2DWebGL.prototype.save = function() {
	this.stack.push(this.state.clone());
}

CanvasRenderingContext2DWebGL.prototype.restore = function() {
	var oldState = this.state;	
	var state = this.stack.pop();

	if(state) {
		if(state.clipRect || oldState.clipRect) {
			if(!state.clipRect || !oldState.clipRect || state.clipRect !== oldState.clipRect) {
				this.doClipRect(state.clipRect);
			}
		}

		if(state.clipPaths || oldState.clipPaths) {
			if(!state.clipPaths || !oldState.clipPaths || state.clipPaths.id !== oldState.clipPaths.id) {
				this.clearClip(oldState.clipPaths);
			}
		}

		this.state = state;
		if(oldState.globalCompositeOperation !== state.globalCompositeOperation) {
			this.globalCompositeOperationApply(state.globalCompositeOperation);
		}
	}else{
		console.log("restore times > save times.");
	}

	CanvasRenderingContext2DWebGL.destroyState(oldState);
}

CanvasRenderingContext2DWebGL.prototype.scale = function(x, y) {
	mat2d.scale(this.state.m, x, y);
};

CanvasRenderingContext2DWebGL.prototype.rotate = function(angle) {
	mat2d.rotate(this.state.m, angle);
};

CanvasRenderingContext2DWebGL.prototype.translate = function(x, y) {
	mat2d.translate(this.state.m, x, y);
};

CanvasRenderingContext2DWebGL.prototype.transform = function(a, b, c, d, e, f) {
	var m = this.state.m;
	mat2d.mult(m, m, a, b, c, d, e, f);
};

CanvasRenderingContext2DWebGL.prototype.setTransform = function(a, b, c, d, e, f) {
	mat2d.set(this.state.m, a, b, c, d, e, f);
};

CanvasRenderingContext2DWebGL.prototype.scaleArr = function(arr, x, y) {
	mat2d.scale(this.state.m, arr[x], arr[y]);
}

CanvasRenderingContext2DWebGL.prototype.rotateArr = function(arr, index) {
	mat2d.rotate(this.state.m, arr[index]);
}

CanvasRenderingContext2DWebGL.prototype.translateArr = function(arr, x, y) {
	mat2d.translate(this.state.m, arr[x], arr[y]);
}

CanvasRenderingContext2DWebGL.prototype.transformMatrix = function(matrix) {
	var m = this.state.m;
	mat2d.multiply(m, m, matrix);
}

CanvasRenderingContext2DWebGL.prototype.setTransformMatrix = function(matrix) {
	mat2d.copy(this.state.m, matrix);
};


Object.defineProperty(CanvasRenderingContext2DWebGL.prototype, "globalTint", {
	get: function () {
		return this.state.globalTint;
	},
	set: function(value) {
		this.state.globalTint = value;
	},
	enumerable: false,
	configurable: true
});

Object.defineProperty(CanvasRenderingContext2DWebGL.prototype, "globalImageFilter", {
	get: function () {
		return this.state.globalImageFilter;
	},
	set: function(value) {
		this.state.globalImageFilter = value;
	},
	enumerable: false,
	configurable: true
});

Object.defineProperty(CanvasRenderingContext2DWebGL.prototype, "globalAlpha", {
	get: function () {
		return this.state.globalAlpha;
	},
	set: function(value) {
		this.state.globalAlpha = value;
	},
	enumerable: false,
	configurable: true
});

CanvasRenderingContext2DWebGL.prototype.globalCompositeOperationApply = function(compositeOperation) {
	var gl = this.gl;
	this.commitDrawImage();

	//FIXME: not test yet
	if ("darker" == compositeOperation) {
		gl.blendEquation(gl.FUNC_SUBTRACT);
	} else {
		gl.blendEquation(gl.FUNC_ADD);
	}

	switch(compositeOperation) {
		case "source-over":
			//
			//gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
			//
			gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
			break;
		case "destination-over":
			gl.blendFunc(gl.ONE_MINUS_DST_ALPHA, gl.ONE);
			break;
		case "clear":
			gl.blendFunc(gl.ZERO, gl.ZERO);
			break;
		case "copy":
		case "source":
			gl.blendFunc(gl.ONE, gl.ZERO);
			break;
		case "destination":
			gl.blendFunc(gl.ZERO, gl.ONE);
			break;
		case "source-atop":
			gl.blendFunc(gl.DST_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
			break;
		case "destination-atop":
			gl.blendFunc(gl.ONE_MINUS_DST_ALPHA, gl.SRC_ALPHA);
			break;
		case "source-in":
			gl.blendFunc(gl.DST_ALPHA, gl.ZERO);
			break;
		case "destination-in":
			gl.blendFunc(gl.ZERO, gl.SRC_ALPHA);
			break;
		case "source-out":
			gl.blendFunc(gl.ONE_MINUS_DST_ALPHA, gl.ZERO);
			break;
		case "destination-out":
			gl.blendFunc(gl.ZERO, gl.ONE_MINUS_SRC_ALPHA);
			break;
		case "lighter":
		case "darker":
			gl.blendFunc(gl.ONE, gl.ONE);
			break;
		case "xor":
			gl.blendFunc(gl.ONE_MINUS_DST_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
			break;
		case "normal":
		default:
			gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
			break;
	}
}

Object.defineProperty(CanvasRenderingContext2DWebGL.prototype, "globalCompositeOperation", {
	get: function () {
		return this.state.globalCompositeOperation;
	},
	set: function(value) {
		if(value !== this.state.globalCompositeOperation) {
			this.state.globalCompositeOperation = value;
			this.globalCompositeOperationApply(value);
		}
	},
	enumerable: false,
	configurable: true
});

Object.defineProperty(CanvasRenderingContext2DWebGL.prototype, "strokeStyle", {
	get: function () {
		return this.state.strokeStyle.str;
	},
	set: function(value) {
		var color = this.state.strokeStyle.str;
		if(value && color !== value) {
			this.state.strokeStyle =  CanvasRenderingContext2DWebGL.parseColor(value);
		}
	},
	enumerable: false,
	configurable: true
});

Object.defineProperty(CanvasRenderingContext2DWebGL.prototype, "fillStyle", {
	get: function () {
		return this.state.fillStyle.str;
	},
	set: function(value) {
		var color = this.state.fillStyle.str;
		if(value && color !== value) {
			this.state.fillStyle = CanvasRenderingContext2DWebGL.parseColor(value);
		}
	},
	enumerable: false,
	configurable: true
});

CanvasRenderingContext2DWebGL.prototype.clearRect = function(x, y, w, h) {
	this.beginPath();
	this.rect(x, y, w, h);
	this.fill();
	this.beginPath();
};

CanvasRenderingContext2DWebGL.prototype.fillRect = function(x, y, w, h) {
	this.beginPath();
	this.rect(x, y, w, h);
	this.fill();
	this.beginPath();
};

CanvasRenderingContext2DWebGL.prototype.strokeRect = function(x, y, w, h) {
	this.beginPath();
	this.rect(x, y, w, h);
	this.stroke();
	this.beginPath();
};

CanvasRenderingContext2DWebGL.prototype.stroke = function() {
	if(this.lineWidth && this.strokeStyle) {
		this.gl.lineWidth(this.lineWidth);
		this.commitDrawImage();
		
		this.strokeCount++;
		var program = this.drawPrimitivesProgram;
		this.drawPrimitives(program, this.drawPrimitiveQueue, program.stroke, this.state.strokeStyle);
	}
}

CanvasRenderingContext2DWebGL.prototype.fill = function() {
	if(this.fillStyle) {
		this.commitDrawImage();

		this.fillCount++;
		var program = this.drawPrimitivesProgram;
		this.drawPrimitives(program, this.drawPrimitiveQueue, program.fill, this.state.fillStyle);
	}
}

CanvasRenderingContext2DWebGL.prototype.drawStencil = function(drawPrimitiveQueue, level, clear) {
	var gl = this.gl;
	var program = this.drawPrimitivesProgram;
	var passOp = clear ? gl.DECR : gl.INCR;
	
	gl.stencilMask(0xff);
	gl.stencilFunc(gl.ALWAYS, 1, 0xff);
	gl.stencilOp(gl.KEEP, gl.KEEP, passOp);
	gl.colorMask(false, false, false, false);

	this.drawPrimitives(program, drawPrimitiveQueue, program.clip, this.stencilColor);

	gl.stencilMask(0);
	gl.stencilFunc(gl.EQUAL, level, 0xff);
	gl.colorMask(true, true, true, true);
//  for test	
//	this.drawPrimitives(program, drawPrimitiveQueue, program.stroke, this.strokeStyle);
}

CanvasRenderingContext2DWebGL.prototype.clearClip = function(drawPrimitiveQueue) {
	var gl = this.gl;
	if(!drawPrimitiveQueue) {
		gl.disable(gl.STENCIL_TEST);	

		return;
	}

	this.commitDrawImage();
	this.drawStencil(drawPrimitiveQueue, --this.clipLevel, true);
}

CanvasRenderingContext2DWebGL.prototype.clip = function() {
	this.savePrimitiveQueueForClip();

	var gl = this.gl;
	if(this.clipLevel === 0) {
		gl.enable(gl.STENCIL_TEST);	
	}

	this.commitDrawImage();
	var drawPrimitiveQueue = this.state.clipPaths;
	if(drawPrimitiveQueue) {
		this.drawStencil(drawPrimitiveQueue, ++this.clipLevel, false);
	}
}


CanvasRenderingContext2DWebGL.prototype.drawPrimitives = function(program, drawPrimitiveQueue, drawFunc, color) {
	var dataBuffer = drawPrimitiveQueue.dataBuffer.getReadBuffer();
	var paths = drawPrimitiveQueue.paths;
	var state = this.state;

	var end = 0;
	var start = 0;
	var arr = null;
	var n = paths.size;
	var tint = state.globalTint * 256 >> 0;
	var alpha = state.globalAlpha * 256 >> 0;

	program.prepareDraw(dataBuffer, color, alpha, tint);
	for(var i = 0; i < n; i++) {
		var start = paths[i];
		if(i < (n-1)) {
			end = paths[i+1]
		}else{
			end = dataBuffer.size;
		}

		if(end > start) {
			this.drawCalls++;
			drawFunc.call(program, start, end);
		}
	}
};

CanvasRenderingContext2DWebGL.prototype.doClipRect = function(rect) {
	var gl = this.gl;
	var canvas = this.canvas;
	var canvasWidth = canvas.width;
	var canvasHeight = canvas.height;

	this.commitDrawImage();
	gl.enable(gl.SCISSOR_TEST);

	if(!rect || !rect.w || !rect.h) {
		gl.scissor(0, 0, canvasWidth, canvasHeight);
	}else{

		var virtualWidth = gl.w;
		var virtualHeight = gl.h;
		var scaleX = canvasWidth/virtualWidth;
		var scaleY = canvasHeight/virtualHeight;

		var yy = (rect.y-1) * scaleY;
		var x = rect.x * scaleX;
		var w = rect.w * scaleX;
		var h = rect.h * scaleY;
		var y = canvasHeight-(yy+h);
		gl.scissor(x, y, w, h);
	}
}

CanvasRenderingContext2DWebGL.prototype.clipRect = function(x, y, w, h) {
	var state = this.state;
	var m = state.m;
	var p = mat2d.transformPoint(m, x, y);
	var oldClipRect = state.clipRect;
	
	state.clipRect = {x:p.x, y:p.y, w:w, h:h};

	if(oldClipRect) {
		state.clipRect = Rect.intersection(state.clipRect, oldClipRect);
	}

	if(state.clipRect) {
		this.doClipRect(state.clipRect);
	}
};

CanvasRenderingContext2DWebGL.prototype.drawGlyph = function(image, program, sx, sy, sw, sh, dx, dy, dw, dh) {
	this.prepareDrawImage(image, program);
	this.drawImageEx(image, sx, sy, sw, sh, dx*10, dy*10, (dx+dw)*10, dy*10, (dx+dw)*10, (dy+dh)*10, dx*10, (dy+dh)*10); 
}

CanvasRenderingContext2DWebGL.prototype.doFillText = function(text, x, y, maxWidth) {
	return;
}

CanvasRenderingContext2DWebGL.prototype.fillText = function(text, x, y, maxWidth) {
	var m = this.state.m;
	var p = mat2d.transformPointInt(m, x, y);
	this.doFillText(text, p.x/10, p.y/10, maxWidth);
};

CanvasRenderingContext2DWebGL.prototype.strokeText = function() {
	console.log("strokeText NOT IMPL");
};


CanvasRenderingContext2DWebGL.prototype.drawImageTriArr = function(image, arr) {
	var offset = 0;
	var n = (arr.length/12) >> 0;

	for(var i = 0; i < n; i++) {
		this.drawImageTri(image, arr[offset++], arr[offset++], arr[offset++], arr[offset++],
			arr[offset++], arr[offset++], arr[offset++], arr[offset++],
			arr[offset++], arr[offset++], arr[offset++], arr[offset++]);
	}
}

CanvasRenderingContext2DWebGL.prototype.drawImageTri = function(image, u0, v0, x0, y0, u1, v1, x1, y1, u2, v2, x2, y2) {
	var m = this.state.m;
	var p0 = mat2d.transformPointInt(m, x0, y0, 0);
	var p1 = mat2d.transformPointInt(m, x1, y1, 1);
	var p2 = mat2d.transformPointInt(m, x2, y2, 2);
	
	var isClockWise = (p1.x-p0.x)*(p2.y-p1.y)-(p1.y-p0.y)*(p2.x-p1.x) >= 0;
	if(isClockWise) {
		this.doDrawImageTri(image, u0, v0, p0.x, p0.y, u1, v1, p1.x, p1.y, u2, v2, p2.x, p2.y);
	}else{
		this.doDrawImageTri(image, u0, v0, p0.x, p0.y, u2, v2, p2.x, p2.y, u1, v1, p1.x, p1.y);
	}
}

CanvasRenderingContext2DWebGL.prototype.doDrawImageTri = function(image, u0, v0, x0, y0, u1, v1, x1, y1, u2, v2, x2, y2) {
	this.drawImageCount++;

	if(image.complete) {
		var ox = image.ox;
		var oy = image.oy;
		var state = this.state;
		var drawImageQueue = this.drawImageQueue;
		var program = WebGLProgramDrawImage.get(state.globalImageFilter);

		this.prepareDrawImage(image, program);
		drawImageQueue.dataBuffer = program.addTriangle(drawImageQueue.dataBuffer, 
			state.globalAlpha * 256 >>0, state.globalTint * 256 >> 0,  
			u0+ox, v0+oy, x0, y0, u1+ox, v1+oy, x1, y1, u2+ox, v2+oy, x2, y2);
	}
};

CanvasRenderingContext2DWebGL.prototype.drawImage = function(image, _sx, _sy, _sw, _sh, _dx, _dy, _dw, _dh) {
	var sx, sy, sw, sh, dx, dy, dw, dh;

	if(!image.width) {
		return;
	}

	if(_dh) {
		sx = _sx;
		sy = _sy;
		sw = _sw;
		sh = _sh;
		dx = _dx;
		dy = _dy;
		dw = _dw;
		dh = _dh;
	}else if(_sw) {
		sx = 0;
		sy = 0;
		sw = image.width;
		sh = image.height;
		dx = _sx;
		dy = _sy;
		dw = _sw;
		dh = _sh;
	}else {
		sx = 0;
		sy = 0;
		sw = image.width;
		sh = image.height;
		dx = _sx;
		dy = _sy;
		dw = sw;
		dh = sh;
	}
	
	var state = this.state;
	var program = WebGLProgramDrawImage.get(state.globalImageFilter);
	this.prepareDrawImage(image, program);

	var m = state.m;
   	var a = m[0];
   	var b = m[1];
   	var c = m[2];
   	var d = m[3];
   	var e = m[4];
   	var f = m[5];
	var top = dy;
	var left = dx;
	var right = dx+dw;
	var bottom = dy+dh;

    var x1 = ((a * left + c * top + e) * 10) >> 0;
	var y1 = ((b * left + d * top + f) * 10) >> 0;

    var x2 = ((a * right + c * top + e) * 10) >> 0;
	var y2 = ((b * right + d * top + f) * 10) >> 0;
    
    var x3 = ((a * right + c * bottom + e) * 10) >> 0;
	var y3 = ((b * right + d * bottom + f) * 10) >> 0;
    
    var x4 = ((a * left + c * bottom + e) * 10) >> 0;
	var y4 = ((b * left + d * bottom + f) * 10) >> 0;

	var cw10 = this.canvasWidth10;
	var ch10 = this.canvasHeight10;
	if((x1 < 0 && x2 < 0 && x3 < 0 && x4 < 0) 
		|| (y1 < 0 && y2 < 0 && y3 < 0 && y4 < 0)
		|| (x1 > cw10 && x2 > cw10 && x3 > cw10 && x4 > cw10) 
		|| (y1 > ch10 && y2 > ch10 && y3 > ch10 && y4 > ch10)) {
		this.drawImageCount++;
		return;
	}

	this.drawImageEx(image, sx+image.ox, sy+image.oy, sw, sh, x1, y1, x2, y2, x3, y3, x4, y4);
}

CanvasRenderingContext2DWebGL.prototype.prepareDrawImage = function(image, program) {
	var drawImageQueue = this.drawImageQueue;
	if(drawImageQueue.image) {
		if(drawImageQueue.image.texture !== image.texture || drawImageQueue.program !== program
				|| drawImageQueue.globalCompositeOperation !== this.state.globalCompositeOperation) {

			this.commitDrawImage();
			drawImageQueue.image = image; 
			drawImageQueue.program = program;
		  this.loadTextureWithImage(image);
		}
	}else{
		this.loadTextureWithImage(image);

		drawImageQueue.image = image; 
		drawImageQueue.program = program;
	}
}

CanvasRenderingContext2DWebGL.prototype.drawImageEx = function(image, sx, sy, sw, sh, x1, y1, x2, y2, x3, y3, x4, y4) {
	this.drawImageCount++;
	var dataBuffer = this.drawImageQueue.dataBuffer;
	var out = dataBuffer.getWriteBuffer(100);
	
	var offset = dataBuffer.size;
	var tint = this.state.globalTint * 256 >> 0;
	var alpha = this.state.globalAlpha * 256 >> 0;

	out[offset++] = sx;
	out[offset++] = sy;
	out[offset++] = alpha;
	out[offset++] = tint;
	out[offset++] = x1;
	out[offset++] = y1;

	out[offset++] = sx+sw;
	out[offset++] = sy;
	out[offset++] = alpha;
	out[offset++] = tint;
	out[offset++] = x2;
	out[offset++] = y2;
	
	out[offset++] = sx+sw;
	out[offset++] = sy+sh;
	out[offset++] = alpha;
	out[offset++] = tint;
	out[offset++] = x3;
	out[offset++] = y3;
	
	out[offset++] = sx+sw;
	out[offset++] = sy+sh;
	out[offset++] = alpha;
	out[offset++] = tint;
	out[offset++] = x3;
	out[offset++] = y3;
	
	out[offset++] = sx;
	out[offset++] = sy+sh;
	out[offset++] = alpha;
	out[offset++] = tint;
	out[offset++] = x4;
	out[offset++] = y4;
	
	out[offset++] = sx;
	out[offset++] = sy;
	out[offset++] = alpha;
	out[offset++] = tint;
	out[offset++] = x1;
	out[offset++] = y1;
	dataBuffer.size = offset;

	return;
}

CanvasRenderingContext2DWebGL.prototype.commitDrawImage = function() {
	var drawImageQueue = this.drawImageQueue;
	var dataBuffer = drawImageQueue.dataBuffer.getReadBuffer();
	
	if(dataBuffer.size < 1 || !drawImageQueue.image) {
		return;
	}
	
	this.drawImageBatch(drawImageQueue.image, drawImageQueue.program, dataBuffer);

	drawImageQueue.dataBuffer.reset();
	drawImageQueue.image = null;
	drawImageQueue.program = null;
	drawImageQueue.globalCompositeOperation = this.globalCompositeOperation;

	return;
}


Object.defineProperty(CanvasRenderingContext2DWebGL.prototype, "lineWidth", {
	get: function () {
		return this.state.lineWidth;
	},
	set: function(value) {
		this.state.lineWidth = value;
	},
	enumerable: false,
	configurable: true
});

Object.defineProperty(CanvasRenderingContext2DWebGL.prototype, "lineCap", {
	get: function () {
		return this.state.lineCap;
	},
	set: function(value) {
		this.state.lineCap = value;
	},
	enumerable: false,
	configurable: true
});

Object.defineProperty(CanvasRenderingContext2DWebGL.prototype, "lineJoin", {
	get: function () {
		return this.state.lineJoin;
	},
	set: function(value) {
		this.state.lineJoin = value;
	},
	enumerable: false,
	configurable: true
});

Object.defineProperty(CanvasRenderingContext2DWebGL.prototype, "miterLimit", {
	get: function () {
		return this.state.miterLimit;
	},
	set: function(value) {
		this.state.miterLimit = value;
	},
	enumerable: false,
	configurable: true
});

Object.defineProperty(CanvasRenderingContext2DWebGL.prototype, "font", {
	get: function () {
		return this.state.font;
	},
	set: function(value) {
		this.state.font = value;
	},
	enumerable: false,
	configurable: true
});

Object.defineProperty(CanvasRenderingContext2DWebGL.prototype, "textAlign", {
	get: function () {
		return this.state.textAlign;
	},
	set: function(value) {
		this.state.textAlign = value;
	},
	enumerable: false,
	configurable: true
});

Object.defineProperty(CanvasRenderingContext2DWebGL.prototype, "textBaseline", {
	get: function () {
		return this.state.textBaseline;
	},
	set: function(value) {
		this.state.textBaseline = value;
	},
	enumerable: false,
	configurable: true
});

CanvasRenderingContext2DWebGL.prototype.beginPath = function() {
	this.drawPrimitiveQueue.dataBuffer.reset();
	this.drawPrimitiveQueue.paths.reset();
}

CanvasRenderingContext2DWebGL.prototype.closePath = function() {
	this.addPoint(this.firstX, this.firstY, false);
};

CanvasRenderingContext2DWebGL.prototype.savePrimitiveQueueForClip = function() {
	var drawPrimitiveQueue = this.drawPrimitiveQueue;
	if(drawPrimitiveQueue.dataBuffer.size < 6) {
		return;
	}
	
	this.state.clipPaths = {
		id : this.currentID++,
		paths : drawPrimitiveQueue.paths.dup(),
		dataBuffer : drawPrimitiveQueue.dataBuffer.dup()
	}
}

CanvasRenderingContext2DWebGL.prototype.hasPoint = function() {
	return this.drawPrimitiveQueue.dataBuffer.size > 0;
}

CanvasRenderingContext2DWebGL.prototype.addPoint = function(x, y, newPath) {
	var drawPrimitiveQueue = this.drawPrimitiveQueue;
	var dataBuffer = drawPrimitiveQueue.dataBuffer;
	
	if(newPath) {
		this.firstX = x;
		this.firstY = y;
		drawPrimitiveQueue.paths.push1(dataBuffer.size);
	}
	
	this.lastX = x;
	this.lastY = y;
	drawPrimitiveQueue.dataBuffer = dataBuffer.pushX(x, y);

	return;
}

CanvasRenderingContext2DWebGL.prototype.moveTo = function(x, y) {
	var m = this.state.m;
	var p = mat2d.transformPointInt(m, x, y);

	this.addPoint(p.x, p.y, true);
};

CanvasRenderingContext2DWebGL.prototype.lineTo = function(x, y) {
	var m = this.state.m;
	var p = mat2d.transformPointInt(m, x, y);

	this.addPoint(p.x, p.y, false);
};

CanvasRenderingContext2DWebGL.prototype.getWidth = function() {
	return this.canvas.w || this.canvas.width;
}

CanvasRenderingContext2DWebGL.prototype.getHeight = function() {
	return this.canvas.h || this.canvas.height;
}

CanvasRenderingContext2DWebGL.prototype.rect = function(x, y, w, h) {
	var m = this.state.m;
	var p1 = mat2d.transformPointInt(m, x, y, 0);
	var p2 = mat2d.transformPointInt(m, x+w, y, 1);
	var p3 = mat2d.transformPointInt(m, x+w, y+h, 2);
	var p4 = mat2d.transformPointInt(m, x, y+h, 3);
	var cw = this.canvasWidth;
	var ch = this.canvasHeight;
	var cw10 = this.canvasWidth10;
	var ch10 = this.canvasHeight10;

	if((p1.x < 0 && p2.x < 0 && p3.x < 0 && p4.x < 0) 
		|| (p1.y < 0 && p2.y < 0 && p3.y < 0 && p4.y < 0)
		|| (p1.x > cw10 && p2.x > cw10 && p3.x > cw10 && p4.x > cw10) 
		|| (p1.y > ch10 && p2.y > ch10 && p3.y > ch10 && p4.y > ch10)) {
		return;
	}

  this.addPoint(p1.x, p1.y, true);
  this.addPoint(p2.x, p2.y, false);
  this.addPoint(p3.x, p3.y, false);
  this.addPoint(p4.x, p4.y, false);
  this.addPoint(p1.x, p1.y, false);
};


//
// code adapted from nanovg begin {
// https://github.com/memononen/nanovg
//
CanvasRenderingContext2DWebGL.prototype.tesselateBezier = function(x1, y1, x2, y2, x3, y3, x4, y4, level, type) {
	var x12,y12,x23,y23,x34,y34,x123,y123,x234,y234,x1234,y1234;
	var dx,dy,d2,d3;

	if (level > 10) return;

	x12 = (x1+x2)*0.5;
	y12 = (y1+y2)*0.5;
	x23 = (x2+x3)*0.5;
	y23 = (y2+y3)*0.5;
	x34 = (x3+x4)*0.5;
	y34 = (y3+y4)*0.5;
	x123 = (x12+x23)*0.5;
	y123 = (y12+y23)*0.5;

	dx = x4 - x1;
	dy = y4 - y1;
	d2 = Math.abs(((x2 - x4) * dy - (y2 - y4) * dx));
	d3 = Math.abs(((x3 - x4) * dy - (y3 - y4) * dx));

	if ((d2 + d3)*(d2 + d3) < this.tessTol * (dx*dx + dy*dy)) {
		this.addPoint(x4, y4, type);
		return;
	}

	x234 = (x23+x34)*0.5;
	y234 = (y23+y34)*0.5;
	x1234 = (x123+x234)*0.5;
	y1234 = (y123+y234)*0.5;

	this.tesselateBezier(x1,y1, x12,y12, x123,y123, x1234,y1234, level+1, 0); 
	this.tesselateBezier(x1234,y1234, x234,y234, x34,y34, x4,y4, level+1, type); 
}

CanvasRenderingContext2DWebGL.prototype.doArcTo = function(x1, y1, x2, y2, radius) {
	var rn = {x:0, y:0};
	var x0 = this.lastX;
	var y0 = this.lastY;
	var dx0,dy0, dx1,dy1, a, d, cx,cy, a0,a1;
	var ccw = false;

	if (!this.hasPoint()) {
		return;
	}

	if (Math.ptEquals(x0,y0, x1,y1, this.distTol) ||
			Math.ptEquals(x1,y1, x2,y2, this.distTol) ||
			Math.distPtSeg(x1,y1, x0,y0, x2,y2) < this.distTol*this.distTol ||
			radius < this.distTol) {
		this.addPoint(x1, y1, false);
		return;
	}

	dx0 = x0-x1;
	dy0 = y0-y1;
	dx1 = x2-x1;
	dy1 = y2-y1;
	Math.normalize(dx0, dy0, rn);
	dx0 = rn.x;
	dy0 = rn.y;

	Math.normalize(dx1, dy1, rn);
	dx1 = rn.x;
	dy1 = rn.y;

	a = Math.acos(dx0*dx1 + dy0*dy1);
	d = radius / Math.tan(a/2.0);

	if (d > 10000.0) {
		this.addPoint(x1, y1, false);
		return;
	}

	if (Math.cross(dx0,dy0, dx1,dy1) > 0.0) {
		cx = x1 + dx0*d + dy0*radius;
		cy = y1 + dy0*d + -dx0*radius;
		a0 = Math.atan2(dx0, -dy0);
		a1 = Math.atan2(-dx1, dy1);
		ccw = false;
	} else {
		cx = x1 + dx0*d + -dy0*radius;
		cy = y1 + dy0*d + dx0*radius;
		a0 = Math.atan2(-dx0, dy0);
		a1 = Math.atan2(dx1, -dy1);
		ccw = true;
	}

	this.doArc(cx, cy, radius, a0, a1, ccw);
}

CanvasRenderingContext2DWebGL.prototype.doArc = function(cx, cy, r, a0, a1, ccw)
{
	var a = 0, da = 0, hda = 0, kappa = 0;
	var dx = 0, dy = 0, x = 0, y = 0, tanx = 0, tany = 0;
	var px = 0, py = 0, ptanx = 0, ptany = 0;
	var vals = new Array(3 + 5*7 + 100);
	var i, ndivs, nvals;
	var newPath = !this.hasPoint();

	da = a1 - a0;
	if (!ccw) {
		if (Math.abs(da) >= Math.PI*2) {
			da = Math.PI*2;
		} else {
			while (da < 0.0) da += Math.PI*2;
		}
	} else {
		if (Math.abs(da) >= Math.PI*2) {
			da = -Math.PI*2;
		} else {
			while (da > 0.0) da -= Math.PI*2;
		}
	}

	// Split arc into max 90 degree segments.
	ndivs = Math.floor(Math.max(1, Math.min((Math.abs(da) / (Math.PI*0.5) + 0.5), 5)));
	hda = (da / ndivs) / 2.0;
	kappa = Math.abs(4.0 / 3.0 * (1.0 - Math.cos(hda)) / Math.sin(hda));

	if (ccw) {
		kappa = -kappa;
	}

	nvals = 0;
	for (i = 0; i <= ndivs; i++) {
		a = a0 + da * (i/ndivs);
		dx = Math.cos(a);
		dy = Math.sin(a);
		x = cx + dx*r;
		y = cy + dy*r;
		tanx = -dy*r*kappa;
		tany = dx*r*kappa;

		if (i == 0) {
			this.addPoint(x, y, newPath);
		} else {
			this.bezierTo(px+ptanx, py+ptany, x-tanx, y-tany, x, y);
		}
		px = x;
		py = y;
		ptanx = tanx;
		ptany = tany;
	}

	return;
}

CanvasRenderingContext2DWebGL.prototype.quadTo = function(cx, cy, x, y) {
	var x0 = this.lastX;
	var y0 = this.lastY;
	var c1x = x0 + 2.0/3.0*(cx - x0);
	var c1y = y0 + 2.0/3.0*(cy - y0);
	var c2x = x + 2.0/3.0*(cx - x);
	var c2y = y + 2.0/3.0*(cy - y);

	this.bezierTo(c1x, c1y, c2x, c2y, x, y);
}

CanvasRenderingContext2DWebGL.prototype.bezierTo = function(c1x, c1y, c2x, c2y, x, y) {
	this.tesselateBezier(this.lastX, this.lastY, c1x, c1y, c2x, c2y, x, y, 0, 0);
}

//
// } code adapted from nanovg end
//

CanvasRenderingContext2DWebGL.prototype.quadraticCurveTo = function(cpx, cpy, x, y) {
	var m = this.state.m;
	var cp = mat2d.transformPointInt(m, cpx, cpy, 0);
	var p = mat2d.transformPointInt(m, x, y, 1);

	this.quadTo(cp.x, cp.y, p.x, p.y);
};

CanvasRenderingContext2DWebGL.prototype.bezierCurveTo = function(cp1x, cp1y, cp2x, cp2y, x, y) {
	var m = this.state.m;
	var cp1 = mat2d.transformPointInt(m, cp1x, cp1y, 0);
	var cp2 = mat2d.transformPointInt(m, cp2x, cp2y, 1);
	var p = mat2d.transformPointInt(m, x, y, 2);

	this.bezierTo(cp1.x, cp1.y, cp2.x, cp2.y, p.x, p.y);
};

CanvasRenderingContext2DWebGL.prototype.arcTo = function(x1, y1, x2, y2, radius) {
	var m = this.state.m;
	var r = radius*10 >> 0;
	var p1 = mat2d.transformPointInt(m, x1, y1, 0);
	var p2 = mat2d.transformPointInt(m, x2, y2, 1);

	this.doArcTo(p1.x, p1.y, p2.x, p2.y, r);
};

CanvasRenderingContext2DWebGL.prototype.arc = function(x, y, radius, startAngle, endAngle, ccw) {
	var r = radius*10 >> 0;
	var m = this.state.m;
	var p = mat2d.transformPointInt(m, x, y);
	var cw10 = this.canvasWidth10;
	var ch10 = this.canvasHeight10;

	if((p.x - r) > cw10 || (p.x + r) < 0 || (p.y - r) > ch10 || (p.y + r) < 0) {
		return;
	}

	this.doArc(p.x, p.y, r, startAngle, endAngle, ccw);
};

CanvasRenderingContext2DWebGL.getWebGLContext = function(canvas, webglOptions) {
	var gl = null;
	var names = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"];
	var options = webglOptions || CanvasRenderingContext2DWebGL.webglOptions;
	for (var i = 0; i < names.length; i++) {
		try {
      		gl = canvas.getContext(names[i], options);
		} catch(e) {}
    
		if (gl) {
			break;
		}
	}

	return gl;
}

CanvasRenderingContext2DWebGL.prototype.initGL = function(canvas) {
	var gl = CanvasRenderingContext2DWebGL.getWebGLContext(canvas, this.webglOptions);

	gl.w = canvas.width;
	gl.h = canvas.height;

//	gl.cullFace(gl.BACK);
//	gl.frontFace(gl.CW);
//	gl.enable(gl.CULL_FACE);
	gl.enable(gl.BLEND);
	gl.enable(gl.STENCIL_TEST);
	gl.disable(gl.DEPTH_TEST);
	gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

	this.gl = gl;
	this.canvas = canvas;
	this.buffer = gl.createBuffer();
	
	WebGLProgramDrawImage.init(gl, this.buffer);
	this.drawPrimitivesProgram = new WebGLProgramDrawPrimitives(gl, this.buffer);

	return gl;
}

CanvasRenderingContext2DWebGL.prototype.isPOT = function(n) {
	return n > 0 && (n & (n - 1)) === 0;
}

CanvasRenderingContext2DWebGL.prototype.loadTextureWithImage = function(image) {
	if(image.texture || !image.width) {
		return image;
	}

	var gl = this.gl;
	var texture = gl.createTexture();
	gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
	
	image.texture = texture;
	image.ox = 0;
	image.oy = 0;
	texture.w = image.width;
	texture.h = image.height;
	texture.src = image.src;

	gl.bindTexture(gl.TEXTURE_2D, texture);
	gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
	gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);

	//NPOT
	if(this.isPOT(image.width) && this.isPOT(image.height)) {
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
	}
	else {
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
	}

	gl.bindTexture(gl.TEXTURE_2D, null);

	texture.update = function() {
    if(image.dirty) {
      image.dirty = false;
      this.w = image.width;
      this.h = image.height;
      gl.bindTexture(gl.TEXTURE_2D, this);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
      gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.bindTexture(gl.TEXTURE_2D, null);
    }
	}

	return image;
}

CanvasRenderingContext2DWebGL.prototype.drawImageBatch = function(image, program, bufferData) {
	this.drawCalls++;
	this.drawImageCalls++;

	program.draw(image, bufferData);
}

CanvasRenderingContext2DWebGL.prototype.beginFrame = function() {
	var gl = this.gl;
	var w = this.getWidth();
	var h = this.getHeight();
	var canvas = this.canvas;

	this.drawCalls = 0;
	this.drawImageCalls = 0;
	this.drawImageCount = 0;
	this.fillCount = 0;
	this.strokeCount = 0;
	this.clipLevel = 0;
	this.canvasWidth = w;
	this.canvasHeight = h;
	this.canvasWidth10 = w * 10;
	this.canvasHeight10 = h * 10;

	if(gl.w !== w || gl.h !== h) {
		gl.w = w;
		gl.h = h;
		gl.clearColor(1.0, 1.0, 1.0, 1.0);
		gl.viewport(0, 0, canvas.width, canvas.height);
	}

	if(this.showFPS) {
		this.renderTimes++;
		this.startTime = Date.now();
		this.thisSeconds = (this.startTime/1000) >> 0;	

		if(this.thisSeconds !== this.lastSeconds) {
			this.fps = this.renderTimes;
			this.lastSeconds = this.thisSeconds;
			this.renderTimes = 0;
		}
	}

	if(this.webglOptions.preserveDrawingBuffer) {
		gl.clear(gl.STENCIL_BUFFER_BIT);
	}else {
		gl.clear(gl.STENCIL_BUFFER_BIT | gl.COLOR_BUFFER_BIT);
	}

	this.lastX = 0;
	this.lastY = 0;
	this.firstX = 0;
	this.firstY = 0;

	this.lineWidth = 1;
	this.globalAlpha = 1;
	this.globalTint = 1;
	this.textAlign = "left";
	mat2d.identity(this.state.m);
	this.textBaseline = "middle";
	this.globalImageFilter = "normal";
	this.state.fillStyle = CanvasRenderingContext2DWebGL.fillStyle;
	this.state.strokeStyle = CanvasRenderingContext2DWebGL.strokeStyle;
	this.stencilColor = CanvasRenderingContext2DWebGL.stencilColor;
	this.globalCompositeOperation = "source-over";
	this.beginPath();
}

CanvasRenderingContext2DWebGL.prototype.drawStat = function(stat) {
	this.save();
    this.fillStyle = this.statusBgColor;
	this.fillRect(0, 0, 280, 35);

	var str = stat + " images(" + this.drawImageCount + "/" + this.drawImageCalls + ") calls:" + this.drawCalls;

	this.font = this.statusFont;
	this.fillStyle = this.statusFontColor;
	this.textBaseline = "top";
	this.textAlign = "left";
	this.fillText(str, 5, 5);
	this.restore();

	return;
}

CanvasRenderingContext2DWebGL.prototype.onEndFrame = function() {
	if(this.showFPS) {
		var stat = this.fps;
		this.drawStat(stat);
	}
}

CanvasRenderingContext2DWebGL.prototype.endFrame = function() {
	var n = this.stack.length;

	if(n > 0) {
		for(var i = 0; i < n; i++) {
			this.restore();
		}
		console.log("restore times < save times.");
	}

	mat2d.identity(this.state.m);
	this.globalAlpha = 1;
	this.globalTint = 1;
	this.globalCompositeOperationApply("source-over");

	this.onEndFrame();
	this.commitDrawImage();
}

CanvasRenderingContext2DWebGL.colors = {};
CanvasRenderingContext2DWebGL.parseColor = function(str) {
	var cacheColor = CanvasRenderingContext2DWebGL.colors[str];
	if(cacheColor) {
		return cacheColor;
	}

	var s = str || "white";
	var c = cs.get(s.toLowerCase());

	if(!c) {
		c = cs.get("white");
	}

	var value = c.value;
	var color = {
		r : value[0]/255,
		g : value[1]/255,
		b : value[2]/255,
		a : value[3],
		str:str
	};

	CanvasRenderingContext2DWebGL.colors[str] = color;

	return color;
}

CanvasRenderingContext2DWebGL.State = function() {
	this.font = "16px sans";
	this.lineWidth = 1;
	this.globalAlpha = 1;
	this.globalTint = 1;
	this.m = mat2d.create();
	this.clipRect = null;
	this.clipPaths = null;
	this.textAlign = "left";
	this.textBaseline = "middle";
	this.globalImageFilter = "normal";
	this.globalCompositeOperation = "source-over";
	this.fillStyle = CanvasRenderingContext2DWebGL.fillStyle;
	this.strokeStyle = CanvasRenderingContext2DWebGL.strokeStyle;
}

CanvasRenderingContext2DWebGL.createState = function() {
	if(CanvasRenderingContext2DWebGL.stateCache.length) {
		return CanvasRenderingContext2DWebGL.stateCache.pop();
	}else{
		return new CanvasRenderingContext2DWebGL.State();
	}
}

CanvasRenderingContext2DWebGL.stateCache = [];
CanvasRenderingContext2DWebGL.destroyState = function(s) {
	if(s.clipRect) {
		s.clipRect = null;
	}
	if(s.clipPaths) {
		s.clipPaths = null;
	}
	CanvasRenderingContext2DWebGL.stateCache.push(s);
}

CanvasRenderingContext2DWebGL.State.prototype.clone = function() {
	var s = CanvasRenderingContext2DWebGL.createState();

	if(this.clipRect) {
		s.clipRect = this.clipRect;
	}

	if(this.clipPaths) {
		s.clipPaths = this.clipPaths;
	}

	mat2d.copy(s.m, this.m);

	s.font = this.font;
	s.lineWidth = this.lineWidth;
	s.textAlign = this.textAlign;
	s.fillStyle = this.fillStyle;
	s.strokeStyle = this.strokeStyle;
	s.textBaseline = this.textBaseline;
	s.globalTint = this.globalTint;
	s.globalAlpha = this.globalAlpha;
	s.globalImageFilter = this.globalImageFilter;
	s.globalCompositeOperation = this.globalCompositeOperation;

	return s;
}

CanvasRenderingContext2DWebGL.prototype.init = function(canvas) {
	this.stack = [];
	this.state = CanvasRenderingContext2DWebGL.createState();
	
	this.initGL(canvas);
	this.lastUpdateTime = Date.now();

	var drawImageProgram = WebGLProgramDrawImage.get();
	this.drawImageQueue = {};
	this.drawImageQueue.globalAlpha = 256;
	this.drawImageQueue.globalCompositeOperation = 0;
	this.drawImageQueue.dataBuffer = drawImageProgram.createDataBuffer(20*1024);
	
	this.drawPrimitiveQueue = {};
	this.drawPrimitiveQueue.paths = Int16Array.create(1024);
	this.drawPrimitiveQueue.dataBuffer = this.drawPrimitivesProgram.createDataBuffer(20*1024);
	this.statusFont = "20px sans";
	this.statusFontColor = "Green";
	this.statusBgColor = "rgba(0,0,0,1)";

	return this;
}

CanvasRenderingContext2DWebGL.prototype.ensureCtx2d = function() {
}

CanvasRenderingContext2DWebGL.prototype.measureText = function(text) {
}

CanvasRenderingContext2DWebGL.prototype.setShowFPS = function(showFPS) {
}

CanvasRenderingContext2DWebGL.create = function(canvas, options) {
	var ctx = new CanvasRenderingContext2DWebGL(options);

	CanvasRenderingContext2DWebGL.fillStyle = CanvasRenderingContext2DWebGL.parseColor("white");
	CanvasRenderingContext2DWebGL.strokeStyle = CanvasRenderingContext2DWebGL.parseColor("black");
	CanvasRenderingContext2DWebGL.stencilColor = CanvasRenderingContext2DWebGL.parseColor("white");

	return ctx.init(canvas);
}

function ImageCache() {

}

ImageCache.nextID = 100;
ImageCache.images = {};
ImageCache.invalidImageId = 0;

ImageCache.add = function (image) {
  let id = ImageCache.nextID++;
  let key = id.toString();

  ImageCache.images[key] = image;

  return id;
}

ImageCache.remove = function (id) {
  let key = id.toString();
  let image = ImageCache.images[key];

  delete ImageCache.images[key];

  return image;
}

ImageCache.get = function (id) {
  let key = id.toString();
  if (ImageCache.images.hasOwnProperty(key)) {
    return ImageCache.images[key];
  } else {
    return null;
  }
}

ImageCache.getIdOfNameAndTheme = function (name, theme = 'default') {
  let name_with_theme = theme + ':' + name;
  const images = ImageCache.images;

  for (const key in images) {
    const image = images[key];
    if (image.name === name_with_theme) {
      return key;
    }
  }

  return ImageCache.invalidImageId;
}
function AssetsManager() { }

AssetsManager.exist = function (type, name) {
  const assets = g_awtk_assets[type];
  if (assets) {
    const asset = assets.find(iter => {
      return name == iter.name;
    });

    return !!asset;
  }

  return false;
}

AssetsManager.getImageByDPI = function (name, dpi, theme = 'default') {
  let anydpi = '/xx/';
  let _theme = '/' + theme + '/';
  const assets = g_awtk_assets['image'];

  if (assets) {
    let asset = assets.find(iter => {
      return name == iter.name && iter.uri.indexOf(_theme) >= 0 && iter.uri.indexOf(dpi) >= 0;
    });
    if (asset == null) {
      asset = assets.find(iter => {
        return name == iter.name && iter.uri.indexOf(_theme) >= 0 && iter.uri.indexOf(anydpi) >= 0;
      });
    }

    return asset;
  }

  return null;
}

AssetsManager.getImage = function (name, theme = 'default', log = true) {
  let dpi = '/x' + Math.round(TBrowser.getDevicePixelRatio()) + '/';
  let asset = AssetsManager.getImageByDPI(name, dpi, theme);

  if (!asset && log) {
    console.log('Not found ' + name);
  }

  return asset;
}

AssetsManager.getImageURI = function (name, theme = 'default', log = true) {
  const asset = AssetsManager.getImage(name, theme, log);

  return asset ? asset.uri : null;
}

AssetsManager.getFontURI = function (name) {
  const assets = g_awtk_assets['font'];
  if (assets) {
    const asset = assets.find(iter => {
      return name == iter.name;
    });

    return asset ? asset.uri : null;
  }

  return null;
}

AssetsManager.preloadFonts = function () {
  const fonts = g_awtk_assets['font'];
  if (fonts && fonts.length > 0) {
    fonts.forEach(function (iter) {
      if (iter.name.indexOf('default') != 0) {
        TBrowser.loadFont(iter.name, iter.uri);
      }
    });
  }

  return true;
}


function testAssetManager() {
  console.log(AssetsManager.exist('image', 'msg'));
  console.log(AssetsManager.getImage('msg'));
  console.log(AssetsManager.getImageURI('msg'));
  console.log(AssetsManager.getFontURI('default'));
}

function ImageLoader() { }

ImageLoader.getWidth = function (name) {
  let image = AssetsManager.getImage(name);

  return image ? image.w : 0;
}

ImageLoader.getHeight = function (name) {
  let image = AssetsManager.getImage(name);

  return image ? image.h : 0;
}

ImageLoader.load = function (name, theme = 'default') {
  let id = ImageCache.getIdOfNameAndTheme(name, theme);
  if (id == ImageCache.invalidImageId) {
    let is_default_theme = (theme == 'default');
    let uri = AssetsManager.getImageURI(name, theme, is_default_theme);
    if (uri) {
      let image = new Image();
      let name_with_theme = theme + ':' + name;

      if (TBrowser.nonce) {
        image.setAttribute('nonce', TBrowser.nonce);
      }

      if (TBrowser.rootUri) {
        uri = TBrowser.rootUri + '/' + uri;
      } 

      image.src = uri;
      image.name = name_with_theme;
      image.onload = function () {
        console.log('image loaded: ' + name_with_theme + ' ' + uri);
        Awtk.requestRepaint(1);
      }
      id = ImageCache.add(image);
    } else if (!is_default_theme) {
      id = ImageLoader.load(name);
    }
  }
  return id;
}

function testImageLoader() {
  let id = ImageLoader.load('me');
  let w = ImageLoader.getWidth('me');
  let h = ImageLoader.getHeight('me');

  console.log(`me: ${id} ${w} ${h}`);
  id = ImageLoader.load('me');
}

function InputMethodWeb() {}

InputMethodWeb.init = function () {
  if (!InputMethodWeb.mledit) {
    InputMethodWeb.mledit = EditElement.create('textarea');
  }
  
  if (!InputMethodWeb.sledit) {
    InputMethodWeb.sledit = EditElement.create('input');
  }
}

InputMethodWeb.start = function (x, y, w, h, _inputType, isMLEdit) {
  let inputType = pointerToString(_inputType);

  InputMethodWeb.init();

  if(isMLEdit) {
    InputMethodWeb.edit = InputMethodWeb.mledit;
  } else {
    InputMethodWeb.edit = InputMethodWeb.sledit;
  }

  InputMethodWeb.edit.setFontSize(18);
  InputMethodWeb.edit.moveResize(x, y, w, h);
  InputMethodWeb.edit.setInputType(inputType);
  InputMethodWeb.edit.show();

  EventsSource.fixPointerUp();
  console.log('InputMethodWeb.start');

  return true;
}

InputMethodWeb.initEdit = function (_text, _font, fontSize, _textColor, _bgColor) {
  let text = pointerToString(_text);
  let font = pointerToString(_font);
  let bgColor = pointerToString(_bgColor);
  let textColor = pointerToString(_textColor);

  InputMethodWeb.edit.setText(text || '');
  InputMethodWeb.edit.setFont(font);
  InputMethodWeb.edit.setBgColor(bgColor);
  InputMethodWeb.edit.setFontSize(fontSize);
  InputMethodWeb.edit.setTextColor(textColor);

  return true;
}

InputMethodWeb.stop = function () {
  let value = InputMethodWeb.edit.getText() || '';

  Awtk.onImCommit(value, 0);
  InputMethodWeb.edit.hide();
  console.log('InputMethodWeb.stop');

  return true;
}

function pointerToString(pointer) {
  return pointer && Module.UTF8ToString(pointer, 1024) || null;
}
function EditElement() {}

EditElement.create = function (type) {
  let el = new EditElement();

  el.init(type);
  el.tag = type;

  return el
}

EditElement.prototype.init = function (type) {
  let id = "awtk_edit";
  let element = document.createElement(type);

  element.id = id;
  element.style['resize'] = 'none'
  document.body.appendChild(element);

  this.edit = element;

  return true;
}

EditElement.prototype.moveResize = function (x, y, w, h) {
  this.edit.style.position = "absolute";

  this.edit.style.left = x + "px";
  this.edit.style.top = y + "px";
  this.edit.style.width = w + "px";
  this.edit.style.height = (h - 4) + "px";

  return true;
}

EditElement.prototype.setFontSize = function (fontSize) {
  this.edit.style['font-size'] = fontSize + "px";

  return true;
}

EditElement.prototype.setInputType = function (inputType) {
  this.edit.type = inputType;

  return true;
}

EditElement.prototype.setZIndex = function (zIndex) {
  this.edit.style['z-index'] = zIndex;

  return true;
}

EditElement.prototype.setFont = function (font) {
  this.edit.style['font'] = font;

  return true;
}

EditElement.prototype.setTextColor = function (color) {
  this.edit.style['color'] = color;

  return true;
}

EditElement.prototype.setBgColor = function (color) {
  this.edit.style['background-color'] = color;

  return true;
}

EditElement.prototype.setText = function (text) {
  this.edit.value = text;

  return true;
}

EditElement.prototype.getText = function () {
  return this.edit.value;
}

EditElement.prototype.show = function () {
  this.edit.focus();
  this.edit.hidden = false;

  return true;
}

EditElement.prototype.hide = function () {
  this.edit.blur();
  this.edit.hidden = true;
  this.edit.onchange = null;

  return true;
}

function VGCanvas() {}

VGCanvas.getFBO = function () {
  if (VGCanvas.fbos.length < 1) {
    let canvas = VGCanvas.canvas;
    let fbo = TBrowser.createOfflineCanvas('fbo', canvas.width, canvas.height);

    fbo.id = ImageCache.add(fbo);

    VGCanvas.fbos.push(fbo);
    console.log(`VGCanvas createFBO ${fbo.id}`);
  } else {
    console.log(`VGCanvas getFBO: ${VGCanvas.fbos.length}`);
  }

  return VGCanvas.fbos.pop();
}

VGCanvas.init = function () {
  const canvas = TBrowser.createMainCanvas();
  VGCanvas.fbos = [];
  VGCanvas.canvas = canvas;
  TBrowser.createFboCanvas();
  TBrowser.activateCanvas(false);
  VGCanvas.ctx = TBrowser.getActiveContext();
  VGCanvas.width = parseInt(canvas.style.width);
  VGCanvas.height = parseInt(canvas.style.height);
  VGCanvas.ratio = TBrowser.getDevicePixelRatio();

  console.log(`VGCanvas.init ${VGCanvas.width} x ${VGCanvas.height} `);

  return true;
}

VGCanvas.beginFrame = function () {
  if(VGCanvas.ctx.beginFrame) {
    VGCanvas.ctx.beginFrame();
  }

  VGCanvas.save();
  VGCanvas.scale(VGCanvas.ratio, VGCanvas.ratio);
  
  return true;
}

VGCanvas.endFrame = function () {
  VGCanvas.restore();
  if(VGCanvas.ctx.endFrame) {
    VGCanvas.ctx.endFrame();
  }

  return true;
}

VGCanvas.createFBO = function () {
  let fbo = VGCanvas.getFBO();

  return parseInt(fbo.id);
}

VGCanvas.destroyFBO = function (id) {
  let fbo = ImageCache.get(id);

  VGCanvas.fbos.push(fbo);
  console.log(`VGCanvas.destroyFBO: ${VGCanvas.fbos.length}`);

  return true;
}

VGCanvas.bindFBO = function (id) {
  TBrowser.activateCanvas(true);
  VGCanvas.ctx = TBrowser.getActiveContext();

  let fbo = ImageCache.get(id);
  
  VGCanvas.ctx = fbo.getContext('2d');
  VGCanvas.beginFrame(); 
  VGCanvas.ctx.clearRect(0, 0, fbo.width, fbo.height);

  return true;
}

VGCanvas.unbindFBO = function (id) {
  let fbo = ImageCache.get(id);
  VGCanvas.endFrame();
  fbo.dirty = true;
  VGCanvas.ctx = TBrowser.getActiveContext();

  TBrowser.activateCanvas(false);
  VGCanvas.ctx = TBrowser.getActiveContext();
  return true;
}

VGCanvas.getWidth = function () {
  return VGCanvas.width;
}

VGCanvas.getHeight = function () {
  return VGCanvas.height;
}

VGCanvas.getDevicePixelRatio = function () {
  return TBrowser.getDevicePixelRatio();
}

VGCanvas.save = function () {
  VGCanvas.ctx.save();

  return true;
}

VGCanvas.restore = function () {
  VGCanvas.ctx.restore();

  return true;
}

VGCanvas.setMitterLimit = function (value) {
  VGCanvas.ctx.miterLimit = value;

  return true;
}

VGCanvas.setLineJoin = function (value) {
  VGCanvas.ctx.lineJoin = pointerToString(value);

  return true;
}

VGCanvas.setLineCap = function (value) {
  VGCanvas.ctx.lineCap = pointerToString(value);

  return true;
}

VGCanvas.setStrokeColor = function (value) {
  VGCanvas.ctx.strokeStyle = pointerToString(value);

  return true;
}

VGCanvas.setFillColor = function (value) {
  VGCanvas.ctx.fillStyle = pointerToString(value);

  return true;
}

VGCanvas.setGlobalAlpha = function (value) {
  VGCanvas.ctx.globalAlpha = value;

  return true;
}

VGCanvas.setLineWidth = function (value) {
  VGCanvas.ctx.lineWidth = value;

  return true;
}

VGCanvas.fill = function () {
  VGCanvas.ctx.fill();

  return true;
}

VGCanvas.stroke = function () {
  VGCanvas.ctx.stroke();

  return true;
}

VGCanvas.paint = function (stroke, id) {
  let ctx = VGCanvas.ctx;
  let image = ImageCache.get(id);

  if (stroke) {
    ctx.strokeStyle = ctx.createPattern(image, 'no-repeat');
    ctx.stroke();
  } else {
    ctx.fillStyle = ctx.createPattern(image, 'no-repeat');
    ctx.fill();
  }

  return true;
}

VGCanvas.beginPath = function () {
  VGCanvas.ctx.beginPath();

  return true;
}

VGCanvas.closePath = function () {
  VGCanvas.ctx.closePath();

  return true;
}

VGCanvas.moveTo = function (x, y) {
  VGCanvas.ctx.moveTo(x, y);

  return true;
}

VGCanvas.lineTo = function (x, y) {
  VGCanvas.ctx.lineTo(x, y);

  return true;
}

VGCanvas.quadTo = function (cpx, cpy, x, y) {
  VGCanvas.ctx.quadraticCurveTo(cpx, cpy, x, y);

  return true;
}

VGCanvas.bezierTo = function (cp1x, cp1y, cp2x, cp2y, x, y) {
  VGCanvas.ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);

  return true;
}

VGCanvas.arcTo = function (x1, y1, x2, y2, r) {
  VGCanvas.ctx.arcTo(x1, y1, x2, y2, r);

  return true;
}

VGCanvas.arc = function (x, y, r, start, end, ccw) {
  VGCanvas.ctx.arc(x, y, r, start, end, ccw);

  return true;
}

VGCanvas.rotate = function (rad) {
  VGCanvas.ctx.rotate(rad);

  return true;
}

VGCanvas.scale = function (x, y) {
  VGCanvas.ctx.scale(x, y);

  return true;
}

VGCanvas.translate = function (x, y) {
  VGCanvas.ctx.translate(x, y);

  return true;
}

VGCanvas.isPointIntPath = function (x, y) {
  return VGCanvas.ctx.isPointInPath(x, y);
}

VGCanvas.transform = function (a, b, c, d, e, f) {
  VGCanvas.ctx.transform(a, b, c, d, e, f);

  return true;
}

VGCanvas.setTransform = function (a, b, c, d, e, f) {
  VGCanvas.ctx.setTransform(a, b, c, d, e, f);

  return true;
}

VGCanvas.ellipse = function (x, y, rx, ry) {
  VGCanvas.ctx.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2);

  return true;
}

VGCanvas.roundRect = function (x, y, w, h, radius) {
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

VGCanvas.clipRect = function (x, y, w, h) {
  VGCanvas.ctx.beginPath();
  VGCanvas.ctx.rect(x, y, w, h);
  VGCanvas.ctx.clip();
  VGCanvas.ctx.beginPath();

  return true;
}

VGCanvas.setFont = function (name, size) {
  let fontName = pointerToString(name);
  let fontSize = Math.round(size || 18) + "px ";

  if (!(fontName) || fontName.indexOf('default') == 0) {
    fontName = TBrowser.config.defaultFont || 'sans';
  }

  VGCanvas.ctx.font = fontSize + fontName; 

  return true;
}

VGCanvas.setTextAlign = function (value) {
  VGCanvas.ctx.textAlign = pointerToString(value);

  return true;
}

VGCanvas.setTextBaseline = function (value) {
  VGCanvas.ctx.textBaseline = pointerToString(value);

  return true;
}

VGCanvas.fillText = function (text, x, y, max_width) {
  let str = pointerToString(text);
  let yy = y + (TBrowser.config.fontOffset || 0);

  VGCanvas.ctx.fillText(str, x, yy, max_width);

  return true;
}

VGCanvas.measureText = function (text) {
  let str = pointerToString(text);
  let width = str ? VGCanvas.ctx.measureText(str).width : 0;

  return Math.round(width);
}

VGCanvas.drawImage = function (id, sx, sy, sw, sh, dx, dy, dw, dh) {
  let image = ImageCache.get(id);
  try {
    if (image && image.width && image.height && sw > 0 && sh > 0 && dw > 0 && dh > 0) {
      VGCanvas.ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
    }
  } catch (e) {
    console.log(e);
    console.log(`${image.src} ${image.width} ${image.height} ${sx} ${sy} ${sw} ${sh}`);
  }

  return true;
}

VGCanvas.setFillLinearGradient = function (sx, sy, ex, ey, scolor, ecolor) {
  let startColor = pointerToString(scolor);
  let endColor = pointerToString(ecolor);
  let ctx = VGCanvas.ctx;

  grd = ctx.createLinearGradient(sx, sy, ex, ey);
  grd.addColorStop(0.000, startColor);
  grd.addColorStop(1.000, endColor);

  ctx.fillStyle = grd;

  return true;
}

VGCanvas.setStrokeLinearGradient = function (sx, sy, ex, ey, scolor, ecolor) {
  let startColor = pointerToString(scolor);
  let endColor = pointerToString(ecolor);
  let ctx = VGCanvas.ctx;

  grd = ctx.createLinearGradient(sx, sy, ex, ey);
  grd.addColorStop(0.000, startColor);
  grd.addColorStop(1.000, endColor);

  ctx.strokeStyle = grd;

  return true;
}

VGCanvas.setFillRadialGradient = function (cx, cy, ir, or, scolor, ecolor) {
  let startColor = pointerToString(scolor);
  let endColor = pointerToString(ecolor);
  let ctx = VGCanvas.ctx;

  grd = ctx.createRadialGradient(cx, cy, ir, cx, cy, or);
  grd.addColorStop(0.000, startColor);
  grd.addColorStop(1.000, endColor);

  ctx.fillStyle = grd;

  return true;
}

VGCanvas.setStrokeRadialGradient = function (cx, cy, ir, or, scolor, ecolor) {
  let startColor = pointerToString(scolor);
  let endColor = pointerToString(ecolor);
  let ctx = VGCanvas.ctx;

  grd = ctx.createRadialGradient(cx, cy, ir, cx, cy, or);
  grd.addColorStop(0.000, startColor);
  grd.addColorStop(1.000, endColor);

  ctx.strokeStyle = grd;

  return true;
}

VGCanvas.createMutableImage = function (addr, w, h, line_length, format) {
  const mutableImage = TBrowser.createMutableImage("mutableImage", addr, w, h, line_length, format);
  const id = ImageCache.add(mutableImage);

  mutableImage.id = "mutableImage" + id;

  console.log(`VGCanvas.createMutableImage:${addr}, ${w}, ${h}, ${line_length}, ${format}`);

  return id;
}

VGCanvas.updateMutableImage = function (id) {
  let mutableImage = ImageCache.get(id);

  let w = mutableImage.width;
  let h = mutableImage.height;
  let size = mutableImage.width * mutableImage.height;
  let start = mutableImage.addr >> 2;
  let end = start + size;
  let array = Module.HEAP32.subarray(start, end);
  let ctx = mutableImage.getContext('2d');
  let imageData = ctx.getImageData(0, 0, w, h);
  let data = new Int32Array(imageData.data.buffer);

  for (let i = 0; i < size; i++) {
    data[i] = array[i];
  }
  ctx.putImageData(imageData, 0, 0, 0, 0, w, h);

  //console.log(`VGCanvas.updateMutableImage ${id} ${start} ${size}`);

  return true;
}

VGCanvas.destroyMutableImage = function (id) {
  console.log(`VGCanvas.destroyMutableImage ${id}`);
  ImageCache.remove(id);

  return true;
}

function Awtk() {

}

function downloadMultipleBinaryFiles(files, onAllDone, onFail) {
  var totalFiles = files.length;
  var loadedFiles = 0;
  var fileContents = [];

  function handleFileLoad(event) {
    var xhr = event.target;
    if (xhr.readyState === XMLHttpRequest.DONE) {

      loadedFiles++;
      if (xhr.status === 200) {
        fileContents.push({url:xhr.responseURL, data: new Uint8Array(/** @type{!ArrayBuffer} */(xhr.response))});
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
    xhr.open('GET', files[i], true);
    xhr.responseType = 'arraybuffer';
    xhr.onload = handleFileLoad;
    xhr.onerror = function() {
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
  Awtk._init = Module.cwrap('awtk_web_init', 'number', ['number', 'number', 'number', 'number']);
  Awtk._deinit = Module.cwrap('awtk_web_deinit', 'number', []);
  Awtk._mainLoopStep = Module.cwrap('awtk_web_main_loop_step', 'number', ['number']);
  Awtk._requestRepaint = Module.cwrap('awtk_web_request_repaint', 'number', ['number']);

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

  AssetsManager.preloadFonts();
  EventsSource.init(document.getElementById("awtk-lcd"))

  let loading = document.getElementById("loading");

  if(loading) {
    loading.remove();
  }

  function onAllDone(fileContents) {
    if (fileContents.length == 2) {
      Awtk.romfsHeaderData = copyArrayToMemory(fileContents[0].data);
      const romfsHeaderSize = fileContents[0].data.length;
      Awtk.romfsBodyData = copyArrayToMemory(fileContents[1].data);
      const romfsBodySize = fileContents[1].data.length;

      Awtk._init(Awtk.romfsHeaderData, romfsHeaderSize, Awtk.romfsBodyData, romfsBodySize);
    } else {
      Awtk._init(0, 0, 0, 0);
    }
  }   
  function onFail(errorMessage) {
    console.error('文件下载失败:', errorMessage);
  }

  let headerURL = "data/romfs.header";
  if (TBrowser.rootUri) {
    headerURL = TBrowser.rootUri + '/' + headerURL;
  }
  let bodyURL = "data/romfs.body";
  if (TBrowser.rootUri) {
    bodyURL = TBrowser.rootUri + '/' + bodyURL;
  }

  if (TBrowser.config && TBrowser.config.romfs) {
    downloadMultipleBinaryFiles([headerURL, bodyURL], onAllDone, onFail);
  }

  return 0;
}

Awtk.deinit = function () {
  if(Awtk.romfsHeaderData) {
    freeMemory(Awtk.romfsHeaderData);
  }

  if(Awtk.romfsBodyData) {
    freeMemory(Awtk.romfsBodyData);
  }
  return Awtk._deinit();
}

Awtk.run = function () {
  return Awtk._run();
}

Awtk.mainLoopStep = function (timestamp) {
  return Awtk._mainLoopStep(timestamp);
}

Awtk.requestRepaint = function (reason) {
  return Awtk._requestRepaint(reason);
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

window.isLoaded = false;
window.onload = function() {
  window.isLoaded = true;
}

var Module = typeof Module !== 'undefined' ? Module : {};
Module.onRuntimeInitialized = function () {
  if(!(window.isLoaded)) {
    window.onload = function() {
      window.isLoaded = true;
      Awtk.init();
    }
  } else {
     Awtk.init();
  }
}

window.onunload = function() {
  Awtk.deinit();
}


if (typeof KeyEvent === "undefined") {
	var KeyEvent = {
		DOM_VK_CANCEL: 3,
		DOM_VK_HELP: 6,
		DOM_VK_BACK_SPACE: 8,
		DOM_VK_TAB: 9,
		DOM_VK_CLEAR: 12,
		DOM_VK_RETURN: 13,
		DOM_VK_ENTER: 14,
		DOM_VK_SHIFT: 16,
		DOM_VK_CONTROL: 17,
		DOM_VK_ALT: 18,
		DOM_VK_PAUSE: 19,
		DOM_VK_CAPS_LOCK: 20,
		DOM_VK_ESCAPE: 27,
		DOM_VK_SPACE: 32,
		DOM_VK_PAGE_UP: 33,
		DOM_VK_PAGE_DOWN: 34,
		DOM_VK_END: 35,
		DOM_VK_HOME: 36,
		DOM_VK_LEFT: 37,
		DOM_VK_UP: 38,
		DOM_VK_RIGHT: 39,
		DOM_VK_DOWN: 40,
		DOM_VK_PRINTSCREEN: 44,
		DOM_VK_INSERT: 45,
		DOM_VK_DELETE: 46,
		DOM_VK_0: 48,
		DOM_VK_1: 49,
		DOM_VK_2: 50,
		DOM_VK_3: 51,
		DOM_VK_4: 52,
		DOM_VK_5: 53,
		DOM_VK_6: 54,
		DOM_VK_7: 55,
		DOM_VK_8: 56,
		DOM_VK_9: 57,
		DOM_VK_SEMICOLON: 59,
		DOM_VK_EQUALS: 61,
		DOM_VK_A: 65,
		DOM_VK_B: 66,
		DOM_VK_C: 67,
		DOM_VK_D: 68,
		DOM_VK_E: 69,
		DOM_VK_F: 70,
		DOM_VK_G: 71,
		DOM_VK_H: 72,
		DOM_VK_I: 73,
		DOM_VK_J: 74,
		DOM_VK_K: 75,
		DOM_VK_L: 76,
		DOM_VK_M: 77,
		DOM_VK_N: 78,
		DOM_VK_O: 79,
		DOM_VK_P: 80,
		DOM_VK_Q: 81,
		DOM_VK_R: 82,
		DOM_VK_S: 83,
		DOM_VK_T: 84,
		DOM_VK_U: 85,
		DOM_VK_V: 86,
		DOM_VK_W: 87,
		DOM_VK_X: 88,
		DOM_VK_Y: 89,
		DOM_VK_Z: 90,
		DOM_VK_CONTEXT_MENU: 93,
		DOM_VK_NUMPAD0: 96,
		DOM_VK_NUMPAD1: 97,
		DOM_VK_NUMPAD2: 98,
		DOM_VK_NUMPAD3: 99,
		DOM_VK_NUMPAD4: 100,
		DOM_VK_NUMPAD5: 101,
		DOM_VK_NUMPAD6: 102,
		DOM_VK_NUMPAD7: 103,
		DOM_VK_NUMPAD8: 104,
		DOM_VK_NUMPAD9: 105,
		DOM_VK_MULTIPLY: 106,
		DOM_VK_ADD: 107,
		DOM_VK_SEPARATOR: 108,
		DOM_VK_SUBTRACT: 109,
		DOM_VK_DECIMAL: 110,
		DOM_VK_DIVIDE: 111,
		DOM_VK_BACK_BUTTON: 115,
		/*F4*/
		DOM_VK_MENU_BUTTON: 118,
		/*F7*/
		DOM_VK_SEARCH_BUTTON: 120,
		/*F9*/
		DOM_VK_F1: 112,
		DOM_VK_F2: 113,
		DOM_VK_F3: 114,
		DOM_VK_F4: 115,
		DOM_VK_F5: 116,
		DOM_VK_F6: 117,
		DOM_VK_F7: 118,
		DOM_VK_F8: 119,
		DOM_VK_F9: 120,
		DOM_VK_F10: 121,
		DOM_VK_F11: 122,
		DOM_VK_F12: 123,
		DOM_VK_F13: 124,
		DOM_VK_F14: 125,
		DOM_VK_F15: 126,
		DOM_VK_F16: 127,
		DOM_VK_F17: 128,
		DOM_VK_F18: 129,
		DOM_VK_F19: 130,
		DOM_VK_F20: 131,
		DOM_VK_F21: 132,
		DOM_VK_F22: 133,
		DOM_VK_F23: 134,
		DOM_VK_F24: 135,
		DOM_VK_NUM_LOCK: 144,
		DOM_VK_SCROLL_LOCK: 145,
		DOM_VK_COMMA: 188,
		DOM_VK_PERIOD: 190,
		DOM_VK_SLASH: 191,
		DOM_VK_BACK_QUOTE: 192,
		DOM_VK_OPEN_BRACKET: 219,
		DOM_VK_BACK_SLASH: 220,
		DOM_VK_CLOSE_BRACKET: 221,
		DOM_VK_QUOTE: 222,
		DOM_VK_META: 224,
    DOM_VK_BACK: 225
	};
}


function EventsSource() {
	this.point = {};
	this.lastPoint = {};
	this.pointerDownPoint = {};
	this.longPressDuration = 600;
}

EventsSource.prototype.cancelDefaultAction = function (event) {
	var e = event || window.event;

	if (e.preventDefault) {
		e.preventDefault();
	} else {
		e.returnValue = false;
	}

	return false;
}

EventsSource.prototype.targetIsEditor = function (e) {
	var tag = e.srcElement ? e.srcElement : e.target;
	var name = tag.localName ? tag.localName : tag.tagName;

  if (!name) {
    return false;
  }

	name = name.toLowerCase();
	if (name != "body" && name != "canvas") {
		return true;
	}

	return false;
}

EventsSource.prototype.shouldIgnoreKey = function (event) {
	var e = event || window.event;
	var code = e.keyCode;

	if (code === KeyEvent.DOM_VK_F5 || code === KeyEvent.DOM_VK_F12 || code === KeyEvent.DOM_VK_F11) {
		return true;
	}

	if (this.targetIsEditor(e)) {
		return true;
	}

	return false;
}

function keyToLower(code) {
  if (code >= 65 && code <= 90) {
    return code + 32;
  } else {
    return code;
  }
}

EventsSource.prototype.onKeyDownGlobal = function (event) {
	var e = event || window.event;
	var code = keyToLower(e.keyCode);

	if (this.shouldIgnoreKey(e)) {
		return true;
	} else {
		this.onKeyDown(code, e);
		return this.cancelDefaultAction(e);
	}
}

EventsSource.prototype.onKeyUpGlobal = function (event) {
	var e = event || window.event;
	var code = keyToLower(e.keyCode);

	if (this.shouldIgnoreKey(e)) {
		return true;
	} else {
		this.onKeyUp(code, e);
		return this.cancelDefaultAction(e);
	}
}

EventsSource.prototype.onWheelGlobal = function (event) {
	var e = window.event || event;

	if (e.target && e.target.localName !== "canvas") {
		return this.cancelDefaultAction(e);
	}

	var delta = e.wheelDelta || e.detail * -8;
	if (delta) {
		if (this.onWheel(delta, e)) {
			return this.cancelDefaultAction(e);
		}
	}

	return true;
}

EventsSource.prototype.onTizenKeys = function (e) {
	if (e.keyName == "back") {
		this.onKeyDown(KeyEvent.DOM_VK_BACK_BUTTON, e);
		this.onKeyUp(KeyEvent.DOM_VK_BACK_BUTTON, e);
	} else if (e.keyName == "menu") {
		this.onKeyDown(KeyEvent.DOM_VK_MENU_BUTTON, e);
		this.onKeyUp(KeyEvent.DOM_VK_MENU_BUTTON, e);
	}
}

EventsSource.prototype.onPhonegapBackButton = function () {
	this.onKeyDown(KeyEvent.DOM_VK_BACK_BUTTON);
	this.onKeyUp(KeyEvent.DOM_VK_BACK_BUTTON);
}

EventsSource.prototype.onPhonegapMenuButton = function () {
	this.onKeyDown(KeyEvent.DOM_VK_MENU_BUTTON);
	this.onKeyUp(KeyEvent.DOM_VK_MENU_BUTTON);
}

EventsSource.prototype.onPhonegapSearchButton = function () {
	this.onKeyDown(KeyEvent.DOM_VK_SEARCH_BUTTON);
	this.onKeyUp(KeyEvent.DOM_VK_SEARCH_BUTTON);
}

EventsSource.prototype.attachToElement = function (element) {
	if (!element) {
		element = window;
	}

	document.addEventListener('tizenhwkey', this.onTizenKeys.bind(this));
	document.addEventListener("backbutton", this.onPhonegapBackButton.bind(this));
	document.addEventListener("menubutton", this.onPhonegapMenuButton.bind(this));
	document.addEventListener("searchbutton", this.onPhonegapSearchButton.bind(this));
	if (this.isPointer()) {
		EventsSource.pointerDeviceType = "pointer";
		element.addEventListener('pointerdown', this.onPointerDownGlobal.bind(this));
		element.addEventListener('pointermove', this.onPointerMoveGlobal.bind(this));
		element.addEventListener('pointerup', this.onPointerUpGlobal.bind(this));
		element.addEventListener('mousewheel', this.onWheelGlobal.bind(this));
	} else if (this.isMSPointer()) {
		EventsSource.pointerDeviceType = "pointer";
		element.addEventListener('MSPointerDown', this.onPointerDownGlobal.bind(this));
		element.addEventListener('MSPointerMove', this.onPointerMoveGlobal.bind(this));
		element.addEventListener('MSPointerUp', this.onPointerUpGlobal.bind(this));
		element.addEventListener('mousewheel', this.onWheelGlobal.bind(this));
	} else if (TBrowser.isMobile()) {
		EventsSource.pointerDeviceType = "touch";
		element.addEventListener('MSPointerDown', this.onPointerDownGlobal.bind(this));
		element.addEventListener('touchstart', this.onTouchStartGlobal.bind(this));
		element.addEventListener('touchmove', this.onTouchMoveGlobal.bind(this));
		element.addEventListener('touchend', this.onTouchEndGlobal.bind(this));
	} else {
		EventsSource.pointerDeviceType = "mouse";
		element.addEventListener('dblclick', this.onDoubleClickGlobal.bind(this));
		element.addEventListener('mousewheel', this.onWheelGlobal.bind(this));
		element.addEventListener('DOMMouseScroll', this.onWheelGlobal.bind(this));
		element.addEventListener('mousedown', this.onMouseDownGlobal.bind(this));
		element.addEventListener('mousemove', this.onMouseMoveGlobal.bind(this));
		element.addEventListener('mouseup', this.onMouseUpGlobal.bind(this));
	}
	window.addEventListener('keyup', this.onKeyUpGlobal.bind(this));
	window.addEventListener('keydown', this.onKeyDownGlobal.bind(this));

	return;
}

EventsSource.prototype.isMultiTouchEvent = function (e) {
	return e.originalEvent && e.originalEvent.touches && e.originalEvent.touches.length > 1;
}

EventsSource.points = [{}, {}, {}, {}, {}, {}, {}, {}];
EventsSource.prototype.getAbsPoint = function (e, i) {
	var index = i || 0;
	var p = EventsSource.points[index];
	if (e) {
		p.x = Math.max(e.pageX, e.x || e.clientX);
		p.y = Math.max(e.pageY, e.y || e.clientY);
		p.event = e;

		this.lastPoint.x = p.x;
		this.lastPoint.y = p.y;
		this.lastPointEvent = e;
	} else {
		p = this.lastPoint;
	}

	return p;
}

EventsSource.prototype.getPointerList = function (e) {
	var pointers = [];
	var pointer;
	if (this.touchList) {
		for (var i = 0; i < this.touchList.length; i++) {
			var touch = this.touchList[i];
			// Add 2 to avoid clashing with the mouse identifier.
			pointer = new Pointer(touch.identifier + 2, PointerTypes.TOUCH, touch);
			pointers.push(pointer);
		}
	} else if (this.msPointerList) {
		for (var identifier in this.msPointerList) {
			if (!this.msPointerList.hasOwnProperty(identifier)) continue;
			pointer = this.msPointerList[identifier];
			pointer = new Pointer(identifier, pointer.textPointerType, pointer);
			pointers.push(pointer);
		}
	}
	if (this.mouseEvent) {
		pointers.push(new Pointer(MOUSE_ID, PointerTypes.MOUSE, this.mouseEvent));
	}
	return pointers;
}

EventsSource.prototype.isPointer = function () {
	return window.navigator.pointerEnabled;
}

EventsSource.prototype.isMSPointer = function () {
	return window.navigator.msPointerEnabled;
}

EventsSource.prototype.isRightMouseEvent = function (event) {
	var ret = false;
	if (event.which === null) {
		ret = (event.button > 2 && event.button !== 4);
	} else {
		ret = (event.which > 2 && event.which !== 2);
	}

	return ret;
}

EventsSource.prototype.onDoubleClickGlobal = function (event) {
	var e = window.event || event;
	if (this.targetIsEditor(e)) {
		return true;
	}

	if (!this.isRightMouseEvent(e)) {
		//this.onDoubleClick(this.getAbsPoint(e), e);
	}
}

EventsSource.prototype.onMouseDownGlobal = function (event) {
	var e = window.event || event;
	if (this.targetIsEditor(e)) {
		return true;
	}

	if (!this.isRightMouseEvent(e)) {
		this.onPointerDown(this.getAbsPoint(e), e);
	}
}

EventsSource.prototype.onMouseMoveGlobal = function (event) {
	var e = window.event || event;
	if (this.targetIsEditor(e) && !this.pointerDown) {
		return true;
	}

	this.onPointerMove(this.getAbsPoint(e), e);
}

EventsSource.prototype.onMouseUpGlobal = function (event) {
	var e = window.event || event;
	if (this.targetIsEditor(e) && !this.pointerDown) {
		return true;
	}

	if (this.isRightMouseEvent(e)) {
		this.onContextMenu(this.getAbsPoint(e), e);
	} else {
		this.onPointerUp(this.getAbsPoint(e), e);
	}
}

EventsSource.prototype.getTouchList = function (event) {
	return event.touches || event.changedTouches || event.touchList;
}

EventsSource.prototype.getTouchPoints = function (e) {
	var points = [];
	var touchList = this.getTouchList(e);
	var n = touchList.length;

	for (var i = 0; i < n; i++) {
		var touch = touchList[i];
		var point = this.getAbsPoint(touch, i);

		point.event = e;
		point.id = touch.identifier;
		points.push(point);
	}

	return points;
}

EventsSource.prototype.onTouchStartGlobal = function (event) {
	var e = window.event || event;
	var points = this.getTouchPoints(e);
	
	if (this.targetIsEditor(e)) {
		return true;
	}

	if (points.length === 1) {
		this.point.x = points[0].x;
		this.point.y = points[0].y;

		this.onPointerDown(this.point, e);
	}
	this.onMultiTouch("touchstart", points, e);

	return this.cancelDefaultAction(e);
}

EventsSource.prototype.onTouchMoveGlobal = function (event) {
	var e = window.event || event;
	var points = this.getTouchPoints(e);

	if (this.targetIsEditor(e)) {
		return true;
	}

	if (points.length === 1) {
		this.point.x = points[0].x;
		this.point.y = points[0].y;

		this.onPointerMove(this.point, e);
	}
	this.onMultiTouch("touchmove", points, e);

	return this.cancelDefaultAction(e);
}

EventsSource.prototype.onTouchEndGlobal = function (event) {
	var e = window.event || event;
	var points = this.getTouchPoints(e);
	
	if (this.targetIsEditor(e)) {
		return true;
	}

	if (!points.length) {
		var last = this.lastPointerTime;
		var cur = new Date();
		this.lastPointerTime = cur;
		var dbClick = false;
		if (last) {
			var diff = cur - last;
			if (diff < 200) {
				dbClick = true;
				this.lastPointerTime = 0;
			}
		}
		if (dbClick) {
			//this.onDoubleClick(this.getAbsPoint(null), e);
		}
		this.onPointerUp(this.getAbsPoint(null), e);
	}

	this.onMultiTouch("touchend", points, e);

	return this.cancelDefaultAction(e);
}

EventsSource.prototype.onPointerDownGlobal = function (event) {
	var e = window.event || event;

	this.onPointerDown(this.getAbsPoint(e), e);

	return this.cancelDefaultAction(e);
}

EventsSource.prototype.onPointerMoveGlobal = function (event) {
	var e = window.event || event;

	this.onPointerMove(this.getAbsPoint(e), e);

	return this.cancelDefaultAction(e);
}

EventsSource.prototype.onPointerUpGlobal = function (event) {
	var e = window.event || event;

	this.onPointerUp(this.getAbsPoint(e), e);

	return this.cancelDefaultAction(e);
}

EventsSource.prototype.onKeyDown = function (key, event) {
	mainLoopPost({
		type: 'keydown',
		key: key,
		timeStamp: event.timeStamp
	});
}

EventsSource.prototype.onKeyUp = function (key, event) {
	mainLoopPost({
		type: 'keyup',
		key: key,
		timeStamp: event.timeStamp
	});
}

EventsSource.prototype.onWheel = function (delta, event) {
	mainLoopPost({
		type: 'wheel',
		delta: delta,
		timeStamp: event.timeStamp
	});
}

EventsSource.prototype.onMultiTouch = function (action, points, event) {}

EventsSource.prototype.onPointerMove = function (point, event) {
	mainLoopPost({
		type: 'pointermove',
		x: point.x,
		y: point.y,
		timeStamp: event.timeStamp
	});
}

EventsSource.prototype.onPointerDown = function (point, event) {
	EventsSource.instance.pressed = true;
	EventsSource.instance.lastTimeStamp = event.timeStamp;
	EventsSource.instance.lastPoint = {
		x: point.x,
		y: point.y
	};

	mainLoopPost({
		type: 'pointerdown',
		x: point.x,
		y: point.y,
		timeStamp: event.timeStamp
	});
}

EventsSource.prototype.onPointerUp = function (point, event) {
	mainLoopPost({
		type: 'pointerup',
		x: point.x,
		y: point.y,
		timeStamp: event.timeStamp
	});

	EventsSource.instance.pressed = false;
}

EventsSource.fixPointerUp = function () {
	if (EventsSource.instance.pressed) {
		let e = {
			timeStamp: EventsSource.instance.lastTimeStamp
		};
		EventsSource.instance.onPointerUp(EventsSource.instance.lastPoint, e);

		console.log('EventsSource.fixPointerUp');
	}
}

EventsSource.prototype.getPointerDeviceType = function () {
	return EventsSource.pointerDeviceType;
}

EventsSource.init = function (canvas) {
	let eventsSource = new EventsSource();
	eventsSource.attachToElement(canvas);
	EventsSource.instance = eventsSource;

	console.log('EventsSource.init');
	return;
}

let MainLoopWeb = {
  eventQueue: []
};

function mainLoopPost(event) {
  MainLoopWeb.eventQueue.push(event);
}

function mainLoopDispatchEvents(timestamp) {
  while (MainLoopWeb.eventQueue.length) {
    let e = MainLoopWeb.eventQueue.pop();
    switch (e.type) {
      case 'keydown':
        {
          Awtk.onKeyDown(e.key, e.timeStamp);
          break;
        }
      case 'keyup':
        {
          Awtk.onKeyUp(e.key, e.timeStamp);
          break;
        }
      case 'im_commit':
        {
          Awtk.onImCommit(e.text, e.timeStamp);
          break;
        }
      case 'wheel':
        {
          Awtk.onWheel(e.delta, e.timeStamp);
          break;
        }
      case 'pointerdown':
        {
          Awtk.onPointerDown(e.x, e.y, e.timeStamp);
          break;
        }
      case 'pointermove':
        {
          Awtk.onPointerMove(e.x, e.y, e.timeStamp);
          break;
        }
      case 'pointerup':
        {
          Awtk.onPointerUp(e.x, e.y, e.timeStamp);
          break;
        }
      default:
        break;
    }
  }
}

function mainLoopStep(timestamp) {
  try {
    mainLoopDispatchEvents(timestamp);
  } catch(e) {
    console.log(e);
  }

  try {
    Awtk.mainLoopStep(10);
  } catch(e) {
    console.log(e);
  }

  window.requestAnimationFrame(mainLoopStep);
}

function mainLoopInit() {
  window.requestAnimationFrame(mainLoopStep);
}

