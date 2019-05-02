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
var AWTK;
(function (AWTK) {
    var Tk = /** @class */ (function () {
        function Tk(nativeObj) {
            this.nativeObj = nativeObj;
        }
        Tk.quit = function () {
            return tk_quit();
        };
        return Tk;
    }());
    AWTK.Tk = Tk;
    var AssetInfo = /** @class */ (function () {
        function AssetInfo(nativeObj) {
            this.nativeObj = nativeObj;
        }
        Object.defineProperty(AssetInfo.prototype, "type", {
            get: function () {
                return asset_info_t_get_prop_type(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AssetInfo.prototype, "subtype", {
            get: function () {
                return asset_info_t_get_prop_subtype(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AssetInfo.prototype, "isInRom", {
            get: function () {
                return asset_info_t_get_prop_is_in_rom(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AssetInfo.prototype, "size", {
            get: function () {
                return asset_info_t_get_prop_size(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AssetInfo.prototype, "refcount", {
            get: function () {
                return asset_info_t_get_prop_refcount(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AssetInfo.prototype, "name", {
            get: function () {
                return asset_info_t_get_prop_name(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        return AssetInfo;
    }());
    AWTK.AssetInfo = AssetInfo;
    var AssetsManager = /** @class */ (function () {
        function AssetsManager(nativeObj) {
            this.nativeObj = nativeObj;
        }
        AssetsManager.instance = function () {
            return new AssetsManager(assets_manager());
        };
        AssetsManager.prototype.ref = function (type, name) {
            return new AssetInfo(assets_manager_ref(this.nativeObj, type, name));
        };
        AssetsManager.prototype.unref = function (info) {
            return assets_manager_unref(this.nativeObj, info ? info.nativeObj : null);
        };
        return AssetsManager;
    }());
    AWTK.AssetsManager = AssetsManager;
    var BitmapFormat;
    (function (BitmapFormat) {
        BitmapFormat[BitmapFormat["NONE"] = get_BITMAP_FMT_NONE()] = "NONE";
        BitmapFormat[BitmapFormat["RGBA8888"] = get_BITMAP_FMT_RGBA8888()] = "RGBA8888";
        BitmapFormat[BitmapFormat["ABGR8888"] = get_BITMAP_FMT_ABGR8888()] = "ABGR8888";
        BitmapFormat[BitmapFormat["BGRA8888"] = get_BITMAP_FMT_BGRA8888()] = "BGRA8888";
        BitmapFormat[BitmapFormat["ARGB8888"] = get_BITMAP_FMT_ARGB8888()] = "ARGB8888";
        BitmapFormat[BitmapFormat["RGB565"] = get_BITMAP_FMT_RGB565()] = "RGB565";
        BitmapFormat[BitmapFormat["BGR565"] = get_BITMAP_FMT_BGR565()] = "BGR565";
        BitmapFormat[BitmapFormat["RGB888"] = get_BITMAP_FMT_RGB888()] = "RGB888";
        BitmapFormat[BitmapFormat["BGR888"] = get_BITMAP_FMT_BGR888()] = "BGR888";
    })(BitmapFormat = AWTK.BitmapFormat || (AWTK.BitmapFormat = {}));
    ;
    var BitmapFlag;
    (function (BitmapFlag) {
        BitmapFlag[BitmapFlag["NONE"] = get_BITMAP_FLAG_NONE()] = "NONE";
        BitmapFlag[BitmapFlag["OPAQUE"] = get_BITMAP_FLAG_OPAQUE()] = "OPAQUE";
        BitmapFlag[BitmapFlag["IMMUTABLE"] = get_BITMAP_FLAG_IMMUTABLE()] = "IMMUTABLE";
        BitmapFlag[BitmapFlag["TEXTURE"] = get_BITMAP_FLAG_TEXTURE()] = "TEXTURE";
        BitmapFlag[BitmapFlag["CHANGED"] = get_BITMAP_FLAG_CHANGED()] = "CHANGED";
    })(BitmapFlag = AWTK.BitmapFlag || (AWTK.BitmapFlag = {}));
    ;
    var Bitmap = /** @class */ (function () {
        function Bitmap(nativeObj) {
            this.nativeObj = nativeObj;
        }
        Bitmap.create = function () {
            return new Bitmap(bitmap_create());
        };
        Bitmap.createEx = function (w, h, line_length, format) {
            return new Bitmap(bitmap_create_ex(w, h, line_length, format));
        };
        Bitmap.prototype.getBpp = function () {
            return bitmap_get_bpp(this.nativeObj);
        };
        Bitmap.prototype.destroy = function () {
            return bitmap_destroy(this.nativeObj);
        };
        Object.defineProperty(Bitmap.prototype, "w", {
            get: function () {
                return bitmap_t_get_prop_w(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Bitmap.prototype, "h", {
            get: function () {
                return bitmap_t_get_prop_h(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Bitmap.prototype, "lineLength", {
            get: function () {
                return bitmap_t_get_prop_line_length(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Bitmap.prototype, "flags", {
            get: function () {
                return bitmap_t_get_prop_flags(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Bitmap.prototype, "format", {
            get: function () {
                return bitmap_t_get_prop_format(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Bitmap.prototype, "name", {
            get: function () {
                return bitmap_t_get_prop_name(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        return Bitmap;
    }());
    AWTK.Bitmap = Bitmap;
    var ImageDrawType;
    (function (ImageDrawType) {
        ImageDrawType[ImageDrawType["DEFAULT"] = get_IMAGE_DRAW_DEFAULT()] = "DEFAULT";
        ImageDrawType[ImageDrawType["CENTER"] = get_IMAGE_DRAW_CENTER()] = "CENTER";
        ImageDrawType[ImageDrawType["ICON"] = get_IMAGE_DRAW_ICON()] = "ICON";
        ImageDrawType[ImageDrawType["SCALE"] = get_IMAGE_DRAW_SCALE()] = "SCALE";
        ImageDrawType[ImageDrawType["SCALE_AUTO"] = get_IMAGE_DRAW_SCALE_AUTO()] = "SCALE_AUTO";
        ImageDrawType[ImageDrawType["SCALE_DOWN"] = get_IMAGE_DRAW_SCALE_DOWN()] = "SCALE_DOWN";
        ImageDrawType[ImageDrawType["SCALE_W"] = get_IMAGE_DRAW_SCALE_W()] = "SCALE_W";
        ImageDrawType[ImageDrawType["SCALE_H"] = get_IMAGE_DRAW_SCALE_H()] = "SCALE_H";
        ImageDrawType[ImageDrawType["REPEAT"] = get_IMAGE_DRAW_REPEAT()] = "REPEAT";
        ImageDrawType[ImageDrawType["REPEAT_X"] = get_IMAGE_DRAW_REPEAT_X()] = "REPEAT_X";
        ImageDrawType[ImageDrawType["REPEAT_Y"] = get_IMAGE_DRAW_REPEAT_Y()] = "REPEAT_Y";
        ImageDrawType[ImageDrawType["PATCH9"] = get_IMAGE_DRAW_PATCH9()] = "PATCH9";
        ImageDrawType[ImageDrawType["PATCH3_X"] = get_IMAGE_DRAW_PATCH3_X()] = "PATCH3_X";
        ImageDrawType[ImageDrawType["PATCH3_Y"] = get_IMAGE_DRAW_PATCH3_Y()] = "PATCH3_Y";
        ImageDrawType[ImageDrawType["PATCH3_X_SCALE_Y"] = get_IMAGE_DRAW_PATCH3_X_SCALE_Y()] = "PATCH3_X_SCALE_Y";
        ImageDrawType[ImageDrawType["PATCH3_Y_SCALE_X"] = get_IMAGE_DRAW_PATCH3_Y_SCALE_X()] = "PATCH3_Y_SCALE_X";
    })(ImageDrawType = AWTK.ImageDrawType || (AWTK.ImageDrawType = {}));
    ;
    var Canvas = /** @class */ (function () {
        function Canvas(nativeObj) {
            this.nativeObj = nativeObj;
        }
        Canvas.prototype.getWidth = function () {
            return canvas_get_width(this.nativeObj);
        };
        Canvas.prototype.getHeight = function () {
            return canvas_get_height(this.nativeObj);
        };
        Canvas.prototype.getClipRect = function (r) {
            return canvas_get_clip_rect(this.nativeObj, r ? r.nativeObj : null);
        };
        Canvas.prototype.setClipRect = function (r) {
            return canvas_set_clip_rect(this.nativeObj, r ? r.nativeObj : null);
        };
        Canvas.prototype.setClipRectEx = function (r, translate) {
            return canvas_set_clip_rect_ex(this.nativeObj, r ? r.nativeObj : null, translate);
        };
        Canvas.prototype.setFillColor = function (color) {
            return canvas_set_fill_color_str(this.nativeObj, color);
        };
        Canvas.prototype.setTextColor = function (color) {
            return canvas_set_text_color_str(this.nativeObj, color);
        };
        Canvas.prototype.setStrokeColor = function (color) {
            return canvas_set_stroke_color_str(this.nativeObj, color);
        };
        Canvas.prototype.setGlobalAlpha = function (alpha) {
            return canvas_set_global_alpha(this.nativeObj, alpha);
        };
        Canvas.prototype.translate = function (dx, dy) {
            return canvas_translate(this.nativeObj, dx, dy);
        };
        Canvas.prototype.untranslate = function (dx, dy) {
            return canvas_untranslate(this.nativeObj, dx, dy);
        };
        Canvas.prototype.drawVline = function (x, y, h) {
            return canvas_draw_vline(this.nativeObj, x, y, h);
        };
        Canvas.prototype.drawHline = function (x, y, w) {
            return canvas_draw_hline(this.nativeObj, x, y, w);
        };
        Canvas.prototype.fillRect = function (x, y, w, h) {
            return canvas_fill_rect(this.nativeObj, x, y, w, h);
        };
        Canvas.prototype.strokeRect = function (x, y, w, h) {
            return canvas_stroke_rect(this.nativeObj, x, y, w, h);
        };
        Canvas.prototype.setFont = function (name, size) {
            return canvas_set_font(this.nativeObj, name, size);
        };
        Canvas.prototype.measureText = function (str) {
            return canvas_measure_utf8(this.nativeObj, str);
        };
        Canvas.prototype.drawText = function (str, x, y) {
            return canvas_draw_utf8(this.nativeObj, str, x, y);
        };
        Canvas.prototype.drawTextInRect = function (str, r) {
            return canvas_draw_utf8_in_rect(this.nativeObj, str, r ? r.nativeObj : null);
        };
        Canvas.prototype.drawIcon = function (img, cx, cy) {
            return canvas_draw_icon(this.nativeObj, img ? img.nativeObj : null, cx, cy);
        };
        Canvas.prototype.drawImage = function (img, src, dst) {
            return canvas_draw_image(this.nativeObj, img ? img.nativeObj : null, src ? src.nativeObj : null, dst ? dst.nativeObj : null);
        };
        Canvas.prototype.getVgcanvas = function () {
            return new Vgcanvas(canvas_get_vgcanvas(this.nativeObj));
        };
        Canvas.cast = function (c) {
            return new Canvas(canvas_cast(c ? (c.nativeObj || c) : null));
        };
        Object.defineProperty(Canvas.prototype, "ox", {
            get: function () {
                return canvas_t_get_prop_ox(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Canvas.prototype, "oy", {
            get: function () {
                return canvas_t_get_prop_oy(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        return Canvas;
    }());
    AWTK.Canvas = Canvas;
    var ClipBoardDataType;
    (function (ClipBoardDataType) {
        ClipBoardDataType[ClipBoardDataType["NONE"] = get_CLIP_BOARD_DATA_TYPE_NONE()] = "NONE";
        ClipBoardDataType[ClipBoardDataType["TEXT"] = get_CLIP_BOARD_DATA_TYPE_TEXT()] = "TEXT";
    })(ClipBoardDataType = AWTK.ClipBoardDataType || (AWTK.ClipBoardDataType = {}));
    ;
    var ClipBoard = /** @class */ (function () {
        function ClipBoard(nativeObj) {
            this.nativeObj = nativeObj;
        }
        ClipBoard.setText = function (text) {
            return clip_board_set_text(text);
        };
        ClipBoard.getText = function () {
            return clip_board_get_text();
        };
        return ClipBoard;
    }());
    AWTK.ClipBoard = ClipBoard;
    var EventType;
    (function (EventType) {
        EventType[EventType["POINTER_DOWN"] = get_EVT_POINTER_DOWN()] = "POINTER_DOWN";
        EventType[EventType["POINTER_DOWN_ABORT"] = get_EVT_POINTER_DOWN_ABORT()] = "POINTER_DOWN_ABORT";
        EventType[EventType["POINTER_MOVE"] = get_EVT_POINTER_MOVE()] = "POINTER_MOVE";
        EventType[EventType["POINTER_UP"] = get_EVT_POINTER_UP()] = "POINTER_UP";
        EventType[EventType["WHEEL"] = get_EVT_WHEEL()] = "WHEEL";
        EventType[EventType["CONTEXT_MENU"] = get_EVT_CONTEXT_MENU()] = "CONTEXT_MENU";
        EventType[EventType["POINTER_ENTER"] = get_EVT_POINTER_ENTER()] = "POINTER_ENTER";
        EventType[EventType["POINTER_LEAVE"] = get_EVT_POINTER_LEAVE()] = "POINTER_LEAVE";
        EventType[EventType["LONG_PRESS"] = get_EVT_LONG_PRESS()] = "LONG_PRESS";
        EventType[EventType["CLICK"] = get_EVT_CLICK()] = "CLICK";
        EventType[EventType["FOCUS"] = get_EVT_FOCUS()] = "FOCUS";
        EventType[EventType["BLUR"] = get_EVT_BLUR()] = "BLUR";
        EventType[EventType["KEY_DOWN"] = get_EVT_KEY_DOWN()] = "KEY_DOWN";
        EventType[EventType["KEY_REPEAT"] = get_EVT_KEY_REPEAT()] = "KEY_REPEAT";
        EventType[EventType["KEY_UP"] = get_EVT_KEY_UP()] = "KEY_UP";
        EventType[EventType["WILL_MOVE"] = get_EVT_WILL_MOVE()] = "WILL_MOVE";
        EventType[EventType["MOVE"] = get_EVT_MOVE()] = "MOVE";
        EventType[EventType["WILL_RESIZE"] = get_EVT_WILL_RESIZE()] = "WILL_RESIZE";
        EventType[EventType["RESIZE"] = get_EVT_RESIZE()] = "RESIZE";
        EventType[EventType["WILL_MOVE_RESIZE"] = get_EVT_WILL_MOVE_RESIZE()] = "WILL_MOVE_RESIZE";
        EventType[EventType["MOVE_RESIZE"] = get_EVT_MOVE_RESIZE()] = "MOVE_RESIZE";
        EventType[EventType["VALUE_WILL_CHANGE"] = get_EVT_VALUE_WILL_CHANGE()] = "VALUE_WILL_CHANGE";
        EventType[EventType["VALUE_CHANGED"] = get_EVT_VALUE_CHANGED()] = "VALUE_CHANGED";
        EventType[EventType["VALUE_CHANGING"] = get_EVT_VALUE_CHANGING()] = "VALUE_CHANGING";
        EventType[EventType["PAINT"] = get_EVT_PAINT()] = "PAINT";
        EventType[EventType["BEFORE_PAINT"] = get_EVT_BEFORE_PAINT()] = "BEFORE_PAINT";
        EventType[EventType["AFTER_PAINT"] = get_EVT_AFTER_PAINT()] = "AFTER_PAINT";
        EventType[EventType["PAINT_DONE"] = get_EVT_PAINT_DONE()] = "PAINT_DONE";
        EventType[EventType["LOCALE_CHANGED"] = get_EVT_LOCALE_CHANGED()] = "LOCALE_CHANGED";
        EventType[EventType["ANIM_START"] = get_EVT_ANIM_START()] = "ANIM_START";
        EventType[EventType["ANIM_STOP"] = get_EVT_ANIM_STOP()] = "ANIM_STOP";
        EventType[EventType["ANIM_PAUSE"] = get_EVT_ANIM_PAUSE()] = "ANIM_PAUSE";
        EventType[EventType["ANIM_ONCE"] = get_EVT_ANIM_ONCE()] = "ANIM_ONCE";
        EventType[EventType["ANIM_END"] = get_EVT_ANIM_END()] = "ANIM_END";
        EventType[EventType["WINDOW_LOAD"] = get_EVT_WINDOW_LOAD()] = "WINDOW_LOAD";
        EventType[EventType["WINDOW_WILL_OPEN"] = get_EVT_WINDOW_WILL_OPEN()] = "WINDOW_WILL_OPEN";
        EventType[EventType["WINDOW_OPEN"] = get_EVT_WINDOW_OPEN()] = "WINDOW_OPEN";
        EventType[EventType["WINDOW_CLOSE"] = get_EVT_WINDOW_CLOSE()] = "WINDOW_CLOSE";
        EventType[EventType["REQUEST_CLOSE_WINDOW"] = get_EVT_REQUEST_CLOSE_WINDOW()] = "REQUEST_CLOSE_WINDOW";
        EventType[EventType["TOP_WINDOW_CHANGED"] = get_EVT_TOP_WINDOW_CHANGED()] = "TOP_WINDOW_CHANGED";
        EventType[EventType["IM_COMMIT"] = get_EVT_IM_COMMIT()] = "IM_COMMIT";
        EventType[EventType["IM_SHOW_CANDIDATES"] = get_EVT_IM_SHOW_CANDIDATES()] = "IM_SHOW_CANDIDATES";
        EventType[EventType["IM_ACTION"] = get_EVT_IM_ACTION()] = "IM_ACTION";
        EventType[EventType["IM_ACTION_INFO"] = get_EVT_IM_ACTION_INFO()] = "IM_ACTION_INFO";
        EventType[EventType["DRAG_START"] = get_EVT_DRAG_START()] = "DRAG_START";
        EventType[EventType["DRAG"] = get_EVT_DRAG()] = "DRAG";
        EventType[EventType["DRAG_END"] = get_EVT_DRAG_END()] = "DRAG_END";
        EventType[EventType["SCREEN_SAVER"] = get_EVT_SCREEN_SAVER()] = "SCREEN_SAVER";
        EventType[EventType["REQ_START"] = get_EVT_REQ_START()] = "REQ_START";
        EventType[EventType["USER_START"] = get_EVT_USER_START()] = "USER_START";
    })(EventType = AWTK.EventType || (AWTK.EventType = {}));
    ;
    var FontManager = /** @class */ (function () {
        function FontManager(nativeObj) {
            this.nativeObj = nativeObj;
        }
        FontManager.prototype.unloadFont = function (name, size) {
            return font_manager_unload_font(this.nativeObj, name, size);
        };
        return FontManager;
    }());
    AWTK.FontManager = FontManager;
    var Idle = /** @class */ (function () {
        function Idle(nativeObj) {
            this.nativeObj = nativeObj;
        }
        Idle.add = function (on_idle, ctx) {
            return idle_add(Module.addFunction(on_idle), ctx);
        };
        Idle.remove = function (idle_id) {
            return idle_remove(idle_id);
        };
        return Idle;
    }());
    AWTK.Idle = Idle;
    var ImageManager = /** @class */ (function () {
        function ImageManager(nativeObj) {
            this.nativeObj = nativeObj;
        }
        ImageManager.instance = function () {
            return new ImageManager(image_manager());
        };
        ImageManager.prototype.getBitmap = function (name, image) {
            return image_manager_get_bitmap(this.nativeObj, name, image ? image.nativeObj : null);
        };
        return ImageManager;
    }());
    AWTK.ImageManager = ImageManager;
    var InputType;
    (function (InputType) {
        InputType[InputType["TEXT"] = get_INPUT_TEXT()] = "TEXT";
        InputType[InputType["INT"] = get_INPUT_INT()] = "INT";
        InputType[InputType["UINT"] = get_INPUT_UINT()] = "UINT";
        InputType[InputType["HEX"] = get_INPUT_HEX()] = "HEX";
        InputType[InputType["FLOAT"] = get_INPUT_FLOAT()] = "FLOAT";
        InputType[InputType["UFLOAT"] = get_INPUT_UFLOAT()] = "UFLOAT";
        InputType[InputType["EMAIL"] = get_INPUT_EMAIL()] = "EMAIL";
        InputType[InputType["PASSWORD"] = get_INPUT_PASSWORD()] = "PASSWORD";
        InputType[InputType["PHONE"] = get_INPUT_PHONE()] = "PHONE";
        InputType[InputType["CUSTOM"] = get_INPUT_CUSTOM()] = "CUSTOM";
    })(InputType = AWTK.InputType || (AWTK.InputType = {}));
    ;
    var InputMethod = /** @class */ (function () {
        function InputMethod(nativeObj) {
            this.nativeObj = nativeObj;
        }
        InputMethod.prototype.commitText = function (text) {
            return input_method_commit_text(this.nativeObj, text);
        };
        InputMethod.prototype.dispatchKey = function (key) {
            return input_method_dispatch_key(this.nativeObj, key);
        };
        InputMethod.instance = function () {
            return new InputMethod(input_method());
        };
        return InputMethod;
    }());
    AWTK.InputMethod = InputMethod;
    var KeyCode;
    (function (KeyCode) {
        KeyCode[KeyCode["KEY_RETURN"] = get_TK_KEY_RETURN()] = "KEY_RETURN";
        KeyCode[KeyCode["KEY_ESCAPE"] = get_TK_KEY_ESCAPE()] = "KEY_ESCAPE";
        KeyCode[KeyCode["KEY_BACKSPACE"] = get_TK_KEY_BACKSPACE()] = "KEY_BACKSPACE";
        KeyCode[KeyCode["KEY_TAB"] = get_TK_KEY_TAB()] = "KEY_TAB";
        KeyCode[KeyCode["KEY_SPACE"] = get_TK_KEY_SPACE()] = "KEY_SPACE";
        KeyCode[KeyCode["KEY_EXCLAIM"] = get_TK_KEY_EXCLAIM()] = "KEY_EXCLAIM";
        KeyCode[KeyCode["KEY_QUOTEDBL"] = get_TK_KEY_QUOTEDBL()] = "KEY_QUOTEDBL";
        KeyCode[KeyCode["KEY_HASH"] = get_TK_KEY_HASH()] = "KEY_HASH";
        KeyCode[KeyCode["KEY_PERCENT"] = get_TK_KEY_PERCENT()] = "KEY_PERCENT";
        KeyCode[KeyCode["KEY_DOLLAR"] = get_TK_KEY_DOLLAR()] = "KEY_DOLLAR";
        KeyCode[KeyCode["KEY_AMPERSAND"] = get_TK_KEY_AMPERSAND()] = "KEY_AMPERSAND";
        KeyCode[KeyCode["KEY_QUOTE"] = get_TK_KEY_QUOTE()] = "KEY_QUOTE";
        KeyCode[KeyCode["KEY_LEFTPAREN"] = get_TK_KEY_LEFTPAREN()] = "KEY_LEFTPAREN";
        KeyCode[KeyCode["KEY_RIGHTPAREN"] = get_TK_KEY_RIGHTPAREN()] = "KEY_RIGHTPAREN";
        KeyCode[KeyCode["KEY_ASTERISK"] = get_TK_KEY_ASTERISK()] = "KEY_ASTERISK";
        KeyCode[KeyCode["KEY_PLUS"] = get_TK_KEY_PLUS()] = "KEY_PLUS";
        KeyCode[KeyCode["KEY_COMMA"] = get_TK_KEY_COMMA()] = "KEY_COMMA";
        KeyCode[KeyCode["KEY_MINUS"] = get_TK_KEY_MINUS()] = "KEY_MINUS";
        KeyCode[KeyCode["KEY_PERIOD"] = get_TK_KEY_PERIOD()] = "KEY_PERIOD";
        KeyCode[KeyCode["KEY_SLASH"] = get_TK_KEY_SLASH()] = "KEY_SLASH";
        KeyCode[KeyCode["KEY_0"] = get_TK_KEY_0()] = "KEY_0";
        KeyCode[KeyCode["KEY_1"] = get_TK_KEY_1()] = "KEY_1";
        KeyCode[KeyCode["KEY_2"] = get_TK_KEY_2()] = "KEY_2";
        KeyCode[KeyCode["KEY_3"] = get_TK_KEY_3()] = "KEY_3";
        KeyCode[KeyCode["KEY_4"] = get_TK_KEY_4()] = "KEY_4";
        KeyCode[KeyCode["KEY_5"] = get_TK_KEY_5()] = "KEY_5";
        KeyCode[KeyCode["KEY_6"] = get_TK_KEY_6()] = "KEY_6";
        KeyCode[KeyCode["KEY_7"] = get_TK_KEY_7()] = "KEY_7";
        KeyCode[KeyCode["KEY_8"] = get_TK_KEY_8()] = "KEY_8";
        KeyCode[KeyCode["KEY_9"] = get_TK_KEY_9()] = "KEY_9";
        KeyCode[KeyCode["KEY_COLON"] = get_TK_KEY_COLON()] = "KEY_COLON";
        KeyCode[KeyCode["KEY_SEMICOLON"] = get_TK_KEY_SEMICOLON()] = "KEY_SEMICOLON";
        KeyCode[KeyCode["KEY_LESS"] = get_TK_KEY_LESS()] = "KEY_LESS";
        KeyCode[KeyCode["KEY_EQUAL"] = get_TK_KEY_EQUAL()] = "KEY_EQUAL";
        KeyCode[KeyCode["KEY_GREATER"] = get_TK_KEY_GREATER()] = "KEY_GREATER";
        KeyCode[KeyCode["KEY_QUESTION"] = get_TK_KEY_QUESTION()] = "KEY_QUESTION";
        KeyCode[KeyCode["KEY_AT"] = get_TK_KEY_AT()] = "KEY_AT";
        KeyCode[KeyCode["KEY_LEFTBRACKET"] = get_TK_KEY_LEFTBRACKET()] = "KEY_LEFTBRACKET";
        KeyCode[KeyCode["KEY_BACKSLASH"] = get_TK_KEY_BACKSLASH()] = "KEY_BACKSLASH";
        KeyCode[KeyCode["KEY_RIGHTBRACKET"] = get_TK_KEY_RIGHTBRACKET()] = "KEY_RIGHTBRACKET";
        KeyCode[KeyCode["KEY_CARET"] = get_TK_KEY_CARET()] = "KEY_CARET";
        KeyCode[KeyCode["KEY_UNDERSCORE"] = get_TK_KEY_UNDERSCORE()] = "KEY_UNDERSCORE";
        KeyCode[KeyCode["KEY_BACKQUOTE"] = get_TK_KEY_BACKQUOTE()] = "KEY_BACKQUOTE";
        KeyCode[KeyCode["KEY_a"] = get_TK_KEY_a()] = "KEY_a";
        KeyCode[KeyCode["KEY_b"] = get_TK_KEY_b()] = "KEY_b";
        KeyCode[KeyCode["KEY_c"] = get_TK_KEY_c()] = "KEY_c";
        KeyCode[KeyCode["KEY_d"] = get_TK_KEY_d()] = "KEY_d";
        KeyCode[KeyCode["KEY_e"] = get_TK_KEY_e()] = "KEY_e";
        KeyCode[KeyCode["KEY_f"] = get_TK_KEY_f()] = "KEY_f";
        KeyCode[KeyCode["KEY_g"] = get_TK_KEY_g()] = "KEY_g";
        KeyCode[KeyCode["KEY_h"] = get_TK_KEY_h()] = "KEY_h";
        KeyCode[KeyCode["KEY_i"] = get_TK_KEY_i()] = "KEY_i";
        KeyCode[KeyCode["KEY_j"] = get_TK_KEY_j()] = "KEY_j";
        KeyCode[KeyCode["KEY_k"] = get_TK_KEY_k()] = "KEY_k";
        KeyCode[KeyCode["KEY_l"] = get_TK_KEY_l()] = "KEY_l";
        KeyCode[KeyCode["KEY_m"] = get_TK_KEY_m()] = "KEY_m";
        KeyCode[KeyCode["KEY_n"] = get_TK_KEY_n()] = "KEY_n";
        KeyCode[KeyCode["KEY_o"] = get_TK_KEY_o()] = "KEY_o";
        KeyCode[KeyCode["KEY_p"] = get_TK_KEY_p()] = "KEY_p";
        KeyCode[KeyCode["KEY_q"] = get_TK_KEY_q()] = "KEY_q";
        KeyCode[KeyCode["KEY_r"] = get_TK_KEY_r()] = "KEY_r";
        KeyCode[KeyCode["KEY_s"] = get_TK_KEY_s()] = "KEY_s";
        KeyCode[KeyCode["KEY_t"] = get_TK_KEY_t()] = "KEY_t";
        KeyCode[KeyCode["KEY_u"] = get_TK_KEY_u()] = "KEY_u";
        KeyCode[KeyCode["KEY_v"] = get_TK_KEY_v()] = "KEY_v";
        KeyCode[KeyCode["KEY_w"] = get_TK_KEY_w()] = "KEY_w";
        KeyCode[KeyCode["KEY_x"] = get_TK_KEY_x()] = "KEY_x";
        KeyCode[KeyCode["KEY_y"] = get_TK_KEY_y()] = "KEY_y";
        KeyCode[KeyCode["KEY_z"] = get_TK_KEY_z()] = "KEY_z";
        KeyCode[KeyCode["KEY_A"] = get_TK_KEY_A()] = "KEY_A";
        KeyCode[KeyCode["KEY_B"] = get_TK_KEY_B()] = "KEY_B";
        KeyCode[KeyCode["KEY_C"] = get_TK_KEY_C()] = "KEY_C";
        KeyCode[KeyCode["KEY_D"] = get_TK_KEY_D()] = "KEY_D";
        KeyCode[KeyCode["KEY_E"] = get_TK_KEY_E()] = "KEY_E";
        KeyCode[KeyCode["KEY_F"] = get_TK_KEY_F()] = "KEY_F";
        KeyCode[KeyCode["KEY_G"] = get_TK_KEY_G()] = "KEY_G";
        KeyCode[KeyCode["KEY_H"] = get_TK_KEY_H()] = "KEY_H";
        KeyCode[KeyCode["KEY_I"] = get_TK_KEY_I()] = "KEY_I";
        KeyCode[KeyCode["KEY_J"] = get_TK_KEY_J()] = "KEY_J";
        KeyCode[KeyCode["KEY_K"] = get_TK_KEY_K()] = "KEY_K";
        KeyCode[KeyCode["KEY_L"] = get_TK_KEY_L()] = "KEY_L";
        KeyCode[KeyCode["KEY_M"] = get_TK_KEY_M()] = "KEY_M";
        KeyCode[KeyCode["KEY_N"] = get_TK_KEY_N()] = "KEY_N";
        KeyCode[KeyCode["KEY_O"] = get_TK_KEY_O()] = "KEY_O";
        KeyCode[KeyCode["KEY_P"] = get_TK_KEY_P()] = "KEY_P";
        KeyCode[KeyCode["KEY_Q"] = get_TK_KEY_Q()] = "KEY_Q";
        KeyCode[KeyCode["KEY_R"] = get_TK_KEY_R()] = "KEY_R";
        KeyCode[KeyCode["KEY_S"] = get_TK_KEY_S()] = "KEY_S";
        KeyCode[KeyCode["KEY_T"] = get_TK_KEY_T()] = "KEY_T";
        KeyCode[KeyCode["KEY_U"] = get_TK_KEY_U()] = "KEY_U";
        KeyCode[KeyCode["KEY_V"] = get_TK_KEY_V()] = "KEY_V";
        KeyCode[KeyCode["KEY_W"] = get_TK_KEY_W()] = "KEY_W";
        KeyCode[KeyCode["KEY_X"] = get_TK_KEY_X()] = "KEY_X";
        KeyCode[KeyCode["KEY_Y"] = get_TK_KEY_Y()] = "KEY_Y";
        KeyCode[KeyCode["KEY_Z"] = get_TK_KEY_Z()] = "KEY_Z";
        KeyCode[KeyCode["KEY_DOT"] = get_TK_KEY_DOT()] = "KEY_DOT";
        KeyCode[KeyCode["KEY_DELETE"] = get_TK_KEY_DELETE()] = "KEY_DELETE";
        KeyCode[KeyCode["KEY_LEFTBRACE"] = get_TK_KEY_LEFTBRACE()] = "KEY_LEFTBRACE";
        KeyCode[KeyCode["KEY_RIGHTBRACE"] = get_TK_KEY_RIGHTBRACE()] = "KEY_RIGHTBRACE";
    })(KeyCode = AWTK.KeyCode || (AWTK.KeyCode = {}));
    ;
    var LocaleInfo = /** @class */ (function () {
        function LocaleInfo(nativeObj) {
            this.nativeObj = nativeObj;
        }
        LocaleInfo.instance = function () {
            return new LocaleInfo(locale_info());
        };
        LocaleInfo.prototype.tr = function (text) {
            return locale_info_tr(this.nativeObj, text);
        };
        LocaleInfo.prototype.change = function (language, country) {
            return locale_info_change(this.nativeObj, language, country);
        };
        LocaleInfo.prototype.on = function (type, on_event, ctx) {
            return locale_info_on(this.nativeObj, type, Module.addFunction(on_event), ctx);
        };
        LocaleInfo.prototype.off = function (id) {
            return locale_info_off(this.nativeObj, id);
        };
        return LocaleInfo;
    }());
    AWTK.LocaleInfo = LocaleInfo;
    var StyleId;
    (function (StyleId) {
        StyleId[StyleId["_ID_BG_COLOR"] = get_STYLE_ID_BG_COLOR()] = "_ID_BG_COLOR";
        StyleId[StyleId["_ID_FG_COLOR"] = get_STYLE_ID_FG_COLOR()] = "_ID_FG_COLOR";
        StyleId[StyleId["_ID_MASK_COLOR"] = get_STYLE_ID_MASK_COLOR()] = "_ID_MASK_COLOR";
        StyleId[StyleId["_ID_FONT_NAME"] = get_STYLE_ID_FONT_NAME()] = "_ID_FONT_NAME";
        StyleId[StyleId["_ID_FONT_SIZE"] = get_STYLE_ID_FONT_SIZE()] = "_ID_FONT_SIZE";
        StyleId[StyleId["_ID_FONT_STYLE"] = get_STYLE_ID_FONT_STYLE()] = "_ID_FONT_STYLE";
        StyleId[StyleId["_ID_TEXT_COLOR"] = get_STYLE_ID_TEXT_COLOR()] = "_ID_TEXT_COLOR";
        StyleId[StyleId["_ID_TIPS_TEXT_COLOR"] = get_STYLE_ID_TIPS_TEXT_COLOR()] = "_ID_TIPS_TEXT_COLOR";
        StyleId[StyleId["_ID_TEXT_ALIGN_H"] = get_STYLE_ID_TEXT_ALIGN_H()] = "_ID_TEXT_ALIGN_H";
        StyleId[StyleId["_ID_TEXT_ALIGN_V"] = get_STYLE_ID_TEXT_ALIGN_V()] = "_ID_TEXT_ALIGN_V";
        StyleId[StyleId["_ID_BORDER_COLOR"] = get_STYLE_ID_BORDER_COLOR()] = "_ID_BORDER_COLOR";
        StyleId[StyleId["_ID_BORDER"] = get_STYLE_ID_BORDER()] = "_ID_BORDER";
        StyleId[StyleId["_ID_BG_IMAGE"] = get_STYLE_ID_BG_IMAGE()] = "_ID_BG_IMAGE";
        StyleId[StyleId["_ID_BG_IMAGE_DRAW_TYPE"] = get_STYLE_ID_BG_IMAGE_DRAW_TYPE()] = "_ID_BG_IMAGE_DRAW_TYPE";
        StyleId[StyleId["_ID_ICON"] = get_STYLE_ID_ICON()] = "_ID_ICON";
        StyleId[StyleId["_ID_FG_IMAGE"] = get_STYLE_ID_FG_IMAGE()] = "_ID_FG_IMAGE";
        StyleId[StyleId["_ID_FG_IMAGE_DRAW_TYPE"] = get_STYLE_ID_FG_IMAGE_DRAW_TYPE()] = "_ID_FG_IMAGE_DRAW_TYPE";
        StyleId[StyleId["_ID_MARGIN"] = get_STYLE_ID_MARGIN()] = "_ID_MARGIN";
        StyleId[StyleId["_ID_ICON_AT"] = get_STYLE_ID_ICON_AT()] = "_ID_ICON_AT";
        StyleId[StyleId["_ID_ACTIVE_ICON"] = get_STYLE_ID_ACTIVE_ICON()] = "_ID_ACTIVE_ICON";
        StyleId[StyleId["_ID_X_OFFSET"] = get_STYLE_ID_X_OFFSET()] = "_ID_X_OFFSET";
        StyleId[StyleId["_ID_Y_OFFSET"] = get_STYLE_ID_Y_OFFSET()] = "_ID_Y_OFFSET";
        StyleId[StyleId["_ID_SELECTED_BG_COLOR"] = get_STYLE_ID_SELECTED_BG_COLOR()] = "_ID_SELECTED_BG_COLOR";
        StyleId[StyleId["_ID_SELECTED_FG_COLOR"] = get_STYLE_ID_SELECTED_FG_COLOR()] = "_ID_SELECTED_FG_COLOR";
        StyleId[StyleId["_ID_SELECTED_TEXT_COLOR"] = get_STYLE_ID_SELECTED_TEXT_COLOR()] = "_ID_SELECTED_TEXT_COLOR";
        StyleId[StyleId["_ID_ROUND_RADIUS"] = get_STYLE_ID_ROUND_RADIUS()] = "_ID_ROUND_RADIUS";
    })(StyleId = AWTK.StyleId || (AWTK.StyleId = {}));
    ;
    var Style = /** @class */ (function () {
        function Style(nativeObj) {
            this.nativeObj = nativeObj;
        }
        Style.prototype.notifyWidgetStateChanged = function (widget) {
            return style_notify_widget_state_changed(this.nativeObj, widget ? widget.nativeObj : null);
        };
        Style.prototype.isValid = function () {
            return style_is_valid(this.nativeObj);
        };
        Style.prototype.getInt = function (name, defval) {
            return style_get_int(this.nativeObj, name, defval);
        };
        Style.prototype.getStr = function (name, defval) {
            return style_get_str(this.nativeObj, name, defval);
        };
        return Style;
    }());
    AWTK.Style = Style;
    var Theme = /** @class */ (function () {
        function Theme(nativeObj) {
            this.nativeObj = nativeObj;
        }
        Theme.instance = function () {
            return new Theme(theme());
        };
        return Theme;
    }());
    AWTK.Theme = Theme;
    var Timer = /** @class */ (function () {
        function Timer(nativeObj) {
            this.nativeObj = nativeObj;
        }
        Timer.add = function (on_timer, ctx, duration) {
            return timer_add(Module.addFunction(on_timer), ctx, duration);
        };
        Timer.remove = function (timer_id) {
            return timer_remove(timer_id);
        };
        Timer.reset = function (timer_id) {
            return timer_reset(timer_id);
        };
        return Timer;
    }());
    AWTK.Timer = Timer;
    var AlignV;
    (function (AlignV) {
        AlignV[AlignV["NONE"] = get_ALIGN_V_NONE()] = "NONE";
        AlignV[AlignV["MIDDLE"] = get_ALIGN_V_MIDDLE()] = "MIDDLE";
        AlignV[AlignV["TOP"] = get_ALIGN_V_TOP()] = "TOP";
        AlignV[AlignV["BOTTOM"] = get_ALIGN_V_BOTTOM()] = "BOTTOM";
    })(AlignV = AWTK.AlignV || (AWTK.AlignV = {}));
    ;
    var AlignH;
    (function (AlignH) {
        AlignH[AlignH["NONE"] = get_ALIGN_H_NONE()] = "NONE";
        AlignH[AlignH["CENTER"] = get_ALIGN_H_CENTER()] = "CENTER";
        AlignH[AlignH["LEFT"] = get_ALIGN_H_LEFT()] = "LEFT";
        AlignH[AlignH["RIGHT"] = get_ALIGN_H_RIGHT()] = "RIGHT";
    })(AlignH = AWTK.AlignH || (AWTK.AlignH = {}));
    ;
    var Vgcanvas = /** @class */ (function () {
        function Vgcanvas(nativeObj) {
            this.nativeObj = nativeObj;
        }
        Vgcanvas.cast = function (vg) {
            return new Vgcanvas(vgcanvas_cast(vg ? (vg.nativeObj || vg) : null));
        };
        Vgcanvas.prototype.flush = function () {
            return vgcanvas_flush(this.nativeObj);
        };
        Vgcanvas.prototype.beginPath = function () {
            return vgcanvas_begin_path(this.nativeObj);
        };
        Vgcanvas.prototype.moveTo = function (x, y) {
            return vgcanvas_move_to(this.nativeObj, x, y);
        };
        Vgcanvas.prototype.lineTo = function (x, y) {
            return vgcanvas_line_to(this.nativeObj, x, y);
        };
        Vgcanvas.prototype.quadTo = function (cpx, cpy, x, y) {
            return vgcanvas_quad_to(this.nativeObj, cpx, cpy, x, y);
        };
        Vgcanvas.prototype.bezierTo = function (cp1x, cp1y, cp2x, cp2y, x, y) {
            return vgcanvas_bezier_to(this.nativeObj, cp1x, cp1y, cp2x, cp2y, x, y);
        };
        Vgcanvas.prototype.arcTo = function (x1, y1, x2, y2, r) {
            return vgcanvas_arc_to(this.nativeObj, x1, y1, x2, y2, r);
        };
        Vgcanvas.prototype.arc = function (x, y, r, start_angle, end_angle, ccw) {
            return vgcanvas_arc(this.nativeObj, x, y, r, start_angle, end_angle, ccw);
        };
        Vgcanvas.prototype.isPointInPath = function (x, y) {
            return vgcanvas_is_point_in_path(this.nativeObj, x, y);
        };
        Vgcanvas.prototype.rect = function (x, y, w, h) {
            return vgcanvas_rect(this.nativeObj, x, y, w, h);
        };
        Vgcanvas.prototype.roundedRect = function (x, y, w, h, r) {
            return vgcanvas_rounded_rect(this.nativeObj, x, y, w, h, r);
        };
        Vgcanvas.prototype.ellipse = function (x, y, rx, ry) {
            return vgcanvas_ellipse(this.nativeObj, x, y, rx, ry);
        };
        Vgcanvas.prototype.closePath = function () {
            return vgcanvas_close_path(this.nativeObj);
        };
        Vgcanvas.prototype.rotate = function (rad) {
            return vgcanvas_rotate(this.nativeObj, rad);
        };
        Vgcanvas.prototype.scale = function (x, y) {
            return vgcanvas_scale(this.nativeObj, x, y);
        };
        Vgcanvas.prototype.translate = function (x, y) {
            return vgcanvas_translate(this.nativeObj, x, y);
        };
        Vgcanvas.prototype.transform = function (a, b, c, d, e, f) {
            return vgcanvas_transform(this.nativeObj, a, b, c, d, e, f);
        };
        Vgcanvas.prototype.setTransform = function (a, b, c, d, e, f) {
            return vgcanvas_set_transform(this.nativeObj, a, b, c, d, e, f);
        };
        Vgcanvas.prototype.clipRect = function (x, y, w, h) {
            return vgcanvas_clip_rect(this.nativeObj, x, y, w, h);
        };
        Vgcanvas.prototype.fill = function () {
            return vgcanvas_fill(this.nativeObj);
        };
        Vgcanvas.prototype.stroke = function () {
            return vgcanvas_stroke(this.nativeObj);
        };
        Vgcanvas.prototype.paint = function (stroke, img) {
            return vgcanvas_paint(this.nativeObj, stroke, img ? img.nativeObj : null);
        };
        Vgcanvas.prototype.setFont = function (font) {
            return vgcanvas_set_font(this.nativeObj, font);
        };
        Vgcanvas.prototype.setFontSize = function (font) {
            return vgcanvas_set_font_size(this.nativeObj, font);
        };
        Vgcanvas.prototype.setTextAlign = function (value) {
            return vgcanvas_set_text_align(this.nativeObj, value);
        };
        Vgcanvas.prototype.setTextBaseline = function (value) {
            return vgcanvas_set_text_baseline(this.nativeObj, value);
        };
        Vgcanvas.prototype.fillText = function (text, x, y, max_width) {
            return vgcanvas_fill_text(this.nativeObj, text, x, y, max_width);
        };
        Vgcanvas.prototype.measureText = function (text) {
            return vgcanvas_measure_text(this.nativeObj, text);
        };
        Vgcanvas.prototype.drawImage = function (img, sx, sy, sw, sh, dx, dy, dw, dh) {
            return vgcanvas_draw_image(this.nativeObj, img ? img.nativeObj : null, sx, sy, sw, sh, dx, dy, dw, dh);
        };
        Vgcanvas.prototype.drawIcon = function (img, sx, sy, sw, sh, dx, dy, dw, dh) {
            return vgcanvas_draw_icon(this.nativeObj, img ? img.nativeObj : null, sx, sy, sw, sh, dx, dy, dw, dh);
        };
        Vgcanvas.prototype.setAntialias = function (value) {
            return vgcanvas_set_antialias(this.nativeObj, value);
        };
        Vgcanvas.prototype.setGlobalAlpha = function (alpha) {
            return vgcanvas_set_global_alpha(this.nativeObj, alpha);
        };
        Vgcanvas.prototype.setLineWidth = function (value) {
            return vgcanvas_set_line_width(this.nativeObj, value);
        };
        Vgcanvas.prototype.setFillColor = function (color) {
            return vgcanvas_set_fill_color_str(this.nativeObj, color);
        };
        Vgcanvas.prototype.setStrokeColor = function (color) {
            return vgcanvas_set_stroke_color_str(this.nativeObj, color);
        };
        Vgcanvas.prototype.setLineCap = function (value) {
            return vgcanvas_set_line_cap(this.nativeObj, value);
        };
        Vgcanvas.prototype.setLineJoin = function (value) {
            return vgcanvas_set_line_join(this.nativeObj, value);
        };
        Vgcanvas.prototype.setMiterLimit = function (value) {
            return vgcanvas_set_miter_limit(this.nativeObj, value);
        };
        Vgcanvas.prototype.save = function () {
            return vgcanvas_save(this.nativeObj);
        };
        Vgcanvas.prototype.restore = function () {
            return vgcanvas_restore(this.nativeObj);
        };
        Object.defineProperty(Vgcanvas.prototype, "w", {
            get: function () {
                return vgcanvas_t_get_prop_w(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Vgcanvas.prototype, "h", {
            get: function () {
                return vgcanvas_t_get_prop_h(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Vgcanvas.prototype, "ratio", {
            get: function () {
                return vgcanvas_t_get_prop_ratio(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Vgcanvas.prototype, "antiAlias", {
            get: function () {
                return vgcanvas_t_get_prop_anti_alias(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Vgcanvas.prototype, "lineWidth", {
            get: function () {
                return vgcanvas_t_get_prop_line_width(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Vgcanvas.prototype, "globalAlpha", {
            get: function () {
                return vgcanvas_t_get_prop_global_alpha(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Vgcanvas.prototype, "miterLimit", {
            get: function () {
                return vgcanvas_t_get_prop_miter_limit(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Vgcanvas.prototype, "lineCap", {
            get: function () {
                return vgcanvas_t_get_prop_line_cap(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Vgcanvas.prototype, "lineJoin", {
            get: function () {
                return vgcanvas_t_get_prop_line_join(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Vgcanvas.prototype, "font", {
            get: function () {
                return vgcanvas_t_get_prop_font(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Vgcanvas.prototype, "fontSize", {
            get: function () {
                return vgcanvas_t_get_prop_font_size(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Vgcanvas.prototype, "textAlign", {
            get: function () {
                return vgcanvas_t_get_prop_text_align(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Vgcanvas.prototype, "textBaseline", {
            get: function () {
                return vgcanvas_t_get_prop_text_baseline(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        return Vgcanvas;
    }());
    AWTK.Vgcanvas = Vgcanvas;
    var WidgetProp;
    (function (WidgetProp) {
        WidgetProp[WidgetProp["X"] = get_WIDGET_PROP_X()] = "X";
        WidgetProp[WidgetProp["Y"] = get_WIDGET_PROP_Y()] = "Y";
        WidgetProp[WidgetProp["W"] = get_WIDGET_PROP_W()] = "W";
        WidgetProp[WidgetProp["H"] = get_WIDGET_PROP_H()] = "H";
        WidgetProp[WidgetProp["HIGHLIGHT"] = get_WIDGET_PROP_HIGHLIGHT()] = "HIGHLIGHT";
        WidgetProp[WidgetProp["BAR_SIZE"] = get_WIDGET_PROP_BAR_SIZE()] = "BAR_SIZE";
        WidgetProp[WidgetProp["OPACITY"] = get_WIDGET_PROP_OPACITY()] = "OPACITY";
        WidgetProp[WidgetProp["MIN_W"] = get_WIDGET_PROP_MIN_W()] = "MIN_W";
        WidgetProp[WidgetProp["MAX_W"] = get_WIDGET_PROP_MAX_W()] = "MAX_W";
        WidgetProp[WidgetProp["CHILDREN_LAYOUT"] = get_WIDGET_PROP_CHILDREN_LAYOUT()] = "CHILDREN_LAYOUT";
        WidgetProp[WidgetProp["LAYOUT"] = get_WIDGET_PROP_LAYOUT()] = "LAYOUT";
        WidgetProp[WidgetProp["SELF_LAYOUT"] = get_WIDGET_PROP_SELF_LAYOUT()] = "SELF_LAYOUT";
        WidgetProp[WidgetProp["LAYOUT_W"] = get_WIDGET_PROP_LAYOUT_W()] = "LAYOUT_W";
        WidgetProp[WidgetProp["LAYOUT_H"] = get_WIDGET_PROP_LAYOUT_H()] = "LAYOUT_H";
        WidgetProp[WidgetProp["VIRTUAL_W"] = get_WIDGET_PROP_VIRTUAL_W()] = "VIRTUAL_W";
        WidgetProp[WidgetProp["VIRTUAL_H"] = get_WIDGET_PROP_VIRTUAL_H()] = "VIRTUAL_H";
        WidgetProp[WidgetProp["NAME"] = get_WIDGET_PROP_NAME()] = "NAME";
        WidgetProp[WidgetProp["CLOSABLE"] = get_WIDGET_PROP_CLOSABLE()] = "CLOSABLE";
        WidgetProp[WidgetProp["CURSOR"] = get_WIDGET_PROP_CURSOR()] = "CURSOR";
        WidgetProp[WidgetProp["VALUE"] = get_WIDGET_PROP_VALUE()] = "VALUE";
        WidgetProp[WidgetProp["LENGTH"] = get_WIDGET_PROP_LENGTH()] = "LENGTH";
        WidgetProp[WidgetProp["TEXT"] = get_WIDGET_PROP_TEXT()] = "TEXT";
        WidgetProp[WidgetProp["TR_TEXT"] = get_WIDGET_PROP_TR_TEXT()] = "TR_TEXT";
        WidgetProp[WidgetProp["STYLE"] = get_WIDGET_PROP_STYLE()] = "STYLE";
        WidgetProp[WidgetProp["ENABLE"] = get_WIDGET_PROP_ENABLE()] = "ENABLE";
        WidgetProp[WidgetProp["FLOATING"] = get_WIDGET_PROP_FLOATING()] = "FLOATING";
        WidgetProp[WidgetProp["MARGIN"] = get_WIDGET_PROP_MARGIN()] = "MARGIN";
        WidgetProp[WidgetProp["SPACING"] = get_WIDGET_PROP_SPACING()] = "SPACING";
        WidgetProp[WidgetProp["LEFT_MARGIN"] = get_WIDGET_PROP_LEFT_MARGIN()] = "LEFT_MARGIN";
        WidgetProp[WidgetProp["RIGHT_MARGIN"] = get_WIDGET_PROP_RIGHT_MARGIN()] = "RIGHT_MARGIN";
        WidgetProp[WidgetProp["TOP_MARGIN"] = get_WIDGET_PROP_TOP_MARGIN()] = "TOP_MARGIN";
        WidgetProp[WidgetProp["BOTTOM_MARGIN"] = get_WIDGET_PROP_BOTTOM_MARGIN()] = "BOTTOM_MARGIN";
        WidgetProp[WidgetProp["STEP"] = get_WIDGET_PROP_STEP()] = "STEP";
        WidgetProp[WidgetProp["VISIBLE"] = get_WIDGET_PROP_VISIBLE()] = "VISIBLE";
        WidgetProp[WidgetProp["SENSITIVE"] = get_WIDGET_PROP_SENSITIVE()] = "SENSITIVE";
        WidgetProp[WidgetProp["ANIMATION"] = get_WIDGET_PROP_ANIMATION()] = "ANIMATION";
        WidgetProp[WidgetProp["ANIM_HINT"] = get_WIDGET_PROP_ANIM_HINT()] = "ANIM_HINT";
        WidgetProp[WidgetProp["FULLSCREEN"] = get_WIDGET_PROP_FULLSCREEN()] = "FULLSCREEN";
        WidgetProp[WidgetProp["OPEN_ANIM_HINT"] = get_WIDGET_PROP_OPEN_ANIM_HINT()] = "OPEN_ANIM_HINT";
        WidgetProp[WidgetProp["CLOSE_ANIM_HINT"] = get_WIDGET_PROP_CLOSE_ANIM_HINT()] = "CLOSE_ANIM_HINT";
        WidgetProp[WidgetProp["MIN"] = get_WIDGET_PROP_MIN()] = "MIN";
        WidgetProp[WidgetProp["TIPS"] = get_WIDGET_PROP_TIPS()] = "TIPS";
        WidgetProp[WidgetProp["INPUT_TYPE"] = get_WIDGET_PROP_INPUT_TYPE()] = "INPUT_TYPE";
        WidgetProp[WidgetProp["READONLY"] = get_WIDGET_PROP_READONLY()] = "READONLY";
        WidgetProp[WidgetProp["PASSWORD_VISIBLE"] = get_WIDGET_PROP_PASSWORD_VISIBLE()] = "PASSWORD_VISIBLE";
        WidgetProp[WidgetProp["ACTIVE"] = get_WIDGET_PROP_ACTIVE()] = "ACTIVE";
        WidgetProp[WidgetProp["VERTICAL"] = get_WIDGET_PROP_VERTICAL()] = "VERTICAL";
        WidgetProp[WidgetProp["SHOW_TEXT"] = get_WIDGET_PROP_SHOW_TEXT()] = "SHOW_TEXT";
        WidgetProp[WidgetProp["XOFFSET"] = get_WIDGET_PROP_XOFFSET()] = "XOFFSET";
        WidgetProp[WidgetProp["YOFFSET"] = get_WIDGET_PROP_YOFFSET()] = "YOFFSET";
        WidgetProp[WidgetProp["ALIGN_V"] = get_WIDGET_PROP_ALIGN_V()] = "ALIGN_V";
        WidgetProp[WidgetProp["ALIGN_H"] = get_WIDGET_PROP_ALIGN_H()] = "ALIGN_H";
        WidgetProp[WidgetProp["AUTO_PLAY"] = get_WIDGET_PROP_AUTO_PLAY()] = "AUTO_PLAY";
        WidgetProp[WidgetProp["LOOP"] = get_WIDGET_PROP_LOOP()] = "LOOP";
        WidgetProp[WidgetProp["AUTO_FIX"] = get_WIDGET_PROP_AUTO_FIX()] = "AUTO_FIX";
        WidgetProp[WidgetProp["X_MIN"] = get_WIDGET_PROP_X_MIN()] = "X_MIN";
        WidgetProp[WidgetProp["X_MAX"] = get_WIDGET_PROP_X_MAX()] = "X_MAX";
        WidgetProp[WidgetProp["Y_MIN"] = get_WIDGET_PROP_Y_MIN()] = "Y_MIN";
        WidgetProp[WidgetProp["Y_MAX"] = get_WIDGET_PROP_Y_MAX()] = "Y_MAX";
        WidgetProp[WidgetProp["MAX"] = get_WIDGET_PROP_MAX()] = "MAX";
        WidgetProp[WidgetProp["ROW"] = get_WIDGET_PROP_ROW()] = "ROW";
        WidgetProp[WidgetProp["STATE_FOR_STYLE"] = get_WIDGET_PROP_STATE_FOR_STYLE()] = "STATE_FOR_STYLE";
        WidgetProp[WidgetProp["THEME"] = get_WIDGET_PROP_THEME()] = "THEME";
        WidgetProp[WidgetProp["STAGE"] = get_WIDGET_PROP_STAGE()] = "STAGE";
        WidgetProp[WidgetProp["IMAGE_MANAGER"] = get_WIDGET_PROP_IMAGE_MANAGER()] = "IMAGE_MANAGER";
        WidgetProp[WidgetProp["ASSETS_MANAGER"] = get_WIDGET_PROP_ASSETS_MANAGER()] = "ASSETS_MANAGER";
        WidgetProp[WidgetProp["LOCALE_INFO"] = get_WIDGET_PROP_LOCALE_INFO()] = "LOCALE_INFO";
        WidgetProp[WidgetProp["FONT_MANAGER"] = get_WIDGET_PROP_FONT_MANAGER()] = "FONT_MANAGER";
        WidgetProp[WidgetProp["THEME_OBJ"] = get_WIDGET_PROP_THEME_OBJ()] = "THEME_OBJ";
        WidgetProp[WidgetProp["DEFAULT_THEME_OBJ"] = get_WIDGET_PROP_DEFAULT_THEME_OBJ()] = "DEFAULT_THEME_OBJ";
        WidgetProp[WidgetProp["ITEM_WIDTH"] = get_WIDGET_PROP_ITEM_WIDTH()] = "ITEM_WIDTH";
        WidgetProp[WidgetProp["ITEM_HEIGHT"] = get_WIDGET_PROP_ITEM_HEIGHT()] = "ITEM_HEIGHT";
        WidgetProp[WidgetProp["DEFAULT_ITEM_HEIGHT"] = get_WIDGET_PROP_DEFAULT_ITEM_HEIGHT()] = "DEFAULT_ITEM_HEIGHT";
        WidgetProp[WidgetProp["XSLIDABLE"] = get_WIDGET_PROP_XSLIDABLE()] = "XSLIDABLE";
        WidgetProp[WidgetProp["YSLIDABLE"] = get_WIDGET_PROP_YSLIDABLE()] = "YSLIDABLE";
        WidgetProp[WidgetProp["REPEAT"] = get_WIDGET_PROP_REPEAT()] = "REPEAT";
        WidgetProp[WidgetProp["ENABLE_LONG_PRESS"] = get_WIDGET_PROP_ENABLE_LONG_PRESS()] = "ENABLE_LONG_PRESS";
        WidgetProp[WidgetProp["ANIMATABLE"] = get_WIDGET_PROP_ANIMATABLE()] = "ANIMATABLE";
        WidgetProp[WidgetProp["AUTO_HIDE_SCROLL_BAR"] = get_WIDGET_PROP_AUTO_HIDE_SCROLL_BAR()] = "AUTO_HIDE_SCROLL_BAR";
        WidgetProp[WidgetProp["IMAGE"] = get_WIDGET_PROP_IMAGE()] = "IMAGE";
        WidgetProp[WidgetProp["FORMAT"] = get_WIDGET_PROP_FORMAT()] = "FORMAT";
        WidgetProp[WidgetProp["DRAW_TYPE"] = get_WIDGET_PROP_DRAW_TYPE()] = "DRAW_TYPE";
        WidgetProp[WidgetProp["SELECTABLE"] = get_WIDGET_PROP_SELECTABLE()] = "SELECTABLE";
        WidgetProp[WidgetProp["CLICKABLE"] = get_WIDGET_PROP_CLICKABLE()] = "CLICKABLE";
        WidgetProp[WidgetProp["SCALE_X"] = get_WIDGET_PROP_SCALE_X()] = "SCALE_X";
        WidgetProp[WidgetProp["SCALE_Y"] = get_WIDGET_PROP_SCALE_Y()] = "SCALE_Y";
        WidgetProp[WidgetProp["ANCHOR_X"] = get_WIDGET_PROP_ANCHOR_X()] = "ANCHOR_X";
        WidgetProp[WidgetProp["ANCHOR_Y"] = get_WIDGET_PROP_ANCHOR_Y()] = "ANCHOR_Y";
        WidgetProp[WidgetProp["ROTATION"] = get_WIDGET_PROP_ROTATION()] = "ROTATION";
        WidgetProp[WidgetProp["COMPACT"] = get_WIDGET_PROP_COMPACT()] = "COMPACT";
        WidgetProp[WidgetProp["ICON"] = get_WIDGET_PROP_ICON()] = "ICON";
        WidgetProp[WidgetProp["OPTIONS"] = get_WIDGET_PROP_OPTIONS()] = "OPTIONS";
        WidgetProp[WidgetProp["SELECTED"] = get_WIDGET_PROP_SELECTED()] = "SELECTED";
        WidgetProp[WidgetProp["CHECKED"] = get_WIDGET_PROP_CHECKED()] = "CHECKED";
        WidgetProp[WidgetProp["ACTIVE_ICON"] = get_WIDGET_PROP_ACTIVE_ICON()] = "ACTIVE_ICON";
        WidgetProp[WidgetProp["OPEN_WINDOW"] = get_WIDGET_PROP_OPEN_WINDOW()] = "OPEN_WINDOW";
        WidgetProp[WidgetProp["SELECTED_INDEX"] = get_WIDGET_PROP_SELECTED_INDEX()] = "SELECTED_INDEX";
        WidgetProp[WidgetProp["CLOSE_WHEN_CLICK"] = get_WIDGET_PROP_CLOSE_WHEN_CLICK()] = "CLOSE_WHEN_CLICK";
        WidgetProp[WidgetProp["CLOSE_WHEN_CLICK_OUTSIDE"] = get_WIDGET_PROP_CLOSE_WHEN_CLICK_OUTSIDE()] = "CLOSE_WHEN_CLICK_OUTSIDE";
        WidgetProp[WidgetProp["LINE_GAP"] = get_WIDGET_PROP_LINE_GAP()] = "LINE_GAP";
        WidgetProp[WidgetProp["BG_COLOR"] = get_WIDGET_PROP_BG_COLOR()] = "BG_COLOR";
        WidgetProp[WidgetProp["BORDER_COLOR"] = get_WIDGET_PROP_BORDER_COLOR()] = "BORDER_COLOR";
        WidgetProp[WidgetProp["DELAY"] = get_WIDGET_PROP_DELAY()] = "DELAY";
        WidgetProp[WidgetProp["IS_KEYBOARD"] = get_WIDGET_PROP_IS_KEYBOARD()] = "IS_KEYBOARD";
        WidgetProp[WidgetProp["FOCUS"] = get_WIDGET_PROP_FOCUS()] = "FOCUS";
        WidgetProp[WidgetProp["FOCUSABLE"] = get_WIDGET_PROP_FOCUSABLE()] = "FOCUSABLE";
    })(WidgetProp = AWTK.WidgetProp || (AWTK.WidgetProp = {}));
    ;
    var WidgetType;
    (function (WidgetType) {
        WidgetType[WidgetType["NONE"] = get_WIDGET_TYPE_NONE()] = "NONE";
        WidgetType[WidgetType["WINDOW_MANAGER"] = get_WIDGET_TYPE_WINDOW_MANAGER()] = "WINDOW_MANAGER";
        WidgetType[WidgetType["NORMAL_WINDOW"] = get_WIDGET_TYPE_NORMAL_WINDOW()] = "NORMAL_WINDOW";
        WidgetType[WidgetType["TOOL_BAR"] = get_WIDGET_TYPE_TOOL_BAR()] = "TOOL_BAR";
        WidgetType[WidgetType["DIALOG"] = get_WIDGET_TYPE_DIALOG()] = "DIALOG";
        WidgetType[WidgetType["POPUP"] = get_WIDGET_TYPE_POPUP()] = "POPUP";
        WidgetType[WidgetType["SYSTEM_BAR"] = get_WIDGET_TYPE_SYSTEM_BAR()] = "SYSTEM_BAR";
        WidgetType[WidgetType["SPRITE"] = get_WIDGET_TYPE_SPRITE()] = "SPRITE";
        WidgetType[WidgetType["KEYBOARD"] = get_WIDGET_TYPE_KEYBOARD()] = "KEYBOARD";
        WidgetType[WidgetType["DND"] = get_WIDGET_TYPE_DND()] = "DND";
        WidgetType[WidgetType["LABEL"] = get_WIDGET_TYPE_LABEL()] = "LABEL";
        WidgetType[WidgetType["BUTTON"] = get_WIDGET_TYPE_BUTTON()] = "BUTTON";
        WidgetType[WidgetType["IMAGE"] = get_WIDGET_TYPE_IMAGE()] = "IMAGE";
        WidgetType[WidgetType["EDIT"] = get_WIDGET_TYPE_EDIT()] = "EDIT";
        WidgetType[WidgetType["PROGRESS_BAR"] = get_WIDGET_TYPE_PROGRESS_BAR()] = "PROGRESS_BAR";
        WidgetType[WidgetType["GROUP_BOX"] = get_WIDGET_TYPE_GROUP_BOX()] = "GROUP_BOX";
        WidgetType[WidgetType["CHECK_BUTTON"] = get_WIDGET_TYPE_CHECK_BUTTON()] = "CHECK_BUTTON";
        WidgetType[WidgetType["RADIO_BUTTON"] = get_WIDGET_TYPE_RADIO_BUTTON()] = "RADIO_BUTTON";
        WidgetType[WidgetType["DIALOG_TITLE"] = get_WIDGET_TYPE_DIALOG_TITLE()] = "DIALOG_TITLE";
        WidgetType[WidgetType["DIALOG_CLIENT"] = get_WIDGET_TYPE_DIALOG_CLIENT()] = "DIALOG_CLIENT";
        WidgetType[WidgetType["SLIDER"] = get_WIDGET_TYPE_SLIDER()] = "SLIDER";
        WidgetType[WidgetType["VIEW"] = get_WIDGET_TYPE_VIEW()] = "VIEW";
        WidgetType[WidgetType["COMBO_BOX"] = get_WIDGET_TYPE_COMBO_BOX()] = "COMBO_BOX";
        WidgetType[WidgetType["COMBO_BOX_ITEM"] = get_WIDGET_TYPE_COMBO_BOX_ITEM()] = "COMBO_BOX_ITEM";
        WidgetType[WidgetType["SLIDE_VIEW"] = get_WIDGET_TYPE_SLIDE_VIEW()] = "SLIDE_VIEW";
        WidgetType[WidgetType["PAGES"] = get_WIDGET_TYPE_PAGES()] = "PAGES";
        WidgetType[WidgetType["TAB_BUTTON"] = get_WIDGET_TYPE_TAB_BUTTON()] = "TAB_BUTTON";
        WidgetType[WidgetType["TAB_CONTROL"] = get_WIDGET_TYPE_TAB_CONTROL()] = "TAB_CONTROL";
        WidgetType[WidgetType["TAB_BUTTON_GROUP"] = get_WIDGET_TYPE_TAB_BUTTON_GROUP()] = "TAB_BUTTON_GROUP";
        WidgetType[WidgetType["BUTTON_GROUP"] = get_WIDGET_TYPE_BUTTON_GROUP()] = "BUTTON_GROUP";
        WidgetType[WidgetType["CANDIDATES"] = get_WIDGET_TYPE_CANDIDATES()] = "CANDIDATES";
        WidgetType[WidgetType["SPIN_BOX"] = get_WIDGET_TYPE_SPIN_BOX()] = "SPIN_BOX";
        WidgetType[WidgetType["DRAGGER"] = get_WIDGET_TYPE_DRAGGER()] = "DRAGGER";
        WidgetType[WidgetType["SCROLL_BAR"] = get_WIDGET_TYPE_SCROLL_BAR()] = "SCROLL_BAR";
        WidgetType[WidgetType["SCROLL_BAR_DESKTOP"] = get_WIDGET_TYPE_SCROLL_BAR_DESKTOP()] = "SCROLL_BAR_DESKTOP";
        WidgetType[WidgetType["SCROLL_BAR_MOBILE"] = get_WIDGET_TYPE_SCROLL_BAR_MOBILE()] = "SCROLL_BAR_MOBILE";
        WidgetType[WidgetType["SCROLL_VIEW"] = get_WIDGET_TYPE_SCROLL_VIEW()] = "SCROLL_VIEW";
        WidgetType[WidgetType["LIST_VIEW"] = get_WIDGET_TYPE_LIST_VIEW()] = "LIST_VIEW";
        WidgetType[WidgetType["LIST_VIEW_H"] = get_WIDGET_TYPE_LIST_VIEW_H()] = "LIST_VIEW_H";
        WidgetType[WidgetType["LIST_ITEM"] = get_WIDGET_TYPE_LIST_ITEM()] = "LIST_ITEM";
        WidgetType[WidgetType["COLOR_PICKER"] = get_WIDGET_TYPE_COLOR_PICKER()] = "COLOR_PICKER";
        WidgetType[WidgetType["COLOR_COMPONENT"] = get_WIDGET_TYPE_COLOR_COMPONENT()] = "COLOR_COMPONENT";
        WidgetType[WidgetType["COLOR_TILE"] = get_WIDGET_TYPE_COLOR_TILE()] = "COLOR_TILE";
        WidgetType[WidgetType["RICH_TEXT"] = get_WIDGET_TYPE_RICH_TEXT()] = "RICH_TEXT";
        WidgetType[WidgetType["APP_BAR"] = get_WIDGET_TYPE_APP_BAR()] = "APP_BAR";
        WidgetType[WidgetType["GRID"] = get_WIDGET_TYPE_GRID()] = "GRID";
        WidgetType[WidgetType["GRID_ITEM"] = get_WIDGET_TYPE_GRID_ITEM()] = "GRID_ITEM";
        WidgetType[WidgetType["ROW"] = get_WIDGET_TYPE_ROW()] = "ROW";
        WidgetType[WidgetType["COLUMN"] = get_WIDGET_TYPE_COLUMN()] = "COLUMN";
        WidgetType[WidgetType["CALIBRATION_WIN"] = get_WIDGET_TYPE_CALIBRATION_WIN()] = "CALIBRATION_WIN";
    })(WidgetType = AWTK.WidgetType || (AWTK.WidgetType = {}));
    ;
    var WindowStage;
    (function (WindowStage) {
        WindowStage[WindowStage["NONE"] = get_WINDOW_STAGE_NONE()] = "NONE";
        WindowStage[WindowStage["CREATED"] = get_WINDOW_STAGE_CREATED()] = "CREATED";
        WindowStage[WindowStage["OPENED"] = get_WINDOW_STAGE_OPENED()] = "OPENED";
        WindowStage[WindowStage["CLOSED"] = get_WINDOW_STAGE_CLOSED()] = "CLOSED";
    })(WindowStage = AWTK.WindowStage || (AWTK.WindowStage = {}));
    ;
    var WindowClosable;
    (function (WindowClosable) {
        WindowClosable[WindowClosable["YES"] = get_WINDOW_CLOSABLE_YES()] = "YES";
        WindowClosable[WindowClosable["NO"] = get_WINDOW_CLOSABLE_NO()] = "NO";
        WindowClosable[WindowClosable["CONFIRM"] = get_WINDOW_CLOSABLE_CONFIRM()] = "CONFIRM";
    })(WindowClosable = AWTK.WindowClosable || (AWTK.WindowClosable = {}));
    ;
    var WidgetState;
    (function (WidgetState) {
        WidgetState[WidgetState["STATE_NONE"] = get_WIDGET_STATE_NONE()] = "STATE_NONE";
        WidgetState[WidgetState["STATE_NORMAL"] = get_WIDGET_STATE_NORMAL()] = "STATE_NORMAL";
        WidgetState[WidgetState["STATE_PRESSED"] = get_WIDGET_STATE_PRESSED()] = "STATE_PRESSED";
        WidgetState[WidgetState["STATE_OVER"] = get_WIDGET_STATE_OVER()] = "STATE_OVER";
        WidgetState[WidgetState["STATE_DISABLE"] = get_WIDGET_STATE_DISABLE()] = "STATE_DISABLE";
        WidgetState[WidgetState["STATE_FOCUSED"] = get_WIDGET_STATE_FOCUSED()] = "STATE_FOCUSED";
        WidgetState[WidgetState["STATE_CHECKED"] = get_WIDGET_STATE_CHECKED()] = "STATE_CHECKED";
        WidgetState[WidgetState["STATE_UNCHECKED"] = get_WIDGET_STATE_UNCHECKED()] = "STATE_UNCHECKED";
        WidgetState[WidgetState["STATE_EMPTY"] = get_WIDGET_STATE_EMPTY()] = "STATE_EMPTY";
        WidgetState[WidgetState["STATE_ERROR"] = get_WIDGET_STATE_ERROR()] = "STATE_ERROR";
        WidgetState[WidgetState["STATE_SELECTED"] = get_WIDGET_STATE_SELECTED()] = "STATE_SELECTED";
        WidgetState[WidgetState["STATE_NORMAL_OF_CHECKED"] = get_WIDGET_STATE_NORMAL_OF_CHECKED()] = "STATE_NORMAL_OF_CHECKED";
        WidgetState[WidgetState["STATE_PRESSED_OF_CHECKED"] = get_WIDGET_STATE_PRESSED_OF_CHECKED()] = "STATE_PRESSED_OF_CHECKED";
        WidgetState[WidgetState["STATE_OVER_OF_CHECKED"] = get_WIDGET_STATE_OVER_OF_CHECKED()] = "STATE_OVER_OF_CHECKED";
        WidgetState[WidgetState["STATE_NORMAL_OF_ACTIVE"] = get_WIDGET_STATE_NORMAL_OF_ACTIVE()] = "STATE_NORMAL_OF_ACTIVE";
        WidgetState[WidgetState["STATE_PRESSED_OF_ACTIVE"] = get_WIDGET_STATE_PRESSED_OF_ACTIVE()] = "STATE_PRESSED_OF_ACTIVE";
        WidgetState[WidgetState["STATE_OVER_OF_ACTIVE"] = get_WIDGET_STATE_OVER_OF_ACTIVE()] = "STATE_OVER_OF_ACTIVE";
    })(WidgetState = AWTK.WidgetState || (AWTK.WidgetState = {}));
    ;
    var Widget = /** @class */ (function () {
        function Widget(nativeObj) {
            this.nativeObj = nativeObj;
        }
        Widget.prototype.countChildren = function () {
            return widget_count_children(this.nativeObj);
        };
        Widget.prototype.getChild = function (index) {
            return new Widget(widget_get_child(this.nativeObj, index));
        };
        Widget.prototype.indexOf = function () {
            return widget_index_of(this.nativeObj);
        };
        Widget.prototype.move = function (x, y) {
            return widget_move(this.nativeObj, x, y);
        };
        Widget.prototype.resize = function (w, h) {
            return widget_resize(this.nativeObj, w, h);
        };
        Widget.prototype.moveResize = function (x, y, w, h) {
            return widget_move_resize(this.nativeObj, x, y, w, h);
        };
        Widget.prototype.setValue = function (value) {
            return widget_set_value(this.nativeObj, value);
        };
        Widget.prototype.animateValueTo = function (value, duration) {
            return widget_animate_value_to(this.nativeObj, value, duration);
        };
        Widget.prototype.addValue = function (delta) {
            return widget_add_value(this.nativeObj, delta);
        };
        Widget.prototype.useStyle = function (style) {
            return widget_use_style(this.nativeObj, style);
        };
        Widget.prototype.setText = function (text) {
            return widget_set_text_utf8(this.nativeObj, text);
        };
        Widget.prototype.setTrText = function (text) {
            return widget_set_tr_text(this.nativeObj, text);
        };
        Widget.prototype.getValue = function () {
            return widget_get_value(this.nativeObj);
        };
        Widget.prototype.getText = function () {
            return widget_get_text(this.nativeObj);
        };
        Widget.prototype.setName = function (name) {
            return widget_set_name(this.nativeObj, name);
        };
        Widget.prototype.setCursor = function (cursor) {
            return widget_set_cursor(this.nativeObj, cursor);
        };
        Widget.prototype.setAnimation = function (animation) {
            return widget_set_animation(this.nativeObj, animation);
        };
        Widget.prototype.createAnimator = function (animation) {
            return widget_create_animator(this.nativeObj, animation);
        };
        Widget.prototype.startAnimator = function (name) {
            return widget_start_animator(this.nativeObj, name);
        };
        Widget.prototype.setAnimatorTimeScale = function (name, time_scale) {
            return widget_set_animator_time_scale(this.nativeObj, name, time_scale);
        };
        Widget.prototype.pauseAnimator = function (name) {
            return widget_pause_animator(this.nativeObj, name);
        };
        Widget.prototype.stopAnimator = function (name) {
            return widget_stop_animator(this.nativeObj, name);
        };
        Widget.prototype.destroyAnimator = function (name) {
            return widget_destroy_animator(this.nativeObj, name);
        };
        Widget.prototype.setEnable = function (enable) {
            return widget_set_enable(this.nativeObj, enable);
        };
        Widget.prototype.setFloating = function (floating) {
            return widget_set_floating(this.nativeObj, floating);
        };
        Widget.prototype.setFocused = function (focused) {
            return widget_set_focused(this.nativeObj, focused);
        };
        Widget.prototype.child = function (name) {
            return new Widget(widget_child(this.nativeObj, name));
        };
        Widget.prototype.lookup = function (name, recursive) {
            return new Widget(widget_lookup(this.nativeObj, name, recursive));
        };
        Widget.prototype.lookupByType = function (type, recursive) {
            return new Widget(widget_lookup_by_type(this.nativeObj, type, recursive));
        };
        Widget.prototype.setVisible = function (visible, recursive) {
            return widget_set_visible(this.nativeObj, visible, recursive);
        };
        Widget.prototype.setSensitive = function (sensitive) {
            return widget_set_sensitive(this.nativeObj, sensitive);
        };
        Widget.prototype.on = function (type, on_event, ctx) {
            return widget_on(this.nativeObj, type, Module.addFunction(on_event), ctx);
        };
        Widget.prototype.off = function (id) {
            return widget_off(this.nativeObj, id);
        };
        Widget.prototype.invalidateForce = function (r) {
            return widget_invalidate_force(this.nativeObj, r ? r.nativeObj : null);
        };
        Widget.prototype.setPropStr = function (name, v) {
            return widget_set_prop_str(this.nativeObj, name, v);
        };
        Widget.prototype.getPropStr = function (name, defval) {
            return widget_get_prop_str(this.nativeObj, name, defval);
        };
        Widget.prototype.setPropInt = function (name, v) {
            return widget_set_prop_int(this.nativeObj, name, v);
        };
        Widget.prototype.getPropInt = function (name, defval) {
            return widget_get_prop_int(this.nativeObj, name, defval);
        };
        Widget.prototype.setPropBool = function (name, v) {
            return widget_set_prop_bool(this.nativeObj, name, v);
        };
        Widget.prototype.getPropBool = function (name, defval) {
            return widget_get_prop_bool(this.nativeObj, name, defval);
        };
        Widget.prototype.isWindowOpened = function () {
            return widget_is_window_opened(this.nativeObj);
        };
        Widget.prototype.isWindow = function () {
            return widget_is_window(this.nativeObj);
        };
        Widget.prototype.isDesigningWindow = function () {
            return widget_is_designing_window(this.nativeObj);
        };
        Widget.prototype.isWindowManager = function () {
            return widget_is_window_manager(this.nativeObj);
        };
        Widget.prototype.foreach = function (visit, ctx) {
            return widget_foreach(this.nativeObj, visit, ctx);
        };
        Widget.prototype.getWindow = function () {
            return new Widget(widget_get_window(this.nativeObj));
        };
        Widget.prototype.getWindowManager = function () {
            return new Widget(widget_get_window_manager(this.nativeObj));
        };
        Widget.prototype.getType = function () {
            return widget_get_type(this.nativeObj);
        };
        Widget.prototype.clone = function (parent) {
            return new Widget(widget_clone(this.nativeObj, parent ? parent.nativeObj : null));
        };
        Widget.prototype.equal = function (other) {
            return widget_equal(this.nativeObj, other ? other.nativeObj : null);
        };
        Widget.cast = function (widget) {
            return new Widget(widget_cast(widget ? (widget.nativeObj || widget) : null));
        };
        Widget.prototype.destroy = function () {
            return widget_destroy(this.nativeObj);
        };
        Widget.prototype.layout = function () {
            return widget_layout(this.nativeObj);
        };
        Widget.prototype.setSelfLayout = function (params) {
            return widget_set_self_layout(this.nativeObj, params);
        };
        Widget.prototype.setChildrenLayout = function (params) {
            return widget_set_children_layout(this.nativeObj, params);
        };
        Widget.prototype.setSelfLayoutParams = function (x, y, w, h) {
            return widget_set_self_layout_params(this.nativeObj, x, y, w, h);
        };
        Object.defineProperty(Widget.prototype, "x", {
            get: function () {
                return widget_t_get_prop_x(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Widget.prototype, "y", {
            get: function () {
                return widget_t_get_prop_y(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Widget.prototype, "w", {
            get: function () {
                return widget_t_get_prop_w(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Widget.prototype, "h", {
            get: function () {
                return widget_t_get_prop_h(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Widget.prototype, "name", {
            get: function () {
                return widget_t_get_prop_name(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Widget.prototype, "trText", {
            get: function () {
                return widget_t_get_prop_tr_text(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Widget.prototype, "style", {
            get: function () {
                return widget_t_get_prop_style(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Widget.prototype, "animation", {
            get: function () {
                return widget_t_get_prop_animation(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Widget.prototype, "enable", {
            get: function () {
                return widget_t_get_prop_enable(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Widget.prototype, "visible", {
            get: function () {
                return widget_t_get_prop_visible(this.nativeObj);
            },
            set: function (value) {
                widget_t_set_prop_visible(this.nativeObj, value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Widget.prototype, "sensitive", {
            get: function () {
                return widget_t_get_prop_sensitive(this.nativeObj);
            },
            set: function (value) {
                widget_t_set_prop_sensitive(this.nativeObj, value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Widget.prototype, "floating", {
            get: function () {
                return widget_t_get_prop_floating(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        return Widget;
    }());
    AWTK.Widget = Widget;
    var AssetType;
    (function (AssetType) {
        AssetType[AssetType["NONE"] = get_ASSET_TYPE_NONE()] = "NONE";
        AssetType[AssetType["FONT"] = get_ASSET_TYPE_FONT()] = "FONT";
        AssetType[AssetType["IMAGE"] = get_ASSET_TYPE_IMAGE()] = "IMAGE";
        AssetType[AssetType["STYLE"] = get_ASSET_TYPE_STYLE()] = "STYLE";
        AssetType[AssetType["UI"] = get_ASSET_TYPE_UI()] = "UI";
        AssetType[AssetType["XML"] = get_ASSET_TYPE_XML()] = "XML";
        AssetType[AssetType["STRINGS"] = get_ASSET_TYPE_STRINGS()] = "STRINGS";
        AssetType[AssetType["SCRIPT"] = get_ASSET_TYPE_SCRIPT()] = "SCRIPT";
        AssetType[AssetType["DATA"] = get_ASSET_TYPE_DATA()] = "DATA";
    })(AssetType = AWTK.AssetType || (AWTK.AssetType = {}));
    ;
    var Color = /** @class */ (function () {
        function Color(nativeObj) {
            this.nativeObj = nativeObj;
        }
        Color.create = function (r, b, g, a) {
            return new Color(color_create(r, b, g, a));
        };
        Color.prototype.fromStr = function (str) {
            return new Color(color_from_str(this.nativeObj, str));
        };
        Color.prototype.r = function () {
            return color_r(this.nativeObj);
        };
        Color.prototype.g = function () {
            return color_g(this.nativeObj);
        };
        Color.prototype.b = function () {
            return color_b(this.nativeObj);
        };
        Color.prototype.a = function () {
            return color_a(this.nativeObj);
        };
        Color.cast = function (color) {
            return new Color(color_cast(color ? (color.nativeObj || color) : null));
        };
        Color.prototype.destroy = function () {
            return color_destroy(this.nativeObj);
        };
        Object.defineProperty(Color.prototype, "color", {
            get: function () {
                return color_t_get_prop_color(this.nativeObj);
            },
            set: function (value) {
                color_t_set_prop_color(this.nativeObj, value);
            },
            enumerable: true,
            configurable: true
        });
        return Color;
    }());
    AWTK.Color = Color;
    var DateTime = /** @class */ (function () {
        function DateTime(nativeObj) {
            this.nativeObj = nativeObj;
        }
        DateTime.create = function () {
            return new DateTime(date_time_create());
        };
        DateTime.prototype.destroy = function () {
            return date_time_destroy(this.nativeObj);
        };
        Object.defineProperty(DateTime.prototype, "second", {
            get: function () {
                return date_time_t_get_prop_second(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DateTime.prototype, "minute", {
            get: function () {
                return date_time_t_get_prop_minute(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DateTime.prototype, "hour", {
            get: function () {
                return date_time_t_get_prop_hour(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DateTime.prototype, "day", {
            get: function () {
                return date_time_t_get_prop_day(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DateTime.prototype, "wday", {
            get: function () {
                return date_time_t_get_prop_wday(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DateTime.prototype, "month", {
            get: function () {
                return date_time_t_get_prop_month(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(DateTime.prototype, "year", {
            get: function () {
                return date_time_t_get_prop_year(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        return DateTime;
    }());
    AWTK.DateTime = DateTime;
    var Emitter = /** @class */ (function () {
        function Emitter(nativeObj) {
            this.nativeObj = nativeObj;
        }
        Emitter.create = function () {
            return new Emitter(emitter_create());
        };
        Emitter.prototype.dispatch = function (e) {
            return emitter_dispatch(this.nativeObj, e ? e.nativeObj : null);
        };
        Emitter.prototype.dispatchSimpleEvent = function (type) {
            return emitter_dispatch_simple_event(this.nativeObj, type);
        };
        Emitter.prototype.on = function (type, on_event, ctx) {
            return emitter_on(this.nativeObj, type, Module.addFunction(on_event), ctx);
        };
        Emitter.prototype.off = function (id) {
            return emitter_off(this.nativeObj, id);
        };
        Emitter.prototype.enable = function () {
            return emitter_enable(this.nativeObj);
        };
        Emitter.prototype.disable = function () {
            return emitter_disable(this.nativeObj);
        };
        Emitter.prototype.size = function () {
            return emitter_size(this.nativeObj);
        };
        Emitter.prototype.destroy = function () {
            return emitter_destroy(this.nativeObj);
        };
        Emitter.cast = function (emitter) {
            return new Emitter(emitter_cast(emitter ? (emitter.nativeObj || emitter) : null));
        };
        return Emitter;
    }());
    AWTK.Emitter = Emitter;
    var EventBaseType;
    (function (EventBaseType) {
        EventBaseType[EventBaseType["NONE"] = get_EVT_NONE()] = "NONE";
        EventBaseType[EventBaseType["PROP_WILL_CHANGE"] = get_EVT_PROP_WILL_CHANGE()] = "PROP_WILL_CHANGE";
        EventBaseType[EventBaseType["PROP_CHANGED"] = get_EVT_PROP_CHANGED()] = "PROP_CHANGED";
        EventBaseType[EventBaseType["ITEMS_WILL_CHANGE"] = get_EVT_ITEMS_WILL_CHANGE()] = "ITEMS_WILL_CHANGE";
        EventBaseType[EventBaseType["ITEMS_CHANGED"] = get_EVT_ITEMS_CHANGED()] = "ITEMS_CHANGED";
        EventBaseType[EventBaseType["PROPS_CHANGED"] = get_EVT_PROPS_CHANGED()] = "PROPS_CHANGED";
        EventBaseType[EventBaseType["DESTROY"] = get_EVT_DESTROY()] = "DESTROY";
    })(EventBaseType = AWTK.EventBaseType || (AWTK.EventBaseType = {}));
    ;
    var Event = /** @class */ (function () {
        function Event(nativeObj) {
            this.nativeObj = nativeObj;
        }
        Event.cast = function (event) {
            return new Event(event_cast(event ? (event.nativeObj || event) : null));
        };
        Event.create = function (type, target) {
            return new Event(event_create(type, target));
        };
        Event.prototype.destroy = function () {
            return event_destroy(this.nativeObj);
        };
        Object.defineProperty(Event.prototype, "type", {
            get: function () {
                return event_t_get_prop_type(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Event.prototype, "time", {
            get: function () {
                return event_t_get_prop_time(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Event.prototype, "target", {
            get: function () {
                return event_t_get_prop_target(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        return Event;
    }());
    AWTK.Event = Event;
    var NamedValue = /** @class */ (function () {
        function NamedValue(nativeObj) {
            this.nativeObj = nativeObj;
        }
        NamedValue.create = function () {
            return new NamedValue(named_value_create());
        };
        NamedValue.cast = function (nv) {
            return new NamedValue(named_value_cast(nv ? (nv.nativeObj || nv) : null));
        };
        NamedValue.prototype.setName = function (name) {
            return named_value_set_name(this.nativeObj, name);
        };
        NamedValue.prototype.setValue = function (value) {
            return named_value_set_value(this.nativeObj, value ? value.nativeObj : null);
        };
        NamedValue.prototype.getValue = function () {
            return new Value(named_value_get_value(this.nativeObj));
        };
        NamedValue.prototype.destroy = function () {
            return named_value_destroy(this.nativeObj);
        };
        Object.defineProperty(NamedValue.prototype, "name", {
            get: function () {
                return named_value_t_get_prop_name(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        return NamedValue;
    }());
    AWTK.NamedValue = NamedValue;
    var Point = /** @class */ (function () {
        function Point(nativeObj) {
            this.nativeObj = nativeObj;
        }
        return Point;
    }());
    AWTK.Point = Point;
    var Rect = /** @class */ (function () {
        function Rect(nativeObj) {
            this.nativeObj = nativeObj;
        }
        Rect.create = function (x, y, w, h) {
            return new Rect(rect_create(x, y, w, h));
        };
        Rect.prototype.set = function (x, y, w, h) {
            return new Rect(rect_set(this.nativeObj, x, y, w, h));
        };
        Rect.cast = function (rect) {
            return new Rect(rect_cast(rect ? (rect.nativeObj || rect) : null));
        };
        Rect.prototype.destroy = function () {
            return rect_destroy(this.nativeObj);
        };
        Object.defineProperty(Rect.prototype, "x", {
            get: function () {
                return rect_t_get_prop_x(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Rect.prototype, "y", {
            get: function () {
                return rect_t_get_prop_y(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Rect.prototype, "w", {
            get: function () {
                return rect_t_get_prop_w(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Rect.prototype, "h", {
            get: function () {
                return rect_t_get_prop_h(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        return Rect;
    }());
    AWTK.Rect = Rect;
    var TimeNow = /** @class */ (function () {
        function TimeNow(nativeObj) {
            this.nativeObj = nativeObj;
        }
        TimeNow.s = function () {
            return time_now_s();
        };
        TimeNow.ms = function () {
            return time_now_ms();
        };
        return TimeNow;
    }());
    AWTK.TimeNow = TimeNow;
    var Ret;
    (function (Ret) {
        Ret[Ret["OK"] = get_RET_OK()] = "OK";
        Ret[Ret["OOM"] = get_RET_OOM()] = "OOM";
        Ret[Ret["FAIL"] = get_RET_FAIL()] = "FAIL";
        Ret[Ret["NOT_IMPL"] = get_RET_NOT_IMPL()] = "NOT_IMPL";
        Ret[Ret["QUIT"] = get_RET_QUIT()] = "QUIT";
        Ret[Ret["FOUND"] = get_RET_FOUND()] = "FOUND";
        Ret[Ret["BUSY"] = get_RET_BUSY()] = "BUSY";
        Ret[Ret["REMOVE"] = get_RET_REMOVE()] = "REMOVE";
        Ret[Ret["REPEAT"] = get_RET_REPEAT()] = "REPEAT";
        Ret[Ret["NOT_FOUND"] = get_RET_NOT_FOUND()] = "NOT_FOUND";
        Ret[Ret["DONE"] = get_RET_DONE()] = "DONE";
        Ret[Ret["STOP"] = get_RET_STOP()] = "STOP";
        Ret[Ret["CONTINUE"] = get_RET_CONTINUE()] = "CONTINUE";
        Ret[Ret["OBJECT_CHANGED"] = get_RET_OBJECT_CHANGED()] = "OBJECT_CHANGED";
        Ret[Ret["ITEMS_CHANGED"] = get_RET_ITEMS_CHANGED()] = "ITEMS_CHANGED";
        Ret[Ret["BAD_PARAMS"] = get_RET_BAD_PARAMS()] = "BAD_PARAMS";
    })(Ret = AWTK.Ret || (AWTK.Ret = {}));
    ;
    var ValueType;
    (function (ValueType) {
        ValueType[ValueType["INVALID"] = get_VALUE_TYPE_INVALID()] = "INVALID";
        ValueType[ValueType["BOOL"] = get_VALUE_TYPE_BOOL()] = "BOOL";
        ValueType[ValueType["INT8"] = get_VALUE_TYPE_INT8()] = "INT8";
        ValueType[ValueType["UINT8"] = get_VALUE_TYPE_UINT8()] = "UINT8";
        ValueType[ValueType["INT16"] = get_VALUE_TYPE_INT16()] = "INT16";
        ValueType[ValueType["UINT16"] = get_VALUE_TYPE_UINT16()] = "UINT16";
        ValueType[ValueType["INT32"] = get_VALUE_TYPE_INT32()] = "INT32";
        ValueType[ValueType["UINT32"] = get_VALUE_TYPE_UINT32()] = "UINT32";
        ValueType[ValueType["INT64"] = get_VALUE_TYPE_INT64()] = "INT64";
        ValueType[ValueType["UINT64"] = get_VALUE_TYPE_UINT64()] = "UINT64";
        ValueType[ValueType["POINTER"] = get_VALUE_TYPE_POINTER()] = "POINTER";
        ValueType[ValueType["FLOAT"] = get_VALUE_TYPE_FLOAT()] = "FLOAT";
        ValueType[ValueType["FLOAT32"] = get_VALUE_TYPE_FLOAT32()] = "FLOAT32";
        ValueType[ValueType["DOUBLE"] = get_VALUE_TYPE_DOUBLE()] = "DOUBLE";
        ValueType[ValueType["STRING"] = get_VALUE_TYPE_STRING()] = "STRING";
        ValueType[ValueType["WSTRING"] = get_VALUE_TYPE_WSTRING()] = "WSTRING";
        ValueType[ValueType["OBJECT"] = get_VALUE_TYPE_OBJECT()] = "OBJECT";
    })(ValueType = AWTK.ValueType || (AWTK.ValueType = {}));
    ;
    var Value = /** @class */ (function () {
        function Value(nativeObj) {
            this.nativeObj = nativeObj;
        }
        Value.prototype.setBool = function (value) {
            return new Value(value_set_bool(this.nativeObj, value));
        };
        Value.prototype.bool = function () {
            return value_bool(this.nativeObj);
        };
        Value.prototype.setInt8 = function (value) {
            return new Value(value_set_int8(this.nativeObj, value));
        };
        Value.prototype.int8 = function () {
            return value_int8(this.nativeObj);
        };
        Value.prototype.setUint8 = function (value) {
            return new Value(value_set_uint8(this.nativeObj, value));
        };
        Value.prototype.uint8 = function () {
            return value_uint8(this.nativeObj);
        };
        Value.prototype.setInt16 = function (value) {
            return new Value(value_set_int16(this.nativeObj, value));
        };
        Value.prototype.int16 = function () {
            return value_int16(this.nativeObj);
        };
        Value.prototype.setUint16 = function (value) {
            return new Value(value_set_uint16(this.nativeObj, value));
        };
        Value.prototype.uint16 = function () {
            return value_uint16(this.nativeObj);
        };
        Value.prototype.setInt32 = function (value) {
            return new Value(value_set_int32(this.nativeObj, value));
        };
        Value.prototype.int32 = function () {
            return value_int32(this.nativeObj);
        };
        Value.prototype.setUint32 = function (value) {
            return new Value(value_set_uint32(this.nativeObj, value));
        };
        Value.prototype.setInt64 = function (value) {
            return new Value(value_set_int64(this.nativeObj, value));
        };
        Value.prototype.int64 = function () {
            return value_int64(this.nativeObj);
        };
        Value.prototype.setUint64 = function (value) {
            return new Value(value_set_uint64(this.nativeObj, value));
        };
        Value.prototype.uint64 = function () {
            return value_uint64(this.nativeObj);
        };
        Value.prototype.setFloat = function (value) {
            return new Value(value_set_float(this.nativeObj, value));
        };
        Value.prototype.float = function () {
            return value_float(this.nativeObj);
        };
        Value.prototype.setFloat32 = function (value) {
            return new Value(value_set_float32(this.nativeObj, value));
        };
        Value.prototype.float32 = function () {
            return value_float32(this.nativeObj);
        };
        Value.prototype.setDouble = function (value) {
            return new Value(value_set_double(this.nativeObj, value));
        };
        Value.prototype.double = function () {
            return value_double(this.nativeObj);
        };
        Value.prototype.setStr = function (value) {
            return new Value(value_dup_str(this.nativeObj, value));
        };
        Value.prototype.str = function () {
            return value_str(this.nativeObj);
        };
        Value.prototype.wstr = function () {
            return value_wstr(this.nativeObj);
        };
        Value.prototype.isNull = function () {
            return value_is_null(this.nativeObj);
        };
        Value.prototype.int = function () {
            return value_int(this.nativeObj);
        };
        Value.prototype.setInt = function (value) {
            return new Value(value_set_int(this.nativeObj, value));
        };
        Value.prototype.setObject = function (value) {
            return new Value(value_set_object(this.nativeObj, value ? value.nativeObj : null));
        };
        Value.prototype.object = function () {
            return new ObjectBase(value_object(this.nativeObj));
        };
        Value.create = function () {
            return new Value(value_create());
        };
        Value.prototype.destroy = function () {
            return value_destroy(this.nativeObj);
        };
        Value.prototype.reset = function () {
            return value_reset(this.nativeObj);
        };
        Value.cast = function (value) {
            return new Value(value_cast(value ? (value.nativeObj || value) : null));
        };
        return Value;
    }());
    AWTK.Value = Value;
    var ProgressCircle = /** @class */ (function (_super) {
        __extends(ProgressCircle, _super);
        function ProgressCircle(nativeObj) {
            return _super.call(this, nativeObj) || this;
        }
        ProgressCircle.create = function (parent, x, y, w, h) {
            return new ProgressCircle(progress_circle_create(parent ? parent.nativeObj : null, x, y, w, h));
        };
        ProgressCircle.cast = function (widget) {
            return new ProgressCircle(progress_circle_cast(widget ? (widget.nativeObj || widget) : null));
        };
        ProgressCircle.prototype.setValue = function (value) {
            return progress_circle_set_value(this.nativeObj, value);
        };
        ProgressCircle.prototype.setMax = function (max) {
            return progress_circle_set_max(this.nativeObj, max);
        };
        ProgressCircle.prototype.setLineWidth = function (line_width) {
            return progress_circle_set_line_width(this.nativeObj, line_width);
        };
        ProgressCircle.prototype.setStartAngle = function (start_angle) {
            return progress_circle_set_start_angle(this.nativeObj, start_angle);
        };
        ProgressCircle.prototype.setUnit = function (unit) {
            return progress_circle_set_unit(this.nativeObj, unit);
        };
        ProgressCircle.prototype.setShowText = function (show_text) {
            return progress_circle_set_show_text(this.nativeObj, show_text);
        };
        ProgressCircle.prototype.setCounterClockWise = function (counter_clock_wise) {
            return progress_circle_set_counter_clock_wise(this.nativeObj, counter_clock_wise);
        };
        Object.defineProperty(ProgressCircle.prototype, "value", {
            get: function () {
                return progress_circle_t_get_prop_value(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProgressCircle.prototype, "max", {
            get: function () {
                return progress_circle_t_get_prop_max(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProgressCircle.prototype, "startAngle", {
            get: function () {
                return progress_circle_t_get_prop_start_angle(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProgressCircle.prototype, "lineWidth", {
            get: function () {
                return progress_circle_t_get_prop_line_width(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProgressCircle.prototype, "unit", {
            get: function () {
                return progress_circle_t_get_prop_unit(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProgressCircle.prototype, "counterClockWise", {
            get: function () {
                return progress_circle_t_get_prop_counter_clock_wise(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProgressCircle.prototype, "showText", {
            get: function () {
                return progress_circle_t_get_prop_show_text(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        return ProgressCircle;
    }(Widget));
    AWTK.ProgressCircle = ProgressCircle;
    var RichText = /** @class */ (function (_super) {
        __extends(RichText, _super);
        function RichText(nativeObj) {
            return _super.call(this, nativeObj) || this;
        }
        RichText.create = function (parent, x, y, w, h) {
            return new RichText(rich_text_create(parent ? parent.nativeObj : null, x, y, w, h));
        };
        RichText.prototype.setText = function (text) {
            return rich_text_set_text(this.nativeObj, text);
        };
        RichText.cast = function (widget) {
            return new RichText(rich_text_cast(widget ? (widget.nativeObj || widget) : null));
        };
        Object.defineProperty(RichText.prototype, "lineGap", {
            get: function () {
                return rich_text_t_get_prop_line_gap(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        return RichText;
    }(Widget));
    AWTK.RichText = RichText;
    var ListItem = /** @class */ (function (_super) {
        __extends(ListItem, _super);
        function ListItem(nativeObj) {
            return _super.call(this, nativeObj) || this;
        }
        ListItem.create = function (parent, x, y, w, h) {
            return new ListItem(list_item_create(parent ? parent.nativeObj : null, x, y, w, h));
        };
        ListItem.cast = function (widget) {
            return new ListItem(list_item_cast(widget ? (widget.nativeObj || widget) : null));
        };
        return ListItem;
    }(Widget));
    AWTK.ListItem = ListItem;
    var ListViewH = /** @class */ (function (_super) {
        __extends(ListViewH, _super);
        function ListViewH(nativeObj) {
            return _super.call(this, nativeObj) || this;
        }
        ListViewH.create = function (parent, x, y, w, h) {
            return new ListViewH(list_view_h_create(parent ? parent.nativeObj : null, x, y, w, h));
        };
        ListViewH.prototype.setItemWidth = function (item_width) {
            return list_view_h_set_item_width(this.nativeObj, item_width);
        };
        ListViewH.prototype.setSpacing = function (spacing) {
            return list_view_h_set_spacing(this.nativeObj, spacing);
        };
        ListViewH.cast = function (widget) {
            return new ListViewH(list_view_h_cast(widget ? (widget.nativeObj || widget) : null));
        };
        Object.defineProperty(ListViewH.prototype, "itemWidth", {
            get: function () {
                return list_view_h_t_get_prop_item_width(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListViewH.prototype, "spacing", {
            get: function () {
                return list_view_h_t_get_prop_spacing(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        return ListViewH;
    }(Widget));
    AWTK.ListViewH = ListViewH;
    var ListView = /** @class */ (function (_super) {
        __extends(ListView, _super);
        function ListView(nativeObj) {
            return _super.call(this, nativeObj) || this;
        }
        ListView.create = function (parent, x, y, w, h) {
            return new ListView(list_view_create(parent ? parent.nativeObj : null, x, y, w, h));
        };
        ListView.prototype.setItemHeight = function (item_height) {
            return list_view_set_item_height(this.nativeObj, item_height);
        };
        ListView.prototype.setDefaultItemHeight = function (default_item_height) {
            return list_view_set_default_item_height(this.nativeObj, default_item_height);
        };
        ListView.prototype.setAutoHideScrollBar = function (auto_hide_scroll_bar) {
            return list_view_set_auto_hide_scroll_bar(this.nativeObj, auto_hide_scroll_bar);
        };
        ListView.cast = function (widget) {
            return new ListView(list_view_cast(widget ? (widget.nativeObj || widget) : null));
        };
        Object.defineProperty(ListView.prototype, "itemHeight", {
            get: function () {
                return list_view_t_get_prop_item_height(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListView.prototype, "defaultItemHeight", {
            get: function () {
                return list_view_t_get_prop_default_item_height(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListView.prototype, "autoHideScrollBar", {
            get: function () {
                return list_view_t_get_prop_auto_hide_scroll_bar(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        return ListView;
    }(Widget));
    AWTK.ListView = ListView;
    var ScrollBar = /** @class */ (function (_super) {
        __extends(ScrollBar, _super);
        function ScrollBar(nativeObj) {
            return _super.call(this, nativeObj) || this;
        }
        ScrollBar.create = function (parent, x, y, w, h) {
            return new ScrollBar(scroll_bar_create(parent ? parent.nativeObj : null, x, y, w, h));
        };
        ScrollBar.cast = function (widget) {
            return new ScrollBar(scroll_bar_cast(widget ? (widget.nativeObj || widget) : null));
        };
        ScrollBar.createMobile = function (parent, x, y, w, h) {
            return new ScrollBar(scroll_bar_create_mobile(parent ? parent.nativeObj : null, x, y, w, h));
        };
        ScrollBar.createDesktop = function (parent, x, y, w, h) {
            return new ScrollBar(scroll_bar_create_desktop(parent ? parent.nativeObj : null, x, y, w, h));
        };
        ScrollBar.prototype.setParams = function (virtual_size, row) {
            return scroll_bar_set_params(this.nativeObj, virtual_size, row);
        };
        ScrollBar.prototype.scrollTo = function (value, duration) {
            return scroll_bar_scroll_to(this.nativeObj, value, duration);
        };
        ScrollBar.prototype.setValue = function (value) {
            return scroll_bar_set_value(this.nativeObj, value);
        };
        ScrollBar.prototype.addDelta = function (delta) {
            return scroll_bar_add_delta(this.nativeObj, delta);
        };
        ScrollBar.prototype.scrollDelta = function (delta) {
            return scroll_bar_scroll_delta(this.nativeObj, delta);
        };
        ScrollBar.prototype.setValueOnly = function (value) {
            return scroll_bar_set_value_only(this.nativeObj, value);
        };
        ScrollBar.prototype.isMobile = function () {
            return scroll_bar_is_mobile(this.nativeObj);
        };
        Object.defineProperty(ScrollBar.prototype, "virtualSize", {
            get: function () {
                return scroll_bar_t_get_prop_virtual_size(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScrollBar.prototype, "value", {
            get: function () {
                return scroll_bar_t_get_prop_value(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScrollBar.prototype, "row", {
            get: function () {
                return scroll_bar_t_get_prop_row(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScrollBar.prototype, "animatable", {
            get: function () {
                return scroll_bar_t_get_prop_animatable(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        return ScrollBar;
    }(Widget));
    AWTK.ScrollBar = ScrollBar;
    var ScrollView = /** @class */ (function (_super) {
        __extends(ScrollView, _super);
        function ScrollView(nativeObj) {
            return _super.call(this, nativeObj) || this;
        }
        ScrollView.create = function (parent, x, y, w, h) {
            return new ScrollView(scroll_view_create(parent ? parent.nativeObj : null, x, y, w, h));
        };
        ScrollView.cast = function (widget) {
            return new ScrollView(scroll_view_cast(widget ? (widget.nativeObj || widget) : null));
        };
        ScrollView.prototype.setVirtualW = function (w) {
            return scroll_view_set_virtual_w(this.nativeObj, w);
        };
        ScrollView.prototype.setVirtualH = function (h) {
            return scroll_view_set_virtual_h(this.nativeObj, h);
        };
        ScrollView.prototype.setXslidable = function (xslidable) {
            return scroll_view_set_xslidable(this.nativeObj, xslidable);
        };
        ScrollView.prototype.setYslidable = function (yslidable) {
            return scroll_view_set_yslidable(this.nativeObj, yslidable);
        };
        ScrollView.prototype.setOffset = function (xoffset, yoffset) {
            return scroll_view_set_offset(this.nativeObj, xoffset, yoffset);
        };
        ScrollView.prototype.scrollTo = function (xoffset_end, yoffset_end, duration) {
            return scroll_view_scroll_to(this.nativeObj, xoffset_end, yoffset_end, duration);
        };
        Object.defineProperty(ScrollView.prototype, "virtualW", {
            get: function () {
                return scroll_view_t_get_prop_virtual_w(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScrollView.prototype, "virtualH", {
            get: function () {
                return scroll_view_t_get_prop_virtual_h(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScrollView.prototype, "xoffset", {
            get: function () {
                return scroll_view_t_get_prop_xoffset(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScrollView.prototype, "yoffset", {
            get: function () {
                return scroll_view_t_get_prop_yoffset(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScrollView.prototype, "xslidable", {
            get: function () {
                return scroll_view_t_get_prop_xslidable(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScrollView.prototype, "yslidable", {
            get: function () {
                return scroll_view_t_get_prop_yslidable(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        return ScrollView;
    }(Widget));
    AWTK.ScrollView = ScrollView;
    var SlideMenu = /** @class */ (function (_super) {
        __extends(SlideMenu, _super);
        function SlideMenu(nativeObj) {
            return _super.call(this, nativeObj) || this;
        }
        SlideMenu.create = function (parent, x, y, w, h) {
            return new SlideMenu(slide_menu_create(parent ? parent.nativeObj : null, x, y, w, h));
        };
        SlideMenu.cast = function (widget) {
            return new SlideMenu(slide_menu_cast(widget ? (widget.nativeObj || widget) : null));
        };
        SlideMenu.prototype.setValue = function (value) {
            return slide_menu_set_value(this.nativeObj, value);
        };
        SlideMenu.prototype.setAlignV = function (align_v) {
            return slide_menu_set_align_v(this.nativeObj, align_v);
        };
        SlideMenu.prototype.setMinScale = function (min_scale) {
            return slide_menu_set_min_scale(this.nativeObj, min_scale);
        };
        Object.defineProperty(SlideMenu.prototype, "value", {
            get: function () {
                return slide_menu_t_get_prop_value(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SlideMenu.prototype, "alignV", {
            get: function () {
                return slide_menu_t_get_prop_align_v(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SlideMenu.prototype, "minScale", {
            get: function () {
                return slide_menu_t_get_prop_min_scale(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        return SlideMenu;
    }(Widget));
    AWTK.SlideMenu = SlideMenu;
    var SlideView = /** @class */ (function (_super) {
        __extends(SlideView, _super);
        function SlideView(nativeObj) {
            return _super.call(this, nativeObj) || this;
        }
        SlideView.create = function (parent, x, y, w, h) {
            return new SlideView(slide_view_create(parent ? parent.nativeObj : null, x, y, w, h));
        };
        SlideView.cast = function (widget) {
            return new SlideView(slide_view_cast(widget ? (widget.nativeObj || widget) : null));
        };
        SlideView.prototype.setAutoPlay = function (auto_play) {
            return slide_view_set_auto_play(this.nativeObj, auto_play);
        };
        SlideView.prototype.setActive = function (index) {
            return slide_view_set_active(this.nativeObj, index);
        };
        SlideView.prototype.setVertical = function (vertical) {
            return slide_view_set_vertical(this.nativeObj, vertical);
        };
        SlideView.prototype.setAnimHint = function (anim_hint) {
            return slide_view_set_anim_hint(this.nativeObj, anim_hint);
        };
        SlideView.prototype.setLoop = function (loop) {
            return slide_view_set_loop(this.nativeObj, loop);
        };
        Object.defineProperty(SlideView.prototype, "vertical", {
            get: function () {
                return slide_view_t_get_prop_vertical(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SlideView.prototype, "autoPlay", {
            get: function () {
                return slide_view_t_get_prop_auto_play(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SlideView.prototype, "loop", {
            get: function () {
                return slide_view_t_get_prop_loop(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SlideView.prototype, "animHint", {
            get: function () {
                return slide_view_t_get_prop_anim_hint(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        return SlideView;
    }(Widget));
    AWTK.SlideView = SlideView;
    var Row = /** @class */ (function (_super) {
        __extends(Row, _super);
        function Row(nativeObj) {
            return _super.call(this, nativeObj) || this;
        }
        Row.create = function (parent, x, y, w, h) {
            return new Row(row_create(parent ? parent.nativeObj : null, x, y, w, h));
        };
        Row.cast = function (widget) {
            return new Row(row_cast(widget ? (widget.nativeObj || widget) : null));
        };
        return Row;
    }(Widget));
    AWTK.Row = Row;
    var Switch = /** @class */ (function (_super) {
        __extends(Switch, _super);
        function Switch(nativeObj) {
            return _super.call(this, nativeObj) || this;
        }
        Switch.create = function (parent, x, y, w, h) {
            return new Switch(switch_create(parent ? parent.nativeObj : null, x, y, w, h));
        };
        Switch.prototype.setValue = function (value) {
            return switch_set_value(this.nativeObj, value);
        };
        Switch.cast = function (widget) {
            return new Switch(switch_cast(widget ? (widget.nativeObj || widget) : null));
        };
        Object.defineProperty(Switch.prototype, "value", {
            get: function () {
                return switch_t_get_prop_value(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Switch.prototype, "maxXoffsetRatio", {
            get: function () {
                return switch_t_get_prop_max_xoffset_ratio(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Switch.prototype, "roundRadius", {
            get: function () {
                return switch_t_get_prop_round_radius(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        return Switch;
    }(Widget));
    AWTK.Switch = Switch;
    var TextSelector = /** @class */ (function (_super) {
        __extends(TextSelector, _super);
        function TextSelector(nativeObj) {
            return _super.call(this, nativeObj) || this;
        }
        TextSelector.create = function (parent, x, y, w, h) {
            return new TextSelector(text_selector_create(parent ? parent.nativeObj : null, x, y, w, h));
        };
        TextSelector.cast = function (widget) {
            return new TextSelector(text_selector_cast(widget ? (widget.nativeObj || widget) : null));
        };
        TextSelector.prototype.resetOptions = function () {
            return text_selector_reset_options(this.nativeObj);
        };
        TextSelector.prototype.countOptions = function () {
            return text_selector_count_options(this.nativeObj);
        };
        TextSelector.prototype.appendOption = function (value, text) {
            return text_selector_append_option(this.nativeObj, value, text);
        };
        TextSelector.prototype.setOptions = function (options) {
            return text_selector_set_options(this.nativeObj, options);
        };
        TextSelector.prototype.setRangeOptions = function (start, nr, step) {
            return text_selector_set_range_options(this.nativeObj, start, nr, step);
        };
        TextSelector.prototype.getValue = function () {
            return text_selector_get_value(this.nativeObj);
        };
        TextSelector.prototype.setValue = function (value) {
            return text_selector_set_value(this.nativeObj, value);
        };
        TextSelector.prototype.getText = function () {
            return text_selector_get_text(this.nativeObj);
        };
        TextSelector.prototype.setText = function (text) {
            return text_selector_set_text(this.nativeObj, text);
        };
        TextSelector.prototype.setSelectedIndex = function (index) {
            return text_selector_set_selected_index(this.nativeObj, index);
        };
        TextSelector.prototype.setVisibleNr = function (visible_nr) {
            return text_selector_set_visible_nr(this.nativeObj, visible_nr);
        };
        Object.defineProperty(TextSelector.prototype, "visibleNr", {
            get: function () {
                return text_selector_t_get_prop_visible_nr(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TextSelector.prototype, "selectedIndex", {
            get: function () {
                return text_selector_t_get_prop_selected_index(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TextSelector.prototype, "options", {
            get: function () {
                return text_selector_t_get_prop_options(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        return TextSelector;
    }(Widget));
    AWTK.TextSelector = TextSelector;
    var DigitClock = /** @class */ (function (_super) {
        __extends(DigitClock, _super);
        function DigitClock(nativeObj) {
            return _super.call(this, nativeObj) || this;
        }
        DigitClock.create = function (parent, x, y, w, h) {
            return new DigitClock(digit_clock_create(parent ? parent.nativeObj : null, x, y, w, h));
        };
        DigitClock.cast = function (widget) {
            return new DigitClock(digit_clock_cast(widget ? (widget.nativeObj || widget) : null));
        };
        DigitClock.prototype.setFormat = function (format) {
            return digit_clock_set_format(this.nativeObj, format);
        };
        Object.defineProperty(DigitClock.prototype, "format", {
            get: function () {
                return digit_clock_t_get_prop_format(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        return DigitClock;
    }(Widget));
    AWTK.DigitClock = DigitClock;
    var TimeClock = /** @class */ (function (_super) {
        __extends(TimeClock, _super);
        function TimeClock(nativeObj) {
            return _super.call(this, nativeObj) || this;
        }
        TimeClock.create = function (parent, x, y, w, h) {
            return new TimeClock(time_clock_create(parent ? parent.nativeObj : null, x, y, w, h));
        };
        TimeClock.cast = function (widget) {
            return new TimeClock(time_clock_cast(widget ? (widget.nativeObj || widget) : null));
        };
        TimeClock.prototype.setHour = function (hour) {
            return time_clock_set_hour(this.nativeObj, hour);
        };
        TimeClock.prototype.setMinute = function (minute) {
            return time_clock_set_minute(this.nativeObj, minute);
        };
        TimeClock.prototype.setSecond = function (second) {
            return time_clock_set_second(this.nativeObj, second);
        };
        TimeClock.prototype.setHourImage = function (hour) {
            return time_clock_set_hour_image(this.nativeObj, hour);
        };
        TimeClock.prototype.setMinuteImage = function (minute_image) {
            return time_clock_set_minute_image(this.nativeObj, minute_image);
        };
        TimeClock.prototype.setSecondImage = function (second_image) {
            return time_clock_set_second_image(this.nativeObj, second_image);
        };
        TimeClock.prototype.setBgImage = function (bg_image) {
            return time_clock_set_bg_image(this.nativeObj, bg_image);
        };
        TimeClock.prototype.setImage = function (image) {
            return time_clock_set_image(this.nativeObj, image);
        };
        Object.defineProperty(TimeClock.prototype, "hour", {
            get: function () {
                return time_clock_t_get_prop_hour(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimeClock.prototype, "minute", {
            get: function () {
                return time_clock_t_get_prop_minute(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimeClock.prototype, "second", {
            get: function () {
                return time_clock_t_get_prop_second(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimeClock.prototype, "image", {
            get: function () {
                return time_clock_t_get_prop_image(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimeClock.prototype, "bgImage", {
            get: function () {
                return time_clock_t_get_prop_bg_image(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimeClock.prototype, "hourImage", {
            get: function () {
                return time_clock_t_get_prop_hour_image(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimeClock.prototype, "minuteImage", {
            get: function () {
                return time_clock_t_get_prop_minute_image(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimeClock.prototype, "secondImage", {
            get: function () {
                return time_clock_t_get_prop_second_image(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        return TimeClock;
    }(Widget));
    AWTK.TimeClock = TimeClock;
    var WindowEvent = /** @class */ (function (_super) {
        __extends(WindowEvent, _super);
        function WindowEvent(nativeObj) {
            return _super.call(this, nativeObj) || this;
        }
        WindowEvent.cast = function (event) {
            return new WindowEvent(window_event_cast(event ? (event.nativeObj || event) : null));
        };
        Object.defineProperty(WindowEvent.prototype, "window", {
            get: function () {
                return window_event_t_get_prop_window(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        return WindowEvent;
    }(Event));
    AWTK.WindowEvent = WindowEvent;
    var TabButton = /** @class */ (function (_super) {
        __extends(TabButton, _super);
        function TabButton(nativeObj) {
            return _super.call(this, nativeObj) || this;
        }
        TabButton.create = function (parent, x, y, w, h) {
            return new TabButton(tab_button_create(parent ? parent.nativeObj : null, x, y, w, h));
        };
        TabButton.cast = function (widget) {
            return new TabButton(tab_button_cast(widget ? (widget.nativeObj || widget) : null));
        };
        TabButton.prototype.setValue = function (value) {
            return tab_button_set_value(this.nativeObj, value);
        };
        TabButton.prototype.setIcon = function (name) {
            return tab_button_set_icon(this.nativeObj, name);
        };
        TabButton.prototype.setActiveIcon = function (name) {
            return tab_button_set_active_icon(this.nativeObj, name);
        };
        Object.defineProperty(TabButton.prototype, "value", {
            get: function () {
                return tab_button_t_get_prop_value(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TabButton.prototype, "activeIcon", {
            get: function () {
                return tab_button_t_get_prop_active_icon(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TabButton.prototype, "icon", {
            get: function () {
                return tab_button_t_get_prop_icon(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        return TabButton;
    }(Widget));
    AWTK.TabButton = TabButton;
    var ImageBase = /** @class */ (function (_super) {
        __extends(ImageBase, _super);
        function ImageBase(nativeObj) {
            return _super.call(this, nativeObj) || this;
        }
        ImageBase.prototype.setImage = function (name) {
            return image_base_set_image(this.nativeObj, name);
        };
        ImageBase.prototype.setRotation = function (rotation) {
            return image_base_set_rotation(this.nativeObj, rotation);
        };
        ImageBase.prototype.setScale = function (scale_x, scale_y) {
            return image_base_set_scale(this.nativeObj, scale_x, scale_y);
        };
        ImageBase.prototype.setAnchor = function (anchor_x, anchor_y) {
            return image_base_set_anchor(this.nativeObj, anchor_x, anchor_y);
        };
        ImageBase.prototype.setSelected = function (selected) {
            return image_base_set_selected(this.nativeObj, selected);
        };
        ImageBase.prototype.setSelectable = function (selectable) {
            return image_base_set_selectable(this.nativeObj, selectable);
        };
        ImageBase.prototype.setClickable = function (clickable) {
            return image_base_set_clickable(this.nativeObj, clickable);
        };
        ImageBase.cast = function (widget) {
            return new ImageBase(image_base_cast(widget ? (widget.nativeObj || widget) : null));
        };
        Object.defineProperty(ImageBase.prototype, "image", {
            get: function () {
                return image_base_t_get_prop_image(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ImageBase.prototype, "anchorX", {
            get: function () {
                return image_base_t_get_prop_anchor_x(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ImageBase.prototype, "anchorY", {
            get: function () {
                return image_base_t_get_prop_anchor_y(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ImageBase.prototype, "scaleX", {
            get: function () {
                return image_base_t_get_prop_scale_x(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ImageBase.prototype, "scaleY", {
            get: function () {
                return image_base_t_get_prop_scale_y(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ImageBase.prototype, "rotation", {
            get: function () {
                return image_base_t_get_prop_rotation(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ImageBase.prototype, "clickable", {
            get: function () {
                return image_base_t_get_prop_clickable(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ImageBase.prototype, "selectable", {
            get: function () {
                return image_base_t_get_prop_selectable(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ImageBase.prototype, "selected", {
            get: function () {
                return image_base_t_get_prop_selected(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        return ImageBase;
    }(Widget));
    AWTK.ImageBase = ImageBase;
    var Window = /** @class */ (function (_super) {
        __extends(Window, _super);
        function Window(nativeObj) {
            return _super.call(this, nativeObj) || this;
        }
        Window.create = function (parent, x, y, w, h) {
            return new Window(window_create(parent ? parent.nativeObj : null, x, y, w, h));
        };
        Window.prototype.setFullscreen = function (fullscreen) {
            return window_set_fullscreen(this.nativeObj, fullscreen);
        };
        Window.open = function (name) {
            return new Window(window_open(name));
        };
        Window.openAndClose = function (name, to_close) {
            return new Window(window_open_and_close(name, to_close ? to_close.nativeObj : null));
        };
        Window.prototype.close = function () {
            return window_close(this.nativeObj);
        };
        Window.prototype.closeForce = function () {
            return window_close_force(this.nativeObj);
        };
        Window.cast = function (widget) {
            return new Window(window_cast(widget ? (widget.nativeObj || widget) : null));
        };
        Object.defineProperty(Window.prototype, "fullscreen", {
            get: function () {
                return window_t_get_prop_fullscreen(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        return Window;
    }(Widget));
    AWTK.Window = Window;
    var WheelEvent = /** @class */ (function (_super) {
        __extends(WheelEvent, _super);
        function WheelEvent(nativeObj) {
            return _super.call(this, nativeObj) || this;
        }
        WheelEvent.cast = function (event) {
            return new WheelEvent(wheel_event_cast(event ? (event.nativeObj || event) : null));
        };
        Object.defineProperty(WheelEvent.prototype, "dy", {
            get: function () {
                return wheel_event_t_get_prop_dy(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WheelEvent.prototype, "alt", {
            get: function () {
                return wheel_event_t_get_prop_alt(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WheelEvent.prototype, "ctrl", {
            get: function () {
                return wheel_event_t_get_prop_ctrl(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WheelEvent.prototype, "shift", {
            get: function () {
                return wheel_event_t_get_prop_shift(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        return WheelEvent;
    }(Event));
    AWTK.WheelEvent = WheelEvent;
    var PointerEvent = /** @class */ (function (_super) {
        __extends(PointerEvent, _super);
        function PointerEvent(nativeObj) {
            return _super.call(this, nativeObj) || this;
        }
        PointerEvent.cast = function (event) {
            return new PointerEvent(pointer_event_cast(event ? (event.nativeObj || event) : null));
        };
        Object.defineProperty(PointerEvent.prototype, "x", {
            get: function () {
                return pointer_event_t_get_prop_x(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PointerEvent.prototype, "y", {
            get: function () {
                return pointer_event_t_get_prop_y(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PointerEvent.prototype, "button", {
            get: function () {
                return pointer_event_t_get_prop_button(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PointerEvent.prototype, "pressed", {
            get: function () {
                return pointer_event_t_get_prop_pressed(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PointerEvent.prototype, "alt", {
            get: function () {
                return pointer_event_t_get_prop_alt(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PointerEvent.prototype, "ctrl", {
            get: function () {
                return pointer_event_t_get_prop_ctrl(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PointerEvent.prototype, "shift", {
            get: function () {
                return pointer_event_t_get_prop_shift(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        return PointerEvent;
    }(Event));
    AWTK.PointerEvent = PointerEvent;
    var KeyEvent = /** @class */ (function (_super) {
        __extends(KeyEvent, _super);
        function KeyEvent(nativeObj) {
            return _super.call(this, nativeObj) || this;
        }
        KeyEvent.cast = function (event) {
            return new KeyEvent(key_event_cast(event ? (event.nativeObj || event) : null));
        };
        Object.defineProperty(KeyEvent.prototype, "key", {
            get: function () {
                return key_event_t_get_prop_key(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KeyEvent.prototype, "alt", {
            get: function () {
                return key_event_t_get_prop_alt(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KeyEvent.prototype, "ctrl", {
            get: function () {
                return key_event_t_get_prop_ctrl(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KeyEvent.prototype, "shift", {
            get: function () {
                return key_event_t_get_prop_shift(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(KeyEvent.prototype, "capslock", {
            get: function () {
                return key_event_t_get_prop_capslock(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        return KeyEvent;
    }(Event));
    AWTK.KeyEvent = KeyEvent;
    var PaintEvent = /** @class */ (function (_super) {
        __extends(PaintEvent, _super);
        function PaintEvent(nativeObj) {
            return _super.call(this, nativeObj) || this;
        }
        PaintEvent.cast = function (event) {
            return new PaintEvent(paint_event_cast(event ? (event.nativeObj || event) : null));
        };
        Object.defineProperty(PaintEvent.prototype, "c", {
            get: function () {
                return paint_event_t_get_prop_c(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        return PaintEvent;
    }(Event));
    AWTK.PaintEvent = PaintEvent;
    var PropChangeEvent = /** @class */ (function (_super) {
        __extends(PropChangeEvent, _super);
        function PropChangeEvent(nativeObj) {
            return _super.call(this, nativeObj) || this;
        }
        PropChangeEvent.cast = function (event) {
            return new PropChangeEvent(prop_change_event_cast(event ? (event.nativeObj || event) : null));
        };
        Object.defineProperty(PropChangeEvent.prototype, "name", {
            get: function () {
                return prop_change_event_t_get_prop_name(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PropChangeEvent.prototype, "value", {
            get: function () {
                return prop_change_event_t_get_prop_value(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        return PropChangeEvent;
    }(Event));
    AWTK.PropChangeEvent = PropChangeEvent;
    var WindowBase = /** @class */ (function (_super) {
        __extends(WindowBase, _super);
        function WindowBase(nativeObj) {
            return _super.call(this, nativeObj) || this;
        }
        WindowBase.cast = function (widget) {
            return new WindowBase(window_base_cast(widget ? (widget.nativeObj || widget) : null));
        };
        Object.defineProperty(WindowBase.prototype, "theme", {
            get: function () {
                return window_base_t_get_prop_theme(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(WindowBase.prototype, "closable", {
            get: function () {
                return window_base_t_get_prop_closable(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        return WindowBase;
    }(Widget));
    AWTK.WindowBase = WindowBase;
    var WindowManager = /** @class */ (function (_super) {
        __extends(WindowManager, _super);
        function WindowManager(nativeObj) {
            return _super.call(this, nativeObj) || this;
        }
        WindowManager.instance = function () {
            return new WindowManager(window_manager());
        };
        WindowManager.cast = function (widget) {
            return new WindowManager(window_manager_cast(widget ? (widget.nativeObj || widget) : null));
        };
        WindowManager.prototype.getTopMainWindow = function () {
            return new Widget(window_manager_get_top_main_window(this.nativeObj));
        };
        WindowManager.prototype.setShowFps = function (show_fps) {
            return window_manager_set_show_fps(this.nativeObj, show_fps);
        };
        WindowManager.prototype.setScreenSaverTime = function (screen_saver_time) {
            return window_manager_set_screen_saver_time(this.nativeObj, screen_saver_time);
        };
        WindowManager.prototype.setCursor = function (cursor) {
            return window_manager_set_cursor(this.nativeObj, cursor);
        };
        WindowManager.prototype.back = function () {
            return window_manager_back(this.nativeObj);
        };
        WindowManager.prototype.backToHome = function () {
            return window_manager_back_to_home(this.nativeObj);
        };
        Object.defineProperty(WindowManager.prototype, "showFps", {
            get: function () {
                return window_manager_t_get_prop_show_fps(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        return WindowManager;
    }(Widget));
    AWTK.WindowManager = WindowManager;
    var ProgressBar = /** @class */ (function (_super) {
        __extends(ProgressBar, _super);
        function ProgressBar(nativeObj) {
            return _super.call(this, nativeObj) || this;
        }
        ProgressBar.create = function (parent, x, y, w, h) {
            return new ProgressBar(progress_bar_create(parent ? parent.nativeObj : null, x, y, w, h));
        };
        ProgressBar.cast = function (widget) {
            return new ProgressBar(progress_bar_cast(widget ? (widget.nativeObj || widget) : null));
        };
        ProgressBar.prototype.setValue = function (value) {
            return progress_bar_set_value(this.nativeObj, value);
        };
        ProgressBar.prototype.setVertical = function (vertical) {
            return progress_bar_set_vertical(this.nativeObj, vertical);
        };
        ProgressBar.prototype.setShowText = function (show_text) {
            return progress_bar_set_show_text(this.nativeObj, show_text);
        };
        Object.defineProperty(ProgressBar.prototype, "value", {
            get: function () {
                return progress_bar_t_get_prop_value(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProgressBar.prototype, "vertical", {
            get: function () {
                return progress_bar_t_get_prop_vertical(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ProgressBar.prototype, "showText", {
            get: function () {
                return progress_bar_t_get_prop_show_text(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        return ProgressBar;
    }(Widget));
    AWTK.ProgressBar = ProgressBar;
    var ObjectBase = /** @class */ (function (_super) {
        __extends(ObjectBase, _super);
        function ObjectBase(nativeObj) {
            return _super.call(this, nativeObj) || this;
        }
        ObjectBase.prototype.unref = function () {
            return object_unref(this.nativeObj);
        };
        ObjectBase.ref = function (obj) {
            return new ObjectBase(object_ref(obj ? obj.nativeObj : null));
        };
        ObjectBase.prototype.getType = function () {
            return object_get_type(this.nativeObj);
        };
        ObjectBase.prototype.getDesc = function () {
            return object_get_desc(this.nativeObj);
        };
        ObjectBase.prototype.getSize = function () {
            return object_get_size(this.nativeObj);
        };
        ObjectBase.prototype.isCollection = function () {
            return object_is_collection(this.nativeObj);
        };
        ObjectBase.prototype.setName = function (name) {
            return object_set_name(this.nativeObj, name);
        };
        ObjectBase.prototype.compare = function (other) {
            return object_compare(this.nativeObj, other ? other.nativeObj : null);
        };
        ObjectBase.prototype.getProp = function (name, v) {
            return object_get_prop(this.nativeObj, name, v ? v.nativeObj : null);
        };
        ObjectBase.prototype.getPropStr = function (name) {
            return object_get_prop_str(this.nativeObj, name);
        };
        ObjectBase.prototype.getPropPointer = function (name) {
            return object_get_prop_pointer(this.nativeObj, name);
        };
        ObjectBase.prototype.getPropObject = function (name) {
            return new ObjectBase(object_get_prop_object(this.nativeObj, name));
        };
        ObjectBase.prototype.getPropInt = function (name, defval) {
            return object_get_prop_int(this.nativeObj, name, defval);
        };
        ObjectBase.prototype.getPropFloat = function (name, defval) {
            return object_get_prop_float(this.nativeObj, name, defval);
        };
        ObjectBase.prototype.removeProp = function (name) {
            return object_remove_prop(this.nativeObj, name);
        };
        ObjectBase.prototype.setProp = function (name, value) {
            return object_set_prop(this.nativeObj, name, value ? value.nativeObj : null);
        };
        ObjectBase.prototype.setPropStr = function (name, value) {
            return object_set_prop_str(this.nativeObj, name, value);
        };
        ObjectBase.prototype.setPropPointer = function (name, value) {
            return object_set_prop_pointer(this.nativeObj, name, value);
        };
        ObjectBase.prototype.setPropObject = function (name, value) {
            return object_set_prop_object(this.nativeObj, name, value ? value.nativeObj : null);
        };
        ObjectBase.prototype.setPropInt = function (name, value) {
            return object_set_prop_int(this.nativeObj, name, value);
        };
        ObjectBase.prototype.setPropFloat = function (name, value) {
            return object_set_prop_float(this.nativeObj, name, value);
        };
        ObjectBase.prototype.copyProp = function (src, name) {
            return object_copy_prop(this.nativeObj, src ? src.nativeObj : null, name);
        };
        ObjectBase.prototype.foreachProp = function (on_prop, ctx) {
            return object_foreach_prop(this.nativeObj, on_prop, ctx);
        };
        ObjectBase.prototype.hasProp = function (name) {
            return object_has_prop(this.nativeObj, name);
        };
        ObjectBase.prototype.eval = function (expr, v) {
            return object_eval(this.nativeObj, expr, v ? v.nativeObj : null);
        };
        ObjectBase.prototype.canExec = function (name, args) {
            return object_can_exec(this.nativeObj, name, args);
        };
        ObjectBase.prototype.exec = function (name, args) {
            return object_exec(this.nativeObj, name, args);
        };
        ObjectBase.prototype.notifyChanged = function () {
            return object_notify_changed(this.nativeObj);
        };
        Object.defineProperty(ObjectBase.prototype, "refCount", {
            get: function () {
                return object_t_get_prop_ref_count(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ObjectBase.prototype, "name", {
            get: function () {
                return object_t_get_prop_name(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        return ObjectBase;
    }(Emitter));
    AWTK.ObjectBase = ObjectBase;
    var StyleMutable = /** @class */ (function (_super) {
        __extends(StyleMutable, _super);
        function StyleMutable(nativeObj) {
            return _super.call(this, nativeObj) || this;
        }
        StyleMutable.prototype.getName = function () {
            return style_mutable_get_name(this.nativeObj);
        };
        StyleMutable.prototype.setName = function (name) {
            return style_mutable_set_name(this.nativeObj, name);
        };
        StyleMutable.prototype.setInt = function (state, name, val) {
            return style_mutable_set_int(this.nativeObj, state, name, val);
        };
        StyleMutable.cast = function (s) {
            return new StyleMutable(style_mutable_cast(s ? (s.nativeObj || s) : null));
        };
        StyleMutable.create = function (widget) {
            return new StyleMutable(style_mutable_create(widget ? widget.nativeObj : null));
        };
        Object.defineProperty(StyleMutable.prototype, "name", {
            get: function () {
                return style_mutable_t_get_prop_name(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        return StyleMutable;
    }(Style));
    AWTK.StyleMutable = StyleMutable;
    var CanvasWidget = /** @class */ (function (_super) {
        __extends(CanvasWidget, _super);
        function CanvasWidget(nativeObj) {
            return _super.call(this, nativeObj) || this;
        }
        CanvasWidget.create = function (parent, x, y, w, h) {
            return new CanvasWidget(canvas_widget_create(parent ? parent.nativeObj : null, x, y, w, h));
        };
        CanvasWidget.cast = function (widget) {
            return new CanvasWidget(canvas_widget_cast(widget ? (widget.nativeObj || widget) : null));
        };
        return CanvasWidget;
    }(Widget));
    AWTK.CanvasWidget = CanvasWidget;
    var ColorPicker = /** @class */ (function (_super) {
        __extends(ColorPicker, _super);
        function ColorPicker(nativeObj) {
            return _super.call(this, nativeObj) || this;
        }
        ColorPicker.create = function (parent, x, y, w, h) {
            return new ColorPicker(color_picker_create(parent ? parent.nativeObj : null, x, y, w, h));
        };
        ColorPicker.prototype.setColor = function (color) {
            return color_picker_set_color(this.nativeObj, color);
        };
        ColorPicker.cast = function (widget) {
            return new ColorPicker(color_picker_cast(widget ? (widget.nativeObj || widget) : null));
        };
        Object.defineProperty(ColorPicker.prototype, "value", {
            get: function () {
                return color_picker_t_get_prop_value(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        return ColorPicker;
    }(Widget));
    AWTK.ColorPicker = ColorPicker;
    var View = /** @class */ (function (_super) {
        __extends(View, _super);
        function View(nativeObj) {
            return _super.call(this, nativeObj) || this;
        }
        View.create = function (parent, x, y, w, h) {
            return new View(view_create(parent ? parent.nativeObj : null, x, y, w, h));
        };
        View.cast = function (widget) {
            return new View(view_cast(widget ? (widget.nativeObj || widget) : null));
        };
        return View;
    }(Widget));
    AWTK.View = View;
    var TabButtonGroup = /** @class */ (function (_super) {
        __extends(TabButtonGroup, _super);
        function TabButtonGroup(nativeObj) {
            return _super.call(this, nativeObj) || this;
        }
        TabButtonGroup.create = function (parent, x, y, w, h) {
            return new TabButtonGroup(tab_button_group_create(parent ? parent.nativeObj : null, x, y, w, h));
        };
        TabButtonGroup.cast = function (widget) {
            return new TabButtonGroup(tab_button_group_cast(widget ? (widget.nativeObj || widget) : null));
        };
        Object.defineProperty(TabButtonGroup.prototype, "compact", {
            get: function () {
                return tab_button_group_t_get_prop_compact(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        return TabButtonGroup;
    }(Widget));
    AWTK.TabButtonGroup = TabButtonGroup;
    var GuagePointer = /** @class */ (function (_super) {
        __extends(GuagePointer, _super);
        function GuagePointer(nativeObj) {
            return _super.call(this, nativeObj) || this;
        }
        GuagePointer.create = function (parent, x, y, w, h) {
            return new GuagePointer(guage_pointer_create(parent ? parent.nativeObj : null, x, y, w, h));
        };
        GuagePointer.cast = function (widget) {
            return new GuagePointer(guage_pointer_cast(widget ? (widget.nativeObj || widget) : null));
        };
        GuagePointer.prototype.setAngle = function (angle) {
            return guage_pointer_set_angle(this.nativeObj, angle);
        };
        GuagePointer.prototype.setImage = function (image) {
            return guage_pointer_set_image(this.nativeObj, image);
        };
        Object.defineProperty(GuagePointer.prototype, "angle", {
            get: function () {
                return guage_pointer_t_get_prop_angle(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GuagePointer.prototype, "image", {
            get: function () {
                return guage_pointer_t_get_prop_image(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        return GuagePointer;
    }(Widget));
    AWTK.GuagePointer = GuagePointer;
    var Guage = /** @class */ (function (_super) {
        __extends(Guage, _super);
        function Guage(nativeObj) {
            return _super.call(this, nativeObj) || this;
        }
        Guage.create = function (parent, x, y, w, h) {
            return new Guage(guage_create(parent ? parent.nativeObj : null, x, y, w, h));
        };
        Guage.cast = function (widget) {
            return new Guage(guage_cast(widget ? (widget.nativeObj || widget) : null));
        };
        Guage.prototype.setImage = function (name) {
            return guage_set_image(this.nativeObj, name);
        };
        Guage.prototype.setDrawType = function (draw_type) {
            return guage_set_draw_type(this.nativeObj, draw_type);
        };
        Object.defineProperty(Guage.prototype, "image", {
            get: function () {
                return guage_t_get_prop_image(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Guage.prototype, "drawType", {
            get: function () {
                return guage_t_get_prop_draw_type(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        return Guage;
    }(Widget));
    AWTK.Guage = Guage;
    var TabControl = /** @class */ (function (_super) {
        __extends(TabControl, _super);
        function TabControl(nativeObj) {
            return _super.call(this, nativeObj) || this;
        }
        TabControl.create = function (parent, x, y, w, h) {
            return new TabControl(tab_control_create(parent ? parent.nativeObj : null, x, y, w, h));
        };
        TabControl.cast = function (widget) {
            return new TabControl(tab_control_cast(widget ? (widget.nativeObj || widget) : null));
        };
        return TabControl;
    }(Widget));
    AWTK.TabControl = TabControl;
    var ImageValue = /** @class */ (function (_super) {
        __extends(ImageValue, _super);
        function ImageValue(nativeObj) {
            return _super.call(this, nativeObj) || this;
        }
        ImageValue.create = function (parent, x, y, w, h) {
            return new ImageValue(image_value_create(parent ? parent.nativeObj : null, x, y, w, h));
        };
        ImageValue.prototype.setImage = function (image) {
            return image_value_set_image(this.nativeObj, image);
        };
        ImageValue.prototype.setFormat = function (format) {
            return image_value_set_format(this.nativeObj, format);
        };
        ImageValue.prototype.setValue = function (value) {
            return image_value_set_value(this.nativeObj, value);
        };
        ImageValue.cast = function (widget) {
            return new ImageValue(image_value_cast(widget ? (widget.nativeObj || widget) : null));
        };
        Object.defineProperty(ImageValue.prototype, "image", {
            get: function () {
                return image_value_t_get_prop_image(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ImageValue.prototype, "format", {
            get: function () {
                return image_value_t_get_prop_format(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ImageValue.prototype, "value", {
            get: function () {
                return image_value_t_get_prop_value(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        return ImageValue;
    }(Widget));
    AWTK.ImageValue = ImageValue;
    var Slider = /** @class */ (function (_super) {
        __extends(Slider, _super);
        function Slider(nativeObj) {
            return _super.call(this, nativeObj) || this;
        }
        Slider.create = function (parent, x, y, w, h) {
            return new Slider(slider_create(parent ? parent.nativeObj : null, x, y, w, h));
        };
        Slider.cast = function (widget) {
            return new Slider(slider_cast(widget ? (widget.nativeObj || widget) : null));
        };
        Slider.prototype.setValue = function (value) {
            return slider_set_value(this.nativeObj, value);
        };
        Slider.prototype.setMin = function (min) {
            return slider_set_min(this.nativeObj, min);
        };
        Slider.prototype.setMax = function (max) {
            return slider_set_max(this.nativeObj, max);
        };
        Slider.prototype.setStep = function (step) {
            return slider_set_step(this.nativeObj, step);
        };
        Slider.prototype.setBarSize = function (bar_size) {
            return slider_set_bar_size(this.nativeObj, bar_size);
        };
        Slider.prototype.setVertical = function (vertical) {
            return slider_set_vertical(this.nativeObj, vertical);
        };
        Object.defineProperty(Slider.prototype, "value", {
            get: function () {
                return slider_t_get_prop_value(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Slider.prototype, "min", {
            get: function () {
                return slider_t_get_prop_min(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Slider.prototype, "max", {
            get: function () {
                return slider_t_get_prop_max(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Slider.prototype, "step", {
            get: function () {
                return slider_t_get_prop_step(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Slider.prototype, "vertical", {
            get: function () {
                return slider_t_get_prop_vertical(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Slider.prototype, "barSize", {
            get: function () {
                return slider_t_get_prop_bar_size(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        return Slider;
    }(Widget));
    AWTK.Slider = Slider;
    var AppBar = /** @class */ (function (_super) {
        __extends(AppBar, _super);
        function AppBar(nativeObj) {
            return _super.call(this, nativeObj) || this;
        }
        AppBar.create = function (parent, x, y, w, h) {
            return new AppBar(app_bar_create(parent ? parent.nativeObj : null, x, y, w, h));
        };
        AppBar.cast = function (widget) {
            return new AppBar(app_bar_cast(widget ? (widget.nativeObj || widget) : null));
        };
        return AppBar;
    }(Widget));
    AWTK.AppBar = AppBar;
    var ButtonGroup = /** @class */ (function (_super) {
        __extends(ButtonGroup, _super);
        function ButtonGroup(nativeObj) {
            return _super.call(this, nativeObj) || this;
        }
        ButtonGroup.create = function (parent, x, y, w, h) {
            return new ButtonGroup(button_group_create(parent ? parent.nativeObj : null, x, y, w, h));
        };
        ButtonGroup.cast = function (widget) {
            return new ButtonGroup(button_group_cast(widget ? (widget.nativeObj || widget) : null));
        };
        return ButtonGroup;
    }(Widget));
    AWTK.ButtonGroup = ButtonGroup;
    var Button = /** @class */ (function (_super) {
        __extends(Button, _super);
        function Button(nativeObj) {
            return _super.call(this, nativeObj) || this;
        }
        Button.create = function (parent, x, y, w, h) {
            return new Button(button_create(parent ? parent.nativeObj : null, x, y, w, h));
        };
        Button.cast = function (widget) {
            return new Button(button_cast(widget ? (widget.nativeObj || widget) : null));
        };
        Button.prototype.setRepeat = function (repeat) {
            return button_set_repeat(this.nativeObj, repeat);
        };
        Button.prototype.setEnableLongPress = function (enable_long_press) {
            return button_set_enable_long_press(this.nativeObj, enable_long_press);
        };
        Object.defineProperty(Button.prototype, "repeat", {
            get: function () {
                return button_t_get_prop_repeat(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Button.prototype, "enableLongPress", {
            get: function () {
                return button_t_get_prop_enable_long_press(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        return Button;
    }(Widget));
    AWTK.Button = Button;
    var CheckButton = /** @class */ (function (_super) {
        __extends(CheckButton, _super);
        function CheckButton(nativeObj) {
            return _super.call(this, nativeObj) || this;
        }
        CheckButton.create = function (parent, x, y, w, h) {
            return new CheckButton(check_button_create(parent ? parent.nativeObj : null, x, y, w, h));
        };
        CheckButton.createRadio = function (parent, x, y, w, h) {
            return new CheckButton(check_button_create_radio(parent ? parent.nativeObj : null, x, y, w, h));
        };
        CheckButton.prototype.setValue = function (value) {
            return check_button_set_value(this.nativeObj, value);
        };
        CheckButton.cast = function (widget) {
            return new CheckButton(check_button_cast(widget ? (widget.nativeObj || widget) : null));
        };
        Object.defineProperty(CheckButton.prototype, "value", {
            get: function () {
                return check_button_t_get_prop_value(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        return CheckButton;
    }(Widget));
    AWTK.CheckButton = CheckButton;
    var ColorTile = /** @class */ (function (_super) {
        __extends(ColorTile, _super);
        function ColorTile(nativeObj) {
            return _super.call(this, nativeObj) || this;
        }
        ColorTile.create = function (parent, x, y, w, h) {
            return new ColorTile(color_tile_create(parent ? parent.nativeObj : null, x, y, w, h));
        };
        ColorTile.cast = function (widget) {
            return new ColorTile(color_tile_cast(widget ? (widget.nativeObj || widget) : null));
        };
        ColorTile.prototype.setBgColor = function (color) {
            return color_tile_set_bg_color(this.nativeObj, color);
        };
        Object.defineProperty(ColorTile.prototype, "bgColor", {
            get: function () {
                return color_tile_t_get_prop_bg_color(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ColorTile.prototype, "borderColor", {
            get: function () {
                return color_tile_t_get_prop_border_color(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        return ColorTile;
    }(Widget));
    AWTK.ColorTile = ColorTile;
    var Column = /** @class */ (function (_super) {
        __extends(Column, _super);
        function Column(nativeObj) {
            return _super.call(this, nativeObj) || this;
        }
        Column.create = function (parent, x, y, w, h) {
            return new Column(column_create(parent ? parent.nativeObj : null, x, y, w, h));
        };
        Column.cast = function (widget) {
            return new Column(column_cast(widget ? (widget.nativeObj || widget) : null));
        };
        return Column;
    }(Widget));
    AWTK.Column = Column;
    var ComboBoxItem = /** @class */ (function (_super) {
        __extends(ComboBoxItem, _super);
        function ComboBoxItem(nativeObj) {
            return _super.call(this, nativeObj) || this;
        }
        ComboBoxItem.create = function (parent, x, y, w, h) {
            return new ComboBoxItem(combo_box_item_create(parent ? parent.nativeObj : null, x, y, w, h));
        };
        ComboBoxItem.cast = function (widget) {
            return new ComboBoxItem(combo_box_item_cast(widget ? (widget.nativeObj || widget) : null));
        };
        ComboBoxItem.prototype.setChecked = function (checked) {
            return combo_box_item_set_checked(this.nativeObj, checked);
        };
        ComboBoxItem.prototype.setValue = function (value) {
            return combo_box_item_set_value(this.nativeObj, value);
        };
        Object.defineProperty(ComboBoxItem.prototype, "value", {
            get: function () {
                return combo_box_item_t_get_prop_value(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ComboBoxItem.prototype, "checked", {
            get: function () {
                return combo_box_item_t_get_prop_checked(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        return ComboBoxItem;
    }(Widget));
    AWTK.ComboBoxItem = ComboBoxItem;
    var ComboBox = /** @class */ (function (_super) {
        __extends(ComboBox, _super);
        function ComboBox(nativeObj) {
            return _super.call(this, nativeObj) || this;
        }
        ComboBox.create = function (parent, x, y, w, h) {
            return new ComboBox(combo_box_create(parent ? parent.nativeObj : null, x, y, w, h));
        };
        ComboBox.cast = function (widget) {
            return new ComboBox(combo_box_cast(widget ? (widget.nativeObj || widget) : null));
        };
        ComboBox.prototype.setOpenWindow = function (open_window) {
            return combo_box_set_open_window(this.nativeObj, open_window);
        };
        ComboBox.prototype.resetOptions = function () {
            return combo_box_reset_options(this.nativeObj);
        };
        ComboBox.prototype.countOptions = function () {
            return combo_box_count_options(this.nativeObj);
        };
        ComboBox.prototype.setSelectedIndex = function (index) {
            return combo_box_set_selected_index(this.nativeObj, index);
        };
        ComboBox.prototype.setValue = function (value) {
            return combo_box_set_value(this.nativeObj, value);
        };
        ComboBox.prototype.appendOption = function (value, text) {
            return combo_box_append_option(this.nativeObj, value, text);
        };
        ComboBox.prototype.setOptions = function (options) {
            return combo_box_set_options(this.nativeObj, options);
        };
        ComboBox.prototype.getValue = function () {
            return combo_box_get_value(this.nativeObj);
        };
        ComboBox.prototype.getText = function () {
            return combo_box_get_text(this.nativeObj);
        };
        Object.defineProperty(ComboBox.prototype, "openWindow", {
            get: function () {
                return combo_box_t_get_prop_open_window(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ComboBox.prototype, "selectedIndex", {
            get: function () {
                return combo_box_t_get_prop_selected_index(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ComboBox.prototype, "value", {
            get: function () {
                return combo_box_t_get_prop_value(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ComboBox.prototype, "options", {
            get: function () {
                return combo_box_t_get_prop_options(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        return ComboBox;
    }(Widget));
    AWTK.ComboBox = ComboBox;
    var DialogClient = /** @class */ (function (_super) {
        __extends(DialogClient, _super);
        function DialogClient(nativeObj) {
            return _super.call(this, nativeObj) || this;
        }
        DialogClient.create = function (parent, x, y, w, h) {
            return new DialogClient(dialog_client_create(parent ? parent.nativeObj : null, x, y, w, h));
        };
        DialogClient.cast = function (widget) {
            return new DialogClient(dialog_client_cast(widget ? (widget.nativeObj || widget) : null));
        };
        return DialogClient;
    }(Widget));
    AWTK.DialogClient = DialogClient;
    var DialogTitle = /** @class */ (function (_super) {
        __extends(DialogTitle, _super);
        function DialogTitle(nativeObj) {
            return _super.call(this, nativeObj) || this;
        }
        DialogTitle.create = function (parent, x, y, w, h) {
            return new DialogTitle(dialog_title_create(parent ? parent.nativeObj : null, x, y, w, h));
        };
        DialogTitle.cast = function (widget) {
            return new DialogTitle(dialog_title_cast(widget ? (widget.nativeObj || widget) : null));
        };
        return DialogTitle;
    }(Widget));
    AWTK.DialogTitle = DialogTitle;
    var Dialog = /** @class */ (function (_super) {
        __extends(Dialog, _super);
        function Dialog(nativeObj) {
            return _super.call(this, nativeObj) || this;
        }
        Dialog.create = function (parent, x, y, w, h) {
            return new Dialog(dialog_create(parent ? parent.nativeObj : null, x, y, w, h));
        };
        Dialog.createSimple = function (parent, x, y, w, h) {
            return new Dialog(dialog_create_simple(parent ? parent.nativeObj : null, x, y, w, h));
        };
        Dialog.cast = function (widget) {
            return new Dialog(dialog_cast(widget ? (widget.nativeObj || widget) : null));
        };
        Dialog.prototype.getTitle = function () {
            return new Widget(dialog_get_title(this.nativeObj));
        };
        Dialog.prototype.getClient = function () {
            return new Widget(dialog_get_client(this.nativeObj));
        };
        Dialog.open = function (name) {
            return new Dialog(dialog_open(name));
        };
        Dialog.prototype.setTitle = function (title) {
            return dialog_set_title(this.nativeObj, title);
        };
        Dialog.prototype.modal = function () {
            return dialog_modal(this.nativeObj);
        };
        Dialog.prototype.quit = function (code) {
            return dialog_quit(this.nativeObj, code);
        };
        Dialog.prototype.isQuited = function () {
            return dialog_is_quited(this.nativeObj);
        };
        Dialog.prototype.isModal = function () {
            return dialog_is_modal(this.nativeObj);
        };
        Dialog.toast = function (text, duration) {
            return dialog_toast(text, duration);
        };
        Dialog.info = function (text) {
            return dialog_info(text);
        };
        Dialog.warn = function (text) {
            return dialog_warn(text);
        };
        Dialog.confirm = function (text) {
            return dialog_confirm(text);
        };
        Object.defineProperty(Dialog.prototype, "highlight", {
            get: function () {
                return dialog_t_get_prop_highlight(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        return Dialog;
    }(Widget));
    AWTK.Dialog = Dialog;
    var Dragger = /** @class */ (function (_super) {
        __extends(Dragger, _super);
        function Dragger(nativeObj) {
            return _super.call(this, nativeObj) || this;
        }
        Dragger.create = function (parent, x, y, w, h) {
            return new Dragger(dragger_create(parent ? parent.nativeObj : null, x, y, w, h));
        };
        Dragger.cast = function (widget) {
            return new Dragger(dragger_cast(widget ? (widget.nativeObj || widget) : null));
        };
        Dragger.prototype.setRange = function (x_min, y_min, x_max, y_max) {
            return new Widget(dragger_set_range(this.nativeObj, x_min, y_min, x_max, y_max));
        };
        Object.defineProperty(Dragger.prototype, "xMin", {
            get: function () {
                return dragger_t_get_prop_x_min(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Dragger.prototype, "yMin", {
            get: function () {
                return dragger_t_get_prop_y_min(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Dragger.prototype, "xMax", {
            get: function () {
                return dragger_t_get_prop_x_max(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Dragger.prototype, "yMax", {
            get: function () {
                return dragger_t_get_prop_y_max(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        return Dragger;
    }(Widget));
    AWTK.Dragger = Dragger;
    var Edit = /** @class */ (function (_super) {
        __extends(Edit, _super);
        function Edit(nativeObj) {
            return _super.call(this, nativeObj) || this;
        }
        Edit.create = function (parent, x, y, w, h) {
            return new Edit(edit_create(parent ? parent.nativeObj : null, x, y, w, h));
        };
        Edit.cast = function (widget) {
            return new Edit(edit_cast(widget ? (widget.nativeObj || widget) : null));
        };
        Edit.prototype.getInt = function () {
            return edit_get_int(this.nativeObj);
        };
        Edit.prototype.getDouble = function () {
            return edit_get_double(this.nativeObj);
        };
        Edit.prototype.setInt = function (value) {
            return edit_set_int(this.nativeObj, value);
        };
        Edit.prototype.setDouble = function (value) {
            return edit_set_double(this.nativeObj, value);
        };
        Edit.prototype.setTextLimit = function (min, max) {
            return edit_set_text_limit(this.nativeObj, min, max);
        };
        Edit.prototype.setIntLimit = function (min, max, step) {
            return edit_set_int_limit(this.nativeObj, min, max, step);
        };
        Edit.prototype.setFloatLimit = function (min, max, step) {
            return edit_set_float_limit(this.nativeObj, min, max, step);
        };
        Edit.prototype.setReadonly = function (readonly) {
            return edit_set_readonly(this.nativeObj, readonly);
        };
        Edit.prototype.setAutoFix = function (auto_fix) {
            return edit_set_auto_fix(this.nativeObj, auto_fix);
        };
        Edit.prototype.setInputType = function (type) {
            return edit_set_input_type(this.nativeObj, type);
        };
        Edit.prototype.setInputTips = function (tips) {
            return edit_set_input_tips(this.nativeObj, tips);
        };
        Edit.prototype.setPasswordVisible = function (password_visible) {
            return edit_set_password_visible(this.nativeObj, password_visible);
        };
        Edit.prototype.setFocus = function (focus) {
            return edit_set_focus(this.nativeObj, focus);
        };
        Object.defineProperty(Edit.prototype, "readonly", {
            get: function () {
                return edit_t_get_prop_readonly(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Edit.prototype, "passwordVisible", {
            get: function () {
                return edit_t_get_prop_password_visible(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Edit.prototype, "autoFix", {
            get: function () {
                return edit_t_get_prop_auto_fix(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Edit.prototype, "topMargin", {
            get: function () {
                return edit_t_get_prop_top_margin(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Edit.prototype, "bottomMargin", {
            get: function () {
                return edit_t_get_prop_bottom_margin(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Edit.prototype, "leftMargin", {
            get: function () {
                return edit_t_get_prop_left_margin(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Edit.prototype, "rightMargin", {
            get: function () {
                return edit_t_get_prop_right_margin(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Edit.prototype, "tips", {
            get: function () {
                return edit_t_get_prop_tips(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Edit.prototype, "focus", {
            get: function () {
                return edit_t_get_prop_focus(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        return Edit;
    }(Widget));
    AWTK.Edit = Edit;
    var GridItem = /** @class */ (function (_super) {
        __extends(GridItem, _super);
        function GridItem(nativeObj) {
            return _super.call(this, nativeObj) || this;
        }
        GridItem.create = function (parent, x, y, w, h) {
            return new GridItem(grid_item_create(parent ? parent.nativeObj : null, x, y, w, h));
        };
        GridItem.cast = function (widget) {
            return new GridItem(grid_item_cast(widget ? (widget.nativeObj || widget) : null));
        };
        return GridItem;
    }(Widget));
    AWTK.GridItem = GridItem;
    var Grid = /** @class */ (function (_super) {
        __extends(Grid, _super);
        function Grid(nativeObj) {
            return _super.call(this, nativeObj) || this;
        }
        Grid.create = function (parent, x, y, w, h) {
            return new Grid(grid_create(parent ? parent.nativeObj : null, x, y, w, h));
        };
        Grid.cast = function (widget) {
            return new Grid(grid_cast(widget ? (widget.nativeObj || widget) : null));
        };
        return Grid;
    }(Widget));
    AWTK.Grid = Grid;
    var GroupBox = /** @class */ (function (_super) {
        __extends(GroupBox, _super);
        function GroupBox(nativeObj) {
            return _super.call(this, nativeObj) || this;
        }
        GroupBox.create = function (parent, x, y, w, h) {
            return new GroupBox(group_box_create(parent ? parent.nativeObj : null, x, y, w, h));
        };
        GroupBox.cast = function (widget) {
            return new GroupBox(group_box_cast(widget ? (widget.nativeObj || widget) : null));
        };
        return GroupBox;
    }(Widget));
    AWTK.GroupBox = GroupBox;
    var Popup = /** @class */ (function (_super) {
        __extends(Popup, _super);
        function Popup(nativeObj) {
            return _super.call(this, nativeObj) || this;
        }
        Popup.create = function (parent, x, y, w, h) {
            return new Popup(popup_create(parent ? parent.nativeObj : null, x, y, w, h));
        };
        Popup.cast = function (widget) {
            return new Popup(popup_cast(widget ? (widget.nativeObj || widget) : null));
        };
        Popup.prototype.setCloseWhenClick = function (close_when_click) {
            return popup_set_close_when_click(this.nativeObj, close_when_click);
        };
        Popup.prototype.setCloseWhenClickOutside = function (close_when_click_outside) {
            return popup_set_close_when_click_outside(this.nativeObj, close_when_click_outside);
        };
        Object.defineProperty(Popup.prototype, "closeWhenClick", {
            get: function () {
                return popup_t_get_prop_close_when_click(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Popup.prototype, "closeWhenClickOutside", {
            get: function () {
                return popup_t_get_prop_close_when_click_outside(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        return Popup;
    }(Widget));
    AWTK.Popup = Popup;
    var Label = /** @class */ (function (_super) {
        __extends(Label, _super);
        function Label(nativeObj) {
            return _super.call(this, nativeObj) || this;
        }
        Label.create = function (parent, x, y, w, h) {
            return new Label(label_create(parent ? parent.nativeObj : null, x, y, w, h));
        };
        Label.prototype.setLength = function (length) {
            return label_set_length(this.nativeObj, length);
        };
        Label.prototype.resizeToContent = function (min_w, max_w, min_h, max_h) {
            return label_resize_to_content(this.nativeObj, min_w, max_w, min_h, max_h);
        };
        Label.cast = function (widget) {
            return new Label(label_cast(widget ? (widget.nativeObj || widget) : null));
        };
        Object.defineProperty(Label.prototype, "length", {
            get: function () {
                return label_t_get_prop_length(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        return Label;
    }(Widget));
    AWTK.Label = Label;
    var Pages = /** @class */ (function (_super) {
        __extends(Pages, _super);
        function Pages(nativeObj) {
            return _super.call(this, nativeObj) || this;
        }
        Pages.create = function (parent, x, y, w, h) {
            return new Pages(pages_create(parent ? parent.nativeObj : null, x, y, w, h));
        };
        Pages.cast = function (widget) {
            return new Pages(pages_cast(widget ? (widget.nativeObj || widget) : null));
        };
        Pages.prototype.setActive = function (index) {
            return pages_set_active(this.nativeObj, index);
        };
        Pages.prototype.setActiveByName = function (name) {
            return pages_set_active_by_name(this.nativeObj, name);
        };
        Object.defineProperty(Pages.prototype, "active", {
            get: function () {
                return pages_t_get_prop_active(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        return Pages;
    }(Widget));
    AWTK.Pages = Pages;
    var ImageAnimation = /** @class */ (function (_super) {
        __extends(ImageAnimation, _super);
        function ImageAnimation(nativeObj) {
            return _super.call(this, nativeObj) || this;
        }
        ImageAnimation.create = function (parent, x, y, w, h) {
            return new ImageAnimation(image_animation_create(parent ? parent.nativeObj : null, x, y, w, h));
        };
        ImageAnimation.prototype.setLoop = function (loop) {
            return image_animation_set_loop(this.nativeObj, loop);
        };
        ImageAnimation.prototype.setImage = function (image) {
            return image_animation_set_image(this.nativeObj, image);
        };
        ImageAnimation.prototype.setInterval = function (interval) {
            return image_animation_set_interval(this.nativeObj, interval);
        };
        ImageAnimation.prototype.setDelay = function (delay) {
            return image_animation_set_delay(this.nativeObj, delay);
        };
        ImageAnimation.prototype.setAutoPlay = function (auto_play) {
            return image_animation_set_auto_play(this.nativeObj, auto_play);
        };
        ImageAnimation.prototype.setSequence = function (sequence) {
            return image_animation_set_sequence(this.nativeObj, sequence);
        };
        ImageAnimation.prototype.setRangeSequence = function (start_index, end_index) {
            return image_animation_set_range_sequence(this.nativeObj, start_index, end_index);
        };
        ImageAnimation.prototype.play = function () {
            return image_animation_play(this.nativeObj);
        };
        ImageAnimation.prototype.stop = function () {
            return image_animation_stop(this.nativeObj);
        };
        ImageAnimation.prototype.pause = function () {
            return image_animation_pause(this.nativeObj);
        };
        ImageAnimation.prototype.setFormat = function (format) {
            return image_animation_set_format(this.nativeObj, format);
        };
        ImageAnimation.prototype.setUnloadAfterPaint = function (unload_after_paint) {
            return image_animation_set_unload_after_paint(this.nativeObj, unload_after_paint);
        };
        ImageAnimation.cast = function (widget) {
            return new ImageAnimation(image_animation_cast(widget ? (widget.nativeObj || widget) : null));
        };
        Object.defineProperty(ImageAnimation.prototype, "image", {
            get: function () {
                return image_animation_t_get_prop_image(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ImageAnimation.prototype, "sequence", {
            get: function () {
                return image_animation_t_get_prop_sequence(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ImageAnimation.prototype, "startIndex", {
            get: function () {
                return image_animation_t_get_prop_start_index(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ImageAnimation.prototype, "endIndex", {
            get: function () {
                return image_animation_t_get_prop_end_index(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ImageAnimation.prototype, "loop", {
            get: function () {
                return image_animation_t_get_prop_loop(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ImageAnimation.prototype, "autoPlay", {
            get: function () {
                return image_animation_t_get_prop_auto_play(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ImageAnimation.prototype, "unloadAfterPaint", {
            get: function () {
                return image_animation_t_get_prop_unload_after_paint(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ImageAnimation.prototype, "format", {
            get: function () {
                return image_animation_t_get_prop_format(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ImageAnimation.prototype, "interval", {
            get: function () {
                return image_animation_t_get_prop_interval(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ImageAnimation.prototype, "delay", {
            get: function () {
                return image_animation_t_get_prop_delay(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        return ImageAnimation;
    }(Widget));
    AWTK.ImageAnimation = ImageAnimation;
    var Image = /** @class */ (function (_super) {
        __extends(Image, _super);
        function Image(nativeObj) {
            return _super.call(this, nativeObj) || this;
        }
        Image.create = function (parent, x, y, w, h) {
            return new Image(image_create(parent ? parent.nativeObj : null, x, y, w, h));
        };
        Image.prototype.setDrawType = function (draw_type) {
            return image_set_draw_type(this.nativeObj, draw_type);
        };
        Image.cast = function (widget) {
            return new Image(image_cast(widget ? (widget.nativeObj || widget) : null));
        };
        Object.defineProperty(Image.prototype, "drawType", {
            get: function () {
                return image_t_get_prop_draw_type(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        return Image;
    }(ImageBase));
    AWTK.Image = Image;
    var SvgImage = /** @class */ (function (_super) {
        __extends(SvgImage, _super);
        function SvgImage(nativeObj) {
            return _super.call(this, nativeObj) || this;
        }
        SvgImage.create = function (parent, x, y, w, h) {
            return new SvgImage(svg_image_create(parent ? parent.nativeObj : null, x, y, w, h));
        };
        SvgImage.cast = function (widget) {
            return new SvgImage(svg_image_cast(widget ? (widget.nativeObj || widget) : null));
        };
        return SvgImage;
    }(ImageBase));
    AWTK.SvgImage = SvgImage;
    var SpinBox = /** @class */ (function (_super) {
        __extends(SpinBox, _super);
        function SpinBox(nativeObj) {
            return _super.call(this, nativeObj) || this;
        }
        SpinBox.create = function (parent, x, y, w, h) {
            return new SpinBox(spin_box_create(parent ? parent.nativeObj : null, x, y, w, h));
        };
        SpinBox.cast = function (widget) {
            return new SpinBox(spin_box_cast(widget ? (widget.nativeObj || widget) : null));
        };
        return SpinBox;
    }(Edit));
    AWTK.SpinBox = SpinBox;
    var ObjectDefault = /** @class */ (function (_super) {
        __extends(ObjectDefault, _super);
        function ObjectDefault(nativeObj) {
            return _super.call(this, nativeObj) || this;
        }
        ObjectDefault.create = function () {
            return new ObjectDefault(object_default_create());
        };
        ObjectDefault.prototype.unref = function () {
            return object_default_unref(this.nativeObj);
        };
        Object.defineProperty(ObjectDefault.prototype, "propsSize", {
            get: function () {
                return object_default_t_get_prop_props_size(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        return ObjectDefault;
    }(ObjectBase));
    AWTK.ObjectDefault = ObjectDefault;
    var GifImage = /** @class */ (function (_super) {
        __extends(GifImage, _super);
        function GifImage(nativeObj) {
            return _super.call(this, nativeObj) || this;
        }
        GifImage.create = function (parent, x, y, w, h) {
            return new GifImage(gif_image_create(parent ? parent.nativeObj : null, x, y, w, h));
        };
        GifImage.cast = function (widget) {
            return new GifImage(gif_image_cast(widget ? (widget.nativeObj || widget) : null));
        };
        return GifImage;
    }(ImageBase));
    AWTK.GifImage = GifImage;
    var TimerInfo = /** @class */ (function (_super) {
        __extends(TimerInfo, _super);
        function TimerInfo(nativeObj) {
            return _super.call(this, nativeObj) || this;
        }
        TimerInfo.cast = function (timer) {
            return new TimerInfo(timer_info_cast(timer ? (timer.nativeObj || timer) : null));
        };
        Object.defineProperty(TimerInfo.prototype, "ctx", {
            get: function () {
                return timer_info_t_get_prop_ctx(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimerInfo.prototype, "id", {
            get: function () {
                return timer_info_t_get_prop_id(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimerInfo.prototype, "now", {
            get: function () {
                return timer_info_t_get_prop_now(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(TimerInfo.prototype, "userChangedTime", {
            get: function () {
                return timer_info_t_get_prop_user_changed_time(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        return TimerInfo;
    }(ObjectBase));
    AWTK.TimerInfo = TimerInfo;
    var IdleInfo = /** @class */ (function (_super) {
        __extends(IdleInfo, _super);
        function IdleInfo(nativeObj) {
            return _super.call(this, nativeObj) || this;
        }
        IdleInfo.cast = function (idle) {
            return new IdleInfo(idle_info_cast(idle ? (idle.nativeObj || idle) : null));
        };
        Object.defineProperty(IdleInfo.prototype, "ctx", {
            get: function () {
                return idle_info_t_get_prop_ctx(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(IdleInfo.prototype, "id", {
            get: function () {
                return idle_info_t_get_prop_id(this.nativeObj);
            },
            enumerable: true,
            configurable: true
        });
        return IdleInfo;
    }(ObjectBase));
    AWTK.IdleInfo = IdleInfo;
    var SystemBar = /** @class */ (function (_super) {
        __extends(SystemBar, _super);
        function SystemBar(nativeObj) {
            return _super.call(this, nativeObj) || this;
        }
        SystemBar.create = function (parent, x, y, w, h) {
            return new SystemBar(system_bar_create(parent ? parent.nativeObj : null, x, y, w, h));
        };
        SystemBar.cast = function (widget) {
            return new SystemBar(system_bar_cast(widget ? (widget.nativeObj || widget) : null));
        };
        return SystemBar;
    }(WindowBase));
    AWTK.SystemBar = SystemBar;
})(AWTK || (AWTK = {}));
//# sourceMappingURL=awtk_api.js.map