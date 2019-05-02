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
var Module = Module || {};
var tk_quit = Module.cwrap("tk_quit", "number", []);
var asset_info_t_get_prop_type = Module.cwrap("asset_info_t_get_prop_type", "number", ["number"]);
var asset_info_t_get_prop_subtype = Module.cwrap("asset_info_t_get_prop_subtype", "number", ["number"]);
var asset_info_t_get_prop_is_in_rom = Module.cwrap("asset_info_t_get_prop_is_in_rom", "number", ["number"]);
var asset_info_t_get_prop_size = Module.cwrap("asset_info_t_get_prop_size", "number", ["number"]);
var asset_info_t_get_prop_refcount = Module.cwrap("asset_info_t_get_prop_refcount", "number", ["number"]);
var asset_info_t_get_prop_name = Module.cwrap("asset_info_t_get_prop_name", "string", ["number"]);
var assets_manager = Module.cwrap("assets_manager", "number", []);
var assets_manager_ref = Module.cwrap("assets_manager_ref", "number", ["number", "number", "string"]);
var assets_manager_unref = Module.cwrap("assets_manager_unref", "number", ["number", "number"]);
var get_BITMAP_FMT_NONE = Module.cwrap("get_BITMAP_FMT_NONE", "number", []);
var get_BITMAP_FMT_RGBA8888 = Module.cwrap("get_BITMAP_FMT_RGBA8888", "number", []);
var get_BITMAP_FMT_ABGR8888 = Module.cwrap("get_BITMAP_FMT_ABGR8888", "number", []);
var get_BITMAP_FMT_BGRA8888 = Module.cwrap("get_BITMAP_FMT_BGRA8888", "number", []);
var get_BITMAP_FMT_ARGB8888 = Module.cwrap("get_BITMAP_FMT_ARGB8888", "number", []);
var get_BITMAP_FMT_RGB565 = Module.cwrap("get_BITMAP_FMT_RGB565", "number", []);
var get_BITMAP_FMT_BGR565 = Module.cwrap("get_BITMAP_FMT_BGR565", "number", []);
var get_BITMAP_FMT_RGB888 = Module.cwrap("get_BITMAP_FMT_RGB888", "number", []);
var get_BITMAP_FMT_BGR888 = Module.cwrap("get_BITMAP_FMT_BGR888", "number", []);
var get_BITMAP_FLAG_NONE = Module.cwrap("get_BITMAP_FLAG_NONE", "number", []);
var get_BITMAP_FLAG_OPAQUE = Module.cwrap("get_BITMAP_FLAG_OPAQUE", "number", []);
var get_BITMAP_FLAG_IMMUTABLE = Module.cwrap("get_BITMAP_FLAG_IMMUTABLE", "number", []);
var get_BITMAP_FLAG_TEXTURE = Module.cwrap("get_BITMAP_FLAG_TEXTURE", "number", []);
var get_BITMAP_FLAG_CHANGED = Module.cwrap("get_BITMAP_FLAG_CHANGED", "number", []);
var bitmap_create = Module.cwrap("bitmap_create", "number", []);
var bitmap_create_ex = Module.cwrap("bitmap_create_ex", "number", ["number", "number", "number", "number"]);
var bitmap_get_bpp = Module.cwrap("bitmap_get_bpp", "number", ["number"]);
var bitmap_destroy = Module.cwrap("bitmap_destroy", "number", ["number"]);
var bitmap_t_get_prop_w = Module.cwrap("bitmap_t_get_prop_w", "number", ["number"]);
var bitmap_t_get_prop_h = Module.cwrap("bitmap_t_get_prop_h", "number", ["number"]);
var bitmap_t_get_prop_line_length = Module.cwrap("bitmap_t_get_prop_line_length", "number", ["number"]);
var bitmap_t_get_prop_flags = Module.cwrap("bitmap_t_get_prop_flags", "number", ["number"]);
var bitmap_t_get_prop_format = Module.cwrap("bitmap_t_get_prop_format", "number", ["number"]);
var bitmap_t_get_prop_name = Module.cwrap("bitmap_t_get_prop_name", "string", ["number"]);
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
var get_IMAGE_DRAW_PATCH9 = Module.cwrap("get_IMAGE_DRAW_PATCH9", "number", []);
var get_IMAGE_DRAW_PATCH3_X = Module.cwrap("get_IMAGE_DRAW_PATCH3_X", "number", []);
var get_IMAGE_DRAW_PATCH3_Y = Module.cwrap("get_IMAGE_DRAW_PATCH3_Y", "number", []);
var get_IMAGE_DRAW_PATCH3_X_SCALE_Y = Module.cwrap("get_IMAGE_DRAW_PATCH3_X_SCALE_Y", "number", []);
var get_IMAGE_DRAW_PATCH3_Y_SCALE_X = Module.cwrap("get_IMAGE_DRAW_PATCH3_Y_SCALE_X", "number", []);
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
var canvas_stroke_rect = Module.cwrap("canvas_stroke_rect", "number", ["number", "number", "number", "number", "number"]);
var canvas_set_font = Module.cwrap("canvas_set_font", "number", ["number", "string", "number"]);
var canvas_measure_utf8 = Module.cwrap("canvas_measure_utf8", "number", ["number", "string"]);
var canvas_draw_utf8 = Module.cwrap("canvas_draw_utf8", "number", ["number", "string", "number", "number"]);
var canvas_draw_utf8_in_rect = Module.cwrap("canvas_draw_utf8_in_rect", "number", ["number", "string", "number"]);
var canvas_draw_icon = Module.cwrap("canvas_draw_icon", "number", ["number", "number", "number", "number"]);
var canvas_draw_image = Module.cwrap("canvas_draw_image", "number", ["number", "number", "number", "number"]);
var canvas_get_vgcanvas = Module.cwrap("canvas_get_vgcanvas", "number", ["number"]);
var canvas_cast = Module.cwrap("canvas_cast", "number", ["number"]);
var canvas_t_get_prop_ox = Module.cwrap("canvas_t_get_prop_ox", "number", ["number"]);
var canvas_t_get_prop_oy = Module.cwrap("canvas_t_get_prop_oy", "number", ["number"]);
var get_CLIP_BOARD_DATA_TYPE_NONE = Module.cwrap("get_CLIP_BOARD_DATA_TYPE_NONE", "number", []);
var get_CLIP_BOARD_DATA_TYPE_TEXT = Module.cwrap("get_CLIP_BOARD_DATA_TYPE_TEXT", "number", []);
var clip_board_set_text = Module.cwrap("clip_board_set_text", "number", ["string"]);
var clip_board_get_text = Module.cwrap("clip_board_get_text", "string", []);
var get_EVT_POINTER_DOWN = Module.cwrap("get_EVT_POINTER_DOWN", "number", []);
var get_EVT_POINTER_DOWN_ABORT = Module.cwrap("get_EVT_POINTER_DOWN_ABORT", "number", []);
var get_EVT_POINTER_MOVE = Module.cwrap("get_EVT_POINTER_MOVE", "number", []);
var get_EVT_POINTER_UP = Module.cwrap("get_EVT_POINTER_UP", "number", []);
var get_EVT_WHEEL = Module.cwrap("get_EVT_WHEEL", "number", []);
var get_EVT_CONTEXT_MENU = Module.cwrap("get_EVT_CONTEXT_MENU", "number", []);
var get_EVT_POINTER_ENTER = Module.cwrap("get_EVT_POINTER_ENTER", "number", []);
var get_EVT_POINTER_LEAVE = Module.cwrap("get_EVT_POINTER_LEAVE", "number", []);
var get_EVT_LONG_PRESS = Module.cwrap("get_EVT_LONG_PRESS", "number", []);
var get_EVT_CLICK = Module.cwrap("get_EVT_CLICK", "number", []);
var get_EVT_FOCUS = Module.cwrap("get_EVT_FOCUS", "number", []);
var get_EVT_BLUR = Module.cwrap("get_EVT_BLUR", "number", []);
var get_EVT_KEY_DOWN = Module.cwrap("get_EVT_KEY_DOWN", "number", []);
var get_EVT_KEY_REPEAT = Module.cwrap("get_EVT_KEY_REPEAT", "number", []);
var get_EVT_KEY_UP = Module.cwrap("get_EVT_KEY_UP", "number", []);
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
var get_EVT_WINDOW_WILL_OPEN = Module.cwrap("get_EVT_WINDOW_WILL_OPEN", "number", []);
var get_EVT_WINDOW_OPEN = Module.cwrap("get_EVT_WINDOW_OPEN", "number", []);
var get_EVT_WINDOW_CLOSE = Module.cwrap("get_EVT_WINDOW_CLOSE", "number", []);
var get_EVT_REQUEST_CLOSE_WINDOW = Module.cwrap("get_EVT_REQUEST_CLOSE_WINDOW", "number", []);
var get_EVT_TOP_WINDOW_CHANGED = Module.cwrap("get_EVT_TOP_WINDOW_CHANGED", "number", []);
var get_EVT_IM_COMMIT = Module.cwrap("get_EVT_IM_COMMIT", "number", []);
var get_EVT_IM_SHOW_CANDIDATES = Module.cwrap("get_EVT_IM_SHOW_CANDIDATES", "number", []);
var get_EVT_IM_ACTION = Module.cwrap("get_EVT_IM_ACTION", "number", []);
var get_EVT_IM_ACTION_INFO = Module.cwrap("get_EVT_IM_ACTION_INFO", "number", []);
var get_EVT_DRAG_START = Module.cwrap("get_EVT_DRAG_START", "number", []);
var get_EVT_DRAG = Module.cwrap("get_EVT_DRAG", "number", []);
var get_EVT_DRAG_END = Module.cwrap("get_EVT_DRAG_END", "number", []);
var get_EVT_SCREEN_SAVER = Module.cwrap("get_EVT_SCREEN_SAVER", "number", []);
var get_EVT_REQ_START = Module.cwrap("get_EVT_REQ_START", "number", []);
var get_EVT_USER_START = Module.cwrap("get_EVT_USER_START", "number", []);
var font_manager_unload_font = Module.cwrap("font_manager_unload_font", "number", ["number", "string", "number"]);
var idle_add = Module.cwrap("idle_add", "number", ["number", "number"]);
var idle_remove = Module.cwrap("idle_remove", "number", ["number"]);
var image_manager = Module.cwrap("image_manager", "number", []);
var image_manager_get_bitmap = Module.cwrap("image_manager_get_bitmap", "number", ["number", "string", "number"]);
var get_INPUT_TEXT = Module.cwrap("get_INPUT_TEXT", "number", []);
var get_INPUT_INT = Module.cwrap("get_INPUT_INT", "number", []);
var get_INPUT_UINT = Module.cwrap("get_INPUT_UINT", "number", []);
var get_INPUT_HEX = Module.cwrap("get_INPUT_HEX", "number", []);
var get_INPUT_FLOAT = Module.cwrap("get_INPUT_FLOAT", "number", []);
var get_INPUT_UFLOAT = Module.cwrap("get_INPUT_UFLOAT", "number", []);
var get_INPUT_EMAIL = Module.cwrap("get_INPUT_EMAIL", "number", []);
var get_INPUT_PASSWORD = Module.cwrap("get_INPUT_PASSWORD", "number", []);
var get_INPUT_PHONE = Module.cwrap("get_INPUT_PHONE", "number", []);
var get_INPUT_CUSTOM = Module.cwrap("get_INPUT_CUSTOM", "number", []);
var input_method_commit_text = Module.cwrap("input_method_commit_text", "number", ["number", "string"]);
var input_method_dispatch_key = Module.cwrap("input_method_dispatch_key", "number", ["number", "number"]);
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
var locale_info = Module.cwrap("locale_info", "number", []);
var locale_info_tr = Module.cwrap("locale_info_tr", "string", ["number", "string"]);
var locale_info_change = Module.cwrap("locale_info_change", "number", ["number", "string", "string"]);
var locale_info_on = Module.cwrap("locale_info_on", "number", ["number", "number", "number", "number"]);
var locale_info_off = Module.cwrap("locale_info_off", "number", ["number", "number"]);
var get_STYLE_ID_BG_COLOR = Module.cwrap("get_STYLE_ID_BG_COLOR", "string", []);
var get_STYLE_ID_FG_COLOR = Module.cwrap("get_STYLE_ID_FG_COLOR", "string", []);
var get_STYLE_ID_MASK_COLOR = Module.cwrap("get_STYLE_ID_MASK_COLOR", "string", []);
var get_STYLE_ID_FONT_NAME = Module.cwrap("get_STYLE_ID_FONT_NAME", "string", []);
var get_STYLE_ID_FONT_SIZE = Module.cwrap("get_STYLE_ID_FONT_SIZE", "string", []);
var get_STYLE_ID_FONT_STYLE = Module.cwrap("get_STYLE_ID_FONT_STYLE", "string", []);
var get_STYLE_ID_TEXT_COLOR = Module.cwrap("get_STYLE_ID_TEXT_COLOR", "string", []);
var get_STYLE_ID_TIPS_TEXT_COLOR = Module.cwrap("get_STYLE_ID_TIPS_TEXT_COLOR", "string", []);
var get_STYLE_ID_TEXT_ALIGN_H = Module.cwrap("get_STYLE_ID_TEXT_ALIGN_H", "string", []);
var get_STYLE_ID_TEXT_ALIGN_V = Module.cwrap("get_STYLE_ID_TEXT_ALIGN_V", "string", []);
var get_STYLE_ID_BORDER_COLOR = Module.cwrap("get_STYLE_ID_BORDER_COLOR", "string", []);
var get_STYLE_ID_BORDER = Module.cwrap("get_STYLE_ID_BORDER", "string", []);
var get_STYLE_ID_BG_IMAGE = Module.cwrap("get_STYLE_ID_BG_IMAGE", "string", []);
var get_STYLE_ID_BG_IMAGE_DRAW_TYPE = Module.cwrap("get_STYLE_ID_BG_IMAGE_DRAW_TYPE", "string", []);
var get_STYLE_ID_ICON = Module.cwrap("get_STYLE_ID_ICON", "string", []);
var get_STYLE_ID_FG_IMAGE = Module.cwrap("get_STYLE_ID_FG_IMAGE", "string", []);
var get_STYLE_ID_FG_IMAGE_DRAW_TYPE = Module.cwrap("get_STYLE_ID_FG_IMAGE_DRAW_TYPE", "string", []);
var get_STYLE_ID_MARGIN = Module.cwrap("get_STYLE_ID_MARGIN", "string", []);
var get_STYLE_ID_ICON_AT = Module.cwrap("get_STYLE_ID_ICON_AT", "string", []);
var get_STYLE_ID_ACTIVE_ICON = Module.cwrap("get_STYLE_ID_ACTIVE_ICON", "string", []);
var get_STYLE_ID_X_OFFSET = Module.cwrap("get_STYLE_ID_X_OFFSET", "string", []);
var get_STYLE_ID_Y_OFFSET = Module.cwrap("get_STYLE_ID_Y_OFFSET", "string", []);
var get_STYLE_ID_SELECTED_BG_COLOR = Module.cwrap("get_STYLE_ID_SELECTED_BG_COLOR", "string", []);
var get_STYLE_ID_SELECTED_FG_COLOR = Module.cwrap("get_STYLE_ID_SELECTED_FG_COLOR", "string", []);
var get_STYLE_ID_SELECTED_TEXT_COLOR = Module.cwrap("get_STYLE_ID_SELECTED_TEXT_COLOR", "string", []);
var get_STYLE_ID_ROUND_RADIUS = Module.cwrap("get_STYLE_ID_ROUND_RADIUS", "string", []);
var style_notify_widget_state_changed = Module.cwrap("style_notify_widget_state_changed", "number", ["number", "number"]);
var style_is_valid = Module.cwrap("style_is_valid", "number", ["number"]);
var style_get_int = Module.cwrap("style_get_int", "number", ["number", "string", "number"]);
var style_get_str = Module.cwrap("style_get_str", "string", ["number", "string", "string"]);
var theme = Module.cwrap("theme", "number", []);
var timer_add = Module.cwrap("timer_add", "number", ["number", "number", "number"]);
var timer_remove = Module.cwrap("timer_remove", "number", ["number"]);
var timer_reset = Module.cwrap("timer_reset", "number", ["number"]);
var get_ALIGN_V_NONE = Module.cwrap("get_ALIGN_V_NONE", "number", []);
var get_ALIGN_V_MIDDLE = Module.cwrap("get_ALIGN_V_MIDDLE", "number", []);
var get_ALIGN_V_TOP = Module.cwrap("get_ALIGN_V_TOP", "number", []);
var get_ALIGN_V_BOTTOM = Module.cwrap("get_ALIGN_V_BOTTOM", "number", []);
var get_ALIGN_H_NONE = Module.cwrap("get_ALIGN_H_NONE", "number", []);
var get_ALIGN_H_CENTER = Module.cwrap("get_ALIGN_H_CENTER", "number", []);
var get_ALIGN_H_LEFT = Module.cwrap("get_ALIGN_H_LEFT", "number", []);
var get_ALIGN_H_RIGHT = Module.cwrap("get_ALIGN_H_RIGHT", "number", []);
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
var vgcanvas_rotate = Module.cwrap("vgcanvas_rotate", "number", ["number", "number"]);
var vgcanvas_scale = Module.cwrap("vgcanvas_scale", "number", ["number", "number", "number"]);
var vgcanvas_translate = Module.cwrap("vgcanvas_translate", "number", ["number", "number", "number"]);
var vgcanvas_transform = Module.cwrap("vgcanvas_transform", "number", ["number", "number", "number", "number", "number", "number", "number"]);
var vgcanvas_set_transform = Module.cwrap("vgcanvas_set_transform", "number", ["number", "number", "number", "number", "number", "number", "number"]);
var vgcanvas_clip_rect = Module.cwrap("vgcanvas_clip_rect", "number", ["number", "number", "number", "number", "number"]);
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
var get_WIDGET_PROP_X = Module.cwrap("get_WIDGET_PROP_X", "string", []);
var get_WIDGET_PROP_Y = Module.cwrap("get_WIDGET_PROP_Y", "string", []);
var get_WIDGET_PROP_W = Module.cwrap("get_WIDGET_PROP_W", "string", []);
var get_WIDGET_PROP_H = Module.cwrap("get_WIDGET_PROP_H", "string", []);
var get_WIDGET_PROP_HIGHLIGHT = Module.cwrap("get_WIDGET_PROP_HIGHLIGHT", "string", []);
var get_WIDGET_PROP_BAR_SIZE = Module.cwrap("get_WIDGET_PROP_BAR_SIZE", "string", []);
var get_WIDGET_PROP_OPACITY = Module.cwrap("get_WIDGET_PROP_OPACITY", "string", []);
var get_WIDGET_PROP_MIN_W = Module.cwrap("get_WIDGET_PROP_MIN_W", "string", []);
var get_WIDGET_PROP_MAX_W = Module.cwrap("get_WIDGET_PROP_MAX_W", "string", []);
var get_WIDGET_PROP_CHILDREN_LAYOUT = Module.cwrap("get_WIDGET_PROP_CHILDREN_LAYOUT", "string", []);
var get_WIDGET_PROP_LAYOUT = Module.cwrap("get_WIDGET_PROP_LAYOUT", "string", []);
var get_WIDGET_PROP_SELF_LAYOUT = Module.cwrap("get_WIDGET_PROP_SELF_LAYOUT", "string", []);
var get_WIDGET_PROP_LAYOUT_W = Module.cwrap("get_WIDGET_PROP_LAYOUT_W", "string", []);
var get_WIDGET_PROP_LAYOUT_H = Module.cwrap("get_WIDGET_PROP_LAYOUT_H", "string", []);
var get_WIDGET_PROP_VIRTUAL_W = Module.cwrap("get_WIDGET_PROP_VIRTUAL_W", "string", []);
var get_WIDGET_PROP_VIRTUAL_H = Module.cwrap("get_WIDGET_PROP_VIRTUAL_H", "string", []);
var get_WIDGET_PROP_NAME = Module.cwrap("get_WIDGET_PROP_NAME", "string", []);
var get_WIDGET_PROP_CLOSABLE = Module.cwrap("get_WIDGET_PROP_CLOSABLE", "string", []);
var get_WIDGET_PROP_CURSOR = Module.cwrap("get_WIDGET_PROP_CURSOR", "string", []);
var get_WIDGET_PROP_VALUE = Module.cwrap("get_WIDGET_PROP_VALUE", "string", []);
var get_WIDGET_PROP_LENGTH = Module.cwrap("get_WIDGET_PROP_LENGTH", "string", []);
var get_WIDGET_PROP_TEXT = Module.cwrap("get_WIDGET_PROP_TEXT", "string", []);
var get_WIDGET_PROP_TR_TEXT = Module.cwrap("get_WIDGET_PROP_TR_TEXT", "string", []);
var get_WIDGET_PROP_STYLE = Module.cwrap("get_WIDGET_PROP_STYLE", "string", []);
var get_WIDGET_PROP_ENABLE = Module.cwrap("get_WIDGET_PROP_ENABLE", "string", []);
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
var get_WIDGET_PROP_OPEN_ANIM_HINT = Module.cwrap("get_WIDGET_PROP_OPEN_ANIM_HINT", "string", []);
var get_WIDGET_PROP_CLOSE_ANIM_HINT = Module.cwrap("get_WIDGET_PROP_CLOSE_ANIM_HINT", "string", []);
var get_WIDGET_PROP_MIN = Module.cwrap("get_WIDGET_PROP_MIN", "string", []);
var get_WIDGET_PROP_TIPS = Module.cwrap("get_WIDGET_PROP_TIPS", "string", []);
var get_WIDGET_PROP_INPUT_TYPE = Module.cwrap("get_WIDGET_PROP_INPUT_TYPE", "string", []);
var get_WIDGET_PROP_READONLY = Module.cwrap("get_WIDGET_PROP_READONLY", "string", []);
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
var get_WIDGET_PROP_X_MIN = Module.cwrap("get_WIDGET_PROP_X_MIN", "string", []);
var get_WIDGET_PROP_X_MAX = Module.cwrap("get_WIDGET_PROP_X_MAX", "string", []);
var get_WIDGET_PROP_Y_MIN = Module.cwrap("get_WIDGET_PROP_Y_MIN", "string", []);
var get_WIDGET_PROP_Y_MAX = Module.cwrap("get_WIDGET_PROP_Y_MAX", "string", []);
var get_WIDGET_PROP_MAX = Module.cwrap("get_WIDGET_PROP_MAX", "string", []);
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
var get_WIDGET_PROP_ENABLE_LONG_PRESS = Module.cwrap("get_WIDGET_PROP_ENABLE_LONG_PRESS", "string", []);
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
var get_WIDGET_PROP_ICON = Module.cwrap("get_WIDGET_PROP_ICON", "string", []);
var get_WIDGET_PROP_OPTIONS = Module.cwrap("get_WIDGET_PROP_OPTIONS", "string", []);
var get_WIDGET_PROP_SELECTED = Module.cwrap("get_WIDGET_PROP_SELECTED", "string", []);
var get_WIDGET_PROP_CHECKED = Module.cwrap("get_WIDGET_PROP_CHECKED", "string", []);
var get_WIDGET_PROP_ACTIVE_ICON = Module.cwrap("get_WIDGET_PROP_ACTIVE_ICON", "string", []);
var get_WIDGET_PROP_OPEN_WINDOW = Module.cwrap("get_WIDGET_PROP_OPEN_WINDOW", "string", []);
var get_WIDGET_PROP_SELECTED_INDEX = Module.cwrap("get_WIDGET_PROP_SELECTED_INDEX", "string", []);
var get_WIDGET_PROP_CLOSE_WHEN_CLICK = Module.cwrap("get_WIDGET_PROP_CLOSE_WHEN_CLICK", "string", []);
var get_WIDGET_PROP_CLOSE_WHEN_CLICK_OUTSIDE = Module.cwrap("get_WIDGET_PROP_CLOSE_WHEN_CLICK_OUTSIDE", "string", []);
var get_WIDGET_PROP_LINE_GAP = Module.cwrap("get_WIDGET_PROP_LINE_GAP", "string", []);
var get_WIDGET_PROP_BG_COLOR = Module.cwrap("get_WIDGET_PROP_BG_COLOR", "string", []);
var get_WIDGET_PROP_BORDER_COLOR = Module.cwrap("get_WIDGET_PROP_BORDER_COLOR", "string", []);
var get_WIDGET_PROP_DELAY = Module.cwrap("get_WIDGET_PROP_DELAY", "string", []);
var get_WIDGET_PROP_IS_KEYBOARD = Module.cwrap("get_WIDGET_PROP_IS_KEYBOARD", "string", []);
var get_WIDGET_PROP_FOCUS = Module.cwrap("get_WIDGET_PROP_FOCUS", "string", []);
var get_WIDGET_PROP_FOCUSABLE = Module.cwrap("get_WIDGET_PROP_FOCUSABLE", "string", []);
var get_WIDGET_TYPE_NONE = Module.cwrap("get_WIDGET_TYPE_NONE", "string", []);
var get_WIDGET_TYPE_WINDOW_MANAGER = Module.cwrap("get_WIDGET_TYPE_WINDOW_MANAGER", "string", []);
var get_WIDGET_TYPE_NORMAL_WINDOW = Module.cwrap("get_WIDGET_TYPE_NORMAL_WINDOW", "string", []);
var get_WIDGET_TYPE_TOOL_BAR = Module.cwrap("get_WIDGET_TYPE_TOOL_BAR", "string", []);
var get_WIDGET_TYPE_DIALOG = Module.cwrap("get_WIDGET_TYPE_DIALOG", "string", []);
var get_WIDGET_TYPE_POPUP = Module.cwrap("get_WIDGET_TYPE_POPUP", "string", []);
var get_WIDGET_TYPE_SYSTEM_BAR = Module.cwrap("get_WIDGET_TYPE_SYSTEM_BAR", "string", []);
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
var get_WINDOW_CLOSABLE_YES = Module.cwrap("get_WINDOW_CLOSABLE_YES", "number", []);
var get_WINDOW_CLOSABLE_NO = Module.cwrap("get_WINDOW_CLOSABLE_NO", "number", []);
var get_WINDOW_CLOSABLE_CONFIRM = Module.cwrap("get_WINDOW_CLOSABLE_CONFIRM", "number", []);
var get_WIDGET_STATE_NONE = Module.cwrap("get_WIDGET_STATE_NONE", "string", []);
var get_WIDGET_STATE_NORMAL = Module.cwrap("get_WIDGET_STATE_NORMAL", "string", []);
var get_WIDGET_STATE_PRESSED = Module.cwrap("get_WIDGET_STATE_PRESSED", "string", []);
var get_WIDGET_STATE_OVER = Module.cwrap("get_WIDGET_STATE_OVER", "string", []);
var get_WIDGET_STATE_DISABLE = Module.cwrap("get_WIDGET_STATE_DISABLE", "string", []);
var get_WIDGET_STATE_FOCUSED = Module.cwrap("get_WIDGET_STATE_FOCUSED", "string", []);
var get_WIDGET_STATE_CHECKED = Module.cwrap("get_WIDGET_STATE_CHECKED", "string", []);
var get_WIDGET_STATE_UNCHECKED = Module.cwrap("get_WIDGET_STATE_UNCHECKED", "string", []);
var get_WIDGET_STATE_EMPTY = Module.cwrap("get_WIDGET_STATE_EMPTY", "string", []);
var get_WIDGET_STATE_ERROR = Module.cwrap("get_WIDGET_STATE_ERROR", "string", []);
var get_WIDGET_STATE_SELECTED = Module.cwrap("get_WIDGET_STATE_SELECTED", "string", []);
var get_WIDGET_STATE_NORMAL_OF_CHECKED = Module.cwrap("get_WIDGET_STATE_NORMAL_OF_CHECKED", "string", []);
var get_WIDGET_STATE_PRESSED_OF_CHECKED = Module.cwrap("get_WIDGET_STATE_PRESSED_OF_CHECKED", "string", []);
var get_WIDGET_STATE_OVER_OF_CHECKED = Module.cwrap("get_WIDGET_STATE_OVER_OF_CHECKED", "string", []);
var get_WIDGET_STATE_NORMAL_OF_ACTIVE = Module.cwrap("get_WIDGET_STATE_NORMAL_OF_ACTIVE", "string", []);
var get_WIDGET_STATE_PRESSED_OF_ACTIVE = Module.cwrap("get_WIDGET_STATE_PRESSED_OF_ACTIVE", "string", []);
var get_WIDGET_STATE_OVER_OF_ACTIVE = Module.cwrap("get_WIDGET_STATE_OVER_OF_ACTIVE", "string", []);
var widget_count_children = Module.cwrap("widget_count_children", "number", ["number"]);
var widget_get_child = Module.cwrap("widget_get_child", "number", ["number", "number"]);
var widget_index_of = Module.cwrap("widget_index_of", "number", ["number"]);
var widget_move = Module.cwrap("widget_move", "number", ["number", "number", "number"]);
var widget_resize = Module.cwrap("widget_resize", "number", ["number", "number", "number"]);
var widget_move_resize = Module.cwrap("widget_move_resize", "number", ["number", "number", "number", "number", "number"]);
var widget_set_value = Module.cwrap("widget_set_value", "number", ["number", "number"]);
var widget_animate_value_to = Module.cwrap("widget_animate_value_to", "number", ["number", "number", "number"]);
var widget_add_value = Module.cwrap("widget_add_value", "number", ["number", "number"]);
var widget_use_style = Module.cwrap("widget_use_style", "number", ["number", "string"]);
var widget_set_text_utf8 = Module.cwrap("widget_set_text_utf8", "number", ["number", "string"]);
var widget_set_tr_text = Module.cwrap("widget_set_tr_text", "number", ["number", "string"]);
var widget_get_value = Module.cwrap("widget_get_value", "number", ["number"]);
var widget_get_text = Module.cwrap("widget_get_text", "number", ["number"]);
var widget_set_name = Module.cwrap("widget_set_name", "number", ["number", "string"]);
var widget_set_cursor = Module.cwrap("widget_set_cursor", "number", ["number", "string"]);
var widget_set_animation = Module.cwrap("widget_set_animation", "number", ["number", "string"]);
var widget_create_animator = Module.cwrap("widget_create_animator", "number", ["number", "string"]);
var widget_start_animator = Module.cwrap("widget_start_animator", "number", ["number", "string"]);
var widget_set_animator_time_scale = Module.cwrap("widget_set_animator_time_scale", "number", ["number", "string", "number"]);
var widget_pause_animator = Module.cwrap("widget_pause_animator", "number", ["number", "string"]);
var widget_stop_animator = Module.cwrap("widget_stop_animator", "number", ["number", "string"]);
var widget_destroy_animator = Module.cwrap("widget_destroy_animator", "number", ["number", "string"]);
var widget_set_enable = Module.cwrap("widget_set_enable", "number", ["number", "number"]);
var widget_set_floating = Module.cwrap("widget_set_floating", "number", ["number", "number"]);
var widget_set_focused = Module.cwrap("widget_set_focused", "number", ["number", "number"]);
var widget_child = Module.cwrap("widget_child", "number", ["number", "string"]);
var widget_lookup = Module.cwrap("widget_lookup", "number", ["number", "string", "number"]);
var widget_lookup_by_type = Module.cwrap("widget_lookup_by_type", "number", ["number", "string", "number"]);
var widget_set_visible = Module.cwrap("widget_set_visible", "number", ["number", "number", "number"]);
var widget_set_sensitive = Module.cwrap("widget_set_sensitive", "number", ["number", "number"]);
var widget_on = Module.cwrap("widget_on", "number", ["number", "number", "number", "number"]);
var widget_off = Module.cwrap("widget_off", "number", ["number", "number"]);
var widget_invalidate_force = Module.cwrap("widget_invalidate_force", "number", ["number", "number"]);
var widget_set_prop_str = Module.cwrap("widget_set_prop_str", "number", ["number", "string", "string"]);
var widget_get_prop_str = Module.cwrap("widget_get_prop_str", "string", ["number", "string", "string"]);
var widget_set_prop_int = Module.cwrap("widget_set_prop_int", "number", ["number", "string", "number"]);
var widget_get_prop_int = Module.cwrap("widget_get_prop_int", "number", ["number", "string", "number"]);
var widget_set_prop_bool = Module.cwrap("widget_set_prop_bool", "number", ["number", "string", "number"]);
var widget_get_prop_bool = Module.cwrap("widget_get_prop_bool", "number", ["number", "string", "number"]);
var widget_is_window_opened = Module.cwrap("widget_is_window_opened", "number", ["number"]);
var widget_is_window = Module.cwrap("widget_is_window", "number", ["number"]);
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
var widget_layout = Module.cwrap("widget_layout", "number", ["number"]);
var widget_set_self_layout = Module.cwrap("widget_set_self_layout", "number", ["number", "string"]);
var widget_set_children_layout = Module.cwrap("widget_set_children_layout", "number", ["number", "string"]);
var widget_set_self_layout_params = Module.cwrap("widget_set_self_layout_params", "number", ["number", "string", "string", "string", "string"]);
var widget_t_get_prop_x = Module.cwrap("widget_t_get_prop_x", "number", ["number"]);
var widget_t_get_prop_y = Module.cwrap("widget_t_get_prop_y", "number", ["number"]);
var widget_t_get_prop_w = Module.cwrap("widget_t_get_prop_w", "number", ["number"]);
var widget_t_get_prop_h = Module.cwrap("widget_t_get_prop_h", "number", ["number"]);
var widget_t_get_prop_name = Module.cwrap("widget_t_get_prop_name", "string", ["number"]);
var widget_t_get_prop_tr_text = Module.cwrap("widget_t_get_prop_tr_text", "string", ["number"]);
var widget_t_get_prop_style = Module.cwrap("widget_t_get_prop_style", "string", ["number"]);
var widget_t_get_prop_animation = Module.cwrap("widget_t_get_prop_animation", "string", ["number"]);
var widget_t_get_prop_enable = Module.cwrap("widget_t_get_prop_enable", "number", ["number"]);
var widget_t_get_prop_visible = Module.cwrap("widget_t_get_prop_visible", "number", ["number"]);
var widget_t_set_prop_visible = Module.cwrap("widget_t_set_prop_visible", "number", ["number", "number"]);
var widget_t_get_prop_sensitive = Module.cwrap("widget_t_get_prop_sensitive", "number", ["number"]);
var widget_t_set_prop_sensitive = Module.cwrap("widget_t_set_prop_sensitive", "number", ["number", "number"]);
var widget_t_get_prop_floating = Module.cwrap("widget_t_get_prop_floating", "number", ["number"]);
var get_ASSET_TYPE_NONE = Module.cwrap("get_ASSET_TYPE_NONE", "number", []);
var get_ASSET_TYPE_FONT = Module.cwrap("get_ASSET_TYPE_FONT", "number", []);
var get_ASSET_TYPE_IMAGE = Module.cwrap("get_ASSET_TYPE_IMAGE", "number", []);
var get_ASSET_TYPE_STYLE = Module.cwrap("get_ASSET_TYPE_STYLE", "number", []);
var get_ASSET_TYPE_UI = Module.cwrap("get_ASSET_TYPE_UI", "number", []);
var get_ASSET_TYPE_XML = Module.cwrap("get_ASSET_TYPE_XML", "number", []);
var get_ASSET_TYPE_STRINGS = Module.cwrap("get_ASSET_TYPE_STRINGS", "number", []);
var get_ASSET_TYPE_SCRIPT = Module.cwrap("get_ASSET_TYPE_SCRIPT", "number", []);
var get_ASSET_TYPE_DATA = Module.cwrap("get_ASSET_TYPE_DATA", "number", []);
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
var date_time_create = Module.cwrap("date_time_create", "number", []);
var date_time_destroy = Module.cwrap("date_time_destroy", "number", ["number"]);
var date_time_t_get_prop_second = Module.cwrap("date_time_t_get_prop_second", "number", ["number"]);
var date_time_t_get_prop_minute = Module.cwrap("date_time_t_get_prop_minute", "number", ["number"]);
var date_time_t_get_prop_hour = Module.cwrap("date_time_t_get_prop_hour", "number", ["number"]);
var date_time_t_get_prop_day = Module.cwrap("date_time_t_get_prop_day", "number", ["number"]);
var date_time_t_get_prop_wday = Module.cwrap("date_time_t_get_prop_wday", "number", ["number"]);
var date_time_t_get_prop_month = Module.cwrap("date_time_t_get_prop_month", "number", ["number"]);
var date_time_t_get_prop_year = Module.cwrap("date_time_t_get_prop_year", "number", ["number"]);
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
var get_EVT_NONE = Module.cwrap("get_EVT_NONE", "number", []);
var get_EVT_PROP_WILL_CHANGE = Module.cwrap("get_EVT_PROP_WILL_CHANGE", "number", []);
var get_EVT_PROP_CHANGED = Module.cwrap("get_EVT_PROP_CHANGED", "number", []);
var get_EVT_ITEMS_WILL_CHANGE = Module.cwrap("get_EVT_ITEMS_WILL_CHANGE", "number", []);
var get_EVT_ITEMS_CHANGED = Module.cwrap("get_EVT_ITEMS_CHANGED", "number", []);
var get_EVT_PROPS_CHANGED = Module.cwrap("get_EVT_PROPS_CHANGED", "number", []);
var get_EVT_DESTROY = Module.cwrap("get_EVT_DESTROY", "number", []);
var event_cast = Module.cwrap("event_cast", "number", ["number"]);
var event_create = Module.cwrap("event_create", "number", ["number", "number"]);
var event_destroy = Module.cwrap("event_destroy", "number", ["number"]);
var event_t_get_prop_type = Module.cwrap("event_t_get_prop_type", "number", ["number"]);
var event_t_get_prop_time = Module.cwrap("event_t_get_prop_time", "number", ["number"]);
var event_t_get_prop_target = Module.cwrap("event_t_get_prop_target", "number", ["number"]);
var named_value_create = Module.cwrap("named_value_create", "number", []);
var named_value_cast = Module.cwrap("named_value_cast", "number", ["number"]);
var named_value_set_name = Module.cwrap("named_value_set_name", "number", ["number", "string"]);
var named_value_set_value = Module.cwrap("named_value_set_value", "number", ["number", "number"]);
var named_value_get_value = Module.cwrap("named_value_get_value", "number", ["number"]);
var named_value_destroy = Module.cwrap("named_value_destroy", "number", ["number"]);
var named_value_t_get_prop_name = Module.cwrap("named_value_t_get_prop_name", "string", ["number"]);
var rect_create = Module.cwrap("rect_create", "number", ["number", "number", "number", "number"]);
var rect_set = Module.cwrap("rect_set", "number", ["number", "number", "number", "number", "number"]);
var rect_cast = Module.cwrap("rect_cast", "number", ["number"]);
var rect_destroy = Module.cwrap("rect_destroy", "number", ["number"]);
var rect_t_get_prop_x = Module.cwrap("rect_t_get_prop_x", "number", ["number"]);
var rect_t_get_prop_y = Module.cwrap("rect_t_get_prop_y", "number", ["number"]);
var rect_t_get_prop_w = Module.cwrap("rect_t_get_prop_w", "number", ["number"]);
var rect_t_get_prop_h = Module.cwrap("rect_t_get_prop_h", "number", ["number"]);
var time_now_s = Module.cwrap("time_now_s", "number", []);
var time_now_ms = Module.cwrap("time_now_ms", "number", []);
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
var get_RET_CONTINUE = Module.cwrap("get_RET_CONTINUE", "number", []);
var get_RET_OBJECT_CHANGED = Module.cwrap("get_RET_OBJECT_CHANGED", "number", []);
var get_RET_ITEMS_CHANGED = Module.cwrap("get_RET_ITEMS_CHANGED", "number", []);
var get_RET_BAD_PARAMS = Module.cwrap("get_RET_BAD_PARAMS", "number", []);
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
var value_float = Module.cwrap("value_float", "number", ["number"]);
var value_set_float32 = Module.cwrap("value_set_float32", "number", ["number", "number"]);
var value_float32 = Module.cwrap("value_float32", "number", ["number"]);
var value_set_double = Module.cwrap("value_set_double", "number", ["number", "number"]);
var value_double = Module.cwrap("value_double", "number", ["number"]);
var value_dup_str = Module.cwrap("value_dup_str", "number", ["number", "string"]);
var value_str = Module.cwrap("value_str", "string", ["number"]);
var value_wstr = Module.cwrap("value_wstr", "number", ["number"]);
var value_is_null = Module.cwrap("value_is_null", "number", ["number"]);
var value_int = Module.cwrap("value_int", "number", ["number"]);
var value_set_int = Module.cwrap("value_set_int", "number", ["number", "number"]);
var value_set_object = Module.cwrap("value_set_object", "number", ["number", "number"]);
var value_object = Module.cwrap("value_object", "number", ["number"]);
var value_create = Module.cwrap("value_create", "number", []);
var value_destroy = Module.cwrap("value_destroy", "number", ["number"]);
var value_reset = Module.cwrap("value_reset", "number", ["number"]);
var value_cast = Module.cwrap("value_cast", "number", ["number"]);
var progress_circle_create = Module.cwrap("progress_circle_create", "number", ["number", "number", "number", "number", "number"]);
var progress_circle_cast = Module.cwrap("progress_circle_cast", "number", ["number"]);
var progress_circle_set_value = Module.cwrap("progress_circle_set_value", "number", ["number", "number"]);
var progress_circle_set_max = Module.cwrap("progress_circle_set_max", "number", ["number", "number"]);
var progress_circle_set_line_width = Module.cwrap("progress_circle_set_line_width", "number", ["number", "number"]);
var progress_circle_set_start_angle = Module.cwrap("progress_circle_set_start_angle", "number", ["number", "number"]);
var progress_circle_set_unit = Module.cwrap("progress_circle_set_unit", "number", ["number", "string"]);
var progress_circle_set_show_text = Module.cwrap("progress_circle_set_show_text", "number", ["number", "number"]);
var progress_circle_set_counter_clock_wise = Module.cwrap("progress_circle_set_counter_clock_wise", "number", ["number", "number"]);
var progress_circle_t_get_prop_value = Module.cwrap("progress_circle_t_get_prop_value", "number", ["number"]);
var progress_circle_t_get_prop_max = Module.cwrap("progress_circle_t_get_prop_max", "number", ["number"]);
var progress_circle_t_get_prop_start_angle = Module.cwrap("progress_circle_t_get_prop_start_angle", "number", ["number"]);
var progress_circle_t_get_prop_line_width = Module.cwrap("progress_circle_t_get_prop_line_width", "number", ["number"]);
var progress_circle_t_get_prop_unit = Module.cwrap("progress_circle_t_get_prop_unit", "string", ["number"]);
var progress_circle_t_get_prop_counter_clock_wise = Module.cwrap("progress_circle_t_get_prop_counter_clock_wise", "number", ["number"]);
var progress_circle_t_get_prop_show_text = Module.cwrap("progress_circle_t_get_prop_show_text", "number", ["number"]);
var rich_text_create = Module.cwrap("rich_text_create", "number", ["number", "number", "number", "number", "number"]);
var rich_text_set_text = Module.cwrap("rich_text_set_text", "number", ["number", "string"]);
var rich_text_cast = Module.cwrap("rich_text_cast", "number", ["number"]);
var rich_text_t_get_prop_line_gap = Module.cwrap("rich_text_t_get_prop_line_gap", "number", ["number"]);
var list_item_create = Module.cwrap("list_item_create", "number", ["number", "number", "number", "number", "number"]);
var list_item_cast = Module.cwrap("list_item_cast", "number", ["number"]);
var list_view_h_create = Module.cwrap("list_view_h_create", "number", ["number", "number", "number", "number", "number"]);
var list_view_h_set_item_width = Module.cwrap("list_view_h_set_item_width", "number", ["number", "number"]);
var list_view_h_set_spacing = Module.cwrap("list_view_h_set_spacing", "number", ["number", "number"]);
var list_view_h_cast = Module.cwrap("list_view_h_cast", "number", ["number"]);
var list_view_h_t_get_prop_item_width = Module.cwrap("list_view_h_t_get_prop_item_width", "number", ["number"]);
var list_view_h_t_get_prop_spacing = Module.cwrap("list_view_h_t_get_prop_spacing", "number", ["number"]);
var list_view_create = Module.cwrap("list_view_create", "number", ["number", "number", "number", "number", "number"]);
var list_view_set_item_height = Module.cwrap("list_view_set_item_height", "number", ["number", "number"]);
var list_view_set_default_item_height = Module.cwrap("list_view_set_default_item_height", "number", ["number", "number"]);
var list_view_set_auto_hide_scroll_bar = Module.cwrap("list_view_set_auto_hide_scroll_bar", "number", ["number", "number"]);
var list_view_cast = Module.cwrap("list_view_cast", "number", ["number"]);
var list_view_t_get_prop_item_height = Module.cwrap("list_view_t_get_prop_item_height", "number", ["number"]);
var list_view_t_get_prop_default_item_height = Module.cwrap("list_view_t_get_prop_default_item_height", "number", ["number"]);
var list_view_t_get_prop_auto_hide_scroll_bar = Module.cwrap("list_view_t_get_prop_auto_hide_scroll_bar", "number", ["number"]);
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
var scroll_view_create = Module.cwrap("scroll_view_create", "number", ["number", "number", "number", "number", "number"]);
var scroll_view_cast = Module.cwrap("scroll_view_cast", "number", ["number"]);
var scroll_view_set_virtual_w = Module.cwrap("scroll_view_set_virtual_w", "number", ["number", "number"]);
var scroll_view_set_virtual_h = Module.cwrap("scroll_view_set_virtual_h", "number", ["number", "number"]);
var scroll_view_set_xslidable = Module.cwrap("scroll_view_set_xslidable", "number", ["number", "number"]);
var scroll_view_set_yslidable = Module.cwrap("scroll_view_set_yslidable", "number", ["number", "number"]);
var scroll_view_set_offset = Module.cwrap("scroll_view_set_offset", "number", ["number", "number", "number"]);
var scroll_view_scroll_to = Module.cwrap("scroll_view_scroll_to", "number", ["number", "number", "number", "number"]);
var scroll_view_t_get_prop_virtual_w = Module.cwrap("scroll_view_t_get_prop_virtual_w", "number", ["number"]);
var scroll_view_t_get_prop_virtual_h = Module.cwrap("scroll_view_t_get_prop_virtual_h", "number", ["number"]);
var scroll_view_t_get_prop_xoffset = Module.cwrap("scroll_view_t_get_prop_xoffset", "number", ["number"]);
var scroll_view_t_get_prop_yoffset = Module.cwrap("scroll_view_t_get_prop_yoffset", "number", ["number"]);
var scroll_view_t_get_prop_xslidable = Module.cwrap("scroll_view_t_get_prop_xslidable", "number", ["number"]);
var scroll_view_t_get_prop_yslidable = Module.cwrap("scroll_view_t_get_prop_yslidable", "number", ["number"]);
var slide_menu_create = Module.cwrap("slide_menu_create", "number", ["number", "number", "number", "number", "number"]);
var slide_menu_cast = Module.cwrap("slide_menu_cast", "number", ["number"]);
var slide_menu_set_value = Module.cwrap("slide_menu_set_value", "number", ["number", "number"]);
var slide_menu_set_align_v = Module.cwrap("slide_menu_set_align_v", "number", ["number", "number"]);
var slide_menu_set_min_scale = Module.cwrap("slide_menu_set_min_scale", "number", ["number", "number"]);
var slide_menu_t_get_prop_value = Module.cwrap("slide_menu_t_get_prop_value", "number", ["number"]);
var slide_menu_t_get_prop_align_v = Module.cwrap("slide_menu_t_get_prop_align_v", "number", ["number"]);
var slide_menu_t_get_prop_min_scale = Module.cwrap("slide_menu_t_get_prop_min_scale", "number", ["number"]);
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
var row_create = Module.cwrap("row_create", "number", ["number", "number", "number", "number", "number"]);
var row_cast = Module.cwrap("row_cast", "number", ["number"]);
var switch_create = Module.cwrap("switch_create", "number", ["number", "number", "number", "number", "number"]);
var switch_set_value = Module.cwrap("switch_set_value", "number", ["number", "number"]);
var switch_cast = Module.cwrap("switch_cast", "number", ["number"]);
var switch_t_get_prop_value = Module.cwrap("switch_t_get_prop_value", "number", ["number"]);
var switch_t_get_prop_max_xoffset_ratio = Module.cwrap("switch_t_get_prop_max_xoffset_ratio", "number", ["number"]);
var switch_t_get_prop_round_radius = Module.cwrap("switch_t_get_prop_round_radius", "number", ["number"]);
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
var text_selector_t_get_prop_visible_nr = Module.cwrap("text_selector_t_get_prop_visible_nr", "number", ["number"]);
var text_selector_t_get_prop_selected_index = Module.cwrap("text_selector_t_get_prop_selected_index", "number", ["number"]);
var text_selector_t_get_prop_options = Module.cwrap("text_selector_t_get_prop_options", "string", ["number"]);
var digit_clock_create = Module.cwrap("digit_clock_create", "number", ["number", "number", "number", "number", "number"]);
var digit_clock_cast = Module.cwrap("digit_clock_cast", "number", ["number"]);
var digit_clock_set_format = Module.cwrap("digit_clock_set_format", "number", ["number", "string"]);
var digit_clock_t_get_prop_format = Module.cwrap("digit_clock_t_get_prop_format", "string", ["number"]);
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
var time_clock_t_get_prop_hour = Module.cwrap("time_clock_t_get_prop_hour", "number", ["number"]);
var time_clock_t_get_prop_minute = Module.cwrap("time_clock_t_get_prop_minute", "number", ["number"]);
var time_clock_t_get_prop_second = Module.cwrap("time_clock_t_get_prop_second", "number", ["number"]);
var time_clock_t_get_prop_image = Module.cwrap("time_clock_t_get_prop_image", "string", ["number"]);
var time_clock_t_get_prop_bg_image = Module.cwrap("time_clock_t_get_prop_bg_image", "string", ["number"]);
var time_clock_t_get_prop_hour_image = Module.cwrap("time_clock_t_get_prop_hour_image", "string", ["number"]);
var time_clock_t_get_prop_minute_image = Module.cwrap("time_clock_t_get_prop_minute_image", "string", ["number"]);
var time_clock_t_get_prop_second_image = Module.cwrap("time_clock_t_get_prop_second_image", "string", ["number"]);
var window_event_cast = Module.cwrap("window_event_cast", "number", ["number"]);
var window_event_t_get_prop_window = Module.cwrap("window_event_t_get_prop_window", "number", ["number"]);
var tab_button_create = Module.cwrap("tab_button_create", "number", ["number", "number", "number", "number", "number"]);
var tab_button_cast = Module.cwrap("tab_button_cast", "number", ["number"]);
var tab_button_set_value = Module.cwrap("tab_button_set_value", "number", ["number", "number"]);
var tab_button_set_icon = Module.cwrap("tab_button_set_icon", "number", ["number", "string"]);
var tab_button_set_active_icon = Module.cwrap("tab_button_set_active_icon", "number", ["number", "string"]);
var tab_button_t_get_prop_value = Module.cwrap("tab_button_t_get_prop_value", "number", ["number"]);
var tab_button_t_get_prop_active_icon = Module.cwrap("tab_button_t_get_prop_active_icon", "string", ["number"]);
var tab_button_t_get_prop_icon = Module.cwrap("tab_button_t_get_prop_icon", "string", ["number"]);
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
var window_create = Module.cwrap("window_create", "number", ["number", "number", "number", "number", "number"]);
var window_set_fullscreen = Module.cwrap("window_set_fullscreen", "number", ["number", "number"]);
var window_open = Module.cwrap("window_open", "number", ["string"]);
var window_open_and_close = Module.cwrap("window_open_and_close", "number", ["string", "number"]);
var window_close = Module.cwrap("window_close", "number", ["number"]);
var window_close_force = Module.cwrap("window_close_force", "number", ["number"]);
var window_cast = Module.cwrap("window_cast", "number", ["number"]);
var window_t_get_prop_fullscreen = Module.cwrap("window_t_get_prop_fullscreen", "number", ["number"]);
var wheel_event_cast = Module.cwrap("wheel_event_cast", "number", ["number"]);
var wheel_event_t_get_prop_dy = Module.cwrap("wheel_event_t_get_prop_dy", "number", ["number"]);
var wheel_event_t_get_prop_alt = Module.cwrap("wheel_event_t_get_prop_alt", "number", ["number"]);
var wheel_event_t_get_prop_ctrl = Module.cwrap("wheel_event_t_get_prop_ctrl", "number", ["number"]);
var wheel_event_t_get_prop_shift = Module.cwrap("wheel_event_t_get_prop_shift", "number", ["number"]);
var pointer_event_cast = Module.cwrap("pointer_event_cast", "number", ["number"]);
var pointer_event_t_get_prop_x = Module.cwrap("pointer_event_t_get_prop_x", "number", ["number"]);
var pointer_event_t_get_prop_y = Module.cwrap("pointer_event_t_get_prop_y", "number", ["number"]);
var pointer_event_t_get_prop_button = Module.cwrap("pointer_event_t_get_prop_button", "number", ["number"]);
var pointer_event_t_get_prop_pressed = Module.cwrap("pointer_event_t_get_prop_pressed", "number", ["number"]);
var pointer_event_t_get_prop_alt = Module.cwrap("pointer_event_t_get_prop_alt", "number", ["number"]);
var pointer_event_t_get_prop_ctrl = Module.cwrap("pointer_event_t_get_prop_ctrl", "number", ["number"]);
var pointer_event_t_get_prop_shift = Module.cwrap("pointer_event_t_get_prop_shift", "number", ["number"]);
var key_event_cast = Module.cwrap("key_event_cast", "number", ["number"]);
var key_event_t_get_prop_key = Module.cwrap("key_event_t_get_prop_key", "number", ["number"]);
var key_event_t_get_prop_alt = Module.cwrap("key_event_t_get_prop_alt", "number", ["number"]);
var key_event_t_get_prop_ctrl = Module.cwrap("key_event_t_get_prop_ctrl", "number", ["number"]);
var key_event_t_get_prop_shift = Module.cwrap("key_event_t_get_prop_shift", "number", ["number"]);
var key_event_t_get_prop_capslock = Module.cwrap("key_event_t_get_prop_capslock", "number", ["number"]);
var paint_event_cast = Module.cwrap("paint_event_cast", "number", ["number"]);
var paint_event_t_get_prop_c = Module.cwrap("paint_event_t_get_prop_c", "number", ["number"]);
var prop_change_event_cast = Module.cwrap("prop_change_event_cast", "number", ["number"]);
var prop_change_event_t_get_prop_name = Module.cwrap("prop_change_event_t_get_prop_name", "string", ["number"]);
var prop_change_event_t_get_prop_value = Module.cwrap("prop_change_event_t_get_prop_value", "number", ["number"]);
var window_base_cast = Module.cwrap("window_base_cast", "number", ["number"]);
var window_base_t_get_prop_theme = Module.cwrap("window_base_t_get_prop_theme", "string", ["number"]);
var window_base_t_get_prop_closable = Module.cwrap("window_base_t_get_prop_closable", "number", ["number"]);
var window_manager = Module.cwrap("window_manager", "number", []);
var window_manager_cast = Module.cwrap("window_manager_cast", "number", ["number"]);
var window_manager_get_top_main_window = Module.cwrap("window_manager_get_top_main_window", "number", ["number"]);
var window_manager_set_show_fps = Module.cwrap("window_manager_set_show_fps", "number", ["number", "number"]);
var window_manager_set_screen_saver_time = Module.cwrap("window_manager_set_screen_saver_time", "number", ["number", "number"]);
var window_manager_set_cursor = Module.cwrap("window_manager_set_cursor", "number", ["number", "string"]);
var window_manager_back = Module.cwrap("window_manager_back", "number", ["number"]);
var window_manager_back_to_home = Module.cwrap("window_manager_back_to_home", "number", ["number"]);
var window_manager_t_get_prop_show_fps = Module.cwrap("window_manager_t_get_prop_show_fps", "number", ["number"]);
var progress_bar_create = Module.cwrap("progress_bar_create", "number", ["number", "number", "number", "number", "number"]);
var progress_bar_cast = Module.cwrap("progress_bar_cast", "number", ["number"]);
var progress_bar_set_value = Module.cwrap("progress_bar_set_value", "number", ["number", "number"]);
var progress_bar_set_vertical = Module.cwrap("progress_bar_set_vertical", "number", ["number", "number"]);
var progress_bar_set_show_text = Module.cwrap("progress_bar_set_show_text", "number", ["number", "number"]);
var progress_bar_t_get_prop_value = Module.cwrap("progress_bar_t_get_prop_value", "number", ["number"]);
var progress_bar_t_get_prop_vertical = Module.cwrap("progress_bar_t_get_prop_vertical", "number", ["number"]);
var progress_bar_t_get_prop_show_text = Module.cwrap("progress_bar_t_get_prop_show_text", "number", ["number"]);
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
var object_get_prop_float = Module.cwrap("object_get_prop_float", "number", ["number", "string", "number"]);
var object_remove_prop = Module.cwrap("object_remove_prop", "number", ["number", "string"]);
var object_set_prop = Module.cwrap("object_set_prop", "number", ["number", "string", "number"]);
var object_set_prop_str = Module.cwrap("object_set_prop_str", "number", ["number", "string", "string"]);
var object_set_prop_pointer = Module.cwrap("object_set_prop_pointer", "number", ["number", "string", "number"]);
var object_set_prop_object = Module.cwrap("object_set_prop_object", "number", ["number", "string", "number"]);
var object_set_prop_int = Module.cwrap("object_set_prop_int", "number", ["number", "string", "number"]);
var object_set_prop_float = Module.cwrap("object_set_prop_float", "number", ["number", "string", "number"]);
var object_copy_prop = Module.cwrap("object_copy_prop", "number", ["number", "number", "string"]);
var object_foreach_prop = Module.cwrap("object_foreach_prop", "number", ["number", "number", "number"]);
var object_has_prop = Module.cwrap("object_has_prop", "number", ["number", "string"]);
var object_eval = Module.cwrap("object_eval", "number", ["number", "string", "number"]);
var object_can_exec = Module.cwrap("object_can_exec", "number", ["number", "string", "string"]);
var object_exec = Module.cwrap("object_exec", "number", ["number", "string", "string"]);
var object_notify_changed = Module.cwrap("object_notify_changed", "number", ["number"]);
var object_t_get_prop_ref_count = Module.cwrap("object_t_get_prop_ref_count", "number", ["number"]);
var object_t_get_prop_name = Module.cwrap("object_t_get_prop_name", "string", ["number"]);
var style_mutable_get_name = Module.cwrap("style_mutable_get_name", "string", ["number"]);
var style_mutable_set_name = Module.cwrap("style_mutable_set_name", "number", ["number", "string"]);
var style_mutable_set_int = Module.cwrap("style_mutable_set_int", "number", ["number", "string", "string", "number"]);
var style_mutable_cast = Module.cwrap("style_mutable_cast", "number", ["number"]);
var style_mutable_create = Module.cwrap("style_mutable_create", "number", ["number"]);
var style_mutable_t_get_prop_name = Module.cwrap("style_mutable_t_get_prop_name", "string", ["number"]);
var canvas_widget_create = Module.cwrap("canvas_widget_create", "number", ["number", "number", "number", "number", "number"]);
var canvas_widget_cast = Module.cwrap("canvas_widget_cast", "number", ["number"]);
var color_picker_create = Module.cwrap("color_picker_create", "number", ["number", "number", "number", "number", "number"]);
var color_picker_set_color = Module.cwrap("color_picker_set_color", "number", ["number", "string"]);
var color_picker_cast = Module.cwrap("color_picker_cast", "number", ["number"]);
var color_picker_t_get_prop_value = Module.cwrap("color_picker_t_get_prop_value", "string", ["number"]);
var view_create = Module.cwrap("view_create", "number", ["number", "number", "number", "number", "number"]);
var view_cast = Module.cwrap("view_cast", "number", ["number"]);
var tab_button_group_create = Module.cwrap("tab_button_group_create", "number", ["number", "number", "number", "number", "number"]);
var tab_button_group_cast = Module.cwrap("tab_button_group_cast", "number", ["number"]);
var tab_button_group_t_get_prop_compact = Module.cwrap("tab_button_group_t_get_prop_compact", "number", ["number"]);
var guage_pointer_create = Module.cwrap("guage_pointer_create", "number", ["number", "number", "number", "number", "number"]);
var guage_pointer_cast = Module.cwrap("guage_pointer_cast", "number", ["number"]);
var guage_pointer_set_angle = Module.cwrap("guage_pointer_set_angle", "number", ["number", "number"]);
var guage_pointer_set_image = Module.cwrap("guage_pointer_set_image", "number", ["number", "string"]);
var guage_pointer_t_get_prop_angle = Module.cwrap("guage_pointer_t_get_prop_angle", "number", ["number"]);
var guage_pointer_t_get_prop_image = Module.cwrap("guage_pointer_t_get_prop_image", "string", ["number"]);
var guage_create = Module.cwrap("guage_create", "number", ["number", "number", "number", "number", "number"]);
var guage_cast = Module.cwrap("guage_cast", "number", ["number"]);
var guage_set_image = Module.cwrap("guage_set_image", "number", ["number", "string"]);
var guage_set_draw_type = Module.cwrap("guage_set_draw_type", "number", ["number", "number"]);
var guage_t_get_prop_image = Module.cwrap("guage_t_get_prop_image", "string", ["number"]);
var guage_t_get_prop_draw_type = Module.cwrap("guage_t_get_prop_draw_type", "number", ["number"]);
var tab_control_create = Module.cwrap("tab_control_create", "number", ["number", "number", "number", "number", "number"]);
var tab_control_cast = Module.cwrap("tab_control_cast", "number", ["number"]);
var image_value_create = Module.cwrap("image_value_create", "number", ["number", "number", "number", "number", "number"]);
var image_value_set_image = Module.cwrap("image_value_set_image", "number", ["number", "string"]);
var image_value_set_format = Module.cwrap("image_value_set_format", "number", ["number", "string"]);
var image_value_set_value = Module.cwrap("image_value_set_value", "number", ["number", "number"]);
var image_value_cast = Module.cwrap("image_value_cast", "number", ["number"]);
var image_value_t_get_prop_image = Module.cwrap("image_value_t_get_prop_image", "string", ["number"]);
var image_value_t_get_prop_format = Module.cwrap("image_value_t_get_prop_format", "string", ["number"]);
var image_value_t_get_prop_value = Module.cwrap("image_value_t_get_prop_value", "number", ["number"]);
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
var app_bar_create = Module.cwrap("app_bar_create", "number", ["number", "number", "number", "number", "number"]);
var app_bar_cast = Module.cwrap("app_bar_cast", "number", ["number"]);
var button_group_create = Module.cwrap("button_group_create", "number", ["number", "number", "number", "number", "number"]);
var button_group_cast = Module.cwrap("button_group_cast", "number", ["number"]);
var button_create = Module.cwrap("button_create", "number", ["number", "number", "number", "number", "number"]);
var button_cast = Module.cwrap("button_cast", "number", ["number"]);
var button_set_repeat = Module.cwrap("button_set_repeat", "number", ["number", "number"]);
var button_set_enable_long_press = Module.cwrap("button_set_enable_long_press", "number", ["number", "number"]);
var button_t_get_prop_repeat = Module.cwrap("button_t_get_prop_repeat", "number", ["number"]);
var button_t_get_prop_enable_long_press = Module.cwrap("button_t_get_prop_enable_long_press", "number", ["number"]);
var check_button_create = Module.cwrap("check_button_create", "number", ["number", "number", "number", "number", "number"]);
var check_button_create_radio = Module.cwrap("check_button_create_radio", "number", ["number", "number", "number", "number", "number"]);
var check_button_set_value = Module.cwrap("check_button_set_value", "number", ["number", "number"]);
var check_button_cast = Module.cwrap("check_button_cast", "number", ["number"]);
var check_button_t_get_prop_value = Module.cwrap("check_button_t_get_prop_value", "number", ["number"]);
var color_tile_create = Module.cwrap("color_tile_create", "number", ["number", "number", "number", "number", "number"]);
var color_tile_cast = Module.cwrap("color_tile_cast", "number", ["number"]);
var color_tile_set_bg_color = Module.cwrap("color_tile_set_bg_color", "number", ["number", "string"]);
var color_tile_t_get_prop_bg_color = Module.cwrap("color_tile_t_get_prop_bg_color", "string", ["number"]);
var color_tile_t_get_prop_border_color = Module.cwrap("color_tile_t_get_prop_border_color", "string", ["number"]);
var column_create = Module.cwrap("column_create", "number", ["number", "number", "number", "number", "number"]);
var column_cast = Module.cwrap("column_cast", "number", ["number"]);
var combo_box_item_create = Module.cwrap("combo_box_item_create", "number", ["number", "number", "number", "number", "number"]);
var combo_box_item_cast = Module.cwrap("combo_box_item_cast", "number", ["number"]);
var combo_box_item_set_checked = Module.cwrap("combo_box_item_set_checked", "number", ["number", "number"]);
var combo_box_item_set_value = Module.cwrap("combo_box_item_set_value", "number", ["number", "number"]);
var combo_box_item_t_get_prop_value = Module.cwrap("combo_box_item_t_get_prop_value", "number", ["number"]);
var combo_box_item_t_get_prop_checked = Module.cwrap("combo_box_item_t_get_prop_checked", "number", ["number"]);
var combo_box_create = Module.cwrap("combo_box_create", "number", ["number", "number", "number", "number", "number"]);
var combo_box_cast = Module.cwrap("combo_box_cast", "number", ["number"]);
var combo_box_set_open_window = Module.cwrap("combo_box_set_open_window", "number", ["number", "string"]);
var combo_box_reset_options = Module.cwrap("combo_box_reset_options", "number", ["number"]);
var combo_box_count_options = Module.cwrap("combo_box_count_options", "number", ["number"]);
var combo_box_set_selected_index = Module.cwrap("combo_box_set_selected_index", "number", ["number", "number"]);
var combo_box_set_value = Module.cwrap("combo_box_set_value", "number", ["number", "number"]);
var combo_box_append_option = Module.cwrap("combo_box_append_option", "number", ["number", "number", "string"]);
var combo_box_set_options = Module.cwrap("combo_box_set_options", "number", ["number", "string"]);
var combo_box_get_value = Module.cwrap("combo_box_get_value", "number", ["number"]);
var combo_box_get_text = Module.cwrap("combo_box_get_text", "string", ["number"]);
var combo_box_t_get_prop_open_window = Module.cwrap("combo_box_t_get_prop_open_window", "string", ["number"]);
var combo_box_t_get_prop_selected_index = Module.cwrap("combo_box_t_get_prop_selected_index", "number", ["number"]);
var combo_box_t_get_prop_value = Module.cwrap("combo_box_t_get_prop_value", "number", ["number"]);
var combo_box_t_get_prop_options = Module.cwrap("combo_box_t_get_prop_options", "string", ["number"]);
var dialog_client_create = Module.cwrap("dialog_client_create", "number", ["number", "number", "number", "number", "number"]);
var dialog_client_cast = Module.cwrap("dialog_client_cast", "number", ["number"]);
var dialog_title_create = Module.cwrap("dialog_title_create", "number", ["number", "number", "number", "number", "number"]);
var dialog_title_cast = Module.cwrap("dialog_title_cast", "number", ["number"]);
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
var dialog_info = Module.cwrap("dialog_info", "number", ["string"]);
var dialog_warn = Module.cwrap("dialog_warn", "number", ["string"]);
var dialog_confirm = Module.cwrap("dialog_confirm", "number", ["string"]);
var dialog_t_get_prop_highlight = Module.cwrap("dialog_t_get_prop_highlight", "string", ["number"]);
var dragger_create = Module.cwrap("dragger_create", "number", ["number", "number", "number", "number", "number"]);
var dragger_cast = Module.cwrap("dragger_cast", "number", ["number"]);
var dragger_set_range = Module.cwrap("dragger_set_range", "number", ["number", "number", "number", "number", "number"]);
var dragger_t_get_prop_x_min = Module.cwrap("dragger_t_get_prop_x_min", "number", ["number"]);
var dragger_t_get_prop_y_min = Module.cwrap("dragger_t_get_prop_y_min", "number", ["number"]);
var dragger_t_get_prop_x_max = Module.cwrap("dragger_t_get_prop_x_max", "number", ["number"]);
var dragger_t_get_prop_y_max = Module.cwrap("dragger_t_get_prop_y_max", "number", ["number"]);
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
var edit_set_auto_fix = Module.cwrap("edit_set_auto_fix", "number", ["number", "number"]);
var edit_set_input_type = Module.cwrap("edit_set_input_type", "number", ["number", "number"]);
var edit_set_input_tips = Module.cwrap("edit_set_input_tips", "number", ["number", "string"]);
var edit_set_password_visible = Module.cwrap("edit_set_password_visible", "number", ["number", "number"]);
var edit_set_focus = Module.cwrap("edit_set_focus", "number", ["number", "number"]);
var edit_t_get_prop_readonly = Module.cwrap("edit_t_get_prop_readonly", "number", ["number"]);
var edit_t_get_prop_password_visible = Module.cwrap("edit_t_get_prop_password_visible", "number", ["number"]);
var edit_t_get_prop_auto_fix = Module.cwrap("edit_t_get_prop_auto_fix", "number", ["number"]);
var edit_t_get_prop_top_margin = Module.cwrap("edit_t_get_prop_top_margin", "number", ["number"]);
var edit_t_get_prop_bottom_margin = Module.cwrap("edit_t_get_prop_bottom_margin", "number", ["number"]);
var edit_t_get_prop_left_margin = Module.cwrap("edit_t_get_prop_left_margin", "number", ["number"]);
var edit_t_get_prop_right_margin = Module.cwrap("edit_t_get_prop_right_margin", "number", ["number"]);
var edit_t_get_prop_tips = Module.cwrap("edit_t_get_prop_tips", "string", ["number"]);
var edit_t_get_prop_focus = Module.cwrap("edit_t_get_prop_focus", "number", ["number"]);
var grid_item_create = Module.cwrap("grid_item_create", "number", ["number", "number", "number", "number", "number"]);
var grid_item_cast = Module.cwrap("grid_item_cast", "number", ["number"]);
var grid_create = Module.cwrap("grid_create", "number", ["number", "number", "number", "number", "number"]);
var grid_cast = Module.cwrap("grid_cast", "number", ["number"]);
var group_box_create = Module.cwrap("group_box_create", "number", ["number", "number", "number", "number", "number"]);
var group_box_cast = Module.cwrap("group_box_cast", "number", ["number"]);
var popup_create = Module.cwrap("popup_create", "number", ["number", "number", "number", "number", "number"]);
var popup_cast = Module.cwrap("popup_cast", "number", ["number"]);
var popup_set_close_when_click = Module.cwrap("popup_set_close_when_click", "number", ["number", "number"]);
var popup_set_close_when_click_outside = Module.cwrap("popup_set_close_when_click_outside", "number", ["number", "number"]);
var popup_t_get_prop_close_when_click = Module.cwrap("popup_t_get_prop_close_when_click", "number", ["number"]);
var popup_t_get_prop_close_when_click_outside = Module.cwrap("popup_t_get_prop_close_when_click_outside", "number", ["number"]);
var label_create = Module.cwrap("label_create", "number", ["number", "number", "number", "number", "number"]);
var label_set_length = Module.cwrap("label_set_length", "number", ["number", "number"]);
var label_resize_to_content = Module.cwrap("label_resize_to_content", "number", ["number", "number", "number", "number", "number"]);
var label_cast = Module.cwrap("label_cast", "number", ["number"]);
var label_t_get_prop_length = Module.cwrap("label_t_get_prop_length", "number", ["number"]);
var pages_create = Module.cwrap("pages_create", "number", ["number", "number", "number", "number", "number"]);
var pages_cast = Module.cwrap("pages_cast", "number", ["number"]);
var pages_set_active = Module.cwrap("pages_set_active", "number", ["number", "number"]);
var pages_set_active_by_name = Module.cwrap("pages_set_active_by_name", "number", ["number", "string"]);
var pages_t_get_prop_active = Module.cwrap("pages_t_get_prop_active", "number", ["number"]);
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
var image_animation_set_format = Module.cwrap("image_animation_set_format", "number", ["number", "string"]);
var image_animation_set_unload_after_paint = Module.cwrap("image_animation_set_unload_after_paint", "number", ["number", "number"]);
var image_animation_cast = Module.cwrap("image_animation_cast", "number", ["number"]);
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
var image_create = Module.cwrap("image_create", "number", ["number", "number", "number", "number", "number"]);
var image_set_draw_type = Module.cwrap("image_set_draw_type", "number", ["number", "number"]);
var image_cast = Module.cwrap("image_cast", "number", ["number"]);
var image_t_get_prop_draw_type = Module.cwrap("image_t_get_prop_draw_type", "number", ["number"]);
var svg_image_create = Module.cwrap("svg_image_create", "number", ["number", "number", "number", "number", "number"]);
var svg_image_cast = Module.cwrap("svg_image_cast", "number", ["number"]);
var spin_box_create = Module.cwrap("spin_box_create", "number", ["number", "number", "number", "number", "number"]);
var spin_box_cast = Module.cwrap("spin_box_cast", "number", ["number"]);
var object_default_create = Module.cwrap("object_default_create", "number", []);
var object_default_unref = Module.cwrap("object_default_unref", "number", ["number"]);
var object_default_t_get_prop_props_size = Module.cwrap("object_default_t_get_prop_props_size", "number", ["number"]);
var gif_image_create = Module.cwrap("gif_image_create", "number", ["number", "number", "number", "number", "number"]);
var gif_image_cast = Module.cwrap("gif_image_cast", "number", ["number"]);
var timer_info_cast = Module.cwrap("timer_info_cast", "number", ["number"]);
var timer_info_t_get_prop_ctx = Module.cwrap("timer_info_t_get_prop_ctx", "number", ["number"]);
var timer_info_t_get_prop_id = Module.cwrap("timer_info_t_get_prop_id", "number", ["number"]);
var timer_info_t_get_prop_now = Module.cwrap("timer_info_t_get_prop_now", "number", ["number"]);
var timer_info_t_get_prop_user_changed_time = Module.cwrap("timer_info_t_get_prop_user_changed_time", "number", ["number"]);
var idle_info_cast = Module.cwrap("idle_info_cast", "number", ["number"]);
var idle_info_t_get_prop_ctx = Module.cwrap("idle_info_t_get_prop_ctx", "number", ["number"]);
var idle_info_t_get_prop_id = Module.cwrap("idle_info_t_get_prop_id", "number", ["number"]);
var system_bar_create = Module.cwrap("system_bar_create", "number", ["number", "number", "number", "number", "number"]);
var system_bar_cast = Module.cwrap("system_bar_cast", "number", ["number"]);
var TGlobal = /** @class */ (function () {
    function TGlobal(nativeObj) {
        this.nativeObj = nativeObj;
    }
    TGlobal.tkQuit = function () {
        return tk_quit();
    };
    return TGlobal;
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
var TAssetsManager = /** @class */ (function () {
    function TAssetsManager(nativeObj) {
        this.nativeObj = nativeObj;
    }
    TAssetsManager.instance = function () {
        return new TAssetsManager(assets_manager());
    };
    TAssetsManager.prototype.ref = function (type, name) {
        return new TAssetInfo(assets_manager_ref(this.nativeObj, type, name));
    };
    TAssetsManager.prototype.unref = function (info) {
        return assets_manager_unref(this.nativeObj, info ? info.nativeObj : null);
    };
    return TAssetsManager;
}());
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
})(TBitmapFormat || (TBitmapFormat = {}));
;
var TBitmapFlag;
(function (TBitmapFlag) {
    TBitmapFlag[TBitmapFlag["NONE"] = get_BITMAP_FLAG_NONE()] = "NONE";
    TBitmapFlag[TBitmapFlag["OPAQUE"] = get_BITMAP_FLAG_OPAQUE()] = "OPAQUE";
    TBitmapFlag[TBitmapFlag["IMMUTABLE"] = get_BITMAP_FLAG_IMMUTABLE()] = "IMMUTABLE";
    TBitmapFlag[TBitmapFlag["TEXTURE"] = get_BITMAP_FLAG_TEXTURE()] = "TEXTURE";
    TBitmapFlag[TBitmapFlag["CHANGED"] = get_BITMAP_FLAG_CHANGED()] = "CHANGED";
})(TBitmapFlag || (TBitmapFlag = {}));
;
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
    TImageDrawType[TImageDrawType["PATCH9"] = get_IMAGE_DRAW_PATCH9()] = "PATCH9";
    TImageDrawType[TImageDrawType["PATCH3_X"] = get_IMAGE_DRAW_PATCH3_X()] = "PATCH3_X";
    TImageDrawType[TImageDrawType["PATCH3_Y"] = get_IMAGE_DRAW_PATCH3_Y()] = "PATCH3_Y";
    TImageDrawType[TImageDrawType["PATCH3_X_SCALE_Y"] = get_IMAGE_DRAW_PATCH3_X_SCALE_Y()] = "PATCH3_X_SCALE_Y";
    TImageDrawType[TImageDrawType["PATCH3_Y_SCALE_X"] = get_IMAGE_DRAW_PATCH3_Y_SCALE_X()] = "PATCH3_Y_SCALE_X";
})(TImageDrawType || (TImageDrawType = {}));
;
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
    TCanvas.prototype.getVgcanvas = function () {
        return new TVgcanvas(canvas_get_vgcanvas(this.nativeObj));
    };
    TCanvas.cast = function (c) {
        return new TCanvas(canvas_cast(c ? (c.nativeObj || c) : null));
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
    return TCanvas;
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
var TEventType;
(function (TEventType) {
    TEventType[TEventType["POINTER_DOWN"] = get_EVT_POINTER_DOWN()] = "POINTER_DOWN";
    TEventType[TEventType["POINTER_DOWN_ABORT"] = get_EVT_POINTER_DOWN_ABORT()] = "POINTER_DOWN_ABORT";
    TEventType[TEventType["POINTER_MOVE"] = get_EVT_POINTER_MOVE()] = "POINTER_MOVE";
    TEventType[TEventType["POINTER_UP"] = get_EVT_POINTER_UP()] = "POINTER_UP";
    TEventType[TEventType["WHEEL"] = get_EVT_WHEEL()] = "WHEEL";
    TEventType[TEventType["CONTEXT_MENU"] = get_EVT_CONTEXT_MENU()] = "CONTEXT_MENU";
    TEventType[TEventType["POINTER_ENTER"] = get_EVT_POINTER_ENTER()] = "POINTER_ENTER";
    TEventType[TEventType["POINTER_LEAVE"] = get_EVT_POINTER_LEAVE()] = "POINTER_LEAVE";
    TEventType[TEventType["LONG_PRESS"] = get_EVT_LONG_PRESS()] = "LONG_PRESS";
    TEventType[TEventType["CLICK"] = get_EVT_CLICK()] = "CLICK";
    TEventType[TEventType["FOCUS"] = get_EVT_FOCUS()] = "FOCUS";
    TEventType[TEventType["BLUR"] = get_EVT_BLUR()] = "BLUR";
    TEventType[TEventType["KEY_DOWN"] = get_EVT_KEY_DOWN()] = "KEY_DOWN";
    TEventType[TEventType["KEY_REPEAT"] = get_EVT_KEY_REPEAT()] = "KEY_REPEAT";
    TEventType[TEventType["KEY_UP"] = get_EVT_KEY_UP()] = "KEY_UP";
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
    TEventType[TEventType["WINDOW_WILL_OPEN"] = get_EVT_WINDOW_WILL_OPEN()] = "WINDOW_WILL_OPEN";
    TEventType[TEventType["WINDOW_OPEN"] = get_EVT_WINDOW_OPEN()] = "WINDOW_OPEN";
    TEventType[TEventType["WINDOW_CLOSE"] = get_EVT_WINDOW_CLOSE()] = "WINDOW_CLOSE";
    TEventType[TEventType["REQUEST_CLOSE_WINDOW"] = get_EVT_REQUEST_CLOSE_WINDOW()] = "REQUEST_CLOSE_WINDOW";
    TEventType[TEventType["TOP_WINDOW_CHANGED"] = get_EVT_TOP_WINDOW_CHANGED()] = "TOP_WINDOW_CHANGED";
    TEventType[TEventType["IM_COMMIT"] = get_EVT_IM_COMMIT()] = "IM_COMMIT";
    TEventType[TEventType["IM_SHOW_CANDIDATES"] = get_EVT_IM_SHOW_CANDIDATES()] = "IM_SHOW_CANDIDATES";
    TEventType[TEventType["IM_ACTION"] = get_EVT_IM_ACTION()] = "IM_ACTION";
    TEventType[TEventType["IM_ACTION_INFO"] = get_EVT_IM_ACTION_INFO()] = "IM_ACTION_INFO";
    TEventType[TEventType["DRAG_START"] = get_EVT_DRAG_START()] = "DRAG_START";
    TEventType[TEventType["DRAG"] = get_EVT_DRAG()] = "DRAG";
    TEventType[TEventType["DRAG_END"] = get_EVT_DRAG_END()] = "DRAG_END";
    TEventType[TEventType["SCREEN_SAVER"] = get_EVT_SCREEN_SAVER()] = "SCREEN_SAVER";
    TEventType[TEventType["REQ_START"] = get_EVT_REQ_START()] = "REQ_START";
    TEventType[TEventType["USER_START"] = get_EVT_USER_START()] = "USER_START";
})(TEventType || (TEventType = {}));
;
var TFontManager = /** @class */ (function () {
    function TFontManager(nativeObj) {
        this.nativeObj = nativeObj;
    }
    TFontManager.prototype.unloadFont = function (name, size) {
        return font_manager_unload_font(this.nativeObj, name, size);
    };
    return TFontManager;
}());
var TIdle = /** @class */ (function () {
    function TIdle(nativeObj) {
        this.nativeObj = nativeObj;
    }
    TIdle.add = function (on_idle, ctx) {
        return idle_add(Module.addFunction(on_idle), ctx);
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
    TInputType[TInputType["CUSTOM"] = get_INPUT_CUSTOM()] = "CUSTOM";
})(TInputType || (TInputType = {}));
;
var TInputMethod = /** @class */ (function () {
    function TInputMethod(nativeObj) {
        this.nativeObj = nativeObj;
    }
    TInputMethod.prototype.commitText = function (text) {
        return input_method_commit_text(this.nativeObj, text);
    };
    TInputMethod.prototype.dispatchKey = function (key) {
        return input_method_dispatch_key(this.nativeObj, key);
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
    TLocaleInfo.prototype.on = function (type, on_event, ctx) {
        return locale_info_on(this.nativeObj, type, Module.addFunction(wrap_on_event(on_event)), ctx);
    };
    TLocaleInfo.prototype.off = function (id) {
        return locale_info_off(this.nativeObj, id);
    };
    return TLocaleInfo;
}());
var TStyleId;
(function (TStyleId) {
    TStyleId[TStyleId["_ID_BG_COLOR"] = get_STYLE_ID_BG_COLOR()] = "_ID_BG_COLOR";
    TStyleId[TStyleId["_ID_FG_COLOR"] = get_STYLE_ID_FG_COLOR()] = "_ID_FG_COLOR";
    TStyleId[TStyleId["_ID_MASK_COLOR"] = get_STYLE_ID_MASK_COLOR()] = "_ID_MASK_COLOR";
    TStyleId[TStyleId["_ID_FONT_NAME"] = get_STYLE_ID_FONT_NAME()] = "_ID_FONT_NAME";
    TStyleId[TStyleId["_ID_FONT_SIZE"] = get_STYLE_ID_FONT_SIZE()] = "_ID_FONT_SIZE";
    TStyleId[TStyleId["_ID_FONT_STYLE"] = get_STYLE_ID_FONT_STYLE()] = "_ID_FONT_STYLE";
    TStyleId[TStyleId["_ID_TEXT_COLOR"] = get_STYLE_ID_TEXT_COLOR()] = "_ID_TEXT_COLOR";
    TStyleId[TStyleId["_ID_TIPS_TEXT_COLOR"] = get_STYLE_ID_TIPS_TEXT_COLOR()] = "_ID_TIPS_TEXT_COLOR";
    TStyleId[TStyleId["_ID_TEXT_ALIGN_H"] = get_STYLE_ID_TEXT_ALIGN_H()] = "_ID_TEXT_ALIGN_H";
    TStyleId[TStyleId["_ID_TEXT_ALIGN_V"] = get_STYLE_ID_TEXT_ALIGN_V()] = "_ID_TEXT_ALIGN_V";
    TStyleId[TStyleId["_ID_BORDER_COLOR"] = get_STYLE_ID_BORDER_COLOR()] = "_ID_BORDER_COLOR";
    TStyleId[TStyleId["_ID_BORDER"] = get_STYLE_ID_BORDER()] = "_ID_BORDER";
    TStyleId[TStyleId["_ID_BG_IMAGE"] = get_STYLE_ID_BG_IMAGE()] = "_ID_BG_IMAGE";
    TStyleId[TStyleId["_ID_BG_IMAGE_DRAW_TYPE"] = get_STYLE_ID_BG_IMAGE_DRAW_TYPE()] = "_ID_BG_IMAGE_DRAW_TYPE";
    TStyleId[TStyleId["_ID_ICON"] = get_STYLE_ID_ICON()] = "_ID_ICON";
    TStyleId[TStyleId["_ID_FG_IMAGE"] = get_STYLE_ID_FG_IMAGE()] = "_ID_FG_IMAGE";
    TStyleId[TStyleId["_ID_FG_IMAGE_DRAW_TYPE"] = get_STYLE_ID_FG_IMAGE_DRAW_TYPE()] = "_ID_FG_IMAGE_DRAW_TYPE";
    TStyleId[TStyleId["_ID_MARGIN"] = get_STYLE_ID_MARGIN()] = "_ID_MARGIN";
    TStyleId[TStyleId["_ID_ICON_AT"] = get_STYLE_ID_ICON_AT()] = "_ID_ICON_AT";
    TStyleId[TStyleId["_ID_ACTIVE_ICON"] = get_STYLE_ID_ACTIVE_ICON()] = "_ID_ACTIVE_ICON";
    TStyleId[TStyleId["_ID_X_OFFSET"] = get_STYLE_ID_X_OFFSET()] = "_ID_X_OFFSET";
    TStyleId[TStyleId["_ID_Y_OFFSET"] = get_STYLE_ID_Y_OFFSET()] = "_ID_Y_OFFSET";
    TStyleId[TStyleId["_ID_SELECTED_BG_COLOR"] = get_STYLE_ID_SELECTED_BG_COLOR()] = "_ID_SELECTED_BG_COLOR";
    TStyleId[TStyleId["_ID_SELECTED_FG_COLOR"] = get_STYLE_ID_SELECTED_FG_COLOR()] = "_ID_SELECTED_FG_COLOR";
    TStyleId[TStyleId["_ID_SELECTED_TEXT_COLOR"] = get_STYLE_ID_SELECTED_TEXT_COLOR()] = "_ID_SELECTED_TEXT_COLOR";
    TStyleId[TStyleId["_ID_ROUND_RADIUS"] = get_STYLE_ID_ROUND_RADIUS()] = "_ID_ROUND_RADIUS";
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
        return timer_add(Module.addFunction(on_timer), ctx, duration);
    };
    TTimer.remove = function (timer_id) {
        return timer_remove(timer_id);
    };
    TTimer.reset = function (timer_id) {
        return timer_reset(timer_id);
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
var TWidgetProp;
(function (TWidgetProp) {
    TWidgetProp[TWidgetProp["X"] = get_WIDGET_PROP_X()] = "X";
    TWidgetProp[TWidgetProp["Y"] = get_WIDGET_PROP_Y()] = "Y";
    TWidgetProp[TWidgetProp["W"] = get_WIDGET_PROP_W()] = "W";
    TWidgetProp[TWidgetProp["H"] = get_WIDGET_PROP_H()] = "H";
    TWidgetProp[TWidgetProp["HIGHLIGHT"] = get_WIDGET_PROP_HIGHLIGHT()] = "HIGHLIGHT";
    TWidgetProp[TWidgetProp["BAR_SIZE"] = get_WIDGET_PROP_BAR_SIZE()] = "BAR_SIZE";
    TWidgetProp[TWidgetProp["OPACITY"] = get_WIDGET_PROP_OPACITY()] = "OPACITY";
    TWidgetProp[TWidgetProp["MIN_W"] = get_WIDGET_PROP_MIN_W()] = "MIN_W";
    TWidgetProp[TWidgetProp["MAX_W"] = get_WIDGET_PROP_MAX_W()] = "MAX_W";
    TWidgetProp[TWidgetProp["CHILDREN_LAYOUT"] = get_WIDGET_PROP_CHILDREN_LAYOUT()] = "CHILDREN_LAYOUT";
    TWidgetProp[TWidgetProp["LAYOUT"] = get_WIDGET_PROP_LAYOUT()] = "LAYOUT";
    TWidgetProp[TWidgetProp["SELF_LAYOUT"] = get_WIDGET_PROP_SELF_LAYOUT()] = "SELF_LAYOUT";
    TWidgetProp[TWidgetProp["LAYOUT_W"] = get_WIDGET_PROP_LAYOUT_W()] = "LAYOUT_W";
    TWidgetProp[TWidgetProp["LAYOUT_H"] = get_WIDGET_PROP_LAYOUT_H()] = "LAYOUT_H";
    TWidgetProp[TWidgetProp["VIRTUAL_W"] = get_WIDGET_PROP_VIRTUAL_W()] = "VIRTUAL_W";
    TWidgetProp[TWidgetProp["VIRTUAL_H"] = get_WIDGET_PROP_VIRTUAL_H()] = "VIRTUAL_H";
    TWidgetProp[TWidgetProp["NAME"] = get_WIDGET_PROP_NAME()] = "NAME";
    TWidgetProp[TWidgetProp["CLOSABLE"] = get_WIDGET_PROP_CLOSABLE()] = "CLOSABLE";
    TWidgetProp[TWidgetProp["CURSOR"] = get_WIDGET_PROP_CURSOR()] = "CURSOR";
    TWidgetProp[TWidgetProp["VALUE"] = get_WIDGET_PROP_VALUE()] = "VALUE";
    TWidgetProp[TWidgetProp["LENGTH"] = get_WIDGET_PROP_LENGTH()] = "LENGTH";
    TWidgetProp[TWidgetProp["TEXT"] = get_WIDGET_PROP_TEXT()] = "TEXT";
    TWidgetProp[TWidgetProp["TR_TEXT"] = get_WIDGET_PROP_TR_TEXT()] = "TR_TEXT";
    TWidgetProp[TWidgetProp["STYLE"] = get_WIDGET_PROP_STYLE()] = "STYLE";
    TWidgetProp[TWidgetProp["ENABLE"] = get_WIDGET_PROP_ENABLE()] = "ENABLE";
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
    TWidgetProp[TWidgetProp["OPEN_ANIM_HINT"] = get_WIDGET_PROP_OPEN_ANIM_HINT()] = "OPEN_ANIM_HINT";
    TWidgetProp[TWidgetProp["CLOSE_ANIM_HINT"] = get_WIDGET_PROP_CLOSE_ANIM_HINT()] = "CLOSE_ANIM_HINT";
    TWidgetProp[TWidgetProp["MIN"] = get_WIDGET_PROP_MIN()] = "MIN";
    TWidgetProp[TWidgetProp["TIPS"] = get_WIDGET_PROP_TIPS()] = "TIPS";
    TWidgetProp[TWidgetProp["INPUT_TYPE"] = get_WIDGET_PROP_INPUT_TYPE()] = "INPUT_TYPE";
    TWidgetProp[TWidgetProp["READONLY"] = get_WIDGET_PROP_READONLY()] = "READONLY";
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
    TWidgetProp[TWidgetProp["X_MIN"] = get_WIDGET_PROP_X_MIN()] = "X_MIN";
    TWidgetProp[TWidgetProp["X_MAX"] = get_WIDGET_PROP_X_MAX()] = "X_MAX";
    TWidgetProp[TWidgetProp["Y_MIN"] = get_WIDGET_PROP_Y_MIN()] = "Y_MIN";
    TWidgetProp[TWidgetProp["Y_MAX"] = get_WIDGET_PROP_Y_MAX()] = "Y_MAX";
    TWidgetProp[TWidgetProp["MAX"] = get_WIDGET_PROP_MAX()] = "MAX";
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
    TWidgetProp[TWidgetProp["ENABLE_LONG_PRESS"] = get_WIDGET_PROP_ENABLE_LONG_PRESS()] = "ENABLE_LONG_PRESS";
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
    TWidgetProp[TWidgetProp["ICON"] = get_WIDGET_PROP_ICON()] = "ICON";
    TWidgetProp[TWidgetProp["OPTIONS"] = get_WIDGET_PROP_OPTIONS()] = "OPTIONS";
    TWidgetProp[TWidgetProp["SELECTED"] = get_WIDGET_PROP_SELECTED()] = "SELECTED";
    TWidgetProp[TWidgetProp["CHECKED"] = get_WIDGET_PROP_CHECKED()] = "CHECKED";
    TWidgetProp[TWidgetProp["ACTIVE_ICON"] = get_WIDGET_PROP_ACTIVE_ICON()] = "ACTIVE_ICON";
    TWidgetProp[TWidgetProp["OPEN_WINDOW"] = get_WIDGET_PROP_OPEN_WINDOW()] = "OPEN_WINDOW";
    TWidgetProp[TWidgetProp["SELECTED_INDEX"] = get_WIDGET_PROP_SELECTED_INDEX()] = "SELECTED_INDEX";
    TWidgetProp[TWidgetProp["CLOSE_WHEN_CLICK"] = get_WIDGET_PROP_CLOSE_WHEN_CLICK()] = "CLOSE_WHEN_CLICK";
    TWidgetProp[TWidgetProp["CLOSE_WHEN_CLICK_OUTSIDE"] = get_WIDGET_PROP_CLOSE_WHEN_CLICK_OUTSIDE()] = "CLOSE_WHEN_CLICK_OUTSIDE";
    TWidgetProp[TWidgetProp["LINE_GAP"] = get_WIDGET_PROP_LINE_GAP()] = "LINE_GAP";
    TWidgetProp[TWidgetProp["BG_COLOR"] = get_WIDGET_PROP_BG_COLOR()] = "BG_COLOR";
    TWidgetProp[TWidgetProp["BORDER_COLOR"] = get_WIDGET_PROP_BORDER_COLOR()] = "BORDER_COLOR";
    TWidgetProp[TWidgetProp["DELAY"] = get_WIDGET_PROP_DELAY()] = "DELAY";
    TWidgetProp[TWidgetProp["IS_KEYBOARD"] = get_WIDGET_PROP_IS_KEYBOARD()] = "IS_KEYBOARD";
    TWidgetProp[TWidgetProp["FOCUS"] = get_WIDGET_PROP_FOCUS()] = "FOCUS";
    TWidgetProp[TWidgetProp["FOCUSABLE"] = get_WIDGET_PROP_FOCUSABLE()] = "FOCUSABLE";
})(TWidgetProp || (TWidgetProp = {}));
;
var TWidgetType;
(function (TWidgetType) {
    TWidgetType[TWidgetType["NONE"] = get_WIDGET_TYPE_NONE()] = "NONE";
    TWidgetType[TWidgetType["WINDOW_MANAGER"] = get_WIDGET_TYPE_WINDOW_MANAGER()] = "WINDOW_MANAGER";
    TWidgetType[TWidgetType["NORMAL_WINDOW"] = get_WIDGET_TYPE_NORMAL_WINDOW()] = "NORMAL_WINDOW";
    TWidgetType[TWidgetType["TOOL_BAR"] = get_WIDGET_TYPE_TOOL_BAR()] = "TOOL_BAR";
    TWidgetType[TWidgetType["DIALOG"] = get_WIDGET_TYPE_DIALOG()] = "DIALOG";
    TWidgetType[TWidgetType["POPUP"] = get_WIDGET_TYPE_POPUP()] = "POPUP";
    TWidgetType[TWidgetType["SYSTEM_BAR"] = get_WIDGET_TYPE_SYSTEM_BAR()] = "SYSTEM_BAR";
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
    TWidgetState[TWidgetState["STATE_NONE"] = get_WIDGET_STATE_NONE()] = "STATE_NONE";
    TWidgetState[TWidgetState["STATE_NORMAL"] = get_WIDGET_STATE_NORMAL()] = "STATE_NORMAL";
    TWidgetState[TWidgetState["STATE_PRESSED"] = get_WIDGET_STATE_PRESSED()] = "STATE_PRESSED";
    TWidgetState[TWidgetState["STATE_OVER"] = get_WIDGET_STATE_OVER()] = "STATE_OVER";
    TWidgetState[TWidgetState["STATE_DISABLE"] = get_WIDGET_STATE_DISABLE()] = "STATE_DISABLE";
    TWidgetState[TWidgetState["STATE_FOCUSED"] = get_WIDGET_STATE_FOCUSED()] = "STATE_FOCUSED";
    TWidgetState[TWidgetState["STATE_CHECKED"] = get_WIDGET_STATE_CHECKED()] = "STATE_CHECKED";
    TWidgetState[TWidgetState["STATE_UNCHECKED"] = get_WIDGET_STATE_UNCHECKED()] = "STATE_UNCHECKED";
    TWidgetState[TWidgetState["STATE_EMPTY"] = get_WIDGET_STATE_EMPTY()] = "STATE_EMPTY";
    TWidgetState[TWidgetState["STATE_ERROR"] = get_WIDGET_STATE_ERROR()] = "STATE_ERROR";
    TWidgetState[TWidgetState["STATE_SELECTED"] = get_WIDGET_STATE_SELECTED()] = "STATE_SELECTED";
    TWidgetState[TWidgetState["STATE_NORMAL_OF_CHECKED"] = get_WIDGET_STATE_NORMAL_OF_CHECKED()] = "STATE_NORMAL_OF_CHECKED";
    TWidgetState[TWidgetState["STATE_PRESSED_OF_CHECKED"] = get_WIDGET_STATE_PRESSED_OF_CHECKED()] = "STATE_PRESSED_OF_CHECKED";
    TWidgetState[TWidgetState["STATE_OVER_OF_CHECKED"] = get_WIDGET_STATE_OVER_OF_CHECKED()] = "STATE_OVER_OF_CHECKED";
    TWidgetState[TWidgetState["STATE_NORMAL_OF_ACTIVE"] = get_WIDGET_STATE_NORMAL_OF_ACTIVE()] = "STATE_NORMAL_OF_ACTIVE";
    TWidgetState[TWidgetState["STATE_PRESSED_OF_ACTIVE"] = get_WIDGET_STATE_PRESSED_OF_ACTIVE()] = "STATE_PRESSED_OF_ACTIVE";
    TWidgetState[TWidgetState["STATE_OVER_OF_ACTIVE"] = get_WIDGET_STATE_OVER_OF_ACTIVE()] = "STATE_OVER_OF_ACTIVE";
})(TWidgetState || (TWidgetState = {}));
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
    TWidget.prototype.indexOf = function () {
        return widget_index_of(this.nativeObj);
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
    TWidget.prototype.setCursor = function (cursor) {
        return widget_set_cursor(this.nativeObj, cursor);
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
    TWidget.prototype.setFloating = function (floating) {
        return widget_set_floating(this.nativeObj, floating);
    };
    TWidget.prototype.setFocused = function (focused) {
        return widget_set_focused(this.nativeObj, focused);
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
    TWidget.prototype.setVisible = function (visible, recursive) {
        return widget_set_visible(this.nativeObj, visible, recursive);
    };
    TWidget.prototype.setSensitive = function (sensitive) {
        return widget_set_sensitive(this.nativeObj, sensitive);
    };
    TWidget.prototype.on = function (type, on_event, ctx) {
        return widget_on(this.nativeObj, type, Module.addFunction(wrap_on_event(on_event)), ctx);
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
    TWidget.prototype.isWindow = function () {
        return widget_is_window(this.nativeObj);
    };
    TWidget.prototype.isDesigningWindow = function () {
        return widget_is_designing_window(this.nativeObj);
    };
    TWidget.prototype.isWindowManager = function () {
        return widget_is_window_manager(this.nativeObj);
    };
    TWidget.prototype.foreach = function (visit, ctx) {
        return widget_foreach(this.nativeObj, visit, ctx);
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
    Object.defineProperty(TWidget.prototype, "visible", {
        get: function () {
            return widget_t_get_prop_visible(this.nativeObj);
        },
        set: function (value) {
            widget_t_set_prop_visible(this.nativeObj, value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TWidget.prototype, "sensitive", {
        get: function () {
            return widget_t_get_prop_sensitive(this.nativeObj);
        },
        set: function (value) {
            widget_t_set_prop_sensitive(this.nativeObj, value);
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
    return TWidget;
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
var TDateTime = /** @class */ (function () {
    function TDateTime(nativeObj) {
        this.nativeObj = nativeObj;
    }
    TDateTime.create = function () {
        return new TDateTime(date_time_create());
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
        return emitter_on(this.nativeObj, type, Module.addFunction(wrap_on_event(on_event)), ctx);
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
var TEventBaseType;
(function (TEventBaseType) {
    TEventBaseType[TEventBaseType["NONE"] = get_EVT_NONE()] = "NONE";
    TEventBaseType[TEventBaseType["PROP_WILL_CHANGE"] = get_EVT_PROP_WILL_CHANGE()] = "PROP_WILL_CHANGE";
    TEventBaseType[TEventBaseType["PROP_CHANGED"] = get_EVT_PROP_CHANGED()] = "PROP_CHANGED";
    TEventBaseType[TEventBaseType["ITEMS_WILL_CHANGE"] = get_EVT_ITEMS_WILL_CHANGE()] = "ITEMS_WILL_CHANGE";
    TEventBaseType[TEventBaseType["ITEMS_CHANGED"] = get_EVT_ITEMS_CHANGED()] = "ITEMS_CHANGED";
    TEventBaseType[TEventBaseType["PROPS_CHANGED"] = get_EVT_PROPS_CHANGED()] = "PROPS_CHANGED";
    TEventBaseType[TEventBaseType["DESTROY"] = get_EVT_DESTROY()] = "DESTROY";
})(TEventBaseType || (TEventBaseType = {}));
;
var TEvent = /** @class */ (function () {
    function TEvent(nativeObj) {
        this.nativeObj = nativeObj;
    }
    TEvent.cast = function (event) {
        return new TEvent(event_cast(event ? (event.nativeObj || event) : null));
    };
    TEvent.create = function (type, target) {
        return new TEvent(event_create(type, target));
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
var TPoint = /** @class */ (function () {
    function TPoint(nativeObj) {
        this.nativeObj = nativeObj;
    }
    return TPoint;
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
    TRet[TRet["CONTINUE"] = get_RET_CONTINUE()] = "CONTINUE";
    TRet[TRet["OBJECT_CHANGED"] = get_RET_OBJECT_CHANGED()] = "OBJECT_CHANGED";
    TRet[TRet["ITEMS_CHANGED"] = get_RET_ITEMS_CHANGED()] = "ITEMS_CHANGED";
    TRet[TRet["BAD_PARAMS"] = get_RET_BAD_PARAMS()] = "BAD_PARAMS";
})(TRet || (TRet = {}));
;
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
})(TValueType || (TValueType = {}));
;
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
    TValue.prototype.float = function () {
        return value_float(this.nativeObj);
    };
    TValue.prototype.setFloat32 = function (value) {
        return new TValue(value_set_float32(this.nativeObj, value));
    };
    TValue.prototype.float32 = function () {
        return value_float32(this.nativeObj);
    };
    TValue.prototype.setDouble = function (value) {
        return new TValue(value_set_double(this.nativeObj, value));
    };
    TValue.prototype.double = function () {
        return value_double(this.nativeObj);
    };
    TValue.prototype.setStr = function (value) {
        return new TValue(value_dup_str(this.nativeObj, value));
    };
    TValue.prototype.str = function () {
        return value_str(this.nativeObj);
    };
    TValue.prototype.wstr = function () {
        return value_wstr(this.nativeObj);
    };
    TValue.prototype.isNull = function () {
        return value_is_null(this.nativeObj);
    };
    TValue.prototype.int = function () {
        return value_int(this.nativeObj);
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
    return TRichText;
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
    TScrollView.prototype.scrollTo = function (xoffset_end, yoffset_end, duration) {
        return scroll_view_scroll_to(this.nativeObj, xoffset_end, yoffset_end, duration);
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
    Object.defineProperty(TSwitch.prototype, "roundRadius", {
        get: function () {
            return switch_t_get_prop_round_radius(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TSwitch;
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
    TTextSelector.prototype.getText = function () {
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
    return TTextSelector;
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
    return TTimeClock;
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
    Object.defineProperty(TTabButton.prototype, "value", {
        get: function () {
            return tab_button_t_get_prop_value(this.nativeObj);
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
var TWindow = /** @class */ (function (_super) {
    __extends(TWindow, _super);
    function TWindow(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TWindow.create = function (parent, x, y, w, h) {
        return new TWindow(window_create(parent ? parent.nativeObj : null, x, y, w, h));
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
    Object.defineProperty(TPointerEvent.prototype, "shift", {
        get: function () {
            return pointer_event_t_get_prop_shift(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TPointerEvent;
}(TEvent));
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
    Object.defineProperty(TKeyEvent.prototype, "ctrl", {
        get: function () {
            return key_event_t_get_prop_ctrl(this.nativeObj);
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
    Object.defineProperty(TWindowBase.prototype, "closable", {
        get: function () {
            return window_base_t_get_prop_closable(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TWindowBase;
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
    Object.defineProperty(TWindowManager.prototype, "showFps", {
        get: function () {
            return window_manager_t_get_prop_show_fps(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TWindowManager;
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
    TProgressBar.prototype.setVertical = function (vertical) {
        return progress_bar_set_vertical(this.nativeObj, vertical);
    };
    TProgressBar.prototype.setShowText = function (show_text) {
        return progress_bar_set_show_text(this.nativeObj, show_text);
    };
    Object.defineProperty(TProgressBar.prototype, "value", {
        get: function () {
            return progress_bar_t_get_prop_value(this.nativeObj);
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
    TObject.prototype.setPropPointer = function (name, value) {
        return object_set_prop_pointer(this.nativeObj, name, value);
    };
    TObject.prototype.setPropObject = function (name, value) {
        return object_set_prop_object(this.nativeObj, name, value ? value.nativeObj : null);
    };
    TObject.prototype.setPropInt = function (name, value) {
        return object_set_prop_int(this.nativeObj, name, value);
    };
    TObject.prototype.setPropFloat = function (name, value) {
        return object_set_prop_float(this.nativeObj, name, value);
    };
    TObject.prototype.copyProp = function (src, name) {
        return object_copy_prop(this.nativeObj, src ? src.nativeObj : null, name);
    };
    TObject.prototype.foreachProp = function (on_prop, ctx) {
        return object_foreach_prop(this.nativeObj, on_prop, ctx);
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
    TObject.prototype.exec = function (name, args) {
        return object_exec(this.nativeObj, name, args);
    };
    TObject.prototype.notifyChanged = function () {
        return object_notify_changed(this.nativeObj);
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
var TStyleMutable = /** @class */ (function (_super) {
    __extends(TStyleMutable, _super);
    function TStyleMutable(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TStyleMutable.prototype.getName = function () {
        return style_mutable_get_name(this.nativeObj);
    };
    TStyleMutable.prototype.setName = function (name) {
        return style_mutable_set_name(this.nativeObj, name);
    };
    TStyleMutable.prototype.setInt = function (state, name, val) {
        return style_mutable_set_int(this.nativeObj, state, name, val);
    };
    TStyleMutable.cast = function (s) {
        return new TStyleMutable(style_mutable_cast(s ? (s.nativeObj || s) : null));
    };
    TStyleMutable.create = function (widget) {
        return new TStyleMutable(style_mutable_create(widget ? widget.nativeObj : null));
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
var TView = /** @class */ (function (_super) {
    __extends(TView, _super);
    function TView(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TView.create = function (parent, x, y, w, h) {
        return new TView(view_create(parent ? parent.nativeObj : null, x, y, w, h));
    };
    TView.cast = function (widget) {
        return new TView(view_cast(widget ? (widget.nativeObj || widget) : null));
    };
    return TView;
}(TWidget));
var TTabButtonGroup = /** @class */ (function (_super) {
    __extends(TTabButtonGroup, _super);
    function TTabButtonGroup(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TTabButtonGroup.create = function (parent, x, y, w, h) {
        return new TTabButtonGroup(tab_button_group_create(parent ? parent.nativeObj : null, x, y, w, h));
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
    return TTabButtonGroup;
}(TWidget));
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
    return TGuagePointer;
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
    TImageValue.prototype.setValue = function (value) {
        return image_value_set_value(this.nativeObj, value);
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
    Object.defineProperty(TImageValue.prototype, "value", {
        get: function () {
            return image_value_t_get_prop_value(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TImageValue;
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
    return TSlider;
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
    return TButton;
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
    TComboBox.prototype.setValue = function (value) {
        return combo_box_set_value(this.nativeObj, value);
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
    TComboBox.prototype.getText = function () {
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
    Object.defineProperty(TComboBox.prototype, "options", {
        get: function () {
            return combo_box_t_get_prop_options(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TComboBox;
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
    TDialog.info = function (text) {
        return dialog_info(text);
    };
    TDialog.warn = function (text) {
        return dialog_warn(text);
    };
    TDialog.confirm = function (text) {
        return dialog_confirm(text);
    };
    Object.defineProperty(TDialog.prototype, "highlight", {
        get: function () {
            return dialog_t_get_prop_highlight(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TDialog;
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
        return new TWidget(dragger_set_range(this.nativeObj, x_min, y_min, x_max, y_max));
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
    TEdit.prototype.setAutoFix = function (auto_fix) {
        return edit_set_auto_fix(this.nativeObj, auto_fix);
    };
    TEdit.prototype.setInputType = function (type) {
        return edit_set_input_type(this.nativeObj, type);
    };
    TEdit.prototype.setInputTips = function (tips) {
        return edit_set_input_tips(this.nativeObj, tips);
    };
    TEdit.prototype.setPasswordVisible = function (password_visible) {
        return edit_set_password_visible(this.nativeObj, password_visible);
    };
    TEdit.prototype.setFocus = function (focus) {
        return edit_set_focus(this.nativeObj, focus);
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
    Object.defineProperty(TEdit.prototype, "focus", {
        get: function () {
            return edit_t_get_prop_focus(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TEdit;
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
    return TLabel;
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
    TImageAnimation.prototype.setFormat = function (format) {
        return image_animation_set_format(this.nativeObj, format);
    };
    TImageAnimation.prototype.setUnloadAfterPaint = function (unload_after_paint) {
        return image_animation_set_unload_after_paint(this.nativeObj, unload_after_paint);
    };
    TImageAnimation.cast = function (widget) {
        return new TImageAnimation(image_animation_cast(widget ? (widget.nativeObj || widget) : null));
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
var TSvgImage = /** @class */ (function (_super) {
    __extends(TSvgImage, _super);
    function TSvgImage(nativeObj) {
        return _super.call(this, nativeObj) || this;
    }
    TSvgImage.create = function (parent, x, y, w, h) {
        return new TSvgImage(svg_image_create(parent ? parent.nativeObj : null, x, y, w, h));
    };
    TSvgImage.cast = function (widget) {
        return new TSvgImage(svg_image_cast(widget ? (widget.nativeObj || widget) : null));
    };
    return TSvgImage;
}(TImageBase));
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
    Object.defineProperty(TObjectDefault.prototype, "propsSize", {
        get: function () {
            return object_default_t_get_prop_props_size(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TObjectDefault;
}(TObject));
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
    Object.defineProperty(TTimerInfo.prototype, "userChangedTime", {
        get: function () {
            return timer_info_t_get_prop_user_changed_time(this.nativeObj);
        },
        enumerable: true,
        configurable: true
    });
    return TTimerInfo;
}(TObject));
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
//# sourceMappingURL=awtk_api.js.map