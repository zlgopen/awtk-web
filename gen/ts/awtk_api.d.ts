declare global {
    interface Window {
        Module: any;
        TBrowser: any;
    }
}
export declare function init(w: number, h: number, title: string, isDesktop: boolean): void;
export declare class TEmitter {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(): TEmitter;
    dispatch(e: any): any;
    dispatchSimpleEvent(type: any): any;
    on(etype: any, handler: any, ctx: any): any;
    off(id: any): any;
    enable(): any;
    disable(): any;
    destroy(): any;
    static cast(emitter: any): TEmitter;
}
export declare class TPoint {
    nativeObj: any;
    constructor(nativeObj: any);
}
export declare class TPointf {
    nativeObj: any;
    constructor(nativeObj: any);
}
export declare class TRectf {
    nativeObj: any;
    constructor(nativeObj: any);
    get x(): any;
    get y(): any;
    get w(): any;
    get h(): any;
}
export declare class TRect {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(x: any, y: any, w: any, h: any): TRect;
    set(x: any, y: any, w: any, h: any): TRect;
    static cast(rect: any): TRect;
    destroy(): any;
    get x(): any;
    get y(): any;
    get w(): any;
    get h(): any;
}
export declare class TBitmap {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(): TBitmap;
    static createEx(w: any, h: any, line_length: any, format: any): TBitmap;
    getBpp(): any;
    destroy(): any;
    static getBppOfFormat(format: any): any;
    get w(): any;
    get h(): any;
    get lineLength(): any;
    get flags(): any;
    get format(): any;
    get name(): any;
}
export declare class TObject extends TEmitter {
    nativeObj: any;
    constructor(nativeObj: any);
    unref(): any;
    static ref(obj: any): TObject;
    getType(): any;
    getDesc(): any;
    getSize(): any;
    isCollection(): any;
    setName(name: any): any;
    compare(other: any): any;
    getProp(name: any, v: any): any;
    getPropStr(name: any): any;
    getPropPointer(name: any): any;
    getPropObject(name: any): TObject;
    getPropInt(name: any, defval: any): any;
    getPropBool(name: any, defval: any): any;
    getPropFloat(name: any, defval: any): any;
    getPropDouble(name: any, defval: any): any;
    removeProp(name: any): any;
    setProp(name: any, value: any): any;
    setPropStr(name: any, value: any): any;
    setPropObject(name: any, value: any): any;
    setPropInt(name: any, value: any): any;
    setPropBool(name: any, value: any): any;
    setPropFloat(name: any, value: any): any;
    setPropDouble(name: any, value: any): any;
    copyProp(src: any, name: any): any;
    hasProp(name: any): any;
    eval(expr: any, v: any): any;
    canExec(name: any, args: any): any;
    execute(name: any, args: any): any;
    notifyChanged(): any;
    hasPropByPath(path: any): any;
    getPropStrByPath(path: any): any;
    getPropPointerByPath(path: any): any;
    getPropObjectByPath(path: any): TObject;
    getPropIntByPath(path: any, defval: any): any;
    getPropBoolByPath(path: any, defval: any): any;
    getPropFloatByPath(path: any, defval: any): any;
    setPropByPath(path: any, value: any): any;
    setPropStrByPath(path: any, value: any): any;
    setPropObjectByPath(path: any, value: any): any;
    setPropIntByPath(path: any, value: any): any;
    setPropBoolByPath(path: any, value: any): any;
    setPropFloatByPath(path: any, value: any): any;
    canExecByPath(path: any, args: any): any;
    executeByPath(path: any, args: any): any;
    getPropInt8(name: any, defval: any): any;
    setPropInt8(name: any, value: any): any;
    getPropUint8(name: any, defval: any): any;
    setPropUint8(name: any, value: any): any;
    getPropInt16(name: any, defval: any): any;
    setPropInt16(name: any, value: any): any;
    getPropUint16(name: any, defval: any): any;
    setPropUint16(name: any, value: any): any;
    getPropInt32(name: any, defval: any): any;
    setPropInt32(name: any, value: any): any;
    getPropUint32(name: any, defval: any): any;
    setPropUint32(name: any, value: any): any;
    getPropInt64(name: any, defval: any): any;
    setPropInt64(name: any, value: any): any;
    getPropUint64(name: any, defval: any): any;
    setPropUint64(name: any, value: any): any;
    get refCount(): any;
    get name(): any;
}
export declare class TValue {
    nativeObj: any;
    constructor(nativeObj: any);
    setBool(value: any): TValue;
    bool(): any;
    setInt8(value: any): TValue;
    int8(): any;
    setUint8(value: any): TValue;
    uint8(): any;
    setInt16(value: any): TValue;
    int16(): any;
    setUint16(value: any): TValue;
    uint16(): any;
    setInt32(value: any): TValue;
    int32(): any;
    setUint32(value: any): TValue;
    setInt64(value: any): TValue;
    int64(): any;
    setUint64(value: any): TValue;
    uint64(): any;
    setFloat(value: any): TValue;
    float32(): any;
    setFloat64(value: any): TValue;
    float64(): any;
    setStr(value: any): TValue;
    str(): any;
    strEx(buff: any, size: any): any;
    isNull(): any;
    setInt(value: any): TValue;
    setObject(value: any): TValue;
    object(): TObject;
    setToken(value: any): TValue;
    token(): any;
    static create(): TValue;
    destroy(): any;
    reset(): any;
    static cast(value: any): TValue;
}
export declare class TGlobal {
    nativeObj: any;
    constructor(nativeObj: any);
    static init(w: any, h: any, app_type: any, app_name: any, app_root: any): any;
    static run(): any;
    static quit(): any;
    static getPointerX(): any;
    static getPointerY(): any;
    static isPointerPressed(): any;
}
export declare enum TBidiType {
    AUTO,
    LTR,
    RTL,
    LRO,
    RLO,
    WLTR,
    WRTL
}
export declare enum TImageDrawType {
    DEFAULT,
    CENTER,
    ICON,
    SCALE,
    SCALE_AUTO,
    SCALE_DOWN,
    SCALE_W,
    SCALE_H,
    REPEAT,
    REPEAT_X,
    REPEAT_Y,
    REPEAT_Y_INVERSE,
    PATCH9,
    PATCH3_X,
    PATCH3_Y,
    PATCH3_X_SCALE_Y,
    PATCH3_Y_SCALE_X,
    REPEAT9,
    REPEAT3_X,
    REPEAT3_Y
}
export declare class TCanvasOffline {
    nativeObj: any;
    constructor(nativeObj: any);
}
export declare class TCanvas {
    nativeObj: any;
    constructor(nativeObj: any);
    getWidth(): any;
    getHeight(): any;
    getClipRect(r: any): any;
    setClipRect(r: any): any;
    setClipRectEx(r: any, translate: any): any;
    setFillColor(color: any): any;
    setTextColor(color: any): any;
    setStrokeColor(color: any): any;
    setGlobalAlpha(alpha: any): any;
    translate(dx: any, dy: any): any;
    untranslate(dx: any, dy: any): any;
    drawVline(x: any, y: any, h: any): any;
    drawHline(x: any, y: any, w: any): any;
    fillRect(x: any, y: any, w: any, h: any): any;
    clearRect(x: any, y: any, w: any, h: any): any;
    strokeRect(x: any, y: any, w: any, h: any): any;
    setFont(name: any, size: any): any;
    measureText(str: any): any;
    drawText(str: any, x: any, y: any): any;
    drawTextInRect(str: any, r: any): any;
    drawIcon(img: any, cx: any, cy: any): any;
    drawImage(img: any, src: any, dst: any): any;
    drawImageEx(img: any, draw_type: any, dst: any): any;
    drawImageEx2(img: any, draw_type: any, src: any, dst: any): any;
    getVgcanvas(): TVgcanvas;
    static cast(c: any): TCanvas;
    reset(): any;
    get ox(): any;
    get oy(): any;
    get fontName(): any;
    get fontSize(): any;
    get globalAlpha(): any;
}
export declare enum TClipBoardDataType {
    NONE,
    TEXT
}
export declare class TClipBoard {
    nativeObj: any;
    constructor(nativeObj: any);
    static setText(text: any): any;
    static getText(): any;
}
export declare enum TDialogQuitCode {
    NONE,
    OK,
    YES,
    CANCEL,
    NO,
    OTHER
}
export declare enum TEventType {
    POINTER_DOWN,
    POINTER_DOWN_BEFORE_CHILDREN,
    POINTER_MOVE,
    POINTER_MOVE_BEFORE_CHILDREN,
    POINTER_UP,
    POINTER_UP_BEFORE_CHILDREN,
    WHEEL,
    WHEEL_BEFORE_CHILDREN,
    POINTER_DOWN_ABORT,
    CONTEXT_MENU,
    POINTER_ENTER,
    POINTER_LEAVE,
    LONG_PRESS,
    CLICK,
    FOCUS,
    BLUR,
    KEY_DOWN,
    KEY_LONG_PRESS,
    KEY_DOWN_BEFORE_CHILDREN,
    KEY_REPEAT,
    KEY_UP,
    KEY_UP_BEFORE_CHILDREN,
    WILL_MOVE,
    MOVE,
    WILL_RESIZE,
    RESIZE,
    WILL_MOVE_RESIZE,
    MOVE_RESIZE,
    VALUE_WILL_CHANGE,
    VALUE_CHANGED,
    VALUE_CHANGING,
    PAINT,
    BEFORE_PAINT,
    AFTER_PAINT,
    PAINT_DONE,
    LOCALE_CHANGED,
    ANIM_START,
    ANIM_STOP,
    ANIM_PAUSE,
    ANIM_ONCE,
    ANIM_END,
    WINDOW_LOAD,
    WIDGET_LOAD,
    WINDOW_WILL_OPEN,
    WINDOW_OPEN,
    WINDOW_TO_BACKGROUND,
    WINDOW_TO_FOREGROUND,
    WINDOW_CLOSE,
    REQUEST_CLOSE_WINDOW,
    TOP_WINDOW_CHANGED,
    IM_START,
    IM_STOP,
    IM_COMMIT,
    IM_CLEAR,
    IM_CANCEL,
    IM_PREEDIT,
    IM_PREEDIT_CONFIRM,
    IM_PREEDIT_ABORT,
    IM_SHOW_CANDIDATES,
    IM_SHOW_PRE_CANDIDATES,
    IM_LANG_CHANGED,
    IM_ACTION,
    IM_ACTION_INFO,
    DRAG_START,
    DRAG,
    DRAG_END,
    RESET,
    SCREEN_SAVER,
    LOW_MEMORY,
    OUT_OF_MEMORY,
    ORIENTATION_WILL_CHANGED,
    ORIENTATION_CHANGED,
    WIDGET_CREATED,
    REQUEST_QUIT_APP,
    THEME_CHANGED,
    WIDGET_ADD_CHILD,
    WIDGET_REMOVE_CHILD,
    SCROLL_START,
    SCROLL,
    SCROLL_END,
    MULTI_GESTURE,
    PAGE_CHANGED,
    ASSET_MANAGER_LOAD_ASSET,
    ASSET_MANAGER_UNLOAD_ASSET,
    ASSET_MANAGER_CLEAR_CACHE,
    TIMER,
    REQ_START,
    USER_START,
    NONE,
    PROP_WILL_CHANGE,
    PROP_CHANGED,
    CMD_WILL_EXEC,
    CMD_EXECED,
    CMD_CAN_EXEC,
    ITEMS_WILL_CHANGE,
    ITEMS_CHANGED,
    PROPS_CHANGED,
    PROGRESS,
    DONE,
    ERROR,
    DESTROY
}
export declare class TEvent {
    nativeObj: any;
    constructor(nativeObj: any);
    static fromName(name: any): any;
    static cast(event: any): TEvent;
    getType(): any;
    static create(type: any): TEvent;
    destroy(): any;
    get type(): any;
    get size(): any;
    get time(): any;
    get target(): any;
}
export declare class TFontManager {
    nativeObj: any;
    constructor(nativeObj: any);
    unloadFont(name: any, size: any): any;
    shrinkCache(cache_size: any): any;
    unloadAll(): any;
}
export declare enum TGlyphFormat {
    ALPHA,
    MONO,
    RGBA
}
export declare class TIdle {
    nativeObj: any;
    constructor(nativeObj: any);
    static add(on_idle: any, ctx: any): any;
    static remove(idle_id: any): any;
    static removeAllByCtx(ctx: any): any;
}
export declare class TImageManager {
    nativeObj: any;
    constructor(nativeObj: any);
    static instance(): TImageManager;
    getBitmap(name: any, image: any): any;
    preload(name: any): any;
}
export declare enum TInputType {
    TEXT,
    INT,
    UINT,
    HEX,
    FLOAT,
    UFLOAT,
    EMAIL,
    PASSWORD,
    PHONE,
    IPV4,
    DATE,
    TIME,
    TIME_FULL,
    CUSTOM,
    CUSTOM_PASSWORD,
    ASCII
}
export declare class TInputMethod {
    nativeObj: any;
    constructor(nativeObj: any);
    commitText(text: any): any;
    setLang(lang: any): any;
    getLang(): any;
    dispatchKey(key: any): any;
    dispatchKeys(key: any): any;
    dispatchPreedit(): any;
    dispatchPreeditConfirm(): any;
    dispatchPreeditAbort(): any;
    static instance(): TInputMethod;
}
export declare enum TKeyCode {
    KEY_RETURN,
    KEY_ESCAPE,
    KEY_BACKSPACE,
    KEY_TAB,
    KEY_SPACE,
    KEY_EXCLAIM,
    KEY_QUOTEDBL,
    KEY_HASH,
    KEY_PERCENT,
    KEY_DOLLAR,
    KEY_AMPERSAND,
    KEY_QUOTE,
    KEY_LEFTPAREN,
    KEY_RIGHTPAREN,
    KEY_ASTERISK,
    KEY_PLUS,
    KEY_COMMA,
    KEY_MINUS,
    KEY_PERIOD,
    KEY_SLASH,
    KEY_0,
    KEY_1,
    KEY_2,
    KEY_3,
    KEY_4,
    KEY_5,
    KEY_6,
    KEY_7,
    KEY_8,
    KEY_9,
    KEY_COLON,
    KEY_SEMICOLON,
    KEY_LESS,
    KEY_EQUAL,
    KEY_GREATER,
    KEY_QUESTION,
    KEY_AT,
    KEY_LEFTBRACKET,
    KEY_BACKSLASH,
    KEY_RIGHTBRACKET,
    KEY_CARET,
    KEY_UNDERSCORE,
    KEY_BACKQUOTE,
    KEY_a,
    KEY_b,
    KEY_c,
    KEY_d,
    KEY_e,
    KEY_f,
    KEY_g,
    KEY_h,
    KEY_i,
    KEY_j,
    KEY_k,
    KEY_l,
    KEY_m,
    KEY_n,
    KEY_o,
    KEY_p,
    KEY_q,
    KEY_r,
    KEY_s,
    KEY_t,
    KEY_u,
    KEY_v,
    KEY_w,
    KEY_x,
    KEY_y,
    KEY_z,
    KEY_A,
    KEY_B,
    KEY_C,
    KEY_D,
    KEY_E,
    KEY_F,
    KEY_G,
    KEY_H,
    KEY_I,
    KEY_J,
    KEY_K,
    KEY_L,
    KEY_M,
    KEY_N,
    KEY_O,
    KEY_P,
    KEY_Q,
    KEY_R,
    KEY_S,
    KEY_T,
    KEY_U,
    KEY_V,
    KEY_W,
    KEY_X,
    KEY_Y,
    KEY_Z,
    KEY_DOT,
    KEY_DELETE,
    KEY_LEFTBRACE,
    KEY_RIGHTBRACE,
    KEY_LSHIFT,
    KEY_RSHIFT,
    KEY_LCTRL,
    KEY_RCTRL,
    KEY_LALT,
    KEY_RALT,
    KEY_CAPSLOCK,
    KEY_HOME,
    KEY_END,
    KEY_INSERT,
    KEY_UP,
    KEY_DOWN,
    KEY_LEFT,
    KEY_RIGHT,
    KEY_PAGEUP,
    KEY_PAGEDOWN,
    KEY_F1,
    KEY_F2,
    KEY_F3,
    KEY_F4,
    KEY_F5,
    KEY_F6,
    KEY_F7,
    KEY_F8,
    KEY_F9,
    KEY_F10,
    KEY_F11,
    KEY_F12,
    KEY_MENU,
    KEY_COMMAND,
    KEY_BACK,
    KEY_CANCEL,
    KEY_WHEEL
}
export declare class TLocaleInfo {
    nativeObj: any;
    constructor(nativeObj: any);
    static instance(): TLocaleInfo;
    tr(text: any): any;
    change(language: any, country: any): any;
    off(id: any): any;
}
export declare enum TStyleId {
    BG_COLOR,
    FG_COLOR,
    MASK_COLOR,
    FONT_NAME,
    FONT_SIZE,
    FONT_STYLE,
    TEXT_COLOR,
    HIGHLIGHT_FONT_NAME,
    HIGHLIGHT_FONT_SIZE,
    HIGHLIGHT_TEXT_COLOR,
    TIPS_TEXT_COLOR,
    TEXT_ALIGN_H,
    TEXT_ALIGN_V,
    BORDER_COLOR,
    BORDER_WIDTH,
    BORDER,
    BG_IMAGE,
    BG_IMAGE_DRAW_TYPE,
    ICON,
    FG_IMAGE,
    FG_IMAGE_DRAW_TYPE,
    SPACER,
    MARGIN,
    MARGIN_LEFT,
    MARGIN_RIGHT,
    MARGIN_TOP,
    MARGIN_BOTTOM,
    ICON_AT,
    ACTIVE_ICON,
    X_OFFSET,
    Y_OFFSET,
    SELECTED_BG_COLOR,
    SELECTED_FG_COLOR,
    SELECTED_TEXT_COLOR,
    ROUND_RADIUS,
    ROUND_RADIUS_TOP_LETF,
    ROUND_RADIUS_TOP_RIGHT,
    ROUND_RADIUS_BOTTOM_LETF,
    ROUND_RADIUS_BOTTOM_RIGHT,
    CHILDREN_LAYOUT,
    SELF_LAYOUT,
    FOCUSABLE,
    FEEDBACK
}
export declare class TStyle {
    nativeObj: any;
    constructor(nativeObj: any);
    notifyWidgetStateChanged(widget: any): any;
    isValid(): any;
    getInt(name: any, defval: any): any;
    getUint(name: any, defval: any): any;
    getStr(name: any, defval: any): any;
    set(state: any, name: any, value: any): any;
    updateState(theme: any, widget_type: any, style_name: any, widget_state: any): any;
    getStyleState(): any;
    isMutable(): any;
    getStyleType(): any;
}
export declare class TTheme {
    nativeObj: any;
    constructor(nativeObj: any);
    static instance(): TTheme;
}
export declare class TTimer {
    nativeObj: any;
    constructor(nativeObj: any);
    static add(on_timer: any, ctx: any, duration: any): any;
    static remove(timer_id: any): any;
    static removeAllByCtx(ctx: any): any;
    static reset(timer_id: any): any;
    static suspend(timer_id: any): any;
    static resume(timer_id: any): any;
    static modify(timer_id: any, duration: any): any;
}
export declare enum TAlignV {
    NONE,
    MIDDLE,
    TOP,
    BOTTOM
}
export declare enum TAlignH {
    NONE,
    CENTER,
    LEFT,
    RIGHT
}
export declare enum TAppType {
    MOBILE,
    SIMULATOR,
    DESKTOP
}
export declare enum TBitmapFormat {
    NONE,
    RGBA8888,
    ABGR8888,
    BGRA8888,
    ARGB8888,
    RGB565,
    BGR565,
    RGB888,
    BGR888,
    GRAY,
    MONO
}
export declare enum TBitmapFlag {
    NONE,
    OPAQUE,
    IMMUTABLE,
    TEXTURE,
    CHANGED,
    PREMULTI_ALPHA
}
export declare class TVgcanvas {
    nativeObj: any;
    constructor(nativeObj: any);
    static cast(vg: any): TVgcanvas;
    flush(): any;
    beginPath(): any;
    moveTo(x: any, y: any): any;
    lineTo(x: any, y: any): any;
    quadTo(cpx: any, cpy: any, x: any, y: any): any;
    bezierTo(cp1x: any, cp1y: any, cp2x: any, cp2y: any, x: any, y: any): any;
    arcTo(x1: any, y1: any, x2: any, y2: any, r: any): any;
    arc(x: any, y: any, r: any, start_angle: any, end_angle: any, ccw: any): any;
    isPointInPath(x: any, y: any): any;
    rect(x: any, y: any, w: any, h: any): any;
    roundedRect(x: any, y: any, w: any, h: any, r: any): any;
    ellipse(x: any, y: any, rx: any, ry: any): any;
    closePath(): any;
    pathWinding(dir: any): any;
    rotate(rad: any): any;
    scale(x: any, y: any): any;
    translate(x: any, y: any): any;
    transform(a: any, b: any, c: any, d: any, e: any, f: any): any;
    setTransform(a: any, b: any, c: any, d: any, e: any, f: any): any;
    clipPath(): any;
    clipRect(x: any, y: any, w: any, h: any): any;
    intersectClipRect(x: any, y: any, w: any, h: any): any;
    fill(): any;
    stroke(): any;
    paint(stroke: any, img: any): any;
    setFont(font: any): any;
    setFontSize(font: any): any;
    setTextAlign(value: any): any;
    setTextBaseline(value: any): any;
    fillText(text: any, x: any, y: any, max_width: any): any;
    measureText(text: any): any;
    drawImage(img: any, sx: any, sy: any, sw: any, sh: any, dx: any, dy: any, dw: any, dh: any): any;
    drawIcon(img: any, sx: any, sy: any, sw: any, sh: any, dx: any, dy: any, dw: any, dh: any): any;
    setAntialias(value: any): any;
    setGlobalAlpha(alpha: any): any;
    setLineWidth(value: any): any;
    setFillColor(color: any): any;
    setStrokeColor(color: any): any;
    setLineCap(value: any): any;
    setLineJoin(value: any): any;
    setMiterLimit(value: any): any;
    save(): any;
    restore(): any;
    get w(): any;
    get h(): any;
    get stride(): any;
    get ratio(): any;
    get antiAlias(): any;
    get lineWidth(): any;
    get globalAlpha(): any;
    get miterLimit(): any;
    get lineCap(): any;
    get lineJoin(): any;
    get font(): any;
    get fontSize(): any;
    get textAlign(): any;
    get textBaseline(): any;
}
export declare enum TVgcanvasLineCap {
    ROUND,
    SQUARE,
    BUTT
}
export declare enum TVgcanvasLineJoin {
    ROUND,
    BEVEL,
    MITTER
}
export declare enum TWidgetProp {
    EXEC,
    X,
    Y,
    W,
    H,
    MAX_H,
    DESIGN_W,
    DESIGN_H,
    AUTO_SCALE_CHILDREN_X,
    AUTO_SCALE_CHILDREN_Y,
    AUTO_SCALE_CHILDREN_W,
    AUTO_SCALE_CHILDREN_H,
    INPUTING,
    ALWAYS_ON_TOP,
    CARET_X,
    CARET_Y,
    DIRTY_RECT_TOLERANCE,
    BIDI,
    CANVAS,
    LOCALIZE_OPTIONS,
    NATIVE_WINDOW,
    HIGHLIGHT,
    BAR_SIZE,
    OPACITY,
    MIN_W,
    MAX_W,
    AUTO_ADJUST_SIZE,
    SINGLE_INSTANCE,
    STRONGLY_FOCUS,
    CHILDREN_LAYOUT,
    LAYOUT,
    SELF_LAYOUT,
    LAYOUT_W,
    LAYOUT_H,
    VIRTUAL_W,
    VIRTUAL_H,
    NAME,
    TYPE,
    CLOSABLE,
    POINTER_CURSOR,
    VALUE,
    RADIO,
    REVERSE,
    LENGTH,
    LINE_WRAP,
    WORD_WRAP,
    TEXT,
    TR_TEXT,
    STYLE,
    ENABLE,
    FEEDBACK,
    FLOATING,
    MARGIN,
    SPACING,
    LEFT_MARGIN,
    RIGHT_MARGIN,
    TOP_MARGIN,
    BOTTOM_MARGIN,
    STEP,
    VISIBLE,
    SENSITIVE,
    ANIMATION,
    ANIM_HINT,
    FULLSCREEN,
    DISABLE_ANIM,
    OPEN_ANIM_HINT,
    CLOSE_ANIM_HINT,
    MIN,
    ACTION_TEXT,
    TIPS,
    TR_TIPS,
    INPUT_TYPE,
    KEYBOARD,
    DEFAULT_FOCUSED_CHILD,
    READONLY,
    CANCELABLE,
    PASSWORD_VISIBLE,
    ACTIVE,
    CURR_PAGE,
    PAGE_MAX_NUMBER,
    VERTICAL,
    SHOW_TEXT,
    XOFFSET,
    YOFFSET,
    ALIGN_V,
    ALIGN_H,
    AUTO_PLAY,
    LOOP,
    AUTO_FIX,
    SELECT_NONE_WHEN_FOCUSED,
    OPEN_IM_WHEN_FOCUSED,
    CLOSE_IM_WHEN_BLURED,
    X_MIN,
    X_MAX,
    Y_MIN,
    Y_MAX,
    MAX,
    GRAB_KEYS,
    ROW,
    STATE_FOR_STYLE,
    THEME,
    STAGE,
    IMAGE_MANAGER,
    ASSETS_MANAGER,
    LOCALE_INFO,
    FONT_MANAGER,
    THEME_OBJ,
    DEFAULT_THEME_OBJ,
    ITEM_WIDTH,
    ITEM_HEIGHT,
    DEFAULT_ITEM_HEIGHT,
    XSLIDABLE,
    YSLIDABLE,
    REPEAT,
    LONG_PRESS_TIME,
    ENABLE_LONG_PRESS,
    CLICK_THROUGH,
    ANIMATABLE,
    AUTO_HIDE,
    AUTO_HIDE_SCROLL_BAR,
    IMAGE,
    FORMAT,
    DRAW_TYPE,
    SELECTABLE,
    CLICKABLE,
    SCALE_X,
    SCALE_Y,
    ANCHOR_X,
    ANCHOR_Y,
    ROTATION,
    COMPACT,
    SCROLLABLE,
    ICON,
    OPTIONS,
    SELECTED,
    CHECKED,
    ACTIVE_ICON,
    LOAD_UI,
    OPEN_WINDOW,
    SELECTED_INDEX,
    CLOSE_WHEN_CLICK,
    CLOSE_WHEN_CLICK_OUTSIDE,
    CLOSE_WHEN_TIMEOUT,
    LINE_GAP,
    BG_COLOR,
    BORDER_COLOR,
    DELAY,
    IS_KEYBOARD,
    FOCUSED,
    FOCUS,
    FOCUSABLE,
    WITH_FOCUS_STATE,
    MOVE_FOCUS_PREV_KEY,
    MOVE_FOCUS_NEXT_KEY,
    MOVE_FOCUS_UP_KEY,
    MOVE_FOCUS_DOWN_KEY,
    MOVE_FOCUS_LEFT_KEY,
    MOVE_FOCUS_RIGHT_KEY
}
export declare enum TWidgetType {
    NONE,
    WINDOW_MANAGER,
    NORMAL_WINDOW,
    OVERLAY,
    TOOL_BAR,
    DIALOG,
    POPUP,
    SYSTEM_BAR,
    SYSTEM_BAR_BOTTOM,
    SPRITE,
    KEYBOARD,
    DND,
    LABEL,
    BUTTON,
    IMAGE,
    EDIT,
    PROGRESS_BAR,
    GROUP_BOX,
    CHECK_BUTTON,
    RADIO_BUTTON,
    DIALOG_TITLE,
    DIALOG_CLIENT,
    SLIDER,
    VIEW,
    COMBO_BOX,
    COMBO_BOX_ITEM,
    SLIDE_VIEW,
    SLIDE_INDICATOR,
    SLIDE_INDICATOR_ARC,
    PAGES,
    TAB_BUTTON,
    TAB_CONTROL,
    TAB_BUTTON_GROUP,
    BUTTON_GROUP,
    CANDIDATES,
    SPIN_BOX,
    DRAGGER,
    SCROLL_BAR,
    SCROLL_BAR_DESKTOP,
    SCROLL_BAR_MOBILE,
    SCROLL_VIEW,
    LIST_VIEW,
    LIST_VIEW_H,
    LIST_ITEM,
    COLOR_PICKER,
    COLOR_COMPONENT,
    COLOR_TILE,
    CLIP_VIEW,
    RICH_TEXT,
    APP_BAR,
    GRID,
    GRID_ITEM,
    ROW,
    COLUMN,
    CALIBRATION_WIN
}
export declare enum TWindowStage {
    NONE,
    LOADED,
    CREATED,
    OPENED,
    CLOSED,
    SUSPEND
}
export declare enum TWindowClosable {
    YES,
    NO,
    CONFIRM
}
export declare enum TWidgetState {
    NONE,
    NORMAL,
    CHANGED,
    PRESSED,
    OVER,
    DISABLE,
    FOCUSED,
    CHECKED,
    UNCHECKED,
    EMPTY,
    EMPTY_FOCUS,
    ERROR,
    SELECTED,
    NORMAL_OF_CHECKED,
    PRESSED_OF_CHECKED,
    OVER_OF_CHECKED,
    DISABLE_OF_CHECKED,
    FOCUSED_OF_CHECKED,
    NORMAL_OF_ACTIVE,
    PRESSED_OF_ACTIVE,
    OVER_OF_ACTIVE,
    DISABLE_OF_ACTIVE,
    FOCUSED_OF_ACTIVE
}
export declare enum TWidgetCursor {
    CURSOR_DEFAULT,
    CURSOR_EDIT,
    CURSOR_HAND,
    CURSOR_WAIT,
    CURSOR_CROSS,
    CURSOR_NO,
    CURSOR_SIZENWSE,
    CURSOR_SIZENESW,
    CURSOR_SIZEWE,
    CURSOR_SIZENS,
    CURSOR_SIZEALL
}
export declare class TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    countChildren(): any;
    getChild(index: any): TWidget;
    getFocusedWidget(): TWidget;
    getNativeWindow(): TNativeWindow;
    indexOf(): any;
    closeWindow(): any;
    closeWindowForce(): any;
    back(): any;
    backToHome(): any;
    move(x: any, y: any): any;
    resize(w: any, h: any): any;
    moveResize(x: any, y: any, w: any, h: any): any;
    setValue(value: any): any;
    animateValueTo(value: any, duration: any): any;
    addValue(delta: any): any;
    isStyleExist(style_name: any, state_name: any): any;
    useStyle(style: any): any;
    setText(text: any): any;
    setChildText(name: any, text: any): any;
    setChildTextWithDouble(name: any, format: any, value: any): any;
    setChildTextWithInt(name: any, format: any, value: any): any;
    setTrText(text: any): any;
    getValue(): any;
    getEnable(): any;
    getFloating(): any;
    getAutoAdjustSize(): any;
    getWithFocusState(): any;
    getFocusable(): any;
    getSensitive(): any;
    getVisible(): any;
    getFeedback(): any;
    getText(): any;
    setName(name: any): any;
    setTheme(name: any): any;
    setPointerCursor(cursor: any): any;
    setAnimation(animation: any): any;
    createAnimator(animation: any): any;
    startAnimator(name: any): any;
    setAnimatorTimeScale(name: any, time_scale: any): any;
    pauseAnimator(name: any): any;
    stopAnimator(name: any): any;
    destroyAnimator(name: any): any;
    setEnable(enable: any): any;
    setFeedback(feedback: any): any;
    setAutoAdjustSize(auto_adjust_size: any): any;
    setFloating(floating: any): any;
    setFocused(focused: any): any;
    setFocusable(focusable: any): any;
    setState(state: any): any;
    setOpacity(opacity: any): any;
    setDirtyRectTolerance(dirty_rect_tolerance: any): any;
    destroyChildren(): any;
    addChild(child: any): any;
    removeChild(child: any): any;
    insertChild(index: any, child: any): any;
    restack(index: any): any;
    child(name: any): TWidget;
    lookup(name: any, recursive: any): TWidget;
    lookupByType(type: any, recursive: any): TWidget;
    setVisible(visible: any): any;
    setVisibleOnly(visible: any): any;
    setSensitive(sensitive: any): any;
    on(type: any, on_event: any, ctx: any): any;
    off(id: any): any;
    invalidateForce(r: any): any;
    setPropStr(name: any, v: any): any;
    getPropStr(name: any, defval: any): any;
    setPropPointer(name: any, v: any): any;
    getPropPointer(name: any): any;
    setPropInt(name: any, v: any): any;
    getPropInt(name: any, defval: any): any;
    setPropBool(name: any, v: any): any;
    getPropBool(name: any, defval: any): any;
    isWindowOpened(): any;
    isWindowCreated(): any;
    isParentOf(child: any): any;
    isDirectParentOf(child: any): any;
    isWindow(): any;
    isSystemBar(): any;
    isNormalWindow(): any;
    isDialog(): any;
    isPopup(): any;
    isOverlay(): any;
    isOpenedDialog(): any;
    isOpenedPopup(): any;
    isKeyboard(): any;
    isDesigningWindow(): any;
    isWindowManager(): any;
    foreach(visit: any, ctx: any): any;
    getWindow(): TWidget;
    getWindowManager(): TWidget;
    getType(): any;
    clone(parent: any): TWidget;
    equal(other: any): any;
    static cast(widget: any): TWidget;
    destroy(): any;
    destroyAsync(): any;
    unref(): any;
    strokeBorderRect(c: any, r: any): any;
    fillBgRect(c: any, r: any, draw_type: any): any;
    fillFgRect(c: any, r: any, draw_type: any): any;
    dispatchToTarget(e: any): any;
    dispatchToKeyTarget(e: any): any;
    getStyleType(): any;
    updateStyle(): any;
    updateStyleRecursive(): any;
    setAsKeyTarget(): any;
    focusNext(): any;
    focusPrev(): any;
    getStateForStyle(active: any, checked: any): any;
    layout(): any;
    setSelfLayout(params: any): any;
    setChildrenLayout(params: any): any;
    setSelfLayoutParams(x: any, y: any, w: any, h: any): any;
    setStyleInt(state_and_name: any, value: any): any;
    setStyleStr(state_and_name: any, value: any): any;
    setStyleColor(state_and_name: any, value: any): any;
    get x(): any;
    get y(): any;
    get w(): any;
    get h(): any;
    get name(): any;
    get pointerCursor(): any;
    get trText(): any;
    get style(): any;
    get animation(): any;
    get enable(): any;
    get feedback(): any;
    get visible(): any;
    get sensitive(): any;
    get focusable(): any;
    get withFocusState(): any;
    get autoAdjustSize(): any;
    get floating(): any;
    get dirtyRectTolerance(): any;
    get parent(): any;
}
export declare class TAppConf {
    nativeObj: any;
    constructor(nativeObj: any);
    static save(): any;
    static reload(): any;
    static deinit(): any;
    static exist(key: any): any;
    static setInt(key: any, v: any): any;
    static setInt64(key: any, v: any): any;
    static setBool(key: any, v: any): any;
    static setDouble(key: any, v: any): any;
    static setStr(key: any, v: any): any;
    static getInt(key: any, defval: any): any;
    static getInt64(key: any, defval: any): any;
    static getBool(key: any, defval: any): any;
    static getDouble(key: any, defval: any): any;
    static getStr(key: any, defval: any): any;
    static remove(key: any): any;
}
export declare class TExtWidgets {
    nativeObj: any;
    constructor(nativeObj: any);
    static init(): any;
}
export declare enum TIndicatorDefaultPaint {
    AUTO,
    FILL_DOT,
    STROKE_DOT,
    FILL_RECT,
    STROKE_RECT
}
export declare enum TVpageEvent {
    VPAGE_WILL_OPEN,
    VPAGE_OPEN,
    VPAGE_CLOSE
}
export declare enum TAssetType {
    NONE,
    FONT,
    IMAGE,
    STYLE,
    UI,
    XML,
    STRINGS,
    SCRIPT,
    FLOW,
    DATA
}
export declare class TAssetInfo {
    nativeObj: any;
    constructor(nativeObj: any);
    getType(): any;
    getName(): any;
    get type(): any;
    get subtype(): any;
    get isInRom(): any;
    get size(): any;
    get refcount(): any;
    get name(): any;
}
export declare class TColor {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(r: any, b: any, g: any, a: any): TColor;
    fromStr(str: any): TColor;
    r(): any;
    g(): any;
    b(): any;
    a(): any;
    getColor(): any;
    static cast(color: any): TColor;
    destroy(): any;
    set color(value: any);
    get color(): any;
}
export declare class TDateTime {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(): TDateTime;
    setYear(year: any): any;
    setMonth(month: any): any;
    setDay(day: any): any;
    setHour(hour: any): any;
    setMinute(minute: any): any;
    setSecond(second: any): any;
    set(): any;
    fromTime(time: any): any;
    toTime(): any;
    addDelta(delta: any): any;
    static isLeap(year: any): any;
    static getDays(year: any, montn: any): any;
    static getWday(year: any, montn: any, day: any): any;
    static getMonthName(montn: any): any;
    static getWdayName(wday: any): any;
    destroy(): any;
    get second(): any;
    get minute(): any;
    get hour(): any;
    get day(): any;
    get wday(): any;
    get month(): any;
    get year(): any;
}
export declare enum TEasingType {
    LINEAR,
    QUADRATIC_IN,
    QUADRATIC_OUT,
    QUADRATIC_INOUT,
    CUBIC_IN,
    CUBIC_OUT,
    SIN_IN,
    SIN_OUT,
    SIN_INOUT,
    POW_IN,
    POW_OUT,
    POW_INOUT,
    CIRCULAR_IN,
    CIRCULAR_OUT,
    CIRCULAR_INOUT,
    ELASTIC_IN,
    ELASTIC_OUT,
    ELASTIC_INOUT,
    BACK_IN,
    BACK_OUT,
    BACK_INOUT,
    BOUNCE_IN,
    BOUNCE_OUT,
    BOUNCE_INOUT
}
export declare class TIdleManager {
    nativeObj: any;
    constructor(nativeObj: any);
}
export declare enum TMIME_TYPE {
    APPLICATION_ENVOY,
    APPLICATION_FRACTALS,
    APPLICATION_FUTURESPLASH,
    APPLICATION_HTA,
    APPLICATION_JSON,
    APPLICATION_UBJSON,
    APPLICATION_MAC_BINHEX40,
    APPLICATION_MSWORD,
    APPLICATION_OCTET_STREAM,
    APPLICATION_ODA,
    APPLICATION_OLESCRIPT,
    APPLICATION_PDF,
    APPLICATION_PICS_RULES,
    APPLICATION_PKCS10,
    APPLICATION_PKIX_CRL,
    APPLICATION_POSTSCRIPT,
    APPLICATION_RTF,
    APPLICATION_VND_MS_EXCEL,
    APPLICATION_VND_MS_OUTLOOK,
    APPLICATION_VND_MS_PKICERTSTORE,
    APPLICATION_VND_MS_PKISECCAT,
    APPLICATION_VND_MS_PKISTL,
    APPLICATION_VND_MS_POWERPOINT,
    APPLICATION_VND_MS_PROJECT,
    APPLICATION_VND_MS_WORKS,
    APPLICATION_WINHLP,
    APPLICATION_X_BCPIO,
    APPLICATION_X_CDF,
    APPLICATION_X_COMPRESS,
    APPLICATION_X_COMPRESSED,
    APPLICATION_X_CPIO,
    APPLICATION_X_CSH,
    APPLICATION_X_DIRECTOR,
    APPLICATION_X_DVI,
    APPLICATION_X_GTAR,
    APPLICATION_X_GZIP,
    APPLICATION_X_HDF,
    APPLICATION_X_IPHONE,
    APPLICATION_X_JAVASCRIPT,
    APPLICATION_X_LATEX,
    APPLICATION_X_MSACCESS,
    APPLICATION_X_MSCARDFILE,
    APPLICATION_X_MSCLIP,
    APPLICATION_X_MSDOWNLOAD,
    APPLICATION_X_MSMEDIAVIEW,
    APPLICATION_X_MSMETAFILE,
    APPLICATION_X_MSMONEY,
    APPLICATION_X_MSPUBLISHER,
    APPLICATION_X_MSSCHEDULE,
    APPLICATION_X_MSTERMINAL,
    APPLICATION_X_MSWRITE,
    APPLICATION_X_NETCDF,
    APPLICATION_X_PERFMON,
    APPLICATION_X_PKCS12,
    APPLICATION_X_SH,
    APPLICATION_X_SHAR,
    APPLICATION_X_SHOCKWAVE_FLASH,
    APPLICATION_X_STUFFIT,
    APPLICATION_X_SV4CPIO,
    APPLICATION_X_SV4CRC,
    APPLICATION_X_TAR,
    APPLICATION_X_TCL,
    APPLICATION_X_TEX,
    APPLICATION_X_TEXINFO,
    APPLICATION_X_TROFF,
    APPLICATION_X_USTAR,
    APPLICATION_ZIP,
    AUDIO_BASIC,
    AUDIO_MID,
    AUDIO_MPEG,
    AUDIO_X_AIFF,
    AUDIO_X_MPEGURL,
    AUDIO_X_WAV,
    IMAGE_BMP,
    IMAGE_CIS_COD,
    IMAGE_GIF,
    IMAGE_IEF,
    IMAGE_JPEG,
    IMAGE_PIPEG,
    IMAGE_SVG_XML,
    IMAGE_TIFF,
    IMAGE_X_CMX,
    IMAGE_X_ICON,
    IMAGE_X_RGB,
    IMAGE_X_XBITMAP,
    IMAGE_X_XPIXMAP,
    IMAGE_X_XWINDOWDUMP,
    MESSAGE_RFC822,
    TEXT_CSS,
    TEXT_H323,
    TEXT_HTML,
    TEXT_IULS,
    TEXT_PLAIN,
    TEXT_RICHTEXT,
    TEXT_SCRIPTLET,
    TEXT_WEBVIEWHTML,
    TEXT_X_COMPONENT,
    TEXT_X_SETEXT,
    TEXT_X_VCARD,
    VIDEO_MPEG,
    VIDEO_QUICKTIME,
    VIDEO_X_MSVIDEO
}
export declare class TNamedValue {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(): TNamedValue;
    static cast(nv: any): TNamedValue;
    setName(name: any): any;
    setValue(value: any): any;
    getValue(): TValue;
    destroy(): any;
    get name(): any;
}
export declare enum TObjectCmd {
    SAVE,
    RELOAD,
    MOVE_UP,
    MOVE_DOWN,
    REMOVE,
    REMOVE_CHECKED,
    CLEAR,
    ADD,
    DETAIL,
    EDIT
}
export declare enum TObjectProp {
    SIZE,
    CHECKED
}
export declare class TRlog {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(filename_pattern: any, max_size: any, buff_size: any): TRlog;
    write(str: any): any;
}
export declare class TTimeNow {
    nativeObj: any;
    constructor(nativeObj: any);
    static s(): any;
    static ms(): any;
    static us(): any;
}
export declare class TTimerManager {
    nativeObj: any;
    constructor(nativeObj: any);
}
export declare enum TRet {
    OK,
    OOM,
    FAIL,
    NOT_IMPL,
    QUIT,
    FOUND,
    BUSY,
    REMOVE,
    REPEAT,
    NOT_FOUND,
    DONE,
    STOP,
    SKIP,
    CONTINUE,
    OBJECT_CHANGED,
    ITEMS_CHANGED,
    BAD_PARAMS,
    TIMEOUT,
    CRC,
    IO,
    EOS,
    NOT_MODIFIED
}
export declare enum TValueType {
    INVALID,
    BOOL,
    INT8,
    UINT8,
    INT16,
    UINT16,
    INT32,
    UINT32,
    INT64,
    UINT64,
    POINTER,
    FLOAT,
    FLOAT32,
    DOUBLE,
    STRING,
    WSTRING,
    OBJECT,
    SIZED_STRING,
    BINARY,
    UBJSON,
    TOKEN
}
export declare class TAssetsManager extends TEmitter {
    nativeObj: any;
    constructor(nativeObj: any);
    static instance(): TAssetsManager;
    setTheme(theme: any): any;
    ref(type: any, name: any): TAssetInfo;
    refEx(type: any, subtype: any, name: any): TAssetInfo;
    unref(info: any): any;
}
export declare class TWheelEvent extends TEvent {
    nativeObj: any;
    constructor(nativeObj: any);
    static cast(event: any): TWheelEvent;
    get dy(): any;
    get alt(): any;
    get ctrl(): any;
    get shift(): any;
}
export declare class TOrientationEvent extends TEvent {
    nativeObj: any;
    constructor(nativeObj: any);
    static cast(event: any): TOrientationEvent;
    get orientation(): any;
}
export declare class TValueChangeEvent extends TEvent {
    nativeObj: any;
    constructor(nativeObj: any);
    static cast(event: any): TValueChangeEvent;
}
export declare class TPointerEvent extends TEvent {
    nativeObj: any;
    constructor(nativeObj: any);
    static cast(event: any): TPointerEvent;
    get x(): any;
    get y(): any;
    get button(): any;
    get pressed(): any;
    get alt(): any;
    get ctrl(): any;
    get cmd(): any;
    get menu(): any;
    get shift(): any;
}
export declare class TKeyEvent extends TEvent {
    nativeObj: any;
    constructor(nativeObj: any);
    static cast(event: any): TKeyEvent;
    get key(): any;
    get alt(): any;
    get lalt(): any;
    get ralt(): any;
    get ctrl(): any;
    get lctrl(): any;
    get rctrl(): any;
    get shift(): any;
    get lshift(): any;
    get rshift(): any;
    get cmd(): any;
    get menu(): any;
    get capslock(): any;
}
export declare class TPaintEvent extends TEvent {
    nativeObj: any;
    constructor(nativeObj: any);
    static cast(event: any): TPaintEvent;
    get c(): any;
}
export declare class TWindowEvent extends TEvent {
    nativeObj: any;
    constructor(nativeObj: any);
    static cast(event: any): TWindowEvent;
    get window(): any;
}
export declare class TMultiGestureEvent extends TEvent {
    nativeObj: any;
    constructor(nativeObj: any);
    static cast(event: any): TMultiGestureEvent;
    get x(): any;
    get y(): any;
    get rotation(): any;
    get distance(): any;
}
export declare class TImageBase extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    setImage(name: any): any;
    setRotation(rotation: any): any;
    setScale(scale_x: any, scale_y: any): any;
    setAnchor(anchor_x: any, anchor_y: any): any;
    setSelected(selected: any): any;
    setSelectable(selectable: any): any;
    setClickable(clickable: any): any;
    static cast(widget: any): TImageBase;
    get image(): any;
    get anchorX(): any;
    get anchorY(): any;
    get scaleX(): any;
    get scaleY(): any;
    get rotation(): any;
    get clickable(): any;
    get selectable(): any;
    get selected(): any;
}
export declare class TStyleMutable extends TStyle {
    nativeObj: any;
    constructor(nativeObj: any);
    setName(name: any): any;
    setInt(state: any, name: any, val: any): any;
    static cast(s: any): TStyleMutable;
    static create(default_style: any): TStyleMutable;
    get name(): any;
}
export declare class TWindowBase extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static cast(widget: any): TWindowBase;
    get theme(): any;
    get designW(): any;
    get designH(): any;
    get autoScaleChildrenX(): any;
    get autoScaleChildrenY(): any;
    get autoScaleChildrenW(): any;
    get autoScaleChildrenH(): any;
    get disableAnim(): any;
    get closable(): any;
    get openAnimHint(): any;
    get closeAnimHint(): any;
    get moveFocusPrevKey(): any;
    get moveFocusNextKey(): any;
    get moveFocusUpKey(): any;
    get moveFocusDownKey(): any;
    get moveFocusLeftKey(): any;
    get moveFocusRightKey(): any;
    get singleInstance(): any;
    get stronglyFocus(): any;
}
export declare class TWindowManager extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static instance(): TWindowManager;
    static cast(widget: any): TWindowManager;
    getTopMainWindow(): TWidget;
    getTopWindow(): TWidget;
    getPrevWindow(): TWidget;
    getPointerX(): any;
    getPointerY(): any;
    getPointerPressed(): any;
    isAnimating(): any;
    setShowFps(show_fps: any): any;
    setMaxFps(max_fps: any): any;
    setIgnoreInputEvents(ignore_input_events: any): any;
    setScreenSaverTime(screen_saver_time: any): any;
    setCursor(cursor: any): any;
    back(): any;
    backToHome(): any;
    backTo(target: any): any;
    resize(w: any, h: any): any;
    closeAll(): any;
}
export declare class TCanvasWidget extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: any, x: any, y: any, w: any, h: any): TCanvasWidget;
    static cast(widget: any): TCanvasWidget;
}
export declare class TColorComponent extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: any, x: any, y: any, w: any, h: any): TColorComponent;
    static cast(widget: any): TColorComponent;
}
export declare class TColorPicker extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: any, x: any, y: any, w: any, h: any): TColorPicker;
    setColor(color: any): any;
    static cast(widget: any): TColorPicker;
    get value(): any;
}
export declare class TDraggable extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: any, x: any, y: any, w: any, h: any): TDraggable;
    static cast(widget: any): TDraggable;
    setTop(top: any): any;
    setBottom(bottom: any): any;
    setLeft(left: any): any;
    setRight(right: any): any;
    setVerticalOnly(vertical_only: any): any;
    setHorizontalOnly(horizontal_only: any): any;
    setDragWindow(drag_window: any): any;
    get top(): any;
    get bottom(): any;
    get left(): any;
    get right(): any;
    get verticalOnly(): any;
    get horizontalOnly(): any;
    get dragWindow(): any;
}
export declare class TFileBrowserView extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: any, x: any, y: any, w: any, h: any): TFileBrowserView;
    static cast(widget: any): TFileBrowserView;
    setInitDir(init_dir: any): any;
    setTopDir(top_dir: any): any;
    setFilter(filter: any): any;
    reload(): any;
    setIgnoreHiddenFiles(ignore_hidden_files: any): any;
    setSortAscending(sort_ascending: any): any;
    setShowCheckButton(show_check_button: any): any;
    setSortBy(sort_by: any): any;
    getCwd(): any;
    createDir(name: any): any;
    createFile(name: any, data: any, size: any): any;
    get initDir(): any;
    get topDir(): any;
    get filter(): any;
    get ignoreHiddenFiles(): any;
    get sortAscending(): any;
    get showCheckButton(): any;
    get sortBy(): any;
}
export declare class TFileChooser extends TEmitter {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(): TFileChooser;
    setInitDir(init_dir: any): any;
    setTopDir(top_dir: any): any;
    setFilter(filter: any): any;
    static cast(chooser: any): TFileChooser;
    chooseFileForSave(): any;
    chooseFileForOpen(): any;
    chooseFolder(): any;
    getDir(): any;
    getFilename(): any;
    isAborted(): any;
}
export declare class TGaugePointer extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: any, x: any, y: any, w: any, h: any): TGaugePointer;
    static cast(widget: any): TGaugePointer;
    setAngle(angle: any): any;
    setImage(image: any): any;
    setAnchor(anchor_x: any, anchor_y: any): any;
    get angle(): any;
    get image(): any;
    get anchorX(): any;
    get anchorY(): any;
}
export declare class TGauge extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: any, x: any, y: any, w: any, h: any): TGauge;
    static cast(widget: any): TGauge;
    setImage(name: any): any;
    setDrawType(draw_type: any): any;
    get image(): any;
    get drawType(): any;
}
export declare class TImageAnimation extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: any, x: any, y: any, w: any, h: any): TImageAnimation;
    setLoop(loop: any): any;
    setImage(image: any): any;
    setInterval(interval: any): any;
    setDelay(delay: any): any;
    setAutoPlay(auto_play: any): any;
    setSequence(sequence: any): any;
    setRangeSequence(start_index: any, end_index: any): any;
    play(): any;
    stop(): any;
    pause(): any;
    next(): any;
    setFormat(format: any): any;
    setUnloadAfterPaint(unload_after_paint: any): any;
    setReverse(reverse: any): any;
    setShowWhenDone(show_when_done: any): any;
    static cast(widget: any): TImageAnimation;
    isPlaying(): any;
    get image(): any;
    get sequence(): any;
    get startIndex(): any;
    get endIndex(): any;
    get reverse(): any;
    get loop(): any;
    get autoPlay(): any;
    get unloadAfterPaint(): any;
    get format(): any;
    get interval(): any;
    get delay(): any;
    get showWhenDone(): any;
}
export declare class TImageValue extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: any, x: any, y: any, w: any, h: any): TImageValue;
    setImage(image: any): any;
    setFormat(format: any): any;
    setClickAddDelta(delta: any): any;
    setValue(value: any): any;
    setMin(min: any): any;
    setMax(max: any): any;
    static cast(widget: any): TImageValue;
    get image(): any;
    get format(): any;
    get clickAddDelta(): any;
    get value(): any;
    get min(): any;
    get max(): any;
}
export declare class TCandidates extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: any, x: any, y: any, w: any, h: any): TCandidates;
    static cast(widget: any): TCandidates;
    setPre(pre: any): any;
    setSelectByNum(select_by_num: any): any;
    setAutoHide(auto_hide: any): any;
    setButtonStyle(button_style: any): any;
    get pre(): any;
    get selectByNum(): any;
    get autoHide(): any;
    get buttonStyle(): any;
}
export declare class TLangIndicator extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: any, x: any, y: any, w: any, h: any): TLangIndicator;
    setImage(image: any): any;
    static cast(widget: any): TLangIndicator;
    get image(): any;
}
export declare class TLineNumber extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: any, x: any, y: any, w: any, h: any): TLineNumber;
    setTopMargin(top_margin: any): any;
    setBottomMargin(bottom_margin: any): any;
    setLineHeight(line_height: any): any;
    setYoffset(yoffset: any): any;
    static cast(widget: any): TLineNumber;
}
export declare class TMledit extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: any, x: any, y: any, w: any, h: any): TMledit;
    setReadonly(readonly: any): any;
    setCancelable(cancelable: any): any;
    setFocus(focus: any): any;
    setWrapWord(wrap_word: any): any;
    setMaxLines(max_lines: any): any;
    setMaxChars(max_chars: any): any;
    setTips(tips: any): any;
    setTrTips(tr_tips: any): any;
    setKeyboard(keyboard: any): any;
    setCursor(cursor: any): any;
    getCursor(): any;
    setScrollLine(scroll_line: any): any;
    scrollToOffset(offset: any): any;
    setOpenImWhenFocused(open_im_when_focused: any): any;
    setCloseImWhenBlured(close_im_when_blured: any): any;
    setSelect(start: any, end: any): any;
    getSelectedText(): any;
    static cast(widget: any): TMledit;
    get tips(): any;
    get trTips(): any;
    get keyboard(): any;
    get maxLines(): any;
    get maxChars(): any;
    get wrapWord(): any;
    get scrollLine(): any;
    get readonly(): any;
    get cancelable(): any;
    get openImWhenFocused(): any;
    get closeImWhenBlured(): any;
}
export declare class TProgressCircle extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: any, x: any, y: any, w: any, h: any): TProgressCircle;
    static cast(widget: any): TProgressCircle;
    setValue(value: any): any;
    setMax(max: any): any;
    setFormat(format: any): any;
    setLineWidth(line_width: any): any;
    setStartAngle(start_angle: any): any;
    setLineCap(line_cap: any): any;
    setShowText(show_text: any): any;
    setCounterClockWise(counter_clock_wise: any): any;
    get value(): any;
    get max(): any;
    get format(): any;
    get startAngle(): any;
    get lineWidth(): any;
    get lineCap(): any;
    get counterClockWise(): any;
    get showText(): any;
}
export declare class TRichTextView extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: any, x: any, y: any, w: any, h: any): TRichTextView;
    static cast(widget: any): TRichTextView;
}
export declare class TRichText extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: any, x: any, y: any, w: any, h: any): TRichText;
    setText(text: any): any;
    setYslidable(yslidable: any): any;
    static cast(widget: any): TRichText;
    get lineGap(): any;
    get yslidable(): any;
}
export declare class THscrollLabel extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: any, x: any, y: any, w: any, h: any): THscrollLabel;
    setLull(lull: any): any;
    setDuration(duration: any): any;
    setOnlyFocus(only_focus: any): any;
    setOnlyParentFocus(only_parent_focus: any): any;
    setLoop(loop: any): any;
    setYoyo(yoyo: any): any;
    setEllipses(ellipses: any): any;
    setXoffset(xoffset: any): any;
    start(): any;
    stop(): any;
    static cast(widget: any): THscrollLabel;
    get onlyFocus(): any;
    get onlyParentFocus(): any;
    get loop(): any;
    get yoyo(): any;
    get ellipses(): any;
    get lull(): any;
    get duration(): any;
    get xoffset(): any;
    get textW(): any;
}
export declare class TListItem extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: any, x: any, y: any, w: any, h: any): TListItem;
    static cast(widget: any): TListItem;
}
export declare class TListViewH extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: any, x: any, y: any, w: any, h: any): TListViewH;
    setItemWidth(item_width: any): any;
    setSpacing(spacing: any): any;
    static cast(widget: any): TListViewH;
    get itemWidth(): any;
    get spacing(): any;
}
export declare class TListView extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: any, x: any, y: any, w: any, h: any): TListView;
    setItemHeight(item_height: any): any;
    setDefaultItemHeight(default_item_height: any): any;
    setAutoHideScrollBar(auto_hide_scroll_bar: any): any;
    setFloatingScrollBar(floating_scroll_bar: any): any;
    static cast(widget: any): TListView;
    reinit(): any;
    get itemHeight(): any;
    get defaultItemHeight(): any;
    get autoHideScrollBar(): any;
    get floatingScrollBar(): any;
}
export declare class TScrollBar extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: any, x: any, y: any, w: any, h: any): TScrollBar;
    static cast(widget: any): TScrollBar;
    static createMobile(parent: any, x: any, y: any, w: any, h: any): TScrollBar;
    static createDesktop(parent: any, x: any, y: any, w: any, h: any): TScrollBar;
    setParams(virtual_size: any, row: any): any;
    scrollTo(value: any, duration: any): any;
    setValue(value: any): any;
    addDelta(delta: any): any;
    scrollDelta(delta: any): any;
    setValueOnly(value: any): any;
    setAutoHide(auto_hide: any): any;
    isMobile(): any;
    get virtualSize(): any;
    get value(): any;
    get row(): any;
    get animatable(): any;
    get autoHide(): any;
}
export declare class TScrollView extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: any, x: any, y: any, w: any, h: any): TScrollView;
    static cast(widget: any): TScrollView;
    setVirtualW(w: any): any;
    setVirtualH(h: any): any;
    setXslidable(xslidable: any): any;
    setYslidable(yslidable: any): any;
    setSnapToPage(snap_to_page: any): any;
    setMoveToPage(move_to_page: any): any;
    setRecursive(recursive: any): any;
    setRecursiveOnly(recursive: any): any;
    setOffset(xoffset: any, yoffset: any): any;
    setSpeedScale(xspeed_scale: any, yspeed_scale: any): any;
    scrollTo(xoffset_end: any, yoffset_end: any, duration: any): any;
    scrollDeltaTo(xoffset_delta: any, yoffset_delta: any, duration: any): any;
    get virtualW(): any;
    get virtualH(): any;
    get xoffset(): any;
    get yoffset(): any;
    get xspeedScale(): any;
    get yspeedScale(): any;
    get xslidable(): any;
    get yslidable(): any;
    get snapToPage(): any;
    get moveToPage(): any;
    get recursive(): any;
}
export declare class TSlideMenu extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: any, x: any, y: any, w: any, h: any): TSlideMenu;
    static cast(widget: any): TSlideMenu;
    setValue(value: any): any;
    setAlignV(align_v: any): any;
    setMinScale(min_scale: any): any;
    get value(): any;
    get alignV(): any;
    get minScale(): any;
}
export declare class TSlideIndicator extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: any, x: any, y: any, w: any, h: any): TSlideIndicator;
    static createLinear(parent: any, x: any, y: any, w: any, h: any): TSlideIndicator;
    static createArc(parent: any, x: any, y: any, w: any, h: any): TSlideIndicator;
    static cast(widget: any): TSlideIndicator;
    setValue(value: any): any;
    setMax(max: any): any;
    setDefaultPaint(default_paint: any): any;
    setAutoHide(auto_hide: any): any;
    setMargin(margin: any): any;
    setSpacing(spacing: any): any;
    setSize(size: any): any;
    setAnchor(anchor_x: any, anchor_y: any): any;
    setIndicatedTarget(target_name: any): any;
    get value(): any;
    get max(): any;
    get defaultPaint(): any;
    get autoHide(): any;
    get margin(): any;
    get spacing(): any;
    get size(): any;
    get anchorX(): any;
    get anchorY(): any;
    get indicatedTarget(): any;
}
export declare class TSlideView extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: any, x: any, y: any, w: any, h: any): TSlideView;
    static cast(widget: any): TSlideView;
    setAutoPlay(auto_play: any): any;
    setActive(index: any): any;
    setActiveEx(index: any, animate: any): any;
    setVertical(vertical: any): any;
    setAnimHint(anim_hint: any): any;
    setLoop(loop: any): any;
    removeIndex(index: any): any;
    get vertical(): any;
    get autoPlay(): any;
    get loop(): any;
    get animHint(): any;
}
export declare class TSwitch extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: any, x: any, y: any, w: any, h: any): TSwitch;
    setValue(value: any): any;
    static cast(widget: any): TSwitch;
    get value(): any;
    get maxXoffsetRatio(): any;
}
export declare class TTextSelector extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: any, x: any, y: any, w: any, h: any): TTextSelector;
    static cast(widget: any): TTextSelector;
    resetOptions(): any;
    countOptions(): any;
    appendOption(value: any, text: any): any;
    setOptions(options: any): any;
    setRangeOptionsEx(start: any, nr: any, step: any, format: any): any;
    setRangeOptions(start: any, nr: any, step: any): any;
    getValue(): any;
    setValue(value: any): any;
    getTextValue(): any;
    setText(text: any): any;
    setSelectedIndex(index: any): any;
    setVisibleNr(visible_nr: any): any;
    setLocalizeOptions(localize_options: any): any;
    setLoopOptions(loop_options: any): any;
    setYspeedScale(yspeed_scale: any): any;
    setAnimatingTime(animating_time: any): any;
    setEnableValueAnimator(enable_value_animator: any): any;
    get visibleNr(): any;
    get selectedIndex(): any;
    get options(): any;
    get yspeedScale(): any;
    get animatingTime(): any;
    get localizeOptions(): any;
    get loopOptions(): any;
    get enableValueAnimator(): any;
}
export declare class TTimeClock extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: any, x: any, y: any, w: any, h: any): TTimeClock;
    static cast(widget: any): TTimeClock;
    setHour(hour: any): any;
    setMinute(minute: any): any;
    setSecond(second: any): any;
    setHourImage(hour: any): any;
    setMinuteImage(minute_image: any): any;
    setSecondImage(second_image: any): any;
    setBgImage(bg_image: any): any;
    setImage(image: any): any;
    setHourAnchor(anchor_x: any, anchor_y: any): any;
    setMinuteAnchor(anchor_x: any, anchor_y: any): any;
    setSecondAnchor(anchor_x: any, anchor_y: any): any;
    get hour(): any;
    get minute(): any;
    get second(): any;
    get image(): any;
    get bgImage(): any;
    get hourImage(): any;
    get minuteImage(): any;
    get secondImage(): any;
    get hourAnchorX(): any;
    get hourAnchorY(): any;
    get minuteAnchorX(): any;
    get minuteAnchorY(): any;
    get secondAnchorX(): any;
    get secondAnchorY(): any;
}
export declare class TVpage extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: any, x: any, y: any, w: any, h: any): TVpage;
    static cast(widget: any): TVpage;
    setUiAsset(ui_asset: any): any;
    setAnimHint(anim_hint: any): any;
    get uiAsset(): any;
    get animHint(): any;
}
export declare class TPropChangeEvent extends TEvent {
    nativeObj: any;
    constructor(nativeObj: any);
    static cast(event: any): TPropChangeEvent;
    get name(): any;
    get value(): any;
}
export declare class TProgressEvent extends TEvent {
    nativeObj: any;
    constructor(nativeObj: any);
    static cast(event: any): TProgressEvent;
    get percent(): any;
}
export declare class TDoneEvent extends TEvent {
    nativeObj: any;
    constructor(nativeObj: any);
    static cast(event: any): TDoneEvent;
    get result(): any;
}
export declare class TErrorEvent extends TEvent {
    nativeObj: any;
    constructor(nativeObj: any);
    static cast(event: any): TErrorEvent;
    get code(): any;
    get message(): any;
}
export declare class TCmdExecEvent extends TEvent {
    nativeObj: any;
    constructor(nativeObj: any);
    static cast(event: any): TCmdExecEvent;
    get name(): any;
    get args(): any;
    get result(): any;
    get canExec(): any;
}
export declare class TAppBar extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: any, x: any, y: any, w: any, h: any): TAppBar;
    static cast(widget: any): TAppBar;
}
export declare class TButtonGroup extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: any, x: any, y: any, w: any, h: any): TButtonGroup;
    static cast(widget: any): TButtonGroup;
}
export declare class TButton extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: any, x: any, y: any, w: any, h: any): TButton;
    static cast(widget: any): TButton;
    setRepeat(repeat: any): any;
    setLongPressTime(long_press_time: any): any;
    setEnableLongPress(enable_long_press: any): any;
    get repeat(): any;
    get enableLongPress(): any;
    get longPressTime(): any;
}
export declare class TCheckButton extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: any, x: any, y: any, w: any, h: any): TCheckButton;
    static createRadio(parent: any, x: any, y: any, w: any, h: any): TCheckButton;
    setValue(value: any): any;
    static cast(widget: any): TCheckButton;
    get value(): any;
}
export declare class TClipView extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: any, x: any, y: any, w: any, h: any): TClipView;
    static cast(widget: any): TClipView;
}
export declare class TColorTile extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: any, x: any, y: any, w: any, h: any): TColorTile;
    static cast(widget: any): TColorTile;
    setBgColor(color: any): any;
    getBgColor(): any;
    getBorderColor(): any;
    get bgColor(): any;
    get borderColor(): any;
}
export declare class TColumn extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: any, x: any, y: any, w: any, h: any): TColumn;
    static cast(widget: any): TColumn;
}
export declare class TComboBoxItem extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: any, x: any, y: any, w: any, h: any): TComboBoxItem;
    static cast(widget: any): TComboBoxItem;
    setChecked(checked: any): any;
    setValue(value: any): any;
    get value(): any;
    get checked(): any;
}
export declare class TDialogClient extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: any, x: any, y: any, w: any, h: any): TDialogClient;
    static cast(widget: any): TDialogClient;
}
export declare class TDialogTitle extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: any, x: any, y: any, w: any, h: any): TDialogTitle;
    static cast(widget: any): TDialogTitle;
}
export declare class TDigitClock extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: any, x: any, y: any, w: any, h: any): TDigitClock;
    static cast(widget: any): TDigitClock;
    setFormat(format: any): any;
    get format(): any;
}
export declare class TDragger extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: any, x: any, y: any, w: any, h: any): TDragger;
    static cast(widget: any): TDragger;
    setRange(x_min: any, y_min: any, x_max: any, y_max: any): any;
    get xMin(): any;
    get yMin(): any;
    get xMax(): any;
    get yMax(): any;
}
export declare class TEdit extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: any, x: any, y: any, w: any, h: any): TEdit;
    static cast(widget: any): TEdit;
    getInt(): any;
    getDouble(): any;
    setInt(value: any): any;
    setDouble(value: any): any;
    setTextLimit(min: any, max: any): any;
    setIntLimit(min: any, max: any, step: any): any;
    setFloatLimit(min: any, max: any, step: any): any;
    setReadonly(readonly: any): any;
    setCancelable(cancelable: any): any;
    setAutoFix(auto_fix: any): any;
    setSelectNoneWhenFocused(select_none_when_focused: any): any;
    setOpenImWhenFocused(open_im_when_focused: any): any;
    setCloseImWhenBlured(close_im_when_blured: any): any;
    setInputType(type: any): any;
    setActionText(action_text: any): any;
    setTips(tips: any): any;
    setTrTips(tr_tips: any): any;
    setKeyboard(keyboard: any): any;
    setPasswordVisible(password_visible: any): any;
    setFocus(focus: any): any;
    setCursor(cursor: any): any;
    getCursor(): any;
    setSelect(start: any, end: any): any;
    getSelectedText(): any;
    get tips(): any;
    get trTips(): any;
    get actionText(): any;
    get keyboard(): any;
    get min(): any;
    get max(): any;
    get step(): any;
    get inputType(): any;
    get readonly(): any;
    get passwordVisible(): any;
    get autoFix(): any;
    get selectNoneWhenFocused(): any;
    get openImWhenFocused(): any;
    get closeImWhenBlured(): any;
    get cancelable(): any;
}
export declare class TGridItem extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: any, x: any, y: any, w: any, h: any): TGridItem;
    static cast(widget: any): TGridItem;
}
export declare class TGrid extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: any, x: any, y: any, w: any, h: any): TGrid;
    static cast(widget: any): TGrid;
}
export declare class TGroupBox extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: any, x: any, y: any, w: any, h: any): TGroupBox;
    static cast(widget: any): TGroupBox;
}
export declare class TLabel extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: any, x: any, y: any, w: any, h: any): TLabel;
    setLength(length: any): any;
    setMaxW(max_w: any): any;
    setLineWrap(line_wrap: any): any;
    setWordWrap(word_wrap: any): any;
    resizeToContent(min_w: any, max_w: any, min_h: any, max_h: any): any;
    static cast(widget: any): TLabel;
    get length(): any;
    get lineWrap(): any;
    get wordWrap(): any;
    get maxW(): any;
}
export declare class TPages extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: any, x: any, y: any, w: any, h: any): TPages;
    static cast(widget: any): TPages;
    setActive(index: any): any;
    setActiveByName(name: any): any;
    get active(): any;
}
export declare class TProgressBar extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: any, x: any, y: any, w: any, h: any): TProgressBar;
    static cast(widget: any): TProgressBar;
    setValue(value: any): any;
    setMax(max: any): any;
    setFormat(format: any): any;
    setVertical(vertical: any): any;
    setShowText(show_text: any): any;
    setReverse(reverse: any): any;
    getPercent(): any;
    get value(): any;
    get max(): any;
    get format(): any;
    get vertical(): any;
    get showText(): any;
    get reverse(): any;
}
export declare class TRow extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: any, x: any, y: any, w: any, h: any): TRow;
    static cast(widget: any): TRow;
}
export declare class TSlider extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: any, x: any, y: any, w: any, h: any): TSlider;
    static cast(widget: any): TSlider;
    setValue(value: any): any;
    setMin(min: any): any;
    setMax(max: any): any;
    setStep(step: any): any;
    setBarSize(bar_size: any): any;
    setVertical(vertical: any): any;
    get value(): any;
    get min(): any;
    get max(): any;
    get step(): any;
    get vertical(): any;
    get barSize(): any;
    get draggerSize(): any;
    get draggerAdaptToIcon(): any;
    get slideWithBar(): any;
}
export declare class TTabButtonGroup extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: any, x: any, y: any, w: any, h: any): TTabButtonGroup;
    setCompact(compact: any): any;
    setScrollable(scrollable: any): any;
    static cast(widget: any): TTabButtonGroup;
    get compact(): any;
    get scrollable(): any;
}
export declare class TTabButton extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: any, x: any, y: any, w: any, h: any): TTabButton;
    static cast(widget: any): TTabButton;
    setValue(value: any): any;
    setIcon(name: any): any;
    setActiveIcon(name: any): any;
    setLoadUi(name: any): any;
    get value(): any;
    get loadUi(): any;
    get activeIcon(): any;
    get icon(): any;
}
export declare class TTabControl extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: any, x: any, y: any, w: any, h: any): TTabControl;
    static cast(widget: any): TTabControl;
}
export declare class TView extends TWidget {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: any, x: any, y: any, w: any, h: any): TView;
    setDefaultFocusedChild(default_focused_child: any): any;
    static cast(widget: any): TView;
    get defaultFocusedChild(): any;
}
export declare class TDialog extends TWindowBase {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: any, x: any, y: any, w: any, h: any): TDialog;
    static createSimple(parent: any, x: any, y: any, w: any, h: any): TDialog;
    static cast(widget: any): TDialog;
    getTitle(): TWidget;
    getClient(): TWidget;
    static open(name: any): TDialog;
    setTitle(title: any): any;
    modal(): any;
    quit(code: any): any;
    isQuited(): any;
    isModal(): any;
    static toast(text: any, duration: any): any;
    static info(title: any, text: any): any;
    static warn(title: any, text: any): any;
    static confirm(title: any, text: any): any;
    get highlight(): any;
}
export declare class TNativeWindow extends TObject {
    nativeObj: any;
    constructor(nativeObj: any);
    move(x: any, y: any, force: any): any;
    resize(w: any, h: any, force: any): any;
    minimize(): any;
    maximize(): any;
    restore(): any;
    center(): any;
    showBorder(show: any): any;
    setFullscreen(fullscreen: any): any;
    setCursor(name: any, img: any): any;
}
export declare class TWindow extends TWindowBase {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: any, x: any, y: any, w: any, h: any): TWindow;
    static createDefault(): TWindow;
    setFullscreen(fullscreen: any): any;
    setAutoScaleChildren(design_w: any, design_h: any): any;
    static open(name: any): TWindow;
    static openAndClose(name: any, to_close: any): TWindow;
    close(): any;
    closeForce(): any;
    static cast(widget: any): TWindow;
    get fullscreen(): any;
}
export declare class TGifImage extends TImageBase {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: any, x: any, y: any, w: any, h: any): TGifImage;
    play(): any;
    stop(): any;
    pause(): any;
    static cast(widget: any): TGifImage;
}
export declare class TKeyboard extends TWindowBase {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: any, x: any, y: any, w: any, h: any): TKeyboard;
    static cast(widget: any): TKeyboard;
}
export declare class TMutableImage extends TImageBase {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: any, x: any, y: any, w: any, h: any): TMutableImage;
}
export declare class TSvgImage extends TImageBase {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: any, x: any, y: any, w: any, h: any): TSvgImage;
    setImage(name: any): any;
    static cast(widget: any): TSvgImage;
}
export declare class TIdleInfo extends TObject {
    nativeObj: any;
    constructor(nativeObj: any);
    static cast(idle: any): TIdleInfo;
    get ctx(): any;
    get extraCtx(): any;
    get id(): any;
}
export declare class TObjectArray extends TObject {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(): TObjectArray;
    unref(): any;
    clearProps(): any;
    insert(index: any, v: any): any;
    push(v: any): any;
    indexOf(v: any): any;
    lastIndexOf(v: any): any;
    remove(index: any): any;
    getAndRemove(index: any, v: any): any;
    get size(): any;
}
export declare class TObjectDefault extends TObject {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(): TObjectDefault;
    unref(): any;
    clearProps(): any;
    get propsSize(): any;
}
export declare class TTimerInfo extends TObject {
    nativeObj: any;
    constructor(nativeObj: any);
    static cast(timer: any): TTimerInfo;
    get ctx(): any;
    get extraCtx(): any;
    get id(): any;
    get now(): any;
}
export declare class TCalibrationWin extends TWindowBase {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: any, x: any, y: any, w: any, h: any): TCalibrationWin;
    static cast(widget: any): TCalibrationWin;
}
export declare class TComboBox extends TEdit {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: any, x: any, y: any, w: any, h: any): TComboBox;
    static cast(widget: any): TComboBox;
    setOpenWindow(open_window: any): any;
    resetOptions(): any;
    countOptions(): any;
    setSelectedIndex(index: any): any;
    setLocalizeOptions(localize_options: any): any;
    setValue(value: any): any;
    setItemHeight(item_height: any): any;
    appendOption(value: any, text: any): any;
    removeOption(value: any): any;
    setOptions(options: any): any;
    getValue(): any;
    getTextValue(): any;
    get openWindow(): any;
    get selectedIndex(): any;
    get value(): any;
    get localizeOptions(): any;
    get options(): any;
    get itemHeight(): any;
}
export declare class TImage extends TImageBase {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: any, x: any, y: any, w: any, h: any): TImage;
    setDrawType(draw_type: any): any;
    static cast(widget: any): TImage;
    get drawType(): any;
}
export declare class TOverlay extends TWindowBase {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: any, x: any, y: any, w: any, h: any): TOverlay;
    setClickThrough(click_through: any): any;
    setAlwaysOnTop(always_on_top: any): any;
    static cast(widget: any): TOverlay;
    get clickThrough(): any;
    get alwaysOnTop(): any;
}
export declare class TPopup extends TWindowBase {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: any, x: any, y: any, w: any, h: any): TPopup;
    static cast(widget: any): TPopup;
    setCloseWhenClick(close_when_click: any): any;
    setCloseWhenClickOutside(close_when_click_outside: any): any;
    setCloseWhenTimeout(close_when_timeout: any): any;
    get closeWhenClick(): any;
    get closeWhenClickOutside(): any;
    get closeWhenTimeout(): any;
}
export declare class TSpinBox extends TEdit {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: any, x: any, y: any, w: any, h: any): TSpinBox;
    static cast(widget: any): TSpinBox;
}
export declare class TSystemBar extends TWindowBase {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: any, x: any, y: any, w: any, h: any): TSystemBar;
    static cast(widget: any): TSystemBar;
}
export declare class TComboBoxEx extends TComboBox {
    nativeObj: any;
    constructor(nativeObj: any);
    static create(parent: any, x: any, y: any, w: any, h: any): TComboBoxEx;
}
