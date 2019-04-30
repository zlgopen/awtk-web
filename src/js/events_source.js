
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
