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
		DOM_VK_META: 224
	};
}
KeyEvent.DOM_VK_BACK = 225;

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

EventsSource.prototype.onKeyDownGlobal = function (event) {
	var e = event || window.event;
	var code = e.keyCode;

	if (this.shouldIgnoreKey(e)) {
		return true;
	} else {
		this.onKeyDown(code, e);
		return this.cancelDefaultAction(e);
	}
}

EventsSource.prototype.onKeyUpGlobal = function (event) {
	var e = event || window.event;
	var code = e.keyCode;
	if (this.shouldIgnoreKey(e)) {
		return true;
	} else {
		this.onKeyUp(code, e);
		return this.cancelDefaultAction(e);
	}
}

EventsSource.prototype.onWheelGlobal = function (event) {
	var e = window.event || event;
	if (EditorElement.imeOpen) return true;

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
	} else if (isMobile()) {
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
		this.onDoubleClick(this.getAbsPoint(e), e);
	}

	return this.cancelDefaultAction(e);
}

EventsSource.prototype.onMouseDownGlobal = function (event) {
	var e = window.event || event;
	if (this.targetIsEditor(e)) {
		return true;
	}

	if (!this.isRightMouseEvent(e)) {
		this.onPointerDown(this.getAbsPoint(e), e);
	}

	return this.cancelDefaultAction(e);
}

EventsSource.prototype.onMouseMoveGlobal = function (event) {
	var e = window.event || event;
	if (this.targetIsEditor(e) && !this.pointerDown) {
		return true;
	}

	this.onPointerMove(this.getAbsPoint(e), e);

	return this.cancelDefaultAction(e);
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

	return this.cancelDefaultAction(e);
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
			this.onDoubleClick(this.getAbsPoint(null), e);
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
  mainLoopPost({type:'keydown', key:key, timeStamp:event.timeStamp});
}

EventsSource.prototype.onKeyUp = function (key, event) {
  mainLoopPost({type:'keyup', key:key, timeStamp:event.timeStamp});
}

EventsSource.prototype.onWheel = function (delta, event) {
  mainLoopPost({type:'wheel', delta:delta, timeStamp:event.timeStamp});
}

EventsSource.prototype.onMultiTouch = function (action, points, event) {}

EventsSource.prototype.onPointerDown = function (point, event) {
  mainLoopPost({type:'pointerdown', x:point.x, y:point.y, timeStamp:event.timeStamp});
}

EventsSource.prototype.onPointerMove = function (point, event) {
  mainLoopPost({type:'pointermove', x:point.x, y:point.y, timeStamp:event.timeStamp});
}

EventsSource.prototype.onPointerUp = function (point, event) {
  mainLoopPost({type:'pointerup', x:point.x, y:point.y, timeStamp:event.timeStamp});
}

EventsSource.prototype.getPointerDeviceType = function () {
	return EventsSource.pointerDeviceType;
}
