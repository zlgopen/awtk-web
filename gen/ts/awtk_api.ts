var Module : any = Module || {}

const tk_quit = Module.cwrap("tk_quit", 
    "number", []);
const asset_info_t_get_prop_type = Module.cwrap("asset_info_t_get_prop_type", 
    "number", ["number"]);
const asset_info_t_get_prop_subtype = Module.cwrap("asset_info_t_get_prop_subtype", 
    "number", ["number"]);
const asset_info_t_get_prop_is_in_rom = Module.cwrap("asset_info_t_get_prop_is_in_rom", 
    "number", ["number"]);
const asset_info_t_get_prop_size = Module.cwrap("asset_info_t_get_prop_size", 
    "number", ["number"]);
const asset_info_t_get_prop_refcount = Module.cwrap("asset_info_t_get_prop_refcount", 
    "number", ["number"]);
const asset_info_t_get_prop_name = Module.cwrap("asset_info_t_get_prop_name", 
    "string", ["number"]);
const assets_manager = Module.cwrap("assets_manager", 
    "number", []);
const assets_manager_ref = Module.cwrap("assets_manager_ref", 
    "number", ["number","number","string"]);
const assets_manager_unref = Module.cwrap("assets_manager_unref", 
    "number", ["number","number"]);
const get_BITMAP_FMT_NONE = Module.cwrap("get_BITMAP_FMT_NONE", 
    "number", []);
const get_BITMAP_FMT_RGBA8888 = Module.cwrap("get_BITMAP_FMT_RGBA8888", 
    "number", []);
const get_BITMAP_FMT_ABGR8888 = Module.cwrap("get_BITMAP_FMT_ABGR8888", 
    "number", []);
const get_BITMAP_FMT_BGRA8888 = Module.cwrap("get_BITMAP_FMT_BGRA8888", 
    "number", []);
const get_BITMAP_FMT_ARGB8888 = Module.cwrap("get_BITMAP_FMT_ARGB8888", 
    "number", []);
const get_BITMAP_FMT_RGB565 = Module.cwrap("get_BITMAP_FMT_RGB565", 
    "number", []);
const get_BITMAP_FMT_BGR565 = Module.cwrap("get_BITMAP_FMT_BGR565", 
    "number", []);
const get_BITMAP_FMT_RGB888 = Module.cwrap("get_BITMAP_FMT_RGB888", 
    "number", []);
const get_BITMAP_FMT_BGR888 = Module.cwrap("get_BITMAP_FMT_BGR888", 
    "number", []);
const get_BITMAP_FLAG_NONE = Module.cwrap("get_BITMAP_FLAG_NONE", 
    "number", []);
const get_BITMAP_FLAG_OPAQUE = Module.cwrap("get_BITMAP_FLAG_OPAQUE", 
    "number", []);
const get_BITMAP_FLAG_IMMUTABLE = Module.cwrap("get_BITMAP_FLAG_IMMUTABLE", 
    "number", []);
const get_BITMAP_FLAG_TEXTURE = Module.cwrap("get_BITMAP_FLAG_TEXTURE", 
    "number", []);
const get_BITMAP_FLAG_CHANGED = Module.cwrap("get_BITMAP_FLAG_CHANGED", 
    "number", []);
const bitmap_create = Module.cwrap("bitmap_create", 
    "number", []);
const bitmap_create_ex = Module.cwrap("bitmap_create_ex", 
    "number", ["number","number","number","number"]);
const bitmap_get_bpp = Module.cwrap("bitmap_get_bpp", 
    "number", ["number"]);
const bitmap_destroy = Module.cwrap("bitmap_destroy", 
    "number", ["number"]);
const bitmap_t_get_prop_w = Module.cwrap("bitmap_t_get_prop_w", 
    "number", ["number"]);
const bitmap_t_get_prop_h = Module.cwrap("bitmap_t_get_prop_h", 
    "number", ["number"]);
const bitmap_t_get_prop_line_length = Module.cwrap("bitmap_t_get_prop_line_length", 
    "number", ["number"]);
const bitmap_t_get_prop_flags = Module.cwrap("bitmap_t_get_prop_flags", 
    "number", ["number"]);
const bitmap_t_get_prop_format = Module.cwrap("bitmap_t_get_prop_format", 
    "number", ["number"]);
const bitmap_t_get_prop_name = Module.cwrap("bitmap_t_get_prop_name", 
    "string", ["number"]);
const get_IMAGE_DRAW_DEFAULT = Module.cwrap("get_IMAGE_DRAW_DEFAULT", 
    "number", []);
const get_IMAGE_DRAW_CENTER = Module.cwrap("get_IMAGE_DRAW_CENTER", 
    "number", []);
const get_IMAGE_DRAW_ICON = Module.cwrap("get_IMAGE_DRAW_ICON", 
    "number", []);
const get_IMAGE_DRAW_SCALE = Module.cwrap("get_IMAGE_DRAW_SCALE", 
    "number", []);
const get_IMAGE_DRAW_SCALE_AUTO = Module.cwrap("get_IMAGE_DRAW_SCALE_AUTO", 
    "number", []);
const get_IMAGE_DRAW_SCALE_DOWN = Module.cwrap("get_IMAGE_DRAW_SCALE_DOWN", 
    "number", []);
const get_IMAGE_DRAW_SCALE_W = Module.cwrap("get_IMAGE_DRAW_SCALE_W", 
    "number", []);
const get_IMAGE_DRAW_SCALE_H = Module.cwrap("get_IMAGE_DRAW_SCALE_H", 
    "number", []);
const get_IMAGE_DRAW_REPEAT = Module.cwrap("get_IMAGE_DRAW_REPEAT", 
    "number", []);
const get_IMAGE_DRAW_REPEAT_X = Module.cwrap("get_IMAGE_DRAW_REPEAT_X", 
    "number", []);
const get_IMAGE_DRAW_REPEAT_Y = Module.cwrap("get_IMAGE_DRAW_REPEAT_Y", 
    "number", []);
const get_IMAGE_DRAW_PATCH9 = Module.cwrap("get_IMAGE_DRAW_PATCH9", 
    "number", []);
const get_IMAGE_DRAW_PATCH3_X = Module.cwrap("get_IMAGE_DRAW_PATCH3_X", 
    "number", []);
const get_IMAGE_DRAW_PATCH3_Y = Module.cwrap("get_IMAGE_DRAW_PATCH3_Y", 
    "number", []);
const get_IMAGE_DRAW_PATCH3_X_SCALE_Y = Module.cwrap("get_IMAGE_DRAW_PATCH3_X_SCALE_Y", 
    "number", []);
const get_IMAGE_DRAW_PATCH3_Y_SCALE_X = Module.cwrap("get_IMAGE_DRAW_PATCH3_Y_SCALE_X", 
    "number", []);
const canvas_get_width = Module.cwrap("canvas_get_width", 
    "number", ["number"]);
const canvas_get_height = Module.cwrap("canvas_get_height", 
    "number", ["number"]);
const canvas_get_clip_rect = Module.cwrap("canvas_get_clip_rect", 
    "number", ["number","number"]);
const canvas_set_clip_rect = Module.cwrap("canvas_set_clip_rect", 
    "number", ["number","number"]);
const canvas_set_clip_rect_ex = Module.cwrap("canvas_set_clip_rect_ex", 
    "number", ["number","number","number"]);
const canvas_set_fill_color_str = Module.cwrap("canvas_set_fill_color_str", 
    "number", ["number","string"]);
const canvas_set_text_color_str = Module.cwrap("canvas_set_text_color_str", 
    "number", ["number","string"]);
const canvas_set_stroke_color_str = Module.cwrap("canvas_set_stroke_color_str", 
    "number", ["number","string"]);
const canvas_set_global_alpha = Module.cwrap("canvas_set_global_alpha", 
    "number", ["number","number"]);
const canvas_translate = Module.cwrap("canvas_translate", 
    "number", ["number","number","number"]);
const canvas_untranslate = Module.cwrap("canvas_untranslate", 
    "number", ["number","number","number"]);
const canvas_draw_vline = Module.cwrap("canvas_draw_vline", 
    "number", ["number","number","number","number"]);
const canvas_draw_hline = Module.cwrap("canvas_draw_hline", 
    "number", ["number","number","number","number"]);
const canvas_fill_rect = Module.cwrap("canvas_fill_rect", 
    "number", ["number","number","number","number","number"]);
const canvas_stroke_rect = Module.cwrap("canvas_stroke_rect", 
    "number", ["number","number","number","number","number"]);
const canvas_set_font = Module.cwrap("canvas_set_font", 
    "number", ["number","string","number"]);
const canvas_measure_utf8 = Module.cwrap("canvas_measure_utf8", 
    "number", ["number","string"]);
const canvas_draw_utf8 = Module.cwrap("canvas_draw_utf8", 
    "number", ["number","string","number","number"]);
const canvas_draw_utf8_in_rect = Module.cwrap("canvas_draw_utf8_in_rect", 
    "number", ["number","string","number"]);
const canvas_draw_icon = Module.cwrap("canvas_draw_icon", 
    "number", ["number","number","number","number"]);
const canvas_draw_image = Module.cwrap("canvas_draw_image", 
    "number", ["number","number","number","number"]);
const canvas_get_vgcanvas = Module.cwrap("canvas_get_vgcanvas", 
    "number", ["number"]);
const canvas_cast = Module.cwrap("canvas_cast", 
    "number", ["number"]);
const canvas_t_get_prop_ox = Module.cwrap("canvas_t_get_prop_ox", 
    "number", ["number"]);
const canvas_t_get_prop_oy = Module.cwrap("canvas_t_get_prop_oy", 
    "number", ["number"]);
const get_CLIP_BOARD_DATA_TYPE_NONE = Module.cwrap("get_CLIP_BOARD_DATA_TYPE_NONE", 
    "number", []);
const get_CLIP_BOARD_DATA_TYPE_TEXT = Module.cwrap("get_CLIP_BOARD_DATA_TYPE_TEXT", 
    "number", []);
const clip_board_set_text = Module.cwrap("clip_board_set_text", 
    "number", ["string"]);
const clip_board_get_text = Module.cwrap("clip_board_get_text", 
    "string", []);
const get_EVT_POINTER_DOWN = Module.cwrap("get_EVT_POINTER_DOWN", 
    "number", []);
const get_EVT_POINTER_DOWN_ABORT = Module.cwrap("get_EVT_POINTER_DOWN_ABORT", 
    "number", []);
const get_EVT_POINTER_MOVE = Module.cwrap("get_EVT_POINTER_MOVE", 
    "number", []);
const get_EVT_POINTER_UP = Module.cwrap("get_EVT_POINTER_UP", 
    "number", []);
const get_EVT_WHEEL = Module.cwrap("get_EVT_WHEEL", 
    "number", []);
const get_EVT_CONTEXT_MENU = Module.cwrap("get_EVT_CONTEXT_MENU", 
    "number", []);
const get_EVT_POINTER_ENTER = Module.cwrap("get_EVT_POINTER_ENTER", 
    "number", []);
const get_EVT_POINTER_LEAVE = Module.cwrap("get_EVT_POINTER_LEAVE", 
    "number", []);
const get_EVT_LONG_PRESS = Module.cwrap("get_EVT_LONG_PRESS", 
    "number", []);
const get_EVT_CLICK = Module.cwrap("get_EVT_CLICK", 
    "number", []);
const get_EVT_FOCUS = Module.cwrap("get_EVT_FOCUS", 
    "number", []);
const get_EVT_BLUR = Module.cwrap("get_EVT_BLUR", 
    "number", []);
const get_EVT_KEY_DOWN = Module.cwrap("get_EVT_KEY_DOWN", 
    "number", []);
const get_EVT_KEY_REPEAT = Module.cwrap("get_EVT_KEY_REPEAT", 
    "number", []);
const get_EVT_KEY_UP = Module.cwrap("get_EVT_KEY_UP", 
    "number", []);
const get_EVT_WILL_MOVE = Module.cwrap("get_EVT_WILL_MOVE", 
    "number", []);
const get_EVT_MOVE = Module.cwrap("get_EVT_MOVE", 
    "number", []);
const get_EVT_WILL_RESIZE = Module.cwrap("get_EVT_WILL_RESIZE", 
    "number", []);
const get_EVT_RESIZE = Module.cwrap("get_EVT_RESIZE", 
    "number", []);
const get_EVT_WILL_MOVE_RESIZE = Module.cwrap("get_EVT_WILL_MOVE_RESIZE", 
    "number", []);
const get_EVT_MOVE_RESIZE = Module.cwrap("get_EVT_MOVE_RESIZE", 
    "number", []);
const get_EVT_VALUE_WILL_CHANGE = Module.cwrap("get_EVT_VALUE_WILL_CHANGE", 
    "number", []);
const get_EVT_VALUE_CHANGED = Module.cwrap("get_EVT_VALUE_CHANGED", 
    "number", []);
const get_EVT_VALUE_CHANGING = Module.cwrap("get_EVT_VALUE_CHANGING", 
    "number", []);
const get_EVT_PAINT = Module.cwrap("get_EVT_PAINT", 
    "number", []);
const get_EVT_BEFORE_PAINT = Module.cwrap("get_EVT_BEFORE_PAINT", 
    "number", []);
const get_EVT_AFTER_PAINT = Module.cwrap("get_EVT_AFTER_PAINT", 
    "number", []);
const get_EVT_PAINT_DONE = Module.cwrap("get_EVT_PAINT_DONE", 
    "number", []);
const get_EVT_LOCALE_CHANGED = Module.cwrap("get_EVT_LOCALE_CHANGED", 
    "number", []);
const get_EVT_ANIM_START = Module.cwrap("get_EVT_ANIM_START", 
    "number", []);
const get_EVT_ANIM_STOP = Module.cwrap("get_EVT_ANIM_STOP", 
    "number", []);
const get_EVT_ANIM_PAUSE = Module.cwrap("get_EVT_ANIM_PAUSE", 
    "number", []);
const get_EVT_ANIM_ONCE = Module.cwrap("get_EVT_ANIM_ONCE", 
    "number", []);
const get_EVT_ANIM_END = Module.cwrap("get_EVT_ANIM_END", 
    "number", []);
const get_EVT_WINDOW_LOAD = Module.cwrap("get_EVT_WINDOW_LOAD", 
    "number", []);
const get_EVT_WINDOW_WILL_OPEN = Module.cwrap("get_EVT_WINDOW_WILL_OPEN", 
    "number", []);
const get_EVT_WINDOW_OPEN = Module.cwrap("get_EVT_WINDOW_OPEN", 
    "number", []);
const get_EVT_WINDOW_CLOSE = Module.cwrap("get_EVT_WINDOW_CLOSE", 
    "number", []);
const get_EVT_REQUEST_CLOSE_WINDOW = Module.cwrap("get_EVT_REQUEST_CLOSE_WINDOW", 
    "number", []);
const get_EVT_TOP_WINDOW_CHANGED = Module.cwrap("get_EVT_TOP_WINDOW_CHANGED", 
    "number", []);
const get_EVT_IM_COMMIT = Module.cwrap("get_EVT_IM_COMMIT", 
    "number", []);
const get_EVT_IM_SHOW_CANDIDATES = Module.cwrap("get_EVT_IM_SHOW_CANDIDATES", 
    "number", []);
const get_EVT_IM_ACTION = Module.cwrap("get_EVT_IM_ACTION", 
    "number", []);
const get_EVT_IM_ACTION_INFO = Module.cwrap("get_EVT_IM_ACTION_INFO", 
    "number", []);
const get_EVT_DRAG_START = Module.cwrap("get_EVT_DRAG_START", 
    "number", []);
const get_EVT_DRAG = Module.cwrap("get_EVT_DRAG", 
    "number", []);
const get_EVT_DRAG_END = Module.cwrap("get_EVT_DRAG_END", 
    "number", []);
const get_EVT_SCREEN_SAVER = Module.cwrap("get_EVT_SCREEN_SAVER", 
    "number", []);
const get_EVT_REQ_START = Module.cwrap("get_EVT_REQ_START", 
    "number", []);
const get_EVT_USER_START = Module.cwrap("get_EVT_USER_START", 
    "number", []);
const font_manager_unload_font = Module.cwrap("font_manager_unload_font", 
    "number", ["number","string","number"]);
const idle_add = Module.cwrap("idle_add", 
    "number", ["number","number"]);
const idle_remove = Module.cwrap("idle_remove", 
    "number", ["number"]);
const image_manager = Module.cwrap("image_manager", 
    "number", []);
const image_manager_get_bitmap = Module.cwrap("image_manager_get_bitmap", 
    "number", ["number","string","number"]);
const get_INPUT_TEXT = Module.cwrap("get_INPUT_TEXT", 
    "number", []);
const get_INPUT_INT = Module.cwrap("get_INPUT_INT", 
    "number", []);
const get_INPUT_UINT = Module.cwrap("get_INPUT_UINT", 
    "number", []);
const get_INPUT_HEX = Module.cwrap("get_INPUT_HEX", 
    "number", []);
const get_INPUT_FLOAT = Module.cwrap("get_INPUT_FLOAT", 
    "number", []);
const get_INPUT_UFLOAT = Module.cwrap("get_INPUT_UFLOAT", 
    "number", []);
const get_INPUT_EMAIL = Module.cwrap("get_INPUT_EMAIL", 
    "number", []);
const get_INPUT_PASSWORD = Module.cwrap("get_INPUT_PASSWORD", 
    "number", []);
const get_INPUT_PHONE = Module.cwrap("get_INPUT_PHONE", 
    "number", []);
const get_INPUT_CUSTOM = Module.cwrap("get_INPUT_CUSTOM", 
    "number", []);
const input_method_commit_text = Module.cwrap("input_method_commit_text", 
    "number", ["number","string"]);
const input_method_dispatch_key = Module.cwrap("input_method_dispatch_key", 
    "number", ["number","number"]);
const input_method = Module.cwrap("input_method", 
    "number", []);
const get_TK_KEY_RETURN = Module.cwrap("get_TK_KEY_RETURN", 
    "number", []);
const get_TK_KEY_ESCAPE = Module.cwrap("get_TK_KEY_ESCAPE", 
    "number", []);
const get_TK_KEY_BACKSPACE = Module.cwrap("get_TK_KEY_BACKSPACE", 
    "number", []);
const get_TK_KEY_TAB = Module.cwrap("get_TK_KEY_TAB", 
    "number", []);
const get_TK_KEY_SPACE = Module.cwrap("get_TK_KEY_SPACE", 
    "number", []);
const get_TK_KEY_EXCLAIM = Module.cwrap("get_TK_KEY_EXCLAIM", 
    "number", []);
const get_TK_KEY_QUOTEDBL = Module.cwrap("get_TK_KEY_QUOTEDBL", 
    "number", []);
const get_TK_KEY_HASH = Module.cwrap("get_TK_KEY_HASH", 
    "number", []);
const get_TK_KEY_PERCENT = Module.cwrap("get_TK_KEY_PERCENT", 
    "number", []);
const get_TK_KEY_DOLLAR = Module.cwrap("get_TK_KEY_DOLLAR", 
    "number", []);
const get_TK_KEY_AMPERSAND = Module.cwrap("get_TK_KEY_AMPERSAND", 
    "number", []);
const get_TK_KEY_QUOTE = Module.cwrap("get_TK_KEY_QUOTE", 
    "number", []);
const get_TK_KEY_LEFTPAREN = Module.cwrap("get_TK_KEY_LEFTPAREN", 
    "number", []);
const get_TK_KEY_RIGHTPAREN = Module.cwrap("get_TK_KEY_RIGHTPAREN", 
    "number", []);
const get_TK_KEY_ASTERISK = Module.cwrap("get_TK_KEY_ASTERISK", 
    "number", []);
const get_TK_KEY_PLUS = Module.cwrap("get_TK_KEY_PLUS", 
    "number", []);
const get_TK_KEY_COMMA = Module.cwrap("get_TK_KEY_COMMA", 
    "number", []);
const get_TK_KEY_MINUS = Module.cwrap("get_TK_KEY_MINUS", 
    "number", []);
const get_TK_KEY_PERIOD = Module.cwrap("get_TK_KEY_PERIOD", 
    "number", []);
const get_TK_KEY_SLASH = Module.cwrap("get_TK_KEY_SLASH", 
    "number", []);
const get_TK_KEY_0 = Module.cwrap("get_TK_KEY_0", 
    "number", []);
const get_TK_KEY_1 = Module.cwrap("get_TK_KEY_1", 
    "number", []);
const get_TK_KEY_2 = Module.cwrap("get_TK_KEY_2", 
    "number", []);
const get_TK_KEY_3 = Module.cwrap("get_TK_KEY_3", 
    "number", []);
const get_TK_KEY_4 = Module.cwrap("get_TK_KEY_4", 
    "number", []);
const get_TK_KEY_5 = Module.cwrap("get_TK_KEY_5", 
    "number", []);
const get_TK_KEY_6 = Module.cwrap("get_TK_KEY_6", 
    "number", []);
const get_TK_KEY_7 = Module.cwrap("get_TK_KEY_7", 
    "number", []);
const get_TK_KEY_8 = Module.cwrap("get_TK_KEY_8", 
    "number", []);
const get_TK_KEY_9 = Module.cwrap("get_TK_KEY_9", 
    "number", []);
const get_TK_KEY_COLON = Module.cwrap("get_TK_KEY_COLON", 
    "number", []);
const get_TK_KEY_SEMICOLON = Module.cwrap("get_TK_KEY_SEMICOLON", 
    "number", []);
const get_TK_KEY_LESS = Module.cwrap("get_TK_KEY_LESS", 
    "number", []);
const get_TK_KEY_EQUAL = Module.cwrap("get_TK_KEY_EQUAL", 
    "number", []);
const get_TK_KEY_GREATER = Module.cwrap("get_TK_KEY_GREATER", 
    "number", []);
const get_TK_KEY_QUESTION = Module.cwrap("get_TK_KEY_QUESTION", 
    "number", []);
const get_TK_KEY_AT = Module.cwrap("get_TK_KEY_AT", 
    "number", []);
const get_TK_KEY_LEFTBRACKET = Module.cwrap("get_TK_KEY_LEFTBRACKET", 
    "number", []);
const get_TK_KEY_BACKSLASH = Module.cwrap("get_TK_KEY_BACKSLASH", 
    "number", []);
const get_TK_KEY_RIGHTBRACKET = Module.cwrap("get_TK_KEY_RIGHTBRACKET", 
    "number", []);
const get_TK_KEY_CARET = Module.cwrap("get_TK_KEY_CARET", 
    "number", []);
const get_TK_KEY_UNDERSCORE = Module.cwrap("get_TK_KEY_UNDERSCORE", 
    "number", []);
const get_TK_KEY_BACKQUOTE = Module.cwrap("get_TK_KEY_BACKQUOTE", 
    "number", []);
const get_TK_KEY_a = Module.cwrap("get_TK_KEY_a", 
    "number", []);
const get_TK_KEY_b = Module.cwrap("get_TK_KEY_b", 
    "number", []);
const get_TK_KEY_c = Module.cwrap("get_TK_KEY_c", 
    "number", []);
const get_TK_KEY_d = Module.cwrap("get_TK_KEY_d", 
    "number", []);
const get_TK_KEY_e = Module.cwrap("get_TK_KEY_e", 
    "number", []);
const get_TK_KEY_f = Module.cwrap("get_TK_KEY_f", 
    "number", []);
const get_TK_KEY_g = Module.cwrap("get_TK_KEY_g", 
    "number", []);
const get_TK_KEY_h = Module.cwrap("get_TK_KEY_h", 
    "number", []);
const get_TK_KEY_i = Module.cwrap("get_TK_KEY_i", 
    "number", []);
const get_TK_KEY_j = Module.cwrap("get_TK_KEY_j", 
    "number", []);
const get_TK_KEY_k = Module.cwrap("get_TK_KEY_k", 
    "number", []);
const get_TK_KEY_l = Module.cwrap("get_TK_KEY_l", 
    "number", []);
const get_TK_KEY_m = Module.cwrap("get_TK_KEY_m", 
    "number", []);
const get_TK_KEY_n = Module.cwrap("get_TK_KEY_n", 
    "number", []);
const get_TK_KEY_o = Module.cwrap("get_TK_KEY_o", 
    "number", []);
const get_TK_KEY_p = Module.cwrap("get_TK_KEY_p", 
    "number", []);
const get_TK_KEY_q = Module.cwrap("get_TK_KEY_q", 
    "number", []);
const get_TK_KEY_r = Module.cwrap("get_TK_KEY_r", 
    "number", []);
const get_TK_KEY_s = Module.cwrap("get_TK_KEY_s", 
    "number", []);
const get_TK_KEY_t = Module.cwrap("get_TK_KEY_t", 
    "number", []);
const get_TK_KEY_u = Module.cwrap("get_TK_KEY_u", 
    "number", []);
const get_TK_KEY_v = Module.cwrap("get_TK_KEY_v", 
    "number", []);
const get_TK_KEY_w = Module.cwrap("get_TK_KEY_w", 
    "number", []);
const get_TK_KEY_x = Module.cwrap("get_TK_KEY_x", 
    "number", []);
const get_TK_KEY_y = Module.cwrap("get_TK_KEY_y", 
    "number", []);
const get_TK_KEY_z = Module.cwrap("get_TK_KEY_z", 
    "number", []);
const get_TK_KEY_A = Module.cwrap("get_TK_KEY_A", 
    "number", []);
const get_TK_KEY_B = Module.cwrap("get_TK_KEY_B", 
    "number", []);
const get_TK_KEY_C = Module.cwrap("get_TK_KEY_C", 
    "number", []);
const get_TK_KEY_D = Module.cwrap("get_TK_KEY_D", 
    "number", []);
const get_TK_KEY_E = Module.cwrap("get_TK_KEY_E", 
    "number", []);
const get_TK_KEY_F = Module.cwrap("get_TK_KEY_F", 
    "number", []);
const get_TK_KEY_G = Module.cwrap("get_TK_KEY_G", 
    "number", []);
const get_TK_KEY_H = Module.cwrap("get_TK_KEY_H", 
    "number", []);
const get_TK_KEY_I = Module.cwrap("get_TK_KEY_I", 
    "number", []);
const get_TK_KEY_J = Module.cwrap("get_TK_KEY_J", 
    "number", []);
const get_TK_KEY_K = Module.cwrap("get_TK_KEY_K", 
    "number", []);
const get_TK_KEY_L = Module.cwrap("get_TK_KEY_L", 
    "number", []);
const get_TK_KEY_M = Module.cwrap("get_TK_KEY_M", 
    "number", []);
const get_TK_KEY_N = Module.cwrap("get_TK_KEY_N", 
    "number", []);
const get_TK_KEY_O = Module.cwrap("get_TK_KEY_O", 
    "number", []);
const get_TK_KEY_P = Module.cwrap("get_TK_KEY_P", 
    "number", []);
const get_TK_KEY_Q = Module.cwrap("get_TK_KEY_Q", 
    "number", []);
const get_TK_KEY_R = Module.cwrap("get_TK_KEY_R", 
    "number", []);
const get_TK_KEY_S = Module.cwrap("get_TK_KEY_S", 
    "number", []);
const get_TK_KEY_T = Module.cwrap("get_TK_KEY_T", 
    "number", []);
const get_TK_KEY_U = Module.cwrap("get_TK_KEY_U", 
    "number", []);
const get_TK_KEY_V = Module.cwrap("get_TK_KEY_V", 
    "number", []);
const get_TK_KEY_W = Module.cwrap("get_TK_KEY_W", 
    "number", []);
const get_TK_KEY_X = Module.cwrap("get_TK_KEY_X", 
    "number", []);
const get_TK_KEY_Y = Module.cwrap("get_TK_KEY_Y", 
    "number", []);
const get_TK_KEY_Z = Module.cwrap("get_TK_KEY_Z", 
    "number", []);
const get_TK_KEY_DOT = Module.cwrap("get_TK_KEY_DOT", 
    "number", []);
const get_TK_KEY_DELETE = Module.cwrap("get_TK_KEY_DELETE", 
    "number", []);
const get_TK_KEY_LEFTBRACE = Module.cwrap("get_TK_KEY_LEFTBRACE", 
    "number", []);
const get_TK_KEY_RIGHTBRACE = Module.cwrap("get_TK_KEY_RIGHTBRACE", 
    "number", []);
const locale_info = Module.cwrap("locale_info", 
    "number", []);
const locale_info_tr = Module.cwrap("locale_info_tr", 
    "string", ["number","string"]);
const locale_info_change = Module.cwrap("locale_info_change", 
    "number", ["number","string","string"]);
const locale_info_on = Module.cwrap("locale_info_on", 
    "number", ["number","number","number","number"]);
const locale_info_off = Module.cwrap("locale_info_off", 
    "number", ["number","number"]);
const get_STYLE_ID_BG_COLOR = Module.cwrap("get_STYLE_ID_BG_COLOR", 
    "string", []);
const get_STYLE_ID_FG_COLOR = Module.cwrap("get_STYLE_ID_FG_COLOR", 
    "string", []);
const get_STYLE_ID_MASK_COLOR = Module.cwrap("get_STYLE_ID_MASK_COLOR", 
    "string", []);
const get_STYLE_ID_FONT_NAME = Module.cwrap("get_STYLE_ID_FONT_NAME", 
    "string", []);
const get_STYLE_ID_FONT_SIZE = Module.cwrap("get_STYLE_ID_FONT_SIZE", 
    "string", []);
const get_STYLE_ID_FONT_STYLE = Module.cwrap("get_STYLE_ID_FONT_STYLE", 
    "string", []);
const get_STYLE_ID_TEXT_COLOR = Module.cwrap("get_STYLE_ID_TEXT_COLOR", 
    "string", []);
const get_STYLE_ID_TIPS_TEXT_COLOR = Module.cwrap("get_STYLE_ID_TIPS_TEXT_COLOR", 
    "string", []);
const get_STYLE_ID_TEXT_ALIGN_H = Module.cwrap("get_STYLE_ID_TEXT_ALIGN_H", 
    "string", []);
const get_STYLE_ID_TEXT_ALIGN_V = Module.cwrap("get_STYLE_ID_TEXT_ALIGN_V", 
    "string", []);
const get_STYLE_ID_BORDER_COLOR = Module.cwrap("get_STYLE_ID_BORDER_COLOR", 
    "string", []);
const get_STYLE_ID_BORDER = Module.cwrap("get_STYLE_ID_BORDER", 
    "string", []);
const get_STYLE_ID_BG_IMAGE = Module.cwrap("get_STYLE_ID_BG_IMAGE", 
    "string", []);
const get_STYLE_ID_BG_IMAGE_DRAW_TYPE = Module.cwrap("get_STYLE_ID_BG_IMAGE_DRAW_TYPE", 
    "string", []);
const get_STYLE_ID_ICON = Module.cwrap("get_STYLE_ID_ICON", 
    "string", []);
const get_STYLE_ID_FG_IMAGE = Module.cwrap("get_STYLE_ID_FG_IMAGE", 
    "string", []);
const get_STYLE_ID_FG_IMAGE_DRAW_TYPE = Module.cwrap("get_STYLE_ID_FG_IMAGE_DRAW_TYPE", 
    "string", []);
const get_STYLE_ID_MARGIN = Module.cwrap("get_STYLE_ID_MARGIN", 
    "string", []);
const get_STYLE_ID_ICON_AT = Module.cwrap("get_STYLE_ID_ICON_AT", 
    "string", []);
const get_STYLE_ID_ACTIVE_ICON = Module.cwrap("get_STYLE_ID_ACTIVE_ICON", 
    "string", []);
const get_STYLE_ID_X_OFFSET = Module.cwrap("get_STYLE_ID_X_OFFSET", 
    "string", []);
const get_STYLE_ID_Y_OFFSET = Module.cwrap("get_STYLE_ID_Y_OFFSET", 
    "string", []);
const get_STYLE_ID_SELECTED_BG_COLOR = Module.cwrap("get_STYLE_ID_SELECTED_BG_COLOR", 
    "string", []);
const get_STYLE_ID_SELECTED_FG_COLOR = Module.cwrap("get_STYLE_ID_SELECTED_FG_COLOR", 
    "string", []);
const get_STYLE_ID_SELECTED_TEXT_COLOR = Module.cwrap("get_STYLE_ID_SELECTED_TEXT_COLOR", 
    "string", []);
const get_STYLE_ID_ROUND_RADIUS = Module.cwrap("get_STYLE_ID_ROUND_RADIUS", 
    "string", []);
const style_notify_widget_state_changed = Module.cwrap("style_notify_widget_state_changed", 
    "number", ["number","number"]);
const style_is_valid = Module.cwrap("style_is_valid", 
    "number", ["number"]);
const style_get_int = Module.cwrap("style_get_int", 
    "number", ["number","string","number"]);
const style_get_str = Module.cwrap("style_get_str", 
    "string", ["number","string","string"]);
const theme = Module.cwrap("theme", 
    "number", []);
const timer_add = Module.cwrap("timer_add", 
    "number", ["number","number","number"]);
const timer_remove = Module.cwrap("timer_remove", 
    "number", ["number"]);
const timer_reset = Module.cwrap("timer_reset", 
    "number", ["number"]);
const get_ALIGN_V_NONE = Module.cwrap("get_ALIGN_V_NONE", 
    "number", []);
const get_ALIGN_V_MIDDLE = Module.cwrap("get_ALIGN_V_MIDDLE", 
    "number", []);
const get_ALIGN_V_TOP = Module.cwrap("get_ALIGN_V_TOP", 
    "number", []);
const get_ALIGN_V_BOTTOM = Module.cwrap("get_ALIGN_V_BOTTOM", 
    "number", []);
const get_ALIGN_H_NONE = Module.cwrap("get_ALIGN_H_NONE", 
    "number", []);
const get_ALIGN_H_CENTER = Module.cwrap("get_ALIGN_H_CENTER", 
    "number", []);
const get_ALIGN_H_LEFT = Module.cwrap("get_ALIGN_H_LEFT", 
    "number", []);
const get_ALIGN_H_RIGHT = Module.cwrap("get_ALIGN_H_RIGHT", 
    "number", []);
const vgcanvas_cast = Module.cwrap("vgcanvas_cast", 
    "number", ["number"]);
const vgcanvas_flush = Module.cwrap("vgcanvas_flush", 
    "number", ["number"]);
const vgcanvas_begin_path = Module.cwrap("vgcanvas_begin_path", 
    "number", ["number"]);
const vgcanvas_move_to = Module.cwrap("vgcanvas_move_to", 
    "number", ["number","number","number"]);
const vgcanvas_line_to = Module.cwrap("vgcanvas_line_to", 
    "number", ["number","number","number"]);
const vgcanvas_quad_to = Module.cwrap("vgcanvas_quad_to", 
    "number", ["number","number","number","number","number"]);
const vgcanvas_bezier_to = Module.cwrap("vgcanvas_bezier_to", 
    "number", ["number","number","number","number","number","number","number"]);
const vgcanvas_arc_to = Module.cwrap("vgcanvas_arc_to", 
    "number", ["number","number","number","number","number","number"]);
const vgcanvas_arc = Module.cwrap("vgcanvas_arc", 
    "number", ["number","number","number","number","number","number","number"]);
const vgcanvas_is_point_in_path = Module.cwrap("vgcanvas_is_point_in_path", 
    "number", ["number","number","number"]);
const vgcanvas_rect = Module.cwrap("vgcanvas_rect", 
    "number", ["number","number","number","number","number"]);
const vgcanvas_rounded_rect = Module.cwrap("vgcanvas_rounded_rect", 
    "number", ["number","number","number","number","number","number"]);
const vgcanvas_ellipse = Module.cwrap("vgcanvas_ellipse", 
    "number", ["number","number","number","number","number"]);
const vgcanvas_close_path = Module.cwrap("vgcanvas_close_path", 
    "number", ["number"]);
const vgcanvas_rotate = Module.cwrap("vgcanvas_rotate", 
    "number", ["number","number"]);
const vgcanvas_scale = Module.cwrap("vgcanvas_scale", 
    "number", ["number","number","number"]);
const vgcanvas_translate = Module.cwrap("vgcanvas_translate", 
    "number", ["number","number","number"]);
const vgcanvas_transform = Module.cwrap("vgcanvas_transform", 
    "number", ["number","number","number","number","number","number","number"]);
const vgcanvas_set_transform = Module.cwrap("vgcanvas_set_transform", 
    "number", ["number","number","number","number","number","number","number"]);
const vgcanvas_clip_rect = Module.cwrap("vgcanvas_clip_rect", 
    "number", ["number","number","number","number","number"]);
const vgcanvas_fill = Module.cwrap("vgcanvas_fill", 
    "number", ["number"]);
const vgcanvas_stroke = Module.cwrap("vgcanvas_stroke", 
    "number", ["number"]);
const vgcanvas_paint = Module.cwrap("vgcanvas_paint", 
    "number", ["number","number","number"]);
const vgcanvas_set_font = Module.cwrap("vgcanvas_set_font", 
    "number", ["number","string"]);
const vgcanvas_set_font_size = Module.cwrap("vgcanvas_set_font_size", 
    "number", ["number","number"]);
const vgcanvas_set_text_align = Module.cwrap("vgcanvas_set_text_align", 
    "number", ["number","string"]);
const vgcanvas_set_text_baseline = Module.cwrap("vgcanvas_set_text_baseline", 
    "number", ["number","string"]);
const vgcanvas_fill_text = Module.cwrap("vgcanvas_fill_text", 
    "number", ["number","string","number","number","number"]);
const vgcanvas_measure_text = Module.cwrap("vgcanvas_measure_text", 
    "number", ["number","string"]);
const vgcanvas_draw_image = Module.cwrap("vgcanvas_draw_image", 
    "number", ["number","number","number","number","number","number","number","number","number","number"]);
const vgcanvas_draw_icon = Module.cwrap("vgcanvas_draw_icon", 
    "number", ["number","number","number","number","number","number","number","number","number","number"]);
const vgcanvas_set_antialias = Module.cwrap("vgcanvas_set_antialias", 
    "number", ["number","number"]);
const vgcanvas_set_global_alpha = Module.cwrap("vgcanvas_set_global_alpha", 
    "number", ["number","number"]);
const vgcanvas_set_line_width = Module.cwrap("vgcanvas_set_line_width", 
    "number", ["number","number"]);
const vgcanvas_set_fill_color_str = Module.cwrap("vgcanvas_set_fill_color_str", 
    "number", ["number","string"]);
const vgcanvas_set_stroke_color_str = Module.cwrap("vgcanvas_set_stroke_color_str", 
    "number", ["number","string"]);
const vgcanvas_set_line_cap = Module.cwrap("vgcanvas_set_line_cap", 
    "number", ["number","string"]);
const vgcanvas_set_line_join = Module.cwrap("vgcanvas_set_line_join", 
    "number", ["number","string"]);
const vgcanvas_set_miter_limit = Module.cwrap("vgcanvas_set_miter_limit", 
    "number", ["number","number"]);
const vgcanvas_save = Module.cwrap("vgcanvas_save", 
    "number", ["number"]);
const vgcanvas_restore = Module.cwrap("vgcanvas_restore", 
    "number", ["number"]);
const vgcanvas_t_get_prop_w = Module.cwrap("vgcanvas_t_get_prop_w", 
    "number", ["number"]);
const vgcanvas_t_get_prop_h = Module.cwrap("vgcanvas_t_get_prop_h", 
    "number", ["number"]);
const vgcanvas_t_get_prop_ratio = Module.cwrap("vgcanvas_t_get_prop_ratio", 
    "number", ["number"]);
const vgcanvas_t_get_prop_anti_alias = Module.cwrap("vgcanvas_t_get_prop_anti_alias", 
    "number", ["number"]);
const vgcanvas_t_get_prop_line_width = Module.cwrap("vgcanvas_t_get_prop_line_width", 
    "number", ["number"]);
const vgcanvas_t_get_prop_global_alpha = Module.cwrap("vgcanvas_t_get_prop_global_alpha", 
    "number", ["number"]);
const vgcanvas_t_get_prop_miter_limit = Module.cwrap("vgcanvas_t_get_prop_miter_limit", 
    "number", ["number"]);
const vgcanvas_t_get_prop_line_cap = Module.cwrap("vgcanvas_t_get_prop_line_cap", 
    "string", ["number"]);
const vgcanvas_t_get_prop_line_join = Module.cwrap("vgcanvas_t_get_prop_line_join", 
    "string", ["number"]);
const vgcanvas_t_get_prop_font = Module.cwrap("vgcanvas_t_get_prop_font", 
    "string", ["number"]);
const vgcanvas_t_get_prop_font_size = Module.cwrap("vgcanvas_t_get_prop_font_size", 
    "number", ["number"]);
const vgcanvas_t_get_prop_text_align = Module.cwrap("vgcanvas_t_get_prop_text_align", 
    "string", ["number"]);
const vgcanvas_t_get_prop_text_baseline = Module.cwrap("vgcanvas_t_get_prop_text_baseline", 
    "string", ["number"]);
const get_WIDGET_PROP_X = Module.cwrap("get_WIDGET_PROP_X", 
    "string", []);
const get_WIDGET_PROP_Y = Module.cwrap("get_WIDGET_PROP_Y", 
    "string", []);
const get_WIDGET_PROP_W = Module.cwrap("get_WIDGET_PROP_W", 
    "string", []);
const get_WIDGET_PROP_H = Module.cwrap("get_WIDGET_PROP_H", 
    "string", []);
const get_WIDGET_PROP_HIGHLIGHT = Module.cwrap("get_WIDGET_PROP_HIGHLIGHT", 
    "string", []);
const get_WIDGET_PROP_BAR_SIZE = Module.cwrap("get_WIDGET_PROP_BAR_SIZE", 
    "string", []);
const get_WIDGET_PROP_OPACITY = Module.cwrap("get_WIDGET_PROP_OPACITY", 
    "string", []);
const get_WIDGET_PROP_MIN_W = Module.cwrap("get_WIDGET_PROP_MIN_W", 
    "string", []);
const get_WIDGET_PROP_MAX_W = Module.cwrap("get_WIDGET_PROP_MAX_W", 
    "string", []);
const get_WIDGET_PROP_CHILDREN_LAYOUT = Module.cwrap("get_WIDGET_PROP_CHILDREN_LAYOUT", 
    "string", []);
const get_WIDGET_PROP_LAYOUT = Module.cwrap("get_WIDGET_PROP_LAYOUT", 
    "string", []);
const get_WIDGET_PROP_SELF_LAYOUT = Module.cwrap("get_WIDGET_PROP_SELF_LAYOUT", 
    "string", []);
const get_WIDGET_PROP_LAYOUT_W = Module.cwrap("get_WIDGET_PROP_LAYOUT_W", 
    "string", []);
const get_WIDGET_PROP_LAYOUT_H = Module.cwrap("get_WIDGET_PROP_LAYOUT_H", 
    "string", []);
const get_WIDGET_PROP_VIRTUAL_W = Module.cwrap("get_WIDGET_PROP_VIRTUAL_W", 
    "string", []);
const get_WIDGET_PROP_VIRTUAL_H = Module.cwrap("get_WIDGET_PROP_VIRTUAL_H", 
    "string", []);
const get_WIDGET_PROP_NAME = Module.cwrap("get_WIDGET_PROP_NAME", 
    "string", []);
const get_WIDGET_PROP_CLOSABLE = Module.cwrap("get_WIDGET_PROP_CLOSABLE", 
    "string", []);
const get_WIDGET_PROP_CURSOR = Module.cwrap("get_WIDGET_PROP_CURSOR", 
    "string", []);
const get_WIDGET_PROP_VALUE = Module.cwrap("get_WIDGET_PROP_VALUE", 
    "string", []);
const get_WIDGET_PROP_LENGTH = Module.cwrap("get_WIDGET_PROP_LENGTH", 
    "string", []);
const get_WIDGET_PROP_TEXT = Module.cwrap("get_WIDGET_PROP_TEXT", 
    "string", []);
const get_WIDGET_PROP_TR_TEXT = Module.cwrap("get_WIDGET_PROP_TR_TEXT", 
    "string", []);
const get_WIDGET_PROP_STYLE = Module.cwrap("get_WIDGET_PROP_STYLE", 
    "string", []);
const get_WIDGET_PROP_ENABLE = Module.cwrap("get_WIDGET_PROP_ENABLE", 
    "string", []);
const get_WIDGET_PROP_FLOATING = Module.cwrap("get_WIDGET_PROP_FLOATING", 
    "string", []);
const get_WIDGET_PROP_MARGIN = Module.cwrap("get_WIDGET_PROP_MARGIN", 
    "string", []);
const get_WIDGET_PROP_SPACING = Module.cwrap("get_WIDGET_PROP_SPACING", 
    "string", []);
const get_WIDGET_PROP_LEFT_MARGIN = Module.cwrap("get_WIDGET_PROP_LEFT_MARGIN", 
    "string", []);
const get_WIDGET_PROP_RIGHT_MARGIN = Module.cwrap("get_WIDGET_PROP_RIGHT_MARGIN", 
    "string", []);
const get_WIDGET_PROP_TOP_MARGIN = Module.cwrap("get_WIDGET_PROP_TOP_MARGIN", 
    "string", []);
const get_WIDGET_PROP_BOTTOM_MARGIN = Module.cwrap("get_WIDGET_PROP_BOTTOM_MARGIN", 
    "string", []);
const get_WIDGET_PROP_STEP = Module.cwrap("get_WIDGET_PROP_STEP", 
    "string", []);
const get_WIDGET_PROP_VISIBLE = Module.cwrap("get_WIDGET_PROP_VISIBLE", 
    "string", []);
const get_WIDGET_PROP_SENSITIVE = Module.cwrap("get_WIDGET_PROP_SENSITIVE", 
    "string", []);
const get_WIDGET_PROP_ANIMATION = Module.cwrap("get_WIDGET_PROP_ANIMATION", 
    "string", []);
const get_WIDGET_PROP_ANIM_HINT = Module.cwrap("get_WIDGET_PROP_ANIM_HINT", 
    "string", []);
const get_WIDGET_PROP_FULLSCREEN = Module.cwrap("get_WIDGET_PROP_FULLSCREEN", 
    "string", []);
const get_WIDGET_PROP_OPEN_ANIM_HINT = Module.cwrap("get_WIDGET_PROP_OPEN_ANIM_HINT", 
    "string", []);
const get_WIDGET_PROP_CLOSE_ANIM_HINT = Module.cwrap("get_WIDGET_PROP_CLOSE_ANIM_HINT", 
    "string", []);
const get_WIDGET_PROP_MIN = Module.cwrap("get_WIDGET_PROP_MIN", 
    "string", []);
const get_WIDGET_PROP_TIPS = Module.cwrap("get_WIDGET_PROP_TIPS", 
    "string", []);
const get_WIDGET_PROP_INPUT_TYPE = Module.cwrap("get_WIDGET_PROP_INPUT_TYPE", 
    "string", []);
const get_WIDGET_PROP_READONLY = Module.cwrap("get_WIDGET_PROP_READONLY", 
    "string", []);
const get_WIDGET_PROP_PASSWORD_VISIBLE = Module.cwrap("get_WIDGET_PROP_PASSWORD_VISIBLE", 
    "string", []);
const get_WIDGET_PROP_ACTIVE = Module.cwrap("get_WIDGET_PROP_ACTIVE", 
    "string", []);
const get_WIDGET_PROP_VERTICAL = Module.cwrap("get_WIDGET_PROP_VERTICAL", 
    "string", []);
const get_WIDGET_PROP_SHOW_TEXT = Module.cwrap("get_WIDGET_PROP_SHOW_TEXT", 
    "string", []);
const get_WIDGET_PROP_XOFFSET = Module.cwrap("get_WIDGET_PROP_XOFFSET", 
    "string", []);
const get_WIDGET_PROP_YOFFSET = Module.cwrap("get_WIDGET_PROP_YOFFSET", 
    "string", []);
const get_WIDGET_PROP_ALIGN_V = Module.cwrap("get_WIDGET_PROP_ALIGN_V", 
    "string", []);
const get_WIDGET_PROP_ALIGN_H = Module.cwrap("get_WIDGET_PROP_ALIGN_H", 
    "string", []);
const get_WIDGET_PROP_AUTO_PLAY = Module.cwrap("get_WIDGET_PROP_AUTO_PLAY", 
    "string", []);
const get_WIDGET_PROP_LOOP = Module.cwrap("get_WIDGET_PROP_LOOP", 
    "string", []);
const get_WIDGET_PROP_AUTO_FIX = Module.cwrap("get_WIDGET_PROP_AUTO_FIX", 
    "string", []);
const get_WIDGET_PROP_X_MIN = Module.cwrap("get_WIDGET_PROP_X_MIN", 
    "string", []);
const get_WIDGET_PROP_X_MAX = Module.cwrap("get_WIDGET_PROP_X_MAX", 
    "string", []);
const get_WIDGET_PROP_Y_MIN = Module.cwrap("get_WIDGET_PROP_Y_MIN", 
    "string", []);
const get_WIDGET_PROP_Y_MAX = Module.cwrap("get_WIDGET_PROP_Y_MAX", 
    "string", []);
const get_WIDGET_PROP_MAX = Module.cwrap("get_WIDGET_PROP_MAX", 
    "string", []);
const get_WIDGET_PROP_ROW = Module.cwrap("get_WIDGET_PROP_ROW", 
    "string", []);
const get_WIDGET_PROP_STATE_FOR_STYLE = Module.cwrap("get_WIDGET_PROP_STATE_FOR_STYLE", 
    "string", []);
const get_WIDGET_PROP_THEME = Module.cwrap("get_WIDGET_PROP_THEME", 
    "string", []);
const get_WIDGET_PROP_STAGE = Module.cwrap("get_WIDGET_PROP_STAGE", 
    "string", []);
const get_WIDGET_PROP_IMAGE_MANAGER = Module.cwrap("get_WIDGET_PROP_IMAGE_MANAGER", 
    "string", []);
const get_WIDGET_PROP_ASSETS_MANAGER = Module.cwrap("get_WIDGET_PROP_ASSETS_MANAGER", 
    "string", []);
const get_WIDGET_PROP_LOCALE_INFO = Module.cwrap("get_WIDGET_PROP_LOCALE_INFO", 
    "string", []);
const get_WIDGET_PROP_FONT_MANAGER = Module.cwrap("get_WIDGET_PROP_FONT_MANAGER", 
    "string", []);
const get_WIDGET_PROP_THEME_OBJ = Module.cwrap("get_WIDGET_PROP_THEME_OBJ", 
    "string", []);
const get_WIDGET_PROP_DEFAULT_THEME_OBJ = Module.cwrap("get_WIDGET_PROP_DEFAULT_THEME_OBJ", 
    "string", []);
const get_WIDGET_PROP_ITEM_WIDTH = Module.cwrap("get_WIDGET_PROP_ITEM_WIDTH", 
    "string", []);
const get_WIDGET_PROP_ITEM_HEIGHT = Module.cwrap("get_WIDGET_PROP_ITEM_HEIGHT", 
    "string", []);
const get_WIDGET_PROP_DEFAULT_ITEM_HEIGHT = Module.cwrap("get_WIDGET_PROP_DEFAULT_ITEM_HEIGHT", 
    "string", []);
const get_WIDGET_PROP_XSLIDABLE = Module.cwrap("get_WIDGET_PROP_XSLIDABLE", 
    "string", []);
const get_WIDGET_PROP_YSLIDABLE = Module.cwrap("get_WIDGET_PROP_YSLIDABLE", 
    "string", []);
const get_WIDGET_PROP_REPEAT = Module.cwrap("get_WIDGET_PROP_REPEAT", 
    "string", []);
const get_WIDGET_PROP_ENABLE_LONG_PRESS = Module.cwrap("get_WIDGET_PROP_ENABLE_LONG_PRESS", 
    "string", []);
const get_WIDGET_PROP_ANIMATABLE = Module.cwrap("get_WIDGET_PROP_ANIMATABLE", 
    "string", []);
const get_WIDGET_PROP_AUTO_HIDE_SCROLL_BAR = Module.cwrap("get_WIDGET_PROP_AUTO_HIDE_SCROLL_BAR", 
    "string", []);
const get_WIDGET_PROP_IMAGE = Module.cwrap("get_WIDGET_PROP_IMAGE", 
    "string", []);
const get_WIDGET_PROP_FORMAT = Module.cwrap("get_WIDGET_PROP_FORMAT", 
    "string", []);
const get_WIDGET_PROP_DRAW_TYPE = Module.cwrap("get_WIDGET_PROP_DRAW_TYPE", 
    "string", []);
const get_WIDGET_PROP_SELECTABLE = Module.cwrap("get_WIDGET_PROP_SELECTABLE", 
    "string", []);
const get_WIDGET_PROP_CLICKABLE = Module.cwrap("get_WIDGET_PROP_CLICKABLE", 
    "string", []);
const get_WIDGET_PROP_SCALE_X = Module.cwrap("get_WIDGET_PROP_SCALE_X", 
    "string", []);
const get_WIDGET_PROP_SCALE_Y = Module.cwrap("get_WIDGET_PROP_SCALE_Y", 
    "string", []);
const get_WIDGET_PROP_ANCHOR_X = Module.cwrap("get_WIDGET_PROP_ANCHOR_X", 
    "string", []);
const get_WIDGET_PROP_ANCHOR_Y = Module.cwrap("get_WIDGET_PROP_ANCHOR_Y", 
    "string", []);
const get_WIDGET_PROP_ROTATION = Module.cwrap("get_WIDGET_PROP_ROTATION", 
    "string", []);
const get_WIDGET_PROP_COMPACT = Module.cwrap("get_WIDGET_PROP_COMPACT", 
    "string", []);
const get_WIDGET_PROP_ICON = Module.cwrap("get_WIDGET_PROP_ICON", 
    "string", []);
const get_WIDGET_PROP_OPTIONS = Module.cwrap("get_WIDGET_PROP_OPTIONS", 
    "string", []);
const get_WIDGET_PROP_SELECTED = Module.cwrap("get_WIDGET_PROP_SELECTED", 
    "string", []);
const get_WIDGET_PROP_CHECKED = Module.cwrap("get_WIDGET_PROP_CHECKED", 
    "string", []);
const get_WIDGET_PROP_ACTIVE_ICON = Module.cwrap("get_WIDGET_PROP_ACTIVE_ICON", 
    "string", []);
const get_WIDGET_PROP_OPEN_WINDOW = Module.cwrap("get_WIDGET_PROP_OPEN_WINDOW", 
    "string", []);
const get_WIDGET_PROP_SELECTED_INDEX = Module.cwrap("get_WIDGET_PROP_SELECTED_INDEX", 
    "string", []);
const get_WIDGET_PROP_CLOSE_WHEN_CLICK = Module.cwrap("get_WIDGET_PROP_CLOSE_WHEN_CLICK", 
    "string", []);
const get_WIDGET_PROP_CLOSE_WHEN_CLICK_OUTSIDE = Module.cwrap("get_WIDGET_PROP_CLOSE_WHEN_CLICK_OUTSIDE", 
    "string", []);
const get_WIDGET_PROP_LINE_GAP = Module.cwrap("get_WIDGET_PROP_LINE_GAP", 
    "string", []);
const get_WIDGET_PROP_BG_COLOR = Module.cwrap("get_WIDGET_PROP_BG_COLOR", 
    "string", []);
const get_WIDGET_PROP_BORDER_COLOR = Module.cwrap("get_WIDGET_PROP_BORDER_COLOR", 
    "string", []);
const get_WIDGET_PROP_DELAY = Module.cwrap("get_WIDGET_PROP_DELAY", 
    "string", []);
const get_WIDGET_PROP_IS_KEYBOARD = Module.cwrap("get_WIDGET_PROP_IS_KEYBOARD", 
    "string", []);
const get_WIDGET_PROP_FOCUS = Module.cwrap("get_WIDGET_PROP_FOCUS", 
    "string", []);
const get_WIDGET_PROP_FOCUSABLE = Module.cwrap("get_WIDGET_PROP_FOCUSABLE", 
    "string", []);
const get_WIDGET_TYPE_NONE = Module.cwrap("get_WIDGET_TYPE_NONE", 
    "string", []);
const get_WIDGET_TYPE_WINDOW_MANAGER = Module.cwrap("get_WIDGET_TYPE_WINDOW_MANAGER", 
    "string", []);
const get_WIDGET_TYPE_NORMAL_WINDOW = Module.cwrap("get_WIDGET_TYPE_NORMAL_WINDOW", 
    "string", []);
const get_WIDGET_TYPE_TOOL_BAR = Module.cwrap("get_WIDGET_TYPE_TOOL_BAR", 
    "string", []);
const get_WIDGET_TYPE_DIALOG = Module.cwrap("get_WIDGET_TYPE_DIALOG", 
    "string", []);
const get_WIDGET_TYPE_POPUP = Module.cwrap("get_WIDGET_TYPE_POPUP", 
    "string", []);
const get_WIDGET_TYPE_SYSTEM_BAR = Module.cwrap("get_WIDGET_TYPE_SYSTEM_BAR", 
    "string", []);
const get_WIDGET_TYPE_SPRITE = Module.cwrap("get_WIDGET_TYPE_SPRITE", 
    "string", []);
const get_WIDGET_TYPE_KEYBOARD = Module.cwrap("get_WIDGET_TYPE_KEYBOARD", 
    "string", []);
const get_WIDGET_TYPE_DND = Module.cwrap("get_WIDGET_TYPE_DND", 
    "string", []);
const get_WIDGET_TYPE_LABEL = Module.cwrap("get_WIDGET_TYPE_LABEL", 
    "string", []);
const get_WIDGET_TYPE_BUTTON = Module.cwrap("get_WIDGET_TYPE_BUTTON", 
    "string", []);
const get_WIDGET_TYPE_IMAGE = Module.cwrap("get_WIDGET_TYPE_IMAGE", 
    "string", []);
const get_WIDGET_TYPE_EDIT = Module.cwrap("get_WIDGET_TYPE_EDIT", 
    "string", []);
const get_WIDGET_TYPE_PROGRESS_BAR = Module.cwrap("get_WIDGET_TYPE_PROGRESS_BAR", 
    "string", []);
const get_WIDGET_TYPE_GROUP_BOX = Module.cwrap("get_WIDGET_TYPE_GROUP_BOX", 
    "string", []);
const get_WIDGET_TYPE_CHECK_BUTTON = Module.cwrap("get_WIDGET_TYPE_CHECK_BUTTON", 
    "string", []);
const get_WIDGET_TYPE_RADIO_BUTTON = Module.cwrap("get_WIDGET_TYPE_RADIO_BUTTON", 
    "string", []);
const get_WIDGET_TYPE_DIALOG_TITLE = Module.cwrap("get_WIDGET_TYPE_DIALOG_TITLE", 
    "string", []);
const get_WIDGET_TYPE_DIALOG_CLIENT = Module.cwrap("get_WIDGET_TYPE_DIALOG_CLIENT", 
    "string", []);
const get_WIDGET_TYPE_SLIDER = Module.cwrap("get_WIDGET_TYPE_SLIDER", 
    "string", []);
const get_WIDGET_TYPE_VIEW = Module.cwrap("get_WIDGET_TYPE_VIEW", 
    "string", []);
const get_WIDGET_TYPE_COMBO_BOX = Module.cwrap("get_WIDGET_TYPE_COMBO_BOX", 
    "string", []);
const get_WIDGET_TYPE_COMBO_BOX_ITEM = Module.cwrap("get_WIDGET_TYPE_COMBO_BOX_ITEM", 
    "string", []);
const get_WIDGET_TYPE_SLIDE_VIEW = Module.cwrap("get_WIDGET_TYPE_SLIDE_VIEW", 
    "string", []);
const get_WIDGET_TYPE_PAGES = Module.cwrap("get_WIDGET_TYPE_PAGES", 
    "string", []);
const get_WIDGET_TYPE_TAB_BUTTON = Module.cwrap("get_WIDGET_TYPE_TAB_BUTTON", 
    "string", []);
const get_WIDGET_TYPE_TAB_CONTROL = Module.cwrap("get_WIDGET_TYPE_TAB_CONTROL", 
    "string", []);
const get_WIDGET_TYPE_TAB_BUTTON_GROUP = Module.cwrap("get_WIDGET_TYPE_TAB_BUTTON_GROUP", 
    "string", []);
const get_WIDGET_TYPE_BUTTON_GROUP = Module.cwrap("get_WIDGET_TYPE_BUTTON_GROUP", 
    "string", []);
const get_WIDGET_TYPE_CANDIDATES = Module.cwrap("get_WIDGET_TYPE_CANDIDATES", 
    "string", []);
const get_WIDGET_TYPE_SPIN_BOX = Module.cwrap("get_WIDGET_TYPE_SPIN_BOX", 
    "string", []);
const get_WIDGET_TYPE_DRAGGER = Module.cwrap("get_WIDGET_TYPE_DRAGGER", 
    "string", []);
const get_WIDGET_TYPE_SCROLL_BAR = Module.cwrap("get_WIDGET_TYPE_SCROLL_BAR", 
    "string", []);
const get_WIDGET_TYPE_SCROLL_BAR_DESKTOP = Module.cwrap("get_WIDGET_TYPE_SCROLL_BAR_DESKTOP", 
    "string", []);
const get_WIDGET_TYPE_SCROLL_BAR_MOBILE = Module.cwrap("get_WIDGET_TYPE_SCROLL_BAR_MOBILE", 
    "string", []);
const get_WIDGET_TYPE_SCROLL_VIEW = Module.cwrap("get_WIDGET_TYPE_SCROLL_VIEW", 
    "string", []);
const get_WIDGET_TYPE_LIST_VIEW = Module.cwrap("get_WIDGET_TYPE_LIST_VIEW", 
    "string", []);
const get_WIDGET_TYPE_LIST_VIEW_H = Module.cwrap("get_WIDGET_TYPE_LIST_VIEW_H", 
    "string", []);
const get_WIDGET_TYPE_LIST_ITEM = Module.cwrap("get_WIDGET_TYPE_LIST_ITEM", 
    "string", []);
const get_WIDGET_TYPE_COLOR_PICKER = Module.cwrap("get_WIDGET_TYPE_COLOR_PICKER", 
    "string", []);
const get_WIDGET_TYPE_COLOR_COMPONENT = Module.cwrap("get_WIDGET_TYPE_COLOR_COMPONENT", 
    "string", []);
const get_WIDGET_TYPE_COLOR_TILE = Module.cwrap("get_WIDGET_TYPE_COLOR_TILE", 
    "string", []);
const get_WIDGET_TYPE_RICH_TEXT = Module.cwrap("get_WIDGET_TYPE_RICH_TEXT", 
    "string", []);
const get_WIDGET_TYPE_APP_BAR = Module.cwrap("get_WIDGET_TYPE_APP_BAR", 
    "string", []);
const get_WIDGET_TYPE_GRID = Module.cwrap("get_WIDGET_TYPE_GRID", 
    "string", []);
const get_WIDGET_TYPE_GRID_ITEM = Module.cwrap("get_WIDGET_TYPE_GRID_ITEM", 
    "string", []);
const get_WIDGET_TYPE_ROW = Module.cwrap("get_WIDGET_TYPE_ROW", 
    "string", []);
const get_WIDGET_TYPE_COLUMN = Module.cwrap("get_WIDGET_TYPE_COLUMN", 
    "string", []);
const get_WIDGET_TYPE_CALIBRATION_WIN = Module.cwrap("get_WIDGET_TYPE_CALIBRATION_WIN", 
    "string", []);
const get_WINDOW_STAGE_NONE = Module.cwrap("get_WINDOW_STAGE_NONE", 
    "number", []);
const get_WINDOW_STAGE_CREATED = Module.cwrap("get_WINDOW_STAGE_CREATED", 
    "number", []);
const get_WINDOW_STAGE_OPENED = Module.cwrap("get_WINDOW_STAGE_OPENED", 
    "number", []);
const get_WINDOW_STAGE_CLOSED = Module.cwrap("get_WINDOW_STAGE_CLOSED", 
    "number", []);
const get_WINDOW_CLOSABLE_YES = Module.cwrap("get_WINDOW_CLOSABLE_YES", 
    "number", []);
const get_WINDOW_CLOSABLE_NO = Module.cwrap("get_WINDOW_CLOSABLE_NO", 
    "number", []);
const get_WINDOW_CLOSABLE_CONFIRM = Module.cwrap("get_WINDOW_CLOSABLE_CONFIRM", 
    "number", []);
const get_WIDGET_STATE_NONE = Module.cwrap("get_WIDGET_STATE_NONE", 
    "string", []);
const get_WIDGET_STATE_NORMAL = Module.cwrap("get_WIDGET_STATE_NORMAL", 
    "string", []);
const get_WIDGET_STATE_PRESSED = Module.cwrap("get_WIDGET_STATE_PRESSED", 
    "string", []);
const get_WIDGET_STATE_OVER = Module.cwrap("get_WIDGET_STATE_OVER", 
    "string", []);
const get_WIDGET_STATE_DISABLE = Module.cwrap("get_WIDGET_STATE_DISABLE", 
    "string", []);
const get_WIDGET_STATE_FOCUSED = Module.cwrap("get_WIDGET_STATE_FOCUSED", 
    "string", []);
const get_WIDGET_STATE_CHECKED = Module.cwrap("get_WIDGET_STATE_CHECKED", 
    "string", []);
const get_WIDGET_STATE_UNCHECKED = Module.cwrap("get_WIDGET_STATE_UNCHECKED", 
    "string", []);
const get_WIDGET_STATE_EMPTY = Module.cwrap("get_WIDGET_STATE_EMPTY", 
    "string", []);
const get_WIDGET_STATE_ERROR = Module.cwrap("get_WIDGET_STATE_ERROR", 
    "string", []);
const get_WIDGET_STATE_SELECTED = Module.cwrap("get_WIDGET_STATE_SELECTED", 
    "string", []);
const get_WIDGET_STATE_NORMAL_OF_CHECKED = Module.cwrap("get_WIDGET_STATE_NORMAL_OF_CHECKED", 
    "string", []);
const get_WIDGET_STATE_PRESSED_OF_CHECKED = Module.cwrap("get_WIDGET_STATE_PRESSED_OF_CHECKED", 
    "string", []);
const get_WIDGET_STATE_OVER_OF_CHECKED = Module.cwrap("get_WIDGET_STATE_OVER_OF_CHECKED", 
    "string", []);
const get_WIDGET_STATE_NORMAL_OF_ACTIVE = Module.cwrap("get_WIDGET_STATE_NORMAL_OF_ACTIVE", 
    "string", []);
const get_WIDGET_STATE_PRESSED_OF_ACTIVE = Module.cwrap("get_WIDGET_STATE_PRESSED_OF_ACTIVE", 
    "string", []);
const get_WIDGET_STATE_OVER_OF_ACTIVE = Module.cwrap("get_WIDGET_STATE_OVER_OF_ACTIVE", 
    "string", []);
const widget_count_children = Module.cwrap("widget_count_children", 
    "number", ["number"]);
const widget_get_child = Module.cwrap("widget_get_child", 
    "number", ["number","number"]);
const widget_index_of = Module.cwrap("widget_index_of", 
    "number", ["number"]);
const widget_move = Module.cwrap("widget_move", 
    "number", ["number","number","number"]);
const widget_resize = Module.cwrap("widget_resize", 
    "number", ["number","number","number"]);
const widget_move_resize = Module.cwrap("widget_move_resize", 
    "number", ["number","number","number","number","number"]);
const widget_set_value = Module.cwrap("widget_set_value", 
    "number", ["number","number"]);
const widget_animate_value_to = Module.cwrap("widget_animate_value_to", 
    "number", ["number","number","number"]);
const widget_add_value = Module.cwrap("widget_add_value", 
    "number", ["number","number"]);
const widget_use_style = Module.cwrap("widget_use_style", 
    "number", ["number","string"]);
const widget_set_text_utf8 = Module.cwrap("widget_set_text_utf8", 
    "number", ["number","string"]);
const widget_set_tr_text = Module.cwrap("widget_set_tr_text", 
    "number", ["number","string"]);
const widget_get_value = Module.cwrap("widget_get_value", 
    "number", ["number"]);
const widget_get_text = Module.cwrap("widget_get_text", 
    "number", ["number"]);
const widget_set_name = Module.cwrap("widget_set_name", 
    "number", ["number","string"]);
const widget_set_cursor = Module.cwrap("widget_set_cursor", 
    "number", ["number","string"]);
const widget_set_animation = Module.cwrap("widget_set_animation", 
    "number", ["number","string"]);
const widget_create_animator = Module.cwrap("widget_create_animator", 
    "number", ["number","string"]);
const widget_start_animator = Module.cwrap("widget_start_animator", 
    "number", ["number","string"]);
const widget_set_animator_time_scale = Module.cwrap("widget_set_animator_time_scale", 
    "number", ["number","string","number"]);
const widget_pause_animator = Module.cwrap("widget_pause_animator", 
    "number", ["number","string"]);
const widget_stop_animator = Module.cwrap("widget_stop_animator", 
    "number", ["number","string"]);
const widget_destroy_animator = Module.cwrap("widget_destroy_animator", 
    "number", ["number","string"]);
const widget_set_enable = Module.cwrap("widget_set_enable", 
    "number", ["number","number"]);
const widget_set_floating = Module.cwrap("widget_set_floating", 
    "number", ["number","number"]);
const widget_set_focused = Module.cwrap("widget_set_focused", 
    "number", ["number","number"]);
const widget_child = Module.cwrap("widget_child", 
    "number", ["number","string"]);
const widget_lookup = Module.cwrap("widget_lookup", 
    "number", ["number","string","number"]);
const widget_lookup_by_type = Module.cwrap("widget_lookup_by_type", 
    "number", ["number","string","number"]);
const widget_set_visible = Module.cwrap("widget_set_visible", 
    "number", ["number","number","number"]);
const widget_set_sensitive = Module.cwrap("widget_set_sensitive", 
    "number", ["number","number"]);
const widget_on = Module.cwrap("widget_on", 
    "number", ["number","number","number","number"]);
const widget_off = Module.cwrap("widget_off", 
    "number", ["number","number"]);
const widget_invalidate_force = Module.cwrap("widget_invalidate_force", 
    "number", ["number","number"]);
const widget_set_prop_str = Module.cwrap("widget_set_prop_str", 
    "number", ["number","string","string"]);
const widget_get_prop_str = Module.cwrap("widget_get_prop_str", 
    "string", ["number","string","string"]);
const widget_set_prop_int = Module.cwrap("widget_set_prop_int", 
    "number", ["number","string","number"]);
const widget_get_prop_int = Module.cwrap("widget_get_prop_int", 
    "number", ["number","string","number"]);
const widget_set_prop_bool = Module.cwrap("widget_set_prop_bool", 
    "number", ["number","string","number"]);
const widget_get_prop_bool = Module.cwrap("widget_get_prop_bool", 
    "number", ["number","string","number"]);
const widget_is_window_opened = Module.cwrap("widget_is_window_opened", 
    "number", ["number"]);
const widget_is_window = Module.cwrap("widget_is_window", 
    "number", ["number"]);
const widget_is_designing_window = Module.cwrap("widget_is_designing_window", 
    "number", ["number"]);
const widget_is_window_manager = Module.cwrap("widget_is_window_manager", 
    "number", ["number"]);
const widget_foreach = Module.cwrap("widget_foreach", 
    "number", ["number","number","number"]);
const widget_get_window = Module.cwrap("widget_get_window", 
    "number", ["number"]);
const widget_get_window_manager = Module.cwrap("widget_get_window_manager", 
    "number", ["number"]);
const widget_get_type = Module.cwrap("widget_get_type", 
    "string", ["number"]);
const widget_clone = Module.cwrap("widget_clone", 
    "number", ["number","number"]);
const widget_equal = Module.cwrap("widget_equal", 
    "number", ["number","number"]);
const widget_cast = Module.cwrap("widget_cast", 
    "number", ["number"]);
const widget_destroy = Module.cwrap("widget_destroy", 
    "number", ["number"]);
const widget_layout = Module.cwrap("widget_layout", 
    "number", ["number"]);
const widget_set_self_layout = Module.cwrap("widget_set_self_layout", 
    "number", ["number","string"]);
const widget_set_children_layout = Module.cwrap("widget_set_children_layout", 
    "number", ["number","string"]);
const widget_set_self_layout_params = Module.cwrap("widget_set_self_layout_params", 
    "number", ["number","string","string","string","string"]);
const widget_t_get_prop_x = Module.cwrap("widget_t_get_prop_x", 
    "number", ["number"]);
const widget_t_get_prop_y = Module.cwrap("widget_t_get_prop_y", 
    "number", ["number"]);
const widget_t_get_prop_w = Module.cwrap("widget_t_get_prop_w", 
    "number", ["number"]);
const widget_t_get_prop_h = Module.cwrap("widget_t_get_prop_h", 
    "number", ["number"]);
const widget_t_get_prop_name = Module.cwrap("widget_t_get_prop_name", 
    "string", ["number"]);
const widget_t_get_prop_tr_text = Module.cwrap("widget_t_get_prop_tr_text", 
    "string", ["number"]);
const widget_t_get_prop_style = Module.cwrap("widget_t_get_prop_style", 
    "string", ["number"]);
const widget_t_get_prop_animation = Module.cwrap("widget_t_get_prop_animation", 
    "string", ["number"]);
const widget_t_get_prop_enable = Module.cwrap("widget_t_get_prop_enable", 
    "number", ["number"]);
const widget_t_get_prop_visible = Module.cwrap("widget_t_get_prop_visible", 
    "number", ["number"]);
const widget_t_set_prop_visible = Module.cwrap("widget_t_set_prop_visible", 
    "number", ["number", "number"]);
const widget_t_get_prop_sensitive = Module.cwrap("widget_t_get_prop_sensitive", 
    "number", ["number"]);
const widget_t_set_prop_sensitive = Module.cwrap("widget_t_set_prop_sensitive", 
    "number", ["number", "number"]);
const widget_t_get_prop_floating = Module.cwrap("widget_t_get_prop_floating", 
    "number", ["number"]);
const get_ASSET_TYPE_NONE = Module.cwrap("get_ASSET_TYPE_NONE", 
    "number", []);
const get_ASSET_TYPE_FONT = Module.cwrap("get_ASSET_TYPE_FONT", 
    "number", []);
const get_ASSET_TYPE_IMAGE = Module.cwrap("get_ASSET_TYPE_IMAGE", 
    "number", []);
const get_ASSET_TYPE_STYLE = Module.cwrap("get_ASSET_TYPE_STYLE", 
    "number", []);
const get_ASSET_TYPE_UI = Module.cwrap("get_ASSET_TYPE_UI", 
    "number", []);
const get_ASSET_TYPE_XML = Module.cwrap("get_ASSET_TYPE_XML", 
    "number", []);
const get_ASSET_TYPE_STRINGS = Module.cwrap("get_ASSET_TYPE_STRINGS", 
    "number", []);
const get_ASSET_TYPE_SCRIPT = Module.cwrap("get_ASSET_TYPE_SCRIPT", 
    "number", []);
const get_ASSET_TYPE_DATA = Module.cwrap("get_ASSET_TYPE_DATA", 
    "number", []);
const color_create = Module.cwrap("color_create", 
    "number", ["number","number","number","number"]);
const color_from_str = Module.cwrap("color_from_str", 
    "number", ["number","string"]);
const color_r = Module.cwrap("color_r", 
    "number", ["number"]);
const color_g = Module.cwrap("color_g", 
    "number", ["number"]);
const color_b = Module.cwrap("color_b", 
    "number", ["number"]);
const color_a = Module.cwrap("color_a", 
    "number", ["number"]);
const color_cast = Module.cwrap("color_cast", 
    "number", ["number"]);
const color_destroy = Module.cwrap("color_destroy", 
    "number", ["number"]);
const color_t_get_prop_color = Module.cwrap("color_t_get_prop_color", 
    "number", ["number"]);
const color_t_set_prop_color = Module.cwrap("color_t_set_prop_color", 
    "number", ["number", "number"]);
const date_time_create = Module.cwrap("date_time_create", 
    "number", []);
const date_time_destroy = Module.cwrap("date_time_destroy", 
    "number", ["number"]);
const date_time_t_get_prop_second = Module.cwrap("date_time_t_get_prop_second", 
    "number", ["number"]);
const date_time_t_get_prop_minute = Module.cwrap("date_time_t_get_prop_minute", 
    "number", ["number"]);
const date_time_t_get_prop_hour = Module.cwrap("date_time_t_get_prop_hour", 
    "number", ["number"]);
const date_time_t_get_prop_day = Module.cwrap("date_time_t_get_prop_day", 
    "number", ["number"]);
const date_time_t_get_prop_wday = Module.cwrap("date_time_t_get_prop_wday", 
    "number", ["number"]);
const date_time_t_get_prop_month = Module.cwrap("date_time_t_get_prop_month", 
    "number", ["number"]);
const date_time_t_get_prop_year = Module.cwrap("date_time_t_get_prop_year", 
    "number", ["number"]);
const emitter_create = Module.cwrap("emitter_create", 
    "number", []);
const emitter_dispatch = Module.cwrap("emitter_dispatch", 
    "number", ["number","number"]);
const emitter_dispatch_simple_event = Module.cwrap("emitter_dispatch_simple_event", 
    "number", ["number","number"]);
const emitter_on = Module.cwrap("emitter_on", 
    "number", ["number","number","number","number"]);
const emitter_off = Module.cwrap("emitter_off", 
    "number", ["number","number"]);
const emitter_enable = Module.cwrap("emitter_enable", 
    "number", ["number"]);
const emitter_disable = Module.cwrap("emitter_disable", 
    "number", ["number"]);
const emitter_size = Module.cwrap("emitter_size", 
    "number", ["number"]);
const emitter_destroy = Module.cwrap("emitter_destroy", 
    "number", ["number"]);
const emitter_cast = Module.cwrap("emitter_cast", 
    "number", ["number"]);
const get_EVT_NONE = Module.cwrap("get_EVT_NONE", 
    "number", []);
const get_EVT_PROP_WILL_CHANGE = Module.cwrap("get_EVT_PROP_WILL_CHANGE", 
    "number", []);
const get_EVT_PROP_CHANGED = Module.cwrap("get_EVT_PROP_CHANGED", 
    "number", []);
const get_EVT_ITEMS_WILL_CHANGE = Module.cwrap("get_EVT_ITEMS_WILL_CHANGE", 
    "number", []);
const get_EVT_ITEMS_CHANGED = Module.cwrap("get_EVT_ITEMS_CHANGED", 
    "number", []);
const get_EVT_PROPS_CHANGED = Module.cwrap("get_EVT_PROPS_CHANGED", 
    "number", []);
const get_EVT_DESTROY = Module.cwrap("get_EVT_DESTROY", 
    "number", []);
const event_cast = Module.cwrap("event_cast", 
    "number", ["number"]);
const event_create = Module.cwrap("event_create", 
    "number", ["number","number"]);
const event_destroy = Module.cwrap("event_destroy", 
    "number", ["number"]);
const event_t_get_prop_type = Module.cwrap("event_t_get_prop_type", 
    "number", ["number"]);
const event_t_get_prop_time = Module.cwrap("event_t_get_prop_time", 
    "number", ["number"]);
const event_t_get_prop_target = Module.cwrap("event_t_get_prop_target", 
    "number", ["number"]);
const named_value_create = Module.cwrap("named_value_create", 
    "number", []);
const named_value_cast = Module.cwrap("named_value_cast", 
    "number", ["number"]);
const named_value_set_name = Module.cwrap("named_value_set_name", 
    "number", ["number","string"]);
const named_value_set_value = Module.cwrap("named_value_set_value", 
    "number", ["number","number"]);
const named_value_get_value = Module.cwrap("named_value_get_value", 
    "number", ["number"]);
const named_value_destroy = Module.cwrap("named_value_destroy", 
    "number", ["number"]);
const named_value_t_get_prop_name = Module.cwrap("named_value_t_get_prop_name", 
    "string", ["number"]);
const rect_create = Module.cwrap("rect_create", 
    "number", ["number","number","number","number"]);
const rect_set = Module.cwrap("rect_set", 
    "number", ["number","number","number","number","number"]);
const rect_cast = Module.cwrap("rect_cast", 
    "number", ["number"]);
const rect_destroy = Module.cwrap("rect_destroy", 
    "number", ["number"]);
const rect_t_get_prop_x = Module.cwrap("rect_t_get_prop_x", 
    "number", ["number"]);
const rect_t_get_prop_y = Module.cwrap("rect_t_get_prop_y", 
    "number", ["number"]);
const rect_t_get_prop_w = Module.cwrap("rect_t_get_prop_w", 
    "number", ["number"]);
const rect_t_get_prop_h = Module.cwrap("rect_t_get_prop_h", 
    "number", ["number"]);
const time_now_s = Module.cwrap("time_now_s", 
    "number", []);
const time_now_ms = Module.cwrap("time_now_ms", 
    "number", []);
const get_RET_OK = Module.cwrap("get_RET_OK", 
    "number", []);
const get_RET_OOM = Module.cwrap("get_RET_OOM", 
    "number", []);
const get_RET_FAIL = Module.cwrap("get_RET_FAIL", 
    "number", []);
const get_RET_NOT_IMPL = Module.cwrap("get_RET_NOT_IMPL", 
    "number", []);
const get_RET_QUIT = Module.cwrap("get_RET_QUIT", 
    "number", []);
const get_RET_FOUND = Module.cwrap("get_RET_FOUND", 
    "number", []);
const get_RET_BUSY = Module.cwrap("get_RET_BUSY", 
    "number", []);
const get_RET_REMOVE = Module.cwrap("get_RET_REMOVE", 
    "number", []);
const get_RET_REPEAT = Module.cwrap("get_RET_REPEAT", 
    "number", []);
const get_RET_NOT_FOUND = Module.cwrap("get_RET_NOT_FOUND", 
    "number", []);
const get_RET_DONE = Module.cwrap("get_RET_DONE", 
    "number", []);
const get_RET_STOP = Module.cwrap("get_RET_STOP", 
    "number", []);
const get_RET_CONTINUE = Module.cwrap("get_RET_CONTINUE", 
    "number", []);
const get_RET_OBJECT_CHANGED = Module.cwrap("get_RET_OBJECT_CHANGED", 
    "number", []);
const get_RET_ITEMS_CHANGED = Module.cwrap("get_RET_ITEMS_CHANGED", 
    "number", []);
const get_RET_BAD_PARAMS = Module.cwrap("get_RET_BAD_PARAMS", 
    "number", []);
const get_VALUE_TYPE_INVALID = Module.cwrap("get_VALUE_TYPE_INVALID", 
    "number", []);
const get_VALUE_TYPE_BOOL = Module.cwrap("get_VALUE_TYPE_BOOL", 
    "number", []);
const get_VALUE_TYPE_INT8 = Module.cwrap("get_VALUE_TYPE_INT8", 
    "number", []);
const get_VALUE_TYPE_UINT8 = Module.cwrap("get_VALUE_TYPE_UINT8", 
    "number", []);
const get_VALUE_TYPE_INT16 = Module.cwrap("get_VALUE_TYPE_INT16", 
    "number", []);
const get_VALUE_TYPE_UINT16 = Module.cwrap("get_VALUE_TYPE_UINT16", 
    "number", []);
const get_VALUE_TYPE_INT32 = Module.cwrap("get_VALUE_TYPE_INT32", 
    "number", []);
const get_VALUE_TYPE_UINT32 = Module.cwrap("get_VALUE_TYPE_UINT32", 
    "number", []);
const get_VALUE_TYPE_INT64 = Module.cwrap("get_VALUE_TYPE_INT64", 
    "number", []);
const get_VALUE_TYPE_UINT64 = Module.cwrap("get_VALUE_TYPE_UINT64", 
    "number", []);
const get_VALUE_TYPE_POINTER = Module.cwrap("get_VALUE_TYPE_POINTER", 
    "number", []);
const get_VALUE_TYPE_FLOAT = Module.cwrap("get_VALUE_TYPE_FLOAT", 
    "number", []);
const get_VALUE_TYPE_FLOAT32 = Module.cwrap("get_VALUE_TYPE_FLOAT32", 
    "number", []);
const get_VALUE_TYPE_DOUBLE = Module.cwrap("get_VALUE_TYPE_DOUBLE", 
    "number", []);
const get_VALUE_TYPE_STRING = Module.cwrap("get_VALUE_TYPE_STRING", 
    "number", []);
const get_VALUE_TYPE_WSTRING = Module.cwrap("get_VALUE_TYPE_WSTRING", 
    "number", []);
const get_VALUE_TYPE_OBJECT = Module.cwrap("get_VALUE_TYPE_OBJECT", 
    "number", []);
const value_set_bool = Module.cwrap("value_set_bool", 
    "number", ["number","number"]);
const value_bool = Module.cwrap("value_bool", 
    "number", ["number"]);
const value_set_int8 = Module.cwrap("value_set_int8", 
    "number", ["number","number"]);
const value_int8 = Module.cwrap("value_int8", 
    "number", ["number"]);
const value_set_uint8 = Module.cwrap("value_set_uint8", 
    "number", ["number","number"]);
const value_uint8 = Module.cwrap("value_uint8", 
    "number", ["number"]);
const value_set_int16 = Module.cwrap("value_set_int16", 
    "number", ["number","number"]);
const value_int16 = Module.cwrap("value_int16", 
    "number", ["number"]);
const value_set_uint16 = Module.cwrap("value_set_uint16", 
    "number", ["number","number"]);
const value_uint16 = Module.cwrap("value_uint16", 
    "number", ["number"]);
const value_set_int32 = Module.cwrap("value_set_int32", 
    "number", ["number","number"]);
const value_int32 = Module.cwrap("value_int32", 
    "number", ["number"]);
const value_set_uint32 = Module.cwrap("value_set_uint32", 
    "number", ["number","number"]);
const value_set_int64 = Module.cwrap("value_set_int64", 
    "number", ["number","number"]);
const value_int64 = Module.cwrap("value_int64", 
    "number", ["number"]);
const value_set_uint64 = Module.cwrap("value_set_uint64", 
    "number", ["number","number"]);
const value_uint64 = Module.cwrap("value_uint64", 
    "number", ["number"]);
const value_set_float = Module.cwrap("value_set_float", 
    "number", ["number","number"]);
const value_float = Module.cwrap("value_float", 
    "number", ["number"]);
const value_set_float32 = Module.cwrap("value_set_float32", 
    "number", ["number","number"]);
const value_float32 = Module.cwrap("value_float32", 
    "number", ["number"]);
const value_set_double = Module.cwrap("value_set_double", 
    "number", ["number","number"]);
const value_double = Module.cwrap("value_double", 
    "number", ["number"]);
const value_dup_str = Module.cwrap("value_dup_str", 
    "number", ["number","string"]);
const value_str = Module.cwrap("value_str", 
    "string", ["number"]);
const value_wstr = Module.cwrap("value_wstr", 
    "number", ["number"]);
const value_is_null = Module.cwrap("value_is_null", 
    "number", ["number"]);
const value_int = Module.cwrap("value_int", 
    "number", ["number"]);
const value_set_int = Module.cwrap("value_set_int", 
    "number", ["number","number"]);
const value_set_object = Module.cwrap("value_set_object", 
    "number", ["number","number"]);
const value_object = Module.cwrap("value_object", 
    "number", ["number"]);
const value_create = Module.cwrap("value_create", 
    "number", []);
const value_destroy = Module.cwrap("value_destroy", 
    "number", ["number"]);
const value_reset = Module.cwrap("value_reset", 
    "number", ["number"]);
const value_cast = Module.cwrap("value_cast", 
    "number", ["number"]);
const progress_circle_create = Module.cwrap("progress_circle_create", 
    "number", ["number","number","number","number","number"]);
const progress_circle_cast = Module.cwrap("progress_circle_cast", 
    "number", ["number"]);
const progress_circle_set_value = Module.cwrap("progress_circle_set_value", 
    "number", ["number","number"]);
const progress_circle_set_max = Module.cwrap("progress_circle_set_max", 
    "number", ["number","number"]);
const progress_circle_set_line_width = Module.cwrap("progress_circle_set_line_width", 
    "number", ["number","number"]);
const progress_circle_set_start_angle = Module.cwrap("progress_circle_set_start_angle", 
    "number", ["number","number"]);
const progress_circle_set_unit = Module.cwrap("progress_circle_set_unit", 
    "number", ["number","string"]);
const progress_circle_set_show_text = Module.cwrap("progress_circle_set_show_text", 
    "number", ["number","number"]);
const progress_circle_set_counter_clock_wise = Module.cwrap("progress_circle_set_counter_clock_wise", 
    "number", ["number","number"]);
const progress_circle_t_get_prop_value = Module.cwrap("progress_circle_t_get_prop_value", 
    "number", ["number"]);
const progress_circle_t_get_prop_max = Module.cwrap("progress_circle_t_get_prop_max", 
    "number", ["number"]);
const progress_circle_t_get_prop_start_angle = Module.cwrap("progress_circle_t_get_prop_start_angle", 
    "number", ["number"]);
const progress_circle_t_get_prop_line_width = Module.cwrap("progress_circle_t_get_prop_line_width", 
    "number", ["number"]);
const progress_circle_t_get_prop_unit = Module.cwrap("progress_circle_t_get_prop_unit", 
    "string", ["number"]);
const progress_circle_t_get_prop_counter_clock_wise = Module.cwrap("progress_circle_t_get_prop_counter_clock_wise", 
    "number", ["number"]);
const progress_circle_t_get_prop_show_text = Module.cwrap("progress_circle_t_get_prop_show_text", 
    "number", ["number"]);
const rich_text_create = Module.cwrap("rich_text_create", 
    "number", ["number","number","number","number","number"]);
const rich_text_set_text = Module.cwrap("rich_text_set_text", 
    "number", ["number","string"]);
const rich_text_cast = Module.cwrap("rich_text_cast", 
    "number", ["number"]);
const rich_text_t_get_prop_line_gap = Module.cwrap("rich_text_t_get_prop_line_gap", 
    "number", ["number"]);
const list_item_create = Module.cwrap("list_item_create", 
    "number", ["number","number","number","number","number"]);
const list_item_cast = Module.cwrap("list_item_cast", 
    "number", ["number"]);
const list_view_h_create = Module.cwrap("list_view_h_create", 
    "number", ["number","number","number","number","number"]);
const list_view_h_set_item_width = Module.cwrap("list_view_h_set_item_width", 
    "number", ["number","number"]);
const list_view_h_set_spacing = Module.cwrap("list_view_h_set_spacing", 
    "number", ["number","number"]);
const list_view_h_cast = Module.cwrap("list_view_h_cast", 
    "number", ["number"]);
const list_view_h_t_get_prop_item_width = Module.cwrap("list_view_h_t_get_prop_item_width", 
    "number", ["number"]);
const list_view_h_t_get_prop_spacing = Module.cwrap("list_view_h_t_get_prop_spacing", 
    "number", ["number"]);
const list_view_create = Module.cwrap("list_view_create", 
    "number", ["number","number","number","number","number"]);
const list_view_set_item_height = Module.cwrap("list_view_set_item_height", 
    "number", ["number","number"]);
const list_view_set_default_item_height = Module.cwrap("list_view_set_default_item_height", 
    "number", ["number","number"]);
const list_view_set_auto_hide_scroll_bar = Module.cwrap("list_view_set_auto_hide_scroll_bar", 
    "number", ["number","number"]);
const list_view_cast = Module.cwrap("list_view_cast", 
    "number", ["number"]);
const list_view_t_get_prop_item_height = Module.cwrap("list_view_t_get_prop_item_height", 
    "number", ["number"]);
const list_view_t_get_prop_default_item_height = Module.cwrap("list_view_t_get_prop_default_item_height", 
    "number", ["number"]);
const list_view_t_get_prop_auto_hide_scroll_bar = Module.cwrap("list_view_t_get_prop_auto_hide_scroll_bar", 
    "number", ["number"]);
const scroll_bar_create = Module.cwrap("scroll_bar_create", 
    "number", ["number","number","number","number","number"]);
const scroll_bar_cast = Module.cwrap("scroll_bar_cast", 
    "number", ["number"]);
const scroll_bar_create_mobile = Module.cwrap("scroll_bar_create_mobile", 
    "number", ["number","number","number","number","number"]);
const scroll_bar_create_desktop = Module.cwrap("scroll_bar_create_desktop", 
    "number", ["number","number","number","number","number"]);
const scroll_bar_set_params = Module.cwrap("scroll_bar_set_params", 
    "number", ["number","number","number"]);
const scroll_bar_scroll_to = Module.cwrap("scroll_bar_scroll_to", 
    "number", ["number","number","number"]);
const scroll_bar_set_value = Module.cwrap("scroll_bar_set_value", 
    "number", ["number","number"]);
const scroll_bar_add_delta = Module.cwrap("scroll_bar_add_delta", 
    "number", ["number","number"]);
const scroll_bar_scroll_delta = Module.cwrap("scroll_bar_scroll_delta", 
    "number", ["number","number"]);
const scroll_bar_set_value_only = Module.cwrap("scroll_bar_set_value_only", 
    "number", ["number","number"]);
const scroll_bar_is_mobile = Module.cwrap("scroll_bar_is_mobile", 
    "number", ["number"]);
const scroll_bar_t_get_prop_virtual_size = Module.cwrap("scroll_bar_t_get_prop_virtual_size", 
    "number", ["number"]);
const scroll_bar_t_get_prop_value = Module.cwrap("scroll_bar_t_get_prop_value", 
    "number", ["number"]);
const scroll_bar_t_get_prop_row = Module.cwrap("scroll_bar_t_get_prop_row", 
    "number", ["number"]);
const scroll_bar_t_get_prop_animatable = Module.cwrap("scroll_bar_t_get_prop_animatable", 
    "number", ["number"]);
const scroll_view_create = Module.cwrap("scroll_view_create", 
    "number", ["number","number","number","number","number"]);
const scroll_view_cast = Module.cwrap("scroll_view_cast", 
    "number", ["number"]);
const scroll_view_set_virtual_w = Module.cwrap("scroll_view_set_virtual_w", 
    "number", ["number","number"]);
const scroll_view_set_virtual_h = Module.cwrap("scroll_view_set_virtual_h", 
    "number", ["number","number"]);
const scroll_view_set_xslidable = Module.cwrap("scroll_view_set_xslidable", 
    "number", ["number","number"]);
const scroll_view_set_yslidable = Module.cwrap("scroll_view_set_yslidable", 
    "number", ["number","number"]);
const scroll_view_set_offset = Module.cwrap("scroll_view_set_offset", 
    "number", ["number","number","number"]);
const scroll_view_scroll_to = Module.cwrap("scroll_view_scroll_to", 
    "number", ["number","number","number","number"]);
const scroll_view_t_get_prop_virtual_w = Module.cwrap("scroll_view_t_get_prop_virtual_w", 
    "number", ["number"]);
const scroll_view_t_get_prop_virtual_h = Module.cwrap("scroll_view_t_get_prop_virtual_h", 
    "number", ["number"]);
const scroll_view_t_get_prop_xoffset = Module.cwrap("scroll_view_t_get_prop_xoffset", 
    "number", ["number"]);
const scroll_view_t_get_prop_yoffset = Module.cwrap("scroll_view_t_get_prop_yoffset", 
    "number", ["number"]);
const scroll_view_t_get_prop_xslidable = Module.cwrap("scroll_view_t_get_prop_xslidable", 
    "number", ["number"]);
const scroll_view_t_get_prop_yslidable = Module.cwrap("scroll_view_t_get_prop_yslidable", 
    "number", ["number"]);
const slide_menu_create = Module.cwrap("slide_menu_create", 
    "number", ["number","number","number","number","number"]);
const slide_menu_cast = Module.cwrap("slide_menu_cast", 
    "number", ["number"]);
const slide_menu_set_value = Module.cwrap("slide_menu_set_value", 
    "number", ["number","number"]);
const slide_menu_set_align_v = Module.cwrap("slide_menu_set_align_v", 
    "number", ["number","number"]);
const slide_menu_set_min_scale = Module.cwrap("slide_menu_set_min_scale", 
    "number", ["number","number"]);
const slide_menu_t_get_prop_value = Module.cwrap("slide_menu_t_get_prop_value", 
    "number", ["number"]);
const slide_menu_t_get_prop_align_v = Module.cwrap("slide_menu_t_get_prop_align_v", 
    "number", ["number"]);
const slide_menu_t_get_prop_min_scale = Module.cwrap("slide_menu_t_get_prop_min_scale", 
    "number", ["number"]);
const slide_view_create = Module.cwrap("slide_view_create", 
    "number", ["number","number","number","number","number"]);
const slide_view_cast = Module.cwrap("slide_view_cast", 
    "number", ["number"]);
const slide_view_set_auto_play = Module.cwrap("slide_view_set_auto_play", 
    "number", ["number","number"]);
const slide_view_set_active = Module.cwrap("slide_view_set_active", 
    "number", ["number","number"]);
const slide_view_set_vertical = Module.cwrap("slide_view_set_vertical", 
    "number", ["number","number"]);
const slide_view_set_anim_hint = Module.cwrap("slide_view_set_anim_hint", 
    "number", ["number","string"]);
const slide_view_set_loop = Module.cwrap("slide_view_set_loop", 
    "number", ["number","number"]);
const slide_view_t_get_prop_vertical = Module.cwrap("slide_view_t_get_prop_vertical", 
    "number", ["number"]);
const slide_view_t_get_prop_auto_play = Module.cwrap("slide_view_t_get_prop_auto_play", 
    "number", ["number"]);
const slide_view_t_get_prop_loop = Module.cwrap("slide_view_t_get_prop_loop", 
    "number", ["number"]);
const slide_view_t_get_prop_anim_hint = Module.cwrap("slide_view_t_get_prop_anim_hint", 
    "string", ["number"]);
const row_create = Module.cwrap("row_create", 
    "number", ["number","number","number","number","number"]);
const row_cast = Module.cwrap("row_cast", 
    "number", ["number"]);
const switch_create = Module.cwrap("switch_create", 
    "number", ["number","number","number","number","number"]);
const switch_set_value = Module.cwrap("switch_set_value", 
    "number", ["number","number"]);
const switch_cast = Module.cwrap("switch_cast", 
    "number", ["number"]);
const switch_t_get_prop_value = Module.cwrap("switch_t_get_prop_value", 
    "number", ["number"]);
const switch_t_get_prop_max_xoffset_ratio = Module.cwrap("switch_t_get_prop_max_xoffset_ratio", 
    "number", ["number"]);
const switch_t_get_prop_round_radius = Module.cwrap("switch_t_get_prop_round_radius", 
    "number", ["number"]);
const text_selector_create = Module.cwrap("text_selector_create", 
    "number", ["number","number","number","number","number"]);
const text_selector_cast = Module.cwrap("text_selector_cast", 
    "number", ["number"]);
const text_selector_reset_options = Module.cwrap("text_selector_reset_options", 
    "number", ["number"]);
const text_selector_count_options = Module.cwrap("text_selector_count_options", 
    "number", ["number"]);
const text_selector_append_option = Module.cwrap("text_selector_append_option", 
    "number", ["number","number","string"]);
const text_selector_set_options = Module.cwrap("text_selector_set_options", 
    "number", ["number","string"]);
const text_selector_set_range_options = Module.cwrap("text_selector_set_range_options", 
    "number", ["number","number","number","number"]);
const text_selector_get_value = Module.cwrap("text_selector_get_value", 
    "number", ["number"]);
const text_selector_set_value = Module.cwrap("text_selector_set_value", 
    "number", ["number","number"]);
const text_selector_get_text = Module.cwrap("text_selector_get_text", 
    "string", ["number"]);
const text_selector_set_text = Module.cwrap("text_selector_set_text", 
    "number", ["number","string"]);
const text_selector_set_selected_index = Module.cwrap("text_selector_set_selected_index", 
    "number", ["number","number"]);
const text_selector_set_visible_nr = Module.cwrap("text_selector_set_visible_nr", 
    "number", ["number","number"]);
const text_selector_t_get_prop_visible_nr = Module.cwrap("text_selector_t_get_prop_visible_nr", 
    "number", ["number"]);
const text_selector_t_get_prop_selected_index = Module.cwrap("text_selector_t_get_prop_selected_index", 
    "number", ["number"]);
const text_selector_t_get_prop_options = Module.cwrap("text_selector_t_get_prop_options", 
    "string", ["number"]);
const digit_clock_create = Module.cwrap("digit_clock_create", 
    "number", ["number","number","number","number","number"]);
const digit_clock_cast = Module.cwrap("digit_clock_cast", 
    "number", ["number"]);
const digit_clock_set_format = Module.cwrap("digit_clock_set_format", 
    "number", ["number","string"]);
const digit_clock_t_get_prop_format = Module.cwrap("digit_clock_t_get_prop_format", 
    "string", ["number"]);
const time_clock_create = Module.cwrap("time_clock_create", 
    "number", ["number","number","number","number","number"]);
const time_clock_cast = Module.cwrap("time_clock_cast", 
    "number", ["number"]);
const time_clock_set_hour = Module.cwrap("time_clock_set_hour", 
    "number", ["number","number"]);
const time_clock_set_minute = Module.cwrap("time_clock_set_minute", 
    "number", ["number","number"]);
const time_clock_set_second = Module.cwrap("time_clock_set_second", 
    "number", ["number","number"]);
const time_clock_set_hour_image = Module.cwrap("time_clock_set_hour_image", 
    "number", ["number","string"]);
const time_clock_set_minute_image = Module.cwrap("time_clock_set_minute_image", 
    "number", ["number","string"]);
const time_clock_set_second_image = Module.cwrap("time_clock_set_second_image", 
    "number", ["number","string"]);
const time_clock_set_bg_image = Module.cwrap("time_clock_set_bg_image", 
    "number", ["number","string"]);
const time_clock_set_image = Module.cwrap("time_clock_set_image", 
    "number", ["number","string"]);
const time_clock_t_get_prop_hour = Module.cwrap("time_clock_t_get_prop_hour", 
    "number", ["number"]);
const time_clock_t_get_prop_minute = Module.cwrap("time_clock_t_get_prop_minute", 
    "number", ["number"]);
const time_clock_t_get_prop_second = Module.cwrap("time_clock_t_get_prop_second", 
    "number", ["number"]);
const time_clock_t_get_prop_image = Module.cwrap("time_clock_t_get_prop_image", 
    "string", ["number"]);
const time_clock_t_get_prop_bg_image = Module.cwrap("time_clock_t_get_prop_bg_image", 
    "string", ["number"]);
const time_clock_t_get_prop_hour_image = Module.cwrap("time_clock_t_get_prop_hour_image", 
    "string", ["number"]);
const time_clock_t_get_prop_minute_image = Module.cwrap("time_clock_t_get_prop_minute_image", 
    "string", ["number"]);
const time_clock_t_get_prop_second_image = Module.cwrap("time_clock_t_get_prop_second_image", 
    "string", ["number"]);
const window_event_cast = Module.cwrap("window_event_cast", 
    "number", ["number"]);
const window_event_t_get_prop_window = Module.cwrap("window_event_t_get_prop_window", 
    "number", ["number"]);
const tab_button_create = Module.cwrap("tab_button_create", 
    "number", ["number","number","number","number","number"]);
const tab_button_cast = Module.cwrap("tab_button_cast", 
    "number", ["number"]);
const tab_button_set_value = Module.cwrap("tab_button_set_value", 
    "number", ["number","number"]);
const tab_button_set_icon = Module.cwrap("tab_button_set_icon", 
    "number", ["number","string"]);
const tab_button_set_active_icon = Module.cwrap("tab_button_set_active_icon", 
    "number", ["number","string"]);
const tab_button_t_get_prop_value = Module.cwrap("tab_button_t_get_prop_value", 
    "number", ["number"]);
const tab_button_t_get_prop_active_icon = Module.cwrap("tab_button_t_get_prop_active_icon", 
    "string", ["number"]);
const tab_button_t_get_prop_icon = Module.cwrap("tab_button_t_get_prop_icon", 
    "string", ["number"]);
const image_base_set_image = Module.cwrap("image_base_set_image", 
    "number", ["number","string"]);
const image_base_set_rotation = Module.cwrap("image_base_set_rotation", 
    "number", ["number","number"]);
const image_base_set_scale = Module.cwrap("image_base_set_scale", 
    "number", ["number","number","number"]);
const image_base_set_anchor = Module.cwrap("image_base_set_anchor", 
    "number", ["number","number","number"]);
const image_base_set_selected = Module.cwrap("image_base_set_selected", 
    "number", ["number","number"]);
const image_base_set_selectable = Module.cwrap("image_base_set_selectable", 
    "number", ["number","number"]);
const image_base_set_clickable = Module.cwrap("image_base_set_clickable", 
    "number", ["number","number"]);
const image_base_cast = Module.cwrap("image_base_cast", 
    "number", ["number"]);
const image_base_t_get_prop_image = Module.cwrap("image_base_t_get_prop_image", 
    "string", ["number"]);
const image_base_t_get_prop_anchor_x = Module.cwrap("image_base_t_get_prop_anchor_x", 
    "number", ["number"]);
const image_base_t_get_prop_anchor_y = Module.cwrap("image_base_t_get_prop_anchor_y", 
    "number", ["number"]);
const image_base_t_get_prop_scale_x = Module.cwrap("image_base_t_get_prop_scale_x", 
    "number", ["number"]);
const image_base_t_get_prop_scale_y = Module.cwrap("image_base_t_get_prop_scale_y", 
    "number", ["number"]);
const image_base_t_get_prop_rotation = Module.cwrap("image_base_t_get_prop_rotation", 
    "number", ["number"]);
const image_base_t_get_prop_clickable = Module.cwrap("image_base_t_get_prop_clickable", 
    "number", ["number"]);
const image_base_t_get_prop_selectable = Module.cwrap("image_base_t_get_prop_selectable", 
    "number", ["number"]);
const image_base_t_get_prop_selected = Module.cwrap("image_base_t_get_prop_selected", 
    "number", ["number"]);
const window_create = Module.cwrap("window_create", 
    "number", ["number","number","number","number","number"]);
const window_set_fullscreen = Module.cwrap("window_set_fullscreen", 
    "number", ["number","number"]);
const window_open = Module.cwrap("window_open", 
    "number", ["string"]);
const window_open_and_close = Module.cwrap("window_open_and_close", 
    "number", ["string","number"]);
const window_close = Module.cwrap("window_close", 
    "number", ["number"]);
const window_close_force = Module.cwrap("window_close_force", 
    "number", ["number"]);
const window_cast = Module.cwrap("window_cast", 
    "number", ["number"]);
const window_t_get_prop_fullscreen = Module.cwrap("window_t_get_prop_fullscreen", 
    "number", ["number"]);
const wheel_event_cast = Module.cwrap("wheel_event_cast", 
    "number", ["number"]);
const wheel_event_t_get_prop_dy = Module.cwrap("wheel_event_t_get_prop_dy", 
    "number", ["number"]);
const wheel_event_t_get_prop_alt = Module.cwrap("wheel_event_t_get_prop_alt", 
    "number", ["number"]);
const wheel_event_t_get_prop_ctrl = Module.cwrap("wheel_event_t_get_prop_ctrl", 
    "number", ["number"]);
const wheel_event_t_get_prop_shift = Module.cwrap("wheel_event_t_get_prop_shift", 
    "number", ["number"]);
const pointer_event_cast = Module.cwrap("pointer_event_cast", 
    "number", ["number"]);
const pointer_event_t_get_prop_x = Module.cwrap("pointer_event_t_get_prop_x", 
    "number", ["number"]);
const pointer_event_t_get_prop_y = Module.cwrap("pointer_event_t_get_prop_y", 
    "number", ["number"]);
const pointer_event_t_get_prop_button = Module.cwrap("pointer_event_t_get_prop_button", 
    "number", ["number"]);
const pointer_event_t_get_prop_pressed = Module.cwrap("pointer_event_t_get_prop_pressed", 
    "number", ["number"]);
const pointer_event_t_get_prop_alt = Module.cwrap("pointer_event_t_get_prop_alt", 
    "number", ["number"]);
const pointer_event_t_get_prop_ctrl = Module.cwrap("pointer_event_t_get_prop_ctrl", 
    "number", ["number"]);
const pointer_event_t_get_prop_shift = Module.cwrap("pointer_event_t_get_prop_shift", 
    "number", ["number"]);
const key_event_cast = Module.cwrap("key_event_cast", 
    "number", ["number"]);
const key_event_t_get_prop_key = Module.cwrap("key_event_t_get_prop_key", 
    "number", ["number"]);
const key_event_t_get_prop_alt = Module.cwrap("key_event_t_get_prop_alt", 
    "number", ["number"]);
const key_event_t_get_prop_ctrl = Module.cwrap("key_event_t_get_prop_ctrl", 
    "number", ["number"]);
const key_event_t_get_prop_shift = Module.cwrap("key_event_t_get_prop_shift", 
    "number", ["number"]);
const key_event_t_get_prop_capslock = Module.cwrap("key_event_t_get_prop_capslock", 
    "number", ["number"]);
const paint_event_cast = Module.cwrap("paint_event_cast", 
    "number", ["number"]);
const paint_event_t_get_prop_c = Module.cwrap("paint_event_t_get_prop_c", 
    "number", ["number"]);
const prop_change_event_cast = Module.cwrap("prop_change_event_cast", 
    "number", ["number"]);
const prop_change_event_t_get_prop_name = Module.cwrap("prop_change_event_t_get_prop_name", 
    "string", ["number"]);
const prop_change_event_t_get_prop_value = Module.cwrap("prop_change_event_t_get_prop_value", 
    "number", ["number"]);
const window_base_cast = Module.cwrap("window_base_cast", 
    "number", ["number"]);
const window_base_t_get_prop_theme = Module.cwrap("window_base_t_get_prop_theme", 
    "string", ["number"]);
const window_base_t_get_prop_closable = Module.cwrap("window_base_t_get_prop_closable", 
    "number", ["number"]);
const window_manager = Module.cwrap("window_manager", 
    "number", []);
const window_manager_cast = Module.cwrap("window_manager_cast", 
    "number", ["number"]);
const window_manager_get_top_main_window = Module.cwrap("window_manager_get_top_main_window", 
    "number", ["number"]);
const window_manager_set_show_fps = Module.cwrap("window_manager_set_show_fps", 
    "number", ["number","number"]);
const window_manager_set_screen_saver_time = Module.cwrap("window_manager_set_screen_saver_time", 
    "number", ["number","number"]);
const window_manager_set_cursor = Module.cwrap("window_manager_set_cursor", 
    "number", ["number","string"]);
const window_manager_back = Module.cwrap("window_manager_back", 
    "number", ["number"]);
const window_manager_back_to_home = Module.cwrap("window_manager_back_to_home", 
    "number", ["number"]);
const window_manager_t_get_prop_show_fps = Module.cwrap("window_manager_t_get_prop_show_fps", 
    "number", ["number"]);
const progress_bar_create = Module.cwrap("progress_bar_create", 
    "number", ["number","number","number","number","number"]);
const progress_bar_cast = Module.cwrap("progress_bar_cast", 
    "number", ["number"]);
const progress_bar_set_value = Module.cwrap("progress_bar_set_value", 
    "number", ["number","number"]);
const progress_bar_set_vertical = Module.cwrap("progress_bar_set_vertical", 
    "number", ["number","number"]);
const progress_bar_set_show_text = Module.cwrap("progress_bar_set_show_text", 
    "number", ["number","number"]);
const progress_bar_t_get_prop_value = Module.cwrap("progress_bar_t_get_prop_value", 
    "number", ["number"]);
const progress_bar_t_get_prop_vertical = Module.cwrap("progress_bar_t_get_prop_vertical", 
    "number", ["number"]);
const progress_bar_t_get_prop_show_text = Module.cwrap("progress_bar_t_get_prop_show_text", 
    "number", ["number"]);
const object_unref = Module.cwrap("object_unref", 
    "number", ["number"]);
const object_ref = Module.cwrap("object_ref", 
    "number", ["number"]);
const object_get_type = Module.cwrap("object_get_type", 
    "string", ["number"]);
const object_get_desc = Module.cwrap("object_get_desc", 
    "string", ["number"]);
const object_get_size = Module.cwrap("object_get_size", 
    "number", ["number"]);
const object_is_collection = Module.cwrap("object_is_collection", 
    "number", ["number"]);
const object_set_name = Module.cwrap("object_set_name", 
    "number", ["number","string"]);
const object_compare = Module.cwrap("object_compare", 
    "number", ["number","number"]);
const object_get_prop = Module.cwrap("object_get_prop", 
    "number", ["number","string","number"]);
const object_get_prop_str = Module.cwrap("object_get_prop_str", 
    "string", ["number","string"]);
const object_get_prop_pointer = Module.cwrap("object_get_prop_pointer", 
    "number", ["number","string"]);
const object_get_prop_object = Module.cwrap("object_get_prop_object", 
    "number", ["number","string"]);
const object_get_prop_int = Module.cwrap("object_get_prop_int", 
    "number", ["number","string","number"]);
const object_get_prop_float = Module.cwrap("object_get_prop_float", 
    "number", ["number","string","number"]);
const object_remove_prop = Module.cwrap("object_remove_prop", 
    "number", ["number","string"]);
const object_set_prop = Module.cwrap("object_set_prop", 
    "number", ["number","string","number"]);
const object_set_prop_str = Module.cwrap("object_set_prop_str", 
    "number", ["number","string","string"]);
const object_set_prop_pointer = Module.cwrap("object_set_prop_pointer", 
    "number", ["number","string","number"]);
const object_set_prop_object = Module.cwrap("object_set_prop_object", 
    "number", ["number","string","number"]);
const object_set_prop_int = Module.cwrap("object_set_prop_int", 
    "number", ["number","string","number"]);
const object_set_prop_float = Module.cwrap("object_set_prop_float", 
    "number", ["number","string","number"]);
const object_copy_prop = Module.cwrap("object_copy_prop", 
    "number", ["number","number","string"]);
const object_foreach_prop = Module.cwrap("object_foreach_prop", 
    "number", ["number","number","number"]);
const object_has_prop = Module.cwrap("object_has_prop", 
    "number", ["number","string"]);
const object_eval = Module.cwrap("object_eval", 
    "number", ["number","string","number"]);
const object_can_exec = Module.cwrap("object_can_exec", 
    "number", ["number","string","string"]);
const object_exec = Module.cwrap("object_exec", 
    "number", ["number","string","string"]);
const object_notify_changed = Module.cwrap("object_notify_changed", 
    "number", ["number"]);
const object_t_get_prop_ref_count = Module.cwrap("object_t_get_prop_ref_count", 
    "number", ["number"]);
const object_t_get_prop_name = Module.cwrap("object_t_get_prop_name", 
    "string", ["number"]);
const style_mutable_get_name = Module.cwrap("style_mutable_get_name", 
    "string", ["number"]);
const style_mutable_set_name = Module.cwrap("style_mutable_set_name", 
    "number", ["number","string"]);
const style_mutable_set_int = Module.cwrap("style_mutable_set_int", 
    "number", ["number","string","string","number"]);
const style_mutable_cast = Module.cwrap("style_mutable_cast", 
    "number", ["number"]);
const style_mutable_create = Module.cwrap("style_mutable_create", 
    "number", ["number"]);
const style_mutable_t_get_prop_name = Module.cwrap("style_mutable_t_get_prop_name", 
    "string", ["number"]);
const canvas_widget_create = Module.cwrap("canvas_widget_create", 
    "number", ["number","number","number","number","number"]);
const canvas_widget_cast = Module.cwrap("canvas_widget_cast", 
    "number", ["number"]);
const color_picker_create = Module.cwrap("color_picker_create", 
    "number", ["number","number","number","number","number"]);
const color_picker_set_color = Module.cwrap("color_picker_set_color", 
    "number", ["number","string"]);
const color_picker_cast = Module.cwrap("color_picker_cast", 
    "number", ["number"]);
const color_picker_t_get_prop_value = Module.cwrap("color_picker_t_get_prop_value", 
    "string", ["number"]);
const view_create = Module.cwrap("view_create", 
    "number", ["number","number","number","number","number"]);
const view_cast = Module.cwrap("view_cast", 
    "number", ["number"]);
const tab_button_group_create = Module.cwrap("tab_button_group_create", 
    "number", ["number","number","number","number","number"]);
const tab_button_group_cast = Module.cwrap("tab_button_group_cast", 
    "number", ["number"]);
const tab_button_group_t_get_prop_compact = Module.cwrap("tab_button_group_t_get_prop_compact", 
    "number", ["number"]);
const guage_pointer_create = Module.cwrap("guage_pointer_create", 
    "number", ["number","number","number","number","number"]);
const guage_pointer_cast = Module.cwrap("guage_pointer_cast", 
    "number", ["number"]);
const guage_pointer_set_angle = Module.cwrap("guage_pointer_set_angle", 
    "number", ["number","number"]);
const guage_pointer_set_image = Module.cwrap("guage_pointer_set_image", 
    "number", ["number","string"]);
const guage_pointer_t_get_prop_angle = Module.cwrap("guage_pointer_t_get_prop_angle", 
    "number", ["number"]);
const guage_pointer_t_get_prop_image = Module.cwrap("guage_pointer_t_get_prop_image", 
    "string", ["number"]);
const guage_create = Module.cwrap("guage_create", 
    "number", ["number","number","number","number","number"]);
const guage_cast = Module.cwrap("guage_cast", 
    "number", ["number"]);
const guage_set_image = Module.cwrap("guage_set_image", 
    "number", ["number","string"]);
const guage_set_draw_type = Module.cwrap("guage_set_draw_type", 
    "number", ["number","number"]);
const guage_t_get_prop_image = Module.cwrap("guage_t_get_prop_image", 
    "string", ["number"]);
const guage_t_get_prop_draw_type = Module.cwrap("guage_t_get_prop_draw_type", 
    "number", ["number"]);
const tab_control_create = Module.cwrap("tab_control_create", 
    "number", ["number","number","number","number","number"]);
const tab_control_cast = Module.cwrap("tab_control_cast", 
    "number", ["number"]);
const image_value_create = Module.cwrap("image_value_create", 
    "number", ["number","number","number","number","number"]);
const image_value_set_image = Module.cwrap("image_value_set_image", 
    "number", ["number","string"]);
const image_value_set_format = Module.cwrap("image_value_set_format", 
    "number", ["number","string"]);
const image_value_set_value = Module.cwrap("image_value_set_value", 
    "number", ["number","number"]);
const image_value_cast = Module.cwrap("image_value_cast", 
    "number", ["number"]);
const image_value_t_get_prop_image = Module.cwrap("image_value_t_get_prop_image", 
    "string", ["number"]);
const image_value_t_get_prop_format = Module.cwrap("image_value_t_get_prop_format", 
    "string", ["number"]);
const image_value_t_get_prop_value = Module.cwrap("image_value_t_get_prop_value", 
    "number", ["number"]);
const slider_create = Module.cwrap("slider_create", 
    "number", ["number","number","number","number","number"]);
const slider_cast = Module.cwrap("slider_cast", 
    "number", ["number"]);
const slider_set_value = Module.cwrap("slider_set_value", 
    "number", ["number","number"]);
const slider_set_min = Module.cwrap("slider_set_min", 
    "number", ["number","number"]);
const slider_set_max = Module.cwrap("slider_set_max", 
    "number", ["number","number"]);
const slider_set_step = Module.cwrap("slider_set_step", 
    "number", ["number","number"]);
const slider_set_bar_size = Module.cwrap("slider_set_bar_size", 
    "number", ["number","number"]);
const slider_set_vertical = Module.cwrap("slider_set_vertical", 
    "number", ["number","number"]);
const slider_t_get_prop_value = Module.cwrap("slider_t_get_prop_value", 
    "number", ["number"]);
const slider_t_get_prop_min = Module.cwrap("slider_t_get_prop_min", 
    "number", ["number"]);
const slider_t_get_prop_max = Module.cwrap("slider_t_get_prop_max", 
    "number", ["number"]);
const slider_t_get_prop_step = Module.cwrap("slider_t_get_prop_step", 
    "number", ["number"]);
const slider_t_get_prop_vertical = Module.cwrap("slider_t_get_prop_vertical", 
    "number", ["number"]);
const slider_t_get_prop_bar_size = Module.cwrap("slider_t_get_prop_bar_size", 
    "number", ["number"]);
const app_bar_create = Module.cwrap("app_bar_create", 
    "number", ["number","number","number","number","number"]);
const app_bar_cast = Module.cwrap("app_bar_cast", 
    "number", ["number"]);
const button_group_create = Module.cwrap("button_group_create", 
    "number", ["number","number","number","number","number"]);
const button_group_cast = Module.cwrap("button_group_cast", 
    "number", ["number"]);
const button_create = Module.cwrap("button_create", 
    "number", ["number","number","number","number","number"]);
const button_cast = Module.cwrap("button_cast", 
    "number", ["number"]);
const button_set_repeat = Module.cwrap("button_set_repeat", 
    "number", ["number","number"]);
const button_set_enable_long_press = Module.cwrap("button_set_enable_long_press", 
    "number", ["number","number"]);
const button_t_get_prop_repeat = Module.cwrap("button_t_get_prop_repeat", 
    "number", ["number"]);
const button_t_get_prop_enable_long_press = Module.cwrap("button_t_get_prop_enable_long_press", 
    "number", ["number"]);
const check_button_create = Module.cwrap("check_button_create", 
    "number", ["number","number","number","number","number"]);
const check_button_create_radio = Module.cwrap("check_button_create_radio", 
    "number", ["number","number","number","number","number"]);
const check_button_set_value = Module.cwrap("check_button_set_value", 
    "number", ["number","number"]);
const check_button_cast = Module.cwrap("check_button_cast", 
    "number", ["number"]);
const check_button_t_get_prop_value = Module.cwrap("check_button_t_get_prop_value", 
    "number", ["number"]);
const color_tile_create = Module.cwrap("color_tile_create", 
    "number", ["number","number","number","number","number"]);
const color_tile_cast = Module.cwrap("color_tile_cast", 
    "number", ["number"]);
const color_tile_set_bg_color = Module.cwrap("color_tile_set_bg_color", 
    "number", ["number","string"]);
const color_tile_t_get_prop_bg_color = Module.cwrap("color_tile_t_get_prop_bg_color", 
    "string", ["number"]);
const color_tile_t_get_prop_border_color = Module.cwrap("color_tile_t_get_prop_border_color", 
    "string", ["number"]);
const column_create = Module.cwrap("column_create", 
    "number", ["number","number","number","number","number"]);
const column_cast = Module.cwrap("column_cast", 
    "number", ["number"]);
const combo_box_item_create = Module.cwrap("combo_box_item_create", 
    "number", ["number","number","number","number","number"]);
const combo_box_item_cast = Module.cwrap("combo_box_item_cast", 
    "number", ["number"]);
const combo_box_item_set_checked = Module.cwrap("combo_box_item_set_checked", 
    "number", ["number","number"]);
const combo_box_item_set_value = Module.cwrap("combo_box_item_set_value", 
    "number", ["number","number"]);
const combo_box_item_t_get_prop_value = Module.cwrap("combo_box_item_t_get_prop_value", 
    "number", ["number"]);
const combo_box_item_t_get_prop_checked = Module.cwrap("combo_box_item_t_get_prop_checked", 
    "number", ["number"]);
const combo_box_create = Module.cwrap("combo_box_create", 
    "number", ["number","number","number","number","number"]);
const combo_box_cast = Module.cwrap("combo_box_cast", 
    "number", ["number"]);
const combo_box_set_open_window = Module.cwrap("combo_box_set_open_window", 
    "number", ["number","string"]);
const combo_box_reset_options = Module.cwrap("combo_box_reset_options", 
    "number", ["number"]);
const combo_box_count_options = Module.cwrap("combo_box_count_options", 
    "number", ["number"]);
const combo_box_set_selected_index = Module.cwrap("combo_box_set_selected_index", 
    "number", ["number","number"]);
const combo_box_set_value = Module.cwrap("combo_box_set_value", 
    "number", ["number","number"]);
const combo_box_append_option = Module.cwrap("combo_box_append_option", 
    "number", ["number","number","string"]);
const combo_box_set_options = Module.cwrap("combo_box_set_options", 
    "number", ["number","string"]);
const combo_box_get_value = Module.cwrap("combo_box_get_value", 
    "number", ["number"]);
const combo_box_get_text = Module.cwrap("combo_box_get_text", 
    "string", ["number"]);
const combo_box_t_get_prop_open_window = Module.cwrap("combo_box_t_get_prop_open_window", 
    "string", ["number"]);
const combo_box_t_get_prop_selected_index = Module.cwrap("combo_box_t_get_prop_selected_index", 
    "number", ["number"]);
const combo_box_t_get_prop_value = Module.cwrap("combo_box_t_get_prop_value", 
    "number", ["number"]);
const combo_box_t_get_prop_options = Module.cwrap("combo_box_t_get_prop_options", 
    "string", ["number"]);
const dialog_client_create = Module.cwrap("dialog_client_create", 
    "number", ["number","number","number","number","number"]);
const dialog_client_cast = Module.cwrap("dialog_client_cast", 
    "number", ["number"]);
const dialog_title_create = Module.cwrap("dialog_title_create", 
    "number", ["number","number","number","number","number"]);
const dialog_title_cast = Module.cwrap("dialog_title_cast", 
    "number", ["number"]);
const dialog_create = Module.cwrap("dialog_create", 
    "number", ["number","number","number","number","number"]);
const dialog_create_simple = Module.cwrap("dialog_create_simple", 
    "number", ["number","number","number","number","number"]);
const dialog_cast = Module.cwrap("dialog_cast", 
    "number", ["number"]);
const dialog_get_title = Module.cwrap("dialog_get_title", 
    "number", ["number"]);
const dialog_get_client = Module.cwrap("dialog_get_client", 
    "number", ["number"]);
const dialog_open = Module.cwrap("dialog_open", 
    "number", ["string"]);
const dialog_set_title = Module.cwrap("dialog_set_title", 
    "number", ["number","string"]);
const dialog_modal = Module.cwrap("dialog_modal", 
    "number", ["number"]);
const dialog_quit = Module.cwrap("dialog_quit", 
    "number", ["number","number"]);
const dialog_is_quited = Module.cwrap("dialog_is_quited", 
    "number", ["number"]);
const dialog_is_modal = Module.cwrap("dialog_is_modal", 
    "number", ["number"]);
const dialog_toast = Module.cwrap("dialog_toast", 
    "number", ["string","number"]);
const dialog_info = Module.cwrap("dialog_info", 
    "number", ["string"]);
const dialog_warn = Module.cwrap("dialog_warn", 
    "number", ["string"]);
const dialog_confirm = Module.cwrap("dialog_confirm", 
    "number", ["string"]);
const dialog_t_get_prop_highlight = Module.cwrap("dialog_t_get_prop_highlight", 
    "string", ["number"]);
const dragger_create = Module.cwrap("dragger_create", 
    "number", ["number","number","number","number","number"]);
const dragger_cast = Module.cwrap("dragger_cast", 
    "number", ["number"]);
const dragger_set_range = Module.cwrap("dragger_set_range", 
    "number", ["number","number","number","number","number"]);
const dragger_t_get_prop_x_min = Module.cwrap("dragger_t_get_prop_x_min", 
    "number", ["number"]);
const dragger_t_get_prop_y_min = Module.cwrap("dragger_t_get_prop_y_min", 
    "number", ["number"]);
const dragger_t_get_prop_x_max = Module.cwrap("dragger_t_get_prop_x_max", 
    "number", ["number"]);
const dragger_t_get_prop_y_max = Module.cwrap("dragger_t_get_prop_y_max", 
    "number", ["number"]);
const edit_create = Module.cwrap("edit_create", 
    "number", ["number","number","number","number","number"]);
const edit_cast = Module.cwrap("edit_cast", 
    "number", ["number"]);
const edit_get_int = Module.cwrap("edit_get_int", 
    "number", ["number"]);
const edit_get_double = Module.cwrap("edit_get_double", 
    "number", ["number"]);
const edit_set_int = Module.cwrap("edit_set_int", 
    "number", ["number","number"]);
const edit_set_double = Module.cwrap("edit_set_double", 
    "number", ["number","number"]);
const edit_set_text_limit = Module.cwrap("edit_set_text_limit", 
    "number", ["number","number","number"]);
const edit_set_int_limit = Module.cwrap("edit_set_int_limit", 
    "number", ["number","number","number","number"]);
const edit_set_float_limit = Module.cwrap("edit_set_float_limit", 
    "number", ["number","number","number","number"]);
const edit_set_readonly = Module.cwrap("edit_set_readonly", 
    "number", ["number","number"]);
const edit_set_auto_fix = Module.cwrap("edit_set_auto_fix", 
    "number", ["number","number"]);
const edit_set_input_type = Module.cwrap("edit_set_input_type", 
    "number", ["number","number"]);
const edit_set_input_tips = Module.cwrap("edit_set_input_tips", 
    "number", ["number","string"]);
const edit_set_password_visible = Module.cwrap("edit_set_password_visible", 
    "number", ["number","number"]);
const edit_set_focus = Module.cwrap("edit_set_focus", 
    "number", ["number","number"]);
const edit_t_get_prop_readonly = Module.cwrap("edit_t_get_prop_readonly", 
    "number", ["number"]);
const edit_t_get_prop_password_visible = Module.cwrap("edit_t_get_prop_password_visible", 
    "number", ["number"]);
const edit_t_get_prop_auto_fix = Module.cwrap("edit_t_get_prop_auto_fix", 
    "number", ["number"]);
const edit_t_get_prop_top_margin = Module.cwrap("edit_t_get_prop_top_margin", 
    "number", ["number"]);
const edit_t_get_prop_bottom_margin = Module.cwrap("edit_t_get_prop_bottom_margin", 
    "number", ["number"]);
const edit_t_get_prop_left_margin = Module.cwrap("edit_t_get_prop_left_margin", 
    "number", ["number"]);
const edit_t_get_prop_right_margin = Module.cwrap("edit_t_get_prop_right_margin", 
    "number", ["number"]);
const edit_t_get_prop_tips = Module.cwrap("edit_t_get_prop_tips", 
    "string", ["number"]);
const edit_t_get_prop_focus = Module.cwrap("edit_t_get_prop_focus", 
    "number", ["number"]);
const grid_item_create = Module.cwrap("grid_item_create", 
    "number", ["number","number","number","number","number"]);
const grid_item_cast = Module.cwrap("grid_item_cast", 
    "number", ["number"]);
const grid_create = Module.cwrap("grid_create", 
    "number", ["number","number","number","number","number"]);
const grid_cast = Module.cwrap("grid_cast", 
    "number", ["number"]);
const group_box_create = Module.cwrap("group_box_create", 
    "number", ["number","number","number","number","number"]);
const group_box_cast = Module.cwrap("group_box_cast", 
    "number", ["number"]);
const popup_create = Module.cwrap("popup_create", 
    "number", ["number","number","number","number","number"]);
const popup_cast = Module.cwrap("popup_cast", 
    "number", ["number"]);
const popup_set_close_when_click = Module.cwrap("popup_set_close_when_click", 
    "number", ["number","number"]);
const popup_set_close_when_click_outside = Module.cwrap("popup_set_close_when_click_outside", 
    "number", ["number","number"]);
const popup_t_get_prop_close_when_click = Module.cwrap("popup_t_get_prop_close_when_click", 
    "number", ["number"]);
const popup_t_get_prop_close_when_click_outside = Module.cwrap("popup_t_get_prop_close_when_click_outside", 
    "number", ["number"]);
const label_create = Module.cwrap("label_create", 
    "number", ["number","number","number","number","number"]);
const label_set_length = Module.cwrap("label_set_length", 
    "number", ["number","number"]);
const label_resize_to_content = Module.cwrap("label_resize_to_content", 
    "number", ["number","number","number","number","number"]);
const label_cast = Module.cwrap("label_cast", 
    "number", ["number"]);
const label_t_get_prop_length = Module.cwrap("label_t_get_prop_length", 
    "number", ["number"]);
const pages_create = Module.cwrap("pages_create", 
    "number", ["number","number","number","number","number"]);
const pages_cast = Module.cwrap("pages_cast", 
    "number", ["number"]);
const pages_set_active = Module.cwrap("pages_set_active", 
    "number", ["number","number"]);
const pages_set_active_by_name = Module.cwrap("pages_set_active_by_name", 
    "number", ["number","string"]);
const pages_t_get_prop_active = Module.cwrap("pages_t_get_prop_active", 
    "number", ["number"]);
const image_animation_create = Module.cwrap("image_animation_create", 
    "number", ["number","number","number","number","number"]);
const image_animation_set_loop = Module.cwrap("image_animation_set_loop", 
    "number", ["number","number"]);
const image_animation_set_image = Module.cwrap("image_animation_set_image", 
    "number", ["number","string"]);
const image_animation_set_interval = Module.cwrap("image_animation_set_interval", 
    "number", ["number","number"]);
const image_animation_set_delay = Module.cwrap("image_animation_set_delay", 
    "number", ["number","number"]);
const image_animation_set_auto_play = Module.cwrap("image_animation_set_auto_play", 
    "number", ["number","number"]);
const image_animation_set_sequence = Module.cwrap("image_animation_set_sequence", 
    "number", ["number","string"]);
const image_animation_set_range_sequence = Module.cwrap("image_animation_set_range_sequence", 
    "number", ["number","number","number"]);
const image_animation_play = Module.cwrap("image_animation_play", 
    "number", ["number"]);
const image_animation_stop = Module.cwrap("image_animation_stop", 
    "number", ["number"]);
const image_animation_pause = Module.cwrap("image_animation_pause", 
    "number", ["number"]);
const image_animation_set_format = Module.cwrap("image_animation_set_format", 
    "number", ["number","string"]);
const image_animation_set_unload_after_paint = Module.cwrap("image_animation_set_unload_after_paint", 
    "number", ["number","number"]);
const image_animation_cast = Module.cwrap("image_animation_cast", 
    "number", ["number"]);
const image_animation_t_get_prop_image = Module.cwrap("image_animation_t_get_prop_image", 
    "string", ["number"]);
const image_animation_t_get_prop_sequence = Module.cwrap("image_animation_t_get_prop_sequence", 
    "string", ["number"]);
const image_animation_t_get_prop_start_index = Module.cwrap("image_animation_t_get_prop_start_index", 
    "number", ["number"]);
const image_animation_t_get_prop_end_index = Module.cwrap("image_animation_t_get_prop_end_index", 
    "number", ["number"]);
const image_animation_t_get_prop_loop = Module.cwrap("image_animation_t_get_prop_loop", 
    "number", ["number"]);
const image_animation_t_get_prop_auto_play = Module.cwrap("image_animation_t_get_prop_auto_play", 
    "number", ["number"]);
const image_animation_t_get_prop_unload_after_paint = Module.cwrap("image_animation_t_get_prop_unload_after_paint", 
    "number", ["number"]);
const image_animation_t_get_prop_format = Module.cwrap("image_animation_t_get_prop_format", 
    "string", ["number"]);
const image_animation_t_get_prop_interval = Module.cwrap("image_animation_t_get_prop_interval", 
    "number", ["number"]);
const image_animation_t_get_prop_delay = Module.cwrap("image_animation_t_get_prop_delay", 
    "number", ["number"]);
const image_create = Module.cwrap("image_create", 
    "number", ["number","number","number","number","number"]);
const image_set_draw_type = Module.cwrap("image_set_draw_type", 
    "number", ["number","number"]);
const image_cast = Module.cwrap("image_cast", 
    "number", ["number"]);
const image_t_get_prop_draw_type = Module.cwrap("image_t_get_prop_draw_type", 
    "number", ["number"]);
const svg_image_create = Module.cwrap("svg_image_create", 
    "number", ["number","number","number","number","number"]);
const svg_image_cast = Module.cwrap("svg_image_cast", 
    "number", ["number"]);
const spin_box_create = Module.cwrap("spin_box_create", 
    "number", ["number","number","number","number","number"]);
const spin_box_cast = Module.cwrap("spin_box_cast", 
    "number", ["number"]);
const object_default_create = Module.cwrap("object_default_create", 
    "number", []);
const object_default_unref = Module.cwrap("object_default_unref", 
    "number", ["number"]);
const object_default_t_get_prop_props_size = Module.cwrap("object_default_t_get_prop_props_size", 
    "number", ["number"]);
const gif_image_create = Module.cwrap("gif_image_create", 
    "number", ["number","number","number","number","number"]);
const gif_image_cast = Module.cwrap("gif_image_cast", 
    "number", ["number"]);
const timer_info_cast = Module.cwrap("timer_info_cast", 
    "number", ["number"]);
const timer_info_t_get_prop_ctx = Module.cwrap("timer_info_t_get_prop_ctx", 
    "number", ["number"]);
const timer_info_t_get_prop_id = Module.cwrap("timer_info_t_get_prop_id", 
    "number", ["number"]);
const timer_info_t_get_prop_now = Module.cwrap("timer_info_t_get_prop_now", 
    "number", ["number"]);
const timer_info_t_get_prop_user_changed_time = Module.cwrap("timer_info_t_get_prop_user_changed_time", 
    "number", ["number"]);
const idle_info_cast = Module.cwrap("idle_info_cast", 
    "number", ["number"]);
const idle_info_t_get_prop_ctx = Module.cwrap("idle_info_t_get_prop_ctx", 
    "number", ["number"]);
const idle_info_t_get_prop_id = Module.cwrap("idle_info_t_get_prop_id", 
    "number", ["number"]);
const system_bar_create = Module.cwrap("system_bar_create", 
    "number", ["number","number","number","number","number"]);
const system_bar_cast = Module.cwrap("system_bar_cast", 
    "number", ["number"]);

namespace AWTK {
export class Tk {
 public nativeObj;
 constructor(nativeObj) {
   this.nativeObj = nativeObj;
 }

 static quit() {
   return tk_quit();
 }

}

export class AssetInfo {
 public nativeObj;
 constructor(nativeObj) {
   this.nativeObj = nativeObj;
 }

 get type() {
   return asset_info_t_get_prop_type(this.nativeObj);
 }

 get subtype() {
   return asset_info_t_get_prop_subtype(this.nativeObj);
 }

 get isInRom() {
   return asset_info_t_get_prop_is_in_rom(this.nativeObj);
 }

 get size() {
   return asset_info_t_get_prop_size(this.nativeObj);
 }

 get refcount() {
   return asset_info_t_get_prop_refcount(this.nativeObj);
 }

 get name() {
   return asset_info_t_get_prop_name(this.nativeObj);
 }

}

export class AssetsManager {
 public nativeObj;
 constructor(nativeObj) {
   this.nativeObj = nativeObj;
 }

 static instance() {
   return new AssetsManager(assets_manager());
 }

 ref(type, name) {
   return new AssetInfo(assets_manager_ref(this.nativeObj, type, name));
 }

 unref(info) {
   return assets_manager_unref(this.nativeObj, info ? info.nativeObj : null);
 }

}

export enum BitmapFormat {
 NONE = get_BITMAP_FMT_NONE(),
 RGBA8888 = get_BITMAP_FMT_RGBA8888(),
 ABGR8888 = get_BITMAP_FMT_ABGR8888(),
 BGRA8888 = get_BITMAP_FMT_BGRA8888(),
 ARGB8888 = get_BITMAP_FMT_ARGB8888(),
 RGB565 = get_BITMAP_FMT_RGB565(),
 BGR565 = get_BITMAP_FMT_BGR565(),
 RGB888 = get_BITMAP_FMT_RGB888(),
 BGR888 = get_BITMAP_FMT_BGR888(),
};

export enum BitmapFlag {
 NONE = get_BITMAP_FLAG_NONE(),
 OPAQUE = get_BITMAP_FLAG_OPAQUE(),
 IMMUTABLE = get_BITMAP_FLAG_IMMUTABLE(),
 TEXTURE = get_BITMAP_FLAG_TEXTURE(),
 CHANGED = get_BITMAP_FLAG_CHANGED(),
};

export class Bitmap {
 public nativeObj;
 constructor(nativeObj) {
   this.nativeObj = nativeObj;
 }

 static create() {
   return new Bitmap(bitmap_create());
 }

 static createEx(w, h, line_length, format) {
   return new Bitmap(bitmap_create_ex(w, h, line_length, format));
 }

 getBpp() {
   return bitmap_get_bpp(this.nativeObj);
 }

 destroy() {
   return bitmap_destroy(this.nativeObj);
 }

 get w() {
   return bitmap_t_get_prop_w(this.nativeObj);
 }

 get h() {
   return bitmap_t_get_prop_h(this.nativeObj);
 }

 get lineLength() {
   return bitmap_t_get_prop_line_length(this.nativeObj);
 }

 get flags() {
   return bitmap_t_get_prop_flags(this.nativeObj);
 }

 get format() {
   return bitmap_t_get_prop_format(this.nativeObj);
 }

 get name() {
   return bitmap_t_get_prop_name(this.nativeObj);
 }

}

export enum ImageDrawType {
 DEFAULT = get_IMAGE_DRAW_DEFAULT(),
 CENTER = get_IMAGE_DRAW_CENTER(),
 ICON = get_IMAGE_DRAW_ICON(),
 SCALE = get_IMAGE_DRAW_SCALE(),
 SCALE_AUTO = get_IMAGE_DRAW_SCALE_AUTO(),
 SCALE_DOWN = get_IMAGE_DRAW_SCALE_DOWN(),
 SCALE_W = get_IMAGE_DRAW_SCALE_W(),
 SCALE_H = get_IMAGE_DRAW_SCALE_H(),
 REPEAT = get_IMAGE_DRAW_REPEAT(),
 REPEAT_X = get_IMAGE_DRAW_REPEAT_X(),
 REPEAT_Y = get_IMAGE_DRAW_REPEAT_Y(),
 PATCH9 = get_IMAGE_DRAW_PATCH9(),
 PATCH3_X = get_IMAGE_DRAW_PATCH3_X(),
 PATCH3_Y = get_IMAGE_DRAW_PATCH3_Y(),
 PATCH3_X_SCALE_Y = get_IMAGE_DRAW_PATCH3_X_SCALE_Y(),
 PATCH3_Y_SCALE_X = get_IMAGE_DRAW_PATCH3_Y_SCALE_X(),
};

export class Canvas {
 public nativeObj;
 constructor(nativeObj) {
   this.nativeObj = nativeObj;
 }

 getWidth() {
   return canvas_get_width(this.nativeObj);
 }

 getHeight() {
   return canvas_get_height(this.nativeObj);
 }

 getClipRect(r) {
   return canvas_get_clip_rect(this.nativeObj, r ? r.nativeObj : null);
 }

 setClipRect(r) {
   return canvas_set_clip_rect(this.nativeObj, r ? r.nativeObj : null);
 }

 setClipRectEx(r, translate) {
   return canvas_set_clip_rect_ex(this.nativeObj, r ? r.nativeObj : null, translate);
 }

 setFillColor(color) {
   return canvas_set_fill_color_str(this.nativeObj, color);
 }

 setTextColor(color) {
   return canvas_set_text_color_str(this.nativeObj, color);
 }

 setStrokeColor(color) {
   return canvas_set_stroke_color_str(this.nativeObj, color);
 }

 setGlobalAlpha(alpha) {
   return canvas_set_global_alpha(this.nativeObj, alpha);
 }

 translate(dx, dy) {
   return canvas_translate(this.nativeObj, dx, dy);
 }

 untranslate(dx, dy) {
   return canvas_untranslate(this.nativeObj, dx, dy);
 }

 drawVline(x, y, h) {
   return canvas_draw_vline(this.nativeObj, x, y, h);
 }

 drawHline(x, y, w) {
   return canvas_draw_hline(this.nativeObj, x, y, w);
 }

 fillRect(x, y, w, h) {
   return canvas_fill_rect(this.nativeObj, x, y, w, h);
 }

 strokeRect(x, y, w, h) {
   return canvas_stroke_rect(this.nativeObj, x, y, w, h);
 }

 setFont(name, size) {
   return canvas_set_font(this.nativeObj, name, size);
 }

 measureText(str) {
   return canvas_measure_utf8(this.nativeObj, str);
 }

 drawText(str, x, y) {
   return canvas_draw_utf8(this.nativeObj, str, x, y);
 }

 drawTextInRect(str, r) {
   return canvas_draw_utf8_in_rect(this.nativeObj, str, r ? r.nativeObj : null);
 }

 drawIcon(img, cx, cy) {
   return canvas_draw_icon(this.nativeObj, img ? img.nativeObj : null, cx, cy);
 }

 drawImage(img, src, dst) {
   return canvas_draw_image(this.nativeObj, img ? img.nativeObj : null, src ? src.nativeObj : null, dst ? dst.nativeObj : null);
 }

 getVgcanvas() {
   return new Vgcanvas(canvas_get_vgcanvas(this.nativeObj));
 }

 static cast(c) {
   return new Canvas(canvas_cast(c ? (c.nativeObj || c) : null));
 }

 get ox() {
   return canvas_t_get_prop_ox(this.nativeObj);
 }

 get oy() {
   return canvas_t_get_prop_oy(this.nativeObj);
 }

}

export enum ClipBoardDataType {
 NONE = get_CLIP_BOARD_DATA_TYPE_NONE(),
 TEXT = get_CLIP_BOARD_DATA_TYPE_TEXT(),
};

export class ClipBoard {
 public nativeObj;
 constructor(nativeObj) {
   this.nativeObj = nativeObj;
 }

 static setText(text) {
   return clip_board_set_text(text);
 }

 static getText() {
   return clip_board_get_text();
 }

}

export enum EventType {
 POINTER_DOWN = get_EVT_POINTER_DOWN(),
 POINTER_DOWN_ABORT = get_EVT_POINTER_DOWN_ABORT(),
 POINTER_MOVE = get_EVT_POINTER_MOVE(),
 POINTER_UP = get_EVT_POINTER_UP(),
 WHEEL = get_EVT_WHEEL(),
 CONTEXT_MENU = get_EVT_CONTEXT_MENU(),
 POINTER_ENTER = get_EVT_POINTER_ENTER(),
 POINTER_LEAVE = get_EVT_POINTER_LEAVE(),
 LONG_PRESS = get_EVT_LONG_PRESS(),
 CLICK = get_EVT_CLICK(),
 FOCUS = get_EVT_FOCUS(),
 BLUR = get_EVT_BLUR(),
 KEY_DOWN = get_EVT_KEY_DOWN(),
 KEY_REPEAT = get_EVT_KEY_REPEAT(),
 KEY_UP = get_EVT_KEY_UP(),
 WILL_MOVE = get_EVT_WILL_MOVE(),
 MOVE = get_EVT_MOVE(),
 WILL_RESIZE = get_EVT_WILL_RESIZE(),
 RESIZE = get_EVT_RESIZE(),
 WILL_MOVE_RESIZE = get_EVT_WILL_MOVE_RESIZE(),
 MOVE_RESIZE = get_EVT_MOVE_RESIZE(),
 VALUE_WILL_CHANGE = get_EVT_VALUE_WILL_CHANGE(),
 VALUE_CHANGED = get_EVT_VALUE_CHANGED(),
 VALUE_CHANGING = get_EVT_VALUE_CHANGING(),
 PAINT = get_EVT_PAINT(),
 BEFORE_PAINT = get_EVT_BEFORE_PAINT(),
 AFTER_PAINT = get_EVT_AFTER_PAINT(),
 PAINT_DONE = get_EVT_PAINT_DONE(),
 LOCALE_CHANGED = get_EVT_LOCALE_CHANGED(),
 ANIM_START = get_EVT_ANIM_START(),
 ANIM_STOP = get_EVT_ANIM_STOP(),
 ANIM_PAUSE = get_EVT_ANIM_PAUSE(),
 ANIM_ONCE = get_EVT_ANIM_ONCE(),
 ANIM_END = get_EVT_ANIM_END(),
 WINDOW_LOAD = get_EVT_WINDOW_LOAD(),
 WINDOW_WILL_OPEN = get_EVT_WINDOW_WILL_OPEN(),
 WINDOW_OPEN = get_EVT_WINDOW_OPEN(),
 WINDOW_CLOSE = get_EVT_WINDOW_CLOSE(),
 REQUEST_CLOSE_WINDOW = get_EVT_REQUEST_CLOSE_WINDOW(),
 TOP_WINDOW_CHANGED = get_EVT_TOP_WINDOW_CHANGED(),
 IM_COMMIT = get_EVT_IM_COMMIT(),
 IM_SHOW_CANDIDATES = get_EVT_IM_SHOW_CANDIDATES(),
 IM_ACTION = get_EVT_IM_ACTION(),
 IM_ACTION_INFO = get_EVT_IM_ACTION_INFO(),
 DRAG_START = get_EVT_DRAG_START(),
 DRAG = get_EVT_DRAG(),
 DRAG_END = get_EVT_DRAG_END(),
 SCREEN_SAVER = get_EVT_SCREEN_SAVER(),
 REQ_START = get_EVT_REQ_START(),
 USER_START = get_EVT_USER_START(),
};

export class FontManager {
 public nativeObj;
 constructor(nativeObj) {
   this.nativeObj = nativeObj;
 }

 unloadFont(name, size) {
   return font_manager_unload_font(this.nativeObj, name, size);
 }

}

export class Idle {
 public nativeObj;
 constructor(nativeObj) {
   this.nativeObj = nativeObj;
 }

 static add(on_idle, ctx) {
   return idle_add(Module.addFunction(on_idle), ctx);
 }

 static remove(idle_id) {
   return idle_remove(idle_id);
 }

}

export class ImageManager {
 public nativeObj;
 constructor(nativeObj) {
   this.nativeObj = nativeObj;
 }

 static instance() {
   return new ImageManager(image_manager());
 }

 getBitmap(name, image) {
   return image_manager_get_bitmap(this.nativeObj, name, image ? image.nativeObj : null);
 }

}

export enum InputType {
 TEXT = get_INPUT_TEXT(),
 INT = get_INPUT_INT(),
 UINT = get_INPUT_UINT(),
 HEX = get_INPUT_HEX(),
 FLOAT = get_INPUT_FLOAT(),
 UFLOAT = get_INPUT_UFLOAT(),
 EMAIL = get_INPUT_EMAIL(),
 PASSWORD = get_INPUT_PASSWORD(),
 PHONE = get_INPUT_PHONE(),
 CUSTOM = get_INPUT_CUSTOM(),
};

export class InputMethod {
 public nativeObj;
 constructor(nativeObj) {
   this.nativeObj = nativeObj;
 }

 commitText(text) {
   return input_method_commit_text(this.nativeObj, text);
 }

 dispatchKey(key) {
   return input_method_dispatch_key(this.nativeObj, key);
 }

 static instance() {
   return new InputMethod(input_method());
 }

}

export enum KeyCode {
 KEY_RETURN = get_TK_KEY_RETURN(),
 KEY_ESCAPE = get_TK_KEY_ESCAPE(),
 KEY_BACKSPACE = get_TK_KEY_BACKSPACE(),
 KEY_TAB = get_TK_KEY_TAB(),
 KEY_SPACE = get_TK_KEY_SPACE(),
 KEY_EXCLAIM = get_TK_KEY_EXCLAIM(),
 KEY_QUOTEDBL = get_TK_KEY_QUOTEDBL(),
 KEY_HASH = get_TK_KEY_HASH(),
 KEY_PERCENT = get_TK_KEY_PERCENT(),
 KEY_DOLLAR = get_TK_KEY_DOLLAR(),
 KEY_AMPERSAND = get_TK_KEY_AMPERSAND(),
 KEY_QUOTE = get_TK_KEY_QUOTE(),
 KEY_LEFTPAREN = get_TK_KEY_LEFTPAREN(),
 KEY_RIGHTPAREN = get_TK_KEY_RIGHTPAREN(),
 KEY_ASTERISK = get_TK_KEY_ASTERISK(),
 KEY_PLUS = get_TK_KEY_PLUS(),
 KEY_COMMA = get_TK_KEY_COMMA(),
 KEY_MINUS = get_TK_KEY_MINUS(),
 KEY_PERIOD = get_TK_KEY_PERIOD(),
 KEY_SLASH = get_TK_KEY_SLASH(),
 KEY_0 = get_TK_KEY_0(),
 KEY_1 = get_TK_KEY_1(),
 KEY_2 = get_TK_KEY_2(),
 KEY_3 = get_TK_KEY_3(),
 KEY_4 = get_TK_KEY_4(),
 KEY_5 = get_TK_KEY_5(),
 KEY_6 = get_TK_KEY_6(),
 KEY_7 = get_TK_KEY_7(),
 KEY_8 = get_TK_KEY_8(),
 KEY_9 = get_TK_KEY_9(),
 KEY_COLON = get_TK_KEY_COLON(),
 KEY_SEMICOLON = get_TK_KEY_SEMICOLON(),
 KEY_LESS = get_TK_KEY_LESS(),
 KEY_EQUAL = get_TK_KEY_EQUAL(),
 KEY_GREATER = get_TK_KEY_GREATER(),
 KEY_QUESTION = get_TK_KEY_QUESTION(),
 KEY_AT = get_TK_KEY_AT(),
 KEY_LEFTBRACKET = get_TK_KEY_LEFTBRACKET(),
 KEY_BACKSLASH = get_TK_KEY_BACKSLASH(),
 KEY_RIGHTBRACKET = get_TK_KEY_RIGHTBRACKET(),
 KEY_CARET = get_TK_KEY_CARET(),
 KEY_UNDERSCORE = get_TK_KEY_UNDERSCORE(),
 KEY_BACKQUOTE = get_TK_KEY_BACKQUOTE(),
 KEY_a = get_TK_KEY_a(),
 KEY_b = get_TK_KEY_b(),
 KEY_c = get_TK_KEY_c(),
 KEY_d = get_TK_KEY_d(),
 KEY_e = get_TK_KEY_e(),
 KEY_f = get_TK_KEY_f(),
 KEY_g = get_TK_KEY_g(),
 KEY_h = get_TK_KEY_h(),
 KEY_i = get_TK_KEY_i(),
 KEY_j = get_TK_KEY_j(),
 KEY_k = get_TK_KEY_k(),
 KEY_l = get_TK_KEY_l(),
 KEY_m = get_TK_KEY_m(),
 KEY_n = get_TK_KEY_n(),
 KEY_o = get_TK_KEY_o(),
 KEY_p = get_TK_KEY_p(),
 KEY_q = get_TK_KEY_q(),
 KEY_r = get_TK_KEY_r(),
 KEY_s = get_TK_KEY_s(),
 KEY_t = get_TK_KEY_t(),
 KEY_u = get_TK_KEY_u(),
 KEY_v = get_TK_KEY_v(),
 KEY_w = get_TK_KEY_w(),
 KEY_x = get_TK_KEY_x(),
 KEY_y = get_TK_KEY_y(),
 KEY_z = get_TK_KEY_z(),
 KEY_A = get_TK_KEY_A(),
 KEY_B = get_TK_KEY_B(),
 KEY_C = get_TK_KEY_C(),
 KEY_D = get_TK_KEY_D(),
 KEY_E = get_TK_KEY_E(),
 KEY_F = get_TK_KEY_F(),
 KEY_G = get_TK_KEY_G(),
 KEY_H = get_TK_KEY_H(),
 KEY_I = get_TK_KEY_I(),
 KEY_J = get_TK_KEY_J(),
 KEY_K = get_TK_KEY_K(),
 KEY_L = get_TK_KEY_L(),
 KEY_M = get_TK_KEY_M(),
 KEY_N = get_TK_KEY_N(),
 KEY_O = get_TK_KEY_O(),
 KEY_P = get_TK_KEY_P(),
 KEY_Q = get_TK_KEY_Q(),
 KEY_R = get_TK_KEY_R(),
 KEY_S = get_TK_KEY_S(),
 KEY_T = get_TK_KEY_T(),
 KEY_U = get_TK_KEY_U(),
 KEY_V = get_TK_KEY_V(),
 KEY_W = get_TK_KEY_W(),
 KEY_X = get_TK_KEY_X(),
 KEY_Y = get_TK_KEY_Y(),
 KEY_Z = get_TK_KEY_Z(),
 KEY_DOT = get_TK_KEY_DOT(),
 KEY_DELETE = get_TK_KEY_DELETE(),
 KEY_LEFTBRACE = get_TK_KEY_LEFTBRACE(),
 KEY_RIGHTBRACE = get_TK_KEY_RIGHTBRACE(),
};

export class LocaleInfo {
 public nativeObj;
 constructor(nativeObj) {
   this.nativeObj = nativeObj;
 }

 static instance() {
   return new LocaleInfo(locale_info());
 }

 tr(text) {
   return locale_info_tr(this.nativeObj, text);
 }

 change(language, country) {
   return locale_info_change(this.nativeObj, language, country);
 }

 on(type, on_event, ctx) {
   return locale_info_on(this.nativeObj, type, Module.addFunction(on_event), ctx);
 }

 off(id) {
   return locale_info_off(this.nativeObj, id);
 }

}

export enum StyleId {
 _ID_BG_COLOR = get_STYLE_ID_BG_COLOR(),
 _ID_FG_COLOR = get_STYLE_ID_FG_COLOR(),
 _ID_MASK_COLOR = get_STYLE_ID_MASK_COLOR(),
 _ID_FONT_NAME = get_STYLE_ID_FONT_NAME(),
 _ID_FONT_SIZE = get_STYLE_ID_FONT_SIZE(),
 _ID_FONT_STYLE = get_STYLE_ID_FONT_STYLE(),
 _ID_TEXT_COLOR = get_STYLE_ID_TEXT_COLOR(),
 _ID_TIPS_TEXT_COLOR = get_STYLE_ID_TIPS_TEXT_COLOR(),
 _ID_TEXT_ALIGN_H = get_STYLE_ID_TEXT_ALIGN_H(),
 _ID_TEXT_ALIGN_V = get_STYLE_ID_TEXT_ALIGN_V(),
 _ID_BORDER_COLOR = get_STYLE_ID_BORDER_COLOR(),
 _ID_BORDER = get_STYLE_ID_BORDER(),
 _ID_BG_IMAGE = get_STYLE_ID_BG_IMAGE(),
 _ID_BG_IMAGE_DRAW_TYPE = get_STYLE_ID_BG_IMAGE_DRAW_TYPE(),
 _ID_ICON = get_STYLE_ID_ICON(),
 _ID_FG_IMAGE = get_STYLE_ID_FG_IMAGE(),
 _ID_FG_IMAGE_DRAW_TYPE = get_STYLE_ID_FG_IMAGE_DRAW_TYPE(),
 _ID_MARGIN = get_STYLE_ID_MARGIN(),
 _ID_ICON_AT = get_STYLE_ID_ICON_AT(),
 _ID_ACTIVE_ICON = get_STYLE_ID_ACTIVE_ICON(),
 _ID_X_OFFSET = get_STYLE_ID_X_OFFSET(),
 _ID_Y_OFFSET = get_STYLE_ID_Y_OFFSET(),
 _ID_SELECTED_BG_COLOR = get_STYLE_ID_SELECTED_BG_COLOR(),
 _ID_SELECTED_FG_COLOR = get_STYLE_ID_SELECTED_FG_COLOR(),
 _ID_SELECTED_TEXT_COLOR = get_STYLE_ID_SELECTED_TEXT_COLOR(),
 _ID_ROUND_RADIUS = get_STYLE_ID_ROUND_RADIUS(),
};

export class Style {
 public nativeObj;
 constructor(nativeObj) {
   this.nativeObj = nativeObj;
 }

 notifyWidgetStateChanged(widget) {
   return style_notify_widget_state_changed(this.nativeObj, widget ? widget.nativeObj : null);
 }

 isValid() {
   return style_is_valid(this.nativeObj);
 }

 getInt(name, defval) {
   return style_get_int(this.nativeObj, name, defval);
 }

 getStr(name, defval) {
   return style_get_str(this.nativeObj, name, defval);
 }

}

export class Theme {
 public nativeObj;
 constructor(nativeObj) {
   this.nativeObj = nativeObj;
 }

 static instance() {
   return new Theme(theme());
 }

}

export class Timer {
 public nativeObj;
 constructor(nativeObj) {
   this.nativeObj = nativeObj;
 }

 static add(on_timer, ctx, duration) {
   return timer_add(Module.addFunction(on_timer), ctx, duration);
 }

 static remove(timer_id) {
   return timer_remove(timer_id);
 }

 static reset(timer_id) {
   return timer_reset(timer_id);
 }

}

export enum AlignV {
 NONE = get_ALIGN_V_NONE(),
 MIDDLE = get_ALIGN_V_MIDDLE(),
 TOP = get_ALIGN_V_TOP(),
 BOTTOM = get_ALIGN_V_BOTTOM(),
};

export enum AlignH {
 NONE = get_ALIGN_H_NONE(),
 CENTER = get_ALIGN_H_CENTER(),
 LEFT = get_ALIGN_H_LEFT(),
 RIGHT = get_ALIGN_H_RIGHT(),
};

export class Vgcanvas {
 public nativeObj;
 constructor(nativeObj) {
   this.nativeObj = nativeObj;
 }

 static cast(vg) {
   return new Vgcanvas(vgcanvas_cast(vg ? (vg.nativeObj || vg) : null));
 }

 flush() {
   return vgcanvas_flush(this.nativeObj);
 }

 beginPath() {
   return vgcanvas_begin_path(this.nativeObj);
 }

 moveTo(x, y) {
   return vgcanvas_move_to(this.nativeObj, x, y);
 }

 lineTo(x, y) {
   return vgcanvas_line_to(this.nativeObj, x, y);
 }

 quadTo(cpx, cpy, x, y) {
   return vgcanvas_quad_to(this.nativeObj, cpx, cpy, x, y);
 }

 bezierTo(cp1x, cp1y, cp2x, cp2y, x, y) {
   return vgcanvas_bezier_to(this.nativeObj, cp1x, cp1y, cp2x, cp2y, x, y);
 }

 arcTo(x1, y1, x2, y2, r) {
   return vgcanvas_arc_to(this.nativeObj, x1, y1, x2, y2, r);
 }

 arc(x, y, r, start_angle, end_angle, ccw) {
   return vgcanvas_arc(this.nativeObj, x, y, r, start_angle, end_angle, ccw);
 }

 isPointInPath(x, y) {
   return vgcanvas_is_point_in_path(this.nativeObj, x, y);
 }

 rect(x, y, w, h) {
   return vgcanvas_rect(this.nativeObj, x, y, w, h);
 }

 roundedRect(x, y, w, h, r) {
   return vgcanvas_rounded_rect(this.nativeObj, x, y, w, h, r);
 }

 ellipse(x, y, rx, ry) {
   return vgcanvas_ellipse(this.nativeObj, x, y, rx, ry);
 }

 closePath() {
   return vgcanvas_close_path(this.nativeObj);
 }

 rotate(rad) {
   return vgcanvas_rotate(this.nativeObj, rad);
 }

 scale(x, y) {
   return vgcanvas_scale(this.nativeObj, x, y);
 }

 translate(x, y) {
   return vgcanvas_translate(this.nativeObj, x, y);
 }

 transform(a, b, c, d, e, f) {
   return vgcanvas_transform(this.nativeObj, a, b, c, d, e, f);
 }

 setTransform(a, b, c, d, e, f) {
   return vgcanvas_set_transform(this.nativeObj, a, b, c, d, e, f);
 }

 clipRect(x, y, w, h) {
   return vgcanvas_clip_rect(this.nativeObj, x, y, w, h);
 }

 fill() {
   return vgcanvas_fill(this.nativeObj);
 }

 stroke() {
   return vgcanvas_stroke(this.nativeObj);
 }

 paint(stroke, img) {
   return vgcanvas_paint(this.nativeObj, stroke, img ? img.nativeObj : null);
 }

 setFont(font) {
   return vgcanvas_set_font(this.nativeObj, font);
 }

 setFontSize(font) {
   return vgcanvas_set_font_size(this.nativeObj, font);
 }

 setTextAlign(value) {
   return vgcanvas_set_text_align(this.nativeObj, value);
 }

 setTextBaseline(value) {
   return vgcanvas_set_text_baseline(this.nativeObj, value);
 }

 fillText(text, x, y, max_width) {
   return vgcanvas_fill_text(this.nativeObj, text, x, y, max_width);
 }

 measureText(text) {
   return vgcanvas_measure_text(this.nativeObj, text);
 }

 drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh) {
   return vgcanvas_draw_image(this.nativeObj, img ? img.nativeObj : null, sx, sy, sw, sh, dx, dy, dw, dh);
 }

 drawIcon(img, sx, sy, sw, sh, dx, dy, dw, dh) {
   return vgcanvas_draw_icon(this.nativeObj, img ? img.nativeObj : null, sx, sy, sw, sh, dx, dy, dw, dh);
 }

 setAntialias(value) {
   return vgcanvas_set_antialias(this.nativeObj, value);
 }

 setGlobalAlpha(alpha) {
   return vgcanvas_set_global_alpha(this.nativeObj, alpha);
 }

 setLineWidth(value) {
   return vgcanvas_set_line_width(this.nativeObj, value);
 }

 setFillColor(color) {
   return vgcanvas_set_fill_color_str(this.nativeObj, color);
 }

 setStrokeColor(color) {
   return vgcanvas_set_stroke_color_str(this.nativeObj, color);
 }

 setLineCap(value) {
   return vgcanvas_set_line_cap(this.nativeObj, value);
 }

 setLineJoin(value) {
   return vgcanvas_set_line_join(this.nativeObj, value);
 }

 setMiterLimit(value) {
   return vgcanvas_set_miter_limit(this.nativeObj, value);
 }

 save() {
   return vgcanvas_save(this.nativeObj);
 }

 restore() {
   return vgcanvas_restore(this.nativeObj);
 }

 get w() {
   return vgcanvas_t_get_prop_w(this.nativeObj);
 }

 get h() {
   return vgcanvas_t_get_prop_h(this.nativeObj);
 }

 get ratio() {
   return vgcanvas_t_get_prop_ratio(this.nativeObj);
 }

 get antiAlias() {
   return vgcanvas_t_get_prop_anti_alias(this.nativeObj);
 }

 get lineWidth() {
   return vgcanvas_t_get_prop_line_width(this.nativeObj);
 }

 get globalAlpha() {
   return vgcanvas_t_get_prop_global_alpha(this.nativeObj);
 }

 get miterLimit() {
   return vgcanvas_t_get_prop_miter_limit(this.nativeObj);
 }

 get lineCap() {
   return vgcanvas_t_get_prop_line_cap(this.nativeObj);
 }

 get lineJoin() {
   return vgcanvas_t_get_prop_line_join(this.nativeObj);
 }

 get font() {
   return vgcanvas_t_get_prop_font(this.nativeObj);
 }

 get fontSize() {
   return vgcanvas_t_get_prop_font_size(this.nativeObj);
 }

 get textAlign() {
   return vgcanvas_t_get_prop_text_align(this.nativeObj);
 }

 get textBaseline() {
   return vgcanvas_t_get_prop_text_baseline(this.nativeObj);
 }

}

export enum WidgetProp {
 X = get_WIDGET_PROP_X(),
 Y = get_WIDGET_PROP_Y(),
 W = get_WIDGET_PROP_W(),
 H = get_WIDGET_PROP_H(),
 HIGHLIGHT = get_WIDGET_PROP_HIGHLIGHT(),
 BAR_SIZE = get_WIDGET_PROP_BAR_SIZE(),
 OPACITY = get_WIDGET_PROP_OPACITY(),
 MIN_W = get_WIDGET_PROP_MIN_W(),
 MAX_W = get_WIDGET_PROP_MAX_W(),
 CHILDREN_LAYOUT = get_WIDGET_PROP_CHILDREN_LAYOUT(),
 LAYOUT = get_WIDGET_PROP_LAYOUT(),
 SELF_LAYOUT = get_WIDGET_PROP_SELF_LAYOUT(),
 LAYOUT_W = get_WIDGET_PROP_LAYOUT_W(),
 LAYOUT_H = get_WIDGET_PROP_LAYOUT_H(),
 VIRTUAL_W = get_WIDGET_PROP_VIRTUAL_W(),
 VIRTUAL_H = get_WIDGET_PROP_VIRTUAL_H(),
 NAME = get_WIDGET_PROP_NAME(),
 CLOSABLE = get_WIDGET_PROP_CLOSABLE(),
 CURSOR = get_WIDGET_PROP_CURSOR(),
 VALUE = get_WIDGET_PROP_VALUE(),
 LENGTH = get_WIDGET_PROP_LENGTH(),
 TEXT = get_WIDGET_PROP_TEXT(),
 TR_TEXT = get_WIDGET_PROP_TR_TEXT(),
 STYLE = get_WIDGET_PROP_STYLE(),
 ENABLE = get_WIDGET_PROP_ENABLE(),
 FLOATING = get_WIDGET_PROP_FLOATING(),
 MARGIN = get_WIDGET_PROP_MARGIN(),
 SPACING = get_WIDGET_PROP_SPACING(),
 LEFT_MARGIN = get_WIDGET_PROP_LEFT_MARGIN(),
 RIGHT_MARGIN = get_WIDGET_PROP_RIGHT_MARGIN(),
 TOP_MARGIN = get_WIDGET_PROP_TOP_MARGIN(),
 BOTTOM_MARGIN = get_WIDGET_PROP_BOTTOM_MARGIN(),
 STEP = get_WIDGET_PROP_STEP(),
 VISIBLE = get_WIDGET_PROP_VISIBLE(),
 SENSITIVE = get_WIDGET_PROP_SENSITIVE(),
 ANIMATION = get_WIDGET_PROP_ANIMATION(),
 ANIM_HINT = get_WIDGET_PROP_ANIM_HINT(),
 FULLSCREEN = get_WIDGET_PROP_FULLSCREEN(),
 OPEN_ANIM_HINT = get_WIDGET_PROP_OPEN_ANIM_HINT(),
 CLOSE_ANIM_HINT = get_WIDGET_PROP_CLOSE_ANIM_HINT(),
 MIN = get_WIDGET_PROP_MIN(),
 TIPS = get_WIDGET_PROP_TIPS(),
 INPUT_TYPE = get_WIDGET_PROP_INPUT_TYPE(),
 READONLY = get_WIDGET_PROP_READONLY(),
 PASSWORD_VISIBLE = get_WIDGET_PROP_PASSWORD_VISIBLE(),
 ACTIVE = get_WIDGET_PROP_ACTIVE(),
 VERTICAL = get_WIDGET_PROP_VERTICAL(),
 SHOW_TEXT = get_WIDGET_PROP_SHOW_TEXT(),
 XOFFSET = get_WIDGET_PROP_XOFFSET(),
 YOFFSET = get_WIDGET_PROP_YOFFSET(),
 ALIGN_V = get_WIDGET_PROP_ALIGN_V(),
 ALIGN_H = get_WIDGET_PROP_ALIGN_H(),
 AUTO_PLAY = get_WIDGET_PROP_AUTO_PLAY(),
 LOOP = get_WIDGET_PROP_LOOP(),
 AUTO_FIX = get_WIDGET_PROP_AUTO_FIX(),
 X_MIN = get_WIDGET_PROP_X_MIN(),
 X_MAX = get_WIDGET_PROP_X_MAX(),
 Y_MIN = get_WIDGET_PROP_Y_MIN(),
 Y_MAX = get_WIDGET_PROP_Y_MAX(),
 MAX = get_WIDGET_PROP_MAX(),
 ROW = get_WIDGET_PROP_ROW(),
 STATE_FOR_STYLE = get_WIDGET_PROP_STATE_FOR_STYLE(),
 THEME = get_WIDGET_PROP_THEME(),
 STAGE = get_WIDGET_PROP_STAGE(),
 IMAGE_MANAGER = get_WIDGET_PROP_IMAGE_MANAGER(),
 ASSETS_MANAGER = get_WIDGET_PROP_ASSETS_MANAGER(),
 LOCALE_INFO = get_WIDGET_PROP_LOCALE_INFO(),
 FONT_MANAGER = get_WIDGET_PROP_FONT_MANAGER(),
 THEME_OBJ = get_WIDGET_PROP_THEME_OBJ(),
 DEFAULT_THEME_OBJ = get_WIDGET_PROP_DEFAULT_THEME_OBJ(),
 ITEM_WIDTH = get_WIDGET_PROP_ITEM_WIDTH(),
 ITEM_HEIGHT = get_WIDGET_PROP_ITEM_HEIGHT(),
 DEFAULT_ITEM_HEIGHT = get_WIDGET_PROP_DEFAULT_ITEM_HEIGHT(),
 XSLIDABLE = get_WIDGET_PROP_XSLIDABLE(),
 YSLIDABLE = get_WIDGET_PROP_YSLIDABLE(),
 REPEAT = get_WIDGET_PROP_REPEAT(),
 ENABLE_LONG_PRESS = get_WIDGET_PROP_ENABLE_LONG_PRESS(),
 ANIMATABLE = get_WIDGET_PROP_ANIMATABLE(),
 AUTO_HIDE_SCROLL_BAR = get_WIDGET_PROP_AUTO_HIDE_SCROLL_BAR(),
 IMAGE = get_WIDGET_PROP_IMAGE(),
 FORMAT = get_WIDGET_PROP_FORMAT(),
 DRAW_TYPE = get_WIDGET_PROP_DRAW_TYPE(),
 SELECTABLE = get_WIDGET_PROP_SELECTABLE(),
 CLICKABLE = get_WIDGET_PROP_CLICKABLE(),
 SCALE_X = get_WIDGET_PROP_SCALE_X(),
 SCALE_Y = get_WIDGET_PROP_SCALE_Y(),
 ANCHOR_X = get_WIDGET_PROP_ANCHOR_X(),
 ANCHOR_Y = get_WIDGET_PROP_ANCHOR_Y(),
 ROTATION = get_WIDGET_PROP_ROTATION(),
 COMPACT = get_WIDGET_PROP_COMPACT(),
 ICON = get_WIDGET_PROP_ICON(),
 OPTIONS = get_WIDGET_PROP_OPTIONS(),
 SELECTED = get_WIDGET_PROP_SELECTED(),
 CHECKED = get_WIDGET_PROP_CHECKED(),
 ACTIVE_ICON = get_WIDGET_PROP_ACTIVE_ICON(),
 OPEN_WINDOW = get_WIDGET_PROP_OPEN_WINDOW(),
 SELECTED_INDEX = get_WIDGET_PROP_SELECTED_INDEX(),
 CLOSE_WHEN_CLICK = get_WIDGET_PROP_CLOSE_WHEN_CLICK(),
 CLOSE_WHEN_CLICK_OUTSIDE = get_WIDGET_PROP_CLOSE_WHEN_CLICK_OUTSIDE(),
 LINE_GAP = get_WIDGET_PROP_LINE_GAP(),
 BG_COLOR = get_WIDGET_PROP_BG_COLOR(),
 BORDER_COLOR = get_WIDGET_PROP_BORDER_COLOR(),
 DELAY = get_WIDGET_PROP_DELAY(),
 IS_KEYBOARD = get_WIDGET_PROP_IS_KEYBOARD(),
 FOCUS = get_WIDGET_PROP_FOCUS(),
 FOCUSABLE = get_WIDGET_PROP_FOCUSABLE(),
};

export enum WidgetType {
 NONE = get_WIDGET_TYPE_NONE(),
 WINDOW_MANAGER = get_WIDGET_TYPE_WINDOW_MANAGER(),
 NORMAL_WINDOW = get_WIDGET_TYPE_NORMAL_WINDOW(),
 TOOL_BAR = get_WIDGET_TYPE_TOOL_BAR(),
 DIALOG = get_WIDGET_TYPE_DIALOG(),
 POPUP = get_WIDGET_TYPE_POPUP(),
 SYSTEM_BAR = get_WIDGET_TYPE_SYSTEM_BAR(),
 SPRITE = get_WIDGET_TYPE_SPRITE(),
 KEYBOARD = get_WIDGET_TYPE_KEYBOARD(),
 DND = get_WIDGET_TYPE_DND(),
 LABEL = get_WIDGET_TYPE_LABEL(),
 BUTTON = get_WIDGET_TYPE_BUTTON(),
 IMAGE = get_WIDGET_TYPE_IMAGE(),
 EDIT = get_WIDGET_TYPE_EDIT(),
 PROGRESS_BAR = get_WIDGET_TYPE_PROGRESS_BAR(),
 GROUP_BOX = get_WIDGET_TYPE_GROUP_BOX(),
 CHECK_BUTTON = get_WIDGET_TYPE_CHECK_BUTTON(),
 RADIO_BUTTON = get_WIDGET_TYPE_RADIO_BUTTON(),
 DIALOG_TITLE = get_WIDGET_TYPE_DIALOG_TITLE(),
 DIALOG_CLIENT = get_WIDGET_TYPE_DIALOG_CLIENT(),
 SLIDER = get_WIDGET_TYPE_SLIDER(),
 VIEW = get_WIDGET_TYPE_VIEW(),
 COMBO_BOX = get_WIDGET_TYPE_COMBO_BOX(),
 COMBO_BOX_ITEM = get_WIDGET_TYPE_COMBO_BOX_ITEM(),
 SLIDE_VIEW = get_WIDGET_TYPE_SLIDE_VIEW(),
 PAGES = get_WIDGET_TYPE_PAGES(),
 TAB_BUTTON = get_WIDGET_TYPE_TAB_BUTTON(),
 TAB_CONTROL = get_WIDGET_TYPE_TAB_CONTROL(),
 TAB_BUTTON_GROUP = get_WIDGET_TYPE_TAB_BUTTON_GROUP(),
 BUTTON_GROUP = get_WIDGET_TYPE_BUTTON_GROUP(),
 CANDIDATES = get_WIDGET_TYPE_CANDIDATES(),
 SPIN_BOX = get_WIDGET_TYPE_SPIN_BOX(),
 DRAGGER = get_WIDGET_TYPE_DRAGGER(),
 SCROLL_BAR = get_WIDGET_TYPE_SCROLL_BAR(),
 SCROLL_BAR_DESKTOP = get_WIDGET_TYPE_SCROLL_BAR_DESKTOP(),
 SCROLL_BAR_MOBILE = get_WIDGET_TYPE_SCROLL_BAR_MOBILE(),
 SCROLL_VIEW = get_WIDGET_TYPE_SCROLL_VIEW(),
 LIST_VIEW = get_WIDGET_TYPE_LIST_VIEW(),
 LIST_VIEW_H = get_WIDGET_TYPE_LIST_VIEW_H(),
 LIST_ITEM = get_WIDGET_TYPE_LIST_ITEM(),
 COLOR_PICKER = get_WIDGET_TYPE_COLOR_PICKER(),
 COLOR_COMPONENT = get_WIDGET_TYPE_COLOR_COMPONENT(),
 COLOR_TILE = get_WIDGET_TYPE_COLOR_TILE(),
 RICH_TEXT = get_WIDGET_TYPE_RICH_TEXT(),
 APP_BAR = get_WIDGET_TYPE_APP_BAR(),
 GRID = get_WIDGET_TYPE_GRID(),
 GRID_ITEM = get_WIDGET_TYPE_GRID_ITEM(),
 ROW = get_WIDGET_TYPE_ROW(),
 COLUMN = get_WIDGET_TYPE_COLUMN(),
 CALIBRATION_WIN = get_WIDGET_TYPE_CALIBRATION_WIN(),
};

export enum WindowStage {
 NONE = get_WINDOW_STAGE_NONE(),
 CREATED = get_WINDOW_STAGE_CREATED(),
 OPENED = get_WINDOW_STAGE_OPENED(),
 CLOSED = get_WINDOW_STAGE_CLOSED(),
};

export enum WindowClosable {
 YES = get_WINDOW_CLOSABLE_YES(),
 NO = get_WINDOW_CLOSABLE_NO(),
 CONFIRM = get_WINDOW_CLOSABLE_CONFIRM(),
};

export enum WidgetState {
 STATE_NONE = get_WIDGET_STATE_NONE(),
 STATE_NORMAL = get_WIDGET_STATE_NORMAL(),
 STATE_PRESSED = get_WIDGET_STATE_PRESSED(),
 STATE_OVER = get_WIDGET_STATE_OVER(),
 STATE_DISABLE = get_WIDGET_STATE_DISABLE(),
 STATE_FOCUSED = get_WIDGET_STATE_FOCUSED(),
 STATE_CHECKED = get_WIDGET_STATE_CHECKED(),
 STATE_UNCHECKED = get_WIDGET_STATE_UNCHECKED(),
 STATE_EMPTY = get_WIDGET_STATE_EMPTY(),
 STATE_ERROR = get_WIDGET_STATE_ERROR(),
 STATE_SELECTED = get_WIDGET_STATE_SELECTED(),
 STATE_NORMAL_OF_CHECKED = get_WIDGET_STATE_NORMAL_OF_CHECKED(),
 STATE_PRESSED_OF_CHECKED = get_WIDGET_STATE_PRESSED_OF_CHECKED(),
 STATE_OVER_OF_CHECKED = get_WIDGET_STATE_OVER_OF_CHECKED(),
 STATE_NORMAL_OF_ACTIVE = get_WIDGET_STATE_NORMAL_OF_ACTIVE(),
 STATE_PRESSED_OF_ACTIVE = get_WIDGET_STATE_PRESSED_OF_ACTIVE(),
 STATE_OVER_OF_ACTIVE = get_WIDGET_STATE_OVER_OF_ACTIVE(),
};

export class Widget {
 public nativeObj;
 constructor(nativeObj) {
   this.nativeObj = nativeObj;
 }

 countChildren() {
   return widget_count_children(this.nativeObj);
 }

 getChild(index) {
   return new Widget(widget_get_child(this.nativeObj, index));
 }

 indexOf() {
   return widget_index_of(this.nativeObj);
 }

 move(x, y) {
   return widget_move(this.nativeObj, x, y);
 }

 resize(w, h) {
   return widget_resize(this.nativeObj, w, h);
 }

 moveResize(x, y, w, h) {
   return widget_move_resize(this.nativeObj, x, y, w, h);
 }

 setValue(value) {
   return widget_set_value(this.nativeObj, value);
 }

 animateValueTo(value, duration) {
   return widget_animate_value_to(this.nativeObj, value, duration);
 }

 addValue(delta) {
   return widget_add_value(this.nativeObj, delta);
 }

 useStyle(style) {
   return widget_use_style(this.nativeObj, style);
 }

 setText(text) {
   return widget_set_text_utf8(this.nativeObj, text);
 }

 setTrText(text) {
   return widget_set_tr_text(this.nativeObj, text);
 }

 getValue() {
   return widget_get_value(this.nativeObj);
 }

 getText() {
   return widget_get_text(this.nativeObj);
 }

 setName(name) {
   return widget_set_name(this.nativeObj, name);
 }

 setCursor(cursor) {
   return widget_set_cursor(this.nativeObj, cursor);
 }

 setAnimation(animation) {
   return widget_set_animation(this.nativeObj, animation);
 }

 createAnimator(animation) {
   return widget_create_animator(this.nativeObj, animation);
 }

 startAnimator(name) {
   return widget_start_animator(this.nativeObj, name);
 }

 setAnimatorTimeScale(name, time_scale) {
   return widget_set_animator_time_scale(this.nativeObj, name, time_scale);
 }

 pauseAnimator(name) {
   return widget_pause_animator(this.nativeObj, name);
 }

 stopAnimator(name) {
   return widget_stop_animator(this.nativeObj, name);
 }

 destroyAnimator(name) {
   return widget_destroy_animator(this.nativeObj, name);
 }

 setEnable(enable) {
   return widget_set_enable(this.nativeObj, enable);
 }

 setFloating(floating) {
   return widget_set_floating(this.nativeObj, floating);
 }

 setFocused(focused) {
   return widget_set_focused(this.nativeObj, focused);
 }

 child(name) {
   return new Widget(widget_child(this.nativeObj, name));
 }

 lookup(name, recursive) {
   return new Widget(widget_lookup(this.nativeObj, name, recursive));
 }

 lookupByType(type, recursive) {
   return new Widget(widget_lookup_by_type(this.nativeObj, type, recursive));
 }

 setVisible(visible, recursive) {
   return widget_set_visible(this.nativeObj, visible, recursive);
 }

 setSensitive(sensitive) {
   return widget_set_sensitive(this.nativeObj, sensitive);
 }

 on(type, on_event, ctx) {
   return widget_on(this.nativeObj, type, Module.addFunction(on_event), ctx);
 }

 off(id) {
   return widget_off(this.nativeObj, id);
 }

 invalidateForce(r) {
   return widget_invalidate_force(this.nativeObj, r ? r.nativeObj : null);
 }

 setPropStr(name, v) {
   return widget_set_prop_str(this.nativeObj, name, v);
 }

 getPropStr(name, defval) {
   return widget_get_prop_str(this.nativeObj, name, defval);
 }

 setPropInt(name, v) {
   return widget_set_prop_int(this.nativeObj, name, v);
 }

 getPropInt(name, defval) {
   return widget_get_prop_int(this.nativeObj, name, defval);
 }

 setPropBool(name, v) {
   return widget_set_prop_bool(this.nativeObj, name, v);
 }

 getPropBool(name, defval) {
   return widget_get_prop_bool(this.nativeObj, name, defval);
 }

 isWindowOpened() {
   return widget_is_window_opened(this.nativeObj);
 }

 isWindow() {
   return widget_is_window(this.nativeObj);
 }

 isDesigningWindow() {
   return widget_is_designing_window(this.nativeObj);
 }

 isWindowManager() {
   return widget_is_window_manager(this.nativeObj);
 }

 foreach(visit, ctx) {
   return widget_foreach(this.nativeObj, visit, ctx);
 }

 getWindow() {
   return new Widget(widget_get_window(this.nativeObj));
 }

 getWindowManager() {
   return new Widget(widget_get_window_manager(this.nativeObj));
 }

 getType() {
   return widget_get_type(this.nativeObj);
 }

 clone(parent) {
   return new Widget(widget_clone(this.nativeObj, parent ? parent.nativeObj : null));
 }

 equal(other) {
   return widget_equal(this.nativeObj, other ? other.nativeObj : null);
 }

 static cast(widget) {
   return new Widget(widget_cast(widget ? (widget.nativeObj || widget) : null));
 }

 destroy() {
   return widget_destroy(this.nativeObj);
 }

 layout() {
   return widget_layout(this.nativeObj);
 }

 setSelfLayout(params) {
   return widget_set_self_layout(this.nativeObj, params);
 }

 setChildrenLayout(params) {
   return widget_set_children_layout(this.nativeObj, params);
 }

 setSelfLayoutParams(x, y, w, h) {
   return widget_set_self_layout_params(this.nativeObj, x, y, w, h);
 }

 get x() {
   return widget_t_get_prop_x(this.nativeObj);
 }

 get y() {
   return widget_t_get_prop_y(this.nativeObj);
 }

 get w() {
   return widget_t_get_prop_w(this.nativeObj);
 }

 get h() {
   return widget_t_get_prop_h(this.nativeObj);
 }

 get name() {
   return widget_t_get_prop_name(this.nativeObj);
 }

 get trText() {
   return widget_t_get_prop_tr_text(this.nativeObj);
 }

 get style() {
   return widget_t_get_prop_style(this.nativeObj);
 }

 get animation() {
   return widget_t_get_prop_animation(this.nativeObj);
 }

 get enable() {
   return widget_t_get_prop_enable(this.nativeObj);
 }

 set visible(value) {
   widget_t_set_prop_visible(this.nativeObj, value);
 }

 get visible() {
   return widget_t_get_prop_visible(this.nativeObj);
 }

 set sensitive(value) {
   widget_t_set_prop_sensitive(this.nativeObj, value);
 }

 get sensitive() {
   return widget_t_get_prop_sensitive(this.nativeObj);
 }

 get floating() {
   return widget_t_get_prop_floating(this.nativeObj);
 }

}

export enum AssetType {
 NONE = get_ASSET_TYPE_NONE(),
 FONT = get_ASSET_TYPE_FONT(),
 IMAGE = get_ASSET_TYPE_IMAGE(),
 STYLE = get_ASSET_TYPE_STYLE(),
 UI = get_ASSET_TYPE_UI(),
 XML = get_ASSET_TYPE_XML(),
 STRINGS = get_ASSET_TYPE_STRINGS(),
 SCRIPT = get_ASSET_TYPE_SCRIPT(),
 DATA = get_ASSET_TYPE_DATA(),
};

export class Color {
 public nativeObj;
 constructor(nativeObj) {
   this.nativeObj = nativeObj;
 }

 static create(r, b, g, a) {
   return new Color(color_create(r, b, g, a));
 }

 fromStr(str) {
   return new Color(color_from_str(this.nativeObj, str));
 }

 r() {
   return color_r(this.nativeObj);
 }

 g() {
   return color_g(this.nativeObj);
 }

 b() {
   return color_b(this.nativeObj);
 }

 a() {
   return color_a(this.nativeObj);
 }

 static cast(color) {
   return new Color(color_cast(color ? (color.nativeObj || color) : null));
 }

 destroy() {
   return color_destroy(this.nativeObj);
 }

 set color(value) {
   color_t_set_prop_color(this.nativeObj, value);
 }

 get color() {
   return color_t_get_prop_color(this.nativeObj);
 }

}

export class DateTime {
 public nativeObj;
 constructor(nativeObj) {
   this.nativeObj = nativeObj;
 }

 static create() {
   return new DateTime(date_time_create());
 }

 destroy() {
   return date_time_destroy(this.nativeObj);
 }

 get second() {
   return date_time_t_get_prop_second(this.nativeObj);
 }

 get minute() {
   return date_time_t_get_prop_minute(this.nativeObj);
 }

 get hour() {
   return date_time_t_get_prop_hour(this.nativeObj);
 }

 get day() {
   return date_time_t_get_prop_day(this.nativeObj);
 }

 get wday() {
   return date_time_t_get_prop_wday(this.nativeObj);
 }

 get month() {
   return date_time_t_get_prop_month(this.nativeObj);
 }

 get year() {
   return date_time_t_get_prop_year(this.nativeObj);
 }

}

export class Emitter {
 public nativeObj;
 constructor(nativeObj) {
   this.nativeObj = nativeObj;
 }

 static create() {
   return new Emitter(emitter_create());
 }

 dispatch(e) {
   return emitter_dispatch(this.nativeObj, e ? e.nativeObj : null);
 }

 dispatchSimpleEvent(type) {
   return emitter_dispatch_simple_event(this.nativeObj, type);
 }

 on(type, on_event, ctx) {
   return emitter_on(this.nativeObj, type, Module.addFunction(on_event), ctx);
 }

 off(id) {
   return emitter_off(this.nativeObj, id);
 }

 enable() {
   return emitter_enable(this.nativeObj);
 }

 disable() {
   return emitter_disable(this.nativeObj);
 }

 size() {
   return emitter_size(this.nativeObj);
 }

 destroy() {
   return emitter_destroy(this.nativeObj);
 }

 static cast(emitter) {
   return new Emitter(emitter_cast(emitter ? (emitter.nativeObj || emitter) : null));
 }

}

export enum EventBaseType {
 NONE = get_EVT_NONE(),
 PROP_WILL_CHANGE = get_EVT_PROP_WILL_CHANGE(),
 PROP_CHANGED = get_EVT_PROP_CHANGED(),
 ITEMS_WILL_CHANGE = get_EVT_ITEMS_WILL_CHANGE(),
 ITEMS_CHANGED = get_EVT_ITEMS_CHANGED(),
 PROPS_CHANGED = get_EVT_PROPS_CHANGED(),
 DESTROY = get_EVT_DESTROY(),
};

export class Event {
 public nativeObj;
 constructor(nativeObj) {
   this.nativeObj = nativeObj;
 }

 static cast(event) {
   return new Event(event_cast(event ? (event.nativeObj || event) : null));
 }

 static create(type, target) {
   return new Event(event_create(type, target));
 }

 destroy() {
   return event_destroy(this.nativeObj);
 }

 get type() {
   return event_t_get_prop_type(this.nativeObj);
 }

 get time() {
   return event_t_get_prop_time(this.nativeObj);
 }

 get target() {
   return event_t_get_prop_target(this.nativeObj);
 }

}

export class NamedValue {
 public nativeObj;
 constructor(nativeObj) {
   this.nativeObj = nativeObj;
 }

 static create() {
   return new NamedValue(named_value_create());
 }

 static cast(nv) {
   return new NamedValue(named_value_cast(nv ? (nv.nativeObj || nv) : null));
 }

 setName(name) {
   return named_value_set_name(this.nativeObj, name);
 }

 setValue(value) {
   return named_value_set_value(this.nativeObj, value ? value.nativeObj : null);
 }

 getValue() {
   return new Value(named_value_get_value(this.nativeObj));
 }

 destroy() {
   return named_value_destroy(this.nativeObj);
 }

 get name() {
   return named_value_t_get_prop_name(this.nativeObj);
 }

}

export class Point {
 public nativeObj;
 constructor(nativeObj) {
   this.nativeObj = nativeObj;
 }

}

export class Rect {
 public nativeObj;
 constructor(nativeObj) {
   this.nativeObj = nativeObj;
 }

 static create(x, y, w, h) {
   return new Rect(rect_create(x, y, w, h));
 }

 set(x, y, w, h) {
   return new Rect(rect_set(this.nativeObj, x, y, w, h));
 }

 static cast(rect) {
   return new Rect(rect_cast(rect ? (rect.nativeObj || rect) : null));
 }

 destroy() {
   return rect_destroy(this.nativeObj);
 }

 get x() {
   return rect_t_get_prop_x(this.nativeObj);
 }

 get y() {
   return rect_t_get_prop_y(this.nativeObj);
 }

 get w() {
   return rect_t_get_prop_w(this.nativeObj);
 }

 get h() {
   return rect_t_get_prop_h(this.nativeObj);
 }

}

export class TimeNow {
 public nativeObj;
 constructor(nativeObj) {
   this.nativeObj = nativeObj;
 }

 static s() {
   return time_now_s();
 }

 static ms() {
   return time_now_ms();
 }

}

export enum Ret {
 OK = get_RET_OK(),
 OOM = get_RET_OOM(),
 FAIL = get_RET_FAIL(),
 NOT_IMPL = get_RET_NOT_IMPL(),
 QUIT = get_RET_QUIT(),
 FOUND = get_RET_FOUND(),
 BUSY = get_RET_BUSY(),
 REMOVE = get_RET_REMOVE(),
 REPEAT = get_RET_REPEAT(),
 NOT_FOUND = get_RET_NOT_FOUND(),
 DONE = get_RET_DONE(),
 STOP = get_RET_STOP(),
 CONTINUE = get_RET_CONTINUE(),
 OBJECT_CHANGED = get_RET_OBJECT_CHANGED(),
 ITEMS_CHANGED = get_RET_ITEMS_CHANGED(),
 BAD_PARAMS = get_RET_BAD_PARAMS(),
};

export enum ValueType {
 INVALID = get_VALUE_TYPE_INVALID(),
 BOOL = get_VALUE_TYPE_BOOL(),
 INT8 = get_VALUE_TYPE_INT8(),
 UINT8 = get_VALUE_TYPE_UINT8(),
 INT16 = get_VALUE_TYPE_INT16(),
 UINT16 = get_VALUE_TYPE_UINT16(),
 INT32 = get_VALUE_TYPE_INT32(),
 UINT32 = get_VALUE_TYPE_UINT32(),
 INT64 = get_VALUE_TYPE_INT64(),
 UINT64 = get_VALUE_TYPE_UINT64(),
 POINTER = get_VALUE_TYPE_POINTER(),
 FLOAT = get_VALUE_TYPE_FLOAT(),
 FLOAT32 = get_VALUE_TYPE_FLOAT32(),
 DOUBLE = get_VALUE_TYPE_DOUBLE(),
 STRING = get_VALUE_TYPE_STRING(),
 WSTRING = get_VALUE_TYPE_WSTRING(),
 OBJECT = get_VALUE_TYPE_OBJECT(),
};

export class Value {
 public nativeObj;
 constructor(nativeObj) {
   this.nativeObj = nativeObj;
 }

 setBool(value) {
   return new Value(value_set_bool(this.nativeObj, value));
 }

 bool() {
   return value_bool(this.nativeObj);
 }

 setInt8(value) {
   return new Value(value_set_int8(this.nativeObj, value));
 }

 int8() {
   return value_int8(this.nativeObj);
 }

 setUint8(value) {
   return new Value(value_set_uint8(this.nativeObj, value));
 }

 uint8() {
   return value_uint8(this.nativeObj);
 }

 setInt16(value) {
   return new Value(value_set_int16(this.nativeObj, value));
 }

 int16() {
   return value_int16(this.nativeObj);
 }

 setUint16(value) {
   return new Value(value_set_uint16(this.nativeObj, value));
 }

 uint16() {
   return value_uint16(this.nativeObj);
 }

 setInt32(value) {
   return new Value(value_set_int32(this.nativeObj, value));
 }

 int32() {
   return value_int32(this.nativeObj);
 }

 setUint32(value) {
   return new Value(value_set_uint32(this.nativeObj, value));
 }

 setInt64(value) {
   return new Value(value_set_int64(this.nativeObj, value));
 }

 int64() {
   return value_int64(this.nativeObj);
 }

 setUint64(value) {
   return new Value(value_set_uint64(this.nativeObj, value));
 }

 uint64() {
   return value_uint64(this.nativeObj);
 }

 setFloat(value) {
   return new Value(value_set_float(this.nativeObj, value));
 }

 float() {
   return value_float(this.nativeObj);
 }

 setFloat32(value) {
   return new Value(value_set_float32(this.nativeObj, value));
 }

 float32() {
   return value_float32(this.nativeObj);
 }

 setDouble(value) {
   return new Value(value_set_double(this.nativeObj, value));
 }

 double() {
   return value_double(this.nativeObj);
 }

 setStr(value) {
   return new Value(value_dup_str(this.nativeObj, value));
 }

 str() {
   return value_str(this.nativeObj);
 }

 wstr() {
   return value_wstr(this.nativeObj);
 }

 isNull() {
   return value_is_null(this.nativeObj);
 }

 int() {
   return value_int(this.nativeObj);
 }

 setInt(value) {
   return new Value(value_set_int(this.nativeObj, value));
 }

 setObject(value) {
   return new Value(value_set_object(this.nativeObj, value ? value.nativeObj : null));
 }

 object() {
   return new ObjectBase(value_object(this.nativeObj));
 }

 static create() {
   return new Value(value_create());
 }

 destroy() {
   return value_destroy(this.nativeObj);
 }

 reset() {
   return value_reset(this.nativeObj);
 }

 static cast(value) {
   return new Value(value_cast(value ? (value.nativeObj || value) : null));
 }

}

export class ProgressCircle extends Widget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new ProgressCircle(progress_circle_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new ProgressCircle(progress_circle_cast(widget ? (widget.nativeObj || widget) : null));
 }

 setValue(value) {
   return progress_circle_set_value(this.nativeObj, value);
 }

 setMax(max) {
   return progress_circle_set_max(this.nativeObj, max);
 }

 setLineWidth(line_width) {
   return progress_circle_set_line_width(this.nativeObj, line_width);
 }

 setStartAngle(start_angle) {
   return progress_circle_set_start_angle(this.nativeObj, start_angle);
 }

 setUnit(unit) {
   return progress_circle_set_unit(this.nativeObj, unit);
 }

 setShowText(show_text) {
   return progress_circle_set_show_text(this.nativeObj, show_text);
 }

 setCounterClockWise(counter_clock_wise) {
   return progress_circle_set_counter_clock_wise(this.nativeObj, counter_clock_wise);
 }

 get value() {
   return progress_circle_t_get_prop_value(this.nativeObj);
 }

 get max() {
   return progress_circle_t_get_prop_max(this.nativeObj);
 }

 get startAngle() {
   return progress_circle_t_get_prop_start_angle(this.nativeObj);
 }

 get lineWidth() {
   return progress_circle_t_get_prop_line_width(this.nativeObj);
 }

 get unit() {
   return progress_circle_t_get_prop_unit(this.nativeObj);
 }

 get counterClockWise() {
   return progress_circle_t_get_prop_counter_clock_wise(this.nativeObj);
 }

 get showText() {
   return progress_circle_t_get_prop_show_text(this.nativeObj);
 }

}

export class RichText extends Widget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new RichText(rich_text_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 setText(text) {
   return rich_text_set_text(this.nativeObj, text);
 }

 static cast(widget) {
   return new RichText(rich_text_cast(widget ? (widget.nativeObj || widget) : null));
 }

 get lineGap() {
   return rich_text_t_get_prop_line_gap(this.nativeObj);
 }

}

export class ListItem extends Widget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new ListItem(list_item_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new ListItem(list_item_cast(widget ? (widget.nativeObj || widget) : null));
 }

}

export class ListViewH extends Widget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new ListViewH(list_view_h_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 setItemWidth(item_width) {
   return list_view_h_set_item_width(this.nativeObj, item_width);
 }

 setSpacing(spacing) {
   return list_view_h_set_spacing(this.nativeObj, spacing);
 }

 static cast(widget) {
   return new ListViewH(list_view_h_cast(widget ? (widget.nativeObj || widget) : null));
 }

 get itemWidth() {
   return list_view_h_t_get_prop_item_width(this.nativeObj);
 }

 get spacing() {
   return list_view_h_t_get_prop_spacing(this.nativeObj);
 }

}

export class ListView extends Widget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new ListView(list_view_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 setItemHeight(item_height) {
   return list_view_set_item_height(this.nativeObj, item_height);
 }

 setDefaultItemHeight(default_item_height) {
   return list_view_set_default_item_height(this.nativeObj, default_item_height);
 }

 setAutoHideScrollBar(auto_hide_scroll_bar) {
   return list_view_set_auto_hide_scroll_bar(this.nativeObj, auto_hide_scroll_bar);
 }

 static cast(widget) {
   return new ListView(list_view_cast(widget ? (widget.nativeObj || widget) : null));
 }

 get itemHeight() {
   return list_view_t_get_prop_item_height(this.nativeObj);
 }

 get defaultItemHeight() {
   return list_view_t_get_prop_default_item_height(this.nativeObj);
 }

 get autoHideScrollBar() {
   return list_view_t_get_prop_auto_hide_scroll_bar(this.nativeObj);
 }

}

export class ScrollBar extends Widget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new ScrollBar(scroll_bar_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new ScrollBar(scroll_bar_cast(widget ? (widget.nativeObj || widget) : null));
 }

 static createMobile(parent, x, y, w, h) {
   return new ScrollBar(scroll_bar_create_mobile(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static createDesktop(parent, x, y, w, h) {
   return new ScrollBar(scroll_bar_create_desktop(parent ? parent.nativeObj : null, x, y, w, h));
 }

 setParams(virtual_size, row) {
   return scroll_bar_set_params(this.nativeObj, virtual_size, row);
 }

 scrollTo(value, duration) {
   return scroll_bar_scroll_to(this.nativeObj, value, duration);
 }

 setValue(value) {
   return scroll_bar_set_value(this.nativeObj, value);
 }

 addDelta(delta) {
   return scroll_bar_add_delta(this.nativeObj, delta);
 }

 scrollDelta(delta) {
   return scroll_bar_scroll_delta(this.nativeObj, delta);
 }

 setValueOnly(value) {
   return scroll_bar_set_value_only(this.nativeObj, value);
 }

 isMobile() {
   return scroll_bar_is_mobile(this.nativeObj);
 }

 get virtualSize() {
   return scroll_bar_t_get_prop_virtual_size(this.nativeObj);
 }

 get value() {
   return scroll_bar_t_get_prop_value(this.nativeObj);
 }

 get row() {
   return scroll_bar_t_get_prop_row(this.nativeObj);
 }

 get animatable() {
   return scroll_bar_t_get_prop_animatable(this.nativeObj);
 }

}

export class ScrollView extends Widget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new ScrollView(scroll_view_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new ScrollView(scroll_view_cast(widget ? (widget.nativeObj || widget) : null));
 }

 setVirtualW(w) {
   return scroll_view_set_virtual_w(this.nativeObj, w);
 }

 setVirtualH(h) {
   return scroll_view_set_virtual_h(this.nativeObj, h);
 }

 setXslidable(xslidable) {
   return scroll_view_set_xslidable(this.nativeObj, xslidable);
 }

 setYslidable(yslidable) {
   return scroll_view_set_yslidable(this.nativeObj, yslidable);
 }

 setOffset(xoffset, yoffset) {
   return scroll_view_set_offset(this.nativeObj, xoffset, yoffset);
 }

 scrollTo(xoffset_end, yoffset_end, duration) {
   return scroll_view_scroll_to(this.nativeObj, xoffset_end, yoffset_end, duration);
 }

 get virtualW() {
   return scroll_view_t_get_prop_virtual_w(this.nativeObj);
 }

 get virtualH() {
   return scroll_view_t_get_prop_virtual_h(this.nativeObj);
 }

 get xoffset() {
   return scroll_view_t_get_prop_xoffset(this.nativeObj);
 }

 get yoffset() {
   return scroll_view_t_get_prop_yoffset(this.nativeObj);
 }

 get xslidable() {
   return scroll_view_t_get_prop_xslidable(this.nativeObj);
 }

 get yslidable() {
   return scroll_view_t_get_prop_yslidable(this.nativeObj);
 }

}

export class SlideMenu extends Widget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new SlideMenu(slide_menu_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new SlideMenu(slide_menu_cast(widget ? (widget.nativeObj || widget) : null));
 }

 setValue(value) {
   return slide_menu_set_value(this.nativeObj, value);
 }

 setAlignV(align_v) {
   return slide_menu_set_align_v(this.nativeObj, align_v);
 }

 setMinScale(min_scale) {
   return slide_menu_set_min_scale(this.nativeObj, min_scale);
 }

 get value() {
   return slide_menu_t_get_prop_value(this.nativeObj);
 }

 get alignV() {
   return slide_menu_t_get_prop_align_v(this.nativeObj);
 }

 get minScale() {
   return slide_menu_t_get_prop_min_scale(this.nativeObj);
 }

}

export class SlideView extends Widget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new SlideView(slide_view_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new SlideView(slide_view_cast(widget ? (widget.nativeObj || widget) : null));
 }

 setAutoPlay(auto_play) {
   return slide_view_set_auto_play(this.nativeObj, auto_play);
 }

 setActive(index) {
   return slide_view_set_active(this.nativeObj, index);
 }

 setVertical(vertical) {
   return slide_view_set_vertical(this.nativeObj, vertical);
 }

 setAnimHint(anim_hint) {
   return slide_view_set_anim_hint(this.nativeObj, anim_hint);
 }

 setLoop(loop) {
   return slide_view_set_loop(this.nativeObj, loop);
 }

 get vertical() {
   return slide_view_t_get_prop_vertical(this.nativeObj);
 }

 get autoPlay() {
   return slide_view_t_get_prop_auto_play(this.nativeObj);
 }

 get loop() {
   return slide_view_t_get_prop_loop(this.nativeObj);
 }

 get animHint() {
   return slide_view_t_get_prop_anim_hint(this.nativeObj);
 }

}

export class Row extends Widget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new Row(row_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new Row(row_cast(widget ? (widget.nativeObj || widget) : null));
 }

}

export class Switch extends Widget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new Switch(switch_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 setValue(value) {
   return switch_set_value(this.nativeObj, value);
 }

 static cast(widget) {
   return new Switch(switch_cast(widget ? (widget.nativeObj || widget) : null));
 }

 get value() {
   return switch_t_get_prop_value(this.nativeObj);
 }

 get maxXoffsetRatio() {
   return switch_t_get_prop_max_xoffset_ratio(this.nativeObj);
 }

 get roundRadius() {
   return switch_t_get_prop_round_radius(this.nativeObj);
 }

}

export class TextSelector extends Widget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new TextSelector(text_selector_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new TextSelector(text_selector_cast(widget ? (widget.nativeObj || widget) : null));
 }

 resetOptions() {
   return text_selector_reset_options(this.nativeObj);
 }

 countOptions() {
   return text_selector_count_options(this.nativeObj);
 }

 appendOption(value, text) {
   return text_selector_append_option(this.nativeObj, value, text);
 }

 setOptions(options) {
   return text_selector_set_options(this.nativeObj, options);
 }

 setRangeOptions(start, nr, step) {
   return text_selector_set_range_options(this.nativeObj, start, nr, step);
 }

 getValue() {
   return text_selector_get_value(this.nativeObj);
 }

 setValue(value) {
   return text_selector_set_value(this.nativeObj, value);
 }

 getText() {
   return text_selector_get_text(this.nativeObj);
 }

 setText(text) {
   return text_selector_set_text(this.nativeObj, text);
 }

 setSelectedIndex(index) {
   return text_selector_set_selected_index(this.nativeObj, index);
 }

 setVisibleNr(visible_nr) {
   return text_selector_set_visible_nr(this.nativeObj, visible_nr);
 }

 get visibleNr() {
   return text_selector_t_get_prop_visible_nr(this.nativeObj);
 }

 get selectedIndex() {
   return text_selector_t_get_prop_selected_index(this.nativeObj);
 }

 get options() {
   return text_selector_t_get_prop_options(this.nativeObj);
 }

}

export class DigitClock extends Widget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new DigitClock(digit_clock_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new DigitClock(digit_clock_cast(widget ? (widget.nativeObj || widget) : null));
 }

 setFormat(format) {
   return digit_clock_set_format(this.nativeObj, format);
 }

 get format() {
   return digit_clock_t_get_prop_format(this.nativeObj);
 }

}

export class TimeClock extends Widget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new TimeClock(time_clock_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new TimeClock(time_clock_cast(widget ? (widget.nativeObj || widget) : null));
 }

 setHour(hour) {
   return time_clock_set_hour(this.nativeObj, hour);
 }

 setMinute(minute) {
   return time_clock_set_minute(this.nativeObj, minute);
 }

 setSecond(second) {
   return time_clock_set_second(this.nativeObj, second);
 }

 setHourImage(hour) {
   return time_clock_set_hour_image(this.nativeObj, hour);
 }

 setMinuteImage(minute_image) {
   return time_clock_set_minute_image(this.nativeObj, minute_image);
 }

 setSecondImage(second_image) {
   return time_clock_set_second_image(this.nativeObj, second_image);
 }

 setBgImage(bg_image) {
   return time_clock_set_bg_image(this.nativeObj, bg_image);
 }

 setImage(image) {
   return time_clock_set_image(this.nativeObj, image);
 }

 get hour() {
   return time_clock_t_get_prop_hour(this.nativeObj);
 }

 get minute() {
   return time_clock_t_get_prop_minute(this.nativeObj);
 }

 get second() {
   return time_clock_t_get_prop_second(this.nativeObj);
 }

 get image() {
   return time_clock_t_get_prop_image(this.nativeObj);
 }

 get bgImage() {
   return time_clock_t_get_prop_bg_image(this.nativeObj);
 }

 get hourImage() {
   return time_clock_t_get_prop_hour_image(this.nativeObj);
 }

 get minuteImage() {
   return time_clock_t_get_prop_minute_image(this.nativeObj);
 }

 get secondImage() {
   return time_clock_t_get_prop_second_image(this.nativeObj);
 }

}

export class WindowEvent extends Event {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static cast(event) {
   return new WindowEvent(window_event_cast(event ? (event.nativeObj || event) : null));
 }

 get window() {
   return window_event_t_get_prop_window(this.nativeObj);
 }

}

export class TabButton extends Widget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new TabButton(tab_button_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new TabButton(tab_button_cast(widget ? (widget.nativeObj || widget) : null));
 }

 setValue(value) {
   return tab_button_set_value(this.nativeObj, value);
 }

 setIcon(name) {
   return tab_button_set_icon(this.nativeObj, name);
 }

 setActiveIcon(name) {
   return tab_button_set_active_icon(this.nativeObj, name);
 }

 get value() {
   return tab_button_t_get_prop_value(this.nativeObj);
 }

 get activeIcon() {
   return tab_button_t_get_prop_active_icon(this.nativeObj);
 }

 get icon() {
   return tab_button_t_get_prop_icon(this.nativeObj);
 }

}

export class ImageBase extends Widget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 setImage(name) {
   return image_base_set_image(this.nativeObj, name);
 }

 setRotation(rotation) {
   return image_base_set_rotation(this.nativeObj, rotation);
 }

 setScale(scale_x, scale_y) {
   return image_base_set_scale(this.nativeObj, scale_x, scale_y);
 }

 setAnchor(anchor_x, anchor_y) {
   return image_base_set_anchor(this.nativeObj, anchor_x, anchor_y);
 }

 setSelected(selected) {
   return image_base_set_selected(this.nativeObj, selected);
 }

 setSelectable(selectable) {
   return image_base_set_selectable(this.nativeObj, selectable);
 }

 setClickable(clickable) {
   return image_base_set_clickable(this.nativeObj, clickable);
 }

 static cast(widget) {
   return new ImageBase(image_base_cast(widget ? (widget.nativeObj || widget) : null));
 }

 get image() {
   return image_base_t_get_prop_image(this.nativeObj);
 }

 get anchorX() {
   return image_base_t_get_prop_anchor_x(this.nativeObj);
 }

 get anchorY() {
   return image_base_t_get_prop_anchor_y(this.nativeObj);
 }

 get scaleX() {
   return image_base_t_get_prop_scale_x(this.nativeObj);
 }

 get scaleY() {
   return image_base_t_get_prop_scale_y(this.nativeObj);
 }

 get rotation() {
   return image_base_t_get_prop_rotation(this.nativeObj);
 }

 get clickable() {
   return image_base_t_get_prop_clickable(this.nativeObj);
 }

 get selectable() {
   return image_base_t_get_prop_selectable(this.nativeObj);
 }

 get selected() {
   return image_base_t_get_prop_selected(this.nativeObj);
 }

}

export class Window extends Widget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new Window(window_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 setFullscreen(fullscreen) {
   return window_set_fullscreen(this.nativeObj, fullscreen);
 }

 static open(name) {
   return new Window(window_open(name));
 }

 static openAndClose(name, to_close) {
   return new Window(window_open_and_close(name, to_close ? to_close.nativeObj : null));
 }

 close() {
   return window_close(this.nativeObj);
 }

 closeForce() {
   return window_close_force(this.nativeObj);
 }

 static cast(widget) {
   return new Window(window_cast(widget ? (widget.nativeObj || widget) : null));
 }

 get fullscreen() {
   return window_t_get_prop_fullscreen(this.nativeObj);
 }

}

export class WheelEvent extends Event {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static cast(event) {
   return new WheelEvent(wheel_event_cast(event ? (event.nativeObj || event) : null));
 }

 get dy() {
   return wheel_event_t_get_prop_dy(this.nativeObj);
 }

 get alt() {
   return wheel_event_t_get_prop_alt(this.nativeObj);
 }

 get ctrl() {
   return wheel_event_t_get_prop_ctrl(this.nativeObj);
 }

 get shift() {
   return wheel_event_t_get_prop_shift(this.nativeObj);
 }

}

export class PointerEvent extends Event {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static cast(event) {
   return new PointerEvent(pointer_event_cast(event ? (event.nativeObj || event) : null));
 }

 get x() {
   return pointer_event_t_get_prop_x(this.nativeObj);
 }

 get y() {
   return pointer_event_t_get_prop_y(this.nativeObj);
 }

 get button() {
   return pointer_event_t_get_prop_button(this.nativeObj);
 }

 get pressed() {
   return pointer_event_t_get_prop_pressed(this.nativeObj);
 }

 get alt() {
   return pointer_event_t_get_prop_alt(this.nativeObj);
 }

 get ctrl() {
   return pointer_event_t_get_prop_ctrl(this.nativeObj);
 }

 get shift() {
   return pointer_event_t_get_prop_shift(this.nativeObj);
 }

}

export class KeyEvent extends Event {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static cast(event) {
   return new KeyEvent(key_event_cast(event ? (event.nativeObj || event) : null));
 }

 get key() {
   return key_event_t_get_prop_key(this.nativeObj);
 }

 get alt() {
   return key_event_t_get_prop_alt(this.nativeObj);
 }

 get ctrl() {
   return key_event_t_get_prop_ctrl(this.nativeObj);
 }

 get shift() {
   return key_event_t_get_prop_shift(this.nativeObj);
 }

 get capslock() {
   return key_event_t_get_prop_capslock(this.nativeObj);
 }

}

export class PaintEvent extends Event {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static cast(event) {
   return new PaintEvent(paint_event_cast(event ? (event.nativeObj || event) : null));
 }

 get c() {
   return paint_event_t_get_prop_c(this.nativeObj);
 }

}

export class PropChangeEvent extends Event {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static cast(event) {
   return new PropChangeEvent(prop_change_event_cast(event ? (event.nativeObj || event) : null));
 }

 get name() {
   return prop_change_event_t_get_prop_name(this.nativeObj);
 }

 get value() {
   return prop_change_event_t_get_prop_value(this.nativeObj);
 }

}

export class WindowBase extends Widget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static cast(widget) {
   return new WindowBase(window_base_cast(widget ? (widget.nativeObj || widget) : null));
 }

 get theme() {
   return window_base_t_get_prop_theme(this.nativeObj);
 }

 get closable() {
   return window_base_t_get_prop_closable(this.nativeObj);
 }

}

export class WindowManager extends Widget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static instance() {
   return new WindowManager(window_manager());
 }

 static cast(widget) {
   return new WindowManager(window_manager_cast(widget ? (widget.nativeObj || widget) : null));
 }

 getTopMainWindow() {
   return new Widget(window_manager_get_top_main_window(this.nativeObj));
 }

 setShowFps(show_fps) {
   return window_manager_set_show_fps(this.nativeObj, show_fps);
 }

 setScreenSaverTime(screen_saver_time) {
   return window_manager_set_screen_saver_time(this.nativeObj, screen_saver_time);
 }

 setCursor(cursor) {
   return window_manager_set_cursor(this.nativeObj, cursor);
 }

 back() {
   return window_manager_back(this.nativeObj);
 }

 backToHome() {
   return window_manager_back_to_home(this.nativeObj);
 }

 get showFps() {
   return window_manager_t_get_prop_show_fps(this.nativeObj);
 }

}

export class ProgressBar extends Widget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new ProgressBar(progress_bar_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new ProgressBar(progress_bar_cast(widget ? (widget.nativeObj || widget) : null));
 }

 setValue(value) {
   return progress_bar_set_value(this.nativeObj, value);
 }

 setVertical(vertical) {
   return progress_bar_set_vertical(this.nativeObj, vertical);
 }

 setShowText(show_text) {
   return progress_bar_set_show_text(this.nativeObj, show_text);
 }

 get value() {
   return progress_bar_t_get_prop_value(this.nativeObj);
 }

 get vertical() {
   return progress_bar_t_get_prop_vertical(this.nativeObj);
 }

 get showText() {
   return progress_bar_t_get_prop_show_text(this.nativeObj);
 }

}

export class ObjectBase extends Emitter {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 unref() {
   return object_unref(this.nativeObj);
 }

 static ref(obj) {
   return new ObjectBase(object_ref(obj ? obj.nativeObj : null));
 }

 getType() {
   return object_get_type(this.nativeObj);
 }

 getDesc() {
   return object_get_desc(this.nativeObj);
 }

 getSize() {
   return object_get_size(this.nativeObj);
 }

 isCollection() {
   return object_is_collection(this.nativeObj);
 }

 setName(name) {
   return object_set_name(this.nativeObj, name);
 }

 compare(other) {
   return object_compare(this.nativeObj, other ? other.nativeObj : null);
 }

 getProp(name, v) {
   return object_get_prop(this.nativeObj, name, v ? v.nativeObj : null);
 }

 getPropStr(name) {
   return object_get_prop_str(this.nativeObj, name);
 }

 getPropPointer(name) {
   return object_get_prop_pointer(this.nativeObj, name);
 }

 getPropObject(name) {
   return new ObjectBase(object_get_prop_object(this.nativeObj, name));
 }

 getPropInt(name, defval) {
   return object_get_prop_int(this.nativeObj, name, defval);
 }

 getPropFloat(name, defval) {
   return object_get_prop_float(this.nativeObj, name, defval);
 }

 removeProp(name) {
   return object_remove_prop(this.nativeObj, name);
 }

 setProp(name, value) {
   return object_set_prop(this.nativeObj, name, value ? value.nativeObj : null);
 }

 setPropStr(name, value) {
   return object_set_prop_str(this.nativeObj, name, value);
 }

 setPropPointer(name, value) {
   return object_set_prop_pointer(this.nativeObj, name, value);
 }

 setPropObject(name, value) {
   return object_set_prop_object(this.nativeObj, name, value ? value.nativeObj : null);
 }

 setPropInt(name, value) {
   return object_set_prop_int(this.nativeObj, name, value);
 }

 setPropFloat(name, value) {
   return object_set_prop_float(this.nativeObj, name, value);
 }

 copyProp(src, name) {
   return object_copy_prop(this.nativeObj, src ? src.nativeObj : null, name);
 }

 foreachProp(on_prop, ctx) {
   return object_foreach_prop(this.nativeObj, on_prop, ctx);
 }

 hasProp(name) {
   return object_has_prop(this.nativeObj, name);
 }

 eval(expr, v) {
   return object_eval(this.nativeObj, expr, v ? v.nativeObj : null);
 }

 canExec(name, args) {
   return object_can_exec(this.nativeObj, name, args);
 }

 exec(name, args) {
   return object_exec(this.nativeObj, name, args);
 }

 notifyChanged() {
   return object_notify_changed(this.nativeObj);
 }

 get refCount() {
   return object_t_get_prop_ref_count(this.nativeObj);
 }

 get name() {
   return object_t_get_prop_name(this.nativeObj);
 }

}

export class StyleMutable extends Style {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 getName() {
   return style_mutable_get_name(this.nativeObj);
 }

 setName(name) {
   return style_mutable_set_name(this.nativeObj, name);
 }

 setInt(state, name, val) {
   return style_mutable_set_int(this.nativeObj, state, name, val);
 }

 static cast(s) {
   return new StyleMutable(style_mutable_cast(s ? (s.nativeObj || s) : null));
 }

 static create(widget) {
   return new StyleMutable(style_mutable_create(widget ? widget.nativeObj : null));
 }

 get name() {
   return style_mutable_t_get_prop_name(this.nativeObj);
 }

}

export class CanvasWidget extends Widget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new CanvasWidget(canvas_widget_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new CanvasWidget(canvas_widget_cast(widget ? (widget.nativeObj || widget) : null));
 }

}

export class ColorPicker extends Widget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new ColorPicker(color_picker_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 setColor(color) {
   return color_picker_set_color(this.nativeObj, color);
 }

 static cast(widget) {
   return new ColorPicker(color_picker_cast(widget ? (widget.nativeObj || widget) : null));
 }

 get value() {
   return color_picker_t_get_prop_value(this.nativeObj);
 }

}

export class View extends Widget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new View(view_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new View(view_cast(widget ? (widget.nativeObj || widget) : null));
 }

}

export class TabButtonGroup extends Widget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new TabButtonGroup(tab_button_group_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new TabButtonGroup(tab_button_group_cast(widget ? (widget.nativeObj || widget) : null));
 }

 get compact() {
   return tab_button_group_t_get_prop_compact(this.nativeObj);
 }

}

export class GuagePointer extends Widget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new GuagePointer(guage_pointer_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new GuagePointer(guage_pointer_cast(widget ? (widget.nativeObj || widget) : null));
 }

 setAngle(angle) {
   return guage_pointer_set_angle(this.nativeObj, angle);
 }

 setImage(image) {
   return guage_pointer_set_image(this.nativeObj, image);
 }

 get angle() {
   return guage_pointer_t_get_prop_angle(this.nativeObj);
 }

 get image() {
   return guage_pointer_t_get_prop_image(this.nativeObj);
 }

}

export class Guage extends Widget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new Guage(guage_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new Guage(guage_cast(widget ? (widget.nativeObj || widget) : null));
 }

 setImage(name) {
   return guage_set_image(this.nativeObj, name);
 }

 setDrawType(draw_type) {
   return guage_set_draw_type(this.nativeObj, draw_type);
 }

 get image() {
   return guage_t_get_prop_image(this.nativeObj);
 }

 get drawType() {
   return guage_t_get_prop_draw_type(this.nativeObj);
 }

}

export class TabControl extends Widget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new TabControl(tab_control_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new TabControl(tab_control_cast(widget ? (widget.nativeObj || widget) : null));
 }

}

export class ImageValue extends Widget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new ImageValue(image_value_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 setImage(image) {
   return image_value_set_image(this.nativeObj, image);
 }

 setFormat(format) {
   return image_value_set_format(this.nativeObj, format);
 }

 setValue(value) {
   return image_value_set_value(this.nativeObj, value);
 }

 static cast(widget) {
   return new ImageValue(image_value_cast(widget ? (widget.nativeObj || widget) : null));
 }

 get image() {
   return image_value_t_get_prop_image(this.nativeObj);
 }

 get format() {
   return image_value_t_get_prop_format(this.nativeObj);
 }

 get value() {
   return image_value_t_get_prop_value(this.nativeObj);
 }

}

export class Slider extends Widget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new Slider(slider_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new Slider(slider_cast(widget ? (widget.nativeObj || widget) : null));
 }

 setValue(value) {
   return slider_set_value(this.nativeObj, value);
 }

 setMin(min) {
   return slider_set_min(this.nativeObj, min);
 }

 setMax(max) {
   return slider_set_max(this.nativeObj, max);
 }

 setStep(step) {
   return slider_set_step(this.nativeObj, step);
 }

 setBarSize(bar_size) {
   return slider_set_bar_size(this.nativeObj, bar_size);
 }

 setVertical(vertical) {
   return slider_set_vertical(this.nativeObj, vertical);
 }

 get value() {
   return slider_t_get_prop_value(this.nativeObj);
 }

 get min() {
   return slider_t_get_prop_min(this.nativeObj);
 }

 get max() {
   return slider_t_get_prop_max(this.nativeObj);
 }

 get step() {
   return slider_t_get_prop_step(this.nativeObj);
 }

 get vertical() {
   return slider_t_get_prop_vertical(this.nativeObj);
 }

 get barSize() {
   return slider_t_get_prop_bar_size(this.nativeObj);
 }

}

export class AppBar extends Widget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new AppBar(app_bar_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new AppBar(app_bar_cast(widget ? (widget.nativeObj || widget) : null));
 }

}

export class ButtonGroup extends Widget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new ButtonGroup(button_group_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new ButtonGroup(button_group_cast(widget ? (widget.nativeObj || widget) : null));
 }

}

export class Button extends Widget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new Button(button_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new Button(button_cast(widget ? (widget.nativeObj || widget) : null));
 }

 setRepeat(repeat) {
   return button_set_repeat(this.nativeObj, repeat);
 }

 setEnableLongPress(enable_long_press) {
   return button_set_enable_long_press(this.nativeObj, enable_long_press);
 }

 get repeat() {
   return button_t_get_prop_repeat(this.nativeObj);
 }

 get enableLongPress() {
   return button_t_get_prop_enable_long_press(this.nativeObj);
 }

}

export class CheckButton extends Widget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new CheckButton(check_button_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static createRadio(parent, x, y, w, h) {
   return new CheckButton(check_button_create_radio(parent ? parent.nativeObj : null, x, y, w, h));
 }

 setValue(value) {
   return check_button_set_value(this.nativeObj, value);
 }

 static cast(widget) {
   return new CheckButton(check_button_cast(widget ? (widget.nativeObj || widget) : null));
 }

 get value() {
   return check_button_t_get_prop_value(this.nativeObj);
 }

}

export class ColorTile extends Widget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new ColorTile(color_tile_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new ColorTile(color_tile_cast(widget ? (widget.nativeObj || widget) : null));
 }

 setBgColor(color) {
   return color_tile_set_bg_color(this.nativeObj, color);
 }

 get bgColor() {
   return color_tile_t_get_prop_bg_color(this.nativeObj);
 }

 get borderColor() {
   return color_tile_t_get_prop_border_color(this.nativeObj);
 }

}

export class Column extends Widget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new Column(column_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new Column(column_cast(widget ? (widget.nativeObj || widget) : null));
 }

}

export class ComboBoxItem extends Widget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new ComboBoxItem(combo_box_item_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new ComboBoxItem(combo_box_item_cast(widget ? (widget.nativeObj || widget) : null));
 }

 setChecked(checked) {
   return combo_box_item_set_checked(this.nativeObj, checked);
 }

 setValue(value) {
   return combo_box_item_set_value(this.nativeObj, value);
 }

 get value() {
   return combo_box_item_t_get_prop_value(this.nativeObj);
 }

 get checked() {
   return combo_box_item_t_get_prop_checked(this.nativeObj);
 }

}

export class ComboBox extends Widget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new ComboBox(combo_box_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new ComboBox(combo_box_cast(widget ? (widget.nativeObj || widget) : null));
 }

 setOpenWindow(open_window) {
   return combo_box_set_open_window(this.nativeObj, open_window);
 }

 resetOptions() {
   return combo_box_reset_options(this.nativeObj);
 }

 countOptions() {
   return combo_box_count_options(this.nativeObj);
 }

 setSelectedIndex(index) {
   return combo_box_set_selected_index(this.nativeObj, index);
 }

 setValue(value) {
   return combo_box_set_value(this.nativeObj, value);
 }

 appendOption(value, text) {
   return combo_box_append_option(this.nativeObj, value, text);
 }

 setOptions(options) {
   return combo_box_set_options(this.nativeObj, options);
 }

 getValue() {
   return combo_box_get_value(this.nativeObj);
 }

 getText() {
   return combo_box_get_text(this.nativeObj);
 }

 get openWindow() {
   return combo_box_t_get_prop_open_window(this.nativeObj);
 }

 get selectedIndex() {
   return combo_box_t_get_prop_selected_index(this.nativeObj);
 }

 get value() {
   return combo_box_t_get_prop_value(this.nativeObj);
 }

 get options() {
   return combo_box_t_get_prop_options(this.nativeObj);
 }

}

export class DialogClient extends Widget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new DialogClient(dialog_client_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new DialogClient(dialog_client_cast(widget ? (widget.nativeObj || widget) : null));
 }

}

export class DialogTitle extends Widget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new DialogTitle(dialog_title_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new DialogTitle(dialog_title_cast(widget ? (widget.nativeObj || widget) : null));
 }

}

export class Dialog extends Widget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new Dialog(dialog_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static createSimple(parent, x, y, w, h) {
   return new Dialog(dialog_create_simple(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new Dialog(dialog_cast(widget ? (widget.nativeObj || widget) : null));
 }

 getTitle() {
   return new Widget(dialog_get_title(this.nativeObj));
 }

 getClient() {
   return new Widget(dialog_get_client(this.nativeObj));
 }

 static open(name) {
   return new Dialog(dialog_open(name));
 }

 setTitle(title) {
   return dialog_set_title(this.nativeObj, title);
 }

 modal() {
   return dialog_modal(this.nativeObj);
 }

 quit(code) {
   return dialog_quit(this.nativeObj, code);
 }

 isQuited() {
   return dialog_is_quited(this.nativeObj);
 }

 isModal() {
   return dialog_is_modal(this.nativeObj);
 }

 static toast(text, duration) {
   return dialog_toast(text, duration);
 }

 static info(text) {
   return dialog_info(text);
 }

 static warn(text) {
   return dialog_warn(text);
 }

 static confirm(text) {
   return dialog_confirm(text);
 }

 get highlight() {
   return dialog_t_get_prop_highlight(this.nativeObj);
 }

}

export class Dragger extends Widget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new Dragger(dragger_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new Dragger(dragger_cast(widget ? (widget.nativeObj || widget) : null));
 }

 setRange(x_min, y_min, x_max, y_max) {
   return new Widget(dragger_set_range(this.nativeObj, x_min, y_min, x_max, y_max));
 }

 get xMin() {
   return dragger_t_get_prop_x_min(this.nativeObj);
 }

 get yMin() {
   return dragger_t_get_prop_y_min(this.nativeObj);
 }

 get xMax() {
   return dragger_t_get_prop_x_max(this.nativeObj);
 }

 get yMax() {
   return dragger_t_get_prop_y_max(this.nativeObj);
 }

}

export class Edit extends Widget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new Edit(edit_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new Edit(edit_cast(widget ? (widget.nativeObj || widget) : null));
 }

 getInt() {
   return edit_get_int(this.nativeObj);
 }

 getDouble() {
   return edit_get_double(this.nativeObj);
 }

 setInt(value) {
   return edit_set_int(this.nativeObj, value);
 }

 setDouble(value) {
   return edit_set_double(this.nativeObj, value);
 }

 setTextLimit(min, max) {
   return edit_set_text_limit(this.nativeObj, min, max);
 }

 setIntLimit(min, max, step) {
   return edit_set_int_limit(this.nativeObj, min, max, step);
 }

 setFloatLimit(min, max, step) {
   return edit_set_float_limit(this.nativeObj, min, max, step);
 }

 setReadonly(readonly) {
   return edit_set_readonly(this.nativeObj, readonly);
 }

 setAutoFix(auto_fix) {
   return edit_set_auto_fix(this.nativeObj, auto_fix);
 }

 setInputType(type) {
   return edit_set_input_type(this.nativeObj, type);
 }

 setInputTips(tips) {
   return edit_set_input_tips(this.nativeObj, tips);
 }

 setPasswordVisible(password_visible) {
   return edit_set_password_visible(this.nativeObj, password_visible);
 }

 setFocus(focus) {
   return edit_set_focus(this.nativeObj, focus);
 }

 get readonly() {
   return edit_t_get_prop_readonly(this.nativeObj);
 }

 get passwordVisible() {
   return edit_t_get_prop_password_visible(this.nativeObj);
 }

 get autoFix() {
   return edit_t_get_prop_auto_fix(this.nativeObj);
 }

 get topMargin() {
   return edit_t_get_prop_top_margin(this.nativeObj);
 }

 get bottomMargin() {
   return edit_t_get_prop_bottom_margin(this.nativeObj);
 }

 get leftMargin() {
   return edit_t_get_prop_left_margin(this.nativeObj);
 }

 get rightMargin() {
   return edit_t_get_prop_right_margin(this.nativeObj);
 }

 get tips() {
   return edit_t_get_prop_tips(this.nativeObj);
 }

 get focus() {
   return edit_t_get_prop_focus(this.nativeObj);
 }

}

export class GridItem extends Widget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new GridItem(grid_item_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new GridItem(grid_item_cast(widget ? (widget.nativeObj || widget) : null));
 }

}

export class Grid extends Widget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new Grid(grid_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new Grid(grid_cast(widget ? (widget.nativeObj || widget) : null));
 }

}

export class GroupBox extends Widget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new GroupBox(group_box_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new GroupBox(group_box_cast(widget ? (widget.nativeObj || widget) : null));
 }

}

export class Popup extends Widget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new Popup(popup_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new Popup(popup_cast(widget ? (widget.nativeObj || widget) : null));
 }

 setCloseWhenClick(close_when_click) {
   return popup_set_close_when_click(this.nativeObj, close_when_click);
 }

 setCloseWhenClickOutside(close_when_click_outside) {
   return popup_set_close_when_click_outside(this.nativeObj, close_when_click_outside);
 }

 get closeWhenClick() {
   return popup_t_get_prop_close_when_click(this.nativeObj);
 }

 get closeWhenClickOutside() {
   return popup_t_get_prop_close_when_click_outside(this.nativeObj);
 }

}

export class Label extends Widget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new Label(label_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 setLength(length) {
   return label_set_length(this.nativeObj, length);
 }

 resizeToContent(min_w, max_w, min_h, max_h) {
   return label_resize_to_content(this.nativeObj, min_w, max_w, min_h, max_h);
 }

 static cast(widget) {
   return new Label(label_cast(widget ? (widget.nativeObj || widget) : null));
 }

 get length() {
   return label_t_get_prop_length(this.nativeObj);
 }

}

export class Pages extends Widget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new Pages(pages_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new Pages(pages_cast(widget ? (widget.nativeObj || widget) : null));
 }

 setActive(index) {
   return pages_set_active(this.nativeObj, index);
 }

 setActiveByName(name) {
   return pages_set_active_by_name(this.nativeObj, name);
 }

 get active() {
   return pages_t_get_prop_active(this.nativeObj);
 }

}

export class ImageAnimation extends Widget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new ImageAnimation(image_animation_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 setLoop(loop) {
   return image_animation_set_loop(this.nativeObj, loop);
 }

 setImage(image) {
   return image_animation_set_image(this.nativeObj, image);
 }

 setInterval(interval) {
   return image_animation_set_interval(this.nativeObj, interval);
 }

 setDelay(delay) {
   return image_animation_set_delay(this.nativeObj, delay);
 }

 setAutoPlay(auto_play) {
   return image_animation_set_auto_play(this.nativeObj, auto_play);
 }

 setSequence(sequence) {
   return image_animation_set_sequence(this.nativeObj, sequence);
 }

 setRangeSequence(start_index, end_index) {
   return image_animation_set_range_sequence(this.nativeObj, start_index, end_index);
 }

 play() {
   return image_animation_play(this.nativeObj);
 }

 stop() {
   return image_animation_stop(this.nativeObj);
 }

 pause() {
   return image_animation_pause(this.nativeObj);
 }

 setFormat(format) {
   return image_animation_set_format(this.nativeObj, format);
 }

 setUnloadAfterPaint(unload_after_paint) {
   return image_animation_set_unload_after_paint(this.nativeObj, unload_after_paint);
 }

 static cast(widget) {
   return new ImageAnimation(image_animation_cast(widget ? (widget.nativeObj || widget) : null));
 }

 get image() {
   return image_animation_t_get_prop_image(this.nativeObj);
 }

 get sequence() {
   return image_animation_t_get_prop_sequence(this.nativeObj);
 }

 get startIndex() {
   return image_animation_t_get_prop_start_index(this.nativeObj);
 }

 get endIndex() {
   return image_animation_t_get_prop_end_index(this.nativeObj);
 }

 get loop() {
   return image_animation_t_get_prop_loop(this.nativeObj);
 }

 get autoPlay() {
   return image_animation_t_get_prop_auto_play(this.nativeObj);
 }

 get unloadAfterPaint() {
   return image_animation_t_get_prop_unload_after_paint(this.nativeObj);
 }

 get format() {
   return image_animation_t_get_prop_format(this.nativeObj);
 }

 get interval() {
   return image_animation_t_get_prop_interval(this.nativeObj);
 }

 get delay() {
   return image_animation_t_get_prop_delay(this.nativeObj);
 }

}

export class Image extends ImageBase {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new Image(image_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 setDrawType(draw_type) {
   return image_set_draw_type(this.nativeObj, draw_type);
 }

 static cast(widget) {
   return new Image(image_cast(widget ? (widget.nativeObj || widget) : null));
 }

 get drawType() {
   return image_t_get_prop_draw_type(this.nativeObj);
 }

}

export class SvgImage extends ImageBase {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new SvgImage(svg_image_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new SvgImage(svg_image_cast(widget ? (widget.nativeObj || widget) : null));
 }

}

export class SpinBox extends Edit {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new SpinBox(spin_box_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new SpinBox(spin_box_cast(widget ? (widget.nativeObj || widget) : null));
 }

}

export class ObjectDefault extends ObjectBase {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create() {
   return new ObjectDefault(object_default_create());
 }

 unref() {
   return object_default_unref(this.nativeObj);
 }

 get propsSize() {
   return object_default_t_get_prop_props_size(this.nativeObj);
 }

}

export class GifImage extends ImageBase {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new GifImage(gif_image_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new GifImage(gif_image_cast(widget ? (widget.nativeObj || widget) : null));
 }

}

export class TimerInfo extends ObjectBase {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static cast(timer) {
   return new TimerInfo(timer_info_cast(timer ? (timer.nativeObj || timer) : null));
 }

 get ctx() {
   return timer_info_t_get_prop_ctx(this.nativeObj);
 }

 get id() {
   return timer_info_t_get_prop_id(this.nativeObj);
 }

 get now() {
   return timer_info_t_get_prop_now(this.nativeObj);
 }

 get userChangedTime() {
   return timer_info_t_get_prop_user_changed_time(this.nativeObj);
 }

}

export class IdleInfo extends ObjectBase {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static cast(idle) {
   return new IdleInfo(idle_info_cast(idle ? (idle.nativeObj || idle) : null));
 }

 get ctx() {
   return idle_info_t_get_prop_ctx(this.nativeObj);
 }

 get id() {
   return idle_info_t_get_prop_id(this.nativeObj);
 }

}

export class SystemBar extends WindowBase {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new SystemBar(system_bar_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new SystemBar(system_bar_cast(widget ? (widget.nativeObj || widget) : null));
 }

}

}
