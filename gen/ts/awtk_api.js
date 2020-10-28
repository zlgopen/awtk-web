var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function wrap_on_event(func) {
    return function (ctx, evt) {
        return func(evt, ctx);
    };
}
function wrap_on_visit(func) {
    return function (ctx, data) {
        return func(data, ctx);
    };
}
var Module = Module || {};
var TBrowser = TBrowser || {};
var event_cast = Module.cwrap("event_cast", "number", ["number"]);
var event_create = Module.cwrap("event_create", "number", ["number"]);
var event_destroy = Module.cwrap("event_destroy", "number", ["number"]);
var event_t_get_prop_type = Module.cwrap("event_t_get_prop_type", "number", ["number"]);
var event_t_get_prop_size = Module.cwrap("event_t_get_prop_size", "number", ["number"]);
var event_t_get_prop_time = Module.cwrap("event_t_get_prop_time", "number", ["number"]);
var event_t_get_prop_target = Module.cwrap("event_t_get_prop_target", "number", ["number"]);
var rect_create = Module.cwrap("rect_create", "number", ["number", "number", "number", "number"]);
var rect_set = Module.cwrap("rect_set", "number", ["number", "number", "number", "number", "number"]);
var rect_cast = Module.cwrap("rect_cast", "number", ["number"]);
var rect_destroy = Module.cwrap("rect_destroy", "number", ["number"]);
var rect_t_get_prop_x = Module.cwrap("rect_t_get_prop_x", "number", ["number"]);
var rect_t_get_prop_y = Module.cwrap("rect_t_get_prop_y", "number", ["number"]);
var rect_t_get_prop_w = Module.cwrap("rect_t_get_prop_w", "number", ["number"]);
var rect_t_get_prop_h = Module.cwrap("rect_t_get_prop_h", "number", ["number"]);
var emitter_create = Module.cwrap("emitter_create", "number", []);
var emitter_dispatch = Module.cwrap("emitter_dispatch", "number", ["number", "number"]);
var emitter_dispatch_simple_event = Module.cwrap("emitter_dispatch_simple_event", "number", ["number", "number"]);
var emitter_on = Module.cwrap("emitter_on", "number", ["number", "number", "number", "number"]);
var emitter_off = Module.cwrap("emitter_off", "number", ["number", "number"]);
var emitter_enable = Module.cwrap("emitter_enable", "number", ["number"]);
var emitter_disable = Module.cwrap("emitter_disable", "number", ["number"]);
var emitter_size = Module.cwrap("emitter_size", "number", ["number"]);
var emitter_destroy = Module.cwrap("emitter_destroy", "number", ["number"]);
var emitter_cast = Module.cwrap("emitter_cast", "number", ["number"]);
var bitmap_create = Module.cwrap("bitmap_create", "number", []);
var bitmap_create_ex = Module.cwrap("bitmap_create_ex", "number", ["number", "number", "number", "number"]);
var bitmap_get_bpp = Module.cwrap("bitmap_get_bpp", "number", ["number"]);
var bitmap_destroy = Module.cwrap("bitmap_destroy", "number", ["number"]);
var bitmap_get_bpp_of_format = Module.cwrap("bitmap_get_bpp_of_format", "number", ["number"]);
var bitmap_t_get_prop_w = Module.cwrap("bitmap_t_get_prop_w", "number", ["number"]);
var bitmap_t_get_prop_h = Module.cwrap("bitmap_t_get_prop_h", "number", ["number"]);
var bitmap_t_get_prop_line_length = Module.cwrap("bitmap_t_get_prop_line_length", "number", ["number"]);
var bitmap_t_get_prop_flags = Module.cwrap("bitmap_t_get_prop_flags", "number", ["number"]);
var bitmap_t_get_prop_format = Module.cwrap("bitmap_t_get_prop_format", "number", ["number"]);
var bitmap_t_get_prop_name = Module.cwrap("bitmap_t_get_prop_name", "string", ["number"]);
var value_set_bool = Module.cwrap("value_set_bool", "number", ["number", "number"]);
var value_bool = Module.cwrap("value_bool", "number", ["number"]);
var value_set_int8 = Module.cwrap("value_set_int8", "number", ["number", "number"]);
var value_int8 = Module.cwrap("value_int8", "number", ["number"]);
var value_set_uint8 = Module.cwrap("value_set_uint8", "number", ["number", "number"]);
var value_uint8 = Module.cwrap("value_uint8", "number", ["number"]);
var value_set_int16 = Module.cwrap("value_set_int16", "number", ["number", "number"]);
var value_int16 = Module.cwrap("value_int16", "number", ["number"]);
var value_set_uint16 = Module.cwrap("value_set_uint16", "number", ["number", "number"]);
var value_uint16 = Module.cwrap("value_uint16", "number", ["number"]);
var value_set_int32 = Module.cwrap("value_set_int32", "number", ["number", "number"]);
var value_int32 = Module.cwrap("value_int32", "number", ["number"]);
var value_set_uint32 = Module.cwrap("value_set_uint32", "number", ["number", "number"]);
var value_set_int64 = Module.cwrap("value_set_int64", "number", ["number", "number"]);
var value_int64 = Module.cwrap("value_int64", "number", ["number"]);
var value_set_uint64 = Module.cwrap("value_set_uint64", "number", ["number", "number"]);
var value_uint64 = Module.cwrap("value_uint64", "number", ["number"]);
var value_set_float = Module.cwrap("value_set_float", "number", ["number", "number"]);
var value_float32 = Module.cwrap("value_float32", "number", ["number"]);
var value_set_double = Module.cwrap("value_set_double", "number", ["number", "number"]);
var value_double = Module.cwrap("value_double", "number", ["number"]);
var value_dup_str = Module.cwrap("value_dup_str", "number", ["number", "string"]);
var value_str = Module.cwrap("value_str", "string", ["number"]);
var value_is_null = Module.cwrap("value_is_null", "number", ["number"]);
var value_set_int = Module.cwrap("value_set_int", "number", ["number", "number"]);
var value_set_object = Module.cwrap("value_set_object", "number", ["number", "number"]);
var value_object = Module.cwrap("value_object", "number", ["number"]);
var value_set_token = Module.cwrap("value_set_token", "number", ["number", "number"]);
var value_token = Module.cwrap("value_token", "number", ["number"]);
var value_create = Module.cwrap("value_create", "number", []);
var value_destroy = Module.cwrap("value_destroy", "number", ["number"]);
var value_reset = Module.cwrap("value_reset", "number", ["number"]);
var value_cast = Module.cwrap("value_cast", "number", ["number"]);
var object_unref = Module.cwrap("object_unref", "number", ["number"]);
var object_ref = Module.cwrap("object_ref", "number", ["number"]);
var object_get_type = Module.cwrap("object_get_type", "string", ["number"]);
var object_get_desc = Module.cwrap("object_get_desc", "string", ["number"]);
var object_get_size = Module.cwrap("object_get_size", "number", ["number"]);
var object_is_collection = Module.cwrap("object_is_collection", "number", ["number"]);
var object_set_name = Module.cwrap("object_set_name", "number", ["number", "string"]);
var object_compare = Module.cwrap("object_compare", "number", ["number", "number"]);
var object_get_prop = Module.cwrap("object_get_prop", "number", ["number", "string", "number"]);
var object_get_prop_str = Module.cwrap("object_get_prop_str", "string", ["number", "string"]);
var object_get_prop_pointer = Module.cwrap("object_get_prop_pointer", "number", ["number", "string"]);
var object_get_prop_object = Module.cwrap("object_get_prop_object", "number", ["number", "string"]);
var object_get_prop_int = Module.cwrap("object_get_prop_int", "number", ["number", "string", "number"]);
var object_get_prop_bool = Module.cwrap("object_get_prop_bool", "number", ["number", "string", "number"]);
var object_get_prop_float = Module.cwrap("object_get_prop_float", "number", ["number", "string", "number"]);
var object_remove_prop = Module.cwrap("object_remove_prop", "number", ["number", "string"]);
var object_set_prop = Module.cwrap("object_set_prop", "number", ["number", "string", "number"]);
var object_set_prop_str = Module.cwrap("object_set_prop_str", "number", ["number", "string", "string"]);
var object_set_prop_object = Module.cwrap("object_set_prop_object", "number", ["number", "string", "number"]);
var object_set_prop_int = Module.cwrap("object_set_prop_int", "number", ["number", "string", "number"]);
var object_set_prop_bool = Module.cwrap("object_set_prop_bool", "number", ["number", "string", "number"]);
var object_set_prop_float = Module.cwrap("object_set_prop_float", "number", ["number", "string", "number"]);
var object_copy_prop = Module.cwrap("object_copy_prop", "number", ["number", "number", "string"]);
var object_has_prop = Module.cwrap("object_has_prop", "number", ["number", "string"]);
var object_eval = Module.cwrap("object_eval", "number", ["number", "string", "number"]);
var object_can_exec = Module.cwrap("object_can_exec", "number", ["number", "string", "string"]);
var object_exec = Module.cwrap("object_exec", "number", ["number", "string", "string"]);
var object_notify_changed = Module.cwrap("object_notify_changed", "number", ["number"]);
var object_get_prop_str_by_path = Module.cwrap("object_get_prop_str_by_path", "string", ["number", "string"]);
var object_get_prop_pointer_by_path = Module.cwrap("object_get_prop_pointer_by_path", "number", ["number", "string"]);
var object_get_prop_object_by_path = Module.cwrap("object_get_prop_object_by_path", "number", ["number", "string"]);
var object_get_prop_int_by_path = Module.cwrap("object_get_prop_int_by_path", "number", ["number", "string", "number"]);
var object_get_prop_bool_by_path = Module.cwrap("object_get_prop_bool_by_path", "number", ["number", "string", "number"]);
var object_get_prop_float_by_path = Module.cwrap("object_get_prop_float_by_path", "number", ["number", "string", "number"]);
var object_t_get_prop_ref_count = Module.cwrap("object_t_get_prop_ref_count", "number", ["number"]);
var object_t_get_prop_name = Module.cwrap("object_t_get_prop_name", "string", ["number"]);
var tk_init = Module.cwrap("tk_init", "number", ["number", "number", "number", "string", "string"]);
var tk_run = Module.cwrap("tk_run", "number", []);
var tk_quit = Module.cwrap("tk_quit", "number", []);
var tk_get_pointer_x = Module.cwrap("tk_get_pointer_x", "number", []);
var tk_get_pointer_y = Module.cwrap("tk_get_pointer_y", "number", []);
var tk_is_pointer_pressed = Module.cwrap("tk_is_pointer_pressed", "number", []);
var get_CLIP_BOARD_DATA_TYPE_NONE = Module.cwrap("get_CLIP_BOARD_DATA_TYPE_NONE", "number", []);
var get_CLIP_BOARD_DATA_TYPE_TEXT = Module.cwrap("get_CLIP_BOARD_DATA_TYPE_TEXT", "number", []);
var clip_board_set_text = Module.cwrap("clip_board_set_text", "number", ["string"]);
var clip_board_get_text = Module.cwrap("clip_board_get_text", "string", []);
var get_DIALOG_QUIT_NONE = Module.cwrap("get_DIALOG_QUIT_NONE", "number", []);
var get_DIALOG_QUIT_OK = Module.cwrap("get_DIALOG_QUIT_OK", "number", []);
var get_DIALOG_QUIT_YES = Module.cwrap("get_DIALOG_QUIT_YES", "number", []);
var get_DIALOG_QUIT_CANCEL = Module.cwrap("get_DIALOG_QUIT_CANCEL", "number", []);
var get_DIALOG_QUIT_NO = Module.cwrap("get_DIALOG_QUIT_NO", "number", []);
var get_DIALOG_QUIT_OTHER = Module.cwrap("get_DIALOG_QUIT_OTHER", "number", []);
var get_EVT_POINTER_DOWN = Module.cwrap("get_EVT_POINTER_DOWN", "number", []);
var get_EVT_POINTER_DOWN_BEFORE_CHILDREN = Module.cwrap("get_EVT_POINTER_DOWN_BEFORE_CHILDREN", "number", []);
var get_EVT_POINTER_MOVE = Module.cwrap("get_EVT_POINTER_MOVE", "number", []);
var get_EVT_POINTER_MOVE_BEFORE_CHILDREN = Module.cwrap("get_EVT_POINTER_MOVE_BEFORE_CHILDREN", "number", []);
var get_EVT_POINTER_UP = Module.cwrap("get_EVT_POINTER_UP", "number", []);
var get_EVT_POINTER_UP_BEFORE_CHILDREN = Module.cwrap("get_EVT_POINTER_UP_BEFORE_CHILDREN", "number", []);
var get_EVT_WHEEL = Module.cwrap("get_EVT_WHEEL", "number", []);
var get_EVT_WHEEL_BEFORE_CHILDREN = Module.cwrap("get_EVT_WHEEL_BEFORE_CHILDREN", "number", []);
var get_EVT_POINTER_DOWN_ABORT = Module.cwrap("get_EVT_POINTER_DOWN_ABORT", "number", []);
var get_EVT_CONTEXT_MENU = Module.cwrap("get_EVT_CONTEXT_MENU", "number", []);
var get_EVT_POINTER_ENTER = Module.cwrap("get_EVT_POINTER_ENTER", "number", []);
var get_EVT_POINTER_LEAVE = Module.cwrap("get_EVT_POINTER_LEAVE", "number", []);
var get_EVT_LONG_PRESS = Module.cwrap("get_EVT_LONG_PRESS", "number", []);
var get_EVT_CLICK = Module.cwrap("get_EVT_CLICK", "number", []);
var get_EVT_FOCUS = Module.cwrap("get_EVT_FOCUS", "number", []);
var get_EVT_BLUR = Module.cwrap("get_EVT_BLUR", "number", []);
var get_EVT_KEY_DOWN = Module.cwrap("get_EVT_KEY_DOWN", "number", []);
var get_EVT_KEY_LONG_PRESS = Module.cwrap("get_EVT_KEY_LONG_PRESS", "number", []);
var get_EVT_KEY_DOWN_BEFORE_CHILDREN = Module.cwrap("get_EVT_KEY_DOWN_BEFORE_CHILDREN", "number", []);
var get_EVT_KEY_REPEAT = Module.cwrap("get_EVT_KEY_REPEAT", "number", []);
var get_EVT_KEY_UP = Module.cwrap("get_EVT_KEY_UP", "number", []);
var get_EVT_KEY_UP_BEFORE_CHILDREN = Module.cwrap("get_EVT_KEY_UP_BEFORE_CHILDREN", "number", []);
var get_EVT_WILL_MOVE = Module.cwrap("get_EVT_WILL_MOVE", "number", []);
var get_EVT_MOVE = Module.cwrap("get_EVT_MOVE", "number", []);
var get_EVT_WILL_RESIZE = Module.cwrap("get_EVT_WILL_RESIZE", "number", []);
var get_EVT_RESIZE = Module.cwrap("get_EVT_RESIZE", "number", []);
var get_EVT_WILL_MOVE_RESIZE = Module.cwrap("get_EVT_WILL_MOVE_RESIZE", "number", []);
var get_EVT_MOVE_RESIZE = Module.cwrap("get_EVT_MOVE_RESIZE", "number", []);
var get_EVT_VALUE_WILL_CHANGE = Module.cwrap("get_EVT_VALUE_WILL_CHANGE", "number", []);
var get_EVT_VALUE_CHANGED = Module.cwrap("get_EVT_VALUE_CHANGED", "number", []);
var get_EVT_VALUE_CHANGING = Module.cwrap("get_EVT_VALUE_CHANGING", "number", []);
var get_EVT_PAINT = Module.cwrap("get_EVT_PAINT", "number", []);
var get_EVT_BEFORE_PAINT = Module.cwrap("get_EVT_BEFORE_PAINT", "number", []);
var get_EVT_AFTER_PAINT = Module.cwrap("get_EVT_AFTER_PAINT", "number", []);
var get_EVT_PAINT_DONE = Module.cwrap("get_EVT_PAINT_DONE", "number", []);
var get_EVT_LOCALE_CHANGED = Module.cwrap("get_EVT_LOCALE_CHANGED", "number", []);
var get_EVT_ANIM_START = Module.cwrap("get_EVT_ANIM_START", "number", []);
var get_EVT_ANIM_STOP = Module.cwrap("get_EVT_ANIM_STOP", "number", []);
var get_EVT_ANIM_PAUSE = Module.cwrap("get_EVT_ANIM_PAUSE", "number", []);
var get_EVT_ANIM_ONCE = Module.cwrap("get_EVT_ANIM_ONCE", "number", []);
var get_EVT_ANIM_END = Module.cwrap("get_EVT_ANIM_END", "number", []);
var get_EVT_WINDOW_LOAD = Module.cwrap("get_EVT_WINDOW_LOAD", "number", []);
var get_EVT_WIDGET_LOAD = Module.cwrap("get_EVT_WIDGET_LOAD", "number", []);
var get_EVT_WINDOW_WILL_OPEN = Module.cwrap("get_EVT_WINDOW_WILL_OPEN", "number", []);
var get_EVT_WINDOW_OPEN = Module.cwrap("get_EVT_WINDOW_OPEN", "number", []);
var get_EVT_WINDOW_TO_BACKGROUND = Module.cwrap("get_EVT_WINDOW_TO_BACKGROUND", "number", []);
var get_EVT_WINDOW_TO_FOREGROUND = Module.cwrap("get_EVT_WINDOW_TO_FOREGROUND", "number", []);
var get_EVT_WINDOW_CLOSE = Module.cwrap("get_EVT_WINDOW_CLOSE", "number", []);
var get_EVT_REQUEST_CLOSE_WINDOW = Module.cwrap("get_EVT_REQUEST_CLOSE_WINDOW", "number", []);
var get_EVT_TOP_WINDOW_CHANGED = Module.cwrap("get_EVT_TOP_WINDOW_CHANGED", "number", []);
var get_EVT_IM_COMMIT = Module.cwrap("get_EVT_IM_COMMIT", "number", []);
var get_EVT_IM_CLEAR = Module.cwrap("get_EVT_IM_CLEAR", "number", []);
var get_EVT_IM_CANCEL = Module.cwrap("get_EVT_IM_CANCEL", "number", []);
var get_EVT_IM_PREEDIT = Module.cwrap("get_EVT_IM_PREEDIT", "number", []);
var get_EVT_IM_PREEDIT_CONFIRM = Module.cwrap("get_EVT_IM_PREEDIT_CONFIRM", "number", []);
var get_EVT_IM_PREEDIT_ABORT = Module.cwrap("get_EVT_IM_PREEDIT_ABORT", "number", []);
var get_EVT_IM_SHOW_CANDIDATES = Module.cwrap("get_EVT_IM_SHOW_CANDIDATES", "number", []);
var get_EVT_IM_SHOW_PRE_CANDIDATES = Module.cwrap("get_EVT_IM_SHOW_PRE_CANDIDATES", "number", []);
var get_EVT_IM_LANG_CHANGED = Module.cwrap("get_EVT_IM_LANG_CHANGED", "number", []);
var get_EVT_IM_ACTION = Module.cwrap("get_EVT_IM_ACTION", "number", []);
var get_EVT_IM_ACTION_INFO = Module.cwrap("get_EVT_IM_ACTION_INFO", "number", []);
var get_EVT_DRAG_START = Module.cwrap("get_EVT_DRAG_START", "number", []);
var get_EVT_DRAG = Module.cwrap("get_EVT_DRAG", "number", []);
var get_EVT_DRAG_END = Module.cwrap("get_EVT_DRAG_END", "number", []);
var get_EVT_RESET = Module.cwrap("get_EVT_RESET", "number", []);
var get_EVT_SCREEN_SAVER = Module.cwrap("get_EVT_SCREEN_SAVER", "number", []);
var get_EVT_LOW_MEMORY = Module.cwrap("get_EVT_LOW_MEMORY", "number", []);
var get_EVT_OUT_OF_MEMORY = Module.cwrap("get_EVT_OUT_OF_MEMORY", "number", []);
var get_EVT_ORIENTATION_WILL_CHANGED = Module.cwrap("get_EVT_ORIENTATION_WILL_CHANGED", "number", []);
var get_EVT_ORIENTATION_CHANGED = Module.cwrap("get_EVT_ORIENTATION_CHANGED", "number", []);
var get_EVT_WIDGET_CREATED = Module.cwrap("get_EVT_WIDGET_CREATED", "number", []);
var get_EVT_REQUEST_QUIT_APP = Module.cwrap("get_EVT_REQUEST_QUIT_APP", "number", []);
var get_EVT_THEME_CHANGED = Module.cwrap("get_EVT_THEME_CHANGED", "number", []);
var get_EVT_WIDGET_ADD_CHILD = Module.cwrap("get_EVT_WIDGET_ADD_CHILD", "number", []);
var get_EVT_WIDGET_REMOVE_CHILD = Module.cwrap("get_EVT_WIDGET_REMOVE_CHILD", "number", []);
var get_EVT_SCROLL_START = Module.cwrap("get_EVT_SCROLL_START", "number", []);
var get_EVT_SCROLL = Module.cwrap("get_EVT_SCROLL", "number", []);
var get_EVT_SCROLL_END = Module.cwrap("get_EVT_SCROLL_END", "number", []);
var get_EVT_MULTI_GESTURE = Module.cwrap("get_EVT_MULTI_GESTURE", "number", []);
var get_EVT_REQ_START = Module.cwrap("get_EVT_REQ_START", "number", []);
var get_EVT_USER_START = Module.cwrap("get_EVT_USER_START", "number", []);
var get_EVT_NONE = Module.cwrap("get_EVT_NONE", "number", []);
var get_EVT_PROP_WILL_CHANGE = Module.cwrap("get_EVT_PROP_WILL_CHANGE", "number", []);
var get_EVT_PROP_CHANGED = Module.cwrap("get_EVT_PROP_CHANGED", "number", []);
var get_EVT_CMD_WILL_EXEC = Module.cwrap("get_EVT_CMD_WILL_EXEC", "number", []);
var get_EVT_CMD_EXECED = Module.cwrap("get_EVT_CMD_EXECED", "number", []);
var get_EVT_CMD_CAN_EXEC = Module.cwrap("get_EVT_CMD_CAN_EXEC", "number", []);
var get_EVT_ITEMS_WILL_CHANGE = Module.cwrap("get_EVT_ITEMS_WILL_CHANGE", "number", []);
var get_EVT_ITEMS_CHANGED = Module.cwrap("get_EVT_ITEMS_CHANGED", "number", []);
var get_EVT_PROPS_CHANGED = Module.cwrap("get_EVT_PROPS_CHANGED", "number", []);
var get_EVT_PROGRESS = Module.cwrap("get_EVT_PROGRESS", "number", []);
var get_EVT_DONE = Module.cwrap("get_EVT_DONE", "number", []);
var get_EVT_ERROR = Module.cwrap("get_EVT_ERROR", "number", []);
var get_EVT_DESTROY = Module.cwrap("get_EVT_DESTROY", "number", []);
var font_manager_unload_font = Module.cwrap("font_manager_unload_font", "number", ["number", "string", "number"]);
var font_manager_shrink_cache = Module.cwrap("font_manager_shrink_cache", "number", ["number", "number"]);
var font_manager_unload_all = Module.cwrap("font_manager_unload_all", "number", ["number"]);
var get_GLYPH_FMT_ALPHA = Module.cwrap("get_GLYPH_FMT_ALPHA", "number", []);
var get_GLYPH_FMT_MONO = Module.cwrap("get_GLYPH_FMT_MONO", "number", []);
var get_GLYPH_FMT_RGBA = Module.cwrap("get_GLYPH_FMT_RGBA", "number", []);
var idle_add = Module.cwrap("idle_add", "number", ["number", "number"]);
var idle_remove = Module.cwrap("idle_remove", "number", ["number"]);
var image_manager = Module.cwrap("image_manager", "number", []);
var image_manager_get_bitmap = Module.cwrap("image_manager_get_bitmap", "number", ["number", "string", "number"]);
var image_manager_preload = Module.cwrap("image_manager_preload", "number", ["number", "string"]);
var get_INPUT_TEXT = Module.cwrap("get_INPUT_TEXT", "number", []);
var get_INPUT_INT = Module.cwrap("get_INPUT_INT", "number", []);
var get_INPUT_UINT = Module.cwrap("get_INPUT_UINT", "number", []);
var get_INPUT_HEX = Module.cwrap("get_INPUT_HEX", "number", []);
var get_INPUT_FLOAT = Module.cwrap("get_INPUT_FLOAT", "number", []);
var get_INPUT_UFLOAT = Module.cwrap("get_INPUT_UFLOAT", "number", []);
var get_INPUT_EMAIL = Module.cwrap("get_INPUT_EMAIL", "number", []);
var get_INPUT_PASSWORD = Module.cwrap("get_INPUT_PASSWORD", "number", []);
var get_INPUT_PHONE = Module.cwrap("get_INPUT_PHONE", "number", []);
var get_INPUT_IPV4 = Module.cwrap("get_INPUT_IPV4", "number", []);
var get_INPUT_DATE = Module.cwrap("get_INPUT_DATE", "number", []);
var get_INPUT_TIME = Module.cwrap("get_INPUT_TIME", "number", []);
var get_INPUT_TIME_FULL = Module.cwrap("get_INPUT_TIME_FULL", "number", []);
var get_INPUT_CUSTOM = Module.cwrap("get_INPUT_CUSTOM", "number", []);
var get_INPUT_CUSTOM_PASSWORD = Module.cwrap("get_INPUT_CUSTOM_PASSWORD", "number", []);
var input_method_commit_text = Module.cwrap("input_method_commit_text", "number", ["number", "string"]);
var input_method_set_lang = Module.cwrap("input_method_set_lang", "number", ["number", "string"]);
var input_method_get_lang = Module.cwrap("input_method_get_lang", "string", ["number"]);
var input_method_dispatch_key = Module.cwrap("input_method_dispatch_key", "number", ["number", "number"]);
var input_method_dispatch_keys = Module.cwrap("input_method_dispatch_keys", "number", ["number", "string"]);
var input_method_dispatch_preedit = Module.cwrap("input_method_dispatch_preedit", "number", ["number"]);
var input_method_dispatch_preedit_confirm = Module.cwrap("input_method_dispatch_preedit_confirm", "number", ["number"]);
var input_method_dispatch_preedit_abort = Module.cwrap("input_method_dispatch_preedit_abort", "number", ["number"]);
var input_method = Module.cwrap("input_method", "number", []);
var get_TK_KEY_RETURN = Module.cwrap("get_TK_KEY_RETURN", "number", []);
var get_TK_KEY_ESCAPE = Module.cwrap("get_TK_KEY_ESCAPE", "number", []);
var get_TK_KEY_BACKSPACE = Module.cwrap("get_TK_KEY_BACKSPACE", "number", []);
var get_TK_KEY_TAB = Module.cwrap("get_TK_KEY_TAB", "number", []);
var get_TK_KEY_SPACE = Module.cwrap("get_TK_KEY_SPACE", "number", []);
var get_TK_KEY_EXCLAIM = Module.cwrap("get_TK_KEY_EXCLAIM", "number", []);
var get_TK_KEY_QUOTEDBL = Module.cwrap("get_TK_KEY_QUOTEDBL", "number", []);
var get_TK_KEY_HASH = Module.cwrap("get_TK_KEY_HASH", "number", []);
var get_TK_KEY_PERCENT = Module.cwrap("get_TK_KEY_PERCENT", "number", []);
var get_TK_KEY_DOLLAR = Module.cwrap("get_TK_KEY_DOLLAR", "number", []);
var get_TK_KEY_AMPERSAND = Module.cwrap("get_TK_KEY_AMPERSAND", "number", []);
var get_TK_KEY_QUOTE = Module.cwrap("get_TK_KEY_QUOTE", "number", []);
var get_TK_KEY_LEFTPAREN = Module.cwrap("get_TK_KEY_LEFTPAREN", "number", []);
var get_TK_KEY_RIGHTPAREN = Module.cwrap("get_TK_KEY_RIGHTPAREN", "number", []);
var get_TK_KEY_ASTERISK = Module.cwrap("get_TK_KEY_ASTERISK", "number", []);
var get_TK_KEY_PLUS = Module.cwrap("get_TK_KEY_PLUS", "number", []);
var get_TK_KEY_COMMA = Module.cwrap("get_TK_KEY_COMMA", "number", []);
var get_TK_KEY_MINUS = Module.cwrap("get_TK_KEY_MINUS", "number", []);
var get_TK_KEY_PERIOD = Module.cwrap("get_TK_KEY_PERIOD", "number", []);
var get_TK_KEY_SLASH = Module.cwrap("get_TK_KEY_SLASH", "number", []);
var get_TK_KEY_0 = Module.cwrap("get_TK_KEY_0", "number", []);
var get_TK_KEY_1 = Module.cwrap("get_TK_KEY_1", "number", []);
var get_TK_KEY_2 = Module.cwrap("get_TK_KEY_2", "number", []);
var get_TK_KEY_3 = Module.cwrap("get_TK_KEY_3", "number", []);
var get_TK_KEY_4 = Module.cwrap("get_TK_KEY_4", "number", []);
var get_TK_KEY_5 = Module.cwrap("get_TK_KEY_5", "number", []);
var get_TK_KEY_6 = Module.cwrap("get_TK_KEY_6", "number", []);
var get_TK_KEY_7 = Module.cwrap("get_TK_KEY_7", "number", []);
var get_TK_KEY_8 = Module.cwrap("get_TK_KEY_8", "number", []);
var get_TK_KEY_9 = Module.cwrap("get_TK_KEY_9", "number", []);
var get_TK_KEY_COLON = Module.cwrap("get_TK_KEY_COLON", "number", []);
var get_TK_KEY_SEMICOLON = Module.cwrap("get_TK_KEY_SEMICOLON", "number", []);
var get_TK_KEY_LESS = Module.cwrap("get_TK_KEY_LESS", "number", []);
var get_TK_KEY_EQUAL = Module.cwrap("get_TK_KEY_EQUAL", "number", []);
var get_TK_KEY_GREATER = Module.cwrap("get_TK_KEY_GREATER", "number", []);
var get_TK_KEY_QUESTION = Module.cwrap("get_TK_KEY_QUESTION", "number", []);
var get_TK_KEY_AT = Module.cwrap("get_TK_KEY_AT", "number", []);
var get_TK_KEY_LEFTBRACKET = Module.cwrap("get_TK_KEY_LEFTBRACKET", "number", []);
var get_TK_KEY_BACKSLASH = Module.cwrap("get_TK_KEY_BACKSLASH", "number", []);
var get_TK_KEY_RIGHTBRACKET = Module.cwrap("get_TK_KEY_RIGHTBRACKET", "number", []);
var get_TK_KEY_CARET = Module.cwrap("get_TK_KEY_CARET", "number", []);
var get_TK_KEY_UNDERSCORE = Module.cwrap("get_TK_KEY_UNDERSCORE", "number", []);
var get_TK_KEY_BACKQUOTE = Module.cwrap("get_TK_KEY_BACKQUOTE", "number", []);
var get_TK_KEY_a = Module.cwrap("get_TK_KEY_a", "number", []);
var get_TK_KEY_b = Module.cwrap("get_TK_KEY_b", "number", []);
var get_TK_KEY_c = Module.cwrap("get_TK_KEY_c", "number", []);
var get_TK_KEY_d = Module.cwrap("get_TK_KEY_d", "number", []);
var get_TK_KEY_e = Module.cwrap("get_TK_KEY_e", "number", []);
var get_TK_KEY_f = Module.cwrap("get_TK_KEY_f", "number", []);
var get_TK_KEY_g = Module.cwrap("get_TK_KEY_g", "number", []);
var get_TK_KEY_h = Module.cwrap("get_TK_KEY_h", "number", []);
var get_TK_KEY_i = Module.cwrap("get_TK_KEY_i", "number", []);
var get_TK_KEY_j = Module.cwrap("get_TK_KEY_j", "number", []);
var get_TK_KEY_k = Module.cwrap("get_TK_KEY_k", "number", []);
var get_TK_KEY_l = Module.cwrap("get_TK_KEY_l", "number", []);
var get_TK_KEY_m = Module.cwrap("get_TK_KEY_m", "number", []);
var get_TK_KEY_n = Module.cwrap("get_TK_KEY_n", "number", []);
var get_TK_KEY_o = Module.cwrap("get_TK_KEY_o", "number", []);
var get_TK_KEY_p = Module.cwrap("get_TK_KEY_p", "number", []);
var get_TK_KEY_q = Module.cwrap("get_TK_KEY_q", "number", []);
var get_TK_KEY_r = Module.cwrap("get_TK_KEY_r", "number", []);
var get_TK_KEY_s = Module.cwrap("get_TK_KEY_s", "number", []);
var get_TK_KEY_t = Module.cwrap("get_TK_KEY_t", "number", []);
var get_TK_KEY_u = Module.cwrap("get_TK_KEY_u", "number", []);
var get_TK_KEY_v = Module.cwrap("get_TK_KEY_v", "number", []);
var get_TK_KEY_w = Module.cwrap("get_TK_KEY_w", "number", []);
var get_TK_KEY_x = Module.cwrap("get_TK_KEY_x", "number", []);
var get_TK_KEY_y = Module.cwrap("get_TK_KEY_y", "number", []);
var get_TK_KEY_z = Module.cwrap("get_TK_KEY_z", "number", []);
var get_TK_KEY_A = Module.cwrap("get_TK_KEY_A", "number", []);
var get_TK_KEY_B = Module.cwrap("get_TK_KEY_B", "number", []);
var get_TK_KEY_C = Module.cwrap("get_TK_KEY_C", "number", []);
var get_TK_KEY_D = Module.cwrap("get_TK_KEY_D", "number", []);
var get_TK_KEY_E = Module.cwrap("get_TK_KEY_E", "number", []);
var get_TK_KEY_F = Module.cwrap("get_TK_KEY_F", "number", []);
var get_TK_KEY_G = Module.cwrap("get_TK_KEY_G", "number", []);
var get_TK_KEY_H = Module.cwrap("get_TK_KEY_H", "number", []);
var get_TK_KEY_I = Module.cwrap("get_TK_KEY_I", "number", []);
var get_TK_KEY_J = Module.cwrap("get_TK_KEY_J", "number", []);
var get_TK_KEY_K = Module.cwrap("get_TK_KEY_K", "number", []);
var get_TK_KEY_L = Module.cwrap("get_TK_KEY_L", "number", []);
var get_TK_KEY_M = Module.cwrap("get_TK_KEY_M", "number", []);
var get_TK_KEY_N = Module.cwrap("get_TK_KEY_N", "number", []);
var get_TK_KEY_O = Module.cwrap("get_TK_KEY_O", "number", []);
var get_TK_KEY_P = Module.cwrap("get_TK_KEY_P", "number", []);
var get_TK_KEY_Q = Module.cwrap("get_TK_KEY_Q", "number", []);
var get_TK_KEY_R = Module.cwrap("get_TK_KEY_R", "number", []);
var get_TK_KEY_S = Module.cwrap("get_TK_KEY_S", "number", []);
var get_TK_KEY_T = Module.cwrap("get_TK_KEY_T", "number", []);
var get_TK_KEY_U = Module.cwrap("get_TK_KEY_U", "number", []);
var get_TK_KEY_V = Module.cwrap("get_TK_KEY_V", "number", []);
var get_TK_KEY_W = Module.cwrap("get_TK_KEY_W", "number", []);
var get_TK_KEY_X = Module.cwrap("get_TK_KEY_X", "number", []);
var get_TK_KEY_Y = Module.cwrap("get_TK_KEY_Y", "number", []);
var get_TK_KEY_Z = Module.cwrap("get_TK_KEY_Z", "number", []);
var get_TK_KEY_DOT = Module.cwrap("get_TK_KEY_DOT", "number", []);
var get_TK_KEY_DELETE = Module.cwrap("get_TK_KEY_DELETE", "number", []);
var get_TK_KEY_LEFTBRACE = Module.cwrap("get_TK_KEY_LEFTBRACE", "number", []);
var get_TK_KEY_RIGHTBRACE = Module.cwrap("get_TK_KEY_RIGHTBRACE", "number", []);
var get_TK_KEY_LSHIFT = Module.cwrap("get_TK_KEY_LSHIFT", "number", []);
var get_TK_KEY_RSHIFT = Module.cwrap("get_TK_KEY_RSHIFT", "number", []);
var get_TK_KEY_LCTRL = Module.cwrap("get_TK_KEY_LCTRL", "number", []);
var get_TK_KEY_RCTRL = Module.cwrap("get_TK_KEY_RCTRL", "number", []);
var get_TK_KEY_LALT = Module.cwrap("get_TK_KEY_LALT", "number", []);
var get_TK_KEY_RALT = Module.cwrap("get_TK_KEY_RALT", "number", []);
var get_TK_KEY_CAPSLOCK = Module.cwrap("get_TK_KEY_CAPSLOCK", "number", []);
var get_TK_KEY_HOME = Module.cwrap("get_TK_KEY_HOME", "number", []);
var get_TK_KEY_END = Module.cwrap("get_TK_KEY_END", "number", []);
var get_TK_KEY_INSERT = Module.cwrap("get_TK_KEY_INSERT", "number", []);
var get_TK_KEY_UP = Module.cwrap("get_TK_KEY_UP", "number", []);
var get_TK_KEY_DOWN = Module.cwrap("get_TK_KEY_DOWN", "number", []);
var get_TK_KEY_LEFT = Module.cwrap("get_TK_KEY_LEFT", "number", []);
var get_TK_KEY_RIGHT = Module.cwrap("get_TK_KEY_RIGHT", "number", []);
var get_TK_KEY_PAGEUP = Module.cwrap("get_TK_KEY_PAGEUP", "number", []);
var get_TK_KEY_PAGEDOWN = Module.cwrap("get_TK_KEY_PAGEDOWN", "number", []);
var get_TK_KEY_F1 = Module.cwrap("get_TK_KEY_F1", "number", []);
var get_TK_KEY_F2 = Module.cwrap("get_TK_KEY_F2", "number", []);
var get_TK_KEY_F3 = Module.cwrap("get_TK_KEY_F3", "number", []);
var get_TK_KEY_F4 = Module.cwrap("get_TK_KEY_F4", "number", []);
var get_TK_KEY_F5 = Module.cwrap("get_TK_KEY_F5", "number", []);
var get_TK_KEY_F6 = Module.cwrap("get_TK_KEY_F6", "number", []);
var get_TK_KEY_F7 = Module.cwrap("get_TK_KEY_F7", "number", []);
var get_TK_KEY_F8 = Module.cwrap("get_TK_KEY_F8", "number", []);
var get_TK_KEY_F9 = Module.cwrap("get_TK_KEY_F9", "number", []);
var get_TK_KEY_F10 = Module.cwrap("get_TK_KEY_F10", "number", []);
var get_TK_KEY_F11 = Module.cwrap("get_TK_KEY_F11", "number", []);
var get_TK_KEY_F12 = Module.cwrap("get_TK_KEY_F12", "number", []);
var get_TK_KEY_MENU = Module.cwrap("get_TK_KEY_MENU", "number", []);
var get_TK_KEY_COMMAND = Module.cwrap("get_TK_KEY_COMMAND", "number", []);
var get_TK_KEY_BACK = Module.cwrap("get_TK_KEY_BACK", "number", []);
var get_TK_KEY_CANCEL = Module.cwrap("get_TK_KEY_CANCEL", "number", []);
var locale_info = Module.cwrap("locale_info", "number", []);
var locale_info_tr = Module.cwrap("locale_info_tr", "string", ["number", "string"]);
var locale_info_change = Module.cwrap("locale_info_change", "number", ["number", "string", "string"]);
var locale_info_off = Module.cwrap("locale_info_off", "number", ["number", "number"]);
var assets_manager = Module.cwrap("assets_manager", "number", []);
var assets_manager_set_theme = Module.cwrap("assets_manager_set_theme", "number", ["number", "string"]);
var assets_manager_ref = Module.cwrap("assets_manager_ref", "number", ["number", "number", "string"]);
var assets_manager_unref = Module.cwrap("assets_manager_unref", "number", ["number", "number"]);
var get_VALUE_TYPE_INVALID = Module.cwrap("get_VALUE_TYPE_INVALID", "number", []);
var get_VALUE_TYPE_BOOL = Module.cwrap("get_VALUE_TYPE_BOOL", "number", []);
var get_VALUE_TYPE_INT8 = Module.cwrap("get_VALUE_TYPE_INT8", "number", []);
var get_VALUE_TYPE_UINT8 = Module.cwrap("get_VALUE_TYPE_UINT8", "number", []);
var get_VALUE_TYPE_INT16 = Module.cwrap("get_VALUE_TYPE_INT16", "number", []);
var get_VALUE_TYPE_UINT16 = Module.cwrap("get_VALUE_TYPE_UINT16", "number", []);
var get_VALUE_TYPE_INT32 = Module.cwrap("get_VALUE_TYPE_INT32", "number", []);
var get_VALUE_TYPE_UINT32 = Module.cwrap("get_VALUE_TYPE_UINT32", "number", []);
var get_VALUE_TYPE_INT64 = Module.cwrap("get_VALUE_TYPE_INT64", "number", []);
var get_VALUE_TYPE_UINT64 = Module.cwrap("get_VALUE_TYPE_UINT64", "number", []);
var get_VALUE_TYPE_POINTER = Module.cwrap("get_VALUE_TYPE_POINTER", "number", []);
var get_VALUE_TYPE_FLOAT = Module.cwrap("get_VALUE_TYPE_FLOAT", "number", []);
var get_VALUE_TYPE_FLOAT32 = Module.cwrap("get_VALUE_TYPE_FLOAT32", "number", []);
var get_VALUE_TYPE_DOUBLE = Module.cwrap("get_VALUE_TYPE_DOUBLE", "number", []);
var get_VALUE_TYPE_STRING = Module.cwrap("get_VALUE_TYPE_STRING", "number", []);
var get_VALUE_TYPE_WSTRING = Module.cwrap("get_VALUE_TYPE_WSTRING", "number", []);
var get_VALUE_TYPE_OBJECT = Module.cwrap("get_VALUE_TYPE_OBJECT", "number", []);
var get_VALUE_TYPE_SIZED_STRING = Module.cwrap("get_VALUE_TYPE_SIZED_STRING", "number", []);
var get_VALUE_TYPE_BINARY = Module.cwrap("get_VALUE_TYPE_BINARY", "number", []);
var get_VALUE_TYPE_UBJSON = Module.cwrap("get_VALUE_TYPE_UBJSON", "number", []);
var get_VALUE_TYPE_TOKEN = Module.cwrap("get_VALUE_TYPE_TOKEN", "number", []);
var get_STYLE_ID_BG_COLOR = Module.cwrap("get_STYLE_ID_BG_COLOR", "string", []);
var get_STYLE_ID_FG_COLOR = Module.cwrap("get_STYLE_ID_FG_COLOR", "string", []);
var get_STYLE_ID_MASK_COLOR = Module.cwrap("get_STYLE_ID_MASK_COLOR", "string", []);
var get_STYLE_ID_FONT_NAME = Module.cwrap("get_STYLE_ID_FONT_NAME", "string", []);
var get_STYLE_ID_FONT_SIZE = Module.cwrap("get_STYLE_ID_FONT_SIZE", "string", []);
var get_STYLE_ID_FONT_STYLE = Module.cwrap("get_STYLE_ID_FONT_STYLE", "string", []);
var get_STYLE_ID_TEXT_COLOR = Module.cwrap("get_STYLE_ID_TEXT_COLOR", "string", []);
var get_STYLE_ID_HIGHLIGHT_FONT_NAME = Module.cwrap("get_STYLE_ID_HIGHLIGHT_FONT_NAME", "string", []);
var get_STYLE_ID_HIGHLIGHT_FONT_SIZE = Module.cwrap("get_STYLE_ID_HIGHLIGHT_FONT_SIZE", "string", []);
var get_STYLE_ID_HIGHLIGHT_TEXT_COLOR = Module.cwrap("get_STYLE_ID_HIGHLIGHT_TEXT_COLOR", "string", []);
var get_STYLE_ID_TIPS_TEXT_COLOR = Module.cwrap("get_STYLE_ID_TIPS_TEXT_COLOR", "string", []);
var get_STYLE_ID_TEXT_ALIGN_H = Module.cwrap("get_STYLE_ID_TEXT_ALIGN_H", "string", []);
var get_STYLE_ID_TEXT_ALIGN_V = Module.cwrap("get_STYLE_ID_TEXT_ALIGN_V", "string", []);
var get_STYLE_ID_BORDER_COLOR = Module.cwrap("get_STYLE_ID_BORDER_COLOR", "string", []);
var get_STYLE_ID_BORDER_WIDTH = Module.cwrap("get_STYLE_ID_BORDER_WIDTH", "string", []);
var get_STYLE_ID_BORDER = Module.cwrap("get_STYLE_ID_BORDER", "string", []);
var get_STYLE_ID_BG_IMAGE = Module.cwrap("get_STYLE_ID_BG_IMAGE", "string", []);
var get_STYLE_ID_BG_IMAGE_DRAW_TYPE = Module.cwrap("get_STYLE_ID_BG_IMAGE_DRAW_TYPE", "string", []);
var get_STYLE_ID_ICON = Module.cwrap("get_STYLE_ID_ICON", "string", []);
var get_STYLE_ID_FG_IMAGE = Module.cwrap("get_STYLE_ID_FG_IMAGE", "string", []);
var get_STYLE_ID_FG_IMAGE_DRAW_TYPE = Module.cwrap("get_STYLE_ID_FG_IMAGE_DRAW_TYPE", "string", []);
var get_STYLE_ID_SPACER = Module.cwrap("get_STYLE_ID_SPACER", "string", []);
var get_STYLE_ID_MARGIN = Module.cwrap("get_STYLE_ID_MARGIN", "string", []);
var get_STYLE_ID_MARGIN_LEFT = Module.cwrap("get_STYLE_ID_MARGIN_LEFT", "string", []);
var get_STYLE_ID_MARGIN_RIGHT = Module.cwrap("get_STYLE_ID_MARGIN_RIGHT", "string", []);
var get_STYLE_ID_MARGIN_TOP = Module.cwrap("get_STYLE_ID_MARGIN_TOP", "string", []);
var get_STYLE_ID_MARGIN_BOTTOM = Module.cwrap("get_STYLE_ID_MARGIN_BOTTOM", "string", []);
var get_STYLE_ID_ICON_AT = Module.cwrap("get_STYLE_ID_ICON_AT", "string", []);
var get_STYLE_ID_ACTIVE_ICON = Module.cwrap("get_STYLE_ID_ACTIVE_ICON", "string", []);
var get_STYLE_ID_X_OFFSET = Module.cwrap("get_STYLE_ID_X_OFFSET", "string", []);
var get_STYLE_ID_Y_OFFSET = Module.cwrap("get_STYLE_ID_Y_OFFSET", "string", []);
var get_STYLE_ID_SELECTED_BG_COLOR = Module.cwrap("get_STYLE_ID_SELECTED_BG_COLOR", "string", []);
var get_STYLE_ID_SELECTED_FG_COLOR = Module.cwrap("get_STYLE_ID_SELECTED_FG_COLOR", "string", []);
var get_STYLE_ID_SELECTED_TEXT_COLOR = Module.cwrap("get_STYLE_ID_SELECTED_TEXT_COLOR", "string", []);
var get_STYLE_ID_ROUND_RADIUS = Module.cwrap("get_STYLE_ID_ROUND_RADIUS", "string", []);
var get_STYLE_ID_ROUND_RADIUS_TOP_LETF = Module.cwrap("get_STYLE_ID_ROUND_RADIUS_TOP_LETF", "string", []);
var get_STYLE_ID_ROUND_RADIUS_TOP_RIGHT = Module.cwrap("get_STYLE_ID_ROUND_RADIUS_TOP_RIGHT", "string", []);
var get_STYLE_ID_ROUND_RADIUS_BOTTOM_LETF = Module.cwrap("get_STYLE_ID_ROUND_RADIUS_BOTTOM_LETF", "string", []);
var get_STYLE_ID_ROUND_RADIUS_BOTTOM_RIGHT = Module.cwrap("get_STYLE_ID_ROUND_RADIUS_BOTTOM_RIGHT", "string", []);
var get_STYLE_ID_CHILDREN_LAYOUT = Module.cwrap("get_STYLE_ID_CHILDREN_LAYOUT", "string", []);
var get_STYLE_ID_SELF_LAYOUT = Module.cwrap("get_STYLE_ID_SELF_LAYOUT", "string", []);
var style_notify_widget_state_changed = Module.cwrap("style_notify_widget_state_changed", "number", ["number", "number"]);
var style_is_valid = Module.cwrap("style_is_valid", "number", ["number"]);
var style_get_int = Module.cwrap("style_get_int", "number", ["number", "string", "number"]);
var style_get_str = Module.cwrap("style_get_str", "string", ["number", "string", "string"]);
var style_set = Module.cwrap("style_set", "number", ["number", "string", "string", "number"]);
var style_is_mutable = Module.cwrap("style_is_mutable", "number", ["number"]);
var theme = Module.cwrap("theme", "number", []);
var timer_add = Module.cwrap("timer_add", "number", ["number", "number", "number"]);
var timer_remove = Module.cwrap("timer_remove", "number", ["number"]);
var timer_reset = Module.cwrap("timer_reset", "number", ["number"]);
var timer_modify = Module.cwrap("timer_modify", "number", ["number", "number"]);
var get_ALIGN_V_NONE = Module.cwrap("get_ALIGN_V_NONE", "number", []);
var get_ALIGN_V_MIDDLE = Module.cwrap("get_ALIGN_V_MIDDLE", "number", []);
var get_ALIGN_V_TOP = Module.cwrap("get_ALIGN_V_TOP", "number", []);
var get_ALIGN_V_BOTTOM = Module.cwrap("get_ALIGN_V_BOTTOM", "number", []);
var get_ALIGN_H_NONE = Module.cwrap("get_ALIGN_H_NONE", "number", []);
var get_ALIGN_H_CENTER = Module.cwrap("get_ALIGN_H_CENTER", "number", []);
var get_ALIGN_H_LEFT = Module.cwrap("get_ALIGN_H_LEFT", "number", []);
var get_ALIGN_H_RIGHT = Module.cwrap("get_ALIGN_H_RIGHT", "number", []);
var get_APP_MOBILE = Module.cwrap("get_APP_MOBILE", "number", []);
var get_APP_SIMULATOR = Module.cwrap("get_APP_SIMULATOR", "number", []);
var get_APP_DESKTOP = Module.cwrap("get_APP_DESKTOP", "number", []);
var get_BITMAP_FMT_NONE = Module.cwrap("get_BITMAP_FMT_NONE", "number", []);
var get_BITMAP_FMT_RGBA8888 = Module.cwrap("get_BITMAP_FMT_RGBA8888", "number", []);
var get_BITMAP_FMT_ABGR8888 = Module.cwrap("get_BITMAP_FMT_ABGR8888", "number", []);
var get_BITMAP_FMT_BGRA8888 = Module.cwrap("get_BITMAP_FMT_BGRA8888", "number", []);
var get_BITMAP_FMT_ARGB8888 = Module.cwrap("get_BITMAP_FMT_ARGB8888", "number", []);
var get_BITMAP_FMT_RGB565 = Module.cwrap("get_BITMAP_FMT_RGB565", "number", []);
var get_BITMAP_FMT_BGR565 = Module.cwrap("get_BITMAP_FMT_BGR565", "number", []);
var get_BITMAP_FMT_RGB888 = Module.cwrap("get_BITMAP_FMT_RGB888", "number", []);
var get_BITMAP_FMT_BGR888 = Module.cwrap("get_BITMAP_FMT_BGR888", "number", []);
var get_BITMAP_FMT_GRAY = Module.cwrap("get_BITMAP_FMT_GRAY", "number", []);
var get_BITMAP_FMT_MONO = Module.cwrap("get_BITMAP_FMT_MONO", "number", []);
var get_BITMAP_FLAG_NONE = Module.cwrap("get_BITMAP_FLAG_NONE", "number", []);
var get_BITMAP_FLAG_OPAQUE = Module.cwrap("get_BITMAP_FLAG_OPAQUE", "number", []);
var get_BITMAP_FLAG_IMMUTABLE = Module.cwrap("get_BITMAP_FLAG_IMMUTABLE", "number", []);
var get_BITMAP_FLAG_TEXTURE = Module.cwrap("get_BITMAP_FLAG_TEXTURE", "number", []);
var get_BITMAP_FLAG_CHANGED = Module.cwrap("get_BITMAP_FLAG_CHANGED", "number", []);
var get_BITMAP_FLAG_PREMULTI_ALPHA = Module.cwrap("get_BITMAP_FLAG_PREMULTI_ALPHA", "number", []);
var vgcanvas_cast = Module.cwrap("vgcanvas_cast", "number", ["number"]);
var vgcanvas_flush = Module.cwrap("vgcanvas_flush", "number", ["number"]);
var vgcanvas_begin_path = Module.cwrap("vgcanvas_begin_path", "number", ["number"]);
var vgcanvas_move_to = Module.cwrap("vgcanvas_move_to", "number", ["number", "number", "number"]);
var vgcanvas_line_to = Module.cwrap("vgcanvas_line_to", "number", ["number", "number", "number"]);
var vgcanvas_quad_to = Module.cwrap("vgcanvas_quad_to", "number", ["number", "number", "number", "number", "number"]);
var vgcanvas_bezier_to = Module.cwrap("vgcanvas_bezier_to", "number", ["number", "number", "number", "number", "number", "number", "number"]);
var vgcanvas_arc_to = Module.cwrap("vgcanvas_arc_to", "number", ["number", "number", "number", "number", "number", "number"]);
var vgcanvas_arc = Module.cwrap("vgcanvas_arc", "number", ["number", "number", "number", "number", "number", "number", "number"]);
var vgcanvas_is_point_in_path = Module.cwrap("vgcanvas_is_point_in_path", "number", ["number", "number", "number"]);
var vgcanvas_rect = Module.cwrap("vgcanvas_rect", "number", ["number", "number", "number", "number", "number"]);
var vgcanvas_rounded_rect = Module.cwrap("vgcanvas_rounded_rect", "number", ["number", "number", "number", "number", "number", "number"]);
var vgcanvas_ellipse = Module.cwrap("vgcanvas_ellipse", "number", ["number", "number", "number", "number", "number"]);
var vgcanvas_close_path = Module.cwrap("vgcanvas_close_path", "number", ["number"]);
var vgcanvas_path_winding = Module.cwrap("vgcanvas_path_winding", "number", ["number", "number"]);
var vgcanvas_rotate = Module.cwrap("vgcanvas_rotate", "number", ["number", "number"]);
var vgcanvas_scale = Module.cwrap("vgcanvas_scale", "number", ["number", "number", "number"]);
var vgcanvas_translate = Module.cwrap("vgcanvas_translate", "number", ["number", "number", "number"]);
var vgcanvas_transform = Module.cwrap("vgcanvas_transform", "number", ["number", "number", "number", "number", "number", "number", "number"]);
var vgcanvas_set_transform = Module.cwrap("vgcanvas_set_transform", "number", ["number", "number", "number", "number", "number", "number", "number"]);
var vgcanvas_clip_rect = Module.cwrap("vgcanvas_clip_rect", "number", ["number", "number", "number", "number", "number"]);
var vgcanvas_intersect_clip_rect = Module.cwrap("vgcanvas_intersect_clip_rect", "number", ["number", "number", "number", "number", "number"]);
var vgcanvas_fill = Module.cwrap("vgcanvas_fill", "number", ["number"]);
var vgcanvas_stroke = Module.cwrap("vgcanvas_stroke", "number", ["number"]);
var vgcanvas_paint = Module.cwrap("vgcanvas_paint", "number", ["number", "number", "number"]);
var vgcanvas_set_font = Module.cwrap("vgcanvas_set_font", "number", ["number", "string"]);
var vgcanvas_set_font_size = Module.cwrap("vgcanvas_set_font_size", "number", ["number", "number"]);
var vgcanvas_set_text_align = Module.cwrap("vgcanvas_set_text_align", "number", ["number", "string"]);
var vgcanvas_set_text_baseline = Module.cwrap("vgcanvas_set_text_baseline", "number", ["number", "string"]);
var vgcanvas_fill_text = Module.cwrap("vgcanvas_fill_text", "number", ["number", "string", "number", "number", "number"]);
var vgcanvas_measure_text = Module.cwrap("vgcanvas_measure_text", "number", ["number", "string"]);
var vgcanvas_draw_image = Module.cwrap("vgcanvas_draw_image", "number", ["number", "number", "number", "number", "number", "number", "number", "number", "number", "number"]);
var vgcanvas_draw_icon = Module.cwrap("vgcanvas_draw_icon", "number", ["number", "number", "number", "number", "number", "number", "number", "number", "number", "number"]);
var vgcanvas_set_antialias = Module.cwrap("vgcanvas_set_antialias", "number", ["number", "number"]);
var vgcanvas_set_global_alpha = Module.cwrap("vgcanvas_set_global_alpha", "number", ["number", "number"]);
var vgcanvas_set_line_width = Module.cwrap("vgcanvas_set_line_width", "number", ["number", "number"]);
var vgcanvas_set_fill_color_str = Module.cwrap("vgcanvas_set_fill_color_str", "number", ["number", "string"]);
var vgcanvas_set_stroke_color_str = Module.cwrap("vgcanvas_set_stroke_color_str", "number", ["number", "string"]);
var vgcanvas_set_line_cap = Module.cwrap("vgcanvas_set_line_cap", "number", ["number", "string"]);
var vgcanvas_set_line_join = Module.cwrap("vgcanvas_set_line_join", "number", ["number", "string"]);
var vgcanvas_set_miter_limit = Module.cwrap("vgcanvas_set_miter_limit", "number", ["number", "number"]);
var vgcanvas_save = Module.cwrap("vgcanvas_save", "number", ["number"]);
var vgcanvas_restore = Module.cwrap("vgcanvas_restore", "number", ["number"]);
var vgcanvas_t_get_prop_w = Module.cwrap("vgcanvas_t_get_prop_w", "number", ["number"]);
var vgcanvas_t_get_prop_h = Module.cwrap("vgcanvas_t_get_prop_h", "number", ["number"]);
var vgcanvas_t_get_prop_stride = Module.cwrap("vgcanvas_t_get_prop_stride", "number", ["number"]);
var vgcanvas_t_get_prop_ratio = Module.cwrap("vgcanvas_t_get_prop_ratio", "number", ["number"]);
var vgcanvas_t_get_prop_anti_alias = Module.cwrap("vgcanvas_t_get_prop_anti_alias", "number", ["number"]);
var vgcanvas_t_get_prop_line_width = Module.cwrap("vgcanvas_t_get_prop_line_width", "number", ["number"]);
var vgcanvas_t_get_prop_global_alpha = Module.cwrap("vgcanvas_t_get_prop_global_alpha", "number", ["number"]);
var vgcanvas_t_get_prop_miter_limit = Module.cwrap("vgcanvas_t_get_prop_miter_limit", "number", ["number"]);
var vgcanvas_t_get_prop_line_cap = Module.cwrap("vgcanvas_t_get_prop_line_cap", "string", ["number"]);
var vgcanvas_t_get_prop_line_join = Module.cwrap("vgcanvas_t_get_prop_line_join", "string", ["number"]);
var vgcanvas_t_get_prop_font = Module.cwrap("vgcanvas_t_get_prop_font", "string", ["number"]);
var vgcanvas_t_get_prop_font_size = Module.cwrap("vgcanvas_t_get_prop_font_size", "number", ["number"]);
var vgcanvas_t_get_prop_text_align = Module.cwrap("vgcanvas_t_get_prop_text_align", "string", ["number"]);
var vgcanvas_t_get_prop_text_baseline = Module.cwrap("vgcanvas_t_get_prop_text_baseline", "string", ["number"]);
var get_VGCANVAS_LINE_CAP_ROUND = Module.cwrap("get_VGCANVAS_LINE_CAP_ROUND", "string", []);
var get_VGCANVAS_LINE_CAP_SQUARE = Module.cwrap("get_VGCANVAS_LINE_CAP_SQUARE", "string", []);
var get_VGCANVAS_LINE_JOIN_ROUND = Module.cwrap("get_VGCANVAS_LINE_JOIN_ROUND", "string", []);
var get_VGCANVAS_LINE_JOIN_BEVEL = Module.cwrap("get_VGCANVAS_LINE_JOIN_BEVEL", "string", []);
var get_VGCANVAS_LINE_JOIN_MITTER = Module.cwrap("get_VGCANVAS_LINE_JOIN_MITTER", "string", []);
var get_WIDGET_PROP_EXEC = Module.cwrap("get_WIDGET_PROP_EXEC", "string", []);
var get_WIDGET_PROP_X = Module.cwrap("get_WIDGET_PROP_X", "string", []);
var get_WIDGET_PROP_Y = Module.cwrap("get_WIDGET_PROP_Y", "string", []);
var get_WIDGET_PROP_W = Module.cwrap("get_WIDGET_PROP_W", "string", []);
var get_WIDGET_PROP_H = Module.cwrap("get_WIDGET_PROP_H", "string", []);
var get_WIDGET_PROP_INPUTING = Module.cwrap("get_WIDGET_PROP_INPUTING", "string", []);
var get_WIDGET_PROP_CARET_X = Module.cwrap("get_WIDGET_PROP_CARET_X", "string", []);
var get_WIDGET_PROP_CARET_Y = Module.cwrap("get_WIDGET_PROP_CARET_Y", "string", []);
var get_WIDGET_PROP_DIRTY_RECT_TOLERANCE = Module.cwrap("get_WIDGET_PROP_DIRTY_RECT_TOLERANCE", "string", []);
var get_WIDGET_PROP_BIDI = Module.cwrap("get_WIDGET_PROP_BIDI", "string", []);
var get_WIDGET_PROP_CANVAS = Module.cwrap("get_WIDGET_PROP_CANVAS", "string", []);
var get_WIDGET_PROP_LOCALIZE_OPTIONS = Module.cwrap("get_WIDGET_PROP_LOCALIZE_OPTIONS", "string", []);
var get_WIDGET_PROP_NATIVE_WINDOW = Module.cwrap("get_WIDGET_PROP_NATIVE_WINDOW", "string", []);
var get_WIDGET_PROP_HIGHLIGHT = Module.cwrap("get_WIDGET_PROP_HIGHLIGHT", "string", []);
var get_WIDGET_PROP_BAR_SIZE = Module.cwrap("get_WIDGET_PROP_BAR_SIZE", "string", []);
var get_WIDGET_PROP_OPACITY = Module.cwrap("get_WIDGET_PROP_OPACITY", "string", []);
var get_WIDGET_PROP_MIN_W = Module.cwrap("get_WIDGET_PROP_MIN_W", "string", []);
var get_WIDGET_PROP_MAX_W = Module.cwrap("get_WIDGET_PROP_MAX_W", "string", []);
var get_WIDGET_PROP_AUTO_ADJUST_SIZE = Module.cwrap("get_WIDGET_PROP_AUTO_ADJUST_SIZE", "string", []);
var get_WIDGET_PROP_SINGLE_INSTANCE = Module.cwrap("get_WIDGET_PROP_SINGLE_INSTANCE", "string", []);
var get_WIDGET_PROP_CHILDREN_LAYOUT = Module.cwrap("get_WIDGET_PROP_CHILDREN_LAYOUT", "string", []);
var get_WIDGET_PROP_LAYOUT = Module.cwrap("get_WIDGET_PROP_LAYOUT", "string", []);
var get_WIDGET_PROP_SELF_LAYOUT = Module.cwrap("get_WIDGET_PROP_SELF_LAYOUT", "string", []);
var get_WIDGET_PROP_LAYOUT_W = Module.cwrap("get_WIDGET_PROP_LAYOUT_W", "string", []);
var get_WIDGET_PROP_LAYOUT_H = Module.cwrap("get_WIDGET_PROP_LAYOUT_H", "string", []);
var get_WIDGET_PROP_VIRTUAL_W = Module.cwrap("get_WIDGET_PROP_VIRTUAL_W", "string", []);
var get_WIDGET_PROP_VIRTUAL_H = Module.cwrap("get_WIDGET_PROP_VIRTUAL_H", "string", []);
var get_WIDGET_PROP_NAME = Module.cwrap("get_WIDGET_PROP_NAME", "string", []);
var get_WIDGET_PROP_TYPE = Module.cwrap("get_WIDGET_PROP_TYPE", "string", []);
var get_WIDGET_PROP_CLOSABLE = Module.cwrap("get_WIDGET_PROP_CLOSABLE", "string", []);
var get_WIDGET_PROP_POINTER_CURSOR = Module.cwrap("get_WIDGET_PROP_POINTER_CURSOR", "string", []);
var get_WIDGET_PROP_VALUE = Module.cwrap("get_WIDGET_PROP_VALUE", "string", []);
var get_WIDGET_PROP_LENGTH = Module.cwrap("get_WIDGET_PROP_LENGTH", "string", []);
var get_WIDGET_PROP_LINE_WRAP = Module.cwrap("get_WIDGET_PROP_LINE_WRAP", "string", []);
var get_WIDGET_PROP_TEXT = Module.cwrap("get_WIDGET_PROP_TEXT", "string", []);
var get_WIDGET_PROP_TR_TEXT = Module.cwrap("get_WIDGET_PROP_TR_TEXT", "string", []);
var get_WIDGET_PROP_STYLE = Module.cwrap("get_WIDGET_PROP_STYLE", "string", []);
var get_WIDGET_PROP_ENABLE = Module.cwrap("get_WIDGET_PROP_ENABLE", "string", []);
var get_WIDGET_PROP_FEEDBACK = Module.cwrap("get_WIDGET_PROP_FEEDBACK", "string", []);
var get_WIDGET_PROP_FLOATING = Module.cwrap("get_WIDGET_PROP_FLOATING", "string", []);
var get_WIDGET_PROP_MARGIN = Module.cwrap("get_WIDGET_PROP_MARGIN", "string", []);
var get_WIDGET_PROP_SPACING = Module.cwrap("get_WIDGET_PROP_SPACING", "string", []);
var get_WIDGET_PROP_LEFT_MARGIN = Module.cwrap("get_WIDGET_PROP_LEFT_MARGIN", "string", []);
var get_WIDGET_PROP_RIGHT_MARGIN = Module.cwrap("get_WIDGET_PROP_RIGHT_MARGIN", "string", []);
var get_WIDGET_PROP_TOP_MARGIN = Module.cwrap("get_WIDGET_PROP_TOP_MARGIN", "string", []);
var get_WIDGET_PROP_BOTTOM_MARGIN = Module.cwrap("get_WIDGET_PROP_BOTTOM_MARGIN", "string", []);
var get_WIDGET_PROP_STEP = Module.cwrap("get_WIDGET_PROP_STEP", "string", []);
var get_WIDGET_PROP_VISIBLE = Module.cwrap("get_WIDGET_PROP_VISIBLE", "string", []);
var get_WIDGET_PROP_SENSITIVE = Module.cwrap("get_WIDGET_PROP_SENSITIVE", "string", []);
var get_WIDGET_PROP_ANIMATION = Module.cwrap("get_WIDGET_PROP_ANIMATION", "string", []);
var get_WIDGET_PROP_ANIM_HINT = Module.cwrap("get_WIDGET_PROP_ANIM_HINT", "string", []);
var get_WIDGET_PROP_FULLSCREEN = Module.cwrap("get_WIDGET_PROP_FULLSCREEN", "string", []);
var get_WIDGET_PROP_DISABLE_ANIM = Module.cwrap("get_WIDGET_PROP_DISABLE_ANIM", "string", []);
var get_WIDGET_PROP_OPEN_ANIM_HINT = Module.cwrap("get_WIDGET_PROP_OPEN_ANIM_HINT", "string", []);
var get_WIDGET_PROP_CLOSE_ANIM_HINT = Module.cwrap("get_WIDGET_PROP_CLOSE_ANIM_HINT", "string", []);
var get_WIDGET_PROP_MIN = Module.cwrap("get_WIDGET_PROP_MIN", "string", []);
var get_WIDGET_PROP_ACTION_TEXT = Module.cwrap("get_WIDGET_PROP_ACTION_TEXT", "string", []);
var get_WIDGET_PROP_TIPS = Module.cwrap("get_WIDGET_PROP_TIPS", "string", []);
var get_WIDGET_PROP_TR_TIPS = Module.cwrap("get_WIDGET_PROP_TR_TIPS", "string", []);
var get_WIDGET_PROP_INPUT_TYPE = Module.cwrap("get_WIDGET_PROP_INPUT_TYPE", "string", []);
var get_WIDGET_PROP_KEYBOARD = Module.cwrap("get_WIDGET_PROP_KEYBOARD", "string", []);
var get_WIDGET_PROP_DEFAULT_FOCUSED_CHILD = Module.cwrap("get_WIDGET_PROP_DEFAULT_FOCUSED_CHILD", "string", []);
var get_WIDGET_PROP_READONLY = Module.cwrap("get_WIDGET_PROP_READONLY", "string", []);
var get_WIDGET_PROP_CANCELABLE = Module.cwrap("get_WIDGET_PROP_CANCELABLE", "string", []);
var get_WIDGET_PROP_PASSWORD_VISIBLE = Module.cwrap("get_WIDGET_PROP_PASSWORD_VISIBLE", "string", []);
var get_WIDGET_PROP_ACTIVE = Module.cwrap("get_WIDGET_PROP_ACTIVE", "string", []);
var get_WIDGET_PROP_VERTICAL = Module.cwrap("get_WIDGET_PROP_VERTICAL", "string", []);
var get_WIDGET_PROP_SHOW_TEXT = Module.cwrap("get_WIDGET_PROP_SHOW_TEXT", "string", []);
var get_WIDGET_PROP_XOFFSET = Module.cwrap("get_WIDGET_PROP_XOFFSET", "string", []);
var get_WIDGET_PROP_YOFFSET = Module.cwrap("get_WIDGET_PROP_YOFFSET", "string", []);
var get_WIDGET_PROP_ALIGN_V = Module.cwrap("get_WIDGET_PROP_ALIGN_V", "string", []);
var get_WIDGET_PROP_ALIGN_H = Module.cwrap("get_WIDGET_PROP_ALIGN_H", "string", []);
var get_WIDGET_PROP_AUTO_PLAY = Module.cwrap("get_WIDGET_PROP_AUTO_PLAY", "string", []);
var get_WIDGET_PROP_LOOP = Module.cwrap("get_WIDGET_PROP_LOOP", "string", []);
var get_WIDGET_PROP_AUTO_FIX = Module.cwrap("get_WIDGET_PROP_AUTO_FIX", "string", []);
var get_WIDGET_PROP_SELECT_NONE_WHEN_FOCUSED = Module.cwrap("get_WIDGET_PROP_SELECT_NONE_WHEN_FOCUSED", "string", []);
var get_WIDGET_PROP_OPEN_IM_WHEN_FOCUSED = Module.cwrap("get_WIDGET_PROP_OPEN_IM_WHEN_FOCUSED", "string", []);
var get_WIDGET_PROP_CLOSE_IM_WHEN_BLURED = Module.cwrap("get_WIDGET_PROP_CLOSE_IM_WHEN_BLURED", "string", []);
var get_WIDGET_PROP_X_MIN = Module.cwrap("get_WIDGET_PROP_X_MIN", "string", []);
var get_WIDGET_PROP_X_MAX = Module.cwrap("get_WIDGET_PROP_X_MAX", "string", []);
var get_WIDGET_PROP_Y_MIN = Module.cwrap("get_WIDGET_PROP_Y_MIN", "string", []);
var get_WIDGET_PROP_Y_MAX = Module.cwrap("get_WIDGET_PROP_Y_MAX", "string", []);
var get_WIDGET_PROP_MAX = Module.cwrap("get_WIDGET_PROP_MAX", "string", []);
var get_WIDGET_PROP_GRAB_KEYS = Module.cwrap("get_WIDGET_PROP_GRAB_KEYS", "string", []);
var get_WIDGET_PROP_ROW = Module.cwrap("get_WIDGET_PROP_ROW", "string", []);
var get_WIDGET_PROP_STATE_FOR_STYLE = Module.cwrap("get_WIDGET_PROP_STATE_FOR_STYLE", "string", []);
var get_WIDGET_PROP_THEME = Module.cwrap("get_WIDGET_PROP_THEME", "string", []);
var get_WIDGET_PROP_STAGE = Module.cwrap("get_WIDGET_PROP_STAGE", "string", []);
var get_WIDGET_PROP_IMAGE_MANAGER = Module.cwrap("get_WIDGET_PROP_IMAGE_MANAGER", "string", []);
var get_WIDGET_PROP_ASSETS_MANAGER = Module.cwrap("get_WIDGET_PROP_ASSETS_MANAGER", "string", []);
var get_WIDGET_PROP_LOCALE_INFO = Module.cwrap("get_WIDGET_PROP_LOCALE_INFO", "string", []);
var get_WIDGET_PROP_FONT_MANAGER = Module.cwrap("get_WIDGET_PROP_FONT_MANAGER", "string", []);
var get_WIDGET_PROP_THEME_OBJ = Module.cwrap("get_WIDGET_PROP_THEME_OBJ", "string", []);
var get_WIDGET_PROP_DEFAULT_THEME_OBJ = Module.cwrap("get_WIDGET_PROP_DEFAULT_THEME_OBJ", "string", []);
var get_WIDGET_PROP_ITEM_WIDTH = Module.cwrap("get_WIDGET_PROP_ITEM_WIDTH", "string", []);
var get_WIDGET_PROP_ITEM_HEIGHT = Module.cwrap("get_WIDGET_PROP_ITEM_HEIGHT", "string", []);
var get_WIDGET_PROP_DEFAULT_ITEM_HEIGHT = Module.cwrap("get_WIDGET_PROP_DEFAULT_ITEM_HEIGHT", "string", []);
var get_WIDGET_PROP_XSLIDABLE = Module.cwrap("get_WIDGET_PROP_XSLIDABLE", "string", []);
var get_WIDGET_PROP_YSLIDABLE = Module.cwrap("get_WIDGET_PROP_YSLIDABLE", "string", []);
var get_WIDGET_PROP_REPEAT = Module.cwrap("get_WIDGET_PROP_REPEAT", "string", []);
var get_WIDGET_PROP_LONG_PRESS_TIME = Module.cwrap("get_WIDGET_PROP_LONG_PRESS_TIME", "string", []);
var get_WIDGET_PROP_ENABLE_LONG_PRESS = Module.cwrap("get_WIDGET_PROP_ENABLE_LONG_PRESS", "string", []);
var get_WIDGET_PROP_CLICK_THROUGH = Module.cwrap("get_WIDGET_PROP_CLICK_THROUGH", "string", []);
var get_WIDGET_PROP_ANIMATABLE = Module.cwrap("get_WIDGET_PROP_ANIMATABLE", "string", []);
var get_WIDGET_PROP_AUTO_HIDE_SCROLL_BAR = Module.cwrap("get_WIDGET_PROP_AUTO_HIDE_SCROLL_BAR", "string", []);
var get_WIDGET_PROP_IMAGE = Module.cwrap("get_WIDGET_PROP_IMAGE", "string", []);
var get_WIDGET_PROP_FORMAT = Module.cwrap("get_WIDGET_PROP_FORMAT", "string", []);
var get_WIDGET_PROP_DRAW_TYPE = Module.cwrap("get_WIDGET_PROP_DRAW_TYPE", "string", []);
var get_WIDGET_PROP_SELECTABLE = Module.cwrap("get_WIDGET_PROP_SELECTABLE", "string", []);
var get_WIDGET_PROP_CLICKABLE = Module.cwrap("get_WIDGET_PROP_CLICKABLE", "string", []);
var get_WIDGET_PROP_SCALE_X = Module.cwrap("get_WIDGET_PROP_SCALE_X", "string", []);
var get_WIDGET_PROP_SCALE_Y = Module.cwrap("get_WIDGET_PROP_SCALE_Y", "string", []);
var get_WIDGET_PROP_ANCHOR_X = Module.cwrap("get_WIDGET_PROP_ANCHOR_X", "string", []);
var get_WIDGET_PROP_ANCHOR_Y = Module.cwrap("get_WIDGET_PROP_ANCHOR_Y", "string", []);
var get_WIDGET_PROP_ROTATION = Module.cwrap("get_WIDGET_PROP_ROTATION", "string", []);
var get_WIDGET_PROP_COMPACT = Module.cwrap("get_WIDGET_PROP_COMPACT", "string", []);
var get_WIDGET_PROP_SCROLLABLE = Module.cwrap("get_WIDGET_PROP_SCROLLABLE", "string", []);
var get_WIDGET_PROP_ICON = Module.cwrap("get_WIDGET_PROP_ICON", "string", []);
var get_WIDGET_PROP_OPTIONS = Module.cwrap("get_WIDGET_PROP_OPTIONS", "string", []);
var get_WIDGET_PROP_SELECTED = Module.cwrap("get_WIDGET_PROP_SELECTED", "string", []);
var get_WIDGET_PROP_CHECKED = Module.cwrap("get_WIDGET_PROP_CHECKED", "string", []);
var get_WIDGET_PROP_ACTIVE_ICON = Module.cwrap("get_WIDGET_PROP_ACTIVE_ICON", "string", []);
var get_WIDGET_PROP_LOAD_UI = Module.cwrap("get_WIDGET_PROP_LOAD_UI", "string", []);
var get_WIDGET_PROP_OPEN_WINDOW = Module.cwrap("get_WIDGET_PROP_OPEN_WINDOW", "string", []);
var get_WIDGET_PROP_SELECTED_INDEX = Module.cwrap("get_WIDGET_PROP_SELECTED_INDEX", "string", []);
var get_WIDGET_PROP_CLOSE_WHEN_CLICK = Module.cwrap("get_WIDGET_PROP_CLOSE_WHEN_CLICK", "string", []);
var get_WIDGET_PROP_CLOSE_WHEN_CLICK_OUTSIDE = Module.cwrap("get_WIDGET_PROP_CLOSE_WHEN_CLICK_OUTSIDE", "string", []);
var get_WIDGET_PROP_LINE_GAP = Module.cwrap("get_WIDGET_PROP_LINE_GAP", "string", []);
var get_WIDGET_PROP_BG_COLOR = Module.cwrap("get_WIDGET_PROP_BG_COLOR", "string", []);
var get_WIDGET_PROP_BORDER_COLOR = Module.cwrap("get_WIDGET_PROP_BORDER_COLOR", "string", []);
var get_WIDGET_PROP_DELAY = Module.cwrap("get_WIDGET_PROP_DELAY", "string", []);
var get_WIDGET_PROP_IS_KEYBOARD = Module.cwrap("get_WIDGET_PROP_IS_KEYBOARD", "string", []);
var get_WIDGET_PROP_FOCUSED = Module.cwrap("get_WIDGET_PROP_FOCUSED", "string", []);
var get_WIDGET_PROP_FOCUS = Module.cwrap("get_WIDGET_PROP_FOCUS", "string", []);
var get_WIDGET_PROP_FOCUSABLE = Module.cwrap("get_WIDGET_PROP_FOCUSABLE", "string", []);
var get_WIDGET_PROP_WITH_FOCUS_STATE = Module.cwrap("get_WIDGET_PROP_WITH_FOCUS_STATE", "string", []);
var get_WIDGET_PROP_MOVE_FOCUS_PREV_KEY = Module.cwrap("get_WIDGET_PROP_MOVE_FOCUS_PREV_KEY", "string", []);
var get_WIDGET_PROP_MOVE_FOCUS_NEXT_KEY = Module.cwrap("get_WIDGET_PROP_MOVE_FOCUS_NEXT_KEY", "string", []);
var get_WIDGET_PROP_MOVE_FOCUS_UP_KEY = Module.cwrap("get_WIDGET_PROP_MOVE_FOCUS_UP_KEY", "string", []);
var get_WIDGET_PROP_MOVE_FOCUS_DOWN_KEY = Module.cwrap("get_WIDGET_PROP_MOVE_FOCUS_DOWN_KEY", "string", []);
var get_WIDGET_PROP_MOVE_FOCUS_LEFT_KEY = Module.cwrap("get_WIDGET_PROP_MOVE_FOCUS_LEFT_KEY", "string", []);
var get_WIDGET_PROP_MOVE_FOCUS_RIGHT_KEY = Module.cwrap("get_WIDGET_PROP_MOVE_FOCUS_RIGHT_KEY", "string", []);
var get_WIDGET_TYPE_NONE = Module.cwrap("get_WIDGET_TYPE_NONE", "string", []);
var get_WIDGET_TYPE_WINDOW_MANAGER = Module.cwrap("get_WIDGET_TYPE_WINDOW_MANAGER", "string", []);
var get_WIDGET_TYPE_NORMAL_WINDOW = Module.cwrap("get_WIDGET_TYPE_NORMAL_WINDOW", "string", []);
var get_WIDGET_TYPE_OVERLAY = Module.cwrap("get_WIDGET_TYPE_OVERLAY", "string", []);
var get_WIDGET_TYPE_TOOL_BAR = Module.cwrap("get_WIDGET_TYPE_TOOL_BAR", "string", []);
var get_WIDGET_TYPE_DIALOG = Module.cwrap("get_WIDGET_TYPE_DIALOG", "string", []);
var get_WIDGET_TYPE_POPUP = Module.cwrap("get_WIDGET_TYPE_POPUP", "string", []);
var get_WIDGET_TYPE_SYSTEM_BAR = Module.cwrap("get_WIDGET_TYPE_SYSTEM_BAR", "string", []);
var get_WIDGET_TYPE_SYSTEM_BAR_BOTTOM = Module.cwrap("get_WIDGET_TYPE_SYSTEM_BAR_BOTTOM", "string", []);
var get_WIDGET_TYPE_SPRITE = Module.cwrap("get_WIDGET_TYPE_SPRITE", "string", []);
var get_WIDGET_TYPE_KEYBOARD = Module.cwrap("get_WIDGET_TYPE_KEYBOARD", "string", []);
var get_WIDGET_TYPE_DND = Module.cwrap("get_WIDGET_TYPE_DND", "string", []);
var get_WIDGET_TYPE_LABEL = Module.cwrap("get_WIDGET_TYPE_LABEL", "string", []);
var get_WIDGET_TYPE_BUTTON = Module.cwrap("get_WIDGET_TYPE_BUTTON", "string", []);
var get_WIDGET_TYPE_IMAGE = Module.cwrap("get_WIDGET_TYPE_IMAGE", "string", []);
var get_WIDGET_TYPE_EDIT = Module.cwrap("get_WIDGET_TYPE_EDIT", "string", []);
var get_WIDGET_TYPE_PROGRESS_BAR = Module.cwrap("get_WIDGET_TYPE_PROGRESS_BAR", "string", []);
var get_WIDGET_TYPE_GROUP_BOX = Module.cwrap("get_WIDGET_TYPE_GROUP_BOX", "string", []);
var get_WIDGET_TYPE_CHECK_BUTTON = Module.cwrap("get_WIDGET_TYPE_CHECK_BUTTON", "string", []);
var get_WIDGET_TYPE_RADIO_BUTTON = Module.cwrap("get_WIDGET_TYPE_RADIO_BUTTON", "string", []);
var get_WIDGET_TYPE_DIALOG_TITLE = Module.cwrap("get_WIDGET_TYPE_DIALOG_TITLE", "string", []);
var get_WIDGET_TYPE_DIALOG_CLIENT = Module.cwrap("get_WIDGET_TYPE_DIALOG_CLIENT", "string", []);
var get_WIDGET_TYPE_SLIDER = Module.cwrap("get_WIDGET_TYPE_SLIDER", "string", []);
var get_WIDGET_TYPE_VIEW = Module.cwrap("get_WIDGET_TYPE_VIEW", "string", []);
var get_WIDGET_TYPE_COMBO_BOX = Module.cwrap("get_WIDGET_TYPE_COMBO_BOX", "string", []);
var get_WIDGET_TYPE_COMBO_BOX_ITEM = Module.cwrap("get_WIDGET_TYPE_COMBO_BOX_ITEM", "string", []);
var get_WIDGET_TYPE_SLIDE_VIEW = Module.cwrap("get_WIDGET_TYPE_SLIDE_VIEW", "string", []);
var get_WIDGET_TYPE_SLIDE_INDICATOR = Module.cwrap("get_WIDGET_TYPE_SLIDE_INDICATOR", "string", []);
var get_WIDGET_TYPE_SLIDE_INDICATOR_ARC = Module.cwrap("get_WIDGET_TYPE_SLIDE_INDICATOR_ARC", "string", []);
var get_WIDGET_TYPE_PAGES = Module.cwrap("get_WIDGET_TYPE_PAGES", "string", []);
var get_WIDGET_TYPE_TAB_BUTTON = Module.cwrap("get_WIDGET_TYPE_TAB_BUTTON", "string", []);
var get_WIDGET_TYPE_TAB_CONTROL = Module.cwrap("get_WIDGET_TYPE_TAB_CONTROL", "string", []);
var get_WIDGET_TYPE_TAB_BUTTON_GROUP = Module.cwrap("get_WIDGET_TYPE_TAB_BUTTON_GROUP", "string", []);
var get_WIDGET_TYPE_BUTTON_GROUP = Module.cwrap("get_WIDGET_TYPE_BUTTON_GROUP", "string", []);
var get_WIDGET_TYPE_CANDIDATES = Module.cwrap("get_WIDGET_TYPE_CANDIDATES", "string", []);
var get_WIDGET_TYPE_SPIN_BOX = Module.cwrap("get_WIDGET_TYPE_SPIN_BOX", "string", []);
var get_WIDGET_TYPE_DRAGGER = Module.cwrap("get_WIDGET_TYPE_DRAGGER", "string", []);
var get_WIDGET_TYPE_SCROLL_BAR = Module.cwrap("get_WIDGET_TYPE_SCROLL_BAR", "string", []);
var get_WIDGET_TYPE_SCROLL_BAR_DESKTOP = Module.cwrap("get_WIDGET_TYPE_SCROLL_BAR_DESKTOP", "string", []);
var get_WIDGET_TYPE_SCROLL_BAR_MOBILE = Module.cwrap("get_WIDGET_TYPE_SCROLL_BAR_MOBILE", "string", []);
var get_WIDGET_TYPE_SCROLL_VIEW = Module.cwrap("get_WIDGET_TYPE_SCROLL_VIEW", "string", []);
var get_WIDGET_TYPE_LIST_VIEW = Module.cwrap("get_WIDGET_TYPE_LIST_VIEW", "string", []);
var get_WIDGET_TYPE_LIST_VIEW_H = Module.cwrap("get_WIDGET_TYPE_LIST_VIEW_H", "string", []);
var get_WIDGET_TYPE_LIST_ITEM = Module.cwrap("get_WIDGET_TYPE_LIST_ITEM", "string", []);
var get_WIDGET_TYPE_COLOR_PICKER = Module.cwrap("get_WIDGET_TYPE_COLOR_PICKER", "string", []);
var get_WIDGET_TYPE_COLOR_COMPONENT = Module.cwrap("get_WIDGET_TYPE_COLOR_COMPONENT", "string", []);
var get_WIDGET_TYPE_COLOR_TILE = Module.cwrap("get_WIDGET_TYPE_COLOR_TILE", "string", []);
var get_WIDGET_TYPE_CLIP_VIEW = Module.cwrap("get_WIDGET_TYPE_CLIP_VIEW", "string", []);
var get_WIDGET_TYPE_RICH_TEXT = Module.cwrap("get_WIDGET_TYPE_RICH_TEXT", "string", []);
var get_WIDGET_TYPE_APP_BAR = Module.cwrap("get_WIDGET_TYPE_APP_BAR", "string", []);
var get_WIDGET_TYPE_GRID = Module.cwrap("get_WIDGET_TYPE_GRID", "string", []);
var get_WIDGET_TYPE_GRID_ITEM = Module.cwrap("get_WIDGET_TYPE_GRID_ITEM", "string", []);
var get_WIDGET_TYPE_ROW = Module.cwrap("get_WIDGET_TYPE_ROW", "string", []);
var get_WIDGET_TYPE_COLUMN = Module.cwrap("get_WIDGET_TYPE_COLUMN", "string", []);
var get_WIDGET_TYPE_CALIBRATION_WIN = Module.cwrap("get_WIDGET_TYPE_CALIBRATION_WIN", "string", []);
var get_WINDOW_STAGE_NONE = Module.cwrap("get_WINDOW_STAGE_NONE", "number", []);
var get_WINDOW_STAGE_CREATED = Module.cwrap("get_WINDOW_STAGE_CREATED", "number", []);
var get_WINDOW_STAGE_OPENED = Module.cwrap("get_WINDOW_STAGE_OPENED", "number", []);
var get_WINDOW_STAGE_CLOSED = Module.cwrap("get_WINDOW_STAGE_CLOSED", "number", []);
var get_WINDOW_STAGE_SUSPEND = Module.cwrap("get_WINDOW_STAGE_SUSPEND", "number", []);
var get_WINDOW_CLOSABLE_YES = Module.cwrap("get_WINDOW_CLOSABLE_YES", "number", []);
var get_WINDOW_CLOSABLE_NO = Module.cwrap("get_WINDOW_CLOSABLE_NO", "number", []);
var get_WINDOW_CLOSABLE_CONFIRM = Module.cwrap("get_WINDOW_CLOSABLE_CONFIRM", "number", []);
var get_WIDGET_STATE_NONE = Module.cwrap("get_WIDGET_STATE_NONE", "string", []);
var get_WIDGET_STATE_NORMAL = Module.cwrap("get_WIDGET_STATE_NORMAL", "string", []);
var get_WIDGET_STATE_CHANGED = Module.cwrap("get_WIDGET_STATE_CHANGED", "string", []);
var get_WIDGET_STATE_PRESSED = Module.cwrap("get_WIDGET_STATE_PRESSED", "string", []);
var get_WIDGET_STATE_OVER = Module.cwrap("get_WIDGET_STATE_OVER", "string", []);
var get_WIDGET_STATE_DISABLE = Module.cwrap("get_WIDGET_STATE_DISABLE", "string", []);
var get_WIDGET_STATE_FOCUSED = Module.cwrap("get_WIDGET_STATE_FOCUSED", "string", []);
var get_WIDGET_STATE_CHECKED = Module.cwrap("get_WIDGET_STATE_CHECKED", "string", []);
var get_WIDGET_STATE_UNCHECKED = Module.cwrap("get_WIDGET_STATE_UNCHECKED", "string", []);
var get_WIDGET_STATE_EMPTY = Module.cwrap("get_WIDGET_STATE_EMPTY", "string", []);
var get_WIDGET_STATE_EMPTY_FOCUS = Module.cwrap("get_WIDGET_STATE_EMPTY_FOCUS", "string", []);
var get_WIDGET_STATE_ERROR = Module.cwrap("get_WIDGET_STATE_ERROR", "string", []);
var get_WIDGET_STATE_SELECTED = Module.cwrap("get_WIDGET_STATE_SELECTED", "string", []);
var get_WIDGET_STATE_NORMAL_OF_CHECKED = Module.cwrap("get_WIDGET_STATE_NORMAL_OF_CHECKED", "string", []);
var get_WIDGET_STATE_PRESSED_OF_CHECKED = Module.cwrap("get_WIDGET_STATE_PRESSED_OF_CHECKED", "string", []);
var get_WIDGET_STATE_OVER_OF_CHECKED = Module.cwrap("get_WIDGET_STATE_OVER_OF_CHECKED", "string", []);
var get_WIDGET_STATE_DISABLE_OF_CHECKED = Module.cwrap("get_WIDGET_STATE_DISABLE_OF_CHECKED", "string", []);
var get_WIDGET_STATE_FOCUSED_OF_CHECKED = Module.cwrap("get_WIDGET_STATE_FOCUSED_OF_CHECKED", "string", []);
var get_WIDGET_STATE_NORMAL_OF_ACTIVE = Module.cwrap("get_WIDGET_STATE_NORMAL_OF_ACTIVE", "string", []);
var get_WIDGET_STATE_PRESSED_OF_ACTIVE = Module.cwrap("get_WIDGET_STATE_PRESSED_OF_ACTIVE", "string", []);
var get_WIDGET_STATE_OVER_OF_ACTIVE = Module.cwrap("get_WIDGET_STATE_OVER_OF_ACTIVE", "string", []);
var get_WIDGET_STATE_DISABLE_OF_ACTIVE = Module.cwrap("get_WIDGET_STATE_DISABLE_OF_ACTIVE", "string", []);
var get_WIDGET_STATE_FOCUSED_OF_ACTIVE = Module.cwrap("get_WIDGET_STATE_FOCUSED_OF_ACTIVE", "string", []);
var get_WIDGET_CURSOR_DEFAULT = Module.cwrap("get_WIDGET_CURSOR_DEFAULT", "string", []);
var get_WIDGET_CURSOR_EDIT = Module.cwrap("get_WIDGET_CURSOR_EDIT", "string", []);
var get_WIDGET_CURSOR_HAND = Module.cwrap("get_WIDGET_CURSOR_HAND", "string", []);
var get_WIDGET_CURSOR_WAIT = Module.cwrap("get_WIDGET_CURSOR_WAIT", "string", []);
var get_WIDGET_CURSOR_CROSS = Module.cwrap("get_WIDGET_CURSOR_CROSS", "string", []);
var get_WIDGET_CURSOR_NO = Module.cwrap("get_WIDGET_CURSOR_NO", "string", []);
var get_WIDGET_CURSOR_SIZENWSE = Module.cwrap("get_WIDGET_CURSOR_SIZENWSE", "string", []);
var get_WIDGET_CURSOR_SIZENESW = Module.cwrap("get_WIDGET_CURSOR_SIZENESW", "string", []);
var get_WIDGET_CURSOR_SIZEWE = Module.cwrap("get_WIDGET_CURSOR_SIZEWE", "string", []);
var get_WIDGET_CURSOR_SIZENS = Module.cwrap("get_WIDGET_CURSOR_SIZENS", "string", []);
var get_WIDGET_CURSOR_SIZEALL = Module.cwrap("get_WIDGET_CURSOR_SIZEALL", "string", []);
var widget_count_children = Module.cwrap("widget_count_children", "number", ["number"]);
var widget_get_child = Module.cwrap("widget_get_child", "number", ["number", "number"]);
var widget_get_native_window = Module.cwrap("widget_get_native_window", "number", ["number"]);
var widget_index_of = Module.cwrap("widget_index_of", "number", ["number"]);
var widget_close_window = Module.cwrap("widget_close_window", "number", ["number"]);
var widget_move = Module.cwrap("widget_move", "number", ["number", "number", "number"]);
var widget_resize = Module.cwrap("widget_resize", "number", ["number", "number", "number"]);
var widget_move_resize = Module.cwrap("widget_move_resize", "number", ["number", "number", "number", "number", "number"]);
var widget_set_value = Module.cwrap("widget_set_value", "number", ["number", "number"]);
var widget_animate_value_to = Module.cwrap("widget_animate_value_to", "number", ["number", "number", "number"]);
var widget_add_value = Module.cwrap("widget_add_value", "number", ["number", "number"]);
var widget_use_style = Module.cwrap("widget_use_style", "number", ["number", "string"]);
var widget_set_text_utf8 = Module.cwrap("widget_set_text_utf8", "number", ["number", "string"]);
var widget_set_child_text_utf8 = Module.cwrap("widget_set_child_text_utf8", "number", ["number", "string", "string"]);
var widget_set_child_text_with_double = Module.cwrap("widget_set_child_text_with_double", "number", ["number", "string", "string", "number"]);
var widget_set_child_text_with_int = Module.cwrap("widget_set_child_text_with_int", "number", ["number", "string", "string", "number"]);
var widget_set_tr_text = Module.cwrap("widget_set_tr_text", "number", ["number", "string"]);
var widget_get_value = Module.cwrap("widget_get_value", "number", ["number"]);
var widget_get_text = Module.cwrap("widget_get_text", "number", ["number"]);
var widget_set_name = Module.cwrap("widget_set_name", "number", ["number", "string"]);
var widget_set_theme = Module.cwrap("widget_set_theme", "number", ["number", "string"]);
var widget_set_pointer_cursor = Module.cwrap("widget_set_pointer_cursor", "number", ["number", "string"]);
var widget_set_animation = Module.cwrap("widget_set_animation", "number", ["number", "string"]);
var widget_create_animator = Module.cwrap("widget_create_animator", "number", ["number", "string"]);
var widget_start_animator = Module.cwrap("widget_start_animator", "number", ["number", "string"]);
var widget_set_animator_time_scale = Module.cwrap("widget_set_animator_time_scale", "number", ["number", "string", "number"]);
var widget_pause_animator = Module.cwrap("widget_pause_animator", "number", ["number", "string"]);
var widget_stop_animator = Module.cwrap("widget_stop_animator", "number", ["number", "string"]);
var widget_destroy_animator = Module.cwrap("widget_destroy_animator", "number", ["number", "string"]);
var widget_set_enable = Module.cwrap("widget_set_enable", "number", ["number", "number"]);
var widget_set_feedback = Module.cwrap("widget_set_feedback", "number", ["number", "number"]);
var widget_set_auto_adjust_size = Module.cwrap("widget_set_auto_adjust_size", "number", ["number", "number"]);
var widget_set_floating = Module.cwrap("widget_set_floating", "number", ["number", "number"]);
var widget_set_focused = Module.cwrap("widget_set_focused", "number", ["number", "number"]);
var widget_set_focusable = Module.cwrap("widget_set_focusable", "number", ["number", "number"]);
var widget_set_state = Module.cwrap("widget_set_state", "number", ["number", "string"]);
var widget_set_opacity = Module.cwrap("widget_set_opacity", "number", ["number", "number"]);
var widget_set_dirty_rect_tolerance = Module.cwrap("widget_set_dirty_rect_tolerance", "number", ["number", "number"]);
var widget_destroy_children = Module.cwrap("widget_destroy_children", "number", ["number"]);
var widget_add_child = Module.cwrap("widget_add_child", "number", ["number", "number"]);
var widget_remove_child = Module.cwrap("widget_remove_child", "number", ["number", "number"]);
var widget_insert_child = Module.cwrap("widget_insert_child", "number", ["number", "number", "number"]);
var widget_restack = Module.cwrap("widget_restack", "number", ["number", "number"]);
var widget_child = Module.cwrap("widget_child", "number", ["number", "string"]);
var widget_lookup = Module.cwrap("widget_lookup", "number", ["number", "string", "number"]);
var widget_lookup_by_type = Module.cwrap("widget_lookup_by_type", "number", ["number", "string", "number"]);
var widget_set_visible = Module.cwrap("widget_set_visible", "number", ["number", "number"]);
var widget_set_visible_only = Module.cwrap("widget_set_visible_only", "number", ["number", "number"]);
var widget_set_sensitive = Module.cwrap("widget_set_sensitive", "number", ["number", "number"]);
var widget_on = Module.cwrap("widget_on", "number", ["number", "number", "number", "number"]);
var widget_off = Module.cwrap("widget_off", "number", ["number", "number"]);
var widget_invalidate_force = Module.cwrap("widget_invalidate_force", "number", ["number", "number"]);
var widget_set_prop_str = Module.cwrap("widget_set_prop_str", "number", ["number", "string", "string"]);
var widget_get_prop_str = Module.cwrap("widget_get_prop_str", "string", ["number", "string", "string"]);
var widget_set_prop_pointer = Module.cwrap("widget_set_prop_pointer", "number", ["number", "string", "number"]);
var widget_get_prop_pointer = Module.cwrap("widget_get_prop_pointer", "number", ["number", "string"]);
var widget_set_prop_int = Module.cwrap("widget_set_prop_int", "number", ["number", "string", "number"]);
var widget_get_prop_int = Module.cwrap("widget_get_prop_int", "number", ["number", "string", "number"]);
var widget_set_prop_bool = Module.cwrap("widget_set_prop_bool", "number", ["number", "string", "number"]);
var widget_get_prop_bool = Module.cwrap("widget_get_prop_bool", "number", ["number", "string", "number"]);
var widget_is_window_opened = Module.cwrap("widget_is_window_opened", "number", ["number"]);
var widget_is_parent_of = Module.cwrap("widget_is_parent_of", "number", ["number", "number"]);
var widget_is_direct_parent_of = Module.cwrap("widget_is_direct_parent_of", "number", ["number", "number"]);
var widget_is_window = Module.cwrap("widget_is_window", "number", ["number"]);
var widget_is_system_bar = Module.cwrap("widget_is_system_bar", "number", ["number"]);
var widget_is_normal_window = Module.cwrap("widget_is_normal_window", "number", ["number"]);
var widget_is_dialog = Module.cwrap("widget_is_dialog", "number", ["number"]);
var widget_is_popup = Module.cwrap("widget_is_popup", "number", ["number"]);
var widget_is_overlay = Module.cwrap("widget_is_overlay", "number", ["number"]);
var widget_is_opened_popup = Module.cwrap("widget_is_opened_popup", "number", ["number"]);
var widget_is_keyboard = Module.cwrap("widget_is_keyboard", "number", ["number"]);
var widget_is_designing_window = Module.cwrap("widget_is_designing_window", "number", ["number"]);
var widget_is_window_manager = Module.cwrap("widget_is_window_manager", "number", ["number"]);
var widget_foreach = Module.cwrap("widget_foreach", "number", ["number", "number", "number"]);
var widget_get_window = Module.cwrap("widget_get_window", "number", ["number"]);
var widget_get_window_manager = Module.cwrap("widget_get_window_manager", "number", ["number"]);
var widget_get_type = Module.cwrap("widget_get_type", "string", ["number"]);
var widget_clone = Module.cwrap("widget_clone", "number", ["number", "number"]);
var widget_equal = Module.cwrap("widget_equal", "number", ["number", "number"]);
var widget_cast = Module.cwrap("widget_cast", "number", ["number"]);
var widget_destroy = Module.cwrap("widget_destroy", "number", ["number"]);
var widget_destroy_async = Module.cwrap("widget_destroy_async", "number", ["number"]);
var widget_unref = Module.cwrap("widget_unref", "number", ["number"]);
var widget_stroke_border_rect = Module.cwrap("widget_stroke_border_rect", "number", ["number", "number", "number"]);
var widget_fill_bg_rect = Module.cwrap("widget_fill_bg_rect", "number", ["number", "number", "number", "number"]);
var widget_fill_fg_rect = Module.cwrap("widget_fill_fg_rect", "number", ["number", "number", "number", "number"]);
var widget_dispatch_to_target = Module.cwrap("widget_dispatch_to_target", "number", ["number", "number"]);
var widget_dispatch_to_key_target = Module.cwrap("widget_dispatch_to_key_target", "number", ["number", "number"]);
var widget_update_style = Module.cwrap("widget_update_style", "number", ["number"]);
var widget_update_style_recursive = Module.cwrap("widget_update_style_recursive", "number", ["number"]);
var widget_set_as_key_target = Module.cwrap("widget_set_as_key_target", "number", ["number"]);
var widget_focus_next = Module.cwrap("widget_focus_next", "number", ["number"]);
var widget_focus_prev = Module.cwrap("widget_focus_prev", "number", ["number"]);
var widget_get_state_for_style = Module.cwrap("widget_get_state_for_style", "string", ["number", "number", "number"]);
var widget_layout = Module.cwrap("widget_layout", "number", ["number"]);
var widget_set_self_layout = Module.cwrap("widget_set_self_layout", "number", ["number", "string"]);
var widget_set_children_layout = Module.cwrap("widget_set_children_layout", "number", ["number", "string"]);
var widget_set_self_layout_params = Module.cwrap("widget_set_self_layout_params", "number", ["number", "string", "string", "string", "string"]);
var widget_set_style_int = Module.cwrap("widget_set_style_int", "number", ["number", "string", "number"]);
var widget_set_style_str = Module.cwrap("widget_set_style_str", "number", ["number", "string", "string"]);
var widget_set_style_color = Module.cwrap("widget_set_style_color", "number", ["number", "string", "number"]);
var widget_t_get_prop_x = Module.cwrap("widget_t_get_prop_x", "number", ["number"]);
var widget_t_get_prop_y = Module.cwrap("widget_t_get_prop_y", "number", ["number"]);
var widget_t_get_prop_w = Module.cwrap("widget_t_get_prop_w", "number", ["number"]);
var widget_t_get_prop_h = Module.cwrap("widget_t_get_prop_h", "number", ["number"]);
var widget_t_get_prop_name = Module.cwrap("widget_t_get_prop_name", "string", ["number"]);
var widget_t_get_prop_pointer_cursor = Module.cwrap("widget_t_get_prop_pointer_cursor", "string", ["number"]);
var widget_t_get_prop_tr_text = Module.cwrap("widget_t_get_prop_tr_text", "string", ["number"]);
var widget_t_get_prop_style = Module.cwrap("widget_t_get_prop_style", "string", ["number"]);
var widget_t_get_prop_animation = Module.cwrap("widget_t_get_prop_animation", "string", ["number"]);
var widget_t_get_prop_enable = Module.cwrap("widget_t_get_prop_enable", "number", ["number"]);
var widget_t_get_prop_feedback = Module.cwrap("widget_t_get_prop_feedback", "number", ["number"]);
var widget_t_get_prop_visible = Module.cwrap("widget_t_get_prop_visible", "number", ["number"]);
var widget_t_get_prop_sensitive = Module.cwrap("widget_t_get_prop_sensitive", "number", ["number"]);
var widget_t_get_prop_focusable = Module.cwrap("widget_t_get_prop_focusable", "number", ["number"]);
var widget_t_get_prop_with_focus_state = Module.cwrap("widget_t_get_prop_with_focus_state", "number", ["number"]);
var widget_t_get_prop_auto_adjust_size = Module.cwrap("widget_t_get_prop_auto_adjust_size", "number", ["number"]);
var widget_t_get_prop_floating = Module.cwrap("widget_t_get_prop_floating", "number", ["number"]);
var widget_t_get_prop_dirty_rect_tolerance = Module.cwrap("widget_t_get_prop_dirty_rect_tolerance", "number", ["number"]);
var widget_t_get_prop_parent = Module.cwrap("widget_t_get_prop_parent", "number", ["number"]);
var app_conf_save = Module.cwrap("app_conf_save", "number", []);
var app_conf_reload = Module.cwrap("app_conf_reload", "number", []);
var app_conf_deinit = Module.cwrap("app_conf_deinit", "number", []);
var app_conf_exist = Module.cwrap("app_conf_exist", "number", ["string"]);
var app_conf_set_int = Module.cwrap("app_conf_set_int", "number", ["string", "number"]);
var app_conf_set_int64 = Module.cwrap("app_conf_set_int64", "number", ["string", "number"]);
var app_conf_set_bool = Module.cwrap("app_conf_set_bool", "number", ["string", "number"]);
var app_conf_set_double = Module.cwrap("app_conf_set_double", "number", ["string", "number"]);
var app_conf_set_str = Module.cwrap("app_conf_set_str", "number", ["string", "string"]);
var app_conf_get_int = Module.cwrap("app_conf_get_int", "number", ["string", "number"]);
var app_conf_get_int64 = Module.cwrap("app_conf_get_int64", "number", ["string", "number"]);
var app_conf_get_bool = Module.cwrap("app_conf_get_bool", "number", ["string", "number"]);
var app_conf_get_double = Module.cwrap("app_conf_get_double", "number", ["string", "number"]);
var app_conf_get_str = Module.cwrap("app_conf_get_str", "string", ["string", "string"]);
var app_conf_remove = Module.cwrap("app_conf_remove", "number", ["string"]);
var get_RET_OK = Module.cwrap("get_RET_OK", "number", []);
var get_RET_OOM = Module.cwrap("get_RET_OOM", "number", []);
var get_RET_FAIL = Module.cwrap("get_RET_FAIL", "number", []);
var get_RET_NOT_IMPL = Module.cwrap("get_RET_NOT_IMPL", "number", []);
var get_RET_QUIT = Module.cwrap("get_RET_QUIT", "number", []);
var get_RET_FOUND = Module.cwrap("get_RET_FOUND", "number", []);
var get_RET_BUSY = Module.cwrap("get_RET_BUSY", "number", []);
var get_RET_REMOVE = Module.cwrap("get_RET_REMOVE", "number", []);
var get_RET_REPEAT = Module.cwrap("get_RET_REPEAT", "number", []);
var get_RET_NOT_FOUND = Module.cwrap("get_RET_NOT_FOUND", "number", []);
var get_RET_DONE = Module.cwrap("get_RET_DONE", "number", []);
var get_RET_STOP = Module.cwrap("get_RET_STOP", "number", []);
var get_RET_SKIP = Module.cwrap("get_RET_SKIP", "number", []);
var get_RET_CONTINUE = Module.cwrap("get_RET_CONTINUE", "number", []);
var get_RET_OBJECT_CHANGED = Module.cwrap("get_RET_OBJECT_CHANGED", "number", []);
var get_RET_ITEMS_CHANGED = Module.cwrap("get_RET_ITEMS_CHANGED", "number", []);
var get_RET_BAD_PARAMS = Module.cwrap("get_RET_BAD_PARAMS", "number", []);
var get_RET_TIMEOUT = Module.cwrap("get_RET_TIMEOUT", "number", []);
var get_RET_CRC = Module.cwrap("get_RET_CRC", "number", []);
var get_RET_IO = Module.cwrap("get_RET_IO", "number", []);
var get_RET_EOS = Module.cwrap("get_RET_EOS", "number", []);
var time_now_s = Module.cwrap("time_now_s", "number", []);
var time_now_ms = Module.cwrap("time_now_ms", "number", []);
var get_BIDI_TYPE_AUTO = Module.cwrap("get_BIDI_TYPE_AUTO", "number", []);
var get_BIDI_TYPE_LTR = Module.cwrap("get_BIDI_TYPE_LTR", "number", []);
var get_BIDI_TYPE_RTL = Module.cwrap("get_BIDI_TYPE_RTL", "number", []);
var get_BIDI_TYPE_LRO = Module.cwrap("get_BIDI_TYPE_LRO", "number", []);
var get_BIDI_TYPE_RLO = Module.cwrap("get_BIDI_TYPE_RLO", "number", []);
var get_BIDI_TYPE_WLTR = Module.cwrap("get_BIDI_TYPE_WLTR", "number", []);
var get_BIDI_TYPE_WRTL = Module.cwrap("get_BIDI_TYPE_WRTL", "number", []);
var get_OBJECT_PROP_SIZE = Module.cwrap("get_OBJECT_PROP_SIZE", "string", []);
var get_OBJECT_PROP_CHECKED = Module.cwrap("get_OBJECT_PROP_CHECKED", "string", []);
var get_OBJECT_CMD_SAVE = Module.cwrap("get_OBJECT_CMD_SAVE", "string", []);
var get_OBJECT_CMD_RELOAD = Module.cwrap("get_OBJECT_CMD_RELOAD", "string", []);
var get_OBJECT_CMD_MOVE_UP = Module.cwrap("get_OBJECT_CMD_MOVE_UP", "string", []);
var get_OBJECT_CMD_MOVE_DOWN = Module.cwrap("get_OBJECT_CMD_MOVE_DOWN", "string", []);
var get_OBJECT_CMD_REMOVE = Module.cwrap("get_OBJECT_CMD_REMOVE", "string", []);
var get_OBJECT_CMD_REMOVE_CHECKED = Module.cwrap("get_OBJECT_CMD_REMOVE_CHECKED", "string", []);
var get_OBJECT_CMD_CLEAR = Module.cwrap("get_OBJECT_CMD_CLEAR", "string", []);
var get_OBJECT_CMD_ADD = Module.cwrap("get_OBJECT_CMD_ADD", "string", []);
var get_OBJECT_CMD_DETAIL = Module.cwrap("get_OBJECT_CMD_DETAIL", "string", []);
var get_OBJECT_CMD_EDIT = Module.cwrap("get_OBJECT_CMD_EDIT", "string", []);
var get_IMAGE_DRAW_DEFAULT = Module.cwrap("get_IMAGE_DRAW_DEFAULT", "number", []);
var get_IMAGE_DRAW_CENTER = Module.cwrap("get_IMAGE_DRAW_CENTER", "number", []);
var get_IMAGE_DRAW_ICON = Module.cwrap("get_IMAGE_DRAW_ICON", "number", []);
var get_IMAGE_DRAW_SCALE = Module.cwrap("get_IMAGE_DRAW_SCALE", "number", []);
var get_IMAGE_DRAW_SCALE_AUTO = Module.cwrap("get_IMAGE_DRAW_SCALE_AUTO", "number", []);
var get_IMAGE_DRAW_SCALE_DOWN = Module.cwrap("get_IMAGE_DRAW_SCALE_DOWN", "number", []);
var get_IMAGE_DRAW_SCALE_W = Module.cwrap("get_IMAGE_DRAW_SCALE_W", "number", []);
var get_IMAGE_DRAW_SCALE_H = Module.cwrap("get_IMAGE_DRAW_SCALE_H", "number", []);
var get_IMAGE_DRAW_REPEAT = Module.cwrap("get_IMAGE_DRAW_REPEAT", "number", []);
var get_IMAGE_DRAW_REPEAT_X = Module.cwrap("get_IMAGE_DRAW_REPEAT_X", "number", []);
var get_IMAGE_DRAW_REPEAT_Y = Module.cwrap("get_IMAGE_DRAW_REPEAT_Y", "number", []);
var get_IMAGE_DRAW_REPEAT_Y_INVERSE = Module.cwrap("get_IMAGE_DRAW_REPEAT_Y_INVERSE", "number", []);
var get_IMAGE_DRAW_PATCH9 = Module.cwrap("get_IMAGE_DRAW_PATCH9", "number", []);
var get_IMAGE_DRAW_PATCH3_X = Module.cwrap("get_IMAGE_DRAW_PATCH3_X", "number", []);
var get_IMAGE_DRAW_PATCH3_Y = Module.cwrap("get_IMAGE_DRAW_PATCH3_Y", "number", []);
var get_IMAGE_DRAW_PATCH3_X_SCALE_Y = Module.cwrap("get_IMAGE_DRAW_PATCH3_X_SCALE_Y", "number", []);
var get_IMAGE_DRAW_PATCH3_Y_SCALE_X = Module.cwrap("get_IMAGE_DRAW_PATCH3_Y_SCALE_X", "number", []);
var get_IMAGE_DRAW_REPEAT9 = Module.cwrap("get_IMAGE_DRAW_REPEAT9", "number", []);
var get_IMAGE_DRAW_REPEAT3_X = Module.cwrap("get_IMAGE_DRAW_REPEAT3_X", "number", []);
var get_IMAGE_DRAW_REPEAT3_Y = Module.cwrap("get_IMAGE_DRAW_REPEAT3_Y", "number", []);
var named_value_create = Module.cwrap("named_value_create", "number", []);
var named_value_cast = Module.cwrap("named_value_cast", "number", ["number"]);
var named_value_set_name = Module.cwrap("named_value_set_name", "number", ["number", "string"]);
var named_value_set_value = Module.cwrap("named_value_set_value", "number", ["number", "number"]);
var named_value_get_value = Module.cwrap("named_value_get_value", "number", ["number"]);
var named_value_destroy = Module.cwrap("named_value_destroy", "number", ["number"]);
var named_value_t_get_prop_name = Module.cwrap("named_value_t_get_prop_name", "string", ["number"]);
var get_MIME_TYPE_APPLICATION_ENVOY = Module.cwrap("get_MIME_TYPE_APPLICATION_ENVOY", "string", []);
var get_MIME_TYPE_APPLICATION_FRACTALS = Module.cwrap("get_MIME_TYPE_APPLICATION_FRACTALS", "string", []);
var get_MIME_TYPE_APPLICATION_FUTURESPLASH = Module.cwrap("get_MIME_TYPE_APPLICATION_FUTURESPLASH", "string", []);
var get_MIME_TYPE_APPLICATION_HTA = Module.cwrap("get_MIME_TYPE_APPLICATION_HTA", "string", []);
var get_MIME_TYPE_APPLICATION_JSON = Module.cwrap("get_MIME_TYPE_APPLICATION_JSON", "string", []);
var get_MIME_TYPE_APPLICATION_UBJSON = Module.cwrap("get_MIME_TYPE_APPLICATION_UBJSON", "string", []);
var get_MIME_TYPE_APPLICATION_MAC_BINHEX40 = Module.cwrap("get_MIME_TYPE_APPLICATION_MAC_BINHEX40", "string", []);
var get_MIME_TYPE_APPLICATION_MSWORD = Module.cwrap("get_MIME_TYPE_APPLICATION_MSWORD", "string", []);
var get_MIME_TYPE_APPLICATION_OCTET_STREAM = Module.cwrap("get_MIME_TYPE_APPLICATION_OCTET_STREAM", "string", []);
var get_MIME_TYPE_APPLICATION_ODA = Module.cwrap("get_MIME_TYPE_APPLICATION_ODA", "string", []);
var get_MIME_TYPE_APPLICATION_OLESCRIPT = Module.cwrap("get_MIME_TYPE_APPLICATION_OLESCRIPT", "string", []);
var get_MIME_TYPE_APPLICATION_PDF = Module.cwrap("get_MIME_TYPE_APPLICATION_PDF", "string", []);
var get_MIME_TYPE_APPLICATION_PICS_RULES = Module.cwrap("get_MIME_TYPE_APPLICATION_PICS_RULES", "string", []);
var get_MIME_TYPE_APPLICATION_PKCS10 = Module.cwrap("get_MIME_TYPE_APPLICATION_PKCS10", "string", []);
var get_MIME_TYPE_APPLICATION_PKIX_CRL = Module.cwrap("get_MIME_TYPE_APPLICATION_PKIX_CRL", "string", []);
var get_MIME_TYPE_APPLICATION_POSTSCRIPT = Module.cwrap("get_MIME_TYPE_APPLICATION_POSTSCRIPT", "string", []);
var get_MIME_TYPE_APPLICATION_RTF = Module.cwrap("get_MIME_TYPE_APPLICATION_RTF", "string", []);
var get_MIME_TYPE_APPLICATION_VND_MS_EXCEL = Module.cwrap("get_MIME_TYPE_APPLICATION_VND_MS_EXCEL", "string", []);
var get_MIME_TYPE_APPLICATION_VND_MS_OUTLOOK = Module.cwrap("get_MIME_TYPE_APPLICATION_VND_MS_OUTLOOK", "string", []);
var get_MIME_TYPE_APPLICATION_VND_MS_PKICERTSTORE = Module.cwrap("get_MIME_TYPE_APPLICATION_VND_MS_PKICERTSTORE", "string", []);
var get_MIME_TYPE_APPLICATION_VND_MS_PKISECCAT = Module.cwrap("get_MIME_TYPE_APPLICATION_VND_MS_PKISECCAT", "string", []);
var get_MIME_TYPE_APPLICATION_VND_MS_PKISTL = Module.cwrap("get_MIME_TYPE_APPLICATION_VND_MS_PKISTL", "string", []);
var get_MIME_TYPE_APPLICATION_VND_MS_POWERPOINT = Module.cwrap("get_MIME_TYPE_APPLICATION_VND_MS_POWERPOINT", "string", []);
var get_MIME_TYPE_APPLICATION_VND_MS_PROJECT = Module.cwrap("get_MIME_TYPE_APPLICATION_VND_MS_PROJECT", "string", []);
var get_MIME_TYPE_APPLICATION_VND_MS_WORKS = Module.cwrap("get_MIME_TYPE_APPLICATION_VND_MS_WORKS", "string", []);
var get_MIME_TYPE_APPLICATION_WINHLP = Module.cwrap("get_MIME_TYPE_APPLICATION_WINHLP", "string", []);
var get_MIME_TYPE_APPLICATION_X_BCPIO = Module.cwrap("get_MIME_TYPE_APPLICATION_X_BCPIO", "string", []);
var get_MIME_TYPE_APPLICATION_X_CDF = Module.cwrap("get_MIME_TYPE_APPLICATION_X_CDF", "string", []);
var get_MIME_TYPE_APPLICATION_X_COMPRESS = Module.cwrap("get_MIME_TYPE_APPLICATION_X_COMPRESS", "string", []);
var get_MIME_TYPE_APPLICATION_X_COMPRESSED = Module.cwrap("get_MIME_TYPE_APPLICATION_X_COMPRESSED", "string", []);
var get_MIME_TYPE_APPLICATION_X_CPIO = Module.cwrap("get_MIME_TYPE_APPLICATION_X_CPIO", "string", []);
var get_MIME_TYPE_APPLICATION_X_CSH = Module.cwrap("get_MIME_TYPE_APPLICATION_X_CSH", "string", []);
var get_MIME_TYPE_APPLICATION_X_DIRECTOR = Module.cwrap("get_MIME_TYPE_APPLICATION_X_DIRECTOR", "string", []);
var get_MIME_TYPE_APPLICATION_X_DVI = Module.cwrap("get_MIME_TYPE_APPLICATION_X_DVI", "string", []);
var get_MIME_TYPE_APPLICATION_X_GTAR = Module.cwrap("get_MIME_TYPE_APPLICATION_X_GTAR", "string", []);
var get_MIME_TYPE_APPLICATION_X_GZIP = Module.cwrap("get_MIME_TYPE_APPLICATION_X_GZIP", "string", []);
var get_MIME_TYPE_APPLICATION_X_HDF = Module.cwrap("get_MIME_TYPE_APPLICATION_X_HDF", "string", []);
var get_MIME_TYPE_APPLICATION_X_IPHONE = Module.cwrap("get_MIME_TYPE_APPLICATION_X_IPHONE", "string", []);
var get_MIME_TYPE_APPLICATION_X_JAVASCRIPT = Module.cwrap("get_MIME_TYPE_APPLICATION_X_JAVASCRIPT", "string", []);
var get_MIME_TYPE_APPLICATION_X_LATEX = Module.cwrap("get_MIME_TYPE_APPLICATION_X_LATEX", "string", []);
var get_MIME_TYPE_APPLICATION_X_MSACCESS = Module.cwrap("get_MIME_TYPE_APPLICATION_X_MSACCESS", "string", []);
var get_MIME_TYPE_APPLICATION_X_MSCARDFILE = Module.cwrap("get_MIME_TYPE_APPLICATION_X_MSCARDFILE", "string", []);
var get_MIME_TYPE_APPLICATION_X_MSCLIP = Module.cwrap("get_MIME_TYPE_APPLICATION_X_MSCLIP", "string", []);
var get_MIME_TYPE_APPLICATION_X_MSDOWNLOAD = Module.cwrap("get_MIME_TYPE_APPLICATION_X_MSDOWNLOAD", "string", []);
var get_MIME_TYPE_APPLICATION_X_MSMEDIAVIEW = Module.cwrap("get_MIME_TYPE_APPLICATION_X_MSMEDIAVIEW", "string", []);
var get_MIME_TYPE_APPLICATION_X_MSMETAFILE = Module.cwrap("get_MIME_TYPE_APPLICATION_X_MSMETAFILE", "string", []);
var get_MIME_TYPE_APPLICATION_X_MSMONEY = Module.cwrap("get_MIME_TYPE_APPLICATION_X_MSMONEY", "string", []);
var get_MIME_TYPE_APPLICATION_X_MSPUBLISHER = Module.cwrap("get_MIME_TYPE_APPLICATION_X_MSPUBLISHER", "string", []);
var get_MIME_TYPE_APPLICATION_X_MSSCHEDULE = Module.cwrap("get_MIME_TYPE_APPLICATION_X_MSSCHEDULE", "string", []);
var get_MIME_TYPE_APPLICATION_X_MSTERMINAL = Module.cwrap("get_MIME_TYPE_APPLICATION_X_MSTERMINAL", "string", []);
var get_MIME_TYPE_APPLICATION_X_MSWRITE = Module.cwrap("get_MIME_TYPE_APPLICATION_X_MSWRITE", "string", []);
var get_MIME_TYPE_APPLICATION_X_NETCDF = Module.cwrap("get_MIME_TYPE_APPLICATION_X_NETCDF", "string", []);
var get_MIME_TYPE_APPLICATION_X_PERFMON = Module.cwrap("get_MIME_TYPE_APPLICATION_X_PERFMON", "string", []);
var get_MIME_TYPE_APPLICATION_X_PKCS12 = Module.cwrap("get_MIME_TYPE_APPLICATION_X_PKCS12", "string", []);
var get_MIME_TYPE_APPLICATION_X_SH = Module.cwrap("get_MIME_TYPE_APPLICATION_X_SH", "string", []);
var get_MIME_TYPE_APPLICATION_X_SHAR = Module.cwrap("get_MIME_TYPE_APPLICATION_X_SHAR", "string", []);
var get_MIME_TYPE_APPLICATION_X_SHOCKWAVE_FLASH = Module.cwrap("get_MIME_TYPE_APPLICATION_X_SHOCKWAVE_FLASH", "string", []);
var get_MIME_TYPE_APPLICATION_X_STUFFIT = Module.cwrap("get_MIME_TYPE_APPLICATION_X_STUFFIT", "string", []);
var get_MIME_TYPE_APPLICATION_X_SV4CPIO = Module.cwrap("get_MIME_TYPE_APPLICATION_X_SV4CPIO", "string", []);
var get_MIME_TYPE_APPLICATION_X_SV4CRC = Module.cwrap("get_MIME_TYPE_APPLICATION_X_SV4CRC", "string", []);
var get_MIME_TYPE_APPLICATION_X_TAR = Module.cwrap("get_MIME_TYPE_APPLICATION_X_TAR", "string", []);
var get_MIME_TYPE_APPLICATION_X_TCL = Module.cwrap("get_MIME_TYPE_APPLICATION_X_TCL", "string", []);
var get_MIME_TYPE_APPLICATION_X_TEX = Module.cwrap("get_MIME_TYPE_APPLICATION_X_TEX", "string", []);
var get_MIME_TYPE_APPLICATION_X_TEXINFO = Module.cwrap("get_MIME_TYPE_APPLICATION_X_TEXINFO", "string", []);
var get_MIME_TYPE_APPLICATION_X_TROFF = Module.cwrap("get_MIME_TYPE_APPLICATION_X_TROFF", "string", []);
var get_MIME_TYPE_APPLICATION_X_USTAR = Module.cwrap("get_MIME_TYPE_APPLICATION_X_USTAR", "string", []);
var get_MIME_TYPE_APPLICATION_ZIP = Module.cwrap("get_MIME_TYPE_APPLICATION_ZIP", "string", []);
var get_MIME_TYPE_AUDIO_BASIC = Module.cwrap("get_MIME_TYPE_AUDIO_BASIC", "string", []);
var get_MIME_TYPE_AUDIO_MID = Module.cwrap("get_MIME_TYPE_AUDIO_MID", "string", []);
var get_MIME_TYPE_AUDIO_MPEG = Module.cwrap("get_MIME_TYPE_AUDIO_MPEG", "string", []);
var get_MIME_TYPE_AUDIO_X_AIFF = Module.cwrap("get_MIME_TYPE_AUDIO_X_AIFF", "string", []);
var get_MIME_TYPE_AUDIO_X_MPEGURL = Module.cwrap("get_MIME_TYPE_AUDIO_X_MPEGURL", "string", []);
var get_MIME_TYPE_AUDIO_X_WAV = Module.cwrap("get_MIME_TYPE_AUDIO_X_WAV", "string", []);
var get_MIME_TYPE_IMAGE_BMP = Module.cwrap("get_MIME_TYPE_IMAGE_BMP", "string", []);
var get_MIME_TYPE_IMAGE_CIS_COD = Module.cwrap("get_MIME_TYPE_IMAGE_CIS_COD", "string", []);
var get_MIME_TYPE_IMAGE_GIF = Module.cwrap("get_MIME_TYPE_IMAGE_GIF", "string", []);
var get_MIME_TYPE_IMAGE_IEF = Module.cwrap("get_MIME_TYPE_IMAGE_IEF", "string", []);
var get_MIME_TYPE_IMAGE_JPEG = Module.cwrap("get_MIME_TYPE_IMAGE_JPEG", "string", []);
var get_MIME_TYPE_IMAGE_PIPEG = Module.cwrap("get_MIME_TYPE_IMAGE_PIPEG", "string", []);
var get_MIME_TYPE_IMAGE_SVG_XML = Module.cwrap("get_MIME_TYPE_IMAGE_SVG_XML", "string", []);
var get_MIME_TYPE_IMAGE_TIFF = Module.cwrap("get_MIME_TYPE_IMAGE_TIFF", "string", []);
var get_MIME_TYPE_IMAGE_X_CMX = Module.cwrap("get_MIME_TYPE_IMAGE_X_CMX", "string", []);
var get_MIME_TYPE_IMAGE_X_ICON = Module.cwrap("get_MIME_TYPE_IMAGE_X_ICON", "string", []);
var get_MIME_TYPE_IMAGE_X_RGB = Module.cwrap("get_MIME_TYPE_IMAGE_X_RGB", "string", []);
var get_MIME_TYPE_IMAGE_X_XBITMAP = Module.cwrap("get_MIME_TYPE_IMAGE_X_XBITMAP", "string", []);
var get_MIME_TYPE_IMAGE_X_XPIXMAP = Module.cwrap("get_MIME_TYPE_IMAGE_X_XPIXMAP", "string", []);
var get_MIME_TYPE_IMAGE_X_XWINDOWDUMP = Module.cwrap("get_MIME_TYPE_IMAGE_X_XWINDOWDUMP", "string", []);
var get_MIME_TYPE_MESSAGE_RFC822 = Module.cwrap("get_MIME_TYPE_MESSAGE_RFC822", "string", []);
var get_MIME_TYPE_TEXT_CSS = Module.cwrap("get_MIME_TYPE_TEXT_CSS", "string", []);
var get_MIME_TYPE_TEXT_H323 = Module.cwrap("get_MIME_TYPE_TEXT_H323", "string", []);
var get_MIME_TYPE_TEXT_HTML = Module.cwrap("get_MIME_TYPE_TEXT_HTML", "string", []);
var get_MIME_TYPE_TEXT_IULS = Module.cwrap("get_MIME_TYPE_TEXT_IULS", "string", []);
var get_MIME_TYPE_TEXT_PLAIN = Module.cwrap("get_MIME_TYPE_TEXT_PLAIN", "string", []);
var get_MIME_TYPE_TEXT_RICHTEXT = Module.cwrap("get_MIME_TYPE_TEXT_RICHTEXT", "string", []);
var get_MIME_TYPE_TEXT_SCRIPTLET = Module.cwrap("get_MIME_TYPE_TEXT_SCRIPTLET", "string", []);
var get_MIME_TYPE_TEXT_WEBVIEWHTML = Module.cwrap("get_MIME_TYPE_TEXT_WEBVIEWHTML", "string", []);
var get_MIME_TYPE_TEXT_X_COMPONENT = Module.cwrap("get_MIME_TYPE_TEXT_X_COMPONENT", "string", []);
var get_MIME_TYPE_TEXT_X_SETEXT = Module.cwrap("get_MIME_TYPE_TEXT_X_SETEXT", "string", []);
var get_MIME_TYPE_TEXT_X_VCARD = Module.cwrap("get_MIME_TYPE_TEXT_X_VCARD", "string", []);
var get_MIME_TYPE_VIDEO_MPEG = Module.cwrap("get_MIME_TYPE_VIDEO_MPEG", "string", []);
var get_MIME_TYPE_VIDEO_QUICKTIME = Module.cwrap("get_MIME_TYPE_VIDEO_QUICKTIME", "string", []);
var get_MIME_TYPE_VIDEO_X_MSVIDEO = Module.cwrap("get_MIME_TYPE_VIDEO_X_MSVIDEO", "string", []);
var get_INDICATOR_DEFAULT_PAINT_AUTO = Module.cwrap("get_INDICATOR_DEFAULT_PAINT_AUTO", "number", []);
var get_INDICATOR_DEFAULT_PAINT_FILL_DOT = Module.cwrap("get_INDICATOR_DEFAULT_PAINT_FILL_DOT", "number", []);
var get_INDICATOR_DEFAULT_PAINT_STROKE_DOT = Module.cwrap("get_INDICATOR_DEFAULT_PAINT_STROKE_DOT", "number", []);
var get_INDICATOR_DEFAULT_PAINT_FILL_RECT = Module.cwrap("get_INDICATOR_DEFAULT_PAINT_FILL_RECT", "number", []);
var get_INDICATOR_DEFAULT_PAINT_STROKE_RECT = Module.cwrap("get_INDICATOR_DEFAULT_PAINT_STROKE_RECT", "number", []);
var canvas_get_width = Module.cwrap("canvas_get_width", "number", ["number"]);
var canvas_get_height = Module.cwrap("canvas_get_height", "number", ["number"]);
var canvas_get_clip_rect = Module.cwrap("canvas_get_clip_rect", "number", ["number", "number"]);
var canvas_set_clip_rect = Module.cwrap("canvas_set_clip_rect", "number", ["number", "number"]);
var canvas_set_clip_rect_ex = Module.cwrap("canvas_set_clip_rect_ex", "number", ["number", "number", "number"]);
var canvas_set_fill_color_str = Module.cwrap("canvas_set_fill_color_str", "number", ["number", "string"]);
var canvas_set_text_color_str = Module.cwrap("canvas_set_text_color_str", "number", ["number", "string"]);
var canvas_set_stroke_color_str = Module.cwrap("canvas_set_stroke_color_str", "number", ["number", "string"]);
var canvas_set_global_alpha = Module.cwrap("canvas_set_global_alpha", "number", ["number", "number"]);
var canvas_translate = Module.cwrap("canvas_translate", "number", ["number", "number", "number"]);
var canvas_untranslate = Module.cwrap("canvas_untranslate", "number", ["number", "number", "number"]);
var canvas_draw_vline = Module.cwrap("canvas_draw_vline", "number", ["number", "number", "number", "number"]);
var canvas_draw_hline = Module.cwrap("canvas_draw_hline", "number", ["number", "number", "number", "number"]);
var canvas_fill_rect = Module.cwrap("canvas_fill_rect", "number", ["number", "number", "number", "number", "number"]);
var canvas_clear_rect = Module.cwrap("canvas_clear_rect", "number", ["number", "number", "number", "number", "number"]);
var canvas_stroke_rect = Module.cwrap("canvas_stroke_rect", "number", ["number", "number", "number", "number", "number"]);
var canvas_set_font = Module.cwrap("canvas_set_font", "number", ["number", "string", "number"]);
var canvas_measure_utf8 = Module.cwrap("canvas_measure_utf8", "number", ["number", "string"]);
var canvas_draw_utf8 = Module.cwrap("canvas_draw_utf8", "number", ["number", "string", "number", "number"]);
var canvas_draw_utf8_in_rect = Module.cwrap("canvas_draw_utf8_in_rect", "number", ["number", "string", "number"]);
var canvas_draw_icon = Module.cwrap("canvas_draw_icon", "number", ["number", "number", "number", "number"]);
var canvas_draw_image = Module.cwrap("canvas_draw_image", "number", ["number", "number", "number", "number"]);
var canvas_draw_image_ex = Module.cwrap("canvas_draw_image_ex", "number", ["number", "number", "number", "number"]);
var canvas_draw_image_ex2 = Module.cwrap("canvas_draw_image_ex2", "number", ["number", "number", "number", "number", "number"]);
var canvas_get_vgcanvas = Module.cwrap("canvas_get_vgcanvas", "number", ["number"]);
var canvas_cast = Module.cwrap("canvas_cast", "number", ["number"]);
var canvas_reset = Module.cwrap("canvas_reset", "number", ["number"]);
var canvas_t_get_prop_ox = Module.cwrap("canvas_t_get_prop_ox", "number", ["number"]);
var canvas_t_get_prop_oy = Module.cwrap("canvas_t_get_prop_oy", "number", ["number"]);
var canvas_t_get_prop_font_name = Module.cwrap("canvas_t_get_prop_font_name", "string", ["number"]);
var canvas_t_get_prop_font_size = Module.cwrap("canvas_t_get_prop_font_size", "number", ["number"]);
var canvas_t_get_prop_global_alpha = Module.cwrap("canvas_t_get_prop_global_alpha", "number", ["number"]);
var get_EASING_LINEAR = Module.cwrap("get_EASING_LINEAR", "number", []);
var get_EASING_QUADRATIC_IN = Module.cwrap("get_EASING_QUADRATIC_IN", "number", []);
var get_EASING_QUADRATIC_OUT = Module.cwrap("get_EASING_QUADRATIC_OUT", "number", []);
var get_EASING_QUADRATIC_INOUT = Module.cwrap("get_EASING_QUADRATIC_INOUT", "number", []);
var get_EASING_CUBIC_IN = Module.cwrap("get_EASING_CUBIC_IN", "number", []);
var get_EASING_CUBIC_OUT = Module.cwrap("get_EASING_CUBIC_OUT", "number", []);
var get_EASING_SIN_IN = Module.cwrap("get_EASING_SIN_IN", "number", []);
var get_EASING_SIN_OUT = Module.cwrap("get_EASING_SIN_OUT", "number", []);
var get_EASING_SIN_INOUT = Module.cwrap("get_EASING_SIN_INOUT", "number", []);
var get_EASING_POW_IN = Module.cwrap("get_EASING_POW_IN", "number", []);
var get_EASING_POW_OUT = Module.cwrap("get_EASING_POW_OUT", "number", []);
var get_EASING_POW_INOUT = Module.cwrap("get_EASING_POW_INOUT", "number", []);
var get_EASING_CIRCULAR_IN = Module.cwrap("get_EASING_CIRCULAR_IN", "number", []);
var get_EASING_CIRCULAR_OUT = Module.cwrap("get_EASING_CIRCULAR_OUT", "number", []);
var get_EASING_CIRCULAR_INOUT = Module.cwrap("get_EASING_CIRCULAR_INOUT", "number", []);
var get_EASING_ELASTIC_IN = Module.cwrap("get_EASING_ELASTIC_IN", "number", []);
var get_EASING_ELASTIC_OUT = Module.cwrap("get_EASING_ELASTIC_OUT", "number", []);
var get_EASING_ELASTIC_INOUT = Module.cwrap("get_EASING_ELASTIC_INOUT", "number", []);
var get_EASING_BACK_IN = Module.cwrap("get_EASING_BACK_IN", "number", []);
var get_EASING_BACK_OUT = Module.cwrap("get_EASING_BACK_OUT", "number", []);
var get_EASING_BACK_INOUT = Module.cwrap("get_EASING_BACK_INOUT", "number", []);
var get_EASING_BOUNCE_IN = Module.cwrap("get_EASING_BOUNCE_IN", "number", []);
var get_EASING_BOUNCE_OUT = Module.cwrap("get_EASING_BOUNCE_OUT", "number", []);
var get_EASING_BOUNCE_INOUT = Module.cwrap("get_EASING_BOUNCE_INOUT", "number", []);
var date_time_create = Module.cwrap("date_time_create", "number", []);
var date_time_set = Module.cwrap("date_time_set", "number", ["number"]);
var date_time_from_time = Module.cwrap("date_time_from_time", "number", ["number", "number"]);
var date_time_is_leap = Module.cwrap("date_time_is_leap", "number", ["number"]);
var date_time_get_days = Module.cwrap("date_time_get_days", "number", ["number", "number"]);
var date_time_get_wday = Module.cwrap("date_time_get_wday", "number", ["number", "number", "number"]);
var date_time_get_month_name = Module.cwrap("date_time_get_month_name", "string", ["number"]);
var date_time_get_wday_name = Module.cwrap("date_time_get_wday_name", "string", ["number"]);
var date_time_destroy = Module.cwrap("date_time_destroy", "number", ["number"]);
var date_time_t_get_prop_second = Module.cwrap("date_time_t_get_prop_second", "number", ["number"]);
var date_time_t_get_prop_minute = Module.cwrap("date_time_t_get_prop_minute", "number", ["number"]);
var date_time_t_get_prop_hour = Module.cwrap("date_time_t_get_prop_hour", "number", ["number"]);
var date_time_t_get_prop_day = Module.cwrap("date_time_t_get_prop_day", "number", ["number"]);
var date_time_t_get_prop_wday = Module.cwrap("date_time_t_get_prop_wday", "number", ["number"]);
var date_time_t_get_prop_month = Module.cwrap("date_time_t_get_prop_month", "number", ["number"]);
var date_time_t_get_prop_year = Module.cwrap("date_time_t_get_prop_year", "number", ["number"]);
var color_create = Module.cwrap("color_create", "number", ["number", "number", "number", "number"]);
var color_from_str = Module.cwrap("color_from_str", "number", ["number", "string"]);
var color_r = Module.cwrap("color_r", "number", ["number"]);
var color_g = Module.cwrap("color_g", "number", ["number"]);
var color_b = Module.cwrap("color_b", "number", ["number"]);
var color_a = Module.cwrap("color_a", "number", ["number"]);
var color_cast = Module.cwrap("color_cast", "number", ["number"]);
var color_destroy = Module.cwrap("color_destroy", "number", ["number"]);
var color_t_get_prop_color = Module.cwrap("color_t_get_prop_color", "number", ["number"]);
var color_t_set_prop_color = Module.cwrap("color_t_set_prop_color", "number", ["number", "number"]);
var asset_info_t_get_prop_type = Module.cwrap("asset_info_t_get_prop_type", "number", ["number"]);
var asset_info_t_get_prop_subtype = Module.cwrap("asset_info_t_get_prop_subtype", "number", ["number"]);
var asset_info_t_get_prop_is_in_rom = Module.cwrap("asset_info_t_get_prop_is_in_rom", "number", ["number"]);
var asset_info_t_get_prop_size = Module.cwrap("asset_info_t_get_prop_size", "number", ["number"]);
var asset_info_t_get_prop_refcount = Module.cwrap("asset_info_t_get_prop_refcount", "number", ["number"]);
var asset_info_t_get_prop_name = Module.cwrap("asset_info_t_get_prop_name", "string", ["number"]);
var get_ASSET_TYPE_NONE = Module.cwrap("get_ASSET_TYPE_NONE", "number", []);
var get_ASSET_TYPE_FONT = Module.cwrap("get_ASSET_TYPE_FONT", "number", []);
var get_ASSET_TYPE_IMAGE = Module.cwrap("get_ASSET_TYPE_IMAGE", "number", []);
var get_ASSET_TYPE_STYLE = Module.cwrap("get_ASSET_TYPE_STYLE", "number", []);
var get_ASSET_TYPE_UI = Module.cwrap("get_ASSET_TYPE_UI", "number", []);
var get_ASSET_TYPE_XML = Module.cwrap("get_ASSET_TYPE_XML", "number", []);
var get_ASSET_TYPE_STRINGS = Module.cwrap("get_ASSET_TYPE_STRINGS", "number", []);
var get_ASSET_TYPE_SCRIPT = Module.cwrap("get_ASSET_TYPE_SCRIPT", "number", []);
var get_ASSET_TYPE_DATA = Module.cwrap("get_ASSET_TYPE_DATA", "number", []);
var guage_pointer_create = Module.cwrap("guage_pointer_create", "number", ["number", "number", "number", "number", "number"]);
var guage_pointer_cast = Module.cwrap("guage_pointer_cast", "number", ["number"]);
var guage_pointer_set_angle = Module.cwrap("guage_pointer_set_angle", "number", ["number", "number"]);
var guage_pointer_set_image = Module.cwrap("guage_pointer_set_image", "number", ["number", "string"]);
var guage_pointer_set_anchor = Module.cwrap("guage_pointer_set_anchor", "number", ["number", "string", "string"]);
var guage_pointer_t_get_prop_angle = Module.cwrap("guage_pointer_t_get_prop_angle", "number", ["number"]);
var guage_pointer_t_get_prop_image = Module.cwrap("guage_pointer_t_get_prop_image", "string", ["number"]);
var guage_pointer_t_get_prop_anchor_x = Module.cwrap("guage_pointer_t_get_prop_anchor_x", "string", ["number"]);
var guage_pointer_t_get_prop_anchor_y = Module.cwrap("guage_pointer_t_get_prop_anchor_y", "string", ["number"]);
var wheel_event_cast = Module.cwrap("wheel_event_cast", "number", ["number"]);
var wheel_event_t_get_prop_dy = Module.cwrap("wheel_event_t_get_prop_dy", "number", ["number"]);
var wheel_event_t_get_prop_alt = Module.cwrap("wheel_event_t_get_prop_alt", "number", ["number"]);
var wheel_event_t_get_prop_ctrl = Module.cwrap("wheel_event_t_get_prop_ctrl", "number", ["number"]);
var wheel_event_t_get_prop_shift = Module.cwrap("wheel_event_t_get_prop_shift", "number", ["number"]);
var view_create = Module.cwrap("view_create", "number", ["number", "number", "number", "number", "number"]);
var view_set_default_focused_child = Module.cwrap("view_set_default_focused_child", "number", ["number", "string"]);
var view_cast = Module.cwrap("view_cast", "number", ["number"]);
var view_t_get_prop_default_focused_child = Module.cwrap("view_t_get_prop_default_focused_child", "string", ["number"]);
var tab_control_create = Module.cwrap("tab_control_create", "number", ["number", "number", "number", "number", "number"]);
var tab_control_cast = Module.cwrap("tab_control_cast", "number", ["number"]);
var tab_button_create = Module.cwrap("tab_button_create", "number", ["number", "number", "number", "number", "number"]);
var tab_button_cast = Module.cwrap("tab_button_cast", "number", ["number"]);
var tab_button_set_value = Module.cwrap("tab_button_set_value", "number", ["number", "number"]);
var tab_button_set_icon = Module.cwrap("tab_button_set_icon", "number", ["number", "string"]);
var tab_button_set_active_icon = Module.cwrap("tab_button_set_active_icon", "number", ["number", "string"]);
var tab_button_set_load_ui = Module.cwrap("tab_button_set_load_ui", "number", ["number", "string"]);
var tab_button_t_get_prop_value = Module.cwrap("tab_button_t_get_prop_value", "number", ["number"]);
var tab_button_t_get_prop_load_ui = Module.cwrap("tab_button_t_get_prop_load_ui", "string", ["number"]);
var tab_button_t_get_prop_active_icon = Module.cwrap("tab_button_t_get_prop_active_icon", "string", ["number"]);
var tab_button_t_get_prop_icon = Module.cwrap("tab_button_t_get_prop_icon", "string", ["number"]);
var tab_button_group_create = Module.cwrap("tab_button_group_create", "number", ["number", "number", "number", "number", "number"]);
var tab_button_group_set_compact = Module.cwrap("tab_button_group_set_compact", "number", ["number", "number"]);
var tab_button_group_set_scrollable = Module.cwrap("tab_button_group_set_scrollable", "number", ["number", "number"]);
var tab_button_group_cast = Module.cwrap("tab_button_group_cast", "number", ["number"]);
var tab_button_group_t_get_prop_compact = Module.cwrap("tab_button_group_t_get_prop_compact", "number", ["number"]);
var tab_button_group_t_get_prop_scrollable = Module.cwrap("tab_button_group_t_get_prop_scrollable", "number", ["number"]);
var slider_create = Module.cwrap("slider_create", "number", ["number", "number", "number", "number", "number"]);
var slider_cast = Module.cwrap("slider_cast", "number", ["number"]);
var slider_set_value = Module.cwrap("slider_set_value", "number", ["number", "number"]);
var slider_set_min = Module.cwrap("slider_set_min", "number", ["number", "number"]);
var slider_set_max = Module.cwrap("slider_set_max", "number", ["number", "number"]);
var slider_set_step = Module.cwrap("slider_set_step", "number", ["number", "number"]);
var slider_set_bar_size = Module.cwrap("slider_set_bar_size", "number", ["number", "number"]);
var slider_set_vertical = Module.cwrap("slider_set_vertical", "number", ["number", "number"]);
var slider_t_get_prop_value = Module.cwrap("slider_t_get_prop_value", "number", ["number"]);
var slider_t_get_prop_min = Module.cwrap("slider_t_get_prop_min", "number", ["number"]);
var slider_t_get_prop_max = Module.cwrap("slider_t_get_prop_max", "number", ["number"]);
var slider_t_get_prop_step = Module.cwrap("slider_t_get_prop_step", "number", ["number"]);
var slider_t_get_prop_vertical = Module.cwrap("slider_t_get_prop_vertical", "number", ["number"]);
var slider_t_get_prop_bar_size = Module.cwrap("slider_t_get_prop_bar_size", "number", ["number"]);
var slider_t_get_prop_dragger_size = Module.cwrap("slider_t_get_prop_dragger_size", "number", ["number"]);
var slider_t_get_prop_dragger_adapt_to_icon = Module.cwrap("slider_t_get_prop_dragger_adapt_to_icon", "number", ["number"]);
var slider_t_get_prop_slide_with_bar = Module.cwrap("slider_t_get_prop_slide_with_bar", "number", ["number"]);
var row_create = Module.cwrap("row_create", "number", ["number", "number", "number", "number", "number"]);
var row_cast = Module.cwrap("row_cast", "number", ["number"]);
var progress_bar_create = Module.cwrap("progress_bar_create", "number", ["number", "number", "number", "number", "number"]);
var progress_bar_cast = Module.cwrap("progress_bar_cast", "number", ["number"]);
var progress_bar_set_value = Module.cwrap("progress_bar_set_value", "number", ["number", "number"]);
var progress_bar_set_max = Module.cwrap("progress_bar_set_max", "number", ["number", "number"]);
var progress_bar_set_vertical = Module.cwrap("progress_bar_set_vertical", "number", ["number", "number"]);
var progress_bar_set_show_text = Module.cwrap("progress_bar_set_show_text", "number", ["number", "number"]);
var progress_bar_get_percent = Module.cwrap("progress_bar_get_percent", "number", ["number"]);
var progress_bar_t_get_prop_value = Module.cwrap("progress_bar_t_get_prop_value", "number", ["number"]);
var progress_bar_t_get_prop_max = Module.cwrap("progress_bar_t_get_prop_max", "number", ["number"]);
var progress_bar_t_get_prop_vertical = Module.cwrap("progress_bar_t_get_prop_vertical", "number", ["number"]);
var progress_bar_t_get_prop_show_text = Module.cwrap("progress_bar_t_get_prop_show_text", "number", ["number"]);
var pages_create = Module.cwrap("pages_create", "number", ["number", "number", "number", "number", "number"]);
var pages_cast = Module.cwrap("pages_cast", "number", ["number"]);
var pages_set_active = Module.cwrap("pages_set_active", "number", ["number", "number"]);
var pages_set_active_by_name = Module.cwrap("pages_set_active_by_name", "number", ["number", "string"]);
var pages_t_get_prop_active = Module.cwrap("pages_t_get_prop_active", "number", ["number"]);
var label_create = Module.cwrap("label_create", "number", ["number", "number", "number", "number", "number"]);
var label_set_length = Module.cwrap("label_set_length", "number", ["number", "number"]);
var label_set_line_wrap = Module.cwrap("label_set_line_wrap", "number", ["number", "number"]);
var label_resize_to_content = Module.cwrap("label_resize_to_content", "number", ["number", "number", "number", "number", "number"]);
var label_cast = Module.cwrap("label_cast", "number", ["number"]);
var label_t_get_prop_length = Module.cwrap("label_t_get_prop_length", "number", ["number"]);
var label_t_get_prop_line_wrap = Module.cwrap("label_t_get_prop_line_wrap", "number", ["number"]);
var group_box_create = Module.cwrap("group_box_create", "number", ["number", "number", "number", "number", "number"]);
var group_box_cast = Module.cwrap("group_box_cast", "number", ["number"]);
var grid_create = Module.cwrap("grid_create", "number", ["number", "number", "number", "number", "number"]);
var grid_cast = Module.cwrap("grid_cast", "number", ["number"]);
var grid_item_create = Module.cwrap("grid_item_create", "number", ["number", "number", "number", "number", "number"]);
var grid_item_cast = Module.cwrap("grid_item_cast", "number", ["number"]);
var edit_create = Module.cwrap("edit_create", "number", ["number", "number", "number", "number", "number"]);
var edit_cast = Module.cwrap("edit_cast", "number", ["number"]);
var edit_get_int = Module.cwrap("edit_get_int", "number", ["number"]);
var edit_get_double = Module.cwrap("edit_get_double", "number", ["number"]);
var edit_set_int = Module.cwrap("edit_set_int", "number", ["number", "number"]);
var edit_set_double = Module.cwrap("edit_set_double", "number", ["number", "number"]);
var edit_set_text_limit = Module.cwrap("edit_set_text_limit", "number", ["number", "number", "number"]);
var edit_set_int_limit = Module.cwrap("edit_set_int_limit", "number", ["number", "number", "number", "number"]);
var edit_set_float_limit = Module.cwrap("edit_set_float_limit", "number", ["number", "number", "number", "number"]);
var edit_set_readonly = Module.cwrap("edit_set_readonly", "number", ["number", "number"]);
var edit_set_cancelable = Module.cwrap("edit_set_cancelable", "number", ["number", "number"]);
var edit_set_auto_fix = Module.cwrap("edit_set_auto_fix", "number", ["number", "number"]);
var edit_set_select_none_when_focused = Module.cwrap("edit_set_select_none_when_focused", "number", ["number", "number"]);
var edit_set_open_im_when_focused = Module.cwrap("edit_set_open_im_when_focused", "number", ["number", "number"]);
var edit_set_close_im_when_blured = Module.cwrap("edit_set_close_im_when_blured", "number", ["number", "number"]);
var edit_set_input_type = Module.cwrap("edit_set_input_type", "number", ["number", "number"]);
var edit_set_action_text = Module.cwrap("edit_set_action_text", "number", ["number", "string"]);
var edit_set_tips = Module.cwrap("edit_set_tips", "number", ["number", "string"]);
var edit_set_tr_tips = Module.cwrap("edit_set_tr_tips", "number", ["number", "string"]);
var edit_set_keyboard = Module.cwrap("edit_set_keyboard", "number", ["number", "string"]);
var edit_set_password_visible = Module.cwrap("edit_set_password_visible", "number", ["number", "number"]);
var edit_set_focus = Module.cwrap("edit_set_focus", "number", ["number", "number"]);
var edit_set_cursor = Module.cwrap("edit_set_cursor", "number", ["number", "number"]);
var edit_t_get_prop_readonly = Module.cwrap("edit_t_get_prop_readonly", "number", ["number"]);
var edit_t_get_prop_password_visible = Module.cwrap("edit_t_get_prop_password_visible", "number", ["number"]);
var edit_t_get_prop_auto_fix = Module.cwrap("edit_t_get_prop_auto_fix", "number", ["number"]);
var edit_t_get_prop_select_none_when_focused = Module.cwrap("edit_t_get_prop_select_none_when_focused", "number", ["number"]);
var edit_t_get_prop_open_im_when_focused = Module.cwrap("edit_t_get_prop_open_im_when_focused", "number", ["number"]);
var edit_t_get_prop_close_im_when_blured = Module.cwrap("edit_t_get_prop_close_im_when_blured", "number", ["number"]);
var edit_t_get_prop_top_margin = Module.cwrap("edit_t_get_prop_top_margin", "number", ["number"]);
var edit_t_get_prop_bottom_margin = Module.cwrap("edit_t_get_prop_bottom_margin", "number", ["number"]);
var edit_t_get_prop_left_margin = Module.cwrap("edit_t_get_prop_left_margin", "number", ["number"]);
var edit_t_get_prop_right_margin = Module.cwrap("edit_t_get_prop_right_margin", "number", ["number"]);
var edit_t_get_prop_tips = Module.cwrap("edit_t_get_prop_tips", "string", ["number"]);
var edit_t_get_prop_tr_tips = Module.cwrap("edit_t_get_prop_tr_tips", "string", ["number"]);
var edit_t_get_prop_action_text = Module.cwrap("edit_t_get_prop_action_text", "string", ["number"]);
var edit_t_get_prop_keyboard = Module.cwrap("edit_t_get_prop_keyboard", "string", ["number"]);
var edit_t_get_prop_input_type = Module.cwrap("edit_t_get_prop_input_type", "number", ["number"]);
var edit_t_get_prop_min = Module.cwrap("edit_t_get_prop_min", "number", ["number"]);
var edit_t_get_prop_max = Module.cwrap("edit_t_get_prop_max", "number", ["number"]);
var edit_t_get_prop_step = Module.cwrap("edit_t_get_prop_step", "number", ["number"]);
var edit_t_get_prop_cancelable = Module.cwrap("edit_t_get_prop_cancelable", "number", ["number"]);
var dragger_create = Module.cwrap("dragger_create", "number", ["number", "number", "number", "number", "number"]);
var dragger_cast = Module.cwrap("dragger_cast", "number", ["number"]);
var dragger_set_range = Module.cwrap("dragger_set_range", "number", ["number", "number", "number", "number", "number"]);
var dragger_t_get_prop_x_min = Module.cwrap("dragger_t_get_prop_x_min", "number", ["number"]);
var dragger_t_get_prop_y_min = Module.cwrap("dragger_t_get_prop_y_min", "number", ["number"]);
var dragger_t_get_prop_x_max = Module.cwrap("dragger_t_get_prop_x_max", "number", ["number"]);
var dragger_t_get_prop_y_max = Module.cwrap("dragger_t_get_prop_y_max", "number", ["number"]);
var digit_clock_create = Module.cwrap("digit_clock_create", "number", ["number", "number", "number", "number", "number"]);
var digit_clock_cast = Module.cwrap("digit_clock_cast", "number", ["number"]);
var digit_clock_set_format = Module.cwrap("digit_clock_set_format", "number", ["number", "string"]);
var digit_clock_t_get_prop_format = Module.cwrap("digit_clock_t_get_prop_format", "string", ["number"]);
var dialog_title_create = Module.cwrap("dialog_title_create", "number", ["number", "number", "number", "number", "number"]);
var dialog_title_cast = Module.cwrap("dialog_title_cast", "number", ["number"]);
var dialog_client_create = Module.cwrap("dialog_client_create", "number", ["number", "number", "number", "number", "number"]);
var dialog_client_cast = Module.cwrap("dialog_client_cast", "number", ["number"]);
var combo_box_item_create = Module.cwrap("combo_box_item_create", "number", ["number", "number", "number", "number", "number"]);
var combo_box_item_cast = Module.cwrap("combo_box_item_cast", "number", ["number"]);
var combo_box_item_set_checked = Module.cwrap("combo_box_item_set_checked", "number", ["number", "number"]);
var combo_box_item_set_value = Module.cwrap("combo_box_item_set_value", "number", ["number", "number"]);
var combo_box_item_t_get_prop_value = Module.cwrap("combo_box_item_t_get_prop_value", "number", ["number"]);
var combo_box_item_t_get_prop_checked = Module.cwrap("combo_box_item_t_get_prop_checked", "number", ["number"]);
var column_create = Module.cwrap("column_create", "number", ["number", "number", "number", "number", "number"]);
var column_cast = Module.cwrap("column_cast", "number", ["number"]);
var color_tile_create = Module.cwrap("color_tile_create", "number", ["number", "number", "number", "number", "number"]);
var color_tile_cast = Module.cwrap("color_tile_cast", "number", ["number"]);
var color_tile_set_bg_color = Module.cwrap("color_tile_set_bg_color", "number", ["number", "string"]);
var color_tile_t_get_prop_bg_color = Module.cwrap("color_tile_t_get_prop_bg_color", "string", ["number"]);
var color_tile_t_get_prop_border_color = Module.cwrap("color_tile_t_get_prop_border_color", "string", ["number"]);
var clip_view_create = Module.cwrap("clip_view_create", "number", ["number", "number", "number", "number", "number"]);
var clip_view_cast = Module.cwrap("clip_view_cast", "number", ["number"]);
var check_button_create = Module.cwrap("check_button_create", "number", ["number", "number", "number", "number", "number"]);
var check_button_create_radio = Module.cwrap("check_button_create_radio", "number", ["number", "number", "number", "number", "number"]);
var check_button_set_value = Module.cwrap("check_button_set_value", "number", ["number", "number"]);
var check_button_cast = Module.cwrap("check_button_cast", "number", ["number"]);
var check_button_t_get_prop_value = Module.cwrap("check_button_t_get_prop_value", "number", ["number"]);
var prop_change_event_cast = Module.cwrap("prop_change_event_cast", "number", ["number"]);
var prop_change_event_t_get_prop_name = Module.cwrap("prop_change_event_t_get_prop_name", "string", ["number"]);
var prop_change_event_t_get_prop_value = Module.cwrap("prop_change_event_t_get_prop_value", "number", ["number"]);
var progress_event_cast = Module.cwrap("progress_event_cast", "number", ["number"]);
var progress_event_t_get_prop_percent = Module.cwrap("progress_event_t_get_prop_percent", "number", ["number"]);
var done_event_cast = Module.cwrap("done_event_cast", "number", ["number"]);
var done_event_t_get_prop_result = Module.cwrap("done_event_t_get_prop_result", "number", ["number"]);
var error_event_cast = Module.cwrap("error_event_cast", "number", ["number"]);
var error_event_t_get_prop_code = Module.cwrap("error_event_t_get_prop_code", "number", ["number"]);
var error_event_t_get_prop_message = Module.cwrap("error_event_t_get_prop_message", "string", ["number"]);
var cmd_exec_event_cast = Module.cwrap("cmd_exec_event_cast", "number", ["number"]);
var cmd_exec_event_t_get_prop_name = Module.cwrap("cmd_exec_event_t_get_prop_name", "string", ["number"]);
var cmd_exec_event_t_get_prop_args = Module.cwrap("cmd_exec_event_t_get_prop_args", "string", ["number"]);
var cmd_exec_event_t_get_prop_result = Module.cwrap("cmd_exec_event_t_get_prop_result", "number", ["number"]);
var cmd_exec_event_t_get_prop_can_exec = Module.cwrap("cmd_exec_event_t_get_prop_can_exec", "number", ["number"]);
var time_clock_create = Module.cwrap("time_clock_create", "number", ["number", "number", "number", "number", "number"]);
var time_clock_cast = Module.cwrap("time_clock_cast", "number", ["number"]);
var time_clock_set_hour = Module.cwrap("time_clock_set_hour", "number", ["number", "number"]);
var time_clock_set_minute = Module.cwrap("time_clock_set_minute", "number", ["number", "number"]);
var time_clock_set_second = Module.cwrap("time_clock_set_second", "number", ["number", "number"]);
var time_clock_set_hour_image = Module.cwrap("time_clock_set_hour_image", "number", ["number", "string"]);
var time_clock_set_minute_image = Module.cwrap("time_clock_set_minute_image", "number", ["number", "string"]);
var time_clock_set_second_image = Module.cwrap("time_clock_set_second_image", "number", ["number", "string"]);
var time_clock_set_bg_image = Module.cwrap("time_clock_set_bg_image", "number", ["number", "string"]);
var time_clock_set_image = Module.cwrap("time_clock_set_image", "number", ["number", "string"]);
var time_clock_set_hour_anchor = Module.cwrap("time_clock_set_hour_anchor", "number", ["number", "string", "string"]);
var time_clock_set_minute_anchor = Module.cwrap("time_clock_set_minute_anchor", "number", ["number", "string", "string"]);
var time_clock_set_second_anchor = Module.cwrap("time_clock_set_second_anchor", "number", ["number", "string", "string"]);
var time_clock_t_get_prop_hour = Module.cwrap("time_clock_t_get_prop_hour", "number", ["number"]);
var time_clock_t_get_prop_minute = Module.cwrap("time_clock_t_get_prop_minute", "number", ["number"]);
var time_clock_t_get_prop_second = Module.cwrap("time_clock_t_get_prop_second", "number", ["number"]);
var time_clock_t_get_prop_image = Module.cwrap("time_clock_t_get_prop_image", "string", ["number"]);
var time_clock_t_get_prop_bg_image = Module.cwrap("time_clock_t_get_prop_bg_image", "string", ["number"]);
var time_clock_t_get_prop_hour_image = Module.cwrap("time_clock_t_get_prop_hour_image", "string", ["number"]);
var time_clock_t_get_prop_minute_image = Module.cwrap("time_clock_t_get_prop_minute_image", "string", ["number"]);
var time_clock_t_get_prop_second_image = Module.cwrap("time_clock_t_get_prop_second_image", "string", ["number"]);
var time_clock_t_get_prop_hour_anchor_x = Module.cwrap("time_clock_t_get_prop_hour_anchor_x", "string", ["number"]);
var time_clock_t_get_prop_hour_anchor_y = Module.cwrap("time_clock_t_get_prop_hour_anchor_y", "string", ["number"]);
var time_clock_t_get_prop_minute_anchor_x = Module.cwrap("time_clock_t_get_prop_minute_anchor_x", "string", ["number"]);
var time_clock_t_get_prop_minute_anchor_y = Module.cwrap("time_clock_t_get_prop_minute_anchor_y", "string", ["number"]);
var time_clock_t_get_prop_second_anchor_x = Module.cwrap("time_clock_t_get_prop_second_anchor_x", "string", ["number"]);
var time_clock_t_get_prop_second_anchor_y = Module.cwrap("time_clock_t_get_prop_second_anchor_y", "string", ["number"]);
var button_create = Module.cwrap("button_create", "number", ["number", "number", "number", "number", "number"]);
var button_cast = Module.cwrap("button_cast", "number", ["number"]);
var button_set_repeat = Module.cwrap("button_set_repeat", "number", ["number", "number"]);
var button_set_long_press_time = Module.cwrap("button_set_long_press_time", "number", ["number", "number"]);
var button_set_enable_long_press = Module.cwrap("button_set_enable_long_press", "number", ["number", "number"]);
var button_t_get_prop_repeat = Module.cwrap("button_t_get_prop_repeat", "number", ["number"]);
var button_t_get_prop_enable_long_press = Module.cwrap("button_t_get_prop_enable_long_press", "number", ["number"]);
var button_t_get_prop_long_press_time = Module.cwrap("button_t_get_prop_long_press_time", "number", ["number"]);
var text_selector_create = Module.cwrap("text_selector_create", "number", ["number", "number", "number", "number", "number"]);
var text_selector_cast = Module.cwrap("text_selector_cast", "number", ["number"]);
var text_selector_reset_options = Module.cwrap("text_selector_reset_options", "number", ["number"]);
var text_selector_count_options = Module.cwrap("text_selector_count_options", "number", ["number"]);
var text_selector_append_option = Module.cwrap("text_selector_append_option", "number", ["number", "number", "string"]);
var text_selector_set_options = Module.cwrap("text_selector_set_options", "number", ["number", "string"]);
var text_selector_set_range_options = Module.cwrap("text_selector_set_range_options", "number", ["number", "number", "number", "number"]);
var text_selector_get_value = Module.cwrap("text_selector_get_value", "number", ["number"]);
var text_selector_set_value = Module.cwrap("text_selector_set_value", "number", ["number", "number"]);
var text_selector_get_text = Module.cwrap("text_selector_get_text", "string", ["number"]);
var text_selector_set_text = Module.cwrap("text_selector_set_text", "number", ["number", "string"]);
var text_selector_set_selected_index = Module.cwrap("text_selector_set_selected_index", "number", ["number", "number"]);
var text_selector_set_visible_nr = Module.cwrap("text_selector_set_visible_nr", "number", ["number", "number"]);
var text_selector_set_localize_options = Module.cwrap("text_selector_set_localize_options", "number", ["number", "number"]);
var text_selector_set_loop_options = Module.cwrap("text_selector_set_loop_options", "number", ["number", "number"]);
var text_selector_set_yspeed_scale = Module.cwrap("text_selector_set_yspeed_scale", "number", ["number", "number"]);
var text_selector_t_get_prop_visible_nr = Module.cwrap("text_selector_t_get_prop_visible_nr", "number", ["number"]);
var text_selector_t_get_prop_selected_index = Module.cwrap("text_selector_t_get_prop_selected_index", "number", ["number"]);
var text_selector_t_get_prop_options = Module.cwrap("text_selector_t_get_prop_options", "string", ["number"]);
var text_selector_t_get_prop_localize_options = Module.cwrap("text_selector_t_get_prop_localize_options", "number", ["number"]);
var text_selector_t_get_prop_yspeed_scale = Module.cwrap("text_selector_t_get_prop_yspeed_scale", "number", ["number"]);
var text_selector_t_get_prop_loop_options = Module.cwrap("text_selector_t_get_prop_loop_options", "number", ["number"]);
var switch_create = Module.cwrap("switch_create", "number", ["number", "number", "number", "number", "number"]);
var switch_set_value = Module.cwrap("switch_set_value", "number", ["number", "number"]);
var switch_cast = Module.cwrap("switch_cast", "number", ["number"]);
var switch_t_get_prop_value = Module.cwrap("switch_t_get_prop_value", "number", ["number"]);
var switch_t_get_prop_max_xoffset_ratio = Module.cwrap("switch_t_get_prop_max_xoffset_ratio", "number", ["number"]);
var button_group_create = Module.cwrap("button_group_create", "number", ["number", "number", "number", "number", "number"]);
var button_group_cast = Module.cwrap("button_group_cast", "number", ["number"]);
var app_bar_create = Module.cwrap("app_bar_create", "number", ["number", "number", "number", "number", "number"]);
var app_bar_cast = Module.cwrap("app_bar_cast", "number", ["number"]);
var orientation_event_cast = Module.cwrap("orientation_event_cast", "number", ["number"]);
var orientation_event_t_get_prop_orientation = Module.cwrap("orientation_event_t_get_prop_orientation", "number", ["number"]);
var slide_view_create = Module.cwrap("slide_view_create", "number", ["number", "number", "number", "number", "number"]);
var slide_view_cast = Module.cwrap("slide_view_cast", "number", ["number"]);
var slide_view_set_auto_play = Module.cwrap("slide_view_set_auto_play", "number", ["number", "number"]);
var slide_view_set_active = Module.cwrap("slide_view_set_active", "number", ["number", "number"]);
var slide_view_set_vertical = Module.cwrap("slide_view_set_vertical", "number", ["number", "number"]);
var slide_view_set_anim_hint = Module.cwrap("slide_view_set_anim_hint", "number", ["number", "string"]);
var slide_view_set_loop = Module.cwrap("slide_view_set_loop", "number", ["number", "number"]);
var slide_view_t_get_prop_vertical = Module.cwrap("slide_view_t_get_prop_vertical", "number", ["number"]);
var slide_view_t_get_prop_auto_play = Module.cwrap("slide_view_t_get_prop_auto_play", "number", ["number"]);
var slide_view_t_get_prop_loop = Module.cwrap("slide_view_t_get_prop_loop", "number", ["number"]);
var slide_view_t_get_prop_anim_hint = Module.cwrap("slide_view_t_get_prop_anim_hint", "string", ["number"]);
var slide_indicator_create = Module.cwrap("slide_indicator_create", "number", ["number", "number", "number", "number", "number"]);
var slide_indicator_create_linear = Module.cwrap("slide_indicator_create_linear", "number", ["number", "number", "number", "number", "number"]);
var slide_indicator_create_arc = Module.cwrap("slide_indicator_create_arc", "number", ["number", "number", "number", "number", "number"]);
var slide_indicator_cast = Module.cwrap("slide_indicator_cast", "number", ["number"]);
var slide_indicator_set_value = Module.cwrap("slide_indicator_set_value", "number", ["number", "number"]);
var slide_indicator_set_max = Module.cwrap("slide_indicator_set_max", "number", ["number", "number"]);
var slide_indicator_set_default_paint = Module.cwrap("slide_indicator_set_default_paint", "number", ["number", "number"]);
var slide_indicator_set_auto_hide = Module.cwrap("slide_indicator_set_auto_hide", "number", ["number", "number"]);
var slide_indicator_set_margin = Module.cwrap("slide_indicator_set_margin", "number", ["number", "number"]);
var slide_indicator_set_spacing = Module.cwrap("slide_indicator_set_spacing", "number", ["number", "number"]);
var slide_indicator_set_size = Module.cwrap("slide_indicator_set_size", "number", ["number", "number"]);
var slide_indicator_set_anchor = Module.cwrap("slide_indicator_set_anchor", "number", ["number", "string", "string"]);
var slide_indicator_set_indicated_target = Module.cwrap("slide_indicator_set_indicated_target", "number", ["number", "string"]);
var slide_indicator_t_get_prop_value = Module.cwrap("slide_indicator_t_get_prop_value", "number", ["number"]);
var slide_indicator_t_get_prop_max = Module.cwrap("slide_indicator_t_get_prop_max", "number", ["number"]);
var slide_indicator_t_get_prop_default_paint = Module.cwrap("slide_indicator_t_get_prop_default_paint", "number", ["number"]);
var slide_indicator_t_get_prop_auto_hide = Module.cwrap("slide_indicator_t_get_prop_auto_hide", "number", ["number"]);
var slide_indicator_t_get_prop_margin = Module.cwrap("slide_indicator_t_get_prop_margin", "number", ["number"]);
var slide_indicator_t_get_prop_spacing = Module.cwrap("slide_indicator_t_get_prop_spacing", "number", ["number"]);
var slide_indicator_t_get_prop_size = Module.cwrap("slide_indicator_t_get_prop_size", "number", ["number"]);
var slide_indicator_t_get_prop_anchor_x = Module.cwrap("slide_indicator_t_get_prop_anchor_x", "number", ["number"]);
var slide_indicator_t_get_prop_anchor_y = Module.cwrap("slide_indicator_t_get_prop_anchor_y", "number", ["number"]);
var slide_indicator_t_get_prop_indicated_target = Module.cwrap("slide_indicator_t_get_prop_indicated_target", "string", ["number"]);
var slide_menu_create = Module.cwrap("slide_menu_create", "number", ["number", "number", "number", "number", "number"]);
var slide_menu_cast = Module.cwrap("slide_menu_cast", "number", ["number"]);
var slide_menu_set_value = Module.cwrap("slide_menu_set_value", "number", ["number", "number"]);
var slide_menu_set_align_v = Module.cwrap("slide_menu_set_align_v", "number", ["number", "number"]);
var slide_menu_set_min_scale = Module.cwrap("slide_menu_set_min_scale", "number", ["number", "number"]);
var slide_menu_t_get_prop_value = Module.cwrap("slide_menu_t_get_prop_value", "number", ["number"]);
var slide_menu_t_get_prop_align_v = Module.cwrap("slide_menu_t_get_prop_align_v", "number", ["number"]);
var slide_menu_t_get_prop_min_scale = Module.cwrap("slide_menu_t_get_prop_min_scale", "number", ["number"]);
var scroll_view_create = Module.cwrap("scroll_view_create", "number", ["number", "number", "number", "number", "number"]);
var scroll_view_cast = Module.cwrap("scroll_view_cast", "number", ["number"]);
var scroll_view_set_virtual_w = Module.cwrap("scroll_view_set_virtual_w", "number", ["number", "number"]);
var scroll_view_set_virtual_h = Module.cwrap("scroll_view_set_virtual_h", "number", ["number", "number"]);
var scroll_view_set_xslidable = Module.cwrap("scroll_view_set_xslidable", "number", ["number", "number"]);
var scroll_view_set_yslidable = Module.cwrap("scroll_view_set_yslidable", "number", ["number", "number"]);
var scroll_view_set_offset = Module.cwrap("scroll_view_set_offset", "number", ["number", "number", "number"]);
var scroll_view_set_speed_scale = Module.cwrap("scroll_view_set_speed_scale", "number", ["number", "number", "number"]);
var scroll_view_scroll_to = Module.cwrap("scroll_view_scroll_to", "number", ["number", "number", "number", "number"]);
var scroll_view_scroll_delta_to = Module.cwrap("scroll_view_scroll_delta_to", "number", ["number", "number", "number", "number"]);
var scroll_view_t_get_prop_virtual_w = Module.cwrap("scroll_view_t_get_prop_virtual_w", "number", ["number"]);
var scroll_view_t_get_prop_virtual_h = Module.cwrap("scroll_view_t_get_prop_virtual_h", "number", ["number"]);
var scroll_view_t_get_prop_xoffset = Module.cwrap("scroll_view_t_get_prop_xoffset", "number", ["number"]);
var scroll_view_t_get_prop_yoffset = Module.cwrap("scroll_view_t_get_prop_yoffset", "number", ["number"]);
var scroll_view_t_get_prop_xspeed_scale = Module.cwrap("scroll_view_t_get_prop_xspeed_scale", "number", ["number"]);
var scroll_view_t_get_prop_yspeed_scale = Module.cwrap("scroll_view_t_get_prop_yspeed_scale", "number", ["number"]);
var scroll_view_t_get_prop_xslidable = Module.cwrap("scroll_view_t_get_prop_xslidable", "number", ["number"]);
var scroll_view_t_get_prop_yslidable = Module.cwrap("scroll_view_t_get_prop_yslidable", "number", ["number"]);
var scroll_bar_create = Module.cwrap("scroll_bar_create", "number", ["number", "number", "number", "number", "number"]);
var scroll_bar_cast = Module.cwrap("scroll_bar_cast", "number", ["number"]);
var scroll_bar_create_mobile = Module.cwrap("scroll_bar_create_mobile", "number", ["number", "number", "number", "number", "number"]);
var scroll_bar_create_desktop = Module.cwrap("scroll_bar_create_desktop", "number", ["number", "number", "number", "number", "number"]);
var scroll_bar_set_params = Module.cwrap("scroll_bar_set_params", "number", ["number", "number", "number"]);
var scroll_bar_scroll_to = Module.cwrap("scroll_bar_scroll_to", "number", ["number", "number", "number"]);
var scroll_bar_set_value = Module.cwrap("scroll_bar_set_value", "number", ["number", "number"]);
var scroll_bar_add_delta = Module.cwrap("scroll_bar_add_delta", "number", ["number", "number"]);
var scroll_bar_scroll_delta = Module.cwrap("scroll_bar_scroll_delta", "number", ["number", "number"]);
var scroll_bar_set_value_only = Module.cwrap("scroll_bar_set_value_only", "number", ["number", "number"]);
var scroll_bar_is_mobile = Module.cwrap("scroll_bar_is_mobile", "number", ["number"]);
var scroll_bar_t_get_prop_virtual_size = Module.cwrap("scroll_bar_t_get_prop_virtual_size", "number", ["number"]);
var scroll_bar_t_get_prop_value = Module.cwrap("scroll_bar_t_get_prop_value", "number", ["number"]);
var scroll_bar_t_get_prop_row = Module.cwrap("scroll_bar_t_get_prop_row", "number", ["number"]);
var scroll_bar_t_get_prop_animatable = Module.cwrap("scroll_bar_t_get_prop_animatable", "number", ["number"]);
var list_view_create = Module.cwrap("list_view_create", "number", ["number", "number", "number", "number", "number"]);
var list_view_set_item_height = Module.cwrap("list_view_set_item_height", "number", ["number", "number"]);
var list_view_set_default_item_height = Module.cwrap("list_view_set_default_item_height", "number", ["number", "number"]);
var list_view_set_auto_hide_scroll_bar = Module.cwrap("list_view_set_auto_hide_scroll_bar", "number", ["number", "number"]);
var list_view_cast = Module.cwrap("list_view_cast", "number", ["number"]);
var list_view_reinit = Module.cwrap("list_view_reinit", "number", ["number"]);
var list_view_t_get_prop_item_height = Module.cwrap("list_view_t_get_prop_item_height", "number", ["number"]);
var list_view_t_get_prop_default_item_height = Module.cwrap("list_view_t_get_prop_default_item_height", "number", ["number"]);
var list_view_t_get_prop_auto_hide_scroll_bar = Module.cwrap("list_view_t_get_prop_auto_hide_scroll_bar", "number", ["number"]);
var list_view_h_create = Module.cwrap("list_view_h_create", "number", ["number", "number", "number", "number", "number"]);
var list_view_h_set_item_width = Module.cwrap("list_view_h_set_item_width", "number", ["number", "number"]);
var list_view_h_set_spacing = Module.cwrap("list_view_h_set_spacing", "number", ["number", "number"]);
var list_view_h_cast = Module.cwrap("list_view_h_cast", "number", ["number"]);
var list_view_h_t_get_prop_item_width = Module.cwrap("list_view_h_t_get_prop_item_width", "number", ["number"]);
var list_view_h_t_get_prop_spacing = Module.cwrap("list_view_h_t_get_prop_spacing", "number", ["number"]);
var list_item_create = Module.cwrap("list_item_create", "number", ["number", "number", "number", "number", "number"]);
var list_item_cast = Module.cwrap("list_item_cast", "number", ["number"]);
var value_change_event_cast = Module.cwrap("value_change_event_cast", "number", ["number"]);
var pointer_event_cast = Module.cwrap("pointer_event_cast", "number", ["number"]);
var pointer_event_t_get_prop_x = Module.cwrap("pointer_event_t_get_prop_x", "number", ["number"]);
var pointer_event_t_get_prop_y = Module.cwrap("pointer_event_t_get_prop_y", "number", ["number"]);
var pointer_event_t_get_prop_button = Module.cwrap("pointer_event_t_get_prop_button", "number", ["number"]);
var pointer_event_t_get_prop_pressed = Module.cwrap("pointer_event_t_get_prop_pressed", "number", ["number"]);
var pointer_event_t_get_prop_alt = Module.cwrap("pointer_event_t_get_prop_alt", "number", ["number"]);
var pointer_event_t_get_prop_ctrl = Module.cwrap("pointer_event_t_get_prop_ctrl", "number", ["number"]);
var pointer_event_t_get_prop_cmd = Module.cwrap("pointer_event_t_get_prop_cmd", "number", ["number"]);
var pointer_event_t_get_prop_menu = Module.cwrap("pointer_event_t_get_prop_menu", "number", ["number"]);
var pointer_event_t_get_prop_shift = Module.cwrap("pointer_event_t_get_prop_shift", "number", ["number"]);
var hscroll_label_create = Module.cwrap("hscroll_label_create", "number", ["number", "number", "number", "number", "number"]);
var hscroll_label_set_lull = Module.cwrap("hscroll_label_set_lull", "number", ["number", "number"]);
var hscroll_label_set_duration = Module.cwrap("hscroll_label_set_duration", "number", ["number", "number"]);
var hscroll_label_set_only_focus = Module.cwrap("hscroll_label_set_only_focus", "number", ["number", "number"]);
var hscroll_label_set_only_parent_focus = Module.cwrap("hscroll_label_set_only_parent_focus", "number", ["number", "number"]);
var hscroll_label_set_loop = Module.cwrap("hscroll_label_set_loop", "number", ["number", "number"]);
var hscroll_label_set_yoyo = Module.cwrap("hscroll_label_set_yoyo", "number", ["number", "number"]);
var hscroll_label_set_ellipses = Module.cwrap("hscroll_label_set_ellipses", "number", ["number", "number"]);
var hscroll_label_set_xoffset = Module.cwrap("hscroll_label_set_xoffset", "number", ["number", "number"]);
var hscroll_label_start = Module.cwrap("hscroll_label_start", "number", ["number"]);
var hscroll_label_stop = Module.cwrap("hscroll_label_stop", "number", ["number"]);
var hscroll_label_cast = Module.cwrap("hscroll_label_cast", "number", ["number"]);
var hscroll_label_t_get_prop_only_focus = Module.cwrap("hscroll_label_t_get_prop_only_focus", "number", ["number"]);
var hscroll_label_t_get_prop_only_parent_focus = Module.cwrap("hscroll_label_t_get_prop_only_parent_focus", "number", ["number"]);
var hscroll_label_t_get_prop_loop = Module.cwrap("hscroll_label_t_get_prop_loop", "number", ["number"]);
var hscroll_label_t_get_prop_yoyo = Module.cwrap("hscroll_label_t_get_prop_yoyo", "number", ["number"]);
var hscroll_label_t_get_prop_ellipses = Module.cwrap("hscroll_label_t_get_prop_ellipses", "number", ["number"]);
var hscroll_label_t_get_prop_lull = Module.cwrap("hscroll_label_t_get_prop_lull", "number", ["number"]);
var hscroll_label_t_get_prop_duration = Module.cwrap("hscroll_label_t_get_prop_duration", "number", ["number"]);
var hscroll_label_t_get_prop_xoffset = Module.cwrap("hscroll_label_t_get_prop_xoffset", "number", ["number"]);
var hscroll_label_t_get_prop_text_w = Module.cwrap("hscroll_label_t_get_prop_text_w", "number", ["number"]);
var rich_text_create = Module.cwrap("rich_text_create", "number", ["number", "number", "number", "number", "number"]);
var rich_text_set_text = Module.cwrap("rich_text_set_text", "number", ["number", "string"]);
var rich_text_set_yslidable = Module.cwrap("rich_text_set_yslidable", "number", ["number", "number"]);
var rich_text_cast = Module.cwrap("rich_text_cast", "number", ["number"]);
var rich_text_t_get_prop_line_gap = Module.cwrap("rich_text_t_get_prop_line_gap", "number", ["number"]);
var rich_text_t_get_prop_margin = Module.cwrap("rich_text_t_get_prop_margin", "number", ["number"]);
var rich_text_t_get_prop_yslidable = Module.cwrap("rich_text_t_get_prop_yslidable", "number", ["number"]);
var rich_text_view_create = Module.cwrap("rich_text_view_create", "number", ["number", "number", "number", "number", "number"]);
var rich_text_view_cast = Module.cwrap("rich_text_view_cast", "number", ["number"]);
var progress_circle_create = Module.cwrap("progress_circle_create", "number", ["number", "number", "number", "number", "number"]);
var progress_circle_cast = Module.cwrap("progress_circle_cast", "number", ["number"]);
var progress_circle_set_value = Module.cwrap("progress_circle_set_value", "number", ["number", "number"]);
var progress_circle_set_max = Module.cwrap("progress_circle_set_max", "number", ["number", "number"]);
var progress_circle_set_line_width = Module.cwrap("progress_circle_set_line_width", "number", ["number", "number"]);
var progress_circle_set_start_angle = Module.cwrap("progress_circle_set_start_angle", "number", ["number", "number"]);
var progress_circle_set_unit = Module.cwrap("progress_circle_set_unit", "number", ["number", "string"]);
var progress_circle_set_line_cap = Module.cwrap("progress_circle_set_line_cap", "number", ["number", "string"]);
var progress_circle_set_show_text = Module.cwrap("progress_circle_set_show_text", "number", ["number", "number"]);
var progress_circle_set_counter_clock_wise = Module.cwrap("progress_circle_set_counter_clock_wise", "number", ["number", "number"]);
var progress_circle_t_get_prop_value = Module.cwrap("progress_circle_t_get_prop_value", "number", ["number"]);
var progress_circle_t_get_prop_max = Module.cwrap("progress_circle_t_get_prop_max", "number", ["number"]);
var progress_circle_t_get_prop_start_angle = Module.cwrap("progress_circle_t_get_prop_start_angle", "number", ["number"]);
var progress_circle_t_get_prop_line_width = Module.cwrap("progress_circle_t_get_prop_line_width", "number", ["number"]);
var progress_circle_t_get_prop_unit = Module.cwrap("progress_circle_t_get_prop_unit", "string", ["number"]);
var progress_circle_t_get_prop_line_cap = Module.cwrap("progress_circle_t_get_prop_line_cap", "string", ["number"]);
var progress_circle_t_get_prop_counter_clock_wise = Module.cwrap("progress_circle_t_get_prop_counter_clock_wise", "number", ["number"]);
var progress_circle_t_get_prop_show_text = Module.cwrap("progress_circle_t_get_prop_show_text", "number", ["number"]);
var mledit_create = Module.cwrap("mledit_create", "number", ["number", "number", "number", "number", "number"]);
var mledit_set_readonly = Module.cwrap("mledit_set_readonly", "number", ["number", "number"]);
var mledit_set_cancelable = Module.cwrap("mledit_set_cancelable", "number", ["number", "number"]);
var mledit_set_focus = Module.cwrap("mledit_set_focus", "number", ["number", "number"]);
var mledit_set_wrap_word = Module.cwrap("mledit_set_wrap_word", "number", ["number", "number"]);
var mledit_set_max_lines = Module.cwrap("mledit_set_max_lines", "number", ["number", "number"]);
var mledit_set_tips = Module.cwrap("mledit_set_tips", "number", ["number", "string"]);
var mledit_set_tr_tips = Module.cwrap("mledit_set_tr_tips", "number", ["number", "string"]);
var mledit_set_keyboard = Module.cwrap("mledit_set_keyboard", "number", ["number", "string"]);
var mledit_set_cursor = Module.cwrap("mledit_set_cursor", "number", ["number", "number"]);
var mledit_set_scroll_line = Module.cwrap("mledit_set_scroll_line", "number", ["number", "number"]);
var mledit_set_open_im_when_focused = Module.cwrap("mledit_set_open_im_when_focused", "number", ["number", "number"]);
var mledit_set_close_im_when_blured = Module.cwrap("mledit_set_close_im_when_blured", "number", ["number", "number"]);
var mledit_cast = Module.cwrap("mledit_cast", "number", ["number"]);
var mledit_t_get_prop_readonly = Module.cwrap("mledit_t_get_prop_readonly", "number", ["number"]);
var mledit_t_get_prop_top_margin = Module.cwrap("mledit_t_get_prop_top_margin", "number", ["number"]);
var mledit_t_get_prop_bottom_margin = Module.cwrap("mledit_t_get_prop_bottom_margin", "number", ["number"]);
var mledit_t_get_prop_left_margin = Module.cwrap("mledit_t_get_prop_left_margin", "number", ["number"]);
var mledit_t_get_prop_right_margin = Module.cwrap("mledit_t_get_prop_right_margin", "number", ["number"]);
var mledit_t_get_prop_tips = Module.cwrap("mledit_t_get_prop_tips", "string", ["number"]);
var mledit_t_get_prop_tr_tips = Module.cwrap("mledit_t_get_prop_tr_tips", "string", ["number"]);
var mledit_t_get_prop_keyboard = Module.cwrap("mledit_t_get_prop_keyboard", "string", ["number"]);
var mledit_t_get_prop_wrap_word = Module.cwrap("mledit_t_get_prop_wrap_word", "number", ["number"]);
var mledit_t_get_prop_max_lines = Module.cwrap("mledit_t_get_prop_max_lines", "number", ["number"]);
var mledit_t_get_prop_scroll_line = Module.cwrap("mledit_t_get_prop_scroll_line", "number", ["number"]);
var mledit_t_get_prop_cancelable = Module.cwrap("mledit_t_get_prop_cancelable", "number", ["number"]);
var mledit_t_get_prop_open_im_when_focused = Module.cwrap("mledit_t_get_prop_open_im_when_focused", "number", ["number"]);
var mledit_t_get_prop_close_im_when_blured = Module.cwrap("mledit_t_get_prop_close_im_when_blured", "number", ["number"]);
var line_number_create = Module.cwrap("line_number_create", "number", ["number", "number", "number", "number", "number"]);
var line_number_set_top_margin = Module.cwrap("line_number_set_top_margin", "number", ["number", "number"]);
var line_number_set_bottom_margin = Module.cwrap("line_number_set_bottom_margin", "number", ["number", "number"]);
var line_number_set_line_height = Module.cwrap("line_number_set_line_height", "number", ["number", "number"]);
var line_number_set_yoffset = Module.cwrap("line_number_set_yoffset", "number", ["number", "number"]);
var line_number_cast = Module.cwrap("line_number_cast", "number", ["number"]);
var lang_indicator_create = Module.cwrap("lang_indicator_create", "number", ["number", "number", "number", "number", "number"]);
var lang_indicator_set_image = Module.cwrap("lang_indicator_set_image", "number", ["number", "string"]);
var lang_indicator_cast = Module.cwrap("lang_indicator_cast", "number", ["number"]);
var lang_indicator_t_get_prop_image = Module.cwrap("lang_indicator_t_get_prop_image", "string", ["number"]);
var candidates_cast = Module.cwrap("candidates_cast", "number", ["number"]);
var candidates_set_pre = Module.cwrap("candidates_set_pre", "number", ["number", "number"]);
var candidates_set_select_by_num = Module.cwrap("candidates_set_select_by_num", "number", ["number", "number"]);
var candidates_set_auto_hide = Module.cwrap("candidates_set_auto_hide", "number", ["number", "number"]);
var candidates_set_button_style = Module.cwrap("candidates_set_button_style", "number", ["number", "string"]);
var candidates_t_get_prop_pre = Module.cwrap("candidates_t_get_prop_pre", "number", ["number"]);
var candidates_t_get_prop_select_by_num = Module.cwrap("candidates_t_get_prop_select_by_num", "number", ["number"]);
var candidates_t_get_prop_auto_hide = Module.cwrap("candidates_t_get_prop_auto_hide", "number", ["number"]);
var candidates_t_get_prop_button_style = Module.cwrap("candidates_t_get_prop_button_style", "string", ["number"]);
var image_value_create = Module.cwrap("image_value_create", "number", ["number", "number", "number", "number", "number"]);
var image_value_set_image = Module.cwrap("image_value_set_image", "number", ["number", "string"]);
var image_value_set_format = Module.cwrap("image_value_set_format", "number", ["number", "string"]);
var image_value_set_click_add_delta = Module.cwrap("image_value_set_click_add_delta", "number", ["number", "number"]);
var image_value_set_value = Module.cwrap("image_value_set_value", "number", ["number", "number"]);
var image_value_set_min = Module.cwrap("image_value_set_min", "number", ["number", "number"]);
var image_value_set_max = Module.cwrap("image_value_set_max", "number", ["number", "number"]);
var image_value_cast = Module.cwrap("image_value_cast", "number", ["number"]);
var image_value_t_get_prop_image = Module.cwrap("image_value_t_get_prop_image", "string", ["number"]);
var image_value_t_get_prop_format = Module.cwrap("image_value_t_get_prop_format", "string", ["number"]);
var image_value_t_get_prop_click_add_delta = Module.cwrap("image_value_t_get_prop_click_add_delta", "number", ["number"]);
var image_value_t_get_prop_value = Module.cwrap("image_value_t_get_prop_value", "number", ["number"]);
var image_value_t_get_prop_min = Module.cwrap("image_value_t_get_prop_min", "number", ["number"]);
var image_value_t_get_prop_max = Module.cwrap("image_value_t_get_prop_max", "number", ["number"]);
var image_animation_create = Module.cwrap("image_animation_create", "number", ["number", "number", "number", "number", "number"]);
var image_animation_set_loop = Module.cwrap("image_animation_set_loop", "number", ["number", "number"]);
var image_animation_set_image = Module.cwrap("image_animation_set_image", "number", ["number", "string"]);
var image_animation_set_interval = Module.cwrap("image_animation_set_interval", "number", ["number", "number"]);
var image_animation_set_delay = Module.cwrap("image_animation_set_delay", "number", ["number", "number"]);
var image_animation_set_auto_play = Module.cwrap("image_animation_set_auto_play", "number", ["number", "number"]);
var image_animation_set_sequence = Module.cwrap("image_animation_set_sequence", "number", ["number", "string"]);
var image_animation_set_range_sequence = Module.cwrap("image_animation_set_range_sequence", "number", ["number", "number", "number"]);
var image_animation_play = Module.cwrap("image_animation_play", "number", ["number"]);
var image_animation_stop = Module.cwrap("image_animation_stop", "number", ["number"]);
var image_animation_pause = Module.cwrap("image_animation_pause", "number", ["number"]);
var image_animation_next = Module.cwrap("image_animation_next", "number", ["number"]);
var image_animation_set_format = Module.cwrap("image_animation_set_format", "number", ["number", "string"]);
var image_animation_set_unload_after_paint = Module.cwrap("image_animation_set_unload_after_paint", "number", ["number", "number"]);
var image_animation_cast = Module.cwrap("image_animation_cast", "number", ["number"]);
var image_animation_is_playing = Module.cwrap("image_animation_is_playing", "number", ["number"]);
var image_animation_t_get_prop_image = Module.cwrap("image_animation_t_get_prop_image", "string", ["number"]);
var image_animation_t_get_prop_sequence = Module.cwrap("image_animation_t_get_prop_sequence", "string", ["number"]);
var image_animation_t_get_prop_start_index = Module.cwrap("image_animation_t_get_prop_start_index", "number", ["number"]);
var image_animation_t_get_prop_end_index = Module.cwrap("image_animation_t_get_prop_end_index", "number", ["number"]);
var image_animation_t_get_prop_loop = Module.cwrap("image_animation_t_get_prop_loop", "number", ["number"]);
var image_animation_t_get_prop_auto_play = Module.cwrap("image_animation_t_get_prop_auto_play", "number", ["number"]);
var image_animation_t_get_prop_unload_after_paint = Module.cwrap("image_animation_t_get_prop_unload_after_paint", "number", ["number"]);
var image_animation_t_get_prop_format = Module.cwrap("image_animation_t_get_prop_format", "string", ["number"]);
var image_animation_t_get_prop_interval = Module.cwrap("image_animation_t_get_prop_interval", "number", ["number"]);
var image_animation_t_get_prop_delay = Module.cwrap("image_animation_t_get_prop_delay", "number", ["number"]);
var guage_create = Module.cwrap("guage_create", "number", ["number", "number", "number", "number", "number"]);
var guage_cast = Module.cwrap("guage_cast", "number", ["number"]);
var guage_set_image = Module.cwrap("guage_set_image", "number", ["number", "string"]);
var guage_set_draw_type = Module.cwrap("guage_set_draw_type", "number", ["number", "number"]);
var guage_t_get_prop_image = Module.cwrap("guage_t_get_prop_image", "string", ["number"]);
var guage_t_get_prop_draw_type = Module.cwrap("guage_t_get_prop_draw_type", "number", ["number"]);
var key_event_cast = Module.cwrap("key_event_cast", "number", ["number"]);
var key_event_t_get_prop_key = Module.cwrap("key_event_t_get_prop_key", "number", ["number"]);
var key_event_t_get_prop_alt = Module.cwrap("key_event_t_get_prop_alt", "number", ["number"]);
var key_event_t_get_prop_lalt = Module.cwrap("key_event_t_get_prop_lalt", "number", ["number"]);
var key_event_t_get_prop_ralt = Module.cwrap("key_event_t_get_prop_ralt", "number", ["number"]);
var key_event_t_get_prop_ctrl = Module.cwrap("key_event_t_get_prop_ctrl", "number", ["number"]);
var key_event_t_get_prop_lctrl = Module.cwrap("key_event_t_get_prop_lctrl", "number", ["number"]);
var key_event_t_get_prop_rctrl = Module.cwrap("key_event_t_get_prop_rctrl", "number", ["number"]);
var key_event_t_get_prop_shift = Module.cwrap("key_event_t_get_prop_shift", "number", ["number"]);
var key_event_t_get_prop_lshift = Module.cwrap("key_event_t_get_prop_lshift", "number", ["number"]);
var key_event_t_get_prop_rshift = Module.cwrap("key_event_t_get_prop_rshift", "number", ["number"]);
var key_event_t_get_prop_cmd = Module.cwrap("key_event_t_get_prop_cmd", "number", ["number"]);
var key_event_t_get_prop_menu = Module.cwrap("key_event_t_get_prop_menu", "number", ["number"]);
var key_event_t_get_prop_capslock = Module.cwrap("key_event_t_get_prop_capslock", "number", ["number"]);
var paint_event_cast = Module.cwrap("paint_event_cast", "number", ["number"]);
var paint_event_t_get_prop_c = Module.cwrap("paint_event_t_get_prop_c", "number", ["number"]);
var file_chooser_create = Module.cwrap("file_chooser_create", "number", []);
var file_chooser_set_init_dir = Module.cwrap("file_chooser_set_init_dir", "number", ["number", "string"]);
var file_chooser_set_filter = Module.cwrap("file_chooser_set_filter", "number", ["number", "string"]);
var file_chooser_cast = Module.cwrap("file_chooser_cast", "number", ["number"]);
var file_chooser_choose_file_for_save = Module.cwrap("file_chooser_choose_file_for_save", "number", ["number"]);
var file_chooser_choose_file_for_open = Module.cwrap("file_chooser_choose_file_for_open", "number", ["number"]);
var file_chooser_choose_folder = Module.cwrap("file_chooser_choose_folder", "number", ["number"]);
var file_chooser_get_dir = Module.cwrap("file_chooser_get_dir", "string", ["number"]);
var file_chooser_get_filename = Module.cwrap("file_chooser_get_filename", "string", ["number"]);
var file_chooser_is_aborted = Module.cwrap("file_chooser_is_aborted", "number", ["number"]);
var file_browser_view_create = Module.cwrap("file_browser_view_create", "number", ["number", "number", "number", "number", "number"]);
var file_browser_view_cast = Module.cwrap("file_browser_view_cast", "number", ["number"]);
var file_browser_view_set_init_dir = Module.cwrap("file_browser_view_set_init_dir", "number", ["number", "string"]);
var file_browser_view_set_filter = Module.cwrap("file_browser_view_set_filter", "number", ["number", "string"]);
var file_browser_view_reload = Module.cwrap("file_browser_view_reload", "number", ["number"]);
var file_browser_view_set_ignore_hidden_files = Module.cwrap("file_browser_view_set_ignore_hidden_files", "number", ["number", "number"]);
var file_browser_view_set_sort_ascending = Module.cwrap("file_browser_view_set_sort_ascending", "number", ["number", "number"]);
var file_browser_view_set_show_check_button = Module.cwrap("file_browser_view_set_show_check_button", "number", ["number", "number"]);
var file_browser_view_set_sort_by = Module.cwrap("file_browser_view_set_sort_by", "number", ["number", "string"]);
var file_browser_view_get_cwd = Module.cwrap("file_browser_view_get_cwd", "string", ["number"]);
var file_browser_view_create_dir = Module.cwrap("file_browser_view_create_dir", "number", ["number", "string"]);
var file_browser_view_create_file = Module.cwrap("file_browser_view_create_file", "number", ["number", "string", "string", "number"]);
var file_browser_view_t_get_prop_init_dir = Module.cwrap("file_browser_view_t_get_prop_init_dir", "string", ["number"]);
var file_browser_view_t_get_prop_filter = Module.cwrap("file_browser_view_t_get_prop_filter", "string", ["number"]);
var file_browser_view_t_get_prop_ignore_hidden_files = Module.cwrap("file_browser_view_t_get_prop_ignore_hidden_files", "number", ["number"]);
var file_browser_view_t_get_prop_sort_ascending = Module.cwrap("file_browser_view_t_get_prop_sort_ascending", "number", ["number"]);
var file_browser_view_t_get_prop_show_check_button = Module.cwrap("file_browser_view_t_get_prop_show_check_button", "number", ["number"]);
var file_browser_view_t_get_prop_sort_by = Module.cwrap("file_browser_view_t_get_prop_sort_by", "string", ["number"]);
var draggable_create = Module.cwrap("draggable_create", "number", ["number", "number", "number", "number", "number"]);
var draggable_cast = Module.cwrap("draggable_cast", "number", ["number"]);
var draggable_set_top = Module.cwrap("draggable_set_top", "number", ["number", "number"]);
var draggable_set_bottom = Module.cwrap("draggable_set_bottom", "number", ["number", "number"]);
var draggable_set_left = Module.cwrap("draggable_set_left", "number", ["number", "number"]);
var draggable_set_right = Module.cwrap("draggable_set_right", "number", ["number", "number"]);
var draggable_set_vertical_only = Module.cwrap("draggable_set_vertical_only", "number", ["number", "number"]);
var draggable_set_horizontal_only = Module.cwrap("draggable_set_horizontal_only", "number", ["number", "number"]);
var draggable_set_drag_window = Module.cwrap("draggable_set_drag_window", "number", ["number", "number"]);
var draggable_t_get_prop_top = Module.cwrap("draggable_t_get_prop_top", "number", ["number"]);
var draggable_t_get_prop_bottom = Module.cwrap("draggable_t_get_prop_bottom", "number", ["number"]);
var draggable_t_get_prop_left = Module.cwrap("draggable_t_get_prop_left", "number", ["number"]);
var draggable_t_get_prop_right = Module.cwrap("draggable_t_get_prop_right", "number", ["number"]);
var draggable_t_get_prop_vertical_only = Module.cwrap("draggable_t_get_prop_vertical_only", "number", ["number"]);
var draggable_t_get_prop_horizontal_only = Module.cwrap("draggable_t_get_prop_horizontal_only", "number", ["number"]);
var draggable_t_get_prop_drag_window = Module.cwrap("draggable_t_get_prop_drag_window", "number", ["number"]);
var window_event_cast = Module.cwrap("window_event_cast", "number", ["number"]);
var window_event_t_get_prop_window = Module.cwrap("window_event_t_get_prop_window", "number", ["number"]);
var color_picker_create = Module.cwrap("color_picker_create", "number", ["number", "number", "number", "number", "number"]);
var color_picker_set_color = Module.cwrap("color_picker_set_color", "number", ["number", "string"]);
var color_picker_cast = Module.cwrap("color_picker_cast", "number", ["number"]);
var color_picker_t_get_prop_value = Module.cwrap("color_picker_t_get_prop_value", "string", ["number"]);
var color_component_cast = Module.cwrap("color_component_cast", "number", ["number"]);
var multi_gesture_event_cast = Module.cwrap("multi_gesture_event_cast", "number", ["number"]);
var multi_gesture_event_t_get_prop_touch_id = Module.cwrap("multi_gesture_event_t_get_prop_touch_id", "number", ["number"]);
var multi_gesture_event_t_get_prop_x = Module.cwrap("multi_gesture_event_t_get_prop_x", "number", ["number"]);
var multi_gesture_event_t_get_prop_y = Module.cwrap("multi_gesture_event_t_get_prop_y", "number", ["number"]);
var multi_gesture_event_t_get_prop_rotation = Module.cwrap("multi_gesture_event_t_get_prop_rotation", "number", ["number"]);
var multi_gesture_event_t_get_prop_distance = Module.cwrap("multi_gesture_event_t_get_prop_distance", "number", ["number"]);
var multi_gesture_event_t_get_prop_fingers = Module.cwrap("multi_gesture_event_t_get_prop_fingers", "number", ["number"]);
var canvas_widget_create = Module.cwrap("canvas_widget_create", "number", ["number", "number", "number", "number", "number"]);
var canvas_widget_cast = Module.cwrap("canvas_widget_cast", "number", ["number"]);
var image_base_set_image = Module.cwrap("image_base_set_image", "number", ["number", "string"]);
var image_base_set_rotation = Module.cwrap("image_base_set_rotation", "number", ["number", "number"]);
var image_base_set_scale = Module.cwrap("image_base_set_scale", "number", ["number", "number", "number"]);
var image_base_set_anchor = Module.cwrap("image_base_set_anchor", "number", ["number", "number", "number"]);
var image_base_set_selected = Module.cwrap("image_base_set_selected", "number", ["number", "number"]);
var image_base_set_selectable = Module.cwrap("image_base_set_selectable", "number", ["number", "number"]);
var image_base_set_clickable = Module.cwrap("image_base_set_clickable", "number", ["number", "number"]);
var image_base_cast = Module.cwrap("image_base_cast", "number", ["number"]);
var image_base_t_get_prop_image = Module.cwrap("image_base_t_get_prop_image", "string", ["number"]);
var image_base_t_get_prop_anchor_x = Module.cwrap("image_base_t_get_prop_anchor_x", "number", ["number"]);
var image_base_t_get_prop_anchor_y = Module.cwrap("image_base_t_get_prop_anchor_y", "number", ["number"]);
var image_base_t_get_prop_scale_x = Module.cwrap("image_base_t_get_prop_scale_x", "number", ["number"]);
var image_base_t_get_prop_scale_y = Module.cwrap("image_base_t_get_prop_scale_y", "number", ["number"]);
var image_base_t_get_prop_rotation = Module.cwrap("image_base_t_get_prop_rotation", "number", ["number"]);
var image_base_t_get_prop_clickable = Module.cwrap("image_base_t_get_prop_clickable", "number", ["number"]);
var image_base_t_get_prop_selectable = Module.cwrap("image_base_t_get_prop_selectable", "number", ["number"]);
var image_base_t_get_prop_selected = Module.cwrap("image_base_t_get_prop_selected", "number", ["number"]);
var window_manager = Module.cwrap("window_manager", "number", []);
var window_manager_cast = Module.cwrap("window_manager_cast", "number", ["number"]);
var window_manager_get_top_main_window = Module.cwrap("window_manager_get_top_main_window", "number", ["number"]);
var window_manager_get_top_window = Module.cwrap("window_manager_get_top_window", "number", ["number"]);
var window_manager_get_prev_window = Module.cwrap("window_manager_get_prev_window", "number", ["number"]);
var window_manager_get_pointer_x = Module.cwrap("window_manager_get_pointer_x", "number", ["number"]);
var window_manager_get_pointer_y = Module.cwrap("window_manager_get_pointer_y", "number", ["number"]);
var window_manager_get_pointer_pressed = Module.cwrap("window_manager_get_pointer_pressed", "number", ["number"]);
var window_manager_is_animating = Module.cwrap("window_manager_is_animating", "number", ["number"]);
var window_manager_set_show_fps = Module.cwrap("window_manager_set_show_fps", "number", ["number", "number"]);
var window_manager_set_screen_saver_time = Module.cwrap("window_manager_set_screen_saver_time", "number", ["number", "number"]);
var window_manager_set_cursor = Module.cwrap("window_manager_set_cursor", "number", ["number", "string"]);
var window_manager_back = Module.cwrap("window_manager_back", "number", ["number"]);
var window_manager_back_to_home = Module.cwrap("window_manager_back_to_home", "number", ["number"]);
var window_manager_back_to = Module.cwrap("window_manager_back_to", "number", ["number", "string"]);
var window_manager_resize = Module.cwrap("window_manager_resize", "number", ["number", "number", "number"]);
var window_base_cast = Module.cwrap("window_base_cast", "number", ["number"]);
var window_base_t_get_prop_theme = Module.cwrap("window_base_t_get_prop_theme", "string", ["number"]);
var window_base_t_get_prop_disable_anim = Module.cwrap("window_base_t_get_prop_disable_anim", "number", ["number"]);
var window_base_t_get_prop_closable = Module.cwrap("window_base_t_get_prop_closable", "number", ["number"]);
var window_base_t_get_prop_open_anim_hint = Module.cwrap("window_base_t_get_prop_open_anim_hint", "string", ["number"]);
var window_base_t_get_prop_close_anim_hint = Module.cwrap("window_base_t_get_prop_close_anim_hint", "string", ["number"]);
var window_base_t_get_prop_move_focus_prev_key = Module.cwrap("window_base_t_get_prop_move_focus_prev_key", "string", ["number"]);
var window_base_t_get_prop_move_focus_next_key = Module.cwrap("window_base_t_get_prop_move_focus_next_key", "string", ["number"]);
var window_base_t_get_prop_move_focus_up_key = Module.cwrap("window_base_t_get_prop_move_focus_up_key", "string", ["number"]);
var window_base_t_get_prop_move_focus_down_key = Module.cwrap("window_base_t_get_prop_move_focus_down_key", "string", ["number"]);
var window_base_t_get_prop_move_focus_left_key = Module.cwrap("window_base_t_get_prop_move_focus_left_key", "string", ["number"]);
var window_base_t_get_prop_move_focus_right_key = Module.cwrap("window_base_t_get_prop_move_focus_right_key", "string", ["number"]);
var window_base_t_get_prop_single_instance = Module.cwrap("window_base_t_get_prop_single_instance", "number", ["number"]);
var style_mutable_set_name = Module.cwrap("style_mutable_set_name", "number", ["number", "string"]);
var style_mutable_set_int = Module.cwrap("style_mutable_set_int", "number", ["number", "string", "string", "number"]);
var style_mutable_cast = Module.cwrap("style_mutable_cast", "number", ["number"]);
var style_mutable_create = Module.cwrap("style_mutable_create", "number", ["number", "number"]);
var style_mutable_t_get_prop_name = Module.cwrap("style_mutable_t_get_prop_name", "string", ["number"]);
var combo_box_create = Module.cwrap("combo_box_create", "number", ["number", "number", "number", "number", "number"]);
var combo_box_cast = Module.cwrap("combo_box_cast", "number", ["number"]);
var combo_box_set_open_window = Module.cwrap("combo_box_set_open_window", "number", ["number", "string"]);
var combo_box_reset_options = Module.cwrap("combo_box_reset_options", "number", ["number"]);
var combo_box_count_options = Module.cwrap("combo_box_count_options", "number", ["number"]);
var combo_box_set_selected_index = Module.cwrap("combo_box_set_selected_index", "number", ["number", "number"]);
var combo_box_set_localize_options = Module.cwrap("combo_box_set_localize_options", "number", ["number", "number"]);
var combo_box_set_value = Module.cwrap("combo_box_set_value", "number", ["number", "number"]);
var combo_box_set_item_height = Module.cwrap("combo_box_set_item_height", "number", ["number", "number"]);
var combo_box_append_option = Module.cwrap("combo_box_append_option", "number", ["number", "number", "string"]);
var combo_box_set_options = Module.cwrap("combo_box_set_options", "number", ["number", "string"]);
var combo_box_get_value = Module.cwrap("combo_box_get_value", "number", ["number"]);
var combo_box_get_text = Module.cwrap("combo_box_get_text", "string", ["number"]);
var combo_box_t_get_prop_open_window = Module.cwrap("combo_box_t_get_prop_open_window", "string", ["number"]);
var combo_box_t_get_prop_selected_index = Module.cwrap("combo_box_t_get_prop_selected_index", "number", ["number"]);
var combo_box_t_get_prop_value = Module.cwrap("combo_box_t_get_prop_value", "number", ["number"]);
var combo_box_t_get_prop_localize_options = Module.cwrap("combo_box_t_get_prop_localize_options", "number", ["number"]);
var combo_box_t_get_prop_options = Module.cwrap("combo_box_t_get_prop_options", "string", ["number"]);
var combo_box_t_get_prop_item_height = Module.cwrap("combo_box_t_get_prop_item_height", "number", ["number"]);
var window_create = Module.cwrap("window_create", "number", ["number", "number", "number", "number", "number"]);
var window_create_default = Module.cwrap("window_create_default", "number", []);
var window_set_fullscreen = Module.cwrap("window_set_fullscreen", "number", ["number", "number"]);
var window_open = Module.cwrap("window_open", "number", ["string"]);
var window_open_and_close = Module.cwrap("window_open_and_close", "number", ["string", "number"]);
var window_close = Module.cwrap("window_close", "number", ["number"]);
var window_close_force = Module.cwrap("window_close_force", "number", ["number"]);
var window_cast = Module.cwrap("window_cast", "number", ["number"]);
var window_t_get_prop_fullscreen = Module.cwrap("window_t_get_prop_fullscreen", "number", ["number"]);
var timer_info_cast = Module.cwrap("timer_info_cast", "number", ["number"]);
var timer_info_t_get_prop_ctx = Module.cwrap("timer_info_t_get_prop_ctx", "number", ["number"]);
var timer_info_t_get_prop_id = Module.cwrap("timer_info_t_get_prop_id", "number", ["number"]);
var timer_info_t_get_prop_now = Module.cwrap("timer_info_t_get_prop_now", "number", ["number"]);
var dialog_create = Module.cwrap("dialog_create", "number", ["number", "number", "number", "number", "number"]);
var dialog_create_simple = Module.cwrap("dialog_create_simple", "number", ["number", "number", "number", "number", "number"]);
var dialog_cast = Module.cwrap("dialog_cast", "number", ["number"]);
var dialog_get_title = Module.cwrap("dialog_get_title", "number", ["number"]);
var dialog_get_client = Module.cwrap("dialog_get_client", "number", ["number"]);
var dialog_open = Module.cwrap("dialog_open", "number", ["string"]);
var dialog_set_title = Module.cwrap("dialog_set_title", "number", ["number", "string"]);
var dialog_modal = Module.cwrap("dialog_modal", "number", ["number"]);
var dialog_quit = Module.cwrap("dialog_quit", "number", ["number", "number"]);
var dialog_is_quited = Module.cwrap("dialog_is_quited", "number", ["number"]);
var dialog_is_modal = Module.cwrap("dialog_is_modal", "number", ["number"]);
var dialog_toast = Module.cwrap("dialog_toast", "number", ["string", "number"]);
var dialog_info = Module.cwrap("dialog_info", "number", ["string", "string"]);
var dialog_warn = Module.cwrap("dialog_warn", "number", ["string", "string"]);
var dialog_confirm = Module.cwrap("dialog_confirm", "number", ["string", "string"]);
var dialog_t_get_prop_highlight = Module.cwrap("dialog_t_get_prop_highlight", "string", ["number"]);
var gif_image_create = Module.cwrap("gif_image_create", "number", ["number", "number", "number", "number", "number"]);
var gif_image_cast = Module.cwrap("gif_image_cast", "number", ["number"]);
var keyboard_create = Module.cwrap("keyboard_create", "number", ["number", "number", "number", "number", "number"]);
var keyboard_cast = Module.cwrap("keyboard_cast", "number", ["number"]);
var object_default_create = Module.cwrap("object_default_create", "number", []);
var object_default_unref = Module.cwrap("object_default_unref", "number", ["number"]);
var object_default_clear_props = Module.cwrap("object_default_clear_props", "number", ["number"]);
var object_default_t_get_prop_props_size = Module.cwrap("object_default_t_get_prop_props_size", "number", ["number"]);
var object_array_create = Module.cwrap("object_array_create", "number", []);
var object_array_unref = Module.cwrap("object_array_unref", "number", ["number"]);
var object_array_clear_props = Module.cwrap("object_array_clear_props", "number", ["number"]);
var object_array_t_get_prop_props_size = Module.cwrap("object_array_t_get_prop_props_size", "number", ["number"]);
var svg_image_create = Module.cwrap("svg_image_create", "number", ["number", "number", "number", "number", "number"]);
var svg_image_set_image = Module.cwrap("svg_image_set_image", "number", ["number", "string"]);
var svg_image_cast = Module.cwrap("svg_image_cast", "number", ["number"]);
var idle_info_cast = Module.cwrap("idle_info_cast", "number", ["number"]);
var idle_info_t_get_prop_ctx = Module.cwrap("idle_info_t_get_prop_ctx", "number", ["number"]);
var idle_info_t_get_prop_id = Module.cwrap("idle_info_t_get_prop_id", "number", ["number"]);
var calibration_win_cast = Module.cwrap("calibration_win_cast", "number", ["number"]);
var native_window_move = Module.cwrap("native_window_move", "number", ["number", "number", "number", "number"]);
var native_window_resize = Module.cwrap("native_window_resize", "number", ["number", "number", "number", "number"]);
var native_window_minimize = Module.cwrap("native_window_minimize", "number", ["number"]);
var native_window_maximize = Module.cwrap("native_window_maximize", "number", ["number"]);
var native_window_restore = Module.cwrap("native_window_restore", "number", ["number"]);
var native_window_center = Module.cwrap("native_window_center", "number", ["number"]);
var native_window_show_border = Module.cwrap("native_window_show_border", "number", ["number", "number"]);
var native_window_set_fullscreen = Module.cwrap("native_window_set_fullscreen", "number", ["number", "number"]);
var native_window_set_cursor = Module.cwrap("native_window_set_cursor", "number", ["number", "string", "number"]);
var system_bar_create = Module.cwrap("system_bar_create", "number", ["number", "number", "number", "number", "number"]);
var system_bar_cast = Module.cwrap("system_bar_cast", "number", ["number"]);
var spin_box_create = Module.cwrap("spin_box_create", "number", ["number", "number", "number", "number", "number"]);
var spin_box_cast = Module.cwrap("spin_box_cast", "number", ["number"]);
var popup_create = Module.cwrap("popup_create", "number", ["number", "number", "number", "number", "number"]);
var popup_cast = Module.cwrap("popup_cast", "number", ["number"]);
var popup_set_close_when_click = Module.cwrap("popup_set_close_when_click", "number", ["number", "number"]);
var popup_set_close_when_click_outside = Module.cwrap("popup_set_close_when_click_outside", "number", ["number", "number"]);
var popup_t_get_prop_close_when_click = Module.cwrap("popup_t_get_prop_close_when_click", "number", ["number"]);
var popup_t_get_prop_close_when_click_outside = Module.cwrap("popup_t_get_prop_close_when_click_outside", "number", ["number"]);
var overlay_create = Module.cwrap("overlay_create", "number", ["number", "number", "number", "number", "number"]);
var overlay_set_click_through = Module.cwrap("overlay_set_click_through", "number", ["number", "number"]);
var overlay_cast = Module.cwrap("overlay_cast", "number", ["number"]);
var overlay_t_get_prop_click_through = Module.cwrap("overlay_t_get_prop_click_through", "number", ["number"]);
var image_create = Module.cwrap("image_create", "number", ["number", "number", "number", "number", "number"]);
var image_set_draw_type = Module.cwrap("image_set_draw_type", "number", ["number", "number"]);
var image_cast = Module.cwrap("image_cast", "number", ["number"]);
var image_t_get_prop_draw_type = Module.cwrap("image_t_get_prop_draw_type", "number", ["number"]);
var combo_box_ex_create = Module.cwrap("combo_box_ex_create", "number", ["number", "number", "number", "number", "number"]);
var TEvent = /** @class */ (function () {
    function TEvent(nativeObj) {
        this.nativeObj = nativeObj;
    }
    TEvent.cast = function (event) {
        return new TEvent(event_cast(event ? (event.nativeObj || event) : null));
    };
    TEvent.create = function (type) {
        return new TEvent(event_create(type));
    };
    TEvent.prototype.destroy = function () {
        return event_destroy(this.nativeObj);
    };
    Object.defineProperty(TEvent.prototype, "type", {
        get: function () {
            return event_t_get_prop_type(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TEvent.prototype, "size", {
        get: function () {
            return event_t_get_prop_size(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TEvent.prototype, "time", {
        get: function () {
            return event_t_get_prop_time(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TEvent.prototype, "target", {
        get: function () {
            return event_t_get_prop_target(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TEvent;
}());
var TRect = /** @class */ (function () {
    function TRect(nativeObj) {
        this.nativeObj = nativeObj;
    }
    TRect.create = function (x, y, w, h) {
        return new TRect(rect_create(x, y, w, h));
    };
    TRect.prototype.set = function (x, y, w, h) {
        return new TRect(rect_set(this.nativeObj, x, y, w, h));
    };
    TRect.cast = function (rect) {
        return new TRect(rect_cast(rect ? (rect.nativeObj || rect) : null));
    };
    TRect.prototype.destroy = function () {
        return rect_destroy(this.nativeObj);
    };
    Object.defineProperty(TRect.prototype, "x", {
        get: function () {
            return rect_t_get_prop_x(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TRect.prototype, "y", {
        get: function () {
            return rect_t_get_prop_y(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TRect.prototype, "w", {
        get: function () {
            return rect_t_get_prop_w(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TRect.prototype, "h", {
        get: function () {
            return rect_t_get_prop_h(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TRect;
}());
var TPointf = /** @class */ (function () {
    function TPointf(nativeObj) {
        this.nativeObj = nativeObj;
    }
    return TPointf;
}());
var TPoint = /** @class */ (function () {
    function TPoint(nativeObj) {
        this.nativeObj = nativeObj;
    }
    return TPoint;
}());
var TEmitter = /** @class */ (function () {
    function TEmitter(nativeObj) {
        this.nativeObj = nativeObj;
    }
    TEmitter.create = function () {
        return new TEmitter(emitter_create());
    };
    TEmitter.prototype.dispatch = function (e) {
        return emitter_dispatch(this.nativeObj, e ? e.nativeObj : null);
    };
    TEmitter.prototype.dispatchSimpleEvent = function (type) {
        return emitter_dispatch_simple_event(this.nativeObj, type);
    };
    TEmitter.prototype.on = function (type, on_event, ctx) {
        return emitter_on(this.nativeObj, type, TBrowser.addFunction(wrap_on_event(on_event), "iii"), ctx);
    };
    TEmitter.prototype.off = function (id) {
        return emitter_off(this.nativeObj, id);
    };
    TEmitter.prototype.enable = function () {
        return emitter_enable(this.nativeObj);
    };
    TEmitter.prototype.disable = function () {
        return emitter_disable(this.nativeObj);
    };
    TEmitter.prototype.size = function () {
        return emitter_size(this.nativeObj);
    };
    TEmitter.prototype.destroy = function () {
        return emitter_destroy(this.nativeObj);
    };
    TEmitter.cast = function (emitter) {
        return new TEmitter(emitter_cast(emitter ? (emitter.nativeObj || emitter) : null));
    };
    return TEmitter;
}());
var TBitmap = /** @class */ (function () {
    function TBitmap(nativeObj) {
        this.nativeObj = nativeObj;
    }
    TBitmap.create = function () {
        return new TBitmap(bitmap_create());
    };
    TBitmap.createEx = function (w, h, line_length, format) {
        return new TBitmap(bitmap_create_ex(w, h, line_length, format));
    };
    TBitmap.prototype.getBpp = function () {
        return bitmap_get_bpp(this.nativeObj);
    };
    TBitmap.prototype.destroy = function () {
        return bitmap_destroy(this.nativeObj);
    };
    TBitmap.getBppOfFormat = function (format) {
        return bitmap_get_bpp_of_format(format);
    };
    Object.defineProperty(TBitmap.prototype, "w", {
        get: function () {
            return bitmap_t_get_prop_w(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TBitmap.prototype, "h", {
        get: function () {
            return bitmap_t_get_prop_h(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TBitmap.prototype, "lineLength", {
        get: function () {
            return bitmap_t_get_prop_line_length(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TBitmap.prototype, "flags", {
        get: function () {
            return bitmap_t_get_prop_flags(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TBitmap.prototype, "format", {
        get: function () {
            return bitmap_t_get_prop_format(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TBitmap.prototype, "name", {
        get: function () {
            return bitmap_t_get_prop_name(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TBitmap;
}());
var TValue = /** @class */ (function () {
    function TValue(nativeObj) {
        this.nativeObj = nativeObj;
    }
    TValue.prototype.setBool = function (value) {
        return new TValue(value_set_bool(this.nativeObj, value));
    };
    TValue.prototype.bool = function () {
        return value_bool(this.nativeObj);
    };
    TValue.prototype.setInt8 = function (value) {
        return new TValue(value_set_int8(this.nativeObj, value));
    };
    TValue.prototype.int8 = function () {
        return value_int8(this.nativeObj);
    };
    TValue.prototype.setUint8 = function (value) {
        return new TValue(value_set_uint8(this.nativeObj, value));
    };
    TValue.prototype.uint8 = function () {
        return value_uint8(this.nativeObj);
    };
    TValue.prototype.setInt16 = function (value) {
        return new TValue(value_set_int16(this.nativeObj, value));
    };
    TValue.prototype.int16 = function () {
        return value_int16(this.nativeObj);
    };
    TValue.prototype.setUint16 = function (value) {
        return new TValue(value_set_uint16(this.nativeObj, value));
    };
    TValue.prototype.uint16 = function () {
        return value_uint16(this.nativeObj);
    };
    TValue.prototype.setInt32 = function (value) {
        return new TValue(value_set_int32(this.nativeObj, value));
    };
    TValue.prototype.int32 = function () {
        return value_int32(this.nativeObj);
    };
    TValue.prototype.setUint32 = function (value) {
        return new TValue(value_set_uint32(this.nativeObj, value));
    };
    TValue.prototype.setInt64 = function (value) {
        return new TValue(value_set_int64(this.nativeObj, value));
    };
    TValue.prototype.int64 = function () {
        return value_int64(this.nativeObj);
    };
    TValue.prototype.setUint64 = function (value) {
        return new TValue(value_set_uint64(this.nativeObj, value));
    };
    TValue.prototype.uint64 = function () {
        return value_uint64(this.nativeObj);
    };
    TValue.prototype.setFloat = function (value) {
        return new TValue(value_set_float(this.nativeObj, value));
    };
    TValue.prototype.float32 = function () {
        return value_float32(this.nativeObj);
    };
    TValue.prototype.setFloat64 = function (value) {
        return new TValue(value_set_double(this.nativeObj, value));
    };
    TValue.prototype.float64 = function () {
        return value_double(this.nativeObj);
    };
    TValue.prototype.setStr = function (value) {
        return new TValue(value_dup_str(this.nativeObj, value));
    };
    TValue.prototype.str = function () {
        return value_str(this.nativeObj);
    };
    TValue.prototype.isNull = function () {
        return value_is_null(this.nativeObj);
    };
    TValue.prototype.setInt = function (value) {
        return new TValue(value_set_int(this.nativeObj, value));
    };
    TValue.prototype.setObject = function (value) {
        return new TValue(value_set_object(this.nativeObj, value ? value.nativeObj : null));
    };
    TValue.prototype.object = function () {
        return new TObject(value_object(this.nativeObj));
    };
    TValue.prototype.setToken = function (value) {
        return new TValue(value_set_token(this.nativeObj, value));
    };
    TValue.prototype.token = function () {
        return value_token(this.nativeObj);
    };
    TValue.create = function () {
        return new TValue(value_create());
    };
    TValue.prototype.destroy = function () {
        return value_destroy(this.nativeObj);
    };
    TValue.prototype.reset = function () {
        return value_reset(this.nativeObj);
    };
    TValue.cast = function (value) {
        return new TValue(value_cast(value ? (value.nativeObj || value) : null));
    };
    return TValue;
}());
var TObject = /** @class */ (function (_super) {
    __extends(TObject, _super);
    function TObject(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TObject.prototype.unref = function () {
        return object_unref(this.nativeObj);
    };
    TObject.ref = function (obj) {
        return new TObject(object_ref(obj ? obj.nativeObj : null));
    };
    TObject.prototype.getType = function () {
        return object_get_type(this.nativeObj);
    };
    TObject.prototype.getDesc = function () {
        return object_get_desc(this.nativeObj);
    };
    TObject.prototype.getSize = function () {
        return object_get_size(this.nativeObj);
    };
    TObject.prototype.isCollection = function () {
        return object_is_collection(this.nativeObj);
    };
    TObject.prototype.setName = function (name) {
        return object_set_name(this.nativeObj, name);
    };
    TObject.prototype.compare = function (other) {
        return object_compare(this.nativeObj, other ? other.nativeObj : null);
    };
    TObject.prototype.getProp = function (name, v) {
        return object_get_prop(this.nativeObj, name, v ? v.nativeObj : null);
    };
    TObject.prototype.getPropStr = function (name) {
        return object_get_prop_str(this.nativeObj, name);
    };
    TObject.prototype.getPropPointer = function (name) {
        return object_get_prop_pointer(this.nativeObj, name);
    };
    TObject.prototype.getPropObject = function (name) {
        return new TObject(object_get_prop_object(this.nativeObj, name));
    };
    TObject.prototype.getPropInt = function (name, defval) {
        return object_get_prop_int(this.nativeObj, name, defval);
    };
    TObject.prototype.getPropBool = function (name, defval) {
        return object_get_prop_bool(this.nativeObj, name, defval);
    };
    TObject.prototype.getPropFloat = function (name, defval) {
        return object_get_prop_float(this.nativeObj, name, defval);
    };
    TObject.prototype.removeProp = function (name) {
        return object_remove_prop(this.nativeObj, name);
    };
    TObject.prototype.setProp = function (name, value) {
        return object_set_prop(this.nativeObj, name, value ? value.nativeObj : null);
    };
    TObject.prototype.setPropStr = function (name, value) {
        return object_set_prop_str(this.nativeObj, name, value);
    };
    TObject.prototype.setPropObject = function (name, value) {
        return object_set_prop_object(this.nativeObj, name, value ? value.nativeObj : null);
    };
    TObject.prototype.setPropInt = function (name, value) {
        return object_set_prop_int(this.nativeObj, name, value);
    };
    TObject.prototype.setPropBool = function (name, value) {
        return object_set_prop_bool(this.nativeObj, name, value);
    };
    TObject.prototype.setPropFloat = function (name, value) {
        return object_set_prop_float(this.nativeObj, name, value);
    };
    TObject.prototype.copyProp = function (src, name) {
        return object_copy_prop(this.nativeObj, src ? src.nativeObj : null, name);
    };
    TObject.prototype.hasProp = function (name) {
        return object_has_prop(this.nativeObj, name);
    };
    TObject.prototype.eval = function (expr, v) {
        return object_eval(this.nativeObj, expr, v ? v.nativeObj : null);
    };
    TObject.prototype.canExec = function (name, args) {
        return object_can_exec(this.nativeObj, name, args);
    };
    TObject.prototype.execute = function (name, args) {
        return object_exec(this.nativeObj, name, args);
    };
    TObject.prototype.notifyChanged = function () {
        return object_notify_changed(this.nativeObj);
    };
    TObject.prototype.getPropStrByPath = function (path) {
        return object_get_prop_str_by_path(this.nativeObj, path);
    };
    TObject.prototype.getPropPointerByPath = function (path) {
        return object_get_prop_pointer_by_path(this.nativeObj, path);
    };
    TObject.prototype.getPropObjectByPath = function (path) {
        return new TObject(object_get_prop_object_by_path(this.nativeObj, path));
    };
    TObject.prototype.getPropIntByPath = function (path, defval) {
        return object_get_prop_int_by_path(this.nativeObj, path, defval);
    };
    TObject.prototype.getPropBoolByPath = function (path, defval) {
        return object_get_prop_bool_by_path(this.nativeObj, path, defval);
    };
    TObject.prototype.getPropFloatByPath = function (path, defval) {
        return object_get_prop_float_by_path(this.nativeObj, path, defval);
    };
    Object.defineProperty(TObject.prototype, "refCount", {
        get: function () {
            return object_t_get_prop_ref_count(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TObject.prototype, "name", {
        get: function () {
            return object_t_get_prop_name(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TObject;
}(TEmitter));
var TGlobal = /** @class */ (function () {
    function TGlobal(nativeObj) {
        this.nativeObj = nativeObj;
    }
    TGlobal.init = function (w, h, app_type, app_name, app_root) {
        return tk_init(w, h, app_type, app_name, app_root);
    };
    TGlobal.run = function () {
        return tk_run();
    };
    TGlobal.quit = function () {
        return tk_quit();
    };
    TGlobal.getPointerX = function () {
        return tk_get_pointer_x();
    };
    TGlobal.getPointerY = function () {
        return tk_get_pointer_y();
    };
    TGlobal.isPointerPressed = function () {
        return tk_is_pointer_pressed();
    };
    return TGlobal;
}());
var TClipBoardDataType;
(function (TClipBoardDataType) {
    TClipBoardDataType[TClipBoardDataType["NONE"] = get_CLIP_BOARD_DATA_TYPE_NONE()] = "NONE";
    TClipBoardDataType[TClipBoardDataType["TEXT"] = get_CLIP_BOARD_DATA_TYPE_TEXT()] = "TEXT";
})(TClipBoardDataType || (TClipBoardDataType = {}));
;
var TClipBoard = /** @class */ (function () {
    function TClipBoard(nativeObj) {
        this.nativeObj = nativeObj;
    }
    TClipBoard.setText = function (text) {
        return clip_board_set_text(text);
    };
    TClipBoard.getText = function () {
        return clip_board_get_text();
    };
    return TClipBoard;
}());
var TDialogQuitCode;
(function (TDialogQuitCode) {
    TDialogQuitCode[TDialogQuitCode["NONE"] = get_DIALOG_QUIT_NONE()] = "NONE";
    TDialogQuitCode[TDialogQuitCode["OK"] = get_DIALOG_QUIT_OK()] = "OK";
    TDialogQuitCode[TDialogQuitCode["YES"] = get_DIALOG_QUIT_YES()] = "YES";
    TDialogQuitCode[TDialogQuitCode["CANCEL"] = get_DIALOG_QUIT_CANCEL()] = "CANCEL";
    TDialogQuitCode[TDialogQuitCode["NO"] = get_DIALOG_QUIT_NO()] = "NO";
    TDialogQuitCode[TDialogQuitCode["OTHER"] = get_DIALOG_QUIT_OTHER()] = "OTHER";
})(TDialogQuitCode || (TDialogQuitCode = {}));
;
var TEventType;
(function (TEventType) {
    TEventType[TEventType["POINTER_DOWN"] = get_EVT_POINTER_DOWN()] = "POINTER_DOWN";
    TEventType[TEventType["POINTER_DOWN_BEFORE_CHILDREN"] = get_EVT_POINTER_DOWN_BEFORE_CHILDREN()] = "POINTER_DOWN_BEFORE_CHILDREN";
    TEventType[TEventType["POINTER_MOVE"] = get_EVT_POINTER_MOVE()] = "POINTER_MOVE";
    TEventType[TEventType["POINTER_MOVE_BEFORE_CHILDREN"] = get_EVT_POINTER_MOVE_BEFORE_CHILDREN()] = "POINTER_MOVE_BEFORE_CHILDREN";
    TEventType[TEventType["POINTER_UP"] = get_EVT_POINTER_UP()] = "POINTER_UP";
    TEventType[TEventType["POINTER_UP_BEFORE_CHILDREN"] = get_EVT_POINTER_UP_BEFORE_CHILDREN()] = "POINTER_UP_BEFORE_CHILDREN";
    TEventType[TEventType["WHEEL"] = get_EVT_WHEEL()] = "WHEEL";
    TEventType[TEventType["WHEEL_BEFORE_CHILDREN"] = get_EVT_WHEEL_BEFORE_CHILDREN()] = "WHEEL_BEFORE_CHILDREN";
    TEventType[TEventType["POINTER_DOWN_ABORT"] = get_EVT_POINTER_DOWN_ABORT()] = "POINTER_DOWN_ABORT";
    TEventType[TEventType["CONTEXT_MENU"] = get_EVT_CONTEXT_MENU()] = "CONTEXT_MENU";
    TEventType[TEventType["POINTER_ENTER"] = get_EVT_POINTER_ENTER()] = "POINTER_ENTER";
    TEventType[TEventType["POINTER_LEAVE"] = get_EVT_POINTER_LEAVE()] = "POINTER_LEAVE";
    TEventType[TEventType["LONG_PRESS"] = get_EVT_LONG_PRESS()] = "LONG_PRESS";
    TEventType[TEventType["CLICK"] = get_EVT_CLICK()] = "CLICK";
    TEventType[TEventType["FOCUS"] = get_EVT_FOCUS()] = "FOCUS";
    TEventType[TEventType["BLUR"] = get_EVT_BLUR()] = "BLUR";
    TEventType[TEventType["KEY_DOWN"] = get_EVT_KEY_DOWN()] = "KEY_DOWN";
    TEventType[TEventType["KEY_LONG_PRESS"] = get_EVT_KEY_LONG_PRESS()] = "KEY_LONG_PRESS";
    TEventType[TEventType["KEY_DOWN_BEFORE_CHILDREN"] = get_EVT_KEY_DOWN_BEFORE_CHILDREN()] = "KEY_DOWN_BEFORE_CHILDREN";
    TEventType[TEventType["KEY_REPEAT"] = get_EVT_KEY_REPEAT()] = "KEY_REPEAT";
    TEventType[TEventType["KEY_UP"] = get_EVT_KEY_UP()] = "KEY_UP";
    TEventType[TEventType["KEY_UP_BEFORE_CHILDREN"] = get_EVT_KEY_UP_BEFORE_CHILDREN()] = "KEY_UP_BEFORE_CHILDREN";
    TEventType[TEventType["WILL_MOVE"] = get_EVT_WILL_MOVE()] = "WILL_MOVE";
    TEventType[TEventType["MOVE"] = get_EVT_MOVE()] = "MOVE";
    TEventType[TEventType["WILL_RESIZE"] = get_EVT_WILL_RESIZE()] = "WILL_RESIZE";
    TEventType[TEventType["RESIZE"] = get_EVT_RESIZE()] = "RESIZE";
    TEventType[TEventType["WILL_MOVE_RESIZE"] = get_EVT_WILL_MOVE_RESIZE()] = "WILL_MOVE_RESIZE";
    TEventType[TEventType["MOVE_RESIZE"] = get_EVT_MOVE_RESIZE()] = "MOVE_RESIZE";
    TEventType[TEventType["VALUE_WILL_CHANGE"] = get_EVT_VALUE_WILL_CHANGE()] = "VALUE_WILL_CHANGE";
    TEventType[TEventType["VALUE_CHANGED"] = get_EVT_VALUE_CHANGED()] = "VALUE_CHANGED";
    TEventType[TEventType["VALUE_CHANGING"] = get_EVT_VALUE_CHANGING()] = "VALUE_CHANGING";
    TEventType[TEventType["PAINT"] = get_EVT_PAINT()] = "PAINT";
    TEventType[TEventType["BEFORE_PAINT"] = get_EVT_BEFORE_PAINT()] = "BEFORE_PAINT";
    TEventType[TEventType["AFTER_PAINT"] = get_EVT_AFTER_PAINT()] = "AFTER_PAINT";
    TEventType[TEventType["PAINT_DONE"] = get_EVT_PAINT_DONE()] = "PAINT_DONE";
    TEventType[TEventType["LOCALE_CHANGED"] = get_EVT_LOCALE_CHANGED()] = "LOCALE_CHANGED";
    TEventType[TEventType["ANIM_START"] = get_EVT_ANIM_START()] = "ANIM_START";
    TEventType[TEventType["ANIM_STOP"] = get_EVT_ANIM_STOP()] = "ANIM_STOP";
    TEventType[TEventType["ANIM_PAUSE"] = get_EVT_ANIM_PAUSE()] = "ANIM_PAUSE";
    TEventType[TEventType["ANIM_ONCE"] = get_EVT_ANIM_ONCE()] = "ANIM_ONCE";
    TEventType[TEventType["ANIM_END"] = get_EVT_ANIM_END()] = "ANIM_END";
    TEventType[TEventType["WINDOW_LOAD"] = get_EVT_WINDOW_LOAD()] = "WINDOW_LOAD";
    TEventType[TEventType["WIDGET_LOAD"] = get_EVT_WIDGET_LOAD()] = "WIDGET_LOAD";
    TEventType[TEventType["WINDOW_WILL_OPEN"] = get_EVT_WINDOW_WILL_OPEN()] = "WINDOW_WILL_OPEN";
    TEventType[TEventType["WINDOW_OPEN"] = get_EVT_WINDOW_OPEN()] = "WINDOW_OPEN";
    TEventType[TEventType["WINDOW_TO_BACKGROUND"] = get_EVT_WINDOW_TO_BACKGROUND()] = "WINDOW_TO_BACKGROUND";
    TEventType[TEventType["WINDOW_TO_FOREGROUND"] = get_EVT_WINDOW_TO_FOREGROUND()] = "WINDOW_TO_FOREGROUND";
    TEventType[TEventType["WINDOW_CLOSE"] = get_EVT_WINDOW_CLOSE()] = "WINDOW_CLOSE";
    TEventType[TEventType["REQUEST_CLOSE_WINDOW"] = get_EVT_REQUEST_CLOSE_WINDOW()] = "REQUEST_CLOSE_WINDOW";
    TEventType[TEventType["TOP_WINDOW_CHANGED"] = get_EVT_TOP_WINDOW_CHANGED()] = "TOP_WINDOW_CHANGED";
    TEventType[TEventType["IM_COMMIT"] = get_EVT_IM_COMMIT()] = "IM_COMMIT";
    TEventType[TEventType["IM_CLEAR"] = get_EVT_IM_CLEAR()] = "IM_CLEAR";
    TEventType[TEventType["IM_CANCEL"] = get_EVT_IM_CANCEL()] = "IM_CANCEL";
    TEventType[TEventType["IM_PREEDIT"] = get_EVT_IM_PREEDIT()] = "IM_PREEDIT";
    TEventType[TEventType["IM_PREEDIT_CONFIRM"] = get_EVT_IM_PREEDIT_CONFIRM()] = "IM_PREEDIT_CONFIRM";
    TEventType[TEventType["IM_PREEDIT_ABORT"] = get_EVT_IM_PREEDIT_ABORT()] = "IM_PREEDIT_ABORT";
    TEventType[TEventType["IM_SHOW_CANDIDATES"] = get_EVT_IM_SHOW_CANDIDATES()] = "IM_SHOW_CANDIDATES";
    TEventType[TEventType["IM_SHOW_PRE_CANDIDATES"] = get_EVT_IM_SHOW_PRE_CANDIDATES()] = "IM_SHOW_PRE_CANDIDATES";
    TEventType[TEventType["IM_LANG_CHANGED"] = get_EVT_IM_LANG_CHANGED()] = "IM_LANG_CHANGED";
    TEventType[TEventType["IM_ACTION"] = get_EVT_IM_ACTION()] = "IM_ACTION";
    TEventType[TEventType["IM_ACTION_INFO"] = get_EVT_IM_ACTION_INFO()] = "IM_ACTION_INFO";
    TEventType[TEventType["DRAG_START"] = get_EVT_DRAG_START()] = "DRAG_START";
    TEventType[TEventType["DRAG"] = get_EVT_DRAG()] = "DRAG";
    TEventType[TEventType["DRAG_END"] = get_EVT_DRAG_END()] = "DRAG_END";
    TEventType[TEventType["RESET"] = get_EVT_RESET()] = "RESET";
    TEventType[TEventType["SCREEN_SAVER"] = get_EVT_SCREEN_SAVER()] = "SCREEN_SAVER";
    TEventType[TEventType["LOW_MEMORY"] = get_EVT_LOW_MEMORY()] = "LOW_MEMORY";
    TEventType[TEventType["OUT_OF_MEMORY"] = get_EVT_OUT_OF_MEMORY()] = "OUT_OF_MEMORY";
    TEventType[TEventType["ORIENTATION_WILL_CHANGED"] = get_EVT_ORIENTATION_WILL_CHANGED()] = "ORIENTATION_WILL_CHANGED";
    TEventType[TEventType["ORIENTATION_CHANGED"] = get_EVT_ORIENTATION_CHANGED()] = "ORIENTATION_CHANGED";
    TEventType[TEventType["WIDGET_CREATED"] = get_EVT_WIDGET_CREATED()] = "WIDGET_CREATED";
    TEventType[TEventType["REQUEST_QUIT_APP"] = get_EVT_REQUEST_QUIT_APP()] = "REQUEST_QUIT_APP";
    TEventType[TEventType["THEME_CHANGED"] = get_EVT_THEME_CHANGED()] = "THEME_CHANGED";
    TEventType[TEventType["WIDGET_ADD_CHILD"] = get_EVT_WIDGET_ADD_CHILD()] = "WIDGET_ADD_CHILD";
    TEventType[TEventType["WIDGET_REMOVE_CHILD"] = get_EVT_WIDGET_REMOVE_CHILD()] = "WIDGET_REMOVE_CHILD";
    TEventType[TEventType["SCROLL_START"] = get_EVT_SCROLL_START()] = "SCROLL_START";
    TEventType[TEventType["SCROLL"] = get_EVT_SCROLL()] = "SCROLL";
    TEventType[TEventType["SCROLL_END"] = get_EVT_SCROLL_END()] = "SCROLL_END";
    TEventType[TEventType["MULTI_GESTURE"] = get_EVT_MULTI_GESTURE()] = "MULTI_GESTURE";
    TEventType[TEventType["REQ_START"] = get_EVT_REQ_START()] = "REQ_START";
    TEventType[TEventType["USER_START"] = get_EVT_USER_START()] = "USER_START";
    TEventType[TEventType["NONE"] = get_EVT_NONE()] = "NONE";
    TEventType[TEventType["PROP_WILL_CHANGE"] = get_EVT_PROP_WILL_CHANGE()] = "PROP_WILL_CHANGE";
    TEventType[TEventType["PROP_CHANGED"] = get_EVT_PROP_CHANGED()] = "PROP_CHANGED";
    TEventType[TEventType["CMD_WILL_EXEC"] = get_EVT_CMD_WILL_EXEC()] = "CMD_WILL_EXEC";
    TEventType[TEventType["CMD_EXECED"] = get_EVT_CMD_EXECED()] = "CMD_EXECED";
    TEventType[TEventType["CMD_CAN_EXEC"] = get_EVT_CMD_CAN_EXEC()] = "CMD_CAN_EXEC";
    TEventType[TEventType["ITEMS_WILL_CHANGE"] = get_EVT_ITEMS_WILL_CHANGE()] = "ITEMS_WILL_CHANGE";
    TEventType[TEventType["ITEMS_CHANGED"] = get_EVT_ITEMS_CHANGED()] = "ITEMS_CHANGED";
    TEventType[TEventType["PROPS_CHANGED"] = get_EVT_PROPS_CHANGED()] = "PROPS_CHANGED";
    TEventType[TEventType["PROGRESS"] = get_EVT_PROGRESS()] = "PROGRESS";
    TEventType[TEventType["DONE"] = get_EVT_DONE()] = "DONE";
    TEventType[TEventType["ERROR"] = get_EVT_ERROR()] = "ERROR";
    TEventType[TEventType["DESTROY"] = get_EVT_DESTROY()] = "DESTROY";
})(TEventType || (TEventType = {}));
;
var TFontManager = /** @class */ (function () {
    function TFontManager(nativeObj) {
        this.nativeObj = nativeObj;
    }
    TFontManager.prototype.unloadFont = function (name, size) {
        return font_manager_unload_font(this.nativeObj, name, size);
    };
    TFontManager.prototype.shrinkCache = function (cache_size) {
        return font_manager_shrink_cache(this.nativeObj, cache_size);
    };
    TFontManager.prototype.unloadAll = function () {
        return font_manager_unload_all(this.nativeObj);
    };
    return TFontManager;
}());
var TGlyphFormat;
(function (TGlyphFormat) {
    TGlyphFormat[TGlyphFormat["ALPHA"] = get_GLYPH_FMT_ALPHA()] = "ALPHA";
    TGlyphFormat[TGlyphFormat["MONO"] = get_GLYPH_FMT_MONO()] = "MONO";
    TGlyphFormat[TGlyphFormat["RGBA"] = get_GLYPH_FMT_RGBA()] = "RGBA";
})(TGlyphFormat || (TGlyphFormat = {}));
;
var TIdle = /** @class */ (function () {
    function TIdle(nativeObj) {
        this.nativeObj = nativeObj;
    }
    TIdle.add = function (on_idle, ctx) {
        return idle_add(TBrowser.addFunction(on_idle, "ii"), ctx);
    };
    TIdle.remove = function (idle_id) {
        return idle_remove(idle_id);
    };
    return TIdle;
}());
var TImageManager = /** @class */ (function () {
    function TImageManager(nativeObj) {
        this.nativeObj = nativeObj;
    }
    TImageManager.instance = function () {
        return new TImageManager(image_manager());
    };
    TImageManager.prototype.getBitmap = function (name, image) {
        return image_manager_get_bitmap(this.nativeObj, name, image ? image.nativeObj : null);
    };
    TImageManager.prototype.preload = function (name) {
        return image_manager_preload(this.nativeObj, name);
    };
    return TImageManager;
}());
var TInputType;
(function (TInputType) {
    TInputType[TInputType["TEXT"] = get_INPUT_TEXT()] = "TEXT";
    TInputType[TInputType["INT"] = get_INPUT_INT()] = "INT";
    TInputType[TInputType["UINT"] = get_INPUT_UINT()] = "UINT";
    TInputType[TInputType["HEX"] = get_INPUT_HEX()] = "HEX";
    TInputType[TInputType["FLOAT"] = get_INPUT_FLOAT()] = "FLOAT";
    TInputType[TInputType["UFLOAT"] = get_INPUT_UFLOAT()] = "UFLOAT";
    TInputType[TInputType["EMAIL"] = get_INPUT_EMAIL()] = "EMAIL";
    TInputType[TInputType["PASSWORD"] = get_INPUT_PASSWORD()] = "PASSWORD";
    TInputType[TInputType["PHONE"] = get_INPUT_PHONE()] = "PHONE";
    TInputType[TInputType["IPV4"] = get_INPUT_IPV4()] = "IPV4";
    TInputType[TInputType["DATE"] = get_INPUT_DATE()] = "DATE";
    TInputType[TInputType["TIME"] = get_INPUT_TIME()] = "TIME";
    TInputType[TInputType["TIME_FULL"] = get_INPUT_TIME_FULL()] = "TIME_FULL";
    TInputType[TInputType["CUSTOM"] = get_INPUT_CUSTOM()] = "CUSTOM";
    TInputType[TInputType["CUSTOM_PASSWORD"] = get_INPUT_CUSTOM_PASSWORD()] = "CUSTOM_PASSWORD";
})(TInputType || (TInputType = {}));
;
var TInputMethod = /** @class */ (function () {
    function TInputMethod(nativeObj) {
        this.nativeObj = nativeObj;
    }
    TInputMethod.prototype.commitText = function (text) {
        return input_method_commit_text(this.nativeObj, text);
    };
    TInputMethod.prototype.setLang = function (lang) {
        return input_method_set_lang(this.nativeObj, lang);
    };
    TInputMethod.prototype.getLang = function () {
        return input_method_get_lang(this.nativeObj);
    };
    TInputMethod.prototype.dispatchKey = function (key) {
        return input_method_dispatch_key(this.nativeObj, key);
    };
    TInputMethod.prototype.dispatchKeys = function (key) {
        return input_method_dispatch_keys(this.nativeObj, key);
    };
    TInputMethod.prototype.dispatchPreedit = function () {
        return input_method_dispatch_preedit(this.nativeObj);
    };
    TInputMethod.prototype.dispatchPreeditConfirm = function () {
        return input_method_dispatch_preedit_confirm(this.nativeObj);
    };
    TInputMethod.prototype.dispatchPreeditAbort = function () {
        return input_method_dispatch_preedit_abort(this.nativeObj);
    };
    TInputMethod.instance = function () {
        return new TInputMethod(input_method());
    };
    return TInputMethod;
}());
var TKeyCode;
(function (TKeyCode) {
    TKeyCode[TKeyCode["KEY_RETURN"] = get_TK_KEY_RETURN()] = "KEY_RETURN";
    TKeyCode[TKeyCode["KEY_ESCAPE"] = get_TK_KEY_ESCAPE()] = "KEY_ESCAPE";
    TKeyCode[TKeyCode["KEY_BACKSPACE"] = get_TK_KEY_BACKSPACE()] = "KEY_BACKSPACE";
    TKeyCode[TKeyCode["KEY_TAB"] = get_TK_KEY_TAB()] = "KEY_TAB";
    TKeyCode[TKeyCode["KEY_SPACE"] = get_TK_KEY_SPACE()] = "KEY_SPACE";
    TKeyCode[TKeyCode["KEY_EXCLAIM"] = get_TK_KEY_EXCLAIM()] = "KEY_EXCLAIM";
    TKeyCode[TKeyCode["KEY_QUOTEDBL"] = get_TK_KEY_QUOTEDBL()] = "KEY_QUOTEDBL";
    TKeyCode[TKeyCode["KEY_HASH"] = get_TK_KEY_HASH()] = "KEY_HASH";
    TKeyCode[TKeyCode["KEY_PERCENT"] = get_TK_KEY_PERCENT()] = "KEY_PERCENT";
    TKeyCode[TKeyCode["KEY_DOLLAR"] = get_TK_KEY_DOLLAR()] = "KEY_DOLLAR";
    TKeyCode[TKeyCode["KEY_AMPERSAND"] = get_TK_KEY_AMPERSAND()] = "KEY_AMPERSAND";
    TKeyCode[TKeyCode["KEY_QUOTE"] = get_TK_KEY_QUOTE()] = "KEY_QUOTE";
    TKeyCode[TKeyCode["KEY_LEFTPAREN"] = get_TK_KEY_LEFTPAREN()] = "KEY_LEFTPAREN";
    TKeyCode[TKeyCode["KEY_RIGHTPAREN"] = get_TK_KEY_RIGHTPAREN()] = "KEY_RIGHTPAREN";
    TKeyCode[TKeyCode["KEY_ASTERISK"] = get_TK_KEY_ASTERISK()] = "KEY_ASTERISK";
    TKeyCode[TKeyCode["KEY_PLUS"] = get_TK_KEY_PLUS()] = "KEY_PLUS";
    TKeyCode[TKeyCode["KEY_COMMA"] = get_TK_KEY_COMMA()] = "KEY_COMMA";
    TKeyCode[TKeyCode["KEY_MINUS"] = get_TK_KEY_MINUS()] = "KEY_MINUS";
    TKeyCode[TKeyCode["KEY_PERIOD"] = get_TK_KEY_PERIOD()] = "KEY_PERIOD";
    TKeyCode[TKeyCode["KEY_SLASH"] = get_TK_KEY_SLASH()] = "KEY_SLASH";
    TKeyCode[TKeyCode["KEY_0"] = get_TK_KEY_0()] = "KEY_0";
    TKeyCode[TKeyCode["KEY_1"] = get_TK_KEY_1()] = "KEY_1";
    TKeyCode[TKeyCode["KEY_2"] = get_TK_KEY_2()] = "KEY_2";
    TKeyCode[TKeyCode["KEY_3"] = get_TK_KEY_3()] = "KEY_3";
    TKeyCode[TKeyCode["KEY_4"] = get_TK_KEY_4()] = "KEY_4";
    TKeyCode[TKeyCode["KEY_5"] = get_TK_KEY_5()] = "KEY_5";
    TKeyCode[TKeyCode["KEY_6"] = get_TK_KEY_6()] = "KEY_6";
    TKeyCode[TKeyCode["KEY_7"] = get_TK_KEY_7()] = "KEY_7";
    TKeyCode[TKeyCode["KEY_8"] = get_TK_KEY_8()] = "KEY_8";
    TKeyCode[TKeyCode["KEY_9"] = get_TK_KEY_9()] = "KEY_9";
    TKeyCode[TKeyCode["KEY_COLON"] = get_TK_KEY_COLON()] = "KEY_COLON";
    TKeyCode[TKeyCode["KEY_SEMICOLON"] = get_TK_KEY_SEMICOLON()] = "KEY_SEMICOLON";
    TKeyCode[TKeyCode["KEY_LESS"] = get_TK_KEY_LESS()] = "KEY_LESS";
    TKeyCode[TKeyCode["KEY_EQUAL"] = get_TK_KEY_EQUAL()] = "KEY_EQUAL";
    TKeyCode[TKeyCode["KEY_GREATER"] = get_TK_KEY_GREATER()] = "KEY_GREATER";
    TKeyCode[TKeyCode["KEY_QUESTION"] = get_TK_KEY_QUESTION()] = "KEY_QUESTION";
    TKeyCode[TKeyCode["KEY_AT"] = get_TK_KEY_AT()] = "KEY_AT";
    TKeyCode[TKeyCode["KEY_LEFTBRACKET"] = get_TK_KEY_LEFTBRACKET()] = "KEY_LEFTBRACKET";
    TKeyCode[TKeyCode["KEY_BACKSLASH"] = get_TK_KEY_BACKSLASH()] = "KEY_BACKSLASH";
    TKeyCode[TKeyCode["KEY_RIGHTBRACKET"] = get_TK_KEY_RIGHTBRACKET()] = "KEY_RIGHTBRACKET";
    TKeyCode[TKeyCode["KEY_CARET"] = get_TK_KEY_CARET()] = "KEY_CARET";
    TKeyCode[TKeyCode["KEY_UNDERSCORE"] = get_TK_KEY_UNDERSCORE()] = "KEY_UNDERSCORE";
    TKeyCode[TKeyCode["KEY_BACKQUOTE"] = get_TK_KEY_BACKQUOTE()] = "KEY_BACKQUOTE";
    TKeyCode[TKeyCode["KEY_a"] = get_TK_KEY_a()] = "KEY_a";
    TKeyCode[TKeyCode["KEY_b"] = get_TK_KEY_b()] = "KEY_b";
    TKeyCode[TKeyCode["KEY_c"] = get_TK_KEY_c()] = "KEY_c";
    TKeyCode[TKeyCode["KEY_d"] = get_TK_KEY_d()] = "KEY_d";
    TKeyCode[TKeyCode["KEY_e"] = get_TK_KEY_e()] = "KEY_e";
    TKeyCode[TKeyCode["KEY_f"] = get_TK_KEY_f()] = "KEY_f";
    TKeyCode[TKeyCode["KEY_g"] = get_TK_KEY_g()] = "KEY_g";
    TKeyCode[TKeyCode["KEY_h"] = get_TK_KEY_h()] = "KEY_h";
    TKeyCode[TKeyCode["KEY_i"] = get_TK_KEY_i()] = "KEY_i";
    TKeyCode[TKeyCode["KEY_j"] = get_TK_KEY_j()] = "KEY_j";
    TKeyCode[TKeyCode["KEY_k"] = get_TK_KEY_k()] = "KEY_k";
    TKeyCode[TKeyCode["KEY_l"] = get_TK_KEY_l()] = "KEY_l";
    TKeyCode[TKeyCode["KEY_m"] = get_TK_KEY_m()] = "KEY_m";
    TKeyCode[TKeyCode["KEY_n"] = get_TK_KEY_n()] = "KEY_n";
    TKeyCode[TKeyCode["KEY_o"] = get_TK_KEY_o()] = "KEY_o";
    TKeyCode[TKeyCode["KEY_p"] = get_TK_KEY_p()] = "KEY_p";
    TKeyCode[TKeyCode["KEY_q"] = get_TK_KEY_q()] = "KEY_q";
    TKeyCode[TKeyCode["KEY_r"] = get_TK_KEY_r()] = "KEY_r";
    TKeyCode[TKeyCode["KEY_s"] = get_TK_KEY_s()] = "KEY_s";
    TKeyCode[TKeyCode["KEY_t"] = get_TK_KEY_t()] = "KEY_t";
    TKeyCode[TKeyCode["KEY_u"] = get_TK_KEY_u()] = "KEY_u";
    TKeyCode[TKeyCode["KEY_v"] = get_TK_KEY_v()] = "KEY_v";
    TKeyCode[TKeyCode["KEY_w"] = get_TK_KEY_w()] = "KEY_w";
    TKeyCode[TKeyCode["KEY_x"] = get_TK_KEY_x()] = "KEY_x";
    TKeyCode[TKeyCode["KEY_y"] = get_TK_KEY_y()] = "KEY_y";
    TKeyCode[TKeyCode["KEY_z"] = get_TK_KEY_z()] = "KEY_z";
    TKeyCode[TKeyCode["KEY_A"] = get_TK_KEY_A()] = "KEY_A";
    TKeyCode[TKeyCode["KEY_B"] = get_TK_KEY_B()] = "KEY_B";
    TKeyCode[TKeyCode["KEY_C"] = get_TK_KEY_C()] = "KEY_C";
    TKeyCode[TKeyCode["KEY_D"] = get_TK_KEY_D()] = "KEY_D";
    TKeyCode[TKeyCode["KEY_E"] = get_TK_KEY_E()] = "KEY_E";
    TKeyCode[TKeyCode["KEY_F"] = get_TK_KEY_F()] = "KEY_F";
    TKeyCode[TKeyCode["KEY_G"] = get_TK_KEY_G()] = "KEY_G";
    TKeyCode[TKeyCode["KEY_H"] = get_TK_KEY_H()] = "KEY_H";
    TKeyCode[TKeyCode["KEY_I"] = get_TK_KEY_I()] = "KEY_I";
    TKeyCode[TKeyCode["KEY_J"] = get_TK_KEY_J()] = "KEY_J";
    TKeyCode[TKeyCode["KEY_K"] = get_TK_KEY_K()] = "KEY_K";
    TKeyCode[TKeyCode["KEY_L"] = get_TK_KEY_L()] = "KEY_L";
    TKeyCode[TKeyCode["KEY_M"] = get_TK_KEY_M()] = "KEY_M";
    TKeyCode[TKeyCode["KEY_N"] = get_TK_KEY_N()] = "KEY_N";
    TKeyCode[TKeyCode["KEY_O"] = get_TK_KEY_O()] = "KEY_O";
    TKeyCode[TKeyCode["KEY_P"] = get_TK_KEY_P()] = "KEY_P";
    TKeyCode[TKeyCode["KEY_Q"] = get_TK_KEY_Q()] = "KEY_Q";
    TKeyCode[TKeyCode["KEY_R"] = get_TK_KEY_R()] = "KEY_R";
    TKeyCode[TKeyCode["KEY_S"] = get_TK_KEY_S()] = "KEY_S";
    TKeyCode[TKeyCode["KEY_T"] = get_TK_KEY_T()] = "KEY_T";
    TKeyCode[TKeyCode["KEY_U"] = get_TK_KEY_U()] = "KEY_U";
    TKeyCode[TKeyCode["KEY_V"] = get_TK_KEY_V()] = "KEY_V";
    TKeyCode[TKeyCode["KEY_W"] = get_TK_KEY_W()] = "KEY_W";
    TKeyCode[TKeyCode["KEY_X"] = get_TK_KEY_X()] = "KEY_X";
    TKeyCode[TKeyCode["KEY_Y"] = get_TK_KEY_Y()] = "KEY_Y";
    TKeyCode[TKeyCode["KEY_Z"] = get_TK_KEY_Z()] = "KEY_Z";
    TKeyCode[TKeyCode["KEY_DOT"] = get_TK_KEY_DOT()] = "KEY_DOT";
    TKeyCode[TKeyCode["KEY_DELETE"] = get_TK_KEY_DELETE()] = "KEY_DELETE";
    TKeyCode[TKeyCode["KEY_LEFTBRACE"] = get_TK_KEY_LEFTBRACE()] = "KEY_LEFTBRACE";
    TKeyCode[TKeyCode["KEY_RIGHTBRACE"] = get_TK_KEY_RIGHTBRACE()] = "KEY_RIGHTBRACE";
    TKeyCode[TKeyCode["KEY_LSHIFT"] = get_TK_KEY_LSHIFT()] = "KEY_LSHIFT";
    TKeyCode[TKeyCode["KEY_RSHIFT"] = get_TK_KEY_RSHIFT()] = "KEY_RSHIFT";
    TKeyCode[TKeyCode["KEY_LCTRL"] = get_TK_KEY_LCTRL()] = "KEY_LCTRL";
    TKeyCode[TKeyCode["KEY_RCTRL"] = get_TK_KEY_RCTRL()] = "KEY_RCTRL";
    TKeyCode[TKeyCode["KEY_LALT"] = get_TK_KEY_LALT()] = "KEY_LALT";
    TKeyCode[TKeyCode["KEY_RALT"] = get_TK_KEY_RALT()] = "KEY_RALT";
    TKeyCode[TKeyCode["KEY_CAPSLOCK"] = get_TK_KEY_CAPSLOCK()] = "KEY_CAPSLOCK";
    TKeyCode[TKeyCode["KEY_HOME"] = get_TK_KEY_HOME()] = "KEY_HOME";
    TKeyCode[TKeyCode["KEY_END"] = get_TK_KEY_END()] = "KEY_END";
    TKeyCode[TKeyCode["KEY_INSERT"] = get_TK_KEY_INSERT()] = "KEY_INSERT";
    TKeyCode[TKeyCode["KEY_UP"] = get_TK_KEY_UP()] = "KEY_UP";
    TKeyCode[TKeyCode["KEY_DOWN"] = get_TK_KEY_DOWN()] = "KEY_DOWN";
    TKeyCode[TKeyCode["KEY_LEFT"] = get_TK_KEY_LEFT()] = "KEY_LEFT";
    TKeyCode[TKeyCode["KEY_RIGHT"] = get_TK_KEY_RIGHT()] = "KEY_RIGHT";
    TKeyCode[TKeyCode["KEY_PAGEUP"] = get_TK_KEY_PAGEUP()] = "KEY_PAGEUP";
    TKeyCode[TKeyCode["KEY_PAGEDOWN"] = get_TK_KEY_PAGEDOWN()] = "KEY_PAGEDOWN";
    TKeyCode[TKeyCode["KEY_F1"] = get_TK_KEY_F1()] = "KEY_F1";
    TKeyCode[TKeyCode["KEY_F2"] = get_TK_KEY_F2()] = "KEY_F2";
    TKeyCode[TKeyCode["KEY_F3"] = get_TK_KEY_F3()] = "KEY_F3";
    TKeyCode[TKeyCode["KEY_F4"] = get_TK_KEY_F4()] = "KEY_F4";
    TKeyCode[TKeyCode["KEY_F5"] = get_TK_KEY_F5()] = "KEY_F5";
    TKeyCode[TKeyCode["KEY_F6"] = get_TK_KEY_F6()] = "KEY_F6";
    TKeyCode[TKeyCode["KEY_F7"] = get_TK_KEY_F7()] = "KEY_F7";
    TKeyCode[TKeyCode["KEY_F8"] = get_TK_KEY_F8()] = "KEY_F8";
    TKeyCode[TKeyCode["KEY_F9"] = get_TK_KEY_F9()] = "KEY_F9";
    TKeyCode[TKeyCode["KEY_F10"] = get_TK_KEY_F10()] = "KEY_F10";
    TKeyCode[TKeyCode["KEY_F11"] = get_TK_KEY_F11()] = "KEY_F11";
    TKeyCode[TKeyCode["KEY_F12"] = get_TK_KEY_F12()] = "KEY_F12";
    TKeyCode[TKeyCode["KEY_MENU"] = get_TK_KEY_MENU()] = "KEY_MENU";
    TKeyCode[TKeyCode["KEY_COMMAND"] = get_TK_KEY_COMMAND()] = "KEY_COMMAND";
    TKeyCode[TKeyCode["KEY_BACK"] = get_TK_KEY_BACK()] = "KEY_BACK";
    TKeyCode[TKeyCode["KEY_CANCEL"] = get_TK_KEY_CANCEL()] = "KEY_CANCEL";
})(TKeyCode || (TKeyCode = {}));
;
var TLocaleInfo = /** @class */ (function () {
    function TLocaleInfo(nativeObj) {
        this.nativeObj = nativeObj;
    }
    TLocaleInfo.instance = function () {
        return new TLocaleInfo(locale_info());
    };
    TLocaleInfo.prototype.tr = function (text) {
        return locale_info_tr(this.nativeObj, text);
    };
    TLocaleInfo.prototype.change = function (language, country) {
        return locale_info_change(this.nativeObj, language, country);
    };
    TLocaleInfo.prototype.off = function (id) {
        return locale_info_off(this.nativeObj, id);
    };
    return TLocaleInfo;
}());
var TAssetsManager = /** @class */ (function () {
    function TAssetsManager(nativeObj) {
        this.nativeObj = nativeObj;
    }
    TAssetsManager.instance = function () {
        return new TAssetsManager(assets_manager());
    };
    TAssetsManager.prototype.setTheme = function (theme) {
        return assets_manager_set_theme(this.nativeObj, theme);
    };
    TAssetsManager.prototype.ref = function (type, name) {
        return new TAssetInfo(assets_manager_ref(this.nativeObj, type, name));
    };
    TAssetsManager.prototype.unref = function (info) {
        return assets_manager_unref(this.nativeObj, info ? info.nativeObj : null);
    };
    return TAssetsManager;
}());
var TValueType;
(function (TValueType) {
    TValueType[TValueType["INVALID"] = get_VALUE_TYPE_INVALID()] = "INVALID";
    TValueType[TValueType["BOOL"] = get_VALUE_TYPE_BOOL()] = "BOOL";
    TValueType[TValueType["INT8"] = get_VALUE_TYPE_INT8()] = "INT8";
    TValueType[TValueType["UINT8"] = get_VALUE_TYPE_UINT8()] = "UINT8";
    TValueType[TValueType["INT16"] = get_VALUE_TYPE_INT16()] = "INT16";
    TValueType[TValueType["UINT16"] = get_VALUE_TYPE_UINT16()] = "UINT16";
    TValueType[TValueType["INT32"] = get_VALUE_TYPE_INT32()] = "INT32";
    TValueType[TValueType["UINT32"] = get_VALUE_TYPE_UINT32()] = "UINT32";
    TValueType[TValueType["INT64"] = get_VALUE_TYPE_INT64()] = "INT64";
    TValueType[TValueType["UINT64"] = get_VALUE_TYPE_UINT64()] = "UINT64";
    TValueType[TValueType["POINTER"] = get_VALUE_TYPE_POINTER()] = "POINTER";
    TValueType[TValueType["FLOAT"] = get_VALUE_TYPE_FLOAT()] = "FLOAT";
    TValueType[TValueType["FLOAT32"] = get_VALUE_TYPE_FLOAT32()] = "FLOAT32";
    TValueType[TValueType["DOUBLE"] = get_VALUE_TYPE_DOUBLE()] = "DOUBLE";
    TValueType[TValueType["STRING"] = get_VALUE_TYPE_STRING()] = "STRING";
    TValueType[TValueType["WSTRING"] = get_VALUE_TYPE_WSTRING()] = "WSTRING";
    TValueType[TValueType["OBJECT"] = get_VALUE_TYPE_OBJECT()] = "OBJECT";
    TValueType[TValueType["SIZED_STRING"] = get_VALUE_TYPE_SIZED_STRING()] = "SIZED_STRING";
    TValueType[TValueType["BINARY"] = get_VALUE_TYPE_BINARY()] = "BINARY";
    TValueType[TValueType["UBJSON"] = get_VALUE_TYPE_UBJSON()] = "UBJSON";
    TValueType[TValueType["TOKEN"] = get_VALUE_TYPE_TOKEN()] = "TOKEN";
})(TValueType || (TValueType = {}));
;
var TStyleId;
(function (TStyleId) {
    TStyleId[TStyleId["BG_COLOR"] = get_STYLE_ID_BG_COLOR()] = "BG_COLOR";
    TStyleId[TStyleId["FG_COLOR"] = get_STYLE_ID_FG_COLOR()] = "FG_COLOR";
    TStyleId[TStyleId["MASK_COLOR"] = get_STYLE_ID_MASK_COLOR()] = "MASK_COLOR";
    TStyleId[TStyleId["FONT_NAME"] = get_STYLE_ID_FONT_NAME()] = "FONT_NAME";
    TStyleId[TStyleId["FONT_SIZE"] = get_STYLE_ID_FONT_SIZE()] = "FONT_SIZE";
    TStyleId[TStyleId["FONT_STYLE"] = get_STYLE_ID_FONT_STYLE()] = "FONT_STYLE";
    TStyleId[TStyleId["TEXT_COLOR"] = get_STYLE_ID_TEXT_COLOR()] = "TEXT_COLOR";
    TStyleId[TStyleId["HIGHLIGHT_FONT_NAME"] = get_STYLE_ID_HIGHLIGHT_FONT_NAME()] = "HIGHLIGHT_FONT_NAME";
    TStyleId[TStyleId["HIGHLIGHT_FONT_SIZE"] = get_STYLE_ID_HIGHLIGHT_FONT_SIZE()] = "HIGHLIGHT_FONT_SIZE";
    TStyleId[TStyleId["HIGHLIGHT_TEXT_COLOR"] = get_STYLE_ID_HIGHLIGHT_TEXT_COLOR()] = "HIGHLIGHT_TEXT_COLOR";
    TStyleId[TStyleId["TIPS_TEXT_COLOR"] = get_STYLE_ID_TIPS_TEXT_COLOR()] = "TIPS_TEXT_COLOR";
    TStyleId[TStyleId["TEXT_ALIGN_H"] = get_STYLE_ID_TEXT_ALIGN_H()] = "TEXT_ALIGN_H";
    TStyleId[TStyleId["TEXT_ALIGN_V"] = get_STYLE_ID_TEXT_ALIGN_V()] = "TEXT_ALIGN_V";
    TStyleId[TStyleId["BORDER_COLOR"] = get_STYLE_ID_BORDER_COLOR()] = "BORDER_COLOR";
    TStyleId[TStyleId["BORDER_WIDTH"] = get_STYLE_ID_BORDER_WIDTH()] = "BORDER_WIDTH";
    TStyleId[TStyleId["BORDER"] = get_STYLE_ID_BORDER()] = "BORDER";
    TStyleId[TStyleId["BG_IMAGE"] = get_STYLE_ID_BG_IMAGE()] = "BG_IMAGE";
    TStyleId[TStyleId["BG_IMAGE_DRAW_TYPE"] = get_STYLE_ID_BG_IMAGE_DRAW_TYPE()] = "BG_IMAGE_DRAW_TYPE";
    TStyleId[TStyleId["ICON"] = get_STYLE_ID_ICON()] = "ICON";
    TStyleId[TStyleId["FG_IMAGE"] = get_STYLE_ID_FG_IMAGE()] = "FG_IMAGE";
    TStyleId[TStyleId["FG_IMAGE_DRAW_TYPE"] = get_STYLE_ID_FG_IMAGE_DRAW_TYPE()] = "FG_IMAGE_DRAW_TYPE";
    TStyleId[TStyleId["SPACER"] = get_STYLE_ID_SPACER()] = "SPACER";
    TStyleId[TStyleId["MARGIN"] = get_STYLE_ID_MARGIN()] = "MARGIN";
    TStyleId[TStyleId["MARGIN_LEFT"] = get_STYLE_ID_MARGIN_LEFT()] = "MARGIN_LEFT";
    TStyleId[TStyleId["MARGIN_RIGHT"] = get_STYLE_ID_MARGIN_RIGHT()] = "MARGIN_RIGHT";
    TStyleId[TStyleId["MARGIN_TOP"] = get_STYLE_ID_MARGIN_TOP()] = "MARGIN_TOP";
    TStyleId[TStyleId["MARGIN_BOTTOM"] = get_STYLE_ID_MARGIN_BOTTOM()] = "MARGIN_BOTTOM";
    TStyleId[TStyleId["ICON_AT"] = get_STYLE_ID_ICON_AT()] = "ICON_AT";
    TStyleId[TStyleId["ACTIVE_ICON"] = get_STYLE_ID_ACTIVE_ICON()] = "ACTIVE_ICON";
    TStyleId[TStyleId["X_OFFSET"] = get_STYLE_ID_X_OFFSET()] = "X_OFFSET";
    TStyleId[TStyleId["Y_OFFSET"] = get_STYLE_ID_Y_OFFSET()] = "Y_OFFSET";
    TStyleId[TStyleId["SELECTED_BG_COLOR"] = get_STYLE_ID_SELECTED_BG_COLOR()] = "SELECTED_BG_COLOR";
    TStyleId[TStyleId["SELECTED_FG_COLOR"] = get_STYLE_ID_SELECTED_FG_COLOR()] = "SELECTED_FG_COLOR";
    TStyleId[TStyleId["SELECTED_TEXT_COLOR"] = get_STYLE_ID_SELECTED_TEXT_COLOR()] = "SELECTED_TEXT_COLOR";
    TStyleId[TStyleId["ROUND_RADIUS"] = get_STYLE_ID_ROUND_RADIUS()] = "ROUND_RADIUS";
    TStyleId[TStyleId["ROUND_RADIUS_TOP_LETF"] = get_STYLE_ID_ROUND_RADIUS_TOP_LETF()] = "ROUND_RADIUS_TOP_LETF";
    TStyleId[TStyleId["ROUND_RADIUS_TOP_RIGHT"] = get_STYLE_ID_ROUND_RADIUS_TOP_RIGHT()] = "ROUND_RADIUS_TOP_RIGHT";
    TStyleId[TStyleId["ROUND_RADIUS_BOTTOM_LETF"] = get_STYLE_ID_ROUND_RADIUS_BOTTOM_LETF()] = "ROUND_RADIUS_BOTTOM_LETF";
    TStyleId[TStyleId["ROUND_RADIUS_BOTTOM_RIGHT"] = get_STYLE_ID_ROUND_RADIUS_BOTTOM_RIGHT()] = "ROUND_RADIUS_BOTTOM_RIGHT";
    TStyleId[TStyleId["CHILDREN_LAYOUT"] = get_STYLE_ID_CHILDREN_LAYOUT()] = "CHILDREN_LAYOUT";
    TStyleId[TStyleId["SELF_LAYOUT"] = get_STYLE_ID_SELF_LAYOUT()] = "SELF_LAYOUT";
})(TStyleId || (TStyleId = {}));
;
var TStyle = /** @class */ (function () {
    function TStyle(nativeObj) {
        this.nativeObj = nativeObj;
    }
    TStyle.prototype.notifyWidgetStateChanged = function (widget) {
        return style_notify_widget_state_changed(this.nativeObj, widget ? widget.nativeObj : null);
    };
    TStyle.prototype.isValid = function () {
        return style_is_valid(this.nativeObj);
    };
    TStyle.prototype.getInt = function (name, defval) {
        return style_get_int(this.nativeObj, name, defval);
    };
    TStyle.prototype.getStr = function (name, defval) {
        return style_get_str(this.nativeObj, name, defval);
    };
    TStyle.prototype.set = function (state, name, value) {
        return style_set(this.nativeObj, state, name, value ? value.nativeObj : null);
    };
    TStyle.prototype.isMutable = function () {
        return style_is_mutable(this.nativeObj);
    };
    return TStyle;
}());
var TTheme = /** @class */ (function () {
    function TTheme(nativeObj) {
        this.nativeObj = nativeObj;
    }
    TTheme.instance = function () {
        return new TTheme(theme());
    };
    return TTheme;
}());
var TTimer = /** @class */ (function () {
    function TTimer(nativeObj) {
        this.nativeObj = nativeObj;
    }
    TTimer.add = function (on_timer, ctx, duration) {
        return timer_add(TBrowser.addFunction(on_timer, "ii"), ctx, duration);
    };
    TTimer.remove = function (timer_id) {
        return timer_remove(timer_id);
    };
    TTimer.reset = function (timer_id) {
        return timer_reset(timer_id);
    };
    TTimer.modify = function (timer_id, duration) {
        return timer_modify(timer_id, duration);
    };
    return TTimer;
}());
var TAlignV;
(function (TAlignV) {
    TAlignV[TAlignV["NONE"] = get_ALIGN_V_NONE()] = "NONE";
    TAlignV[TAlignV["MIDDLE"] = get_ALIGN_V_MIDDLE()] = "MIDDLE";
    TAlignV[TAlignV["TOP"] = get_ALIGN_V_TOP()] = "TOP";
    TAlignV[TAlignV["BOTTOM"] = get_ALIGN_V_BOTTOM()] = "BOTTOM";
})(TAlignV || (TAlignV = {}));
;
var TAlignH;
(function (TAlignH) {
    TAlignH[TAlignH["NONE"] = get_ALIGN_H_NONE()] = "NONE";
    TAlignH[TAlignH["CENTER"] = get_ALIGN_H_CENTER()] = "CENTER";
    TAlignH[TAlignH["LEFT"] = get_ALIGN_H_LEFT()] = "LEFT";
    TAlignH[TAlignH["RIGHT"] = get_ALIGN_H_RIGHT()] = "RIGHT";
})(TAlignH || (TAlignH = {}));
;
var TAppType;
(function (TAppType) {
    TAppType[TAppType["MOBILE"] = get_APP_MOBILE()] = "MOBILE";
    TAppType[TAppType["SIMULATOR"] = get_APP_SIMULATOR()] = "SIMULATOR";
    TAppType[TAppType["DESKTOP"] = get_APP_DESKTOP()] = "DESKTOP";
})(TAppType || (TAppType = {}));
;
var TBitmapFormat;
(function (TBitmapFormat) {
    TBitmapFormat[TBitmapFormat["NONE"] = get_BITMAP_FMT_NONE()] = "NONE";
    TBitmapFormat[TBitmapFormat["RGBA8888"] = get_BITMAP_FMT_RGBA8888()] = "RGBA8888";
    TBitmapFormat[TBitmapFormat["ABGR8888"] = get_BITMAP_FMT_ABGR8888()] = "ABGR8888";
    TBitmapFormat[TBitmapFormat["BGRA8888"] = get_BITMAP_FMT_BGRA8888()] = "BGRA8888";
    TBitmapFormat[TBitmapFormat["ARGB8888"] = get_BITMAP_FMT_ARGB8888()] = "ARGB8888";
    TBitmapFormat[TBitmapFormat["RGB565"] = get_BITMAP_FMT_RGB565()] = "RGB565";
    TBitmapFormat[TBitmapFormat["BGR565"] = get_BITMAP_FMT_BGR565()] = "BGR565";
    TBitmapFormat[TBitmapFormat["RGB888"] = get_BITMAP_FMT_RGB888()] = "RGB888";
    TBitmapFormat[TBitmapFormat["BGR888"] = get_BITMAP_FMT_BGR888()] = "BGR888";
    TBitmapFormat[TBitmapFormat["GRAY"] = get_BITMAP_FMT_GRAY()] = "GRAY";
    TBitmapFormat[TBitmapFormat["MONO"] = get_BITMAP_FMT_MONO()] = "MONO";
})(TBitmapFormat || (TBitmapFormat = {}));
;
var TBitmapFlag;
(function (TBitmapFlag) {
    TBitmapFlag[TBitmapFlag["NONE"] = get_BITMAP_FLAG_NONE()] = "NONE";
    TBitmapFlag[TBitmapFlag["OPAQUE"] = get_BITMAP_FLAG_OPAQUE()] = "OPAQUE";
    TBitmapFlag[TBitmapFlag["IMMUTABLE"] = get_BITMAP_FLAG_IMMUTABLE()] = "IMMUTABLE";
    TBitmapFlag[TBitmapFlag["TEXTURE"] = get_BITMAP_FLAG_TEXTURE()] = "TEXTURE";
    TBitmapFlag[TBitmapFlag["CHANGED"] = get_BITMAP_FLAG_CHANGED()] = "CHANGED";
    TBitmapFlag[TBitmapFlag["PREMULTI_ALPHA"] = get_BITMAP_FLAG_PREMULTI_ALPHA()] = "PREMULTI_ALPHA";
})(TBitmapFlag || (TBitmapFlag = {}));
;
var TVgcanvas = /** @class */ (function () {
    function TVgcanvas(nativeObj) {
        this.nativeObj = nativeObj;
    }
    TVgcanvas.cast = function (vg) {
        return new TVgcanvas(vgcanvas_cast(vg ? (vg.nativeObj || vg) : null));
    };
    TVgcanvas.prototype.flush = function () {
        return vgcanvas_flush(this.nativeObj);
    };
    TVgcanvas.prototype.beginPath = function () {
        return vgcanvas_begin_path(this.nativeObj);
    };
    TVgcanvas.prototype.moveTo = function (x, y) {
        return vgcanvas_move_to(this.nativeObj, x, y);
    };
    TVgcanvas.prototype.lineTo = function (x, y) {
        return vgcanvas_line_to(this.nativeObj, x, y);
    };
    TVgcanvas.prototype.quadTo = function (cpx, cpy, x, y) {
        return vgcanvas_quad_to(this.nativeObj, cpx, cpy, x, y);
    };
    TVgcanvas.prototype.bezierTo = function (cp1x, cp1y, cp2x, cp2y, x, y) {
        return vgcanvas_bezier_to(this.nativeObj, cp1x, cp1y, cp2x, cp2y, x, y);
    };
    TVgcanvas.prototype.arcTo = function (x1, y1, x2, y2, r) {
        return vgcanvas_arc_to(this.nativeObj, x1, y1, x2, y2, r);
    };
    TVgcanvas.prototype.arc = function (x, y, r, start_angle, end_angle, ccw) {
        return vgcanvas_arc(this.nativeObj, x, y, r, start_angle, end_angle, ccw);
    };
    TVgcanvas.prototype.isPointInPath = function (x, y) {
        return vgcanvas_is_point_in_path(this.nativeObj, x, y);
    };
    TVgcanvas.prototype.rect = function (x, y, w, h) {
        return vgcanvas_rect(this.nativeObj, x, y, w, h);
    };
    TVgcanvas.prototype.roundedRect = function (x, y, w, h, r) {
        return vgcanvas_rounded_rect(this.nativeObj, x, y, w, h, r);
    };
    TVgcanvas.prototype.ellipse = function (x, y, rx, ry) {
        return vgcanvas_ellipse(this.nativeObj, x, y, rx, ry);
    };
    TVgcanvas.prototype.closePath = function () {
        return vgcanvas_close_path(this.nativeObj);
    };
    TVgcanvas.prototype.pathWinding = function (dir) {
        return vgcanvas_path_winding(this.nativeObj, dir);
    };
    TVgcanvas.prototype.rotate = function (rad) {
        return vgcanvas_rotate(this.nativeObj, rad);
    };
    TVgcanvas.prototype.scale = function (x, y) {
        return vgcanvas_scale(this.nativeObj, x, y);
    };
    TVgcanvas.prototype.translate = function (x, y) {
        return vgcanvas_translate(this.nativeObj, x, y);
    };
    TVgcanvas.prototype.transform = function (a, b, c, d, e, f) {
        return vgcanvas_transform(this.nativeObj, a, b, c, d, e, f);
    };
    TVgcanvas.prototype.setTransform = function (a, b, c, d, e, f) {
        return vgcanvas_set_transform(this.nativeObj, a, b, c, d, e, f);
    };
    TVgcanvas.prototype.clipRect = function (x, y, w, h) {
        return vgcanvas_clip_rect(this.nativeObj, x, y, w, h);
    };
    TVgcanvas.prototype.intersectClipRect = function (x, y, w, h) {
        return vgcanvas_intersect_clip_rect(this.nativeObj, x, y, w, h);
    };
    TVgcanvas.prototype.fill = function () {
        return vgcanvas_fill(this.nativeObj);
    };
    TVgcanvas.prototype.stroke = function () {
        return vgcanvas_stroke(this.nativeObj);
    };
    TVgcanvas.prototype.paint = function (stroke, img) {
        return vgcanvas_paint(this.nativeObj, stroke, img ? img.nativeObj : null);
    };
    TVgcanvas.prototype.setFont = function (font) {
        return vgcanvas_set_font(this.nativeObj, font);
    };
    TVgcanvas.prototype.setFontSize = function (font) {
        return vgcanvas_set_font_size(this.nativeObj, font);
    };
    TVgcanvas.prototype.setTextAlign = function (value) {
        return vgcanvas_set_text_align(this.nativeObj, value);
    };
    TVgcanvas.prototype.setTextBaseline = function (value) {
        return vgcanvas_set_text_baseline(this.nativeObj, value);
    };
    TVgcanvas.prototype.fillText = function (text, x, y, max_width) {
        return vgcanvas_fill_text(this.nativeObj, text, x, y, max_width);
    };
    TVgcanvas.prototype.measureText = function (text) {
        return vgcanvas_measure_text(this.nativeObj, text);
    };
    TVgcanvas.prototype.drawImage = function (img, sx, sy, sw, sh, dx, dy, dw, dh) {
        return vgcanvas_draw_image(this.nativeObj, img ? img.nativeObj : null, sx, sy, sw, sh, dx, dy, dw, dh);
    };
    TVgcanvas.prototype.drawIcon = function (img, sx, sy, sw, sh, dx, dy, dw, dh) {
        return vgcanvas_draw_icon(this.nativeObj, img ? img.nativeObj : null, sx, sy, sw, sh, dx, dy, dw, dh);
    };
    TVgcanvas.prototype.setAntialias = function (value) {
        return vgcanvas_set_antialias(this.nativeObj, value);
    };
    TVgcanvas.prototype.setGlobalAlpha = function (alpha) {
        return vgcanvas_set_global_alpha(this.nativeObj, alpha);
    };
    TVgcanvas.prototype.setLineWidth = function (value) {
        return vgcanvas_set_line_width(this.nativeObj, value);
    };
    TVgcanvas.prototype.setFillColor = function (color) {
        return vgcanvas_set_fill_color_str(this.nativeObj, color);
    };
    TVgcanvas.prototype.setStrokeColor = function (color) {
        return vgcanvas_set_stroke_color_str(this.nativeObj, color);
    };
    TVgcanvas.prototype.setLineCap = function (value) {
        return vgcanvas_set_line_cap(this.nativeObj, value);
    };
    TVgcanvas.prototype.setLineJoin = function (value) {
        return vgcanvas_set_line_join(this.nativeObj, value);
    };
    TVgcanvas.prototype.setMiterLimit = function (value) {
        return vgcanvas_set_miter_limit(this.nativeObj, value);
    };
    TVgcanvas.prototype.save = function () {
        return vgcanvas_save(this.nativeObj);
    };
    TVgcanvas.prototype.restore = function () {
        return vgcanvas_restore(this.nativeObj);
    };
    Object.defineProperty(TVgcanvas.prototype, "w", {
        get: function () {
            return vgcanvas_t_get_prop_w(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TVgcanvas.prototype, "h", {
        get: function () {
            return vgcanvas_t_get_prop_h(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TVgcanvas.prototype, "stride", {
        get: function () {
            return vgcanvas_t_get_prop_stride(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TVgcanvas.prototype, "ratio", {
        get: function () {
            return vgcanvas_t_get_prop_ratio(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TVgcanvas.prototype, "antiAlias", {
        get: function () {
            return vgcanvas_t_get_prop_anti_alias(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TVgcanvas.prototype, "lineWidth", {
        get: function () {
            return vgcanvas_t_get_prop_line_width(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TVgcanvas.prototype, "globalAlpha", {
        get: function () {
            return vgcanvas_t_get_prop_global_alpha(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TVgcanvas.prototype, "miterLimit", {
        get: function () {
            return vgcanvas_t_get_prop_miter_limit(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TVgcanvas.prototype, "lineCap", {
        get: function () {
            return vgcanvas_t_get_prop_line_cap(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TVgcanvas.prototype, "lineJoin", {
        get: function () {
            return vgcanvas_t_get_prop_line_join(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TVgcanvas.prototype, "font", {
        get: function () {
            return vgcanvas_t_get_prop_font(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TVgcanvas.prototype, "fontSize", {
        get: function () {
            return vgcanvas_t_get_prop_font_size(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TVgcanvas.prototype, "textAlign", {
        get: function () {
            return vgcanvas_t_get_prop_text_align(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TVgcanvas.prototype, "textBaseline", {
        get: function () {
            return vgcanvas_t_get_prop_text_baseline(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TVgcanvas;
}());
var TVgcanvasLineCap;
(function (TVgcanvasLineCap) {
    TVgcanvasLineCap[TVgcanvasLineCap["ROUND"] = get_VGCANVAS_LINE_CAP_ROUND()] = "ROUND";
    TVgcanvasLineCap[TVgcanvasLineCap["SQUARE"] = get_VGCANVAS_LINE_CAP_SQUARE()] = "SQUARE";
})(TVgcanvasLineCap || (TVgcanvasLineCap = {}));
;
var TVgcanvasLineJoin;
(function (TVgcanvasLineJoin) {
    TVgcanvasLineJoin[TVgcanvasLineJoin["ROUND"] = get_VGCANVAS_LINE_JOIN_ROUND()] = "ROUND";
    TVgcanvasLineJoin[TVgcanvasLineJoin["BEVEL"] = get_VGCANVAS_LINE_JOIN_BEVEL()] = "BEVEL";
    TVgcanvasLineJoin[TVgcanvasLineJoin["MITTER"] = get_VGCANVAS_LINE_JOIN_MITTER()] = "MITTER";
})(TVgcanvasLineJoin || (TVgcanvasLineJoin = {}));
;
var TWidgetProp;
(function (TWidgetProp) {
    TWidgetProp[TWidgetProp["EXEC"] = get_WIDGET_PROP_EXEC()] = "EXEC";
    TWidgetProp[TWidgetProp["X"] = get_WIDGET_PROP_X()] = "X";
    TWidgetProp[TWidgetProp["Y"] = get_WIDGET_PROP_Y()] = "Y";
    TWidgetProp[TWidgetProp["W"] = get_WIDGET_PROP_W()] = "W";
    TWidgetProp[TWidgetProp["H"] = get_WIDGET_PROP_H()] = "H";
    TWidgetProp[TWidgetProp["INPUTING"] = get_WIDGET_PROP_INPUTING()] = "INPUTING";
    TWidgetProp[TWidgetProp["CARET_X"] = get_WIDGET_PROP_CARET_X()] = "CARET_X";
    TWidgetProp[TWidgetProp["CARET_Y"] = get_WIDGET_PROP_CARET_Y()] = "CARET_Y";
    TWidgetProp[TWidgetProp["DIRTY_RECT_TOLERANCE"] = get_WIDGET_PROP_DIRTY_RECT_TOLERANCE()] = "DIRTY_RECT_TOLERANCE";
    TWidgetProp[TWidgetProp["BIDI"] = get_WIDGET_PROP_BIDI()] = "BIDI";
    TWidgetProp[TWidgetProp["CANVAS"] = get_WIDGET_PROP_CANVAS()] = "CANVAS";
    TWidgetProp[TWidgetProp["LOCALIZE_OPTIONS"] = get_WIDGET_PROP_LOCALIZE_OPTIONS()] = "LOCALIZE_OPTIONS";
    TWidgetProp[TWidgetProp["NATIVE_WINDOW"] = get_WIDGET_PROP_NATIVE_WINDOW()] = "NATIVE_WINDOW";
    TWidgetProp[TWidgetProp["HIGHLIGHT"] = get_WIDGET_PROP_HIGHLIGHT()] = "HIGHLIGHT";
    TWidgetProp[TWidgetProp["BAR_SIZE"] = get_WIDGET_PROP_BAR_SIZE()] = "BAR_SIZE";
    TWidgetProp[TWidgetProp["OPACITY"] = get_WIDGET_PROP_OPACITY()] = "OPACITY";
    TWidgetProp[TWidgetProp["MIN_W"] = get_WIDGET_PROP_MIN_W()] = "MIN_W";
    TWidgetProp[TWidgetProp["MAX_W"] = get_WIDGET_PROP_MAX_W()] = "MAX_W";
    TWidgetProp[TWidgetProp["AUTO_ADJUST_SIZE"] = get_WIDGET_PROP_AUTO_ADJUST_SIZE()] = "AUTO_ADJUST_SIZE";
    TWidgetProp[TWidgetProp["SINGLE_INSTANCE"] = get_WIDGET_PROP_SINGLE_INSTANCE()] = "SINGLE_INSTANCE";
    TWidgetProp[TWidgetProp["CHILDREN_LAYOUT"] = get_WIDGET_PROP_CHILDREN_LAYOUT()] = "CHILDREN_LAYOUT";
    TWidgetProp[TWidgetProp["LAYOUT"] = get_WIDGET_PROP_LAYOUT()] = "LAYOUT";
    TWidgetProp[TWidgetProp["SELF_LAYOUT"] = get_WIDGET_PROP_SELF_LAYOUT()] = "SELF_LAYOUT";
    TWidgetProp[TWidgetProp["LAYOUT_W"] = get_WIDGET_PROP_LAYOUT_W()] = "LAYOUT_W";
    TWidgetProp[TWidgetProp["LAYOUT_H"] = get_WIDGET_PROP_LAYOUT_H()] = "LAYOUT_H";
    TWidgetProp[TWidgetProp["VIRTUAL_W"] = get_WIDGET_PROP_VIRTUAL_W()] = "VIRTUAL_W";
    TWidgetProp[TWidgetProp["VIRTUAL_H"] = get_WIDGET_PROP_VIRTUAL_H()] = "VIRTUAL_H";
    TWidgetProp[TWidgetProp["NAME"] = get_WIDGET_PROP_NAME()] = "NAME";
    TWidgetProp[TWidgetProp["TYPE"] = get_WIDGET_PROP_TYPE()] = "TYPE";
    TWidgetProp[TWidgetProp["CLOSABLE"] = get_WIDGET_PROP_CLOSABLE()] = "CLOSABLE";
    TWidgetProp[TWidgetProp["POINTER_CURSOR"] = get_WIDGET_PROP_POINTER_CURSOR()] = "POINTER_CURSOR";
    TWidgetProp[TWidgetProp["VALUE"] = get_WIDGET_PROP_VALUE()] = "VALUE";
    TWidgetProp[TWidgetProp["LENGTH"] = get_WIDGET_PROP_LENGTH()] = "LENGTH";
    TWidgetProp[TWidgetProp["LINE_WRAP"] = get_WIDGET_PROP_LINE_WRAP()] = "LINE_WRAP";
    TWidgetProp[TWidgetProp["TEXT"] = get_WIDGET_PROP_TEXT()] = "TEXT";
    TWidgetProp[TWidgetProp["TR_TEXT"] = get_WIDGET_PROP_TR_TEXT()] = "TR_TEXT";
    TWidgetProp[TWidgetProp["STYLE"] = get_WIDGET_PROP_STYLE()] = "STYLE";
    TWidgetProp[TWidgetProp["ENABLE"] = get_WIDGET_PROP_ENABLE()] = "ENABLE";
    TWidgetProp[TWidgetProp["FEEDBACK"] = get_WIDGET_PROP_FEEDBACK()] = "FEEDBACK";
    TWidgetProp[TWidgetProp["FLOATING"] = get_WIDGET_PROP_FLOATING()] = "FLOATING";
    TWidgetProp[TWidgetProp["MARGIN"] = get_WIDGET_PROP_MARGIN()] = "MARGIN";
    TWidgetProp[TWidgetProp["SPACING"] = get_WIDGET_PROP_SPACING()] = "SPACING";
    TWidgetProp[TWidgetProp["LEFT_MARGIN"] = get_WIDGET_PROP_LEFT_MARGIN()] = "LEFT_MARGIN";
    TWidgetProp[TWidgetProp["RIGHT_MARGIN"] = get_WIDGET_PROP_RIGHT_MARGIN()] = "RIGHT_MARGIN";
    TWidgetProp[TWidgetProp["TOP_MARGIN"] = get_WIDGET_PROP_TOP_MARGIN()] = "TOP_MARGIN";
    TWidgetProp[TWidgetProp["BOTTOM_MARGIN"] = get_WIDGET_PROP_BOTTOM_MARGIN()] = "BOTTOM_MARGIN";
    TWidgetProp[TWidgetProp["STEP"] = get_WIDGET_PROP_STEP()] = "STEP";
    TWidgetProp[TWidgetProp["VISIBLE"] = get_WIDGET_PROP_VISIBLE()] = "VISIBLE";
    TWidgetProp[TWidgetProp["SENSITIVE"] = get_WIDGET_PROP_SENSITIVE()] = "SENSITIVE";
    TWidgetProp[TWidgetProp["ANIMATION"] = get_WIDGET_PROP_ANIMATION()] = "ANIMATION";
    TWidgetProp[TWidgetProp["ANIM_HINT"] = get_WIDGET_PROP_ANIM_HINT()] = "ANIM_HINT";
    TWidgetProp[TWidgetProp["FULLSCREEN"] = get_WIDGET_PROP_FULLSCREEN()] = "FULLSCREEN";
    TWidgetProp[TWidgetProp["DISABLE_ANIM"] = get_WIDGET_PROP_DISABLE_ANIM()] = "DISABLE_ANIM";
    TWidgetProp[TWidgetProp["OPEN_ANIM_HINT"] = get_WIDGET_PROP_OPEN_ANIM_HINT()] = "OPEN_ANIM_HINT";
    TWidgetProp[TWidgetProp["CLOSE_ANIM_HINT"] = get_WIDGET_PROP_CLOSE_ANIM_HINT()] = "CLOSE_ANIM_HINT";
    TWidgetProp[TWidgetProp["MIN"] = get_WIDGET_PROP_MIN()] = "MIN";
    TWidgetProp[TWidgetProp["ACTION_TEXT"] = get_WIDGET_PROP_ACTION_TEXT()] = "ACTION_TEXT";
    TWidgetProp[TWidgetProp["TIPS"] = get_WIDGET_PROP_TIPS()] = "TIPS";
    TWidgetProp[TWidgetProp["TR_TIPS"] = get_WIDGET_PROP_TR_TIPS()] = "TR_TIPS";
    TWidgetProp[TWidgetProp["INPUT_TYPE"] = get_WIDGET_PROP_INPUT_TYPE()] = "INPUT_TYPE";
    TWidgetProp[TWidgetProp["KEYBOARD"] = get_WIDGET_PROP_KEYBOARD()] = "KEYBOARD";
    TWidgetProp[TWidgetProp["DEFAULT_FOCUSED_CHILD"] = get_WIDGET_PROP_DEFAULT_FOCUSED_CHILD()] = "DEFAULT_FOCUSED_CHILD";
    TWidgetProp[TWidgetProp["READONLY"] = get_WIDGET_PROP_READONLY()] = "READONLY";
    TWidgetProp[TWidgetProp["CANCELABLE"] = get_WIDGET_PROP_CANCELABLE()] = "CANCELABLE";
    TWidgetProp[TWidgetProp["PASSWORD_VISIBLE"] = get_WIDGET_PROP_PASSWORD_VISIBLE()] = "PASSWORD_VISIBLE";
    TWidgetProp[TWidgetProp["ACTIVE"] = get_WIDGET_PROP_ACTIVE()] = "ACTIVE";
    TWidgetProp[TWidgetProp["VERTICAL"] = get_WIDGET_PROP_VERTICAL()] = "VERTICAL";
    TWidgetProp[TWidgetProp["SHOW_TEXT"] = get_WIDGET_PROP_SHOW_TEXT()] = "SHOW_TEXT";
    TWidgetProp[TWidgetProp["XOFFSET"] = get_WIDGET_PROP_XOFFSET()] = "XOFFSET";
    TWidgetProp[TWidgetProp["YOFFSET"] = get_WIDGET_PROP_YOFFSET()] = "YOFFSET";
    TWidgetProp[TWidgetProp["ALIGN_V"] = get_WIDGET_PROP_ALIGN_V()] = "ALIGN_V";
    TWidgetProp[TWidgetProp["ALIGN_H"] = get_WIDGET_PROP_ALIGN_H()] = "ALIGN_H";
    TWidgetProp[TWidgetProp["AUTO_PLAY"] = get_WIDGET_PROP_AUTO_PLAY()] = "AUTO_PLAY";
    TWidgetProp[TWidgetProp["LOOP"] = get_WIDGET_PROP_LOOP()] = "LOOP";
    TWidgetProp[TWidgetProp["AUTO_FIX"] = get_WIDGET_PROP_AUTO_FIX()] = "AUTO_FIX";
    TWidgetProp[TWidgetProp["SELECT_NONE_WHEN_FOCUSED"] = get_WIDGET_PROP_SELECT_NONE_WHEN_FOCUSED()] = "SELECT_NONE_WHEN_FOCUSED";
    TWidgetProp[TWidgetProp["OPEN_IM_WHEN_FOCUSED"] = get_WIDGET_PROP_OPEN_IM_WHEN_FOCUSED()] = "OPEN_IM_WHEN_FOCUSED";
    TWidgetProp[TWidgetProp["CLOSE_IM_WHEN_BLURED"] = get_WIDGET_PROP_CLOSE_IM_WHEN_BLURED()] = "CLOSE_IM_WHEN_BLURED";
    TWidgetProp[TWidgetProp["X_MIN"] = get_WIDGET_PROP_X_MIN()] = "X_MIN";
    TWidgetProp[TWidgetProp["X_MAX"] = get_WIDGET_PROP_X_MAX()] = "X_MAX";
    TWidgetProp[TWidgetProp["Y_MIN"] = get_WIDGET_PROP_Y_MIN()] = "Y_MIN";
    TWidgetProp[TWidgetProp["Y_MAX"] = get_WIDGET_PROP_Y_MAX()] = "Y_MAX";
    TWidgetProp[TWidgetProp["MAX"] = get_WIDGET_PROP_MAX()] = "MAX";
    TWidgetProp[TWidgetProp["GRAB_KEYS"] = get_WIDGET_PROP_GRAB_KEYS()] = "GRAB_KEYS";
    TWidgetProp[TWidgetProp["ROW"] = get_WIDGET_PROP_ROW()] = "ROW";
    TWidgetProp[TWidgetProp["STATE_FOR_STYLE"] = get_WIDGET_PROP_STATE_FOR_STYLE()] = "STATE_FOR_STYLE";
    TWidgetProp[TWidgetProp["THEME"] = get_WIDGET_PROP_THEME()] = "THEME";
    TWidgetProp[TWidgetProp["STAGE"] = get_WIDGET_PROP_STAGE()] = "STAGE";
    TWidgetProp[TWidgetProp["IMAGE_MANAGER"] = get_WIDGET_PROP_IMAGE_MANAGER()] = "IMAGE_MANAGER";
    TWidgetProp[TWidgetProp["ASSETS_MANAGER"] = get_WIDGET_PROP_ASSETS_MANAGER()] = "ASSETS_MANAGER";
    TWidgetProp[TWidgetProp["LOCALE_INFO"] = get_WIDGET_PROP_LOCALE_INFO()] = "LOCALE_INFO";
    TWidgetProp[TWidgetProp["FONT_MANAGER"] = get_WIDGET_PROP_FONT_MANAGER()] = "FONT_MANAGER";
    TWidgetProp[TWidgetProp["THEME_OBJ"] = get_WIDGET_PROP_THEME_OBJ()] = "THEME_OBJ";
    TWidgetProp[TWidgetProp["DEFAULT_THEME_OBJ"] = get_WIDGET_PROP_DEFAULT_THEME_OBJ()] = "DEFAULT_THEME_OBJ";
    TWidgetProp[TWidgetProp["ITEM_WIDTH"] = get_WIDGET_PROP_ITEM_WIDTH()] = "ITEM_WIDTH";
    TWidgetProp[TWidgetProp["ITEM_HEIGHT"] = get_WIDGET_PROP_ITEM_HEIGHT()] = "ITEM_HEIGHT";
    TWidgetProp[TWidgetProp["DEFAULT_ITEM_HEIGHT"] = get_WIDGET_PROP_DEFAULT_ITEM_HEIGHT()] = "DEFAULT_ITEM_HEIGHT";
    TWidgetProp[TWidgetProp["XSLIDABLE"] = get_WIDGET_PROP_XSLIDABLE()] = "XSLIDABLE";
    TWidgetProp[TWidgetProp["YSLIDABLE"] = get_WIDGET_PROP_YSLIDABLE()] = "YSLIDABLE";
    TWidgetProp[TWidgetProp["REPEAT"] = get_WIDGET_PROP_REPEAT()] = "REPEAT";
    TWidgetProp[TWidgetProp["LONG_PRESS_TIME"] = get_WIDGET_PROP_LONG_PRESS_TIME()] = "LONG_PRESS_TIME";
    TWidgetProp[TWidgetProp["ENABLE_LONG_PRESS"] = get_WIDGET_PROP_ENABLE_LONG_PRESS()] = "ENABLE_LONG_PRESS";
    TWidgetProp[TWidgetProp["CLICK_THROUGH"] = get_WIDGET_PROP_CLICK_THROUGH()] = "CLICK_THROUGH";
    TWidgetProp[TWidgetProp["ANIMATABLE"] = get_WIDGET_PROP_ANIMATABLE()] = "ANIMATABLE";
    TWidgetProp[TWidgetProp["AUTO_HIDE_SCROLL_BAR"] = get_WIDGET_PROP_AUTO_HIDE_SCROLL_BAR()] = "AUTO_HIDE_SCROLL_BAR";
    TWidgetProp[TWidgetProp["IMAGE"] = get_WIDGET_PROP_IMAGE()] = "IMAGE";
    TWidgetProp[TWidgetProp["FORMAT"] = get_WIDGET_PROP_FORMAT()] = "FORMAT";
    TWidgetProp[TWidgetProp["DRAW_TYPE"] = get_WIDGET_PROP_DRAW_TYPE()] = "DRAW_TYPE";
    TWidgetProp[TWidgetProp["SELECTABLE"] = get_WIDGET_PROP_SELECTABLE()] = "SELECTABLE";
    TWidgetProp[TWidgetProp["CLICKABLE"] = get_WIDGET_PROP_CLICKABLE()] = "CLICKABLE";
    TWidgetProp[TWidgetProp["SCALE_X"] = get_WIDGET_PROP_SCALE_X()] = "SCALE_X";
    TWidgetProp[TWidgetProp["SCALE_Y"] = get_WIDGET_PROP_SCALE_Y()] = "SCALE_Y";
    TWidgetProp[TWidgetProp["ANCHOR_X"] = get_WIDGET_PROP_ANCHOR_X()] = "ANCHOR_X";
    TWidgetProp[TWidgetProp["ANCHOR_Y"] = get_WIDGET_PROP_ANCHOR_Y()] = "ANCHOR_Y";
    TWidgetProp[TWidgetProp["ROTATION"] = get_WIDGET_PROP_ROTATION()] = "ROTATION";
    TWidgetProp[TWidgetProp["COMPACT"] = get_WIDGET_PROP_COMPACT()] = "COMPACT";
    TWidgetProp[TWidgetProp["SCROLLABLE"] = get_WIDGET_PROP_SCROLLABLE()] = "SCROLLABLE";
    TWidgetProp[TWidgetProp["ICON"] = get_WIDGET_PROP_ICON()] = "ICON";
    TWidgetProp[TWidgetProp["OPTIONS"] = get_WIDGET_PROP_OPTIONS()] = "OPTIONS";
    TWidgetProp[TWidgetProp["SELECTED"] = get_WIDGET_PROP_SELECTED()] = "SELECTED";
    TWidgetProp[TWidgetProp["CHECKED"] = get_WIDGET_PROP_CHECKED()] = "CHECKED";
    TWidgetProp[TWidgetProp["ACTIVE_ICON"] = get_WIDGET_PROP_ACTIVE_ICON()] = "ACTIVE_ICON";
    TWidgetProp[TWidgetProp["LOAD_UI"] = get_WIDGET_PROP_LOAD_UI()] = "LOAD_UI";
    TWidgetProp[TWidgetProp["OPEN_WINDOW"] = get_WIDGET_PROP_OPEN_WINDOW()] = "OPEN_WINDOW";
    TWidgetProp[TWidgetProp["SELECTED_INDEX"] = get_WIDGET_PROP_SELECTED_INDEX()] = "SELECTED_INDEX";
    TWidgetProp[TWidgetProp["CLOSE_WHEN_CLICK"] = get_WIDGET_PROP_CLOSE_WHEN_CLICK()] = "CLOSE_WHEN_CLICK";
    TWidgetProp[TWidgetProp["CLOSE_WHEN_CLICK_OUTSIDE"] = get_WIDGET_PROP_CLOSE_WHEN_CLICK_OUTSIDE()] = "CLOSE_WHEN_CLICK_OUTSIDE";
    TWidgetProp[TWidgetProp["LINE_GAP"] = get_WIDGET_PROP_LINE_GAP()] = "LINE_GAP";
    TWidgetProp[TWidgetProp["BG_COLOR"] = get_WIDGET_PROP_BG_COLOR()] = "BG_COLOR";
    TWidgetProp[TWidgetProp["BORDER_COLOR"] = get_WIDGET_PROP_BORDER_COLOR()] = "BORDER_COLOR";
    TWidgetProp[TWidgetProp["DELAY"] = get_WIDGET_PROP_DELAY()] = "DELAY";
    TWidgetProp[TWidgetProp["IS_KEYBOARD"] = get_WIDGET_PROP_IS_KEYBOARD()] = "IS_KEYBOARD";
    TWidgetProp[TWidgetProp["FOCUSED"] = get_WIDGET_PROP_FOCUSED()] = "FOCUSED";
    TWidgetProp[TWidgetProp["FOCUS"] = get_WIDGET_PROP_FOCUS()] = "FOCUS";
    TWidgetProp[TWidgetProp["FOCUSABLE"] = get_WIDGET_PROP_FOCUSABLE()] = "FOCUSABLE";
    TWidgetProp[TWidgetProp["WITH_FOCUS_STATE"] = get_WIDGET_PROP_WITH_FOCUS_STATE()] = "WITH_FOCUS_STATE";
    TWidgetProp[TWidgetProp["MOVE_FOCUS_PREV_KEY"] = get_WIDGET_PROP_MOVE_FOCUS_PREV_KEY()] = "MOVE_FOCUS_PREV_KEY";
    TWidgetProp[TWidgetProp["MOVE_FOCUS_NEXT_KEY"] = get_WIDGET_PROP_MOVE_FOCUS_NEXT_KEY()] = "MOVE_FOCUS_NEXT_KEY";
    TWidgetProp[TWidgetProp["MOVE_FOCUS_UP_KEY"] = get_WIDGET_PROP_MOVE_FOCUS_UP_KEY()] = "MOVE_FOCUS_UP_KEY";
    TWidgetProp[TWidgetProp["MOVE_FOCUS_DOWN_KEY"] = get_WIDGET_PROP_MOVE_FOCUS_DOWN_KEY()] = "MOVE_FOCUS_DOWN_KEY";
    TWidgetProp[TWidgetProp["MOVE_FOCUS_LEFT_KEY"] = get_WIDGET_PROP_MOVE_FOCUS_LEFT_KEY()] = "MOVE_FOCUS_LEFT_KEY";
    TWidgetProp[TWidgetProp["MOVE_FOCUS_RIGHT_KEY"] = get_WIDGET_PROP_MOVE_FOCUS_RIGHT_KEY()] = "MOVE_FOCUS_RIGHT_KEY";
})(TWidgetProp || (TWidgetProp = {}));
;
var TWidgetType;
(function (TWidgetType) {
    TWidgetType[TWidgetType["NONE"] = get_WIDGET_TYPE_NONE()] = "NONE";
    TWidgetType[TWidgetType["WINDOW_MANAGER"] = get_WIDGET_TYPE_WINDOW_MANAGER()] = "WINDOW_MANAGER";
    TWidgetType[TWidgetType["NORMAL_WINDOW"] = get_WIDGET_TYPE_NORMAL_WINDOW()] = "NORMAL_WINDOW";
    TWidgetType[TWidgetType["OVERLAY"] = get_WIDGET_TYPE_OVERLAY()] = "OVERLAY";
    TWidgetType[TWidgetType["TOOL_BAR"] = get_WIDGET_TYPE_TOOL_BAR()] = "TOOL_BAR";
    TWidgetType[TWidgetType["DIALOG"] = get_WIDGET_TYPE_DIALOG()] = "DIALOG";
    TWidgetType[TWidgetType["POPUP"] = get_WIDGET_TYPE_POPUP()] = "POPUP";
    TWidgetType[TWidgetType["SYSTEM_BAR"] = get_WIDGET_TYPE_SYSTEM_BAR()] = "SYSTEM_BAR";
    TWidgetType[TWidgetType["SYSTEM_BAR_BOTTOM"] = get_WIDGET_TYPE_SYSTEM_BAR_BOTTOM()] = "SYSTEM_BAR_BOTTOM";
    TWidgetType[TWidgetType["SPRITE"] = get_WIDGET_TYPE_SPRITE()] = "SPRITE";
    TWidgetType[TWidgetType["KEYBOARD"] = get_WIDGET_TYPE_KEYBOARD()] = "KEYBOARD";
    TWidgetType[TWidgetType["DND"] = get_WIDGET_TYPE_DND()] = "DND";
    TWidgetType[TWidgetType["LABEL"] = get_WIDGET_TYPE_LABEL()] = "LABEL";
    TWidgetType[TWidgetType["BUTTON"] = get_WIDGET_TYPE_BUTTON()] = "BUTTON";
    TWidgetType[TWidgetType["IMAGE"] = get_WIDGET_TYPE_IMAGE()] = "IMAGE";
    TWidgetType[TWidgetType["EDIT"] = get_WIDGET_TYPE_EDIT()] = "EDIT";
    TWidgetType[TWidgetType["PROGRESS_BAR"] = get_WIDGET_TYPE_PROGRESS_BAR()] = "PROGRESS_BAR";
    TWidgetType[TWidgetType["GROUP_BOX"] = get_WIDGET_TYPE_GROUP_BOX()] = "GROUP_BOX";
    TWidgetType[TWidgetType["CHECK_BUTTON"] = get_WIDGET_TYPE_CHECK_BUTTON()] = "CHECK_BUTTON";
    TWidgetType[TWidgetType["RADIO_BUTTON"] = get_WIDGET_TYPE_RADIO_BUTTON()] = "RADIO_BUTTON";
    TWidgetType[TWidgetType["DIALOG_TITLE"] = get_WIDGET_TYPE_DIALOG_TITLE()] = "DIALOG_TITLE";
    TWidgetType[TWidgetType["DIALOG_CLIENT"] = get_WIDGET_TYPE_DIALOG_CLIENT()] = "DIALOG_CLIENT";
    TWidgetType[TWidgetType["SLIDER"] = get_WIDGET_TYPE_SLIDER()] = "SLIDER";
    TWidgetType[TWidgetType["VIEW"] = get_WIDGET_TYPE_VIEW()] = "VIEW";
    TWidgetType[TWidgetType["COMBO_BOX"] = get_WIDGET_TYPE_COMBO_BOX()] = "COMBO_BOX";
    TWidgetType[TWidgetType["COMBO_BOX_ITEM"] = get_WIDGET_TYPE_COMBO_BOX_ITEM()] = "COMBO_BOX_ITEM";
    TWidgetType[TWidgetType["SLIDE_VIEW"] = get_WIDGET_TYPE_SLIDE_VIEW()] = "SLIDE_VIEW";
    TWidgetType[TWidgetType["SLIDE_INDICATOR"] = get_WIDGET_TYPE_SLIDE_INDICATOR()] = "SLIDE_INDICATOR";
    TWidgetType[TWidgetType["SLIDE_INDICATOR_ARC"] = get_WIDGET_TYPE_SLIDE_INDICATOR_ARC()] = "SLIDE_INDICATOR_ARC";
    TWidgetType[TWidgetType["PAGES"] = get_WIDGET_TYPE_PAGES()] = "PAGES";
    TWidgetType[TWidgetType["TAB_BUTTON"] = get_WIDGET_TYPE_TAB_BUTTON()] = "TAB_BUTTON";
    TWidgetType[TWidgetType["TAB_CONTROL"] = get_WIDGET_TYPE_TAB_CONTROL()] = "TAB_CONTROL";
    TWidgetType[TWidgetType["TAB_BUTTON_GROUP"] = get_WIDGET_TYPE_TAB_BUTTON_GROUP()] = "TAB_BUTTON_GROUP";
    TWidgetType[TWidgetType["BUTTON_GROUP"] = get_WIDGET_TYPE_BUTTON_GROUP()] = "BUTTON_GROUP";
    TWidgetType[TWidgetType["CANDIDATES"] = get_WIDGET_TYPE_CANDIDATES()] = "CANDIDATES";
    TWidgetType[TWidgetType["SPIN_BOX"] = get_WIDGET_TYPE_SPIN_BOX()] = "SPIN_BOX";
    TWidgetType[TWidgetType["DRAGGER"] = get_WIDGET_TYPE_DRAGGER()] = "DRAGGER";
    TWidgetType[TWidgetType["SCROLL_BAR"] = get_WIDGET_TYPE_SCROLL_BAR()] = "SCROLL_BAR";
    TWidgetType[TWidgetType["SCROLL_BAR_DESKTOP"] = get_WIDGET_TYPE_SCROLL_BAR_DESKTOP()] = "SCROLL_BAR_DESKTOP";
    TWidgetType[TWidgetType["SCROLL_BAR_MOBILE"] = get_WIDGET_TYPE_SCROLL_BAR_MOBILE()] = "SCROLL_BAR_MOBILE";
    TWidgetType[TWidgetType["SCROLL_VIEW"] = get_WIDGET_TYPE_SCROLL_VIEW()] = "SCROLL_VIEW";
    TWidgetType[TWidgetType["LIST_VIEW"] = get_WIDGET_TYPE_LIST_VIEW()] = "LIST_VIEW";
    TWidgetType[TWidgetType["LIST_VIEW_H"] = get_WIDGET_TYPE_LIST_VIEW_H()] = "LIST_VIEW_H";
    TWidgetType[TWidgetType["LIST_ITEM"] = get_WIDGET_TYPE_LIST_ITEM()] = "LIST_ITEM";
    TWidgetType[TWidgetType["COLOR_PICKER"] = get_WIDGET_TYPE_COLOR_PICKER()] = "COLOR_PICKER";
    TWidgetType[TWidgetType["COLOR_COMPONENT"] = get_WIDGET_TYPE_COLOR_COMPONENT()] = "COLOR_COMPONENT";
    TWidgetType[TWidgetType["COLOR_TILE"] = get_WIDGET_TYPE_COLOR_TILE()] = "COLOR_TILE";
    TWidgetType[TWidgetType["CLIP_VIEW"] = get_WIDGET_TYPE_CLIP_VIEW()] = "CLIP_VIEW";
    TWidgetType[TWidgetType["RICH_TEXT"] = get_WIDGET_TYPE_RICH_TEXT()] = "RICH_TEXT";
    TWidgetType[TWidgetType["APP_BAR"] = get_WIDGET_TYPE_APP_BAR()] = "APP_BAR";
    TWidgetType[TWidgetType["GRID"] = get_WIDGET_TYPE_GRID()] = "GRID";
    TWidgetType[TWidgetType["GRID_ITEM"] = get_WIDGET_TYPE_GRID_ITEM()] = "GRID_ITEM";
    TWidgetType[TWidgetType["ROW"] = get_WIDGET_TYPE_ROW()] = "ROW";
    TWidgetType[TWidgetType["COLUMN"] = get_WIDGET_TYPE_COLUMN()] = "COLUMN";
    TWidgetType[TWidgetType["CALIBRATION_WIN"] = get_WIDGET_TYPE_CALIBRATION_WIN()] = "CALIBRATION_WIN";
})(TWidgetType || (TWidgetType = {}));
;
var TWindowStage;
(function (TWindowStage) {
    TWindowStage[TWindowStage["NONE"] = get_WINDOW_STAGE_NONE()] = "NONE";
    TWindowStage[TWindowStage["CREATED"] = get_WINDOW_STAGE_CREATED()] = "CREATED";
    TWindowStage[TWindowStage["OPENED"] = get_WINDOW_STAGE_OPENED()] = "OPENED";
    TWindowStage[TWindowStage["CLOSED"] = get_WINDOW_STAGE_CLOSED()] = "CLOSED";
    TWindowStage[TWindowStage["SUSPEND"] = get_WINDOW_STAGE_SUSPEND()] = "SUSPEND";
})(TWindowStage || (TWindowStage = {}));
;
var TWindowClosable;
(function (TWindowClosable) {
    TWindowClosable[TWindowClosable["YES"] = get_WINDOW_CLOSABLE_YES()] = "YES";
    TWindowClosable[TWindowClosable["NO"] = get_WINDOW_CLOSABLE_NO()] = "NO";
    TWindowClosable[TWindowClosable["CONFIRM"] = get_WINDOW_CLOSABLE_CONFIRM()] = "CONFIRM";
})(TWindowClosable || (TWindowClosable = {}));
;
var TWidgetState;
(function (TWidgetState) {
    TWidgetState[TWidgetState["NONE"] = get_WIDGET_STATE_NONE()] = "NONE";
    TWidgetState[TWidgetState["NORMAL"] = get_WIDGET_STATE_NORMAL()] = "NORMAL";
    TWidgetState[TWidgetState["CHANGED"] = get_WIDGET_STATE_CHANGED()] = "CHANGED";
    TWidgetState[TWidgetState["PRESSED"] = get_WIDGET_STATE_PRESSED()] = "PRESSED";
    TWidgetState[TWidgetState["OVER"] = get_WIDGET_STATE_OVER()] = "OVER";
    TWidgetState[TWidgetState["DISABLE"] = get_WIDGET_STATE_DISABLE()] = "DISABLE";
    TWidgetState[TWidgetState["FOCUSED"] = get_WIDGET_STATE_FOCUSED()] = "FOCUSED";
    TWidgetState[TWidgetState["CHECKED"] = get_WIDGET_STATE_CHECKED()] = "CHECKED";
    TWidgetState[TWidgetState["UNCHECKED"] = get_WIDGET_STATE_UNCHECKED()] = "UNCHECKED";
    TWidgetState[TWidgetState["EMPTY"] = get_WIDGET_STATE_EMPTY()] = "EMPTY";
    TWidgetState[TWidgetState["EMPTY_FOCUS"] = get_WIDGET_STATE_EMPTY_FOCUS()] = "EMPTY_FOCUS";
    TWidgetState[TWidgetState["ERROR"] = get_WIDGET_STATE_ERROR()] = "ERROR";
    TWidgetState[TWidgetState["SELECTED"] = get_WIDGET_STATE_SELECTED()] = "SELECTED";
    TWidgetState[TWidgetState["NORMAL_OF_CHECKED"] = get_WIDGET_STATE_NORMAL_OF_CHECKED()] = "NORMAL_OF_CHECKED";
    TWidgetState[TWidgetState["PRESSED_OF_CHECKED"] = get_WIDGET_STATE_PRESSED_OF_CHECKED()] = "PRESSED_OF_CHECKED";
    TWidgetState[TWidgetState["OVER_OF_CHECKED"] = get_WIDGET_STATE_OVER_OF_CHECKED()] = "OVER_OF_CHECKED";
    TWidgetState[TWidgetState["DISABLE_OF_CHECKED"] = get_WIDGET_STATE_DISABLE_OF_CHECKED()] = "DISABLE_OF_CHECKED";
    TWidgetState[TWidgetState["FOCUSED_OF_CHECKED"] = get_WIDGET_STATE_FOCUSED_OF_CHECKED()] = "FOCUSED_OF_CHECKED";
    TWidgetState[TWidgetState["NORMAL_OF_ACTIVE"] = get_WIDGET_STATE_NORMAL_OF_ACTIVE()] = "NORMAL_OF_ACTIVE";
    TWidgetState[TWidgetState["PRESSED_OF_ACTIVE"] = get_WIDGET_STATE_PRESSED_OF_ACTIVE()] = "PRESSED_OF_ACTIVE";
    TWidgetState[TWidgetState["OVER_OF_ACTIVE"] = get_WIDGET_STATE_OVER_OF_ACTIVE()] = "OVER_OF_ACTIVE";
    TWidgetState[TWidgetState["DISABLE_OF_ACTIVE"] = get_WIDGET_STATE_DISABLE_OF_ACTIVE()] = "DISABLE_OF_ACTIVE";
    TWidgetState[TWidgetState["FOCUSED_OF_ACTIVE"] = get_WIDGET_STATE_FOCUSED_OF_ACTIVE()] = "FOCUSED_OF_ACTIVE";
})(TWidgetState || (TWidgetState = {}));
;
var TWidgetCursor;
(function (TWidgetCursor) {
    TWidgetCursor[TWidgetCursor["CURSOR_DEFAULT"] = get_WIDGET_CURSOR_DEFAULT()] = "CURSOR_DEFAULT";
    TWidgetCursor[TWidgetCursor["CURSOR_EDIT"] = get_WIDGET_CURSOR_EDIT()] = "CURSOR_EDIT";
    TWidgetCursor[TWidgetCursor["CURSOR_HAND"] = get_WIDGET_CURSOR_HAND()] = "CURSOR_HAND";
    TWidgetCursor[TWidgetCursor["CURSOR_WAIT"] = get_WIDGET_CURSOR_WAIT()] = "CURSOR_WAIT";
    TWidgetCursor[TWidgetCursor["CURSOR_CROSS"] = get_WIDGET_CURSOR_CROSS()] = "CURSOR_CROSS";
    TWidgetCursor[TWidgetCursor["CURSOR_NO"] = get_WIDGET_CURSOR_NO()] = "CURSOR_NO";
    TWidgetCursor[TWidgetCursor["CURSOR_SIZENWSE"] = get_WIDGET_CURSOR_SIZENWSE()] = "CURSOR_SIZENWSE";
    TWidgetCursor[TWidgetCursor["CURSOR_SIZENESW"] = get_WIDGET_CURSOR_SIZENESW()] = "CURSOR_SIZENESW";
    TWidgetCursor[TWidgetCursor["CURSOR_SIZEWE"] = get_WIDGET_CURSOR_SIZEWE()] = "CURSOR_SIZEWE";
    TWidgetCursor[TWidgetCursor["CURSOR_SIZENS"] = get_WIDGET_CURSOR_SIZENS()] = "CURSOR_SIZENS";
    TWidgetCursor[TWidgetCursor["CURSOR_SIZEALL"] = get_WIDGET_CURSOR_SIZEALL()] = "CURSOR_SIZEALL";
})(TWidgetCursor || (TWidgetCursor = {}));
;
var TWidget = /** @class */ (function () {
    function TWidget(nativeObj) {
        this.nativeObj = nativeObj;
    }
    TWidget.prototype.countChildren = function () {
        return widget_count_children(this.nativeObj);
    };
    TWidget.prototype.getChild = function (index) {
        return new TWidget(widget_get_child(this.nativeObj, index));
    };
    TWidget.prototype.getNativeWindow = function () {
        return new TNativeWindow(widget_get_native_window(this.nativeObj));
    };
    TWidget.prototype.indexOf = function () {
        return widget_index_of(this.nativeObj);
    };
    TWidget.prototype.closeWindow = function () {
        return widget_close_window(this.nativeObj);
    };
    TWidget.prototype.move = function (x, y) {
        return widget_move(this.nativeObj, x, y);
    };
    TWidget.prototype.resize = function (w, h) {
        return widget_resize(this.nativeObj, w, h);
    };
    TWidget.prototype.moveResize = function (x, y, w, h) {
        return widget_move_resize(this.nativeObj, x, y, w, h);
    };
    TWidget.prototype.setValue = function (value) {
        return widget_set_value(this.nativeObj, value);
    };
    TWidget.prototype.animateValueTo = function (value, duration) {
        return widget_animate_value_to(this.nativeObj, value, duration);
    };
    TWidget.prototype.addValue = function (delta) {
        return widget_add_value(this.nativeObj, delta);
    };
    TWidget.prototype.useStyle = function (style) {
        return widget_use_style(this.nativeObj, style);
    };
    TWidget.prototype.setText = function (text) {
        return widget_set_text_utf8(this.nativeObj, text);
    };
    TWidget.prototype.setChildText = function (name, text) {
        return widget_set_child_text_utf8(this.nativeObj, name, text);
    };
    TWidget.prototype.setChildTextWithDouble = function (name, format, value) {
        return widget_set_child_text_with_double(this.nativeObj, name, format, value);
    };
    TWidget.prototype.setChildTextWithInt = function (name, format, value) {
        return widget_set_child_text_with_int(this.nativeObj, name, format, value);
    };
    TWidget.prototype.setTrText = function (text) {
        return widget_set_tr_text(this.nativeObj, text);
    };
    TWidget.prototype.getValue = function () {
        return widget_get_value(this.nativeObj);
    };
    TWidget.prototype.getText = function () {
        return widget_get_text(this.nativeObj);
    };
    TWidget.prototype.setName = function (name) {
        return widget_set_name(this.nativeObj, name);
    };
    TWidget.prototype.setTheme = function (name) {
        return widget_set_theme(this.nativeObj, name);
    };
    TWidget.prototype.setPointerCursor = function (cursor) {
        return widget_set_pointer_cursor(this.nativeObj, cursor);
    };
    TWidget.prototype.setAnimation = function (animation) {
        return widget_set_animation(this.nativeObj, animation);
    };
    TWidget.prototype.createAnimator = function (animation) {
        return widget_create_animator(this.nativeObj, animation);
    };
    TWidget.prototype.startAnimator = function (name) {
        return widget_start_animator(this.nativeObj, name);
    };
    TWidget.prototype.setAnimatorTimeScale = function (name, time_scale) {
        return widget_set_animator_time_scale(this.nativeObj, name, time_scale);
    };
    TWidget.prototype.pauseAnimator = function (name) {
        return widget_pause_animator(this.nativeObj, name);
    };
    TWidget.prototype.stopAnimator = function (name) {
        return widget_stop_animator(this.nativeObj, name);
    };
    TWidget.prototype.destroyAnimator = function (name) {
        return widget_destroy_animator(this.nativeObj, name);
    };
    TWidget.prototype.setEnable = function (enable) {
        return widget_set_enable(this.nativeObj, enable);
    };
    TWidget.prototype.setFeedback = function (feedback) {
        return widget_set_feedback(this.nativeObj, feedback);
    };
    TWidget.prototype.setAutoAdjustSize = function (auto_adjust_size) {
        return widget_set_auto_adjust_size(this.nativeObj, auto_adjust_size);
    };
    TWidget.prototype.setFloating = function (floating) {
        return widget_set_floating(this.nativeObj, floating);
    };
    TWidget.prototype.setFocused = function (focused) {
        return widget_set_focused(this.nativeObj, focused);
    };
    TWidget.prototype.setFocusable = function (focusable) {
        return widget_set_focusable(this.nativeObj, focusable);
    };
    TWidget.prototype.setState = function (state) {
        return widget_set_state(this.nativeObj, state);
    };
    TWidget.prototype.setOpacity = function (opacity) {
        return widget_set_opacity(this.nativeObj, opacity);
    };
    TWidget.prototype.setDirtyRectTolerance = function (dirty_rect_tolerance) {
        return widget_set_dirty_rect_tolerance(this.nativeObj, dirty_rect_tolerance);
    };
    TWidget.prototype.destroyChildren = function () {
        return widget_destroy_children(this.nativeObj);
    };
    TWidget.prototype.addChild = function (child) {
        return widget_add_child(this.nativeObj, child ? child.nativeObj : null);
    };
    TWidget.prototype.removeChild = function (child) {
        return widget_remove_child(this.nativeObj, child ? child.nativeObj : null);
    };
    TWidget.prototype.insertChild = function (index, child) {
        return widget_insert_child(this.nativeObj, index, child ? child.nativeObj : null);
    };
    TWidget.prototype.restack = function (index) {
        return widget_restack(this.nativeObj, index);
    };
    TWidget.prototype.child = function (name) {
        return new TWidget(widget_child(this.nativeObj, name));
    };
    TWidget.prototype.lookup = function (name, recursive) {
        return new TWidget(widget_lookup(this.nativeObj, name, recursive));
    };
    TWidget.prototype.lookupByType = function (type, recursive) {
        return new TWidget(widget_lookup_by_type(this.nativeObj, type, recursive));
    };
    TWidget.prototype.setVisible = function (visible) {
        return widget_set_visible(this.nativeObj, visible);
    };
    TWidget.prototype.setVisibleOnly = function (visible) {
        return widget_set_visible_only(this.nativeObj, visible);
    };
    TWidget.prototype.setSensitive = function (sensitive) {
        return widget_set_sensitive(this.nativeObj, sensitive);
    };
    TWidget.prototype.on = function (type, on_event, ctx) {
        return widget_on(this.nativeObj, type, TBrowser.addFunction(wrap_on_event(on_event), "iii"), ctx);
    };
    TWidget.prototype.off = function (id) {
        return widget_off(this.nativeObj, id);
    };
    TWidget.prototype.invalidateForce = function (r) {
        return widget_invalidate_force(this.nativeObj, r ? r.nativeObj : null);
    };
    TWidget.prototype.setPropStr = function (name, v) {
        return widget_set_prop_str(this.nativeObj, name, v);
    };
    TWidget.prototype.getPropStr = function (name, defval) {
        return widget_get_prop_str(this.nativeObj, name, defval);
    };
    TWidget.prototype.setPropPointer = function (name, v) {
        return widget_set_prop_pointer(this.nativeObj, name, v);
    };
    TWidget.prototype.getPropPointer = function (name) {
        return widget_get_prop_pointer(this.nativeObj, name);
    };
    TWidget.prototype.setPropInt = function (name, v) {
        return widget_set_prop_int(this.nativeObj, name, v);
    };
    TWidget.prototype.getPropInt = function (name, defval) {
        return widget_get_prop_int(this.nativeObj, name, defval);
    };
    TWidget.prototype.setPropBool = function (name, v) {
        return widget_set_prop_bool(this.nativeObj, name, v);
    };
    TWidget.prototype.getPropBool = function (name, defval) {
        return widget_get_prop_bool(this.nativeObj, name, defval);
    };
    TWidget.prototype.isWindowOpened = function () {
        return widget_is_window_opened(this.nativeObj);
    };
    TWidget.prototype.isParentOf = function (child) {
        return widget_is_parent_of(this.nativeObj, child ? child.nativeObj : null);
    };
    TWidget.prototype.isDirectParentOf = function (child) {
        return widget_is_direct_parent_of(this.nativeObj, child ? child.nativeObj : null);
    };
    TWidget.prototype.isWindow = function () {
        return widget_is_window(this.nativeObj);
    };
    TWidget.prototype.isSystemBar = function () {
        return widget_is_system_bar(this.nativeObj);
    };
    TWidget.prototype.isNormalWindow = function () {
        return widget_is_normal_window(this.nativeObj);
    };
    TWidget.prototype.isDialog = function () {
        return widget_is_dialog(this.nativeObj);
    };
    TWidget.prototype.isPopup = function () {
        return widget_is_popup(this.nativeObj);
    };
    TWidget.prototype.isOverlay = function () {
        return widget_is_overlay(this.nativeObj);
    };
    TWidget.prototype.isOpenedPopup = function () {
        return widget_is_opened_popup(this.nativeObj);
    };
    TWidget.prototype.isKeyboard = function () {
        return widget_is_keyboard(this.nativeObj);
    };
    TWidget.prototype.isDesigningWindow = function () {
        return widget_is_designing_window(this.nativeObj);
    };
    TWidget.prototype.isWindowManager = function () {
        return widget_is_window_manager(this.nativeObj);
    };
    TWidget.prototype.foreach = function (visit, ctx) {
        return widget_foreach(this.nativeObj, TBrowser.addFunction(wrap_on_visit(visit), "iii"), ctx);
    };
    TWidget.prototype.getWindow = function () {
        return new TWidget(widget_get_window(this.nativeObj));
    };
    TWidget.prototype.getWindowManager = function () {
        return new TWidget(widget_get_window_manager(this.nativeObj));
    };
    TWidget.prototype.getType = function () {
        return widget_get_type(this.nativeObj);
    };
    TWidget.prototype.clone = function (parent) {
        return new TWidget(widget_clone(this.nativeObj, parent ? parent.nativeObj : null));
    };
    TWidget.prototype.equal = function (other) {
        return widget_equal(this.nativeObj, other ? other.nativeObj : null);
    };
    TWidget.cast = function (widget) {
        return new TWidget(widget_cast(widget ? (widget.nativeObj || widget) : null));
    };
    TWidget.prototype.destroy = function () {
        return widget_destroy(this.nativeObj);
    };
    TWidget.prototype.destroyAsync = function () {
        return widget_destroy_async(this.nativeObj);
    };
    TWidget.prototype.unref = function () {
        return widget_unref(this.nativeObj);
    };
    TWidget.prototype.strokeBorderRect = function (c, r) {
        return widget_stroke_border_rect(this.nativeObj, c ? c.nativeObj : null, r ? r.nativeObj : null);
    };
    TWidget.prototype.fillBgRect = function (c, r, draw_type) {
        return widget_fill_bg_rect(this.nativeObj, c ? c.nativeObj : null, r ? r.nativeObj : null, draw_type);
    };
    TWidget.prototype.fillFgRect = function (c, r, draw_type) {
        return widget_fill_fg_rect(this.nativeObj, c ? c.nativeObj : null, r ? r.nativeObj : null, draw_type);
    };
    TWidget.prototype.dispatchToTarget = function (e) {
        return widget_dispatch_to_target(this.nativeObj, e ? e.nativeObj : null);
    };
    TWidget.prototype.dispatchToKeyTarget = function (e) {
        return widget_dispatch_to_key_target(this.nativeObj, e ? e.nativeObj : null);
    };
    TWidget.prototype.updateStyle = function () {
        return widget_update_style(this.nativeObj);
    };
    TWidget.prototype.updateStyleRecursive = function () {
        return widget_update_style_recursive(this.nativeObj);
    };
    TWidget.prototype.setAsKeyTarget = function () {
        return widget_set_as_key_target(this.nativeObj);
    };
    TWidget.prototype.focusNext = function () {
        return widget_focus_next(this.nativeObj);
    };
    TWidget.prototype.focusPrev = function () {
        return widget_focus_prev(this.nativeObj);
    };
    TWidget.prototype.getStateForStyle = function (active, checked) {
        return widget_get_state_for_style(this.nativeObj, active, checked);
    };
    TWidget.prototype.layout = function () {
        return widget_layout(this.nativeObj);
    };
    TWidget.prototype.setSelfLayout = function (params) {
        return widget_set_self_layout(this.nativeObj, params);
    };
    TWidget.prototype.setChildrenLayout = function (params) {
        return widget_set_children_layout(this.nativeObj, params);
    };
    TWidget.prototype.setSelfLayoutParams = function (x, y, w, h) {
        return widget_set_self_layout_params(this.nativeObj, x, y, w, h);
    };
    TWidget.prototype.setStyleInt = function (state_and_name, value) {
        return widget_set_style_int(this.nativeObj, state_and_name, value);
    };
    TWidget.prototype.setStyleStr = function (state_and_name, value) {
        return widget_set_style_str(this.nativeObj, state_and_name, value);
    };
    TWidget.prototype.setStyleColor = function (state_and_name, value) {
        return widget_set_style_color(this.nativeObj, state_and_name, value);
    };
    Object.defineProperty(TWidget.prototype, "x", {
        get: function () {
            return widget_t_get_prop_x(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TWidget.prototype, "y", {
        get: function () {
            return widget_t_get_prop_y(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TWidget.prototype, "w", {
        get: function () {
            return widget_t_get_prop_w(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TWidget.prototype, "h", {
        get: function () {
            return widget_t_get_prop_h(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TWidget.prototype, "name", {
        get: function () {
            return widget_t_get_prop_name(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TWidget.prototype, "pointerCursor", {
        get: function () {
            return widget_t_get_prop_pointer_cursor(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TWidget.prototype, "trText", {
        get: function () {
            return widget_t_get_prop_tr_text(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TWidget.prototype, "style", {
        get: function () {
            return widget_t_get_prop_style(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TWidget.prototype, "animation", {
        get: function () {
            return widget_t_get_prop_animation(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TWidget.prototype, "enable", {
        get: function () {
            return widget_t_get_prop_enable(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TWidget.prototype, "feedback", {
        get: function () {
            return widget_t_get_prop_feedback(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TWidget.prototype, "visible", {
        get: function () {
            return widget_t_get_prop_visible(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TWidget.prototype, "sensitive", {
        get: function () {
            return widget_t_get_prop_sensitive(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TWidget.prototype, "focusable", {
        get: function () {
            return widget_t_get_prop_focusable(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TWidget.prototype, "withFocusState", {
        get: function () {
            return widget_t_get_prop_with_focus_state(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TWidget.prototype, "autoAdjustSize", {
        get: function () {
            return widget_t_get_prop_auto_adjust_size(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TWidget.prototype, "floating", {
        get: function () {
            return widget_t_get_prop_floating(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TWidget.prototype, "dirtyRectTolerance", {
        get: function () {
            return widget_t_get_prop_dirty_rect_tolerance(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TWidget.prototype, "parent", {
        get: function () {
            return widget_t_get_prop_parent(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TWidget;
}());
var TAppConf = /** @class */ (function () {
    function TAppConf(nativeObj) {
        this.nativeObj = nativeObj;
    }
    TAppConf.save = function () {
        return app_conf_save();
    };
    TAppConf.reload = function () {
        return app_conf_reload();
    };
    TAppConf.deinit = function () {
        return app_conf_deinit();
    };
    TAppConf.exist = function (key) {
        return app_conf_exist(key);
    };
    TAppConf.setInt = function (key, v) {
        return app_conf_set_int(key, v);
    };
    TAppConf.setInt64 = function (key, v) {
        return app_conf_set_int64(key, v);
    };
    TAppConf.setBool = function (key, v) {
        return app_conf_set_bool(key, v);
    };
    TAppConf.setDouble = function (key, v) {
        return app_conf_set_double(key, v);
    };
    TAppConf.setStr = function (key, v) {
        return app_conf_set_str(key, v);
    };
    TAppConf.getInt = function (key, defval) {
        return app_conf_get_int(key, defval);
    };
    TAppConf.getInt64 = function (key, defval) {
        return app_conf_get_int64(key, defval);
    };
    TAppConf.getBool = function (key, defval) {
        return app_conf_get_bool(key, defval);
    };
    TAppConf.getDouble = function (key, defval) {
        return app_conf_get_double(key, defval);
    };
    TAppConf.getStr = function (key, defval) {
        return app_conf_get_str(key, defval);
    };
    TAppConf.remove = function (key) {
        return app_conf_remove(key);
    };
    return TAppConf;
}());
var TRet;
(function (TRet) {
    TRet[TRet["OK"] = get_RET_OK()] = "OK";
    TRet[TRet["OOM"] = get_RET_OOM()] = "OOM";
    TRet[TRet["FAIL"] = get_RET_FAIL()] = "FAIL";
    TRet[TRet["NOT_IMPL"] = get_RET_NOT_IMPL()] = "NOT_IMPL";
    TRet[TRet["QUIT"] = get_RET_QUIT()] = "QUIT";
    TRet[TRet["FOUND"] = get_RET_FOUND()] = "FOUND";
    TRet[TRet["BUSY"] = get_RET_BUSY()] = "BUSY";
    TRet[TRet["REMOVE"] = get_RET_REMOVE()] = "REMOVE";
    TRet[TRet["REPEAT"] = get_RET_REPEAT()] = "REPEAT";
    TRet[TRet["NOT_FOUND"] = get_RET_NOT_FOUND()] = "NOT_FOUND";
    TRet[TRet["DONE"] = get_RET_DONE()] = "DONE";
    TRet[TRet["STOP"] = get_RET_STOP()] = "STOP";
    TRet[TRet["SKIP"] = get_RET_SKIP()] = "SKIP";
    TRet[TRet["CONTINUE"] = get_RET_CONTINUE()] = "CONTINUE";
    TRet[TRet["OBJECT_CHANGED"] = get_RET_OBJECT_CHANGED()] = "OBJECT_CHANGED";
    TRet[TRet["ITEMS_CHANGED"] = get_RET_ITEMS_CHANGED()] = "ITEMS_CHANGED";
    TRet[TRet["BAD_PARAMS"] = get_RET_BAD_PARAMS()] = "BAD_PARAMS";
    TRet[TRet["TIMEOUT"] = get_RET_TIMEOUT()] = "TIMEOUT";
    TRet[TRet["CRC"] = get_RET_CRC()] = "CRC";
    TRet[TRet["IO"] = get_RET_IO()] = "IO";
    TRet[TRet["EOS"] = get_RET_EOS()] = "EOS";
})(TRet || (TRet = {}));
;
var TTimerManager = /** @class */ (function () {
    function TTimerManager(nativeObj) {
        this.nativeObj = nativeObj;
    }
    return TTimerManager;
}());
var TTimeNow = /** @class */ (function () {
    function TTimeNow(nativeObj) {
        this.nativeObj = nativeObj;
    }
    TTimeNow.s = function () {
        return time_now_s();
    };
    TTimeNow.ms = function () {
        return time_now_ms();
    };
    return TTimeNow;
}());
var TBidiType;
(function (TBidiType) {
    TBidiType[TBidiType["AUTO"] = get_BIDI_TYPE_AUTO()] = "AUTO";
    TBidiType[TBidiType["LTR"] = get_BIDI_TYPE_LTR()] = "LTR";
    TBidiType[TBidiType["RTL"] = get_BIDI_TYPE_RTL()] = "RTL";
    TBidiType[TBidiType["LRO"] = get_BIDI_TYPE_LRO()] = "LRO";
    TBidiType[TBidiType["RLO"] = get_BIDI_TYPE_RLO()] = "RLO";
    TBidiType[TBidiType["WLTR"] = get_BIDI_TYPE_WLTR()] = "WLTR";
    TBidiType[TBidiType["WRTL"] = get_BIDI_TYPE_WRTL()] = "WRTL";
})(TBidiType || (TBidiType = {}));
;
var TObjectProp;
(function (TObjectProp) {
    TObjectProp[TObjectProp["SIZE"] = get_OBJECT_PROP_SIZE()] = "SIZE";
    TObjectProp[TObjectProp["CHECKED"] = get_OBJECT_PROP_CHECKED()] = "CHECKED";
})(TObjectProp || (TObjectProp = {}));
;
var TObjectCmd;
(function (TObjectCmd) {
    TObjectCmd[TObjectCmd["SAVE"] = get_OBJECT_CMD_SAVE()] = "SAVE";
    TObjectCmd[TObjectCmd["RELOAD"] = get_OBJECT_CMD_RELOAD()] = "RELOAD";
    TObjectCmd[TObjectCmd["MOVE_UP"] = get_OBJECT_CMD_MOVE_UP()] = "MOVE_UP";
    TObjectCmd[TObjectCmd["MOVE_DOWN"] = get_OBJECT_CMD_MOVE_DOWN()] = "MOVE_DOWN";
    TObjectCmd[TObjectCmd["REMOVE"] = get_OBJECT_CMD_REMOVE()] = "REMOVE";
    TObjectCmd[TObjectCmd["REMOVE_CHECKED"] = get_OBJECT_CMD_REMOVE_CHECKED()] = "REMOVE_CHECKED";
    TObjectCmd[TObjectCmd["CLEAR"] = get_OBJECT_CMD_CLEAR()] = "CLEAR";
    TObjectCmd[TObjectCmd["ADD"] = get_OBJECT_CMD_ADD()] = "ADD";
    TObjectCmd[TObjectCmd["DETAIL"] = get_OBJECT_CMD_DETAIL()] = "DETAIL";
    TObjectCmd[TObjectCmd["EDIT"] = get_OBJECT_CMD_EDIT()] = "EDIT";
})(TObjectCmd || (TObjectCmd = {}));
;
var TImageDrawType;
(function (TImageDrawType) {
    TImageDrawType[TImageDrawType["DEFAULT"] = get_IMAGE_DRAW_DEFAULT()] = "DEFAULT";
    TImageDrawType[TImageDrawType["CENTER"] = get_IMAGE_DRAW_CENTER()] = "CENTER";
    TImageDrawType[TImageDrawType["ICON"] = get_IMAGE_DRAW_ICON()] = "ICON";
    TImageDrawType[TImageDrawType["SCALE"] = get_IMAGE_DRAW_SCALE()] = "SCALE";
    TImageDrawType[TImageDrawType["SCALE_AUTO"] = get_IMAGE_DRAW_SCALE_AUTO()] = "SCALE_AUTO";
    TImageDrawType[TImageDrawType["SCALE_DOWN"] = get_IMAGE_DRAW_SCALE_DOWN()] = "SCALE_DOWN";
    TImageDrawType[TImageDrawType["SCALE_W"] = get_IMAGE_DRAW_SCALE_W()] = "SCALE_W";
    TImageDrawType[TImageDrawType["SCALE_H"] = get_IMAGE_DRAW_SCALE_H()] = "SCALE_H";
    TImageDrawType[TImageDrawType["REPEAT"] = get_IMAGE_DRAW_REPEAT()] = "REPEAT";
    TImageDrawType[TImageDrawType["REPEAT_X"] = get_IMAGE_DRAW_REPEAT_X()] = "REPEAT_X";
    TImageDrawType[TImageDrawType["REPEAT_Y"] = get_IMAGE_DRAW_REPEAT_Y()] = "REPEAT_Y";
    TImageDrawType[TImageDrawType["REPEAT_Y_INVERSE"] = get_IMAGE_DRAW_REPEAT_Y_INVERSE()] = "REPEAT_Y_INVERSE";
    TImageDrawType[TImageDrawType["PATCH9"] = get_IMAGE_DRAW_PATCH9()] = "PATCH9";
    TImageDrawType[TImageDrawType["PATCH3_X"] = get_IMAGE_DRAW_PATCH3_X()] = "PATCH3_X";
    TImageDrawType[TImageDrawType["PATCH3_Y"] = get_IMAGE_DRAW_PATCH3_Y()] = "PATCH3_Y";
    TImageDrawType[TImageDrawType["PATCH3_X_SCALE_Y"] = get_IMAGE_DRAW_PATCH3_X_SCALE_Y()] = "PATCH3_X_SCALE_Y";
    TImageDrawType[TImageDrawType["PATCH3_Y_SCALE_X"] = get_IMAGE_DRAW_PATCH3_Y_SCALE_X()] = "PATCH3_Y_SCALE_X";
    TImageDrawType[TImageDrawType["REPEAT9"] = get_IMAGE_DRAW_REPEAT9()] = "REPEAT9";
    TImageDrawType[TImageDrawType["REPEAT3_X"] = get_IMAGE_DRAW_REPEAT3_X()] = "REPEAT3_X";
    TImageDrawType[TImageDrawType["REPEAT3_Y"] = get_IMAGE_DRAW_REPEAT3_Y()] = "REPEAT3_Y";
})(TImageDrawType || (TImageDrawType = {}));
;
var TNamedValue = /** @class */ (function () {
    function TNamedValue(nativeObj) {
        this.nativeObj = nativeObj;
    }
    TNamedValue.create = function () {
        return new TNamedValue(named_value_create());
    };
    TNamedValue.cast = function (nv) {
        return new TNamedValue(named_value_cast(nv ? (nv.nativeObj || nv) : null));
    };
    TNamedValue.prototype.setName = function (name) {
        return named_value_set_name(this.nativeObj, name);
    };
    TNamedValue.prototype.setValue = function (value) {
        return named_value_set_value(this.nativeObj, value ? value.nativeObj : null);
    };
    TNamedValue.prototype.getValue = function () {
        return new TValue(named_value_get_value(this.nativeObj));
    };
    TNamedValue.prototype.destroy = function () {
        return named_value_destroy(this.nativeObj);
    };
    Object.defineProperty(TNamedValue.prototype, "name", {
        get: function () {
            return named_value_t_get_prop_name(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TNamedValue;
}());
var TMIME_TYPE;
(function (TMIME_TYPE) {
    TMIME_TYPE[TMIME_TYPE["APPLICATION_ENVOY"] = get_MIME_TYPE_APPLICATION_ENVOY()] = "APPLICATION_ENVOY";
    TMIME_TYPE[TMIME_TYPE["APPLICATION_FRACTALS"] = get_MIME_TYPE_APPLICATION_FRACTALS()] = "APPLICATION_FRACTALS";
    TMIME_TYPE[TMIME_TYPE["APPLICATION_FUTURESPLASH"] = get_MIME_TYPE_APPLICATION_FUTURESPLASH()] = "APPLICATION_FUTURESPLASH";
    TMIME_TYPE[TMIME_TYPE["APPLICATION_HTA"] = get_MIME_TYPE_APPLICATION_HTA()] = "APPLICATION_HTA";
    TMIME_TYPE[TMIME_TYPE["APPLICATION_JSON"] = get_MIME_TYPE_APPLICATION_JSON()] = "APPLICATION_JSON";
    TMIME_TYPE[TMIME_TYPE["APPLICATION_UBJSON"] = get_MIME_TYPE_APPLICATION_UBJSON()] = "APPLICATION_UBJSON";
    TMIME_TYPE[TMIME_TYPE["APPLICATION_MAC_BINHEX40"] = get_MIME_TYPE_APPLICATION_MAC_BINHEX40()] = "APPLICATION_MAC_BINHEX40";
    TMIME_TYPE[TMIME_TYPE["APPLICATION_MSWORD"] = get_MIME_TYPE_APPLICATION_MSWORD()] = "APPLICATION_MSWORD";
    TMIME_TYPE[TMIME_TYPE["APPLICATION_OCTET_STREAM"] = get_MIME_TYPE_APPLICATION_OCTET_STREAM()] = "APPLICATION_OCTET_STREAM";
    TMIME_TYPE[TMIME_TYPE["APPLICATION_ODA"] = get_MIME_TYPE_APPLICATION_ODA()] = "APPLICATION_ODA";
    TMIME_TYPE[TMIME_TYPE["APPLICATION_OLESCRIPT"] = get_MIME_TYPE_APPLICATION_OLESCRIPT()] = "APPLICATION_OLESCRIPT";
    TMIME_TYPE[TMIME_TYPE["APPLICATION_PDF"] = get_MIME_TYPE_APPLICATION_PDF()] = "APPLICATION_PDF";
    TMIME_TYPE[TMIME_TYPE["APPLICATION_PICS_RULES"] = get_MIME_TYPE_APPLICATION_PICS_RULES()] = "APPLICATION_PICS_RULES";
    TMIME_TYPE[TMIME_TYPE["APPLICATION_PKCS10"] = get_MIME_TYPE_APPLICATION_PKCS10()] = "APPLICATION_PKCS10";
    TMIME_TYPE[TMIME_TYPE["APPLICATION_PKIX_CRL"] = get_MIME_TYPE_APPLICATION_PKIX_CRL()] = "APPLICATION_PKIX_CRL";
    TMIME_TYPE[TMIME_TYPE["APPLICATION_POSTSCRIPT"] = get_MIME_TYPE_APPLICATION_POSTSCRIPT()] = "APPLICATION_POSTSCRIPT";
    TMIME_TYPE[TMIME_TYPE["APPLICATION_RTF"] = get_MIME_TYPE_APPLICATION_RTF()] = "APPLICATION_RTF";
    TMIME_TYPE[TMIME_TYPE["APPLICATION_VND_MS_EXCEL"] = get_MIME_TYPE_APPLICATION_VND_MS_EXCEL()] = "APPLICATION_VND_MS_EXCEL";
    TMIME_TYPE[TMIME_TYPE["APPLICATION_VND_MS_OUTLOOK"] = get_MIME_TYPE_APPLICATION_VND_MS_OUTLOOK()] = "APPLICATION_VND_MS_OUTLOOK";
    TMIME_TYPE[TMIME_TYPE["APPLICATION_VND_MS_PKICERTSTORE"] = get_MIME_TYPE_APPLICATION_VND_MS_PKICERTSTORE()] = "APPLICATION_VND_MS_PKICERTSTORE";
    TMIME_TYPE[TMIME_TYPE["APPLICATION_VND_MS_PKISECCAT"] = get_MIME_TYPE_APPLICATION_VND_MS_PKISECCAT()] = "APPLICATION_VND_MS_PKISECCAT";
    TMIME_TYPE[TMIME_TYPE["APPLICATION_VND_MS_PKISTL"] = get_MIME_TYPE_APPLICATION_VND_MS_PKISTL()] = "APPLICATION_VND_MS_PKISTL";
    TMIME_TYPE[TMIME_TYPE["APPLICATION_VND_MS_POWERPOINT"] = get_MIME_TYPE_APPLICATION_VND_MS_POWERPOINT()] = "APPLICATION_VND_MS_POWERPOINT";
    TMIME_TYPE[TMIME_TYPE["APPLICATION_VND_MS_PROJECT"] = get_MIME_TYPE_APPLICATION_VND_MS_PROJECT()] = "APPLICATION_VND_MS_PROJECT";
    TMIME_TYPE[TMIME_TYPE["APPLICATION_VND_MS_WORKS"] = get_MIME_TYPE_APPLICATION_VND_MS_WORKS()] = "APPLICATION_VND_MS_WORKS";
    TMIME_TYPE[TMIME_TYPE["APPLICATION_WINHLP"] = get_MIME_TYPE_APPLICATION_WINHLP()] = "APPLICATION_WINHLP";
    TMIME_TYPE[TMIME_TYPE["APPLICATION_X_BCPIO"] = get_MIME_TYPE_APPLICATION_X_BCPIO()] = "APPLICATION_X_BCPIO";
    TMIME_TYPE[TMIME_TYPE["APPLICATION_X_CDF"] = get_MIME_TYPE_APPLICATION_X_CDF()] = "APPLICATION_X_CDF";
    TMIME_TYPE[TMIME_TYPE["APPLICATION_X_COMPRESS"] = get_MIME_TYPE_APPLICATION_X_COMPRESS()] = "APPLICATION_X_COMPRESS";
    TMIME_TYPE[TMIME_TYPE["APPLICATION_X_COMPRESSED"] = get_MIME_TYPE_APPLICATION_X_COMPRESSED()] = "APPLICATION_X_COMPRESSED";
    TMIME_TYPE[TMIME_TYPE["APPLICATION_X_CPIO"] = get_MIME_TYPE_APPLICATION_X_CPIO()] = "APPLICATION_X_CPIO";
    TMIME_TYPE[TMIME_TYPE["APPLICATION_X_CSH"] = get_MIME_TYPE_APPLICATION_X_CSH()] = "APPLICATION_X_CSH";
    TMIME_TYPE[TMIME_TYPE["APPLICATION_X_DIRECTOR"] = get_MIME_TYPE_APPLICATION_X_DIRECTOR()] = "APPLICATION_X_DIRECTOR";
    TMIME_TYPE[TMIME_TYPE["APPLICATION_X_DVI"] = get_MIME_TYPE_APPLICATION_X_DVI()] = "APPLICATION_X_DVI";
    TMIME_TYPE[TMIME_TYPE["APPLICATION_X_GTAR"] = get_MIME_TYPE_APPLICATION_X_GTAR()] = "APPLICATION_X_GTAR";
    TMIME_TYPE[TMIME_TYPE["APPLICATION_X_GZIP"] = get_MIME_TYPE_APPLICATION_X_GZIP()] = "APPLICATION_X_GZIP";
    TMIME_TYPE[TMIME_TYPE["APPLICATION_X_HDF"] = get_MIME_TYPE_APPLICATION_X_HDF()] = "APPLICATION_X_HDF";
    TMIME_TYPE[TMIME_TYPE["APPLICATION_X_IPHONE"] = get_MIME_TYPE_APPLICATION_X_IPHONE()] = "APPLICATION_X_IPHONE";
    TMIME_TYPE[TMIME_TYPE["APPLICATION_X_JAVASCRIPT"] = get_MIME_TYPE_APPLICATION_X_JAVASCRIPT()] = "APPLICATION_X_JAVASCRIPT";
    TMIME_TYPE[TMIME_TYPE["APPLICATION_X_LATEX"] = get_MIME_TYPE_APPLICATION_X_LATEX()] = "APPLICATION_X_LATEX";
    TMIME_TYPE[TMIME_TYPE["APPLICATION_X_MSACCESS"] = get_MIME_TYPE_APPLICATION_X_MSACCESS()] = "APPLICATION_X_MSACCESS";
    TMIME_TYPE[TMIME_TYPE["APPLICATION_X_MSCARDFILE"] = get_MIME_TYPE_APPLICATION_X_MSCARDFILE()] = "APPLICATION_X_MSCARDFILE";
    TMIME_TYPE[TMIME_TYPE["APPLICATION_X_MSCLIP"] = get_MIME_TYPE_APPLICATION_X_MSCLIP()] = "APPLICATION_X_MSCLIP";
    TMIME_TYPE[TMIME_TYPE["APPLICATION_X_MSDOWNLOAD"] = get_MIME_TYPE_APPLICATION_X_MSDOWNLOAD()] = "APPLICATION_X_MSDOWNLOAD";
    TMIME_TYPE[TMIME_TYPE["APPLICATION_X_MSMEDIAVIEW"] = get_MIME_TYPE_APPLICATION_X_MSMEDIAVIEW()] = "APPLICATION_X_MSMEDIAVIEW";
    TMIME_TYPE[TMIME_TYPE["APPLICATION_X_MSMETAFILE"] = get_MIME_TYPE_APPLICATION_X_MSMETAFILE()] = "APPLICATION_X_MSMETAFILE";
    TMIME_TYPE[TMIME_TYPE["APPLICATION_X_MSMONEY"] = get_MIME_TYPE_APPLICATION_X_MSMONEY()] = "APPLICATION_X_MSMONEY";
    TMIME_TYPE[TMIME_TYPE["APPLICATION_X_MSPUBLISHER"] = get_MIME_TYPE_APPLICATION_X_MSPUBLISHER()] = "APPLICATION_X_MSPUBLISHER";
    TMIME_TYPE[TMIME_TYPE["APPLICATION_X_MSSCHEDULE"] = get_MIME_TYPE_APPLICATION_X_MSSCHEDULE()] = "APPLICATION_X_MSSCHEDULE";
    TMIME_TYPE[TMIME_TYPE["APPLICATION_X_MSTERMINAL"] = get_MIME_TYPE_APPLICATION_X_MSTERMINAL()] = "APPLICATION_X_MSTERMINAL";
    TMIME_TYPE[TMIME_TYPE["APPLICATION_X_MSWRITE"] = get_MIME_TYPE_APPLICATION_X_MSWRITE()] = "APPLICATION_X_MSWRITE";
    TMIME_TYPE[TMIME_TYPE["APPLICATION_X_NETCDF"] = get_MIME_TYPE_APPLICATION_X_NETCDF()] = "APPLICATION_X_NETCDF";
    TMIME_TYPE[TMIME_TYPE["APPLICATION_X_PERFMON"] = get_MIME_TYPE_APPLICATION_X_PERFMON()] = "APPLICATION_X_PERFMON";
    TMIME_TYPE[TMIME_TYPE["APPLICATION_X_PKCS12"] = get_MIME_TYPE_APPLICATION_X_PKCS12()] = "APPLICATION_X_PKCS12";
    TMIME_TYPE[TMIME_TYPE["APPLICATION_X_SH"] = get_MIME_TYPE_APPLICATION_X_SH()] = "APPLICATION_X_SH";
    TMIME_TYPE[TMIME_TYPE["APPLICATION_X_SHAR"] = get_MIME_TYPE_APPLICATION_X_SHAR()] = "APPLICATION_X_SHAR";
    TMIME_TYPE[TMIME_TYPE["APPLICATION_X_SHOCKWAVE_FLASH"] = get_MIME_TYPE_APPLICATION_X_SHOCKWAVE_FLASH()] = "APPLICATION_X_SHOCKWAVE_FLASH";
    TMIME_TYPE[TMIME_TYPE["APPLICATION_X_STUFFIT"] = get_MIME_TYPE_APPLICATION_X_STUFFIT()] = "APPLICATION_X_STUFFIT";
    TMIME_TYPE[TMIME_TYPE["APPLICATION_X_SV4CPIO"] = get_MIME_TYPE_APPLICATION_X_SV4CPIO()] = "APPLICATION_X_SV4CPIO";
    TMIME_TYPE[TMIME_TYPE["APPLICATION_X_SV4CRC"] = get_MIME_TYPE_APPLICATION_X_SV4CRC()] = "APPLICATION_X_SV4CRC";
    TMIME_TYPE[TMIME_TYPE["APPLICATION_X_TAR"] = get_MIME_TYPE_APPLICATION_X_TAR()] = "APPLICATION_X_TAR";
    TMIME_TYPE[TMIME_TYPE["APPLICATION_X_TCL"] = get_MIME_TYPE_APPLICATION_X_TCL()] = "APPLICATION_X_TCL";
    TMIME_TYPE[TMIME_TYPE["APPLICATION_X_TEX"] = get_MIME_TYPE_APPLICATION_X_TEX()] = "APPLICATION_X_TEX";
    TMIME_TYPE[TMIME_TYPE["APPLICATION_X_TEXINFO"] = get_MIME_TYPE_APPLICATION_X_TEXINFO()] = "APPLICATION_X_TEXINFO";
    TMIME_TYPE[TMIME_TYPE["APPLICATION_X_TROFF"] = get_MIME_TYPE_APPLICATION_X_TROFF()] = "APPLICATION_X_TROFF";
    TMIME_TYPE[TMIME_TYPE["APPLICATION_X_USTAR"] = get_MIME_TYPE_APPLICATION_X_USTAR()] = "APPLICATION_X_USTAR";
    TMIME_TYPE[TMIME_TYPE["APPLICATION_ZIP"] = get_MIME_TYPE_APPLICATION_ZIP()] = "APPLICATION_ZIP";
    TMIME_TYPE[TMIME_TYPE["AUDIO_BASIC"] = get_MIME_TYPE_AUDIO_BASIC()] = "AUDIO_BASIC";
    TMIME_TYPE[TMIME_TYPE["AUDIO_MID"] = get_MIME_TYPE_AUDIO_MID()] = "AUDIO_MID";
    TMIME_TYPE[TMIME_TYPE["AUDIO_MPEG"] = get_MIME_TYPE_AUDIO_MPEG()] = "AUDIO_MPEG";
    TMIME_TYPE[TMIME_TYPE["AUDIO_X_AIFF"] = get_MIME_TYPE_AUDIO_X_AIFF()] = "AUDIO_X_AIFF";
    TMIME_TYPE[TMIME_TYPE["AUDIO_X_MPEGURL"] = get_MIME_TYPE_AUDIO_X_MPEGURL()] = "AUDIO_X_MPEGURL";
    TMIME_TYPE[TMIME_TYPE["AUDIO_X_WAV"] = get_MIME_TYPE_AUDIO_X_WAV()] = "AUDIO_X_WAV";
    TMIME_TYPE[TMIME_TYPE["IMAGE_BMP"] = get_MIME_TYPE_IMAGE_BMP()] = "IMAGE_BMP";
    TMIME_TYPE[TMIME_TYPE["IMAGE_CIS_COD"] = get_MIME_TYPE_IMAGE_CIS_COD()] = "IMAGE_CIS_COD";
    TMIME_TYPE[TMIME_TYPE["IMAGE_GIF"] = get_MIME_TYPE_IMAGE_GIF()] = "IMAGE_GIF";
    TMIME_TYPE[TMIME_TYPE["IMAGE_IEF"] = get_MIME_TYPE_IMAGE_IEF()] = "IMAGE_IEF";
    TMIME_TYPE[TMIME_TYPE["IMAGE_JPEG"] = get_MIME_TYPE_IMAGE_JPEG()] = "IMAGE_JPEG";
    TMIME_TYPE[TMIME_TYPE["IMAGE_PIPEG"] = get_MIME_TYPE_IMAGE_PIPEG()] = "IMAGE_PIPEG";
    TMIME_TYPE[TMIME_TYPE["IMAGE_SVG_XML"] = get_MIME_TYPE_IMAGE_SVG_XML()] = "IMAGE_SVG_XML";
    TMIME_TYPE[TMIME_TYPE["IMAGE_TIFF"] = get_MIME_TYPE_IMAGE_TIFF()] = "IMAGE_TIFF";
    TMIME_TYPE[TMIME_TYPE["IMAGE_X_CMX"] = get_MIME_TYPE_IMAGE_X_CMX()] = "IMAGE_X_CMX";
    TMIME_TYPE[TMIME_TYPE["IMAGE_X_ICON"] = get_MIME_TYPE_IMAGE_X_ICON()] = "IMAGE_X_ICON";
    TMIME_TYPE[TMIME_TYPE["IMAGE_X_RGB"] = get_MIME_TYPE_IMAGE_X_RGB()] = "IMAGE_X_RGB";
    TMIME_TYPE[TMIME_TYPE["IMAGE_X_XBITMAP"] = get_MIME_TYPE_IMAGE_X_XBITMAP()] = "IMAGE_X_XBITMAP";
    TMIME_TYPE[TMIME_TYPE["IMAGE_X_XPIXMAP"] = get_MIME_TYPE_IMAGE_X_XPIXMAP()] = "IMAGE_X_XPIXMAP";
    TMIME_TYPE[TMIME_TYPE["IMAGE_X_XWINDOWDUMP"] = get_MIME_TYPE_IMAGE_X_XWINDOWDUMP()] = "IMAGE_X_XWINDOWDUMP";
    TMIME_TYPE[TMIME_TYPE["MESSAGE_RFC822"] = get_MIME_TYPE_MESSAGE_RFC822()] = "MESSAGE_RFC822";
    TMIME_TYPE[TMIME_TYPE["TEXT_CSS"] = get_MIME_TYPE_TEXT_CSS()] = "TEXT_CSS";
    TMIME_TYPE[TMIME_TYPE["TEXT_H323"] = get_MIME_TYPE_TEXT_H323()] = "TEXT_H323";
    TMIME_TYPE[TMIME_TYPE["TEXT_HTML"] = get_MIME_TYPE_TEXT_HTML()] = "TEXT_HTML";
    TMIME_TYPE[TMIME_TYPE["TEXT_IULS"] = get_MIME_TYPE_TEXT_IULS()] = "TEXT_IULS";
    TMIME_TYPE[TMIME_TYPE["TEXT_PLAIN"] = get_MIME_TYPE_TEXT_PLAIN()] = "TEXT_PLAIN";
    TMIME_TYPE[TMIME_TYPE["TEXT_RICHTEXT"] = get_MIME_TYPE_TEXT_RICHTEXT()] = "TEXT_RICHTEXT";
    TMIME_TYPE[TMIME_TYPE["TEXT_SCRIPTLET"] = get_MIME_TYPE_TEXT_SCRIPTLET()] = "TEXT_SCRIPTLET";
    TMIME_TYPE[TMIME_TYPE["TEXT_WEBVIEWHTML"] = get_MIME_TYPE_TEXT_WEBVIEWHTML()] = "TEXT_WEBVIEWHTML";
    TMIME_TYPE[TMIME_TYPE["TEXT_X_COMPONENT"] = get_MIME_TYPE_TEXT_X_COMPONENT()] = "TEXT_X_COMPONENT";
    TMIME_TYPE[TMIME_TYPE["TEXT_X_SETEXT"] = get_MIME_TYPE_TEXT_X_SETEXT()] = "TEXT_X_SETEXT";
    TMIME_TYPE[TMIME_TYPE["TEXT_X_VCARD"] = get_MIME_TYPE_TEXT_X_VCARD()] = "TEXT_X_VCARD";
    TMIME_TYPE[TMIME_TYPE["VIDEO_MPEG"] = get_MIME_TYPE_VIDEO_MPEG()] = "VIDEO_MPEG";
    TMIME_TYPE[TMIME_TYPE["VIDEO_QUICKTIME"] = get_MIME_TYPE_VIDEO_QUICKTIME()] = "VIDEO_QUICKTIME";
    TMIME_TYPE[TMIME_TYPE["VIDEO_X_MSVIDEO"] = get_MIME_TYPE_VIDEO_X_MSVIDEO()] = "VIDEO_X_MSVIDEO";
})(TMIME_TYPE || (TMIME_TYPE = {}));
;
var TIndicatorDefaultPaint;
(function (TIndicatorDefaultPaint) {
    TIndicatorDefaultPaint[TIndicatorDefaultPaint["AUTO"] = get_INDICATOR_DEFAULT_PAINT_AUTO()] = "AUTO";
    TIndicatorDefaultPaint[TIndicatorDefaultPaint["FILL_DOT"] = get_INDICATOR_DEFAULT_PAINT_FILL_DOT()] = "FILL_DOT";
    TIndicatorDefaultPaint[TIndicatorDefaultPaint["STROKE_DOT"] = get_INDICATOR_DEFAULT_PAINT_STROKE_DOT()] = "STROKE_DOT";
    TIndicatorDefaultPaint[TIndicatorDefaultPaint["FILL_RECT"] = get_INDICATOR_DEFAULT_PAINT_FILL_RECT()] = "FILL_RECT";
    TIndicatorDefaultPaint[TIndicatorDefaultPaint["STROKE_RECT"] = get_INDICATOR_DEFAULT_PAINT_STROKE_RECT()] = "STROKE_RECT";
})(TIndicatorDefaultPaint || (TIndicatorDefaultPaint = {}));
;
var TIdleManager = /** @class */ (function () {
    function TIdleManager(nativeObj) {
        this.nativeObj = nativeObj;
    }
    return TIdleManager;
}());
var TCanvasOffline = /** @class */ (function () {
    function TCanvasOffline(nativeObj) {
        this.nativeObj = nativeObj;
    }
    return TCanvasOffline;
}());
var TCanvas = /** @class */ (function () {
    function TCanvas(nativeObj) {
        this.nativeObj = nativeObj;
    }
    TCanvas.prototype.getWidth = function () {
        return canvas_get_width(this.nativeObj);
    };
    TCanvas.prototype.getHeight = function () {
        return canvas_get_height(this.nativeObj);
    };
    TCanvas.prototype.getClipRect = function (r) {
        return canvas_get_clip_rect(this.nativeObj, r ? r.nativeObj : null);
    };
    TCanvas.prototype.setClipRect = function (r) {
        return canvas_set_clip_rect(this.nativeObj, r ? r.nativeObj : null);
    };
    TCanvas.prototype.setClipRectEx = function (r, translate) {
        return canvas_set_clip_rect_ex(this.nativeObj, r ? r.nativeObj : null, translate);
    };
    TCanvas.prototype.setFillColor = function (color) {
        return canvas_set_fill_color_str(this.nativeObj, color);
    };
    TCanvas.prototype.setTextColor = function (color) {
        return canvas_set_text_color_str(this.nativeObj, color);
    };
    TCanvas.prototype.setStrokeColor = function (color) {
        return canvas_set_stroke_color_str(this.nativeObj, color);
    };
    TCanvas.prototype.setGlobalAlpha = function (alpha) {
        return canvas_set_global_alpha(this.nativeObj, alpha);
    };
    TCanvas.prototype.translate = function (dx, dy) {
        return canvas_translate(this.nativeObj, dx, dy);
    };
    TCanvas.prototype.untranslate = function (dx, dy) {
        return canvas_untranslate(this.nativeObj, dx, dy);
    };
    TCanvas.prototype.drawVline = function (x, y, h) {
        return canvas_draw_vline(this.nativeObj, x, y, h);
    };
    TCanvas.prototype.drawHline = function (x, y, w) {
        return canvas_draw_hline(this.nativeObj, x, y, w);
    };
    TCanvas.prototype.fillRect = function (x, y, w, h) {
        return canvas_fill_rect(this.nativeObj, x, y, w, h);
    };
    TCanvas.prototype.clearRect = function (x, y, w, h) {
        return canvas_clear_rect(this.nativeObj, x, y, w, h);
    };
    TCanvas.prototype.strokeRect = function (x, y, w, h) {
        return canvas_stroke_rect(this.nativeObj, x, y, w, h);
    };
    TCanvas.prototype.setFont = function (name, size) {
        return canvas_set_font(this.nativeObj, name, size);
    };
    TCanvas.prototype.measureText = function (str) {
        return canvas_measure_utf8(this.nativeObj, str);
    };
    TCanvas.prototype.drawText = function (str, x, y) {
        return canvas_draw_utf8(this.nativeObj, str, x, y);
    };
    TCanvas.prototype.drawTextInRect = function (str, r) {
        return canvas_draw_utf8_in_rect(this.nativeObj, str, r ? r.nativeObj : null);
    };
    TCanvas.prototype.drawIcon = function (img, cx, cy) {
        return canvas_draw_icon(this.nativeObj, img ? img.nativeObj : null, cx, cy);
    };
    TCanvas.prototype.drawImage = function (img, src, dst) {
        return canvas_draw_image(this.nativeObj, img ? img.nativeObj : null, src ? src.nativeObj : null, dst ? dst.nativeObj : null);
    };
    TCanvas.prototype.drawImageEx = function (img, draw_type, dst) {
        return canvas_draw_image_ex(this.nativeObj, img ? img.nativeObj : null, draw_type, dst ? dst.nativeObj : null);
    };
    TCanvas.prototype.drawImageEx2 = function (img, draw_type, src, dst) {
        return canvas_draw_image_ex2(this.nativeObj, img ? img.nativeObj : null, draw_type, src ? src.nativeObj : null, dst ? dst.nativeObj : null);
    };
    TCanvas.prototype.getVgcanvas = function () {
        return new TVgcanvas(canvas_get_vgcanvas(this.nativeObj));
    };
    TCanvas.cast = function (c) {
        return new TCanvas(canvas_cast(c ? (c.nativeObj || c) : null));
    };
    TCanvas.prototype.reset = function () {
        return canvas_reset(this.nativeObj);
    };
    Object.defineProperty(TCanvas.prototype, "ox", {
        get: function () {
            return canvas_t_get_prop_ox(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TCanvas.prototype, "oy", {
        get: function () {
            return canvas_t_get_prop_oy(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TCanvas.prototype, "fontName", {
        get: function () {
            return canvas_t_get_prop_font_name(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TCanvas.prototype, "fontSize", {
        get: function () {
            return canvas_t_get_prop_font_size(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TCanvas.prototype, "globalAlpha", {
        get: function () {
            return canvas_t_get_prop_global_alpha(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TCanvas;
}());
var TEasingType;
(function (TEasingType) {
    TEasingType[TEasingType["LINEAR"] = get_EASING_LINEAR()] = "LINEAR";
    TEasingType[TEasingType["QUADRATIC_IN"] = get_EASING_QUADRATIC_IN()] = "QUADRATIC_IN";
    TEasingType[TEasingType["QUADRATIC_OUT"] = get_EASING_QUADRATIC_OUT()] = "QUADRATIC_OUT";
    TEasingType[TEasingType["QUADRATIC_INOUT"] = get_EASING_QUADRATIC_INOUT()] = "QUADRATIC_INOUT";
    TEasingType[TEasingType["CUBIC_IN"] = get_EASING_CUBIC_IN()] = "CUBIC_IN";
    TEasingType[TEasingType["CUBIC_OUT"] = get_EASING_CUBIC_OUT()] = "CUBIC_OUT";
    TEasingType[TEasingType["SIN_IN"] = get_EASING_SIN_IN()] = "SIN_IN";
    TEasingType[TEasingType["SIN_OUT"] = get_EASING_SIN_OUT()] = "SIN_OUT";
    TEasingType[TEasingType["SIN_INOUT"] = get_EASING_SIN_INOUT()] = "SIN_INOUT";
    TEasingType[TEasingType["POW_IN"] = get_EASING_POW_IN()] = "POW_IN";
    TEasingType[TEasingType["POW_OUT"] = get_EASING_POW_OUT()] = "POW_OUT";
    TEasingType[TEasingType["POW_INOUT"] = get_EASING_POW_INOUT()] = "POW_INOUT";
    TEasingType[TEasingType["CIRCULAR_IN"] = get_EASING_CIRCULAR_IN()] = "CIRCULAR_IN";
    TEasingType[TEasingType["CIRCULAR_OUT"] = get_EASING_CIRCULAR_OUT()] = "CIRCULAR_OUT";
    TEasingType[TEasingType["CIRCULAR_INOUT"] = get_EASING_CIRCULAR_INOUT()] = "CIRCULAR_INOUT";
    TEasingType[TEasingType["ELASTIC_IN"] = get_EASING_ELASTIC_IN()] = "ELASTIC_IN";
    TEasingType[TEasingType["ELASTIC_OUT"] = get_EASING_ELASTIC_OUT()] = "ELASTIC_OUT";
    TEasingType[TEasingType["ELASTIC_INOUT"] = get_EASING_ELASTIC_INOUT()] = "ELASTIC_INOUT";
    TEasingType[TEasingType["BACK_IN"] = get_EASING_BACK_IN()] = "BACK_IN";
    TEasingType[TEasingType["BACK_OUT"] = get_EASING_BACK_OUT()] = "BACK_OUT";
    TEasingType[TEasingType["BACK_INOUT"] = get_EASING_BACK_INOUT()] = "BACK_INOUT";
    TEasingType[TEasingType["BOUNCE_IN"] = get_EASING_BOUNCE_IN()] = "BOUNCE_IN";
    TEasingType[TEasingType["BOUNCE_OUT"] = get_EASING_BOUNCE_OUT()] = "BOUNCE_OUT";
    TEasingType[TEasingType["BOUNCE_INOUT"] = get_EASING_BOUNCE_INOUT()] = "BOUNCE_INOUT";
})(TEasingType || (TEasingType = {}));
;
var TDateTime = /** @class */ (function () {
    function TDateTime(nativeObj) {
        this.nativeObj = nativeObj;
    }
    TDateTime.create = function () {
        return new TDateTime(date_time_create());
    };
    TDateTime.prototype.set = function () {
        return date_time_set(this.nativeObj);
    };
    TDateTime.prototype.fromTime = function (time) {
        return date_time_from_time(this.nativeObj, time);
    };
    TDateTime.isLeap = function (year) {
        return date_time_is_leap(year);
    };
    TDateTime.getDays = function (year, montn) {
        return date_time_get_days(year, montn);
    };
    TDateTime.getWday = function (year, montn, day) {
        return date_time_get_wday(year, montn, day);
    };
    TDateTime.getMonthName = function (montn) {
        return date_time_get_month_name(montn);
    };
    TDateTime.getWdayName = function (wday) {
        return date_time_get_wday_name(wday);
    };
    TDateTime.prototype.destroy = function () {
        return date_time_destroy(this.nativeObj);
    };
    Object.defineProperty(TDateTime.prototype, "second", {
        get: function () {
            return date_time_t_get_prop_second(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TDateTime.prototype, "minute", {
        get: function () {
            return date_time_t_get_prop_minute(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TDateTime.prototype, "hour", {
        get: function () {
            return date_time_t_get_prop_hour(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TDateTime.prototype, "day", {
        get: function () {
            return date_time_t_get_prop_day(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TDateTime.prototype, "wday", {
        get: function () {
            return date_time_t_get_prop_wday(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TDateTime.prototype, "month", {
        get: function () {
            return date_time_t_get_prop_month(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TDateTime.prototype, "year", {
        get: function () {
            return date_time_t_get_prop_year(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TDateTime;
}());
var TColor = /** @class */ (function () {
    function TColor(nativeObj) {
        this.nativeObj = nativeObj;
    }
    TColor.create = function (r, b, g, a) {
        return new TColor(color_create(r, b, g, a));
    };
    TColor.prototype.fromStr = function (str) {
        return new TColor(color_from_str(this.nativeObj, str));
    };
    TColor.prototype.r = function () {
        return color_r(this.nativeObj);
    };
    TColor.prototype.g = function () {
        return color_g(this.nativeObj);
    };
    TColor.prototype.b = function () {
        return color_b(this.nativeObj);
    };
    TColor.prototype.a = function () {
        return color_a(this.nativeObj);
    };
    TColor.cast = function (color) {
        return new TColor(color_cast(color ? (color.nativeObj || color) : null));
    };
    TColor.prototype.destroy = function () {
        return color_destroy(this.nativeObj);
    };
    Object.defineProperty(TColor.prototype, "color", {
        get: function () {
            return color_t_get_prop_color(this.nativeObj);
        },
        set: function (value) {
            color_t_set_prop_color(this.nativeObj, value);
        },
        enumerable: true,
        configurable: true
    });
    return TColor;
}());
var TAssetInfo = /** @class */ (function () {
    function TAssetInfo(nativeObj) {
        this.nativeObj = nativeObj;
    }
    Object.defineProperty(TAssetInfo.prototype, "type", {
        get: function () {
            return asset_info_t_get_prop_type(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TAssetInfo.prototype, "subtype", {
        get: function () {
            return asset_info_t_get_prop_subtype(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TAssetInfo.prototype, "isInRom", {
        get: function () {
            return asset_info_t_get_prop_is_in_rom(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TAssetInfo.prototype, "size", {
        get: function () {
            return asset_info_t_get_prop_size(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TAssetInfo.prototype, "refcount", {
        get: function () {
            return asset_info_t_get_prop_refcount(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TAssetInfo.prototype, "name", {
        get: function () {
            return asset_info_t_get_prop_name(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TAssetInfo;
}());
var TAssetType;
(function (TAssetType) {
    TAssetType[TAssetType["NONE"] = get_ASSET_TYPE_NONE()] = "NONE";
    TAssetType[TAssetType["FONT"] = get_ASSET_TYPE_FONT()] = "FONT";
    TAssetType[TAssetType["IMAGE"] = get_ASSET_TYPE_IMAGE()] = "IMAGE";
    TAssetType[TAssetType["STYLE"] = get_ASSET_TYPE_STYLE()] = "STYLE";
    TAssetType[TAssetType["UI"] = get_ASSET_TYPE_UI()] = "UI";
    TAssetType[TAssetType["XML"] = get_ASSET_TYPE_XML()] = "XML";
    TAssetType[TAssetType["STRINGS"] = get_ASSET_TYPE_STRINGS()] = "STRINGS";
    TAssetType[TAssetType["SCRIPT"] = get_ASSET_TYPE_SCRIPT()] = "SCRIPT";
    TAssetType[TAssetType["DATA"] = get_ASSET_TYPE_DATA()] = "DATA";
})(TAssetType || (TAssetType = {}));
;
var TGuagePointer = /** @class */ (function (_super) {
    __extends(TGuagePointer, _super);
    function TGuagePointer(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TGuagePointer.create = function (parent, x, y, w, h) {
        return new TGuagePointer(guage_pointer_create(parent ? parent.nativeObj : null, x, y, w, h));
    };
    TGuagePointer.cast = function (widget) {
        return new TGuagePointer(guage_pointer_cast(widget ? (widget.nativeObj || widget) : null));
    };
    TGuagePointer.prototype.setAngle = function (angle) {
        return guage_pointer_set_angle(this.nativeObj, angle);
    };
    TGuagePointer.prototype.setImage = function (image) {
        return guage_pointer_set_image(this.nativeObj, image);
    };
    TGuagePointer.prototype.setAnchor = function (anchor_x, anchor_y) {
        return guage_pointer_set_anchor(this.nativeObj, anchor_x, anchor_y);
    };
    Object.defineProperty(TGuagePointer.prototype, "angle", {
        get: function () {
            return guage_pointer_t_get_prop_angle(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TGuagePointer.prototype, "image", {
        get: function () {
            return guage_pointer_t_get_prop_image(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TGuagePointer.prototype, "anchorX", {
        get: function () {
            return guage_pointer_t_get_prop_anchor_x(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TGuagePointer.prototype, "anchorY", {
        get: function () {
            return guage_pointer_t_get_prop_anchor_y(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TGuagePointer;
}(TWidget));
var TWheelEvent = /** @class */ (function (_super) {
    __extends(TWheelEvent, _super);
    function TWheelEvent(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TWheelEvent.cast = function (event) {
        return new TWheelEvent(wheel_event_cast(event ? (event.nativeObj || event) : null));
    };
    Object.defineProperty(TWheelEvent.prototype, "dy", {
        get: function () {
            return wheel_event_t_get_prop_dy(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TWheelEvent.prototype, "alt", {
        get: function () {
            return wheel_event_t_get_prop_alt(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TWheelEvent.prototype, "ctrl", {
        get: function () {
            return wheel_event_t_get_prop_ctrl(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TWheelEvent.prototype, "shift", {
        get: function () {
            return wheel_event_t_get_prop_shift(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TWheelEvent;
}(TEvent));
var TView = /** @class */ (function (_super) {
    __extends(TView, _super);
    function TView(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TView.create = function (parent, x, y, w, h) {
        return new TView(view_create(parent ? parent.nativeObj : null, x, y, w, h));
    };
    TView.prototype.setDefaultFocusedChild = function (default_focused_child) {
        return view_set_default_focused_child(this.nativeObj, default_focused_child);
    };
    TView.cast = function (widget) {
        return new TView(view_cast(widget ? (widget.nativeObj || widget) : null));
    };
    Object.defineProperty(TView.prototype, "defaultFocusedChild", {
        get: function () {
            return view_t_get_prop_default_focused_child(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TView;
}(TWidget));
var TTabControl = /** @class */ (function (_super) {
    __extends(TTabControl, _super);
    function TTabControl(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TTabControl.create = function (parent, x, y, w, h) {
        return new TTabControl(tab_control_create(parent ? parent.nativeObj : null, x, y, w, h));
    };
    TTabControl.cast = function (widget) {
        return new TTabControl(tab_control_cast(widget ? (widget.nativeObj || widget) : null));
    };
    return TTabControl;
}(TWidget));
var TTabButton = /** @class */ (function (_super) {
    __extends(TTabButton, _super);
    function TTabButton(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TTabButton.create = function (parent, x, y, w, h) {
        return new TTabButton(tab_button_create(parent ? parent.nativeObj : null, x, y, w, h));
    };
    TTabButton.cast = function (widget) {
        return new TTabButton(tab_button_cast(widget ? (widget.nativeObj || widget) : null));
    };
    TTabButton.prototype.setValue = function (value) {
        return tab_button_set_value(this.nativeObj, value);
    };
    TTabButton.prototype.setIcon = function (name) {
        return tab_button_set_icon(this.nativeObj, name);
    };
    TTabButton.prototype.setActiveIcon = function (name) {
        return tab_button_set_active_icon(this.nativeObj, name);
    };
    TTabButton.prototype.setLoadUi = function (name) {
        return tab_button_set_load_ui(this.nativeObj, name);
    };
    Object.defineProperty(TTabButton.prototype, "value", {
        get: function () {
            return tab_button_t_get_prop_value(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TTabButton.prototype, "loadUi", {
        get: function () {
            return tab_button_t_get_prop_load_ui(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TTabButton.prototype, "activeIcon", {
        get: function () {
            return tab_button_t_get_prop_active_icon(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TTabButton.prototype, "icon", {
        get: function () {
            return tab_button_t_get_prop_icon(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TTabButton;
}(TWidget));
var TTabButtonGroup = /** @class */ (function (_super) {
    __extends(TTabButtonGroup, _super);
    function TTabButtonGroup(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TTabButtonGroup.create = function (parent, x, y, w, h) {
        return new TTabButtonGroup(tab_button_group_create(parent ? parent.nativeObj : null, x, y, w, h));
    };
    TTabButtonGroup.prototype.setCompact = function (compact) {
        return tab_button_group_set_compact(this.nativeObj, compact);
    };
    TTabButtonGroup.prototype.setScrollable = function (scrollable) {
        return tab_button_group_set_scrollable(this.nativeObj, scrollable);
    };
    TTabButtonGroup.cast = function (widget) {
        return new TTabButtonGroup(tab_button_group_cast(widget ? (widget.nativeObj || widget) : null));
    };
    Object.defineProperty(TTabButtonGroup.prototype, "compact", {
        get: function () {
            return tab_button_group_t_get_prop_compact(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TTabButtonGroup.prototype, "scrollable", {
        get: function () {
            return tab_button_group_t_get_prop_scrollable(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TTabButtonGroup;
}(TWidget));
var TSlider = /** @class */ (function (_super) {
    __extends(TSlider, _super);
    function TSlider(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TSlider.create = function (parent, x, y, w, h) {
        return new TSlider(slider_create(parent ? parent.nativeObj : null, x, y, w, h));
    };
    TSlider.cast = function (widget) {
        return new TSlider(slider_cast(widget ? (widget.nativeObj || widget) : null));
    };
    TSlider.prototype.setValue = function (value) {
        return slider_set_value(this.nativeObj, value);
    };
    TSlider.prototype.setMin = function (min) {
        return slider_set_min(this.nativeObj, min);
    };
    TSlider.prototype.setMax = function (max) {
        return slider_set_max(this.nativeObj, max);
    };
    TSlider.prototype.setStep = function (step) {
        return slider_set_step(this.nativeObj, step);
    };
    TSlider.prototype.setBarSize = function (bar_size) {
        return slider_set_bar_size(this.nativeObj, bar_size);
    };
    TSlider.prototype.setVertical = function (vertical) {
        return slider_set_vertical(this.nativeObj, vertical);
    };
    Object.defineProperty(TSlider.prototype, "value", {
        get: function () {
            return slider_t_get_prop_value(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TSlider.prototype, "min", {
        get: function () {
            return slider_t_get_prop_min(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TSlider.prototype, "max", {
        get: function () {
            return slider_t_get_prop_max(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TSlider.prototype, "step", {
        get: function () {
            return slider_t_get_prop_step(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TSlider.prototype, "vertical", {
        get: function () {
            return slider_t_get_prop_vertical(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TSlider.prototype, "barSize", {
        get: function () {
            return slider_t_get_prop_bar_size(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TSlider.prototype, "draggerSize", {
        get: function () {
            return slider_t_get_prop_dragger_size(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TSlider.prototype, "draggerAdaptToIcon", {
        get: function () {
            return slider_t_get_prop_dragger_adapt_to_icon(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TSlider.prototype, "slideWithBar", {
        get: function () {
            return slider_t_get_prop_slide_with_bar(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TSlider;
}(TWidget));
var TRow = /** @class */ (function (_super) {
    __extends(TRow, _super);
    function TRow(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TRow.create = function (parent, x, y, w, h) {
        return new TRow(row_create(parent ? parent.nativeObj : null, x, y, w, h));
    };
    TRow.cast = function (widget) {
        return new TRow(row_cast(widget ? (widget.nativeObj || widget) : null));
    };
    return TRow;
}(TWidget));
var TProgressBar = /** @class */ (function (_super) {
    __extends(TProgressBar, _super);
    function TProgressBar(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TProgressBar.create = function (parent, x, y, w, h) {
        return new TProgressBar(progress_bar_create(parent ? parent.nativeObj : null, x, y, w, h));
    };
    TProgressBar.cast = function (widget) {
        return new TProgressBar(progress_bar_cast(widget ? (widget.nativeObj || widget) : null));
    };
    TProgressBar.prototype.setValue = function (value) {
        return progress_bar_set_value(this.nativeObj, value);
    };
    TProgressBar.prototype.setMax = function (max) {
        return progress_bar_set_max(this.nativeObj, max);
    };
    TProgressBar.prototype.setVertical = function (vertical) {
        return progress_bar_set_vertical(this.nativeObj, vertical);
    };
    TProgressBar.prototype.setShowText = function (show_text) {
        return progress_bar_set_show_text(this.nativeObj, show_text);
    };
    TProgressBar.prototype.getPercent = function () {
        return progress_bar_get_percent(this.nativeObj);
    };
    Object.defineProperty(TProgressBar.prototype, "value", {
        get: function () {
            return progress_bar_t_get_prop_value(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TProgressBar.prototype, "max", {
        get: function () {
            return progress_bar_t_get_prop_max(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TProgressBar.prototype, "vertical", {
        get: function () {
            return progress_bar_t_get_prop_vertical(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TProgressBar.prototype, "showText", {
        get: function () {
            return progress_bar_t_get_prop_show_text(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TProgressBar;
}(TWidget));
var TPages = /** @class */ (function (_super) {
    __extends(TPages, _super);
    function TPages(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TPages.create = function (parent, x, y, w, h) {
        return new TPages(pages_create(parent ? parent.nativeObj : null, x, y, w, h));
    };
    TPages.cast = function (widget) {
        return new TPages(pages_cast(widget ? (widget.nativeObj || widget) : null));
    };
    TPages.prototype.setActive = function (index) {
        return pages_set_active(this.nativeObj, index);
    };
    TPages.prototype.setActiveByName = function (name) {
        return pages_set_active_by_name(this.nativeObj, name);
    };
    Object.defineProperty(TPages.prototype, "active", {
        get: function () {
            return pages_t_get_prop_active(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TPages;
}(TWidget));
var TLabel = /** @class */ (function (_super) {
    __extends(TLabel, _super);
    function TLabel(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TLabel.create = function (parent, x, y, w, h) {
        return new TLabel(label_create(parent ? parent.nativeObj : null, x, y, w, h));
    };
    TLabel.prototype.setLength = function (length) {
        return label_set_length(this.nativeObj, length);
    };
    TLabel.prototype.setLineWrap = function (line_wrap) {
        return label_set_line_wrap(this.nativeObj, line_wrap);
    };
    TLabel.prototype.resizeToContent = function (min_w, max_w, min_h, max_h) {
        return label_resize_to_content(this.nativeObj, min_w, max_w, min_h, max_h);
    };
    TLabel.cast = function (widget) {
        return new TLabel(label_cast(widget ? (widget.nativeObj || widget) : null));
    };
    Object.defineProperty(TLabel.prototype, "length", {
        get: function () {
            return label_t_get_prop_length(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TLabel.prototype, "lineWrap", {
        get: function () {
            return label_t_get_prop_line_wrap(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TLabel;
}(TWidget));
var TGroupBox = /** @class */ (function (_super) {
    __extends(TGroupBox, _super);
    function TGroupBox(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TGroupBox.create = function (parent, x, y, w, h) {
        return new TGroupBox(group_box_create(parent ? parent.nativeObj : null, x, y, w, h));
    };
    TGroupBox.cast = function (widget) {
        return new TGroupBox(group_box_cast(widget ? (widget.nativeObj || widget) : null));
    };
    return TGroupBox;
}(TWidget));
var TGrid = /** @class */ (function (_super) {
    __extends(TGrid, _super);
    function TGrid(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TGrid.create = function (parent, x, y, w, h) {
        return new TGrid(grid_create(parent ? parent.nativeObj : null, x, y, w, h));
    };
    TGrid.cast = function (widget) {
        return new TGrid(grid_cast(widget ? (widget.nativeObj || widget) : null));
    };
    return TGrid;
}(TWidget));
var TGridItem = /** @class */ (function (_super) {
    __extends(TGridItem, _super);
    function TGridItem(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TGridItem.create = function (parent, x, y, w, h) {
        return new TGridItem(grid_item_create(parent ? parent.nativeObj : null, x, y, w, h));
    };
    TGridItem.cast = function (widget) {
        return new TGridItem(grid_item_cast(widget ? (widget.nativeObj || widget) : null));
    };
    return TGridItem;
}(TWidget));
var TEdit = /** @class */ (function (_super) {
    __extends(TEdit, _super);
    function TEdit(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TEdit.create = function (parent, x, y, w, h) {
        return new TEdit(edit_create(parent ? parent.nativeObj : null, x, y, w, h));
    };
    TEdit.cast = function (widget) {
        return new TEdit(edit_cast(widget ? (widget.nativeObj || widget) : null));
    };
    TEdit.prototype.getInt = function () {
        return edit_get_int(this.nativeObj);
    };
    TEdit.prototype.getDouble = function () {
        return edit_get_double(this.nativeObj);
    };
    TEdit.prototype.setInt = function (value) {
        return edit_set_int(this.nativeObj, value);
    };
    TEdit.prototype.setDouble = function (value) {
        return edit_set_double(this.nativeObj, value);
    };
    TEdit.prototype.setTextLimit = function (min, max) {
        return edit_set_text_limit(this.nativeObj, min, max);
    };
    TEdit.prototype.setIntLimit = function (min, max, step) {
        return edit_set_int_limit(this.nativeObj, min, max, step);
    };
    TEdit.prototype.setFloatLimit = function (min, max, step) {
        return edit_set_float_limit(this.nativeObj, min, max, step);
    };
    TEdit.prototype.setReadonly = function (readonly) {
        return edit_set_readonly(this.nativeObj, readonly);
    };
    TEdit.prototype.setCancelable = function (cancelable) {
        return edit_set_cancelable(this.nativeObj, cancelable);
    };
    TEdit.prototype.setAutoFix = function (auto_fix) {
        return edit_set_auto_fix(this.nativeObj, auto_fix);
    };
    TEdit.prototype.setSelectNoneWhenFocused = function (select_none_when_focused) {
        return edit_set_select_none_when_focused(this.nativeObj, select_none_when_focused);
    };
    TEdit.prototype.setOpenImWhenFocused = function (open_im_when_focused) {
        return edit_set_open_im_when_focused(this.nativeObj, open_im_when_focused);
    };
    TEdit.prototype.setCloseImWhenBlured = function (close_im_when_blured) {
        return edit_set_close_im_when_blured(this.nativeObj, close_im_when_blured);
    };
    TEdit.prototype.setInputType = function (type) {
        return edit_set_input_type(this.nativeObj, type);
    };
    TEdit.prototype.setActionText = function (action_text) {
        return edit_set_action_text(this.nativeObj, action_text);
    };
    TEdit.prototype.setTips = function (tips) {
        return edit_set_tips(this.nativeObj, tips);
    };
    TEdit.prototype.setTrTips = function (tr_tips) {
        return edit_set_tr_tips(this.nativeObj, tr_tips);
    };
    TEdit.prototype.setKeyboard = function (keyboard) {
        return edit_set_keyboard(this.nativeObj, keyboard);
    };
    TEdit.prototype.setPasswordVisible = function (password_visible) {
        return edit_set_password_visible(this.nativeObj, password_visible);
    };
    TEdit.prototype.setFocus = function (focus) {
        return edit_set_focus(this.nativeObj, focus);
    };
    TEdit.prototype.setCursor = function (cursor) {
        return edit_set_cursor(this.nativeObj, cursor);
    };
    Object.defineProperty(TEdit.prototype, "readonly", {
        get: function () {
            return edit_t_get_prop_readonly(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TEdit.prototype, "passwordVisible", {
        get: function () {
            return edit_t_get_prop_password_visible(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TEdit.prototype, "autoFix", {
        get: function () {
            return edit_t_get_prop_auto_fix(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TEdit.prototype, "selectNoneWhenFocused", {
        get: function () {
            return edit_t_get_prop_select_none_when_focused(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TEdit.prototype, "openImWhenFocused", {
        get: function () {
            return edit_t_get_prop_open_im_when_focused(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TEdit.prototype, "closeImWhenBlured", {
        get: function () {
            return edit_t_get_prop_close_im_when_blured(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TEdit.prototype, "topMargin", {
        get: function () {
            return edit_t_get_prop_top_margin(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TEdit.prototype, "bottomMargin", {
        get: function () {
            return edit_t_get_prop_bottom_margin(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TEdit.prototype, "leftMargin", {
        get: function () {
            return edit_t_get_prop_left_margin(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TEdit.prototype, "rightMargin", {
        get: function () {
            return edit_t_get_prop_right_margin(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TEdit.prototype, "tips", {
        get: function () {
            return edit_t_get_prop_tips(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TEdit.prototype, "trTips", {
        get: function () {
            return edit_t_get_prop_tr_tips(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TEdit.prototype, "actionText", {
        get: function () {
            return edit_t_get_prop_action_text(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TEdit.prototype, "keyboard", {
        get: function () {
            return edit_t_get_prop_keyboard(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TEdit.prototype, "inputType", {
        get: function () {
            return edit_t_get_prop_input_type(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TEdit.prototype, "min", {
        get: function () {
            return edit_t_get_prop_min(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TEdit.prototype, "max", {
        get: function () {
            return edit_t_get_prop_max(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TEdit.prototype, "step", {
        get: function () {
            return edit_t_get_prop_step(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TEdit.prototype, "cancelable", {
        get: function () {
            return edit_t_get_prop_cancelable(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TEdit;
}(TWidget));
var TDragger = /** @class */ (function (_super) {
    __extends(TDragger, _super);
    function TDragger(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TDragger.create = function (parent, x, y, w, h) {
        return new TDragger(dragger_create(parent ? parent.nativeObj : null, x, y, w, h));
    };
    TDragger.cast = function (widget) {
        return new TDragger(dragger_cast(widget ? (widget.nativeObj || widget) : null));
    };
    TDragger.prototype.setRange = function (x_min, y_min, x_max, y_max) {
        return dragger_set_range(this.nativeObj, x_min, y_min, x_max, y_max);
    };
    Object.defineProperty(TDragger.prototype, "xMin", {
        get: function () {
            return dragger_t_get_prop_x_min(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TDragger.prototype, "yMin", {
        get: function () {
            return dragger_t_get_prop_y_min(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TDragger.prototype, "xMax", {
        get: function () {
            return dragger_t_get_prop_x_max(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TDragger.prototype, "yMax", {
        get: function () {
            return dragger_t_get_prop_y_max(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TDragger;
}(TWidget));
var TDigitClock = /** @class */ (function (_super) {
    __extends(TDigitClock, _super);
    function TDigitClock(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TDigitClock.create = function (parent, x, y, w, h) {
        return new TDigitClock(digit_clock_create(parent ? parent.nativeObj : null, x, y, w, h));
    };
    TDigitClock.cast = function (widget) {
        return new TDigitClock(digit_clock_cast(widget ? (widget.nativeObj || widget) : null));
    };
    TDigitClock.prototype.setFormat = function (format) {
        return digit_clock_set_format(this.nativeObj, format);
    };
    Object.defineProperty(TDigitClock.prototype, "format", {
        get: function () {
            return digit_clock_t_get_prop_format(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TDigitClock;
}(TWidget));
var TDialogTitle = /** @class */ (function (_super) {
    __extends(TDialogTitle, _super);
    function TDialogTitle(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TDialogTitle.create = function (parent, x, y, w, h) {
        return new TDialogTitle(dialog_title_create(parent ? parent.nativeObj : null, x, y, w, h));
    };
    TDialogTitle.cast = function (widget) {
        return new TDialogTitle(dialog_title_cast(widget ? (widget.nativeObj || widget) : null));
    };
    return TDialogTitle;
}(TWidget));
var TDialogClient = /** @class */ (function (_super) {
    __extends(TDialogClient, _super);
    function TDialogClient(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TDialogClient.create = function (parent, x, y, w, h) {
        return new TDialogClient(dialog_client_create(parent ? parent.nativeObj : null, x, y, w, h));
    };
    TDialogClient.cast = function (widget) {
        return new TDialogClient(dialog_client_cast(widget ? (widget.nativeObj || widget) : null));
    };
    return TDialogClient;
}(TWidget));
var TComboBoxItem = /** @class */ (function (_super) {
    __extends(TComboBoxItem, _super);
    function TComboBoxItem(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TComboBoxItem.create = function (parent, x, y, w, h) {
        return new TComboBoxItem(combo_box_item_create(parent ? parent.nativeObj : null, x, y, w, h));
    };
    TComboBoxItem.cast = function (widget) {
        return new TComboBoxItem(combo_box_item_cast(widget ? (widget.nativeObj || widget) : null));
    };
    TComboBoxItem.prototype.setChecked = function (checked) {
        return combo_box_item_set_checked(this.nativeObj, checked);
    };
    TComboBoxItem.prototype.setValue = function (value) {
        return combo_box_item_set_value(this.nativeObj, value);
    };
    Object.defineProperty(TComboBoxItem.prototype, "value", {
        get: function () {
            return combo_box_item_t_get_prop_value(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TComboBoxItem.prototype, "checked", {
        get: function () {
            return combo_box_item_t_get_prop_checked(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TComboBoxItem;
}(TWidget));
var TColumn = /** @class */ (function (_super) {
    __extends(TColumn, _super);
    function TColumn(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TColumn.create = function (parent, x, y, w, h) {
        return new TColumn(column_create(parent ? parent.nativeObj : null, x, y, w, h));
    };
    TColumn.cast = function (widget) {
        return new TColumn(column_cast(widget ? (widget.nativeObj || widget) : null));
    };
    return TColumn;
}(TWidget));
var TColorTile = /** @class */ (function (_super) {
    __extends(TColorTile, _super);
    function TColorTile(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TColorTile.create = function (parent, x, y, w, h) {
        return new TColorTile(color_tile_create(parent ? parent.nativeObj : null, x, y, w, h));
    };
    TColorTile.cast = function (widget) {
        return new TColorTile(color_tile_cast(widget ? (widget.nativeObj || widget) : null));
    };
    TColorTile.prototype.setBgColor = function (color) {
        return color_tile_set_bg_color(this.nativeObj, color);
    };
    Object.defineProperty(TColorTile.prototype, "bgColor", {
        get: function () {
            return color_tile_t_get_prop_bg_color(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TColorTile.prototype, "borderColor", {
        get: function () {
            return color_tile_t_get_prop_border_color(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TColorTile;
}(TWidget));
var TClipView = /** @class */ (function (_super) {
    __extends(TClipView, _super);
    function TClipView(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TClipView.create = function (parent, x, y, w, h) {
        return new TClipView(clip_view_create(parent ? parent.nativeObj : null, x, y, w, h));
    };
    TClipView.cast = function (widget) {
        return new TClipView(clip_view_cast(widget ? (widget.nativeObj || widget) : null));
    };
    return TClipView;
}(TWidget));
var TCheckButton = /** @class */ (function (_super) {
    __extends(TCheckButton, _super);
    function TCheckButton(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TCheckButton.create = function (parent, x, y, w, h) {
        return new TCheckButton(check_button_create(parent ? parent.nativeObj : null, x, y, w, h));
    };
    TCheckButton.createRadio = function (parent, x, y, w, h) {
        return new TCheckButton(check_button_create_radio(parent ? parent.nativeObj : null, x, y, w, h));
    };
    TCheckButton.prototype.setValue = function (value) {
        return check_button_set_value(this.nativeObj, value);
    };
    TCheckButton.cast = function (widget) {
        return new TCheckButton(check_button_cast(widget ? (widget.nativeObj || widget) : null));
    };
    Object.defineProperty(TCheckButton.prototype, "value", {
        get: function () {
            return check_button_t_get_prop_value(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TCheckButton;
}(TWidget));
var TPropChangeEvent = /** @class */ (function (_super) {
    __extends(TPropChangeEvent, _super);
    function TPropChangeEvent(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TPropChangeEvent.cast = function (event) {
        return new TPropChangeEvent(prop_change_event_cast(event ? (event.nativeObj || event) : null));
    };
    Object.defineProperty(TPropChangeEvent.prototype, "name", {
        get: function () {
            return prop_change_event_t_get_prop_name(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TPropChangeEvent.prototype, "value", {
        get: function () {
            return prop_change_event_t_get_prop_value(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TPropChangeEvent;
}(TEvent));
var TProgressEvent = /** @class */ (function (_super) {
    __extends(TProgressEvent, _super);
    function TProgressEvent(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TProgressEvent.cast = function (event) {
        return new TProgressEvent(progress_event_cast(event ? (event.nativeObj || event) : null));
    };
    Object.defineProperty(TProgressEvent.prototype, "percent", {
        get: function () {
            return progress_event_t_get_prop_percent(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TProgressEvent;
}(TEvent));
var TDoneEvent = /** @class */ (function (_super) {
    __extends(TDoneEvent, _super);
    function TDoneEvent(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TDoneEvent.cast = function (event) {
        return new TDoneEvent(done_event_cast(event ? (event.nativeObj || event) : null));
    };
    Object.defineProperty(TDoneEvent.prototype, "result", {
        get: function () {
            return done_event_t_get_prop_result(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TDoneEvent;
}(TEvent));
var TErrorEvent = /** @class */ (function (_super) {
    __extends(TErrorEvent, _super);
    function TErrorEvent(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TErrorEvent.cast = function (event) {
        return new TErrorEvent(error_event_cast(event ? (event.nativeObj || event) : null));
    };
    Object.defineProperty(TErrorEvent.prototype, "code", {
        get: function () {
            return error_event_t_get_prop_code(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TErrorEvent.prototype, "message", {
        get: function () {
            return error_event_t_get_prop_message(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TErrorEvent;
}(TEvent));
var TCmdExecEvent = /** @class */ (function (_super) {
    __extends(TCmdExecEvent, _super);
    function TCmdExecEvent(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TCmdExecEvent.cast = function (event) {
        return new TCmdExecEvent(cmd_exec_event_cast(event ? (event.nativeObj || event) : null));
    };
    Object.defineProperty(TCmdExecEvent.prototype, "name", {
        get: function () {
            return cmd_exec_event_t_get_prop_name(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TCmdExecEvent.prototype, "args", {
        get: function () {
            return cmd_exec_event_t_get_prop_args(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TCmdExecEvent.prototype, "result", {
        get: function () {
            return cmd_exec_event_t_get_prop_result(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TCmdExecEvent.prototype, "canExec", {
        get: function () {
            return cmd_exec_event_t_get_prop_can_exec(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TCmdExecEvent;
}(TEvent));
var TTimeClock = /** @class */ (function (_super) {
    __extends(TTimeClock, _super);
    function TTimeClock(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TTimeClock.create = function (parent, x, y, w, h) {
        return new TTimeClock(time_clock_create(parent ? parent.nativeObj : null, x, y, w, h));
    };
    TTimeClock.cast = function (widget) {
        return new TTimeClock(time_clock_cast(widget ? (widget.nativeObj || widget) : null));
    };
    TTimeClock.prototype.setHour = function (hour) {
        return time_clock_set_hour(this.nativeObj, hour);
    };
    TTimeClock.prototype.setMinute = function (minute) {
        return time_clock_set_minute(this.nativeObj, minute);
    };
    TTimeClock.prototype.setSecond = function (second) {
        return time_clock_set_second(this.nativeObj, second);
    };
    TTimeClock.prototype.setHourImage = function (hour) {
        return time_clock_set_hour_image(this.nativeObj, hour);
    };
    TTimeClock.prototype.setMinuteImage = function (minute_image) {
        return time_clock_set_minute_image(this.nativeObj, minute_image);
    };
    TTimeClock.prototype.setSecondImage = function (second_image) {
        return time_clock_set_second_image(this.nativeObj, second_image);
    };
    TTimeClock.prototype.setBgImage = function (bg_image) {
        return time_clock_set_bg_image(this.nativeObj, bg_image);
    };
    TTimeClock.prototype.setImage = function (image) {
        return time_clock_set_image(this.nativeObj, image);
    };
    TTimeClock.prototype.setHourAnchor = function (anchor_x, anchor_y) {
        return time_clock_set_hour_anchor(this.nativeObj, anchor_x, anchor_y);
    };
    TTimeClock.prototype.setMinuteAnchor = function (anchor_x, anchor_y) {
        return time_clock_set_minute_anchor(this.nativeObj, anchor_x, anchor_y);
    };
    TTimeClock.prototype.setSecondAnchor = function (anchor_x, anchor_y) {
        return time_clock_set_second_anchor(this.nativeObj, anchor_x, anchor_y);
    };
    Object.defineProperty(TTimeClock.prototype, "hour", {
        get: function () {
            return time_clock_t_get_prop_hour(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TTimeClock.prototype, "minute", {
        get: function () {
            return time_clock_t_get_prop_minute(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TTimeClock.prototype, "second", {
        get: function () {
            return time_clock_t_get_prop_second(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TTimeClock.prototype, "image", {
        get: function () {
            return time_clock_t_get_prop_image(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TTimeClock.prototype, "bgImage", {
        get: function () {
            return time_clock_t_get_prop_bg_image(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TTimeClock.prototype, "hourImage", {
        get: function () {
            return time_clock_t_get_prop_hour_image(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TTimeClock.prototype, "minuteImage", {
        get: function () {
            return time_clock_t_get_prop_minute_image(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TTimeClock.prototype, "secondImage", {
        get: function () {
            return time_clock_t_get_prop_second_image(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TTimeClock.prototype, "hourAnchorX", {
        get: function () {
            return time_clock_t_get_prop_hour_anchor_x(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TTimeClock.prototype, "hourAnchorY", {
        get: function () {
            return time_clock_t_get_prop_hour_anchor_y(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TTimeClock.prototype, "minuteAnchorX", {
        get: function () {
            return time_clock_t_get_prop_minute_anchor_x(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TTimeClock.prototype, "minuteAnchorY", {
        get: function () {
            return time_clock_t_get_prop_minute_anchor_y(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TTimeClock.prototype, "secondAnchorX", {
        get: function () {
            return time_clock_t_get_prop_second_anchor_x(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TTimeClock.prototype, "secondAnchorY", {
        get: function () {
            return time_clock_t_get_prop_second_anchor_y(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TTimeClock;
}(TWidget));
var TButton = /** @class */ (function (_super) {
    __extends(TButton, _super);
    function TButton(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TButton.create = function (parent, x, y, w, h) {
        return new TButton(button_create(parent ? parent.nativeObj : null, x, y, w, h));
    };
    TButton.cast = function (widget) {
        return new TButton(button_cast(widget ? (widget.nativeObj || widget) : null));
    };
    TButton.prototype.setRepeat = function (repeat) {
        return button_set_repeat(this.nativeObj, repeat);
    };
    TButton.prototype.setLongPressTime = function (long_press_time) {
        return button_set_long_press_time(this.nativeObj, long_press_time);
    };
    TButton.prototype.setEnableLongPress = function (enable_long_press) {
        return button_set_enable_long_press(this.nativeObj, enable_long_press);
    };
    Object.defineProperty(TButton.prototype, "repeat", {
        get: function () {
            return button_t_get_prop_repeat(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TButton.prototype, "enableLongPress", {
        get: function () {
            return button_t_get_prop_enable_long_press(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TButton.prototype, "longPressTime", {
        get: function () {
            return button_t_get_prop_long_press_time(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TButton;
}(TWidget));
var TTextSelector = /** @class */ (function (_super) {
    __extends(TTextSelector, _super);
    function TTextSelector(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TTextSelector.create = function (parent, x, y, w, h) {
        return new TTextSelector(text_selector_create(parent ? parent.nativeObj : null, x, y, w, h));
    };
    TTextSelector.cast = function (widget) {
        return new TTextSelector(text_selector_cast(widget ? (widget.nativeObj || widget) : null));
    };
    TTextSelector.prototype.resetOptions = function () {
        return text_selector_reset_options(this.nativeObj);
    };
    TTextSelector.prototype.countOptions = function () {
        return text_selector_count_options(this.nativeObj);
    };
    TTextSelector.prototype.appendOption = function (value, text) {
        return text_selector_append_option(this.nativeObj, value, text);
    };
    TTextSelector.prototype.setOptions = function (options) {
        return text_selector_set_options(this.nativeObj, options);
    };
    TTextSelector.prototype.setRangeOptions = function (start, nr, step) {
        return text_selector_set_range_options(this.nativeObj, start, nr, step);
    };
    TTextSelector.prototype.getValue = function () {
        return text_selector_get_value(this.nativeObj);
    };
    TTextSelector.prototype.setValue = function (value) {
        return text_selector_set_value(this.nativeObj, value);
    };
    TTextSelector.prototype.getTextValue = function () {
        return text_selector_get_text(this.nativeObj);
    };
    TTextSelector.prototype.setText = function (text) {
        return text_selector_set_text(this.nativeObj, text);
    };
    TTextSelector.prototype.setSelectedIndex = function (index) {
        return text_selector_set_selected_index(this.nativeObj, index);
    };
    TTextSelector.prototype.setVisibleNr = function (visible_nr) {
        return text_selector_set_visible_nr(this.nativeObj, visible_nr);
    };
    TTextSelector.prototype.setLocalizeOptions = function (localize_options) {
        return text_selector_set_localize_options(this.nativeObj, localize_options);
    };
    TTextSelector.prototype.setLoopOptions = function (loop_options) {
        return text_selector_set_loop_options(this.nativeObj, loop_options);
    };
    TTextSelector.prototype.setYspeedScale = function (yspeed_scale) {
        return text_selector_set_yspeed_scale(this.nativeObj, yspeed_scale);
    };
    Object.defineProperty(TTextSelector.prototype, "visibleNr", {
        get: function () {
            return text_selector_t_get_prop_visible_nr(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TTextSelector.prototype, "selectedIndex", {
        get: function () {
            return text_selector_t_get_prop_selected_index(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TTextSelector.prototype, "options", {
        get: function () {
            return text_selector_t_get_prop_options(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TTextSelector.prototype, "localizeOptions", {
        get: function () {
            return text_selector_t_get_prop_localize_options(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TTextSelector.prototype, "yspeedScale", {
        get: function () {
            return text_selector_t_get_prop_yspeed_scale(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TTextSelector.prototype, "loopOptions", {
        get: function () {
            return text_selector_t_get_prop_loop_options(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TTextSelector;
}(TWidget));
var TSwitch = /** @class */ (function (_super) {
    __extends(TSwitch, _super);
    function TSwitch(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TSwitch.create = function (parent, x, y, w, h) {
        return new TSwitch(switch_create(parent ? parent.nativeObj : null, x, y, w, h));
    };
    TSwitch.prototype.setValue = function (value) {
        return switch_set_value(this.nativeObj, value);
    };
    TSwitch.cast = function (widget) {
        return new TSwitch(switch_cast(widget ? (widget.nativeObj || widget) : null));
    };
    Object.defineProperty(TSwitch.prototype, "value", {
        get: function () {
            return switch_t_get_prop_value(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TSwitch.prototype, "maxXoffsetRatio", {
        get: function () {
            return switch_t_get_prop_max_xoffset_ratio(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TSwitch;
}(TWidget));
var TButtonGroup = /** @class */ (function (_super) {
    __extends(TButtonGroup, _super);
    function TButtonGroup(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TButtonGroup.create = function (parent, x, y, w, h) {
        return new TButtonGroup(button_group_create(parent ? parent.nativeObj : null, x, y, w, h));
    };
    TButtonGroup.cast = function (widget) {
        return new TButtonGroup(button_group_cast(widget ? (widget.nativeObj || widget) : null));
    };
    return TButtonGroup;
}(TWidget));
var TAppBar = /** @class */ (function (_super) {
    __extends(TAppBar, _super);
    function TAppBar(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TAppBar.create = function (parent, x, y, w, h) {
        return new TAppBar(app_bar_create(parent ? parent.nativeObj : null, x, y, w, h));
    };
    TAppBar.cast = function (widget) {
        return new TAppBar(app_bar_cast(widget ? (widget.nativeObj || widget) : null));
    };
    return TAppBar;
}(TWidget));
var TOrientationEvent = /** @class */ (function (_super) {
    __extends(TOrientationEvent, _super);
    function TOrientationEvent(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TOrientationEvent.cast = function (event) {
        return new TOrientationEvent(orientation_event_cast(event ? (event.nativeObj || event) : null));
    };
    Object.defineProperty(TOrientationEvent.prototype, "orientation", {
        get: function () {
            return orientation_event_t_get_prop_orientation(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TOrientationEvent;
}(TEvent));
var TSlideView = /** @class */ (function (_super) {
    __extends(TSlideView, _super);
    function TSlideView(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TSlideView.create = function (parent, x, y, w, h) {
        return new TSlideView(slide_view_create(parent ? parent.nativeObj : null, x, y, w, h));
    };
    TSlideView.cast = function (widget) {
        return new TSlideView(slide_view_cast(widget ? (widget.nativeObj || widget) : null));
    };
    TSlideView.prototype.setAutoPlay = function (auto_play) {
        return slide_view_set_auto_play(this.nativeObj, auto_play);
    };
    TSlideView.prototype.setActive = function (index) {
        return slide_view_set_active(this.nativeObj, index);
    };
    TSlideView.prototype.setVertical = function (vertical) {
        return slide_view_set_vertical(this.nativeObj, vertical);
    };
    TSlideView.prototype.setAnimHint = function (anim_hint) {
        return slide_view_set_anim_hint(this.nativeObj, anim_hint);
    };
    TSlideView.prototype.setLoop = function (loop) {
        return slide_view_set_loop(this.nativeObj, loop);
    };
    Object.defineProperty(TSlideView.prototype, "vertical", {
        get: function () {
            return slide_view_t_get_prop_vertical(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TSlideView.prototype, "autoPlay", {
        get: function () {
            return slide_view_t_get_prop_auto_play(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TSlideView.prototype, "loop", {
        get: function () {
            return slide_view_t_get_prop_loop(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TSlideView.prototype, "animHint", {
        get: function () {
            return slide_view_t_get_prop_anim_hint(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TSlideView;
}(TWidget));
var TSlideIndicator = /** @class */ (function (_super) {
    __extends(TSlideIndicator, _super);
    function TSlideIndicator(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TSlideIndicator.create = function (parent, x, y, w, h) {
        return new TSlideIndicator(slide_indicator_create(parent ? parent.nativeObj : null, x, y, w, h));
    };
    TSlideIndicator.createLinear = function (parent, x, y, w, h) {
        return new TSlideIndicator(slide_indicator_create_linear(parent ? parent.nativeObj : null, x, y, w, h));
    };
    TSlideIndicator.createArc = function (parent, x, y, w, h) {
        return new TSlideIndicator(slide_indicator_create_arc(parent ? parent.nativeObj : null, x, y, w, h));
    };
    TSlideIndicator.cast = function (widget) {
        return new TSlideIndicator(slide_indicator_cast(widget ? (widget.nativeObj || widget) : null));
    };
    TSlideIndicator.prototype.setValue = function (value) {
        return slide_indicator_set_value(this.nativeObj, value);
    };
    TSlideIndicator.prototype.setMax = function (max) {
        return slide_indicator_set_max(this.nativeObj, max);
    };
    TSlideIndicator.prototype.setDefaultPaint = function (default_paint) {
        return slide_indicator_set_default_paint(this.nativeObj, default_paint);
    };
    TSlideIndicator.prototype.setAutoHide = function (auto_hide) {
        return slide_indicator_set_auto_hide(this.nativeObj, auto_hide);
    };
    TSlideIndicator.prototype.setMargin = function (margin) {
        return slide_indicator_set_margin(this.nativeObj, margin);
    };
    TSlideIndicator.prototype.setSpacing = function (spacing) {
        return slide_indicator_set_spacing(this.nativeObj, spacing);
    };
    TSlideIndicator.prototype.setSize = function (size) {
        return slide_indicator_set_size(this.nativeObj, size);
    };
    TSlideIndicator.prototype.setAnchor = function (anchor_x, anchor_y) {
        return slide_indicator_set_anchor(this.nativeObj, anchor_x, anchor_y);
    };
    TSlideIndicator.prototype.setIndicatedTarget = function (indicated_target) {
        return slide_indicator_set_indicated_target(this.nativeObj, indicated_target);
    };
    Object.defineProperty(TSlideIndicator.prototype, "value", {
        get: function () {
            return slide_indicator_t_get_prop_value(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TSlideIndicator.prototype, "max", {
        get: function () {
            return slide_indicator_t_get_prop_max(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TSlideIndicator.prototype, "defaultPaint", {
        get: function () {
            return slide_indicator_t_get_prop_default_paint(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TSlideIndicator.prototype, "autoHide", {
        get: function () {
            return slide_indicator_t_get_prop_auto_hide(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TSlideIndicator.prototype, "margin", {
        get: function () {
            return slide_indicator_t_get_prop_margin(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TSlideIndicator.prototype, "spacing", {
        get: function () {
            return slide_indicator_t_get_prop_spacing(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TSlideIndicator.prototype, "size", {
        get: function () {
            return slide_indicator_t_get_prop_size(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TSlideIndicator.prototype, "anchorX", {
        get: function () {
            return slide_indicator_t_get_prop_anchor_x(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TSlideIndicator.prototype, "anchorY", {
        get: function () {
            return slide_indicator_t_get_prop_anchor_y(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TSlideIndicator.prototype, "indicatedTarget", {
        get: function () {
            return slide_indicator_t_get_prop_indicated_target(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TSlideIndicator;
}(TWidget));
var TSlideMenu = /** @class */ (function (_super) {
    __extends(TSlideMenu, _super);
    function TSlideMenu(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TSlideMenu.create = function (parent, x, y, w, h) {
        return new TSlideMenu(slide_menu_create(parent ? parent.nativeObj : null, x, y, w, h));
    };
    TSlideMenu.cast = function (widget) {
        return new TSlideMenu(slide_menu_cast(widget ? (widget.nativeObj || widget) : null));
    };
    TSlideMenu.prototype.setValue = function (value) {
        return slide_menu_set_value(this.nativeObj, value);
    };
    TSlideMenu.prototype.setAlignV = function (align_v) {
        return slide_menu_set_align_v(this.nativeObj, align_v);
    };
    TSlideMenu.prototype.setMinScale = function (min_scale) {
        return slide_menu_set_min_scale(this.nativeObj, min_scale);
    };
    Object.defineProperty(TSlideMenu.prototype, "value", {
        get: function () {
            return slide_menu_t_get_prop_value(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TSlideMenu.prototype, "alignV", {
        get: function () {
            return slide_menu_t_get_prop_align_v(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TSlideMenu.prototype, "minScale", {
        get: function () {
            return slide_menu_t_get_prop_min_scale(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TSlideMenu;
}(TWidget));
var TScrollView = /** @class */ (function (_super) {
    __extends(TScrollView, _super);
    function TScrollView(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TScrollView.create = function (parent, x, y, w, h) {
        return new TScrollView(scroll_view_create(parent ? parent.nativeObj : null, x, y, w, h));
    };
    TScrollView.cast = function (widget) {
        return new TScrollView(scroll_view_cast(widget ? (widget.nativeObj || widget) : null));
    };
    TScrollView.prototype.setVirtualW = function (w) {
        return scroll_view_set_virtual_w(this.nativeObj, w);
    };
    TScrollView.prototype.setVirtualH = function (h) {
        return scroll_view_set_virtual_h(this.nativeObj, h);
    };
    TScrollView.prototype.setXslidable = function (xslidable) {
        return scroll_view_set_xslidable(this.nativeObj, xslidable);
    };
    TScrollView.prototype.setYslidable = function (yslidable) {
        return scroll_view_set_yslidable(this.nativeObj, yslidable);
    };
    TScrollView.prototype.setOffset = function (xoffset, yoffset) {
        return scroll_view_set_offset(this.nativeObj, xoffset, yoffset);
    };
    TScrollView.prototype.setSpeedScale = function (xspeed_scale, yspeed_scale) {
        return scroll_view_set_speed_scale(this.nativeObj, xspeed_scale, yspeed_scale);
    };
    TScrollView.prototype.scrollTo = function (xoffset_end, yoffset_end, duration) {
        return scroll_view_scroll_to(this.nativeObj, xoffset_end, yoffset_end, duration);
    };
    TScrollView.prototype.scrollDeltaTo = function (xoffset_delta, yoffset_delta, duration) {
        return scroll_view_scroll_delta_to(this.nativeObj, xoffset_delta, yoffset_delta, duration);
    };
    Object.defineProperty(TScrollView.prototype, "virtualW", {
        get: function () {
            return scroll_view_t_get_prop_virtual_w(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TScrollView.prototype, "virtualH", {
        get: function () {
            return scroll_view_t_get_prop_virtual_h(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TScrollView.prototype, "xoffset", {
        get: function () {
            return scroll_view_t_get_prop_xoffset(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TScrollView.prototype, "yoffset", {
        get: function () {
            return scroll_view_t_get_prop_yoffset(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TScrollView.prototype, "xspeedScale", {
        get: function () {
            return scroll_view_t_get_prop_xspeed_scale(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TScrollView.prototype, "yspeedScale", {
        get: function () {
            return scroll_view_t_get_prop_yspeed_scale(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TScrollView.prototype, "xslidable", {
        get: function () {
            return scroll_view_t_get_prop_xslidable(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TScrollView.prototype, "yslidable", {
        get: function () {
            return scroll_view_t_get_prop_yslidable(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TScrollView;
}(TWidget));
var TScrollBar = /** @class */ (function (_super) {
    __extends(TScrollBar, _super);
    function TScrollBar(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TScrollBar.create = function (parent, x, y, w, h) {
        return new TScrollBar(scroll_bar_create(parent ? parent.nativeObj : null, x, y, w, h));
    };
    TScrollBar.cast = function (widget) {
        return new TScrollBar(scroll_bar_cast(widget ? (widget.nativeObj || widget) : null));
    };
    TScrollBar.createMobile = function (parent, x, y, w, h) {
        return new TScrollBar(scroll_bar_create_mobile(parent ? parent.nativeObj : null, x, y, w, h));
    };
    TScrollBar.createDesktop = function (parent, x, y, w, h) {
        return new TScrollBar(scroll_bar_create_desktop(parent ? parent.nativeObj : null, x, y, w, h));
    };
    TScrollBar.prototype.setParams = function (virtual_size, row) {
        return scroll_bar_set_params(this.nativeObj, virtual_size, row);
    };
    TScrollBar.prototype.scrollTo = function (value, duration) {
        return scroll_bar_scroll_to(this.nativeObj, value, duration);
    };
    TScrollBar.prototype.setValue = function (value) {
        return scroll_bar_set_value(this.nativeObj, value);
    };
    TScrollBar.prototype.addDelta = function (delta) {
        return scroll_bar_add_delta(this.nativeObj, delta);
    };
    TScrollBar.prototype.scrollDelta = function (delta) {
        return scroll_bar_scroll_delta(this.nativeObj, delta);
    };
    TScrollBar.prototype.setValueOnly = function (value) {
        return scroll_bar_set_value_only(this.nativeObj, value);
    };
    TScrollBar.prototype.isMobile = function () {
        return scroll_bar_is_mobile(this.nativeObj);
    };
    Object.defineProperty(TScrollBar.prototype, "virtualSize", {
        get: function () {
            return scroll_bar_t_get_prop_virtual_size(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TScrollBar.prototype, "value", {
        get: function () {
            return scroll_bar_t_get_prop_value(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TScrollBar.prototype, "row", {
        get: function () {
            return scroll_bar_t_get_prop_row(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TScrollBar.prototype, "animatable", {
        get: function () {
            return scroll_bar_t_get_prop_animatable(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TScrollBar;
}(TWidget));
var TListView = /** @class */ (function (_super) {
    __extends(TListView, _super);
    function TListView(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TListView.create = function (parent, x, y, w, h) {
        return new TListView(list_view_create(parent ? parent.nativeObj : null, x, y, w, h));
    };
    TListView.prototype.setItemHeight = function (item_height) {
        return list_view_set_item_height(this.nativeObj, item_height);
    };
    TListView.prototype.setDefaultItemHeight = function (default_item_height) {
        return list_view_set_default_item_height(this.nativeObj, default_item_height);
    };
    TListView.prototype.setAutoHideScrollBar = function (auto_hide_scroll_bar) {
        return list_view_set_auto_hide_scroll_bar(this.nativeObj, auto_hide_scroll_bar);
    };
    TListView.cast = function (widget) {
        return new TListView(list_view_cast(widget ? (widget.nativeObj || widget) : null));
    };
    TListView.prototype.reinit = function () {
        return list_view_reinit(this.nativeObj);
    };
    Object.defineProperty(TListView.prototype, "itemHeight", {
        get: function () {
            return list_view_t_get_prop_item_height(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TListView.prototype, "defaultItemHeight", {
        get: function () {
            return list_view_t_get_prop_default_item_height(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TListView.prototype, "autoHideScrollBar", {
        get: function () {
            return list_view_t_get_prop_auto_hide_scroll_bar(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TListView;
}(TWidget));
var TListViewH = /** @class */ (function (_super) {
    __extends(TListViewH, _super);
    function TListViewH(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TListViewH.create = function (parent, x, y, w, h) {
        return new TListViewH(list_view_h_create(parent ? parent.nativeObj : null, x, y, w, h));
    };
    TListViewH.prototype.setItemWidth = function (item_width) {
        return list_view_h_set_item_width(this.nativeObj, item_width);
    };
    TListViewH.prototype.setSpacing = function (spacing) {
        return list_view_h_set_spacing(this.nativeObj, spacing);
    };
    TListViewH.cast = function (widget) {
        return new TListViewH(list_view_h_cast(widget ? (widget.nativeObj || widget) : null));
    };
    Object.defineProperty(TListViewH.prototype, "itemWidth", {
        get: function () {
            return list_view_h_t_get_prop_item_width(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TListViewH.prototype, "spacing", {
        get: function () {
            return list_view_h_t_get_prop_spacing(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TListViewH;
}(TWidget));
var TListItem = /** @class */ (function (_super) {
    __extends(TListItem, _super);
    function TListItem(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TListItem.create = function (parent, x, y, w, h) {
        return new TListItem(list_item_create(parent ? parent.nativeObj : null, x, y, w, h));
    };
    TListItem.cast = function (widget) {
        return new TListItem(list_item_cast(widget ? (widget.nativeObj || widget) : null));
    };
    return TListItem;
}(TWidget));
var TValueChangeEvent = /** @class */ (function (_super) {
    __extends(TValueChangeEvent, _super);
    function TValueChangeEvent(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TValueChangeEvent.cast = function (event) {
        return new TValueChangeEvent(value_change_event_cast(event ? (event.nativeObj || event) : null));
    };
    return TValueChangeEvent;
}(TEvent));
var TPointerEvent = /** @class */ (function (_super) {
    __extends(TPointerEvent, _super);
    function TPointerEvent(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TPointerEvent.cast = function (event) {
        return new TPointerEvent(pointer_event_cast(event ? (event.nativeObj || event) : null));
    };
    Object.defineProperty(TPointerEvent.prototype, "x", {
        get: function () {
            return pointer_event_t_get_prop_x(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TPointerEvent.prototype, "y", {
        get: function () {
            return pointer_event_t_get_prop_y(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TPointerEvent.prototype, "button", {
        get: function () {
            return pointer_event_t_get_prop_button(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TPointerEvent.prototype, "pressed", {
        get: function () {
            return pointer_event_t_get_prop_pressed(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TPointerEvent.prototype, "alt", {
        get: function () {
            return pointer_event_t_get_prop_alt(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TPointerEvent.prototype, "ctrl", {
        get: function () {
            return pointer_event_t_get_prop_ctrl(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TPointerEvent.prototype, "cmd", {
        get: function () {
            return pointer_event_t_get_prop_cmd(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TPointerEvent.prototype, "menu", {
        get: function () {
            return pointer_event_t_get_prop_menu(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TPointerEvent.prototype, "shift", {
        get: function () {
            return pointer_event_t_get_prop_shift(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TPointerEvent;
}(TEvent));
var THscrollLabel = /** @class */ (function (_super) {
    __extends(THscrollLabel, _super);
    function THscrollLabel(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    THscrollLabel.create = function (parent, x, y, w, h) {
        return new THscrollLabel(hscroll_label_create(parent ? parent.nativeObj : null, x, y, w, h));
    };
    THscrollLabel.prototype.setLull = function (lull) {
        return hscroll_label_set_lull(this.nativeObj, lull);
    };
    THscrollLabel.prototype.setDuration = function (duration) {
        return hscroll_label_set_duration(this.nativeObj, duration);
    };
    THscrollLabel.prototype.setOnlyFocus = function (only_focus) {
        return hscroll_label_set_only_focus(this.nativeObj, only_focus);
    };
    THscrollLabel.prototype.setOnlyParentFocus = function (only_parent_focus) {
        return hscroll_label_set_only_parent_focus(this.nativeObj, only_parent_focus);
    };
    THscrollLabel.prototype.setLoop = function (loop) {
        return hscroll_label_set_loop(this.nativeObj, loop);
    };
    THscrollLabel.prototype.setYoyo = function (yoyo) {
        return hscroll_label_set_yoyo(this.nativeObj, yoyo);
    };
    THscrollLabel.prototype.setEllipses = function (ellipses) {
        return hscroll_label_set_ellipses(this.nativeObj, ellipses);
    };
    THscrollLabel.prototype.setXoffset = function (xoffset) {
        return hscroll_label_set_xoffset(this.nativeObj, xoffset);
    };
    THscrollLabel.prototype.start = function () {
        return hscroll_label_start(this.nativeObj);
    };
    THscrollLabel.prototype.stop = function () {
        return hscroll_label_stop(this.nativeObj);
    };
    THscrollLabel.cast = function (widget) {
        return new THscrollLabel(hscroll_label_cast(widget ? (widget.nativeObj || widget) : null));
    };
    Object.defineProperty(THscrollLabel.prototype, "onlyFocus", {
        get: function () {
            return hscroll_label_t_get_prop_only_focus(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(THscrollLabel.prototype, "onlyParentFocus", {
        get: function () {
            return hscroll_label_t_get_prop_only_parent_focus(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(THscrollLabel.prototype, "loop", {
        get: function () {
            return hscroll_label_t_get_prop_loop(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(THscrollLabel.prototype, "yoyo", {
        get: function () {
            return hscroll_label_t_get_prop_yoyo(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(THscrollLabel.prototype, "ellipses", {
        get: function () {
            return hscroll_label_t_get_prop_ellipses(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(THscrollLabel.prototype, "lull", {
        get: function () {
            return hscroll_label_t_get_prop_lull(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(THscrollLabel.prototype, "duration", {
        get: function () {
            return hscroll_label_t_get_prop_duration(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(THscrollLabel.prototype, "xoffset", {
        get: function () {
            return hscroll_label_t_get_prop_xoffset(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(THscrollLabel.prototype, "textW", {
        get: function () {
            return hscroll_label_t_get_prop_text_w(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return THscrollLabel;
}(TWidget));
var TRichText = /** @class */ (function (_super) {
    __extends(TRichText, _super);
    function TRichText(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TRichText.create = function (parent, x, y, w, h) {
        return new TRichText(rich_text_create(parent ? parent.nativeObj : null, x, y, w, h));
    };
    TRichText.prototype.setText = function (text) {
        return rich_text_set_text(this.nativeObj, text);
    };
    TRichText.prototype.setYslidable = function (yslidable) {
        return rich_text_set_yslidable(this.nativeObj, yslidable);
    };
    TRichText.cast = function (widget) {
        return new TRichText(rich_text_cast(widget ? (widget.nativeObj || widget) : null));
    };
    Object.defineProperty(TRichText.prototype, "lineGap", {
        get: function () {
            return rich_text_t_get_prop_line_gap(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TRichText.prototype, "margin", {
        get: function () {
            return rich_text_t_get_prop_margin(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TRichText.prototype, "yslidable", {
        get: function () {
            return rich_text_t_get_prop_yslidable(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TRichText;
}(TWidget));
var TRichTextView = /** @class */ (function (_super) {
    __extends(TRichTextView, _super);
    function TRichTextView(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TRichTextView.create = function (parent, x, y, w, h) {
        return new TRichTextView(rich_text_view_create(parent ? parent.nativeObj : null, x, y, w, h));
    };
    TRichTextView.cast = function (widget) {
        return new TRichTextView(rich_text_view_cast(widget ? (widget.nativeObj || widget) : null));
    };
    return TRichTextView;
}(TWidget));
var TProgressCircle = /** @class */ (function (_super) {
    __extends(TProgressCircle, _super);
    function TProgressCircle(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TProgressCircle.create = function (parent, x, y, w, h) {
        return new TProgressCircle(progress_circle_create(parent ? parent.nativeObj : null, x, y, w, h));
    };
    TProgressCircle.cast = function (widget) {
        return new TProgressCircle(progress_circle_cast(widget ? (widget.nativeObj || widget) : null));
    };
    TProgressCircle.prototype.setValue = function (value) {
        return progress_circle_set_value(this.nativeObj, value);
    };
    TProgressCircle.prototype.setMax = function (max) {
        return progress_circle_set_max(this.nativeObj, max);
    };
    TProgressCircle.prototype.setLineWidth = function (line_width) {
        return progress_circle_set_line_width(this.nativeObj, line_width);
    };
    TProgressCircle.prototype.setStartAngle = function (start_angle) {
        return progress_circle_set_start_angle(this.nativeObj, start_angle);
    };
    TProgressCircle.prototype.setUnit = function (unit) {
        return progress_circle_set_unit(this.nativeObj, unit);
    };
    TProgressCircle.prototype.setLineCap = function (line_cap) {
        return progress_circle_set_line_cap(this.nativeObj, line_cap);
    };
    TProgressCircle.prototype.setShowText = function (show_text) {
        return progress_circle_set_show_text(this.nativeObj, show_text);
    };
    TProgressCircle.prototype.setCounterClockWise = function (counter_clock_wise) {
        return progress_circle_set_counter_clock_wise(this.nativeObj, counter_clock_wise);
    };
    Object.defineProperty(TProgressCircle.prototype, "value", {
        get: function () {
            return progress_circle_t_get_prop_value(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TProgressCircle.prototype, "max", {
        get: function () {
            return progress_circle_t_get_prop_max(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TProgressCircle.prototype, "startAngle", {
        get: function () {
            return progress_circle_t_get_prop_start_angle(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TProgressCircle.prototype, "lineWidth", {
        get: function () {
            return progress_circle_t_get_prop_line_width(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TProgressCircle.prototype, "unit", {
        get: function () {
            return progress_circle_t_get_prop_unit(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TProgressCircle.prototype, "lineCap", {
        get: function () {
            return progress_circle_t_get_prop_line_cap(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TProgressCircle.prototype, "counterClockWise", {
        get: function () {
            return progress_circle_t_get_prop_counter_clock_wise(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TProgressCircle.prototype, "showText", {
        get: function () {
            return progress_circle_t_get_prop_show_text(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TProgressCircle;
}(TWidget));
var TMledit = /** @class */ (function (_super) {
    __extends(TMledit, _super);
    function TMledit(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TMledit.create = function (parent, x, y, w, h) {
        return new TMledit(mledit_create(parent ? parent.nativeObj : null, x, y, w, h));
    };
    TMledit.prototype.setReadonly = function (readonly) {
        return mledit_set_readonly(this.nativeObj, readonly);
    };
    TMledit.prototype.setCancelable = function (cancelable) {
        return mledit_set_cancelable(this.nativeObj, cancelable);
    };
    TMledit.prototype.setFocus = function (focus) {
        return mledit_set_focus(this.nativeObj, focus);
    };
    TMledit.prototype.setWrapWord = function (wrap_word) {
        return mledit_set_wrap_word(this.nativeObj, wrap_word);
    };
    TMledit.prototype.setMaxLines = function (max_lines) {
        return mledit_set_max_lines(this.nativeObj, max_lines);
    };
    TMledit.prototype.setTips = function (tips) {
        return mledit_set_tips(this.nativeObj, tips);
    };
    TMledit.prototype.setTrTips = function (tr_tips) {
        return mledit_set_tr_tips(this.nativeObj, tr_tips);
    };
    TMledit.prototype.setKeyboard = function (keyboard) {
        return mledit_set_keyboard(this.nativeObj, keyboard);
    };
    TMledit.prototype.setCursor = function (cursor) {
        return mledit_set_cursor(this.nativeObj, cursor);
    };
    TMledit.prototype.setScrollLine = function (scroll_line) {
        return mledit_set_scroll_line(this.nativeObj, scroll_line);
    };
    TMledit.prototype.setOpenImWhenFocused = function (open_im_when_focused) {
        return mledit_set_open_im_when_focused(this.nativeObj, open_im_when_focused);
    };
    TMledit.prototype.setCloseImWhenBlured = function (close_im_when_blured) {
        return mledit_set_close_im_when_blured(this.nativeObj, close_im_when_blured);
    };
    TMledit.cast = function (widget) {
        return new TMledit(mledit_cast(widget ? (widget.nativeObj || widget) : null));
    };
    Object.defineProperty(TMledit.prototype, "readonly", {
        get: function () {
            return mledit_t_get_prop_readonly(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TMledit.prototype, "topMargin", {
        get: function () {
            return mledit_t_get_prop_top_margin(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TMledit.prototype, "bottomMargin", {
        get: function () {
            return mledit_t_get_prop_bottom_margin(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TMledit.prototype, "leftMargin", {
        get: function () {
            return mledit_t_get_prop_left_margin(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TMledit.prototype, "rightMargin", {
        get: function () {
            return mledit_t_get_prop_right_margin(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TMledit.prototype, "tips", {
        get: function () {
            return mledit_t_get_prop_tips(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TMledit.prototype, "trTips", {
        get: function () {
            return mledit_t_get_prop_tr_tips(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TMledit.prototype, "keyboard", {
        get: function () {
            return mledit_t_get_prop_keyboard(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TMledit.prototype, "wrapWord", {
        get: function () {
            return mledit_t_get_prop_wrap_word(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TMledit.prototype, "maxLines", {
        get: function () {
            return mledit_t_get_prop_max_lines(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TMledit.prototype, "scrollLine", {
        get: function () {
            return mledit_t_get_prop_scroll_line(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TMledit.prototype, "cancelable", {
        get: function () {
            return mledit_t_get_prop_cancelable(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TMledit.prototype, "openImWhenFocused", {
        get: function () {
            return mledit_t_get_prop_open_im_when_focused(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TMledit.prototype, "closeImWhenBlured", {
        get: function () {
            return mledit_t_get_prop_close_im_when_blured(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TMledit;
}(TWidget));
var TLineNumber = /** @class */ (function (_super) {
    __extends(TLineNumber, _super);
    function TLineNumber(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TLineNumber.create = function (parent, x, y, w, h) {
        return new TLineNumber(line_number_create(parent ? parent.nativeObj : null, x, y, w, h));
    };
    TLineNumber.prototype.setTopMargin = function (top_margin) {
        return line_number_set_top_margin(this.nativeObj, top_margin);
    };
    TLineNumber.prototype.setBottomMargin = function (bottom_margin) {
        return line_number_set_bottom_margin(this.nativeObj, bottom_margin);
    };
    TLineNumber.prototype.setLineHeight = function (line_height) {
        return line_number_set_line_height(this.nativeObj, line_height);
    };
    TLineNumber.prototype.setYoffset = function (yoffset) {
        return line_number_set_yoffset(this.nativeObj, yoffset);
    };
    TLineNumber.cast = function (widget) {
        return new TLineNumber(line_number_cast(widget ? (widget.nativeObj || widget) : null));
    };
    return TLineNumber;
}(TWidget));
var TLangIndicator = /** @class */ (function (_super) {
    __extends(TLangIndicator, _super);
    function TLangIndicator(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TLangIndicator.create = function (parent, x, y, w, h) {
        return new TLangIndicator(lang_indicator_create(parent ? parent.nativeObj : null, x, y, w, h));
    };
    TLangIndicator.prototype.setImage = function (image) {
        return lang_indicator_set_image(this.nativeObj, image);
    };
    TLangIndicator.cast = function (widget) {
        return new TLangIndicator(lang_indicator_cast(widget ? (widget.nativeObj || widget) : null));
    };
    Object.defineProperty(TLangIndicator.prototype, "image", {
        get: function () {
            return lang_indicator_t_get_prop_image(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TLangIndicator;
}(TWidget));
var TCandidates = /** @class */ (function (_super) {
    __extends(TCandidates, _super);
    function TCandidates(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TCandidates.cast = function (widget) {
        return new TCandidates(candidates_cast(widget ? (widget.nativeObj || widget) : null));
    };
    TCandidates.prototype.setPre = function (pre) {
        return candidates_set_pre(this.nativeObj, pre);
    };
    TCandidates.prototype.setSelectByNum = function (select_by_num) {
        return candidates_set_select_by_num(this.nativeObj, select_by_num);
    };
    TCandidates.prototype.setAutoHide = function (auto_hide) {
        return candidates_set_auto_hide(this.nativeObj, auto_hide);
    };
    TCandidates.prototype.setButtonStyle = function (button_style) {
        return candidates_set_button_style(this.nativeObj, button_style);
    };
    Object.defineProperty(TCandidates.prototype, "pre", {
        get: function () {
            return candidates_t_get_prop_pre(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TCandidates.prototype, "selectByNum", {
        get: function () {
            return candidates_t_get_prop_select_by_num(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TCandidates.prototype, "autoHide", {
        get: function () {
            return candidates_t_get_prop_auto_hide(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TCandidates.prototype, "buttonStyle", {
        get: function () {
            return candidates_t_get_prop_button_style(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TCandidates;
}(TWidget));
var TImageValue = /** @class */ (function (_super) {
    __extends(TImageValue, _super);
    function TImageValue(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TImageValue.create = function (parent, x, y, w, h) {
        return new TImageValue(image_value_create(parent ? parent.nativeObj : null, x, y, w, h));
    };
    TImageValue.prototype.setImage = function (image) {
        return image_value_set_image(this.nativeObj, image);
    };
    TImageValue.prototype.setFormat = function (format) {
        return image_value_set_format(this.nativeObj, format);
    };
    TImageValue.prototype.setClickAddDelta = function (delta) {
        return image_value_set_click_add_delta(this.nativeObj, delta);
    };
    TImageValue.prototype.setValue = function (value) {
        return image_value_set_value(this.nativeObj, value);
    };
    TImageValue.prototype.setMin = function (min) {
        return image_value_set_min(this.nativeObj, min);
    };
    TImageValue.prototype.setMax = function (max) {
        return image_value_set_max(this.nativeObj, max);
    };
    TImageValue.cast = function (widget) {
        return new TImageValue(image_value_cast(widget ? (widget.nativeObj || widget) : null));
    };
    Object.defineProperty(TImageValue.prototype, "image", {
        get: function () {
            return image_value_t_get_prop_image(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TImageValue.prototype, "format", {
        get: function () {
            return image_value_t_get_prop_format(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TImageValue.prototype, "clickAddDelta", {
        get: function () {
            return image_value_t_get_prop_click_add_delta(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TImageValue.prototype, "value", {
        get: function () {
            return image_value_t_get_prop_value(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TImageValue.prototype, "min", {
        get: function () {
            return image_value_t_get_prop_min(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TImageValue.prototype, "max", {
        get: function () {
            return image_value_t_get_prop_max(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TImageValue;
}(TWidget));
var TImageAnimation = /** @class */ (function (_super) {
    __extends(TImageAnimation, _super);
    function TImageAnimation(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TImageAnimation.create = function (parent, x, y, w, h) {
        return new TImageAnimation(image_animation_create(parent ? parent.nativeObj : null, x, y, w, h));
    };
    TImageAnimation.prototype.setLoop = function (loop) {
        return image_animation_set_loop(this.nativeObj, loop);
    };
    TImageAnimation.prototype.setImage = function (image) {
        return image_animation_set_image(this.nativeObj, image);
    };
    TImageAnimation.prototype.setInterval = function (interval) {
        return image_animation_set_interval(this.nativeObj, interval);
    };
    TImageAnimation.prototype.setDelay = function (delay) {
        return image_animation_set_delay(this.nativeObj, delay);
    };
    TImageAnimation.prototype.setAutoPlay = function (auto_play) {
        return image_animation_set_auto_play(this.nativeObj, auto_play);
    };
    TImageAnimation.prototype.setSequence = function (sequence) {
        return image_animation_set_sequence(this.nativeObj, sequence);
    };
    TImageAnimation.prototype.setRangeSequence = function (start_index, end_index) {
        return image_animation_set_range_sequence(this.nativeObj, start_index, end_index);
    };
    TImageAnimation.prototype.play = function () {
        return image_animation_play(this.nativeObj);
    };
    TImageAnimation.prototype.stop = function () {
        return image_animation_stop(this.nativeObj);
    };
    TImageAnimation.prototype.pause = function () {
        return image_animation_pause(this.nativeObj);
    };
    TImageAnimation.prototype.next = function () {
        return image_animation_next(this.nativeObj);
    };
    TImageAnimation.prototype.setFormat = function (format) {
        return image_animation_set_format(this.nativeObj, format);
    };
    TImageAnimation.prototype.setUnloadAfterPaint = function (unload_after_paint) {
        return image_animation_set_unload_after_paint(this.nativeObj, unload_after_paint);
    };
    TImageAnimation.cast = function (widget) {
        return new TImageAnimation(image_animation_cast(widget ? (widget.nativeObj || widget) : null));
    };
    TImageAnimation.prototype.isPlaying = function () {
        return image_animation_is_playing(this.nativeObj);
    };
    Object.defineProperty(TImageAnimation.prototype, "image", {
        get: function () {
            return image_animation_t_get_prop_image(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TImageAnimation.prototype, "sequence", {
        get: function () {
            return image_animation_t_get_prop_sequence(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TImageAnimation.prototype, "startIndex", {
        get: function () {
            return image_animation_t_get_prop_start_index(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TImageAnimation.prototype, "endIndex", {
        get: function () {
            return image_animation_t_get_prop_end_index(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TImageAnimation.prototype, "loop", {
        get: function () {
            return image_animation_t_get_prop_loop(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TImageAnimation.prototype, "autoPlay", {
        get: function () {
            return image_animation_t_get_prop_auto_play(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TImageAnimation.prototype, "unloadAfterPaint", {
        get: function () {
            return image_animation_t_get_prop_unload_after_paint(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TImageAnimation.prototype, "format", {
        get: function () {
            return image_animation_t_get_prop_format(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TImageAnimation.prototype, "interval", {
        get: function () {
            return image_animation_t_get_prop_interval(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TImageAnimation.prototype, "delay", {
        get: function () {
            return image_animation_t_get_prop_delay(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TImageAnimation;
}(TWidget));
var TGuage = /** @class */ (function (_super) {
    __extends(TGuage, _super);
    function TGuage(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TGuage.create = function (parent, x, y, w, h) {
        return new TGuage(guage_create(parent ? parent.nativeObj : null, x, y, w, h));
    };
    TGuage.cast = function (widget) {
        return new TGuage(guage_cast(widget ? (widget.nativeObj || widget) : null));
    };
    TGuage.prototype.setImage = function (name) {
        return guage_set_image(this.nativeObj, name);
    };
    TGuage.prototype.setDrawType = function (draw_type) {
        return guage_set_draw_type(this.nativeObj, draw_type);
    };
    Object.defineProperty(TGuage.prototype, "image", {
        get: function () {
            return guage_t_get_prop_image(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TGuage.prototype, "drawType", {
        get: function () {
            return guage_t_get_prop_draw_type(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TGuage;
}(TWidget));
var TKeyEvent = /** @class */ (function (_super) {
    __extends(TKeyEvent, _super);
    function TKeyEvent(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TKeyEvent.cast = function (event) {
        return new TKeyEvent(key_event_cast(event ? (event.nativeObj || event) : null));
    };
    Object.defineProperty(TKeyEvent.prototype, "key", {
        get: function () {
            return key_event_t_get_prop_key(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TKeyEvent.prototype, "alt", {
        get: function () {
            return key_event_t_get_prop_alt(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TKeyEvent.prototype, "lalt", {
        get: function () {
            return key_event_t_get_prop_lalt(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TKeyEvent.prototype, "ralt", {
        get: function () {
            return key_event_t_get_prop_ralt(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TKeyEvent.prototype, "ctrl", {
        get: function () {
            return key_event_t_get_prop_ctrl(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TKeyEvent.prototype, "lctrl", {
        get: function () {
            return key_event_t_get_prop_lctrl(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TKeyEvent.prototype, "rctrl", {
        get: function () {
            return key_event_t_get_prop_rctrl(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TKeyEvent.prototype, "shift", {
        get: function () {
            return key_event_t_get_prop_shift(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TKeyEvent.prototype, "lshift", {
        get: function () {
            return key_event_t_get_prop_lshift(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TKeyEvent.prototype, "rshift", {
        get: function () {
            return key_event_t_get_prop_rshift(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TKeyEvent.prototype, "cmd", {
        get: function () {
            return key_event_t_get_prop_cmd(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TKeyEvent.prototype, "menu", {
        get: function () {
            return key_event_t_get_prop_menu(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TKeyEvent.prototype, "capslock", {
        get: function () {
            return key_event_t_get_prop_capslock(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TKeyEvent;
}(TEvent));
var TPaintEvent = /** @class */ (function (_super) {
    __extends(TPaintEvent, _super);
    function TPaintEvent(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TPaintEvent.cast = function (event) {
        return new TPaintEvent(paint_event_cast(event ? (event.nativeObj || event) : null));
    };
    Object.defineProperty(TPaintEvent.prototype, "c", {
        get: function () {
            return paint_event_t_get_prop_c(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TPaintEvent;
}(TEvent));
var TFileChooser = /** @class */ (function (_super) {
    __extends(TFileChooser, _super);
    function TFileChooser(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TFileChooser.create = function () {
        return new TFileChooser(file_chooser_create());
    };
    TFileChooser.prototype.setInitDir = function (init_dir) {
        return file_chooser_set_init_dir(this.nativeObj, init_dir);
    };
    TFileChooser.prototype.setFilter = function (filter) {
        return file_chooser_set_filter(this.nativeObj, filter);
    };
    TFileChooser.cast = function (chooser) {
        return new TFileChooser(file_chooser_cast(chooser ? (chooser.nativeObj || chooser) : null));
    };
    TFileChooser.prototype.chooseFileForSave = function () {
        return file_chooser_choose_file_for_save(this.nativeObj);
    };
    TFileChooser.prototype.chooseFileForOpen = function () {
        return file_chooser_choose_file_for_open(this.nativeObj);
    };
    TFileChooser.prototype.chooseFolder = function () {
        return file_chooser_choose_folder(this.nativeObj);
    };
    TFileChooser.prototype.getDir = function () {
        return file_chooser_get_dir(this.nativeObj);
    };
    TFileChooser.prototype.getFilename = function () {
        return file_chooser_get_filename(this.nativeObj);
    };
    TFileChooser.prototype.isAborted = function () {
        return file_chooser_is_aborted(this.nativeObj);
    };
    return TFileChooser;
}(TEmitter));
var TFileBrowserView = /** @class */ (function (_super) {
    __extends(TFileBrowserView, _super);
    function TFileBrowserView(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TFileBrowserView.create = function (parent, x, y, w, h) {
        return new TFileBrowserView(file_browser_view_create(parent ? parent.nativeObj : null, x, y, w, h));
    };
    TFileBrowserView.cast = function (widget) {
        return new TFileBrowserView(file_browser_view_cast(widget ? (widget.nativeObj || widget) : null));
    };
    TFileBrowserView.prototype.setInitDir = function (init_dir) {
        return file_browser_view_set_init_dir(this.nativeObj, init_dir);
    };
    TFileBrowserView.prototype.setFilter = function (filter) {
        return file_browser_view_set_filter(this.nativeObj, filter);
    };
    TFileBrowserView.prototype.reload = function () {
        return file_browser_view_reload(this.nativeObj);
    };
    TFileBrowserView.prototype.setIgnoreHiddenFiles = function (ignore_hidden_files) {
        return file_browser_view_set_ignore_hidden_files(this.nativeObj, ignore_hidden_files);
    };
    TFileBrowserView.prototype.setSortAscending = function (sort_ascending) {
        return file_browser_view_set_sort_ascending(this.nativeObj, sort_ascending);
    };
    TFileBrowserView.prototype.setShowCheckButton = function (show_check_button) {
        return file_browser_view_set_show_check_button(this.nativeObj, show_check_button);
    };
    TFileBrowserView.prototype.setSortBy = function (sort_by) {
        return file_browser_view_set_sort_by(this.nativeObj, sort_by);
    };
    TFileBrowserView.prototype.getCwd = function () {
        return file_browser_view_get_cwd(this.nativeObj);
    };
    TFileBrowserView.prototype.createDir = function (name) {
        return file_browser_view_create_dir(this.nativeObj, name);
    };
    TFileBrowserView.prototype.createFile = function (name, data, size) {
        return file_browser_view_create_file(this.nativeObj, name, data, size);
    };
    Object.defineProperty(TFileBrowserView.prototype, "initDir", {
        get: function () {
            return file_browser_view_t_get_prop_init_dir(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TFileBrowserView.prototype, "filter", {
        get: function () {
            return file_browser_view_t_get_prop_filter(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TFileBrowserView.prototype, "ignoreHiddenFiles", {
        get: function () {
            return file_browser_view_t_get_prop_ignore_hidden_files(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TFileBrowserView.prototype, "sortAscending", {
        get: function () {
            return file_browser_view_t_get_prop_sort_ascending(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TFileBrowserView.prototype, "showCheckButton", {
        get: function () {
            return file_browser_view_t_get_prop_show_check_button(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TFileBrowserView.prototype, "sortBy", {
        get: function () {
            return file_browser_view_t_get_prop_sort_by(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TFileBrowserView;
}(TWidget));
var TDraggable = /** @class */ (function (_super) {
    __extends(TDraggable, _super);
    function TDraggable(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TDraggable.create = function (parent, x, y, w, h) {
        return new TDraggable(draggable_create(parent ? parent.nativeObj : null, x, y, w, h));
    };
    TDraggable.cast = function (widget) {
        return new TDraggable(draggable_cast(widget ? (widget.nativeObj || widget) : null));
    };
    TDraggable.prototype.setTop = function (top) {
        return draggable_set_top(this.nativeObj, top);
    };
    TDraggable.prototype.setBottom = function (bottom) {
        return draggable_set_bottom(this.nativeObj, bottom);
    };
    TDraggable.prototype.setLeft = function (left) {
        return draggable_set_left(this.nativeObj, left);
    };
    TDraggable.prototype.setRight = function (right) {
        return draggable_set_right(this.nativeObj, right);
    };
    TDraggable.prototype.setVerticalOnly = function (vertical_only) {
        return draggable_set_vertical_only(this.nativeObj, vertical_only);
    };
    TDraggable.prototype.setHorizontalOnly = function (horizontal_only) {
        return draggable_set_horizontal_only(this.nativeObj, horizontal_only);
    };
    TDraggable.prototype.setDragWindow = function (drag_window) {
        return draggable_set_drag_window(this.nativeObj, drag_window);
    };
    Object.defineProperty(TDraggable.prototype, "top", {
        get: function () {
            return draggable_t_get_prop_top(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TDraggable.prototype, "bottom", {
        get: function () {
            return draggable_t_get_prop_bottom(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TDraggable.prototype, "left", {
        get: function () {
            return draggable_t_get_prop_left(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TDraggable.prototype, "right", {
        get: function () {
            return draggable_t_get_prop_right(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TDraggable.prototype, "verticalOnly", {
        get: function () {
            return draggable_t_get_prop_vertical_only(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TDraggable.prototype, "horizontalOnly", {
        get: function () {
            return draggable_t_get_prop_horizontal_only(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TDraggable.prototype, "dragWindow", {
        get: function () {
            return draggable_t_get_prop_drag_window(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TDraggable;
}(TWidget));
var TWindowEvent = /** @class */ (function (_super) {
    __extends(TWindowEvent, _super);
    function TWindowEvent(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TWindowEvent.cast = function (event) {
        return new TWindowEvent(window_event_cast(event ? (event.nativeObj || event) : null));
    };
    Object.defineProperty(TWindowEvent.prototype, "window", {
        get: function () {
            return window_event_t_get_prop_window(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TWindowEvent;
}(TEvent));
var TColorPicker = /** @class */ (function (_super) {
    __extends(TColorPicker, _super);
    function TColorPicker(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TColorPicker.create = function (parent, x, y, w, h) {
        return new TColorPicker(color_picker_create(parent ? parent.nativeObj : null, x, y, w, h));
    };
    TColorPicker.prototype.setColor = function (color) {
        return color_picker_set_color(this.nativeObj, color);
    };
    TColorPicker.cast = function (widget) {
        return new TColorPicker(color_picker_cast(widget ? (widget.nativeObj || widget) : null));
    };
    Object.defineProperty(TColorPicker.prototype, "value", {
        get: function () {
            return color_picker_t_get_prop_value(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TColorPicker;
}(TWidget));
var TColorComponent = /** @class */ (function (_super) {
    __extends(TColorComponent, _super);
    function TColorComponent(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TColorComponent.cast = function (widget) {
        return new TColorComponent(color_component_cast(widget ? (widget.nativeObj || widget) : null));
    };
    return TColorComponent;
}(TWidget));
var TMultiGestureEvent = /** @class */ (function (_super) {
    __extends(TMultiGestureEvent, _super);
    function TMultiGestureEvent(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TMultiGestureEvent.cast = function (event) {
        return new TMultiGestureEvent(multi_gesture_event_cast(event ? (event.nativeObj || event) : null));
    };
    Object.defineProperty(TMultiGestureEvent.prototype, "touchId", {
        get: function () {
            return multi_gesture_event_t_get_prop_touch_id(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TMultiGestureEvent.prototype, "x", {
        get: function () {
            return multi_gesture_event_t_get_prop_x(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TMultiGestureEvent.prototype, "y", {
        get: function () {
            return multi_gesture_event_t_get_prop_y(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TMultiGestureEvent.prototype, "rotation", {
        get: function () {
            return multi_gesture_event_t_get_prop_rotation(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TMultiGestureEvent.prototype, "distance", {
        get: function () {
            return multi_gesture_event_t_get_prop_distance(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TMultiGestureEvent.prototype, "fingers", {
        get: function () {
            return multi_gesture_event_t_get_prop_fingers(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TMultiGestureEvent;
}(TEvent));
var TCanvasWidget = /** @class */ (function (_super) {
    __extends(TCanvasWidget, _super);
    function TCanvasWidget(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TCanvasWidget.create = function (parent, x, y, w, h) {
        return new TCanvasWidget(canvas_widget_create(parent ? parent.nativeObj : null, x, y, w, h));
    };
    TCanvasWidget.cast = function (widget) {
        return new TCanvasWidget(canvas_widget_cast(widget ? (widget.nativeObj || widget) : null));
    };
    return TCanvasWidget;
}(TWidget));
var TImageBase = /** @class */ (function (_super) {
    __extends(TImageBase, _super);
    function TImageBase(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TImageBase.prototype.setImage = function (name) {
        return image_base_set_image(this.nativeObj, name);
    };
    TImageBase.prototype.setRotation = function (rotation) {
        return image_base_set_rotation(this.nativeObj, rotation);
    };
    TImageBase.prototype.setScale = function (scale_x, scale_y) {
        return image_base_set_scale(this.nativeObj, scale_x, scale_y);
    };
    TImageBase.prototype.setAnchor = function (anchor_x, anchor_y) {
        return image_base_set_anchor(this.nativeObj, anchor_x, anchor_y);
    };
    TImageBase.prototype.setSelected = function (selected) {
        return image_base_set_selected(this.nativeObj, selected);
    };
    TImageBase.prototype.setSelectable = function (selectable) {
        return image_base_set_selectable(this.nativeObj, selectable);
    };
    TImageBase.prototype.setClickable = function (clickable) {
        return image_base_set_clickable(this.nativeObj, clickable);
    };
    TImageBase.cast = function (widget) {
        return new TImageBase(image_base_cast(widget ? (widget.nativeObj || widget) : null));
    };
    Object.defineProperty(TImageBase.prototype, "image", {
        get: function () {
            return image_base_t_get_prop_image(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TImageBase.prototype, "anchorX", {
        get: function () {
            return image_base_t_get_prop_anchor_x(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TImageBase.prototype, "anchorY", {
        get: function () {
            return image_base_t_get_prop_anchor_y(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TImageBase.prototype, "scaleX", {
        get: function () {
            return image_base_t_get_prop_scale_x(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TImageBase.prototype, "scaleY", {
        get: function () {
            return image_base_t_get_prop_scale_y(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TImageBase.prototype, "rotation", {
        get: function () {
            return image_base_t_get_prop_rotation(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TImageBase.prototype, "clickable", {
        get: function () {
            return image_base_t_get_prop_clickable(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TImageBase.prototype, "selectable", {
        get: function () {
            return image_base_t_get_prop_selectable(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TImageBase.prototype, "selected", {
        get: function () {
            return image_base_t_get_prop_selected(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TImageBase;
}(TWidget));
var TWindowManager = /** @class */ (function (_super) {
    __extends(TWindowManager, _super);
    function TWindowManager(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TWindowManager.instance = function () {
        return new TWindowManager(window_manager());
    };
    TWindowManager.cast = function (widget) {
        return new TWindowManager(window_manager_cast(widget ? (widget.nativeObj || widget) : null));
    };
    TWindowManager.prototype.getTopMainWindow = function () {
        return new TWidget(window_manager_get_top_main_window(this.nativeObj));
    };
    TWindowManager.prototype.getTopWindow = function () {
        return new TWidget(window_manager_get_top_window(this.nativeObj));
    };
    TWindowManager.prototype.getPrevWindow = function () {
        return new TWidget(window_manager_get_prev_window(this.nativeObj));
    };
    TWindowManager.prototype.getPointerX = function () {
        return window_manager_get_pointer_x(this.nativeObj);
    };
    TWindowManager.prototype.getPointerY = function () {
        return window_manager_get_pointer_y(this.nativeObj);
    };
    TWindowManager.prototype.getPointerPressed = function () {
        return window_manager_get_pointer_pressed(this.nativeObj);
    };
    TWindowManager.prototype.isAnimating = function () {
        return window_manager_is_animating(this.nativeObj);
    };
    TWindowManager.prototype.setShowFps = function (show_fps) {
        return window_manager_set_show_fps(this.nativeObj, show_fps);
    };
    TWindowManager.prototype.setScreenSaverTime = function (screen_saver_time) {
        return window_manager_set_screen_saver_time(this.nativeObj, screen_saver_time);
    };
    TWindowManager.prototype.setCursor = function (cursor) {
        return window_manager_set_cursor(this.nativeObj, cursor);
    };
    TWindowManager.prototype.back = function () {
        return window_manager_back(this.nativeObj);
    };
    TWindowManager.prototype.backToHome = function () {
        return window_manager_back_to_home(this.nativeObj);
    };
    TWindowManager.prototype.backTo = function (target) {
        return window_manager_back_to(this.nativeObj, target);
    };
    TWindowManager.prototype.resize = function (w, h) {
        return window_manager_resize(this.nativeObj, w, h);
    };
    return TWindowManager;
}(TWidget));
var TWindowBase = /** @class */ (function (_super) {
    __extends(TWindowBase, _super);
    function TWindowBase(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TWindowBase.cast = function (widget) {
        return new TWindowBase(window_base_cast(widget ? (widget.nativeObj || widget) : null));
    };
    Object.defineProperty(TWindowBase.prototype, "theme", {
        get: function () {
            return window_base_t_get_prop_theme(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TWindowBase.prototype, "disableAnim", {
        get: function () {
            return window_base_t_get_prop_disable_anim(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TWindowBase.prototype, "closable", {
        get: function () {
            return window_base_t_get_prop_closable(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TWindowBase.prototype, "openAnimHint", {
        get: function () {
            return window_base_t_get_prop_open_anim_hint(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TWindowBase.prototype, "closeAnimHint", {
        get: function () {
            return window_base_t_get_prop_close_anim_hint(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TWindowBase.prototype, "moveFocusPrevKey", {
        get: function () {
            return window_base_t_get_prop_move_focus_prev_key(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TWindowBase.prototype, "moveFocusNextKey", {
        get: function () {
            return window_base_t_get_prop_move_focus_next_key(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TWindowBase.prototype, "moveFocusUpKey", {
        get: function () {
            return window_base_t_get_prop_move_focus_up_key(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TWindowBase.prototype, "moveFocusDownKey", {
        get: function () {
            return window_base_t_get_prop_move_focus_down_key(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TWindowBase.prototype, "moveFocusLeftKey", {
        get: function () {
            return window_base_t_get_prop_move_focus_left_key(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TWindowBase.prototype, "moveFocusRightKey", {
        get: function () {
            return window_base_t_get_prop_move_focus_right_key(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TWindowBase.prototype, "singleInstance", {
        get: function () {
            return window_base_t_get_prop_single_instance(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TWindowBase;
}(TWidget));
var TStyleMutable = /** @class */ (function (_super) {
    __extends(TStyleMutable, _super);
    function TStyleMutable(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TStyleMutable.prototype.setName = function (name) {
        return style_mutable_set_name(this.nativeObj, name);
    };
    TStyleMutable.prototype.setInt = function (state, name, val) {
        return style_mutable_set_int(this.nativeObj, state, name, val);
    };
    TStyleMutable.cast = function (s) {
        return new TStyleMutable(style_mutable_cast(s ? (s.nativeObj || s) : null));
    };
    TStyleMutable.create = function (widget, default_style) {
        return new TStyleMutable(style_mutable_create(widget ? widget.nativeObj : null, default_style ? default_style.nativeObj : null));
    };
    Object.defineProperty(TStyleMutable.prototype, "name", {
        get: function () {
            return style_mutable_t_get_prop_name(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TStyleMutable;
}(TStyle));
var TComboBox = /** @class */ (function (_super) {
    __extends(TComboBox, _super);
    function TComboBox(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TComboBox.create = function (parent, x, y, w, h) {
        return new TComboBox(combo_box_create(parent ? parent.nativeObj : null, x, y, w, h));
    };
    TComboBox.cast = function (widget) {
        return new TComboBox(combo_box_cast(widget ? (widget.nativeObj || widget) : null));
    };
    TComboBox.prototype.setOpenWindow = function (open_window) {
        return combo_box_set_open_window(this.nativeObj, open_window);
    };
    TComboBox.prototype.resetOptions = function () {
        return combo_box_reset_options(this.nativeObj);
    };
    TComboBox.prototype.countOptions = function () {
        return combo_box_count_options(this.nativeObj);
    };
    TComboBox.prototype.setSelectedIndex = function (index) {
        return combo_box_set_selected_index(this.nativeObj, index);
    };
    TComboBox.prototype.setLocalizeOptions = function (localize_options) {
        return combo_box_set_localize_options(this.nativeObj, localize_options);
    };
    TComboBox.prototype.setValue = function (value) {
        return combo_box_set_value(this.nativeObj, value);
    };
    TComboBox.prototype.setItemHeight = function (item_height) {
        return combo_box_set_item_height(this.nativeObj, item_height);
    };
    TComboBox.prototype.appendOption = function (value, text) {
        return combo_box_append_option(this.nativeObj, value, text);
    };
    TComboBox.prototype.setOptions = function (options) {
        return combo_box_set_options(this.nativeObj, options);
    };
    TComboBox.prototype.getValue = function () {
        return combo_box_get_value(this.nativeObj);
    };
    TComboBox.prototype.getTextValue = function () {
        return combo_box_get_text(this.nativeObj);
    };
    Object.defineProperty(TComboBox.prototype, "openWindow", {
        get: function () {
            return combo_box_t_get_prop_open_window(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TComboBox.prototype, "selectedIndex", {
        get: function () {
            return combo_box_t_get_prop_selected_index(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TComboBox.prototype, "value", {
        get: function () {
            return combo_box_t_get_prop_value(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TComboBox.prototype, "localizeOptions", {
        get: function () {
            return combo_box_t_get_prop_localize_options(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TComboBox.prototype, "options", {
        get: function () {
            return combo_box_t_get_prop_options(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TComboBox.prototype, "itemHeight", {
        get: function () {
            return combo_box_t_get_prop_item_height(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TComboBox;
}(TEdit));
var TWindow = /** @class */ (function (_super) {
    __extends(TWindow, _super);
    function TWindow(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TWindow.create = function (parent, x, y, w, h) {
        return new TWindow(window_create(parent ? parent.nativeObj : null, x, y, w, h));
    };
    TWindow.createDefault = function () {
        return new TWindow(window_create_default());
    };
    TWindow.prototype.setFullscreen = function (fullscreen) {
        return window_set_fullscreen(this.nativeObj, fullscreen);
    };
    TWindow.open = function (name) {
        return new TWindow(window_open(name));
    };
    TWindow.openAndClose = function (name, to_close) {
        return new TWindow(window_open_and_close(name, to_close ? to_close.nativeObj : null));
    };
    TWindow.prototype.close = function () {
        return window_close(this.nativeObj);
    };
    TWindow.prototype.closeForce = function () {
        return window_close_force(this.nativeObj);
    };
    TWindow.cast = function (widget) {
        return new TWindow(window_cast(widget ? (widget.nativeObj || widget) : null));
    };
    Object.defineProperty(TWindow.prototype, "fullscreen", {
        get: function () {
            return window_t_get_prop_fullscreen(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TWindow;
}(TWindowBase));
var TTimerInfo = /** @class */ (function (_super) {
    __extends(TTimerInfo, _super);
    function TTimerInfo(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TTimerInfo.cast = function (timer) {
        return new TTimerInfo(timer_info_cast(timer ? (timer.nativeObj || timer) : null));
    };
    Object.defineProperty(TTimerInfo.prototype, "ctx", {
        get: function () {
            return timer_info_t_get_prop_ctx(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TTimerInfo.prototype, "id", {
        get: function () {
            return timer_info_t_get_prop_id(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TTimerInfo.prototype, "now", {
        get: function () {
            return timer_info_t_get_prop_now(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TTimerInfo;
}(TObject));
var TDialog = /** @class */ (function (_super) {
    __extends(TDialog, _super);
    function TDialog(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TDialog.create = function (parent, x, y, w, h) {
        return new TDialog(dialog_create(parent ? parent.nativeObj : null, x, y, w, h));
    };
    TDialog.createSimple = function (parent, x, y, w, h) {
        return new TDialog(dialog_create_simple(parent ? parent.nativeObj : null, x, y, w, h));
    };
    TDialog.cast = function (widget) {
        return new TDialog(dialog_cast(widget ? (widget.nativeObj || widget) : null));
    };
    TDialog.prototype.getTitle = function () {
        return new TWidget(dialog_get_title(this.nativeObj));
    };
    TDialog.prototype.getClient = function () {
        return new TWidget(dialog_get_client(this.nativeObj));
    };
    TDialog.open = function (name) {
        return new TDialog(dialog_open(name));
    };
    TDialog.prototype.setTitle = function (title) {
        return dialog_set_title(this.nativeObj, title);
    };
    TDialog.prototype.modal = function () {
        return dialog_modal(this.nativeObj);
    };
    TDialog.prototype.quit = function (code) {
        return dialog_quit(this.nativeObj, code);
    };
    TDialog.prototype.isQuited = function () {
        return dialog_is_quited(this.nativeObj);
    };
    TDialog.prototype.isModal = function () {
        return dialog_is_modal(this.nativeObj);
    };
    TDialog.toast = function (text, duration) {
        return dialog_toast(text, duration);
    };
    TDialog.info = function (title, text) {
        return dialog_info(title, text);
    };
    TDialog.warn = function (title, text) {
        return dialog_warn(title, text);
    };
    TDialog.confirm = function (title, text) {
        return dialog_confirm(title, text);
    };
    Object.defineProperty(TDialog.prototype, "highlight", {
        get: function () {
            return dialog_t_get_prop_highlight(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TDialog;
}(TWindowBase));
var TGifImage = /** @class */ (function (_super) {
    __extends(TGifImage, _super);
    function TGifImage(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TGifImage.create = function (parent, x, y, w, h) {
        return new TGifImage(gif_image_create(parent ? parent.nativeObj : null, x, y, w, h));
    };
    TGifImage.cast = function (widget) {
        return new TGifImage(gif_image_cast(widget ? (widget.nativeObj || widget) : null));
    };
    return TGifImage;
}(TImageBase));
var TKeyboard = /** @class */ (function (_super) {
    __extends(TKeyboard, _super);
    function TKeyboard(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TKeyboard.create = function (parent, x, y, w, h) {
        return new TKeyboard(keyboard_create(parent ? parent.nativeObj : null, x, y, w, h));
    };
    TKeyboard.cast = function (widget) {
        return new TKeyboard(keyboard_cast(widget ? (widget.nativeObj || widget) : null));
    };
    return TKeyboard;
}(TWindowBase));
var TMutableImage = /** @class */ (function (_super) {
    __extends(TMutableImage, _super);
    function TMutableImage(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    return TMutableImage;
}(TImageBase));
var TObjectDefault = /** @class */ (function (_super) {
    __extends(TObjectDefault, _super);
    function TObjectDefault(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TObjectDefault.create = function () {
        return new TObjectDefault(object_default_create());
    };
    TObjectDefault.prototype.unref = function () {
        return object_default_unref(this.nativeObj);
    };
    TObjectDefault.prototype.clearProps = function () {
        return object_default_clear_props(this.nativeObj);
    };
    Object.defineProperty(TObjectDefault.prototype, "propsSize", {
        get: function () {
            return object_default_t_get_prop_props_size(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TObjectDefault;
}(TObject));
var TObjectArray = /** @class */ (function (_super) {
    __extends(TObjectArray, _super);
    function TObjectArray(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TObjectArray.create = function () {
        return new TObjectArray(object_array_create());
    };
    TObjectArray.prototype.unref = function () {
        return object_array_unref(this.nativeObj);
    };
    TObjectArray.prototype.clearProps = function () {
        return object_array_clear_props(this.nativeObj);
    };
    Object.defineProperty(TObjectArray.prototype, "propsSize", {
        get: function () {
            return object_array_t_get_prop_props_size(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TObjectArray;
}(TObject));
var TSvgImage = /** @class */ (function (_super) {
    __extends(TSvgImage, _super);
    function TSvgImage(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TSvgImage.create = function (parent, x, y, w, h) {
        return new TSvgImage(svg_image_create(parent ? parent.nativeObj : null, x, y, w, h));
    };
    TSvgImage.prototype.setImage = function (name) {
        return svg_image_set_image(this.nativeObj, name);
    };
    TSvgImage.cast = function (widget) {
        return new TSvgImage(svg_image_cast(widget ? (widget.nativeObj || widget) : null));
    };
    return TSvgImage;
}(TImageBase));
var TIdleInfo = /** @class */ (function (_super) {
    __extends(TIdleInfo, _super);
    function TIdleInfo(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TIdleInfo.cast = function (idle) {
        return new TIdleInfo(idle_info_cast(idle ? (idle.nativeObj || idle) : null));
    };
    Object.defineProperty(TIdleInfo.prototype, "ctx", {
        get: function () {
            return idle_info_t_get_prop_ctx(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TIdleInfo.prototype, "id", {
        get: function () {
            return idle_info_t_get_prop_id(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TIdleInfo;
}(TObject));
var TCalibrationWin = /** @class */ (function (_super) {
    __extends(TCalibrationWin, _super);
    function TCalibrationWin(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TCalibrationWin.cast = function (widget) {
        return new TCalibrationWin(calibration_win_cast(widget ? (widget.nativeObj || widget) : null));
    };
    return TCalibrationWin;
}(TWindowBase));
var TNativeWindow = /** @class */ (function (_super) {
    __extends(TNativeWindow, _super);
    function TNativeWindow(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TNativeWindow.prototype.move = function (x, y, force) {
        return native_window_move(this.nativeObj, x, y, force);
    };
    TNativeWindow.prototype.resize = function (w, h, force) {
        return native_window_resize(this.nativeObj, w, h, force);
    };
    TNativeWindow.prototype.minimize = function () {
        return native_window_minimize(this.nativeObj);
    };
    TNativeWindow.prototype.maximize = function () {
        return native_window_maximize(this.nativeObj);
    };
    TNativeWindow.prototype.restore = function () {
        return native_window_restore(this.nativeObj);
    };
    TNativeWindow.prototype.center = function () {
        return native_window_center(this.nativeObj);
    };
    TNativeWindow.prototype.showBorder = function (show) {
        return native_window_show_border(this.nativeObj, show);
    };
    TNativeWindow.prototype.setFullscreen = function (fullscreen) {
        return native_window_set_fullscreen(this.nativeObj, fullscreen);
    };
    TNativeWindow.prototype.setCursor = function (name, img) {
        return native_window_set_cursor(this.nativeObj, name, img ? img.nativeObj : null);
    };
    return TNativeWindow;
}(TObject));
var TSystemBar = /** @class */ (function (_super) {
    __extends(TSystemBar, _super);
    function TSystemBar(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TSystemBar.create = function (parent, x, y, w, h) {
        return new TSystemBar(system_bar_create(parent ? parent.nativeObj : null, x, y, w, h));
    };
    TSystemBar.cast = function (widget) {
        return new TSystemBar(system_bar_cast(widget ? (widget.nativeObj || widget) : null));
    };
    return TSystemBar;
}(TWindowBase));
var TSpinBox = /** @class */ (function (_super) {
    __extends(TSpinBox, _super);
    function TSpinBox(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TSpinBox.create = function (parent, x, y, w, h) {
        return new TSpinBox(spin_box_create(parent ? parent.nativeObj : null, x, y, w, h));
    };
    TSpinBox.cast = function (widget) {
        return new TSpinBox(spin_box_cast(widget ? (widget.nativeObj || widget) : null));
    };
    return TSpinBox;
}(TEdit));
var TPopup = /** @class */ (function (_super) {
    __extends(TPopup, _super);
    function TPopup(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TPopup.create = function (parent, x, y, w, h) {
        return new TPopup(popup_create(parent ? parent.nativeObj : null, x, y, w, h));
    };
    TPopup.cast = function (widget) {
        return new TPopup(popup_cast(widget ? (widget.nativeObj || widget) : null));
    };
    TPopup.prototype.setCloseWhenClick = function (close_when_click) {
        return popup_set_close_when_click(this.nativeObj, close_when_click);
    };
    TPopup.prototype.setCloseWhenClickOutside = function (close_when_click_outside) {
        return popup_set_close_when_click_outside(this.nativeObj, close_when_click_outside);
    };
    Object.defineProperty(TPopup.prototype, "closeWhenClick", {
        get: function () {
            return popup_t_get_prop_close_when_click(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TPopup.prototype, "closeWhenClickOutside", {
        get: function () {
            return popup_t_get_prop_close_when_click_outside(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TPopup;
}(TWindowBase));
var TOverlay = /** @class */ (function (_super) {
    __extends(TOverlay, _super);
    function TOverlay(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TOverlay.create = function (parent, x, y, w, h) {
        return new TOverlay(overlay_create(parent ? parent.nativeObj : null, x, y, w, h));
    };
    TOverlay.prototype.setClickThrough = function (click_through) {
        return overlay_set_click_through(this.nativeObj, click_through);
    };
    TOverlay.cast = function (widget) {
        return new TOverlay(overlay_cast(widget ? (widget.nativeObj || widget) : null));
    };
    Object.defineProperty(TOverlay.prototype, "clickThrough", {
        get: function () {
            return overlay_t_get_prop_click_through(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TOverlay;
}(TWindowBase));
var TImage = /** @class */ (function (_super) {
    __extends(TImage, _super);
    function TImage(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TImage.create = function (parent, x, y, w, h) {
        return new TImage(image_create(parent ? parent.nativeObj : null, x, y, w, h));
    };
    TImage.prototype.setDrawType = function (draw_type) {
        return image_set_draw_type(this.nativeObj, draw_type);
    };
    TImage.cast = function (widget) {
        return new TImage(image_cast(widget ? (widget.nativeObj || widget) : null));
    };
    Object.defineProperty(TImage.prototype, "drawType", {
        get: function () {
            return image_t_get_prop_draw_type(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TImage;
}(TImageBase));
var TComboBoxEx = /** @class */ (function (_super) {
    __extends(TComboBoxEx, _super);
    function TComboBoxEx(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TComboBoxEx.create = function (parent, x, y, w, h) {
        return new TComboBoxEx(combo_box_ex_create(parent ? parent.nativeObj : null, x, y, w, h));
    };
    return TComboBoxEx;
}(TComboBox));
//# sourceMappingURL=awtk_api.js.map