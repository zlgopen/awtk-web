

declare global {
    interface Window { Module: any; TBrowser:any}
}

function wrap_on_event(func:any) {
  return function(ctx:any, evt:any) {
    return func(evt, ctx);
  }
}
function wrap_on_visit(func:any) {
  return function(ctx:any, data:any) {
    return func(data, ctx);
  }
}

export function init(w:number, h:number, title:string, isDesktop:boolean) {
  console.log('init(for compatible)')
}
var Module : any = window.Module || {}

var TBrowser: any = window.TBrowser || {}

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
const emitter_destroy = Module.cwrap("emitter_destroy", 
    "number", ["number"]);
const emitter_cast = Module.cwrap("emitter_cast", 
    "number", ["number"]);
const rectf_t_get_prop_x = Module.cwrap("rectf_t_get_prop_x", 
    "number", ["number"]);
const rectf_t_get_prop_y = Module.cwrap("rectf_t_get_prop_y", 
    "number", ["number"]);
const rectf_t_get_prop_w = Module.cwrap("rectf_t_get_prop_w", 
    "number", ["number"]);
const rectf_t_get_prop_h = Module.cwrap("rectf_t_get_prop_h", 
    "number", ["number"]);
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
const bitmap_create = Module.cwrap("bitmap_create", 
    "number", []);
const bitmap_create_ex = Module.cwrap("bitmap_create_ex", 
    "number", ["number","number","number","number"]);
const bitmap_get_bpp = Module.cwrap("bitmap_get_bpp", 
    "number", ["number"]);
const bitmap_destroy_with_self = Module.cwrap("bitmap_destroy_with_self", 
    "number", ["number"]);
const bitmap_get_bpp_of_format = Module.cwrap("bitmap_get_bpp_of_format", 
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
const object_get_prop_bool = Module.cwrap("object_get_prop_bool", 
    "number", ["number","string","number"]);
const object_get_prop_float = Module.cwrap("object_get_prop_float", 
    "number", ["number","string","number"]);
const object_get_prop_double = Module.cwrap("object_get_prop_double", 
    "number", ["number","string","number"]);
const object_remove_prop = Module.cwrap("object_remove_prop", 
    "number", ["number","string"]);
const object_set_prop = Module.cwrap("object_set_prop", 
    "number", ["number","string","number"]);
const object_set_prop_str = Module.cwrap("object_set_prop_str", 
    "number", ["number","string","string"]);
const object_set_prop_object = Module.cwrap("object_set_prop_object", 
    "number", ["number","string","number"]);
const object_set_prop_int = Module.cwrap("object_set_prop_int", 
    "number", ["number","string","number"]);
const object_set_prop_bool = Module.cwrap("object_set_prop_bool", 
    "number", ["number","string","number"]);
const object_set_prop_float = Module.cwrap("object_set_prop_float", 
    "number", ["number","string","number"]);
const object_set_prop_double = Module.cwrap("object_set_prop_double", 
    "number", ["number","string","number"]);
const object_copy_prop = Module.cwrap("object_copy_prop", 
    "number", ["number","number","string"]);
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
const object_has_prop_by_path = Module.cwrap("object_has_prop_by_path", 
    "number", ["number","string"]);
const object_get_prop_str_by_path = Module.cwrap("object_get_prop_str_by_path", 
    "string", ["number","string"]);
const object_get_prop_pointer_by_path = Module.cwrap("object_get_prop_pointer_by_path", 
    "number", ["number","string"]);
const object_get_prop_object_by_path = Module.cwrap("object_get_prop_object_by_path", 
    "number", ["number","string"]);
const object_get_prop_int_by_path = Module.cwrap("object_get_prop_int_by_path", 
    "number", ["number","string","number"]);
const object_get_prop_bool_by_path = Module.cwrap("object_get_prop_bool_by_path", 
    "number", ["number","string","number"]);
const object_get_prop_float_by_path = Module.cwrap("object_get_prop_float_by_path", 
    "number", ["number","string","number"]);
const object_set_prop_by_path = Module.cwrap("object_set_prop_by_path", 
    "number", ["number","string","number"]);
const object_set_prop_str_by_path = Module.cwrap("object_set_prop_str_by_path", 
    "number", ["number","string","string"]);
const object_set_prop_object_by_path = Module.cwrap("object_set_prop_object_by_path", 
    "number", ["number","string","number"]);
const object_set_prop_int_by_path = Module.cwrap("object_set_prop_int_by_path", 
    "number", ["number","string","number"]);
const object_set_prop_bool_by_path = Module.cwrap("object_set_prop_bool_by_path", 
    "number", ["number","string","number"]);
const object_set_prop_float_by_path = Module.cwrap("object_set_prop_float_by_path", 
    "number", ["number","string","number"]);
const object_can_exec_by_path = Module.cwrap("object_can_exec_by_path", 
    "number", ["number","string","string"]);
const object_exec_by_path = Module.cwrap("object_exec_by_path", 
    "number", ["number","string","string"]);
const object_get_prop_int8 = Module.cwrap("object_get_prop_int8", 
    "number", ["number","string","number"]);
const object_set_prop_int8 = Module.cwrap("object_set_prop_int8", 
    "number", ["number","string","number"]);
const object_get_prop_uint8 = Module.cwrap("object_get_prop_uint8", 
    "number", ["number","string","number"]);
const object_set_prop_uint8 = Module.cwrap("object_set_prop_uint8", 
    "number", ["number","string","number"]);
const object_get_prop_int16 = Module.cwrap("object_get_prop_int16", 
    "number", ["number","string","number"]);
const object_set_prop_int16 = Module.cwrap("object_set_prop_int16", 
    "number", ["number","string","number"]);
const object_get_prop_uint16 = Module.cwrap("object_get_prop_uint16", 
    "number", ["number","string","number"]);
const object_set_prop_uint16 = Module.cwrap("object_set_prop_uint16", 
    "number", ["number","string","number"]);
const object_get_prop_int32 = Module.cwrap("object_get_prop_int32", 
    "number", ["number","string","number"]);
const object_set_prop_int32 = Module.cwrap("object_set_prop_int32", 
    "number", ["number","string","number"]);
const object_get_prop_uint32 = Module.cwrap("object_get_prop_uint32", 
    "number", ["number","string","number"]);
const object_set_prop_uint32 = Module.cwrap("object_set_prop_uint32", 
    "number", ["number","string","number"]);
const object_get_prop_int64 = Module.cwrap("object_get_prop_int64", 
    "number", ["number","string","number"]);
const object_set_prop_int64 = Module.cwrap("object_set_prop_int64", 
    "number", ["number","string","number"]);
const object_get_prop_uint64 = Module.cwrap("object_get_prop_uint64", 
    "number", ["number","string","number"]);
const object_set_prop_uint64 = Module.cwrap("object_set_prop_uint64", 
    "number", ["number","string","number"]);
const object_t_get_prop_ref_count = Module.cwrap("object_t_get_prop_ref_count", 
    "number", ["number"]);
const object_t_get_prop_name = Module.cwrap("object_t_get_prop_name", 
    "string", ["number"]);
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
const value_str_ex = Module.cwrap("value_str_ex", 
    "string", ["number","string","number"]);
const value_is_null = Module.cwrap("value_is_null", 
    "number", ["number"]);
const value_set_int = Module.cwrap("value_set_int", 
    "number", ["number","number"]);
const value_set_object = Module.cwrap("value_set_object", 
    "number", ["number","number"]);
const value_object = Module.cwrap("value_object", 
    "number", ["number"]);
const value_set_token = Module.cwrap("value_set_token", 
    "number", ["number","number"]);
const value_token = Module.cwrap("value_token", 
    "number", ["number"]);
const value_create = Module.cwrap("value_create", 
    "number", []);
const value_destroy = Module.cwrap("value_destroy", 
    "number", ["number"]);
const value_reset = Module.cwrap("value_reset", 
    "number", ["number"]);
const value_cast = Module.cwrap("value_cast", 
    "number", ["number"]);
const tk_init = Module.cwrap("tk_init", 
    "number", ["number","number","number","string","string"]);
const tk_run = Module.cwrap("tk_run", 
    "number", []);
const tk_quit = Module.cwrap("tk_quit", 
    "number", []);
const tk_get_pointer_x = Module.cwrap("tk_get_pointer_x", 
    "number", []);
const tk_get_pointer_y = Module.cwrap("tk_get_pointer_y", 
    "number", []);
const tk_is_pointer_pressed = Module.cwrap("tk_is_pointer_pressed", 
    "number", []);
const get_BIDI_TYPE_AUTO = Module.cwrap("get_BIDI_TYPE_AUTO", 
    "number", []);
const get_BIDI_TYPE_LTR = Module.cwrap("get_BIDI_TYPE_LTR", 
    "number", []);
const get_BIDI_TYPE_RTL = Module.cwrap("get_BIDI_TYPE_RTL", 
    "number", []);
const get_BIDI_TYPE_LRO = Module.cwrap("get_BIDI_TYPE_LRO", 
    "number", []);
const get_BIDI_TYPE_RLO = Module.cwrap("get_BIDI_TYPE_RLO", 
    "number", []);
const get_BIDI_TYPE_WLTR = Module.cwrap("get_BIDI_TYPE_WLTR", 
    "number", []);
const get_BIDI_TYPE_WRTL = Module.cwrap("get_BIDI_TYPE_WRTL", 
    "number", []);
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
const get_IMAGE_DRAW_REPEAT_Y_INVERSE = Module.cwrap("get_IMAGE_DRAW_REPEAT_Y_INVERSE", 
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
const get_IMAGE_DRAW_REPEAT9 = Module.cwrap("get_IMAGE_DRAW_REPEAT9", 
    "number", []);
const get_IMAGE_DRAW_REPEAT3_X = Module.cwrap("get_IMAGE_DRAW_REPEAT3_X", 
    "number", []);
const get_IMAGE_DRAW_REPEAT3_Y = Module.cwrap("get_IMAGE_DRAW_REPEAT3_Y", 
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
const canvas_clear_rect = Module.cwrap("canvas_clear_rect", 
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
const canvas_draw_image_ex = Module.cwrap("canvas_draw_image_ex", 
    "number", ["number","number","number","number"]);
const canvas_draw_image_ex2 = Module.cwrap("canvas_draw_image_ex2", 
    "number", ["number","number","number","number","number"]);
const canvas_get_vgcanvas = Module.cwrap("canvas_get_vgcanvas", 
    "number", ["number"]);
const canvas_cast = Module.cwrap("canvas_cast", 
    "number", ["number"]);
const canvas_reset = Module.cwrap("canvas_reset", 
    "number", ["number"]);
const canvas_t_get_prop_ox = Module.cwrap("canvas_t_get_prop_ox", 
    "number", ["number"]);
const canvas_t_get_prop_oy = Module.cwrap("canvas_t_get_prop_oy", 
    "number", ["number"]);
const canvas_t_get_prop_font_name = Module.cwrap("canvas_t_get_prop_font_name", 
    "string", ["number"]);
const canvas_t_get_prop_font_size = Module.cwrap("canvas_t_get_prop_font_size", 
    "number", ["number"]);
const canvas_t_get_prop_global_alpha = Module.cwrap("canvas_t_get_prop_global_alpha", 
    "number", ["number"]);
const get_CLIP_BOARD_DATA_TYPE_NONE = Module.cwrap("get_CLIP_BOARD_DATA_TYPE_NONE", 
    "number", []);
const get_CLIP_BOARD_DATA_TYPE_TEXT = Module.cwrap("get_CLIP_BOARD_DATA_TYPE_TEXT", 
    "number", []);
const clip_board_set_text = Module.cwrap("clip_board_set_text", 
    "number", ["string"]);
const clip_board_get_text = Module.cwrap("clip_board_get_text", 
    "string", []);
const get_DIALOG_QUIT_NONE = Module.cwrap("get_DIALOG_QUIT_NONE", 
    "number", []);
const get_DIALOG_QUIT_OK = Module.cwrap("get_DIALOG_QUIT_OK", 
    "number", []);
const get_DIALOG_QUIT_YES = Module.cwrap("get_DIALOG_QUIT_YES", 
    "number", []);
const get_DIALOG_QUIT_CANCEL = Module.cwrap("get_DIALOG_QUIT_CANCEL", 
    "number", []);
const get_DIALOG_QUIT_NO = Module.cwrap("get_DIALOG_QUIT_NO", 
    "number", []);
const get_DIALOG_QUIT_OTHER = Module.cwrap("get_DIALOG_QUIT_OTHER", 
    "number", []);
const get_EVT_POINTER_DOWN = Module.cwrap("get_EVT_POINTER_DOWN", 
    "number", []);
const get_EVT_POINTER_DOWN_BEFORE_CHILDREN = Module.cwrap("get_EVT_POINTER_DOWN_BEFORE_CHILDREN", 
    "number", []);
const get_EVT_POINTER_MOVE = Module.cwrap("get_EVT_POINTER_MOVE", 
    "number", []);
const get_EVT_POINTER_MOVE_BEFORE_CHILDREN = Module.cwrap("get_EVT_POINTER_MOVE_BEFORE_CHILDREN", 
    "number", []);
const get_EVT_POINTER_UP = Module.cwrap("get_EVT_POINTER_UP", 
    "number", []);
const get_EVT_POINTER_UP_BEFORE_CHILDREN = Module.cwrap("get_EVT_POINTER_UP_BEFORE_CHILDREN", 
    "number", []);
const get_EVT_WHEEL = Module.cwrap("get_EVT_WHEEL", 
    "number", []);
const get_EVT_WHEEL_BEFORE_CHILDREN = Module.cwrap("get_EVT_WHEEL_BEFORE_CHILDREN", 
    "number", []);
const get_EVT_POINTER_DOWN_ABORT = Module.cwrap("get_EVT_POINTER_DOWN_ABORT", 
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
const get_EVT_KEY_LONG_PRESS = Module.cwrap("get_EVT_KEY_LONG_PRESS", 
    "number", []);
const get_EVT_KEY_DOWN_BEFORE_CHILDREN = Module.cwrap("get_EVT_KEY_DOWN_BEFORE_CHILDREN", 
    "number", []);
const get_EVT_KEY_REPEAT = Module.cwrap("get_EVT_KEY_REPEAT", 
    "number", []);
const get_EVT_KEY_UP = Module.cwrap("get_EVT_KEY_UP", 
    "number", []);
const get_EVT_KEY_UP_BEFORE_CHILDREN = Module.cwrap("get_EVT_KEY_UP_BEFORE_CHILDREN", 
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
const get_EVT_WIDGET_LOAD = Module.cwrap("get_EVT_WIDGET_LOAD", 
    "number", []);
const get_EVT_WINDOW_WILL_OPEN = Module.cwrap("get_EVT_WINDOW_WILL_OPEN", 
    "number", []);
const get_EVT_WINDOW_OPEN = Module.cwrap("get_EVT_WINDOW_OPEN", 
    "number", []);
const get_EVT_WINDOW_TO_BACKGROUND = Module.cwrap("get_EVT_WINDOW_TO_BACKGROUND", 
    "number", []);
const get_EVT_WINDOW_TO_FOREGROUND = Module.cwrap("get_EVT_WINDOW_TO_FOREGROUND", 
    "number", []);
const get_EVT_WINDOW_CLOSE = Module.cwrap("get_EVT_WINDOW_CLOSE", 
    "number", []);
const get_EVT_REQUEST_CLOSE_WINDOW = Module.cwrap("get_EVT_REQUEST_CLOSE_WINDOW", 
    "number", []);
const get_EVT_TOP_WINDOW_CHANGED = Module.cwrap("get_EVT_TOP_WINDOW_CHANGED", 
    "number", []);
const get_EVT_IM_START = Module.cwrap("get_EVT_IM_START", 
    "number", []);
const get_EVT_IM_STOP = Module.cwrap("get_EVT_IM_STOP", 
    "number", []);
const get_EVT_IM_COMMIT = Module.cwrap("get_EVT_IM_COMMIT", 
    "number", []);
const get_EVT_IM_CLEAR = Module.cwrap("get_EVT_IM_CLEAR", 
    "number", []);
const get_EVT_IM_CANCEL = Module.cwrap("get_EVT_IM_CANCEL", 
    "number", []);
const get_EVT_IM_PREEDIT = Module.cwrap("get_EVT_IM_PREEDIT", 
    "number", []);
const get_EVT_IM_PREEDIT_CONFIRM = Module.cwrap("get_EVT_IM_PREEDIT_CONFIRM", 
    "number", []);
const get_EVT_IM_PREEDIT_ABORT = Module.cwrap("get_EVT_IM_PREEDIT_ABORT", 
    "number", []);
const get_EVT_IM_SHOW_CANDIDATES = Module.cwrap("get_EVT_IM_SHOW_CANDIDATES", 
    "number", []);
const get_EVT_IM_SHOW_PRE_CANDIDATES = Module.cwrap("get_EVT_IM_SHOW_PRE_CANDIDATES", 
    "number", []);
const get_EVT_IM_LANG_CHANGED = Module.cwrap("get_EVT_IM_LANG_CHANGED", 
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
const get_EVT_RESET = Module.cwrap("get_EVT_RESET", 
    "number", []);
const get_EVT_SCREEN_SAVER = Module.cwrap("get_EVT_SCREEN_SAVER", 
    "number", []);
const get_EVT_LOW_MEMORY = Module.cwrap("get_EVT_LOW_MEMORY", 
    "number", []);
const get_EVT_OUT_OF_MEMORY = Module.cwrap("get_EVT_OUT_OF_MEMORY", 
    "number", []);
const get_EVT_ORIENTATION_WILL_CHANGED = Module.cwrap("get_EVT_ORIENTATION_WILL_CHANGED", 
    "number", []);
const get_EVT_ORIENTATION_CHANGED = Module.cwrap("get_EVT_ORIENTATION_CHANGED", 
    "number", []);
const get_EVT_WIDGET_CREATED = Module.cwrap("get_EVT_WIDGET_CREATED", 
    "number", []);
const get_EVT_REQUEST_QUIT_APP = Module.cwrap("get_EVT_REQUEST_QUIT_APP", 
    "number", []);
const get_EVT_THEME_CHANGED = Module.cwrap("get_EVT_THEME_CHANGED", 
    "number", []);
const get_EVT_WIDGET_ADD_CHILD = Module.cwrap("get_EVT_WIDGET_ADD_CHILD", 
    "number", []);
const get_EVT_WIDGET_REMOVE_CHILD = Module.cwrap("get_EVT_WIDGET_REMOVE_CHILD", 
    "number", []);
const get_EVT_SCROLL_START = Module.cwrap("get_EVT_SCROLL_START", 
    "number", []);
const get_EVT_SCROLL = Module.cwrap("get_EVT_SCROLL", 
    "number", []);
const get_EVT_SCROLL_END = Module.cwrap("get_EVT_SCROLL_END", 
    "number", []);
const get_EVT_MULTI_GESTURE = Module.cwrap("get_EVT_MULTI_GESTURE", 
    "number", []);
const get_EVT_PAGE_CHANGED = Module.cwrap("get_EVT_PAGE_CHANGED", 
    "number", []);
const get_EVT_ASSET_MANAGER_LOAD_ASSET = Module.cwrap("get_EVT_ASSET_MANAGER_LOAD_ASSET", 
    "number", []);
const get_EVT_ASSET_MANAGER_UNLOAD_ASSET = Module.cwrap("get_EVT_ASSET_MANAGER_UNLOAD_ASSET", 
    "number", []);
const get_EVT_ASSET_MANAGER_CLEAR_CACHE = Module.cwrap("get_EVT_ASSET_MANAGER_CLEAR_CACHE", 
    "number", []);
const get_EVT_TIMER = Module.cwrap("get_EVT_TIMER", 
    "number", []);
const get_EVT_REQ_START = Module.cwrap("get_EVT_REQ_START", 
    "number", []);
const get_EVT_USER_START = Module.cwrap("get_EVT_USER_START", 
    "number", []);
const get_EVT_NONE = Module.cwrap("get_EVT_NONE", 
    "number", []);
const get_EVT_PROP_WILL_CHANGE = Module.cwrap("get_EVT_PROP_WILL_CHANGE", 
    "number", []);
const get_EVT_PROP_CHANGED = Module.cwrap("get_EVT_PROP_CHANGED", 
    "number", []);
const get_EVT_CMD_WILL_EXEC = Module.cwrap("get_EVT_CMD_WILL_EXEC", 
    "number", []);
const get_EVT_CMD_EXECED = Module.cwrap("get_EVT_CMD_EXECED", 
    "number", []);
const get_EVT_CMD_CAN_EXEC = Module.cwrap("get_EVT_CMD_CAN_EXEC", 
    "number", []);
const get_EVT_ITEMS_WILL_CHANGE = Module.cwrap("get_EVT_ITEMS_WILL_CHANGE", 
    "number", []);
const get_EVT_ITEMS_CHANGED = Module.cwrap("get_EVT_ITEMS_CHANGED", 
    "number", []);
const get_EVT_PROPS_CHANGED = Module.cwrap("get_EVT_PROPS_CHANGED", 
    "number", []);
const get_EVT_PROGRESS = Module.cwrap("get_EVT_PROGRESS", 
    "number", []);
const get_EVT_DONE = Module.cwrap("get_EVT_DONE", 
    "number", []);
const get_EVT_ERROR = Module.cwrap("get_EVT_ERROR", 
    "number", []);
const get_EVT_DESTROY = Module.cwrap("get_EVT_DESTROY", 
    "number", []);
const event_from_name = Module.cwrap("event_from_name", 
    "number", ["string"]);
const event_cast = Module.cwrap("event_cast", 
    "number", ["number"]);
const event_get_type = Module.cwrap("event_get_type", 
    "number", ["number"]);
const event_create = Module.cwrap("event_create", 
    "number", ["number"]);
const event_destroy = Module.cwrap("event_destroy", 
    "number", ["number"]);
const event_t_get_prop_type = Module.cwrap("event_t_get_prop_type", 
    "number", ["number"]);
const event_t_get_prop_size = Module.cwrap("event_t_get_prop_size", 
    "number", ["number"]);
const event_t_get_prop_time = Module.cwrap("event_t_get_prop_time", 
    "number", ["number"]);
const event_t_get_prop_target = Module.cwrap("event_t_get_prop_target", 
    "number", ["number"]);
const font_manager_unload_font = Module.cwrap("font_manager_unload_font", 
    "number", ["number","string","number"]);
const font_manager_shrink_cache = Module.cwrap("font_manager_shrink_cache", 
    "number", ["number","number"]);
const font_manager_unload_all = Module.cwrap("font_manager_unload_all", 
    "number", ["number"]);
const get_GLYPH_FMT_ALPHA = Module.cwrap("get_GLYPH_FMT_ALPHA", 
    "number", []);
const get_GLYPH_FMT_MONO = Module.cwrap("get_GLYPH_FMT_MONO", 
    "number", []);
const get_GLYPH_FMT_RGBA = Module.cwrap("get_GLYPH_FMT_RGBA", 
    "number", []);
const idle_add = Module.cwrap("idle_add", 
    "number", ["number","number"]);
const idle_remove = Module.cwrap("idle_remove", 
    "number", ["number"]);
const idle_remove_all_by_ctx = Module.cwrap("idle_remove_all_by_ctx", 
    "number", ["number"]);
const image_manager = Module.cwrap("image_manager", 
    "number", []);
const image_manager_get_bitmap = Module.cwrap("image_manager_get_bitmap", 
    "number", ["number","string","number"]);
const image_manager_preload = Module.cwrap("image_manager_preload", 
    "number", ["number","string"]);
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
const get_INPUT_IPV4 = Module.cwrap("get_INPUT_IPV4", 
    "number", []);
const get_INPUT_DATE = Module.cwrap("get_INPUT_DATE", 
    "number", []);
const get_INPUT_TIME = Module.cwrap("get_INPUT_TIME", 
    "number", []);
const get_INPUT_TIME_FULL = Module.cwrap("get_INPUT_TIME_FULL", 
    "number", []);
const get_INPUT_CUSTOM = Module.cwrap("get_INPUT_CUSTOM", 
    "number", []);
const get_INPUT_CUSTOM_PASSWORD = Module.cwrap("get_INPUT_CUSTOM_PASSWORD", 
    "number", []);
const get_INPUT_ASCII = Module.cwrap("get_INPUT_ASCII", 
    "number", []);
const input_method_commit_text = Module.cwrap("input_method_commit_text", 
    "number", ["number","string"]);
const input_method_set_lang = Module.cwrap("input_method_set_lang", 
    "number", ["number","string"]);
const input_method_get_lang = Module.cwrap("input_method_get_lang", 
    "string", ["number"]);
const input_method_dispatch_key = Module.cwrap("input_method_dispatch_key", 
    "number", ["number","number"]);
const input_method_dispatch_keys = Module.cwrap("input_method_dispatch_keys", 
    "number", ["number","string"]);
const input_method_dispatch_preedit = Module.cwrap("input_method_dispatch_preedit", 
    "number", ["number"]);
const input_method_dispatch_preedit_confirm = Module.cwrap("input_method_dispatch_preedit_confirm", 
    "number", ["number"]);
const input_method_dispatch_preedit_abort = Module.cwrap("input_method_dispatch_preedit_abort", 
    "number", ["number"]);
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
const get_TK_KEY_LSHIFT = Module.cwrap("get_TK_KEY_LSHIFT", 
    "number", []);
const get_TK_KEY_RSHIFT = Module.cwrap("get_TK_KEY_RSHIFT", 
    "number", []);
const get_TK_KEY_LCTRL = Module.cwrap("get_TK_KEY_LCTRL", 
    "number", []);
const get_TK_KEY_RCTRL = Module.cwrap("get_TK_KEY_RCTRL", 
    "number", []);
const get_TK_KEY_LALT = Module.cwrap("get_TK_KEY_LALT", 
    "number", []);
const get_TK_KEY_RALT = Module.cwrap("get_TK_KEY_RALT", 
    "number", []);
const get_TK_KEY_CAPSLOCK = Module.cwrap("get_TK_KEY_CAPSLOCK", 
    "number", []);
const get_TK_KEY_HOME = Module.cwrap("get_TK_KEY_HOME", 
    "number", []);
const get_TK_KEY_END = Module.cwrap("get_TK_KEY_END", 
    "number", []);
const get_TK_KEY_INSERT = Module.cwrap("get_TK_KEY_INSERT", 
    "number", []);
const get_TK_KEY_UP = Module.cwrap("get_TK_KEY_UP", 
    "number", []);
const get_TK_KEY_DOWN = Module.cwrap("get_TK_KEY_DOWN", 
    "number", []);
const get_TK_KEY_LEFT = Module.cwrap("get_TK_KEY_LEFT", 
    "number", []);
const get_TK_KEY_RIGHT = Module.cwrap("get_TK_KEY_RIGHT", 
    "number", []);
const get_TK_KEY_PAGEUP = Module.cwrap("get_TK_KEY_PAGEUP", 
    "number", []);
const get_TK_KEY_PAGEDOWN = Module.cwrap("get_TK_KEY_PAGEDOWN", 
    "number", []);
const get_TK_KEY_F1 = Module.cwrap("get_TK_KEY_F1", 
    "number", []);
const get_TK_KEY_F2 = Module.cwrap("get_TK_KEY_F2", 
    "number", []);
const get_TK_KEY_F3 = Module.cwrap("get_TK_KEY_F3", 
    "number", []);
const get_TK_KEY_F4 = Module.cwrap("get_TK_KEY_F4", 
    "number", []);
const get_TK_KEY_F5 = Module.cwrap("get_TK_KEY_F5", 
    "number", []);
const get_TK_KEY_F6 = Module.cwrap("get_TK_KEY_F6", 
    "number", []);
const get_TK_KEY_F7 = Module.cwrap("get_TK_KEY_F7", 
    "number", []);
const get_TK_KEY_F8 = Module.cwrap("get_TK_KEY_F8", 
    "number", []);
const get_TK_KEY_F9 = Module.cwrap("get_TK_KEY_F9", 
    "number", []);
const get_TK_KEY_F10 = Module.cwrap("get_TK_KEY_F10", 
    "number", []);
const get_TK_KEY_F11 = Module.cwrap("get_TK_KEY_F11", 
    "number", []);
const get_TK_KEY_F12 = Module.cwrap("get_TK_KEY_F12", 
    "number", []);
const get_TK_KEY_MENU = Module.cwrap("get_TK_KEY_MENU", 
    "number", []);
const get_TK_KEY_COMMAND = Module.cwrap("get_TK_KEY_COMMAND", 
    "number", []);
const get_TK_KEY_BACK = Module.cwrap("get_TK_KEY_BACK", 
    "number", []);
const get_TK_KEY_CANCEL = Module.cwrap("get_TK_KEY_CANCEL", 
    "number", []);
const get_TK_KEY_WHEEL = Module.cwrap("get_TK_KEY_WHEEL", 
    "number", []);
const locale_info = Module.cwrap("locale_info", 
    "number", []);
const locale_info_tr = Module.cwrap("locale_info_tr", 
    "string", ["number","string"]);
const locale_info_change = Module.cwrap("locale_info_change", 
    "number", ["number","string","string"]);
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
const get_STYLE_ID_HIGHLIGHT_FONT_NAME = Module.cwrap("get_STYLE_ID_HIGHLIGHT_FONT_NAME", 
    "string", []);
const get_STYLE_ID_HIGHLIGHT_FONT_SIZE = Module.cwrap("get_STYLE_ID_HIGHLIGHT_FONT_SIZE", 
    "string", []);
const get_STYLE_ID_HIGHLIGHT_TEXT_COLOR = Module.cwrap("get_STYLE_ID_HIGHLIGHT_TEXT_COLOR", 
    "string", []);
const get_STYLE_ID_TIPS_TEXT_COLOR = Module.cwrap("get_STYLE_ID_TIPS_TEXT_COLOR", 
    "string", []);
const get_STYLE_ID_TEXT_ALIGN_H = Module.cwrap("get_STYLE_ID_TEXT_ALIGN_H", 
    "string", []);
const get_STYLE_ID_TEXT_ALIGN_V = Module.cwrap("get_STYLE_ID_TEXT_ALIGN_V", 
    "string", []);
const get_STYLE_ID_BORDER_COLOR = Module.cwrap("get_STYLE_ID_BORDER_COLOR", 
    "string", []);
const get_STYLE_ID_BORDER_WIDTH = Module.cwrap("get_STYLE_ID_BORDER_WIDTH", 
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
const get_STYLE_ID_SPACER = Module.cwrap("get_STYLE_ID_SPACER", 
    "string", []);
const get_STYLE_ID_MARGIN = Module.cwrap("get_STYLE_ID_MARGIN", 
    "string", []);
const get_STYLE_ID_MARGIN_LEFT = Module.cwrap("get_STYLE_ID_MARGIN_LEFT", 
    "string", []);
const get_STYLE_ID_MARGIN_RIGHT = Module.cwrap("get_STYLE_ID_MARGIN_RIGHT", 
    "string", []);
const get_STYLE_ID_MARGIN_TOP = Module.cwrap("get_STYLE_ID_MARGIN_TOP", 
    "string", []);
const get_STYLE_ID_MARGIN_BOTTOM = Module.cwrap("get_STYLE_ID_MARGIN_BOTTOM", 
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
const get_STYLE_ID_ROUND_RADIUS_TOP_LETF = Module.cwrap("get_STYLE_ID_ROUND_RADIUS_TOP_LETF", 
    "string", []);
const get_STYLE_ID_ROUND_RADIUS_TOP_RIGHT = Module.cwrap("get_STYLE_ID_ROUND_RADIUS_TOP_RIGHT", 
    "string", []);
const get_STYLE_ID_ROUND_RADIUS_BOTTOM_LETF = Module.cwrap("get_STYLE_ID_ROUND_RADIUS_BOTTOM_LETF", 
    "string", []);
const get_STYLE_ID_ROUND_RADIUS_BOTTOM_RIGHT = Module.cwrap("get_STYLE_ID_ROUND_RADIUS_BOTTOM_RIGHT", 
    "string", []);
const get_STYLE_ID_CHILDREN_LAYOUT = Module.cwrap("get_STYLE_ID_CHILDREN_LAYOUT", 
    "string", []);
const get_STYLE_ID_SELF_LAYOUT = Module.cwrap("get_STYLE_ID_SELF_LAYOUT", 
    "string", []);
const get_STYLE_ID_FOCUSABLE = Module.cwrap("get_STYLE_ID_FOCUSABLE", 
    "string", []);
const get_STYLE_ID_FEEDBACK = Module.cwrap("get_STYLE_ID_FEEDBACK", 
    "string", []);
const style_notify_widget_state_changed = Module.cwrap("style_notify_widget_state_changed", 
    "number", ["number","number"]);
const style_is_valid = Module.cwrap("style_is_valid", 
    "number", ["number"]);
const style_get_int = Module.cwrap("style_get_int", 
    "number", ["number","string","number"]);
const style_get_uint = Module.cwrap("style_get_uint", 
    "number", ["number","string","number"]);
const style_get_str = Module.cwrap("style_get_str", 
    "string", ["number","string","string"]);
const style_set = Module.cwrap("style_set", 
    "number", ["number","string","string","number"]);
const style_update_state = Module.cwrap("style_update_state", 
    "number", ["number","number","string","string","string"]);
const style_get_style_state = Module.cwrap("style_get_style_state", 
    "string", ["number"]);
const style_is_mutable = Module.cwrap("style_is_mutable", 
    "number", ["number"]);
const style_get_style_type = Module.cwrap("style_get_style_type", 
    "string", ["number"]);
const theme = Module.cwrap("theme", 
    "number", []);
const timer_add = Module.cwrap("timer_add", 
    "number", ["number","number","number"]);
const timer_remove = Module.cwrap("timer_remove", 
    "number", ["number"]);
const timer_remove_all_by_ctx = Module.cwrap("timer_remove_all_by_ctx", 
    "number", ["number"]);
const timer_reset = Module.cwrap("timer_reset", 
    "number", ["number"]);
const timer_suspend = Module.cwrap("timer_suspend", 
    "number", ["number"]);
const timer_resume = Module.cwrap("timer_resume", 
    "number", ["number"]);
const timer_modify = Module.cwrap("timer_modify", 
    "number", ["number","number"]);
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
const get_APP_MOBILE = Module.cwrap("get_APP_MOBILE", 
    "number", []);
const get_APP_SIMULATOR = Module.cwrap("get_APP_SIMULATOR", 
    "number", []);
const get_APP_DESKTOP = Module.cwrap("get_APP_DESKTOP", 
    "number", []);
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
const get_BITMAP_FMT_GRAY = Module.cwrap("get_BITMAP_FMT_GRAY", 
    "number", []);
const get_BITMAP_FMT_MONO = Module.cwrap("get_BITMAP_FMT_MONO", 
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
const get_BITMAP_FLAG_PREMULTI_ALPHA = Module.cwrap("get_BITMAP_FLAG_PREMULTI_ALPHA", 
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
const vgcanvas_path_winding = Module.cwrap("vgcanvas_path_winding", 
    "number", ["number","number"]);
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
const vgcanvas_clip_path = Module.cwrap("vgcanvas_clip_path", 
    "number", ["number"]);
const vgcanvas_clip_rect = Module.cwrap("vgcanvas_clip_rect", 
    "number", ["number","number","number","number","number"]);
const vgcanvas_intersect_clip_rect = Module.cwrap("vgcanvas_intersect_clip_rect", 
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
const vgcanvas_t_get_prop_stride = Module.cwrap("vgcanvas_t_get_prop_stride", 
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
const get_VGCANVAS_LINE_CAP_ROUND = Module.cwrap("get_VGCANVAS_LINE_CAP_ROUND", 
    "string", []);
const get_VGCANVAS_LINE_CAP_SQUARE = Module.cwrap("get_VGCANVAS_LINE_CAP_SQUARE", 
    "string", []);
const get_VGCANVAS_LINE_CAP_BUTT = Module.cwrap("get_VGCANVAS_LINE_CAP_BUTT", 
    "string", []);
const get_VGCANVAS_LINE_JOIN_ROUND = Module.cwrap("get_VGCANVAS_LINE_JOIN_ROUND", 
    "string", []);
const get_VGCANVAS_LINE_JOIN_BEVEL = Module.cwrap("get_VGCANVAS_LINE_JOIN_BEVEL", 
    "string", []);
const get_VGCANVAS_LINE_JOIN_MITTER = Module.cwrap("get_VGCANVAS_LINE_JOIN_MITTER", 
    "string", []);
const get_WIDGET_PROP_EXEC = Module.cwrap("get_WIDGET_PROP_EXEC", 
    "string", []);
const get_WIDGET_PROP_X = Module.cwrap("get_WIDGET_PROP_X", 
    "string", []);
const get_WIDGET_PROP_Y = Module.cwrap("get_WIDGET_PROP_Y", 
    "string", []);
const get_WIDGET_PROP_W = Module.cwrap("get_WIDGET_PROP_W", 
    "string", []);
const get_WIDGET_PROP_H = Module.cwrap("get_WIDGET_PROP_H", 
    "string", []);
const get_WIDGET_PROP_MAX_H = Module.cwrap("get_WIDGET_PROP_MAX_H", 
    "string", []);
const get_WIDGET_PROP_DESIGN_W = Module.cwrap("get_WIDGET_PROP_DESIGN_W", 
    "string", []);
const get_WIDGET_PROP_DESIGN_H = Module.cwrap("get_WIDGET_PROP_DESIGN_H", 
    "string", []);
const get_WIDGET_PROP_AUTO_SCALE_CHILDREN_X = Module.cwrap("get_WIDGET_PROP_AUTO_SCALE_CHILDREN_X", 
    "string", []);
const get_WIDGET_PROP_AUTO_SCALE_CHILDREN_Y = Module.cwrap("get_WIDGET_PROP_AUTO_SCALE_CHILDREN_Y", 
    "string", []);
const get_WIDGET_PROP_AUTO_SCALE_CHILDREN_W = Module.cwrap("get_WIDGET_PROP_AUTO_SCALE_CHILDREN_W", 
    "string", []);
const get_WIDGET_PROP_AUTO_SCALE_CHILDREN_H = Module.cwrap("get_WIDGET_PROP_AUTO_SCALE_CHILDREN_H", 
    "string", []);
const get_WIDGET_PROP_INPUTING = Module.cwrap("get_WIDGET_PROP_INPUTING", 
    "string", []);
const get_WIDGET_PROP_ALWAYS_ON_TOP = Module.cwrap("get_WIDGET_PROP_ALWAYS_ON_TOP", 
    "string", []);
const get_WIDGET_PROP_CARET_X = Module.cwrap("get_WIDGET_PROP_CARET_X", 
    "string", []);
const get_WIDGET_PROP_CARET_Y = Module.cwrap("get_WIDGET_PROP_CARET_Y", 
    "string", []);
const get_WIDGET_PROP_DIRTY_RECT_TOLERANCE = Module.cwrap("get_WIDGET_PROP_DIRTY_RECT_TOLERANCE", 
    "string", []);
const get_WIDGET_PROP_BIDI = Module.cwrap("get_WIDGET_PROP_BIDI", 
    "string", []);
const get_WIDGET_PROP_CANVAS = Module.cwrap("get_WIDGET_PROP_CANVAS", 
    "string", []);
const get_WIDGET_PROP_LOCALIZE_OPTIONS = Module.cwrap("get_WIDGET_PROP_LOCALIZE_OPTIONS", 
    "string", []);
const get_WIDGET_PROP_NATIVE_WINDOW = Module.cwrap("get_WIDGET_PROP_NATIVE_WINDOW", 
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
const get_WIDGET_PROP_AUTO_ADJUST_SIZE = Module.cwrap("get_WIDGET_PROP_AUTO_ADJUST_SIZE", 
    "string", []);
const get_WIDGET_PROP_SINGLE_INSTANCE = Module.cwrap("get_WIDGET_PROP_SINGLE_INSTANCE", 
    "string", []);
const get_WIDGET_PROP_STRONGLY_FOCUS = Module.cwrap("get_WIDGET_PROP_STRONGLY_FOCUS", 
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
const get_WIDGET_PROP_TYPE = Module.cwrap("get_WIDGET_PROP_TYPE", 
    "string", []);
const get_WIDGET_PROP_CLOSABLE = Module.cwrap("get_WIDGET_PROP_CLOSABLE", 
    "string", []);
const get_WIDGET_PROP_POINTER_CURSOR = Module.cwrap("get_WIDGET_PROP_POINTER_CURSOR", 
    "string", []);
const get_WIDGET_PROP_VALUE = Module.cwrap("get_WIDGET_PROP_VALUE", 
    "string", []);
const get_WIDGET_PROP_RADIO = Module.cwrap("get_WIDGET_PROP_RADIO", 
    "string", []);
const get_WIDGET_PROP_REVERSE = Module.cwrap("get_WIDGET_PROP_REVERSE", 
    "string", []);
const get_WIDGET_PROP_LENGTH = Module.cwrap("get_WIDGET_PROP_LENGTH", 
    "string", []);
const get_WIDGET_PROP_LINE_WRAP = Module.cwrap("get_WIDGET_PROP_LINE_WRAP", 
    "string", []);
const get_WIDGET_PROP_WORD_WRAP = Module.cwrap("get_WIDGET_PROP_WORD_WRAP", 
    "string", []);
const get_WIDGET_PROP_TEXT = Module.cwrap("get_WIDGET_PROP_TEXT", 
    "string", []);
const get_WIDGET_PROP_TR_TEXT = Module.cwrap("get_WIDGET_PROP_TR_TEXT", 
    "string", []);
const get_WIDGET_PROP_STYLE = Module.cwrap("get_WIDGET_PROP_STYLE", 
    "string", []);
const get_WIDGET_PROP_ENABLE = Module.cwrap("get_WIDGET_PROP_ENABLE", 
    "string", []);
const get_WIDGET_PROP_FEEDBACK = Module.cwrap("get_WIDGET_PROP_FEEDBACK", 
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
const get_WIDGET_PROP_DISABLE_ANIM = Module.cwrap("get_WIDGET_PROP_DISABLE_ANIM", 
    "string", []);
const get_WIDGET_PROP_OPEN_ANIM_HINT = Module.cwrap("get_WIDGET_PROP_OPEN_ANIM_HINT", 
    "string", []);
const get_WIDGET_PROP_CLOSE_ANIM_HINT = Module.cwrap("get_WIDGET_PROP_CLOSE_ANIM_HINT", 
    "string", []);
const get_WIDGET_PROP_MIN = Module.cwrap("get_WIDGET_PROP_MIN", 
    "string", []);
const get_WIDGET_PROP_ACTION_TEXT = Module.cwrap("get_WIDGET_PROP_ACTION_TEXT", 
    "string", []);
const get_WIDGET_PROP_TIPS = Module.cwrap("get_WIDGET_PROP_TIPS", 
    "string", []);
const get_WIDGET_PROP_TR_TIPS = Module.cwrap("get_WIDGET_PROP_TR_TIPS", 
    "string", []);
const get_WIDGET_PROP_INPUT_TYPE = Module.cwrap("get_WIDGET_PROP_INPUT_TYPE", 
    "string", []);
const get_WIDGET_PROP_KEYBOARD = Module.cwrap("get_WIDGET_PROP_KEYBOARD", 
    "string", []);
const get_WIDGET_PROP_DEFAULT_FOCUSED_CHILD = Module.cwrap("get_WIDGET_PROP_DEFAULT_FOCUSED_CHILD", 
    "string", []);
const get_WIDGET_PROP_READONLY = Module.cwrap("get_WIDGET_PROP_READONLY", 
    "string", []);
const get_WIDGET_PROP_CANCELABLE = Module.cwrap("get_WIDGET_PROP_CANCELABLE", 
    "string", []);
const get_WIDGET_PROP_PASSWORD_VISIBLE = Module.cwrap("get_WIDGET_PROP_PASSWORD_VISIBLE", 
    "string", []);
const get_WIDGET_PROP_ACTIVE = Module.cwrap("get_WIDGET_PROP_ACTIVE", 
    "string", []);
const get_WIDGET_PROP_CURR_PAGE = Module.cwrap("get_WIDGET_PROP_CURR_PAGE", 
    "string", []);
const get_WIDGET_PROP_PAGE_MAX_NUMBER = Module.cwrap("get_WIDGET_PROP_PAGE_MAX_NUMBER", 
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
const get_WIDGET_PROP_SELECT_NONE_WHEN_FOCUSED = Module.cwrap("get_WIDGET_PROP_SELECT_NONE_WHEN_FOCUSED", 
    "string", []);
const get_WIDGET_PROP_OPEN_IM_WHEN_FOCUSED = Module.cwrap("get_WIDGET_PROP_OPEN_IM_WHEN_FOCUSED", 
    "string", []);
const get_WIDGET_PROP_CLOSE_IM_WHEN_BLURED = Module.cwrap("get_WIDGET_PROP_CLOSE_IM_WHEN_BLURED", 
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
const get_WIDGET_PROP_GRAB_KEYS = Module.cwrap("get_WIDGET_PROP_GRAB_KEYS", 
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
const get_WIDGET_PROP_LONG_PRESS_TIME = Module.cwrap("get_WIDGET_PROP_LONG_PRESS_TIME", 
    "string", []);
const get_WIDGET_PROP_ENABLE_LONG_PRESS = Module.cwrap("get_WIDGET_PROP_ENABLE_LONG_PRESS", 
    "string", []);
const get_WIDGET_PROP_CLICK_THROUGH = Module.cwrap("get_WIDGET_PROP_CLICK_THROUGH", 
    "string", []);
const get_WIDGET_PROP_ANIMATABLE = Module.cwrap("get_WIDGET_PROP_ANIMATABLE", 
    "string", []);
const get_WIDGET_PROP_AUTO_HIDE = Module.cwrap("get_WIDGET_PROP_AUTO_HIDE", 
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
const get_WIDGET_PROP_SCROLLABLE = Module.cwrap("get_WIDGET_PROP_SCROLLABLE", 
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
const get_WIDGET_PROP_LOAD_UI = Module.cwrap("get_WIDGET_PROP_LOAD_UI", 
    "string", []);
const get_WIDGET_PROP_OPEN_WINDOW = Module.cwrap("get_WIDGET_PROP_OPEN_WINDOW", 
    "string", []);
const get_WIDGET_PROP_SELECTED_INDEX = Module.cwrap("get_WIDGET_PROP_SELECTED_INDEX", 
    "string", []);
const get_WIDGET_PROP_CLOSE_WHEN_CLICK = Module.cwrap("get_WIDGET_PROP_CLOSE_WHEN_CLICK", 
    "string", []);
const get_WIDGET_PROP_CLOSE_WHEN_CLICK_OUTSIDE = Module.cwrap("get_WIDGET_PROP_CLOSE_WHEN_CLICK_OUTSIDE", 
    "string", []);
const get_WIDGET_PROP_CLOSE_WHEN_TIMEOUT = Module.cwrap("get_WIDGET_PROP_CLOSE_WHEN_TIMEOUT", 
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
const get_WIDGET_PROP_FOCUSED = Module.cwrap("get_WIDGET_PROP_FOCUSED", 
    "string", []);
const get_WIDGET_PROP_FOCUS = Module.cwrap("get_WIDGET_PROP_FOCUS", 
    "string", []);
const get_WIDGET_PROP_FOCUSABLE = Module.cwrap("get_WIDGET_PROP_FOCUSABLE", 
    "string", []);
const get_WIDGET_PROP_WITH_FOCUS_STATE = Module.cwrap("get_WIDGET_PROP_WITH_FOCUS_STATE", 
    "string", []);
const get_WIDGET_PROP_MOVE_FOCUS_PREV_KEY = Module.cwrap("get_WIDGET_PROP_MOVE_FOCUS_PREV_KEY", 
    "string", []);
const get_WIDGET_PROP_MOVE_FOCUS_NEXT_KEY = Module.cwrap("get_WIDGET_PROP_MOVE_FOCUS_NEXT_KEY", 
    "string", []);
const get_WIDGET_PROP_MOVE_FOCUS_UP_KEY = Module.cwrap("get_WIDGET_PROP_MOVE_FOCUS_UP_KEY", 
    "string", []);
const get_WIDGET_PROP_MOVE_FOCUS_DOWN_KEY = Module.cwrap("get_WIDGET_PROP_MOVE_FOCUS_DOWN_KEY", 
    "string", []);
const get_WIDGET_PROP_MOVE_FOCUS_LEFT_KEY = Module.cwrap("get_WIDGET_PROP_MOVE_FOCUS_LEFT_KEY", 
    "string", []);
const get_WIDGET_PROP_MOVE_FOCUS_RIGHT_KEY = Module.cwrap("get_WIDGET_PROP_MOVE_FOCUS_RIGHT_KEY", 
    "string", []);
const get_WIDGET_TYPE_NONE = Module.cwrap("get_WIDGET_TYPE_NONE", 
    "string", []);
const get_WIDGET_TYPE_WINDOW_MANAGER = Module.cwrap("get_WIDGET_TYPE_WINDOW_MANAGER", 
    "string", []);
const get_WIDGET_TYPE_NORMAL_WINDOW = Module.cwrap("get_WIDGET_TYPE_NORMAL_WINDOW", 
    "string", []);
const get_WIDGET_TYPE_OVERLAY = Module.cwrap("get_WIDGET_TYPE_OVERLAY", 
    "string", []);
const get_WIDGET_TYPE_TOOL_BAR = Module.cwrap("get_WIDGET_TYPE_TOOL_BAR", 
    "string", []);
const get_WIDGET_TYPE_DIALOG = Module.cwrap("get_WIDGET_TYPE_DIALOG", 
    "string", []);
const get_WIDGET_TYPE_POPUP = Module.cwrap("get_WIDGET_TYPE_POPUP", 
    "string", []);
const get_WIDGET_TYPE_SYSTEM_BAR = Module.cwrap("get_WIDGET_TYPE_SYSTEM_BAR", 
    "string", []);
const get_WIDGET_TYPE_SYSTEM_BAR_BOTTOM = Module.cwrap("get_WIDGET_TYPE_SYSTEM_BAR_BOTTOM", 
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
const get_WIDGET_TYPE_SLIDE_INDICATOR = Module.cwrap("get_WIDGET_TYPE_SLIDE_INDICATOR", 
    "string", []);
const get_WIDGET_TYPE_SLIDE_INDICATOR_ARC = Module.cwrap("get_WIDGET_TYPE_SLIDE_INDICATOR_ARC", 
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
const get_WIDGET_TYPE_CLIP_VIEW = Module.cwrap("get_WIDGET_TYPE_CLIP_VIEW", 
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
const get_WINDOW_STAGE_LOADED = Module.cwrap("get_WINDOW_STAGE_LOADED", 
    "number", []);
const get_WINDOW_STAGE_CREATED = Module.cwrap("get_WINDOW_STAGE_CREATED", 
    "number", []);
const get_WINDOW_STAGE_OPENED = Module.cwrap("get_WINDOW_STAGE_OPENED", 
    "number", []);
const get_WINDOW_STAGE_CLOSED = Module.cwrap("get_WINDOW_STAGE_CLOSED", 
    "number", []);
const get_WINDOW_STAGE_SUSPEND = Module.cwrap("get_WINDOW_STAGE_SUSPEND", 
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
const get_WIDGET_STATE_CHANGED = Module.cwrap("get_WIDGET_STATE_CHANGED", 
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
const get_WIDGET_STATE_EMPTY_FOCUS = Module.cwrap("get_WIDGET_STATE_EMPTY_FOCUS", 
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
const get_WIDGET_STATE_DISABLE_OF_CHECKED = Module.cwrap("get_WIDGET_STATE_DISABLE_OF_CHECKED", 
    "string", []);
const get_WIDGET_STATE_FOCUSED_OF_CHECKED = Module.cwrap("get_WIDGET_STATE_FOCUSED_OF_CHECKED", 
    "string", []);
const get_WIDGET_STATE_NORMAL_OF_ACTIVE = Module.cwrap("get_WIDGET_STATE_NORMAL_OF_ACTIVE", 
    "string", []);
const get_WIDGET_STATE_PRESSED_OF_ACTIVE = Module.cwrap("get_WIDGET_STATE_PRESSED_OF_ACTIVE", 
    "string", []);
const get_WIDGET_STATE_OVER_OF_ACTIVE = Module.cwrap("get_WIDGET_STATE_OVER_OF_ACTIVE", 
    "string", []);
const get_WIDGET_STATE_DISABLE_OF_ACTIVE = Module.cwrap("get_WIDGET_STATE_DISABLE_OF_ACTIVE", 
    "string", []);
const get_WIDGET_STATE_FOCUSED_OF_ACTIVE = Module.cwrap("get_WIDGET_STATE_FOCUSED_OF_ACTIVE", 
    "string", []);
const get_WIDGET_CURSOR_DEFAULT = Module.cwrap("get_WIDGET_CURSOR_DEFAULT", 
    "string", []);
const get_WIDGET_CURSOR_EDIT = Module.cwrap("get_WIDGET_CURSOR_EDIT", 
    "string", []);
const get_WIDGET_CURSOR_HAND = Module.cwrap("get_WIDGET_CURSOR_HAND", 
    "string", []);
const get_WIDGET_CURSOR_WAIT = Module.cwrap("get_WIDGET_CURSOR_WAIT", 
    "string", []);
const get_WIDGET_CURSOR_CROSS = Module.cwrap("get_WIDGET_CURSOR_CROSS", 
    "string", []);
const get_WIDGET_CURSOR_NO = Module.cwrap("get_WIDGET_CURSOR_NO", 
    "string", []);
const get_WIDGET_CURSOR_SIZENWSE = Module.cwrap("get_WIDGET_CURSOR_SIZENWSE", 
    "string", []);
const get_WIDGET_CURSOR_SIZENESW = Module.cwrap("get_WIDGET_CURSOR_SIZENESW", 
    "string", []);
const get_WIDGET_CURSOR_SIZEWE = Module.cwrap("get_WIDGET_CURSOR_SIZEWE", 
    "string", []);
const get_WIDGET_CURSOR_SIZENS = Module.cwrap("get_WIDGET_CURSOR_SIZENS", 
    "string", []);
const get_WIDGET_CURSOR_SIZEALL = Module.cwrap("get_WIDGET_CURSOR_SIZEALL", 
    "string", []);
const widget_count_children = Module.cwrap("widget_count_children", 
    "number", ["number"]);
const widget_get_child = Module.cwrap("widget_get_child", 
    "number", ["number","number"]);
const widget_get_focused_widget = Module.cwrap("widget_get_focused_widget", 
    "number", ["number"]);
const widget_get_native_window = Module.cwrap("widget_get_native_window", 
    "number", ["number"]);
const widget_index_of = Module.cwrap("widget_index_of", 
    "number", ["number"]);
const widget_close_window = Module.cwrap("widget_close_window", 
    "number", ["number"]);
const widget_close_window_force = Module.cwrap("widget_close_window_force", 
    "number", ["number"]);
const widget_back = Module.cwrap("widget_back", 
    "number", ["number"]);
const widget_back_to_home = Module.cwrap("widget_back_to_home", 
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
const widget_is_style_exist = Module.cwrap("widget_is_style_exist", 
    "number", ["number","string","string"]);
const widget_use_style = Module.cwrap("widget_use_style", 
    "number", ["number","string"]);
const widget_set_text_utf8 = Module.cwrap("widget_set_text_utf8", 
    "number", ["number","string"]);
const widget_set_child_text_utf8 = Module.cwrap("widget_set_child_text_utf8", 
    "number", ["number","string","string"]);
const widget_set_child_text_with_double = Module.cwrap("widget_set_child_text_with_double", 
    "number", ["number","string","string","number"]);
const widget_set_child_text_with_int = Module.cwrap("widget_set_child_text_with_int", 
    "number", ["number","string","string","number"]);
const widget_set_tr_text = Module.cwrap("widget_set_tr_text", 
    "number", ["number","string"]);
const widget_get_value = Module.cwrap("widget_get_value", 
    "number", ["number"]);
const widget_get_enable = Module.cwrap("widget_get_enable", 
    "number", ["number"]);
const widget_get_floating = Module.cwrap("widget_get_floating", 
    "number", ["number"]);
const widget_get_auto_adjust_size = Module.cwrap("widget_get_auto_adjust_size", 
    "number", ["number"]);
const widget_get_with_focus_state = Module.cwrap("widget_get_with_focus_state", 
    "number", ["number"]);
const widget_get_focusable = Module.cwrap("widget_get_focusable", 
    "number", ["number"]);
const widget_get_sensitive = Module.cwrap("widget_get_sensitive", 
    "number", ["number"]);
const widget_get_visible = Module.cwrap("widget_get_visible", 
    "number", ["number"]);
const widget_get_feedback = Module.cwrap("widget_get_feedback", 
    "number", ["number"]);
const widget_get_text = Module.cwrap("widget_get_text", 
    "number", ["number"]);
const widget_set_name = Module.cwrap("widget_set_name", 
    "number", ["number","string"]);
const widget_set_theme = Module.cwrap("widget_set_theme", 
    "number", ["number","string"]);
const widget_set_pointer_cursor = Module.cwrap("widget_set_pointer_cursor", 
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
const widget_set_feedback = Module.cwrap("widget_set_feedback", 
    "number", ["number","number"]);
const widget_set_auto_adjust_size = Module.cwrap("widget_set_auto_adjust_size", 
    "number", ["number","number"]);
const widget_set_floating = Module.cwrap("widget_set_floating", 
    "number", ["number","number"]);
const widget_set_focused = Module.cwrap("widget_set_focused", 
    "number", ["number","number"]);
const widget_set_focusable = Module.cwrap("widget_set_focusable", 
    "number", ["number","number"]);
const widget_set_state = Module.cwrap("widget_set_state", 
    "number", ["number","string"]);
const widget_set_opacity = Module.cwrap("widget_set_opacity", 
    "number", ["number","number"]);
const widget_set_dirty_rect_tolerance = Module.cwrap("widget_set_dirty_rect_tolerance", 
    "number", ["number","number"]);
const widget_destroy_children = Module.cwrap("widget_destroy_children", 
    "number", ["number"]);
const widget_add_child = Module.cwrap("widget_add_child", 
    "number", ["number","number"]);
const widget_remove_child = Module.cwrap("widget_remove_child", 
    "number", ["number","number"]);
const widget_insert_child = Module.cwrap("widget_insert_child", 
    "number", ["number","number","number"]);
const widget_restack = Module.cwrap("widget_restack", 
    "number", ["number","number"]);
const widget_child = Module.cwrap("widget_child", 
    "number", ["number","string"]);
const widget_lookup = Module.cwrap("widget_lookup", 
    "number", ["number","string","number"]);
const widget_lookup_by_type = Module.cwrap("widget_lookup_by_type", 
    "number", ["number","string","number"]);
const widget_set_visible = Module.cwrap("widget_set_visible", 
    "number", ["number","number"]);
const widget_set_visible_only = Module.cwrap("widget_set_visible_only", 
    "number", ["number","number"]);
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
const widget_set_prop_pointer = Module.cwrap("widget_set_prop_pointer", 
    "number", ["number","string","number"]);
const widget_get_prop_pointer = Module.cwrap("widget_get_prop_pointer", 
    "number", ["number","string"]);
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
const widget_is_window_created = Module.cwrap("widget_is_window_created", 
    "number", ["number"]);
const widget_is_parent_of = Module.cwrap("widget_is_parent_of", 
    "number", ["number","number"]);
const widget_is_direct_parent_of = Module.cwrap("widget_is_direct_parent_of", 
    "number", ["number","number"]);
const widget_is_window = Module.cwrap("widget_is_window", 
    "number", ["number"]);
const widget_is_system_bar = Module.cwrap("widget_is_system_bar", 
    "number", ["number"]);
const widget_is_normal_window = Module.cwrap("widget_is_normal_window", 
    "number", ["number"]);
const widget_is_dialog = Module.cwrap("widget_is_dialog", 
    "number", ["number"]);
const widget_is_popup = Module.cwrap("widget_is_popup", 
    "number", ["number"]);
const widget_is_overlay = Module.cwrap("widget_is_overlay", 
    "number", ["number"]);
const widget_is_opened_dialog = Module.cwrap("widget_is_opened_dialog", 
    "number", ["number"]);
const widget_is_opened_popup = Module.cwrap("widget_is_opened_popup", 
    "number", ["number"]);
const widget_is_keyboard = Module.cwrap("widget_is_keyboard", 
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
const widget_destroy_async = Module.cwrap("widget_destroy_async", 
    "number", ["number"]);
const widget_unref = Module.cwrap("widget_unref", 
    "number", ["number"]);
const widget_stroke_border_rect = Module.cwrap("widget_stroke_border_rect", 
    "number", ["number","number","number"]);
const widget_fill_bg_rect = Module.cwrap("widget_fill_bg_rect", 
    "number", ["number","number","number","number"]);
const widget_fill_fg_rect = Module.cwrap("widget_fill_fg_rect", 
    "number", ["number","number","number","number"]);
const widget_dispatch_to_target = Module.cwrap("widget_dispatch_to_target", 
    "number", ["number","number"]);
const widget_dispatch_to_key_target = Module.cwrap("widget_dispatch_to_key_target", 
    "number", ["number","number"]);
const widget_get_style_type = Module.cwrap("widget_get_style_type", 
    "string", ["number"]);
const widget_update_style = Module.cwrap("widget_update_style", 
    "number", ["number"]);
const widget_update_style_recursive = Module.cwrap("widget_update_style_recursive", 
    "number", ["number"]);
const widget_set_as_key_target = Module.cwrap("widget_set_as_key_target", 
    "number", ["number"]);
const widget_focus_next = Module.cwrap("widget_focus_next", 
    "number", ["number"]);
const widget_focus_prev = Module.cwrap("widget_focus_prev", 
    "number", ["number"]);
const widget_get_state_for_style = Module.cwrap("widget_get_state_for_style", 
    "string", ["number","number","number"]);
const widget_layout = Module.cwrap("widget_layout", 
    "number", ["number"]);
const widget_set_self_layout = Module.cwrap("widget_set_self_layout", 
    "number", ["number","string"]);
const widget_set_children_layout = Module.cwrap("widget_set_children_layout", 
    "number", ["number","string"]);
const widget_set_self_layout_params = Module.cwrap("widget_set_self_layout_params", 
    "number", ["number","string","string","string","string"]);
const widget_set_style_int = Module.cwrap("widget_set_style_int", 
    "number", ["number","string","number"]);
const widget_set_style_str = Module.cwrap("widget_set_style_str", 
    "number", ["number","string","string"]);
const widget_set_style_color = Module.cwrap("widget_set_style_color", 
    "number", ["number","string","number"]);
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
const widget_t_get_prop_pointer_cursor = Module.cwrap("widget_t_get_prop_pointer_cursor", 
    "string", ["number"]);
const widget_t_get_prop_tr_text = Module.cwrap("widget_t_get_prop_tr_text", 
    "string", ["number"]);
const widget_t_get_prop_style = Module.cwrap("widget_t_get_prop_style", 
    "string", ["number"]);
const widget_t_get_prop_animation = Module.cwrap("widget_t_get_prop_animation", 
    "string", ["number"]);
const widget_t_get_prop_enable = Module.cwrap("widget_t_get_prop_enable", 
    "number", ["number"]);
const widget_t_get_prop_feedback = Module.cwrap("widget_t_get_prop_feedback", 
    "number", ["number"]);
const widget_t_get_prop_visible = Module.cwrap("widget_t_get_prop_visible", 
    "number", ["number"]);
const widget_t_get_prop_sensitive = Module.cwrap("widget_t_get_prop_sensitive", 
    "number", ["number"]);
const widget_t_get_prop_focusable = Module.cwrap("widget_t_get_prop_focusable", 
    "number", ["number"]);
const widget_t_get_prop_with_focus_state = Module.cwrap("widget_t_get_prop_with_focus_state", 
    "number", ["number"]);
const widget_t_get_prop_auto_adjust_size = Module.cwrap("widget_t_get_prop_auto_adjust_size", 
    "number", ["number"]);
const widget_t_get_prop_floating = Module.cwrap("widget_t_get_prop_floating", 
    "number", ["number"]);
const widget_t_get_prop_dirty_rect_tolerance = Module.cwrap("widget_t_get_prop_dirty_rect_tolerance", 
    "number", ["number"]);
const widget_t_get_prop_parent = Module.cwrap("widget_t_get_prop_parent", 
    "number", ["number"]);
const app_conf_save = Module.cwrap("app_conf_save", 
    "number", []);
const app_conf_reload = Module.cwrap("app_conf_reload", 
    "number", []);
const app_conf_deinit = Module.cwrap("app_conf_deinit", 
    "number", []);
const app_conf_exist = Module.cwrap("app_conf_exist", 
    "number", ["string"]);
const app_conf_set_int = Module.cwrap("app_conf_set_int", 
    "number", ["string","number"]);
const app_conf_set_int64 = Module.cwrap("app_conf_set_int64", 
    "number", ["string","number"]);
const app_conf_set_bool = Module.cwrap("app_conf_set_bool", 
    "number", ["string","number"]);
const app_conf_set_double = Module.cwrap("app_conf_set_double", 
    "number", ["string","number"]);
const app_conf_set_str = Module.cwrap("app_conf_set_str", 
    "number", ["string","string"]);
const app_conf_get_int = Module.cwrap("app_conf_get_int", 
    "number", ["string","number"]);
const app_conf_get_int64 = Module.cwrap("app_conf_get_int64", 
    "number", ["string","number"]);
const app_conf_get_bool = Module.cwrap("app_conf_get_bool", 
    "number", ["string","number"]);
const app_conf_get_double = Module.cwrap("app_conf_get_double", 
    "number", ["string","number"]);
const app_conf_get_str = Module.cwrap("app_conf_get_str", 
    "string", ["string","string"]);
const app_conf_remove = Module.cwrap("app_conf_remove", 
    "number", ["string"]);
const tk_ext_widgets_init = Module.cwrap("tk_ext_widgets_init", 
    "number", []);
const get_INDICATOR_DEFAULT_PAINT_AUTO = Module.cwrap("get_INDICATOR_DEFAULT_PAINT_AUTO", 
    "number", []);
const get_INDICATOR_DEFAULT_PAINT_FILL_DOT = Module.cwrap("get_INDICATOR_DEFAULT_PAINT_FILL_DOT", 
    "number", []);
const get_INDICATOR_DEFAULT_PAINT_STROKE_DOT = Module.cwrap("get_INDICATOR_DEFAULT_PAINT_STROKE_DOT", 
    "number", []);
const get_INDICATOR_DEFAULT_PAINT_FILL_RECT = Module.cwrap("get_INDICATOR_DEFAULT_PAINT_FILL_RECT", 
    "number", []);
const get_INDICATOR_DEFAULT_PAINT_STROKE_RECT = Module.cwrap("get_INDICATOR_DEFAULT_PAINT_STROKE_RECT", 
    "number", []);
const get_EVT_VPAGE_WILL_OPEN = Module.cwrap("get_EVT_VPAGE_WILL_OPEN", 
    "number", []);
const get_EVT_VPAGE_OPEN = Module.cwrap("get_EVT_VPAGE_OPEN", 
    "number", []);
const get_EVT_VPAGE_CLOSE = Module.cwrap("get_EVT_VPAGE_CLOSE", 
    "number", []);
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
const get_ASSET_TYPE_FLOW = Module.cwrap("get_ASSET_TYPE_FLOW", 
    "number", []);
const get_ASSET_TYPE_DATA = Module.cwrap("get_ASSET_TYPE_DATA", 
    "number", []);
const asset_info_get_type = Module.cwrap("asset_info_get_type", 
    "number", ["number"]);
const asset_info_get_name = Module.cwrap("asset_info_get_name", 
    "string", ["number"]);
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
const color_get_color = Module.cwrap("color_get_color", 
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
const date_time_set_year = Module.cwrap("date_time_set_year", 
    "number", ["number","number"]);
const date_time_set_month = Module.cwrap("date_time_set_month", 
    "number", ["number","number"]);
const date_time_set_day = Module.cwrap("date_time_set_day", 
    "number", ["number","number"]);
const date_time_set_hour = Module.cwrap("date_time_set_hour", 
    "number", ["number","number"]);
const date_time_set_minute = Module.cwrap("date_time_set_minute", 
    "number", ["number","number"]);
const date_time_set_second = Module.cwrap("date_time_set_second", 
    "number", ["number","number"]);
const date_time_set = Module.cwrap("date_time_set", 
    "number", ["number"]);
const date_time_from_time = Module.cwrap("date_time_from_time", 
    "number", ["number","number"]);
const date_time_to_time = Module.cwrap("date_time_to_time", 
    "number", ["number"]);
const date_time_add_delta = Module.cwrap("date_time_add_delta", 
    "number", ["number","number"]);
const date_time_is_leap = Module.cwrap("date_time_is_leap", 
    "number", ["number"]);
const date_time_get_days = Module.cwrap("date_time_get_days", 
    "number", ["number","number"]);
const date_time_get_wday = Module.cwrap("date_time_get_wday", 
    "number", ["number","number","number"]);
const date_time_get_month_name = Module.cwrap("date_time_get_month_name", 
    "string", ["number"]);
const date_time_get_wday_name = Module.cwrap("date_time_get_wday_name", 
    "string", ["number"]);
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
const get_EASING_LINEAR = Module.cwrap("get_EASING_LINEAR", 
    "number", []);
const get_EASING_QUADRATIC_IN = Module.cwrap("get_EASING_QUADRATIC_IN", 
    "number", []);
const get_EASING_QUADRATIC_OUT = Module.cwrap("get_EASING_QUADRATIC_OUT", 
    "number", []);
const get_EASING_QUADRATIC_INOUT = Module.cwrap("get_EASING_QUADRATIC_INOUT", 
    "number", []);
const get_EASING_CUBIC_IN = Module.cwrap("get_EASING_CUBIC_IN", 
    "number", []);
const get_EASING_CUBIC_OUT = Module.cwrap("get_EASING_CUBIC_OUT", 
    "number", []);
const get_EASING_SIN_IN = Module.cwrap("get_EASING_SIN_IN", 
    "number", []);
const get_EASING_SIN_OUT = Module.cwrap("get_EASING_SIN_OUT", 
    "number", []);
const get_EASING_SIN_INOUT = Module.cwrap("get_EASING_SIN_INOUT", 
    "number", []);
const get_EASING_POW_IN = Module.cwrap("get_EASING_POW_IN", 
    "number", []);
const get_EASING_POW_OUT = Module.cwrap("get_EASING_POW_OUT", 
    "number", []);
const get_EASING_POW_INOUT = Module.cwrap("get_EASING_POW_INOUT", 
    "number", []);
const get_EASING_CIRCULAR_IN = Module.cwrap("get_EASING_CIRCULAR_IN", 
    "number", []);
const get_EASING_CIRCULAR_OUT = Module.cwrap("get_EASING_CIRCULAR_OUT", 
    "number", []);
const get_EASING_CIRCULAR_INOUT = Module.cwrap("get_EASING_CIRCULAR_INOUT", 
    "number", []);
const get_EASING_ELASTIC_IN = Module.cwrap("get_EASING_ELASTIC_IN", 
    "number", []);
const get_EASING_ELASTIC_OUT = Module.cwrap("get_EASING_ELASTIC_OUT", 
    "number", []);
const get_EASING_ELASTIC_INOUT = Module.cwrap("get_EASING_ELASTIC_INOUT", 
    "number", []);
const get_EASING_BACK_IN = Module.cwrap("get_EASING_BACK_IN", 
    "number", []);
const get_EASING_BACK_OUT = Module.cwrap("get_EASING_BACK_OUT", 
    "number", []);
const get_EASING_BACK_INOUT = Module.cwrap("get_EASING_BACK_INOUT", 
    "number", []);
const get_EASING_BOUNCE_IN = Module.cwrap("get_EASING_BOUNCE_IN", 
    "number", []);
const get_EASING_BOUNCE_OUT = Module.cwrap("get_EASING_BOUNCE_OUT", 
    "number", []);
const get_EASING_BOUNCE_INOUT = Module.cwrap("get_EASING_BOUNCE_INOUT", 
    "number", []);
const get_MIME_TYPE_APPLICATION_ENVOY = Module.cwrap("get_MIME_TYPE_APPLICATION_ENVOY", 
    "string", []);
const get_MIME_TYPE_APPLICATION_FRACTALS = Module.cwrap("get_MIME_TYPE_APPLICATION_FRACTALS", 
    "string", []);
const get_MIME_TYPE_APPLICATION_FUTURESPLASH = Module.cwrap("get_MIME_TYPE_APPLICATION_FUTURESPLASH", 
    "string", []);
const get_MIME_TYPE_APPLICATION_HTA = Module.cwrap("get_MIME_TYPE_APPLICATION_HTA", 
    "string", []);
const get_MIME_TYPE_APPLICATION_JSON = Module.cwrap("get_MIME_TYPE_APPLICATION_JSON", 
    "string", []);
const get_MIME_TYPE_APPLICATION_UBJSON = Module.cwrap("get_MIME_TYPE_APPLICATION_UBJSON", 
    "string", []);
const get_MIME_TYPE_APPLICATION_MAC_BINHEX40 = Module.cwrap("get_MIME_TYPE_APPLICATION_MAC_BINHEX40", 
    "string", []);
const get_MIME_TYPE_APPLICATION_MSWORD = Module.cwrap("get_MIME_TYPE_APPLICATION_MSWORD", 
    "string", []);
const get_MIME_TYPE_APPLICATION_OCTET_STREAM = Module.cwrap("get_MIME_TYPE_APPLICATION_OCTET_STREAM", 
    "string", []);
const get_MIME_TYPE_APPLICATION_ODA = Module.cwrap("get_MIME_TYPE_APPLICATION_ODA", 
    "string", []);
const get_MIME_TYPE_APPLICATION_OLESCRIPT = Module.cwrap("get_MIME_TYPE_APPLICATION_OLESCRIPT", 
    "string", []);
const get_MIME_TYPE_APPLICATION_PDF = Module.cwrap("get_MIME_TYPE_APPLICATION_PDF", 
    "string", []);
const get_MIME_TYPE_APPLICATION_PICS_RULES = Module.cwrap("get_MIME_TYPE_APPLICATION_PICS_RULES", 
    "string", []);
const get_MIME_TYPE_APPLICATION_PKCS10 = Module.cwrap("get_MIME_TYPE_APPLICATION_PKCS10", 
    "string", []);
const get_MIME_TYPE_APPLICATION_PKIX_CRL = Module.cwrap("get_MIME_TYPE_APPLICATION_PKIX_CRL", 
    "string", []);
const get_MIME_TYPE_APPLICATION_POSTSCRIPT = Module.cwrap("get_MIME_TYPE_APPLICATION_POSTSCRIPT", 
    "string", []);
const get_MIME_TYPE_APPLICATION_RTF = Module.cwrap("get_MIME_TYPE_APPLICATION_RTF", 
    "string", []);
const get_MIME_TYPE_APPLICATION_VND_MS_EXCEL = Module.cwrap("get_MIME_TYPE_APPLICATION_VND_MS_EXCEL", 
    "string", []);
const get_MIME_TYPE_APPLICATION_VND_MS_OUTLOOK = Module.cwrap("get_MIME_TYPE_APPLICATION_VND_MS_OUTLOOK", 
    "string", []);
const get_MIME_TYPE_APPLICATION_VND_MS_PKICERTSTORE = Module.cwrap("get_MIME_TYPE_APPLICATION_VND_MS_PKICERTSTORE", 
    "string", []);
const get_MIME_TYPE_APPLICATION_VND_MS_PKISECCAT = Module.cwrap("get_MIME_TYPE_APPLICATION_VND_MS_PKISECCAT", 
    "string", []);
const get_MIME_TYPE_APPLICATION_VND_MS_PKISTL = Module.cwrap("get_MIME_TYPE_APPLICATION_VND_MS_PKISTL", 
    "string", []);
const get_MIME_TYPE_APPLICATION_VND_MS_POWERPOINT = Module.cwrap("get_MIME_TYPE_APPLICATION_VND_MS_POWERPOINT", 
    "string", []);
const get_MIME_TYPE_APPLICATION_VND_MS_PROJECT = Module.cwrap("get_MIME_TYPE_APPLICATION_VND_MS_PROJECT", 
    "string", []);
const get_MIME_TYPE_APPLICATION_VND_MS_WORKS = Module.cwrap("get_MIME_TYPE_APPLICATION_VND_MS_WORKS", 
    "string", []);
const get_MIME_TYPE_APPLICATION_WINHLP = Module.cwrap("get_MIME_TYPE_APPLICATION_WINHLP", 
    "string", []);
const get_MIME_TYPE_APPLICATION_X_BCPIO = Module.cwrap("get_MIME_TYPE_APPLICATION_X_BCPIO", 
    "string", []);
const get_MIME_TYPE_APPLICATION_X_CDF = Module.cwrap("get_MIME_TYPE_APPLICATION_X_CDF", 
    "string", []);
const get_MIME_TYPE_APPLICATION_X_COMPRESS = Module.cwrap("get_MIME_TYPE_APPLICATION_X_COMPRESS", 
    "string", []);
const get_MIME_TYPE_APPLICATION_X_COMPRESSED = Module.cwrap("get_MIME_TYPE_APPLICATION_X_COMPRESSED", 
    "string", []);
const get_MIME_TYPE_APPLICATION_X_CPIO = Module.cwrap("get_MIME_TYPE_APPLICATION_X_CPIO", 
    "string", []);
const get_MIME_TYPE_APPLICATION_X_CSH = Module.cwrap("get_MIME_TYPE_APPLICATION_X_CSH", 
    "string", []);
const get_MIME_TYPE_APPLICATION_X_DIRECTOR = Module.cwrap("get_MIME_TYPE_APPLICATION_X_DIRECTOR", 
    "string", []);
const get_MIME_TYPE_APPLICATION_X_DVI = Module.cwrap("get_MIME_TYPE_APPLICATION_X_DVI", 
    "string", []);
const get_MIME_TYPE_APPLICATION_X_GTAR = Module.cwrap("get_MIME_TYPE_APPLICATION_X_GTAR", 
    "string", []);
const get_MIME_TYPE_APPLICATION_X_GZIP = Module.cwrap("get_MIME_TYPE_APPLICATION_X_GZIP", 
    "string", []);
const get_MIME_TYPE_APPLICATION_X_HDF = Module.cwrap("get_MIME_TYPE_APPLICATION_X_HDF", 
    "string", []);
const get_MIME_TYPE_APPLICATION_X_IPHONE = Module.cwrap("get_MIME_TYPE_APPLICATION_X_IPHONE", 
    "string", []);
const get_MIME_TYPE_APPLICATION_X_JAVASCRIPT = Module.cwrap("get_MIME_TYPE_APPLICATION_X_JAVASCRIPT", 
    "string", []);
const get_MIME_TYPE_APPLICATION_X_LATEX = Module.cwrap("get_MIME_TYPE_APPLICATION_X_LATEX", 
    "string", []);
const get_MIME_TYPE_APPLICATION_X_MSACCESS = Module.cwrap("get_MIME_TYPE_APPLICATION_X_MSACCESS", 
    "string", []);
const get_MIME_TYPE_APPLICATION_X_MSCARDFILE = Module.cwrap("get_MIME_TYPE_APPLICATION_X_MSCARDFILE", 
    "string", []);
const get_MIME_TYPE_APPLICATION_X_MSCLIP = Module.cwrap("get_MIME_TYPE_APPLICATION_X_MSCLIP", 
    "string", []);
const get_MIME_TYPE_APPLICATION_X_MSDOWNLOAD = Module.cwrap("get_MIME_TYPE_APPLICATION_X_MSDOWNLOAD", 
    "string", []);
const get_MIME_TYPE_APPLICATION_X_MSMEDIAVIEW = Module.cwrap("get_MIME_TYPE_APPLICATION_X_MSMEDIAVIEW", 
    "string", []);
const get_MIME_TYPE_APPLICATION_X_MSMETAFILE = Module.cwrap("get_MIME_TYPE_APPLICATION_X_MSMETAFILE", 
    "string", []);
const get_MIME_TYPE_APPLICATION_X_MSMONEY = Module.cwrap("get_MIME_TYPE_APPLICATION_X_MSMONEY", 
    "string", []);
const get_MIME_TYPE_APPLICATION_X_MSPUBLISHER = Module.cwrap("get_MIME_TYPE_APPLICATION_X_MSPUBLISHER", 
    "string", []);
const get_MIME_TYPE_APPLICATION_X_MSSCHEDULE = Module.cwrap("get_MIME_TYPE_APPLICATION_X_MSSCHEDULE", 
    "string", []);
const get_MIME_TYPE_APPLICATION_X_MSTERMINAL = Module.cwrap("get_MIME_TYPE_APPLICATION_X_MSTERMINAL", 
    "string", []);
const get_MIME_TYPE_APPLICATION_X_MSWRITE = Module.cwrap("get_MIME_TYPE_APPLICATION_X_MSWRITE", 
    "string", []);
const get_MIME_TYPE_APPLICATION_X_NETCDF = Module.cwrap("get_MIME_TYPE_APPLICATION_X_NETCDF", 
    "string", []);
const get_MIME_TYPE_APPLICATION_X_PERFMON = Module.cwrap("get_MIME_TYPE_APPLICATION_X_PERFMON", 
    "string", []);
const get_MIME_TYPE_APPLICATION_X_PKCS12 = Module.cwrap("get_MIME_TYPE_APPLICATION_X_PKCS12", 
    "string", []);
const get_MIME_TYPE_APPLICATION_X_SH = Module.cwrap("get_MIME_TYPE_APPLICATION_X_SH", 
    "string", []);
const get_MIME_TYPE_APPLICATION_X_SHAR = Module.cwrap("get_MIME_TYPE_APPLICATION_X_SHAR", 
    "string", []);
const get_MIME_TYPE_APPLICATION_X_SHOCKWAVE_FLASH = Module.cwrap("get_MIME_TYPE_APPLICATION_X_SHOCKWAVE_FLASH", 
    "string", []);
const get_MIME_TYPE_APPLICATION_X_STUFFIT = Module.cwrap("get_MIME_TYPE_APPLICATION_X_STUFFIT", 
    "string", []);
const get_MIME_TYPE_APPLICATION_X_SV4CPIO = Module.cwrap("get_MIME_TYPE_APPLICATION_X_SV4CPIO", 
    "string", []);
const get_MIME_TYPE_APPLICATION_X_SV4CRC = Module.cwrap("get_MIME_TYPE_APPLICATION_X_SV4CRC", 
    "string", []);
const get_MIME_TYPE_APPLICATION_X_TAR = Module.cwrap("get_MIME_TYPE_APPLICATION_X_TAR", 
    "string", []);
const get_MIME_TYPE_APPLICATION_X_TCL = Module.cwrap("get_MIME_TYPE_APPLICATION_X_TCL", 
    "string", []);
const get_MIME_TYPE_APPLICATION_X_TEX = Module.cwrap("get_MIME_TYPE_APPLICATION_X_TEX", 
    "string", []);
const get_MIME_TYPE_APPLICATION_X_TEXINFO = Module.cwrap("get_MIME_TYPE_APPLICATION_X_TEXINFO", 
    "string", []);
const get_MIME_TYPE_APPLICATION_X_TROFF = Module.cwrap("get_MIME_TYPE_APPLICATION_X_TROFF", 
    "string", []);
const get_MIME_TYPE_APPLICATION_X_USTAR = Module.cwrap("get_MIME_TYPE_APPLICATION_X_USTAR", 
    "string", []);
const get_MIME_TYPE_APPLICATION_ZIP = Module.cwrap("get_MIME_TYPE_APPLICATION_ZIP", 
    "string", []);
const get_MIME_TYPE_AUDIO_BASIC = Module.cwrap("get_MIME_TYPE_AUDIO_BASIC", 
    "string", []);
const get_MIME_TYPE_AUDIO_MID = Module.cwrap("get_MIME_TYPE_AUDIO_MID", 
    "string", []);
const get_MIME_TYPE_AUDIO_MPEG = Module.cwrap("get_MIME_TYPE_AUDIO_MPEG", 
    "string", []);
const get_MIME_TYPE_AUDIO_X_AIFF = Module.cwrap("get_MIME_TYPE_AUDIO_X_AIFF", 
    "string", []);
const get_MIME_TYPE_AUDIO_X_MPEGURL = Module.cwrap("get_MIME_TYPE_AUDIO_X_MPEGURL", 
    "string", []);
const get_MIME_TYPE_AUDIO_X_WAV = Module.cwrap("get_MIME_TYPE_AUDIO_X_WAV", 
    "string", []);
const get_MIME_TYPE_IMAGE_BMP = Module.cwrap("get_MIME_TYPE_IMAGE_BMP", 
    "string", []);
const get_MIME_TYPE_IMAGE_CIS_COD = Module.cwrap("get_MIME_TYPE_IMAGE_CIS_COD", 
    "string", []);
const get_MIME_TYPE_IMAGE_GIF = Module.cwrap("get_MIME_TYPE_IMAGE_GIF", 
    "string", []);
const get_MIME_TYPE_IMAGE_IEF = Module.cwrap("get_MIME_TYPE_IMAGE_IEF", 
    "string", []);
const get_MIME_TYPE_IMAGE_JPEG = Module.cwrap("get_MIME_TYPE_IMAGE_JPEG", 
    "string", []);
const get_MIME_TYPE_IMAGE_PIPEG = Module.cwrap("get_MIME_TYPE_IMAGE_PIPEG", 
    "string", []);
const get_MIME_TYPE_IMAGE_SVG_XML = Module.cwrap("get_MIME_TYPE_IMAGE_SVG_XML", 
    "string", []);
const get_MIME_TYPE_IMAGE_TIFF = Module.cwrap("get_MIME_TYPE_IMAGE_TIFF", 
    "string", []);
const get_MIME_TYPE_IMAGE_X_CMX = Module.cwrap("get_MIME_TYPE_IMAGE_X_CMX", 
    "string", []);
const get_MIME_TYPE_IMAGE_X_ICON = Module.cwrap("get_MIME_TYPE_IMAGE_X_ICON", 
    "string", []);
const get_MIME_TYPE_IMAGE_X_RGB = Module.cwrap("get_MIME_TYPE_IMAGE_X_RGB", 
    "string", []);
const get_MIME_TYPE_IMAGE_X_XBITMAP = Module.cwrap("get_MIME_TYPE_IMAGE_X_XBITMAP", 
    "string", []);
const get_MIME_TYPE_IMAGE_X_XPIXMAP = Module.cwrap("get_MIME_TYPE_IMAGE_X_XPIXMAP", 
    "string", []);
const get_MIME_TYPE_IMAGE_X_XWINDOWDUMP = Module.cwrap("get_MIME_TYPE_IMAGE_X_XWINDOWDUMP", 
    "string", []);
const get_MIME_TYPE_MESSAGE_RFC822 = Module.cwrap("get_MIME_TYPE_MESSAGE_RFC822", 
    "string", []);
const get_MIME_TYPE_TEXT_CSS = Module.cwrap("get_MIME_TYPE_TEXT_CSS", 
    "string", []);
const get_MIME_TYPE_TEXT_H323 = Module.cwrap("get_MIME_TYPE_TEXT_H323", 
    "string", []);
const get_MIME_TYPE_TEXT_HTML = Module.cwrap("get_MIME_TYPE_TEXT_HTML", 
    "string", []);
const get_MIME_TYPE_TEXT_IULS = Module.cwrap("get_MIME_TYPE_TEXT_IULS", 
    "string", []);
const get_MIME_TYPE_TEXT_PLAIN = Module.cwrap("get_MIME_TYPE_TEXT_PLAIN", 
    "string", []);
const get_MIME_TYPE_TEXT_RICHTEXT = Module.cwrap("get_MIME_TYPE_TEXT_RICHTEXT", 
    "string", []);
const get_MIME_TYPE_TEXT_SCRIPTLET = Module.cwrap("get_MIME_TYPE_TEXT_SCRIPTLET", 
    "string", []);
const get_MIME_TYPE_TEXT_WEBVIEWHTML = Module.cwrap("get_MIME_TYPE_TEXT_WEBVIEWHTML", 
    "string", []);
const get_MIME_TYPE_TEXT_X_COMPONENT = Module.cwrap("get_MIME_TYPE_TEXT_X_COMPONENT", 
    "string", []);
const get_MIME_TYPE_TEXT_X_SETEXT = Module.cwrap("get_MIME_TYPE_TEXT_X_SETEXT", 
    "string", []);
const get_MIME_TYPE_TEXT_X_VCARD = Module.cwrap("get_MIME_TYPE_TEXT_X_VCARD", 
    "string", []);
const get_MIME_TYPE_VIDEO_MPEG = Module.cwrap("get_MIME_TYPE_VIDEO_MPEG", 
    "string", []);
const get_MIME_TYPE_VIDEO_QUICKTIME = Module.cwrap("get_MIME_TYPE_VIDEO_QUICKTIME", 
    "string", []);
const get_MIME_TYPE_VIDEO_X_MSVIDEO = Module.cwrap("get_MIME_TYPE_VIDEO_X_MSVIDEO", 
    "string", []);
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
const get_OBJECT_CMD_SAVE = Module.cwrap("get_OBJECT_CMD_SAVE", 
    "string", []);
const get_OBJECT_CMD_RELOAD = Module.cwrap("get_OBJECT_CMD_RELOAD", 
    "string", []);
const get_OBJECT_CMD_MOVE_UP = Module.cwrap("get_OBJECT_CMD_MOVE_UP", 
    "string", []);
const get_OBJECT_CMD_MOVE_DOWN = Module.cwrap("get_OBJECT_CMD_MOVE_DOWN", 
    "string", []);
const get_OBJECT_CMD_REMOVE = Module.cwrap("get_OBJECT_CMD_REMOVE", 
    "string", []);
const get_OBJECT_CMD_REMOVE_CHECKED = Module.cwrap("get_OBJECT_CMD_REMOVE_CHECKED", 
    "string", []);
const get_OBJECT_CMD_CLEAR = Module.cwrap("get_OBJECT_CMD_CLEAR", 
    "string", []);
const get_OBJECT_CMD_ADD = Module.cwrap("get_OBJECT_CMD_ADD", 
    "string", []);
const get_OBJECT_CMD_DETAIL = Module.cwrap("get_OBJECT_CMD_DETAIL", 
    "string", []);
const get_OBJECT_CMD_EDIT = Module.cwrap("get_OBJECT_CMD_EDIT", 
    "string", []);
const get_OBJECT_PROP_SIZE = Module.cwrap("get_OBJECT_PROP_SIZE", 
    "string", []);
const get_OBJECT_PROP_CHECKED = Module.cwrap("get_OBJECT_PROP_CHECKED", 
    "string", []);
const rlog_create = Module.cwrap("rlog_create", 
    "number", ["string","number","number"]);
const rlog_write = Module.cwrap("rlog_write", 
    "number", ["number","string"]);
const time_now_s = Module.cwrap("time_now_s", 
    "number", []);
const time_now_ms = Module.cwrap("time_now_ms", 
    "number", []);
const time_now_us = Module.cwrap("time_now_us", 
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
const get_RET_SKIP = Module.cwrap("get_RET_SKIP", 
    "number", []);
const get_RET_CONTINUE = Module.cwrap("get_RET_CONTINUE", 
    "number", []);
const get_RET_OBJECT_CHANGED = Module.cwrap("get_RET_OBJECT_CHANGED", 
    "number", []);
const get_RET_ITEMS_CHANGED = Module.cwrap("get_RET_ITEMS_CHANGED", 
    "number", []);
const get_RET_BAD_PARAMS = Module.cwrap("get_RET_BAD_PARAMS", 
    "number", []);
const get_RET_TIMEOUT = Module.cwrap("get_RET_TIMEOUT", 
    "number", []);
const get_RET_CRC = Module.cwrap("get_RET_CRC", 
    "number", []);
const get_RET_IO = Module.cwrap("get_RET_IO", 
    "number", []);
const get_RET_EOS = Module.cwrap("get_RET_EOS", 
    "number", []);
const get_RET_NOT_MODIFIED = Module.cwrap("get_RET_NOT_MODIFIED", 
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
const get_VALUE_TYPE_SIZED_STRING = Module.cwrap("get_VALUE_TYPE_SIZED_STRING", 
    "number", []);
const get_VALUE_TYPE_BINARY = Module.cwrap("get_VALUE_TYPE_BINARY", 
    "number", []);
const get_VALUE_TYPE_UBJSON = Module.cwrap("get_VALUE_TYPE_UBJSON", 
    "number", []);
const get_VALUE_TYPE_TOKEN = Module.cwrap("get_VALUE_TYPE_TOKEN", 
    "number", []);
const assets_manager = Module.cwrap("assets_manager", 
    "number", []);
const assets_manager_set_theme = Module.cwrap("assets_manager_set_theme", 
    "number", ["number","string"]);
const assets_manager_ref = Module.cwrap("assets_manager_ref", 
    "number", ["number","number","string"]);
const assets_manager_ref_ex = Module.cwrap("assets_manager_ref_ex", 
    "number", ["number","number","number","string"]);
const assets_manager_unref = Module.cwrap("assets_manager_unref", 
    "number", ["number","number"]);
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
const orientation_event_cast = Module.cwrap("orientation_event_cast", 
    "number", ["number"]);
const orientation_event_t_get_prop_orientation = Module.cwrap("orientation_event_t_get_prop_orientation", 
    "number", ["number"]);
const value_change_event_cast = Module.cwrap("value_change_event_cast", 
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
const pointer_event_t_get_prop_cmd = Module.cwrap("pointer_event_t_get_prop_cmd", 
    "number", ["number"]);
const pointer_event_t_get_prop_menu = Module.cwrap("pointer_event_t_get_prop_menu", 
    "number", ["number"]);
const pointer_event_t_get_prop_shift = Module.cwrap("pointer_event_t_get_prop_shift", 
    "number", ["number"]);
const key_event_cast = Module.cwrap("key_event_cast", 
    "number", ["number"]);
const key_event_t_get_prop_key = Module.cwrap("key_event_t_get_prop_key", 
    "number", ["number"]);
const key_event_t_get_prop_alt = Module.cwrap("key_event_t_get_prop_alt", 
    "number", ["number"]);
const key_event_t_get_prop_lalt = Module.cwrap("key_event_t_get_prop_lalt", 
    "number", ["number"]);
const key_event_t_get_prop_ralt = Module.cwrap("key_event_t_get_prop_ralt", 
    "number", ["number"]);
const key_event_t_get_prop_ctrl = Module.cwrap("key_event_t_get_prop_ctrl", 
    "number", ["number"]);
const key_event_t_get_prop_lctrl = Module.cwrap("key_event_t_get_prop_lctrl", 
    "number", ["number"]);
const key_event_t_get_prop_rctrl = Module.cwrap("key_event_t_get_prop_rctrl", 
    "number", ["number"]);
const key_event_t_get_prop_shift = Module.cwrap("key_event_t_get_prop_shift", 
    "number", ["number"]);
const key_event_t_get_prop_lshift = Module.cwrap("key_event_t_get_prop_lshift", 
    "number", ["number"]);
const key_event_t_get_prop_rshift = Module.cwrap("key_event_t_get_prop_rshift", 
    "number", ["number"]);
const key_event_t_get_prop_cmd = Module.cwrap("key_event_t_get_prop_cmd", 
    "number", ["number"]);
const key_event_t_get_prop_menu = Module.cwrap("key_event_t_get_prop_menu", 
    "number", ["number"]);
const key_event_t_get_prop_capslock = Module.cwrap("key_event_t_get_prop_capslock", 
    "number", ["number"]);
const paint_event_cast = Module.cwrap("paint_event_cast", 
    "number", ["number"]);
const paint_event_t_get_prop_c = Module.cwrap("paint_event_t_get_prop_c", 
    "number", ["number"]);
const window_event_cast = Module.cwrap("window_event_cast", 
    "number", ["number"]);
const window_event_t_get_prop_window = Module.cwrap("window_event_t_get_prop_window", 
    "number", ["number"]);
const multi_gesture_event_cast = Module.cwrap("multi_gesture_event_cast", 
    "number", ["number"]);
const multi_gesture_event_t_get_prop_x = Module.cwrap("multi_gesture_event_t_get_prop_x", 
    "number", ["number"]);
const multi_gesture_event_t_get_prop_y = Module.cwrap("multi_gesture_event_t_get_prop_y", 
    "number", ["number"]);
const multi_gesture_event_t_get_prop_rotation = Module.cwrap("multi_gesture_event_t_get_prop_rotation", 
    "number", ["number"]);
const multi_gesture_event_t_get_prop_distance = Module.cwrap("multi_gesture_event_t_get_prop_distance", 
    "number", ["number"]);
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
const window_base_cast = Module.cwrap("window_base_cast", 
    "number", ["number"]);
const window_base_t_get_prop_theme = Module.cwrap("window_base_t_get_prop_theme", 
    "string", ["number"]);
const window_base_t_get_prop_design_w = Module.cwrap("window_base_t_get_prop_design_w", 
    "number", ["number"]);
const window_base_t_get_prop_design_h = Module.cwrap("window_base_t_get_prop_design_h", 
    "number", ["number"]);
const window_base_t_get_prop_auto_scale_children_x = Module.cwrap("window_base_t_get_prop_auto_scale_children_x", 
    "number", ["number"]);
const window_base_t_get_prop_auto_scale_children_y = Module.cwrap("window_base_t_get_prop_auto_scale_children_y", 
    "number", ["number"]);
const window_base_t_get_prop_auto_scale_children_w = Module.cwrap("window_base_t_get_prop_auto_scale_children_w", 
    "number", ["number"]);
const window_base_t_get_prop_auto_scale_children_h = Module.cwrap("window_base_t_get_prop_auto_scale_children_h", 
    "number", ["number"]);
const window_base_t_get_prop_disable_anim = Module.cwrap("window_base_t_get_prop_disable_anim", 
    "number", ["number"]);
const window_base_t_get_prop_closable = Module.cwrap("window_base_t_get_prop_closable", 
    "number", ["number"]);
const window_base_t_get_prop_open_anim_hint = Module.cwrap("window_base_t_get_prop_open_anim_hint", 
    "string", ["number"]);
const window_base_t_get_prop_close_anim_hint = Module.cwrap("window_base_t_get_prop_close_anim_hint", 
    "string", ["number"]);
const window_base_t_get_prop_move_focus_prev_key = Module.cwrap("window_base_t_get_prop_move_focus_prev_key", 
    "string", ["number"]);
const window_base_t_get_prop_move_focus_next_key = Module.cwrap("window_base_t_get_prop_move_focus_next_key", 
    "string", ["number"]);
const window_base_t_get_prop_move_focus_up_key = Module.cwrap("window_base_t_get_prop_move_focus_up_key", 
    "string", ["number"]);
const window_base_t_get_prop_move_focus_down_key = Module.cwrap("window_base_t_get_prop_move_focus_down_key", 
    "string", ["number"]);
const window_base_t_get_prop_move_focus_left_key = Module.cwrap("window_base_t_get_prop_move_focus_left_key", 
    "string", ["number"]);
const window_base_t_get_prop_move_focus_right_key = Module.cwrap("window_base_t_get_prop_move_focus_right_key", 
    "string", ["number"]);
const window_base_t_get_prop_single_instance = Module.cwrap("window_base_t_get_prop_single_instance", 
    "number", ["number"]);
const window_base_t_get_prop_strongly_focus = Module.cwrap("window_base_t_get_prop_strongly_focus", 
    "number", ["number"]);
const window_manager = Module.cwrap("window_manager", 
    "number", []);
const window_manager_cast = Module.cwrap("window_manager_cast", 
    "number", ["number"]);
const window_manager_get_top_main_window = Module.cwrap("window_manager_get_top_main_window", 
    "number", ["number"]);
const window_manager_get_top_window = Module.cwrap("window_manager_get_top_window", 
    "number", ["number"]);
const window_manager_get_prev_window = Module.cwrap("window_manager_get_prev_window", 
    "number", ["number"]);
const window_manager_get_pointer_x = Module.cwrap("window_manager_get_pointer_x", 
    "number", ["number"]);
const window_manager_get_pointer_y = Module.cwrap("window_manager_get_pointer_y", 
    "number", ["number"]);
const window_manager_get_pointer_pressed = Module.cwrap("window_manager_get_pointer_pressed", 
    "number", ["number"]);
const window_manager_is_animating = Module.cwrap("window_manager_is_animating", 
    "number", ["number"]);
const window_manager_set_show_fps = Module.cwrap("window_manager_set_show_fps", 
    "number", ["number","number"]);
const window_manager_set_max_fps = Module.cwrap("window_manager_set_max_fps", 
    "number", ["number","number"]);
const window_manager_set_ignore_input_events = Module.cwrap("window_manager_set_ignore_input_events", 
    "number", ["number","number"]);
const window_manager_set_screen_saver_time = Module.cwrap("window_manager_set_screen_saver_time", 
    "number", ["number","number"]);
const window_manager_set_cursor = Module.cwrap("window_manager_set_cursor", 
    "number", ["number","string"]);
const window_manager_back = Module.cwrap("window_manager_back", 
    "number", ["number"]);
const window_manager_back_to_home = Module.cwrap("window_manager_back_to_home", 
    "number", ["number"]);
const window_manager_back_to = Module.cwrap("window_manager_back_to", 
    "number", ["number","string"]);
const window_manager_resize = Module.cwrap("window_manager_resize", 
    "number", ["number","number","number"]);
const window_manager_close_all = Module.cwrap("window_manager_close_all", 
    "number", ["number"]);
const canvas_widget_create = Module.cwrap("canvas_widget_create", 
    "number", ["number","number","number","number","number"]);
const canvas_widget_cast = Module.cwrap("canvas_widget_cast", 
    "number", ["number"]);
const color_component_create = Module.cwrap("color_component_create", 
    "number", ["number","number","number","number","number"]);
const color_component_cast = Module.cwrap("color_component_cast", 
    "number", ["number"]);
const color_picker_create = Module.cwrap("color_picker_create", 
    "number", ["number","number","number","number","number"]);
const color_picker_set_color = Module.cwrap("color_picker_set_color", 
    "number", ["number","string"]);
const color_picker_cast = Module.cwrap("color_picker_cast", 
    "number", ["number"]);
const color_picker_t_get_prop_value = Module.cwrap("color_picker_t_get_prop_value", 
    "string", ["number"]);
const draggable_create = Module.cwrap("draggable_create", 
    "number", ["number","number","number","number","number"]);
const draggable_cast = Module.cwrap("draggable_cast", 
    "number", ["number"]);
const draggable_set_top = Module.cwrap("draggable_set_top", 
    "number", ["number","number"]);
const draggable_set_bottom = Module.cwrap("draggable_set_bottom", 
    "number", ["number","number"]);
const draggable_set_left = Module.cwrap("draggable_set_left", 
    "number", ["number","number"]);
const draggable_set_right = Module.cwrap("draggable_set_right", 
    "number", ["number","number"]);
const draggable_set_vertical_only = Module.cwrap("draggable_set_vertical_only", 
    "number", ["number","number"]);
const draggable_set_horizontal_only = Module.cwrap("draggable_set_horizontal_only", 
    "number", ["number","number"]);
const draggable_set_drag_window = Module.cwrap("draggable_set_drag_window", 
    "number", ["number","number"]);
const draggable_t_get_prop_top = Module.cwrap("draggable_t_get_prop_top", 
    "number", ["number"]);
const draggable_t_get_prop_bottom = Module.cwrap("draggable_t_get_prop_bottom", 
    "number", ["number"]);
const draggable_t_get_prop_left = Module.cwrap("draggable_t_get_prop_left", 
    "number", ["number"]);
const draggable_t_get_prop_right = Module.cwrap("draggable_t_get_prop_right", 
    "number", ["number"]);
const draggable_t_get_prop_vertical_only = Module.cwrap("draggable_t_get_prop_vertical_only", 
    "number", ["number"]);
const draggable_t_get_prop_horizontal_only = Module.cwrap("draggable_t_get_prop_horizontal_only", 
    "number", ["number"]);
const draggable_t_get_prop_drag_window = Module.cwrap("draggable_t_get_prop_drag_window", 
    "number", ["number"]);
const file_browser_view_create = Module.cwrap("file_browser_view_create", 
    "number", ["number","number","number","number","number"]);
const file_browser_view_cast = Module.cwrap("file_browser_view_cast", 
    "number", ["number"]);
const file_browser_view_set_init_dir = Module.cwrap("file_browser_view_set_init_dir", 
    "number", ["number","string"]);
const file_browser_view_set_top_dir = Module.cwrap("file_browser_view_set_top_dir", 
    "number", ["number","string"]);
const file_browser_view_set_filter = Module.cwrap("file_browser_view_set_filter", 
    "number", ["number","string"]);
const file_browser_view_reload = Module.cwrap("file_browser_view_reload", 
    "number", ["number"]);
const file_browser_view_set_ignore_hidden_files = Module.cwrap("file_browser_view_set_ignore_hidden_files", 
    "number", ["number","number"]);
const file_browser_view_set_sort_ascending = Module.cwrap("file_browser_view_set_sort_ascending", 
    "number", ["number","number"]);
const file_browser_view_set_show_check_button = Module.cwrap("file_browser_view_set_show_check_button", 
    "number", ["number","number"]);
const file_browser_view_set_sort_by = Module.cwrap("file_browser_view_set_sort_by", 
    "number", ["number","string"]);
const file_browser_view_get_cwd = Module.cwrap("file_browser_view_get_cwd", 
    "string", ["number"]);
const file_browser_view_create_dir = Module.cwrap("file_browser_view_create_dir", 
    "number", ["number","string"]);
const file_browser_view_create_file = Module.cwrap("file_browser_view_create_file", 
    "number", ["number","string","string","number"]);
const file_browser_view_t_get_prop_init_dir = Module.cwrap("file_browser_view_t_get_prop_init_dir", 
    "string", ["number"]);
const file_browser_view_t_get_prop_top_dir = Module.cwrap("file_browser_view_t_get_prop_top_dir", 
    "string", ["number"]);
const file_browser_view_t_get_prop_filter = Module.cwrap("file_browser_view_t_get_prop_filter", 
    "string", ["number"]);
const file_browser_view_t_get_prop_ignore_hidden_files = Module.cwrap("file_browser_view_t_get_prop_ignore_hidden_files", 
    "number", ["number"]);
const file_browser_view_t_get_prop_sort_ascending = Module.cwrap("file_browser_view_t_get_prop_sort_ascending", 
    "number", ["number"]);
const file_browser_view_t_get_prop_show_check_button = Module.cwrap("file_browser_view_t_get_prop_show_check_button", 
    "number", ["number"]);
const file_browser_view_t_get_prop_sort_by = Module.cwrap("file_browser_view_t_get_prop_sort_by", 
    "string", ["number"]);
const file_chooser_create = Module.cwrap("file_chooser_create", 
    "number", []);
const file_chooser_set_init_dir = Module.cwrap("file_chooser_set_init_dir", 
    "number", ["number","string"]);
const file_chooser_set_top_dir = Module.cwrap("file_chooser_set_top_dir", 
    "number", ["number","string"]);
const file_chooser_set_filter = Module.cwrap("file_chooser_set_filter", 
    "number", ["number","string"]);
const file_chooser_cast = Module.cwrap("file_chooser_cast", 
    "number", ["number"]);
const file_chooser_choose_file_for_save = Module.cwrap("file_chooser_choose_file_for_save", 
    "number", ["number"]);
const file_chooser_choose_file_for_open = Module.cwrap("file_chooser_choose_file_for_open", 
    "number", ["number"]);
const file_chooser_choose_folder = Module.cwrap("file_chooser_choose_folder", 
    "number", ["number"]);
const file_chooser_get_dir = Module.cwrap("file_chooser_get_dir", 
    "string", ["number"]);
const file_chooser_get_filename = Module.cwrap("file_chooser_get_filename", 
    "string", ["number"]);
const file_chooser_is_aborted = Module.cwrap("file_chooser_is_aborted", 
    "number", ["number"]);
const gauge_pointer_create = Module.cwrap("gauge_pointer_create", 
    "number", ["number","number","number","number","number"]);
const gauge_pointer_cast = Module.cwrap("gauge_pointer_cast", 
    "number", ["number"]);
const gauge_pointer_set_angle = Module.cwrap("gauge_pointer_set_angle", 
    "number", ["number","number"]);
const gauge_pointer_set_image = Module.cwrap("gauge_pointer_set_image", 
    "number", ["number","string"]);
const gauge_pointer_set_anchor = Module.cwrap("gauge_pointer_set_anchor", 
    "number", ["number","string","string"]);
const gauge_pointer_t_get_prop_angle = Module.cwrap("gauge_pointer_t_get_prop_angle", 
    "number", ["number"]);
const gauge_pointer_t_get_prop_image = Module.cwrap("gauge_pointer_t_get_prop_image", 
    "string", ["number"]);
const gauge_pointer_t_get_prop_anchor_x = Module.cwrap("gauge_pointer_t_get_prop_anchor_x", 
    "string", ["number"]);
const gauge_pointer_t_get_prop_anchor_y = Module.cwrap("gauge_pointer_t_get_prop_anchor_y", 
    "string", ["number"]);
const gauge_create = Module.cwrap("gauge_create", 
    "number", ["number","number","number","number","number"]);
const gauge_cast = Module.cwrap("gauge_cast", 
    "number", ["number"]);
const gauge_set_image = Module.cwrap("gauge_set_image", 
    "number", ["number","string"]);
const gauge_set_draw_type = Module.cwrap("gauge_set_draw_type", 
    "number", ["number","number"]);
const gauge_t_get_prop_image = Module.cwrap("gauge_t_get_prop_image", 
    "string", ["number"]);
const gauge_t_get_prop_draw_type = Module.cwrap("gauge_t_get_prop_draw_type", 
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
const image_animation_next = Module.cwrap("image_animation_next", 
    "number", ["number"]);
const image_animation_set_format = Module.cwrap("image_animation_set_format", 
    "number", ["number","string"]);
const image_animation_set_unload_after_paint = Module.cwrap("image_animation_set_unload_after_paint", 
    "number", ["number","number"]);
const image_animation_set_reverse = Module.cwrap("image_animation_set_reverse", 
    "number", ["number","number"]);
const image_animation_set_show_when_done = Module.cwrap("image_animation_set_show_when_done", 
    "number", ["number","number"]);
const image_animation_cast = Module.cwrap("image_animation_cast", 
    "number", ["number"]);
const image_animation_is_playing = Module.cwrap("image_animation_is_playing", 
    "number", ["number"]);
const image_animation_t_get_prop_image = Module.cwrap("image_animation_t_get_prop_image", 
    "string", ["number"]);
const image_animation_t_get_prop_sequence = Module.cwrap("image_animation_t_get_prop_sequence", 
    "string", ["number"]);
const image_animation_t_get_prop_start_index = Module.cwrap("image_animation_t_get_prop_start_index", 
    "number", ["number"]);
const image_animation_t_get_prop_end_index = Module.cwrap("image_animation_t_get_prop_end_index", 
    "number", ["number"]);
const image_animation_t_get_prop_reverse = Module.cwrap("image_animation_t_get_prop_reverse", 
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
const image_animation_t_get_prop_show_when_done = Module.cwrap("image_animation_t_get_prop_show_when_done", 
    "number", ["number"]);
const image_value_create = Module.cwrap("image_value_create", 
    "number", ["number","number","number","number","number"]);
const image_value_set_image = Module.cwrap("image_value_set_image", 
    "number", ["number","string"]);
const image_value_set_format = Module.cwrap("image_value_set_format", 
    "number", ["number","string"]);
const image_value_set_click_add_delta = Module.cwrap("image_value_set_click_add_delta", 
    "number", ["number","number"]);
const image_value_set_value = Module.cwrap("image_value_set_value", 
    "number", ["number","number"]);
const image_value_set_min = Module.cwrap("image_value_set_min", 
    "number", ["number","number"]);
const image_value_set_max = Module.cwrap("image_value_set_max", 
    "number", ["number","number"]);
const image_value_cast = Module.cwrap("image_value_cast", 
    "number", ["number"]);
const image_value_t_get_prop_image = Module.cwrap("image_value_t_get_prop_image", 
    "string", ["number"]);
const image_value_t_get_prop_format = Module.cwrap("image_value_t_get_prop_format", 
    "string", ["number"]);
const image_value_t_get_prop_click_add_delta = Module.cwrap("image_value_t_get_prop_click_add_delta", 
    "number", ["number"]);
const image_value_t_get_prop_value = Module.cwrap("image_value_t_get_prop_value", 
    "number", ["number"]);
const image_value_t_get_prop_min = Module.cwrap("image_value_t_get_prop_min", 
    "number", ["number"]);
const image_value_t_get_prop_max = Module.cwrap("image_value_t_get_prop_max", 
    "number", ["number"]);
const candidates_create = Module.cwrap("candidates_create", 
    "number", ["number","number","number","number","number"]);
const candidates_cast = Module.cwrap("candidates_cast", 
    "number", ["number"]);
const candidates_set_pre = Module.cwrap("candidates_set_pre", 
    "number", ["number","number"]);
const candidates_set_select_by_num = Module.cwrap("candidates_set_select_by_num", 
    "number", ["number","number"]);
const candidates_set_auto_hide = Module.cwrap("candidates_set_auto_hide", 
    "number", ["number","number"]);
const candidates_set_button_style = Module.cwrap("candidates_set_button_style", 
    "number", ["number","string"]);
const candidates_t_get_prop_pre = Module.cwrap("candidates_t_get_prop_pre", 
    "number", ["number"]);
const candidates_t_get_prop_select_by_num = Module.cwrap("candidates_t_get_prop_select_by_num", 
    "number", ["number"]);
const candidates_t_get_prop_auto_hide = Module.cwrap("candidates_t_get_prop_auto_hide", 
    "number", ["number"]);
const candidates_t_get_prop_button_style = Module.cwrap("candidates_t_get_prop_button_style", 
    "string", ["number"]);
const lang_indicator_create = Module.cwrap("lang_indicator_create", 
    "number", ["number","number","number","number","number"]);
const lang_indicator_set_image = Module.cwrap("lang_indicator_set_image", 
    "number", ["number","string"]);
const lang_indicator_cast = Module.cwrap("lang_indicator_cast", 
    "number", ["number"]);
const lang_indicator_t_get_prop_image = Module.cwrap("lang_indicator_t_get_prop_image", 
    "string", ["number"]);
const line_number_create = Module.cwrap("line_number_create", 
    "number", ["number","number","number","number","number"]);
const line_number_set_top_margin = Module.cwrap("line_number_set_top_margin", 
    "number", ["number","number"]);
const line_number_set_bottom_margin = Module.cwrap("line_number_set_bottom_margin", 
    "number", ["number","number"]);
const line_number_set_line_height = Module.cwrap("line_number_set_line_height", 
    "number", ["number","number"]);
const line_number_set_yoffset = Module.cwrap("line_number_set_yoffset", 
    "number", ["number","number"]);
const line_number_cast = Module.cwrap("line_number_cast", 
    "number", ["number"]);
const mledit_create = Module.cwrap("mledit_create", 
    "number", ["number","number","number","number","number"]);
const mledit_set_readonly = Module.cwrap("mledit_set_readonly", 
    "number", ["number","number"]);
const mledit_set_cancelable = Module.cwrap("mledit_set_cancelable", 
    "number", ["number","number"]);
const mledit_set_focus = Module.cwrap("mledit_set_focus", 
    "number", ["number","number"]);
const mledit_set_wrap_word = Module.cwrap("mledit_set_wrap_word", 
    "number", ["number","number"]);
const mledit_set_max_lines = Module.cwrap("mledit_set_max_lines", 
    "number", ["number","number"]);
const mledit_set_max_chars = Module.cwrap("mledit_set_max_chars", 
    "number", ["number","number"]);
const mledit_set_tips = Module.cwrap("mledit_set_tips", 
    "number", ["number","string"]);
const mledit_set_tr_tips = Module.cwrap("mledit_set_tr_tips", 
    "number", ["number","string"]);
const mledit_set_keyboard = Module.cwrap("mledit_set_keyboard", 
    "number", ["number","string"]);
const mledit_set_cursor = Module.cwrap("mledit_set_cursor", 
    "number", ["number","number"]);
const mledit_get_cursor = Module.cwrap("mledit_get_cursor", 
    "number", ["number"]);
const mledit_set_scroll_line = Module.cwrap("mledit_set_scroll_line", 
    "number", ["number","number"]);
const mledit_scroll_to_offset = Module.cwrap("mledit_scroll_to_offset", 
    "number", ["number","number"]);
const mledit_set_open_im_when_focused = Module.cwrap("mledit_set_open_im_when_focused", 
    "number", ["number","number"]);
const mledit_set_close_im_when_blured = Module.cwrap("mledit_set_close_im_when_blured", 
    "number", ["number","number"]);
const mledit_set_select = Module.cwrap("mledit_set_select", 
    "number", ["number","number","number"]);
const mledit_get_selected_text = Module.cwrap("mledit_get_selected_text", 
    "string", ["number"]);
const mledit_cast = Module.cwrap("mledit_cast", 
    "number", ["number"]);
const mledit_t_get_prop_tips = Module.cwrap("mledit_t_get_prop_tips", 
    "string", ["number"]);
const mledit_t_get_prop_tr_tips = Module.cwrap("mledit_t_get_prop_tr_tips", 
    "string", ["number"]);
const mledit_t_get_prop_keyboard = Module.cwrap("mledit_t_get_prop_keyboard", 
    "string", ["number"]);
const mledit_t_get_prop_max_lines = Module.cwrap("mledit_t_get_prop_max_lines", 
    "number", ["number"]);
const mledit_t_get_prop_max_chars = Module.cwrap("mledit_t_get_prop_max_chars", 
    "number", ["number"]);
const mledit_t_get_prop_wrap_word = Module.cwrap("mledit_t_get_prop_wrap_word", 
    "number", ["number"]);
const mledit_t_get_prop_scroll_line = Module.cwrap("mledit_t_get_prop_scroll_line", 
    "number", ["number"]);
const mledit_t_get_prop_readonly = Module.cwrap("mledit_t_get_prop_readonly", 
    "number", ["number"]);
const mledit_t_get_prop_cancelable = Module.cwrap("mledit_t_get_prop_cancelable", 
    "number", ["number"]);
const mledit_t_get_prop_open_im_when_focused = Module.cwrap("mledit_t_get_prop_open_im_when_focused", 
    "number", ["number"]);
const mledit_t_get_prop_close_im_when_blured = Module.cwrap("mledit_t_get_prop_close_im_when_blured", 
    "number", ["number"]);
const progress_circle_create = Module.cwrap("progress_circle_create", 
    "number", ["number","number","number","number","number"]);
const progress_circle_cast = Module.cwrap("progress_circle_cast", 
    "number", ["number"]);
const progress_circle_set_value = Module.cwrap("progress_circle_set_value", 
    "number", ["number","number"]);
const progress_circle_set_max = Module.cwrap("progress_circle_set_max", 
    "number", ["number","number"]);
const progress_circle_set_format = Module.cwrap("progress_circle_set_format", 
    "number", ["number","string"]);
const progress_circle_set_line_width = Module.cwrap("progress_circle_set_line_width", 
    "number", ["number","number"]);
const progress_circle_set_start_angle = Module.cwrap("progress_circle_set_start_angle", 
    "number", ["number","number"]);
const progress_circle_set_line_cap = Module.cwrap("progress_circle_set_line_cap", 
    "number", ["number","string"]);
const progress_circle_set_show_text = Module.cwrap("progress_circle_set_show_text", 
    "number", ["number","number"]);
const progress_circle_set_counter_clock_wise = Module.cwrap("progress_circle_set_counter_clock_wise", 
    "number", ["number","number"]);
const progress_circle_t_get_prop_value = Module.cwrap("progress_circle_t_get_prop_value", 
    "number", ["number"]);
const progress_circle_t_get_prop_max = Module.cwrap("progress_circle_t_get_prop_max", 
    "number", ["number"]);
const progress_circle_t_get_prop_format = Module.cwrap("progress_circle_t_get_prop_format", 
    "string", ["number"]);
const progress_circle_t_get_prop_start_angle = Module.cwrap("progress_circle_t_get_prop_start_angle", 
    "number", ["number"]);
const progress_circle_t_get_prop_line_width = Module.cwrap("progress_circle_t_get_prop_line_width", 
    "number", ["number"]);
const progress_circle_t_get_prop_line_cap = Module.cwrap("progress_circle_t_get_prop_line_cap", 
    "string", ["number"]);
const progress_circle_t_get_prop_counter_clock_wise = Module.cwrap("progress_circle_t_get_prop_counter_clock_wise", 
    "number", ["number"]);
const progress_circle_t_get_prop_show_text = Module.cwrap("progress_circle_t_get_prop_show_text", 
    "number", ["number"]);
const rich_text_view_create = Module.cwrap("rich_text_view_create", 
    "number", ["number","number","number","number","number"]);
const rich_text_view_cast = Module.cwrap("rich_text_view_cast", 
    "number", ["number"]);
const rich_text_create = Module.cwrap("rich_text_create", 
    "number", ["number","number","number","number","number"]);
const rich_text_set_text = Module.cwrap("rich_text_set_text", 
    "number", ["number","string"]);
const rich_text_set_yslidable = Module.cwrap("rich_text_set_yslidable", 
    "number", ["number","number"]);
const rich_text_cast = Module.cwrap("rich_text_cast", 
    "number", ["number"]);
const rich_text_t_get_prop_line_gap = Module.cwrap("rich_text_t_get_prop_line_gap", 
    "number", ["number"]);
const rich_text_t_get_prop_yslidable = Module.cwrap("rich_text_t_get_prop_yslidable", 
    "number", ["number"]);
const hscroll_label_create = Module.cwrap("hscroll_label_create", 
    "number", ["number","number","number","number","number"]);
const hscroll_label_set_lull = Module.cwrap("hscroll_label_set_lull", 
    "number", ["number","number"]);
const hscroll_label_set_duration = Module.cwrap("hscroll_label_set_duration", 
    "number", ["number","number"]);
const hscroll_label_set_only_focus = Module.cwrap("hscroll_label_set_only_focus", 
    "number", ["number","number"]);
const hscroll_label_set_only_parent_focus = Module.cwrap("hscroll_label_set_only_parent_focus", 
    "number", ["number","number"]);
const hscroll_label_set_loop = Module.cwrap("hscroll_label_set_loop", 
    "number", ["number","number"]);
const hscroll_label_set_yoyo = Module.cwrap("hscroll_label_set_yoyo", 
    "number", ["number","number"]);
const hscroll_label_set_ellipses = Module.cwrap("hscroll_label_set_ellipses", 
    "number", ["number","number"]);
const hscroll_label_set_xoffset = Module.cwrap("hscroll_label_set_xoffset", 
    "number", ["number","number"]);
const hscroll_label_start = Module.cwrap("hscroll_label_start", 
    "number", ["number"]);
const hscroll_label_stop = Module.cwrap("hscroll_label_stop", 
    "number", ["number"]);
const hscroll_label_cast = Module.cwrap("hscroll_label_cast", 
    "number", ["number"]);
const hscroll_label_t_get_prop_only_focus = Module.cwrap("hscroll_label_t_get_prop_only_focus", 
    "number", ["number"]);
const hscroll_label_t_get_prop_only_parent_focus = Module.cwrap("hscroll_label_t_get_prop_only_parent_focus", 
    "number", ["number"]);
const hscroll_label_t_get_prop_loop = Module.cwrap("hscroll_label_t_get_prop_loop", 
    "number", ["number"]);
const hscroll_label_t_get_prop_yoyo = Module.cwrap("hscroll_label_t_get_prop_yoyo", 
    "number", ["number"]);
const hscroll_label_t_get_prop_ellipses = Module.cwrap("hscroll_label_t_get_prop_ellipses", 
    "number", ["number"]);
const hscroll_label_t_get_prop_lull = Module.cwrap("hscroll_label_t_get_prop_lull", 
    "number", ["number"]);
const hscroll_label_t_get_prop_duration = Module.cwrap("hscroll_label_t_get_prop_duration", 
    "number", ["number"]);
const hscroll_label_t_get_prop_xoffset = Module.cwrap("hscroll_label_t_get_prop_xoffset", 
    "number", ["number"]);
const hscroll_label_t_get_prop_text_w = Module.cwrap("hscroll_label_t_get_prop_text_w", 
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
const list_view_set_floating_scroll_bar = Module.cwrap("list_view_set_floating_scroll_bar", 
    "number", ["number","number"]);
const list_view_cast = Module.cwrap("list_view_cast", 
    "number", ["number"]);
const list_view_reinit = Module.cwrap("list_view_reinit", 
    "number", ["number"]);
const list_view_t_get_prop_item_height = Module.cwrap("list_view_t_get_prop_item_height", 
    "number", ["number"]);
const list_view_t_get_prop_default_item_height = Module.cwrap("list_view_t_get_prop_default_item_height", 
    "number", ["number"]);
const list_view_t_get_prop_auto_hide_scroll_bar = Module.cwrap("list_view_t_get_prop_auto_hide_scroll_bar", 
    "number", ["number"]);
const list_view_t_get_prop_floating_scroll_bar = Module.cwrap("list_view_t_get_prop_floating_scroll_bar", 
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
const scroll_bar_set_auto_hide = Module.cwrap("scroll_bar_set_auto_hide", 
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
const scroll_bar_t_get_prop_auto_hide = Module.cwrap("scroll_bar_t_get_prop_auto_hide", 
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
const scroll_view_set_snap_to_page = Module.cwrap("scroll_view_set_snap_to_page", 
    "number", ["number","number"]);
const scroll_view_set_move_to_page = Module.cwrap("scroll_view_set_move_to_page", 
    "number", ["number","number"]);
const scroll_view_set_recursive = Module.cwrap("scroll_view_set_recursive", 
    "number", ["number","number"]);
const scroll_view_set_recursive_only = Module.cwrap("scroll_view_set_recursive_only", 
    "number", ["number","number"]);
const scroll_view_set_offset = Module.cwrap("scroll_view_set_offset", 
    "number", ["number","number","number"]);
const scroll_view_set_speed_scale = Module.cwrap("scroll_view_set_speed_scale", 
    "number", ["number","number","number"]);
const scroll_view_scroll_to = Module.cwrap("scroll_view_scroll_to", 
    "number", ["number","number","number","number"]);
const scroll_view_scroll_delta_to = Module.cwrap("scroll_view_scroll_delta_to", 
    "number", ["number","number","number","number"]);
const scroll_view_t_get_prop_virtual_w = Module.cwrap("scroll_view_t_get_prop_virtual_w", 
    "number", ["number"]);
const scroll_view_t_get_prop_virtual_h = Module.cwrap("scroll_view_t_get_prop_virtual_h", 
    "number", ["number"]);
const scroll_view_t_get_prop_xoffset = Module.cwrap("scroll_view_t_get_prop_xoffset", 
    "number", ["number"]);
const scroll_view_t_get_prop_yoffset = Module.cwrap("scroll_view_t_get_prop_yoffset", 
    "number", ["number"]);
const scroll_view_t_get_prop_xspeed_scale = Module.cwrap("scroll_view_t_get_prop_xspeed_scale", 
    "number", ["number"]);
const scroll_view_t_get_prop_yspeed_scale = Module.cwrap("scroll_view_t_get_prop_yspeed_scale", 
    "number", ["number"]);
const scroll_view_t_get_prop_xslidable = Module.cwrap("scroll_view_t_get_prop_xslidable", 
    "number", ["number"]);
const scroll_view_t_get_prop_yslidable = Module.cwrap("scroll_view_t_get_prop_yslidable", 
    "number", ["number"]);
const scroll_view_t_get_prop_snap_to_page = Module.cwrap("scroll_view_t_get_prop_snap_to_page", 
    "number", ["number"]);
const scroll_view_t_get_prop_move_to_page = Module.cwrap("scroll_view_t_get_prop_move_to_page", 
    "number", ["number"]);
const scroll_view_t_get_prop_recursive = Module.cwrap("scroll_view_t_get_prop_recursive", 
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
const slide_indicator_create = Module.cwrap("slide_indicator_create", 
    "number", ["number","number","number","number","number"]);
const slide_indicator_create_linear = Module.cwrap("slide_indicator_create_linear", 
    "number", ["number","number","number","number","number"]);
const slide_indicator_create_arc = Module.cwrap("slide_indicator_create_arc", 
    "number", ["number","number","number","number","number"]);
const slide_indicator_cast = Module.cwrap("slide_indicator_cast", 
    "number", ["number"]);
const slide_indicator_set_value = Module.cwrap("slide_indicator_set_value", 
    "number", ["number","number"]);
const slide_indicator_set_max = Module.cwrap("slide_indicator_set_max", 
    "number", ["number","number"]);
const slide_indicator_set_default_paint = Module.cwrap("slide_indicator_set_default_paint", 
    "number", ["number","number"]);
const slide_indicator_set_auto_hide = Module.cwrap("slide_indicator_set_auto_hide", 
    "number", ["number","number"]);
const slide_indicator_set_margin = Module.cwrap("slide_indicator_set_margin", 
    "number", ["number","number"]);
const slide_indicator_set_spacing = Module.cwrap("slide_indicator_set_spacing", 
    "number", ["number","number"]);
const slide_indicator_set_size = Module.cwrap("slide_indicator_set_size", 
    "number", ["number","number"]);
const slide_indicator_set_anchor = Module.cwrap("slide_indicator_set_anchor", 
    "number", ["number","string","string"]);
const slide_indicator_set_indicated_target = Module.cwrap("slide_indicator_set_indicated_target", 
    "number", ["number","string"]);
const slide_indicator_t_get_prop_value = Module.cwrap("slide_indicator_t_get_prop_value", 
    "number", ["number"]);
const slide_indicator_t_get_prop_max = Module.cwrap("slide_indicator_t_get_prop_max", 
    "number", ["number"]);
const slide_indicator_t_get_prop_default_paint = Module.cwrap("slide_indicator_t_get_prop_default_paint", 
    "number", ["number"]);
const slide_indicator_t_get_prop_auto_hide = Module.cwrap("slide_indicator_t_get_prop_auto_hide", 
    "number", ["number"]);
const slide_indicator_t_get_prop_margin = Module.cwrap("slide_indicator_t_get_prop_margin", 
    "number", ["number"]);
const slide_indicator_t_get_prop_spacing = Module.cwrap("slide_indicator_t_get_prop_spacing", 
    "number", ["number"]);
const slide_indicator_t_get_prop_size = Module.cwrap("slide_indicator_t_get_prop_size", 
    "number", ["number"]);
const slide_indicator_t_get_prop_anchor_x = Module.cwrap("slide_indicator_t_get_prop_anchor_x", 
    "number", ["number"]);
const slide_indicator_t_get_prop_anchor_y = Module.cwrap("slide_indicator_t_get_prop_anchor_y", 
    "number", ["number"]);
const slide_indicator_t_get_prop_indicated_target = Module.cwrap("slide_indicator_t_get_prop_indicated_target", 
    "string", ["number"]);
const slide_view_create = Module.cwrap("slide_view_create", 
    "number", ["number","number","number","number","number"]);
const slide_view_cast = Module.cwrap("slide_view_cast", 
    "number", ["number"]);
const slide_view_set_auto_play = Module.cwrap("slide_view_set_auto_play", 
    "number", ["number","number"]);
const slide_view_set_active = Module.cwrap("slide_view_set_active", 
    "number", ["number","number"]);
const slide_view_set_active_ex = Module.cwrap("slide_view_set_active_ex", 
    "number", ["number","number","number"]);
const slide_view_set_vertical = Module.cwrap("slide_view_set_vertical", 
    "number", ["number","number"]);
const slide_view_set_anim_hint = Module.cwrap("slide_view_set_anim_hint", 
    "number", ["number","string"]);
const slide_view_set_loop = Module.cwrap("slide_view_set_loop", 
    "number", ["number","number"]);
const slide_view_remove_index = Module.cwrap("slide_view_remove_index", 
    "number", ["number","number"]);
const slide_view_t_get_prop_vertical = Module.cwrap("slide_view_t_get_prop_vertical", 
    "number", ["number"]);
const slide_view_t_get_prop_auto_play = Module.cwrap("slide_view_t_get_prop_auto_play", 
    "number", ["number"]);
const slide_view_t_get_prop_loop = Module.cwrap("slide_view_t_get_prop_loop", 
    "number", ["number"]);
const slide_view_t_get_prop_anim_hint = Module.cwrap("slide_view_t_get_prop_anim_hint", 
    "string", ["number"]);
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
const text_selector_set_range_options_ex = Module.cwrap("text_selector_set_range_options_ex", 
    "number", ["number","number","number","number","string"]);
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
const text_selector_set_localize_options = Module.cwrap("text_selector_set_localize_options", 
    "number", ["number","number"]);
const text_selector_set_loop_options = Module.cwrap("text_selector_set_loop_options", 
    "number", ["number","number"]);
const text_selector_set_yspeed_scale = Module.cwrap("text_selector_set_yspeed_scale", 
    "number", ["number","number"]);
const text_selector_set_animating_time = Module.cwrap("text_selector_set_animating_time", 
    "number", ["number","number"]);
const text_selector_set_enable_value_animator = Module.cwrap("text_selector_set_enable_value_animator", 
    "number", ["number","number"]);
const text_selector_t_get_prop_visible_nr = Module.cwrap("text_selector_t_get_prop_visible_nr", 
    "number", ["number"]);
const text_selector_t_get_prop_selected_index = Module.cwrap("text_selector_t_get_prop_selected_index", 
    "number", ["number"]);
const text_selector_t_get_prop_options = Module.cwrap("text_selector_t_get_prop_options", 
    "string", ["number"]);
const text_selector_t_get_prop_yspeed_scale = Module.cwrap("text_selector_t_get_prop_yspeed_scale", 
    "number", ["number"]);
const text_selector_t_get_prop_animating_time = Module.cwrap("text_selector_t_get_prop_animating_time", 
    "number", ["number"]);
const text_selector_t_get_prop_localize_options = Module.cwrap("text_selector_t_get_prop_localize_options", 
    "number", ["number"]);
const text_selector_t_get_prop_loop_options = Module.cwrap("text_selector_t_get_prop_loop_options", 
    "number", ["number"]);
const text_selector_t_get_prop_enable_value_animator = Module.cwrap("text_selector_t_get_prop_enable_value_animator", 
    "number", ["number"]);
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
const time_clock_set_hour_anchor = Module.cwrap("time_clock_set_hour_anchor", 
    "number", ["number","string","string"]);
const time_clock_set_minute_anchor = Module.cwrap("time_clock_set_minute_anchor", 
    "number", ["number","string","string"]);
const time_clock_set_second_anchor = Module.cwrap("time_clock_set_second_anchor", 
    "number", ["number","string","string"]);
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
const time_clock_t_get_prop_hour_anchor_x = Module.cwrap("time_clock_t_get_prop_hour_anchor_x", 
    "string", ["number"]);
const time_clock_t_get_prop_hour_anchor_y = Module.cwrap("time_clock_t_get_prop_hour_anchor_y", 
    "string", ["number"]);
const time_clock_t_get_prop_minute_anchor_x = Module.cwrap("time_clock_t_get_prop_minute_anchor_x", 
    "string", ["number"]);
const time_clock_t_get_prop_minute_anchor_y = Module.cwrap("time_clock_t_get_prop_minute_anchor_y", 
    "string", ["number"]);
const time_clock_t_get_prop_second_anchor_x = Module.cwrap("time_clock_t_get_prop_second_anchor_x", 
    "string", ["number"]);
const time_clock_t_get_prop_second_anchor_y = Module.cwrap("time_clock_t_get_prop_second_anchor_y", 
    "string", ["number"]);
const vpage_create = Module.cwrap("vpage_create", 
    "number", ["number","number","number","number","number"]);
const vpage_cast = Module.cwrap("vpage_cast", 
    "number", ["number"]);
const vpage_set_ui_asset = Module.cwrap("vpage_set_ui_asset", 
    "number", ["number","string"]);
const vpage_set_anim_hint = Module.cwrap("vpage_set_anim_hint", 
    "number", ["number","string"]);
const vpage_t_get_prop_ui_asset = Module.cwrap("vpage_t_get_prop_ui_asset", 
    "string", ["number"]);
const vpage_t_get_prop_anim_hint = Module.cwrap("vpage_t_get_prop_anim_hint", 
    "string", ["number"]);
const prop_change_event_cast = Module.cwrap("prop_change_event_cast", 
    "number", ["number"]);
const prop_change_event_t_get_prop_name = Module.cwrap("prop_change_event_t_get_prop_name", 
    "string", ["number"]);
const prop_change_event_t_get_prop_value = Module.cwrap("prop_change_event_t_get_prop_value", 
    "number", ["number"]);
const progress_event_cast = Module.cwrap("progress_event_cast", 
    "number", ["number"]);
const progress_event_t_get_prop_percent = Module.cwrap("progress_event_t_get_prop_percent", 
    "number", ["number"]);
const done_event_cast = Module.cwrap("done_event_cast", 
    "number", ["number"]);
const done_event_t_get_prop_result = Module.cwrap("done_event_t_get_prop_result", 
    "number", ["number"]);
const error_event_cast = Module.cwrap("error_event_cast", 
    "number", ["number"]);
const error_event_t_get_prop_code = Module.cwrap("error_event_t_get_prop_code", 
    "number", ["number"]);
const error_event_t_get_prop_message = Module.cwrap("error_event_t_get_prop_message", 
    "string", ["number"]);
const cmd_exec_event_cast = Module.cwrap("cmd_exec_event_cast", 
    "number", ["number"]);
const cmd_exec_event_t_get_prop_name = Module.cwrap("cmd_exec_event_t_get_prop_name", 
    "string", ["number"]);
const cmd_exec_event_t_get_prop_args = Module.cwrap("cmd_exec_event_t_get_prop_args", 
    "string", ["number"]);
const cmd_exec_event_t_get_prop_result = Module.cwrap("cmd_exec_event_t_get_prop_result", 
    "number", ["number"]);
const cmd_exec_event_t_get_prop_can_exec = Module.cwrap("cmd_exec_event_t_get_prop_can_exec", 
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
const button_set_long_press_time = Module.cwrap("button_set_long_press_time", 
    "number", ["number","number"]);
const button_set_enable_long_press = Module.cwrap("button_set_enable_long_press", 
    "number", ["number","number"]);
const button_t_get_prop_repeat = Module.cwrap("button_t_get_prop_repeat", 
    "number", ["number"]);
const button_t_get_prop_enable_long_press = Module.cwrap("button_t_get_prop_enable_long_press", 
    "number", ["number"]);
const button_t_get_prop_long_press_time = Module.cwrap("button_t_get_prop_long_press_time", 
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
const clip_view_create = Module.cwrap("clip_view_create", 
    "number", ["number","number","number","number","number"]);
const clip_view_cast = Module.cwrap("clip_view_cast", 
    "number", ["number"]);
const color_tile_create = Module.cwrap("color_tile_create", 
    "number", ["number","number","number","number","number"]);
const color_tile_cast = Module.cwrap("color_tile_cast", 
    "number", ["number"]);
const color_tile_set_bg_color = Module.cwrap("color_tile_set_bg_color", 
    "number", ["number","string"]);
const color_tile_get_bg_color = Module.cwrap("color_tile_get_bg_color", 
    "string", ["number"]);
const color_tile_get_border_color = Module.cwrap("color_tile_get_border_color", 
    "string", ["number"]);
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
const dialog_client_create = Module.cwrap("dialog_client_create", 
    "number", ["number","number","number","number","number"]);
const dialog_client_cast = Module.cwrap("dialog_client_cast", 
    "number", ["number"]);
const dialog_title_create = Module.cwrap("dialog_title_create", 
    "number", ["number","number","number","number","number"]);
const dialog_title_cast = Module.cwrap("dialog_title_cast", 
    "number", ["number"]);
const digit_clock_create = Module.cwrap("digit_clock_create", 
    "number", ["number","number","number","number","number"]);
const digit_clock_cast = Module.cwrap("digit_clock_cast", 
    "number", ["number"]);
const digit_clock_set_format = Module.cwrap("digit_clock_set_format", 
    "number", ["number","string"]);
const digit_clock_t_get_prop_format = Module.cwrap("digit_clock_t_get_prop_format", 
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
const edit_set_cancelable = Module.cwrap("edit_set_cancelable", 
    "number", ["number","number"]);
const edit_set_auto_fix = Module.cwrap("edit_set_auto_fix", 
    "number", ["number","number"]);
const edit_set_select_none_when_focused = Module.cwrap("edit_set_select_none_when_focused", 
    "number", ["number","number"]);
const edit_set_open_im_when_focused = Module.cwrap("edit_set_open_im_when_focused", 
    "number", ["number","number"]);
const edit_set_close_im_when_blured = Module.cwrap("edit_set_close_im_when_blured", 
    "number", ["number","number"]);
const edit_set_input_type = Module.cwrap("edit_set_input_type", 
    "number", ["number","number"]);
const edit_set_action_text = Module.cwrap("edit_set_action_text", 
    "number", ["number","string"]);
const edit_set_tips = Module.cwrap("edit_set_tips", 
    "number", ["number","string"]);
const edit_set_tr_tips = Module.cwrap("edit_set_tr_tips", 
    "number", ["number","string"]);
const edit_set_keyboard = Module.cwrap("edit_set_keyboard", 
    "number", ["number","string"]);
const edit_set_password_visible = Module.cwrap("edit_set_password_visible", 
    "number", ["number","number"]);
const edit_set_focus = Module.cwrap("edit_set_focus", 
    "number", ["number","number"]);
const edit_set_cursor = Module.cwrap("edit_set_cursor", 
    "number", ["number","number"]);
const edit_get_cursor = Module.cwrap("edit_get_cursor", 
    "number", ["number"]);
const edit_set_select = Module.cwrap("edit_set_select", 
    "number", ["number","number","number"]);
const edit_get_selected_text = Module.cwrap("edit_get_selected_text", 
    "string", ["number"]);
const edit_t_get_prop_tips = Module.cwrap("edit_t_get_prop_tips", 
    "string", ["number"]);
const edit_t_get_prop_tr_tips = Module.cwrap("edit_t_get_prop_tr_tips", 
    "string", ["number"]);
const edit_t_get_prop_action_text = Module.cwrap("edit_t_get_prop_action_text", 
    "string", ["number"]);
const edit_t_get_prop_keyboard = Module.cwrap("edit_t_get_prop_keyboard", 
    "string", ["number"]);
const edit_t_get_prop_min = Module.cwrap("edit_t_get_prop_min", 
    "number", ["number"]);
const edit_t_get_prop_max = Module.cwrap("edit_t_get_prop_max", 
    "number", ["number"]);
const edit_t_get_prop_step = Module.cwrap("edit_t_get_prop_step", 
    "number", ["number"]);
const edit_t_get_prop_input_type = Module.cwrap("edit_t_get_prop_input_type", 
    "number", ["number"]);
const edit_t_get_prop_readonly = Module.cwrap("edit_t_get_prop_readonly", 
    "number", ["number"]);
const edit_t_get_prop_password_visible = Module.cwrap("edit_t_get_prop_password_visible", 
    "number", ["number"]);
const edit_t_get_prop_auto_fix = Module.cwrap("edit_t_get_prop_auto_fix", 
    "number", ["number"]);
const edit_t_get_prop_select_none_when_focused = Module.cwrap("edit_t_get_prop_select_none_when_focused", 
    "number", ["number"]);
const edit_t_get_prop_open_im_when_focused = Module.cwrap("edit_t_get_prop_open_im_when_focused", 
    "number", ["number"]);
const edit_t_get_prop_close_im_when_blured = Module.cwrap("edit_t_get_prop_close_im_when_blured", 
    "number", ["number"]);
const edit_t_get_prop_cancelable = Module.cwrap("edit_t_get_prop_cancelable", 
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
const label_create = Module.cwrap("label_create", 
    "number", ["number","number","number","number","number"]);
const label_set_length = Module.cwrap("label_set_length", 
    "number", ["number","number"]);
const label_set_max_w = Module.cwrap("label_set_max_w", 
    "number", ["number","number"]);
const label_set_line_wrap = Module.cwrap("label_set_line_wrap", 
    "number", ["number","number"]);
const label_set_word_wrap = Module.cwrap("label_set_word_wrap", 
    "number", ["number","number"]);
const label_resize_to_content = Module.cwrap("label_resize_to_content", 
    "number", ["number","number","number","number","number"]);
const label_cast = Module.cwrap("label_cast", 
    "number", ["number"]);
const label_t_get_prop_length = Module.cwrap("label_t_get_prop_length", 
    "number", ["number"]);
const label_t_get_prop_line_wrap = Module.cwrap("label_t_get_prop_line_wrap", 
    "number", ["number"]);
const label_t_get_prop_word_wrap = Module.cwrap("label_t_get_prop_word_wrap", 
    "number", ["number"]);
const label_t_get_prop_max_w = Module.cwrap("label_t_get_prop_max_w", 
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
const progress_bar_create = Module.cwrap("progress_bar_create", 
    "number", ["number","number","number","number","number"]);
const progress_bar_cast = Module.cwrap("progress_bar_cast", 
    "number", ["number"]);
const progress_bar_set_value = Module.cwrap("progress_bar_set_value", 
    "number", ["number","number"]);
const progress_bar_set_max = Module.cwrap("progress_bar_set_max", 
    "number", ["number","number"]);
const progress_bar_set_format = Module.cwrap("progress_bar_set_format", 
    "number", ["number","string"]);
const progress_bar_set_vertical = Module.cwrap("progress_bar_set_vertical", 
    "number", ["number","number"]);
const progress_bar_set_show_text = Module.cwrap("progress_bar_set_show_text", 
    "number", ["number","number"]);
const progress_bar_set_reverse = Module.cwrap("progress_bar_set_reverse", 
    "number", ["number","number"]);
const progress_bar_get_percent = Module.cwrap("progress_bar_get_percent", 
    "number", ["number"]);
const progress_bar_t_get_prop_value = Module.cwrap("progress_bar_t_get_prop_value", 
    "number", ["number"]);
const progress_bar_t_get_prop_max = Module.cwrap("progress_bar_t_get_prop_max", 
    "number", ["number"]);
const progress_bar_t_get_prop_format = Module.cwrap("progress_bar_t_get_prop_format", 
    "string", ["number"]);
const progress_bar_t_get_prop_vertical = Module.cwrap("progress_bar_t_get_prop_vertical", 
    "number", ["number"]);
const progress_bar_t_get_prop_show_text = Module.cwrap("progress_bar_t_get_prop_show_text", 
    "number", ["number"]);
const progress_bar_t_get_prop_reverse = Module.cwrap("progress_bar_t_get_prop_reverse", 
    "number", ["number"]);
const row_create = Module.cwrap("row_create", 
    "number", ["number","number","number","number","number"]);
const row_cast = Module.cwrap("row_cast", 
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
const slider_t_get_prop_dragger_size = Module.cwrap("slider_t_get_prop_dragger_size", 
    "number", ["number"]);
const slider_t_get_prop_dragger_adapt_to_icon = Module.cwrap("slider_t_get_prop_dragger_adapt_to_icon", 
    "number", ["number"]);
const slider_t_get_prop_slide_with_bar = Module.cwrap("slider_t_get_prop_slide_with_bar", 
    "number", ["number"]);
const tab_button_group_create = Module.cwrap("tab_button_group_create", 
    "number", ["number","number","number","number","number"]);
const tab_button_group_set_compact = Module.cwrap("tab_button_group_set_compact", 
    "number", ["number","number"]);
const tab_button_group_set_scrollable = Module.cwrap("tab_button_group_set_scrollable", 
    "number", ["number","number"]);
const tab_button_group_cast = Module.cwrap("tab_button_group_cast", 
    "number", ["number"]);
const tab_button_group_t_get_prop_compact = Module.cwrap("tab_button_group_t_get_prop_compact", 
    "number", ["number"]);
const tab_button_group_t_get_prop_scrollable = Module.cwrap("tab_button_group_t_get_prop_scrollable", 
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
const tab_button_set_load_ui = Module.cwrap("tab_button_set_load_ui", 
    "number", ["number","string"]);
const tab_button_t_get_prop_value = Module.cwrap("tab_button_t_get_prop_value", 
    "number", ["number"]);
const tab_button_t_get_prop_load_ui = Module.cwrap("tab_button_t_get_prop_load_ui", 
    "string", ["number"]);
const tab_button_t_get_prop_active_icon = Module.cwrap("tab_button_t_get_prop_active_icon", 
    "string", ["number"]);
const tab_button_t_get_prop_icon = Module.cwrap("tab_button_t_get_prop_icon", 
    "string", ["number"]);
const tab_control_create = Module.cwrap("tab_control_create", 
    "number", ["number","number","number","number","number"]);
const tab_control_cast = Module.cwrap("tab_control_cast", 
    "number", ["number"]);
const view_create = Module.cwrap("view_create", 
    "number", ["number","number","number","number","number"]);
const view_set_default_focused_child = Module.cwrap("view_set_default_focused_child", 
    "number", ["number","string"]);
const view_cast = Module.cwrap("view_cast", 
    "number", ["number"]);
const view_t_get_prop_default_focused_child = Module.cwrap("view_t_get_prop_default_focused_child", 
    "string", ["number"]);
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
    "number", ["string","string"]);
const dialog_warn = Module.cwrap("dialog_warn", 
    "number", ["string","string"]);
const dialog_confirm = Module.cwrap("dialog_confirm", 
    "number", ["string","string"]);
const dialog_t_get_prop_highlight = Module.cwrap("dialog_t_get_prop_highlight", 
    "string", ["number"]);
const native_window_move = Module.cwrap("native_window_move", 
    "number", ["number","number","number","number"]);
const native_window_resize = Module.cwrap("native_window_resize", 
    "number", ["number","number","number","number"]);
const native_window_minimize = Module.cwrap("native_window_minimize", 
    "number", ["number"]);
const native_window_maximize = Module.cwrap("native_window_maximize", 
    "number", ["number"]);
const native_window_restore = Module.cwrap("native_window_restore", 
    "number", ["number"]);
const native_window_center = Module.cwrap("native_window_center", 
    "number", ["number"]);
const native_window_show_border = Module.cwrap("native_window_show_border", 
    "number", ["number","number"]);
const native_window_set_fullscreen = Module.cwrap("native_window_set_fullscreen", 
    "number", ["number","number"]);
const native_window_set_cursor = Module.cwrap("native_window_set_cursor", 
    "number", ["number","string","number"]);
const window_create = Module.cwrap("window_create", 
    "number", ["number","number","number","number","number"]);
const window_create_default = Module.cwrap("window_create_default", 
    "number", []);
const window_set_fullscreen = Module.cwrap("window_set_fullscreen", 
    "number", ["number","number"]);
const window_set_auto_scale_children = Module.cwrap("window_set_auto_scale_children", 
    "number", ["number","number","number"]);
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
const gif_image_create = Module.cwrap("gif_image_create", 
    "number", ["number","number","number","number","number"]);
const gif_image_play = Module.cwrap("gif_image_play", 
    "number", ["number"]);
const gif_image_stop = Module.cwrap("gif_image_stop", 
    "number", ["number"]);
const gif_image_pause = Module.cwrap("gif_image_pause", 
    "number", ["number"]);
const gif_image_cast = Module.cwrap("gif_image_cast", 
    "number", ["number"]);
const keyboard_create = Module.cwrap("keyboard_create", 
    "number", ["number","number","number","number","number"]);
const keyboard_cast = Module.cwrap("keyboard_cast", 
    "number", ["number"]);
const mutable_image_create = Module.cwrap("mutable_image_create", 
    "number", ["number","number","number","number","number"]);
const svg_image_create = Module.cwrap("svg_image_create", 
    "number", ["number","number","number","number","number"]);
const svg_image_set_image = Module.cwrap("svg_image_set_image", 
    "number", ["number","string"]);
const svg_image_cast = Module.cwrap("svg_image_cast", 
    "number", ["number"]);
const idle_info_cast = Module.cwrap("idle_info_cast", 
    "number", ["number"]);
const idle_info_t_get_prop_ctx = Module.cwrap("idle_info_t_get_prop_ctx", 
    "number", ["number"]);
const idle_info_t_get_prop_extra_ctx = Module.cwrap("idle_info_t_get_prop_extra_ctx", 
    "number", ["number"]);
const idle_info_t_get_prop_id = Module.cwrap("idle_info_t_get_prop_id", 
    "number", ["number"]);
const object_array_create = Module.cwrap("object_array_create", 
    "number", []);
const object_array_unref = Module.cwrap("object_array_unref", 
    "number", ["number"]);
const object_array_clear_props = Module.cwrap("object_array_clear_props", 
    "number", ["number"]);
const object_array_insert = Module.cwrap("object_array_insert", 
    "number", ["number","number","number"]);
const object_array_push = Module.cwrap("object_array_push", 
    "number", ["number","number"]);
const object_array_index_of = Module.cwrap("object_array_index_of", 
    "number", ["number","number"]);
const object_array_last_index_of = Module.cwrap("object_array_last_index_of", 
    "number", ["number","number"]);
const object_array_remove = Module.cwrap("object_array_remove", 
    "number", ["number","number"]);
const object_array_get_and_remove = Module.cwrap("object_array_get_and_remove", 
    "number", ["number","number","number"]);
const object_array_t_get_prop_size = Module.cwrap("object_array_t_get_prop_size", 
    "number", ["number"]);
const object_default_create = Module.cwrap("object_default_create", 
    "number", []);
const object_default_unref = Module.cwrap("object_default_unref", 
    "number", ["number"]);
const object_default_clear_props = Module.cwrap("object_default_clear_props", 
    "number", ["number"]);
const object_default_t_get_prop_props_size = Module.cwrap("object_default_t_get_prop_props_size", 
    "number", ["number"]);
const timer_info_cast = Module.cwrap("timer_info_cast", 
    "number", ["number"]);
const timer_info_t_get_prop_ctx = Module.cwrap("timer_info_t_get_prop_ctx", 
    "number", ["number"]);
const timer_info_t_get_prop_extra_ctx = Module.cwrap("timer_info_t_get_prop_extra_ctx", 
    "number", ["number"]);
const timer_info_t_get_prop_id = Module.cwrap("timer_info_t_get_prop_id", 
    "number", ["number"]);
const timer_info_t_get_prop_now = Module.cwrap("timer_info_t_get_prop_now", 
    "number", ["number"]);
const calibration_win_create = Module.cwrap("calibration_win_create", 
    "number", ["number","number","number","number","number"]);
const calibration_win_cast = Module.cwrap("calibration_win_cast", 
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
const combo_box_set_localize_options = Module.cwrap("combo_box_set_localize_options", 
    "number", ["number","number"]);
const combo_box_set_value = Module.cwrap("combo_box_set_value", 
    "number", ["number","number"]);
const combo_box_set_item_height = Module.cwrap("combo_box_set_item_height", 
    "number", ["number","number"]);
const combo_box_append_option = Module.cwrap("combo_box_append_option", 
    "number", ["number","number","string"]);
const combo_box_remove_option = Module.cwrap("combo_box_remove_option", 
    "number", ["number","number"]);
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
const combo_box_t_get_prop_localize_options = Module.cwrap("combo_box_t_get_prop_localize_options", 
    "number", ["number"]);
const combo_box_t_get_prop_options = Module.cwrap("combo_box_t_get_prop_options", 
    "string", ["number"]);
const combo_box_t_get_prop_item_height = Module.cwrap("combo_box_t_get_prop_item_height", 
    "number", ["number"]);
const image_create = Module.cwrap("image_create", 
    "number", ["number","number","number","number","number"]);
const image_set_draw_type = Module.cwrap("image_set_draw_type", 
    "number", ["number","number"]);
const image_cast = Module.cwrap("image_cast", 
    "number", ["number"]);
const image_t_get_prop_draw_type = Module.cwrap("image_t_get_prop_draw_type", 
    "number", ["number"]);
const overlay_create = Module.cwrap("overlay_create", 
    "number", ["number","number","number","number","number"]);
const overlay_set_click_through = Module.cwrap("overlay_set_click_through", 
    "number", ["number","number"]);
const overlay_set_always_on_top = Module.cwrap("overlay_set_always_on_top", 
    "number", ["number","number"]);
const overlay_cast = Module.cwrap("overlay_cast", 
    "number", ["number"]);
const overlay_t_get_prop_click_through = Module.cwrap("overlay_t_get_prop_click_through", 
    "number", ["number"]);
const overlay_t_get_prop_always_on_top = Module.cwrap("overlay_t_get_prop_always_on_top", 
    "number", ["number"]);
const popup_create = Module.cwrap("popup_create", 
    "number", ["number","number","number","number","number"]);
const popup_cast = Module.cwrap("popup_cast", 
    "number", ["number"]);
const popup_set_close_when_click = Module.cwrap("popup_set_close_when_click", 
    "number", ["number","number"]);
const popup_set_close_when_click_outside = Module.cwrap("popup_set_close_when_click_outside", 
    "number", ["number","number"]);
const popup_set_close_when_timeout = Module.cwrap("popup_set_close_when_timeout", 
    "number", ["number","number"]);
const popup_t_get_prop_close_when_click = Module.cwrap("popup_t_get_prop_close_when_click", 
    "number", ["number"]);
const popup_t_get_prop_close_when_click_outside = Module.cwrap("popup_t_get_prop_close_when_click_outside", 
    "number", ["number"]);
const popup_t_get_prop_close_when_timeout = Module.cwrap("popup_t_get_prop_close_when_timeout", 
    "number", ["number"]);
const spin_box_create = Module.cwrap("spin_box_create", 
    "number", ["number","number","number","number","number"]);
const spin_box_cast = Module.cwrap("spin_box_cast", 
    "number", ["number"]);
const system_bar_create = Module.cwrap("system_bar_create", 
    "number", ["number","number","number","number","number"]);
const system_bar_cast = Module.cwrap("system_bar_cast", 
    "number", ["number"]);
const combo_box_ex_create = Module.cwrap("combo_box_ex_create", 
    "number", ["number","number","number","number","number"]);

export class TEmitter {
 public nativeObj;
 constructor(nativeObj) {
   this.nativeObj = nativeObj;
 }

 static create() {
   return new TEmitter(emitter_create());
 }

 dispatch(e) {
   return emitter_dispatch(this.nativeObj, e ? e.nativeObj : null);
 }

 dispatchSimpleEvent(type) {
   return emitter_dispatch_simple_event(this.nativeObj, type);
 }

 on(etype, handler, ctx) {
   return emitter_on(this.nativeObj, etype, TBrowser.addFunction(wrap_on_event(handler), "iii"), ctx);
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

 destroy() {
   return emitter_destroy(this.nativeObj);
 }

 static cast(emitter) {
   return new TEmitter(emitter_cast(emitter ? (emitter.nativeObj || emitter) : null));
 }

}

export class TPoint {
 public nativeObj;
 constructor(nativeObj) {
   this.nativeObj = nativeObj;
 }

}

export class TPointf {
 public nativeObj;
 constructor(nativeObj) {
   this.nativeObj = nativeObj;
 }

}

export class TRectf {
 public nativeObj;
 constructor(nativeObj) {
   this.nativeObj = nativeObj;
 }

 get x() {
   return rectf_t_get_prop_x(this.nativeObj);
 }

 get y() {
   return rectf_t_get_prop_y(this.nativeObj);
 }

 get w() {
   return rectf_t_get_prop_w(this.nativeObj);
 }

 get h() {
   return rectf_t_get_prop_h(this.nativeObj);
 }

}

export class TRect {
 public nativeObj;
 constructor(nativeObj) {
   this.nativeObj = nativeObj;
 }

 static create(x, y, w, h) {
   return new TRect(rect_create(x, y, w, h));
 }

 set(x, y, w, h) {
   return new TRect(rect_set(this.nativeObj, x, y, w, h));
 }

 static cast(rect) {
   return new TRect(rect_cast(rect ? (rect.nativeObj || rect) : null));
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

export class TBitmap {
 public nativeObj;
 constructor(nativeObj) {
   this.nativeObj = nativeObj;
 }

 static create() {
   return new TBitmap(bitmap_create());
 }

 static createEx(w, h, line_length, format) {
   return new TBitmap(bitmap_create_ex(w, h, line_length, format));
 }

 getBpp() {
   return bitmap_get_bpp(this.nativeObj);
 }

 destroy() {
   return bitmap_destroy_with_self(this.nativeObj);
 }

 static getBppOfFormat(format) {
   return bitmap_get_bpp_of_format(format);
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

export class TObject extends TEmitter {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 unref() {
   return object_unref(this.nativeObj);
 }

 static ref(obj) {
   return new TObject(object_ref(obj ? obj.nativeObj : null));
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
   return new TObject(object_get_prop_object(this.nativeObj, name));
 }

 getPropInt(name, defval) {
   return object_get_prop_int(this.nativeObj, name, defval);
 }

 getPropBool(name, defval) {
   return object_get_prop_bool(this.nativeObj, name, defval);
 }

 getPropFloat(name, defval) {
   return object_get_prop_float(this.nativeObj, name, defval);
 }

 getPropDouble(name, defval) {
   return object_get_prop_double(this.nativeObj, name, defval);
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

 setPropObject(name, value) {
   return object_set_prop_object(this.nativeObj, name, value ? value.nativeObj : null);
 }

 setPropInt(name, value) {
   return object_set_prop_int(this.nativeObj, name, value);
 }

 setPropBool(name, value) {
   return object_set_prop_bool(this.nativeObj, name, value);
 }

 setPropFloat(name, value) {
   return object_set_prop_float(this.nativeObj, name, value);
 }

 setPropDouble(name, value) {
   return object_set_prop_double(this.nativeObj, name, value);
 }

 copyProp(src, name) {
   return object_copy_prop(this.nativeObj, src ? src.nativeObj : null, name);
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

 execute(name, args) {
   return object_exec(this.nativeObj, name, args);
 }

 notifyChanged() {
   return object_notify_changed(this.nativeObj);
 }

 hasPropByPath(path) {
   return object_has_prop_by_path(this.nativeObj, path);
 }

 getPropStrByPath(path) {
   return object_get_prop_str_by_path(this.nativeObj, path);
 }

 getPropPointerByPath(path) {
   return object_get_prop_pointer_by_path(this.nativeObj, path);
 }

 getPropObjectByPath(path) {
   return new TObject(object_get_prop_object_by_path(this.nativeObj, path));
 }

 getPropIntByPath(path, defval) {
   return object_get_prop_int_by_path(this.nativeObj, path, defval);
 }

 getPropBoolByPath(path, defval) {
   return object_get_prop_bool_by_path(this.nativeObj, path, defval);
 }

 getPropFloatByPath(path, defval) {
   return object_get_prop_float_by_path(this.nativeObj, path, defval);
 }

 setPropByPath(path, value) {
   return object_set_prop_by_path(this.nativeObj, path, value ? value.nativeObj : null);
 }

 setPropStrByPath(path, value) {
   return object_set_prop_str_by_path(this.nativeObj, path, value);
 }

 setPropObjectByPath(path, value) {
   return object_set_prop_object_by_path(this.nativeObj, path, value ? value.nativeObj : null);
 }

 setPropIntByPath(path, value) {
   return object_set_prop_int_by_path(this.nativeObj, path, value);
 }

 setPropBoolByPath(path, value) {
   return object_set_prop_bool_by_path(this.nativeObj, path, value);
 }

 setPropFloatByPath(path, value) {
   return object_set_prop_float_by_path(this.nativeObj, path, value);
 }

 canExecByPath(path, args) {
   return object_can_exec_by_path(this.nativeObj, path, args);
 }

 executeByPath(path, args) {
   return object_exec_by_path(this.nativeObj, path, args);
 }

 getPropInt8(name, defval) {
   return object_get_prop_int8(this.nativeObj, name, defval);
 }

 setPropInt8(name, value) {
   return object_set_prop_int8(this.nativeObj, name, value);
 }

 getPropUint8(name, defval) {
   return object_get_prop_uint8(this.nativeObj, name, defval);
 }

 setPropUint8(name, value) {
   return object_set_prop_uint8(this.nativeObj, name, value);
 }

 getPropInt16(name, defval) {
   return object_get_prop_int16(this.nativeObj, name, defval);
 }

 setPropInt16(name, value) {
   return object_set_prop_int16(this.nativeObj, name, value);
 }

 getPropUint16(name, defval) {
   return object_get_prop_uint16(this.nativeObj, name, defval);
 }

 setPropUint16(name, value) {
   return object_set_prop_uint16(this.nativeObj, name, value);
 }

 getPropInt32(name, defval) {
   return object_get_prop_int32(this.nativeObj, name, defval);
 }

 setPropInt32(name, value) {
   return object_set_prop_int32(this.nativeObj, name, value);
 }

 getPropUint32(name, defval) {
   return object_get_prop_uint32(this.nativeObj, name, defval);
 }

 setPropUint32(name, value) {
   return object_set_prop_uint32(this.nativeObj, name, value);
 }

 getPropInt64(name, defval) {
   return object_get_prop_int64(this.nativeObj, name, defval);
 }

 setPropInt64(name, value) {
   return object_set_prop_int64(this.nativeObj, name, value);
 }

 getPropUint64(name, defval) {
   return object_get_prop_uint64(this.nativeObj, name, defval);
 }

 setPropUint64(name, value) {
   return object_set_prop_uint64(this.nativeObj, name, value);
 }

 get refCount() {
   return object_t_get_prop_ref_count(this.nativeObj);
 }

 get name() {
   return object_t_get_prop_name(this.nativeObj);
 }

}

export class TValue {
 public nativeObj;
 constructor(nativeObj) {
   this.nativeObj = nativeObj;
 }

 setBool(value) {
   return new TValue(value_set_bool(this.nativeObj, value));
 }

 bool() {
   return value_bool(this.nativeObj);
 }

 setInt8(value) {
   return new TValue(value_set_int8(this.nativeObj, value));
 }

 int8() {
   return value_int8(this.nativeObj);
 }

 setUint8(value) {
   return new TValue(value_set_uint8(this.nativeObj, value));
 }

 uint8() {
   return value_uint8(this.nativeObj);
 }

 setInt16(value) {
   return new TValue(value_set_int16(this.nativeObj, value));
 }

 int16() {
   return value_int16(this.nativeObj);
 }

 setUint16(value) {
   return new TValue(value_set_uint16(this.nativeObj, value));
 }

 uint16() {
   return value_uint16(this.nativeObj);
 }

 setInt32(value) {
   return new TValue(value_set_int32(this.nativeObj, value));
 }

 int32() {
   return value_int32(this.nativeObj);
 }

 setUint32(value) {
   return new TValue(value_set_uint32(this.nativeObj, value));
 }

 setInt64(value) {
   return new TValue(value_set_int64(this.nativeObj, value));
 }

 int64() {
   return value_int64(this.nativeObj);
 }

 setUint64(value) {
   return new TValue(value_set_uint64(this.nativeObj, value));
 }

 uint64() {
   return value_uint64(this.nativeObj);
 }

 setFloat(value) {
   return new TValue(value_set_float(this.nativeObj, value));
 }

 float32() {
   return value_float32(this.nativeObj);
 }

 setFloat64(value) {
   return new TValue(value_set_double(this.nativeObj, value));
 }

 float64() {
   return value_double(this.nativeObj);
 }

 setStr(value) {
   return new TValue(value_dup_str(this.nativeObj, value));
 }

 str() {
   return value_str(this.nativeObj);
 }

 strEx(buff, size) {
   return value_str_ex(this.nativeObj, buff, size);
 }

 isNull() {
   return value_is_null(this.nativeObj);
 }

 setInt(value) {
   return new TValue(value_set_int(this.nativeObj, value));
 }

 setObject(value) {
   return new TValue(value_set_object(this.nativeObj, value ? value.nativeObj : null));
 }

 object() {
   return new TObject(value_object(this.nativeObj));
 }

 setToken(value) {
   return new TValue(value_set_token(this.nativeObj, value));
 }

 token() {
   return value_token(this.nativeObj);
 }

 static create() {
   return new TValue(value_create());
 }

 destroy() {
   return value_destroy(this.nativeObj);
 }

 reset() {
   return value_reset(this.nativeObj);
 }

 static cast(value) {
   return new TValue(value_cast(value ? (value.nativeObj || value) : null));
 }

}

export class TGlobal {
 public nativeObj;
 constructor(nativeObj) {
   this.nativeObj = nativeObj;
 }

 static init(w, h, app_type, app_name, app_root) {
   return tk_init(w, h, app_type, app_name, app_root);
 }

 static run() {
   return tk_run();
 }

 static quit() {
   return tk_quit();
 }

 static getPointerX() {
   return tk_get_pointer_x();
 }

 static getPointerY() {
   return tk_get_pointer_y();
 }

 static isPointerPressed() {
   return tk_is_pointer_pressed();
 }

}

export enum TBidiType {
 AUTO = get_BIDI_TYPE_AUTO(),
 LTR = get_BIDI_TYPE_LTR(),
 RTL = get_BIDI_TYPE_RTL(),
 LRO = get_BIDI_TYPE_LRO(),
 RLO = get_BIDI_TYPE_RLO(),
 WLTR = get_BIDI_TYPE_WLTR(),
 WRTL = get_BIDI_TYPE_WRTL(),
};

export enum TImageDrawType {
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
 REPEAT_Y_INVERSE = get_IMAGE_DRAW_REPEAT_Y_INVERSE(),
 PATCH9 = get_IMAGE_DRAW_PATCH9(),
 PATCH3_X = get_IMAGE_DRAW_PATCH3_X(),
 PATCH3_Y = get_IMAGE_DRAW_PATCH3_Y(),
 PATCH3_X_SCALE_Y = get_IMAGE_DRAW_PATCH3_X_SCALE_Y(),
 PATCH3_Y_SCALE_X = get_IMAGE_DRAW_PATCH3_Y_SCALE_X(),
 REPEAT9 = get_IMAGE_DRAW_REPEAT9(),
 REPEAT3_X = get_IMAGE_DRAW_REPEAT3_X(),
 REPEAT3_Y = get_IMAGE_DRAW_REPEAT3_Y(),
};

export class TCanvasOffline {
 public nativeObj;
 constructor(nativeObj) {
   this.nativeObj = nativeObj;
 }

}

export class TCanvas {
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

 clearRect(x, y, w, h) {
   return canvas_clear_rect(this.nativeObj, x, y, w, h);
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

 drawImageEx(img, draw_type, dst) {
   return canvas_draw_image_ex(this.nativeObj, img ? img.nativeObj : null, draw_type, dst ? dst.nativeObj : null);
 }

 drawImageEx2(img, draw_type, src, dst) {
   return canvas_draw_image_ex2(this.nativeObj, img ? img.nativeObj : null, draw_type, src ? src.nativeObj : null, dst ? dst.nativeObj : null);
 }

 getVgcanvas() {
   return new TVgcanvas(canvas_get_vgcanvas(this.nativeObj));
 }

 static cast(c) {
   return new TCanvas(canvas_cast(c ? (c.nativeObj || c) : null));
 }

 reset() {
   return canvas_reset(this.nativeObj);
 }

 get ox() {
   return canvas_t_get_prop_ox(this.nativeObj);
 }

 get oy() {
   return canvas_t_get_prop_oy(this.nativeObj);
 }

 get fontName() {
   return canvas_t_get_prop_font_name(this.nativeObj);
 }

 get fontSize() {
   return canvas_t_get_prop_font_size(this.nativeObj);
 }

 get globalAlpha() {
   return canvas_t_get_prop_global_alpha(this.nativeObj);
 }

}

export enum TClipBoardDataType {
 NONE = get_CLIP_BOARD_DATA_TYPE_NONE(),
 TEXT = get_CLIP_BOARD_DATA_TYPE_TEXT(),
};

export class TClipBoard {
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

export enum TDialogQuitCode {
 NONE = get_DIALOG_QUIT_NONE(),
 OK = get_DIALOG_QUIT_OK(),
 YES = get_DIALOG_QUIT_YES(),
 CANCEL = get_DIALOG_QUIT_CANCEL(),
 NO = get_DIALOG_QUIT_NO(),
 OTHER = get_DIALOG_QUIT_OTHER(),
};

export enum TEventType {
 POINTER_DOWN = get_EVT_POINTER_DOWN(),
 POINTER_DOWN_BEFORE_CHILDREN = get_EVT_POINTER_DOWN_BEFORE_CHILDREN(),
 POINTER_MOVE = get_EVT_POINTER_MOVE(),
 POINTER_MOVE_BEFORE_CHILDREN = get_EVT_POINTER_MOVE_BEFORE_CHILDREN(),
 POINTER_UP = get_EVT_POINTER_UP(),
 POINTER_UP_BEFORE_CHILDREN = get_EVT_POINTER_UP_BEFORE_CHILDREN(),
 WHEEL = get_EVT_WHEEL(),
 WHEEL_BEFORE_CHILDREN = get_EVT_WHEEL_BEFORE_CHILDREN(),
 POINTER_DOWN_ABORT = get_EVT_POINTER_DOWN_ABORT(),
 CONTEXT_MENU = get_EVT_CONTEXT_MENU(),
 POINTER_ENTER = get_EVT_POINTER_ENTER(),
 POINTER_LEAVE = get_EVT_POINTER_LEAVE(),
 LONG_PRESS = get_EVT_LONG_PRESS(),
 CLICK = get_EVT_CLICK(),
 FOCUS = get_EVT_FOCUS(),
 BLUR = get_EVT_BLUR(),
 KEY_DOWN = get_EVT_KEY_DOWN(),
 KEY_LONG_PRESS = get_EVT_KEY_LONG_PRESS(),
 KEY_DOWN_BEFORE_CHILDREN = get_EVT_KEY_DOWN_BEFORE_CHILDREN(),
 KEY_REPEAT = get_EVT_KEY_REPEAT(),
 KEY_UP = get_EVT_KEY_UP(),
 KEY_UP_BEFORE_CHILDREN = get_EVT_KEY_UP_BEFORE_CHILDREN(),
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
 WIDGET_LOAD = get_EVT_WIDGET_LOAD(),
 WINDOW_WILL_OPEN = get_EVT_WINDOW_WILL_OPEN(),
 WINDOW_OPEN = get_EVT_WINDOW_OPEN(),
 WINDOW_TO_BACKGROUND = get_EVT_WINDOW_TO_BACKGROUND(),
 WINDOW_TO_FOREGROUND = get_EVT_WINDOW_TO_FOREGROUND(),
 WINDOW_CLOSE = get_EVT_WINDOW_CLOSE(),
 REQUEST_CLOSE_WINDOW = get_EVT_REQUEST_CLOSE_WINDOW(),
 TOP_WINDOW_CHANGED = get_EVT_TOP_WINDOW_CHANGED(),
 IM_START = get_EVT_IM_START(),
 IM_STOP = get_EVT_IM_STOP(),
 IM_COMMIT = get_EVT_IM_COMMIT(),
 IM_CLEAR = get_EVT_IM_CLEAR(),
 IM_CANCEL = get_EVT_IM_CANCEL(),
 IM_PREEDIT = get_EVT_IM_PREEDIT(),
 IM_PREEDIT_CONFIRM = get_EVT_IM_PREEDIT_CONFIRM(),
 IM_PREEDIT_ABORT = get_EVT_IM_PREEDIT_ABORT(),
 IM_SHOW_CANDIDATES = get_EVT_IM_SHOW_CANDIDATES(),
 IM_SHOW_PRE_CANDIDATES = get_EVT_IM_SHOW_PRE_CANDIDATES(),
 IM_LANG_CHANGED = get_EVT_IM_LANG_CHANGED(),
 IM_ACTION = get_EVT_IM_ACTION(),
 IM_ACTION_INFO = get_EVT_IM_ACTION_INFO(),
 DRAG_START = get_EVT_DRAG_START(),
 DRAG = get_EVT_DRAG(),
 DRAG_END = get_EVT_DRAG_END(),
 RESET = get_EVT_RESET(),
 SCREEN_SAVER = get_EVT_SCREEN_SAVER(),
 LOW_MEMORY = get_EVT_LOW_MEMORY(),
 OUT_OF_MEMORY = get_EVT_OUT_OF_MEMORY(),
 ORIENTATION_WILL_CHANGED = get_EVT_ORIENTATION_WILL_CHANGED(),
 ORIENTATION_CHANGED = get_EVT_ORIENTATION_CHANGED(),
 WIDGET_CREATED = get_EVT_WIDGET_CREATED(),
 REQUEST_QUIT_APP = get_EVT_REQUEST_QUIT_APP(),
 THEME_CHANGED = get_EVT_THEME_CHANGED(),
 WIDGET_ADD_CHILD = get_EVT_WIDGET_ADD_CHILD(),
 WIDGET_REMOVE_CHILD = get_EVT_WIDGET_REMOVE_CHILD(),
 SCROLL_START = get_EVT_SCROLL_START(),
 SCROLL = get_EVT_SCROLL(),
 SCROLL_END = get_EVT_SCROLL_END(),
 MULTI_GESTURE = get_EVT_MULTI_GESTURE(),
 PAGE_CHANGED = get_EVT_PAGE_CHANGED(),
 ASSET_MANAGER_LOAD_ASSET = get_EVT_ASSET_MANAGER_LOAD_ASSET(),
 ASSET_MANAGER_UNLOAD_ASSET = get_EVT_ASSET_MANAGER_UNLOAD_ASSET(),
 ASSET_MANAGER_CLEAR_CACHE = get_EVT_ASSET_MANAGER_CLEAR_CACHE(),
 TIMER = get_EVT_TIMER(),
 REQ_START = get_EVT_REQ_START(),
 USER_START = get_EVT_USER_START(),
 NONE = get_EVT_NONE(),
 PROP_WILL_CHANGE = get_EVT_PROP_WILL_CHANGE(),
 PROP_CHANGED = get_EVT_PROP_CHANGED(),
 CMD_WILL_EXEC = get_EVT_CMD_WILL_EXEC(),
 CMD_EXECED = get_EVT_CMD_EXECED(),
 CMD_CAN_EXEC = get_EVT_CMD_CAN_EXEC(),
 ITEMS_WILL_CHANGE = get_EVT_ITEMS_WILL_CHANGE(),
 ITEMS_CHANGED = get_EVT_ITEMS_CHANGED(),
 PROPS_CHANGED = get_EVT_PROPS_CHANGED(),
 PROGRESS = get_EVT_PROGRESS(),
 DONE = get_EVT_DONE(),
 ERROR = get_EVT_ERROR(),
 DESTROY = get_EVT_DESTROY(),
};

export class TEvent {
 public nativeObj;
 constructor(nativeObj) {
   this.nativeObj = nativeObj;
 }

 static fromName(name) {
   return event_from_name(name);
 }

 static cast(event) {
   return new TEvent(event_cast(event ? (event.nativeObj || event) : null));
 }

 getType() {
   return event_get_type(this.nativeObj);
 }

 static create(type) {
   return new TEvent(event_create(type));
 }

 destroy() {
   return event_destroy(this.nativeObj);
 }

 get type() {
   return event_t_get_prop_type(this.nativeObj);
 }

 get size() {
   return event_t_get_prop_size(this.nativeObj);
 }

 get time() {
   return event_t_get_prop_time(this.nativeObj);
 }

 get target() {
   return event_t_get_prop_target(this.nativeObj);
 }

}

export class TFontManager {
 public nativeObj;
 constructor(nativeObj) {
   this.nativeObj = nativeObj;
 }

 unloadFont(name, size) {
   return font_manager_unload_font(this.nativeObj, name, size);
 }

 shrinkCache(cache_size) {
   return font_manager_shrink_cache(this.nativeObj, cache_size);
 }

 unloadAll() {
   return font_manager_unload_all(this.nativeObj);
 }

}

export enum TGlyphFormat {
 ALPHA = get_GLYPH_FMT_ALPHA(),
 MONO = get_GLYPH_FMT_MONO(),
 RGBA = get_GLYPH_FMT_RGBA(),
};

export class TIdle {
 public nativeObj;
 constructor(nativeObj) {
   this.nativeObj = nativeObj;
 }

 static add(on_idle, ctx) {
   return idle_add(TBrowser.addFunction(on_idle, "ii"), ctx);
 }

 static remove(idle_id) {
   return idle_remove(idle_id);
 }

 static removeAllByCtx(ctx) {
   return idle_remove_all_by_ctx(ctx);
 }

}

export class TImageManager {
 public nativeObj;
 constructor(nativeObj) {
   this.nativeObj = nativeObj;
 }

 static instance() {
   return new TImageManager(image_manager());
 }

 getBitmap(name, image) {
   return image_manager_get_bitmap(this.nativeObj, name, image ? image.nativeObj : null);
 }

 preload(name) {
   return image_manager_preload(this.nativeObj, name);
 }

}

export enum TInputType {
 TEXT = get_INPUT_TEXT(),
 INT = get_INPUT_INT(),
 UINT = get_INPUT_UINT(),
 HEX = get_INPUT_HEX(),
 FLOAT = get_INPUT_FLOAT(),
 UFLOAT = get_INPUT_UFLOAT(),
 EMAIL = get_INPUT_EMAIL(),
 PASSWORD = get_INPUT_PASSWORD(),
 PHONE = get_INPUT_PHONE(),
 IPV4 = get_INPUT_IPV4(),
 DATE = get_INPUT_DATE(),
 TIME = get_INPUT_TIME(),
 TIME_FULL = get_INPUT_TIME_FULL(),
 CUSTOM = get_INPUT_CUSTOM(),
 CUSTOM_PASSWORD = get_INPUT_CUSTOM_PASSWORD(),
 ASCII = get_INPUT_ASCII(),
};

export class TInputMethod {
 public nativeObj;
 constructor(nativeObj) {
   this.nativeObj = nativeObj;
 }

 commitText(text) {
   return input_method_commit_text(this.nativeObj, text);
 }

 setLang(lang) {
   return input_method_set_lang(this.nativeObj, lang);
 }

 getLang() {
   return input_method_get_lang(this.nativeObj);
 }

 dispatchKey(key) {
   return input_method_dispatch_key(this.nativeObj, key);
 }

 dispatchKeys(key) {
   return input_method_dispatch_keys(this.nativeObj, key);
 }

 dispatchPreedit() {
   return input_method_dispatch_preedit(this.nativeObj);
 }

 dispatchPreeditConfirm() {
   return input_method_dispatch_preedit_confirm(this.nativeObj);
 }

 dispatchPreeditAbort() {
   return input_method_dispatch_preedit_abort(this.nativeObj);
 }

 static instance() {
   return new TInputMethod(input_method());
 }

}

export enum TKeyCode {
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
 KEY_LSHIFT = get_TK_KEY_LSHIFT(),
 KEY_RSHIFT = get_TK_KEY_RSHIFT(),
 KEY_LCTRL = get_TK_KEY_LCTRL(),
 KEY_RCTRL = get_TK_KEY_RCTRL(),
 KEY_LALT = get_TK_KEY_LALT(),
 KEY_RALT = get_TK_KEY_RALT(),
 KEY_CAPSLOCK = get_TK_KEY_CAPSLOCK(),
 KEY_HOME = get_TK_KEY_HOME(),
 KEY_END = get_TK_KEY_END(),
 KEY_INSERT = get_TK_KEY_INSERT(),
 KEY_UP = get_TK_KEY_UP(),
 KEY_DOWN = get_TK_KEY_DOWN(),
 KEY_LEFT = get_TK_KEY_LEFT(),
 KEY_RIGHT = get_TK_KEY_RIGHT(),
 KEY_PAGEUP = get_TK_KEY_PAGEUP(),
 KEY_PAGEDOWN = get_TK_KEY_PAGEDOWN(),
 KEY_F1 = get_TK_KEY_F1(),
 KEY_F2 = get_TK_KEY_F2(),
 KEY_F3 = get_TK_KEY_F3(),
 KEY_F4 = get_TK_KEY_F4(),
 KEY_F5 = get_TK_KEY_F5(),
 KEY_F6 = get_TK_KEY_F6(),
 KEY_F7 = get_TK_KEY_F7(),
 KEY_F8 = get_TK_KEY_F8(),
 KEY_F9 = get_TK_KEY_F9(),
 KEY_F10 = get_TK_KEY_F10(),
 KEY_F11 = get_TK_KEY_F11(),
 KEY_F12 = get_TK_KEY_F12(),
 KEY_MENU = get_TK_KEY_MENU(),
 KEY_COMMAND = get_TK_KEY_COMMAND(),
 KEY_BACK = get_TK_KEY_BACK(),
 KEY_CANCEL = get_TK_KEY_CANCEL(),
 KEY_WHEEL = get_TK_KEY_WHEEL(),
};

export class TLocaleInfo {
 public nativeObj;
 constructor(nativeObj) {
   this.nativeObj = nativeObj;
 }

 static instance() {
   return new TLocaleInfo(locale_info());
 }

 tr(text) {
   return locale_info_tr(this.nativeObj, text);
 }

 change(language, country) {
   return locale_info_change(this.nativeObj, language, country);
 }

 off(id) {
   return locale_info_off(this.nativeObj, id);
 }

}

export enum TStyleId {
 BG_COLOR = get_STYLE_ID_BG_COLOR(),
 FG_COLOR = get_STYLE_ID_FG_COLOR(),
 MASK_COLOR = get_STYLE_ID_MASK_COLOR(),
 FONT_NAME = get_STYLE_ID_FONT_NAME(),
 FONT_SIZE = get_STYLE_ID_FONT_SIZE(),
 FONT_STYLE = get_STYLE_ID_FONT_STYLE(),
 TEXT_COLOR = get_STYLE_ID_TEXT_COLOR(),
 HIGHLIGHT_FONT_NAME = get_STYLE_ID_HIGHLIGHT_FONT_NAME(),
 HIGHLIGHT_FONT_SIZE = get_STYLE_ID_HIGHLIGHT_FONT_SIZE(),
 HIGHLIGHT_TEXT_COLOR = get_STYLE_ID_HIGHLIGHT_TEXT_COLOR(),
 TIPS_TEXT_COLOR = get_STYLE_ID_TIPS_TEXT_COLOR(),
 TEXT_ALIGN_H = get_STYLE_ID_TEXT_ALIGN_H(),
 TEXT_ALIGN_V = get_STYLE_ID_TEXT_ALIGN_V(),
 BORDER_COLOR = get_STYLE_ID_BORDER_COLOR(),
 BORDER_WIDTH = get_STYLE_ID_BORDER_WIDTH(),
 BORDER = get_STYLE_ID_BORDER(),
 BG_IMAGE = get_STYLE_ID_BG_IMAGE(),
 BG_IMAGE_DRAW_TYPE = get_STYLE_ID_BG_IMAGE_DRAW_TYPE(),
 ICON = get_STYLE_ID_ICON(),
 FG_IMAGE = get_STYLE_ID_FG_IMAGE(),
 FG_IMAGE_DRAW_TYPE = get_STYLE_ID_FG_IMAGE_DRAW_TYPE(),
 SPACER = get_STYLE_ID_SPACER(),
 MARGIN = get_STYLE_ID_MARGIN(),
 MARGIN_LEFT = get_STYLE_ID_MARGIN_LEFT(),
 MARGIN_RIGHT = get_STYLE_ID_MARGIN_RIGHT(),
 MARGIN_TOP = get_STYLE_ID_MARGIN_TOP(),
 MARGIN_BOTTOM = get_STYLE_ID_MARGIN_BOTTOM(),
 ICON_AT = get_STYLE_ID_ICON_AT(),
 ACTIVE_ICON = get_STYLE_ID_ACTIVE_ICON(),
 X_OFFSET = get_STYLE_ID_X_OFFSET(),
 Y_OFFSET = get_STYLE_ID_Y_OFFSET(),
 SELECTED_BG_COLOR = get_STYLE_ID_SELECTED_BG_COLOR(),
 SELECTED_FG_COLOR = get_STYLE_ID_SELECTED_FG_COLOR(),
 SELECTED_TEXT_COLOR = get_STYLE_ID_SELECTED_TEXT_COLOR(),
 ROUND_RADIUS = get_STYLE_ID_ROUND_RADIUS(),
 ROUND_RADIUS_TOP_LETF = get_STYLE_ID_ROUND_RADIUS_TOP_LETF(),
 ROUND_RADIUS_TOP_RIGHT = get_STYLE_ID_ROUND_RADIUS_TOP_RIGHT(),
 ROUND_RADIUS_BOTTOM_LETF = get_STYLE_ID_ROUND_RADIUS_BOTTOM_LETF(),
 ROUND_RADIUS_BOTTOM_RIGHT = get_STYLE_ID_ROUND_RADIUS_BOTTOM_RIGHT(),
 CHILDREN_LAYOUT = get_STYLE_ID_CHILDREN_LAYOUT(),
 SELF_LAYOUT = get_STYLE_ID_SELF_LAYOUT(),
 FOCUSABLE = get_STYLE_ID_FOCUSABLE(),
 FEEDBACK = get_STYLE_ID_FEEDBACK(),
};

export class TStyle {
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

 getUint(name, defval) {
   return style_get_uint(this.nativeObj, name, defval);
 }

 getStr(name, defval) {
   return style_get_str(this.nativeObj, name, defval);
 }

 set(state, name, value) {
   return style_set(this.nativeObj, state, name, value ? value.nativeObj : null);
 }

 updateState(theme, widget_type, style_name, widget_state) {
   return style_update_state(this.nativeObj, theme ? theme.nativeObj : null, widget_type, style_name, widget_state);
 }

 getStyleState() {
   return style_get_style_state(this.nativeObj);
 }

 isMutable() {
   return style_is_mutable(this.nativeObj);
 }

 getStyleType() {
   return style_get_style_type(this.nativeObj);
 }

}

export class TTheme {
 public nativeObj;
 constructor(nativeObj) {
   this.nativeObj = nativeObj;
 }

 static instance() {
   return new TTheme(theme());
 }

}

export class TTimer {
 public nativeObj;
 constructor(nativeObj) {
   this.nativeObj = nativeObj;
 }

 static add(on_timer, ctx, duration) {
   return timer_add(TBrowser.addFunction(on_timer, "ii"), ctx, duration);
 }

 static remove(timer_id) {
   return timer_remove(timer_id);
 }

 static removeAllByCtx(ctx) {
   return timer_remove_all_by_ctx(ctx);
 }

 static reset(timer_id) {
   return timer_reset(timer_id);
 }

 static suspend(timer_id) {
   return timer_suspend(timer_id);
 }

 static resume(timer_id) {
   return timer_resume(timer_id);
 }

 static modify(timer_id, duration) {
   return timer_modify(timer_id, duration);
 }

}

export enum TAlignV {
 NONE = get_ALIGN_V_NONE(),
 MIDDLE = get_ALIGN_V_MIDDLE(),
 TOP = get_ALIGN_V_TOP(),
 BOTTOM = get_ALIGN_V_BOTTOM(),
};

export enum TAlignH {
 NONE = get_ALIGN_H_NONE(),
 CENTER = get_ALIGN_H_CENTER(),
 LEFT = get_ALIGN_H_LEFT(),
 RIGHT = get_ALIGN_H_RIGHT(),
};

export enum TAppType {
 MOBILE = get_APP_MOBILE(),
 SIMULATOR = get_APP_SIMULATOR(),
 DESKTOP = get_APP_DESKTOP(),
};

export enum TBitmapFormat {
 NONE = get_BITMAP_FMT_NONE(),
 RGBA8888 = get_BITMAP_FMT_RGBA8888(),
 ABGR8888 = get_BITMAP_FMT_ABGR8888(),
 BGRA8888 = get_BITMAP_FMT_BGRA8888(),
 ARGB8888 = get_BITMAP_FMT_ARGB8888(),
 RGB565 = get_BITMAP_FMT_RGB565(),
 BGR565 = get_BITMAP_FMT_BGR565(),
 RGB888 = get_BITMAP_FMT_RGB888(),
 BGR888 = get_BITMAP_FMT_BGR888(),
 GRAY = get_BITMAP_FMT_GRAY(),
 MONO = get_BITMAP_FMT_MONO(),
};

export enum TBitmapFlag {
 NONE = get_BITMAP_FLAG_NONE(),
 OPAQUE = get_BITMAP_FLAG_OPAQUE(),
 IMMUTABLE = get_BITMAP_FLAG_IMMUTABLE(),
 TEXTURE = get_BITMAP_FLAG_TEXTURE(),
 CHANGED = get_BITMAP_FLAG_CHANGED(),
 PREMULTI_ALPHA = get_BITMAP_FLAG_PREMULTI_ALPHA(),
};

export class TVgcanvas {
 public nativeObj;
 constructor(nativeObj) {
   this.nativeObj = nativeObj;
 }

 static cast(vg) {
   return new TVgcanvas(vgcanvas_cast(vg ? (vg.nativeObj || vg) : null));
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

 pathWinding(dir) {
   return vgcanvas_path_winding(this.nativeObj, dir);
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

 clipPath() {
   return vgcanvas_clip_path(this.nativeObj);
 }

 clipRect(x, y, w, h) {
   return vgcanvas_clip_rect(this.nativeObj, x, y, w, h);
 }

 intersectClipRect(x, y, w, h) {
   return vgcanvas_intersect_clip_rect(this.nativeObj, x, y, w, h);
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

 get stride() {
   return vgcanvas_t_get_prop_stride(this.nativeObj);
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

export enum TVgcanvasLineCap {
 ROUND = get_VGCANVAS_LINE_CAP_ROUND(),
 SQUARE = get_VGCANVAS_LINE_CAP_SQUARE(),
 BUTT = get_VGCANVAS_LINE_CAP_BUTT(),
};

export enum TVgcanvasLineJoin {
 ROUND = get_VGCANVAS_LINE_JOIN_ROUND(),
 BEVEL = get_VGCANVAS_LINE_JOIN_BEVEL(),
 MITTER = get_VGCANVAS_LINE_JOIN_MITTER(),
};

export enum TWidgetProp {
 EXEC = get_WIDGET_PROP_EXEC(),
 X = get_WIDGET_PROP_X(),
 Y = get_WIDGET_PROP_Y(),
 W = get_WIDGET_PROP_W(),
 H = get_WIDGET_PROP_H(),
 MAX_H = get_WIDGET_PROP_MAX_H(),
 DESIGN_W = get_WIDGET_PROP_DESIGN_W(),
 DESIGN_H = get_WIDGET_PROP_DESIGN_H(),
 AUTO_SCALE_CHILDREN_X = get_WIDGET_PROP_AUTO_SCALE_CHILDREN_X(),
 AUTO_SCALE_CHILDREN_Y = get_WIDGET_PROP_AUTO_SCALE_CHILDREN_Y(),
 AUTO_SCALE_CHILDREN_W = get_WIDGET_PROP_AUTO_SCALE_CHILDREN_W(),
 AUTO_SCALE_CHILDREN_H = get_WIDGET_PROP_AUTO_SCALE_CHILDREN_H(),
 INPUTING = get_WIDGET_PROP_INPUTING(),
 ALWAYS_ON_TOP = get_WIDGET_PROP_ALWAYS_ON_TOP(),
 CARET_X = get_WIDGET_PROP_CARET_X(),
 CARET_Y = get_WIDGET_PROP_CARET_Y(),
 DIRTY_RECT_TOLERANCE = get_WIDGET_PROP_DIRTY_RECT_TOLERANCE(),
 BIDI = get_WIDGET_PROP_BIDI(),
 CANVAS = get_WIDGET_PROP_CANVAS(),
 LOCALIZE_OPTIONS = get_WIDGET_PROP_LOCALIZE_OPTIONS(),
 NATIVE_WINDOW = get_WIDGET_PROP_NATIVE_WINDOW(),
 HIGHLIGHT = get_WIDGET_PROP_HIGHLIGHT(),
 BAR_SIZE = get_WIDGET_PROP_BAR_SIZE(),
 OPACITY = get_WIDGET_PROP_OPACITY(),
 MIN_W = get_WIDGET_PROP_MIN_W(),
 MAX_W = get_WIDGET_PROP_MAX_W(),
 AUTO_ADJUST_SIZE = get_WIDGET_PROP_AUTO_ADJUST_SIZE(),
 SINGLE_INSTANCE = get_WIDGET_PROP_SINGLE_INSTANCE(),
 STRONGLY_FOCUS = get_WIDGET_PROP_STRONGLY_FOCUS(),
 CHILDREN_LAYOUT = get_WIDGET_PROP_CHILDREN_LAYOUT(),
 LAYOUT = get_WIDGET_PROP_LAYOUT(),
 SELF_LAYOUT = get_WIDGET_PROP_SELF_LAYOUT(),
 LAYOUT_W = get_WIDGET_PROP_LAYOUT_W(),
 LAYOUT_H = get_WIDGET_PROP_LAYOUT_H(),
 VIRTUAL_W = get_WIDGET_PROP_VIRTUAL_W(),
 VIRTUAL_H = get_WIDGET_PROP_VIRTUAL_H(),
 NAME = get_WIDGET_PROP_NAME(),
 TYPE = get_WIDGET_PROP_TYPE(),
 CLOSABLE = get_WIDGET_PROP_CLOSABLE(),
 POINTER_CURSOR = get_WIDGET_PROP_POINTER_CURSOR(),
 VALUE = get_WIDGET_PROP_VALUE(),
 RADIO = get_WIDGET_PROP_RADIO(),
 REVERSE = get_WIDGET_PROP_REVERSE(),
 LENGTH = get_WIDGET_PROP_LENGTH(),
 LINE_WRAP = get_WIDGET_PROP_LINE_WRAP(),
 WORD_WRAP = get_WIDGET_PROP_WORD_WRAP(),
 TEXT = get_WIDGET_PROP_TEXT(),
 TR_TEXT = get_WIDGET_PROP_TR_TEXT(),
 STYLE = get_WIDGET_PROP_STYLE(),
 ENABLE = get_WIDGET_PROP_ENABLE(),
 FEEDBACK = get_WIDGET_PROP_FEEDBACK(),
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
 DISABLE_ANIM = get_WIDGET_PROP_DISABLE_ANIM(),
 OPEN_ANIM_HINT = get_WIDGET_PROP_OPEN_ANIM_HINT(),
 CLOSE_ANIM_HINT = get_WIDGET_PROP_CLOSE_ANIM_HINT(),
 MIN = get_WIDGET_PROP_MIN(),
 ACTION_TEXT = get_WIDGET_PROP_ACTION_TEXT(),
 TIPS = get_WIDGET_PROP_TIPS(),
 TR_TIPS = get_WIDGET_PROP_TR_TIPS(),
 INPUT_TYPE = get_WIDGET_PROP_INPUT_TYPE(),
 KEYBOARD = get_WIDGET_PROP_KEYBOARD(),
 DEFAULT_FOCUSED_CHILD = get_WIDGET_PROP_DEFAULT_FOCUSED_CHILD(),
 READONLY = get_WIDGET_PROP_READONLY(),
 CANCELABLE = get_WIDGET_PROP_CANCELABLE(),
 PASSWORD_VISIBLE = get_WIDGET_PROP_PASSWORD_VISIBLE(),
 ACTIVE = get_WIDGET_PROP_ACTIVE(),
 CURR_PAGE = get_WIDGET_PROP_CURR_PAGE(),
 PAGE_MAX_NUMBER = get_WIDGET_PROP_PAGE_MAX_NUMBER(),
 VERTICAL = get_WIDGET_PROP_VERTICAL(),
 SHOW_TEXT = get_WIDGET_PROP_SHOW_TEXT(),
 XOFFSET = get_WIDGET_PROP_XOFFSET(),
 YOFFSET = get_WIDGET_PROP_YOFFSET(),
 ALIGN_V = get_WIDGET_PROP_ALIGN_V(),
 ALIGN_H = get_WIDGET_PROP_ALIGN_H(),
 AUTO_PLAY = get_WIDGET_PROP_AUTO_PLAY(),
 LOOP = get_WIDGET_PROP_LOOP(),
 AUTO_FIX = get_WIDGET_PROP_AUTO_FIX(),
 SELECT_NONE_WHEN_FOCUSED = get_WIDGET_PROP_SELECT_NONE_WHEN_FOCUSED(),
 OPEN_IM_WHEN_FOCUSED = get_WIDGET_PROP_OPEN_IM_WHEN_FOCUSED(),
 CLOSE_IM_WHEN_BLURED = get_WIDGET_PROP_CLOSE_IM_WHEN_BLURED(),
 X_MIN = get_WIDGET_PROP_X_MIN(),
 X_MAX = get_WIDGET_PROP_X_MAX(),
 Y_MIN = get_WIDGET_PROP_Y_MIN(),
 Y_MAX = get_WIDGET_PROP_Y_MAX(),
 MAX = get_WIDGET_PROP_MAX(),
 GRAB_KEYS = get_WIDGET_PROP_GRAB_KEYS(),
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
 LONG_PRESS_TIME = get_WIDGET_PROP_LONG_PRESS_TIME(),
 ENABLE_LONG_PRESS = get_WIDGET_PROP_ENABLE_LONG_PRESS(),
 CLICK_THROUGH = get_WIDGET_PROP_CLICK_THROUGH(),
 ANIMATABLE = get_WIDGET_PROP_ANIMATABLE(),
 AUTO_HIDE = get_WIDGET_PROP_AUTO_HIDE(),
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
 SCROLLABLE = get_WIDGET_PROP_SCROLLABLE(),
 ICON = get_WIDGET_PROP_ICON(),
 OPTIONS = get_WIDGET_PROP_OPTIONS(),
 SELECTED = get_WIDGET_PROP_SELECTED(),
 CHECKED = get_WIDGET_PROP_CHECKED(),
 ACTIVE_ICON = get_WIDGET_PROP_ACTIVE_ICON(),
 LOAD_UI = get_WIDGET_PROP_LOAD_UI(),
 OPEN_WINDOW = get_WIDGET_PROP_OPEN_WINDOW(),
 SELECTED_INDEX = get_WIDGET_PROP_SELECTED_INDEX(),
 CLOSE_WHEN_CLICK = get_WIDGET_PROP_CLOSE_WHEN_CLICK(),
 CLOSE_WHEN_CLICK_OUTSIDE = get_WIDGET_PROP_CLOSE_WHEN_CLICK_OUTSIDE(),
 CLOSE_WHEN_TIMEOUT = get_WIDGET_PROP_CLOSE_WHEN_TIMEOUT(),
 LINE_GAP = get_WIDGET_PROP_LINE_GAP(),
 BG_COLOR = get_WIDGET_PROP_BG_COLOR(),
 BORDER_COLOR = get_WIDGET_PROP_BORDER_COLOR(),
 DELAY = get_WIDGET_PROP_DELAY(),
 IS_KEYBOARD = get_WIDGET_PROP_IS_KEYBOARD(),
 FOCUSED = get_WIDGET_PROP_FOCUSED(),
 FOCUS = get_WIDGET_PROP_FOCUS(),
 FOCUSABLE = get_WIDGET_PROP_FOCUSABLE(),
 WITH_FOCUS_STATE = get_WIDGET_PROP_WITH_FOCUS_STATE(),
 MOVE_FOCUS_PREV_KEY = get_WIDGET_PROP_MOVE_FOCUS_PREV_KEY(),
 MOVE_FOCUS_NEXT_KEY = get_WIDGET_PROP_MOVE_FOCUS_NEXT_KEY(),
 MOVE_FOCUS_UP_KEY = get_WIDGET_PROP_MOVE_FOCUS_UP_KEY(),
 MOVE_FOCUS_DOWN_KEY = get_WIDGET_PROP_MOVE_FOCUS_DOWN_KEY(),
 MOVE_FOCUS_LEFT_KEY = get_WIDGET_PROP_MOVE_FOCUS_LEFT_KEY(),
 MOVE_FOCUS_RIGHT_KEY = get_WIDGET_PROP_MOVE_FOCUS_RIGHT_KEY(),
};

export enum TWidgetType {
 NONE = get_WIDGET_TYPE_NONE(),
 WINDOW_MANAGER = get_WIDGET_TYPE_WINDOW_MANAGER(),
 NORMAL_WINDOW = get_WIDGET_TYPE_NORMAL_WINDOW(),
 OVERLAY = get_WIDGET_TYPE_OVERLAY(),
 TOOL_BAR = get_WIDGET_TYPE_TOOL_BAR(),
 DIALOG = get_WIDGET_TYPE_DIALOG(),
 POPUP = get_WIDGET_TYPE_POPUP(),
 SYSTEM_BAR = get_WIDGET_TYPE_SYSTEM_BAR(),
 SYSTEM_BAR_BOTTOM = get_WIDGET_TYPE_SYSTEM_BAR_BOTTOM(),
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
 SLIDE_INDICATOR = get_WIDGET_TYPE_SLIDE_INDICATOR(),
 SLIDE_INDICATOR_ARC = get_WIDGET_TYPE_SLIDE_INDICATOR_ARC(),
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
 CLIP_VIEW = get_WIDGET_TYPE_CLIP_VIEW(),
 RICH_TEXT = get_WIDGET_TYPE_RICH_TEXT(),
 APP_BAR = get_WIDGET_TYPE_APP_BAR(),
 GRID = get_WIDGET_TYPE_GRID(),
 GRID_ITEM = get_WIDGET_TYPE_GRID_ITEM(),
 ROW = get_WIDGET_TYPE_ROW(),
 COLUMN = get_WIDGET_TYPE_COLUMN(),
 CALIBRATION_WIN = get_WIDGET_TYPE_CALIBRATION_WIN(),
};

export enum TWindowStage {
 NONE = get_WINDOW_STAGE_NONE(),
 LOADED = get_WINDOW_STAGE_LOADED(),
 CREATED = get_WINDOW_STAGE_CREATED(),
 OPENED = get_WINDOW_STAGE_OPENED(),
 CLOSED = get_WINDOW_STAGE_CLOSED(),
 SUSPEND = get_WINDOW_STAGE_SUSPEND(),
};

export enum TWindowClosable {
 YES = get_WINDOW_CLOSABLE_YES(),
 NO = get_WINDOW_CLOSABLE_NO(),
 CONFIRM = get_WINDOW_CLOSABLE_CONFIRM(),
};

export enum TWidgetState {
 NONE = get_WIDGET_STATE_NONE(),
 NORMAL = get_WIDGET_STATE_NORMAL(),
 CHANGED = get_WIDGET_STATE_CHANGED(),
 PRESSED = get_WIDGET_STATE_PRESSED(),
 OVER = get_WIDGET_STATE_OVER(),
 DISABLE = get_WIDGET_STATE_DISABLE(),
 FOCUSED = get_WIDGET_STATE_FOCUSED(),
 CHECKED = get_WIDGET_STATE_CHECKED(),
 UNCHECKED = get_WIDGET_STATE_UNCHECKED(),
 EMPTY = get_WIDGET_STATE_EMPTY(),
 EMPTY_FOCUS = get_WIDGET_STATE_EMPTY_FOCUS(),
 ERROR = get_WIDGET_STATE_ERROR(),
 SELECTED = get_WIDGET_STATE_SELECTED(),
 NORMAL_OF_CHECKED = get_WIDGET_STATE_NORMAL_OF_CHECKED(),
 PRESSED_OF_CHECKED = get_WIDGET_STATE_PRESSED_OF_CHECKED(),
 OVER_OF_CHECKED = get_WIDGET_STATE_OVER_OF_CHECKED(),
 DISABLE_OF_CHECKED = get_WIDGET_STATE_DISABLE_OF_CHECKED(),
 FOCUSED_OF_CHECKED = get_WIDGET_STATE_FOCUSED_OF_CHECKED(),
 NORMAL_OF_ACTIVE = get_WIDGET_STATE_NORMAL_OF_ACTIVE(),
 PRESSED_OF_ACTIVE = get_WIDGET_STATE_PRESSED_OF_ACTIVE(),
 OVER_OF_ACTIVE = get_WIDGET_STATE_OVER_OF_ACTIVE(),
 DISABLE_OF_ACTIVE = get_WIDGET_STATE_DISABLE_OF_ACTIVE(),
 FOCUSED_OF_ACTIVE = get_WIDGET_STATE_FOCUSED_OF_ACTIVE(),
};

export enum TWidgetCursor {
 CURSOR_DEFAULT = get_WIDGET_CURSOR_DEFAULT(),
 CURSOR_EDIT = get_WIDGET_CURSOR_EDIT(),
 CURSOR_HAND = get_WIDGET_CURSOR_HAND(),
 CURSOR_WAIT = get_WIDGET_CURSOR_WAIT(),
 CURSOR_CROSS = get_WIDGET_CURSOR_CROSS(),
 CURSOR_NO = get_WIDGET_CURSOR_NO(),
 CURSOR_SIZENWSE = get_WIDGET_CURSOR_SIZENWSE(),
 CURSOR_SIZENESW = get_WIDGET_CURSOR_SIZENESW(),
 CURSOR_SIZEWE = get_WIDGET_CURSOR_SIZEWE(),
 CURSOR_SIZENS = get_WIDGET_CURSOR_SIZENS(),
 CURSOR_SIZEALL = get_WIDGET_CURSOR_SIZEALL(),
};

export class TWidget {
 public nativeObj;
 constructor(nativeObj) {
   this.nativeObj = nativeObj;
 }

 countChildren() {
   return widget_count_children(this.nativeObj);
 }

 getChild(index) {
   return new TWidget(widget_get_child(this.nativeObj, index));
 }

 getFocusedWidget() {
   return new TWidget(widget_get_focused_widget(this.nativeObj));
 }

 getNativeWindow() {
   return new TNativeWindow(widget_get_native_window(this.nativeObj));
 }

 indexOf() {
   return widget_index_of(this.nativeObj);
 }

 closeWindow() {
   return widget_close_window(this.nativeObj);
 }

 closeWindowForce() {
   return widget_close_window_force(this.nativeObj);
 }

 back() {
   return widget_back(this.nativeObj);
 }

 backToHome() {
   return widget_back_to_home(this.nativeObj);
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

 isStyleExist(style_name, state_name) {
   return widget_is_style_exist(this.nativeObj, style_name, state_name);
 }

 useStyle(style) {
   return widget_use_style(this.nativeObj, style);
 }

 setText(text) {
   return widget_set_text_utf8(this.nativeObj, text);
 }

 setChildText(name, text) {
   return widget_set_child_text_utf8(this.nativeObj, name, text);
 }

 setChildTextWithDouble(name, format, value) {
   return widget_set_child_text_with_double(this.nativeObj, name, format, value);
 }

 setChildTextWithInt(name, format, value) {
   return widget_set_child_text_with_int(this.nativeObj, name, format, value);
 }

 setTrText(text) {
   return widget_set_tr_text(this.nativeObj, text);
 }

 getValue() {
   return widget_get_value(this.nativeObj);
 }

 getEnable() {
   return widget_get_enable(this.nativeObj);
 }

 getFloating() {
   return widget_get_floating(this.nativeObj);
 }

 getAutoAdjustSize() {
   return widget_get_auto_adjust_size(this.nativeObj);
 }

 getWithFocusState() {
   return widget_get_with_focus_state(this.nativeObj);
 }

 getFocusable() {
   return widget_get_focusable(this.nativeObj);
 }

 getSensitive() {
   return widget_get_sensitive(this.nativeObj);
 }

 getVisible() {
   return widget_get_visible(this.nativeObj);
 }

 getFeedback() {
   return widget_get_feedback(this.nativeObj);
 }

 getText() {
   return widget_get_text(this.nativeObj);
 }

 setName(name) {
   return widget_set_name(this.nativeObj, name);
 }

 setTheme(name) {
   return widget_set_theme(this.nativeObj, name);
 }

 setPointerCursor(cursor) {
   return widget_set_pointer_cursor(this.nativeObj, cursor);
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

 setFeedback(feedback) {
   return widget_set_feedback(this.nativeObj, feedback);
 }

 setAutoAdjustSize(auto_adjust_size) {
   return widget_set_auto_adjust_size(this.nativeObj, auto_adjust_size);
 }

 setFloating(floating) {
   return widget_set_floating(this.nativeObj, floating);
 }

 setFocused(focused) {
   return widget_set_focused(this.nativeObj, focused);
 }

 setFocusable(focusable) {
   return widget_set_focusable(this.nativeObj, focusable);
 }

 setState(state) {
   return widget_set_state(this.nativeObj, state);
 }

 setOpacity(opacity) {
   return widget_set_opacity(this.nativeObj, opacity);
 }

 setDirtyRectTolerance(dirty_rect_tolerance) {
   return widget_set_dirty_rect_tolerance(this.nativeObj, dirty_rect_tolerance);
 }

 destroyChildren() {
   return widget_destroy_children(this.nativeObj);
 }

 addChild(child) {
   return widget_add_child(this.nativeObj, child ? child.nativeObj : null);
 }

 removeChild(child) {
   return widget_remove_child(this.nativeObj, child ? child.nativeObj : null);
 }

 insertChild(index, child) {
   return widget_insert_child(this.nativeObj, index, child ? child.nativeObj : null);
 }

 restack(index) {
   return widget_restack(this.nativeObj, index);
 }

 child(name) {
   return new TWidget(widget_child(this.nativeObj, name));
 }

 lookup(name, recursive) {
   return new TWidget(widget_lookup(this.nativeObj, name, recursive));
 }

 lookupByType(type, recursive) {
   return new TWidget(widget_lookup_by_type(this.nativeObj, type, recursive));
 }

 setVisible(visible) {
   return widget_set_visible(this.nativeObj, visible);
 }

 setVisibleOnly(visible) {
   return widget_set_visible_only(this.nativeObj, visible);
 }

 setSensitive(sensitive) {
   return widget_set_sensitive(this.nativeObj, sensitive);
 }

 on(type, on_event, ctx) {
   return widget_on(this.nativeObj, type, TBrowser.addFunction(wrap_on_event(on_event), "iii"), ctx);
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

 setPropPointer(name, v) {
   return widget_set_prop_pointer(this.nativeObj, name, v);
 }

 getPropPointer(name) {
   return widget_get_prop_pointer(this.nativeObj, name);
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

 isWindowCreated() {
   return widget_is_window_created(this.nativeObj);
 }

 isParentOf(child) {
   return widget_is_parent_of(this.nativeObj, child ? child.nativeObj : null);
 }

 isDirectParentOf(child) {
   return widget_is_direct_parent_of(this.nativeObj, child ? child.nativeObj : null);
 }

 isWindow() {
   return widget_is_window(this.nativeObj);
 }

 isSystemBar() {
   return widget_is_system_bar(this.nativeObj);
 }

 isNormalWindow() {
   return widget_is_normal_window(this.nativeObj);
 }

 isDialog() {
   return widget_is_dialog(this.nativeObj);
 }

 isPopup() {
   return widget_is_popup(this.nativeObj);
 }

 isOverlay() {
   return widget_is_overlay(this.nativeObj);
 }

 isOpenedDialog() {
   return widget_is_opened_dialog(this.nativeObj);
 }

 isOpenedPopup() {
   return widget_is_opened_popup(this.nativeObj);
 }

 isKeyboard() {
   return widget_is_keyboard(this.nativeObj);
 }

 isDesigningWindow() {
   return widget_is_designing_window(this.nativeObj);
 }

 isWindowManager() {
   return widget_is_window_manager(this.nativeObj);
 }

 foreach(visit, ctx) {
   return widget_foreach(this.nativeObj, TBrowser.addFunction(wrap_on_visit(visit), "iii"), ctx);
 }

 getWindow() {
   return new TWidget(widget_get_window(this.nativeObj));
 }

 getWindowManager() {
   return new TWidget(widget_get_window_manager(this.nativeObj));
 }

 getType() {
   return widget_get_type(this.nativeObj);
 }

 clone(parent) {
   return new TWidget(widget_clone(this.nativeObj, parent ? parent.nativeObj : null));
 }

 equal(other) {
   return widget_equal(this.nativeObj, other ? other.nativeObj : null);
 }

 static cast(widget) {
   return new TWidget(widget_cast(widget ? (widget.nativeObj || widget) : null));
 }

 destroy() {
   return widget_destroy(this.nativeObj);
 }

 destroyAsync() {
   return widget_destroy_async(this.nativeObj);
 }

 unref() {
   return widget_unref(this.nativeObj);
 }

 strokeBorderRect(c, r) {
   return widget_stroke_border_rect(this.nativeObj, c ? c.nativeObj : null, r ? r.nativeObj : null);
 }

 fillBgRect(c, r, draw_type) {
   return widget_fill_bg_rect(this.nativeObj, c ? c.nativeObj : null, r ? r.nativeObj : null, draw_type);
 }

 fillFgRect(c, r, draw_type) {
   return widget_fill_fg_rect(this.nativeObj, c ? c.nativeObj : null, r ? r.nativeObj : null, draw_type);
 }

 dispatchToTarget(e) {
   return widget_dispatch_to_target(this.nativeObj, e ? e.nativeObj : null);
 }

 dispatchToKeyTarget(e) {
   return widget_dispatch_to_key_target(this.nativeObj, e ? e.nativeObj : null);
 }

 getStyleType() {
   return widget_get_style_type(this.nativeObj);
 }

 updateStyle() {
   return widget_update_style(this.nativeObj);
 }

 updateStyleRecursive() {
   return widget_update_style_recursive(this.nativeObj);
 }

 setAsKeyTarget() {
   return widget_set_as_key_target(this.nativeObj);
 }

 focusNext() {
   return widget_focus_next(this.nativeObj);
 }

 focusPrev() {
   return widget_focus_prev(this.nativeObj);
 }

 getStateForStyle(active, checked) {
   return widget_get_state_for_style(this.nativeObj, active, checked);
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

 setStyleInt(state_and_name, value) {
   return widget_set_style_int(this.nativeObj, state_and_name, value);
 }

 setStyleStr(state_and_name, value) {
   return widget_set_style_str(this.nativeObj, state_and_name, value);
 }

 setStyleColor(state_and_name, value) {
   return widget_set_style_color(this.nativeObj, state_and_name, value);
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

 get pointerCursor() {
   return widget_t_get_prop_pointer_cursor(this.nativeObj);
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

 get feedback() {
   return widget_t_get_prop_feedback(this.nativeObj);
 }

 get visible() {
   return widget_t_get_prop_visible(this.nativeObj);
 }

 get sensitive() {
   return widget_t_get_prop_sensitive(this.nativeObj);
 }

 get focusable() {
   return widget_t_get_prop_focusable(this.nativeObj);
 }

 get withFocusState() {
   return widget_t_get_prop_with_focus_state(this.nativeObj);
 }

 get autoAdjustSize() {
   return widget_t_get_prop_auto_adjust_size(this.nativeObj);
 }

 get floating() {
   return widget_t_get_prop_floating(this.nativeObj);
 }

 get dirtyRectTolerance() {
   return widget_t_get_prop_dirty_rect_tolerance(this.nativeObj);
 }

 get parent() {
   return widget_t_get_prop_parent(this.nativeObj);
 }

}

export class TAppConf {
 public nativeObj;
 constructor(nativeObj) {
   this.nativeObj = nativeObj;
 }

 static save() {
   return app_conf_save();
 }

 static reload() {
   return app_conf_reload();
 }

 static deinit() {
   return app_conf_deinit();
 }

 static exist(key) {
   return app_conf_exist(key);
 }

 static setInt(key, v) {
   return app_conf_set_int(key, v);
 }

 static setInt64(key, v) {
   return app_conf_set_int64(key, v);
 }

 static setBool(key, v) {
   return app_conf_set_bool(key, v);
 }

 static setDouble(key, v) {
   return app_conf_set_double(key, v);
 }

 static setStr(key, v) {
   return app_conf_set_str(key, v);
 }

 static getInt(key, defval) {
   return app_conf_get_int(key, defval);
 }

 static getInt64(key, defval) {
   return app_conf_get_int64(key, defval);
 }

 static getBool(key, defval) {
   return app_conf_get_bool(key, defval);
 }

 static getDouble(key, defval) {
   return app_conf_get_double(key, defval);
 }

 static getStr(key, defval) {
   return app_conf_get_str(key, defval);
 }

 static remove(key) {
   return app_conf_remove(key);
 }

}

export class TExtWidgets {
 public nativeObj;
 constructor(nativeObj) {
   this.nativeObj = nativeObj;
 }

 static init() {
   return tk_ext_widgets_init();
 }

}

export enum TIndicatorDefaultPaint {
 AUTO = get_INDICATOR_DEFAULT_PAINT_AUTO(),
 FILL_DOT = get_INDICATOR_DEFAULT_PAINT_FILL_DOT(),
 STROKE_DOT = get_INDICATOR_DEFAULT_PAINT_STROKE_DOT(),
 FILL_RECT = get_INDICATOR_DEFAULT_PAINT_FILL_RECT(),
 STROKE_RECT = get_INDICATOR_DEFAULT_PAINT_STROKE_RECT(),
};

export enum TVpageEvent {
 VPAGE_WILL_OPEN = get_EVT_VPAGE_WILL_OPEN(),
 VPAGE_OPEN = get_EVT_VPAGE_OPEN(),
 VPAGE_CLOSE = get_EVT_VPAGE_CLOSE(),
};

export enum TAssetType {
 NONE = get_ASSET_TYPE_NONE(),
 FONT = get_ASSET_TYPE_FONT(),
 IMAGE = get_ASSET_TYPE_IMAGE(),
 STYLE = get_ASSET_TYPE_STYLE(),
 UI = get_ASSET_TYPE_UI(),
 XML = get_ASSET_TYPE_XML(),
 STRINGS = get_ASSET_TYPE_STRINGS(),
 SCRIPT = get_ASSET_TYPE_SCRIPT(),
 FLOW = get_ASSET_TYPE_FLOW(),
 DATA = get_ASSET_TYPE_DATA(),
};

export class TAssetInfo {
 public nativeObj;
 constructor(nativeObj) {
   this.nativeObj = nativeObj;
 }

 getType() {
   return asset_info_get_type(this.nativeObj);
 }

 getName() {
   return asset_info_get_name(this.nativeObj);
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

export class TColor {
 public nativeObj;
 constructor(nativeObj) {
   this.nativeObj = nativeObj;
 }

 static create(r, b, g, a) {
   return new TColor(color_create(r, b, g, a));
 }

 fromStr(str) {
   return new TColor(color_from_str(this.nativeObj, str));
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

 getColor() {
   return color_get_color(this.nativeObj);
 }

 static cast(color) {
   return new TColor(color_cast(color ? (color.nativeObj || color) : null));
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

export class TDateTime {
 public nativeObj;
 constructor(nativeObj) {
   this.nativeObj = nativeObj;
 }

 static create() {
   return new TDateTime(date_time_create());
 }

 setYear(year) {
   return date_time_set_year(this.nativeObj, year);
 }

 setMonth(month) {
   return date_time_set_month(this.nativeObj, month);
 }

 setDay(day) {
   return date_time_set_day(this.nativeObj, day);
 }

 setHour(hour) {
   return date_time_set_hour(this.nativeObj, hour);
 }

 setMinute(minute) {
   return date_time_set_minute(this.nativeObj, minute);
 }

 setSecond(second) {
   return date_time_set_second(this.nativeObj, second);
 }

 set() {
   return date_time_set(this.nativeObj);
 }

 fromTime(time) {
   return date_time_from_time(this.nativeObj, time);
 }

 toTime() {
   return date_time_to_time(this.nativeObj);
 }

 addDelta(delta) {
   return date_time_add_delta(this.nativeObj, delta);
 }

 static isLeap(year) {
   return date_time_is_leap(year);
 }

 static getDays(year, montn) {
   return date_time_get_days(year, montn);
 }

 static getWday(year, montn, day) {
   return date_time_get_wday(year, montn, day);
 }

 static getMonthName(montn) {
   return date_time_get_month_name(montn);
 }

 static getWdayName(wday) {
   return date_time_get_wday_name(wday);
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

export enum TEasingType {
 LINEAR = get_EASING_LINEAR(),
 QUADRATIC_IN = get_EASING_QUADRATIC_IN(),
 QUADRATIC_OUT = get_EASING_QUADRATIC_OUT(),
 QUADRATIC_INOUT = get_EASING_QUADRATIC_INOUT(),
 CUBIC_IN = get_EASING_CUBIC_IN(),
 CUBIC_OUT = get_EASING_CUBIC_OUT(),
 SIN_IN = get_EASING_SIN_IN(),
 SIN_OUT = get_EASING_SIN_OUT(),
 SIN_INOUT = get_EASING_SIN_INOUT(),
 POW_IN = get_EASING_POW_IN(),
 POW_OUT = get_EASING_POW_OUT(),
 POW_INOUT = get_EASING_POW_INOUT(),
 CIRCULAR_IN = get_EASING_CIRCULAR_IN(),
 CIRCULAR_OUT = get_EASING_CIRCULAR_OUT(),
 CIRCULAR_INOUT = get_EASING_CIRCULAR_INOUT(),
 ELASTIC_IN = get_EASING_ELASTIC_IN(),
 ELASTIC_OUT = get_EASING_ELASTIC_OUT(),
 ELASTIC_INOUT = get_EASING_ELASTIC_INOUT(),
 BACK_IN = get_EASING_BACK_IN(),
 BACK_OUT = get_EASING_BACK_OUT(),
 BACK_INOUT = get_EASING_BACK_INOUT(),
 BOUNCE_IN = get_EASING_BOUNCE_IN(),
 BOUNCE_OUT = get_EASING_BOUNCE_OUT(),
 BOUNCE_INOUT = get_EASING_BOUNCE_INOUT(),
};

export class TIdleManager {
 public nativeObj;
 constructor(nativeObj) {
   this.nativeObj = nativeObj;
 }

}

export enum TMIME_TYPE {
 APPLICATION_ENVOY = get_MIME_TYPE_APPLICATION_ENVOY(),
 APPLICATION_FRACTALS = get_MIME_TYPE_APPLICATION_FRACTALS(),
 APPLICATION_FUTURESPLASH = get_MIME_TYPE_APPLICATION_FUTURESPLASH(),
 APPLICATION_HTA = get_MIME_TYPE_APPLICATION_HTA(),
 APPLICATION_JSON = get_MIME_TYPE_APPLICATION_JSON(),
 APPLICATION_UBJSON = get_MIME_TYPE_APPLICATION_UBJSON(),
 APPLICATION_MAC_BINHEX40 = get_MIME_TYPE_APPLICATION_MAC_BINHEX40(),
 APPLICATION_MSWORD = get_MIME_TYPE_APPLICATION_MSWORD(),
 APPLICATION_OCTET_STREAM = get_MIME_TYPE_APPLICATION_OCTET_STREAM(),
 APPLICATION_ODA = get_MIME_TYPE_APPLICATION_ODA(),
 APPLICATION_OLESCRIPT = get_MIME_TYPE_APPLICATION_OLESCRIPT(),
 APPLICATION_PDF = get_MIME_TYPE_APPLICATION_PDF(),
 APPLICATION_PICS_RULES = get_MIME_TYPE_APPLICATION_PICS_RULES(),
 APPLICATION_PKCS10 = get_MIME_TYPE_APPLICATION_PKCS10(),
 APPLICATION_PKIX_CRL = get_MIME_TYPE_APPLICATION_PKIX_CRL(),
 APPLICATION_POSTSCRIPT = get_MIME_TYPE_APPLICATION_POSTSCRIPT(),
 APPLICATION_RTF = get_MIME_TYPE_APPLICATION_RTF(),
 APPLICATION_VND_MS_EXCEL = get_MIME_TYPE_APPLICATION_VND_MS_EXCEL(),
 APPLICATION_VND_MS_OUTLOOK = get_MIME_TYPE_APPLICATION_VND_MS_OUTLOOK(),
 APPLICATION_VND_MS_PKICERTSTORE = get_MIME_TYPE_APPLICATION_VND_MS_PKICERTSTORE(),
 APPLICATION_VND_MS_PKISECCAT = get_MIME_TYPE_APPLICATION_VND_MS_PKISECCAT(),
 APPLICATION_VND_MS_PKISTL = get_MIME_TYPE_APPLICATION_VND_MS_PKISTL(),
 APPLICATION_VND_MS_POWERPOINT = get_MIME_TYPE_APPLICATION_VND_MS_POWERPOINT(),
 APPLICATION_VND_MS_PROJECT = get_MIME_TYPE_APPLICATION_VND_MS_PROJECT(),
 APPLICATION_VND_MS_WORKS = get_MIME_TYPE_APPLICATION_VND_MS_WORKS(),
 APPLICATION_WINHLP = get_MIME_TYPE_APPLICATION_WINHLP(),
 APPLICATION_X_BCPIO = get_MIME_TYPE_APPLICATION_X_BCPIO(),
 APPLICATION_X_CDF = get_MIME_TYPE_APPLICATION_X_CDF(),
 APPLICATION_X_COMPRESS = get_MIME_TYPE_APPLICATION_X_COMPRESS(),
 APPLICATION_X_COMPRESSED = get_MIME_TYPE_APPLICATION_X_COMPRESSED(),
 APPLICATION_X_CPIO = get_MIME_TYPE_APPLICATION_X_CPIO(),
 APPLICATION_X_CSH = get_MIME_TYPE_APPLICATION_X_CSH(),
 APPLICATION_X_DIRECTOR = get_MIME_TYPE_APPLICATION_X_DIRECTOR(),
 APPLICATION_X_DVI = get_MIME_TYPE_APPLICATION_X_DVI(),
 APPLICATION_X_GTAR = get_MIME_TYPE_APPLICATION_X_GTAR(),
 APPLICATION_X_GZIP = get_MIME_TYPE_APPLICATION_X_GZIP(),
 APPLICATION_X_HDF = get_MIME_TYPE_APPLICATION_X_HDF(),
 APPLICATION_X_IPHONE = get_MIME_TYPE_APPLICATION_X_IPHONE(),
 APPLICATION_X_JAVASCRIPT = get_MIME_TYPE_APPLICATION_X_JAVASCRIPT(),
 APPLICATION_X_LATEX = get_MIME_TYPE_APPLICATION_X_LATEX(),
 APPLICATION_X_MSACCESS = get_MIME_TYPE_APPLICATION_X_MSACCESS(),
 APPLICATION_X_MSCARDFILE = get_MIME_TYPE_APPLICATION_X_MSCARDFILE(),
 APPLICATION_X_MSCLIP = get_MIME_TYPE_APPLICATION_X_MSCLIP(),
 APPLICATION_X_MSDOWNLOAD = get_MIME_TYPE_APPLICATION_X_MSDOWNLOAD(),
 APPLICATION_X_MSMEDIAVIEW = get_MIME_TYPE_APPLICATION_X_MSMEDIAVIEW(),
 APPLICATION_X_MSMETAFILE = get_MIME_TYPE_APPLICATION_X_MSMETAFILE(),
 APPLICATION_X_MSMONEY = get_MIME_TYPE_APPLICATION_X_MSMONEY(),
 APPLICATION_X_MSPUBLISHER = get_MIME_TYPE_APPLICATION_X_MSPUBLISHER(),
 APPLICATION_X_MSSCHEDULE = get_MIME_TYPE_APPLICATION_X_MSSCHEDULE(),
 APPLICATION_X_MSTERMINAL = get_MIME_TYPE_APPLICATION_X_MSTERMINAL(),
 APPLICATION_X_MSWRITE = get_MIME_TYPE_APPLICATION_X_MSWRITE(),
 APPLICATION_X_NETCDF = get_MIME_TYPE_APPLICATION_X_NETCDF(),
 APPLICATION_X_PERFMON = get_MIME_TYPE_APPLICATION_X_PERFMON(),
 APPLICATION_X_PKCS12 = get_MIME_TYPE_APPLICATION_X_PKCS12(),
 APPLICATION_X_SH = get_MIME_TYPE_APPLICATION_X_SH(),
 APPLICATION_X_SHAR = get_MIME_TYPE_APPLICATION_X_SHAR(),
 APPLICATION_X_SHOCKWAVE_FLASH = get_MIME_TYPE_APPLICATION_X_SHOCKWAVE_FLASH(),
 APPLICATION_X_STUFFIT = get_MIME_TYPE_APPLICATION_X_STUFFIT(),
 APPLICATION_X_SV4CPIO = get_MIME_TYPE_APPLICATION_X_SV4CPIO(),
 APPLICATION_X_SV4CRC = get_MIME_TYPE_APPLICATION_X_SV4CRC(),
 APPLICATION_X_TAR = get_MIME_TYPE_APPLICATION_X_TAR(),
 APPLICATION_X_TCL = get_MIME_TYPE_APPLICATION_X_TCL(),
 APPLICATION_X_TEX = get_MIME_TYPE_APPLICATION_X_TEX(),
 APPLICATION_X_TEXINFO = get_MIME_TYPE_APPLICATION_X_TEXINFO(),
 APPLICATION_X_TROFF = get_MIME_TYPE_APPLICATION_X_TROFF(),
 APPLICATION_X_USTAR = get_MIME_TYPE_APPLICATION_X_USTAR(),
 APPLICATION_ZIP = get_MIME_TYPE_APPLICATION_ZIP(),
 AUDIO_BASIC = get_MIME_TYPE_AUDIO_BASIC(),
 AUDIO_MID = get_MIME_TYPE_AUDIO_MID(),
 AUDIO_MPEG = get_MIME_TYPE_AUDIO_MPEG(),
 AUDIO_X_AIFF = get_MIME_TYPE_AUDIO_X_AIFF(),
 AUDIO_X_MPEGURL = get_MIME_TYPE_AUDIO_X_MPEGURL(),
 AUDIO_X_WAV = get_MIME_TYPE_AUDIO_X_WAV(),
 IMAGE_BMP = get_MIME_TYPE_IMAGE_BMP(),
 IMAGE_CIS_COD = get_MIME_TYPE_IMAGE_CIS_COD(),
 IMAGE_GIF = get_MIME_TYPE_IMAGE_GIF(),
 IMAGE_IEF = get_MIME_TYPE_IMAGE_IEF(),
 IMAGE_JPEG = get_MIME_TYPE_IMAGE_JPEG(),
 IMAGE_PIPEG = get_MIME_TYPE_IMAGE_PIPEG(),
 IMAGE_SVG_XML = get_MIME_TYPE_IMAGE_SVG_XML(),
 IMAGE_TIFF = get_MIME_TYPE_IMAGE_TIFF(),
 IMAGE_X_CMX = get_MIME_TYPE_IMAGE_X_CMX(),
 IMAGE_X_ICON = get_MIME_TYPE_IMAGE_X_ICON(),
 IMAGE_X_RGB = get_MIME_TYPE_IMAGE_X_RGB(),
 IMAGE_X_XBITMAP = get_MIME_TYPE_IMAGE_X_XBITMAP(),
 IMAGE_X_XPIXMAP = get_MIME_TYPE_IMAGE_X_XPIXMAP(),
 IMAGE_X_XWINDOWDUMP = get_MIME_TYPE_IMAGE_X_XWINDOWDUMP(),
 MESSAGE_RFC822 = get_MIME_TYPE_MESSAGE_RFC822(),
 TEXT_CSS = get_MIME_TYPE_TEXT_CSS(),
 TEXT_H323 = get_MIME_TYPE_TEXT_H323(),
 TEXT_HTML = get_MIME_TYPE_TEXT_HTML(),
 TEXT_IULS = get_MIME_TYPE_TEXT_IULS(),
 TEXT_PLAIN = get_MIME_TYPE_TEXT_PLAIN(),
 TEXT_RICHTEXT = get_MIME_TYPE_TEXT_RICHTEXT(),
 TEXT_SCRIPTLET = get_MIME_TYPE_TEXT_SCRIPTLET(),
 TEXT_WEBVIEWHTML = get_MIME_TYPE_TEXT_WEBVIEWHTML(),
 TEXT_X_COMPONENT = get_MIME_TYPE_TEXT_X_COMPONENT(),
 TEXT_X_SETEXT = get_MIME_TYPE_TEXT_X_SETEXT(),
 TEXT_X_VCARD = get_MIME_TYPE_TEXT_X_VCARD(),
 VIDEO_MPEG = get_MIME_TYPE_VIDEO_MPEG(),
 VIDEO_QUICKTIME = get_MIME_TYPE_VIDEO_QUICKTIME(),
 VIDEO_X_MSVIDEO = get_MIME_TYPE_VIDEO_X_MSVIDEO(),
};

export class TNamedValue {
 public nativeObj;
 constructor(nativeObj) {
   this.nativeObj = nativeObj;
 }

 static create() {
   return new TNamedValue(named_value_create());
 }

 static cast(nv) {
   return new TNamedValue(named_value_cast(nv ? (nv.nativeObj || nv) : null));
 }

 setName(name) {
   return named_value_set_name(this.nativeObj, name);
 }

 setValue(value) {
   return named_value_set_value(this.nativeObj, value ? value.nativeObj : null);
 }

 getValue() {
   return new TValue(named_value_get_value(this.nativeObj));
 }

 destroy() {
   return named_value_destroy(this.nativeObj);
 }

 get name() {
   return named_value_t_get_prop_name(this.nativeObj);
 }

}

export enum TObjectCmd {
 SAVE = get_OBJECT_CMD_SAVE(),
 RELOAD = get_OBJECT_CMD_RELOAD(),
 MOVE_UP = get_OBJECT_CMD_MOVE_UP(),
 MOVE_DOWN = get_OBJECT_CMD_MOVE_DOWN(),
 REMOVE = get_OBJECT_CMD_REMOVE(),
 REMOVE_CHECKED = get_OBJECT_CMD_REMOVE_CHECKED(),
 CLEAR = get_OBJECT_CMD_CLEAR(),
 ADD = get_OBJECT_CMD_ADD(),
 DETAIL = get_OBJECT_CMD_DETAIL(),
 EDIT = get_OBJECT_CMD_EDIT(),
};

export enum TObjectProp {
 SIZE = get_OBJECT_PROP_SIZE(),
 CHECKED = get_OBJECT_PROP_CHECKED(),
};

export class TRlog {
 public nativeObj;
 constructor(nativeObj) {
   this.nativeObj = nativeObj;
 }

 static create(filename_pattern, max_size, buff_size) {
   return new TRlog(rlog_create(filename_pattern, max_size, buff_size));
 }

 write(str) {
   return rlog_write(this.nativeObj, str);
 }

}

export class TTimeNow {
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

 static us() {
   return time_now_us();
 }

}

export class TTimerManager {
 public nativeObj;
 constructor(nativeObj) {
   this.nativeObj = nativeObj;
 }

}

export enum TRet {
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
 SKIP = get_RET_SKIP(),
 CONTINUE = get_RET_CONTINUE(),
 OBJECT_CHANGED = get_RET_OBJECT_CHANGED(),
 ITEMS_CHANGED = get_RET_ITEMS_CHANGED(),
 BAD_PARAMS = get_RET_BAD_PARAMS(),
 TIMEOUT = get_RET_TIMEOUT(),
 CRC = get_RET_CRC(),
 IO = get_RET_IO(),
 EOS = get_RET_EOS(),
 NOT_MODIFIED = get_RET_NOT_MODIFIED(),
};

export enum TValueType {
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
 SIZED_STRING = get_VALUE_TYPE_SIZED_STRING(),
 BINARY = get_VALUE_TYPE_BINARY(),
 UBJSON = get_VALUE_TYPE_UBJSON(),
 TOKEN = get_VALUE_TYPE_TOKEN(),
};

export class TAssetsManager extends TEmitter {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static instance() {
   return new TAssetsManager(assets_manager());
 }

 setTheme(theme) {
   return assets_manager_set_theme(this.nativeObj, theme);
 }

 ref(type, name) {
   return new TAssetInfo(assets_manager_ref(this.nativeObj, type, name));
 }

 refEx(type, subtype, name) {
   return new TAssetInfo(assets_manager_ref_ex(this.nativeObj, type, subtype, name));
 }

 unref(info) {
   return assets_manager_unref(this.nativeObj, info ? info.nativeObj : null);
 }

}

export class TWheelEvent extends TEvent {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static cast(event) {
   return new TWheelEvent(wheel_event_cast(event ? (event.nativeObj || event) : null));
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

export class TOrientationEvent extends TEvent {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static cast(event) {
   return new TOrientationEvent(orientation_event_cast(event ? (event.nativeObj || event) : null));
 }

 get orientation() {
   return orientation_event_t_get_prop_orientation(this.nativeObj);
 }

}

export class TValueChangeEvent extends TEvent {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static cast(event) {
   return new TValueChangeEvent(value_change_event_cast(event ? (event.nativeObj || event) : null));
 }

}

export class TPointerEvent extends TEvent {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static cast(event) {
   return new TPointerEvent(pointer_event_cast(event ? (event.nativeObj || event) : null));
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

 get cmd() {
   return pointer_event_t_get_prop_cmd(this.nativeObj);
 }

 get menu() {
   return pointer_event_t_get_prop_menu(this.nativeObj);
 }

 get shift() {
   return pointer_event_t_get_prop_shift(this.nativeObj);
 }

}

export class TKeyEvent extends TEvent {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static cast(event) {
   return new TKeyEvent(key_event_cast(event ? (event.nativeObj || event) : null));
 }

 get key() {
   return key_event_t_get_prop_key(this.nativeObj);
 }

 get alt() {
   return key_event_t_get_prop_alt(this.nativeObj);
 }

 get lalt() {
   return key_event_t_get_prop_lalt(this.nativeObj);
 }

 get ralt() {
   return key_event_t_get_prop_ralt(this.nativeObj);
 }

 get ctrl() {
   return key_event_t_get_prop_ctrl(this.nativeObj);
 }

 get lctrl() {
   return key_event_t_get_prop_lctrl(this.nativeObj);
 }

 get rctrl() {
   return key_event_t_get_prop_rctrl(this.nativeObj);
 }

 get shift() {
   return key_event_t_get_prop_shift(this.nativeObj);
 }

 get lshift() {
   return key_event_t_get_prop_lshift(this.nativeObj);
 }

 get rshift() {
   return key_event_t_get_prop_rshift(this.nativeObj);
 }

 get cmd() {
   return key_event_t_get_prop_cmd(this.nativeObj);
 }

 get menu() {
   return key_event_t_get_prop_menu(this.nativeObj);
 }

 get capslock() {
   return key_event_t_get_prop_capslock(this.nativeObj);
 }

}

export class TPaintEvent extends TEvent {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static cast(event) {
   return new TPaintEvent(paint_event_cast(event ? (event.nativeObj || event) : null));
 }

 get c() {
   return paint_event_t_get_prop_c(this.nativeObj);
 }

}

export class TWindowEvent extends TEvent {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static cast(event) {
   return new TWindowEvent(window_event_cast(event ? (event.nativeObj || event) : null));
 }

 get window() {
   return window_event_t_get_prop_window(this.nativeObj);
 }

}

export class TMultiGestureEvent extends TEvent {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static cast(event) {
   return new TMultiGestureEvent(multi_gesture_event_cast(event ? (event.nativeObj || event) : null));
 }

 get x() {
   return multi_gesture_event_t_get_prop_x(this.nativeObj);
 }

 get y() {
   return multi_gesture_event_t_get_prop_y(this.nativeObj);
 }

 get rotation() {
   return multi_gesture_event_t_get_prop_rotation(this.nativeObj);
 }

 get distance() {
   return multi_gesture_event_t_get_prop_distance(this.nativeObj);
 }

}

export class TImageBase extends TWidget {
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
   return new TImageBase(image_base_cast(widget ? (widget.nativeObj || widget) : null));
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

export class TStyleMutable extends TStyle {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 setName(name) {
   return style_mutable_set_name(this.nativeObj, name);
 }

 setInt(state, name, val) {
   return style_mutable_set_int(this.nativeObj, state, name, val);
 }

 static cast(s) {
   return new TStyleMutable(style_mutable_cast(s ? (s.nativeObj || s) : null));
 }

 static create(default_style) {
   return new TStyleMutable(style_mutable_create(default_style ? default_style.nativeObj : null));
 }

 get name() {
   return style_mutable_t_get_prop_name(this.nativeObj);
 }

}

export class TWindowBase extends TWidget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static cast(widget) {
   return new TWindowBase(window_base_cast(widget ? (widget.nativeObj || widget) : null));
 }

 get theme() {
   return window_base_t_get_prop_theme(this.nativeObj);
 }

 get designW() {
   return window_base_t_get_prop_design_w(this.nativeObj);
 }

 get designH() {
   return window_base_t_get_prop_design_h(this.nativeObj);
 }

 get autoScaleChildrenX() {
   return window_base_t_get_prop_auto_scale_children_x(this.nativeObj);
 }

 get autoScaleChildrenY() {
   return window_base_t_get_prop_auto_scale_children_y(this.nativeObj);
 }

 get autoScaleChildrenW() {
   return window_base_t_get_prop_auto_scale_children_w(this.nativeObj);
 }

 get autoScaleChildrenH() {
   return window_base_t_get_prop_auto_scale_children_h(this.nativeObj);
 }

 get disableAnim() {
   return window_base_t_get_prop_disable_anim(this.nativeObj);
 }

 get closable() {
   return window_base_t_get_prop_closable(this.nativeObj);
 }

 get openAnimHint() {
   return window_base_t_get_prop_open_anim_hint(this.nativeObj);
 }

 get closeAnimHint() {
   return window_base_t_get_prop_close_anim_hint(this.nativeObj);
 }

 get moveFocusPrevKey() {
   return window_base_t_get_prop_move_focus_prev_key(this.nativeObj);
 }

 get moveFocusNextKey() {
   return window_base_t_get_prop_move_focus_next_key(this.nativeObj);
 }

 get moveFocusUpKey() {
   return window_base_t_get_prop_move_focus_up_key(this.nativeObj);
 }

 get moveFocusDownKey() {
   return window_base_t_get_prop_move_focus_down_key(this.nativeObj);
 }

 get moveFocusLeftKey() {
   return window_base_t_get_prop_move_focus_left_key(this.nativeObj);
 }

 get moveFocusRightKey() {
   return window_base_t_get_prop_move_focus_right_key(this.nativeObj);
 }

 get singleInstance() {
   return window_base_t_get_prop_single_instance(this.nativeObj);
 }

 get stronglyFocus() {
   return window_base_t_get_prop_strongly_focus(this.nativeObj);
 }

}

export class TWindowManager extends TWidget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static instance() {
   return new TWindowManager(window_manager());
 }

 static cast(widget) {
   return new TWindowManager(window_manager_cast(widget ? (widget.nativeObj || widget) : null));
 }

 getTopMainWindow() {
   return new TWidget(window_manager_get_top_main_window(this.nativeObj));
 }

 getTopWindow() {
   return new TWidget(window_manager_get_top_window(this.nativeObj));
 }

 getPrevWindow() {
   return new TWidget(window_manager_get_prev_window(this.nativeObj));
 }

 getPointerX() {
   return window_manager_get_pointer_x(this.nativeObj);
 }

 getPointerY() {
   return window_manager_get_pointer_y(this.nativeObj);
 }

 getPointerPressed() {
   return window_manager_get_pointer_pressed(this.nativeObj);
 }

 isAnimating() {
   return window_manager_is_animating(this.nativeObj);
 }

 setShowFps(show_fps) {
   return window_manager_set_show_fps(this.nativeObj, show_fps);
 }

 setMaxFps(max_fps) {
   return window_manager_set_max_fps(this.nativeObj, max_fps);
 }

 setIgnoreInputEvents(ignore_input_events) {
   return window_manager_set_ignore_input_events(this.nativeObj, ignore_input_events);
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

 backTo(target) {
   return window_manager_back_to(this.nativeObj, target);
 }

 resize(w, h) {
   return window_manager_resize(this.nativeObj, w, h);
 }

 closeAll() {
   return window_manager_close_all(this.nativeObj);
 }

}

export class TCanvasWidget extends TWidget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new TCanvasWidget(canvas_widget_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new TCanvasWidget(canvas_widget_cast(widget ? (widget.nativeObj || widget) : null));
 }

}

export class TColorComponent extends TWidget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new TColorComponent(color_component_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new TColorComponent(color_component_cast(widget ? (widget.nativeObj || widget) : null));
 }

}

export class TColorPicker extends TWidget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new TColorPicker(color_picker_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 setColor(color) {
   return color_picker_set_color(this.nativeObj, color);
 }

 static cast(widget) {
   return new TColorPicker(color_picker_cast(widget ? (widget.nativeObj || widget) : null));
 }

 get value() {
   return color_picker_t_get_prop_value(this.nativeObj);
 }

}

export class TDraggable extends TWidget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new TDraggable(draggable_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new TDraggable(draggable_cast(widget ? (widget.nativeObj || widget) : null));
 }

 setTop(top) {
   return draggable_set_top(this.nativeObj, top);
 }

 setBottom(bottom) {
   return draggable_set_bottom(this.nativeObj, bottom);
 }

 setLeft(left) {
   return draggable_set_left(this.nativeObj, left);
 }

 setRight(right) {
   return draggable_set_right(this.nativeObj, right);
 }

 setVerticalOnly(vertical_only) {
   return draggable_set_vertical_only(this.nativeObj, vertical_only);
 }

 setHorizontalOnly(horizontal_only) {
   return draggable_set_horizontal_only(this.nativeObj, horizontal_only);
 }

 setDragWindow(drag_window) {
   return draggable_set_drag_window(this.nativeObj, drag_window);
 }

 get top() {
   return draggable_t_get_prop_top(this.nativeObj);
 }

 get bottom() {
   return draggable_t_get_prop_bottom(this.nativeObj);
 }

 get left() {
   return draggable_t_get_prop_left(this.nativeObj);
 }

 get right() {
   return draggable_t_get_prop_right(this.nativeObj);
 }

 get verticalOnly() {
   return draggable_t_get_prop_vertical_only(this.nativeObj);
 }

 get horizontalOnly() {
   return draggable_t_get_prop_horizontal_only(this.nativeObj);
 }

 get dragWindow() {
   return draggable_t_get_prop_drag_window(this.nativeObj);
 }

}

export class TFileBrowserView extends TWidget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new TFileBrowserView(file_browser_view_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new TFileBrowserView(file_browser_view_cast(widget ? (widget.nativeObj || widget) : null));
 }

 setInitDir(init_dir) {
   return file_browser_view_set_init_dir(this.nativeObj, init_dir);
 }

 setTopDir(top_dir) {
   return file_browser_view_set_top_dir(this.nativeObj, top_dir);
 }

 setFilter(filter) {
   return file_browser_view_set_filter(this.nativeObj, filter);
 }

 reload() {
   return file_browser_view_reload(this.nativeObj);
 }

 setIgnoreHiddenFiles(ignore_hidden_files) {
   return file_browser_view_set_ignore_hidden_files(this.nativeObj, ignore_hidden_files);
 }

 setSortAscending(sort_ascending) {
   return file_browser_view_set_sort_ascending(this.nativeObj, sort_ascending);
 }

 setShowCheckButton(show_check_button) {
   return file_browser_view_set_show_check_button(this.nativeObj, show_check_button);
 }

 setSortBy(sort_by) {
   return file_browser_view_set_sort_by(this.nativeObj, sort_by);
 }

 getCwd() {
   return file_browser_view_get_cwd(this.nativeObj);
 }

 createDir(name) {
   return file_browser_view_create_dir(this.nativeObj, name);
 }

 createFile(name, data, size) {
   return file_browser_view_create_file(this.nativeObj, name, data, size);
 }

 get initDir() {
   return file_browser_view_t_get_prop_init_dir(this.nativeObj);
 }

 get topDir() {
   return file_browser_view_t_get_prop_top_dir(this.nativeObj);
 }

 get filter() {
   return file_browser_view_t_get_prop_filter(this.nativeObj);
 }

 get ignoreHiddenFiles() {
   return file_browser_view_t_get_prop_ignore_hidden_files(this.nativeObj);
 }

 get sortAscending() {
   return file_browser_view_t_get_prop_sort_ascending(this.nativeObj);
 }

 get showCheckButton() {
   return file_browser_view_t_get_prop_show_check_button(this.nativeObj);
 }

 get sortBy() {
   return file_browser_view_t_get_prop_sort_by(this.nativeObj);
 }

}

export class TFileChooser extends TEmitter {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create() {
   return new TFileChooser(file_chooser_create());
 }

 setInitDir(init_dir) {
   return file_chooser_set_init_dir(this.nativeObj, init_dir);
 }

 setTopDir(top_dir) {
   return file_chooser_set_top_dir(this.nativeObj, top_dir);
 }

 setFilter(filter) {
   return file_chooser_set_filter(this.nativeObj, filter);
 }

 static cast(chooser) {
   return new TFileChooser(file_chooser_cast(chooser ? (chooser.nativeObj || chooser) : null));
 }

 chooseFileForSave() {
   return file_chooser_choose_file_for_save(this.nativeObj);
 }

 chooseFileForOpen() {
   return file_chooser_choose_file_for_open(this.nativeObj);
 }

 chooseFolder() {
   return file_chooser_choose_folder(this.nativeObj);
 }

 getDir() {
   return file_chooser_get_dir(this.nativeObj);
 }

 getFilename() {
   return file_chooser_get_filename(this.nativeObj);
 }

 isAborted() {
   return file_chooser_is_aborted(this.nativeObj);
 }

}

export class TGaugePointer extends TWidget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new TGaugePointer(gauge_pointer_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new TGaugePointer(gauge_pointer_cast(widget ? (widget.nativeObj || widget) : null));
 }

 setAngle(angle) {
   return gauge_pointer_set_angle(this.nativeObj, angle);
 }

 setImage(image) {
   return gauge_pointer_set_image(this.nativeObj, image);
 }

 setAnchor(anchor_x, anchor_y) {
   return gauge_pointer_set_anchor(this.nativeObj, anchor_x, anchor_y);
 }

 get angle() {
   return gauge_pointer_t_get_prop_angle(this.nativeObj);
 }

 get image() {
   return gauge_pointer_t_get_prop_image(this.nativeObj);
 }

 get anchorX() {
   return gauge_pointer_t_get_prop_anchor_x(this.nativeObj);
 }

 get anchorY() {
   return gauge_pointer_t_get_prop_anchor_y(this.nativeObj);
 }

}

export class TGauge extends TWidget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new TGauge(gauge_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new TGauge(gauge_cast(widget ? (widget.nativeObj || widget) : null));
 }

 setImage(name) {
   return gauge_set_image(this.nativeObj, name);
 }

 setDrawType(draw_type) {
   return gauge_set_draw_type(this.nativeObj, draw_type);
 }

 get image() {
   return gauge_t_get_prop_image(this.nativeObj);
 }

 get drawType() {
   return gauge_t_get_prop_draw_type(this.nativeObj);
 }

}

export class TImageAnimation extends TWidget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new TImageAnimation(image_animation_create(parent ? parent.nativeObj : null, x, y, w, h));
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

 next() {
   return image_animation_next(this.nativeObj);
 }

 setFormat(format) {
   return image_animation_set_format(this.nativeObj, format);
 }

 setUnloadAfterPaint(unload_after_paint) {
   return image_animation_set_unload_after_paint(this.nativeObj, unload_after_paint);
 }

 setReverse(reverse) {
   return image_animation_set_reverse(this.nativeObj, reverse);
 }

 setShowWhenDone(show_when_done) {
   return image_animation_set_show_when_done(this.nativeObj, show_when_done);
 }

 static cast(widget) {
   return new TImageAnimation(image_animation_cast(widget ? (widget.nativeObj || widget) : null));
 }

 isPlaying() {
   return image_animation_is_playing(this.nativeObj);
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

 get reverse() {
   return image_animation_t_get_prop_reverse(this.nativeObj);
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

 get showWhenDone() {
   return image_animation_t_get_prop_show_when_done(this.nativeObj);
 }

}

export class TImageValue extends TWidget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new TImageValue(image_value_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 setImage(image) {
   return image_value_set_image(this.nativeObj, image);
 }

 setFormat(format) {
   return image_value_set_format(this.nativeObj, format);
 }

 setClickAddDelta(delta) {
   return image_value_set_click_add_delta(this.nativeObj, delta);
 }

 setValue(value) {
   return image_value_set_value(this.nativeObj, value);
 }

 setMin(min) {
   return image_value_set_min(this.nativeObj, min);
 }

 setMax(max) {
   return image_value_set_max(this.nativeObj, max);
 }

 static cast(widget) {
   return new TImageValue(image_value_cast(widget ? (widget.nativeObj || widget) : null));
 }

 get image() {
   return image_value_t_get_prop_image(this.nativeObj);
 }

 get format() {
   return image_value_t_get_prop_format(this.nativeObj);
 }

 get clickAddDelta() {
   return image_value_t_get_prop_click_add_delta(this.nativeObj);
 }

 get value() {
   return image_value_t_get_prop_value(this.nativeObj);
 }

 get min() {
   return image_value_t_get_prop_min(this.nativeObj);
 }

 get max() {
   return image_value_t_get_prop_max(this.nativeObj);
 }

}

export class TCandidates extends TWidget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new TCandidates(candidates_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new TCandidates(candidates_cast(widget ? (widget.nativeObj || widget) : null));
 }

 setPre(pre) {
   return candidates_set_pre(this.nativeObj, pre);
 }

 setSelectByNum(select_by_num) {
   return candidates_set_select_by_num(this.nativeObj, select_by_num);
 }

 setAutoHide(auto_hide) {
   return candidates_set_auto_hide(this.nativeObj, auto_hide);
 }

 setButtonStyle(button_style) {
   return candidates_set_button_style(this.nativeObj, button_style);
 }

 get pre() {
   return candidates_t_get_prop_pre(this.nativeObj);
 }

 get selectByNum() {
   return candidates_t_get_prop_select_by_num(this.nativeObj);
 }

 get autoHide() {
   return candidates_t_get_prop_auto_hide(this.nativeObj);
 }

 get buttonStyle() {
   return candidates_t_get_prop_button_style(this.nativeObj);
 }

}

export class TLangIndicator extends TWidget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new TLangIndicator(lang_indicator_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 setImage(image) {
   return lang_indicator_set_image(this.nativeObj, image);
 }

 static cast(widget) {
   return new TLangIndicator(lang_indicator_cast(widget ? (widget.nativeObj || widget) : null));
 }

 get image() {
   return lang_indicator_t_get_prop_image(this.nativeObj);
 }

}

export class TLineNumber extends TWidget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new TLineNumber(line_number_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 setTopMargin(top_margin) {
   return line_number_set_top_margin(this.nativeObj, top_margin);
 }

 setBottomMargin(bottom_margin) {
   return line_number_set_bottom_margin(this.nativeObj, bottom_margin);
 }

 setLineHeight(line_height) {
   return line_number_set_line_height(this.nativeObj, line_height);
 }

 setYoffset(yoffset) {
   return line_number_set_yoffset(this.nativeObj, yoffset);
 }

 static cast(widget) {
   return new TLineNumber(line_number_cast(widget ? (widget.nativeObj || widget) : null));
 }

}

export class TMledit extends TWidget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new TMledit(mledit_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 setReadonly(readonly) {
   return mledit_set_readonly(this.nativeObj, readonly);
 }

 setCancelable(cancelable) {
   return mledit_set_cancelable(this.nativeObj, cancelable);
 }

 setFocus(focus) {
   return mledit_set_focus(this.nativeObj, focus);
 }

 setWrapWord(wrap_word) {
   return mledit_set_wrap_word(this.nativeObj, wrap_word);
 }

 setMaxLines(max_lines) {
   return mledit_set_max_lines(this.nativeObj, max_lines);
 }

 setMaxChars(max_chars) {
   return mledit_set_max_chars(this.nativeObj, max_chars);
 }

 setTips(tips) {
   return mledit_set_tips(this.nativeObj, tips);
 }

 setTrTips(tr_tips) {
   return mledit_set_tr_tips(this.nativeObj, tr_tips);
 }

 setKeyboard(keyboard) {
   return mledit_set_keyboard(this.nativeObj, keyboard);
 }

 setCursor(cursor) {
   return mledit_set_cursor(this.nativeObj, cursor);
 }

 getCursor() {
   return mledit_get_cursor(this.nativeObj);
 }

 setScrollLine(scroll_line) {
   return mledit_set_scroll_line(this.nativeObj, scroll_line);
 }

 scrollToOffset(offset) {
   return mledit_scroll_to_offset(this.nativeObj, offset);
 }

 setOpenImWhenFocused(open_im_when_focused) {
   return mledit_set_open_im_when_focused(this.nativeObj, open_im_when_focused);
 }

 setCloseImWhenBlured(close_im_when_blured) {
   return mledit_set_close_im_when_blured(this.nativeObj, close_im_when_blured);
 }

 setSelect(start, end) {
   return mledit_set_select(this.nativeObj, start, end);
 }

 getSelectedText() {
   return mledit_get_selected_text(this.nativeObj);
 }

 static cast(widget) {
   return new TMledit(mledit_cast(widget ? (widget.nativeObj || widget) : null));
 }

 get tips() {
   return mledit_t_get_prop_tips(this.nativeObj);
 }

 get trTips() {
   return mledit_t_get_prop_tr_tips(this.nativeObj);
 }

 get keyboard() {
   return mledit_t_get_prop_keyboard(this.nativeObj);
 }

 get maxLines() {
   return mledit_t_get_prop_max_lines(this.nativeObj);
 }

 get maxChars() {
   return mledit_t_get_prop_max_chars(this.nativeObj);
 }

 get wrapWord() {
   return mledit_t_get_prop_wrap_word(this.nativeObj);
 }

 get scrollLine() {
   return mledit_t_get_prop_scroll_line(this.nativeObj);
 }

 get readonly() {
   return mledit_t_get_prop_readonly(this.nativeObj);
 }

 get cancelable() {
   return mledit_t_get_prop_cancelable(this.nativeObj);
 }

 get openImWhenFocused() {
   return mledit_t_get_prop_open_im_when_focused(this.nativeObj);
 }

 get closeImWhenBlured() {
   return mledit_t_get_prop_close_im_when_blured(this.nativeObj);
 }

}

export class TProgressCircle extends TWidget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new TProgressCircle(progress_circle_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new TProgressCircle(progress_circle_cast(widget ? (widget.nativeObj || widget) : null));
 }

 setValue(value) {
   return progress_circle_set_value(this.nativeObj, value);
 }

 setMax(max) {
   return progress_circle_set_max(this.nativeObj, max);
 }

 setFormat(format) {
   return progress_circle_set_format(this.nativeObj, format);
 }

 setLineWidth(line_width) {
   return progress_circle_set_line_width(this.nativeObj, line_width);
 }

 setStartAngle(start_angle) {
   return progress_circle_set_start_angle(this.nativeObj, start_angle);
 }

 setLineCap(line_cap) {
   return progress_circle_set_line_cap(this.nativeObj, line_cap);
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

 get format() {
   return progress_circle_t_get_prop_format(this.nativeObj);
 }

 get startAngle() {
   return progress_circle_t_get_prop_start_angle(this.nativeObj);
 }

 get lineWidth() {
   return progress_circle_t_get_prop_line_width(this.nativeObj);
 }

 get lineCap() {
   return progress_circle_t_get_prop_line_cap(this.nativeObj);
 }

 get counterClockWise() {
   return progress_circle_t_get_prop_counter_clock_wise(this.nativeObj);
 }

 get showText() {
   return progress_circle_t_get_prop_show_text(this.nativeObj);
 }

}

export class TRichTextView extends TWidget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new TRichTextView(rich_text_view_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new TRichTextView(rich_text_view_cast(widget ? (widget.nativeObj || widget) : null));
 }

}

export class TRichText extends TWidget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new TRichText(rich_text_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 setText(text) {
   return rich_text_set_text(this.nativeObj, text);
 }

 setYslidable(yslidable) {
   return rich_text_set_yslidable(this.nativeObj, yslidable);
 }

 static cast(widget) {
   return new TRichText(rich_text_cast(widget ? (widget.nativeObj || widget) : null));
 }

 get lineGap() {
   return rich_text_t_get_prop_line_gap(this.nativeObj);
 }

 get yslidable() {
   return rich_text_t_get_prop_yslidable(this.nativeObj);
 }

}

export class THscrollLabel extends TWidget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new THscrollLabel(hscroll_label_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 setLull(lull) {
   return hscroll_label_set_lull(this.nativeObj, lull);
 }

 setDuration(duration) {
   return hscroll_label_set_duration(this.nativeObj, duration);
 }

 setOnlyFocus(only_focus) {
   return hscroll_label_set_only_focus(this.nativeObj, only_focus);
 }

 setOnlyParentFocus(only_parent_focus) {
   return hscroll_label_set_only_parent_focus(this.nativeObj, only_parent_focus);
 }

 setLoop(loop) {
   return hscroll_label_set_loop(this.nativeObj, loop);
 }

 setYoyo(yoyo) {
   return hscroll_label_set_yoyo(this.nativeObj, yoyo);
 }

 setEllipses(ellipses) {
   return hscroll_label_set_ellipses(this.nativeObj, ellipses);
 }

 setXoffset(xoffset) {
   return hscroll_label_set_xoffset(this.nativeObj, xoffset);
 }

 start() {
   return hscroll_label_start(this.nativeObj);
 }

 stop() {
   return hscroll_label_stop(this.nativeObj);
 }

 static cast(widget) {
   return new THscrollLabel(hscroll_label_cast(widget ? (widget.nativeObj || widget) : null));
 }

 get onlyFocus() {
   return hscroll_label_t_get_prop_only_focus(this.nativeObj);
 }

 get onlyParentFocus() {
   return hscroll_label_t_get_prop_only_parent_focus(this.nativeObj);
 }

 get loop() {
   return hscroll_label_t_get_prop_loop(this.nativeObj);
 }

 get yoyo() {
   return hscroll_label_t_get_prop_yoyo(this.nativeObj);
 }

 get ellipses() {
   return hscroll_label_t_get_prop_ellipses(this.nativeObj);
 }

 get lull() {
   return hscroll_label_t_get_prop_lull(this.nativeObj);
 }

 get duration() {
   return hscroll_label_t_get_prop_duration(this.nativeObj);
 }

 get xoffset() {
   return hscroll_label_t_get_prop_xoffset(this.nativeObj);
 }

 get textW() {
   return hscroll_label_t_get_prop_text_w(this.nativeObj);
 }

}

export class TListItem extends TWidget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new TListItem(list_item_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new TListItem(list_item_cast(widget ? (widget.nativeObj || widget) : null));
 }

}

export class TListViewH extends TWidget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new TListViewH(list_view_h_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 setItemWidth(item_width) {
   return list_view_h_set_item_width(this.nativeObj, item_width);
 }

 setSpacing(spacing) {
   return list_view_h_set_spacing(this.nativeObj, spacing);
 }

 static cast(widget) {
   return new TListViewH(list_view_h_cast(widget ? (widget.nativeObj || widget) : null));
 }

 get itemWidth() {
   return list_view_h_t_get_prop_item_width(this.nativeObj);
 }

 get spacing() {
   return list_view_h_t_get_prop_spacing(this.nativeObj);
 }

}

export class TListView extends TWidget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new TListView(list_view_create(parent ? parent.nativeObj : null, x, y, w, h));
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

 setFloatingScrollBar(floating_scroll_bar) {
   return list_view_set_floating_scroll_bar(this.nativeObj, floating_scroll_bar);
 }

 static cast(widget) {
   return new TListView(list_view_cast(widget ? (widget.nativeObj || widget) : null));
 }

 reinit() {
   return list_view_reinit(this.nativeObj);
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

 get floatingScrollBar() {
   return list_view_t_get_prop_floating_scroll_bar(this.nativeObj);
 }

}

export class TScrollBar extends TWidget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new TScrollBar(scroll_bar_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new TScrollBar(scroll_bar_cast(widget ? (widget.nativeObj || widget) : null));
 }

 static createMobile(parent, x, y, w, h) {
   return new TScrollBar(scroll_bar_create_mobile(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static createDesktop(parent, x, y, w, h) {
   return new TScrollBar(scroll_bar_create_desktop(parent ? parent.nativeObj : null, x, y, w, h));
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

 setAutoHide(auto_hide) {
   return scroll_bar_set_auto_hide(this.nativeObj, auto_hide);
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

 get autoHide() {
   return scroll_bar_t_get_prop_auto_hide(this.nativeObj);
 }

}

export class TScrollView extends TWidget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new TScrollView(scroll_view_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new TScrollView(scroll_view_cast(widget ? (widget.nativeObj || widget) : null));
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

 setSnapToPage(snap_to_page) {
   return scroll_view_set_snap_to_page(this.nativeObj, snap_to_page);
 }

 setMoveToPage(move_to_page) {
   return scroll_view_set_move_to_page(this.nativeObj, move_to_page);
 }

 setRecursive(recursive) {
   return scroll_view_set_recursive(this.nativeObj, recursive);
 }

 setRecursiveOnly(recursive) {
   return scroll_view_set_recursive_only(this.nativeObj, recursive);
 }

 setOffset(xoffset, yoffset) {
   return scroll_view_set_offset(this.nativeObj, xoffset, yoffset);
 }

 setSpeedScale(xspeed_scale, yspeed_scale) {
   return scroll_view_set_speed_scale(this.nativeObj, xspeed_scale, yspeed_scale);
 }

 scrollTo(xoffset_end, yoffset_end, duration) {
   return scroll_view_scroll_to(this.nativeObj, xoffset_end, yoffset_end, duration);
 }

 scrollDeltaTo(xoffset_delta, yoffset_delta, duration) {
   return scroll_view_scroll_delta_to(this.nativeObj, xoffset_delta, yoffset_delta, duration);
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

 get xspeedScale() {
   return scroll_view_t_get_prop_xspeed_scale(this.nativeObj);
 }

 get yspeedScale() {
   return scroll_view_t_get_prop_yspeed_scale(this.nativeObj);
 }

 get xslidable() {
   return scroll_view_t_get_prop_xslidable(this.nativeObj);
 }

 get yslidable() {
   return scroll_view_t_get_prop_yslidable(this.nativeObj);
 }

 get snapToPage() {
   return scroll_view_t_get_prop_snap_to_page(this.nativeObj);
 }

 get moveToPage() {
   return scroll_view_t_get_prop_move_to_page(this.nativeObj);
 }

 get recursive() {
   return scroll_view_t_get_prop_recursive(this.nativeObj);
 }

}

export class TSlideMenu extends TWidget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new TSlideMenu(slide_menu_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new TSlideMenu(slide_menu_cast(widget ? (widget.nativeObj || widget) : null));
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

export class TSlideIndicator extends TWidget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new TSlideIndicator(slide_indicator_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static createLinear(parent, x, y, w, h) {
   return new TSlideIndicator(slide_indicator_create_linear(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static createArc(parent, x, y, w, h) {
   return new TSlideIndicator(slide_indicator_create_arc(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new TSlideIndicator(slide_indicator_cast(widget ? (widget.nativeObj || widget) : null));
 }

 setValue(value) {
   return slide_indicator_set_value(this.nativeObj, value);
 }

 setMax(max) {
   return slide_indicator_set_max(this.nativeObj, max);
 }

 setDefaultPaint(default_paint) {
   return slide_indicator_set_default_paint(this.nativeObj, default_paint);
 }

 setAutoHide(auto_hide) {
   return slide_indicator_set_auto_hide(this.nativeObj, auto_hide);
 }

 setMargin(margin) {
   return slide_indicator_set_margin(this.nativeObj, margin);
 }

 setSpacing(spacing) {
   return slide_indicator_set_spacing(this.nativeObj, spacing);
 }

 setSize(size) {
   return slide_indicator_set_size(this.nativeObj, size);
 }

 setAnchor(anchor_x, anchor_y) {
   return slide_indicator_set_anchor(this.nativeObj, anchor_x, anchor_y);
 }

 setIndicatedTarget(target_name) {
   return slide_indicator_set_indicated_target(this.nativeObj, target_name);
 }

 get value() {
   return slide_indicator_t_get_prop_value(this.nativeObj);
 }

 get max() {
   return slide_indicator_t_get_prop_max(this.nativeObj);
 }

 get defaultPaint() {
   return slide_indicator_t_get_prop_default_paint(this.nativeObj);
 }

 get autoHide() {
   return slide_indicator_t_get_prop_auto_hide(this.nativeObj);
 }

 get margin() {
   return slide_indicator_t_get_prop_margin(this.nativeObj);
 }

 get spacing() {
   return slide_indicator_t_get_prop_spacing(this.nativeObj);
 }

 get size() {
   return slide_indicator_t_get_prop_size(this.nativeObj);
 }

 get anchorX() {
   return slide_indicator_t_get_prop_anchor_x(this.nativeObj);
 }

 get anchorY() {
   return slide_indicator_t_get_prop_anchor_y(this.nativeObj);
 }

 get indicatedTarget() {
   return slide_indicator_t_get_prop_indicated_target(this.nativeObj);
 }

}

export class TSlideView extends TWidget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new TSlideView(slide_view_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new TSlideView(slide_view_cast(widget ? (widget.nativeObj || widget) : null));
 }

 setAutoPlay(auto_play) {
   return slide_view_set_auto_play(this.nativeObj, auto_play);
 }

 setActive(index) {
   return slide_view_set_active(this.nativeObj, index);
 }

 setActiveEx(index, animate) {
   return slide_view_set_active_ex(this.nativeObj, index, animate);
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

 removeIndex(index) {
   return slide_view_remove_index(this.nativeObj, index);
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

export class TSwitch extends TWidget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new TSwitch(switch_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 setValue(value) {
   return switch_set_value(this.nativeObj, value);
 }

 static cast(widget) {
   return new TSwitch(switch_cast(widget ? (widget.nativeObj || widget) : null));
 }

 get value() {
   return switch_t_get_prop_value(this.nativeObj);
 }

 get maxXoffsetRatio() {
   return switch_t_get_prop_max_xoffset_ratio(this.nativeObj);
 }

}

export class TTextSelector extends TWidget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new TTextSelector(text_selector_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new TTextSelector(text_selector_cast(widget ? (widget.nativeObj || widget) : null));
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

 setRangeOptionsEx(start, nr, step, format) {
   return text_selector_set_range_options_ex(this.nativeObj, start, nr, step, format);
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

 getTextValue() {
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

 setLocalizeOptions(localize_options) {
   return text_selector_set_localize_options(this.nativeObj, localize_options);
 }

 setLoopOptions(loop_options) {
   return text_selector_set_loop_options(this.nativeObj, loop_options);
 }

 setYspeedScale(yspeed_scale) {
   return text_selector_set_yspeed_scale(this.nativeObj, yspeed_scale);
 }

 setAnimatingTime(animating_time) {
   return text_selector_set_animating_time(this.nativeObj, animating_time);
 }

 setEnableValueAnimator(enable_value_animator) {
   return text_selector_set_enable_value_animator(this.nativeObj, enable_value_animator);
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

 get yspeedScale() {
   return text_selector_t_get_prop_yspeed_scale(this.nativeObj);
 }

 get animatingTime() {
   return text_selector_t_get_prop_animating_time(this.nativeObj);
 }

 get localizeOptions() {
   return text_selector_t_get_prop_localize_options(this.nativeObj);
 }

 get loopOptions() {
   return text_selector_t_get_prop_loop_options(this.nativeObj);
 }

 get enableValueAnimator() {
   return text_selector_t_get_prop_enable_value_animator(this.nativeObj);
 }

}

export class TTimeClock extends TWidget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new TTimeClock(time_clock_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new TTimeClock(time_clock_cast(widget ? (widget.nativeObj || widget) : null));
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

 setHourAnchor(anchor_x, anchor_y) {
   return time_clock_set_hour_anchor(this.nativeObj, anchor_x, anchor_y);
 }

 setMinuteAnchor(anchor_x, anchor_y) {
   return time_clock_set_minute_anchor(this.nativeObj, anchor_x, anchor_y);
 }

 setSecondAnchor(anchor_x, anchor_y) {
   return time_clock_set_second_anchor(this.nativeObj, anchor_x, anchor_y);
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

 get hourAnchorX() {
   return time_clock_t_get_prop_hour_anchor_x(this.nativeObj);
 }

 get hourAnchorY() {
   return time_clock_t_get_prop_hour_anchor_y(this.nativeObj);
 }

 get minuteAnchorX() {
   return time_clock_t_get_prop_minute_anchor_x(this.nativeObj);
 }

 get minuteAnchorY() {
   return time_clock_t_get_prop_minute_anchor_y(this.nativeObj);
 }

 get secondAnchorX() {
   return time_clock_t_get_prop_second_anchor_x(this.nativeObj);
 }

 get secondAnchorY() {
   return time_clock_t_get_prop_second_anchor_y(this.nativeObj);
 }

}

export class TVpage extends TWidget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new TVpage(vpage_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new TVpage(vpage_cast(widget ? (widget.nativeObj || widget) : null));
 }

 setUiAsset(ui_asset) {
   return vpage_set_ui_asset(this.nativeObj, ui_asset);
 }

 setAnimHint(anim_hint) {
   return vpage_set_anim_hint(this.nativeObj, anim_hint);
 }

 get uiAsset() {
   return vpage_t_get_prop_ui_asset(this.nativeObj);
 }

 get animHint() {
   return vpage_t_get_prop_anim_hint(this.nativeObj);
 }

}

export class TPropChangeEvent extends TEvent {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static cast(event) {
   return new TPropChangeEvent(prop_change_event_cast(event ? (event.nativeObj || event) : null));
 }

 get name() {
   return prop_change_event_t_get_prop_name(this.nativeObj);
 }

 get value() {
   return prop_change_event_t_get_prop_value(this.nativeObj);
 }

}

export class TProgressEvent extends TEvent {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static cast(event) {
   return new TProgressEvent(progress_event_cast(event ? (event.nativeObj || event) : null));
 }

 get percent() {
   return progress_event_t_get_prop_percent(this.nativeObj);
 }

}

export class TDoneEvent extends TEvent {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static cast(event) {
   return new TDoneEvent(done_event_cast(event ? (event.nativeObj || event) : null));
 }

 get result() {
   return done_event_t_get_prop_result(this.nativeObj);
 }

}

export class TErrorEvent extends TEvent {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static cast(event) {
   return new TErrorEvent(error_event_cast(event ? (event.nativeObj || event) : null));
 }

 get code() {
   return error_event_t_get_prop_code(this.nativeObj);
 }

 get message() {
   return error_event_t_get_prop_message(this.nativeObj);
 }

}

export class TCmdExecEvent extends TEvent {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static cast(event) {
   return new TCmdExecEvent(cmd_exec_event_cast(event ? (event.nativeObj || event) : null));
 }

 get name() {
   return cmd_exec_event_t_get_prop_name(this.nativeObj);
 }

 get args() {
   return cmd_exec_event_t_get_prop_args(this.nativeObj);
 }

 get result() {
   return cmd_exec_event_t_get_prop_result(this.nativeObj);
 }

 get canExec() {
   return cmd_exec_event_t_get_prop_can_exec(this.nativeObj);
 }

}

export class TAppBar extends TWidget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new TAppBar(app_bar_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new TAppBar(app_bar_cast(widget ? (widget.nativeObj || widget) : null));
 }

}

export class TButtonGroup extends TWidget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new TButtonGroup(button_group_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new TButtonGroup(button_group_cast(widget ? (widget.nativeObj || widget) : null));
 }

}

export class TButton extends TWidget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new TButton(button_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new TButton(button_cast(widget ? (widget.nativeObj || widget) : null));
 }

 setRepeat(repeat) {
   return button_set_repeat(this.nativeObj, repeat);
 }

 setLongPressTime(long_press_time) {
   return button_set_long_press_time(this.nativeObj, long_press_time);
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

 get longPressTime() {
   return button_t_get_prop_long_press_time(this.nativeObj);
 }

}

export class TCheckButton extends TWidget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new TCheckButton(check_button_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static createRadio(parent, x, y, w, h) {
   return new TCheckButton(check_button_create_radio(parent ? parent.nativeObj : null, x, y, w, h));
 }

 setValue(value) {
   return check_button_set_value(this.nativeObj, value);
 }

 static cast(widget) {
   return new TCheckButton(check_button_cast(widget ? (widget.nativeObj || widget) : null));
 }

 get value() {
   return check_button_t_get_prop_value(this.nativeObj);
 }

}

export class TClipView extends TWidget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new TClipView(clip_view_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new TClipView(clip_view_cast(widget ? (widget.nativeObj || widget) : null));
 }

}

export class TColorTile extends TWidget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new TColorTile(color_tile_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new TColorTile(color_tile_cast(widget ? (widget.nativeObj || widget) : null));
 }

 setBgColor(color) {
   return color_tile_set_bg_color(this.nativeObj, color);
 }

 getBgColor() {
   return color_tile_get_bg_color(this.nativeObj);
 }

 getBorderColor() {
   return color_tile_get_border_color(this.nativeObj);
 }

 get bgColor() {
   return color_tile_t_get_prop_bg_color(this.nativeObj);
 }

 get borderColor() {
   return color_tile_t_get_prop_border_color(this.nativeObj);
 }

}

export class TColumn extends TWidget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new TColumn(column_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new TColumn(column_cast(widget ? (widget.nativeObj || widget) : null));
 }

}

export class TComboBoxItem extends TWidget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new TComboBoxItem(combo_box_item_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new TComboBoxItem(combo_box_item_cast(widget ? (widget.nativeObj || widget) : null));
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

export class TDialogClient extends TWidget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new TDialogClient(dialog_client_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new TDialogClient(dialog_client_cast(widget ? (widget.nativeObj || widget) : null));
 }

}

export class TDialogTitle extends TWidget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new TDialogTitle(dialog_title_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new TDialogTitle(dialog_title_cast(widget ? (widget.nativeObj || widget) : null));
 }

}

export class TDigitClock extends TWidget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new TDigitClock(digit_clock_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new TDigitClock(digit_clock_cast(widget ? (widget.nativeObj || widget) : null));
 }

 setFormat(format) {
   return digit_clock_set_format(this.nativeObj, format);
 }

 get format() {
   return digit_clock_t_get_prop_format(this.nativeObj);
 }

}

export class TDragger extends TWidget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new TDragger(dragger_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new TDragger(dragger_cast(widget ? (widget.nativeObj || widget) : null));
 }

 setRange(x_min, y_min, x_max, y_max) {
   return dragger_set_range(this.nativeObj, x_min, y_min, x_max, y_max);
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

export class TEdit extends TWidget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new TEdit(edit_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new TEdit(edit_cast(widget ? (widget.nativeObj || widget) : null));
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

 setCancelable(cancelable) {
   return edit_set_cancelable(this.nativeObj, cancelable);
 }

 setAutoFix(auto_fix) {
   return edit_set_auto_fix(this.nativeObj, auto_fix);
 }

 setSelectNoneWhenFocused(select_none_when_focused) {
   return edit_set_select_none_when_focused(this.nativeObj, select_none_when_focused);
 }

 setOpenImWhenFocused(open_im_when_focused) {
   return edit_set_open_im_when_focused(this.nativeObj, open_im_when_focused);
 }

 setCloseImWhenBlured(close_im_when_blured) {
   return edit_set_close_im_when_blured(this.nativeObj, close_im_when_blured);
 }

 setInputType(type) {
   return edit_set_input_type(this.nativeObj, type);
 }

 setActionText(action_text) {
   return edit_set_action_text(this.nativeObj, action_text);
 }

 setTips(tips) {
   return edit_set_tips(this.nativeObj, tips);
 }

 setTrTips(tr_tips) {
   return edit_set_tr_tips(this.nativeObj, tr_tips);
 }

 setKeyboard(keyboard) {
   return edit_set_keyboard(this.nativeObj, keyboard);
 }

 setPasswordVisible(password_visible) {
   return edit_set_password_visible(this.nativeObj, password_visible);
 }

 setFocus(focus) {
   return edit_set_focus(this.nativeObj, focus);
 }

 setCursor(cursor) {
   return edit_set_cursor(this.nativeObj, cursor);
 }

 getCursor() {
   return edit_get_cursor(this.nativeObj);
 }

 setSelect(start, end) {
   return edit_set_select(this.nativeObj, start, end);
 }

 getSelectedText() {
   return edit_get_selected_text(this.nativeObj);
 }

 get tips() {
   return edit_t_get_prop_tips(this.nativeObj);
 }

 get trTips() {
   return edit_t_get_prop_tr_tips(this.nativeObj);
 }

 get actionText() {
   return edit_t_get_prop_action_text(this.nativeObj);
 }

 get keyboard() {
   return edit_t_get_prop_keyboard(this.nativeObj);
 }

 get min() {
   return edit_t_get_prop_min(this.nativeObj);
 }

 get max() {
   return edit_t_get_prop_max(this.nativeObj);
 }

 get step() {
   return edit_t_get_prop_step(this.nativeObj);
 }

 get inputType() {
   return edit_t_get_prop_input_type(this.nativeObj);
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

 get selectNoneWhenFocused() {
   return edit_t_get_prop_select_none_when_focused(this.nativeObj);
 }

 get openImWhenFocused() {
   return edit_t_get_prop_open_im_when_focused(this.nativeObj);
 }

 get closeImWhenBlured() {
   return edit_t_get_prop_close_im_when_blured(this.nativeObj);
 }

 get cancelable() {
   return edit_t_get_prop_cancelable(this.nativeObj);
 }

}

export class TGridItem extends TWidget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new TGridItem(grid_item_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new TGridItem(grid_item_cast(widget ? (widget.nativeObj || widget) : null));
 }

}

export class TGrid extends TWidget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new TGrid(grid_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new TGrid(grid_cast(widget ? (widget.nativeObj || widget) : null));
 }

}

export class TGroupBox extends TWidget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new TGroupBox(group_box_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new TGroupBox(group_box_cast(widget ? (widget.nativeObj || widget) : null));
 }

}

export class TLabel extends TWidget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new TLabel(label_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 setLength(length) {
   return label_set_length(this.nativeObj, length);
 }

 setMaxW(max_w) {
   return label_set_max_w(this.nativeObj, max_w);
 }

 setLineWrap(line_wrap) {
   return label_set_line_wrap(this.nativeObj, line_wrap);
 }

 setWordWrap(word_wrap) {
   return label_set_word_wrap(this.nativeObj, word_wrap);
 }

 resizeToContent(min_w, max_w, min_h, max_h) {
   return label_resize_to_content(this.nativeObj, min_w, max_w, min_h, max_h);
 }

 static cast(widget) {
   return new TLabel(label_cast(widget ? (widget.nativeObj || widget) : null));
 }

 get length() {
   return label_t_get_prop_length(this.nativeObj);
 }

 get lineWrap() {
   return label_t_get_prop_line_wrap(this.nativeObj);
 }

 get wordWrap() {
   return label_t_get_prop_word_wrap(this.nativeObj);
 }

 get maxW() {
   return label_t_get_prop_max_w(this.nativeObj);
 }

}

export class TPages extends TWidget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new TPages(pages_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new TPages(pages_cast(widget ? (widget.nativeObj || widget) : null));
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

export class TProgressBar extends TWidget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new TProgressBar(progress_bar_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new TProgressBar(progress_bar_cast(widget ? (widget.nativeObj || widget) : null));
 }

 setValue(value) {
   return progress_bar_set_value(this.nativeObj, value);
 }

 setMax(max) {
   return progress_bar_set_max(this.nativeObj, max);
 }

 setFormat(format) {
   return progress_bar_set_format(this.nativeObj, format);
 }

 setVertical(vertical) {
   return progress_bar_set_vertical(this.nativeObj, vertical);
 }

 setShowText(show_text) {
   return progress_bar_set_show_text(this.nativeObj, show_text);
 }

 setReverse(reverse) {
   return progress_bar_set_reverse(this.nativeObj, reverse);
 }

 getPercent() {
   return progress_bar_get_percent(this.nativeObj);
 }

 get value() {
   return progress_bar_t_get_prop_value(this.nativeObj);
 }

 get max() {
   return progress_bar_t_get_prop_max(this.nativeObj);
 }

 get format() {
   return progress_bar_t_get_prop_format(this.nativeObj);
 }

 get vertical() {
   return progress_bar_t_get_prop_vertical(this.nativeObj);
 }

 get showText() {
   return progress_bar_t_get_prop_show_text(this.nativeObj);
 }

 get reverse() {
   return progress_bar_t_get_prop_reverse(this.nativeObj);
 }

}

export class TRow extends TWidget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new TRow(row_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new TRow(row_cast(widget ? (widget.nativeObj || widget) : null));
 }

}

export class TSlider extends TWidget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new TSlider(slider_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new TSlider(slider_cast(widget ? (widget.nativeObj || widget) : null));
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

 get draggerSize() {
   return slider_t_get_prop_dragger_size(this.nativeObj);
 }

 get draggerAdaptToIcon() {
   return slider_t_get_prop_dragger_adapt_to_icon(this.nativeObj);
 }

 get slideWithBar() {
   return slider_t_get_prop_slide_with_bar(this.nativeObj);
 }

}

export class TTabButtonGroup extends TWidget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new TTabButtonGroup(tab_button_group_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 setCompact(compact) {
   return tab_button_group_set_compact(this.nativeObj, compact);
 }

 setScrollable(scrollable) {
   return tab_button_group_set_scrollable(this.nativeObj, scrollable);
 }

 static cast(widget) {
   return new TTabButtonGroup(tab_button_group_cast(widget ? (widget.nativeObj || widget) : null));
 }

 get compact() {
   return tab_button_group_t_get_prop_compact(this.nativeObj);
 }

 get scrollable() {
   return tab_button_group_t_get_prop_scrollable(this.nativeObj);
 }

}

export class TTabButton extends TWidget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new TTabButton(tab_button_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new TTabButton(tab_button_cast(widget ? (widget.nativeObj || widget) : null));
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

 setLoadUi(name) {
   return tab_button_set_load_ui(this.nativeObj, name);
 }

 get value() {
   return tab_button_t_get_prop_value(this.nativeObj);
 }

 get loadUi() {
   return tab_button_t_get_prop_load_ui(this.nativeObj);
 }

 get activeIcon() {
   return tab_button_t_get_prop_active_icon(this.nativeObj);
 }

 get icon() {
   return tab_button_t_get_prop_icon(this.nativeObj);
 }

}

export class TTabControl extends TWidget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new TTabControl(tab_control_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new TTabControl(tab_control_cast(widget ? (widget.nativeObj || widget) : null));
 }

}

export class TView extends TWidget {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new TView(view_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 setDefaultFocusedChild(default_focused_child) {
   return view_set_default_focused_child(this.nativeObj, default_focused_child);
 }

 static cast(widget) {
   return new TView(view_cast(widget ? (widget.nativeObj || widget) : null));
 }

 get defaultFocusedChild() {
   return view_t_get_prop_default_focused_child(this.nativeObj);
 }

}

export class TDialog extends TWindowBase {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new TDialog(dialog_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static createSimple(parent, x, y, w, h) {
   return new TDialog(dialog_create_simple(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new TDialog(dialog_cast(widget ? (widget.nativeObj || widget) : null));
 }

 getTitle() {
   return new TWidget(dialog_get_title(this.nativeObj));
 }

 getClient() {
   return new TWidget(dialog_get_client(this.nativeObj));
 }

 static open(name) {
   return new TDialog(dialog_open(name));
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

 static info(title, text) {
   return dialog_info(title, text);
 }

 static warn(title, text) {
   return dialog_warn(title, text);
 }

 static confirm(title, text) {
   return dialog_confirm(title, text);
 }

 get highlight() {
   return dialog_t_get_prop_highlight(this.nativeObj);
 }

}

export class TNativeWindow extends TObject {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 move(x, y, force) {
   return native_window_move(this.nativeObj, x, y, force);
 }

 resize(w, h, force) {
   return native_window_resize(this.nativeObj, w, h, force);
 }

 minimize() {
   return native_window_minimize(this.nativeObj);
 }

 maximize() {
   return native_window_maximize(this.nativeObj);
 }

 restore() {
   return native_window_restore(this.nativeObj);
 }

 center() {
   return native_window_center(this.nativeObj);
 }

 showBorder(show) {
   return native_window_show_border(this.nativeObj, show);
 }

 setFullscreen(fullscreen) {
   return native_window_set_fullscreen(this.nativeObj, fullscreen);
 }

 setCursor(name, img) {
   return native_window_set_cursor(this.nativeObj, name, img ? img.nativeObj : null);
 }

}

export class TWindow extends TWindowBase {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new TWindow(window_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static createDefault() {
   return new TWindow(window_create_default());
 }

 setFullscreen(fullscreen) {
   return window_set_fullscreen(this.nativeObj, fullscreen);
 }

 setAutoScaleChildren(design_w, design_h) {
   return window_set_auto_scale_children(this.nativeObj, design_w, design_h);
 }

 static open(name) {
   return new TWindow(window_open(name));
 }

 static openAndClose(name, to_close) {
   return new TWindow(window_open_and_close(name, to_close ? to_close.nativeObj : null));
 }

 close() {
   return window_close(this.nativeObj);
 }

 closeForce() {
   return window_close_force(this.nativeObj);
 }

 static cast(widget) {
   return new TWindow(window_cast(widget ? (widget.nativeObj || widget) : null));
 }

 get fullscreen() {
   return window_t_get_prop_fullscreen(this.nativeObj);
 }

}

export class TGifImage extends TImageBase {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new TGifImage(gif_image_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 play() {
   return gif_image_play(this.nativeObj);
 }

 stop() {
   return gif_image_stop(this.nativeObj);
 }

 pause() {
   return gif_image_pause(this.nativeObj);
 }

 static cast(widget) {
   return new TGifImage(gif_image_cast(widget ? (widget.nativeObj || widget) : null));
 }

}

export class TKeyboard extends TWindowBase {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new TKeyboard(keyboard_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new TKeyboard(keyboard_cast(widget ? (widget.nativeObj || widget) : null));
 }

}

export class TMutableImage extends TImageBase {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new TMutableImage(mutable_image_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

}

export class TSvgImage extends TImageBase {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new TSvgImage(svg_image_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 setImage(name) {
   return svg_image_set_image(this.nativeObj, name);
 }

 static cast(widget) {
   return new TSvgImage(svg_image_cast(widget ? (widget.nativeObj || widget) : null));
 }

}

export class TIdleInfo extends TObject {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static cast(idle) {
   return new TIdleInfo(idle_info_cast(idle ? (idle.nativeObj || idle) : null));
 }

 get ctx() {
   return idle_info_t_get_prop_ctx(this.nativeObj);
 }

 get extraCtx() {
   return idle_info_t_get_prop_extra_ctx(this.nativeObj);
 }

 get id() {
   return idle_info_t_get_prop_id(this.nativeObj);
 }

}

export class TObjectArray extends TObject {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create() {
   return new TObjectArray(object_array_create());
 }

 unref() {
   return object_array_unref(this.nativeObj);
 }

 clearProps() {
   return object_array_clear_props(this.nativeObj);
 }

 insert(index, v) {
   return object_array_insert(this.nativeObj, index, v ? v.nativeObj : null);
 }

 push(v) {
   return object_array_push(this.nativeObj, v ? v.nativeObj : null);
 }

 indexOf(v) {
   return object_array_index_of(this.nativeObj, v ? v.nativeObj : null);
 }

 lastIndexOf(v) {
   return object_array_last_index_of(this.nativeObj, v ? v.nativeObj : null);
 }

 remove(index) {
   return object_array_remove(this.nativeObj, index);
 }

 getAndRemove(index, v) {
   return object_array_get_and_remove(this.nativeObj, index, v ? v.nativeObj : null);
 }

 get size() {
   return object_array_t_get_prop_size(this.nativeObj);
 }

}

export class TObjectDefault extends TObject {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create() {
   return new TObjectDefault(object_default_create());
 }

 unref() {
   return object_default_unref(this.nativeObj);
 }

 clearProps() {
   return object_default_clear_props(this.nativeObj);
 }

 get propsSize() {
   return object_default_t_get_prop_props_size(this.nativeObj);
 }

}

export class TTimerInfo extends TObject {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static cast(timer) {
   return new TTimerInfo(timer_info_cast(timer ? (timer.nativeObj || timer) : null));
 }

 get ctx() {
   return timer_info_t_get_prop_ctx(this.nativeObj);
 }

 get extraCtx() {
   return timer_info_t_get_prop_extra_ctx(this.nativeObj);
 }

 get id() {
   return timer_info_t_get_prop_id(this.nativeObj);
 }

 get now() {
   return timer_info_t_get_prop_now(this.nativeObj);
 }

}

export class TCalibrationWin extends TWindowBase {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new TCalibrationWin(calibration_win_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new TCalibrationWin(calibration_win_cast(widget ? (widget.nativeObj || widget) : null));
 }

}

export class TComboBox extends TEdit {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new TComboBox(combo_box_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new TComboBox(combo_box_cast(widget ? (widget.nativeObj || widget) : null));
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

 setLocalizeOptions(localize_options) {
   return combo_box_set_localize_options(this.nativeObj, localize_options);
 }

 setValue(value) {
   return combo_box_set_value(this.nativeObj, value);
 }

 setItemHeight(item_height) {
   return combo_box_set_item_height(this.nativeObj, item_height);
 }

 appendOption(value, text) {
   return combo_box_append_option(this.nativeObj, value, text);
 }

 removeOption(value) {
   return combo_box_remove_option(this.nativeObj, value);
 }

 setOptions(options) {
   return combo_box_set_options(this.nativeObj, options);
 }

 getValue() {
   return combo_box_get_value(this.nativeObj);
 }

 getTextValue() {
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

 get localizeOptions() {
   return combo_box_t_get_prop_localize_options(this.nativeObj);
 }

 get options() {
   return combo_box_t_get_prop_options(this.nativeObj);
 }

 get itemHeight() {
   return combo_box_t_get_prop_item_height(this.nativeObj);
 }

}

export class TImage extends TImageBase {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new TImage(image_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 setDrawType(draw_type) {
   return image_set_draw_type(this.nativeObj, draw_type);
 }

 static cast(widget) {
   return new TImage(image_cast(widget ? (widget.nativeObj || widget) : null));
 }

 get drawType() {
   return image_t_get_prop_draw_type(this.nativeObj);
 }

}

export class TOverlay extends TWindowBase {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new TOverlay(overlay_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 setClickThrough(click_through) {
   return overlay_set_click_through(this.nativeObj, click_through);
 }

 setAlwaysOnTop(always_on_top) {
   return overlay_set_always_on_top(this.nativeObj, always_on_top);
 }

 static cast(widget) {
   return new TOverlay(overlay_cast(widget ? (widget.nativeObj || widget) : null));
 }

 get clickThrough() {
   return overlay_t_get_prop_click_through(this.nativeObj);
 }

 get alwaysOnTop() {
   return overlay_t_get_prop_always_on_top(this.nativeObj);
 }

}

export class TPopup extends TWindowBase {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new TPopup(popup_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new TPopup(popup_cast(widget ? (widget.nativeObj || widget) : null));
 }

 setCloseWhenClick(close_when_click) {
   return popup_set_close_when_click(this.nativeObj, close_when_click);
 }

 setCloseWhenClickOutside(close_when_click_outside) {
   return popup_set_close_when_click_outside(this.nativeObj, close_when_click_outside);
 }

 setCloseWhenTimeout(close_when_timeout) {
   return popup_set_close_when_timeout(this.nativeObj, close_when_timeout);
 }

 get closeWhenClick() {
   return popup_t_get_prop_close_when_click(this.nativeObj);
 }

 get closeWhenClickOutside() {
   return popup_t_get_prop_close_when_click_outside(this.nativeObj);
 }

 get closeWhenTimeout() {
   return popup_t_get_prop_close_when_timeout(this.nativeObj);
 }

}

export class TSpinBox extends TEdit {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new TSpinBox(spin_box_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new TSpinBox(spin_box_cast(widget ? (widget.nativeObj || widget) : null));
 }

}

export class TSystemBar extends TWindowBase {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new TSystemBar(system_bar_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

 static cast(widget) {
   return new TSystemBar(system_bar_cast(widget ? (widget.nativeObj || widget) : null));
 }

}

export class TComboBoxEx extends TComboBox {
 public nativeObj;
 constructor(nativeObj) {
   super(nativeObj);
 }

 static create(parent, x, y, w, h) {
   return new TComboBoxEx(combo_box_ex_create(parent ? parent.nativeObj : null, x, y, w, h));
 }

}

