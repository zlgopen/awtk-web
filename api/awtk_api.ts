
declare global {
    interface Window { Module: any; TBrowser:any}
}

var Module : any = window.Module || {};
var TBrowser: any = window.TBrowser || {};

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
const emitter_create = Module.cwrap("emitter_create", 
    "TEmitter", []);
const emitter_dispatch = Module.cwrap("emitter_dispatch", 
    "TRet", ["TEmitter","TEvent"]);
const emitter_dispatch_simple_event = Module.cwrap("emitter_dispatch_simple_event", 
    "TRet", ["TEmitter","number"]);
const emitter_on = Module.cwrap("emitter_on", 
    "number", ["TEmitter","TEventType","Function","any"]);
const emitter_off = Module.cwrap("emitter_off", 
    "TRet", ["TEmitter","number"]);
const emitter_enable = Module.cwrap("emitter_enable", 
    "TRet", ["TEmitter"]);
const emitter_disable = Module.cwrap("emitter_disable", 
    "TRet", ["TEmitter"]);
const emitter_destroy = Module.cwrap("emitter_destroy", 
    "TRet", ["TEmitter"]);
const emitter_cast = Module.cwrap("emitter_cast", 
    "TEmitter", ["TEmitter"]);
const rectf_t_get_prop_x = Module.cwrap("rectf_t_get_prop_x", 
    "number", ["number"]);
const rectf_t_get_prop_y = Module.cwrap("rectf_t_get_prop_y", 
    "number", ["number"]);
const rectf_t_get_prop_w = Module.cwrap("rectf_t_get_prop_w", 
    "number", ["number"]);
const rectf_t_get_prop_h = Module.cwrap("rectf_t_get_prop_h", 
    "number", ["number"]);
const rect_create = Module.cwrap("rect_create", 
    "TRect", ["number","number","number","number"]);
const rect_set = Module.cwrap("rect_set", 
    "TRect", ["TRect","number","number","number","number"]);
const rect_cast = Module.cwrap("rect_cast", 
    "TRect", ["TRect"]);
const rect_destroy = Module.cwrap("rect_destroy", 
    "TRet", ["TRect"]);
const rect_t_get_prop_x = Module.cwrap("rect_t_get_prop_x", 
    "number", ["number"]);
const rect_t_get_prop_y = Module.cwrap("rect_t_get_prop_y", 
    "number", ["number"]);
const rect_t_get_prop_w = Module.cwrap("rect_t_get_prop_w", 
    "number", ["number"]);
const rect_t_get_prop_h = Module.cwrap("rect_t_get_prop_h", 
    "number", ["number"]);
const bitmap_create = Module.cwrap("bitmap_create", 
    "TBitmap", []);
const bitmap_create_ex = Module.cwrap("bitmap_create_ex", 
    "TBitmap", ["number","number","number","TBitmapFormat"]);
const bitmap_get_bpp = Module.cwrap("bitmap_get_bpp", 
    "number", ["TBitmap"]);
const bitmap_destroy_with_self = Module.cwrap("bitmap_destroy_with_self", 
    "TRet", ["TBitmap"]);
const bitmap_get_bpp_of_format = Module.cwrap("bitmap_get_bpp_of_format", 
    "number", ["TBitmapFormat"]);
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
    "TRet", ["TObject"]);
const object_ref = Module.cwrap("object_ref", 
    "TObject", ["TObject"]);
const object_get_type = Module.cwrap("object_get_type", 
    "string", ["TObject"]);
const object_get_desc = Module.cwrap("object_get_desc", 
    "string", ["TObject"]);
const object_get_size = Module.cwrap("object_get_size", 
    "number", ["TObject"]);
const object_is_collection = Module.cwrap("object_is_collection", 
    "boolean", ["TObject"]);
const object_set_name = Module.cwrap("object_set_name", 
    "TRet", ["TObject","string"]);
const object_compare = Module.cwrap("object_compare", 
    "number", ["TObject","TObject"]);
const object_get_prop = Module.cwrap("object_get_prop", 
    "TRet", ["TObject","string","TValue"]);
const object_get_prop_str = Module.cwrap("object_get_prop_str", 
    "string", ["TObject","string"]);
const object_get_prop_pointer = Module.cwrap("object_get_prop_pointer", 
    "any", ["TObject","string"]);
const object_get_prop_object = Module.cwrap("object_get_prop_object", 
    "TObject", ["TObject","string"]);
const object_get_prop_int = Module.cwrap("object_get_prop_int", 
    "number", ["TObject","string","number"]);
const object_get_prop_bool = Module.cwrap("object_get_prop_bool", 
    "boolean", ["TObject","string","boolean"]);
const object_get_prop_float = Module.cwrap("object_get_prop_float", 
    "number", ["TObject","string","number"]);
const object_get_prop_double = Module.cwrap("object_get_prop_double", 
    "number", ["TObject","string","number"]);
const object_remove_prop = Module.cwrap("object_remove_prop", 
    "TRet", ["TObject","string"]);
const object_set_prop = Module.cwrap("object_set_prop", 
    "TRet", ["TObject","string","TValue"]);
const object_set_prop_str = Module.cwrap("object_set_prop_str", 
    "TRet", ["TObject","string","string"]);
const object_set_prop_object = Module.cwrap("object_set_prop_object", 
    "TRet", ["TObject","string","TObject"]);
const object_set_prop_int = Module.cwrap("object_set_prop_int", 
    "TRet", ["TObject","string","number"]);
const object_set_prop_bool = Module.cwrap("object_set_prop_bool", 
    "TRet", ["TObject","string","boolean"]);
const object_set_prop_float = Module.cwrap("object_set_prop_float", 
    "TRet", ["TObject","string","number"]);
const object_set_prop_double = Module.cwrap("object_set_prop_double", 
    "TRet", ["TObject","string","number"]);
const object_copy_prop = Module.cwrap("object_copy_prop", 
    "TRet", ["TObject","TObject","string"]);
const object_has_prop = Module.cwrap("object_has_prop", 
    "boolean", ["TObject","string"]);
const object_eval = Module.cwrap("object_eval", 
    "TRet", ["TObject","string","TValue"]);
const object_can_exec = Module.cwrap("object_can_exec", 
    "boolean", ["TObject","string","string"]);
const object_exec = Module.cwrap("object_exec", 
    "TRet", ["TObject","string","string"]);
const object_notify_changed = Module.cwrap("object_notify_changed", 
    "TRet", ["TObject"]);
const object_has_prop_by_path = Module.cwrap("object_has_prop_by_path", 
    "boolean", ["TObject","string"]);
const object_get_prop_str_by_path = Module.cwrap("object_get_prop_str_by_path", 
    "string", ["TObject","string"]);
const object_get_prop_pointer_by_path = Module.cwrap("object_get_prop_pointer_by_path", 
    "any", ["TObject","string"]);
const object_get_prop_object_by_path = Module.cwrap("object_get_prop_object_by_path", 
    "TObject", ["TObject","string"]);
const object_get_prop_int_by_path = Module.cwrap("object_get_prop_int_by_path", 
    "number", ["TObject","string","number"]);
const object_get_prop_bool_by_path = Module.cwrap("object_get_prop_bool_by_path", 
    "boolean", ["TObject","string","boolean"]);
const object_get_prop_float_by_path = Module.cwrap("object_get_prop_float_by_path", 
    "number", ["TObject","string","number"]);
const object_set_prop_by_path = Module.cwrap("object_set_prop_by_path", 
    "TRet", ["TObject","string","TValue"]);
const object_set_prop_str_by_path = Module.cwrap("object_set_prop_str_by_path", 
    "TRet", ["TObject","string","string"]);
const object_set_prop_object_by_path = Module.cwrap("object_set_prop_object_by_path", 
    "TRet", ["TObject","string","TObject"]);
const object_set_prop_int_by_path = Module.cwrap("object_set_prop_int_by_path", 
    "TRet", ["TObject","string","number"]);
const object_set_prop_bool_by_path = Module.cwrap("object_set_prop_bool_by_path", 
    "TRet", ["TObject","string","boolean"]);
const object_set_prop_float_by_path = Module.cwrap("object_set_prop_float_by_path", 
    "TRet", ["TObject","string","number"]);
const object_can_exec_by_path = Module.cwrap("object_can_exec_by_path", 
    "boolean", ["TObject","string","string"]);
const object_exec_by_path = Module.cwrap("object_exec_by_path", 
    "TRet", ["TObject","string","string"]);
const object_get_prop_int8 = Module.cwrap("object_get_prop_int8", 
    "number", ["TObject","string","number"]);
const object_set_prop_int8 = Module.cwrap("object_set_prop_int8", 
    "TRet", ["TObject","string","number"]);
const object_get_prop_uint8 = Module.cwrap("object_get_prop_uint8", 
    "number", ["TObject","string","number"]);
const object_set_prop_uint8 = Module.cwrap("object_set_prop_uint8", 
    "TRet", ["TObject","string","number"]);
const object_get_prop_int16 = Module.cwrap("object_get_prop_int16", 
    "number", ["TObject","string","number"]);
const object_set_prop_int16 = Module.cwrap("object_set_prop_int16", 
    "TRet", ["TObject","string","number"]);
const object_get_prop_uint16 = Module.cwrap("object_get_prop_uint16", 
    "number", ["TObject","string","number"]);
const object_set_prop_uint16 = Module.cwrap("object_set_prop_uint16", 
    "TRet", ["TObject","string","number"]);
const object_get_prop_int32 = Module.cwrap("object_get_prop_int32", 
    "number", ["TObject","string","number"]);
const object_set_prop_int32 = Module.cwrap("object_set_prop_int32", 
    "TRet", ["TObject","string","number"]);
const object_get_prop_uint32 = Module.cwrap("object_get_prop_uint32", 
    "number", ["TObject","string","number"]);
const object_set_prop_uint32 = Module.cwrap("object_set_prop_uint32", 
    "TRet", ["TObject","string","number"]);
const object_get_prop_int64 = Module.cwrap("object_get_prop_int64", 
    "number", ["TObject","string","number"]);
const object_set_prop_int64 = Module.cwrap("object_set_prop_int64", 
    "TRet", ["TObject","string","number"]);
const object_get_prop_uint64 = Module.cwrap("object_get_prop_uint64", 
    "number", ["TObject","string","number"]);
const object_set_prop_uint64 = Module.cwrap("object_set_prop_uint64", 
    "TRet", ["TObject","string","number"]);
const object_t_get_prop_ref_count = Module.cwrap("object_t_get_prop_ref_count", 
    "number", ["number"]);
const object_t_get_prop_name = Module.cwrap("object_t_get_prop_name", 
    "string", ["number"]);
const value_set_bool = Module.cwrap("value_set_bool", 
    "TValue", ["TValue","boolean"]);
const value_bool = Module.cwrap("value_bool", 
    "boolean", ["TValue"]);
const value_set_int8 = Module.cwrap("value_set_int8", 
    "TValue", ["TValue","number"]);
const value_int8 = Module.cwrap("value_int8", 
    "number", ["TValue"]);
const value_set_uint8 = Module.cwrap("value_set_uint8", 
    "TValue", ["TValue","number"]);
const value_uint8 = Module.cwrap("value_uint8", 
    "number", ["TValue"]);
const value_set_int16 = Module.cwrap("value_set_int16", 
    "TValue", ["TValue","number"]);
const value_int16 = Module.cwrap("value_int16", 
    "number", ["TValue"]);
const value_set_uint16 = Module.cwrap("value_set_uint16", 
    "TValue", ["TValue","number"]);
const value_uint16 = Module.cwrap("value_uint16", 
    "number", ["TValue"]);
const value_set_int32 = Module.cwrap("value_set_int32", 
    "TValue", ["TValue","number"]);
const value_int32 = Module.cwrap("value_int32", 
    "number", ["TValue"]);
const value_set_uint32 = Module.cwrap("value_set_uint32", 
    "TValue", ["TValue","number"]);
const value_set_int64 = Module.cwrap("value_set_int64", 
    "TValue", ["TValue","number"]);
const value_int64 = Module.cwrap("value_int64", 
    "number", ["TValue"]);
const value_set_uint64 = Module.cwrap("value_set_uint64", 
    "TValue", ["TValue","number"]);
const value_uint64 = Module.cwrap("value_uint64", 
    "number", ["TValue"]);
const value_set_float = Module.cwrap("value_set_float", 
    "TValue", ["TValue","number"]);
const value_float32 = Module.cwrap("value_float32", 
    "number", ["TValue"]);
const value_set_double = Module.cwrap("value_set_double", 
    "TValue", ["TValue","number"]);
const value_double = Module.cwrap("value_double", 
    "number", ["TValue"]);
const value_dup_str = Module.cwrap("value_dup_str", 
    "TValue", ["TValue","string"]);
const value_str = Module.cwrap("value_str", 
    "string", ["TValue"]);
const value_str_ex = Module.cwrap("value_str_ex", 
    "string", ["TValue","string","number"]);
const value_is_null = Module.cwrap("value_is_null", 
    "boolean", ["TValue"]);
const value_set_int = Module.cwrap("value_set_int", 
    "TValue", ["TValue","number"]);
const value_set_object = Module.cwrap("value_set_object", 
    "TValue", ["TValue","TObject"]);
const value_object = Module.cwrap("value_object", 
    "TObject", ["TValue"]);
const value_set_token = Module.cwrap("value_set_token", 
    "TValue", ["TValue","number"]);
const value_token = Module.cwrap("value_token", 
    "number", ["TValue"]);
const value_create = Module.cwrap("value_create", 
    "TValue", []);
const value_destroy = Module.cwrap("value_destroy", 
    "TRet", ["TValue"]);
const value_reset = Module.cwrap("value_reset", 
    "TRet", ["TValue"]);
const value_cast = Module.cwrap("value_cast", 
    "TValue", ["TValue"]);
const tk_init = Module.cwrap("tk_init", 
    "TRet", ["number","number","TAppType","string","string"]);
const tk_run = Module.cwrap("tk_run", 
    "TRet", []);
const tk_quit = Module.cwrap("tk_quit", 
    "TRet", []);
const tk_get_pointer_x = Module.cwrap("tk_get_pointer_x", 
    "number", []);
const tk_get_pointer_y = Module.cwrap("tk_get_pointer_y", 
    "number", []);
const tk_is_pointer_pressed = Module.cwrap("tk_is_pointer_pressed", 
    "boolean", []);
const BIDI_TYPE_AUTO = Module.cwrap("BIDI_TYPE_AUTO", 
    "number", []);
const BIDI_TYPE_LTR = Module.cwrap("BIDI_TYPE_LTR", 
    "number", []);
const BIDI_TYPE_RTL = Module.cwrap("BIDI_TYPE_RTL", 
    "number", []);
const BIDI_TYPE_LRO = Module.cwrap("BIDI_TYPE_LRO", 
    "number", []);
const BIDI_TYPE_RLO = Module.cwrap("BIDI_TYPE_RLO", 
    "number", []);
const BIDI_TYPE_WLTR = Module.cwrap("BIDI_TYPE_WLTR", 
    "number", []);
const BIDI_TYPE_WRTL = Module.cwrap("BIDI_TYPE_WRTL", 
    "number", []);
const IMAGE_DRAW_DEFAULT = Module.cwrap("IMAGE_DRAW_DEFAULT", 
    "number", []);
const IMAGE_DRAW_CENTER = Module.cwrap("IMAGE_DRAW_CENTER", 
    "number", []);
const IMAGE_DRAW_ICON = Module.cwrap("IMAGE_DRAW_ICON", 
    "number", []);
const IMAGE_DRAW_SCALE = Module.cwrap("IMAGE_DRAW_SCALE", 
    "number", []);
const IMAGE_DRAW_SCALE_AUTO = Module.cwrap("IMAGE_DRAW_SCALE_AUTO", 
    "number", []);
const IMAGE_DRAW_SCALE_DOWN = Module.cwrap("IMAGE_DRAW_SCALE_DOWN", 
    "number", []);
const IMAGE_DRAW_SCALE_W = Module.cwrap("IMAGE_DRAW_SCALE_W", 
    "number", []);
const IMAGE_DRAW_SCALE_H = Module.cwrap("IMAGE_DRAW_SCALE_H", 
    "number", []);
const IMAGE_DRAW_REPEAT = Module.cwrap("IMAGE_DRAW_REPEAT", 
    "number", []);
const IMAGE_DRAW_REPEAT_X = Module.cwrap("IMAGE_DRAW_REPEAT_X", 
    "number", []);
const IMAGE_DRAW_REPEAT_Y = Module.cwrap("IMAGE_DRAW_REPEAT_Y", 
    "number", []);
const IMAGE_DRAW_REPEAT_Y_INVERSE = Module.cwrap("IMAGE_DRAW_REPEAT_Y_INVERSE", 
    "number", []);
const IMAGE_DRAW_PATCH9 = Module.cwrap("IMAGE_DRAW_PATCH9", 
    "number", []);
const IMAGE_DRAW_PATCH3_X = Module.cwrap("IMAGE_DRAW_PATCH3_X", 
    "number", []);
const IMAGE_DRAW_PATCH3_Y = Module.cwrap("IMAGE_DRAW_PATCH3_Y", 
    "number", []);
const IMAGE_DRAW_PATCH3_X_SCALE_Y = Module.cwrap("IMAGE_DRAW_PATCH3_X_SCALE_Y", 
    "number", []);
const IMAGE_DRAW_PATCH3_Y_SCALE_X = Module.cwrap("IMAGE_DRAW_PATCH3_Y_SCALE_X", 
    "number", []);
const IMAGE_DRAW_REPEAT9 = Module.cwrap("IMAGE_DRAW_REPEAT9", 
    "number", []);
const IMAGE_DRAW_REPEAT3_X = Module.cwrap("IMAGE_DRAW_REPEAT3_X", 
    "number", []);
const IMAGE_DRAW_REPEAT3_Y = Module.cwrap("IMAGE_DRAW_REPEAT3_Y", 
    "number", []);
const canvas_get_width = Module.cwrap("canvas_get_width", 
    "number", ["TCanvas"]);
const canvas_get_height = Module.cwrap("canvas_get_height", 
    "number", ["TCanvas"]);
const canvas_get_clip_rect = Module.cwrap("canvas_get_clip_rect", 
    "TRet", ["TCanvas","TRect"]);
const canvas_set_clip_rect = Module.cwrap("canvas_set_clip_rect", 
    "TRet", ["TCanvas","TRect"]);
const canvas_set_clip_rect_ex = Module.cwrap("canvas_set_clip_rect_ex", 
    "TRet", ["TCanvas","TRect","boolean"]);
const canvas_set_fill_color_str = Module.cwrap("canvas_set_fill_color_str", 
    "TRet", ["TCanvas","string"]);
const canvas_set_text_color_str = Module.cwrap("canvas_set_text_color_str", 
    "TRet", ["TCanvas","string"]);
const canvas_set_stroke_color_str = Module.cwrap("canvas_set_stroke_color_str", 
    "TRet", ["TCanvas","string"]);
const canvas_set_global_alpha = Module.cwrap("canvas_set_global_alpha", 
    "TRet", ["TCanvas","number"]);
const canvas_translate = Module.cwrap("canvas_translate", 
    "TRet", ["TCanvas","number","number"]);
const canvas_untranslate = Module.cwrap("canvas_untranslate", 
    "TRet", ["TCanvas","number","number"]);
const canvas_draw_vline = Module.cwrap("canvas_draw_vline", 
    "TRet", ["TCanvas","number","number","number"]);
const canvas_draw_hline = Module.cwrap("canvas_draw_hline", 
    "TRet", ["TCanvas","number","number","number"]);
const canvas_fill_rect = Module.cwrap("canvas_fill_rect", 
    "TRet", ["TCanvas","number","number","number","number"]);
const canvas_clear_rect = Module.cwrap("canvas_clear_rect", 
    "TRet", ["TCanvas","number","number","number","number"]);
const canvas_stroke_rect = Module.cwrap("canvas_stroke_rect", 
    "TRet", ["TCanvas","number","number","number","number"]);
const canvas_set_font = Module.cwrap("canvas_set_font", 
    "TRet", ["TCanvas","string","number"]);
const canvas_measure_utf8 = Module.cwrap("canvas_measure_utf8", 
    "number", ["TCanvas","string"]);
const canvas_draw_utf8 = Module.cwrap("canvas_draw_utf8", 
    "TRet", ["TCanvas","string","number","number"]);
const canvas_draw_utf8_in_rect = Module.cwrap("canvas_draw_utf8_in_rect", 
    "TRet", ["TCanvas","string","TRect"]);
const canvas_draw_icon = Module.cwrap("canvas_draw_icon", 
    "TRet", ["TCanvas","TBitmap","number","number"]);
const canvas_draw_image = Module.cwrap("canvas_draw_image", 
    "TRet", ["TCanvas","TBitmap","TRect","TRect"]);
const canvas_draw_image_ex = Module.cwrap("canvas_draw_image_ex", 
    "TRet", ["TCanvas","TBitmap","TImageDrawType","TRect"]);
const canvas_draw_image_ex2 = Module.cwrap("canvas_draw_image_ex2", 
    "TRet", ["TCanvas","TBitmap","TImageDrawType","TRect","TRect"]);
const canvas_get_vgcanvas = Module.cwrap("canvas_get_vgcanvas", 
    "TVgcanvas", ["TCanvas"]);
const canvas_cast = Module.cwrap("canvas_cast", 
    "TCanvas", ["TCanvas"]);
const canvas_reset = Module.cwrap("canvas_reset", 
    "TRet", ["TCanvas"]);
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
const CLIP_BOARD_DATA_TYPE_NONE = Module.cwrap("CLIP_BOARD_DATA_TYPE_NONE", 
    "number", []);
const CLIP_BOARD_DATA_TYPE_TEXT = Module.cwrap("CLIP_BOARD_DATA_TYPE_TEXT", 
    "number", []);
const clip_board_set_text = Module.cwrap("clip_board_set_text", 
    "TRet", ["string"]);
const clip_board_get_text = Module.cwrap("clip_board_get_text", 
    "string", []);
const DIALOG_QUIT_NONE = Module.cwrap("DIALOG_QUIT_NONE", 
    "number", []);
const DIALOG_QUIT_OK = Module.cwrap("DIALOG_QUIT_OK", 
    "number", []);
const DIALOG_QUIT_YES = Module.cwrap("DIALOG_QUIT_YES", 
    "number", []);
const DIALOG_QUIT_CANCEL = Module.cwrap("DIALOG_QUIT_CANCEL", 
    "number", []);
const DIALOG_QUIT_NO = Module.cwrap("DIALOG_QUIT_NO", 
    "number", []);
const DIALOG_QUIT_OTHER = Module.cwrap("DIALOG_QUIT_OTHER", 
    "number", []);
const EVT_POINTER_DOWN = Module.cwrap("EVT_POINTER_DOWN", 
    "number", []);
const EVT_POINTER_DOWN_BEFORE_CHILDREN = Module.cwrap("EVT_POINTER_DOWN_BEFORE_CHILDREN", 
    "number", []);
const EVT_POINTER_MOVE = Module.cwrap("EVT_POINTER_MOVE", 
    "number", []);
const EVT_POINTER_MOVE_BEFORE_CHILDREN = Module.cwrap("EVT_POINTER_MOVE_BEFORE_CHILDREN", 
    "number", []);
const EVT_POINTER_UP = Module.cwrap("EVT_POINTER_UP", 
    "number", []);
const EVT_POINTER_UP_BEFORE_CHILDREN = Module.cwrap("EVT_POINTER_UP_BEFORE_CHILDREN", 
    "number", []);
const EVT_WHEEL = Module.cwrap("EVT_WHEEL", 
    "number", []);
const EVT_WHEEL_BEFORE_CHILDREN = Module.cwrap("EVT_WHEEL_BEFORE_CHILDREN", 
    "number", []);
const EVT_POINTER_DOWN_ABORT = Module.cwrap("EVT_POINTER_DOWN_ABORT", 
    "number", []);
const EVT_CONTEXT_MENU = Module.cwrap("EVT_CONTEXT_MENU", 
    "number", []);
const EVT_POINTER_ENTER = Module.cwrap("EVT_POINTER_ENTER", 
    "number", []);
const EVT_POINTER_LEAVE = Module.cwrap("EVT_POINTER_LEAVE", 
    "number", []);
const EVT_LONG_PRESS = Module.cwrap("EVT_LONG_PRESS", 
    "number", []);
const EVT_CLICK = Module.cwrap("EVT_CLICK", 
    "number", []);
const EVT_FOCUS = Module.cwrap("EVT_FOCUS", 
    "number", []);
const EVT_BLUR = Module.cwrap("EVT_BLUR", 
    "number", []);
const EVT_KEY_DOWN = Module.cwrap("EVT_KEY_DOWN", 
    "number", []);
const EVT_KEY_LONG_PRESS = Module.cwrap("EVT_KEY_LONG_PRESS", 
    "number", []);
const EVT_KEY_DOWN_BEFORE_CHILDREN = Module.cwrap("EVT_KEY_DOWN_BEFORE_CHILDREN", 
    "number", []);
const EVT_KEY_REPEAT = Module.cwrap("EVT_KEY_REPEAT", 
    "number", []);
const EVT_KEY_UP = Module.cwrap("EVT_KEY_UP", 
    "number", []);
const EVT_KEY_UP_BEFORE_CHILDREN = Module.cwrap("EVT_KEY_UP_BEFORE_CHILDREN", 
    "number", []);
const EVT_WILL_MOVE = Module.cwrap("EVT_WILL_MOVE", 
    "number", []);
const EVT_MOVE = Module.cwrap("EVT_MOVE", 
    "number", []);
const EVT_WILL_RESIZE = Module.cwrap("EVT_WILL_RESIZE", 
    "number", []);
const EVT_RESIZE = Module.cwrap("EVT_RESIZE", 
    "number", []);
const EVT_WILL_MOVE_RESIZE = Module.cwrap("EVT_WILL_MOVE_RESIZE", 
    "number", []);
const EVT_MOVE_RESIZE = Module.cwrap("EVT_MOVE_RESIZE", 
    "number", []);
const EVT_VALUE_WILL_CHANGE = Module.cwrap("EVT_VALUE_WILL_CHANGE", 
    "number", []);
const EVT_VALUE_CHANGED = Module.cwrap("EVT_VALUE_CHANGED", 
    "number", []);
const EVT_VALUE_CHANGING = Module.cwrap("EVT_VALUE_CHANGING", 
    "number", []);
const EVT_PAINT = Module.cwrap("EVT_PAINT", 
    "number", []);
const EVT_BEFORE_PAINT = Module.cwrap("EVT_BEFORE_PAINT", 
    "number", []);
const EVT_AFTER_PAINT = Module.cwrap("EVT_AFTER_PAINT", 
    "number", []);
const EVT_PAINT_DONE = Module.cwrap("EVT_PAINT_DONE", 
    "number", []);
const EVT_LOCALE_CHANGED = Module.cwrap("EVT_LOCALE_CHANGED", 
    "number", []);
const EVT_ANIM_START = Module.cwrap("EVT_ANIM_START", 
    "number", []);
const EVT_ANIM_STOP = Module.cwrap("EVT_ANIM_STOP", 
    "number", []);
const EVT_ANIM_PAUSE = Module.cwrap("EVT_ANIM_PAUSE", 
    "number", []);
const EVT_ANIM_ONCE = Module.cwrap("EVT_ANIM_ONCE", 
    "number", []);
const EVT_ANIM_END = Module.cwrap("EVT_ANIM_END", 
    "number", []);
const EVT_WINDOW_LOAD = Module.cwrap("EVT_WINDOW_LOAD", 
    "number", []);
const EVT_WIDGET_LOAD = Module.cwrap("EVT_WIDGET_LOAD", 
    "number", []);
const EVT_WINDOW_WILL_OPEN = Module.cwrap("EVT_WINDOW_WILL_OPEN", 
    "number", []);
const EVT_WINDOW_OPEN = Module.cwrap("EVT_WINDOW_OPEN", 
    "number", []);
const EVT_WINDOW_TO_BACKGROUND = Module.cwrap("EVT_WINDOW_TO_BACKGROUND", 
    "number", []);
const EVT_WINDOW_TO_FOREGROUND = Module.cwrap("EVT_WINDOW_TO_FOREGROUND", 
    "number", []);
const EVT_WINDOW_CLOSE = Module.cwrap("EVT_WINDOW_CLOSE", 
    "number", []);
const EVT_REQUEST_CLOSE_WINDOW = Module.cwrap("EVT_REQUEST_CLOSE_WINDOW", 
    "number", []);
const EVT_TOP_WINDOW_CHANGED = Module.cwrap("EVT_TOP_WINDOW_CHANGED", 
    "number", []);
const EVT_IM_START = Module.cwrap("EVT_IM_START", 
    "number", []);
const EVT_IM_STOP = Module.cwrap("EVT_IM_STOP", 
    "number", []);
const EVT_IM_COMMIT = Module.cwrap("EVT_IM_COMMIT", 
    "number", []);
const EVT_IM_CLEAR = Module.cwrap("EVT_IM_CLEAR", 
    "number", []);
const EVT_IM_CANCEL = Module.cwrap("EVT_IM_CANCEL", 
    "number", []);
const EVT_IM_PREEDIT = Module.cwrap("EVT_IM_PREEDIT", 
    "number", []);
const EVT_IM_PREEDIT_CONFIRM = Module.cwrap("EVT_IM_PREEDIT_CONFIRM", 
    "number", []);
const EVT_IM_PREEDIT_ABORT = Module.cwrap("EVT_IM_PREEDIT_ABORT", 
    "number", []);
const EVT_IM_SHOW_CANDIDATES = Module.cwrap("EVT_IM_SHOW_CANDIDATES", 
    "number", []);
const EVT_IM_SHOW_PRE_CANDIDATES = Module.cwrap("EVT_IM_SHOW_PRE_CANDIDATES", 
    "number", []);
const EVT_IM_LANG_CHANGED = Module.cwrap("EVT_IM_LANG_CHANGED", 
    "number", []);
const EVT_IM_ACTION = Module.cwrap("EVT_IM_ACTION", 
    "number", []);
const EVT_IM_ACTION_INFO = Module.cwrap("EVT_IM_ACTION_INFO", 
    "number", []);
const EVT_DRAG_START = Module.cwrap("EVT_DRAG_START", 
    "number", []);
const EVT_DRAG = Module.cwrap("EVT_DRAG", 
    "number", []);
const EVT_DRAG_END = Module.cwrap("EVT_DRAG_END", 
    "number", []);
const EVT_RESET = Module.cwrap("EVT_RESET", 
    "number", []);
const EVT_SCREEN_SAVER = Module.cwrap("EVT_SCREEN_SAVER", 
    "number", []);
const EVT_LOW_MEMORY = Module.cwrap("EVT_LOW_MEMORY", 
    "number", []);
const EVT_OUT_OF_MEMORY = Module.cwrap("EVT_OUT_OF_MEMORY", 
    "number", []);
const EVT_ORIENTATION_WILL_CHANGED = Module.cwrap("EVT_ORIENTATION_WILL_CHANGED", 
    "number", []);
const EVT_ORIENTATION_CHANGED = Module.cwrap("EVT_ORIENTATION_CHANGED", 
    "number", []);
const EVT_WIDGET_CREATED = Module.cwrap("EVT_WIDGET_CREATED", 
    "number", []);
const EVT_REQUEST_QUIT_APP = Module.cwrap("EVT_REQUEST_QUIT_APP", 
    "number", []);
const EVT_THEME_CHANGED = Module.cwrap("EVT_THEME_CHANGED", 
    "number", []);
const EVT_WIDGET_ADD_CHILD = Module.cwrap("EVT_WIDGET_ADD_CHILD", 
    "number", []);
const EVT_WIDGET_REMOVE_CHILD = Module.cwrap("EVT_WIDGET_REMOVE_CHILD", 
    "number", []);
const EVT_SCROLL_START = Module.cwrap("EVT_SCROLL_START", 
    "number", []);
const EVT_SCROLL = Module.cwrap("EVT_SCROLL", 
    "number", []);
const EVT_SCROLL_END = Module.cwrap("EVT_SCROLL_END", 
    "number", []);
const EVT_MULTI_GESTURE = Module.cwrap("EVT_MULTI_GESTURE", 
    "number", []);
const EVT_PAGE_CHANGED = Module.cwrap("EVT_PAGE_CHANGED", 
    "number", []);
const EVT_ASSET_MANAGER_LOAD_ASSET = Module.cwrap("EVT_ASSET_MANAGER_LOAD_ASSET", 
    "number", []);
const EVT_ASSET_MANAGER_UNLOAD_ASSET = Module.cwrap("EVT_ASSET_MANAGER_UNLOAD_ASSET", 
    "number", []);
const EVT_ASSET_MANAGER_CLEAR_CACHE = Module.cwrap("EVT_ASSET_MANAGER_CLEAR_CACHE", 
    "number", []);
const EVT_TIMER = Module.cwrap("EVT_TIMER", 
    "number", []);
const EVT_REQ_START = Module.cwrap("EVT_REQ_START", 
    "number", []);
const EVT_USER_START = Module.cwrap("EVT_USER_START", 
    "number", []);
const EVT_NONE = Module.cwrap("EVT_NONE", 
    "number", []);
const EVT_PROP_WILL_CHANGE = Module.cwrap("EVT_PROP_WILL_CHANGE", 
    "number", []);
const EVT_PROP_CHANGED = Module.cwrap("EVT_PROP_CHANGED", 
    "number", []);
const EVT_CMD_WILL_EXEC = Module.cwrap("EVT_CMD_WILL_EXEC", 
    "number", []);
const EVT_CMD_EXECED = Module.cwrap("EVT_CMD_EXECED", 
    "number", []);
const EVT_CMD_CAN_EXEC = Module.cwrap("EVT_CMD_CAN_EXEC", 
    "number", []);
const EVT_ITEMS_WILL_CHANGE = Module.cwrap("EVT_ITEMS_WILL_CHANGE", 
    "number", []);
const EVT_ITEMS_CHANGED = Module.cwrap("EVT_ITEMS_CHANGED", 
    "number", []);
const EVT_PROPS_CHANGED = Module.cwrap("EVT_PROPS_CHANGED", 
    "number", []);
const EVT_PROGRESS = Module.cwrap("EVT_PROGRESS", 
    "number", []);
const EVT_DONE = Module.cwrap("EVT_DONE", 
    "number", []);
const EVT_ERROR = Module.cwrap("EVT_ERROR", 
    "number", []);
const EVT_DESTROY = Module.cwrap("EVT_DESTROY", 
    "number", []);
const event_from_name = Module.cwrap("event_from_name", 
    "number", ["string"]);
const event_cast = Module.cwrap("event_cast", 
    "TEvent", ["TEvent"]);
const event_get_type = Module.cwrap("event_get_type", 
    "number", ["TEvent"]);
const event_create = Module.cwrap("event_create", 
    "TEvent", ["number"]);
const event_destroy = Module.cwrap("event_destroy", 
    "TRet", ["TEvent"]);
const event_t_get_prop_type = Module.cwrap("event_t_get_prop_type", 
    "number", ["number"]);
const event_t_get_prop_size = Module.cwrap("event_t_get_prop_size", 
    "number", ["number"]);
const event_t_get_prop_time = Module.cwrap("event_t_get_prop_time", 
    "number", ["number"]);
const event_t_get_prop_target = Module.cwrap("event_t_get_prop_target", 
    "any", ["number"]);
const font_manager_unload_font = Module.cwrap("font_manager_unload_font", 
    "TRet", ["TFontManager","string","number"]);
const font_manager_shrink_cache = Module.cwrap("font_manager_shrink_cache", 
    "TRet", ["TFontManager","number"]);
const font_manager_unload_all = Module.cwrap("font_manager_unload_all", 
    "TRet", ["TFontManager"]);
const GLYPH_FMT_ALPHA = Module.cwrap("GLYPH_FMT_ALPHA", 
    "number", []);
const GLYPH_FMT_MONO = Module.cwrap("GLYPH_FMT_MONO", 
    "number", []);
const GLYPH_FMT_RGBA = Module.cwrap("GLYPH_FMT_RGBA", 
    "number", []);
const idle_add = Module.cwrap("idle_add", 
    "number", ["Function","any"]);
const idle_remove = Module.cwrap("idle_remove", 
    "TRet", ["number"]);
const idle_remove_all_by_ctx = Module.cwrap("idle_remove_all_by_ctx", 
    "TRet", ["any"]);
const image_manager = Module.cwrap("image_manager", 
    "TImageManager", []);
const image_manager_get_bitmap = Module.cwrap("image_manager_get_bitmap", 
    "TRet", ["TImageManager","string","TBitmap"]);
const image_manager_preload = Module.cwrap("image_manager_preload", 
    "TRet", ["TImageManager","string"]);
const INPUT_TEXT = Module.cwrap("INPUT_TEXT", 
    "number", []);
const INPUT_INT = Module.cwrap("INPUT_INT", 
    "number", []);
const INPUT_UINT = Module.cwrap("INPUT_UINT", 
    "number", []);
const INPUT_HEX = Module.cwrap("INPUT_HEX", 
    "number", []);
const INPUT_FLOAT = Module.cwrap("INPUT_FLOAT", 
    "number", []);
const INPUT_UFLOAT = Module.cwrap("INPUT_UFLOAT", 
    "number", []);
const INPUT_EMAIL = Module.cwrap("INPUT_EMAIL", 
    "number", []);
const INPUT_PASSWORD = Module.cwrap("INPUT_PASSWORD", 
    "number", []);
const INPUT_PHONE = Module.cwrap("INPUT_PHONE", 
    "number", []);
const INPUT_IPV4 = Module.cwrap("INPUT_IPV4", 
    "number", []);
const INPUT_DATE = Module.cwrap("INPUT_DATE", 
    "number", []);
const INPUT_TIME = Module.cwrap("INPUT_TIME", 
    "number", []);
const INPUT_TIME_FULL = Module.cwrap("INPUT_TIME_FULL", 
    "number", []);
const INPUT_CUSTOM = Module.cwrap("INPUT_CUSTOM", 
    "number", []);
const INPUT_CUSTOM_PASSWORD = Module.cwrap("INPUT_CUSTOM_PASSWORD", 
    "number", []);
const INPUT_ASCII = Module.cwrap("INPUT_ASCII", 
    "number", []);
const input_method_commit_text = Module.cwrap("input_method_commit_text", 
    "TRet", ["TInputMethod","string"]);
const input_method_set_lang = Module.cwrap("input_method_set_lang", 
    "TRet", ["TInputMethod","string"]);
const input_method_get_lang = Module.cwrap("input_method_get_lang", 
    "string", ["TInputMethod"]);
const input_method_dispatch_key = Module.cwrap("input_method_dispatch_key", 
    "TRet", ["TInputMethod","number"]);
const input_method_dispatch_keys = Module.cwrap("input_method_dispatch_keys", 
    "TRet", ["TInputMethod","string"]);
const input_method_dispatch_preedit = Module.cwrap("input_method_dispatch_preedit", 
    "TRet", ["TInputMethod"]);
const input_method_dispatch_preedit_confirm = Module.cwrap("input_method_dispatch_preedit_confirm", 
    "TRet", ["TInputMethod"]);
const input_method_dispatch_preedit_abort = Module.cwrap("input_method_dispatch_preedit_abort", 
    "TRet", ["TInputMethod"]);
const input_method = Module.cwrap("input_method", 
    "TInputMethod", []);
const TK_KEY_RETURN = Module.cwrap("TK_KEY_RETURN", 
    "number", []);
const TK_KEY_ESCAPE = Module.cwrap("TK_KEY_ESCAPE", 
    "number", []);
const TK_KEY_BACKSPACE = Module.cwrap("TK_KEY_BACKSPACE", 
    "number", []);
const TK_KEY_TAB = Module.cwrap("TK_KEY_TAB", 
    "number", []);
const TK_KEY_SPACE = Module.cwrap("TK_KEY_SPACE", 
    "number", []);
const TK_KEY_EXCLAIM = Module.cwrap("TK_KEY_EXCLAIM", 
    "number", []);
const TK_KEY_QUOTEDBL = Module.cwrap("TK_KEY_QUOTEDBL", 
    "number", []);
const TK_KEY_HASH = Module.cwrap("TK_KEY_HASH", 
    "number", []);
const TK_KEY_PERCENT = Module.cwrap("TK_KEY_PERCENT", 
    "number", []);
const TK_KEY_DOLLAR = Module.cwrap("TK_KEY_DOLLAR", 
    "number", []);
const TK_KEY_AMPERSAND = Module.cwrap("TK_KEY_AMPERSAND", 
    "number", []);
const TK_KEY_QUOTE = Module.cwrap("TK_KEY_QUOTE", 
    "number", []);
const TK_KEY_LEFTPAREN = Module.cwrap("TK_KEY_LEFTPAREN", 
    "number", []);
const TK_KEY_RIGHTPAREN = Module.cwrap("TK_KEY_RIGHTPAREN", 
    "number", []);
const TK_KEY_ASTERISK = Module.cwrap("TK_KEY_ASTERISK", 
    "number", []);
const TK_KEY_PLUS = Module.cwrap("TK_KEY_PLUS", 
    "number", []);
const TK_KEY_COMMA = Module.cwrap("TK_KEY_COMMA", 
    "number", []);
const TK_KEY_MINUS = Module.cwrap("TK_KEY_MINUS", 
    "number", []);
const TK_KEY_PERIOD = Module.cwrap("TK_KEY_PERIOD", 
    "number", []);
const TK_KEY_SLASH = Module.cwrap("TK_KEY_SLASH", 
    "number", []);
const TK_KEY_0 = Module.cwrap("TK_KEY_0", 
    "number", []);
const TK_KEY_1 = Module.cwrap("TK_KEY_1", 
    "number", []);
const TK_KEY_2 = Module.cwrap("TK_KEY_2", 
    "number", []);
const TK_KEY_3 = Module.cwrap("TK_KEY_3", 
    "number", []);
const TK_KEY_4 = Module.cwrap("TK_KEY_4", 
    "number", []);
const TK_KEY_5 = Module.cwrap("TK_KEY_5", 
    "number", []);
const TK_KEY_6 = Module.cwrap("TK_KEY_6", 
    "number", []);
const TK_KEY_7 = Module.cwrap("TK_KEY_7", 
    "number", []);
const TK_KEY_8 = Module.cwrap("TK_KEY_8", 
    "number", []);
const TK_KEY_9 = Module.cwrap("TK_KEY_9", 
    "number", []);
const TK_KEY_COLON = Module.cwrap("TK_KEY_COLON", 
    "number", []);
const TK_KEY_SEMICOLON = Module.cwrap("TK_KEY_SEMICOLON", 
    "number", []);
const TK_KEY_LESS = Module.cwrap("TK_KEY_LESS", 
    "number", []);
const TK_KEY_EQUAL = Module.cwrap("TK_KEY_EQUAL", 
    "number", []);
const TK_KEY_GREATER = Module.cwrap("TK_KEY_GREATER", 
    "number", []);
const TK_KEY_QUESTION = Module.cwrap("TK_KEY_QUESTION", 
    "number", []);
const TK_KEY_AT = Module.cwrap("TK_KEY_AT", 
    "number", []);
const TK_KEY_LEFTBRACKET = Module.cwrap("TK_KEY_LEFTBRACKET", 
    "number", []);
const TK_KEY_BACKSLASH = Module.cwrap("TK_KEY_BACKSLASH", 
    "number", []);
const TK_KEY_RIGHTBRACKET = Module.cwrap("TK_KEY_RIGHTBRACKET", 
    "number", []);
const TK_KEY_CARET = Module.cwrap("TK_KEY_CARET", 
    "number", []);
const TK_KEY_UNDERSCORE = Module.cwrap("TK_KEY_UNDERSCORE", 
    "number", []);
const TK_KEY_BACKQUOTE = Module.cwrap("TK_KEY_BACKQUOTE", 
    "number", []);
const TK_KEY_a = Module.cwrap("TK_KEY_a", 
    "number", []);
const TK_KEY_b = Module.cwrap("TK_KEY_b", 
    "number", []);
const TK_KEY_c = Module.cwrap("TK_KEY_c", 
    "number", []);
const TK_KEY_d = Module.cwrap("TK_KEY_d", 
    "number", []);
const TK_KEY_e = Module.cwrap("TK_KEY_e", 
    "number", []);
const TK_KEY_f = Module.cwrap("TK_KEY_f", 
    "number", []);
const TK_KEY_g = Module.cwrap("TK_KEY_g", 
    "number", []);
const TK_KEY_h = Module.cwrap("TK_KEY_h", 
    "number", []);
const TK_KEY_i = Module.cwrap("TK_KEY_i", 
    "number", []);
const TK_KEY_j = Module.cwrap("TK_KEY_j", 
    "number", []);
const TK_KEY_k = Module.cwrap("TK_KEY_k", 
    "number", []);
const TK_KEY_l = Module.cwrap("TK_KEY_l", 
    "number", []);
const TK_KEY_m = Module.cwrap("TK_KEY_m", 
    "number", []);
const TK_KEY_n = Module.cwrap("TK_KEY_n", 
    "number", []);
const TK_KEY_o = Module.cwrap("TK_KEY_o", 
    "number", []);
const TK_KEY_p = Module.cwrap("TK_KEY_p", 
    "number", []);
const TK_KEY_q = Module.cwrap("TK_KEY_q", 
    "number", []);
const TK_KEY_r = Module.cwrap("TK_KEY_r", 
    "number", []);
const TK_KEY_s = Module.cwrap("TK_KEY_s", 
    "number", []);
const TK_KEY_t = Module.cwrap("TK_KEY_t", 
    "number", []);
const TK_KEY_u = Module.cwrap("TK_KEY_u", 
    "number", []);
const TK_KEY_v = Module.cwrap("TK_KEY_v", 
    "number", []);
const TK_KEY_w = Module.cwrap("TK_KEY_w", 
    "number", []);
const TK_KEY_x = Module.cwrap("TK_KEY_x", 
    "number", []);
const TK_KEY_y = Module.cwrap("TK_KEY_y", 
    "number", []);
const TK_KEY_z = Module.cwrap("TK_KEY_z", 
    "number", []);
const TK_KEY_A = Module.cwrap("TK_KEY_A", 
    "number", []);
const TK_KEY_B = Module.cwrap("TK_KEY_B", 
    "number", []);
const TK_KEY_C = Module.cwrap("TK_KEY_C", 
    "number", []);
const TK_KEY_D = Module.cwrap("TK_KEY_D", 
    "number", []);
const TK_KEY_E = Module.cwrap("TK_KEY_E", 
    "number", []);
const TK_KEY_F = Module.cwrap("TK_KEY_F", 
    "number", []);
const TK_KEY_G = Module.cwrap("TK_KEY_G", 
    "number", []);
const TK_KEY_H = Module.cwrap("TK_KEY_H", 
    "number", []);
const TK_KEY_I = Module.cwrap("TK_KEY_I", 
    "number", []);
const TK_KEY_J = Module.cwrap("TK_KEY_J", 
    "number", []);
const TK_KEY_K = Module.cwrap("TK_KEY_K", 
    "number", []);
const TK_KEY_L = Module.cwrap("TK_KEY_L", 
    "number", []);
const TK_KEY_M = Module.cwrap("TK_KEY_M", 
    "number", []);
const TK_KEY_N = Module.cwrap("TK_KEY_N", 
    "number", []);
const TK_KEY_O = Module.cwrap("TK_KEY_O", 
    "number", []);
const TK_KEY_P = Module.cwrap("TK_KEY_P", 
    "number", []);
const TK_KEY_Q = Module.cwrap("TK_KEY_Q", 
    "number", []);
const TK_KEY_R = Module.cwrap("TK_KEY_R", 
    "number", []);
const TK_KEY_S = Module.cwrap("TK_KEY_S", 
    "number", []);
const TK_KEY_T = Module.cwrap("TK_KEY_T", 
    "number", []);
const TK_KEY_U = Module.cwrap("TK_KEY_U", 
    "number", []);
const TK_KEY_V = Module.cwrap("TK_KEY_V", 
    "number", []);
const TK_KEY_W = Module.cwrap("TK_KEY_W", 
    "number", []);
const TK_KEY_X = Module.cwrap("TK_KEY_X", 
    "number", []);
const TK_KEY_Y = Module.cwrap("TK_KEY_Y", 
    "number", []);
const TK_KEY_Z = Module.cwrap("TK_KEY_Z", 
    "number", []);
const TK_KEY_DOT = Module.cwrap("TK_KEY_DOT", 
    "number", []);
const TK_KEY_DELETE = Module.cwrap("TK_KEY_DELETE", 
    "number", []);
const TK_KEY_LEFTBRACE = Module.cwrap("TK_KEY_LEFTBRACE", 
    "number", []);
const TK_KEY_RIGHTBRACE = Module.cwrap("TK_KEY_RIGHTBRACE", 
    "number", []);
const TK_KEY_LSHIFT = Module.cwrap("TK_KEY_LSHIFT", 
    "number", []);
const TK_KEY_RSHIFT = Module.cwrap("TK_KEY_RSHIFT", 
    "number", []);
const TK_KEY_LCTRL = Module.cwrap("TK_KEY_LCTRL", 
    "number", []);
const TK_KEY_RCTRL = Module.cwrap("TK_KEY_RCTRL", 
    "number", []);
const TK_KEY_LALT = Module.cwrap("TK_KEY_LALT", 
    "number", []);
const TK_KEY_RALT = Module.cwrap("TK_KEY_RALT", 
    "number", []);
const TK_KEY_CAPSLOCK = Module.cwrap("TK_KEY_CAPSLOCK", 
    "number", []);
const TK_KEY_HOME = Module.cwrap("TK_KEY_HOME", 
    "number", []);
const TK_KEY_END = Module.cwrap("TK_KEY_END", 
    "number", []);
const TK_KEY_INSERT = Module.cwrap("TK_KEY_INSERT", 
    "number", []);
const TK_KEY_UP = Module.cwrap("TK_KEY_UP", 
    "number", []);
const TK_KEY_DOWN = Module.cwrap("TK_KEY_DOWN", 
    "number", []);
const TK_KEY_LEFT = Module.cwrap("TK_KEY_LEFT", 
    "number", []);
const TK_KEY_RIGHT = Module.cwrap("TK_KEY_RIGHT", 
    "number", []);
const TK_KEY_PAGEUP = Module.cwrap("TK_KEY_PAGEUP", 
    "number", []);
const TK_KEY_PAGEDOWN = Module.cwrap("TK_KEY_PAGEDOWN", 
    "number", []);
const TK_KEY_F1 = Module.cwrap("TK_KEY_F1", 
    "number", []);
const TK_KEY_F2 = Module.cwrap("TK_KEY_F2", 
    "number", []);
const TK_KEY_F3 = Module.cwrap("TK_KEY_F3", 
    "number", []);
const TK_KEY_F4 = Module.cwrap("TK_KEY_F4", 
    "number", []);
const TK_KEY_F5 = Module.cwrap("TK_KEY_F5", 
    "number", []);
const TK_KEY_F6 = Module.cwrap("TK_KEY_F6", 
    "number", []);
const TK_KEY_F7 = Module.cwrap("TK_KEY_F7", 
    "number", []);
const TK_KEY_F8 = Module.cwrap("TK_KEY_F8", 
    "number", []);
const TK_KEY_F9 = Module.cwrap("TK_KEY_F9", 
    "number", []);
const TK_KEY_F10 = Module.cwrap("TK_KEY_F10", 
    "number", []);
const TK_KEY_F11 = Module.cwrap("TK_KEY_F11", 
    "number", []);
const TK_KEY_F12 = Module.cwrap("TK_KEY_F12", 
    "number", []);
const TK_KEY_MENU = Module.cwrap("TK_KEY_MENU", 
    "number", []);
const TK_KEY_COMMAND = Module.cwrap("TK_KEY_COMMAND", 
    "number", []);
const TK_KEY_BACK = Module.cwrap("TK_KEY_BACK", 
    "number", []);
const TK_KEY_CANCEL = Module.cwrap("TK_KEY_CANCEL", 
    "number", []);
const TK_KEY_WHEEL = Module.cwrap("TK_KEY_WHEEL", 
    "number", []);
const locale_info = Module.cwrap("locale_info", 
    "TLocaleInfo", []);
const locale_info_tr = Module.cwrap("locale_info_tr", 
    "string", ["TLocaleInfo","string"]);
const locale_info_change = Module.cwrap("locale_info_change", 
    "TRet", ["TLocaleInfo","string","string"]);
const locale_info_off = Module.cwrap("locale_info_off", 
    "TRet", ["TLocaleInfo","number"]);
const STYLE_ID_BG_COLOR = Module.cwrap("STYLE_ID_BG_COLOR", 
    "string", []);
const STYLE_ID_FG_COLOR = Module.cwrap("STYLE_ID_FG_COLOR", 
    "string", []);
const STYLE_ID_MASK_COLOR = Module.cwrap("STYLE_ID_MASK_COLOR", 
    "string", []);
const STYLE_ID_FONT_NAME = Module.cwrap("STYLE_ID_FONT_NAME", 
    "string", []);
const STYLE_ID_FONT_SIZE = Module.cwrap("STYLE_ID_FONT_SIZE", 
    "string", []);
const STYLE_ID_FONT_STYLE = Module.cwrap("STYLE_ID_FONT_STYLE", 
    "string", []);
const STYLE_ID_TEXT_COLOR = Module.cwrap("STYLE_ID_TEXT_COLOR", 
    "string", []);
const STYLE_ID_HIGHLIGHT_FONT_NAME = Module.cwrap("STYLE_ID_HIGHLIGHT_FONT_NAME", 
    "string", []);
const STYLE_ID_HIGHLIGHT_FONT_SIZE = Module.cwrap("STYLE_ID_HIGHLIGHT_FONT_SIZE", 
    "string", []);
const STYLE_ID_HIGHLIGHT_TEXT_COLOR = Module.cwrap("STYLE_ID_HIGHLIGHT_TEXT_COLOR", 
    "string", []);
const STYLE_ID_TIPS_TEXT_COLOR = Module.cwrap("STYLE_ID_TIPS_TEXT_COLOR", 
    "string", []);
const STYLE_ID_TEXT_ALIGN_H = Module.cwrap("STYLE_ID_TEXT_ALIGN_H", 
    "string", []);
const STYLE_ID_TEXT_ALIGN_V = Module.cwrap("STYLE_ID_TEXT_ALIGN_V", 
    "string", []);
const STYLE_ID_BORDER_COLOR = Module.cwrap("STYLE_ID_BORDER_COLOR", 
    "string", []);
const STYLE_ID_BORDER_WIDTH = Module.cwrap("STYLE_ID_BORDER_WIDTH", 
    "string", []);
const STYLE_ID_BORDER = Module.cwrap("STYLE_ID_BORDER", 
    "string", []);
const STYLE_ID_BG_IMAGE = Module.cwrap("STYLE_ID_BG_IMAGE", 
    "string", []);
const STYLE_ID_BG_IMAGE_DRAW_TYPE = Module.cwrap("STYLE_ID_BG_IMAGE_DRAW_TYPE", 
    "string", []);
const STYLE_ID_ICON = Module.cwrap("STYLE_ID_ICON", 
    "string", []);
const STYLE_ID_FG_IMAGE = Module.cwrap("STYLE_ID_FG_IMAGE", 
    "string", []);
const STYLE_ID_FG_IMAGE_DRAW_TYPE = Module.cwrap("STYLE_ID_FG_IMAGE_DRAW_TYPE", 
    "string", []);
const STYLE_ID_SPACER = Module.cwrap("STYLE_ID_SPACER", 
    "string", []);
const STYLE_ID_MARGIN = Module.cwrap("STYLE_ID_MARGIN", 
    "string", []);
const STYLE_ID_MARGIN_LEFT = Module.cwrap("STYLE_ID_MARGIN_LEFT", 
    "string", []);
const STYLE_ID_MARGIN_RIGHT = Module.cwrap("STYLE_ID_MARGIN_RIGHT", 
    "string", []);
const STYLE_ID_MARGIN_TOP = Module.cwrap("STYLE_ID_MARGIN_TOP", 
    "string", []);
const STYLE_ID_MARGIN_BOTTOM = Module.cwrap("STYLE_ID_MARGIN_BOTTOM", 
    "string", []);
const STYLE_ID_ICON_AT = Module.cwrap("STYLE_ID_ICON_AT", 
    "string", []);
const STYLE_ID_ACTIVE_ICON = Module.cwrap("STYLE_ID_ACTIVE_ICON", 
    "string", []);
const STYLE_ID_X_OFFSET = Module.cwrap("STYLE_ID_X_OFFSET", 
    "string", []);
const STYLE_ID_Y_OFFSET = Module.cwrap("STYLE_ID_Y_OFFSET", 
    "string", []);
const STYLE_ID_SELECTED_BG_COLOR = Module.cwrap("STYLE_ID_SELECTED_BG_COLOR", 
    "string", []);
const STYLE_ID_SELECTED_FG_COLOR = Module.cwrap("STYLE_ID_SELECTED_FG_COLOR", 
    "string", []);
const STYLE_ID_SELECTED_TEXT_COLOR = Module.cwrap("STYLE_ID_SELECTED_TEXT_COLOR", 
    "string", []);
const STYLE_ID_ROUND_RADIUS = Module.cwrap("STYLE_ID_ROUND_RADIUS", 
    "string", []);
const STYLE_ID_ROUND_RADIUS_TOP_LETF = Module.cwrap("STYLE_ID_ROUND_RADIUS_TOP_LETF", 
    "string", []);
const STYLE_ID_ROUND_RADIUS_TOP_RIGHT = Module.cwrap("STYLE_ID_ROUND_RADIUS_TOP_RIGHT", 
    "string", []);
const STYLE_ID_ROUND_RADIUS_BOTTOM_LETF = Module.cwrap("STYLE_ID_ROUND_RADIUS_BOTTOM_LETF", 
    "string", []);
const STYLE_ID_ROUND_RADIUS_BOTTOM_RIGHT = Module.cwrap("STYLE_ID_ROUND_RADIUS_BOTTOM_RIGHT", 
    "string", []);
const STYLE_ID_CHILDREN_LAYOUT = Module.cwrap("STYLE_ID_CHILDREN_LAYOUT", 
    "string", []);
const STYLE_ID_SELF_LAYOUT = Module.cwrap("STYLE_ID_SELF_LAYOUT", 
    "string", []);
const STYLE_ID_FOCUSABLE = Module.cwrap("STYLE_ID_FOCUSABLE", 
    "string", []);
const STYLE_ID_FEEDBACK = Module.cwrap("STYLE_ID_FEEDBACK", 
    "string", []);
const style_notify_widget_state_changed = Module.cwrap("style_notify_widget_state_changed", 
    "TRet", ["TStyle","TWidget"]);
const style_is_valid = Module.cwrap("style_is_valid", 
    "boolean", ["TStyle"]);
const style_get_int = Module.cwrap("style_get_int", 
    "number", ["TStyle","string","number"]);
const style_get_uint = Module.cwrap("style_get_uint", 
    "number", ["TStyle","string","number"]);
const style_get_str = Module.cwrap("style_get_str", 
    "string", ["TStyle","string","string"]);
const style_set = Module.cwrap("style_set", 
    "TRet", ["TStyle","string","string","TValue"]);
const style_update_state = Module.cwrap("style_update_state", 
    "TRet", ["TStyle","TTheme","string","string","string"]);
const style_get_style_state = Module.cwrap("style_get_style_state", 
    "string", ["TStyle"]);
const style_is_mutable = Module.cwrap("style_is_mutable", 
    "boolean", ["TStyle"]);
const style_get_style_type = Module.cwrap("style_get_style_type", 
    "string", ["TStyle"]);
const theme = Module.cwrap("theme", 
    "TTheme", []);
const timer_add = Module.cwrap("timer_add", 
    "number", ["Function","any","number"]);
const timer_remove = Module.cwrap("timer_remove", 
    "TRet", ["number"]);
const timer_remove_all_by_ctx = Module.cwrap("timer_remove_all_by_ctx", 
    "TRet", ["any"]);
const timer_reset = Module.cwrap("timer_reset", 
    "TRet", ["number"]);
const timer_suspend = Module.cwrap("timer_suspend", 
    "TRet", ["number"]);
const timer_resume = Module.cwrap("timer_resume", 
    "TRet", ["number"]);
const timer_modify = Module.cwrap("timer_modify", 
    "TRet", ["number","number"]);
const ALIGN_V_NONE = Module.cwrap("ALIGN_V_NONE", 
    "number", []);
const ALIGN_V_MIDDLE = Module.cwrap("ALIGN_V_MIDDLE", 
    "number", []);
const ALIGN_V_TOP = Module.cwrap("ALIGN_V_TOP", 
    "number", []);
const ALIGN_V_BOTTOM = Module.cwrap("ALIGN_V_BOTTOM", 
    "number", []);
const ALIGN_H_NONE = Module.cwrap("ALIGN_H_NONE", 
    "number", []);
const ALIGN_H_CENTER = Module.cwrap("ALIGN_H_CENTER", 
    "number", []);
const ALIGN_H_LEFT = Module.cwrap("ALIGN_H_LEFT", 
    "number", []);
const ALIGN_H_RIGHT = Module.cwrap("ALIGN_H_RIGHT", 
    "number", []);
const APP_MOBILE = Module.cwrap("APP_MOBILE", 
    "number", []);
const APP_SIMULATOR = Module.cwrap("APP_SIMULATOR", 
    "number", []);
const APP_DESKTOP = Module.cwrap("APP_DESKTOP", 
    "number", []);
const BITMAP_FMT_NONE = Module.cwrap("BITMAP_FMT_NONE", 
    "number", []);
const BITMAP_FMT_RGBA8888 = Module.cwrap("BITMAP_FMT_RGBA8888", 
    "number", []);
const BITMAP_FMT_ABGR8888 = Module.cwrap("BITMAP_FMT_ABGR8888", 
    "number", []);
const BITMAP_FMT_BGRA8888 = Module.cwrap("BITMAP_FMT_BGRA8888", 
    "number", []);
const BITMAP_FMT_ARGB8888 = Module.cwrap("BITMAP_FMT_ARGB8888", 
    "number", []);
const BITMAP_FMT_RGB565 = Module.cwrap("BITMAP_FMT_RGB565", 
    "number", []);
const BITMAP_FMT_BGR565 = Module.cwrap("BITMAP_FMT_BGR565", 
    "number", []);
const BITMAP_FMT_RGB888 = Module.cwrap("BITMAP_FMT_RGB888", 
    "number", []);
const BITMAP_FMT_BGR888 = Module.cwrap("BITMAP_FMT_BGR888", 
    "number", []);
const BITMAP_FMT_GRAY = Module.cwrap("BITMAP_FMT_GRAY", 
    "number", []);
const BITMAP_FMT_MONO = Module.cwrap("BITMAP_FMT_MONO", 
    "number", []);
const BITMAP_FLAG_NONE = Module.cwrap("BITMAP_FLAG_NONE", 
    "number", []);
const BITMAP_FLAG_OPAQUE = Module.cwrap("BITMAP_FLAG_OPAQUE", 
    "number", []);
const BITMAP_FLAG_IMMUTABLE = Module.cwrap("BITMAP_FLAG_IMMUTABLE", 
    "number", []);
const BITMAP_FLAG_TEXTURE = Module.cwrap("BITMAP_FLAG_TEXTURE", 
    "number", []);
const BITMAP_FLAG_CHANGED = Module.cwrap("BITMAP_FLAG_CHANGED", 
    "number", []);
const BITMAP_FLAG_PREMULTI_ALPHA = Module.cwrap("BITMAP_FLAG_PREMULTI_ALPHA", 
    "number", []);
const vgcanvas_cast = Module.cwrap("vgcanvas_cast", 
    "TVgcanvas", ["TVgcanvas"]);
const vgcanvas_flush = Module.cwrap("vgcanvas_flush", 
    "TRet", ["TVgcanvas"]);
const vgcanvas_begin_path = Module.cwrap("vgcanvas_begin_path", 
    "TRet", ["TVgcanvas"]);
const vgcanvas_move_to = Module.cwrap("vgcanvas_move_to", 
    "TRet", ["TVgcanvas","number","number"]);
const vgcanvas_line_to = Module.cwrap("vgcanvas_line_to", 
    "TRet", ["TVgcanvas","number","number"]);
const vgcanvas_quad_to = Module.cwrap("vgcanvas_quad_to", 
    "TRet", ["TVgcanvas","number","number","number","number"]);
const vgcanvas_bezier_to = Module.cwrap("vgcanvas_bezier_to", 
    "TRet", ["TVgcanvas","number","number","number","number","number","number"]);
const vgcanvas_arc_to = Module.cwrap("vgcanvas_arc_to", 
    "TRet", ["TVgcanvas","number","number","number","number","number"]);
const vgcanvas_arc = Module.cwrap("vgcanvas_arc", 
    "TRet", ["TVgcanvas","number","number","number","number","number","boolean"]);
const vgcanvas_is_point_in_path = Module.cwrap("vgcanvas_is_point_in_path", 
    "boolean", ["TVgcanvas","number","number"]);
const vgcanvas_rect = Module.cwrap("vgcanvas_rect", 
    "TRet", ["TVgcanvas","number","number","number","number"]);
const vgcanvas_rounded_rect = Module.cwrap("vgcanvas_rounded_rect", 
    "TRet", ["TVgcanvas","number","number","number","number","number"]);
const vgcanvas_ellipse = Module.cwrap("vgcanvas_ellipse", 
    "TRet", ["TVgcanvas","number","number","number","number"]);
const vgcanvas_close_path = Module.cwrap("vgcanvas_close_path", 
    "TRet", ["TVgcanvas"]);
const vgcanvas_path_winding = Module.cwrap("vgcanvas_path_winding", 
    "TRet", ["TVgcanvas","boolean"]);
const vgcanvas_rotate = Module.cwrap("vgcanvas_rotate", 
    "TRet", ["TVgcanvas","number"]);
const vgcanvas_scale = Module.cwrap("vgcanvas_scale", 
    "TRet", ["TVgcanvas","number","number"]);
const vgcanvas_translate = Module.cwrap("vgcanvas_translate", 
    "TRet", ["TVgcanvas","number","number"]);
const vgcanvas_transform = Module.cwrap("vgcanvas_transform", 
    "TRet", ["TVgcanvas","number","number","number","number","number","number"]);
const vgcanvas_set_transform = Module.cwrap("vgcanvas_set_transform", 
    "TRet", ["TVgcanvas","number","number","number","number","number","number"]);
const vgcanvas_clip_path = Module.cwrap("vgcanvas_clip_path", 
    "TRet", ["TVgcanvas"]);
const vgcanvas_clip_rect = Module.cwrap("vgcanvas_clip_rect", 
    "TRet", ["TVgcanvas","number","number","number","number"]);
const vgcanvas_intersect_clip_rect = Module.cwrap("vgcanvas_intersect_clip_rect", 
    "TRet", ["TVgcanvas","number","number","number","number"]);
const vgcanvas_fill = Module.cwrap("vgcanvas_fill", 
    "TRet", ["TVgcanvas"]);
const vgcanvas_stroke = Module.cwrap("vgcanvas_stroke", 
    "TRet", ["TVgcanvas"]);
const vgcanvas_paint = Module.cwrap("vgcanvas_paint", 
    "TRet", ["TVgcanvas","boolean","TBitmap"]);
const vgcanvas_set_font = Module.cwrap("vgcanvas_set_font", 
    "TRet", ["TVgcanvas","string"]);
const vgcanvas_set_font_size = Module.cwrap("vgcanvas_set_font_size", 
    "TRet", ["TVgcanvas","number"]);
const vgcanvas_set_text_align = Module.cwrap("vgcanvas_set_text_align", 
    "TRet", ["TVgcanvas","string"]);
const vgcanvas_set_text_baseline = Module.cwrap("vgcanvas_set_text_baseline", 
    "TRet", ["TVgcanvas","string"]);
const vgcanvas_fill_text = Module.cwrap("vgcanvas_fill_text", 
    "TRet", ["TVgcanvas","string","number","number","number"]);
const vgcanvas_measure_text = Module.cwrap("vgcanvas_measure_text", 
    "number", ["TVgcanvas","string"]);
const vgcanvas_draw_image = Module.cwrap("vgcanvas_draw_image", 
    "TRet", ["TVgcanvas","TBitmap","number","number","number","number","number","number","number","number"]);
const vgcanvas_draw_icon = Module.cwrap("vgcanvas_draw_icon", 
    "TRet", ["TVgcanvas","TBitmap","number","number","number","number","number","number","number","number"]);
const vgcanvas_set_antialias = Module.cwrap("vgcanvas_set_antialias", 
    "TRet", ["TVgcanvas","boolean"]);
const vgcanvas_set_global_alpha = Module.cwrap("vgcanvas_set_global_alpha", 
    "TRet", ["TVgcanvas","number"]);
const vgcanvas_set_line_width = Module.cwrap("vgcanvas_set_line_width", 
    "TRet", ["TVgcanvas","number"]);
const vgcanvas_set_fill_color_str = Module.cwrap("vgcanvas_set_fill_color_str", 
    "TRet", ["TVgcanvas","string"]);
const vgcanvas_set_stroke_color_str = Module.cwrap("vgcanvas_set_stroke_color_str", 
    "TRet", ["TVgcanvas","string"]);
const vgcanvas_set_line_cap = Module.cwrap("vgcanvas_set_line_cap", 
    "TRet", ["TVgcanvas","string"]);
const vgcanvas_set_line_join = Module.cwrap("vgcanvas_set_line_join", 
    "TRet", ["TVgcanvas","string"]);
const vgcanvas_set_miter_limit = Module.cwrap("vgcanvas_set_miter_limit", 
    "TRet", ["TVgcanvas","number"]);
const vgcanvas_save = Module.cwrap("vgcanvas_save", 
    "TRet", ["TVgcanvas"]);
const vgcanvas_restore = Module.cwrap("vgcanvas_restore", 
    "TRet", ["TVgcanvas"]);
const vgcanvas_t_get_prop_w = Module.cwrap("vgcanvas_t_get_prop_w", 
    "number", ["number"]);
const vgcanvas_t_get_prop_h = Module.cwrap("vgcanvas_t_get_prop_h", 
    "number", ["number"]);
const vgcanvas_t_get_prop_stride = Module.cwrap("vgcanvas_t_get_prop_stride", 
    "number", ["number"]);
const vgcanvas_t_get_prop_ratio = Module.cwrap("vgcanvas_t_get_prop_ratio", 
    "number", ["number"]);
const vgcanvas_t_get_prop_anti_alias = Module.cwrap("vgcanvas_t_get_prop_anti_alias", 
    "boolean", ["number"]);
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
const VGCANVAS_LINE_CAP_ROUND = Module.cwrap("VGCANVAS_LINE_CAP_ROUND", 
    "string", []);
const VGCANVAS_LINE_CAP_SQUARE = Module.cwrap("VGCANVAS_LINE_CAP_SQUARE", 
    "string", []);
const VGCANVAS_LINE_CAP_BUTT = Module.cwrap("VGCANVAS_LINE_CAP_BUTT", 
    "string", []);
const VGCANVAS_LINE_JOIN_ROUND = Module.cwrap("VGCANVAS_LINE_JOIN_ROUND", 
    "string", []);
const VGCANVAS_LINE_JOIN_BEVEL = Module.cwrap("VGCANVAS_LINE_JOIN_BEVEL", 
    "string", []);
const VGCANVAS_LINE_JOIN_MITTER = Module.cwrap("VGCANVAS_LINE_JOIN_MITTER", 
    "string", []);
const WIDGET_PROP_EXEC = Module.cwrap("WIDGET_PROP_EXEC", 
    "string", []);
const WIDGET_PROP_X = Module.cwrap("WIDGET_PROP_X", 
    "string", []);
const WIDGET_PROP_Y = Module.cwrap("WIDGET_PROP_Y", 
    "string", []);
const WIDGET_PROP_W = Module.cwrap("WIDGET_PROP_W", 
    "string", []);
const WIDGET_PROP_H = Module.cwrap("WIDGET_PROP_H", 
    "string", []);
const WIDGET_PROP_MAX_H = Module.cwrap("WIDGET_PROP_MAX_H", 
    "string", []);
const WIDGET_PROP_DESIGN_W = Module.cwrap("WIDGET_PROP_DESIGN_W", 
    "string", []);
const WIDGET_PROP_DESIGN_H = Module.cwrap("WIDGET_PROP_DESIGN_H", 
    "string", []);
const WIDGET_PROP_AUTO_SCALE_CHILDREN_X = Module.cwrap("WIDGET_PROP_AUTO_SCALE_CHILDREN_X", 
    "string", []);
const WIDGET_PROP_AUTO_SCALE_CHILDREN_Y = Module.cwrap("WIDGET_PROP_AUTO_SCALE_CHILDREN_Y", 
    "string", []);
const WIDGET_PROP_AUTO_SCALE_CHILDREN_W = Module.cwrap("WIDGET_PROP_AUTO_SCALE_CHILDREN_W", 
    "string", []);
const WIDGET_PROP_AUTO_SCALE_CHILDREN_H = Module.cwrap("WIDGET_PROP_AUTO_SCALE_CHILDREN_H", 
    "string", []);
const WIDGET_PROP_INPUTING = Module.cwrap("WIDGET_PROP_INPUTING", 
    "string", []);
const WIDGET_PROP_ALWAYS_ON_TOP = Module.cwrap("WIDGET_PROP_ALWAYS_ON_TOP", 
    "string", []);
const WIDGET_PROP_CARET_X = Module.cwrap("WIDGET_PROP_CARET_X", 
    "string", []);
const WIDGET_PROP_CARET_Y = Module.cwrap("WIDGET_PROP_CARET_Y", 
    "string", []);
const WIDGET_PROP_DIRTY_RECT_TOLERANCE = Module.cwrap("WIDGET_PROP_DIRTY_RECT_TOLERANCE", 
    "string", []);
const WIDGET_PROP_BIDI = Module.cwrap("WIDGET_PROP_BIDI", 
    "string", []);
const WIDGET_PROP_CANVAS = Module.cwrap("WIDGET_PROP_CANVAS", 
    "string", []);
const WIDGET_PROP_LOCALIZE_OPTIONS = Module.cwrap("WIDGET_PROP_LOCALIZE_OPTIONS", 
    "string", []);
const WIDGET_PROP_NATIVE_WINDOW = Module.cwrap("WIDGET_PROP_NATIVE_WINDOW", 
    "string", []);
const WIDGET_PROP_HIGHLIGHT = Module.cwrap("WIDGET_PROP_HIGHLIGHT", 
    "string", []);
const WIDGET_PROP_BAR_SIZE = Module.cwrap("WIDGET_PROP_BAR_SIZE", 
    "string", []);
const WIDGET_PROP_OPACITY = Module.cwrap("WIDGET_PROP_OPACITY", 
    "string", []);
const WIDGET_PROP_MIN_W = Module.cwrap("WIDGET_PROP_MIN_W", 
    "string", []);
const WIDGET_PROP_MAX_W = Module.cwrap("WIDGET_PROP_MAX_W", 
    "string", []);
const WIDGET_PROP_AUTO_ADJUST_SIZE = Module.cwrap("WIDGET_PROP_AUTO_ADJUST_SIZE", 
    "string", []);
const WIDGET_PROP_SINGLE_INSTANCE = Module.cwrap("WIDGET_PROP_SINGLE_INSTANCE", 
    "string", []);
const WIDGET_PROP_STRONGLY_FOCUS = Module.cwrap("WIDGET_PROP_STRONGLY_FOCUS", 
    "string", []);
const WIDGET_PROP_CHILDREN_LAYOUT = Module.cwrap("WIDGET_PROP_CHILDREN_LAYOUT", 
    "string", []);
const WIDGET_PROP_LAYOUT = Module.cwrap("WIDGET_PROP_LAYOUT", 
    "string", []);
const WIDGET_PROP_SELF_LAYOUT = Module.cwrap("WIDGET_PROP_SELF_LAYOUT", 
    "string", []);
const WIDGET_PROP_LAYOUT_W = Module.cwrap("WIDGET_PROP_LAYOUT_W", 
    "string", []);
const WIDGET_PROP_LAYOUT_H = Module.cwrap("WIDGET_PROP_LAYOUT_H", 
    "string", []);
const WIDGET_PROP_VIRTUAL_W = Module.cwrap("WIDGET_PROP_VIRTUAL_W", 
    "string", []);
const WIDGET_PROP_VIRTUAL_H = Module.cwrap("WIDGET_PROP_VIRTUAL_H", 
    "string", []);
const WIDGET_PROP_NAME = Module.cwrap("WIDGET_PROP_NAME", 
    "string", []);
const WIDGET_PROP_TYPE = Module.cwrap("WIDGET_PROP_TYPE", 
    "string", []);
const WIDGET_PROP_CLOSABLE = Module.cwrap("WIDGET_PROP_CLOSABLE", 
    "string", []);
const WIDGET_PROP_POINTER_CURSOR = Module.cwrap("WIDGET_PROP_POINTER_CURSOR", 
    "string", []);
const WIDGET_PROP_VALUE = Module.cwrap("WIDGET_PROP_VALUE", 
    "string", []);
const WIDGET_PROP_RADIO = Module.cwrap("WIDGET_PROP_RADIO", 
    "string", []);
const WIDGET_PROP_REVERSE = Module.cwrap("WIDGET_PROP_REVERSE", 
    "string", []);
const WIDGET_PROP_LENGTH = Module.cwrap("WIDGET_PROP_LENGTH", 
    "string", []);
const WIDGET_PROP_LINE_WRAP = Module.cwrap("WIDGET_PROP_LINE_WRAP", 
    "string", []);
const WIDGET_PROP_WORD_WRAP = Module.cwrap("WIDGET_PROP_WORD_WRAP", 
    "string", []);
const WIDGET_PROP_TEXT = Module.cwrap("WIDGET_PROP_TEXT", 
    "string", []);
const WIDGET_PROP_TR_TEXT = Module.cwrap("WIDGET_PROP_TR_TEXT", 
    "string", []);
const WIDGET_PROP_STYLE = Module.cwrap("WIDGET_PROP_STYLE", 
    "string", []);
const WIDGET_PROP_ENABLE = Module.cwrap("WIDGET_PROP_ENABLE", 
    "string", []);
const WIDGET_PROP_FEEDBACK = Module.cwrap("WIDGET_PROP_FEEDBACK", 
    "string", []);
const WIDGET_PROP_FLOATING = Module.cwrap("WIDGET_PROP_FLOATING", 
    "string", []);
const WIDGET_PROP_MARGIN = Module.cwrap("WIDGET_PROP_MARGIN", 
    "string", []);
const WIDGET_PROP_SPACING = Module.cwrap("WIDGET_PROP_SPACING", 
    "string", []);
const WIDGET_PROP_LEFT_MARGIN = Module.cwrap("WIDGET_PROP_LEFT_MARGIN", 
    "string", []);
const WIDGET_PROP_RIGHT_MARGIN = Module.cwrap("WIDGET_PROP_RIGHT_MARGIN", 
    "string", []);
const WIDGET_PROP_TOP_MARGIN = Module.cwrap("WIDGET_PROP_TOP_MARGIN", 
    "string", []);
const WIDGET_PROP_BOTTOM_MARGIN = Module.cwrap("WIDGET_PROP_BOTTOM_MARGIN", 
    "string", []);
const WIDGET_PROP_STEP = Module.cwrap("WIDGET_PROP_STEP", 
    "string", []);
const WIDGET_PROP_VISIBLE = Module.cwrap("WIDGET_PROP_VISIBLE", 
    "string", []);
const WIDGET_PROP_SENSITIVE = Module.cwrap("WIDGET_PROP_SENSITIVE", 
    "string", []);
const WIDGET_PROP_ANIMATION = Module.cwrap("WIDGET_PROP_ANIMATION", 
    "string", []);
const WIDGET_PROP_ANIM_HINT = Module.cwrap("WIDGET_PROP_ANIM_HINT", 
    "string", []);
const WIDGET_PROP_FULLSCREEN = Module.cwrap("WIDGET_PROP_FULLSCREEN", 
    "string", []);
const WIDGET_PROP_DISABLE_ANIM = Module.cwrap("WIDGET_PROP_DISABLE_ANIM", 
    "string", []);
const WIDGET_PROP_OPEN_ANIM_HINT = Module.cwrap("WIDGET_PROP_OPEN_ANIM_HINT", 
    "string", []);
const WIDGET_PROP_CLOSE_ANIM_HINT = Module.cwrap("WIDGET_PROP_CLOSE_ANIM_HINT", 
    "string", []);
const WIDGET_PROP_MIN = Module.cwrap("WIDGET_PROP_MIN", 
    "string", []);
const WIDGET_PROP_ACTION_TEXT = Module.cwrap("WIDGET_PROP_ACTION_TEXT", 
    "string", []);
const WIDGET_PROP_TIPS = Module.cwrap("WIDGET_PROP_TIPS", 
    "string", []);
const WIDGET_PROP_TR_TIPS = Module.cwrap("WIDGET_PROP_TR_TIPS", 
    "string", []);
const WIDGET_PROP_INPUT_TYPE = Module.cwrap("WIDGET_PROP_INPUT_TYPE", 
    "string", []);
const WIDGET_PROP_KEYBOARD = Module.cwrap("WIDGET_PROP_KEYBOARD", 
    "string", []);
const WIDGET_PROP_DEFAULT_FOCUSED_CHILD = Module.cwrap("WIDGET_PROP_DEFAULT_FOCUSED_CHILD", 
    "string", []);
const WIDGET_PROP_READONLY = Module.cwrap("WIDGET_PROP_READONLY", 
    "string", []);
const WIDGET_PROP_CANCELABLE = Module.cwrap("WIDGET_PROP_CANCELABLE", 
    "string", []);
const WIDGET_PROP_PASSWORD_VISIBLE = Module.cwrap("WIDGET_PROP_PASSWORD_VISIBLE", 
    "string", []);
const WIDGET_PROP_ACTIVE = Module.cwrap("WIDGET_PROP_ACTIVE", 
    "string", []);
const WIDGET_PROP_CURR_PAGE = Module.cwrap("WIDGET_PROP_CURR_PAGE", 
    "string", []);
const WIDGET_PROP_PAGE_MAX_NUMBER = Module.cwrap("WIDGET_PROP_PAGE_MAX_NUMBER", 
    "string", []);
const WIDGET_PROP_VERTICAL = Module.cwrap("WIDGET_PROP_VERTICAL", 
    "string", []);
const WIDGET_PROP_SHOW_TEXT = Module.cwrap("WIDGET_PROP_SHOW_TEXT", 
    "string", []);
const WIDGET_PROP_XOFFSET = Module.cwrap("WIDGET_PROP_XOFFSET", 
    "string", []);
const WIDGET_PROP_YOFFSET = Module.cwrap("WIDGET_PROP_YOFFSET", 
    "string", []);
const WIDGET_PROP_ALIGN_V = Module.cwrap("WIDGET_PROP_ALIGN_V", 
    "string", []);
const WIDGET_PROP_ALIGN_H = Module.cwrap("WIDGET_PROP_ALIGN_H", 
    "string", []);
const WIDGET_PROP_AUTO_PLAY = Module.cwrap("WIDGET_PROP_AUTO_PLAY", 
    "string", []);
const WIDGET_PROP_LOOP = Module.cwrap("WIDGET_PROP_LOOP", 
    "string", []);
const WIDGET_PROP_AUTO_FIX = Module.cwrap("WIDGET_PROP_AUTO_FIX", 
    "string", []);
const WIDGET_PROP_SELECT_NONE_WHEN_FOCUSED = Module.cwrap("WIDGET_PROP_SELECT_NONE_WHEN_FOCUSED", 
    "string", []);
const WIDGET_PROP_OPEN_IM_WHEN_FOCUSED = Module.cwrap("WIDGET_PROP_OPEN_IM_WHEN_FOCUSED", 
    "string", []);
const WIDGET_PROP_CLOSE_IM_WHEN_BLURED = Module.cwrap("WIDGET_PROP_CLOSE_IM_WHEN_BLURED", 
    "string", []);
const WIDGET_PROP_X_MIN = Module.cwrap("WIDGET_PROP_X_MIN", 
    "string", []);
const WIDGET_PROP_X_MAX = Module.cwrap("WIDGET_PROP_X_MAX", 
    "string", []);
const WIDGET_PROP_Y_MIN = Module.cwrap("WIDGET_PROP_Y_MIN", 
    "string", []);
const WIDGET_PROP_Y_MAX = Module.cwrap("WIDGET_PROP_Y_MAX", 
    "string", []);
const WIDGET_PROP_MAX = Module.cwrap("WIDGET_PROP_MAX", 
    "string", []);
const WIDGET_PROP_GRAB_KEYS = Module.cwrap("WIDGET_PROP_GRAB_KEYS", 
    "string", []);
const WIDGET_PROP_ROW = Module.cwrap("WIDGET_PROP_ROW", 
    "string", []);
const WIDGET_PROP_STATE_FOR_STYLE = Module.cwrap("WIDGET_PROP_STATE_FOR_STYLE", 
    "string", []);
const WIDGET_PROP_THEME = Module.cwrap("WIDGET_PROP_THEME", 
    "string", []);
const WIDGET_PROP_STAGE = Module.cwrap("WIDGET_PROP_STAGE", 
    "string", []);
const WIDGET_PROP_IMAGE_MANAGER = Module.cwrap("WIDGET_PROP_IMAGE_MANAGER", 
    "string", []);
const WIDGET_PROP_ASSETS_MANAGER = Module.cwrap("WIDGET_PROP_ASSETS_MANAGER", 
    "string", []);
const WIDGET_PROP_LOCALE_INFO = Module.cwrap("WIDGET_PROP_LOCALE_INFO", 
    "string", []);
const WIDGET_PROP_FONT_MANAGER = Module.cwrap("WIDGET_PROP_FONT_MANAGER", 
    "string", []);
const WIDGET_PROP_THEME_OBJ = Module.cwrap("WIDGET_PROP_THEME_OBJ", 
    "string", []);
const WIDGET_PROP_DEFAULT_THEME_OBJ = Module.cwrap("WIDGET_PROP_DEFAULT_THEME_OBJ", 
    "string", []);
const WIDGET_PROP_ITEM_WIDTH = Module.cwrap("WIDGET_PROP_ITEM_WIDTH", 
    "string", []);
const WIDGET_PROP_ITEM_HEIGHT = Module.cwrap("WIDGET_PROP_ITEM_HEIGHT", 
    "string", []);
const WIDGET_PROP_DEFAULT_ITEM_HEIGHT = Module.cwrap("WIDGET_PROP_DEFAULT_ITEM_HEIGHT", 
    "string", []);
const WIDGET_PROP_XSLIDABLE = Module.cwrap("WIDGET_PROP_XSLIDABLE", 
    "string", []);
const WIDGET_PROP_YSLIDABLE = Module.cwrap("WIDGET_PROP_YSLIDABLE", 
    "string", []);
const WIDGET_PROP_REPEAT = Module.cwrap("WIDGET_PROP_REPEAT", 
    "string", []);
const WIDGET_PROP_LONG_PRESS_TIME = Module.cwrap("WIDGET_PROP_LONG_PRESS_TIME", 
    "string", []);
const WIDGET_PROP_ENABLE_LONG_PRESS = Module.cwrap("WIDGET_PROP_ENABLE_LONG_PRESS", 
    "string", []);
const WIDGET_PROP_CLICK_THROUGH = Module.cwrap("WIDGET_PROP_CLICK_THROUGH", 
    "string", []);
const WIDGET_PROP_ANIMATABLE = Module.cwrap("WIDGET_PROP_ANIMATABLE", 
    "string", []);
const WIDGET_PROP_AUTO_HIDE = Module.cwrap("WIDGET_PROP_AUTO_HIDE", 
    "string", []);
const WIDGET_PROP_AUTO_HIDE_SCROLL_BAR = Module.cwrap("WIDGET_PROP_AUTO_HIDE_SCROLL_BAR", 
    "string", []);
const WIDGET_PROP_IMAGE = Module.cwrap("WIDGET_PROP_IMAGE", 
    "string", []);
const WIDGET_PROP_FORMAT = Module.cwrap("WIDGET_PROP_FORMAT", 
    "string", []);
const WIDGET_PROP_DRAW_TYPE = Module.cwrap("WIDGET_PROP_DRAW_TYPE", 
    "string", []);
const WIDGET_PROP_SELECTABLE = Module.cwrap("WIDGET_PROP_SELECTABLE", 
    "string", []);
const WIDGET_PROP_CLICKABLE = Module.cwrap("WIDGET_PROP_CLICKABLE", 
    "string", []);
const WIDGET_PROP_SCALE_X = Module.cwrap("WIDGET_PROP_SCALE_X", 
    "string", []);
const WIDGET_PROP_SCALE_Y = Module.cwrap("WIDGET_PROP_SCALE_Y", 
    "string", []);
const WIDGET_PROP_ANCHOR_X = Module.cwrap("WIDGET_PROP_ANCHOR_X", 
    "string", []);
const WIDGET_PROP_ANCHOR_Y = Module.cwrap("WIDGET_PROP_ANCHOR_Y", 
    "string", []);
const WIDGET_PROP_ROTATION = Module.cwrap("WIDGET_PROP_ROTATION", 
    "string", []);
const WIDGET_PROP_COMPACT = Module.cwrap("WIDGET_PROP_COMPACT", 
    "string", []);
const WIDGET_PROP_SCROLLABLE = Module.cwrap("WIDGET_PROP_SCROLLABLE", 
    "string", []);
const WIDGET_PROP_ICON = Module.cwrap("WIDGET_PROP_ICON", 
    "string", []);
const WIDGET_PROP_OPTIONS = Module.cwrap("WIDGET_PROP_OPTIONS", 
    "string", []);
const WIDGET_PROP_SELECTED = Module.cwrap("WIDGET_PROP_SELECTED", 
    "string", []);
const WIDGET_PROP_CHECKED = Module.cwrap("WIDGET_PROP_CHECKED", 
    "string", []);
const WIDGET_PROP_ACTIVE_ICON = Module.cwrap("WIDGET_PROP_ACTIVE_ICON", 
    "string", []);
const WIDGET_PROP_LOAD_UI = Module.cwrap("WIDGET_PROP_LOAD_UI", 
    "string", []);
const WIDGET_PROP_OPEN_WINDOW = Module.cwrap("WIDGET_PROP_OPEN_WINDOW", 
    "string", []);
const WIDGET_PROP_SELECTED_INDEX = Module.cwrap("WIDGET_PROP_SELECTED_INDEX", 
    "string", []);
const WIDGET_PROP_CLOSE_WHEN_CLICK = Module.cwrap("WIDGET_PROP_CLOSE_WHEN_CLICK", 
    "string", []);
const WIDGET_PROP_CLOSE_WHEN_CLICK_OUTSIDE = Module.cwrap("WIDGET_PROP_CLOSE_WHEN_CLICK_OUTSIDE", 
    "string", []);
const WIDGET_PROP_CLOSE_WHEN_TIMEOUT = Module.cwrap("WIDGET_PROP_CLOSE_WHEN_TIMEOUT", 
    "string", []);
const WIDGET_PROP_LINE_GAP = Module.cwrap("WIDGET_PROP_LINE_GAP", 
    "string", []);
const WIDGET_PROP_BG_COLOR = Module.cwrap("WIDGET_PROP_BG_COLOR", 
    "string", []);
const WIDGET_PROP_BORDER_COLOR = Module.cwrap("WIDGET_PROP_BORDER_COLOR", 
    "string", []);
const WIDGET_PROP_DELAY = Module.cwrap("WIDGET_PROP_DELAY", 
    "string", []);
const WIDGET_PROP_IS_KEYBOARD = Module.cwrap("WIDGET_PROP_IS_KEYBOARD", 
    "string", []);
const WIDGET_PROP_FOCUSED = Module.cwrap("WIDGET_PROP_FOCUSED", 
    "string", []);
const WIDGET_PROP_FOCUS = Module.cwrap("WIDGET_PROP_FOCUS", 
    "string", []);
const WIDGET_PROP_FOCUSABLE = Module.cwrap("WIDGET_PROP_FOCUSABLE", 
    "string", []);
const WIDGET_PROP_WITH_FOCUS_STATE = Module.cwrap("WIDGET_PROP_WITH_FOCUS_STATE", 
    "string", []);
const WIDGET_PROP_MOVE_FOCUS_PREV_KEY = Module.cwrap("WIDGET_PROP_MOVE_FOCUS_PREV_KEY", 
    "string", []);
const WIDGET_PROP_MOVE_FOCUS_NEXT_KEY = Module.cwrap("WIDGET_PROP_MOVE_FOCUS_NEXT_KEY", 
    "string", []);
const WIDGET_PROP_MOVE_FOCUS_UP_KEY = Module.cwrap("WIDGET_PROP_MOVE_FOCUS_UP_KEY", 
    "string", []);
const WIDGET_PROP_MOVE_FOCUS_DOWN_KEY = Module.cwrap("WIDGET_PROP_MOVE_FOCUS_DOWN_KEY", 
    "string", []);
const WIDGET_PROP_MOVE_FOCUS_LEFT_KEY = Module.cwrap("WIDGET_PROP_MOVE_FOCUS_LEFT_KEY", 
    "string", []);
const WIDGET_PROP_MOVE_FOCUS_RIGHT_KEY = Module.cwrap("WIDGET_PROP_MOVE_FOCUS_RIGHT_KEY", 
    "string", []);
const WIDGET_TYPE_NONE = Module.cwrap("WIDGET_TYPE_NONE", 
    "string", []);
const WIDGET_TYPE_WINDOW_MANAGER = Module.cwrap("WIDGET_TYPE_WINDOW_MANAGER", 
    "string", []);
const WIDGET_TYPE_NORMAL_WINDOW = Module.cwrap("WIDGET_TYPE_NORMAL_WINDOW", 
    "string", []);
const WIDGET_TYPE_OVERLAY = Module.cwrap("WIDGET_TYPE_OVERLAY", 
    "string", []);
const WIDGET_TYPE_TOOL_BAR = Module.cwrap("WIDGET_TYPE_TOOL_BAR", 
    "string", []);
const WIDGET_TYPE_DIALOG = Module.cwrap("WIDGET_TYPE_DIALOG", 
    "string", []);
const WIDGET_TYPE_POPUP = Module.cwrap("WIDGET_TYPE_POPUP", 
    "string", []);
const WIDGET_TYPE_SYSTEM_BAR = Module.cwrap("WIDGET_TYPE_SYSTEM_BAR", 
    "string", []);
const WIDGET_TYPE_SYSTEM_BAR_BOTTOM = Module.cwrap("WIDGET_TYPE_SYSTEM_BAR_BOTTOM", 
    "string", []);
const WIDGET_TYPE_SPRITE = Module.cwrap("WIDGET_TYPE_SPRITE", 
    "string", []);
const WIDGET_TYPE_KEYBOARD = Module.cwrap("WIDGET_TYPE_KEYBOARD", 
    "string", []);
const WIDGET_TYPE_DND = Module.cwrap("WIDGET_TYPE_DND", 
    "string", []);
const WIDGET_TYPE_LABEL = Module.cwrap("WIDGET_TYPE_LABEL", 
    "string", []);
const WIDGET_TYPE_BUTTON = Module.cwrap("WIDGET_TYPE_BUTTON", 
    "string", []);
const WIDGET_TYPE_IMAGE = Module.cwrap("WIDGET_TYPE_IMAGE", 
    "string", []);
const WIDGET_TYPE_EDIT = Module.cwrap("WIDGET_TYPE_EDIT", 
    "string", []);
const WIDGET_TYPE_PROGRESS_BAR = Module.cwrap("WIDGET_TYPE_PROGRESS_BAR", 
    "string", []);
const WIDGET_TYPE_GROUP_BOX = Module.cwrap("WIDGET_TYPE_GROUP_BOX", 
    "string", []);
const WIDGET_TYPE_CHECK_BUTTON = Module.cwrap("WIDGET_TYPE_CHECK_BUTTON", 
    "string", []);
const WIDGET_TYPE_RADIO_BUTTON = Module.cwrap("WIDGET_TYPE_RADIO_BUTTON", 
    "string", []);
const WIDGET_TYPE_DIALOG_TITLE = Module.cwrap("WIDGET_TYPE_DIALOG_TITLE", 
    "string", []);
const WIDGET_TYPE_DIALOG_CLIENT = Module.cwrap("WIDGET_TYPE_DIALOG_CLIENT", 
    "string", []);
const WIDGET_TYPE_SLIDER = Module.cwrap("WIDGET_TYPE_SLIDER", 
    "string", []);
const WIDGET_TYPE_VIEW = Module.cwrap("WIDGET_TYPE_VIEW", 
    "string", []);
const WIDGET_TYPE_COMBO_BOX = Module.cwrap("WIDGET_TYPE_COMBO_BOX", 
    "string", []);
const WIDGET_TYPE_COMBO_BOX_ITEM = Module.cwrap("WIDGET_TYPE_COMBO_BOX_ITEM", 
    "string", []);
const WIDGET_TYPE_SLIDE_VIEW = Module.cwrap("WIDGET_TYPE_SLIDE_VIEW", 
    "string", []);
const WIDGET_TYPE_SLIDE_INDICATOR = Module.cwrap("WIDGET_TYPE_SLIDE_INDICATOR", 
    "string", []);
const WIDGET_TYPE_SLIDE_INDICATOR_ARC = Module.cwrap("WIDGET_TYPE_SLIDE_INDICATOR_ARC", 
    "string", []);
const WIDGET_TYPE_PAGES = Module.cwrap("WIDGET_TYPE_PAGES", 
    "string", []);
const WIDGET_TYPE_TAB_BUTTON = Module.cwrap("WIDGET_TYPE_TAB_BUTTON", 
    "string", []);
const WIDGET_TYPE_TAB_CONTROL = Module.cwrap("WIDGET_TYPE_TAB_CONTROL", 
    "string", []);
const WIDGET_TYPE_TAB_BUTTON_GROUP = Module.cwrap("WIDGET_TYPE_TAB_BUTTON_GROUP", 
    "string", []);
const WIDGET_TYPE_BUTTON_GROUP = Module.cwrap("WIDGET_TYPE_BUTTON_GROUP", 
    "string", []);
const WIDGET_TYPE_CANDIDATES = Module.cwrap("WIDGET_TYPE_CANDIDATES", 
    "string", []);
const WIDGET_TYPE_SPIN_BOX = Module.cwrap("WIDGET_TYPE_SPIN_BOX", 
    "string", []);
const WIDGET_TYPE_DRAGGER = Module.cwrap("WIDGET_TYPE_DRAGGER", 
    "string", []);
const WIDGET_TYPE_SCROLL_BAR = Module.cwrap("WIDGET_TYPE_SCROLL_BAR", 
    "string", []);
const WIDGET_TYPE_SCROLL_BAR_DESKTOP = Module.cwrap("WIDGET_TYPE_SCROLL_BAR_DESKTOP", 
    "string", []);
const WIDGET_TYPE_SCROLL_BAR_MOBILE = Module.cwrap("WIDGET_TYPE_SCROLL_BAR_MOBILE", 
    "string", []);
const WIDGET_TYPE_SCROLL_VIEW = Module.cwrap("WIDGET_TYPE_SCROLL_VIEW", 
    "string", []);
const WIDGET_TYPE_LIST_VIEW = Module.cwrap("WIDGET_TYPE_LIST_VIEW", 
    "string", []);
const WIDGET_TYPE_LIST_VIEW_H = Module.cwrap("WIDGET_TYPE_LIST_VIEW_H", 
    "string", []);
const WIDGET_TYPE_LIST_ITEM = Module.cwrap("WIDGET_TYPE_LIST_ITEM", 
    "string", []);
const WIDGET_TYPE_COLOR_PICKER = Module.cwrap("WIDGET_TYPE_COLOR_PICKER", 
    "string", []);
const WIDGET_TYPE_COLOR_COMPONENT = Module.cwrap("WIDGET_TYPE_COLOR_COMPONENT", 
    "string", []);
const WIDGET_TYPE_COLOR_TILE = Module.cwrap("WIDGET_TYPE_COLOR_TILE", 
    "string", []);
const WIDGET_TYPE_CLIP_VIEW = Module.cwrap("WIDGET_TYPE_CLIP_VIEW", 
    "string", []);
const WIDGET_TYPE_RICH_TEXT = Module.cwrap("WIDGET_TYPE_RICH_TEXT", 
    "string", []);
const WIDGET_TYPE_APP_BAR = Module.cwrap("WIDGET_TYPE_APP_BAR", 
    "string", []);
const WIDGET_TYPE_GRID = Module.cwrap("WIDGET_TYPE_GRID", 
    "string", []);
const WIDGET_TYPE_GRID_ITEM = Module.cwrap("WIDGET_TYPE_GRID_ITEM", 
    "string", []);
const WIDGET_TYPE_ROW = Module.cwrap("WIDGET_TYPE_ROW", 
    "string", []);
const WIDGET_TYPE_COLUMN = Module.cwrap("WIDGET_TYPE_COLUMN", 
    "string", []);
const WIDGET_TYPE_CALIBRATION_WIN = Module.cwrap("WIDGET_TYPE_CALIBRATION_WIN", 
    "string", []);
const WINDOW_STAGE_NONE = Module.cwrap("WINDOW_STAGE_NONE", 
    "number", []);
const WINDOW_STAGE_LOADED = Module.cwrap("WINDOW_STAGE_LOADED", 
    "number", []);
const WINDOW_STAGE_CREATED = Module.cwrap("WINDOW_STAGE_CREATED", 
    "number", []);
const WINDOW_STAGE_OPENED = Module.cwrap("WINDOW_STAGE_OPENED", 
    "number", []);
const WINDOW_STAGE_CLOSED = Module.cwrap("WINDOW_STAGE_CLOSED", 
    "number", []);
const WINDOW_STAGE_SUSPEND = Module.cwrap("WINDOW_STAGE_SUSPEND", 
    "number", []);
const WINDOW_CLOSABLE_YES = Module.cwrap("WINDOW_CLOSABLE_YES", 
    "number", []);
const WINDOW_CLOSABLE_NO = Module.cwrap("WINDOW_CLOSABLE_NO", 
    "number", []);
const WINDOW_CLOSABLE_CONFIRM = Module.cwrap("WINDOW_CLOSABLE_CONFIRM", 
    "number", []);
const WIDGET_STATE_NONE = Module.cwrap("WIDGET_STATE_NONE", 
    "string", []);
const WIDGET_STATE_NORMAL = Module.cwrap("WIDGET_STATE_NORMAL", 
    "string", []);
const WIDGET_STATE_CHANGED = Module.cwrap("WIDGET_STATE_CHANGED", 
    "string", []);
const WIDGET_STATE_PRESSED = Module.cwrap("WIDGET_STATE_PRESSED", 
    "string", []);
const WIDGET_STATE_OVER = Module.cwrap("WIDGET_STATE_OVER", 
    "string", []);
const WIDGET_STATE_DISABLE = Module.cwrap("WIDGET_STATE_DISABLE", 
    "string", []);
const WIDGET_STATE_FOCUSED = Module.cwrap("WIDGET_STATE_FOCUSED", 
    "string", []);
const WIDGET_STATE_CHECKED = Module.cwrap("WIDGET_STATE_CHECKED", 
    "string", []);
const WIDGET_STATE_UNCHECKED = Module.cwrap("WIDGET_STATE_UNCHECKED", 
    "string", []);
const WIDGET_STATE_EMPTY = Module.cwrap("WIDGET_STATE_EMPTY", 
    "string", []);
const WIDGET_STATE_EMPTY_FOCUS = Module.cwrap("WIDGET_STATE_EMPTY_FOCUS", 
    "string", []);
const WIDGET_STATE_ERROR = Module.cwrap("WIDGET_STATE_ERROR", 
    "string", []);
const WIDGET_STATE_SELECTED = Module.cwrap("WIDGET_STATE_SELECTED", 
    "string", []);
const WIDGET_STATE_NORMAL_OF_CHECKED = Module.cwrap("WIDGET_STATE_NORMAL_OF_CHECKED", 
    "string", []);
const WIDGET_STATE_PRESSED_OF_CHECKED = Module.cwrap("WIDGET_STATE_PRESSED_OF_CHECKED", 
    "string", []);
const WIDGET_STATE_OVER_OF_CHECKED = Module.cwrap("WIDGET_STATE_OVER_OF_CHECKED", 
    "string", []);
const WIDGET_STATE_DISABLE_OF_CHECKED = Module.cwrap("WIDGET_STATE_DISABLE_OF_CHECKED", 
    "string", []);
const WIDGET_STATE_FOCUSED_OF_CHECKED = Module.cwrap("WIDGET_STATE_FOCUSED_OF_CHECKED", 
    "string", []);
const WIDGET_STATE_NORMAL_OF_ACTIVE = Module.cwrap("WIDGET_STATE_NORMAL_OF_ACTIVE", 
    "string", []);
const WIDGET_STATE_PRESSED_OF_ACTIVE = Module.cwrap("WIDGET_STATE_PRESSED_OF_ACTIVE", 
    "string", []);
const WIDGET_STATE_OVER_OF_ACTIVE = Module.cwrap("WIDGET_STATE_OVER_OF_ACTIVE", 
    "string", []);
const WIDGET_STATE_DISABLE_OF_ACTIVE = Module.cwrap("WIDGET_STATE_DISABLE_OF_ACTIVE", 
    "string", []);
const WIDGET_STATE_FOCUSED_OF_ACTIVE = Module.cwrap("WIDGET_STATE_FOCUSED_OF_ACTIVE", 
    "string", []);
const WIDGET_CURSOR_DEFAULT = Module.cwrap("WIDGET_CURSOR_DEFAULT", 
    "string", []);
const WIDGET_CURSOR_EDIT = Module.cwrap("WIDGET_CURSOR_EDIT", 
    "string", []);
const WIDGET_CURSOR_HAND = Module.cwrap("WIDGET_CURSOR_HAND", 
    "string", []);
const WIDGET_CURSOR_WAIT = Module.cwrap("WIDGET_CURSOR_WAIT", 
    "string", []);
const WIDGET_CURSOR_CROSS = Module.cwrap("WIDGET_CURSOR_CROSS", 
    "string", []);
const WIDGET_CURSOR_NO = Module.cwrap("WIDGET_CURSOR_NO", 
    "string", []);
const WIDGET_CURSOR_SIZENWSE = Module.cwrap("WIDGET_CURSOR_SIZENWSE", 
    "string", []);
const WIDGET_CURSOR_SIZENESW = Module.cwrap("WIDGET_CURSOR_SIZENESW", 
    "string", []);
const WIDGET_CURSOR_SIZEWE = Module.cwrap("WIDGET_CURSOR_SIZEWE", 
    "string", []);
const WIDGET_CURSOR_SIZENS = Module.cwrap("WIDGET_CURSOR_SIZENS", 
    "string", []);
const WIDGET_CURSOR_SIZEALL = Module.cwrap("WIDGET_CURSOR_SIZEALL", 
    "string", []);
const widget_count_children = Module.cwrap("widget_count_children", 
    "number", ["TWidget"]);
const widget_get_child = Module.cwrap("widget_get_child", 
    "TWidget", ["TWidget","number"]);
const widget_get_focused_widget = Module.cwrap("widget_get_focused_widget", 
    "TWidget", ["TWidget"]);
const widget_get_native_window = Module.cwrap("widget_get_native_window", 
    "TNativeWindow", ["TWidget"]);
const widget_index_of = Module.cwrap("widget_index_of", 
    "number", ["TWidget"]);
const widget_close_window = Module.cwrap("widget_close_window", 
    "TRet", ["TWidget"]);
const widget_close_window_force = Module.cwrap("widget_close_window_force", 
    "TRet", ["TWidget"]);
const widget_back = Module.cwrap("widget_back", 
    "TRet", ["TWidget"]);
const widget_back_to_home = Module.cwrap("widget_back_to_home", 
    "TRet", ["TWidget"]);
const widget_move = Module.cwrap("widget_move", 
    "TRet", ["TWidget","number","number"]);
const widget_resize = Module.cwrap("widget_resize", 
    "TRet", ["TWidget","number","number"]);
const widget_move_resize = Module.cwrap("widget_move_resize", 
    "TRet", ["TWidget","number","number","number","number"]);
const widget_set_value = Module.cwrap("widget_set_value", 
    "TRet", ["TWidget","number"]);
const widget_animate_value_to = Module.cwrap("widget_animate_value_to", 
    "TRet", ["TWidget","number","number"]);
const widget_add_value = Module.cwrap("widget_add_value", 
    "TRet", ["TWidget","number"]);
const widget_is_style_exist = Module.cwrap("widget_is_style_exist", 
    "boolean", ["TWidget","string","string"]);
const widget_use_style = Module.cwrap("widget_use_style", 
    "TRet", ["TWidget","string"]);
const widget_set_text_utf8 = Module.cwrap("widget_set_text_utf8", 
    "TRet", ["TWidget","string"]);
const widget_set_child_text_utf8 = Module.cwrap("widget_set_child_text_utf8", 
    "TRet", ["TWidget","string","string"]);
const widget_set_child_text_with_double = Module.cwrap("widget_set_child_text_with_double", 
    "TRet", ["TWidget","string","string","number"]);
const widget_set_child_text_with_int = Module.cwrap("widget_set_child_text_with_int", 
    "TRet", ["TWidget","string","string","number"]);
const widget_set_tr_text = Module.cwrap("widget_set_tr_text", 
    "TRet", ["TWidget","string"]);
const widget_get_value = Module.cwrap("widget_get_value", 
    "number", ["TWidget"]);
const widget_get_enable = Module.cwrap("widget_get_enable", 
    "boolean", ["TWidget"]);
const widget_get_floating = Module.cwrap("widget_get_floating", 
    "boolean", ["TWidget"]);
const widget_get_auto_adjust_size = Module.cwrap("widget_get_auto_adjust_size", 
    "boolean", ["TWidget"]);
const widget_get_with_focus_state = Module.cwrap("widget_get_with_focus_state", 
    "boolean", ["TWidget"]);
const widget_get_focusable = Module.cwrap("widget_get_focusable", 
    "boolean", ["TWidget"]);
const widget_get_sensitive = Module.cwrap("widget_get_sensitive", 
    "boolean", ["TWidget"]);
const widget_get_visible = Module.cwrap("widget_get_visible", 
    "boolean", ["TWidget"]);
const widget_get_feedback = Module.cwrap("widget_get_feedback", 
    "boolean", ["TWidget"]);
const widget_get_text = Module.cwrap("widget_get_text", 
    "any", ["TWidget"]);
const widget_set_name = Module.cwrap("widget_set_name", 
    "TRet", ["TWidget","string"]);
const widget_set_theme = Module.cwrap("widget_set_theme", 
    "TRet", ["TWidget","string"]);
const widget_set_pointer_cursor = Module.cwrap("widget_set_pointer_cursor", 
    "TRet", ["TWidget","string"]);
const widget_set_animation = Module.cwrap("widget_set_animation", 
    "TRet", ["TWidget","string"]);
const widget_create_animator = Module.cwrap("widget_create_animator", 
    "TRet", ["TWidget","string"]);
const widget_start_animator = Module.cwrap("widget_start_animator", 
    "TRet", ["TWidget","string"]);
const widget_set_animator_time_scale = Module.cwrap("widget_set_animator_time_scale", 
    "TRet", ["TWidget","string","number"]);
const widget_pause_animator = Module.cwrap("widget_pause_animator", 
    "TRet", ["TWidget","string"]);
const widget_stop_animator = Module.cwrap("widget_stop_animator", 
    "TRet", ["TWidget","string"]);
const widget_destroy_animator = Module.cwrap("widget_destroy_animator", 
    "TRet", ["TWidget","string"]);
const widget_set_enable = Module.cwrap("widget_set_enable", 
    "TRet", ["TWidget","boolean"]);
const widget_set_feedback = Module.cwrap("widget_set_feedback", 
    "TRet", ["TWidget","boolean"]);
const widget_set_auto_adjust_size = Module.cwrap("widget_set_auto_adjust_size", 
    "TRet", ["TWidget","boolean"]);
const widget_set_floating = Module.cwrap("widget_set_floating", 
    "TRet", ["TWidget","boolean"]);
const widget_set_focused = Module.cwrap("widget_set_focused", 
    "TRet", ["TWidget","boolean"]);
const widget_set_focusable = Module.cwrap("widget_set_focusable", 
    "TRet", ["TWidget","boolean"]);
const widget_set_state = Module.cwrap("widget_set_state", 
    "TRet", ["TWidget","string"]);
const widget_set_opacity = Module.cwrap("widget_set_opacity", 
    "TRet", ["TWidget","number"]);
const widget_set_dirty_rect_tolerance = Module.cwrap("widget_set_dirty_rect_tolerance", 
    "TRet", ["TWidget","number"]);
const widget_destroy_children = Module.cwrap("widget_destroy_children", 
    "TRet", ["TWidget"]);
const widget_add_child = Module.cwrap("widget_add_child", 
    "TRet", ["TWidget","TWidget"]);
const widget_remove_child = Module.cwrap("widget_remove_child", 
    "TRet", ["TWidget","TWidget"]);
const widget_insert_child = Module.cwrap("widget_insert_child", 
    "TRet", ["TWidget","number","TWidget"]);
const widget_restack = Module.cwrap("widget_restack", 
    "TRet", ["TWidget","number"]);
const widget_child = Module.cwrap("widget_child", 
    "TWidget", ["TWidget","string"]);
const widget_lookup = Module.cwrap("widget_lookup", 
    "TWidget", ["TWidget","string","boolean"]);
const widget_lookup_by_type = Module.cwrap("widget_lookup_by_type", 
    "TWidget", ["TWidget","string","boolean"]);
const widget_set_visible = Module.cwrap("widget_set_visible", 
    "TRet", ["TWidget","boolean"]);
const widget_set_visible_only = Module.cwrap("widget_set_visible_only", 
    "TRet", ["TWidget","boolean"]);
const widget_set_sensitive = Module.cwrap("widget_set_sensitive", 
    "TRet", ["TWidget","boolean"]);
const widget_on = Module.cwrap("widget_on", 
    "number", ["TWidget","TEventType","Function","any"]);
const widget_off = Module.cwrap("widget_off", 
    "TRet", ["TWidget","number"]);
const widget_invalidate_force = Module.cwrap("widget_invalidate_force", 
    "TRet", ["TWidget","TRect"]);
const widget_set_prop_str = Module.cwrap("widget_set_prop_str", 
    "TRet", ["TWidget","string","string"]);
const widget_get_prop_str = Module.cwrap("widget_get_prop_str", 
    "string", ["TWidget","string","string"]);
const widget_set_prop_pointer = Module.cwrap("widget_set_prop_pointer", 
    "TRet", ["TWidget","string","any"]);
const widget_get_prop_pointer = Module.cwrap("widget_get_prop_pointer", 
    "any", ["TWidget","string"]);
const widget_set_prop_int = Module.cwrap("widget_set_prop_int", 
    "TRet", ["TWidget","string","number"]);
const widget_get_prop_int = Module.cwrap("widget_get_prop_int", 
    "number", ["TWidget","string","number"]);
const widget_set_prop_bool = Module.cwrap("widget_set_prop_bool", 
    "TRet", ["TWidget","string","boolean"]);
const widget_get_prop_bool = Module.cwrap("widget_get_prop_bool", 
    "boolean", ["TWidget","string","boolean"]);
const widget_is_window_opened = Module.cwrap("widget_is_window_opened", 
    "boolean", ["TWidget"]);
const widget_is_window_created = Module.cwrap("widget_is_window_created", 
    "boolean", ["TWidget"]);
const widget_is_parent_of = Module.cwrap("widget_is_parent_of", 
    "boolean", ["TWidget","TWidget"]);
const widget_is_direct_parent_of = Module.cwrap("widget_is_direct_parent_of", 
    "boolean", ["TWidget","TWidget"]);
const widget_is_window = Module.cwrap("widget_is_window", 
    "boolean", ["TWidget"]);
const widget_is_system_bar = Module.cwrap("widget_is_system_bar", 
    "boolean", ["TWidget"]);
const widget_is_normal_window = Module.cwrap("widget_is_normal_window", 
    "boolean", ["TWidget"]);
const widget_is_dialog = Module.cwrap("widget_is_dialog", 
    "boolean", ["TWidget"]);
const widget_is_popup = Module.cwrap("widget_is_popup", 
    "boolean", ["TWidget"]);
const widget_is_overlay = Module.cwrap("widget_is_overlay", 
    "boolean", ["TWidget"]);
const widget_is_opened_dialog = Module.cwrap("widget_is_opened_dialog", 
    "boolean", ["TWidget"]);
const widget_is_opened_popup = Module.cwrap("widget_is_opened_popup", 
    "boolean", ["TWidget"]);
const widget_is_keyboard = Module.cwrap("widget_is_keyboard", 
    "boolean", ["TWidget"]);
const widget_is_designing_window = Module.cwrap("widget_is_designing_window", 
    "boolean", ["TWidget"]);
const widget_is_window_manager = Module.cwrap("widget_is_window_manager", 
    "boolean", ["TWidget"]);
const widget_foreach = Module.cwrap("widget_foreach", 
    "TRet", ["TWidget","Function","any"]);
const widget_get_window = Module.cwrap("widget_get_window", 
    "TWidget", ["TWidget"]);
const widget_get_window_manager = Module.cwrap("widget_get_window_manager", 
    "TWidget", ["TWidget"]);
const widget_get_type = Module.cwrap("widget_get_type", 
    "string", ["TWidget"]);
const widget_clone = Module.cwrap("widget_clone", 
    "TWidget", ["TWidget","TWidget"]);
const widget_equal = Module.cwrap("widget_equal", 
    "boolean", ["TWidget","TWidget"]);
const widget_cast = Module.cwrap("widget_cast", 
    "TWidget", ["TWidget"]);
const widget_destroy = Module.cwrap("widget_destroy", 
    "TRet", ["TWidget"]);
const widget_destroy_async = Module.cwrap("widget_destroy_async", 
    "TRet", ["TWidget"]);
const widget_unref = Module.cwrap("widget_unref", 
    "TRet", ["TWidget"]);
const widget_stroke_border_rect = Module.cwrap("widget_stroke_border_rect", 
    "TRet", ["TWidget","TCanvas","TRect"]);
const widget_fill_bg_rect = Module.cwrap("widget_fill_bg_rect", 
    "TRet", ["TWidget","TCanvas","TRect","TImageDrawType"]);
const widget_fill_fg_rect = Module.cwrap("widget_fill_fg_rect", 
    "TRet", ["TWidget","TCanvas","TRect","TImageDrawType"]);
const widget_dispatch_to_target = Module.cwrap("widget_dispatch_to_target", 
    "TRet", ["TWidget","TEvent"]);
const widget_dispatch_to_key_target = Module.cwrap("widget_dispatch_to_key_target", 
    "TRet", ["TWidget","TEvent"]);
const widget_get_style_type = Module.cwrap("widget_get_style_type", 
    "string", ["TWidget"]);
const widget_update_style = Module.cwrap("widget_update_style", 
    "TRet", ["TWidget"]);
const widget_update_style_recursive = Module.cwrap("widget_update_style_recursive", 
    "TRet", ["TWidget"]);
const widget_set_as_key_target = Module.cwrap("widget_set_as_key_target", 
    "TRet", ["TWidget"]);
const widget_focus_next = Module.cwrap("widget_focus_next", 
    "TRet", ["TWidget"]);
const widget_focus_prev = Module.cwrap("widget_focus_prev", 
    "TRet", ["TWidget"]);
const widget_get_state_for_style = Module.cwrap("widget_get_state_for_style", 
    "string", ["TWidget","boolean","boolean"]);
const widget_layout = Module.cwrap("widget_layout", 
    "TRet", ["TWidget"]);
const widget_set_self_layout = Module.cwrap("widget_set_self_layout", 
    "TRet", ["TWidget","string"]);
const widget_set_children_layout = Module.cwrap("widget_set_children_layout", 
    "TRet", ["TWidget","string"]);
const widget_set_self_layout_params = Module.cwrap("widget_set_self_layout_params", 
    "TRet", ["TWidget","string","string","string","string"]);
const widget_set_style_int = Module.cwrap("widget_set_style_int", 
    "TRet", ["TWidget","string","number"]);
const widget_set_style_str = Module.cwrap("widget_set_style_str", 
    "TRet", ["TWidget","string","string"]);
const widget_set_style_color = Module.cwrap("widget_set_style_color", 
    "TRet", ["TWidget","string","number"]);
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
    "boolean", ["number"]);
const widget_t_get_prop_feedback = Module.cwrap("widget_t_get_prop_feedback", 
    "boolean", ["number"]);
const widget_t_get_prop_visible = Module.cwrap("widget_t_get_prop_visible", 
    "boolean", ["number"]);
const widget_t_get_prop_sensitive = Module.cwrap("widget_t_get_prop_sensitive", 
    "boolean", ["number"]);
const widget_t_get_prop_focusable = Module.cwrap("widget_t_get_prop_focusable", 
    "boolean", ["number"]);
const widget_t_get_prop_with_focus_state = Module.cwrap("widget_t_get_prop_with_focus_state", 
    "boolean", ["number"]);
const widget_t_get_prop_auto_adjust_size = Module.cwrap("widget_t_get_prop_auto_adjust_size", 
    "boolean", ["number"]);
const widget_t_get_prop_floating = Module.cwrap("widget_t_get_prop_floating", 
    "boolean", ["number"]);
const widget_t_get_prop_dirty_rect_tolerance = Module.cwrap("widget_t_get_prop_dirty_rect_tolerance", 
    "number", ["number"]);
const widget_t_get_prop_parent = Module.cwrap("widget_t_get_prop_parent", 
    "TWidget", ["number"]);
const app_conf_save = Module.cwrap("app_conf_save", 
    "TRet", []);
const app_conf_reload = Module.cwrap("app_conf_reload", 
    "TRet", []);
const app_conf_deinit = Module.cwrap("app_conf_deinit", 
    "TRet", []);
const app_conf_exist = Module.cwrap("app_conf_exist", 
    "boolean", ["string"]);
const app_conf_set_int = Module.cwrap("app_conf_set_int", 
    "TRet", ["string","number"]);
const app_conf_set_int64 = Module.cwrap("app_conf_set_int64", 
    "TRet", ["string","number"]);
const app_conf_set_bool = Module.cwrap("app_conf_set_bool", 
    "TRet", ["string","boolean"]);
const app_conf_set_double = Module.cwrap("app_conf_set_double", 
    "TRet", ["string","number"]);
const app_conf_set_str = Module.cwrap("app_conf_set_str", 
    "TRet", ["string","string"]);
const app_conf_get_int = Module.cwrap("app_conf_get_int", 
    "number", ["string","number"]);
const app_conf_get_int64 = Module.cwrap("app_conf_get_int64", 
    "number", ["string","number"]);
const app_conf_get_bool = Module.cwrap("app_conf_get_bool", 
    "boolean", ["string","boolean"]);
const app_conf_get_double = Module.cwrap("app_conf_get_double", 
    "number", ["string","number"]);
const app_conf_get_str = Module.cwrap("app_conf_get_str", 
    "string", ["string","string"]);
const app_conf_remove = Module.cwrap("app_conf_remove", 
    "TRet", ["string"]);
const tk_ext_widgets_init = Module.cwrap("tk_ext_widgets_init", 
    "TRet", []);
const INDICATOR_DEFAULT_PAINT_AUTO = Module.cwrap("INDICATOR_DEFAULT_PAINT_AUTO", 
    "number", []);
const INDICATOR_DEFAULT_PAINT_FILL_DOT = Module.cwrap("INDICATOR_DEFAULT_PAINT_FILL_DOT", 
    "number", []);
const INDICATOR_DEFAULT_PAINT_STROKE_DOT = Module.cwrap("INDICATOR_DEFAULT_PAINT_STROKE_DOT", 
    "number", []);
const INDICATOR_DEFAULT_PAINT_FILL_RECT = Module.cwrap("INDICATOR_DEFAULT_PAINT_FILL_RECT", 
    "number", []);
const INDICATOR_DEFAULT_PAINT_STROKE_RECT = Module.cwrap("INDICATOR_DEFAULT_PAINT_STROKE_RECT", 
    "number", []);
const EVT_VPAGE_WILL_OPEN = Module.cwrap("EVT_VPAGE_WILL_OPEN", 
    "number", []);
const EVT_VPAGE_OPEN = Module.cwrap("EVT_VPAGE_OPEN", 
    "number", []);
const EVT_VPAGE_CLOSE = Module.cwrap("EVT_VPAGE_CLOSE", 
    "number", []);
const ASSET_TYPE_NONE = Module.cwrap("ASSET_TYPE_NONE", 
    "number", []);
const ASSET_TYPE_FONT = Module.cwrap("ASSET_TYPE_FONT", 
    "number", []);
const ASSET_TYPE_IMAGE = Module.cwrap("ASSET_TYPE_IMAGE", 
    "number", []);
const ASSET_TYPE_STYLE = Module.cwrap("ASSET_TYPE_STYLE", 
    "number", []);
const ASSET_TYPE_UI = Module.cwrap("ASSET_TYPE_UI", 
    "number", []);
const ASSET_TYPE_XML = Module.cwrap("ASSET_TYPE_XML", 
    "number", []);
const ASSET_TYPE_STRINGS = Module.cwrap("ASSET_TYPE_STRINGS", 
    "number", []);
const ASSET_TYPE_SCRIPT = Module.cwrap("ASSET_TYPE_SCRIPT", 
    "number", []);
const ASSET_TYPE_FLOW = Module.cwrap("ASSET_TYPE_FLOW", 
    "number", []);
const ASSET_TYPE_DATA = Module.cwrap("ASSET_TYPE_DATA", 
    "number", []);
const asset_info_get_type = Module.cwrap("asset_info_get_type", 
    "number", ["TAssetInfo"]);
const asset_info_get_name = Module.cwrap("asset_info_get_name", 
    "string", ["TAssetInfo"]);
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
    "TColor", ["number","number","number","number"]);
const color_from_str = Module.cwrap("color_from_str", 
    "TColor", ["TColor","string"]);
const color_r = Module.cwrap("color_r", 
    "number", ["TColor"]);
const color_g = Module.cwrap("color_g", 
    "number", ["TColor"]);
const color_b = Module.cwrap("color_b", 
    "number", ["TColor"]);
const color_a = Module.cwrap("color_a", 
    "number", ["TColor"]);
const color_get_color = Module.cwrap("color_get_color", 
    "number", ["TColor"]);
const color_cast = Module.cwrap("color_cast", 
    "TColor", ["TColor"]);
const color_destroy = Module.cwrap("color_destroy", 
    "TRet", ["TColor"]);
const color_t_get_prop_color = Module.cwrap("color_t_get_prop_color", 
    "number", ["number"]);
const color_t_set_prop_color = Module.cwrap("color_t_set_prop_color", 
    "number", ["number", "number"]);
const date_time_create = Module.cwrap("date_time_create", 
    "TDateTime", []);
const date_time_set_year = Module.cwrap("date_time_set_year", 
    "TRet", ["TDateTime","number"]);
const date_time_set_month = Module.cwrap("date_time_set_month", 
    "TRet", ["TDateTime","number"]);
const date_time_set_day = Module.cwrap("date_time_set_day", 
    "TRet", ["TDateTime","number"]);
const date_time_set_hour = Module.cwrap("date_time_set_hour", 
    "TRet", ["TDateTime","number"]);
const date_time_set_minute = Module.cwrap("date_time_set_minute", 
    "TRet", ["TDateTime","number"]);
const date_time_set_second = Module.cwrap("date_time_set_second", 
    "TRet", ["TDateTime","number"]);
const date_time_set = Module.cwrap("date_time_set", 
    "TRet", ["TDateTime"]);
const date_time_from_time = Module.cwrap("date_time_from_time", 
    "TRet", ["TDateTime","number"]);
const date_time_to_time = Module.cwrap("date_time_to_time", 
    "number", ["TDateTime"]);
const date_time_add_delta = Module.cwrap("date_time_add_delta", 
    "TRet", ["TDateTime","number"]);
const date_time_is_leap = Module.cwrap("date_time_is_leap", 
    "boolean", ["number"]);
const date_time_get_days = Module.cwrap("date_time_get_days", 
    "number", ["number","number"]);
const date_time_get_wday = Module.cwrap("date_time_get_wday", 
    "number", ["number","number","number"]);
const date_time_get_month_name = Module.cwrap("date_time_get_month_name", 
    "string", ["number"]);
const date_time_get_wday_name = Module.cwrap("date_time_get_wday_name", 
    "string", ["number"]);
const date_time_destroy = Module.cwrap("date_time_destroy", 
    "TRet", ["TDateTime"]);
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
const EASING_LINEAR = Module.cwrap("EASING_LINEAR", 
    "number", []);
const EASING_QUADRATIC_IN = Module.cwrap("EASING_QUADRATIC_IN", 
    "number", []);
const EASING_QUADRATIC_OUT = Module.cwrap("EASING_QUADRATIC_OUT", 
    "number", []);
const EASING_QUADRATIC_INOUT = Module.cwrap("EASING_QUADRATIC_INOUT", 
    "number", []);
const EASING_CUBIC_IN = Module.cwrap("EASING_CUBIC_IN", 
    "number", []);
const EASING_CUBIC_OUT = Module.cwrap("EASING_CUBIC_OUT", 
    "number", []);
const EASING_SIN_IN = Module.cwrap("EASING_SIN_IN", 
    "number", []);
const EASING_SIN_OUT = Module.cwrap("EASING_SIN_OUT", 
    "number", []);
const EASING_SIN_INOUT = Module.cwrap("EASING_SIN_INOUT", 
    "number", []);
const EASING_POW_IN = Module.cwrap("EASING_POW_IN", 
    "number", []);
const EASING_POW_OUT = Module.cwrap("EASING_POW_OUT", 
    "number", []);
const EASING_POW_INOUT = Module.cwrap("EASING_POW_INOUT", 
    "number", []);
const EASING_CIRCULAR_IN = Module.cwrap("EASING_CIRCULAR_IN", 
    "number", []);
const EASING_CIRCULAR_OUT = Module.cwrap("EASING_CIRCULAR_OUT", 
    "number", []);
const EASING_CIRCULAR_INOUT = Module.cwrap("EASING_CIRCULAR_INOUT", 
    "number", []);
const EASING_ELASTIC_IN = Module.cwrap("EASING_ELASTIC_IN", 
    "number", []);
const EASING_ELASTIC_OUT = Module.cwrap("EASING_ELASTIC_OUT", 
    "number", []);
const EASING_ELASTIC_INOUT = Module.cwrap("EASING_ELASTIC_INOUT", 
    "number", []);
const EASING_BACK_IN = Module.cwrap("EASING_BACK_IN", 
    "number", []);
const EASING_BACK_OUT = Module.cwrap("EASING_BACK_OUT", 
    "number", []);
const EASING_BACK_INOUT = Module.cwrap("EASING_BACK_INOUT", 
    "number", []);
const EASING_BOUNCE_IN = Module.cwrap("EASING_BOUNCE_IN", 
    "number", []);
const EASING_BOUNCE_OUT = Module.cwrap("EASING_BOUNCE_OUT", 
    "number", []);
const EASING_BOUNCE_INOUT = Module.cwrap("EASING_BOUNCE_INOUT", 
    "number", []);
const MIME_TYPE_APPLICATION_ENVOY = Module.cwrap("MIME_TYPE_APPLICATION_ENVOY", 
    "string", []);
const MIME_TYPE_APPLICATION_FRACTALS = Module.cwrap("MIME_TYPE_APPLICATION_FRACTALS", 
    "string", []);
const MIME_TYPE_APPLICATION_FUTURESPLASH = Module.cwrap("MIME_TYPE_APPLICATION_FUTURESPLASH", 
    "string", []);
const MIME_TYPE_APPLICATION_HTA = Module.cwrap("MIME_TYPE_APPLICATION_HTA", 
    "string", []);
const MIME_TYPE_APPLICATION_JSON = Module.cwrap("MIME_TYPE_APPLICATION_JSON", 
    "string", []);
const MIME_TYPE_APPLICATION_UBJSON = Module.cwrap("MIME_TYPE_APPLICATION_UBJSON", 
    "string", []);
const MIME_TYPE_APPLICATION_MAC_BINHEX40 = Module.cwrap("MIME_TYPE_APPLICATION_MAC_BINHEX40", 
    "string", []);
const MIME_TYPE_APPLICATION_MSWORD = Module.cwrap("MIME_TYPE_APPLICATION_MSWORD", 
    "string", []);
const MIME_TYPE_APPLICATION_OCTET_STREAM = Module.cwrap("MIME_TYPE_APPLICATION_OCTET_STREAM", 
    "string", []);
const MIME_TYPE_APPLICATION_ODA = Module.cwrap("MIME_TYPE_APPLICATION_ODA", 
    "string", []);
const MIME_TYPE_APPLICATION_OLESCRIPT = Module.cwrap("MIME_TYPE_APPLICATION_OLESCRIPT", 
    "string", []);
const MIME_TYPE_APPLICATION_PDF = Module.cwrap("MIME_TYPE_APPLICATION_PDF", 
    "string", []);
const MIME_TYPE_APPLICATION_PICS_RULES = Module.cwrap("MIME_TYPE_APPLICATION_PICS_RULES", 
    "string", []);
const MIME_TYPE_APPLICATION_PKCS10 = Module.cwrap("MIME_TYPE_APPLICATION_PKCS10", 
    "string", []);
const MIME_TYPE_APPLICATION_PKIX_CRL = Module.cwrap("MIME_TYPE_APPLICATION_PKIX_CRL", 
    "string", []);
const MIME_TYPE_APPLICATION_POSTSCRIPT = Module.cwrap("MIME_TYPE_APPLICATION_POSTSCRIPT", 
    "string", []);
const MIME_TYPE_APPLICATION_RTF = Module.cwrap("MIME_TYPE_APPLICATION_RTF", 
    "string", []);
const MIME_TYPE_APPLICATION_VND_MS_EXCEL = Module.cwrap("MIME_TYPE_APPLICATION_VND_MS_EXCEL", 
    "string", []);
const MIME_TYPE_APPLICATION_VND_MS_OUTLOOK = Module.cwrap("MIME_TYPE_APPLICATION_VND_MS_OUTLOOK", 
    "string", []);
const MIME_TYPE_APPLICATION_VND_MS_PKICERTSTORE = Module.cwrap("MIME_TYPE_APPLICATION_VND_MS_PKICERTSTORE", 
    "string", []);
const MIME_TYPE_APPLICATION_VND_MS_PKISECCAT = Module.cwrap("MIME_TYPE_APPLICATION_VND_MS_PKISECCAT", 
    "string", []);
const MIME_TYPE_APPLICATION_VND_MS_PKISTL = Module.cwrap("MIME_TYPE_APPLICATION_VND_MS_PKISTL", 
    "string", []);
const MIME_TYPE_APPLICATION_VND_MS_POWERPOINT = Module.cwrap("MIME_TYPE_APPLICATION_VND_MS_POWERPOINT", 
    "string", []);
const MIME_TYPE_APPLICATION_VND_MS_PROJECT = Module.cwrap("MIME_TYPE_APPLICATION_VND_MS_PROJECT", 
    "string", []);
const MIME_TYPE_APPLICATION_VND_MS_WORKS = Module.cwrap("MIME_TYPE_APPLICATION_VND_MS_WORKS", 
    "string", []);
const MIME_TYPE_APPLICATION_WINHLP = Module.cwrap("MIME_TYPE_APPLICATION_WINHLP", 
    "string", []);
const MIME_TYPE_APPLICATION_X_BCPIO = Module.cwrap("MIME_TYPE_APPLICATION_X_BCPIO", 
    "string", []);
const MIME_TYPE_APPLICATION_X_CDF = Module.cwrap("MIME_TYPE_APPLICATION_X_CDF", 
    "string", []);
const MIME_TYPE_APPLICATION_X_COMPRESS = Module.cwrap("MIME_TYPE_APPLICATION_X_COMPRESS", 
    "string", []);
const MIME_TYPE_APPLICATION_X_COMPRESSED = Module.cwrap("MIME_TYPE_APPLICATION_X_COMPRESSED", 
    "string", []);
const MIME_TYPE_APPLICATION_X_CPIO = Module.cwrap("MIME_TYPE_APPLICATION_X_CPIO", 
    "string", []);
const MIME_TYPE_APPLICATION_X_CSH = Module.cwrap("MIME_TYPE_APPLICATION_X_CSH", 
    "string", []);
const MIME_TYPE_APPLICATION_X_DIRECTOR = Module.cwrap("MIME_TYPE_APPLICATION_X_DIRECTOR", 
    "string", []);
const MIME_TYPE_APPLICATION_X_DVI = Module.cwrap("MIME_TYPE_APPLICATION_X_DVI", 
    "string", []);
const MIME_TYPE_APPLICATION_X_GTAR = Module.cwrap("MIME_TYPE_APPLICATION_X_GTAR", 
    "string", []);
const MIME_TYPE_APPLICATION_X_GZIP = Module.cwrap("MIME_TYPE_APPLICATION_X_GZIP", 
    "string", []);
const MIME_TYPE_APPLICATION_X_HDF = Module.cwrap("MIME_TYPE_APPLICATION_X_HDF", 
    "string", []);
const MIME_TYPE_APPLICATION_X_IPHONE = Module.cwrap("MIME_TYPE_APPLICATION_X_IPHONE", 
    "string", []);
const MIME_TYPE_APPLICATION_X_JAVASCRIPT = Module.cwrap("MIME_TYPE_APPLICATION_X_JAVASCRIPT", 
    "string", []);
const MIME_TYPE_APPLICATION_X_LATEX = Module.cwrap("MIME_TYPE_APPLICATION_X_LATEX", 
    "string", []);
const MIME_TYPE_APPLICATION_X_MSACCESS = Module.cwrap("MIME_TYPE_APPLICATION_X_MSACCESS", 
    "string", []);
const MIME_TYPE_APPLICATION_X_MSCARDFILE = Module.cwrap("MIME_TYPE_APPLICATION_X_MSCARDFILE", 
    "string", []);
const MIME_TYPE_APPLICATION_X_MSCLIP = Module.cwrap("MIME_TYPE_APPLICATION_X_MSCLIP", 
    "string", []);
const MIME_TYPE_APPLICATION_X_MSDOWNLOAD = Module.cwrap("MIME_TYPE_APPLICATION_X_MSDOWNLOAD", 
    "string", []);
const MIME_TYPE_APPLICATION_X_MSMEDIAVIEW = Module.cwrap("MIME_TYPE_APPLICATION_X_MSMEDIAVIEW", 
    "string", []);
const MIME_TYPE_APPLICATION_X_MSMETAFILE = Module.cwrap("MIME_TYPE_APPLICATION_X_MSMETAFILE", 
    "string", []);
const MIME_TYPE_APPLICATION_X_MSMONEY = Module.cwrap("MIME_TYPE_APPLICATION_X_MSMONEY", 
    "string", []);
const MIME_TYPE_APPLICATION_X_MSPUBLISHER = Module.cwrap("MIME_TYPE_APPLICATION_X_MSPUBLISHER", 
    "string", []);
const MIME_TYPE_APPLICATION_X_MSSCHEDULE = Module.cwrap("MIME_TYPE_APPLICATION_X_MSSCHEDULE", 
    "string", []);
const MIME_TYPE_APPLICATION_X_MSTERMINAL = Module.cwrap("MIME_TYPE_APPLICATION_X_MSTERMINAL", 
    "string", []);
const MIME_TYPE_APPLICATION_X_MSWRITE = Module.cwrap("MIME_TYPE_APPLICATION_X_MSWRITE", 
    "string", []);
const MIME_TYPE_APPLICATION_X_NETCDF = Module.cwrap("MIME_TYPE_APPLICATION_X_NETCDF", 
    "string", []);
const MIME_TYPE_APPLICATION_X_PERFMON = Module.cwrap("MIME_TYPE_APPLICATION_X_PERFMON", 
    "string", []);
const MIME_TYPE_APPLICATION_X_PKCS12 = Module.cwrap("MIME_TYPE_APPLICATION_X_PKCS12", 
    "string", []);
const MIME_TYPE_APPLICATION_X_SH = Module.cwrap("MIME_TYPE_APPLICATION_X_SH", 
    "string", []);
const MIME_TYPE_APPLICATION_X_SHAR = Module.cwrap("MIME_TYPE_APPLICATION_X_SHAR", 
    "string", []);
const MIME_TYPE_APPLICATION_X_SHOCKWAVE_FLASH = Module.cwrap("MIME_TYPE_APPLICATION_X_SHOCKWAVE_FLASH", 
    "string", []);
const MIME_TYPE_APPLICATION_X_STUFFIT = Module.cwrap("MIME_TYPE_APPLICATION_X_STUFFIT", 
    "string", []);
const MIME_TYPE_APPLICATION_X_SV4CPIO = Module.cwrap("MIME_TYPE_APPLICATION_X_SV4CPIO", 
    "string", []);
const MIME_TYPE_APPLICATION_X_SV4CRC = Module.cwrap("MIME_TYPE_APPLICATION_X_SV4CRC", 
    "string", []);
const MIME_TYPE_APPLICATION_X_TAR = Module.cwrap("MIME_TYPE_APPLICATION_X_TAR", 
    "string", []);
const MIME_TYPE_APPLICATION_X_TCL = Module.cwrap("MIME_TYPE_APPLICATION_X_TCL", 
    "string", []);
const MIME_TYPE_APPLICATION_X_TEX = Module.cwrap("MIME_TYPE_APPLICATION_X_TEX", 
    "string", []);
const MIME_TYPE_APPLICATION_X_TEXINFO = Module.cwrap("MIME_TYPE_APPLICATION_X_TEXINFO", 
    "string", []);
const MIME_TYPE_APPLICATION_X_TROFF = Module.cwrap("MIME_TYPE_APPLICATION_X_TROFF", 
    "string", []);
const MIME_TYPE_APPLICATION_X_USTAR = Module.cwrap("MIME_TYPE_APPLICATION_X_USTAR", 
    "string", []);
const MIME_TYPE_APPLICATION_ZIP = Module.cwrap("MIME_TYPE_APPLICATION_ZIP", 
    "string", []);
const MIME_TYPE_AUDIO_BASIC = Module.cwrap("MIME_TYPE_AUDIO_BASIC", 
    "string", []);
const MIME_TYPE_AUDIO_MID = Module.cwrap("MIME_TYPE_AUDIO_MID", 
    "string", []);
const MIME_TYPE_AUDIO_MPEG = Module.cwrap("MIME_TYPE_AUDIO_MPEG", 
    "string", []);
const MIME_TYPE_AUDIO_X_AIFF = Module.cwrap("MIME_TYPE_AUDIO_X_AIFF", 
    "string", []);
const MIME_TYPE_AUDIO_X_MPEGURL = Module.cwrap("MIME_TYPE_AUDIO_X_MPEGURL", 
    "string", []);
const MIME_TYPE_AUDIO_X_WAV = Module.cwrap("MIME_TYPE_AUDIO_X_WAV", 
    "string", []);
const MIME_TYPE_IMAGE_BMP = Module.cwrap("MIME_TYPE_IMAGE_BMP", 
    "string", []);
const MIME_TYPE_IMAGE_CIS_COD = Module.cwrap("MIME_TYPE_IMAGE_CIS_COD", 
    "string", []);
const MIME_TYPE_IMAGE_GIF = Module.cwrap("MIME_TYPE_IMAGE_GIF", 
    "string", []);
const MIME_TYPE_IMAGE_IEF = Module.cwrap("MIME_TYPE_IMAGE_IEF", 
    "string", []);
const MIME_TYPE_IMAGE_JPEG = Module.cwrap("MIME_TYPE_IMAGE_JPEG", 
    "string", []);
const MIME_TYPE_IMAGE_PIPEG = Module.cwrap("MIME_TYPE_IMAGE_PIPEG", 
    "string", []);
const MIME_TYPE_IMAGE_SVG_XML = Module.cwrap("MIME_TYPE_IMAGE_SVG_XML", 
    "string", []);
const MIME_TYPE_IMAGE_TIFF = Module.cwrap("MIME_TYPE_IMAGE_TIFF", 
    "string", []);
const MIME_TYPE_IMAGE_X_CMX = Module.cwrap("MIME_TYPE_IMAGE_X_CMX", 
    "string", []);
const MIME_TYPE_IMAGE_X_ICON = Module.cwrap("MIME_TYPE_IMAGE_X_ICON", 
    "string", []);
const MIME_TYPE_IMAGE_X_RGB = Module.cwrap("MIME_TYPE_IMAGE_X_RGB", 
    "string", []);
const MIME_TYPE_IMAGE_X_XBITMAP = Module.cwrap("MIME_TYPE_IMAGE_X_XBITMAP", 
    "string", []);
const MIME_TYPE_IMAGE_X_XPIXMAP = Module.cwrap("MIME_TYPE_IMAGE_X_XPIXMAP", 
    "string", []);
const MIME_TYPE_IMAGE_X_XWINDOWDUMP = Module.cwrap("MIME_TYPE_IMAGE_X_XWINDOWDUMP", 
    "string", []);
const MIME_TYPE_MESSAGE_RFC822 = Module.cwrap("MIME_TYPE_MESSAGE_RFC822", 
    "string", []);
const MIME_TYPE_TEXT_CSS = Module.cwrap("MIME_TYPE_TEXT_CSS", 
    "string", []);
const MIME_TYPE_TEXT_H323 = Module.cwrap("MIME_TYPE_TEXT_H323", 
    "string", []);
const MIME_TYPE_TEXT_HTML = Module.cwrap("MIME_TYPE_TEXT_HTML", 
    "string", []);
const MIME_TYPE_TEXT_IULS = Module.cwrap("MIME_TYPE_TEXT_IULS", 
    "string", []);
const MIME_TYPE_TEXT_PLAIN = Module.cwrap("MIME_TYPE_TEXT_PLAIN", 
    "string", []);
const MIME_TYPE_TEXT_RICHTEXT = Module.cwrap("MIME_TYPE_TEXT_RICHTEXT", 
    "string", []);
const MIME_TYPE_TEXT_SCRIPTLET = Module.cwrap("MIME_TYPE_TEXT_SCRIPTLET", 
    "string", []);
const MIME_TYPE_TEXT_WEBVIEWHTML = Module.cwrap("MIME_TYPE_TEXT_WEBVIEWHTML", 
    "string", []);
const MIME_TYPE_TEXT_X_COMPONENT = Module.cwrap("MIME_TYPE_TEXT_X_COMPONENT", 
    "string", []);
const MIME_TYPE_TEXT_X_SETEXT = Module.cwrap("MIME_TYPE_TEXT_X_SETEXT", 
    "string", []);
const MIME_TYPE_TEXT_X_VCARD = Module.cwrap("MIME_TYPE_TEXT_X_VCARD", 
    "string", []);
const MIME_TYPE_VIDEO_MPEG = Module.cwrap("MIME_TYPE_VIDEO_MPEG", 
    "string", []);
const MIME_TYPE_VIDEO_QUICKTIME = Module.cwrap("MIME_TYPE_VIDEO_QUICKTIME", 
    "string", []);
const MIME_TYPE_VIDEO_X_MSVIDEO = Module.cwrap("MIME_TYPE_VIDEO_X_MSVIDEO", 
    "string", []);
const named_value_create = Module.cwrap("named_value_create", 
    "TNamedValue", []);
const named_value_cast = Module.cwrap("named_value_cast", 
    "TNamedValue", ["TNamedValue"]);
const named_value_set_name = Module.cwrap("named_value_set_name", 
    "TRet", ["TNamedValue","string"]);
const named_value_set_value = Module.cwrap("named_value_set_value", 
    "TRet", ["TNamedValue","TValue"]);
const named_value_get_value = Module.cwrap("named_value_get_value", 
    "TValue", ["TNamedValue"]);
const named_value_destroy = Module.cwrap("named_value_destroy", 
    "TRet", ["TNamedValue"]);
const named_value_t_get_prop_name = Module.cwrap("named_value_t_get_prop_name", 
    "string", ["number"]);
const OBJECT_CMD_SAVE = Module.cwrap("OBJECT_CMD_SAVE", 
    "string", []);
const OBJECT_CMD_RELOAD = Module.cwrap("OBJECT_CMD_RELOAD", 
    "string", []);
const OBJECT_CMD_MOVE_UP = Module.cwrap("OBJECT_CMD_MOVE_UP", 
    "string", []);
const OBJECT_CMD_MOVE_DOWN = Module.cwrap("OBJECT_CMD_MOVE_DOWN", 
    "string", []);
const OBJECT_CMD_REMOVE = Module.cwrap("OBJECT_CMD_REMOVE", 
    "string", []);
const OBJECT_CMD_REMOVE_CHECKED = Module.cwrap("OBJECT_CMD_REMOVE_CHECKED", 
    "string", []);
const OBJECT_CMD_CLEAR = Module.cwrap("OBJECT_CMD_CLEAR", 
    "string", []);
const OBJECT_CMD_ADD = Module.cwrap("OBJECT_CMD_ADD", 
    "string", []);
const OBJECT_CMD_DETAIL = Module.cwrap("OBJECT_CMD_DETAIL", 
    "string", []);
const OBJECT_CMD_EDIT = Module.cwrap("OBJECT_CMD_EDIT", 
    "string", []);
const OBJECT_PROP_SIZE = Module.cwrap("OBJECT_PROP_SIZE", 
    "string", []);
const OBJECT_PROP_CHECKED = Module.cwrap("OBJECT_PROP_CHECKED", 
    "string", []);
const rlog_create = Module.cwrap("rlog_create", 
    "TRlog", ["string","number","number"]);
const rlog_write = Module.cwrap("rlog_write", 
    "TRet", ["TRlog","string"]);
const time_now_s = Module.cwrap("time_now_s", 
    "number", []);
const time_now_ms = Module.cwrap("time_now_ms", 
    "number", []);
const time_now_us = Module.cwrap("time_now_us", 
    "number", []);
const RET_OK = Module.cwrap("RET_OK", 
    "number", []);
const RET_OOM = Module.cwrap("RET_OOM", 
    "number", []);
const RET_FAIL = Module.cwrap("RET_FAIL", 
    "number", []);
const RET_NOT_IMPL = Module.cwrap("RET_NOT_IMPL", 
    "number", []);
const RET_QUIT = Module.cwrap("RET_QUIT", 
    "number", []);
const RET_FOUND = Module.cwrap("RET_FOUND", 
    "number", []);
const RET_BUSY = Module.cwrap("RET_BUSY", 
    "number", []);
const RET_REMOVE = Module.cwrap("RET_REMOVE", 
    "number", []);
const RET_REPEAT = Module.cwrap("RET_REPEAT", 
    "number", []);
const RET_NOT_FOUND = Module.cwrap("RET_NOT_FOUND", 
    "number", []);
const RET_DONE = Module.cwrap("RET_DONE", 
    "number", []);
const RET_STOP = Module.cwrap("RET_STOP", 
    "number", []);
const RET_SKIP = Module.cwrap("RET_SKIP", 
    "number", []);
const RET_CONTINUE = Module.cwrap("RET_CONTINUE", 
    "number", []);
const RET_OBJECT_CHANGED = Module.cwrap("RET_OBJECT_CHANGED", 
    "number", []);
const RET_ITEMS_CHANGED = Module.cwrap("RET_ITEMS_CHANGED", 
    "number", []);
const RET_BAD_PARAMS = Module.cwrap("RET_BAD_PARAMS", 
    "number", []);
const RET_TIMEOUT = Module.cwrap("RET_TIMEOUT", 
    "number", []);
const RET_CRC = Module.cwrap("RET_CRC", 
    "number", []);
const RET_IO = Module.cwrap("RET_IO", 
    "number", []);
const RET_EOS = Module.cwrap("RET_EOS", 
    "number", []);
const RET_NOT_MODIFIED = Module.cwrap("RET_NOT_MODIFIED", 
    "number", []);
const VALUE_TYPE_INVALID = Module.cwrap("VALUE_TYPE_INVALID", 
    "number", []);
const VALUE_TYPE_BOOL = Module.cwrap("VALUE_TYPE_BOOL", 
    "number", []);
const VALUE_TYPE_INT8 = Module.cwrap("VALUE_TYPE_INT8", 
    "number", []);
const VALUE_TYPE_UINT8 = Module.cwrap("VALUE_TYPE_UINT8", 
    "number", []);
const VALUE_TYPE_INT16 = Module.cwrap("VALUE_TYPE_INT16", 
    "number", []);
const VALUE_TYPE_UINT16 = Module.cwrap("VALUE_TYPE_UINT16", 
    "number", []);
const VALUE_TYPE_INT32 = Module.cwrap("VALUE_TYPE_INT32", 
    "number", []);
const VALUE_TYPE_UINT32 = Module.cwrap("VALUE_TYPE_UINT32", 
    "number", []);
const VALUE_TYPE_INT64 = Module.cwrap("VALUE_TYPE_INT64", 
    "number", []);
const VALUE_TYPE_UINT64 = Module.cwrap("VALUE_TYPE_UINT64", 
    "number", []);
const VALUE_TYPE_POINTER = Module.cwrap("VALUE_TYPE_POINTER", 
    "number", []);
const VALUE_TYPE_FLOAT = Module.cwrap("VALUE_TYPE_FLOAT", 
    "number", []);
const VALUE_TYPE_FLOAT32 = Module.cwrap("VALUE_TYPE_FLOAT32", 
    "number", []);
const VALUE_TYPE_DOUBLE = Module.cwrap("VALUE_TYPE_DOUBLE", 
    "number", []);
const VALUE_TYPE_STRING = Module.cwrap("VALUE_TYPE_STRING", 
    "number", []);
const VALUE_TYPE_WSTRING = Module.cwrap("VALUE_TYPE_WSTRING", 
    "number", []);
const VALUE_TYPE_OBJECT = Module.cwrap("VALUE_TYPE_OBJECT", 
    "number", []);
const VALUE_TYPE_SIZED_STRING = Module.cwrap("VALUE_TYPE_SIZED_STRING", 
    "number", []);
const VALUE_TYPE_BINARY = Module.cwrap("VALUE_TYPE_BINARY", 
    "number", []);
const VALUE_TYPE_UBJSON = Module.cwrap("VALUE_TYPE_UBJSON", 
    "number", []);
const VALUE_TYPE_TOKEN = Module.cwrap("VALUE_TYPE_TOKEN", 
    "number", []);
const assets_manager = Module.cwrap("assets_manager", 
    "TAssetsManager", []);
const assets_manager_set_theme = Module.cwrap("assets_manager_set_theme", 
    "TRet", ["TAssetsManager","string"]);
const assets_manager_ref = Module.cwrap("assets_manager_ref", 
    "TAssetInfo", ["TAssetsManager","TAssetType","string"]);
const assets_manager_ref_ex = Module.cwrap("assets_manager_ref_ex", 
    "TAssetInfo", ["TAssetsManager","TAssetType","number","string"]);
const assets_manager_unref = Module.cwrap("assets_manager_unref", 
    "TRet", ["TAssetsManager","TAssetInfo"]);
const wheel_event_cast = Module.cwrap("wheel_event_cast", 
    "TWheelEvent", ["TEvent"]);
const wheel_event_t_get_prop_dy = Module.cwrap("wheel_event_t_get_prop_dy", 
    "number", ["number"]);
const wheel_event_t_get_prop_alt = Module.cwrap("wheel_event_t_get_prop_alt", 
    "boolean", ["number"]);
const wheel_event_t_get_prop_ctrl = Module.cwrap("wheel_event_t_get_prop_ctrl", 
    "boolean", ["number"]);
const wheel_event_t_get_prop_shift = Module.cwrap("wheel_event_t_get_prop_shift", 
    "boolean", ["number"]);
const orientation_event_cast = Module.cwrap("orientation_event_cast", 
    "TOrientationEvent", ["TEvent"]);
const orientation_event_t_get_prop_orientation = Module.cwrap("orientation_event_t_get_prop_orientation", 
    "number", ["number"]);
const value_change_event_cast = Module.cwrap("value_change_event_cast", 
    "TValueChangeEvent", ["TEvent"]);
const pointer_event_cast = Module.cwrap("pointer_event_cast", 
    "TPointerEvent", ["TEvent"]);
const pointer_event_t_get_prop_x = Module.cwrap("pointer_event_t_get_prop_x", 
    "number", ["number"]);
const pointer_event_t_get_prop_y = Module.cwrap("pointer_event_t_get_prop_y", 
    "number", ["number"]);
const pointer_event_t_get_prop_button = Module.cwrap("pointer_event_t_get_prop_button", 
    "number", ["number"]);
const pointer_event_t_get_prop_pressed = Module.cwrap("pointer_event_t_get_prop_pressed", 
    "boolean", ["number"]);
const pointer_event_t_get_prop_alt = Module.cwrap("pointer_event_t_get_prop_alt", 
    "boolean", ["number"]);
const pointer_event_t_get_prop_ctrl = Module.cwrap("pointer_event_t_get_prop_ctrl", 
    "boolean", ["number"]);
const pointer_event_t_get_prop_cmd = Module.cwrap("pointer_event_t_get_prop_cmd", 
    "boolean", ["number"]);
const pointer_event_t_get_prop_menu = Module.cwrap("pointer_event_t_get_prop_menu", 
    "boolean", ["number"]);
const pointer_event_t_get_prop_shift = Module.cwrap("pointer_event_t_get_prop_shift", 
    "boolean", ["number"]);
const key_event_cast = Module.cwrap("key_event_cast", 
    "TKeyEvent", ["TEvent"]);
const key_event_t_get_prop_key = Module.cwrap("key_event_t_get_prop_key", 
    "number", ["number"]);
const key_event_t_get_prop_alt = Module.cwrap("key_event_t_get_prop_alt", 
    "boolean", ["number"]);
const key_event_t_get_prop_lalt = Module.cwrap("key_event_t_get_prop_lalt", 
    "boolean", ["number"]);
const key_event_t_get_prop_ralt = Module.cwrap("key_event_t_get_prop_ralt", 
    "boolean", ["number"]);
const key_event_t_get_prop_ctrl = Module.cwrap("key_event_t_get_prop_ctrl", 
    "boolean", ["number"]);
const key_event_t_get_prop_lctrl = Module.cwrap("key_event_t_get_prop_lctrl", 
    "boolean", ["number"]);
const key_event_t_get_prop_rctrl = Module.cwrap("key_event_t_get_prop_rctrl", 
    "boolean", ["number"]);
const key_event_t_get_prop_shift = Module.cwrap("key_event_t_get_prop_shift", 
    "boolean", ["number"]);
const key_event_t_get_prop_lshift = Module.cwrap("key_event_t_get_prop_lshift", 
    "boolean", ["number"]);
const key_event_t_get_prop_rshift = Module.cwrap("key_event_t_get_prop_rshift", 
    "boolean", ["number"]);
const key_event_t_get_prop_cmd = Module.cwrap("key_event_t_get_prop_cmd", 
    "boolean", ["number"]);
const key_event_t_get_prop_menu = Module.cwrap("key_event_t_get_prop_menu", 
    "boolean", ["number"]);
const key_event_t_get_prop_capslock = Module.cwrap("key_event_t_get_prop_capslock", 
    "boolean", ["number"]);
const paint_event_cast = Module.cwrap("paint_event_cast", 
    "TPaintEvent", ["TEvent"]);
const paint_event_t_get_prop_c = Module.cwrap("paint_event_t_get_prop_c", 
    "TCanvas", ["number"]);
const window_event_cast = Module.cwrap("window_event_cast", 
    "TWindowEvent", ["TEvent"]);
const window_event_t_get_prop_window = Module.cwrap("window_event_t_get_prop_window", 
    "TWidget", ["number"]);
const multi_gesture_event_cast = Module.cwrap("multi_gesture_event_cast", 
    "TMultiGestureEvent", ["TEvent"]);
const multi_gesture_event_t_get_prop_x = Module.cwrap("multi_gesture_event_t_get_prop_x", 
    "number", ["number"]);
const multi_gesture_event_t_get_prop_y = Module.cwrap("multi_gesture_event_t_get_prop_y", 
    "number", ["number"]);
const multi_gesture_event_t_get_prop_rotation = Module.cwrap("multi_gesture_event_t_get_prop_rotation", 
    "number", ["number"]);
const multi_gesture_event_t_get_prop_distance = Module.cwrap("multi_gesture_event_t_get_prop_distance", 
    "number", ["number"]);
const image_base_set_image = Module.cwrap("image_base_set_image", 
    "TRet", ["TWidget","string"]);
const image_base_set_rotation = Module.cwrap("image_base_set_rotation", 
    "TRet", ["TWidget","number"]);
const image_base_set_scale = Module.cwrap("image_base_set_scale", 
    "TRet", ["TWidget","number","number"]);
const image_base_set_anchor = Module.cwrap("image_base_set_anchor", 
    "TRet", ["TWidget","number","number"]);
const image_base_set_selected = Module.cwrap("image_base_set_selected", 
    "TRet", ["TWidget","boolean"]);
const image_base_set_selectable = Module.cwrap("image_base_set_selectable", 
    "TRet", ["TWidget","boolean"]);
const image_base_set_clickable = Module.cwrap("image_base_set_clickable", 
    "TRet", ["TWidget","boolean"]);
const image_base_cast = Module.cwrap("image_base_cast", 
    "TWidget", ["TWidget"]);
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
    "boolean", ["number"]);
const image_base_t_get_prop_selectable = Module.cwrap("image_base_t_get_prop_selectable", 
    "boolean", ["number"]);
const image_base_t_get_prop_selected = Module.cwrap("image_base_t_get_prop_selected", 
    "boolean", ["number"]);
const style_mutable_set_name = Module.cwrap("style_mutable_set_name", 
    "TRet", ["TStyle","string"]);
const style_mutable_set_int = Module.cwrap("style_mutable_set_int", 
    "TRet", ["TStyle","string","string","number"]);
const style_mutable_cast = Module.cwrap("style_mutable_cast", 
    "TStyle", ["TStyle"]);
const style_mutable_create = Module.cwrap("style_mutable_create", 
    "TStyle", ["TStyle"]);
const style_mutable_t_get_prop_name = Module.cwrap("style_mutable_t_get_prop_name", 
    "string", ["number"]);
const window_base_cast = Module.cwrap("window_base_cast", 
    "TWidget", ["TWidget"]);
const window_base_t_get_prop_theme = Module.cwrap("window_base_t_get_prop_theme", 
    "string", ["number"]);
const window_base_t_get_prop_design_w = Module.cwrap("window_base_t_get_prop_design_w", 
    "number", ["number"]);
const window_base_t_get_prop_design_h = Module.cwrap("window_base_t_get_prop_design_h", 
    "number", ["number"]);
const window_base_t_get_prop_auto_scale_children_x = Module.cwrap("window_base_t_get_prop_auto_scale_children_x", 
    "boolean", ["number"]);
const window_base_t_get_prop_auto_scale_children_y = Module.cwrap("window_base_t_get_prop_auto_scale_children_y", 
    "boolean", ["number"]);
const window_base_t_get_prop_auto_scale_children_w = Module.cwrap("window_base_t_get_prop_auto_scale_children_w", 
    "boolean", ["number"]);
const window_base_t_get_prop_auto_scale_children_h = Module.cwrap("window_base_t_get_prop_auto_scale_children_h", 
    "boolean", ["number"]);
const window_base_t_get_prop_disable_anim = Module.cwrap("window_base_t_get_prop_disable_anim", 
    "boolean", ["number"]);
const window_base_t_get_prop_closable = Module.cwrap("window_base_t_get_prop_closable", 
    "TWindowClosable", ["number"]);
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
    "boolean", ["number"]);
const window_base_t_get_prop_strongly_focus = Module.cwrap("window_base_t_get_prop_strongly_focus", 
    "boolean", ["number"]);
const window_manager = Module.cwrap("window_manager", 
    "TWidget", []);
const window_manager_cast = Module.cwrap("window_manager_cast", 
    "TWidget", ["TWidget"]);
const window_manager_get_top_main_window = Module.cwrap("window_manager_get_top_main_window", 
    "TWidget", ["TWidget"]);
const window_manager_get_top_window = Module.cwrap("window_manager_get_top_window", 
    "TWidget", ["TWidget"]);
const window_manager_get_prev_window = Module.cwrap("window_manager_get_prev_window", 
    "TWidget", ["TWidget"]);
const window_manager_get_pointer_x = Module.cwrap("window_manager_get_pointer_x", 
    "number", ["TWidget"]);
const window_manager_get_pointer_y = Module.cwrap("window_manager_get_pointer_y", 
    "number", ["TWidget"]);
const window_manager_get_pointer_pressed = Module.cwrap("window_manager_get_pointer_pressed", 
    "boolean", ["TWidget"]);
const window_manager_is_animating = Module.cwrap("window_manager_is_animating", 
    "boolean", ["TWidget"]);
const window_manager_set_show_fps = Module.cwrap("window_manager_set_show_fps", 
    "TRet", ["TWidget","boolean"]);
const window_manager_set_max_fps = Module.cwrap("window_manager_set_max_fps", 
    "TRet", ["TWidget","number"]);
const window_manager_set_ignore_input_events = Module.cwrap("window_manager_set_ignore_input_events", 
    "TRet", ["TWidget","boolean"]);
const window_manager_set_screen_saver_time = Module.cwrap("window_manager_set_screen_saver_time", 
    "TRet", ["TWidget","number"]);
const window_manager_set_cursor = Module.cwrap("window_manager_set_cursor", 
    "TRet", ["TWidget","string"]);
const window_manager_back = Module.cwrap("window_manager_back", 
    "TRet", ["TWidget"]);
const window_manager_back_to_home = Module.cwrap("window_manager_back_to_home", 
    "TRet", ["TWidget"]);
const window_manager_back_to = Module.cwrap("window_manager_back_to", 
    "TRet", ["TWidget","string"]);
const window_manager_resize = Module.cwrap("window_manager_resize", 
    "TRet", ["TWidget","number","number"]);
const window_manager_close_all = Module.cwrap("window_manager_close_all", 
    "TRet", ["TWidget"]);
const canvas_widget_create = Module.cwrap("canvas_widget_create", 
    "TWidget", ["TWidget","number","number","number","number"]);
const canvas_widget_cast = Module.cwrap("canvas_widget_cast", 
    "TWidget", ["TWidget"]);
const color_component_create = Module.cwrap("color_component_create", 
    "TWidget", ["TWidget","number","number","number","number"]);
const color_component_cast = Module.cwrap("color_component_cast", 
    "TWidget", ["TWidget"]);
const color_picker_create = Module.cwrap("color_picker_create", 
    "TWidget", ["TWidget","number","number","number","number"]);
const color_picker_set_color = Module.cwrap("color_picker_set_color", 
    "TRet", ["TWidget","string"]);
const color_picker_cast = Module.cwrap("color_picker_cast", 
    "TWidget", ["TWidget"]);
const color_picker_t_get_prop_value = Module.cwrap("color_picker_t_get_prop_value", 
    "string", ["number"]);
const draggable_create = Module.cwrap("draggable_create", 
    "TWidget", ["TWidget","number","number","number","number"]);
const draggable_cast = Module.cwrap("draggable_cast", 
    "TWidget", ["TWidget"]);
const draggable_set_top = Module.cwrap("draggable_set_top", 
    "TRet", ["TWidget","number"]);
const draggable_set_bottom = Module.cwrap("draggable_set_bottom", 
    "TRet", ["TWidget","number"]);
const draggable_set_left = Module.cwrap("draggable_set_left", 
    "TRet", ["TWidget","number"]);
const draggable_set_right = Module.cwrap("draggable_set_right", 
    "TRet", ["TWidget","number"]);
const draggable_set_vertical_only = Module.cwrap("draggable_set_vertical_only", 
    "TRet", ["TWidget","boolean"]);
const draggable_set_horizontal_only = Module.cwrap("draggable_set_horizontal_only", 
    "TRet", ["TWidget","boolean"]);
const draggable_set_drag_window = Module.cwrap("draggable_set_drag_window", 
    "TRet", ["TWidget","boolean"]);
const draggable_t_get_prop_top = Module.cwrap("draggable_t_get_prop_top", 
    "number", ["number"]);
const draggable_t_get_prop_bottom = Module.cwrap("draggable_t_get_prop_bottom", 
    "number", ["number"]);
const draggable_t_get_prop_left = Module.cwrap("draggable_t_get_prop_left", 
    "number", ["number"]);
const draggable_t_get_prop_right = Module.cwrap("draggable_t_get_prop_right", 
    "number", ["number"]);
const draggable_t_get_prop_vertical_only = Module.cwrap("draggable_t_get_prop_vertical_only", 
    "boolean", ["number"]);
const draggable_t_get_prop_horizontal_only = Module.cwrap("draggable_t_get_prop_horizontal_only", 
    "boolean", ["number"]);
const draggable_t_get_prop_drag_window = Module.cwrap("draggable_t_get_prop_drag_window", 
    "boolean", ["number"]);
const file_browser_view_create = Module.cwrap("file_browser_view_create", 
    "TWidget", ["TWidget","number","number","number","number"]);
const file_browser_view_cast = Module.cwrap("file_browser_view_cast", 
    "TWidget", ["TWidget"]);
const file_browser_view_set_init_dir = Module.cwrap("file_browser_view_set_init_dir", 
    "TRet", ["TWidget","string"]);
const file_browser_view_set_top_dir = Module.cwrap("file_browser_view_set_top_dir", 
    "TRet", ["TWidget","string"]);
const file_browser_view_set_filter = Module.cwrap("file_browser_view_set_filter", 
    "TRet", ["TWidget","string"]);
const file_browser_view_reload = Module.cwrap("file_browser_view_reload", 
    "TRet", ["TWidget"]);
const file_browser_view_set_ignore_hidden_files = Module.cwrap("file_browser_view_set_ignore_hidden_files", 
    "TRet", ["TWidget","boolean"]);
const file_browser_view_set_sort_ascending = Module.cwrap("file_browser_view_set_sort_ascending", 
    "TRet", ["TWidget","boolean"]);
const file_browser_view_set_show_check_button = Module.cwrap("file_browser_view_set_show_check_button", 
    "TRet", ["TWidget","boolean"]);
const file_browser_view_set_sort_by = Module.cwrap("file_browser_view_set_sort_by", 
    "TRet", ["TWidget","string"]);
const file_browser_view_get_cwd = Module.cwrap("file_browser_view_get_cwd", 
    "string", ["TWidget"]);
const file_browser_view_create_dir = Module.cwrap("file_browser_view_create_dir", 
    "TRet", ["TWidget","string"]);
const file_browser_view_create_file = Module.cwrap("file_browser_view_create_file", 
    "TRet", ["TWidget","string","string","number"]);
const file_browser_view_t_get_prop_init_dir = Module.cwrap("file_browser_view_t_get_prop_init_dir", 
    "string", ["number"]);
const file_browser_view_t_get_prop_top_dir = Module.cwrap("file_browser_view_t_get_prop_top_dir", 
    "string", ["number"]);
const file_browser_view_t_get_prop_filter = Module.cwrap("file_browser_view_t_get_prop_filter", 
    "string", ["number"]);
const file_browser_view_t_get_prop_ignore_hidden_files = Module.cwrap("file_browser_view_t_get_prop_ignore_hidden_files", 
    "boolean", ["number"]);
const file_browser_view_t_get_prop_sort_ascending = Module.cwrap("file_browser_view_t_get_prop_sort_ascending", 
    "boolean", ["number"]);
const file_browser_view_t_get_prop_show_check_button = Module.cwrap("file_browser_view_t_get_prop_show_check_button", 
    "boolean", ["number"]);
const file_browser_view_t_get_prop_sort_by = Module.cwrap("file_browser_view_t_get_prop_sort_by", 
    "string", ["number"]);
const file_chooser_create = Module.cwrap("file_chooser_create", 
    "TFileChooser", []);
const file_chooser_set_init_dir = Module.cwrap("file_chooser_set_init_dir", 
    "TRet", ["TFileChooser","string"]);
const file_chooser_set_top_dir = Module.cwrap("file_chooser_set_top_dir", 
    "TRet", ["TFileChooser","string"]);
const file_chooser_set_filter = Module.cwrap("file_chooser_set_filter", 
    "TRet", ["TFileChooser","string"]);
const file_chooser_cast = Module.cwrap("file_chooser_cast", 
    "TFileChooser", ["TFileChooser"]);
const file_chooser_choose_file_for_save = Module.cwrap("file_chooser_choose_file_for_save", 
    "TRet", ["TFileChooser"]);
const file_chooser_choose_file_for_open = Module.cwrap("file_chooser_choose_file_for_open", 
    "TRet", ["TFileChooser"]);
const file_chooser_choose_folder = Module.cwrap("file_chooser_choose_folder", 
    "TRet", ["TFileChooser"]);
const file_chooser_get_dir = Module.cwrap("file_chooser_get_dir", 
    "string", ["TFileChooser"]);
const file_chooser_get_filename = Module.cwrap("file_chooser_get_filename", 
    "string", ["TFileChooser"]);
const file_chooser_is_aborted = Module.cwrap("file_chooser_is_aborted", 
    "boolean", ["TFileChooser"]);
const gauge_pointer_create = Module.cwrap("gauge_pointer_create", 
    "TWidget", ["TWidget","number","number","number","number"]);
const gauge_pointer_cast = Module.cwrap("gauge_pointer_cast", 
    "TWidget", ["TWidget"]);
const gauge_pointer_set_angle = Module.cwrap("gauge_pointer_set_angle", 
    "TRet", ["TWidget","number"]);
const gauge_pointer_set_image = Module.cwrap("gauge_pointer_set_image", 
    "TRet", ["TWidget","string"]);
const gauge_pointer_set_anchor = Module.cwrap("gauge_pointer_set_anchor", 
    "TRet", ["TWidget","string","string"]);
const gauge_pointer_t_get_prop_angle = Module.cwrap("gauge_pointer_t_get_prop_angle", 
    "number", ["number"]);
const gauge_pointer_t_get_prop_image = Module.cwrap("gauge_pointer_t_get_prop_image", 
    "string", ["number"]);
const gauge_pointer_t_get_prop_anchor_x = Module.cwrap("gauge_pointer_t_get_prop_anchor_x", 
    "string", ["number"]);
const gauge_pointer_t_get_prop_anchor_y = Module.cwrap("gauge_pointer_t_get_prop_anchor_y", 
    "string", ["number"]);
const gauge_create = Module.cwrap("gauge_create", 
    "TWidget", ["TWidget","number","number","number","number"]);
const gauge_cast = Module.cwrap("gauge_cast", 
    "TWidget", ["TWidget"]);
const gauge_set_image = Module.cwrap("gauge_set_image", 
    "TRet", ["TWidget","string"]);
const gauge_set_draw_type = Module.cwrap("gauge_set_draw_type", 
    "TRet", ["TWidget","TImageDrawType"]);
const gauge_t_get_prop_image = Module.cwrap("gauge_t_get_prop_image", 
    "string", ["number"]);
const gauge_t_get_prop_draw_type = Module.cwrap("gauge_t_get_prop_draw_type", 
    "TImageDrawType", ["number"]);
const image_animation_create = Module.cwrap("image_animation_create", 
    "TWidget", ["TWidget","number","number","number","number"]);
const image_animation_set_loop = Module.cwrap("image_animation_set_loop", 
    "TRet", ["TWidget","boolean"]);
const image_animation_set_image = Module.cwrap("image_animation_set_image", 
    "TRet", ["TWidget","string"]);
const image_animation_set_interval = Module.cwrap("image_animation_set_interval", 
    "TRet", ["TWidget","number"]);
const image_animation_set_delay = Module.cwrap("image_animation_set_delay", 
    "TRet", ["TWidget","number"]);
const image_animation_set_auto_play = Module.cwrap("image_animation_set_auto_play", 
    "TRet", ["TWidget","boolean"]);
const image_animation_set_sequence = Module.cwrap("image_animation_set_sequence", 
    "TRet", ["TWidget","string"]);
const image_animation_set_range_sequence = Module.cwrap("image_animation_set_range_sequence", 
    "TRet", ["TWidget","number","number"]);
const image_animation_play = Module.cwrap("image_animation_play", 
    "TRet", ["TWidget"]);
const image_animation_stop = Module.cwrap("image_animation_stop", 
    "TRet", ["TWidget"]);
const image_animation_pause = Module.cwrap("image_animation_pause", 
    "TRet", ["TWidget"]);
const image_animation_next = Module.cwrap("image_animation_next", 
    "TRet", ["TWidget"]);
const image_animation_set_format = Module.cwrap("image_animation_set_format", 
    "TRet", ["TWidget","string"]);
const image_animation_set_unload_after_paint = Module.cwrap("image_animation_set_unload_after_paint", 
    "TRet", ["TWidget","boolean"]);
const image_animation_set_reverse = Module.cwrap("image_animation_set_reverse", 
    "TRet", ["TWidget","boolean"]);
const image_animation_set_show_when_done = Module.cwrap("image_animation_set_show_when_done", 
    "TRet", ["TWidget","boolean"]);
const image_animation_cast = Module.cwrap("image_animation_cast", 
    "TWidget", ["TWidget"]);
const image_animation_is_playing = Module.cwrap("image_animation_is_playing", 
    "boolean", ["TWidget"]);
const image_animation_t_get_prop_image = Module.cwrap("image_animation_t_get_prop_image", 
    "string", ["number"]);
const image_animation_t_get_prop_sequence = Module.cwrap("image_animation_t_get_prop_sequence", 
    "string", ["number"]);
const image_animation_t_get_prop_start_index = Module.cwrap("image_animation_t_get_prop_start_index", 
    "number", ["number"]);
const image_animation_t_get_prop_end_index = Module.cwrap("image_animation_t_get_prop_end_index", 
    "number", ["number"]);
const image_animation_t_get_prop_reverse = Module.cwrap("image_animation_t_get_prop_reverse", 
    "boolean", ["number"]);
const image_animation_t_get_prop_loop = Module.cwrap("image_animation_t_get_prop_loop", 
    "boolean", ["number"]);
const image_animation_t_get_prop_auto_play = Module.cwrap("image_animation_t_get_prop_auto_play", 
    "boolean", ["number"]);
const image_animation_t_get_prop_unload_after_paint = Module.cwrap("image_animation_t_get_prop_unload_after_paint", 
    "boolean", ["number"]);
const image_animation_t_get_prop_format = Module.cwrap("image_animation_t_get_prop_format", 
    "string", ["number"]);
const image_animation_t_get_prop_interval = Module.cwrap("image_animation_t_get_prop_interval", 
    "number", ["number"]);
const image_animation_t_get_prop_delay = Module.cwrap("image_animation_t_get_prop_delay", 
    "number", ["number"]);
const image_animation_t_get_prop_show_when_done = Module.cwrap("image_animation_t_get_prop_show_when_done", 
    "boolean", ["number"]);
const image_value_create = Module.cwrap("image_value_create", 
    "TWidget", ["TWidget","number","number","number","number"]);
const image_value_set_image = Module.cwrap("image_value_set_image", 
    "TRet", ["TWidget","string"]);
const image_value_set_format = Module.cwrap("image_value_set_format", 
    "TRet", ["TWidget","string"]);
const image_value_set_click_add_delta = Module.cwrap("image_value_set_click_add_delta", 
    "TRet", ["TWidget","number"]);
const image_value_set_value = Module.cwrap("image_value_set_value", 
    "TRet", ["TWidget","number"]);
const image_value_set_min = Module.cwrap("image_value_set_min", 
    "TRet", ["TWidget","number"]);
const image_value_set_max = Module.cwrap("image_value_set_max", 
    "TRet", ["TWidget","number"]);
const image_value_cast = Module.cwrap("image_value_cast", 
    "TWidget", ["TWidget"]);
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
    "TWidget", ["TWidget","number","number","number","number"]);
const candidates_cast = Module.cwrap("candidates_cast", 
    "TWidget", ["TWidget"]);
const candidates_set_pre = Module.cwrap("candidates_set_pre", 
    "TRet", ["TWidget","boolean"]);
const candidates_set_select_by_num = Module.cwrap("candidates_set_select_by_num", 
    "TRet", ["TWidget","boolean"]);
const candidates_set_auto_hide = Module.cwrap("candidates_set_auto_hide", 
    "TRet", ["TWidget","boolean"]);
const candidates_set_button_style = Module.cwrap("candidates_set_button_style", 
    "TRet", ["TWidget","string"]);
const candidates_t_get_prop_pre = Module.cwrap("candidates_t_get_prop_pre", 
    "boolean", ["number"]);
const candidates_t_get_prop_select_by_num = Module.cwrap("candidates_t_get_prop_select_by_num", 
    "boolean", ["number"]);
const candidates_t_get_prop_auto_hide = Module.cwrap("candidates_t_get_prop_auto_hide", 
    "boolean", ["number"]);
const candidates_t_get_prop_button_style = Module.cwrap("candidates_t_get_prop_button_style", 
    "string", ["number"]);
const lang_indicator_create = Module.cwrap("lang_indicator_create", 
    "TWidget", ["TWidget","number","number","number","number"]);
const lang_indicator_set_image = Module.cwrap("lang_indicator_set_image", 
    "TRet", ["TWidget","string"]);
const lang_indicator_cast = Module.cwrap("lang_indicator_cast", 
    "TWidget", ["TWidget"]);
const lang_indicator_t_get_prop_image = Module.cwrap("lang_indicator_t_get_prop_image", 
    "string", ["number"]);
const line_number_create = Module.cwrap("line_number_create", 
    "TWidget", ["TWidget","number","number","number","number"]);
const line_number_set_top_margin = Module.cwrap("line_number_set_top_margin", 
    "TRet", ["TWidget","number"]);
const line_number_set_bottom_margin = Module.cwrap("line_number_set_bottom_margin", 
    "TRet", ["TWidget","number"]);
const line_number_set_line_height = Module.cwrap("line_number_set_line_height", 
    "TRet", ["TWidget","number"]);
const line_number_set_yoffset = Module.cwrap("line_number_set_yoffset", 
    "TRet", ["TWidget","number"]);
const line_number_cast = Module.cwrap("line_number_cast", 
    "TWidget", ["TWidget"]);
const mledit_create = Module.cwrap("mledit_create", 
    "TWidget", ["TWidget","number","number","number","number"]);
const mledit_set_readonly = Module.cwrap("mledit_set_readonly", 
    "TRet", ["TWidget","boolean"]);
const mledit_set_cancelable = Module.cwrap("mledit_set_cancelable", 
    "TRet", ["TWidget","boolean"]);
const mledit_set_focus = Module.cwrap("mledit_set_focus", 
    "TRet", ["TWidget","boolean"]);
const mledit_set_wrap_word = Module.cwrap("mledit_set_wrap_word", 
    "TRet", ["TWidget","boolean"]);
const mledit_set_max_lines = Module.cwrap("mledit_set_max_lines", 
    "TRet", ["TWidget","number"]);
const mledit_set_max_chars = Module.cwrap("mledit_set_max_chars", 
    "TRet", ["TWidget","number"]);
const mledit_set_tips = Module.cwrap("mledit_set_tips", 
    "TRet", ["TWidget","string"]);
const mledit_set_tr_tips = Module.cwrap("mledit_set_tr_tips", 
    "TRet", ["TWidget","string"]);
const mledit_set_keyboard = Module.cwrap("mledit_set_keyboard", 
    "TRet", ["TWidget","string"]);
const mledit_set_cursor = Module.cwrap("mledit_set_cursor", 
    "TRet", ["TWidget","number"]);
const mledit_get_cursor = Module.cwrap("mledit_get_cursor", 
    "number", ["TWidget"]);
const mledit_set_scroll_line = Module.cwrap("mledit_set_scroll_line", 
    "TRet", ["TWidget","number"]);
const mledit_scroll_to_offset = Module.cwrap("mledit_scroll_to_offset", 
    "TRet", ["TWidget","number"]);
const mledit_set_open_im_when_focused = Module.cwrap("mledit_set_open_im_when_focused", 
    "TRet", ["TWidget","boolean"]);
const mledit_set_close_im_when_blured = Module.cwrap("mledit_set_close_im_when_blured", 
    "TRet", ["TWidget","boolean"]);
const mledit_set_select = Module.cwrap("mledit_set_select", 
    "TRet", ["TWidget","number","number"]);
const mledit_get_selected_text = Module.cwrap("mledit_get_selected_text", 
    "string", ["TWidget"]);
const mledit_cast = Module.cwrap("mledit_cast", 
    "TWidget", ["TWidget"]);
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
    "boolean", ["number"]);
const mledit_t_get_prop_scroll_line = Module.cwrap("mledit_t_get_prop_scroll_line", 
    "number", ["number"]);
const mledit_t_get_prop_readonly = Module.cwrap("mledit_t_get_prop_readonly", 
    "boolean", ["number"]);
const mledit_t_get_prop_cancelable = Module.cwrap("mledit_t_get_prop_cancelable", 
    "boolean", ["number"]);
const mledit_t_get_prop_open_im_when_focused = Module.cwrap("mledit_t_get_prop_open_im_when_focused", 
    "boolean", ["number"]);
const mledit_t_get_prop_close_im_when_blured = Module.cwrap("mledit_t_get_prop_close_im_when_blured", 
    "boolean", ["number"]);
const progress_circle_create = Module.cwrap("progress_circle_create", 
    "TWidget", ["TWidget","number","number","number","number"]);
const progress_circle_cast = Module.cwrap("progress_circle_cast", 
    "TWidget", ["TWidget"]);
const progress_circle_set_value = Module.cwrap("progress_circle_set_value", 
    "TRet", ["TWidget","number"]);
const progress_circle_set_max = Module.cwrap("progress_circle_set_max", 
    "TRet", ["TWidget","number"]);
const progress_circle_set_format = Module.cwrap("progress_circle_set_format", 
    "TRet", ["TWidget","string"]);
const progress_circle_set_line_width = Module.cwrap("progress_circle_set_line_width", 
    "TRet", ["TWidget","number"]);
const progress_circle_set_start_angle = Module.cwrap("progress_circle_set_start_angle", 
    "TRet", ["TWidget","number"]);
const progress_circle_set_line_cap = Module.cwrap("progress_circle_set_line_cap", 
    "TRet", ["TWidget","string"]);
const progress_circle_set_show_text = Module.cwrap("progress_circle_set_show_text", 
    "TRet", ["TWidget","boolean"]);
const progress_circle_set_counter_clock_wise = Module.cwrap("progress_circle_set_counter_clock_wise", 
    "TRet", ["TWidget","boolean"]);
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
    "boolean", ["number"]);
const progress_circle_t_get_prop_show_text = Module.cwrap("progress_circle_t_get_prop_show_text", 
    "boolean", ["number"]);
const rich_text_view_create = Module.cwrap("rich_text_view_create", 
    "TWidget", ["TWidget","number","number","number","number"]);
const rich_text_view_cast = Module.cwrap("rich_text_view_cast", 
    "TWidget", ["TWidget"]);
const rich_text_create = Module.cwrap("rich_text_create", 
    "TWidget", ["TWidget","number","number","number","number"]);
const rich_text_set_text = Module.cwrap("rich_text_set_text", 
    "TRet", ["TWidget","string"]);
const rich_text_set_yslidable = Module.cwrap("rich_text_set_yslidable", 
    "TRet", ["TWidget","boolean"]);
const rich_text_cast = Module.cwrap("rich_text_cast", 
    "TWidget", ["TWidget"]);
const rich_text_t_get_prop_line_gap = Module.cwrap("rich_text_t_get_prop_line_gap", 
    "number", ["number"]);
const rich_text_t_get_prop_yslidable = Module.cwrap("rich_text_t_get_prop_yslidable", 
    "boolean", ["number"]);
const hscroll_label_create = Module.cwrap("hscroll_label_create", 
    "TWidget", ["TWidget","number","number","number","number"]);
const hscroll_label_set_lull = Module.cwrap("hscroll_label_set_lull", 
    "TRet", ["TWidget","number"]);
const hscroll_label_set_duration = Module.cwrap("hscroll_label_set_duration", 
    "TRet", ["TWidget","number"]);
const hscroll_label_set_only_focus = Module.cwrap("hscroll_label_set_only_focus", 
    "TRet", ["TWidget","boolean"]);
const hscroll_label_set_only_parent_focus = Module.cwrap("hscroll_label_set_only_parent_focus", 
    "TRet", ["TWidget","boolean"]);
const hscroll_label_set_loop = Module.cwrap("hscroll_label_set_loop", 
    "TRet", ["TWidget","boolean"]);
const hscroll_label_set_yoyo = Module.cwrap("hscroll_label_set_yoyo", 
    "TRet", ["TWidget","boolean"]);
const hscroll_label_set_ellipses = Module.cwrap("hscroll_label_set_ellipses", 
    "TRet", ["TWidget","boolean"]);
const hscroll_label_set_xoffset = Module.cwrap("hscroll_label_set_xoffset", 
    "TRet", ["TWidget","number"]);
const hscroll_label_start = Module.cwrap("hscroll_label_start", 
    "TRet", ["TWidget"]);
const hscroll_label_stop = Module.cwrap("hscroll_label_stop", 
    "TRet", ["TWidget"]);
const hscroll_label_cast = Module.cwrap("hscroll_label_cast", 
    "TWidget", ["TWidget"]);
const hscroll_label_t_get_prop_only_focus = Module.cwrap("hscroll_label_t_get_prop_only_focus", 
    "boolean", ["number"]);
const hscroll_label_t_get_prop_only_parent_focus = Module.cwrap("hscroll_label_t_get_prop_only_parent_focus", 
    "boolean", ["number"]);
const hscroll_label_t_get_prop_loop = Module.cwrap("hscroll_label_t_get_prop_loop", 
    "boolean", ["number"]);
const hscroll_label_t_get_prop_yoyo = Module.cwrap("hscroll_label_t_get_prop_yoyo", 
    "boolean", ["number"]);
const hscroll_label_t_get_prop_ellipses = Module.cwrap("hscroll_label_t_get_prop_ellipses", 
    "boolean", ["number"]);
const hscroll_label_t_get_prop_lull = Module.cwrap("hscroll_label_t_get_prop_lull", 
    "number", ["number"]);
const hscroll_label_t_get_prop_duration = Module.cwrap("hscroll_label_t_get_prop_duration", 
    "number", ["number"]);
const hscroll_label_t_get_prop_xoffset = Module.cwrap("hscroll_label_t_get_prop_xoffset", 
    "number", ["number"]);
const hscroll_label_t_get_prop_text_w = Module.cwrap("hscroll_label_t_get_prop_text_w", 
    "number", ["number"]);
const list_item_create = Module.cwrap("list_item_create", 
    "TWidget", ["TWidget","number","number","number","number"]);
const list_item_cast = Module.cwrap("list_item_cast", 
    "TWidget", ["TWidget"]);
const list_view_h_create = Module.cwrap("list_view_h_create", 
    "TWidget", ["TWidget","number","number","number","number"]);
const list_view_h_set_item_width = Module.cwrap("list_view_h_set_item_width", 
    "TRet", ["TWidget","number"]);
const list_view_h_set_spacing = Module.cwrap("list_view_h_set_spacing", 
    "TRet", ["TWidget","number"]);
const list_view_h_cast = Module.cwrap("list_view_h_cast", 
    "TWidget", ["TWidget"]);
const list_view_h_t_get_prop_item_width = Module.cwrap("list_view_h_t_get_prop_item_width", 
    "number", ["number"]);
const list_view_h_t_get_prop_spacing = Module.cwrap("list_view_h_t_get_prop_spacing", 
    "number", ["number"]);
const list_view_create = Module.cwrap("list_view_create", 
    "TWidget", ["TWidget","number","number","number","number"]);
const list_view_set_item_height = Module.cwrap("list_view_set_item_height", 
    "TRet", ["TWidget","number"]);
const list_view_set_default_item_height = Module.cwrap("list_view_set_default_item_height", 
    "TRet", ["TWidget","number"]);
const list_view_set_auto_hide_scroll_bar = Module.cwrap("list_view_set_auto_hide_scroll_bar", 
    "TRet", ["TWidget","boolean"]);
const list_view_set_floating_scroll_bar = Module.cwrap("list_view_set_floating_scroll_bar", 
    "TRet", ["TWidget","boolean"]);
const list_view_cast = Module.cwrap("list_view_cast", 
    "TWidget", ["TWidget"]);
const list_view_reinit = Module.cwrap("list_view_reinit", 
    "TRet", ["TWidget"]);
const list_view_t_get_prop_item_height = Module.cwrap("list_view_t_get_prop_item_height", 
    "number", ["number"]);
const list_view_t_get_prop_default_item_height = Module.cwrap("list_view_t_get_prop_default_item_height", 
    "number", ["number"]);
const list_view_t_get_prop_auto_hide_scroll_bar = Module.cwrap("list_view_t_get_prop_auto_hide_scroll_bar", 
    "boolean", ["number"]);
const list_view_t_get_prop_floating_scroll_bar = Module.cwrap("list_view_t_get_prop_floating_scroll_bar", 
    "boolean", ["number"]);
const scroll_bar_create = Module.cwrap("scroll_bar_create", 
    "TWidget", ["TWidget","number","number","number","number"]);
const scroll_bar_cast = Module.cwrap("scroll_bar_cast", 
    "TWidget", ["TWidget"]);
const scroll_bar_create_mobile = Module.cwrap("scroll_bar_create_mobile", 
    "TWidget", ["TWidget","number","number","number","number"]);
const scroll_bar_create_desktop = Module.cwrap("scroll_bar_create_desktop", 
    "TWidget", ["TWidget","number","number","number","number"]);
const scroll_bar_set_params = Module.cwrap("scroll_bar_set_params", 
    "TRet", ["TWidget","number","number"]);
const scroll_bar_scroll_to = Module.cwrap("scroll_bar_scroll_to", 
    "TRet", ["TWidget","number","number"]);
const scroll_bar_set_value = Module.cwrap("scroll_bar_set_value", 
    "TRet", ["TWidget","number"]);
const scroll_bar_add_delta = Module.cwrap("scroll_bar_add_delta", 
    "TRet", ["TWidget","number"]);
const scroll_bar_scroll_delta = Module.cwrap("scroll_bar_scroll_delta", 
    "TRet", ["TWidget","number"]);
const scroll_bar_set_value_only = Module.cwrap("scroll_bar_set_value_only", 
    "TRet", ["TWidget","number"]);
const scroll_bar_set_auto_hide = Module.cwrap("scroll_bar_set_auto_hide", 
    "TRet", ["TWidget","boolean"]);
const scroll_bar_is_mobile = Module.cwrap("scroll_bar_is_mobile", 
    "boolean", ["TWidget"]);
const scroll_bar_t_get_prop_virtual_size = Module.cwrap("scroll_bar_t_get_prop_virtual_size", 
    "number", ["number"]);
const scroll_bar_t_get_prop_value = Module.cwrap("scroll_bar_t_get_prop_value", 
    "number", ["number"]);
const scroll_bar_t_get_prop_row = Module.cwrap("scroll_bar_t_get_prop_row", 
    "number", ["number"]);
const scroll_bar_t_get_prop_animatable = Module.cwrap("scroll_bar_t_get_prop_animatable", 
    "boolean", ["number"]);
const scroll_bar_t_get_prop_auto_hide = Module.cwrap("scroll_bar_t_get_prop_auto_hide", 
    "boolean", ["number"]);
const scroll_view_create = Module.cwrap("scroll_view_create", 
    "TWidget", ["TWidget","number","number","number","number"]);
const scroll_view_cast = Module.cwrap("scroll_view_cast", 
    "TWidget", ["TWidget"]);
const scroll_view_set_virtual_w = Module.cwrap("scroll_view_set_virtual_w", 
    "TRet", ["TWidget","number"]);
const scroll_view_set_virtual_h = Module.cwrap("scroll_view_set_virtual_h", 
    "TRet", ["TWidget","number"]);
const scroll_view_set_xslidable = Module.cwrap("scroll_view_set_xslidable", 
    "TRet", ["TWidget","boolean"]);
const scroll_view_set_yslidable = Module.cwrap("scroll_view_set_yslidable", 
    "TRet", ["TWidget","boolean"]);
const scroll_view_set_snap_to_page = Module.cwrap("scroll_view_set_snap_to_page", 
    "TRet", ["TWidget","boolean"]);
const scroll_view_set_move_to_page = Module.cwrap("scroll_view_set_move_to_page", 
    "TRet", ["TWidget","boolean"]);
const scroll_view_set_recursive = Module.cwrap("scroll_view_set_recursive", 
    "TRet", ["TWidget","boolean"]);
const scroll_view_set_recursive_only = Module.cwrap("scroll_view_set_recursive_only", 
    "TRet", ["TWidget","boolean"]);
const scroll_view_set_offset = Module.cwrap("scroll_view_set_offset", 
    "TRet", ["TWidget","number","number"]);
const scroll_view_set_speed_scale = Module.cwrap("scroll_view_set_speed_scale", 
    "TRet", ["TWidget","number","number"]);
const scroll_view_scroll_to = Module.cwrap("scroll_view_scroll_to", 
    "TRet", ["TWidget","number","number","number"]);
const scroll_view_scroll_delta_to = Module.cwrap("scroll_view_scroll_delta_to", 
    "TRet", ["TWidget","number","number","number"]);
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
    "boolean", ["number"]);
const scroll_view_t_get_prop_yslidable = Module.cwrap("scroll_view_t_get_prop_yslidable", 
    "boolean", ["number"]);
const scroll_view_t_get_prop_snap_to_page = Module.cwrap("scroll_view_t_get_prop_snap_to_page", 
    "boolean", ["number"]);
const scroll_view_t_get_prop_move_to_page = Module.cwrap("scroll_view_t_get_prop_move_to_page", 
    "boolean", ["number"]);
const scroll_view_t_get_prop_recursive = Module.cwrap("scroll_view_t_get_prop_recursive", 
    "boolean", ["number"]);
const slide_menu_create = Module.cwrap("slide_menu_create", 
    "TWidget", ["TWidget","number","number","number","number"]);
const slide_menu_cast = Module.cwrap("slide_menu_cast", 
    "TWidget", ["TWidget"]);
const slide_menu_set_value = Module.cwrap("slide_menu_set_value", 
    "TRet", ["TWidget","number"]);
const slide_menu_set_align_v = Module.cwrap("slide_menu_set_align_v", 
    "TRet", ["TWidget","TAlignV"]);
const slide_menu_set_min_scale = Module.cwrap("slide_menu_set_min_scale", 
    "TRet", ["TWidget","number"]);
const slide_menu_t_get_prop_value = Module.cwrap("slide_menu_t_get_prop_value", 
    "number", ["number"]);
const slide_menu_t_get_prop_align_v = Module.cwrap("slide_menu_t_get_prop_align_v", 
    "TAlignV", ["number"]);
const slide_menu_t_get_prop_min_scale = Module.cwrap("slide_menu_t_get_prop_min_scale", 
    "number", ["number"]);
const slide_indicator_create = Module.cwrap("slide_indicator_create", 
    "TWidget", ["TWidget","number","number","number","number"]);
const slide_indicator_create_linear = Module.cwrap("slide_indicator_create_linear", 
    "TWidget", ["TWidget","number","number","number","number"]);
const slide_indicator_create_arc = Module.cwrap("slide_indicator_create_arc", 
    "TWidget", ["TWidget","number","number","number","number"]);
const slide_indicator_cast = Module.cwrap("slide_indicator_cast", 
    "TWidget", ["TWidget"]);
const slide_indicator_set_value = Module.cwrap("slide_indicator_set_value", 
    "TRet", ["TWidget","number"]);
const slide_indicator_set_max = Module.cwrap("slide_indicator_set_max", 
    "TRet", ["TWidget","number"]);
const slide_indicator_set_default_paint = Module.cwrap("slide_indicator_set_default_paint", 
    "TRet", ["TWidget","TIndicatorDefaultPaint"]);
const slide_indicator_set_auto_hide = Module.cwrap("slide_indicator_set_auto_hide", 
    "TRet", ["TWidget","number"]);
const slide_indicator_set_margin = Module.cwrap("slide_indicator_set_margin", 
    "TRet", ["TWidget","number"]);
const slide_indicator_set_spacing = Module.cwrap("slide_indicator_set_spacing", 
    "TRet", ["TWidget","number"]);
const slide_indicator_set_size = Module.cwrap("slide_indicator_set_size", 
    "TRet", ["TWidget","number"]);
const slide_indicator_set_anchor = Module.cwrap("slide_indicator_set_anchor", 
    "TRet", ["TWidget","string","string"]);
const slide_indicator_set_indicated_target = Module.cwrap("slide_indicator_set_indicated_target", 
    "TRet", ["TWidget","string"]);
const slide_indicator_t_get_prop_value = Module.cwrap("slide_indicator_t_get_prop_value", 
    "number", ["number"]);
const slide_indicator_t_get_prop_max = Module.cwrap("slide_indicator_t_get_prop_max", 
    "number", ["number"]);
const slide_indicator_t_get_prop_default_paint = Module.cwrap("slide_indicator_t_get_prop_default_paint", 
    "TIndicatorDefaultPaint", ["number"]);
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
    "TWidget", ["TWidget","number","number","number","number"]);
const slide_view_cast = Module.cwrap("slide_view_cast", 
    "TWidget", ["TWidget"]);
const slide_view_set_auto_play = Module.cwrap("slide_view_set_auto_play", 
    "TRet", ["TWidget","number"]);
const slide_view_set_active = Module.cwrap("slide_view_set_active", 
    "TRet", ["TWidget","number"]);
const slide_view_set_active_ex = Module.cwrap("slide_view_set_active_ex", 
    "TRet", ["TWidget","number","boolean"]);
const slide_view_set_vertical = Module.cwrap("slide_view_set_vertical", 
    "TRet", ["TWidget","boolean"]);
const slide_view_set_anim_hint = Module.cwrap("slide_view_set_anim_hint", 
    "TRet", ["TWidget","string"]);
const slide_view_set_loop = Module.cwrap("slide_view_set_loop", 
    "TRet", ["TWidget","boolean"]);
const slide_view_remove_index = Module.cwrap("slide_view_remove_index", 
    "TRet", ["TWidget","number"]);
const slide_view_t_get_prop_vertical = Module.cwrap("slide_view_t_get_prop_vertical", 
    "boolean", ["number"]);
const slide_view_t_get_prop_auto_play = Module.cwrap("slide_view_t_get_prop_auto_play", 
    "number", ["number"]);
const slide_view_t_get_prop_loop = Module.cwrap("slide_view_t_get_prop_loop", 
    "boolean", ["number"]);
const slide_view_t_get_prop_anim_hint = Module.cwrap("slide_view_t_get_prop_anim_hint", 
    "string", ["number"]);
const switch_create = Module.cwrap("switch_create", 
    "TWidget", ["TWidget","number","number","number","number"]);
const switch_set_value = Module.cwrap("switch_set_value", 
    "TRet", ["TWidget","boolean"]);
const switch_cast = Module.cwrap("switch_cast", 
    "TWidget", ["TWidget"]);
const switch_t_get_prop_value = Module.cwrap("switch_t_get_prop_value", 
    "boolean", ["number"]);
const switch_t_get_prop_max_xoffset_ratio = Module.cwrap("switch_t_get_prop_max_xoffset_ratio", 
    "number", ["number"]);
const text_selector_create = Module.cwrap("text_selector_create", 
    "TWidget", ["TWidget","number","number","number","number"]);
const text_selector_cast = Module.cwrap("text_selector_cast", 
    "TWidget", ["TWidget"]);
const text_selector_reset_options = Module.cwrap("text_selector_reset_options", 
    "TRet", ["TWidget"]);
const text_selector_count_options = Module.cwrap("text_selector_count_options", 
    "number", ["TWidget"]);
const text_selector_append_option = Module.cwrap("text_selector_append_option", 
    "TRet", ["TWidget","number","string"]);
const text_selector_set_options = Module.cwrap("text_selector_set_options", 
    "TRet", ["TWidget","string"]);
const text_selector_set_range_options_ex = Module.cwrap("text_selector_set_range_options_ex", 
    "TRet", ["TWidget","number","number","number","string"]);
const text_selector_set_range_options = Module.cwrap("text_selector_set_range_options", 
    "TRet", ["TWidget","number","number","number"]);
const text_selector_get_value = Module.cwrap("text_selector_get_value", 
    "number", ["TWidget"]);
const text_selector_set_value = Module.cwrap("text_selector_set_value", 
    "TRet", ["TWidget","number"]);
const text_selector_get_text = Module.cwrap("text_selector_get_text", 
    "string", ["TWidget"]);
const text_selector_set_text = Module.cwrap("text_selector_set_text", 
    "TRet", ["TWidget","string"]);
const text_selector_set_selected_index = Module.cwrap("text_selector_set_selected_index", 
    "TRet", ["TWidget","number"]);
const text_selector_set_visible_nr = Module.cwrap("text_selector_set_visible_nr", 
    "TRet", ["TWidget","number"]);
const text_selector_set_localize_options = Module.cwrap("text_selector_set_localize_options", 
    "TRet", ["TWidget","boolean"]);
const text_selector_set_loop_options = Module.cwrap("text_selector_set_loop_options", 
    "TRet", ["TWidget","boolean"]);
const text_selector_set_yspeed_scale = Module.cwrap("text_selector_set_yspeed_scale", 
    "TRet", ["TWidget","number"]);
const text_selector_set_animating_time = Module.cwrap("text_selector_set_animating_time", 
    "TRet", ["TWidget","number"]);
const text_selector_set_enable_value_animator = Module.cwrap("text_selector_set_enable_value_animator", 
    "TRet", ["TWidget","boolean"]);
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
    "boolean", ["number"]);
const text_selector_t_get_prop_loop_options = Module.cwrap("text_selector_t_get_prop_loop_options", 
    "boolean", ["number"]);
const text_selector_t_get_prop_enable_value_animator = Module.cwrap("text_selector_t_get_prop_enable_value_animator", 
    "boolean", ["number"]);
const time_clock_create = Module.cwrap("time_clock_create", 
    "TWidget", ["TWidget","number","number","number","number"]);
const time_clock_cast = Module.cwrap("time_clock_cast", 
    "TWidget", ["TWidget"]);
const time_clock_set_hour = Module.cwrap("time_clock_set_hour", 
    "TRet", ["TWidget","number"]);
const time_clock_set_minute = Module.cwrap("time_clock_set_minute", 
    "TRet", ["TWidget","number"]);
const time_clock_set_second = Module.cwrap("time_clock_set_second", 
    "TRet", ["TWidget","number"]);
const time_clock_set_hour_image = Module.cwrap("time_clock_set_hour_image", 
    "TRet", ["TWidget","string"]);
const time_clock_set_minute_image = Module.cwrap("time_clock_set_minute_image", 
    "TRet", ["TWidget","string"]);
const time_clock_set_second_image = Module.cwrap("time_clock_set_second_image", 
    "TRet", ["TWidget","string"]);
const time_clock_set_bg_image = Module.cwrap("time_clock_set_bg_image", 
    "TRet", ["TWidget","string"]);
const time_clock_set_image = Module.cwrap("time_clock_set_image", 
    "TRet", ["TWidget","string"]);
const time_clock_set_hour_anchor = Module.cwrap("time_clock_set_hour_anchor", 
    "TRet", ["TWidget","string","string"]);
const time_clock_set_minute_anchor = Module.cwrap("time_clock_set_minute_anchor", 
    "TRet", ["TWidget","string","string"]);
const time_clock_set_second_anchor = Module.cwrap("time_clock_set_second_anchor", 
    "TRet", ["TWidget","string","string"]);
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
    "TWidget", ["TWidget","number","number","number","number"]);
const vpage_cast = Module.cwrap("vpage_cast", 
    "TWidget", ["TWidget"]);
const vpage_set_ui_asset = Module.cwrap("vpage_set_ui_asset", 
    "TRet", ["TWidget","string"]);
const vpage_set_anim_hint = Module.cwrap("vpage_set_anim_hint", 
    "TRet", ["TWidget","string"]);
const vpage_t_get_prop_ui_asset = Module.cwrap("vpage_t_get_prop_ui_asset", 
    "string", ["number"]);
const vpage_t_get_prop_anim_hint = Module.cwrap("vpage_t_get_prop_anim_hint", 
    "string", ["number"]);
const prop_change_event_cast = Module.cwrap("prop_change_event_cast", 
    "TPropChangeEvent", ["TEvent"]);
const prop_change_event_t_get_prop_name = Module.cwrap("prop_change_event_t_get_prop_name", 
    "string", ["number"]);
const prop_change_event_t_get_prop_value = Module.cwrap("prop_change_event_t_get_prop_value", 
    "TValue", ["number"]);
const progress_event_cast = Module.cwrap("progress_event_cast", 
    "TProgressEvent", ["TEvent"]);
const progress_event_t_get_prop_percent = Module.cwrap("progress_event_t_get_prop_percent", 
    "number", ["number"]);
const done_event_cast = Module.cwrap("done_event_cast", 
    "TDoneEvent", ["TEvent"]);
const done_event_t_get_prop_result = Module.cwrap("done_event_t_get_prop_result", 
    "TRet", ["number"]);
const error_event_cast = Module.cwrap("error_event_cast", 
    "TErrorEvent", ["TEvent"]);
const error_event_t_get_prop_code = Module.cwrap("error_event_t_get_prop_code", 
    "number", ["number"]);
const error_event_t_get_prop_message = Module.cwrap("error_event_t_get_prop_message", 
    "string", ["number"]);
const cmd_exec_event_cast = Module.cwrap("cmd_exec_event_cast", 
    "TCmdExecEvent", ["TEvent"]);
const cmd_exec_event_t_get_prop_name = Module.cwrap("cmd_exec_event_t_get_prop_name", 
    "string", ["number"]);
const cmd_exec_event_t_get_prop_args = Module.cwrap("cmd_exec_event_t_get_prop_args", 
    "string", ["number"]);
const cmd_exec_event_t_get_prop_result = Module.cwrap("cmd_exec_event_t_get_prop_result", 
    "TRet", ["number"]);
const cmd_exec_event_t_get_prop_can_exec = Module.cwrap("cmd_exec_event_t_get_prop_can_exec", 
    "boolean", ["number"]);
const app_bar_create = Module.cwrap("app_bar_create", 
    "TWidget", ["TWidget","number","number","number","number"]);
const app_bar_cast = Module.cwrap("app_bar_cast", 
    "TWidget", ["TWidget"]);
const button_group_create = Module.cwrap("button_group_create", 
    "TWidget", ["TWidget","number","number","number","number"]);
const button_group_cast = Module.cwrap("button_group_cast", 
    "TWidget", ["TWidget"]);
const button_create = Module.cwrap("button_create", 
    "TWidget", ["TWidget","number","number","number","number"]);
const button_cast = Module.cwrap("button_cast", 
    "TWidget", ["TWidget"]);
const button_set_repeat = Module.cwrap("button_set_repeat", 
    "TRet", ["TWidget","number"]);
const button_set_long_press_time = Module.cwrap("button_set_long_press_time", 
    "TRet", ["TWidget","number"]);
const button_set_enable_long_press = Module.cwrap("button_set_enable_long_press", 
    "TRet", ["TWidget","boolean"]);
const button_t_get_prop_repeat = Module.cwrap("button_t_get_prop_repeat", 
    "number", ["number"]);
const button_t_get_prop_enable_long_press = Module.cwrap("button_t_get_prop_enable_long_press", 
    "boolean", ["number"]);
const button_t_get_prop_long_press_time = Module.cwrap("button_t_get_prop_long_press_time", 
    "number", ["number"]);
const check_button_create = Module.cwrap("check_button_create", 
    "TWidget", ["TWidget","number","number","number","number"]);
const check_button_create_radio = Module.cwrap("check_button_create_radio", 
    "TWidget", ["TWidget","number","number","number","number"]);
const check_button_set_value = Module.cwrap("check_button_set_value", 
    "TRet", ["TWidget","boolean"]);
const check_button_cast = Module.cwrap("check_button_cast", 
    "TWidget", ["TWidget"]);
const check_button_t_get_prop_value = Module.cwrap("check_button_t_get_prop_value", 
    "boolean", ["number"]);
const clip_view_create = Module.cwrap("clip_view_create", 
    "TWidget", ["TWidget","number","number","number","number"]);
const clip_view_cast = Module.cwrap("clip_view_cast", 
    "TWidget", ["TWidget"]);
const color_tile_create = Module.cwrap("color_tile_create", 
    "TWidget", ["TWidget","number","number","number","number"]);
const color_tile_cast = Module.cwrap("color_tile_cast", 
    "TWidget", ["TWidget"]);
const color_tile_set_bg_color = Module.cwrap("color_tile_set_bg_color", 
    "TRet", ["TWidget","string"]);
const color_tile_get_bg_color = Module.cwrap("color_tile_get_bg_color", 
    "string", ["TWidget"]);
const color_tile_get_border_color = Module.cwrap("color_tile_get_border_color", 
    "string", ["TWidget"]);
const color_tile_t_get_prop_bg_color = Module.cwrap("color_tile_t_get_prop_bg_color", 
    "string", ["number"]);
const color_tile_t_get_prop_border_color = Module.cwrap("color_tile_t_get_prop_border_color", 
    "string", ["number"]);
const column_create = Module.cwrap("column_create", 
    "TWidget", ["TWidget","number","number","number","number"]);
const column_cast = Module.cwrap("column_cast", 
    "TWidget", ["TWidget"]);
const combo_box_item_create = Module.cwrap("combo_box_item_create", 
    "TWidget", ["TWidget","number","number","number","number"]);
const combo_box_item_cast = Module.cwrap("combo_box_item_cast", 
    "TWidget", ["TWidget"]);
const combo_box_item_set_checked = Module.cwrap("combo_box_item_set_checked", 
    "TRet", ["TWidget","boolean"]);
const combo_box_item_set_value = Module.cwrap("combo_box_item_set_value", 
    "TRet", ["TWidget","number"]);
const combo_box_item_t_get_prop_value = Module.cwrap("combo_box_item_t_get_prop_value", 
    "number", ["number"]);
const combo_box_item_t_get_prop_checked = Module.cwrap("combo_box_item_t_get_prop_checked", 
    "boolean", ["number"]);
const dialog_client_create = Module.cwrap("dialog_client_create", 
    "TWidget", ["TWidget","number","number","number","number"]);
const dialog_client_cast = Module.cwrap("dialog_client_cast", 
    "TWidget", ["TWidget"]);
const dialog_title_create = Module.cwrap("dialog_title_create", 
    "TWidget", ["TWidget","number","number","number","number"]);
const dialog_title_cast = Module.cwrap("dialog_title_cast", 
    "TWidget", ["TWidget"]);
const digit_clock_create = Module.cwrap("digit_clock_create", 
    "TWidget", ["TWidget","number","number","number","number"]);
const digit_clock_cast = Module.cwrap("digit_clock_cast", 
    "TWidget", ["TWidget"]);
const digit_clock_set_format = Module.cwrap("digit_clock_set_format", 
    "TRet", ["TWidget","string"]);
const digit_clock_t_get_prop_format = Module.cwrap("digit_clock_t_get_prop_format", 
    "string", ["number"]);
const dragger_create = Module.cwrap("dragger_create", 
    "TWidget", ["TWidget","number","number","number","number"]);
const dragger_cast = Module.cwrap("dragger_cast", 
    "TWidget", ["TWidget"]);
const dragger_set_range = Module.cwrap("dragger_set_range", 
    "TRet", ["TWidget","number","number","number","number"]);
const dragger_t_get_prop_x_min = Module.cwrap("dragger_t_get_prop_x_min", 
    "number", ["number"]);
const dragger_t_get_prop_y_min = Module.cwrap("dragger_t_get_prop_y_min", 
    "number", ["number"]);
const dragger_t_get_prop_x_max = Module.cwrap("dragger_t_get_prop_x_max", 
    "number", ["number"]);
const dragger_t_get_prop_y_max = Module.cwrap("dragger_t_get_prop_y_max", 
    "number", ["number"]);
const edit_create = Module.cwrap("edit_create", 
    "TWidget", ["TWidget","number","number","number","number"]);
const edit_cast = Module.cwrap("edit_cast", 
    "TWidget", ["TWidget"]);
const edit_get_int = Module.cwrap("edit_get_int", 
    "number", ["TWidget"]);
const edit_get_double = Module.cwrap("edit_get_double", 
    "number", ["TWidget"]);
const edit_set_int = Module.cwrap("edit_set_int", 
    "TRet", ["TWidget","number"]);
const edit_set_double = Module.cwrap("edit_set_double", 
    "TRet", ["TWidget","number"]);
const edit_set_text_limit = Module.cwrap("edit_set_text_limit", 
    "TRet", ["TWidget","number","number"]);
const edit_set_int_limit = Module.cwrap("edit_set_int_limit", 
    "TRet", ["TWidget","number","number","number"]);
const edit_set_float_limit = Module.cwrap("edit_set_float_limit", 
    "TRet", ["TWidget","number","number","number"]);
const edit_set_readonly = Module.cwrap("edit_set_readonly", 
    "TRet", ["TWidget","boolean"]);
const edit_set_cancelable = Module.cwrap("edit_set_cancelable", 
    "TRet", ["TWidget","boolean"]);
const edit_set_auto_fix = Module.cwrap("edit_set_auto_fix", 
    "TRet", ["TWidget","boolean"]);
const edit_set_select_none_when_focused = Module.cwrap("edit_set_select_none_when_focused", 
    "TRet", ["TWidget","boolean"]);
const edit_set_open_im_when_focused = Module.cwrap("edit_set_open_im_when_focused", 
    "TRet", ["TWidget","boolean"]);
const edit_set_close_im_when_blured = Module.cwrap("edit_set_close_im_when_blured", 
    "TRet", ["TWidget","boolean"]);
const edit_set_input_type = Module.cwrap("edit_set_input_type", 
    "TRet", ["TWidget","TInputType"]);
const edit_set_action_text = Module.cwrap("edit_set_action_text", 
    "TRet", ["TWidget","string"]);
const edit_set_tips = Module.cwrap("edit_set_tips", 
    "TRet", ["TWidget","string"]);
const edit_set_tr_tips = Module.cwrap("edit_set_tr_tips", 
    "TRet", ["TWidget","string"]);
const edit_set_keyboard = Module.cwrap("edit_set_keyboard", 
    "TRet", ["TWidget","string"]);
const edit_set_password_visible = Module.cwrap("edit_set_password_visible", 
    "TRet", ["TWidget","boolean"]);
const edit_set_focus = Module.cwrap("edit_set_focus", 
    "TRet", ["TWidget","boolean"]);
const edit_set_cursor = Module.cwrap("edit_set_cursor", 
    "TRet", ["TWidget","number"]);
const edit_get_cursor = Module.cwrap("edit_get_cursor", 
    "number", ["TWidget"]);
const edit_set_select = Module.cwrap("edit_set_select", 
    "TRet", ["TWidget","number","number"]);
const edit_get_selected_text = Module.cwrap("edit_get_selected_text", 
    "string", ["TWidget"]);
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
    "TInputType", ["number"]);
const edit_t_get_prop_readonly = Module.cwrap("edit_t_get_prop_readonly", 
    "boolean", ["number"]);
const edit_t_get_prop_password_visible = Module.cwrap("edit_t_get_prop_password_visible", 
    "boolean", ["number"]);
const edit_t_get_prop_auto_fix = Module.cwrap("edit_t_get_prop_auto_fix", 
    "boolean", ["number"]);
const edit_t_get_prop_select_none_when_focused = Module.cwrap("edit_t_get_prop_select_none_when_focused", 
    "boolean", ["number"]);
const edit_t_get_prop_open_im_when_focused = Module.cwrap("edit_t_get_prop_open_im_when_focused", 
    "boolean", ["number"]);
const edit_t_get_prop_close_im_when_blured = Module.cwrap("edit_t_get_prop_close_im_when_blured", 
    "boolean", ["number"]);
const edit_t_get_prop_cancelable = Module.cwrap("edit_t_get_prop_cancelable", 
    "boolean", ["number"]);
const grid_item_create = Module.cwrap("grid_item_create", 
    "TWidget", ["TWidget","number","number","number","number"]);
const grid_item_cast = Module.cwrap("grid_item_cast", 
    "TWidget", ["TWidget"]);
const grid_create = Module.cwrap("grid_create", 
    "TWidget", ["TWidget","number","number","number","number"]);
const grid_cast = Module.cwrap("grid_cast", 
    "TWidget", ["TWidget"]);
const group_box_create = Module.cwrap("group_box_create", 
    "TWidget", ["TWidget","number","number","number","number"]);
const group_box_cast = Module.cwrap("group_box_cast", 
    "TWidget", ["TWidget"]);
const label_create = Module.cwrap("label_create", 
    "TWidget", ["TWidget","number","number","number","number"]);
const label_set_length = Module.cwrap("label_set_length", 
    "TRet", ["TWidget","number"]);
const label_set_max_w = Module.cwrap("label_set_max_w", 
    "TRet", ["TWidget","number"]);
const label_set_line_wrap = Module.cwrap("label_set_line_wrap", 
    "TRet", ["TWidget","boolean"]);
const label_set_word_wrap = Module.cwrap("label_set_word_wrap", 
    "TRet", ["TWidget","boolean"]);
const label_resize_to_content = Module.cwrap("label_resize_to_content", 
    "TRet", ["TWidget","number","number","number","number"]);
const label_cast = Module.cwrap("label_cast", 
    "TWidget", ["TWidget"]);
const label_t_get_prop_length = Module.cwrap("label_t_get_prop_length", 
    "number", ["number"]);
const label_t_get_prop_line_wrap = Module.cwrap("label_t_get_prop_line_wrap", 
    "boolean", ["number"]);
const label_t_get_prop_word_wrap = Module.cwrap("label_t_get_prop_word_wrap", 
    "boolean", ["number"]);
const label_t_get_prop_max_w = Module.cwrap("label_t_get_prop_max_w", 
    "number", ["number"]);
const pages_create = Module.cwrap("pages_create", 
    "TWidget", ["TWidget","number","number","number","number"]);
const pages_cast = Module.cwrap("pages_cast", 
    "TWidget", ["TWidget"]);
const pages_set_active = Module.cwrap("pages_set_active", 
    "TRet", ["TWidget","number"]);
const pages_set_active_by_name = Module.cwrap("pages_set_active_by_name", 
    "TRet", ["TWidget","string"]);
const pages_t_get_prop_active = Module.cwrap("pages_t_get_prop_active", 
    "number", ["number"]);
const progress_bar_create = Module.cwrap("progress_bar_create", 
    "TWidget", ["TWidget","number","number","number","number"]);
const progress_bar_cast = Module.cwrap("progress_bar_cast", 
    "TWidget", ["TWidget"]);
const progress_bar_set_value = Module.cwrap("progress_bar_set_value", 
    "TRet", ["TWidget","number"]);
const progress_bar_set_max = Module.cwrap("progress_bar_set_max", 
    "TRet", ["TWidget","number"]);
const progress_bar_set_format = Module.cwrap("progress_bar_set_format", 
    "TRet", ["TWidget","string"]);
const progress_bar_set_vertical = Module.cwrap("progress_bar_set_vertical", 
    "TRet", ["TWidget","boolean"]);
const progress_bar_set_show_text = Module.cwrap("progress_bar_set_show_text", 
    "TRet", ["TWidget","boolean"]);
const progress_bar_set_reverse = Module.cwrap("progress_bar_set_reverse", 
    "TRet", ["TWidget","boolean"]);
const progress_bar_get_percent = Module.cwrap("progress_bar_get_percent", 
    "number", ["TWidget"]);
const progress_bar_t_get_prop_value = Module.cwrap("progress_bar_t_get_prop_value", 
    "number", ["number"]);
const progress_bar_t_get_prop_max = Module.cwrap("progress_bar_t_get_prop_max", 
    "number", ["number"]);
const progress_bar_t_get_prop_format = Module.cwrap("progress_bar_t_get_prop_format", 
    "string", ["number"]);
const progress_bar_t_get_prop_vertical = Module.cwrap("progress_bar_t_get_prop_vertical", 
    "boolean", ["number"]);
const progress_bar_t_get_prop_show_text = Module.cwrap("progress_bar_t_get_prop_show_text", 
    "boolean", ["number"]);
const progress_bar_t_get_prop_reverse = Module.cwrap("progress_bar_t_get_prop_reverse", 
    "boolean", ["number"]);
const row_create = Module.cwrap("row_create", 
    "TWidget", ["TWidget","number","number","number","number"]);
const row_cast = Module.cwrap("row_cast", 
    "TWidget", ["TWidget"]);
const slider_create = Module.cwrap("slider_create", 
    "TWidget", ["TWidget","number","number","number","number"]);
const slider_cast = Module.cwrap("slider_cast", 
    "TWidget", ["TWidget"]);
const slider_set_value = Module.cwrap("slider_set_value", 
    "TRet", ["TWidget","number"]);
const slider_set_min = Module.cwrap("slider_set_min", 
    "TRet", ["TWidget","number"]);
const slider_set_max = Module.cwrap("slider_set_max", 
    "TRet", ["TWidget","number"]);
const slider_set_step = Module.cwrap("slider_set_step", 
    "TRet", ["TWidget","number"]);
const slider_set_bar_size = Module.cwrap("slider_set_bar_size", 
    "TRet", ["TWidget","number"]);
const slider_set_vertical = Module.cwrap("slider_set_vertical", 
    "TRet", ["TWidget","boolean"]);
const slider_t_get_prop_value = Module.cwrap("slider_t_get_prop_value", 
    "number", ["number"]);
const slider_t_get_prop_min = Module.cwrap("slider_t_get_prop_min", 
    "number", ["number"]);
const slider_t_get_prop_max = Module.cwrap("slider_t_get_prop_max", 
    "number", ["number"]);
const slider_t_get_prop_step = Module.cwrap("slider_t_get_prop_step", 
    "number", ["number"]);
const slider_t_get_prop_vertical = Module.cwrap("slider_t_get_prop_vertical", 
    "boolean", ["number"]);
const slider_t_get_prop_bar_size = Module.cwrap("slider_t_get_prop_bar_size", 
    "number", ["number"]);
const slider_t_get_prop_dragger_size = Module.cwrap("slider_t_get_prop_dragger_size", 
    "number", ["number"]);
const slider_t_get_prop_dragger_adapt_to_icon = Module.cwrap("slider_t_get_prop_dragger_adapt_to_icon", 
    "boolean", ["number"]);
const slider_t_get_prop_slide_with_bar = Module.cwrap("slider_t_get_prop_slide_with_bar", 
    "boolean", ["number"]);
const tab_button_group_create = Module.cwrap("tab_button_group_create", 
    "TWidget", ["TWidget","number","number","number","number"]);
const tab_button_group_set_compact = Module.cwrap("tab_button_group_set_compact", 
    "TRet", ["TWidget","boolean"]);
const tab_button_group_set_scrollable = Module.cwrap("tab_button_group_set_scrollable", 
    "TRet", ["TWidget","boolean"]);
const tab_button_group_cast = Module.cwrap("tab_button_group_cast", 
    "TWidget", ["TWidget"]);
const tab_button_group_t_get_prop_compact = Module.cwrap("tab_button_group_t_get_prop_compact", 
    "boolean", ["number"]);
const tab_button_group_t_get_prop_scrollable = Module.cwrap("tab_button_group_t_get_prop_scrollable", 
    "boolean", ["number"]);
const tab_button_create = Module.cwrap("tab_button_create", 
    "TWidget", ["TWidget","number","number","number","number"]);
const tab_button_cast = Module.cwrap("tab_button_cast", 
    "TWidget", ["TWidget"]);
const tab_button_set_value = Module.cwrap("tab_button_set_value", 
    "TRet", ["TWidget","boolean"]);
const tab_button_set_icon = Module.cwrap("tab_button_set_icon", 
    "TRet", ["TWidget","string"]);
const tab_button_set_active_icon = Module.cwrap("tab_button_set_active_icon", 
    "TRet", ["TWidget","string"]);
const tab_button_set_load_ui = Module.cwrap("tab_button_set_load_ui", 
    "TRet", ["TWidget","string"]);
const tab_button_t_get_prop_value = Module.cwrap("tab_button_t_get_prop_value", 
    "boolean", ["number"]);
const tab_button_t_get_prop_load_ui = Module.cwrap("tab_button_t_get_prop_load_ui", 
    "string", ["number"]);
const tab_button_t_get_prop_active_icon = Module.cwrap("tab_button_t_get_prop_active_icon", 
    "string", ["number"]);
const tab_button_t_get_prop_icon = Module.cwrap("tab_button_t_get_prop_icon", 
    "string", ["number"]);
const tab_control_create = Module.cwrap("tab_control_create", 
    "TWidget", ["TWidget","number","number","number","number"]);
const tab_control_cast = Module.cwrap("tab_control_cast", 
    "TWidget", ["TWidget"]);
const view_create = Module.cwrap("view_create", 
    "TWidget", ["TWidget","number","number","number","number"]);
const view_set_default_focused_child = Module.cwrap("view_set_default_focused_child", 
    "TRet", ["TWidget","string"]);
const view_cast = Module.cwrap("view_cast", 
    "TWidget", ["TWidget"]);
const view_t_get_prop_default_focused_child = Module.cwrap("view_t_get_prop_default_focused_child", 
    "string", ["number"]);
const dialog_create = Module.cwrap("dialog_create", 
    "TWidget", ["TWidget","number","number","number","number"]);
const dialog_create_simple = Module.cwrap("dialog_create_simple", 
    "TWidget", ["TWidget","number","number","number","number"]);
const dialog_cast = Module.cwrap("dialog_cast", 
    "TWidget", ["TWidget"]);
const dialog_get_title = Module.cwrap("dialog_get_title", 
    "TWidget", ["TWidget"]);
const dialog_get_client = Module.cwrap("dialog_get_client", 
    "TWidget", ["TWidget"]);
const dialog_open = Module.cwrap("dialog_open", 
    "TWidget", ["string"]);
const dialog_set_title = Module.cwrap("dialog_set_title", 
    "TRet", ["TWidget","string"]);
const dialog_modal = Module.cwrap("dialog_modal", 
    "TDialogQuitCode", ["TWidget"]);
const dialog_quit = Module.cwrap("dialog_quit", 
    "TRet", ["TWidget","number"]);
const dialog_is_quited = Module.cwrap("dialog_is_quited", 
    "boolean", ["TWidget"]);
const dialog_is_modal = Module.cwrap("dialog_is_modal", 
    "boolean", ["TWidget"]);
const dialog_toast = Module.cwrap("dialog_toast", 
    "TRet", ["string","number"]);
const dialog_info = Module.cwrap("dialog_info", 
    "TRet", ["string","string"]);
const dialog_warn = Module.cwrap("dialog_warn", 
    "TRet", ["string","string"]);
const dialog_confirm = Module.cwrap("dialog_confirm", 
    "TRet", ["string","string"]);
const dialog_t_get_prop_highlight = Module.cwrap("dialog_t_get_prop_highlight", 
    "string", ["number"]);
const native_window_move = Module.cwrap("native_window_move", 
    "TRet", ["TNativeWindow","number","number","boolean"]);
const native_window_resize = Module.cwrap("native_window_resize", 
    "TRet", ["TNativeWindow","number","number","boolean"]);
const native_window_minimize = Module.cwrap("native_window_minimize", 
    "TRet", ["TNativeWindow"]);
const native_window_maximize = Module.cwrap("native_window_maximize", 
    "TRet", ["TNativeWindow"]);
const native_window_restore = Module.cwrap("native_window_restore", 
    "TRet", ["TNativeWindow"]);
const native_window_center = Module.cwrap("native_window_center", 
    "TRet", ["TNativeWindow"]);
const native_window_show_border = Module.cwrap("native_window_show_border", 
    "TRet", ["TNativeWindow","boolean"]);
const native_window_set_fullscreen = Module.cwrap("native_window_set_fullscreen", 
    "TRet", ["TNativeWindow","boolean"]);
const native_window_set_cursor = Module.cwrap("native_window_set_cursor", 
    "TRet", ["TNativeWindow","string","TBitmap"]);
const window_create = Module.cwrap("window_create", 
    "TWidget", ["TWidget","number","number","number","number"]);
const window_create_default = Module.cwrap("window_create_default", 
    "TWidget", []);
const window_set_fullscreen = Module.cwrap("window_set_fullscreen", 
    "TRet", ["TWidget","boolean"]);
const window_set_auto_scale_children = Module.cwrap("window_set_auto_scale_children", 
    "TRet", ["TWidget","number","number"]);
const window_open = Module.cwrap("window_open", 
    "TWidget", ["string"]);
const window_open_and_close = Module.cwrap("window_open_and_close", 
    "TWidget", ["string","TWidget"]);
const window_close = Module.cwrap("window_close", 
    "TRet", ["TWidget"]);
const window_close_force = Module.cwrap("window_close_force", 
    "TRet", ["TWidget"]);
const window_cast = Module.cwrap("window_cast", 
    "TWidget", ["TWidget"]);
const window_t_get_prop_fullscreen = Module.cwrap("window_t_get_prop_fullscreen", 
    "boolean", ["number"]);
const gif_image_create = Module.cwrap("gif_image_create", 
    "TWidget", ["TWidget","number","number","number","number"]);
const gif_image_play = Module.cwrap("gif_image_play", 
    "TRet", ["TWidget"]);
const gif_image_stop = Module.cwrap("gif_image_stop", 
    "TRet", ["TWidget"]);
const gif_image_pause = Module.cwrap("gif_image_pause", 
    "TRet", ["TWidget"]);
const gif_image_cast = Module.cwrap("gif_image_cast", 
    "TWidget", ["TWidget"]);
const keyboard_create = Module.cwrap("keyboard_create", 
    "TWidget", ["TWidget","number","number","number","number"]);
const keyboard_cast = Module.cwrap("keyboard_cast", 
    "TWidget", ["TWidget"]);
const mutable_image_create = Module.cwrap("mutable_image_create", 
    "TWidget", ["TWidget","number","number","number","number"]);
const svg_image_create = Module.cwrap("svg_image_create", 
    "TWidget", ["TWidget","number","number","number","number"]);
const svg_image_set_image = Module.cwrap("svg_image_set_image", 
    "TRet", ["TWidget","string"]);
const svg_image_cast = Module.cwrap("svg_image_cast", 
    "TWidget", ["TWidget"]);
const idle_info_cast = Module.cwrap("idle_info_cast", 
    "TIdleInfo", ["TIdleInfo"]);
const idle_info_t_get_prop_ctx = Module.cwrap("idle_info_t_get_prop_ctx", 
    "any", ["number"]);
const idle_info_t_get_prop_extra_ctx = Module.cwrap("idle_info_t_get_prop_extra_ctx", 
    "any", ["number"]);
const idle_info_t_get_prop_id = Module.cwrap("idle_info_t_get_prop_id", 
    "number", ["number"]);
const object_array_create = Module.cwrap("object_array_create", 
    "TObject", []);
const object_array_unref = Module.cwrap("object_array_unref", 
    "TRet", ["TObject"]);
const object_array_clear_props = Module.cwrap("object_array_clear_props", 
    "TRet", ["TObject"]);
const object_array_insert = Module.cwrap("object_array_insert", 
    "TRet", ["TObject","number","TValue"]);
const object_array_push = Module.cwrap("object_array_push", 
    "TRet", ["TObject","TValue"]);
const object_array_index_of = Module.cwrap("object_array_index_of", 
    "number", ["TObject","TValue"]);
const object_array_last_index_of = Module.cwrap("object_array_last_index_of", 
    "number", ["TObject","TValue"]);
const object_array_remove = Module.cwrap("object_array_remove", 
    "TRet", ["TObject","number"]);
const object_array_get_and_remove = Module.cwrap("object_array_get_and_remove", 
    "TRet", ["TObject","number","TValue"]);
const object_array_t_get_prop_size = Module.cwrap("object_array_t_get_prop_size", 
    "number", ["number"]);
const object_default_create = Module.cwrap("object_default_create", 
    "TObject", []);
const object_default_unref = Module.cwrap("object_default_unref", 
    "TRet", ["TObject"]);
const object_default_clear_props = Module.cwrap("object_default_clear_props", 
    "TRet", ["TObject"]);
const object_default_t_get_prop_props_size = Module.cwrap("object_default_t_get_prop_props_size", 
    "number", ["number"]);
const timer_info_cast = Module.cwrap("timer_info_cast", 
    "TTimerInfo", ["TTimerInfo"]);
const timer_info_t_get_prop_ctx = Module.cwrap("timer_info_t_get_prop_ctx", 
    "any", ["number"]);
const timer_info_t_get_prop_extra_ctx = Module.cwrap("timer_info_t_get_prop_extra_ctx", 
    "any", ["number"]);
const timer_info_t_get_prop_id = Module.cwrap("timer_info_t_get_prop_id", 
    "number", ["number"]);
const timer_info_t_get_prop_now = Module.cwrap("timer_info_t_get_prop_now", 
    "number", ["number"]);
const calibration_win_create = Module.cwrap("calibration_win_create", 
    "TWidget", ["TWidget","number","number","number","number"]);
const calibration_win_cast = Module.cwrap("calibration_win_cast", 
    "TWidget", ["TWidget"]);
const combo_box_create = Module.cwrap("combo_box_create", 
    "TWidget", ["TWidget","number","number","number","number"]);
const combo_box_cast = Module.cwrap("combo_box_cast", 
    "TWidget", ["TWidget"]);
const combo_box_set_open_window = Module.cwrap("combo_box_set_open_window", 
    "TRet", ["TWidget","string"]);
const combo_box_reset_options = Module.cwrap("combo_box_reset_options", 
    "TRet", ["TWidget"]);
const combo_box_count_options = Module.cwrap("combo_box_count_options", 
    "number", ["TWidget"]);
const combo_box_set_selected_index = Module.cwrap("combo_box_set_selected_index", 
    "TRet", ["TWidget","number"]);
const combo_box_set_localize_options = Module.cwrap("combo_box_set_localize_options", 
    "TRet", ["TWidget","boolean"]);
const combo_box_set_value = Module.cwrap("combo_box_set_value", 
    "TRet", ["TWidget","number"]);
const combo_box_set_item_height = Module.cwrap("combo_box_set_item_height", 
    "TRet", ["TWidget","number"]);
const combo_box_append_option = Module.cwrap("combo_box_append_option", 
    "TRet", ["TWidget","number","string"]);
const combo_box_remove_option = Module.cwrap("combo_box_remove_option", 
    "TRet", ["TWidget","number"]);
const combo_box_set_options = Module.cwrap("combo_box_set_options", 
    "TRet", ["TWidget","string"]);
const combo_box_get_value = Module.cwrap("combo_box_get_value", 
    "number", ["TWidget"]);
const combo_box_get_text = Module.cwrap("combo_box_get_text", 
    "string", ["TWidget"]);
const combo_box_t_get_prop_open_window = Module.cwrap("combo_box_t_get_prop_open_window", 
    "string", ["number"]);
const combo_box_t_get_prop_selected_index = Module.cwrap("combo_box_t_get_prop_selected_index", 
    "number", ["number"]);
const combo_box_t_get_prop_value = Module.cwrap("combo_box_t_get_prop_value", 
    "number", ["number"]);
const combo_box_t_get_prop_localize_options = Module.cwrap("combo_box_t_get_prop_localize_options", 
    "boolean", ["number"]);
const combo_box_t_get_prop_options = Module.cwrap("combo_box_t_get_prop_options", 
    "string", ["number"]);
const combo_box_t_get_prop_item_height = Module.cwrap("combo_box_t_get_prop_item_height", 
    "number", ["number"]);
const image_create = Module.cwrap("image_create", 
    "TWidget", ["TWidget","number","number","number","number"]);
const image_set_draw_type = Module.cwrap("image_set_draw_type", 
    "TRet", ["TWidget","TImageDrawType"]);
const image_cast = Module.cwrap("image_cast", 
    "TWidget", ["TWidget"]);
const image_t_get_prop_draw_type = Module.cwrap("image_t_get_prop_draw_type", 
    "TImageDrawType", ["number"]);
const overlay_create = Module.cwrap("overlay_create", 
    "TWidget", ["TWidget","number","number","number","number"]);
const overlay_set_click_through = Module.cwrap("overlay_set_click_through", 
    "TRet", ["TWidget","boolean"]);
const overlay_set_always_on_top = Module.cwrap("overlay_set_always_on_top", 
    "TRet", ["TWidget","boolean"]);
const overlay_cast = Module.cwrap("overlay_cast", 
    "TWidget", ["TWidget"]);
const overlay_t_get_prop_click_through = Module.cwrap("overlay_t_get_prop_click_through", 
    "boolean", ["number"]);
const overlay_t_get_prop_always_on_top = Module.cwrap("overlay_t_get_prop_always_on_top", 
    "boolean", ["number"]);
const popup_create = Module.cwrap("popup_create", 
    "TWidget", ["TWidget","number","number","number","number"]);
const popup_cast = Module.cwrap("popup_cast", 
    "TWidget", ["TWidget"]);
const popup_set_close_when_click = Module.cwrap("popup_set_close_when_click", 
    "TRet", ["TWidget","boolean"]);
const popup_set_close_when_click_outside = Module.cwrap("popup_set_close_when_click_outside", 
    "TRet", ["TWidget","boolean"]);
const popup_set_close_when_timeout = Module.cwrap("popup_set_close_when_timeout", 
    "TRet", ["TWidget","number"]);
const popup_t_get_prop_close_when_click = Module.cwrap("popup_t_get_prop_close_when_click", 
    "boolean", ["number"]);
const popup_t_get_prop_close_when_click_outside = Module.cwrap("popup_t_get_prop_close_when_click_outside", 
    "boolean", ["number"]);
const popup_t_get_prop_close_when_timeout = Module.cwrap("popup_t_get_prop_close_when_timeout", 
    "number", ["number"]);
const spin_box_create = Module.cwrap("spin_box_create", 
    "TWidget", ["TWidget","number","number","number","number"]);
const spin_box_cast = Module.cwrap("spin_box_cast", 
    "TWidget", ["TWidget"]);
const system_bar_create = Module.cwrap("system_bar_create", 
    "TWidget", ["TWidget","number","number","number","number"]);
const system_bar_cast = Module.cwrap("system_bar_cast", 
    "TWidget", ["TWidget"]);
const combo_box_ex_create = Module.cwrap("combo_box_ex_create", 
    "TWidget", ["TWidget","number","number","number","number"]);

/**
 * 事件分发器, 用于实现观察者模式。
 *
 */
export class TEmitter { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   this.nativeObj = nativeObj;
 }


  /**
   * 创建emitter对象。
   * 
   *
   * @returns 对象。
   */
 static create() : TEmitter  {
    return new TEmitter(emitter_create());
 }


  /**
   * 分发事件。如果当前分发的回调函数返回RET_REMOVE，该回调函数将被移出。
   *禁用状态下，本函数不做任何事情。
   * 
   * @param e 事件对象。
   *
   * @returns 如果当前分发的回调函数返回RET_STOP，dispatch中断分发，并返回RET_STOP，否则返回RET_OK。
   */
 dispatch(e : TEvent) : TRet  {
    return emitter_dispatch(this != null ? (this.nativeObj || this) : null, e != null ? (e.nativeObj || e) : null);
 }


  /**
   * 分发事件。
   *> 对emitter_dispatch的包装，分发一个简单的事件。
   *如果当前分发的回调函数返回RET_STOP，dispatch中断分发，并返回RET_STOP，否则返回RET_OK。
   * 
   * @param type 事件类型。
   *
   * @returns 
   */
 dispatchSimpleEvent(type : number) : TRet  {
    return emitter_dispatch_simple_event(this != null ? (this.nativeObj || this) : null, type);
 }


  /**
   * 注册指定事件的处理函数。
   * 
   * @param etype 事件类型。
   * @param handler 事件处理函数。
   * @param ctx 事件处理函数上下文。
   *
   * @returns 返回id，用于emitter_off。
   */
 on(etype : TEventType, handler : Function, ctx : any) : number  {
    return emitter_on(this != null ? (this.nativeObj || this) : null, etype, handler, ctx);
 }


  /**
   * 注销指定事件的处理函数。
   * 
   * @param id emitter_on返回的ID。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 off(id : number) : TRet  {
    return emitter_off(this != null ? (this.nativeObj || this) : null, id);
 }


  /**
   * 启用。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 enable() : TRet  {
    return emitter_enable(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 禁用。
   *
   *禁用后emitter_dispatch无效，但可以注册和注销。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 disable() : TRet  {
    return emitter_disable(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 销毁。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 destroy() : TRet  {
    return emitter_destroy(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 转换为emitter对象(供脚本语言使用)。
   *
   *主要给脚本语言使用。
   * 
   * @param emitter emitter对象。
   *
   * @returns 对象。
   */
 static cast(emitter : TEmitter) : TEmitter  {
    return new TEmitter(emitter_cast(emitter != null ? (emitter.nativeObj || emitter) : null));
 }

};
/**
 * 点。包括一个x坐标和一个y坐标。
 *
 */
export class TPoint { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   this.nativeObj = nativeObj;
 }

};
/**
 * 点(浮点数)。包括一个x坐标和一个y坐标。
 *
 */
export class TPointf { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   this.nativeObj = nativeObj;
 }

};
/**
 * 矩形。包括一个x坐标、y坐标、宽度和高度。
 *
 */
export class TRectf { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   this.nativeObj = nativeObj;
 }


  /**
   * x坐标。
   *
   */
 get x() : number {
   return rectf_t_get_prop_x(this.nativeObj);
 }


  /**
   * y坐标。
   *
   */
 get y() : number {
   return rectf_t_get_prop_y(this.nativeObj);
 }


  /**
   * 宽度。
   *
   */
 get w() : number {
   return rectf_t_get_prop_w(this.nativeObj);
 }


  /**
   * 高度。
   *
   */
 get h() : number {
   return rectf_t_get_prop_h(this.nativeObj);
 }

};
/**
 * 矩形。包括一个x坐标、y坐标、宽度和高度。
 *
 */
export class TRect { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   this.nativeObj = nativeObj;
 }


  /**
   * 创建rect对象。
   *
   *> 主要供脚本语言使用。
   * 
   * @param x x坐标。
   * @param y y坐标。
   * @param w 宽度。
   * @param h 高度。
   *
   * @returns rect对象。
   */
 static create(x : number, y : number, w : number, h : number) : TRect  {
    return new TRect(rect_create(x, y, w, h));
 }


  /**
   * 设置rect对象的xywh。
   *
   *> 主要供脚本语言使用。
   * 
   * @param x x坐标。
   * @param y y坐标。
   * @param w 宽度。
   * @param h 高度。
   *
   * @returns rect对象。
   */
 set(x : number, y : number, w : number, h : number) : TRect  {
    return new TRect(rect_set(this != null ? (this.nativeObj || this) : null, x, y, w, h));
 }


  /**
   * 转换为rect对象。
   *
   *> 供脚本语言使用。
   * 
   * @param rect rect对象。
   *
   * @returns rect对象。
   */
 static cast(rect : TRect) : TRect  {
    return new TRect(rect_cast(rect != null ? (rect.nativeObj || rect) : null));
 }


  /**
   * 销毁rect对象。
   *
   *> 主要供脚本语言使用。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 destroy() : TRet  {
    return rect_destroy(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * x坐标。
   *
   */
 get x() : number {
   return rect_t_get_prop_x(this.nativeObj);
 }


  /**
   * y坐标。
   *
   */
 get y() : number {
   return rect_t_get_prop_y(this.nativeObj);
 }


  /**
   * 宽度。
   *
   */
 get w() : number {
   return rect_t_get_prop_w(this.nativeObj);
 }


  /**
   * 高度。
   *
   */
 get h() : number {
   return rect_t_get_prop_h(this.nativeObj);
 }

};
/**
 * 位图。
 *
 */
export class TBitmap { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   this.nativeObj = nativeObj;
 }


  /**
   * 创建图片对象(一般供脚本语言中使用)。
   * 
   *
   * @returns 返回bitmap对象。
   */
 static create() : TBitmap  {
    return new TBitmap(bitmap_create());
 }


  /**
   * 创建图片对象。
   * 
   * @param w 宽度。
   * @param h 高度。
   * @param line_length line_length。
   * @param format 格式。
   *
   * @returns 返回bitmap对象。
   */
 static createEx(w : number, h : number, line_length : number, format : TBitmapFormat) : TBitmap  {
    return new TBitmap(bitmap_create_ex(w, h, line_length, format));
 }


  /**
   * 获取图片一个像素占用的字节数。
   * 
   *
   * @returns 返回一个像素占用的字节数。
   */
 getBpp() : number  {
    return bitmap_get_bpp(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 销毁图片(for script only)。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 destroy() : TRet  {
    return bitmap_destroy_with_self(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 获取位图格式对应的颜色位数。
   * 
   * @param format 位图格式。
   *
   * @returns 成功返回颜色位数，失败返回0。
   */
 static getBppOfFormat(format : TBitmapFormat) : number  {
    return bitmap_get_bpp_of_format(format);
 }


  /**
   * 宽度。
   *
   */
 get w() : number {
   return bitmap_t_get_prop_w(this.nativeObj);
 }


  /**
   * 高度。
   *
   */
 get h() : number {
   return bitmap_t_get_prop_h(this.nativeObj);
 }


  /**
   * 每一行实际占用的内存(也称为stride或pitch)，一般情况下为w*bpp。
   *
   */
 get lineLength() : number {
   return bitmap_t_get_prop_line_length(this.nativeObj);
 }


  /**
   * 标志。请参考{bitmap_flag_t}。
   *
   */
 get flags() : number {
   return bitmap_t_get_prop_flags(this.nativeObj);
 }


  /**
   * 格式。请参考{bitmap_format_t}。
   *
   */
 get format() : number {
   return bitmap_t_get_prop_format(this.nativeObj);
 }


  /**
   * 名称。
   *
   */
 get name() : string {
   return bitmap_t_get_prop_name(this.nativeObj);
 }

};
/**
 * 对象接口。
 *
 */
export class TObject extends TEmitter { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 引用计数减1。引用计数为0时，销毁对象。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 unref() : TRet  {
    return object_unref(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 引用计数加1。
   * 
   * @param obj object对象。
   *
   * @returns 返回object对象。
   */
 static ref(obj : TObject) : TObject  {
    return new TObject(object_ref(obj != null ? (obj.nativeObj || obj) : null));
 }


  /**
   * 获取对象的类型名称。
   * 
   *
   * @returns 返回对象的类型名称。
   */
 getType() : string  {
    return object_get_type(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 获取对象的描述信息。
   * 
   *
   * @returns 返回对象的描述信息。
   */
 getDesc() : string  {
    return object_get_desc(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 获取对象占用内存的大小。
   * 
   *
   * @returns 返回对象占用内存的大小。
   */
 getSize() : number  {
    return object_get_size(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 判断对象是否是集合。
   * 
   *
   * @returns 返回TRUE表示是集合，否则不是。
   */
 isCollection() : boolean  {
    return object_is_collection(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 设置对象的名称。
   * 
   * @param name 对象的名称。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setName(name : string) : TRet  {
    return object_set_name(this != null ? (this.nativeObj || this) : null, name);
 }


  /**
   * 比较两个对象。
   * 
   * @param other 比较的object对象。
   *
   * @returns 返回比较结果。
   */
 compare(other : TObject) : number  {
    return object_compare(this != null ? (this.nativeObj || this) : null, other != null ? (other.nativeObj || other) : null);
 }


  /**
   * 获取指定属性的值。
   * 
   * @param name 属性的名称。
   * @param v 返回属性的值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 getProp(name : string, v : TValue) : TRet  {
    return object_get_prop(this != null ? (this.nativeObj || this) : null, name, v != null ? (v.nativeObj || v) : null);
 }


  /**
   * 获取指定属性的字符串类型的值。
   * 
   * @param name 属性的名称。
   *
   * @returns 返回指定属性的字符串类型的值。
   */
 getPropStr(name : string) : string  {
    return object_get_prop_str(this != null ? (this.nativeObj || this) : null, name);
 }


  /**
   * 获取指定属性的指针类型的值。
   * 
   * @param name 属性的名称。
   *
   * @returns 返回指定属性的指针类型的值。
   */
 getPropPointer(name : string) : any  {
    return object_get_prop_pointer(this != null ? (this.nativeObj || this) : null, name);
 }


  /**
   * 获取指定属性的object类型的值。
   * 
   * @param name 属性的名称。
   *
   * @returns 返回指定属性的object类型的值。
   */
 getPropObject(name : string) : TObject  {
    return new TObject(object_get_prop_object(this != null ? (this.nativeObj || this) : null, name));
 }


  /**
   * 获取指定属性的整数类型的值。
   * 
   * @param name 属性的名称。
   * @param defval 缺省值。
   *
   * @returns 返回指定属性的整数类型的值。
   */
 getPropInt(name : string, defval : number) : number  {
    return object_get_prop_int(this != null ? (this.nativeObj || this) : null, name, defval);
 }


  /**
   * 获取指定属性的bool类型的值。
   * 
   * @param name 属性的名称。
   * @param defval 缺省值。
   *
   * @returns 返回指定属性的bool类型的值。
   */
 getPropBool(name : string, defval : boolean) : boolean  {
    return object_get_prop_bool(this != null ? (this.nativeObj || this) : null, name, defval);
 }


  /**
   * 获取指定属性的浮点数类型的值。
   * 
   * @param name 属性的名称。
   * @param defval 缺省值。
   *
   * @returns 返回指定属性的浮点数类型的值。
   */
 getPropFloat(name : string, defval : number) : number  {
    return object_get_prop_float(this != null ? (this.nativeObj || this) : null, name, defval);
 }


  /**
   * 获取指定属性的浮点数类型的值。
   * 
   * @param name 属性的名称。
   * @param defval 缺省值。
   *
   * @returns 返回指定属性的浮点数类型的值。
   */
 getPropDouble(name : string, defval : number) : number  {
    return object_get_prop_double(this != null ? (this.nativeObj || this) : null, name, defval);
 }


  /**
   * 删除指定属性。
   * 
   * @param name 属性的名称。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 removeProp(name : string) : TRet  {
    return object_remove_prop(this != null ? (this.nativeObj || this) : null, name);
 }


  /**
   * 设置指定属性的值。
   * 
   * @param name 属性的名称。
   * @param value 属性的值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setProp(name : string, value : TValue) : TRet  {
    return object_set_prop(this != null ? (this.nativeObj || this) : null, name, value != null ? (value.nativeObj || value) : null);
 }


  /**
   * 设置指定属性的字符串类型的值。
   * 
   * @param name 属性的名称。
   * @param value 属性的值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setPropStr(name : string, value : string) : TRet  {
    return object_set_prop_str(this != null ? (this.nativeObj || this) : null, name, value);
 }


  /**
   * 设置指定属性的object类型的值。
   * 
   * @param name 属性的名称。
   * @param value 属性的值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setPropObject(name : string, value : TObject) : TRet  {
    return object_set_prop_object(this != null ? (this.nativeObj || this) : null, name, value != null ? (value.nativeObj || value) : null);
 }


  /**
   * 设置指定属性的整数类型的值。
   * 
   * @param name 属性的名称。
   * @param value 属性的值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setPropInt(name : string, value : any) : TRet  {
    return object_set_prop_int(this != null ? (this.nativeObj || this) : null, name, value);
 }


  /**
   * 设置指定属性的bool类型的值。
   * 
   * @param name 属性的名称。
   * @param value 属性的值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setPropBool(name : string, value : any) : TRet  {
    return object_set_prop_bool(this != null ? (this.nativeObj || this) : null, name, value);
 }


  /**
   * 设置指定属性的浮点数类型的值。
   * 
   * @param name 属性的名称。
   * @param value 属性的值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setPropFloat(name : string, value : any) : TRet  {
    return object_set_prop_float(this != null ? (this.nativeObj || this) : null, name, value);
 }


  /**
   * 设置指定属性的浮点数类型的值。
   * 
   * @param name 属性的名称。
   * @param value 属性的值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setPropDouble(name : string, value : any) : TRet  {
    return object_set_prop_double(this != null ? (this.nativeObj || this) : null, name, value);
 }


  /**
   * 拷贝指定的属性。
   * 
   * @param src 源对象。
   * @param name 属性的名称。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 copyProp(src : TObject, name : string) : TRet  {
    return object_copy_prop(this != null ? (this.nativeObj || this) : null, src != null ? (src.nativeObj || src) : null, name);
 }


  /**
   * 检查是否存在指定的属性。
   * 
   * @param name 属性的名称。
   *
   * @returns 返回TRUE表示存在，否则表示不存在。
   */
 hasProp(name : string) : boolean  {
    return object_has_prop(this != null ? (this.nativeObj || this) : null, name);
 }


  /**
   * 计算一个表达式，表达式中引用的变量从prop中获取。
   * 
   * @param expr 表达式。
   * @param v 返回计算结果。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 eval(expr : string, v : TValue) : TRet  {
    return object_eval(this != null ? (this.nativeObj || this) : null, expr, v != null ? (v.nativeObj || v) : null);
 }


  /**
   * 检查是否可以执行指定的命令。
   * 
   * @param name 命令的名称。
   * @param args 命令的参数。
   *
   * @returns 返回TRUE表示可以执行，否则表示不可以执行。
   */
 canExec(name : string, args : string) : boolean  {
    return object_can_exec(this != null ? (this.nativeObj || this) : null, name, args);
 }


  /**
   * 执行指定的命令。
   * 
   * @param name 命令的名称。
   * @param args 命令的参数。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 execute(name : string, args : string) : TRet  {
    return object_exec(this != null ? (this.nativeObj || this) : null, name, args);
 }


  /**
   * 触发EVT_PROPS_CHANGED事件。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 notifyChanged() : TRet  {
    return object_notify_changed(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 检查是否存在指定的属性。
   * 
   * @param path 属性的path，各级之间用.分隔。
   *
   * @returns 返回TRUE表示存在，否则表示不存在。
   */
 hasPropByPath(path : string) : boolean  {
    return object_has_prop_by_path(this != null ? (this.nativeObj || this) : null, path);
 }


  /**
   * 获取指定属性的字符串类型的值。
   * 
   * @param path 属性的path。
   *
   * @returns 返回指定属性的字符串类型的值。
   */
 getPropStrByPath(path : string) : string  {
    return object_get_prop_str_by_path(this != null ? (this.nativeObj || this) : null, path);
 }


  /**
   * 获取指定属性的指针类型的值。
   * 
   * @param path 属性的path。
   *
   * @returns 返回指定属性的指针类型的值。
   */
 getPropPointerByPath(path : string) : any  {
    return object_get_prop_pointer_by_path(this != null ? (this.nativeObj || this) : null, path);
 }


  /**
   * 获取指定属性的object类型的值。
   * 
   * @param path 属性的path。
   *
   * @returns 返回指定属性的object类型的值。
   */
 getPropObjectByPath(path : string) : TObject  {
    return new TObject(object_get_prop_object_by_path(this != null ? (this.nativeObj || this) : null, path));
 }


  /**
   * 获取指定属性的整数类型的值。
   * 
   * @param path 属性的path。
   * @param defval 缺省值。
   *
   * @returns 返回指定属性的整数类型的值。
   */
 getPropIntByPath(path : string, defval : number) : number  {
    return object_get_prop_int_by_path(this != null ? (this.nativeObj || this) : null, path, defval);
 }


  /**
   * 获取指定属性的bool类型的值。
   * 
   * @param path 属性的path。
   * @param defval 缺省值。
   *
   * @returns 返回指定属性的bool类型的值。
   */
 getPropBoolByPath(path : string, defval : boolean) : boolean  {
    return object_get_prop_bool_by_path(this != null ? (this.nativeObj || this) : null, path, defval);
 }


  /**
   * 获取指定属性的浮点数类型的值。
   *
   *e
   * 
   * @param path 属性的path。
   * @param defval 缺省值。
   *
   * @returns 返回指定属性的浮点数类型的值。
   */
 getPropFloatByPath(path : string, defval : number) : number  {
    return object_get_prop_float_by_path(this != null ? (this.nativeObj || this) : null, path, defval);
 }


  /**
   * 设置指定属性的值。
   * 
   * @param path 属性的path。
   * @param value 属性的值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setPropByPath(path : string, value : TValue) : TRet  {
    return object_set_prop_by_path(this != null ? (this.nativeObj || this) : null, path, value != null ? (value.nativeObj || value) : null);
 }


  /**
   * 设置指定属性的字符串类型的值。
   * 
   * @param path 属性的path。
   * @param value 属性的值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setPropStrByPath(path : string, value : string) : TRet  {
    return object_set_prop_str_by_path(this != null ? (this.nativeObj || this) : null, path, value);
 }


  /**
   * 设置指定属性的object类型的值。
   * 
   * @param path 属性的path。
   * @param value 属性的值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setPropObjectByPath(path : string, value : TObject) : TRet  {
    return object_set_prop_object_by_path(this != null ? (this.nativeObj || this) : null, path, value != null ? (value.nativeObj || value) : null);
 }


  /**
   * 设置指定属性的整数类型的值。
   * 
   * @param path 属性的path。
   * @param value 属性的值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setPropIntByPath(path : string, value : any) : TRet  {
    return object_set_prop_int_by_path(this != null ? (this.nativeObj || this) : null, path, value);
 }


  /**
   * 设置指定属性的bool类型的值。
   * 
   * @param path 属性的path。
   * @param value 属性的值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setPropBoolByPath(path : string, value : any) : TRet  {
    return object_set_prop_bool_by_path(this != null ? (this.nativeObj || this) : null, path, value);
 }


  /**
   * 设置指定属性的浮点数类型的值。
   * 
   * @param path 属性的path。
   * @param value 属性的值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setPropFloatByPath(path : string, value : any) : TRet  {
    return object_set_prop_float_by_path(this != null ? (this.nativeObj || this) : null, path, value);
 }


  /**
   * 检查是否可以执行指定的命令。
   * 
   * @param path 命令的path。
   * @param args 命令的参数。
   *
   * @returns 返回TRUE表示可以执行，否则表示不可以执行。
   */
 canExecByPath(path : string, args : string) : boolean  {
    return object_can_exec_by_path(this != null ? (this.nativeObj || this) : null, path, args);
 }


  /**
   * 执行指定的命令。
   * 
   * @param path 命令的path。
   * @param args 命令的参数。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 executeByPath(path : string, args : string) : TRet  {
    return object_exec_by_path(this != null ? (this.nativeObj || this) : null, path, args);
 }


  /**
   * 获取指定属性的int8类型的值。
   * 
   * @param name 属性的名称。
   * @param defval 缺省值。
   *
   * @returns 返回指定属性的int8类型的值。
   */
 getPropInt8(name : string, defval : number) : number  {
    return object_get_prop_int8(this != null ? (this.nativeObj || this) : null, name, defval);
 }


  /**
   * 设置指定属性的int8类型的值。
   * 
   * @param name 属性的名称。
   * @param value 属性的值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setPropInt8(name : string, value : any) : TRet  {
    return object_set_prop_int8(this != null ? (this.nativeObj || this) : null, name, value);
 }


  /**
   * 获取指定属性的uint8类型的值。
   * 
   * @param name 属性的名称。
   * @param defval 缺省值。
   *
   * @returns 返回指定属性的uint8类型的值。
   */
 getPropUint8(name : string, defval : number) : number  {
    return object_get_prop_uint8(this != null ? (this.nativeObj || this) : null, name, defval);
 }


  /**
   * 设置指定属性的uint8类型的值。
   * 
   * @param name 属性的名称。
   * @param value 属性的值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setPropUint8(name : string, value : any) : TRet  {
    return object_set_prop_uint8(this != null ? (this.nativeObj || this) : null, name, value);
 }


  /**
   * 获取指定属性的int16类型的值。
   * 
   * @param name 属性的名称。
   * @param defval 缺省值。
   *
   * @returns 返回指定属性的int16类型的值。
   */
 getPropInt16(name : string, defval : number) : number  {
    return object_get_prop_int16(this != null ? (this.nativeObj || this) : null, name, defval);
 }


  /**
   * 设置指定属性的int16类型的值。
   * 
   * @param name 属性的名称。
   * @param value 属性的值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setPropInt16(name : string, value : any) : TRet  {
    return object_set_prop_int16(this != null ? (this.nativeObj || this) : null, name, value);
 }


  /**
   * 获取指定属性的uint16类型的值。
   * 
   * @param name 属性的名称。
   * @param defval 缺省值。
   *
   * @returns 返回指定属性的uint16类型的值。
   */
 getPropUint16(name : string, defval : number) : number  {
    return object_get_prop_uint16(this != null ? (this.nativeObj || this) : null, name, defval);
 }


  /**
   * 设置指定属性的uint16类型的值。
   * 
   * @param name 属性的名称。
   * @param value 属性的值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setPropUint16(name : string, value : any) : TRet  {
    return object_set_prop_uint16(this != null ? (this.nativeObj || this) : null, name, value);
 }


  /**
   * 获取指定属性的int32类型的值。
   * 
   * @param name 属性的名称。
   * @param defval 缺省值。
   *
   * @returns 返回指定属性的int32类型的值。
   */
 getPropInt32(name : string, defval : number) : number  {
    return object_get_prop_int32(this != null ? (this.nativeObj || this) : null, name, defval);
 }


  /**
   * 设置指定属性的int32类型的值。
   * 
   * @param name 属性的名称。
   * @param value 属性的值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setPropInt32(name : string, value : any) : TRet  {
    return object_set_prop_int32(this != null ? (this.nativeObj || this) : null, name, value);
 }


  /**
   * 获取指定属性的uint32类型的值。
   * 
   * @param name 属性的名称。
   * @param defval 缺省值。
   *
   * @returns 返回指定属性的uint32类型的值。
   */
 getPropUint32(name : string, defval : number) : number  {
    return object_get_prop_uint32(this != null ? (this.nativeObj || this) : null, name, defval);
 }


  /**
   * 设置指定属性的uint32类型的值。
   * 
   * @param name 属性的名称。
   * @param value 属性的值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setPropUint32(name : string, value : any) : TRet  {
    return object_set_prop_uint32(this != null ? (this.nativeObj || this) : null, name, value);
 }


  /**
   * 获取指定属性的int64类型的值。
   * 
   * @param name 属性的名称。
   * @param defval 缺省值。
   *
   * @returns 返回指定属性的int64类型的值。
   */
 getPropInt64(name : string, defval : number) : number  {
    return object_get_prop_int64(this != null ? (this.nativeObj || this) : null, name, defval);
 }


  /**
   * 设置指定属性的int64类型的值。
   * 
   * @param name 属性的名称。
   * @param value 属性的值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setPropInt64(name : string, value : any) : TRet  {
    return object_set_prop_int64(this != null ? (this.nativeObj || this) : null, name, value);
 }


  /**
   * 获取指定属性的uint64类型的值。
   * 
   * @param name 属性的名称。
   * @param defval 缺省值。
   *
   * @returns 返回指定属性的uint64类型的值。
   */
 getPropUint64(name : string, defval : number) : number  {
    return object_get_prop_uint64(this != null ? (this.nativeObj || this) : null, name, defval);
 }


  /**
   * 设置指定属性的uint64类型的值。
   * 
   * @param name 属性的名称。
   * @param value 属性的值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setPropUint64(name : string, value : any) : TRet  {
    return object_set_prop_uint64(this != null ? (this.nativeObj || this) : null, name, value);
 }


  /**
   * 引用计数。
   *
   */
 get refCount() : number {
   return object_t_get_prop_ref_count(this.nativeObj);
 }


  /**
   * 对象的名称。
   *
   */
 get name() : string {
   return object_t_get_prop_name(this.nativeObj);
 }

 set name(v : string) {
   this.setName(v);
 }

};
/**
 * 一个通用数据类型，用来存放整数、浮点数、字符串和其它对象。
 *
 *在C/C++中，一般不需动态创建对象，直接声明并初始化即可。如：
 *
 *
 *> 在脚本语言中，需要动态创建对象。
 *
 */
export class TValue { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   this.nativeObj = nativeObj;
 }


  /**
   * 设置类型为bool的值。
   * 
   * @param value 待设置的值。
   *
   * @returns value对象本身。
   */
 setBool(value : any) : TValue  {
    return new TValue(value_set_bool(this != null ? (this.nativeObj || this) : null, value));
 }


  /**
   * 获取类型为bool的值。
   * 
   *
   * @returns 值。
   */
 bool() : boolean  {
    return value_bool(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 设置类型为int8的值。
   * 
   * @param value 待设置的值。
   *
   * @returns value对象本身。
   */
 setInt8(value : any) : TValue  {
    return new TValue(value_set_int8(this != null ? (this.nativeObj || this) : null, value));
 }


  /**
   * 获取类型为int8的值。
   * 
   *
   * @returns 值。
   */
 int8() : number  {
    return value_int8(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 设置类型为uint8的值。
   * 
   * @param value 待设置的值。
   *
   * @returns value对象本身。
   */
 setUint8(value : any) : TValue  {
    return new TValue(value_set_uint8(this != null ? (this.nativeObj || this) : null, value));
 }


  /**
   * 获取类型为uint8的值。
   * 
   *
   * @returns 值。
   */
 uint8() : number  {
    return value_uint8(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 设置类型为int16的值。
   * 
   * @param value 待设置的值。
   *
   * @returns value对象本身。
   */
 setInt16(value : any) : TValue  {
    return new TValue(value_set_int16(this != null ? (this.nativeObj || this) : null, value));
 }


  /**
   * 获取类型为int16的值。
   * 
   *
   * @returns 值。
   */
 int16() : number  {
    return value_int16(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 设置类型为uint16的值。
   * 
   * @param value 待设置的值。
   *
   * @returns value对象本身。
   */
 setUint16(value : any) : TValue  {
    return new TValue(value_set_uint16(this != null ? (this.nativeObj || this) : null, value));
 }


  /**
   * 获取类型为uint16的值。
   * 
   *
   * @returns 值。
   */
 uint16() : number  {
    return value_uint16(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 设置类型为int32的值。
   * 
   * @param value 待设置的值。
   *
   * @returns value对象本身。
   */
 setInt32(value : any) : TValue  {
    return new TValue(value_set_int32(this != null ? (this.nativeObj || this) : null, value));
 }


  /**
   * 获取类型为int32的值。
   * 
   *
   * @returns 值。
   */
 int32() : number  {
    return value_int32(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 设置类型为uint32的值。
   * 
   * @param value 待设置的值。
   *
   * @returns value对象本身。
   */
 setUint32(value : any) : TValue  {
    return new TValue(value_set_uint32(this != null ? (this.nativeObj || this) : null, value));
 }


  /**
   * 设置类型为int64的值。
   * 
   * @param value 待设置的值。
   *
   * @returns value对象本身。
   */
 setInt64(value : any) : TValue  {
    return new TValue(value_set_int64(this != null ? (this.nativeObj || this) : null, value));
 }


  /**
   * 获取类型为int64的值。
   * 
   *
   * @returns 值。
   */
 int64() : number  {
    return value_int64(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 设置类型为uint64的值。
   * 
   * @param value 待设置的值。
   *
   * @returns value对象本身。
   */
 setUint64(value : any) : TValue  {
    return new TValue(value_set_uint64(this != null ? (this.nativeObj || this) : null, value));
 }


  /**
   * 获取类型为uint64的值。
   * 
   *
   * @returns 值。
   */
 uint64() : number  {
    return value_uint64(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 设置类型为float\_t的值。
   * 
   * @param value 待设置的值。
   *
   * @returns value对象本身。
   */
 setFloat(value : any) : TValue  {
    return new TValue(value_set_float(this != null ? (this.nativeObj || this) : null, value));
 }


  /**
   * 获取类型为float的值。
   * 
   *
   * @returns 值。
   */
 float32() : number  {
    return value_float32(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 设置类型为double的值。
   * 
   * @param value 待设置的值。
   *
   * @returns value对象本身。
   */
 setFloat64(value : any) : TValue  {
    return new TValue(value_set_double(this != null ? (this.nativeObj || this) : null, value));
 }


  /**
   * 获取类型为double的值。
   * 
   *
   * @returns 值。
   */
 float64() : number  {
    return value_double(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 设置类型为字符串的值(并拷贝字符串)。
   * 
   * @param value 待设置的值。
   *
   * @returns value对象本身。
   */
 setStr(value : string) : TValue  {
    return new TValue(value_dup_str(this != null ? (this.nativeObj || this) : null, value));
 }


  /**
   * 获取类型为字符串的值。
   * 
   *
   * @returns 值。
   */
 str() : string  {
    return value_str(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 获取类型为字符串的值。
   * 
   * @param buff 用于格式转换的缓冲区。
   * @param size 缓冲区大小。
   *
   * @returns 值。
   */
 strEx(buff : string, size : number) : string  {
    return value_str_ex(this != null ? (this.nativeObj || this) : null, buff, size);
 }


  /**
   * 判断value是否为空值。
   * 
   *
   * @returns 为空值返回TRUE，否则返回FALSE。
   */
 isNull() : boolean  {
    return value_is_null(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 设置类型为int的值。
   * 
   * @param value 待设置的值。
   *
   * @returns value对象本身。
   */
 setInt(value : any) : TValue  {
    return new TValue(value_set_int(this != null ? (this.nativeObj || this) : null, value));
 }


  /**
   * 设置类型为object的值。
   * 
   * @param value 待设置的值。
   *
   * @returns value对象本身。
   */
 setObject(value : TObject) : TValue  {
    return new TValue(value_set_object(this != null ? (this.nativeObj || this) : null, value != null ? (value.nativeObj || value) : null));
 }


  /**
   * 转换为object的值。
   * 
   *
   * @returns 值。
   */
 object() : TObject  {
    return new TObject(value_object(this != null ? (this.nativeObj || this) : null));
 }


  /**
   * 设置类型为token的值。
   * 
   * @param value 待设置的值。
   *
   * @returns value对象本身。
   */
 setToken(value : any) : TValue  {
    return new TValue(value_set_token(this != null ? (this.nativeObj || this) : null, value));
 }


  /**
   * 获取token的值。
   * 
   *
   * @returns 值。
   */
 token() : number  {
    return value_token(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 创建value对象。
   * 
   *
   * @returns 对象。
   */
 static create() : TValue  {
    return new TValue(value_create());
 }


  /**
   * 销毁value对象。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 destroy() : TRet  {
    return value_destroy(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 重置value对象。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 reset() : TRet  {
    return value_reset(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 转换为value对象。
   *
   *> 供脚本语言使用
   * 
   * @param value value对象。
   *
   * @returns 对象。
   */
 static cast(value : TValue) : TValue  {
    return new TValue(value_cast(value != null ? (value.nativeObj || value) : null));
 }

};
/**
 * TK全局对象。
 *
 */
export class TGlobal { 

  /**
   * 初始化TK。
   * 
   * @param w LCD宽度。
   * @param h LCD高度。
   * @param app_type 应用程序的类型。
   * @param app_name 应用程序的名称(必须为常量字符串)。
   * @param app_root 应用程序的根目录，用于定位资源文件(必须为常量字符串)。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 static init(w : number, h : number, app_type : TAppType, app_name : string, app_root : string) : TRet  {
    return tk_init(w, h, app_type, app_name, app_root);
 }


  /**
   * 进入TK事件主循环。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 static run() : TRet  {
    return tk_run();
 }


  /**
   * 退出TK事件主循环。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 static quit() : TRet  {
    return tk_quit();
 }


  /**
   * 获取全局指针的X坐标。
   * 
   *
   * @returns 返回全局指针的X坐标。
   */
 static getPointerX() : number  {
    return tk_get_pointer_x();
 }


  /**
   * 获取全局指针的Y坐标。
   * 
   *
   * @returns 返回全局指针的X坐标。
   */
 static getPointerY() : number  {
    return tk_get_pointer_y();
 }


  /**
   * 获取全局指针是否按下。
   * 
   *
   * @returns 返回全局指针是否按下。
   */
 static isPointerPressed() : boolean  {
    return tk_is_pointer_pressed();
 }

};
/**
 * bidi 类型常量定义。
 *
 */
export enum TBidiType {

  /**
   * 自动检查。
   *
   */
 AUTO = BIDI_TYPE_AUTO(),

  /**
   * Left-To-Right letter。
   *
   */
 LTR = BIDI_TYPE_LTR(),

  /**
   * Right-To-Left letter。
   *
   */
 RTL = BIDI_TYPE_RTL(),

  /**
   * Left-To-Right letter Override。
   *
   */
 LRO = BIDI_TYPE_LRO(),

  /**
   * Right-To-Left letter Override。
   *
   */
 RLO = BIDI_TYPE_RLO(),

  /**
   * Weak Left To Right paragraph。
   *
   */
 WLTR = BIDI_TYPE_WLTR(),

  /**
   * Weak Right To Left paragraph。
   *
   */
 WRTL = BIDI_TYPE_WRTL(),
};


/**
 * 图片绘制方法常量定义。
 *
 */
export enum TImageDrawType {

  /**
   * 缺省显示。将图片按原大小显示在目标矩形的左上角。
   *
   */
 DEFAULT = IMAGE_DRAW_DEFAULT(),

  /**
   * 居中显示。将图片按原大小显示在目标矩形的中央。
   *
   */
 CENTER = IMAGE_DRAW_CENTER(),

  /**
   * 图标显示。同居中显示，但会根据屏幕密度调整大小。
   *
   */
 ICON = IMAGE_DRAW_ICON(),

  /**
   * 缩放显示。将图片缩放至目标矩形的大小(不保证宽高成比例)。
   *
   */
 SCALE = IMAGE_DRAW_SCALE(),

  /**
   * 自动缩放显示。将图片缩放至目标矩形的宽度或高度(选取最小的比例)，并居中显示。
   *
   */
 SCALE_AUTO = IMAGE_DRAW_SCALE_AUTO(),

  /**
   * 如果图片比目标矩形大，自动缩小显示，否则居中显示。
   *
   */
 SCALE_DOWN = IMAGE_DRAW_SCALE_DOWN(),

  /**
   * 宽度缩放显示。 将图片缩放至目标矩形的宽度，高度按此比例进行缩放，超出不部分不显示。
   *
   */
 SCALE_W = IMAGE_DRAW_SCALE_W(),

  /**
   * 高度缩放显示。将图片缩放至目标矩形的高度，宽度按此比例进行缩放，超出不部分不显示。
   *
   */
 SCALE_H = IMAGE_DRAW_SCALE_H(),

  /**
   * 平铺显示。
   *
   */
 REPEAT = IMAGE_DRAW_REPEAT(),

  /**
   * 水平方向平铺显示，垂直方向缩放。
   *
   */
 REPEAT_X = IMAGE_DRAW_REPEAT_X(),

  /**
   * 垂直方向平铺显示，水平方向缩放。
   *
   */
 REPEAT_Y = IMAGE_DRAW_REPEAT_Y(),

  /**
   * 垂直方向平铺显示，水平方向缩放(从底部到顶部)。
   *
   */
 REPEAT_Y_INVERSE = IMAGE_DRAW_REPEAT_Y_INVERSE(),

  /**
   * 9宫格显示。
   *将图片分成等大小的9块，4个角按原大小显示在目标矩形的4个角，左右上下和中间5块分别缩放显示在对应的目标区域。
   *
   */
 PATCH9 = IMAGE_DRAW_PATCH9(),

  /**
   * 水平方向3宫格显示，垂直方向居中显示。
   *将图片在水平方向上分成等大小的3块，左右两块按原大小显示在目标矩形的左右，中间一块缩放显示在目标区域中间剩余部分。
   *
   */
 PATCH3_X = IMAGE_DRAW_PATCH3_X(),

  /**
   * 垂直方向3宫格显示，水平方向居中显示。
   *将图片在垂直方向上分成等大小的3块，上下两块按原大小显示在目标矩形的上下，中间一块缩放显示在目标区域中间剩余部分。
   *
   */
 PATCH3_Y = IMAGE_DRAW_PATCH3_Y(),

  /**
   * 水平方向3宫格显示，垂直方向缩放显示。
   *将图片在水平方向上分成等大小的3块，左右两块按原大小显示在目标矩形的左右，中间一块缩放显示在目标区域中间剩余部分。
   *
   */
 PATCH3_X_SCALE_Y = IMAGE_DRAW_PATCH3_X_SCALE_Y(),

  /**
   * 垂直方向3宫格显示，水平方向缩放显示。
   *将图片在垂直方向上分成等大小的3块，上下两块按原大小显示在目标矩形的上下，中间一块缩放显示在目标区域中间剩余部分。
   *
   */
 PATCH3_Y_SCALE_X = IMAGE_DRAW_PATCH3_Y_SCALE_X(),

  /**
   * 平铺9宫格显示。
   *将图片分成4个角和5块平铺块，4个角按原大小显示在目标矩形的4个角，其余5块会平铺对应的目标区域。
   *切割方法为（如下图）：
   *如果图片宽度为奇数，则中间一块为一列数据，如果图片宽度为偶数，则中间一块为二列数据，其他数据分为左右块
   *如果图片高度为奇数，则中间一块为一行数据，如果图片高度为偶数，则中间一块为二行数据，其他数据分为上下块
   *中间一块数据根据上面两条规则组成4中情况，分别是一列一行数据，一列两行数据，两列一行数据和两行两列数据
   *
   */
 REPEAT9 = IMAGE_DRAW_REPEAT9(),

  /**
   * 水平方向3宫格显示，垂直方向居中显示。
   *将图片在水平方向上分成左右相等两块和中间一块，如果图片宽度为奇数，则中间一块为一列数据，如果图片宽度为偶数，则中间一块为二列数据，其他数据分为左右块。
   *左右两块按原大小显示在目标矩形的左右，中间一列像素点平铺显示在目标区域中间剩余部分。
   *
   */
 REPEAT3_X = IMAGE_DRAW_REPEAT3_X(),

  /**
   * 垂直方向3宫格显示，水平方向居中显示。
   *将图片在垂直方向上分成上下相等两块和中间一块，如果图片高度为奇数，则中间一块为一行数据，如果图片高度为偶数，则中间一块为二行数据，其他数据分为上下块
   *上下两块按原大小显示在目标矩形的上下，中间一块平铺显示在目标区域中间剩余部分。
   *
   */
 REPEAT3_Y = IMAGE_DRAW_REPEAT3_Y(),
};


/**
 * 离线画布 canvas。
 *
 */
export class TCanvasOffline { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   this.nativeObj = nativeObj;
 }

};
/**
 * 提供基本的绘图功能和状态管理。
 *
 */
export class TCanvas { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   this.nativeObj = nativeObj;
 }


  /**
   * 获取画布的宽度。
   * 
   *
   * @returns 返回画布的宽度。
   */
 getWidth() : number  {
    return canvas_get_width(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 获取画布的高度。
   * 
   *
   * @returns 返回画布的高度。
   */
 getHeight() : number  {
    return canvas_get_height(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 获取裁剪区。
   * 
   * @param r rect对象。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 getClipRect(r : TRect) : TRet  {
    return canvas_get_clip_rect(this != null ? (this.nativeObj || this) : null, r != null ? (r.nativeObj || r) : null);
 }


  /**
   * 设置裁剪区。
   * 
   * @param r rect对象。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setClipRect(r : TRect) : TRet  {
    return canvas_set_clip_rect(this != null ? (this.nativeObj || this) : null, r != null ? (r.nativeObj || r) : null);
 }


  /**
   * 设置裁剪区。
   * 
   * @param r rect对象。
   * @param translate 是否将裁剪区的位置加上canvas当前的偏移。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setClipRectEx(r : TRect, translate : boolean) : TRet  {
    return canvas_set_clip_rect_ex(this != null ? (this.nativeObj || this) : null, r != null ? (r.nativeObj || r) : null, translate);
 }


  /**
   * 设置填充颜色。
   *
   *> 供脚本语言使用。
   * 
   * @param color 颜色。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setFillColor(color : string) : TRet  {
    return canvas_set_fill_color_str(this != null ? (this.nativeObj || this) : null, color);
 }


  /**
   * 设置文本颜色。
   *
   *> 供脚本语言使用。
   * 
   * @param color 颜色。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setTextColor(color : string) : TRet  {
    return canvas_set_text_color_str(this != null ? (this.nativeObj || this) : null, color);
 }


  /**
   * 设置线条颜色。
   *
   *> 供脚本语言使用。
   * 
   * @param color 颜色。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setStrokeColor(color : string) : TRet  {
    return canvas_set_stroke_color_str(this != null ? (this.nativeObj || this) : null, color);
 }


  /**
   * 设置全局alpha值。
   * 
   * @param alpha alpha值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setGlobalAlpha(alpha : number) : TRet  {
    return canvas_set_global_alpha(this != null ? (this.nativeObj || this) : null, alpha);
 }


  /**
   * 平移原点坐标。
   * 
   * @param dx x偏移。
   * @param dy y偏移。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 translate(dx : number, dy : number) : TRet  {
    return canvas_translate(this != null ? (this.nativeObj || this) : null, dx, dy);
 }


  /**
   * 反向平移原点坐标。
   * 
   * @param dx x偏移。
   * @param dy y偏移。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 untranslate(dx : number, dy : number) : TRet  {
    return canvas_untranslate(this != null ? (this.nativeObj || this) : null, dx, dy);
 }


  /**
   * 画垂直线。
   * 
   * @param x x坐标。
   * @param y y坐标。
   * @param h 高度。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 drawVline(x : number, y : number, h : number) : TRet  {
    return canvas_draw_vline(this != null ? (this.nativeObj || this) : null, x, y, h);
 }


  /**
   * 画水平线。
   * 
   * @param x x坐标。
   * @param y y坐标。
   * @param w 宽度。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 drawHline(x : number, y : number, w : number) : TRet  {
    return canvas_draw_hline(this != null ? (this.nativeObj || this) : null, x, y, w);
 }


  /**
   * 绘制矩形。
   * 
   * @param x x坐标。
   * @param y y坐标。
   * @param w 宽度。
   * @param h 高度。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 fillRect(x : number, y : number, w : number, h : number) : TRet  {
    return canvas_fill_rect(this != null ? (this.nativeObj || this) : null, x, y, w, h);
 }


  /**
   * 用填充颜色填充指定矩形。
   *
   *> 如果lcd的颜色格式带alpha通道，连同alpha的值一起修改。
   * 
   * @param x x坐标。
   * @param y y坐标。
   * @param w 宽度。
   * @param h 高度。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 clearRect(x : number, y : number, w : number, h : number) : TRet  {
    return canvas_clear_rect(this != null ? (this.nativeObj || this) : null, x, y, w, h);
 }


  /**
   * 绘制矩形。
   * 
   * @param x x坐标。
   * @param y y坐标。
   * @param w 宽度。
   * @param h 高度。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 strokeRect(x : number, y : number, w : number, h : number) : TRet  {
    return canvas_stroke_rect(this != null ? (this.nativeObj || this) : null, x, y, w, h);
 }


  /**
   * 设置字体。
   * 
   * @param name 字体名称。
   * @param size 字体大小。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setFont(name : string, size : number) : TRet  {
    return canvas_set_font(this != null ? (this.nativeObj || this) : null, name, size);
 }


  /**
   * 计算文本所占的宽度。
   *
   *> 供脚本语言使用。
   * 
   * @param str 字符串。
   *
   * @returns 返回文本所占的宽度。
   */
 measureText(str : string) : number  {
    return canvas_measure_utf8(this != null ? (this.nativeObj || this) : null, str);
 }


  /**
   * 绘制文本。
   *
   *> 供脚本语言使用。
   * 
   * @param str 字符串。
   * @param x x坐标。
   * @param y y坐标。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 drawText(str : string, x : number, y : number) : TRet  {
    return canvas_draw_utf8(this != null ? (this.nativeObj || this) : null, str, x, y);
 }


  /**
   * 绘制文本。
   *
   *> 供脚本语言使用。
   * 
   * @param str 字符串。
   * @param r 矩形区域。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 drawTextInRect(str : string, r : TRect) : TRet  {
    return canvas_draw_utf8_in_rect(this != null ? (this.nativeObj || this) : null, str, r != null ? (r.nativeObj || r) : null);
 }


  /**
   * 绘制图标。
   * 
   * @param img 图片对象。
   * @param cx 中心点x坐标。
   * @param cy 中心点y坐标。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 drawIcon(img : TBitmap, cx : number, cy : number) : TRet  {
    return canvas_draw_icon(this != null ? (this.nativeObj || this) : null, img != null ? (img.nativeObj || img) : null, cx, cy);
 }


  /**
   * 绘制图片。
   * 
   * @param img 图片对象。
   * @param src 源区域。
   * @param dst 目的区域。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 drawImage(img : TBitmap, src : TRect, dst : TRect) : TRet  {
    return canvas_draw_image(this != null ? (this.nativeObj || this) : null, img != null ? (img.nativeObj || img) : null, src != null ? (src.nativeObj || src) : null, dst != null ? (dst.nativeObj || dst) : null);
 }


  /**
   * 绘制图片。
   * 
   * @param img 图片对象。
   * @param draw_type 绘制类型。
   * @param dst 目的区域。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 drawImageEx(img : TBitmap, draw_type : TImageDrawType, dst : TRect) : TRet  {
    return canvas_draw_image_ex(this != null ? (this.nativeObj || this) : null, img != null ? (img.nativeObj || img) : null, draw_type, dst != null ? (dst.nativeObj || dst) : null);
 }


  /**
   * 绘制图片。
   * 
   * @param img 图片对象。
   * @param draw_type 绘制类型。
   * @param src 源区域。
   * @param dst 目的区域。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 drawImageEx2(img : TBitmap, draw_type : TImageDrawType, src : TRect, dst : TRect) : TRet  {
    return canvas_draw_image_ex2(this != null ? (this.nativeObj || this) : null, img != null ? (img.nativeObj || img) : null, draw_type, src != null ? (src.nativeObj || src) : null, dst != null ? (dst.nativeObj || dst) : null);
 }


  /**
   * 获取vgcanvas对象。
   * 
   *
   * @returns 返回vgcanvas对象。
   */
 getVgcanvas() : TVgcanvas  {
    return new TVgcanvas(canvas_get_vgcanvas(this != null ? (this.nativeObj || this) : null));
 }


  /**
   * 转换为canvas对象(供脚本语言使用)。
   * 
   * @param c canvas对象。
   *
   * @returns canvas对象。
   */
 static cast(c : TCanvas) : TCanvas  {
    return new TCanvas(canvas_cast(c != null ? (c.nativeObj || c) : null));
 }


  /**
   * 释放相关资源。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 reset() : TRet  {
    return canvas_reset(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * x坐标偏移。
   *
   */
 get ox() : number {
   return canvas_t_get_prop_ox(this.nativeObj);
 }


  /**
   * y坐标偏移。
   *
   */
 get oy() : number {
   return canvas_t_get_prop_oy(this.nativeObj);
 }


  /**
   * 当前字体名称。
   *
   */
 get fontName() : string {
   return canvas_t_get_prop_font_name(this.nativeObj);
 }


  /**
   * 当前字体大小。
   *
   */
 get fontSize() : number {
   return canvas_t_get_prop_font_size(this.nativeObj);
 }


  /**
   * 当前全局alpha。
   *
   */
 get globalAlpha() : number {
   return canvas_t_get_prop_global_alpha(this.nativeObj);
 }

 set globalAlpha(v : number) {
   this.setGlobalAlpha(v);
 }

};
/**
 * 剪切板数据类型定义。
 *
 */
export enum TClipBoardDataType {

  /**
   * 无数据。
   *
   */
 NONE = CLIP_BOARD_DATA_TYPE_NONE(),

  /**
   * UTF8文本。
   *
   */
 TEXT = CLIP_BOARD_DATA_TYPE_TEXT(),
};


/**
 * 剪切板接口。
 *
 */
export class TClipBoard { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   this.nativeObj = nativeObj;
 }


  /**
   * 设置文本(UTF8)数据到剪切板。
   * 
   * @param text 文本。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 static setText(text : string) : TRet  {
    return clip_board_set_text(text);
 }


  /**
   * 从剪切板中获取文本(UTF8)数据。
   * 
   *
   * @returns 返回文本数据。
   */
 static getText() : string  {
    return clip_board_get_text();
 }

};
/**
 * 对话框退出码。
 *
 *> 一般用作dialog_quit函数的参数。
 *
 */
export enum TDialogQuitCode {

  /**
   * 对话框被强行关闭或不关心关闭原因。
   *
   */
 NONE = DIALOG_QUIT_NONE(),

  /**
   * 点击“OK”按钮关闭。
   *
   */
 OK = DIALOG_QUIT_OK(),

  /**
   * 点击“YES”按钮关闭。
   *
   */
 YES = DIALOG_QUIT_YES(),

  /**
   * 点击“CANCEL”按钮关闭。
   *
   */
 CANCEL = DIALOG_QUIT_CANCEL(),

  /**
   * 点击“NO”按钮关闭。
   *
   */
 NO = DIALOG_QUIT_NO(),

  /**
   * 点击其它按钮关闭。
   *
   */
 OTHER = DIALOG_QUIT_OTHER(),
};


/**
 * 类型常量定义。
 *
 */
export enum TEventType {

  /**
   * 指针按下事件名(pointer_event_t)。
   *
   */
 POINTER_DOWN = EVT_POINTER_DOWN(),

  /**
   * 指针按下事件名，在子控件处理之前触发(pointer_event_t)。
   *
   */
 POINTER_DOWN_BEFORE_CHILDREN = EVT_POINTER_DOWN_BEFORE_CHILDREN(),

  /**
   * 指针移动事件名(pointer_event_t)。
   *
   */
 POINTER_MOVE = EVT_POINTER_MOVE(),

  /**
   * 指针移动事件名，在子控件处理之前触发(pointer_event_t)。
   *
   */
 POINTER_MOVE_BEFORE_CHILDREN = EVT_POINTER_MOVE_BEFORE_CHILDREN(),

  /**
   * 指针抬起事件名(pointer_event_t)。
   *
   */
 POINTER_UP = EVT_POINTER_UP(),

  /**
   * 指针抬起事件名，在子控件处理之前触发(pointer_event_t)。
   *
   */
 POINTER_UP_BEFORE_CHILDREN = EVT_POINTER_UP_BEFORE_CHILDREN(),

  /**
   * 滚轮事件名(wheel_event_t)。
   *
   */
 WHEEL = EVT_WHEEL(),

  /**
   * 鼠标滚轮事件名，在子控件处理之前触发(wheel_event_t)。
   *
   */
 WHEEL_BEFORE_CHILDREN = EVT_WHEEL_BEFORE_CHILDREN(),

  /**
   * 取消前一个指针按下事件名(pointer_event_t)。
   *
   */
 POINTER_DOWN_ABORT = EVT_POINTER_DOWN_ABORT(),

  /**
   * 右键/长按弹出上下文菜单的事件名(pointer_event_t)。
   *
   */
 CONTEXT_MENU = EVT_CONTEXT_MENU(),

  /**
   * 指针进入事件名(pointer_event_t)。
   *
   */
 POINTER_ENTER = EVT_POINTER_ENTER(),

  /**
   * 指针离开事件名(pointer_event_t)。
   *
   */
 POINTER_LEAVE = EVT_POINTER_LEAVE(),

  /**
   * 长按事件名(pointer_event_t)。
   *
   */
 LONG_PRESS = EVT_LONG_PRESS(),

  /**
   * 点击事件名(pointer_event_t)。
   *
   */
 CLICK = EVT_CLICK(),

  /**
   * 得到焦点事件名(event_t)。
   *
   */
 FOCUS = EVT_FOCUS(),

  /**
   * 失去焦点事件名(event_t)。
   *
   */
 BLUR = EVT_BLUR(),

  /**
   * 键按下事件名(key_event_t)。
   *
   */
 KEY_DOWN = EVT_KEY_DOWN(),

  /**
   * 键长按事件名(key_event_t)。
   *
   */
 KEY_LONG_PRESS = EVT_KEY_LONG_PRESS(),

  /**
   * 键按下事件名，在子控件处理之前触发(key_event_t)。
   *
   */
 KEY_DOWN_BEFORE_CHILDREN = EVT_KEY_DOWN_BEFORE_CHILDREN(),

  /**
   * 按键repeat事件名(key_event_t)。
   *
   */
 KEY_REPEAT = EVT_KEY_REPEAT(),

  /**
   * 键抬起事件名(key_event_t)。
   *
   */
 KEY_UP = EVT_KEY_UP(),

  /**
   * 键抬起事件名，在子控件处理之前触发(key_event_t)。
   *
   */
 KEY_UP_BEFORE_CHILDREN = EVT_KEY_UP_BEFORE_CHILDREN(),

  /**
   * 即将移动Widget的事件名(event_t)。
   *
   */
 WILL_MOVE = EVT_WILL_MOVE(),

  /**
   * 移动Widget的事件名(event_t)。
   *
   */
 MOVE = EVT_MOVE(),

  /**
   * 即将调整Widget大小的事件名(event_t)。
   *
   */
 WILL_RESIZE = EVT_WILL_RESIZE(),

  /**
   * 调整Widget大小的事件名(event_t)。
   *
   */
 RESIZE = EVT_RESIZE(),

  /**
   * 即将调整Widget大小/位置的事件名(event_t)。
   *
   */
 WILL_MOVE_RESIZE = EVT_WILL_MOVE_RESIZE(),

  /**
   * 调整Widget大小/位置的事件名(event_t)。
   *
   */
 MOVE_RESIZE = EVT_MOVE_RESIZE(),

  /**
   * 控件的值即将改变的事件名(value_change_event_t)。
   *
   */
 VALUE_WILL_CHANGE = EVT_VALUE_WILL_CHANGE(),

  /**
   * 控件的值改变的事件名(value_change_event_t)。
   *
   */
 VALUE_CHANGED = EVT_VALUE_CHANGED(),

  /**
   * 控件的值持续改变(如编辑器正在编辑)的事件名(value_change_event_t)。
   *
   */
 VALUE_CHANGING = EVT_VALUE_CHANGING(),

  /**
   * 绘制的事件名(paint_event_t)。
   *
   */
 PAINT = EVT_PAINT(),

  /**
   * 即将绘制的事件名(paint_event_t)。
   *
   */
 BEFORE_PAINT = EVT_BEFORE_PAINT(),

  /**
   * 绘制完成的事件名(paint_event_t)。
   *
   */
 AFTER_PAINT = EVT_AFTER_PAINT(),

  /**
   * 绘制完成(canvas状态已经恢复)的事件名(paint_event_t)。
   *
   */
 PAINT_DONE = EVT_PAINT_DONE(),

  /**
   * locale改变的事件(event_t)。
   *
   */
 LOCALE_CHANGED = EVT_LOCALE_CHANGED(),

  /**
   * 控件动画开始事件(event_t)。
   *
   */
 ANIM_START = EVT_ANIM_START(),

  /**
   * 控件动画被主动停止的事件(event_t)。
   *
   */
 ANIM_STOP = EVT_ANIM_STOP(),

  /**
   * 控件动画被暂停的事件(event_t)。
   *
   */
 ANIM_PAUSE = EVT_ANIM_PAUSE(),

  /**
   * 控件动画yoyo/repeat时，完成一次的事件(event_t)。
   *
   */
 ANIM_ONCE = EVT_ANIM_ONCE(),

  /**
   * 控件动画完成事件(event_t)。
   *
   */
 ANIM_END = EVT_ANIM_END(),

  /**
   * 窗口加载完成事件(event_t)。
   *
   */
 WINDOW_LOAD = EVT_WINDOW_LOAD(),

  /**
   * 控件加载完成事件(event_t)。
   *
   */
 WIDGET_LOAD = EVT_WIDGET_LOAD(),

  /**
   * 窗口即将打开事件(event_t)。
   *如果有窗口动画，在窗口动画开始前触发。如果没有窗口动画，在窗口被加载后的下一次循环中触发。
   *
   */
 WINDOW_WILL_OPEN = EVT_WINDOW_WILL_OPEN(),

  /**
   * 窗口打开事件(event_t)。
   *如果有窗口动画，在窗口动画完成时触发。如果没有窗口动画，在窗口被加载后的下一次循环中触发。
   *
   */
 WINDOW_OPEN = EVT_WINDOW_OPEN(),

  /**
   * 窗口被切换到后台事件(event_t)。
   *打开新窗口时，当前窗口被切换到后台时，对当前窗口触发本事件。
   *
   */
 WINDOW_TO_BACKGROUND = EVT_WINDOW_TO_BACKGROUND(),

  /**
   * 窗口被切换到前台事件(event_t)。
   *关闭当前窗口时，前一个窗口被切换到前台时，对前一个窗口触发本事件。
   *
   */
 WINDOW_TO_FOREGROUND = EVT_WINDOW_TO_FOREGROUND(),

  /**
   * 窗口关闭事件。
   *
   */
 WINDOW_CLOSE = EVT_WINDOW_CLOSE(),

  /**
   * 请求关闭窗口的事件(event_t)。
   *
   */
 REQUEST_CLOSE_WINDOW = EVT_REQUEST_CLOSE_WINDOW(),

  /**
   * 顶层窗口改变的事件(window_event_t)。
   *
   */
 TOP_WINDOW_CHANGED = EVT_TOP_WINDOW_CHANGED(),

  /**
   * 输入法启动(event_t)。
   *
   */
 IM_START = EVT_IM_START(),

  /**
   * 输入法停止(event_t)。
   *
   */
 IM_STOP = EVT_IM_STOP(),

  /**
   * 输入法提交输入的文本事件(im_commit_event_t)。
   *
   */
 IM_COMMIT = EVT_IM_COMMIT(),

  /**
   * 清除编辑器内容(event_t)。
   *
   */
 IM_CLEAR = EVT_IM_CLEAR(),

  /**
   * 取消编辑，恢复之前的内容(event_t)。
   *
   */
 IM_CANCEL = EVT_IM_CANCEL(),

  /**
   * 进入预编辑状态(event_t)。
   *
   */
 IM_PREEDIT = EVT_IM_PREEDIT(),

  /**
   * 确认预编辑内容，退出预编辑状态(event_t)。
   *
   */
 IM_PREEDIT_CONFIRM = EVT_IM_PREEDIT_CONFIRM(),

  /**
   * 删除预编辑内容，退出预编辑状态event_t)。
   *
   */
 IM_PREEDIT_ABORT = EVT_IM_PREEDIT_ABORT(),

  /**
   * 输入法请求显示候选字事件(im_candidates_event_t)。
   *
   */
 IM_SHOW_CANDIDATES = EVT_IM_SHOW_CANDIDATES(),

  /**
   * 输入法请求显示预候选字事件(im_candidates_event_t)。
   *
   */
 IM_SHOW_PRE_CANDIDATES = EVT_IM_SHOW_PRE_CANDIDATES(),

  /**
   * 输入法语言改变事件(event_t)。
   *
   */
 IM_LANG_CHANGED = EVT_IM_LANG_CHANGED(),

  /**
   * 软键盘Action点击事件(event_t)。
   *
   */
 IM_ACTION = EVT_IM_ACTION(),

  /**
   * 请求更新软键盘上的Action按钮的信息(im_action_button_info_event_t)。
   *
   */
 IM_ACTION_INFO = EVT_IM_ACTION_INFO(),

  /**
   * 开始拖动(event_t)。
   *
   */
 DRAG_START = EVT_DRAG_START(),

  /**
   * 拖动(event_t)。
   *
   */
 DRAG = EVT_DRAG(),

  /**
   * 结束拖动(event_t)。
   *
   */
 DRAG_END = EVT_DRAG_END(),

  /**
   * Reset(event_t)。
   *
   */
 RESET = EVT_RESET(),

  /**
   * 在指定的时间内(WITH_SCREEN_SAVER_TIME)，没有用户输入事件，由窗口管理器触发。
   *
   */
 SCREEN_SAVER = EVT_SCREEN_SAVER(),

  /**
   * 内存不足(event_t)。
   *
   */
 LOW_MEMORY = EVT_LOW_MEMORY(),

  /**
   * 内存耗尽(event_t)。
   *
   */
 OUT_OF_MEMORY = EVT_OUT_OF_MEMORY(),

  /**
   * 屏幕即将旋转(event_t)。
   *
   */
 ORIENTATION_WILL_CHANGED = EVT_ORIENTATION_WILL_CHANGED(),

  /**
   * 屏幕旋转(event_t)。
   *
   */
 ORIENTATION_CHANGED = EVT_ORIENTATION_CHANGED(),

  /**
   * 控件创建事件(event_t)。
   *
   */
 WIDGET_CREATED = EVT_WIDGET_CREATED(),

  /**
   * 请求退出应用程序事件。
   *点击原生窗口关闭按钮时，通过窗口管理器触发，注册该事件并返回RET_STOP，可以阻止窗口关闭。
   *
   */
 REQUEST_QUIT_APP = EVT_REQUEST_QUIT_APP(),

  /**
   * 主题变化(event_t)。
   *
   */
 THEME_CHANGED = EVT_THEME_CHANGED(),

  /**
   * 控件加载新的子控件(event_t)。
   *
   */
 WIDGET_ADD_CHILD = EVT_WIDGET_ADD_CHILD(),

  /**
   * 控件移除子控件(event_t)。
   *
   */
 WIDGET_REMOVE_CHILD = EVT_WIDGET_REMOVE_CHILD(),

  /**
   * scroll view开始滚动(event_t)。
   *
   */
 SCROLL_START = EVT_SCROLL_START(),

  /**
   * scroll view滚动(event_t)。
   *
   */
 SCROLL = EVT_SCROLL(),

  /**
   * scroll view结束滚动(event_t)。
   *
   */
 SCROLL_END = EVT_SCROLL_END(),

  /**
   * 多点触摸手势(multi_gesture_event_t)。
   *
   */
 MULTI_GESTURE = EVT_MULTI_GESTURE(),

  /**
   * 页面改变了(event_t)。
   *
   */
 PAGE_CHANGED = EVT_PAGE_CHANGED(),

  /**
   * 资源管理加载某个资源(assets_event_t)。
   *
   */
 ASSET_MANAGER_LOAD_ASSET = EVT_ASSET_MANAGER_LOAD_ASSET(),

  /**
   * 资源管理卸载某个资源(assets_event_t)。
   *
   */
 ASSET_MANAGER_UNLOAD_ASSET = EVT_ASSET_MANAGER_UNLOAD_ASSET(),

  /**
   * 资源管理移除同种资源缓存(assets_event_t)。
   *
   */
 ASSET_MANAGER_CLEAR_CACHE = EVT_ASSET_MANAGER_CLEAR_CACHE(),

  /**
   * 定时器(event_t)。
   *
   */
 TIMER = EVT_TIMER(),

  /**
   * event queue其它请求编号起始值。
   *
   */
 REQ_START = EVT_REQ_START(),

  /**
   * 用户定义事件起始值。
   *
   */
 USER_START = EVT_USER_START(),

  /**
   * 无效事件名称。
   *
   */
 NONE = EVT_NONE(),

  /**
   * 对象的属性即将改变的事件名(prop_change_event_t)。
   *
   */
 PROP_WILL_CHANGE = EVT_PROP_WILL_CHANGE(),

  /**
   * 对象的属性改变的事件名(prop_change_event_t)。
   *
   */
 PROP_CHANGED = EVT_PROP_CHANGED(),

  /**
   * 对象即将执行命令(cmd_exec_event_t)。
   *
   */
 CMD_WILL_EXEC = EVT_CMD_WILL_EXEC(),

  /**
   * 对象完成执行命令(cmd_exec_event_t)。
   *
   */
 CMD_EXECED = EVT_CMD_EXECED(),

  /**
   * 对象命令是否能执行指定的命令(cmd_exec_event_t)。
   *
   */
 CMD_CAN_EXEC = EVT_CMD_CAN_EXEC(),

  /**
   * 即将增加和删除集合中的项目(event_t)。
   *
   */
 ITEMS_WILL_CHANGE = EVT_ITEMS_WILL_CHANGE(),

  /**
   * 完成增加和删除集合中的项目(event_t)。
   *
   */
 ITEMS_CHANGED = EVT_ITEMS_CHANGED(),

  /**
   * 对象的属性改变的事件名(props_event_t)。
   *
   */
 PROPS_CHANGED = EVT_PROPS_CHANGED(),

  /**
   * 进度状态(progress_event_t)。
   *
   */
 PROGRESS = EVT_PROGRESS(),

  /**
   * 完成(done_event_t)。
   *
   */
 DONE = EVT_DONE(),

  /**
   * 错误(error_event_t)。
   *
   */
 ERROR = EVT_ERROR(),

  /**
   * 对象销毁事件名(event_t)。
   *
   */
 DESTROY = EVT_DESTROY(),
};


/**
 * 事件基类。
 *
 */
export class TEvent { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   this.nativeObj = nativeObj;
 }


  /**
   * 将事件名转换成事件的值。
   * 
   * @param name 事件名。
   *
   * @returns 返回事件的值。
   */
 static fromName(name : string) : number  {
    return event_from_name(name);
 }


  /**
   * 转换为event对象。
   *
   *> 供脚本语言使用
   * 
   * @param event event对象。
   *
   * @returns event对象。
   */
 static cast(event : TEvent) : TEvent  {
    return new TEvent(event_cast(event != null ? (event.nativeObj || event) : null));
 }


  /**
   * 获取event类型。
   * 
   *
   * @returns 返回event类型。
   */
 getType() : number  {
    return event_get_type(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 创建event对象。
   *
   *主要给脚本语言使用。
   * 
   * @param type 事件类型。
   *
   * @returns 返回事件对象。
   */
 static create(type : number) : TEvent  {
    return new TEvent(event_create(type));
 }


  /**
   * 销毁事件对象。
   *
   *主要给脚本语言使用。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 destroy() : TRet  {
    return event_destroy(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 类型。
   *
   */
 get type() : number {
   return event_t_get_prop_type(this.nativeObj);
 }


  /**
   * 结构体的大小。
   *
   */
 get size() : number {
   return event_t_get_prop_size(this.nativeObj);
 }


  /**
   * 事件发生的时间。
   *
   */
 get time() : number {
   return event_t_get_prop_time(this.nativeObj);
 }


  /**
   * 事件发生的目标对象。
   *
   */
 get target() : any {
   return event_t_get_prop_target(this.nativeObj);
 }

};
/**
 * 字体管理器，负责字体的加载和缓存管理。
 *(如果使用nanovg，字体由nanovg内部管理)
 *
 */
export class TFontManager { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   this.nativeObj = nativeObj;
 }


  /**
   * 卸载指定的字体。
   * 
   * @param name 字体名，为NULL时使用缺省字体。
   * @param size 字体的大小(矢量字体指定为0即可)。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 unloadFont(name : string, size : number) : TRet  {
    return font_manager_unload_font(this != null ? (this.nativeObj || this) : null, name, size);
 }


  /**
   * 清除最久没有被使用的缓冲字模。
   * 
   * @param cache_size 每种字体保留缓存字模的个数。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 shrinkCache(cache_size : number) : TRet  {
    return font_manager_shrink_cache(this != null ? (this.nativeObj || this) : null, cache_size);
 }


  /**
   * 卸载全部字体。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 unloadAll() : TRet  {
    return font_manager_unload_all(this != null ? (this.nativeObj || this) : null);
 }

};
/**
 * 字模格式常量定义。
 *
 */
export enum TGlyphFormat {

  /**
   * 每个像素占用1个字节(缺省)。
   *
   */
 ALPHA = GLYPH_FMT_ALPHA(),

  /**
   * 每个像素占用1个比特。
   *
   */
 MONO = GLYPH_FMT_MONO(),

  /**
   * 每个像素占用4个字节。
   *
   */
 RGBA = GLYPH_FMT_RGBA(),
};


/**
 * idle可以看作是duration为0的定时器。
 *
 *> idle可以用来实现一些异步处理。
 *
 *示例：
 *
 *
 *> 在非GUI线程请用idle\_queue。
 *
 */
export class TIdle { 

  /**
   * 增加一个idle。
   * 
   * @param on_idle idle回调函数，回调函数返回RET_REPEAT，则下次继续执行，否则自动移出。
   * @param ctx idle回调函数的上下文。
   *
   * @returns 返回idle的ID，0表示失败。
   */
 static add(on_idle : Function, ctx : any) : number  {
    return idle_add(on_idle, ctx);
 }


  /**
   * 删除指定的idle。
   * 
   * @param idle_id idleID。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 static remove(idle_id : number) : TRet  {
    return idle_remove(idle_id);
 }


  /**
   * 根据上下文删除所有对应的idle。
   * 
   * @param ctx idle回调函数的上下文
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 static removeAllByCtx(ctx : any) : TRet  {
    return idle_remove_all_by_ctx(ctx);
 }

};
/**
 * 图片管理器。负责加载，解码和缓存图片。
 *
 */
export class TImageManager { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   this.nativeObj = nativeObj;
 }


  /**
   * 获取缺省的图片管理器。
   * 
   *
   * @returns 返回图片管理器对象。
   */
 static instance() : TImageManager  {
    return new TImageManager(image_manager());
 }


  /**
   * 获取指定的图片。
   *先从缓存查找，如果没找到，再加载并缓存。
   * 
   * @param name 图片名称。
   * @param image 用于返回图片。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 getBitmap(name : string, image : TBitmap) : TRet  {
    return image_manager_get_bitmap(this != null ? (this.nativeObj || this) : null, name, image != null ? (image.nativeObj || image) : null);
 }


  /**
   * 预加载指定的图片。
   * 
   * @param name 图片名称。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 preload(name : string) : TRet  {
    return image_manager_preload(this != null ? (this.nativeObj || this) : null, name);
 }

};
/**
 * 输入类型常量定义。
 *
 */
export enum TInputType {

  /**
   * 文本。字符串属性值：text
   *
   */
 TEXT = INPUT_TEXT(),

  /**
   * 整数。字符串属性值：int
   *
   */
 INT = INPUT_INT(),

  /**
   * 非负整数。字符串属性值：uint
   *
   */
 UINT = INPUT_UINT(),

  /**
   * 16进制整数。字符串属性值：hex
   *
   */
 HEX = INPUT_HEX(),

  /**
   * 浮点数。字符串属性值：float
   *
   */
 FLOAT = INPUT_FLOAT(),

  /**
   * 非负浮点数。字符串属性值：ufloat
   *
   */
 UFLOAT = INPUT_UFLOAT(),

  /**
   * 邮件地址。字符串属性值：email
   *
   */
 EMAIL = INPUT_EMAIL(),

  /**
   * 密码。字符串属性值：password
   *
   */
 PASSWORD = INPUT_PASSWORD(),

  /**
   * 电话号码。字符串属性值：phone
   *
   */
 PHONE = INPUT_PHONE(),

  /**
   * IP Addr V4(如：192.168.1.1)。字符串属性值：ipv4
   *
   */
 IPV4 = INPUT_IPV4(),

  /**
   * 日期(如：2020/02/20)。字符串属性值：date
   *
   */
 DATE = INPUT_DATE(),

  /**
   * 时间(时分，如：12:00)。字符串属性值：time
   *
   */
 TIME = INPUT_TIME(),

  /**
   * 时间(时分秒，如：12:00:00)。字符串属性值：time_full
   *
   */
 TIME_FULL = INPUT_TIME_FULL(),

  /**
   * 使用自定义的软键盘(如计算器等应用不希望弹出系统软键盘)。字符串属性值：custom
   *
   */
 CUSTOM = INPUT_CUSTOM(),

  /**
   * 使用自定义的密码软键盘。字符串属性值：custom_password
   *
   */
 CUSTOM_PASSWORD = INPUT_CUSTOM_PASSWORD(),

  /**
   * 纯英文文本。字符串属性值：ascii
   *
   */
 ASCII = INPUT_ASCII(),
};


/**
 * 输入法接口。
 *
 *常见的实现方式有以下几种：
 *
 ** 空实现。用于不需要输入法的嵌入式平台。
 *
 ** 缺省实现。用于需要输入法的嵌入式平台。
 *
 ** 基于SDL实现的平台原生输入法。用于桌面系统和手机系统。
 *
 *
 *
 *> 输入类型请参考：[input\_type](input_type_t.md)
 *
 */
export class TInputMethod { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   this.nativeObj = nativeObj;
 }


  /**
   * 提交输入文本。
   * 
   * @param text 文本。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 commitText(text : string) : TRet  {
    return input_method_commit_text(this != null ? (this.nativeObj || this) : null, text);
 }


  /**
   * 设置语言。
   *
   *> 有时在同一种语言环境下，也需要输入多种文字，典型的情况是同时输入中文和英文。
   *> 比如T9输入法，可以同时支持中文和英文输入，配合软键盘随时切换输入的语言。
   *> 数字、小写字母、大写字母和符合也可以视为输入的语言。
   *> 主要用于提示输入法引擎选择适当的输入方法。
   * 
   * @param lang 语言。格式为语言+国家/地区码。如：zh_cn和en_us等。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setLang(lang : string) : TRet  {
    return input_method_set_lang(this != null ? (this.nativeObj || this) : null, lang);
 }


  /**
   * 获取语言。
   * 
   *
   * @returns 返回语言。
   */
 getLang() : string  {
    return input_method_get_lang(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 提交按键。
   * 
   * @param key 键值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 dispatchKey(key : number) : TRet  {
    return input_method_dispatch_key(this != null ? (this.nativeObj || this) : null, key);
 }


  /**
   * 提交按键。
   * 
   * @param key 键值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 dispatchKeys(key : string) : TRet  {
    return input_method_dispatch_keys(this != null ? (this.nativeObj || this) : null, key);
 }


  /**
   * 分发进入预编辑状态的事件。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 dispatchPreedit() : TRet  {
    return input_method_dispatch_preedit(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 分发确认预编辑状态的事件(提交预编辑内容，退出预编辑状态)。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 dispatchPreeditConfirm() : TRet  {
    return input_method_dispatch_preedit_confirm(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 分发取消预编辑状态的事件(提交预编辑内容，退出预编辑状态)。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 dispatchPreeditAbort() : TRet  {
    return input_method_dispatch_preedit_abort(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 获取全局输入法对象。
   * 
   *
   * @returns 成功返回输入法对象，失败返回NULL。
   */
 static instance() : TInputMethod  {
    return new TInputMethod(input_method());
 }

};
/**
 * key code。
 *
 */
export enum TKeyCode {

  /**
   * TK_KEY_RETURN
   *
   */
 KEY_RETURN = TK_KEY_RETURN(),

  /**
   * TK_KEY_ESCAPE
   *
   */
 KEY_ESCAPE = TK_KEY_ESCAPE(),

  /**
   * TK_KEY_BACKSPACE
   *
   */
 KEY_BACKSPACE = TK_KEY_BACKSPACE(),

  /**
   * TK_KEY_TAB
   *
   */
 KEY_TAB = TK_KEY_TAB(),

  /**
   * TK_KEY_SPACE
   *
   */
 KEY_SPACE = TK_KEY_SPACE(),

  /**
   * TK_KEY_EXCLAIM
   *
   */
 KEY_EXCLAIM = TK_KEY_EXCLAIM(),

  /**
   * TK_KEY_QUOTEDBL
   *
   */
 KEY_QUOTEDBL = TK_KEY_QUOTEDBL(),

  /**
   * TK_KEY_HASH
   *
   */
 KEY_HASH = TK_KEY_HASH(),

  /**
   * TK_KEY_PERCENT
   *
   */
 KEY_PERCENT = TK_KEY_PERCENT(),

  /**
   * TK_KEY_DOLLAR
   *
   */
 KEY_DOLLAR = TK_KEY_DOLLAR(),

  /**
   * TK_KEY_AMPERSAND
   *
   */
 KEY_AMPERSAND = TK_KEY_AMPERSAND(),

  /**
   * TK_KEY_QUOTE
   *
   */
 KEY_QUOTE = TK_KEY_QUOTE(),

  /**
   * TK_KEY_LEFTPAREN
   *
   */
 KEY_LEFTPAREN = TK_KEY_LEFTPAREN(),

  /**
   * TK_KEY_RIGHTPAREN
   *
   */
 KEY_RIGHTPAREN = TK_KEY_RIGHTPAREN(),

  /**
   * TK_KEY_ASTERISK
   *
   */
 KEY_ASTERISK = TK_KEY_ASTERISK(),

  /**
   * TK_KEY_PLUS
   *
   */
 KEY_PLUS = TK_KEY_PLUS(),

  /**
   * TK_KEY_COMMA
   *
   */
 KEY_COMMA = TK_KEY_COMMA(),

  /**
   * TK_KEY_MINUS
   *
   */
 KEY_MINUS = TK_KEY_MINUS(),

  /**
   * TK_KEY_PERIOD
   *
   */
 KEY_PERIOD = TK_KEY_PERIOD(),

  /**
   * TK_KEY_SLASH
   *
   */
 KEY_SLASH = TK_KEY_SLASH(),

  /**
   * TK_KEY_0
   *
   */
 KEY_0 = TK_KEY_0(),

  /**
   * TK_KEY_1
   *
   */
 KEY_1 = TK_KEY_1(),

  /**
   * TK_KEY_2
   *
   */
 KEY_2 = TK_KEY_2(),

  /**
   * TK_KEY_3
   *
   */
 KEY_3 = TK_KEY_3(),

  /**
   * TK_KEY_4
   *
   */
 KEY_4 = TK_KEY_4(),

  /**
   * TK_KEY_5
   *
   */
 KEY_5 = TK_KEY_5(),

  /**
   * TK_KEY_6
   *
   */
 KEY_6 = TK_KEY_6(),

  /**
   * TK_KEY_7
   *
   */
 KEY_7 = TK_KEY_7(),

  /**
   * TK_KEY_8
   *
   */
 KEY_8 = TK_KEY_8(),

  /**
   * TK_KEY_9
   *
   */
 KEY_9 = TK_KEY_9(),

  /**
   * TK_KEY_COLON
   *
   */
 KEY_COLON = TK_KEY_COLON(),

  /**
   * TK_KEY_SEMICOLON
   *
   */
 KEY_SEMICOLON = TK_KEY_SEMICOLON(),

  /**
   * TK_KEY_LESS
   *
   */
 KEY_LESS = TK_KEY_LESS(),

  /**
   * TK_KEY_EQUAL
   *
   */
 KEY_EQUAL = TK_KEY_EQUAL(),

  /**
   * TK_KEY_GREATER
   *
   */
 KEY_GREATER = TK_KEY_GREATER(),

  /**
   * TK_KEY_QUESTION
   *
   */
 KEY_QUESTION = TK_KEY_QUESTION(),

  /**
   * TK_KEY_AT
   *
   */
 KEY_AT = TK_KEY_AT(),

  /**
   * TK_KEY_LEFTBRACKET
   *
   */
 KEY_LEFTBRACKET = TK_KEY_LEFTBRACKET(),

  /**
   * TK_KEY_BACKSLASH
   *
   */
 KEY_BACKSLASH = TK_KEY_BACKSLASH(),

  /**
   * TK_KEY_RIGHTBRACKET
   *
   */
 KEY_RIGHTBRACKET = TK_KEY_RIGHTBRACKET(),

  /**
   * TK_KEY_CARET
   *
   */
 KEY_CARET = TK_KEY_CARET(),

  /**
   * TK_KEY_UNDERSCORE
   *
   */
 KEY_UNDERSCORE = TK_KEY_UNDERSCORE(),

  /**
   * TK_KEY_BACKQUOTE
   *
   */
 KEY_BACKQUOTE = TK_KEY_BACKQUOTE(),

  /**
   * TK_KEY_a
   *
   */
 KEY_a = TK_KEY_a(),

  /**
   * TK_KEY_b
   *
   */
 KEY_b = TK_KEY_b(),

  /**
   * TK_KEY_c
   *
   */
 KEY_c = TK_KEY_c(),

  /**
   * TK_KEY_d
   *
   */
 KEY_d = TK_KEY_d(),

  /**
   * TK_KEY_e
   *
   */
 KEY_e = TK_KEY_e(),

  /**
   * TK_KEY_f
   *
   */
 KEY_f = TK_KEY_f(),

  /**
   * TK_KEY_g
   *
   */
 KEY_g = TK_KEY_g(),

  /**
   * TK_KEY_h
   *
   */
 KEY_h = TK_KEY_h(),

  /**
   * TK_KEY_i
   *
   */
 KEY_i = TK_KEY_i(),

  /**
   * TK_KEY_j
   *
   */
 KEY_j = TK_KEY_j(),

  /**
   * TK_KEY_k
   *
   */
 KEY_k = TK_KEY_k(),

  /**
   * TK_KEY_l
   *
   */
 KEY_l = TK_KEY_l(),

  /**
   * TK_KEY_m
   *
   */
 KEY_m = TK_KEY_m(),

  /**
   * TK_KEY_n
   *
   */
 KEY_n = TK_KEY_n(),

  /**
   * TK_KEY_o
   *
   */
 KEY_o = TK_KEY_o(),

  /**
   * TK_KEY_p
   *
   */
 KEY_p = TK_KEY_p(),

  /**
   * TK_KEY_q
   *
   */
 KEY_q = TK_KEY_q(),

  /**
   * TK_KEY_r
   *
   */
 KEY_r = TK_KEY_r(),

  /**
   * TK_KEY_s
   *
   */
 KEY_s = TK_KEY_s(),

  /**
   * TK_KEY_t
   *
   */
 KEY_t = TK_KEY_t(),

  /**
   * TK_KEY_u
   *
   */
 KEY_u = TK_KEY_u(),

  /**
   * TK_KEY_v
   *
   */
 KEY_v = TK_KEY_v(),

  /**
   * TK_KEY_w
   *
   */
 KEY_w = TK_KEY_w(),

  /**
   * TK_KEY_x
   *
   */
 KEY_x = TK_KEY_x(),

  /**
   * TK_KEY_y
   *
   */
 KEY_y = TK_KEY_y(),

  /**
   * TK_KEY_z
   *
   */
 KEY_z = TK_KEY_z(),

  /**
   * TK_KEY_A
   *
   */
 KEY_A = TK_KEY_A(),

  /**
   * TK_KEY_B
   *
   */
 KEY_B = TK_KEY_B(),

  /**
   * TK_KEY_C
   *
   */
 KEY_C = TK_KEY_C(),

  /**
   * TK_KEY_D
   *
   */
 KEY_D = TK_KEY_D(),

  /**
   * TK_KEY_E
   *
   */
 KEY_E = TK_KEY_E(),

  /**
   * TK_KEY_F
   *
   */
 KEY_F = TK_KEY_F(),

  /**
   * TK_KEY_G
   *
   */
 KEY_G = TK_KEY_G(),

  /**
   * TK_KEY_H
   *
   */
 KEY_H = TK_KEY_H(),

  /**
   * TK_KEY_I
   *
   */
 KEY_I = TK_KEY_I(),

  /**
   * TK_KEY_J
   *
   */
 KEY_J = TK_KEY_J(),

  /**
   * TK_KEY_K
   *
   */
 KEY_K = TK_KEY_K(),

  /**
   * TK_KEY_L
   *
   */
 KEY_L = TK_KEY_L(),

  /**
   * TK_KEY_M
   *
   */
 KEY_M = TK_KEY_M(),

  /**
   * TK_KEY_N
   *
   */
 KEY_N = TK_KEY_N(),

  /**
   * TK_KEY_O
   *
   */
 KEY_O = TK_KEY_O(),

  /**
   * TK_KEY_P
   *
   */
 KEY_P = TK_KEY_P(),

  /**
   * TK_KEY_Q
   *
   */
 KEY_Q = TK_KEY_Q(),

  /**
   * TK_KEY_R
   *
   */
 KEY_R = TK_KEY_R(),

  /**
   * TK_KEY_S
   *
   */
 KEY_S = TK_KEY_S(),

  /**
   * TK_KEY_T
   *
   */
 KEY_T = TK_KEY_T(),

  /**
   * TK_KEY_U
   *
   */
 KEY_U = TK_KEY_U(),

  /**
   * TK_KEY_V
   *
   */
 KEY_V = TK_KEY_V(),

  /**
   * TK_KEY_W
   *
   */
 KEY_W = TK_KEY_W(),

  /**
   * TK_KEY_X
   *
   */
 KEY_X = TK_KEY_X(),

  /**
   * TK_KEY_Y
   *
   */
 KEY_Y = TK_KEY_Y(),

  /**
   * TK_KEY_Z
   *
   */
 KEY_Z = TK_KEY_Z(),

  /**
   * TK_KEY_DOT
   *
   */
 KEY_DOT = TK_KEY_DOT(),

  /**
   * TK_KEY_DELETE
   *
   */
 KEY_DELETE = TK_KEY_DELETE(),

  /**
   * TK_KEY_LEFTBRACE
   *
   */
 KEY_LEFTBRACE = TK_KEY_LEFTBRACE(),

  /**
   * TK_KEY_RIGHTBRACE
   *
   */
 KEY_RIGHTBRACE = TK_KEY_RIGHTBRACE(),

  /**
   * TK_KEY_LSHIFT
   *
   */
 KEY_LSHIFT = TK_KEY_LSHIFT(),

  /**
   * TK_KEY_RSHIFT
   *
   */
 KEY_RSHIFT = TK_KEY_RSHIFT(),

  /**
   * TK_KEY_LCTRL
   *
   */
 KEY_LCTRL = TK_KEY_LCTRL(),

  /**
   * TK_KEY_RCTRL
   *
   */
 KEY_RCTRL = TK_KEY_RCTRL(),

  /**
   * TK_KEY_LALT
   *
   */
 KEY_LALT = TK_KEY_LALT(),

  /**
   * TK_KEY_RALT
   *
   */
 KEY_RALT = TK_KEY_RALT(),

  /**
   * TK_KEY_CAPSLOCK
   *
   */
 KEY_CAPSLOCK = TK_KEY_CAPSLOCK(),

  /**
   * TK_KEY_HOME
   *
   */
 KEY_HOME = TK_KEY_HOME(),

  /**
   * TK_KEY_END
   *
   */
 KEY_END = TK_KEY_END(),

  /**
   * TK_KEY_INSERT
   *
   */
 KEY_INSERT = TK_KEY_INSERT(),

  /**
   * TK_KEY_UP
   *
   */
 KEY_UP = TK_KEY_UP(),

  /**
   * TK_KEY_DOWN
   *
   */
 KEY_DOWN = TK_KEY_DOWN(),

  /**
   * TK_KEY_LEFT
   *
   */
 KEY_LEFT = TK_KEY_LEFT(),

  /**
   * TK_KEY_RIGHT
   *
   */
 KEY_RIGHT = TK_KEY_RIGHT(),

  /**
   * TK_KEY_PAGEUP
   *
   */
 KEY_PAGEUP = TK_KEY_PAGEUP(),

  /**
   * TK_KEY_PAGEDOWN
   *
   */
 KEY_PAGEDOWN = TK_KEY_PAGEDOWN(),

  /**
   * TK_KEY_F1
   *
   */
 KEY_F1 = TK_KEY_F1(),

  /**
   * TK_KEY_F2
   *
   */
 KEY_F2 = TK_KEY_F2(),

  /**
   * TK_KEY_F3
   *
   */
 KEY_F3 = TK_KEY_F3(),

  /**
   * TK_KEY_F4
   *
   */
 KEY_F4 = TK_KEY_F4(),

  /**
   * TK_KEY_F5
   *
   */
 KEY_F5 = TK_KEY_F5(),

  /**
   * TK_KEY_F6
   *
   */
 KEY_F6 = TK_KEY_F6(),

  /**
   * TK_KEY_F7
   *
   */
 KEY_F7 = TK_KEY_F7(),

  /**
   * TK_KEY_F8
   *
   */
 KEY_F8 = TK_KEY_F8(),

  /**
   * TK_KEY_F9
   *
   */
 KEY_F9 = TK_KEY_F9(),

  /**
   * TK_KEY_F10
   *
   */
 KEY_F10 = TK_KEY_F10(),

  /**
   * TK_KEY_F11
   *
   */
 KEY_F11 = TK_KEY_F11(),

  /**
   * TK_KEY_F12
   *
   */
 KEY_F12 = TK_KEY_F12(),

  /**
   * TK_KEY_MENU
   *
   */
 KEY_MENU = TK_KEY_MENU(),

  /**
   * TK_KEY_COMMAND
   *
   */
 KEY_COMMAND = TK_KEY_COMMAND(),

  /**
   * TK_KEY_BACK
   *
   */
 KEY_BACK = TK_KEY_BACK(),

  /**
   * TK_KEY_CANCEL
   *
   */
 KEY_CANCEL = TK_KEY_CANCEL(),

  /**
   * TK_KEY_WHEEL
   *
   */
 KEY_WHEEL = TK_KEY_WHEEL(),
};


/**
 * 本地化信息。提供字符串翻译数据管理，当前语言改变的事件通知等等。
 *
 */
export class TLocaleInfo { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   this.nativeObj = nativeObj;
 }


  /**
   * 获取缺省locale_info。
   * 
   *
   * @returns 返回locale_info对象。
   */
 static instance() : TLocaleInfo  {
    return new TLocaleInfo(locale_info());
 }


  /**
   * 翻译字符串。
   * 
   * @param text 待翻译的文本。
   *
   * @returns 返回翻译之后的字符串。
   */
 tr(text : string) : string  {
    return locale_info_tr(this != null ? (this.nativeObj || this) : null, text);
 }


  /**
   * 设置当前的国家和语言。
   * 
   * @param language 语言。
   * @param country 国家或地区。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 change(language : string, country : string) : TRet  {
    return locale_info_change(this != null ? (this.nativeObj || this) : null, language, country);
 }


  /**
   * 注销指定事件的处理函数。
   * 
   * @param id locale_info_on返回的ID。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 off(id : number) : TRet  {
    return locale_info_off(this != null ? (this.nativeObj || this) : null, id);
 }

};
/**
 * style常量定义。
 *
 */
export enum TStyleId {

  /**
   * 背景颜色。
   *
   */
 BG_COLOR = STYLE_ID_BG_COLOR(),

  /**
   * 前景颜色。
   *
   */
 FG_COLOR = STYLE_ID_FG_COLOR(),

  /**
   * 蒙版颜色。
   *
   */
 MASK_COLOR = STYLE_ID_MASK_COLOR(),

  /**
   * 字体名称。
   *
   */
 FONT_NAME = STYLE_ID_FONT_NAME(),

  /**
   * 字体大小。
   *
   */
 FONT_SIZE = STYLE_ID_FONT_SIZE(),

  /**
   * 字体风格(粗体、斜体等)。
   *
   */
 FONT_STYLE = STYLE_ID_FONT_STYLE(),

  /**
   * 文本颜色。
   *
   */
 TEXT_COLOR = STYLE_ID_TEXT_COLOR(),

  /**
   * 高亮文本的字体名称。
   *
   */
 HIGHLIGHT_FONT_NAME = STYLE_ID_HIGHLIGHT_FONT_NAME(),

  /**
   * 高亮文本的字体大小。
   *
   */
 HIGHLIGHT_FONT_SIZE = STYLE_ID_HIGHLIGHT_FONT_SIZE(),

  /**
   * 高亮文本的文本颜色。
   *
   */
 HIGHLIGHT_TEXT_COLOR = STYLE_ID_HIGHLIGHT_TEXT_COLOR(),

  /**
   * 提示文本颜色。
   *
   */
 TIPS_TEXT_COLOR = STYLE_ID_TIPS_TEXT_COLOR(),

  /**
   * 文本水平对齐的方式。
   *
   */
 TEXT_ALIGN_H = STYLE_ID_TEXT_ALIGN_H(),

  /**
   * 文本垂直对齐的方式。
   *
   */
 TEXT_ALIGN_V = STYLE_ID_TEXT_ALIGN_V(),

  /**
   * 边框颜色。
   *
   */
 BORDER_COLOR = STYLE_ID_BORDER_COLOR(),

  /**
   * 边框线宽。
   *
   */
 BORDER_WIDTH = STYLE_ID_BORDER_WIDTH(),

  /**
   * 边框类型。
   *
   */
 BORDER = STYLE_ID_BORDER(),

  /**
   * 图片的名称。
   *
   */
 BG_IMAGE = STYLE_ID_BG_IMAGE(),

  /**
   * 图片的显示方式。
   *
   */
 BG_IMAGE_DRAW_TYPE = STYLE_ID_BG_IMAGE_DRAW_TYPE(),

  /**
   * 图标的名称。
   *
   */
 ICON = STYLE_ID_ICON(),

  /**
   * 图片的名称。
   *
   */
 FG_IMAGE = STYLE_ID_FG_IMAGE(),

  /**
   * 图片的显示方式。
   *
   */
 FG_IMAGE_DRAW_TYPE = STYLE_ID_FG_IMAGE_DRAW_TYPE(),

  /**
   * 间距。
   *
   */
 SPACER = STYLE_ID_SPACER(),

  /**
   * 边距。
   *
   */
 MARGIN = STYLE_ID_MARGIN(),

  /**
   * 左边距。
   *
   */
 MARGIN_LEFT = STYLE_ID_MARGIN_LEFT(),

  /**
   * 右边距。
   *
   */
 MARGIN_RIGHT = STYLE_ID_MARGIN_RIGHT(),

  /**
   * 顶边距。
   *
   */
 MARGIN_TOP = STYLE_ID_MARGIN_TOP(),

  /**
   * 底边距。
   *
   */
 MARGIN_BOTTOM = STYLE_ID_MARGIN_BOTTOM(),

  /**
   * 图标的位置。
   *
   */
 ICON_AT = STYLE_ID_ICON_AT(),

  /**
   * Active图标的名称。
   *
   */
 ACTIVE_ICON = STYLE_ID_ACTIVE_ICON(),

  /**
   * X方向的偏移，方便实现按下的效果。
   *
   */
 X_OFFSET = STYLE_ID_X_OFFSET(),

  /**
   * Y方向的偏移，方便实现按下的效果。
   *
   */
 Y_OFFSET = STYLE_ID_Y_OFFSET(),

  /**
   * 编辑器中选中区域的背景颜色。
   *
   */
 SELECTED_BG_COLOR = STYLE_ID_SELECTED_BG_COLOR(),

  /**
   * 编辑器中选中区域的前景颜色。
   *
   */
 SELECTED_FG_COLOR = STYLE_ID_SELECTED_FG_COLOR(),

  /**
   * 编辑器中选中区域的文本颜色。
   *
   */
 SELECTED_TEXT_COLOR = STYLE_ID_SELECTED_TEXT_COLOR(),

  /**
   * 圆角半径(仅在WITH_VGCANVAS定义时生效)。
   *
   */
 ROUND_RADIUS = STYLE_ID_ROUND_RADIUS(),

  /**
   * 左上角圆角半径(仅在WITH_VGCANVAS定义时生效)。
   *
   */
 ROUND_RADIUS_TOP_LETF = STYLE_ID_ROUND_RADIUS_TOP_LETF(),

  /**
   * 右上角圆角半径(仅在WITH_VGCANVAS定义时生效)。
   *
   */
 ROUND_RADIUS_TOP_RIGHT = STYLE_ID_ROUND_RADIUS_TOP_RIGHT(),

  /**
   * 左下角圆角半径(仅在WITH_VGCANVAS定义时生效)。
   *
   */
 ROUND_RADIUS_BOTTOM_LETF = STYLE_ID_ROUND_RADIUS_BOTTOM_LETF(),

  /**
   * 右下角圆角半径(仅在WITH_VGCANVAS定义时生效)。
   *
   */
 ROUND_RADIUS_BOTTOM_RIGHT = STYLE_ID_ROUND_RADIUS_BOTTOM_RIGHT(),

  /**
   * 子控件布局参数。
   *
   */
 CHILDREN_LAYOUT = STYLE_ID_CHILDREN_LAYOUT(),

  /**
   * 控件布局参数。
   *
   */
 SELF_LAYOUT = STYLE_ID_SELF_LAYOUT(),

  /**
   * 是否支持焦点停留。
   *
   */
 FOCUSABLE = STYLE_ID_FOCUSABLE(),

  /**
   * 是否启用按键音、触屏音和震动等反馈。
   *
   */
 FEEDBACK = STYLE_ID_FEEDBACK(),
};


/**
 * 控件风格。
 *
 *widget从style对象中，获取诸如字体、颜色和图片相关的参数，根据这些参数来绘制界面。
 *
 *
 *属性名称的请参考[style\_id](style_id_t.md)
 *
 */
export class TStyle { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   this.nativeObj = nativeObj;
 }


  /**
   * widget状态改变时，通知style更新数据。
   * 
   * @param widget 控件对象。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 notifyWidgetStateChanged(widget : TWidget) : TRet  {
    return style_notify_widget_state_changed(this != null ? (this.nativeObj || this) : null, widget != null ? (widget.nativeObj || widget) : null);
 }


  /**
   * 检查style对象是否有效
   * 
   *
   * @returns 返回是否有效。
   */
 isValid() : boolean  {
    return style_is_valid(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 获取指定name的整数格式的值。
   * 
   * @param name 属性名。
   * @param defval 缺省值。
   *
   * @returns 返回整数格式的值。
   */
 getInt(name : string, defval : number) : number  {
    return style_get_int(this != null ? (this.nativeObj || this) : null, name, defval);
 }


  /**
   * 获取指定name的无符号整数格式的值。
   * 
   * @param name 属性名。
   * @param defval 缺省值。
   *
   * @returns 返回无符号整数格式的值。
   */
 getUint(name : string, defval : number) : number  {
    return style_get_uint(this != null ? (this.nativeObj || this) : null, name, defval);
 }


  /**
   * 获取指定name的字符串格式的值。
   * 
   * @param name 属性名。
   * @param defval 缺省值。
   *
   * @returns 返回字符串格式的值。
   */
 getStr(name : string, defval : string) : string  {
    return style_get_str(this != null ? (this.nativeObj || this) : null, name, defval);
 }


  /**
   * 设置指定状态的指定属性的值(仅仅对mutable的style有效)。
   * 
   * @param state 状态。
   * @param name 属性名。
   * @param value 值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 set(state : string, name : string, value : TValue) : TRet  {
    return style_set(this != null ? (this.nativeObj || this) : null, state, name, value != null ? (value.nativeObj || value) : null);
 }


  /**
   * 更新风格对象的状态以及对应的数据
   *备注：根据 widget_type 和 style_name 以及 widget_state 在 theme 对象中查找对应的数据并且更新到 style 对象中
   * 
   * @param theme theme对象。
   * @param widget_type 控件的类型名。
   * @param style_name style的名称。
   * @param widget_state 控件的状态。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 updateState(theme : TTheme, widget_type : string, style_name : string, widget_state : string) : TRet  {
    return style_update_state(this != null ? (this.nativeObj || this) : null, theme != null ? (theme.nativeObj || theme) : null, widget_type, style_name, widget_state);
 }


  /**
   * 获取风格对象的风格状态
   * 
   *
   * @returns 返回风格状态。
   */
 getStyleState() : string  {
    return style_get_style_state(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 检查style是否是mutable的。
   * 
   *
   * @returns 返回TRUE表示是，否则表示不是。
   */
 isMutable() : boolean  {
    return style_is_mutable(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 获取 style 的风格类型。
   * 
   *
   * @returns 返回风格类型。
   */
 getStyleType() : string  {
    return style_get_style_type(this != null ? (this.nativeObj || this) : null);
 }

};
/**
 * 窗体样式。
 *
 *负责管理缺省的窗体样式数据，方便实现style\_const。
 *
 */
export class TTheme { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   this.nativeObj = nativeObj;
 }


  /**
   * 获取缺省的窗体样式对象。
   * 
   *
   * @returns 返回窗体样式对象。
   */
 static instance() : TTheme  {
    return new TTheme(theme());
 }

};
/**
 * 定时器系统。
 *
 *> 本定时器精度较低，最高精度为1000/FPS，如果需要高精度的定时器，请用OS提供的定时器。
 *
 *示例：
 *
 *> 在非GUI线程请用timer\_queue。
 *
 */
export class TTimer { 

  /**
   * 增加一个timer。
   * 
   * @param on_timer timer回调函数。
   * @param ctx timer回调函数的上下文。
   * @param duration 时间。
   *
   * @returns 返回timer的ID，TK_INVALID_ID表示失败。
   */
 static add(on_timer : Function, ctx : any, duration : number) : number  {
    return timer_add(on_timer, ctx, duration);
 }


  /**
   * 删除指定的timer。
   * 
   * @param timer_id timerID。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 static remove(timer_id : number) : TRet  {
    return timer_remove(timer_id);
 }


  /**
   * 根据上下文删除所有对应的timer。
   * 
   * @param ctx timer回调函数的上下文。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 static removeAllByCtx(ctx : any) : TRet  {
    return timer_remove_all_by_ctx(ctx);
 }


  /**
   * 重置指定的timer，重置之后定时器重新开始计时。
   * 
   * @param timer_id timerID。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 static reset(timer_id : number) : TRet  {
    return timer_reset(timer_id);
 }


  /**
   * 挂起指定的timer，一般用于不断循环触发的计时器。
   * 
   * @param timer_id timerID。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 static suspend(timer_id : number) : TRet  {
    return timer_suspend(timer_id);
 }


  /**
   * 唤醒挂起指定的timer，并且重置定时器重新开始计时
   * 
   * @param timer_id timerID。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 static resume(timer_id : number) : TRet  {
    return timer_resume(timer_id);
 }


  /**
   * 修改指定的timer的duration，修改之后定时器重新开始计时。
   * 
   * @param timer_id timerID。
   * @param duration 新的时间。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 static modify(timer_id : number, duration : number) : TRet  {
    return timer_modify(timer_id, duration);
 }

};
/**
 * 垂直对齐的常量定义。
 *
 */
export enum TAlignV {

  /**
   * 无效对齐方式。
   *
   */
 NONE = ALIGN_V_NONE(),

  /**
   * 居中对齐。
   *
   */
 MIDDLE = ALIGN_V_MIDDLE(),

  /**
   * 顶部对齐。
   *
   */
 TOP = ALIGN_V_TOP(),

  /**
   * 底部对齐。
   *
   */
 BOTTOM = ALIGN_V_BOTTOM(),
};


/**
 * 水平对齐的常量定义。
 *
 */
export enum TAlignH {

  /**
   * 无效对齐方式。
   *
   */
 NONE = ALIGN_H_NONE(),

  /**
   * 居中对齐。
   *
   */
 CENTER = ALIGN_H_CENTER(),

  /**
   * 左边对齐。
   *
   */
 LEFT = ALIGN_H_LEFT(),

  /**
   * 右边对齐。
   *
   */
 RIGHT = ALIGN_H_RIGHT(),
};


/**
 * 应用程序类型。
 *
 */
export enum TAppType {

  /**
   * 嵌入式或移动APP
   *
   */
 MOBILE = APP_MOBILE(),

  /**
   * 模拟器。
   *
   */
 SIMULATOR = APP_SIMULATOR(),

  /**
   * 桌面应用程序。
   *
   */
 DESKTOP = APP_DESKTOP(),
};


/**
 * 位图格式常量定义。
 *
 */
export enum TBitmapFormat {

  /**
   * 无效格式。
   *
   */
 NONE = BITMAP_FMT_NONE(),

  /**
   * 一个像素占用4个字节，RGBA占一个字节，按内存地址递增。
   *
   */
 RGBA8888 = BITMAP_FMT_RGBA8888(),

  /**
   * 一个像素占用4个字节，ABGR占一个字节，按内存地址递增。
   *
   */
 ABGR8888 = BITMAP_FMT_ABGR8888(),

  /**
   * 一个像素占用4个字节，BGRA占一个字节，按内存地址递增。
   *
   */
 BGRA8888 = BITMAP_FMT_BGRA8888(),

  /**
   * 一个像素占用4个字节，ARGB占一个字节，按内存地址递增。
   *
   */
 ARGB8888 = BITMAP_FMT_ARGB8888(),

  /**
   * 一个像素占用2个字节，RGB分别占用5,6,5位, 按内存地址递增。
   *
   */
 RGB565 = BITMAP_FMT_RGB565(),

  /**
   * 一个像素占用2个字节，BGR分别占用5,6,5位, 按内存地址递增。
   *
   */
 BGR565 = BITMAP_FMT_BGR565(),

  /**
   * 一个像素占用3个字节，RGB占一个字节，按内存地址递增。
   *
   */
 RGB888 = BITMAP_FMT_RGB888(),

  /**
   * 一个像素占用3个字节，RGB占一个字节，按内存地址递增。
   *
   */
 BGR888 = BITMAP_FMT_BGR888(),

  /**
   * 一个像素占用1个字节。
   *
   */
 GRAY = BITMAP_FMT_GRAY(),

  /**
   * 一个像素占用1比特。
   *
   */
 MONO = BITMAP_FMT_MONO(),
};


/**
 * 位图标志常量定义。
 *
 */
export enum TBitmapFlag {

  /**
   * 无特殊标志。
   *
   */
 NONE = BITMAP_FLAG_NONE(),

  /**
   * 不透明图片。
   *
   */
 OPAQUE = BITMAP_FLAG_OPAQUE(),

  /**
   * 图片内容不会变化。
   *
   */
 IMMUTABLE = BITMAP_FLAG_IMMUTABLE(),

  /**
   * OpenGL Texture, bitmap的id是有效的texture id。
   *
   */
 TEXTURE = BITMAP_FLAG_TEXTURE(),

  /**
   * 如果是MUTABLE的图片，更新时需要设置此标志，底层可能会做特殊处理，比如更新图片到GPU。
   *
   */
 CHANGED = BITMAP_FLAG_CHANGED(),

  /**
   * 预乘alpha。
   *
   */
 PREMULTI_ALPHA = BITMAP_FLAG_PREMULTI_ALPHA(),
};


/**
 * 矢量图画布抽象基类。
 *
 *具体实现时可以使用agg，nanovg, cairo和skia等方式。
 *
 *cairo和skia体积太大，不适合嵌入式平台，但在PC平台也是一种选择。
 *
 *目前我们只提供了基于nanovg的实现，支持软件渲染和硬件渲染。
 *
 *我们对nanovg进行了一些改进:
 *
 ** 可以用agg/agge实现软件渲染(暂时不支持文本绘制)。
 *
 ** 可以用bgfx使用DirectX(Windows平台)和Metal(iOS)平台硬件加速。
 *
 *
 *
 *示例：
 *
 *
 *>请参考：https://www.w3schools.com/tags/ref_canvas.asp
 *
 */
export class TVgcanvas { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   this.nativeObj = nativeObj;
 }


  /**
   * 转换为vgcanvas对象(供脚本语言使用)。
   * 
   * @param vg vgcanvas对象。
   *
   * @returns vgcanvas对象。
   */
 static cast(vg : TVgcanvas) : TVgcanvas  {
    return new TVgcanvas(vgcanvas_cast(vg != null ? (vg.nativeObj || vg) : null));
 }


  /**
   * flush
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 flush() : TRet  {
    return vgcanvas_flush(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 清除之前的路径，并重新开始一条路径。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 beginPath() : TRet  {
    return vgcanvas_begin_path(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 移动当前点到指定点。
   * 
   * @param x x坐标。
   * @param y y坐标。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 moveTo(x : number, y : number) : TRet  {
    return vgcanvas_move_to(this != null ? (this.nativeObj || this) : null, x, y);
 }


  /**
   * 生成一条线段(从当前点到目标点)。
   * 
   * @param x x坐标。
   * @param y y坐标。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 lineTo(x : number, y : number) : TRet  {
    return vgcanvas_line_to(this != null ? (this.nativeObj || this) : null, x, y);
 }


  /**
   * 生成一条二次贝塞尔曲线。
   * 
   * @param cpx 控制点x坐标。
   * @param cpy 控制点y坐标。
   * @param x x坐标。
   * @param y y坐标。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 quadTo(cpx : number, cpy : number, x : number, y : number) : TRet  {
    return vgcanvas_quad_to(this != null ? (this.nativeObj || this) : null, cpx, cpy, x, y);
 }


  /**
   * 生成一条三次贝塞尔曲线。
   * 
   * @param cp1x 控制点1x坐标。
   * @param cp1y 控制点1y坐标。
   * @param cp2x 控制点2x坐标。
   * @param cp2y 控制点3y坐标。
   * @param x x坐标。
   * @param y y坐标。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 bezierTo(cp1x : number, cp1y : number, cp2x : number, cp2y : number, x : number, y : number) : TRet  {
    return vgcanvas_bezier_to(this != null ? (this.nativeObj || this) : null, cp1x, cp1y, cp2x, cp2y, x, y);
 }


  /**
   * 生成一条圆弧路径到指定点。
   * 
   * @param x1 起始点x坐标。
   * @param y1 起始点y坐标。
   * @param x2 结束点x坐标。
   * @param y2 结束点y坐标。
   * @param r 半径。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 arcTo(x1 : number, y1 : number, x2 : number, y2 : number, r : number) : TRet  {
    return vgcanvas_arc_to(this != null ? (this.nativeObj || this) : null, x1, y1, x2, y2, r);
 }


  /**
   * 生成一条圆弧。
   * 
   * @param x 原点x坐标。
   * @param y 原点y坐标。
   * @param r 半径。
   * @param start_angle 起始角度。
   * @param end_angle 结束角度。
   * @param ccw 是否逆时针。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 arc(x : number, y : number, r : number, start_angle : number, end_angle : number, ccw : boolean) : TRet  {
    return vgcanvas_arc(this != null ? (this.nativeObj || this) : null, x, y, r, start_angle, end_angle, ccw);
 }


  /**
   * 检查点是否在当前路径中。
   * 
   * @param x x坐标。
   * @param y y坐标。
   *
   * @returns 返回TRUE表示在，否则表示不在。
   */
 isPointInPath(x : number, y : number) : boolean  {
    return vgcanvas_is_point_in_path(this != null ? (this.nativeObj || this) : null, x, y);
 }


  /**
   * 生成一个矩形路径。
   * 
   * @param x x坐标。
   * @param y y坐标。
   * @param w 宽度。
   * @param h 高度。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 rect(x : number, y : number, w : number, h : number) : TRet  {
    return vgcanvas_rect(this != null ? (this.nativeObj || this) : null, x, y, w, h);
 }


  /**
   * 生成一个圆角矩形路径。
   * 
   * @param x x坐标。
   * @param y y坐标。
   * @param w 宽度。
   * @param h 高度。
   * @param r 圆角半径。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 roundedRect(x : number, y : number, w : number, h : number, r : number) : TRet  {
    return vgcanvas_rounded_rect(this != null ? (this.nativeObj || this) : null, x, y, w, h, r);
 }


  /**
   * 生成一个椭圆路径。
   * 
   * @param x x坐标。
   * @param y y坐标。
   * @param rx 圆角半径。
   * @param ry 圆角半径。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 ellipse(x : number, y : number, rx : number, ry : number) : TRet  {
    return vgcanvas_ellipse(this != null ? (this.nativeObj || this) : null, x, y, rx, ry);
 }


  /**
   * 闭合路径。
   *
   *>闭合路径是指把起点和终点连接起来，形成一个封闭的多边形。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 closePath() : TRet  {
    return vgcanvas_close_path(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 设置路径填充实心与否。
   *
   *>CCW(1)为实心，CW(2)为镂空，设置其他则默认根据非零环绕规则判断(nonzero)。
   * 
   * @param dir 填充方法。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 pathWinding(dir : boolean) : TRet  {
    return vgcanvas_path_winding(this != null ? (this.nativeObj || this) : null, dir);
 }


  /**
   * 旋转。
   * 
   * @param rad 角度
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 rotate(rad : number) : TRet  {
    return vgcanvas_rotate(this != null ? (this.nativeObj || this) : null, rad);
 }


  /**
   * 缩放。
   * 
   * @param x x方向缩放比例。
   * @param y y方向缩放比例。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 scale(x : number, y : number) : TRet  {
    return vgcanvas_scale(this != null ? (this.nativeObj || this) : null, x, y);
 }


  /**
   * 平移。
   * 
   * @param x x方向偏移。
   * @param y y方向偏移。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 translate(x : number, y : number) : TRet  {
    return vgcanvas_translate(this != null ? (this.nativeObj || this) : null, x, y);
 }


  /**
   * 变换矩阵。
   * 
   * @param a a
   * @param b b
   * @param c c
   * @param d d
   * @param e e
   * @param f f
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 transform(a : number, b : number, c : number, d : number, e : number, f : number) : TRet  {
    return vgcanvas_transform(this != null ? (this.nativeObj || this) : null, a, b, c, d, e, f);
 }


  /**
   * 设置变换矩阵。
   * 
   * @param a a
   * @param b b
   * @param c c
   * @param d d
   * @param e e
   * @param f f
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setTransform(a : number, b : number, c : number, d : number, e : number, f : number) : TRet  {
    return vgcanvas_set_transform(this != null ? (this.nativeObj || this) : null, a, b, c, d, e, f);
 }


  /**
   * 使用当前的path裁剪。
   *>目前只有部分backend支持(如cairo)。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 clipPath() : TRet  {
    return vgcanvas_clip_path(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 矩形裁剪。
   * 
   * @param x x坐标。
   * @param y y坐标。
   * @param w 宽度。
   * @param h 高度。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 clipRect(x : number, y : number, w : number, h : number) : TRet  {
    return vgcanvas_clip_rect(this != null ? (this.nativeObj || this) : null, x, y, w, h);
 }


  /**
   * 设置一个与前一个裁剪区做交集的矩形裁剪区。
   *如果下面这种情况，则不能直接调用 rect_intersect 函数来做矩形交集和 vgcanvas_clip_rect 函数设置裁剪区，而采用本函数做交集。
   *由于缩放和旋转以及平移会导致 vg 的坐标系和上一个裁剪区的坐标系不同，
   *导致直接使用做交集的话，裁剪区会出错。
   *
   *```
   *vgcanvas_clip_rect(vg, old_r.x, old_r.y, old_r.w, old_r.h);
   *vgcanvas_save(vg);
   *vgcanvas_scale(vg, scale_x, scale_y);
   *vgcanvas_rotate(vg, TK_D2R(15));
   *vgcanvas_intersect_clip_rect(vg, r.x, r.y, r.w, r.h);
   *..................
   *vgcanvas_restore(vg);
   *```
   * 
   * @param x x坐标。
   * @param y y坐标。
   * @param w 宽度。
   * @param h 高度。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 intersectClipRect(x : number, y : number, w : number, h : number) : TRet  {
    return vgcanvas_intersect_clip_rect(this != null ? (this.nativeObj || this) : null, x, y, w, h);
 }


  /**
   * 填充多边形。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 fill() : TRet  {
    return vgcanvas_fill(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 画线。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 stroke() : TRet  {
    return vgcanvas_stroke(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 用图片填充/画多边形(可能存在可移植性问题，除非必要请勿使用)。
   *多边形的顶点必须在图片范围内，可以通过矩阵变化画到不同的位置。
   * 
   * @param stroke TRUE表示画线FALSE表示填充。
   * @param img 图片。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 paint(stroke : boolean, img : TBitmap) : TRet  {
    return vgcanvas_paint(this != null ? (this.nativeObj || this) : null, stroke, img != null ? (img.nativeObj || img) : null);
 }


  /**
   * 设置字体的名称。
   * 
   * @param font 字体名称。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setFont(font : string) : TRet  {
    return vgcanvas_set_font(this != null ? (this.nativeObj || this) : null, font);
 }


  /**
   * 设置字体的大小。
   * 
   * @param font 字体大小。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setFontSize(font : number) : TRet  {
    return vgcanvas_set_font_size(this != null ? (this.nativeObj || this) : null, font);
 }


  /**
   * 设置文本水平对齐的方式。
   * 
   * @param value 取值：left|center|right，必须为常量字符串。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setTextAlign(value : string) : TRet  {
    return vgcanvas_set_text_align(this != null ? (this.nativeObj || this) : null, value);
 }


  /**
   * 设置文本垂直对齐的方式。
   * 
   * @param value 取值：top|middle|bottom，必须为常量字符串。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setTextBaseline(value : string) : TRet  {
    return vgcanvas_set_text_baseline(this != null ? (this.nativeObj || this) : null, value);
 }


  /**
   * 绘制文本。
   * 
   * @param text text
   * @param x x坐标。
   * @param y y坐标。
   * @param max_width 最大宽度。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 fillText(text : string, x : number, y : number, max_width : number) : TRet  {
    return vgcanvas_fill_text(this != null ? (this.nativeObj || this) : null, text, x, y, max_width);
 }


  /**
   * 测量文本的宽度。
   * 
   * @param text text
   *
   * @returns 返回text的宽度。
   */
 measureText(text : string) : number  {
    return vgcanvas_measure_text(this != null ? (this.nativeObj || this) : null, text);
 }


  /**
   * 绘制图片。
   * 
   * @param img 图片。
   * @param sx sx
   * @param sy sy
   * @param sw sw
   * @param sh sh
   * @param dx dx
   * @param dy dy
   * @param dw dw
   * @param dh dh
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 drawImage(img : TBitmap, sx : number, sy : number, sw : number, sh : number, dx : number, dy : number, dw : number, dh : number) : TRet  {
    return vgcanvas_draw_image(this != null ? (this.nativeObj || this) : null, img != null ? (img.nativeObj || img) : null, sx, sy, sw, sh, dx, dy, dw, dh);
 }


  /**
   * 绘制图标。
   *
   *绘制图标时会根据屏幕密度进行自动缩放，而绘制普通图片时不会。
   * 
   * @param img 图片。
   * @param sx sx
   * @param sy sy
   * @param sw sw
   * @param sh sh
   * @param dx dx
   * @param dy dy
   * @param dw dw
   * @param dh dh
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 drawIcon(img : TBitmap, sx : number, sy : number, sw : number, sh : number, dx : number, dy : number, dw : number, dh : number) : TRet  {
    return vgcanvas_draw_icon(this != null ? (this.nativeObj || this) : null, img != null ? (img.nativeObj || img) : null, sx, sy, sw, sh, dx, dy, dw, dh);
 }


  /**
   * 设置是否启用反走样。
   * 
   * @param value 是否启用反走样。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setAntialias(value : any) : TRet  {
    return vgcanvas_set_antialias(this != null ? (this.nativeObj || this) : null, value);
 }


  /**
   * 设置全局透明度。
   * 
   * @param alpha global alpha。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setGlobalAlpha(alpha : number) : TRet  {
    return vgcanvas_set_global_alpha(this != null ? (this.nativeObj || this) : null, alpha);
 }


  /**
   * 设置线条的宽度。
   * 
   * @param value 线宽。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setLineWidth(value : any) : TRet  {
    return vgcanvas_set_line_width(this != null ? (this.nativeObj || this) : null, value);
 }


  /**
   * 设置填充颜色。
   * 
   * @param color 颜色。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setFillColor(color : string) : TRet  {
    return vgcanvas_set_fill_color_str(this != null ? (this.nativeObj || this) : null, color);
 }


  /**
   * 设置线条颜色。
   * 
   * @param color 颜色。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setStrokeColor(color : string) : TRet  {
    return vgcanvas_set_stroke_color_str(this != null ? (this.nativeObj || this) : null, color);
 }


  /**
   * 设置line cap。
   * 
   * @param value 取值：butt|round|square，必须为常量字符串。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setLineCap(value : string) : TRet  {
    return vgcanvas_set_line_cap(this != null ? (this.nativeObj || this) : null, value);
 }


  /**
   * 设置line join。
   * 
   * @param value 取值：bevel|round|miter，必须为常量字符串。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setLineJoin(value : string) : TRet  {
    return vgcanvas_set_line_join(this != null ? (this.nativeObj || this) : null, value);
 }


  /**
   * 设置miter limit。
   * 
   * @param value miter limit
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setMiterLimit(value : any) : TRet  {
    return vgcanvas_set_miter_limit(this != null ? (this.nativeObj || this) : null, value);
 }


  /**
   * 保存当前的状态。如颜色和矩阵等信息。
   *
   *> save/restore必须配套使用，否则可能导致状态混乱。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 save() : TRet  {
    return vgcanvas_save(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 恢复上次save的状态。
   *
   *> save/restore必须配套使用，否则可能导致状态混乱。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 restore() : TRet  {
    return vgcanvas_restore(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * canvas的宽度
   *
   */
 get w() : number {
   return vgcanvas_t_get_prop_w(this.nativeObj);
 }


  /**
   * canvas的高度
   *
   */
 get h() : number {
   return vgcanvas_t_get_prop_h(this.nativeObj);
 }


  /**
   * 一行占的字节
   *
   */
 get stride() : number {
   return vgcanvas_t_get_prop_stride(this.nativeObj);
 }


  /**
   * 显示比例。
   *
   */
 get ratio() : number {
   return vgcanvas_t_get_prop_ratio(this.nativeObj);
 }


  /**
   * 是否启用反走样功能。
   *
   */
 get antiAlias() : boolean {
   return vgcanvas_t_get_prop_anti_alias(this.nativeObj);
 }


  /**
   * 线宽。
   *
   */
 get lineWidth() : number {
   return vgcanvas_t_get_prop_line_width(this.nativeObj);
 }

 set lineWidth(v : number) {
   this.setLineWidth(v);
 }


  /**
   * 全局alpha。
   *
   */
 get globalAlpha() : number {
   return vgcanvas_t_get_prop_global_alpha(this.nativeObj);
 }

 set globalAlpha(v : number) {
   this.setGlobalAlpha(v);
 }


  /**
   * miter\_limit。
   *@see http://www.w3school.com.cn/tags/canvas_miterlimit.asp
   *
   */
 get miterLimit() : number {
   return vgcanvas_t_get_prop_miter_limit(this.nativeObj);
 }

 set miterLimit(v : number) {
   this.setMiterLimit(v);
 }


  /**
   * line\_cap。
   *@see http://www.w3school.com.cn/tags/canvas_linecap.asp
   *
   */
 get lineCap() : string {
   return vgcanvas_t_get_prop_line_cap(this.nativeObj);
 }

 set lineCap(v : string) {
   this.setLineCap(v);
 }


  /**
   * line\_join。
   *@see http://www.w3school.com.cn/tags/canvas_linejoin.asp
   *
   */
 get lineJoin() : string {
   return vgcanvas_t_get_prop_line_join(this.nativeObj);
 }

 set lineJoin(v : string) {
   this.setLineJoin(v);
 }


  /**
   * 字体。
   *
   */
 get font() : string {
   return vgcanvas_t_get_prop_font(this.nativeObj);
 }

 set font(v : string) {
   this.setFont(v);
 }


  /**
   * 字体大小。
   *
   */
 get fontSize() : number {
   return vgcanvas_t_get_prop_font_size(this.nativeObj);
 }

 set fontSize(v : number) {
   this.setFontSize(v);
 }


  /**
   * 文本对齐方式。
   *
   *@see http://www.w3school.com.cn/tags/canvas_textalign.asp
   *
   */
 get textAlign() : string {
   return vgcanvas_t_get_prop_text_align(this.nativeObj);
 }

 set textAlign(v : string) {
   this.setTextAlign(v);
 }


  /**
   * 文本基线。
   *
   *@see http://www.w3school.com.cn/tags/canvas_textbaseline.asp
   *
   */
 get textBaseline() : string {
   return vgcanvas_t_get_prop_text_baseline(this.nativeObj);
 }

 set textBaseline(v : string) {
   this.setTextBaseline(v);
 }

};
/**
 * 线帽类型。
 *
 */
export enum TVgcanvasLineCap {

  /**
   * 圆头。
   *
   */
 ROUND = VGCANVAS_LINE_CAP_ROUND(),

  /**
   * 方头。
   *
   */
 SQUARE = VGCANVAS_LINE_CAP_SQUARE(),

  /**
   * 平头。
   *
   */
 BUTT = VGCANVAS_LINE_CAP_BUTT(),
};


/**
 * 线条连接类型。
 *
 */
export enum TVgcanvasLineJoin {

  /**
   * round。
   *
   */
 ROUND = VGCANVAS_LINE_JOIN_ROUND(),

  /**
   * bevel。
   *
   */
 BEVEL = VGCANVAS_LINE_JOIN_BEVEL(),

  /**
   * mitter。
   *
   */
 MITTER = VGCANVAS_LINE_JOIN_MITTER(),
};


/**
 * 控件的属性。
 *
 */
export enum TWidgetProp {

  /**
   * 用于执行某些特殊的命令（比如控制动画的启停），主要是方便MVVM通过属性来控制动画。
   *
   */
 EXEC = WIDGET_PROP_EXEC(),

  /**
   * X坐标。
   *
   */
 X = WIDGET_PROP_X(),

  /**
   * Y坐标。
   *
   */
 Y = WIDGET_PROP_Y(),

  /**
   * 宽度。
   *
   */
 W = WIDGET_PROP_W(),

  /**
   * 高度。
   *
   */
 H = WIDGET_PROP_H(),

  /**
   * 最大高度。
   *
   */
 MAX_H = WIDGET_PROP_MAX_H(),

  /**
   * 窗口设计时宽度。
   *
   */
 DESIGN_W = WIDGET_PROP_DESIGN_W(),

  /**
   * 窗口设计时宽度。
   *
   */
 DESIGN_H = WIDGET_PROP_DESIGN_H(),

  /**
   * 窗口大小与设计时大小不同时，是否自动调整子控件的x坐标。
   *
   */
 AUTO_SCALE_CHILDREN_X = WIDGET_PROP_AUTO_SCALE_CHILDREN_X(),

  /**
   * 窗口大小与设计时大小不同时，是否自动调整子控件的y坐标。
   *
   */
 AUTO_SCALE_CHILDREN_Y = WIDGET_PROP_AUTO_SCALE_CHILDREN_Y(),

  /**
   * 窗口大小与设计时大小不同时，是否自动调整子控件的宽度。
   *
   */
 AUTO_SCALE_CHILDREN_W = WIDGET_PROP_AUTO_SCALE_CHILDREN_W(),

  /**
   * 窗口大小与设计时大小不同时，是否自动调整子控件的高度。
   *
   */
 AUTO_SCALE_CHILDREN_H = WIDGET_PROP_AUTO_SCALE_CHILDREN_H(),

  /**
   * inputing。
   *
   */
 INPUTING = WIDGET_PROP_INPUTING(),

  /**
   * always on top。
   *
   */
 ALWAYS_ON_TOP = WIDGET_PROP_ALWAYS_ON_TOP(),

  /**
   * caret x。
   *
   */
 CARET_X = WIDGET_PROP_CARET_X(),

  /**
   * caret y。
   *
   */
 CARET_Y = WIDGET_PROP_CARET_Y(),

  /**
   * 脏矩形超出控件本身大小的最大范围。
   *
   */
 DIRTY_RECT_TOLERANCE = WIDGET_PROP_DIRTY_RECT_TOLERANCE(),

  /**
   * bidi type(rtl,ltr,auto,wrtl,wltr,lro,rlo)。
   *
   */
 BIDI = WIDGET_PROP_BIDI(),

  /**
   * Canvas。
   *
   */
 CANVAS = WIDGET_PROP_CANVAS(),

  /**
   * Canvas。
   *
   */
 LOCALIZE_OPTIONS = WIDGET_PROP_LOCALIZE_OPTIONS(),

  /**
   * Native Window。
   *
   */
 NATIVE_WINDOW = WIDGET_PROP_NATIVE_WINDOW(),

  /**
   * dialog highlight。
   *
   */
 HIGHLIGHT = WIDGET_PROP_HIGHLIGHT(),

  /**
   * slider中的bar的的宽度或高度。
   *
   */
 BAR_SIZE = WIDGET_PROP_BAR_SIZE(),

  /**
   * 不透明度。
   *
   */
 OPACITY = WIDGET_PROP_OPACITY(),

  /**
   * 最小宽度。
   *
   */
 MIN_W = WIDGET_PROP_MIN_W(),

  /**
   * 最大宽度。
   *
   */
 MAX_W = WIDGET_PROP_MAX_W(),

  /**
   * 根据子控件和文本自动调整大小。
   *
   */
 AUTO_ADJUST_SIZE = WIDGET_PROP_AUTO_ADJUST_SIZE(),

  /**
   * 窗口是否保持单例。
   *
   */
 SINGLE_INSTANCE = WIDGET_PROP_SINGLE_INSTANCE(),

  /**
   * 点击非focusable控件时，是否让当前焦点控件失去焦点。比如点击窗口空白区域，是否让编辑器失去焦点。
   *
   */
 STRONGLY_FOCUS = WIDGET_PROP_STRONGLY_FOCUS(),

  /**
   * 子控件布局参数。
   *
   */
 CHILDREN_LAYOUT = WIDGET_PROP_CHILDREN_LAYOUT(),

  /**
   * 子控件布局参数(过时)。
   *
   */
 LAYOUT = WIDGET_PROP_LAYOUT(),

  /**
   * 控件布局参数。
   *
   */
 SELF_LAYOUT = WIDGET_PROP_SELF_LAYOUT(),

  /**
   * layout宽度。
   *
   */
 LAYOUT_W = WIDGET_PROP_LAYOUT_W(),

  /**
   * layout高度。
   *
   */
 LAYOUT_H = WIDGET_PROP_LAYOUT_H(),

  /**
   * 虚拟宽度。
   *
   */
 VIRTUAL_W = WIDGET_PROP_VIRTUAL_W(),

  /**
   * 虚拟高度。
   *
   */
 VIRTUAL_H = WIDGET_PROP_VIRTUAL_H(),

  /**
   * 名称。
   *
   */
 NAME = WIDGET_PROP_NAME(),

  /**
   * 类型。
   *
   */
 TYPE = WIDGET_PROP_TYPE(),

  /**
   * 是否可以关闭。
   *
   */
 CLOSABLE = WIDGET_PROP_CLOSABLE(),

  /**
   * 鼠标指针。
   *
   */
 POINTER_CURSOR = WIDGET_PROP_POINTER_CURSOR(),

  /**
   * 值。
   *
   */
 VALUE = WIDGET_PROP_VALUE(),

  /**
   * CheckButton是否单选。
   *
   */
 RADIO = WIDGET_PROP_RADIO(),

  /**
   * 进度条反向显示。
   *
   */
 REVERSE = WIDGET_PROP_REVERSE(),

  /**
   * 长度。
   *
   */
 LENGTH = WIDGET_PROP_LENGTH(),

  /**
   * 自动换行。
   *
   */
 LINE_WRAP = WIDGET_PROP_LINE_WRAP(),

  /**
   * 是否允许单词中换行。
   *
   */
 WORD_WRAP = WIDGET_PROP_WORD_WRAP(),

  /**
   * 文本。
   *
   */
 TEXT = WIDGET_PROP_TEXT(),

  /**
   * 待翻译文本。
   *
   */
 TR_TEXT = WIDGET_PROP_TR_TEXT(),

  /**
   * style。
   *
   */
 STYLE = WIDGET_PROP_STYLE(),

  /**
   * 是否启用。
   *
   */
 ENABLE = WIDGET_PROP_ENABLE(),

  /**
   * 是否启用按键音等反馈。
   *
   */
 FEEDBACK = WIDGET_PROP_FEEDBACK(),

  /**
   * 是否启用floating布局。
   *
   */
 FLOATING = WIDGET_PROP_FLOATING(),

  /**
   * 边距。
   *
   */
 MARGIN = WIDGET_PROP_MARGIN(),

  /**
   * 间距。
   *
   */
 SPACING = WIDGET_PROP_SPACING(),

  /**
   * 左边距。
   *
   */
 LEFT_MARGIN = WIDGET_PROP_LEFT_MARGIN(),

  /**
   * 右边距。
   *
   */
 RIGHT_MARGIN = WIDGET_PROP_RIGHT_MARGIN(),

  /**
   * 顶边距。
   *
   */
 TOP_MARGIN = WIDGET_PROP_TOP_MARGIN(),

  /**
   * 底边距。
   *
   */
 BOTTOM_MARGIN = WIDGET_PROP_BOTTOM_MARGIN(),

  /**
   * 步长。
   *
   */
 STEP = WIDGET_PROP_STEP(),

  /**
   * 是否可见。
   *
   */
 VISIBLE = WIDGET_PROP_VISIBLE(),

  /**
   * 是否接受用户事件。
   *
   */
 SENSITIVE = WIDGET_PROP_SENSITIVE(),

  /**
   * 控件动画。
   *
   */
 ANIMATION = WIDGET_PROP_ANIMATION(),

  /**
   * 窗口动画。
   *
   */
 ANIM_HINT = WIDGET_PROP_ANIM_HINT(),

  /**
   * 窗口设置为全部大小。
   *
   */
 FULLSCREEN = WIDGET_PROP_FULLSCREEN(),

  /**
   * 禁用窗口动画。
   *
   */
 DISABLE_ANIM = WIDGET_PROP_DISABLE_ANIM(),

  /**
   * 打开窗口时的动画。
   *
   */
 OPEN_ANIM_HINT = WIDGET_PROP_OPEN_ANIM_HINT(),

  /**
   * 关闭窗口时的动画。
   *
   */
 CLOSE_ANIM_HINT = WIDGET_PROP_CLOSE_ANIM_HINT(),

  /**
   * 最小值。
   *
   */
 MIN = WIDGET_PROP_MIN(),

  /**
   * 软键盘上action按钮的文本。
   *
   */
 ACTION_TEXT = WIDGET_PROP_ACTION_TEXT(),

  /**
   * 提示信息。
   *
   */
 TIPS = WIDGET_PROP_TIPS(),

  /**
   * 需要翻译的提示信息。
   *
   */
 TR_TIPS = WIDGET_PROP_TR_TIPS(),

  /**
   * 输入类型。
   *
   */
 INPUT_TYPE = WIDGET_PROP_INPUT_TYPE(),

  /**
   * 自定义软键盘资源名称。
   *
   */
 KEYBOARD = WIDGET_PROP_KEYBOARD(),

  /**
   * 缺省获得焦点的子控件(可用控件名或类型)。
   *
   */
 DEFAULT_FOCUSED_CHILD = WIDGET_PROP_DEFAULT_FOCUSED_CHILD(),

  /**
   * 只读模式。
   *
   */
 READONLY = WIDGET_PROP_READONLY(),

  /**
   * 是否可取消。
   *
   */
 CANCELABLE = WIDGET_PROP_CANCELABLE(),

  /**
   * 密码是否可见。
   *
   */
 PASSWORD_VISIBLE = WIDGET_PROP_PASSWORD_VISIBLE(),

  /**
   * 是否处于active状态。
   *
   */
 ACTIVE = WIDGET_PROP_ACTIVE(),

  /**
   * 当前页。
   *
   */
 CURR_PAGE = WIDGET_PROP_CURR_PAGE(),

  /**
   * 页面最大个数。
   *
   */
 PAGE_MAX_NUMBER = WIDGET_PROP_PAGE_MAX_NUMBER(),

  /**
   * 是否为垂直模式。
   *
   */
 VERTICAL = WIDGET_PROP_VERTICAL(),

  /**
   * 是否显示文本。
   *
   */
 SHOW_TEXT = WIDGET_PROP_SHOW_TEXT(),

  /**
   * X方向的偏移。
   *
   */
 XOFFSET = WIDGET_PROP_XOFFSET(),

  /**
   * Y方向的偏移。
   *
   */
 YOFFSET = WIDGET_PROP_YOFFSET(),

  /**
   * 垂直对齐模式。
   *
   */
 ALIGN_V = WIDGET_PROP_ALIGN_V(),

  /**
   * 水平对齐模式。
   *
   */
 ALIGN_H = WIDGET_PROP_ALIGN_H(),

  /**
   * 是否自动播放或指定播放的时间。
   *
   */
 AUTO_PLAY = WIDGET_PROP_AUTO_PLAY(),

  /**
   * 是否循环播放或循环播放的次数。
   *
   */
 LOOP = WIDGET_PROP_LOOP(),

  /**
   * 是否启用自动更正功能。
   *
   */
 AUTO_FIX = WIDGET_PROP_AUTO_FIX(),

  /**
   * 编辑器在获得焦点时是否不选中文本。
   *
   */
 SELECT_NONE_WHEN_FOCUSED = WIDGET_PROP_SELECT_NONE_WHEN_FOCUSED(),

  /**
   * 编辑器在获得焦点时是否打开输入法。
   *
   */
 OPEN_IM_WHEN_FOCUSED = WIDGET_PROP_OPEN_IM_WHEN_FOCUSED(),

  /**
   * 编辑器在失去焦点时是否关闭输入法。
   *
   */
 CLOSE_IM_WHEN_BLURED = WIDGET_PROP_CLOSE_IM_WHEN_BLURED(),

  /**
   * X最小值。
   *
   */
 X_MIN = WIDGET_PROP_X_MIN(),

  /**
   * X最大值。
   *
   */
 X_MAX = WIDGET_PROP_X_MAX(),

  /**
   * Y最小值。
   *
   */
 Y_MIN = WIDGET_PROP_Y_MIN(),

  /**
   * Y最大值。
   *
   */
 Y_MAX = WIDGET_PROP_Y_MAX(),

  /**
   * 最大值。
   *
   */
 MAX = WIDGET_PROP_MAX(),

  /**
   * 让窗口管理器直接把按键发给自己。
   *
   */
 GRAB_KEYS = WIDGET_PROP_GRAB_KEYS(),

  /**
   * 行数或每行的高度。
   *
   */
 ROW = WIDGET_PROP_ROW(),

  /**
   * 控件状态。
   *
   */
 STATE_FOR_STYLE = WIDGET_PROP_STATE_FOR_STYLE(),

  /**
   * 窗体样式名称。
   *
   */
 THEME = WIDGET_PROP_THEME(),

  /**
   * window stage
   *
   */
 STAGE = WIDGET_PROP_STAGE(),

  /**
   * 图片管理器。
   *
   */
 IMAGE_MANAGER = WIDGET_PROP_IMAGE_MANAGER(),

  /**
   * 资源管理器。
   *
   */
 ASSETS_MANAGER = WIDGET_PROP_ASSETS_MANAGER(),

  /**
   * locale_info。
   *
   */
 LOCALE_INFO = WIDGET_PROP_LOCALE_INFO(),

  /**
   * 字体管理器。
   *
   */
 FONT_MANAGER = WIDGET_PROP_FONT_MANAGER(),

  /**
   * 窗口的窗体样式对象。
   *
   */
 THEME_OBJ = WIDGET_PROP_THEME_OBJ(),

  /**
   * 缺省的窗体样式对象。
   *
   */
 DEFAULT_THEME_OBJ = WIDGET_PROP_DEFAULT_THEME_OBJ(),

  /**
   * 项的宽度。
   *
   */
 ITEM_WIDTH = WIDGET_PROP_ITEM_WIDTH(),

  /**
   * 项的高度。
   *
   */
 ITEM_HEIGHT = WIDGET_PROP_ITEM_HEIGHT(),

  /**
   * 项的缺省高度。
   *
   */
 DEFAULT_ITEM_HEIGHT = WIDGET_PROP_DEFAULT_ITEM_HEIGHT(),

  /**
   * X方向是否可拖动。
   *
   */
 XSLIDABLE = WIDGET_PROP_XSLIDABLE(),

  /**
   * Y方向是否可拖动。
   *
   */
 YSLIDABLE = WIDGET_PROP_YSLIDABLE(),

  /**
   * 重复次数。
   *
   */
 REPEAT = WIDGET_PROP_REPEAT(),

  /**
   * 触发长按事件的时间(ms)。
   *
   */
 LONG_PRESS_TIME = WIDGET_PROP_LONG_PRESS_TIME(),

  /**
   * 是否启用长按。
   *
   */
 ENABLE_LONG_PRESS = WIDGET_PROP_ENABLE_LONG_PRESS(),

  /**
   * 是否启用点击穿透。
   *
   */
 CLICK_THROUGH = WIDGET_PROP_CLICK_THROUGH(),

  /**
   * 是否启用动画。
   *
   */
 ANIMATABLE = WIDGET_PROP_ANIMATABLE(),

  /**
   * 是否自动隐藏。
   *
   */
 AUTO_HIDE = WIDGET_PROP_AUTO_HIDE(),

  /**
   * 是否自动隐藏滚动条。
   *
   */
 AUTO_HIDE_SCROLL_BAR = WIDGET_PROP_AUTO_HIDE_SCROLL_BAR(),

  /**
   * 图片名称。
   *
   */
 IMAGE = WIDGET_PROP_IMAGE(),

  /**
   * 显示格式。
   *
   */
 FORMAT = WIDGET_PROP_FORMAT(),

  /**
   * 图片绘制类型。
   *
   */
 DRAW_TYPE = WIDGET_PROP_DRAW_TYPE(),

  /**
   * 是否可选择。
   *
   */
 SELECTABLE = WIDGET_PROP_SELECTABLE(),

  /**
   * 是否可点击。
   *
   */
 CLICKABLE = WIDGET_PROP_CLICKABLE(),

  /**
   * X方向缩放比例。
   *
   */
 SCALE_X = WIDGET_PROP_SCALE_X(),

  /**
   * Y方向缩放比例。
   *
   */
 SCALE_Y = WIDGET_PROP_SCALE_Y(),

  /**
   * x锚点。
   *
   */
 ANCHOR_X = WIDGET_PROP_ANCHOR_X(),

  /**
   * y锚点。
   *
   */
 ANCHOR_Y = WIDGET_PROP_ANCHOR_Y(),

  /**
   * 选中角度(幅度)
   *
   */
 ROTATION = WIDGET_PROP_ROTATION(),

  /**
   * 紧凑模式。
   *
   */
 COMPACT = WIDGET_PROP_COMPACT(),

  /**
   * 是否支持滚动。
   *
   */
 SCROLLABLE = WIDGET_PROP_SCROLLABLE(),

  /**
   * 图标名称。
   *
   */
 ICON = WIDGET_PROP_ICON(),

  /**
   * 选项集合。
   *
   */
 OPTIONS = WIDGET_PROP_OPTIONS(),

  /**
   * 是否被选中。
   *
   */
 SELECTED = WIDGET_PROP_SELECTED(),

  /**
   * 是否被勾选。
   *
   */
 CHECKED = WIDGET_PROP_CHECKED(),

  /**
   * active状态下的图标。
   *
   */
 ACTIVE_ICON = WIDGET_PROP_ACTIVE_ICON(),

  /**
   * 动态加载UI名字。
   *
   */
 LOAD_UI = WIDGET_PROP_LOAD_UI(),

  /**
   * 要打开窗口的名称。
   *
   */
 OPEN_WINDOW = WIDGET_PROP_OPEN_WINDOW(),

  /**
   * 被选中项的索引。
   *
   */
 SELECTED_INDEX = WIDGET_PROP_SELECTED_INDEX(),

  /**
   * 点击窗口时关闭窗口。
   *
   */
 CLOSE_WHEN_CLICK = WIDGET_PROP_CLOSE_WHEN_CLICK(),

  /**
   * 点击窗口外部时关闭窗口。
   *
   */
 CLOSE_WHEN_CLICK_OUTSIDE = WIDGET_PROP_CLOSE_WHEN_CLICK_OUTSIDE(),

  /**
   * 超时后关闭窗口。
   *
   */
 CLOSE_WHEN_TIMEOUT = WIDGET_PROP_CLOSE_WHEN_TIMEOUT(),

  /**
   * 行间距。
   *
   */
 LINE_GAP = WIDGET_PROP_LINE_GAP(),

  /**
   * 背景颜色(仅仅使用于color tile)。
   *
   */
 BG_COLOR = WIDGET_PROP_BG_COLOR(),

  /**
   * 边框颜色(仅仅使用于color tile)。
   *
   */
 BORDER_COLOR = WIDGET_PROP_BORDER_COLOR(),

  /**
   * 延迟时间(毫秒)
   *
   */
 DELAY = WIDGET_PROP_DELAY(),

  /**
   * 是否为键盘。
   *
   */
 IS_KEYBOARD = WIDGET_PROP_IS_KEYBOARD(),

  /**
   * 是否为焦点控件。
   *
   */
 FOCUSED = WIDGET_PROP_FOCUSED(),

  /**
   * (过时请用focused)。
   *
   */
 FOCUS = WIDGET_PROP_FOCUS(),

  /**
   * 是否支持焦点停留。
   *
   */
 FOCUSABLE = WIDGET_PROP_FOCUSABLE(),

  /**
   * 是否支持焦点状态(如果希望style支持焦点状态，但又不希望焦点停留，可用本属性)。
   *
   */
 WITH_FOCUS_STATE = WIDGET_PROP_WITH_FOCUS_STATE(),

  /**
   * 将焦点移到前一个的键值。
   *
   */
 MOVE_FOCUS_PREV_KEY = WIDGET_PROP_MOVE_FOCUS_PREV_KEY(),

  /**
   * 将焦点移到后一个的键值。
   *
   */
 MOVE_FOCUS_NEXT_KEY = WIDGET_PROP_MOVE_FOCUS_NEXT_KEY(),

  /**
   * 将焦点向上移动的键值。
   *
   */
 MOVE_FOCUS_UP_KEY = WIDGET_PROP_MOVE_FOCUS_UP_KEY(),

  /**
   * 将焦点向下移动的键值。
   *
   */
 MOVE_FOCUS_DOWN_KEY = WIDGET_PROP_MOVE_FOCUS_DOWN_KEY(),

  /**
   * 将焦点向左移动的键值。
   *
   */
 MOVE_FOCUS_LEFT_KEY = WIDGET_PROP_MOVE_FOCUS_LEFT_KEY(),

  /**
   * 将焦点向右移动的键值。
   *
   */
 MOVE_FOCUS_RIGHT_KEY = WIDGET_PROP_MOVE_FOCUS_RIGHT_KEY(),
};


/**
 * 控件的类型。
 *
 */
export enum TWidgetType {

  /**
   * 无特殊类型。
   *
   */
 NONE = WIDGET_TYPE_NONE(),

  /**
   * 窗口管理器。
   *
   */
 WINDOW_MANAGER = WIDGET_TYPE_WINDOW_MANAGER(),

  /**
   * 普通窗口。
   *
   */
 NORMAL_WINDOW = WIDGET_TYPE_NORMAL_WINDOW(),

  /**
   * overlay窗口。
   *
   */
 OVERLAY = WIDGET_TYPE_OVERLAY(),

  /**
   * 工具条。
   *
   */
 TOOL_BAR = WIDGET_TYPE_TOOL_BAR(),

  /**
   * 对话框。
   *
   */
 DIALOG = WIDGET_TYPE_DIALOG(),

  /**
   * 弹出窗口。
   *
   */
 POPUP = WIDGET_TYPE_POPUP(),

  /**
   * system bar window
   *
   */
 SYSTEM_BAR = WIDGET_TYPE_SYSTEM_BAR(),

  /**
   * system bar window ato bottom
   *
   */
 SYSTEM_BAR_BOTTOM = WIDGET_TYPE_SYSTEM_BAR_BOTTOM(),

  /**
   * 精灵窗口。
   *
   */
 SPRITE = WIDGET_TYPE_SPRITE(),

  /**
   * 键盘窗口。
   *
   */
 KEYBOARD = WIDGET_TYPE_KEYBOARD(),

  /**
   * 拖放状态窗口。
   *
   */
 DND = WIDGET_TYPE_DND(),

  /**
   * 文本控件。
   *
   */
 LABEL = WIDGET_TYPE_LABEL(),

  /**
   * 按钮控件。
   *
   */
 BUTTON = WIDGET_TYPE_BUTTON(),

  /**
   * 图片控件。
   *
   */
 IMAGE = WIDGET_TYPE_IMAGE(),

  /**
   * 文本编辑控件。
   *
   */
 EDIT = WIDGET_TYPE_EDIT(),

  /**
   * 进度条控件。
   *
   */
 PROGRESS_BAR = WIDGET_TYPE_PROGRESS_BAR(),

  /**
   * 分组控件。
   *
   */
 GROUP_BOX = WIDGET_TYPE_GROUP_BOX(),

  /**
   * 多选按钮控件。
   *
   */
 CHECK_BUTTON = WIDGET_TYPE_CHECK_BUTTON(),

  /**
   * 单选按钮控件。
   *
   */
 RADIO_BUTTON = WIDGET_TYPE_RADIO_BUTTON(),

  /**
   * 对话框标题。
   *
   */
 DIALOG_TITLE = WIDGET_TYPE_DIALOG_TITLE(),

  /**
   * 对话框客户区域。
   *
   */
 DIALOG_CLIENT = WIDGET_TYPE_DIALOG_CLIENT(),

  /**
   * 滑块控件。
   *
   */
 SLIDER = WIDGET_TYPE_SLIDER(),

  /**
   * 视图控件。
   *
   */
 VIEW = WIDGET_TYPE_VIEW(),

  /**
   * 下拉选择框控件。
   *
   */
 COMBO_BOX = WIDGET_TYPE_COMBO_BOX(),

  /**
   * 下拉选择框的列表项控件。
   *
   */
 COMBO_BOX_ITEM = WIDGET_TYPE_COMBO_BOX_ITEM(),

  /**
   * 滑动视图控件。
   *
   */
 SLIDE_VIEW = WIDGET_TYPE_SLIDE_VIEW(),

  /**
   * 滑动视图的指示器控件。
   *
   */
 SLIDE_INDICATOR = WIDGET_TYPE_SLIDE_INDICATOR(),

  /**
   * 滑动视图的指示器控件（圆弧显示）。
   *
   */
 SLIDE_INDICATOR_ARC = WIDGET_TYPE_SLIDE_INDICATOR_ARC(),

  /**
   * 多页控件。
   *
   */
 PAGES = WIDGET_TYPE_PAGES(),

  /**
   * 标签按钮控件。
   *
   */
 TAB_BUTTON = WIDGET_TYPE_TAB_BUTTON(),

  /**
   * 标签控件。
   *
   */
 TAB_CONTROL = WIDGET_TYPE_TAB_CONTROL(),

  /**
   * 标签按钮分组控件。
   *
   */
 TAB_BUTTON_GROUP = WIDGET_TYPE_TAB_BUTTON_GROUP(),

  /**
   * 按钮分组控件。
   *
   */
 BUTTON_GROUP = WIDGET_TYPE_BUTTON_GROUP(),

  /**
   * 候选字控件。
   *
   */
 CANDIDATES = WIDGET_TYPE_CANDIDATES(),

  /**
   * 数值编辑控件。
   *
   */
 SPIN_BOX = WIDGET_TYPE_SPIN_BOX(),

  /**
   * 拖动块控件。
   *
   */
 DRAGGER = WIDGET_TYPE_DRAGGER(),

  /**
   * 滚动条控件。
   *
   */
 SCROLL_BAR = WIDGET_TYPE_SCROLL_BAR(),

  /**
   * 桌面版滚动条控件。
   *
   */
 SCROLL_BAR_DESKTOP = WIDGET_TYPE_SCROLL_BAR_DESKTOP(),

  /**
   * 移动版滚动条控件。
   *
   */
 SCROLL_BAR_MOBILE = WIDGET_TYPE_SCROLL_BAR_MOBILE(),

  /**
   * 滚动视图控件。
   *
   */
 SCROLL_VIEW = WIDGET_TYPE_SCROLL_VIEW(),

  /**
   * 列表视图控件。
   *
   */
 LIST_VIEW = WIDGET_TYPE_LIST_VIEW(),

  /**
   * 水平列表视图控件。
   *
   */
 LIST_VIEW_H = WIDGET_TYPE_LIST_VIEW_H(),

  /**
   * 列表项控件。
   *
   */
 LIST_ITEM = WIDGET_TYPE_LIST_ITEM(),

  /**
   * 颜色选择器控件。
   *
   */
 COLOR_PICKER = WIDGET_TYPE_COLOR_PICKER(),

  /**
   * 颜色选择器组件控件。
   *
   */
 COLOR_COMPONENT = WIDGET_TYPE_COLOR_COMPONENT(),

  /**
   * 颜色块控件。
   *
   */
 COLOR_TILE = WIDGET_TYPE_COLOR_TILE(),

  /**
   * 裁剪控件。
   *
   */
 CLIP_VIEW = WIDGET_TYPE_CLIP_VIEW(),

  /**
   * 富文本控件。
   *
   */
 RICH_TEXT = WIDGET_TYPE_RICH_TEXT(),

  /**
   * AppBar控件。
   *
   */
 APP_BAR = WIDGET_TYPE_APP_BAR(),

  /**
   * 网格控件。
   *
   */
 GRID = WIDGET_TYPE_GRID(),

  /**
   * 网格项目控件。
   *
   */
 GRID_ITEM = WIDGET_TYPE_GRID_ITEM(),

  /**
   * 行控件。
   *
   */
 ROW = WIDGET_TYPE_ROW(),

  /**
   * 列控件。
   *
   */
 COLUMN = WIDGET_TYPE_COLUMN(),

  /**
   * 电阻屏校准窗口。
   *
   */
 CALIBRATION_WIN = WIDGET_TYPE_CALIBRATION_WIN(),
};


/**
 * 窗口的生命周期常量定义。
 *
 */
export enum TWindowStage {

  /**
   * 初始状态。
   *
   */
 NONE = WINDOW_STAGE_NONE(),

  /**
   * 从UI资源加载完成。
   *
   */
 LOADED = WINDOW_STAGE_LOADED(),

  /**
   * 创建完成。
   *
   */
 CREATED = WINDOW_STAGE_CREATED(),

  /**
   * 窗口已经打开(窗口打开动画完成后)
   *
   */
 OPENED = WINDOW_STAGE_OPENED(),

  /**
   * 窗口已关闭。
   *
   */
 CLOSED = WINDOW_STAGE_CLOSED(),

  /**
   * 窗口挂起状态。
   *
   */
 SUSPEND = WINDOW_STAGE_SUSPEND(),
};


/**
 * 窗口的closable常量定义。
 *
 */
export enum TWindowClosable {

  /**
   * 窗口可关闭。
   *
   */
 YES = WINDOW_CLOSABLE_YES(),

  /**
   * 窗口不可关闭。
   *
   */
 NO = WINDOW_CLOSABLE_NO(),

  /**
   * 窗口需要确认后才能关闭。
   *
   */
 CONFIRM = WINDOW_CLOSABLE_CONFIRM(),
};


/**
 * 控件状态常量定义。
 *
 *这里指定常用的状态值，扩展控件可以在自己的头文件中定义私有的状态。
 *
 */
export enum TWidgetState {

  /**
   * 无效状态。
   *
   */
 NONE = WIDGET_STATE_NONE(),

  /**
   * 正常状态。
   *
   */
 NORMAL = WIDGET_STATE_NORMAL(),

  /**
   * 内容被修改的状态。
   *
   */
 CHANGED = WIDGET_STATE_CHANGED(),

  /**
   * 指针按下状态。
   *
   */
 PRESSED = WIDGET_STATE_PRESSED(),

  /**
   * 指针悬浮状态。
   *
   */
 OVER = WIDGET_STATE_OVER(),

  /**
   * 禁用状态。
   *
   */
 DISABLE = WIDGET_STATE_DISABLE(),

  /**
   * 聚焦状态。
   *
   */
 FOCUSED = WIDGET_STATE_FOCUSED(),

  /**
   * 勾选状态。
   *
   */
 CHECKED = WIDGET_STATE_CHECKED(),

  /**
   * 没勾选状态。
   *
   */
 UNCHECKED = WIDGET_STATE_UNCHECKED(),

  /**
   * 编辑器无内容状态。
   *
   */
 EMPTY = WIDGET_STATE_EMPTY(),

  /**
   * 编辑器无内容同时聚焦的状态。
   *
   */
 EMPTY_FOCUS = WIDGET_STATE_EMPTY_FOCUS(),

  /**
   * 输入错误状态。
   *
   */
 ERROR = WIDGET_STATE_ERROR(),

  /**
   * 选中状态。
   *
   */
 SELECTED = WIDGET_STATE_SELECTED(),

  /**
   * 正常状态(选中项)。
   *
   */
 NORMAL_OF_CHECKED = WIDGET_STATE_NORMAL_OF_CHECKED(),

  /**
   * 指针按下状态(选中项)。
   *
   */
 PRESSED_OF_CHECKED = WIDGET_STATE_PRESSED_OF_CHECKED(),

  /**
   * 指针悬浮状态(选中项)。
   *
   */
 OVER_OF_CHECKED = WIDGET_STATE_OVER_OF_CHECKED(),

  /**
   * 禁用状态(选中项)。
   *
   */
 DISABLE_OF_CHECKED = WIDGET_STATE_DISABLE_OF_CHECKED(),

  /**
   * 焦点状态(选中项)。
   *
   */
 FOCUSED_OF_CHECKED = WIDGET_STATE_FOCUSED_OF_CHECKED(),

  /**
   * 正常状态(当前项)。
   *
   */
 NORMAL_OF_ACTIVE = WIDGET_STATE_NORMAL_OF_ACTIVE(),

  /**
   * 指针按下状态(当前项)。
   *
   */
 PRESSED_OF_ACTIVE = WIDGET_STATE_PRESSED_OF_ACTIVE(),

  /**
   * 指针悬浮状态(当前项)。
   *
   */
 OVER_OF_ACTIVE = WIDGET_STATE_OVER_OF_ACTIVE(),

  /**
   * 禁用状态(当前项)。
   *
   */
 DISABLE_OF_ACTIVE = WIDGET_STATE_DISABLE_OF_ACTIVE(),

  /**
   * 焦点状态(当前项)。
   *
   */
 FOCUSED_OF_ACTIVE = WIDGET_STATE_FOCUSED_OF_ACTIVE(),
};


/**
 * 控件鼠标光标常量定义。
 *
 */
export enum TWidgetCursor {

  /**
   * 默认光标。
   *
   */
 CURSOR_DEFAULT = WIDGET_CURSOR_DEFAULT(),

  /**
   * 文本选择光标。
   *
   */
 CURSOR_EDIT = WIDGET_CURSOR_EDIT(),

  /**
   * 手指光标。
   *
   */
 CURSOR_HAND = WIDGET_CURSOR_HAND(),

  /**
   * 等待光标。
   *
   */
 CURSOR_WAIT = WIDGET_CURSOR_WAIT(),

  /**
   * 叉光标。
   *
   */
 CURSOR_CROSS = WIDGET_CURSOR_CROSS(),

  /**
   * Slashed circle or crossbones。
   *
   */
 CURSOR_NO = WIDGET_CURSOR_NO(),

  /**
   * Double arrow pointing northwest and southeast。
   *
   */
 CURSOR_SIZENWSE = WIDGET_CURSOR_SIZENWSE(),

  /**
   * Double arrow pointing northeast and southwest。
   *
   */
 CURSOR_SIZENESW = WIDGET_CURSOR_SIZENESW(),

  /**
   * Double arrow pointing west and east。
   *
   */
 CURSOR_SIZEWE = WIDGET_CURSOR_SIZEWE(),

  /**
   * Double arrow pointing north and south。
   *
   */
 CURSOR_SIZENS = WIDGET_CURSOR_SIZENS(),

  /**
   * Four pointed arrow pointing north, south, east, and west。
   *
   */
 CURSOR_SIZEALL = WIDGET_CURSOR_SIZEALL(),
};


/**
 * widget_t* button = button_create(win, 10, 10, 128, 30);
 *widget_set_text(button, L"OK");
 *widget_on(button, EVT_CLICK, on_click, NULL);
 *```
 *
 */
export class TWidget { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   this.nativeObj = nativeObj;
 }


  /**
   * 获取子控件的个数。
   * 
   *
   * @returns 子控件的个数。
   */
 countChildren() : number  {
    return widget_count_children(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 获取指定索引的子控件。
   * 
   * @param index 索引。
   *
   * @returns 子控件。
   */
 getChild(index : number) : TWidget  {
    return new TWidget(widget_get_child(this != null ? (this.nativeObj || this) : null, index));
 }


  /**
   * 获取当前窗口中的焦点控件。
   * 
   *
   * @returns 焦点控件。
   */
 getFocusedWidget() : TWidget  {
    return new TWidget(widget_get_focused_widget(this != null ? (this.nativeObj || this) : null));
 }


  /**
   * 获取原生窗口对象。
   * 
   *
   * @returns 原生窗口对象。
   */
 getNativeWindow() : TNativeWindow  {
    return new TNativeWindow(widget_get_native_window(this != null ? (this.nativeObj || this) : null));
 }


  /**
   * 获取控件在父控件中的索引编号。
   * 
   *
   * @returns 在父控件中的索引编号。
   */
 indexOf() : number  {
    return widget_index_of(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 关闭控件所在的窗口。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 closeWindow() : TRet  {
    return widget_close_window(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 关闭控件所在的窗口。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 closeWindowForce() : TRet  {
    return widget_close_window_force(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 请求返回到前一个窗口。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 back() : TRet  {
    return widget_back(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 请求返回到home窗口。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 backToHome() : TRet  {
    return widget_back_to_home(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 移动控件。
   * 
   * @param x x坐标
   * @param y y坐标
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 move(x : number, y : number) : TRet  {
    return widget_move(this != null ? (this.nativeObj || this) : null, x, y);
 }


  /**
   * 调整控件的大小。
   * 
   * @param w 宽度
   * @param h 高度
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 resize(w : number, h : number) : TRet  {
    return widget_resize(this != null ? (this.nativeObj || this) : null, w, h);
 }


  /**
   * 移动控件并调整控件的大小。
   * 
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 moveResize(x : number, y : number, w : number, h : number) : TRet  {
    return widget_move_resize(this != null ? (this.nativeObj || this) : null, x, y, w, h);
 }


  /**
   * 设置控件的值。
   *只是对widget\_set\_prop的包装，值的意义由子类控件决定。
   * 
   * @param value 值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setValue(value : any) : TRet  {
    return widget_set_value(this != null ? (this.nativeObj || this) : null, value);
 }


  /**
   * 设置控件的值(以动画形式变化到指定的值)。
   *只是对widget\_set\_prop的包装，值的意义由子类控件决定。
   * 
   * @param value 值。
   * @param duration 动画持续时间(毫秒)。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 animateValueTo(value : any, duration : number) : TRet  {
    return widget_animate_value_to(this != null ? (this.nativeObj || this) : null, value, duration);
 }


  /**
   * 增加控件的值。
   *只是对widget\_set\_prop的包装，值的意义由子类控件决定。
   * 
   * @param delta 增量。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 addValue(delta : number) : TRet  {
    return widget_add_value(this != null ? (this.nativeObj || this) : null, delta);
 }


  /**
   * 查询指定的style是否存在。
   * 
   * @param style_name style的名称（如果为 NULL，则默认为 default）。
   * @param state_name state的名称（如果为 NULL，则默认为 normal）。
   *
   * @returns 存在返回 TRUE，不存在返回 FALSE。
   */
 isStyleExist(style_name : string, state_name : string) : boolean  {
    return widget_is_style_exist(this != null ? (this.nativeObj || this) : null, style_name, state_name);
 }


  /**
   * 启用指定的style。
   * 
   * @param style style的名称。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 useStyle(style : string) : TRet  {
    return widget_use_style(this != null ? (this.nativeObj || this) : null, style);
 }


  /**
   * 设置控件的文本。
   *只是对widget\_set\_prop的包装，文本的意义由子类控件决定。
   * 
   * @param text 文本。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setText(text : string) : TRet  {
    return widget_set_text_utf8(this != null ? (this.nativeObj || this) : null, text);
 }


  /**
   * 设置子控件的文本。
   *只是对widget\_set\_prop的包装，文本的意义由子类控件决定。
   * 
   * @param name 子控件的名称。
   * @param text 文本。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setChildText(name : string, text : string) : TRet  {
    return widget_set_child_text_utf8(this != null ? (this.nativeObj || this) : null, name, text);
 }


  /**
   * 用一个浮点数去设置子控件的文本。
   *只是对widget\_set\_prop的包装，文本的意义由子类控件决定。
   * 
   * @param name 子控件的名称。
   * @param format 格式字符串(如："%2.2lf")。
   * @param value 浮点数值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setChildTextWithDouble(name : string, format : string, value : any) : TRet  {
    return widget_set_child_text_with_double(this != null ? (this.nativeObj || this) : null, name, format, value);
 }


  /**
   * 用一个整数去设置子控件的文本。
   *只是对widget\_set\_prop的包装，文本的意义由子类控件决定。
   * 
   * @param name 子控件的名称。
   * @param format 格式字符串(如："%d")。
   * @param value 值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setChildTextWithInt(name : string, format : string, value : any) : TRet  {
    return widget_set_child_text_with_int(this != null ? (this.nativeObj || this) : null, name, format, value);
 }


  /**
   * 获取翻译之后的文本，然后调用widget_set_text。
   * 
   * @param text 文本。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setTrText(text : string) : TRet  {
    return widget_set_tr_text(this != null ? (this.nativeObj || this) : null, text);
 }


  /**
   * 获取控件的值。只是对widget\_get\_prop的包装，值的意义由子类控件决定。
   * 
   *
   * @returns 返回值。
   */
 getValue() : number  {
    return widget_get_value(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 获取控件enable属性值。
   * 
   *
   * @returns 返回enable。
   */
 getEnable() : boolean  {
    return widget_get_enable(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 获取控件floating属性值。
   * 
   *
   * @returns 返回floating。
   */
 getFloating() : boolean  {
    return widget_get_floating(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 获取控件auto_adjust_size属性值。
   * 
   *
   * @returns 返回auto_adjust_size。
   */
 getAutoAdjustSize() : boolean  {
    return widget_get_auto_adjust_size(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 获取控件with_focus_state属性值。
   * 
   *
   * @returns 返回with_focus_state。
   */
 getWithFocusState() : boolean  {
    return widget_get_with_focus_state(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 获取控件focusable属性值。
   * 
   *
   * @returns 返回focusable。
   */
 getFocusable() : boolean  {
    return widget_get_focusable(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 获取控件sensitive属性值。
   * 
   *
   * @returns 返回sensitive。
   */
 getSensitive() : boolean  {
    return widget_get_sensitive(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 获取控件visible属性值。
   * 
   *
   * @returns 返回visible。
   */
 getVisible() : boolean  {
    return widget_get_visible(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 获取控件feedback属性值。
   * 
   *
   * @returns 返回feedback。
   */
 getFeedback() : boolean  {
    return widget_get_feedback(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * str_t str;
   *str_init(&str, 0);
   *str_from_wstr(&str, widget_get_text(target));
   *log_debug("%s: %s\n", target->name, str.str);
   *str_reset(&str);
   *```
   * 
   *
   * @returns 返回文本。
   */
 getText() : any  {
    return widget_get_text(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 设置控件的名称。
   * 
   * @param name 名称。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setName(name : string) : TRet  {
    return widget_set_name(this != null ? (this.nativeObj || this) : null, name);
 }


  /**
   * 设置theme的名称，用于动态切换主题。名称与当前主题名称相同，则重新加载全部资源。
   *
   *> 目前只支持带有文件系统的平台。
   * 
   * @param name 主题的名称。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setTheme(name : string) : TRet  {
    return widget_set_theme(this != null ? (this.nativeObj || this) : null, name);
 }


  /**
   * 设置鼠标指针的图片名。
   * 
   * @param cursor 图片名称(无扩展名)。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setPointerCursor(cursor : string) : TRet  {
    return widget_set_pointer_cursor(this != null ? (this.nativeObj || this) : null, cursor);
 }


  /**
   * 设置控件的动画参数(仅用于在UI文件使用)。
   *请参考[控件动画](https://github.com/zlgopen/awtk/blob/master/docs/widget_animator.md)
   * 
   * @param animation 动画参数。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setAnimation(animation : string) : TRet  {
    return widget_set_animation(this != null ? (this.nativeObj || this) : null, animation);
 }


  /**
   * 创建动画。
   *请参考[控件动画](https://github.com/zlgopen/awtk/blob/master/docs/widget_animator.md)
   *
   ** 除非指定auto_start=false，动画创建后自动启动。
   ** 除非指定auto_destroy=false，动画播放完成后自动销毁。
   * 
   * @param animation 动画参数。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 createAnimator(animation : string) : TRet  {
    return widget_create_animator(this != null ? (this.nativeObj || this) : null, animation);
 }


  /**
   * 播放动画。
   *请参考[控件动画](https://github.com/zlgopen/awtk/blob/master/docs/widget_animator.md)
   *
   ** 1.widget为NULL时，播放所有名称为name的动画。
   ** 2.name为NULL时，播放所有widget相关的动画。
   ** 3.widget和name均为NULL，播放所有动画。
   * 
   * @param name 动画名称。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 startAnimator(name : string) : TRet  {
    return widget_start_animator(this != null ? (this.nativeObj || this) : null, name);
 }


  /**
   * 设置动画的时间倍率，<0: 时间倒退，<1: 时间变慢，>1 时间变快。
   *请参考[控件动画](https://github.com/zlgopen/awtk/blob/master/docs/widget_animator.md)
   *
   ** 1.widget为NULL时，设置所有名称为name的动画的时间倍率。
   ** 2.name为NULL时，设置所有widget相关的动画的时间倍率。
   ** 3.widget和name均为NULL，设置所有动画的时间倍率。
   * 
   * @param name 动画名称。
   * @param time_scale 时间倍率。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setAnimatorTimeScale(name : string, time_scale : number) : TRet  {
    return widget_set_animator_time_scale(this != null ? (this.nativeObj || this) : null, name, time_scale);
 }


  /**
   * 暂停动画。
   *请参考[控件动画](https://github.com/zlgopen/awtk/blob/master/docs/widget_animator.md)
   *
   ** 1.widget为NULL时，暂停所有名称为name的动画。
   ** 2.name为NULL时，暂停所有widget相关的动画。
   ** 3.widget和name均为NULL，暂停所有动画。
   * 
   * @param name 动画名称。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 pauseAnimator(name : string) : TRet  {
    return widget_pause_animator(this != null ? (this.nativeObj || this) : null, name);
 }


  /**
   * 停止动画(控件的相应属性回归原位)。
   *请参考[控件动画](https://github.com/zlgopen/awtk/blob/master/docs/widget_animator.md)
   *
   ** 1.widget为NULL时，停止所有名称为name的动画。
   ** 2.name为NULL时，停止所有widget相关的动画。
   ** 3.widget和name均为NULL，停止所有动画。
   * 
   * @param name 动画名称。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 stopAnimator(name : string) : TRet  {
    return widget_stop_animator(this != null ? (this.nativeObj || this) : null, name);
 }


  /**
   * 销毁动画。
   *请参考[控件动画](https://github.com/zlgopen/awtk/blob/master/docs/widget_animator.md)
   *
   ** 1.widget为NULL时，销毁所有名称为name的动画。
   ** 2.name为NULL时，销毁所有widget相关的动画。
   ** 3.widget和name均为NULL，销毁所有动画。
   * 
   * @param name 动画名称。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 destroyAnimator(name : string) : TRet  {
    return widget_destroy_animator(this != null ? (this.nativeObj || this) : null, name);
 }


  /**
   * 设置控件的可用性。
   * 
   * @param enable 是否可用性。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setEnable(enable : boolean) : TRet  {
    return widget_set_enable(this != null ? (this.nativeObj || this) : null, enable);
 }


  /**
   * 设置控件是否启用反馈。
   * 
   * @param feedback 是否启用反馈。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setFeedback(feedback : boolean) : TRet  {
    return widget_set_feedback(this != null ? (this.nativeObj || this) : null, feedback);
 }


  /**
   * 设置控件是否根据子控件和文本自动调整控件自身大小。
   * 
   * @param auto_adjust_size 是否根据子控件和文本自动调整控件自身大小。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setAutoAdjustSize(auto_adjust_size : boolean) : TRet  {
    return widget_set_auto_adjust_size(this != null ? (this.nativeObj || this) : null, auto_adjust_size);
 }


  /**
   * 设置控件的floating标志。
   *> floating的控件不受父控件的子控件布局参数的影响。
   * 
   * @param floating 是否启用floating布局。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setFloating(floating : boolean) : TRet  {
    return widget_set_floating(this != null ? (this.nativeObj || this) : null, floating);
 }


  /**
   * 设置控件是否获得焦点。
   * 
   * @param focused 是否获得焦点。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setFocused(focused : boolean) : TRet  {
    return widget_set_focused(this != null ? (this.nativeObj || this) : null, focused);
 }


  /**
   * 设置控件是否可获得焦点。
   * 
   * @param focusable 是否可获得焦点。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setFocusable(focusable : boolean) : TRet  {
    return widget_set_focusable(this != null ? (this.nativeObj || this) : null, focusable);
 }


  /**
   * 设置控件的状态。
   * 
   * @param state 状态(必须为真正的常量字符串，在widget的整个生命周期有效)。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setState(state : string) : TRet  {
    return widget_set_state(this != null ? (this.nativeObj || this) : null, state);
 }


  /**
   * 设置控件的不透明度。
   *
   *>在嵌入式平台，半透明效果会使性能大幅下降，请谨慎使用。
   * 
   * @param opacity 不透明度(取值0-255，0表示完全透明，255表示完全不透明)。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setOpacity(opacity : number) : TRet  {
    return widget_set_opacity(this != null ? (this.nativeObj || this) : null, opacity);
 }


  /**
   * 设置控件脏矩形超出控件本身大小的最大范围(一般不用指定)。
   * 
   * @param dirty_rect_tolerance 控件脏脏矩形超出控件本身大小的最大范。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setDirtyRectTolerance(dirty_rect_tolerance : number) : TRet  {
    return widget_set_dirty_rect_tolerance(this != null ? (this.nativeObj || this) : null, dirty_rect_tolerance);
 }


  /**
   * 销毁全部子控件。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 destroyChildren() : TRet  {
    return widget_destroy_children(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 加入一个子控件。
   * 
   * @param child 子控件对象。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 addChild(child : TWidget) : TRet  {
    return widget_add_child(this != null ? (this.nativeObj || this) : null, child != null ? (child.nativeObj || child) : null);
 }


  /**
   * 移出指定的子控件(并不销毁)。
   * 
   * @param child 子控件对象。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 removeChild(child : TWidget) : TRet  {
    return widget_remove_child(this != null ? (this.nativeObj || this) : null, child != null ? (child.nativeObj || child) : null);
 }


  /**
   * 插入子控件到指定的位置。
   * 
   * @param index 位置序数(大于等于总个数，则放到最后)。
   * @param child 子控件对象。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 insertChild(index : number, child : TWidget) : TRet  {
    return widget_insert_child(this != null ? (this.nativeObj || this) : null, index, child != null ? (child.nativeObj || child) : null);
 }


  /**
   * 调整控件在父控件中的位置序数。
   * 
   * @param index 位置序数(大于等于总个数，则放到最后)。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 restack(index : number) : TRet  {
    return widget_restack(this != null ? (this.nativeObj || this) : null, index);
 }


  /**
   * 查找指定名称的子控件(同widget_lookup(widget, name, FALSE))。
   * 
   * @param name 子控件的名称。
   *
   * @returns 子控件或NULL。
   */
 child(name : string) : TWidget  {
    return new TWidget(widget_child(this != null ? (this.nativeObj || this) : null, name));
 }


  /**
   * 查找指定名称的子控件(返回第一个)。
   * 
   * @param name 子控件的名称。
   * @param recursive 是否递归查找全部子控件。
   *
   * @returns 子控件或NULL。
   */
 lookup(name : string, recursive : boolean) : TWidget  {
    return new TWidget(widget_lookup(this != null ? (this.nativeObj || this) : null, name, recursive));
 }


  /**
   * 查找指定类型的子控件(返回第一个)。
   * 
   * @param type 子控件的名称。
   * @param recursive 是否递归查找全部子控件。
   *
   * @returns 子控件或NULL。
   */
 lookupByType(type : string, recursive : boolean) : TWidget  {
    return new TWidget(widget_lookup_by_type(this != null ? (this.nativeObj || this) : null, type, recursive));
 }


  /**
   * 设置控件的可见性。
   * 
   * @param visible 是否可见。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setVisible(visible : boolean) : TRet  {
    return widget_set_visible(this != null ? (this.nativeObj || this) : null, visible);
 }


  /**
   * 设置控件的可见性(不触发repaint和relayout)。
   * 
   * @param visible 是否可见。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setVisibleOnly(visible : boolean) : TRet  {
    return widget_set_visible_only(this != null ? (this.nativeObj || this) : null, visible);
 }


  /**
   * 设置控件是否接受用户事件。
   * 
   * @param sensitive 是否接受用户事件。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setSensitive(sensitive : boolean) : TRet  {
    return widget_set_sensitive(this != null ? (this.nativeObj || this) : null, sensitive);
 }


  /**
   * widget_t* ok = button_create(win, 10, 10, 80, 30);
   *widget_on(ok, EVT_CLICK, on_click, NULL);
   *
   *```
   * 
   * @param type 事件类型。
   * @param on_event 事件处理函数。
   * @param ctx 事件处理函数上下文。
   *
   * @returns 返回id，用于widget_off。
   */
 on(type : TEventType, on_event : Function, ctx : any) : number  {
    return widget_on(this != null ? (this.nativeObj || this) : null, type, on_event, ctx);
 }


  /**
   * 注销指定事件的处理函数。
   * 
   * @param id widget_on返回的ID。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 off(id : number) : TRet  {
    return widget_off(this != null ? (this.nativeObj || this) : null, id);
 }


  /**
   * 请求强制重绘控件。
   * 
   * @param r 矩形对象(widget本地坐标)。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 invalidateForce(r : TRect) : TRet  {
    return widget_invalidate_force(this != null ? (this.nativeObj || this) : null, r != null ? (r.nativeObj || r) : null);
 }


  /**
   * 设置字符串格式的属性。
   * 
   * @param name 属性的名称。
   * @param v 属性的值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setPropStr(name : string, v : string) : TRet  {
    return widget_set_prop_str(this != null ? (this.nativeObj || this) : null, name, v);
 }


  /**
   * 获取字符串格式的属性。
   * 
   * @param name 属性的名称。
   * @param defval 缺省值。
   *
   * @returns 返回属性的值。
   */
 getPropStr(name : string, defval : string) : string  {
    return widget_get_prop_str(this != null ? (this.nativeObj || this) : null, name, defval);
 }


  /**
   * 设置指针格式的属性。
   * 
   * @param name 属性的名称。
   * @param v 属性的值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setPropPointer(name : string, v : any) : TRet  {
    return widget_set_prop_pointer(this != null ? (this.nativeObj || this) : null, name, v);
 }


  /**
   * 获取指针格式的属性。
   * 
   * @param name 属性的名称。
   *
   * @returns 返回属性的值。
   */
 getPropPointer(name : string) : any  {
    return widget_get_prop_pointer(this != null ? (this.nativeObj || this) : null, name);
 }


  /**
   * 设置整数格式的属性。
   * 
   * @param name 属性的名称。
   * @param v 属性的值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setPropInt(name : string, v : number) : TRet  {
    return widget_set_prop_int(this != null ? (this.nativeObj || this) : null, name, v);
 }


  /**
   * 获取整数格式的属性。
   * 
   * @param name 属性的名称。
   * @param defval 缺省值。
   *
   * @returns 返回属性的值。
   */
 getPropInt(name : string, defval : number) : number  {
    return widget_get_prop_int(this != null ? (this.nativeObj || this) : null, name, defval);
 }


  /**
   * 设置布尔格式的属性。
   * 
   * @param name 属性的名称。
   * @param v 属性的值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setPropBool(name : string, v : boolean) : TRet  {
    return widget_set_prop_bool(this != null ? (this.nativeObj || this) : null, name, v);
 }


  /**
   * 获取布尔格式的属性。
   * 
   * @param name 属性的名称。
   * @param defval 缺省值。
   *
   * @returns 返回属性的值。
   */
 getPropBool(name : string, defval : boolean) : boolean  {
    return widget_get_prop_bool(this != null ? (this.nativeObj || this) : null, name, defval);
 }


  /**
   * 判断当前控件所在的窗口是否已经打开。
   * 
   *
   * @returns 返回当前控件所在的窗口是否已经打开。
   */
 isWindowOpened() : boolean  {
    return widget_is_window_opened(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 判断窗口及子控件创建或加载是否完成。
   * 
   *
   * @returns 返回创建或加载是否完成。
   */
 isWindowCreated() : boolean  {
    return widget_is_window_created(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 判断当前控件是否是指定控件的父控件(包括非直系)。
   * 
   * @param child 控件对象。
   *
   * @returns 返回TRUE表示是，否则表示不是。
   */
 isParentOf(child : TWidget) : boolean  {
    return widget_is_parent_of(this != null ? (this.nativeObj || this) : null, child != null ? (child.nativeObj || child) : null);
 }


  /**
   * 判断当前控件是否是指定控件的直系父控件。
   * 
   * @param child 控件对象。
   *
   * @returns 返回TRUE表示是，否则表示不是。
   */
 isDirectParentOf(child : TWidget) : boolean  {
    return widget_is_direct_parent_of(this != null ? (this.nativeObj || this) : null, child != null ? (child.nativeObj || child) : null);
 }


  /**
   * 判断当前控件是否是窗口。
   * 
   *
   * @returns 返回当前控件是否是窗口。
   */
 isWindow() : boolean  {
    return widget_is_window(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 检查控件是否是system bar类型。
   * 
   *
   * @returns 返回FALSE表示不是，否则表示是。
   */
 isSystemBar() : boolean  {
    return widget_is_system_bar(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 检查控件是否是普通窗口类型。
   * 
   *
   * @returns 返回FALSE表示不是，否则表示是。
   */
 isNormalWindow() : boolean  {
    return widget_is_normal_window(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 检查控件是否是对话框类型。
   * 
   *
   * @returns 返回FALSE表示不是，否则表示是。
   */
 isDialog() : boolean  {
    return widget_is_dialog(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 检查控件是否是弹出窗口类型。
   * 
   *
   * @returns 返回FALSE表示不是，否则表示是。
   */
 isPopup() : boolean  {
    return widget_is_popup(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 检查控件是否是overlay窗口类型。
   * 
   *
   * @returns 返回FALSE表示不是，否则表示是。
   */
 isOverlay() : boolean  {
    return widget_is_overlay(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 检查控件弹出对话框控件是否已经打开了（而非挂起状态）。
   * 
   *
   * @returns 返回FALSE表示不是，否则表示是。
   */
 isOpenedDialog() : boolean  {
    return widget_is_opened_dialog(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 检查控件弹出窗口控件是否已经打开了（而非挂起状态）。
   * 
   *
   * @returns 返回FALSE表示不是，否则表示是。
   */
 isOpenedPopup() : boolean  {
    return widget_is_opened_popup(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * widget_set_prop_bool(group, WIDGET_PROP_IS_KEYBOARD, TRUE);
   *```
   * 
   *
   * @returns 返回FALSE表示不是，否则表示是。
   */
 isKeyboard() : boolean  {
    return widget_is_keyboard(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 判断当前控件是否是设计窗口。
   * 
   *
   * @returns 返回当前控件是否是设计窗口。
   */
 isDesigningWindow() : boolean  {
    return widget_is_designing_window(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 判断当前控件是否是窗口管理器。
   * 
   *
   * @returns 返回当前控件是否是窗口管理器。
   */
 isWindowManager() : boolean  {
    return widget_is_window_manager(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 遍历当前控件及子控件。
   * 
   * @param visit 遍历的回调函数。
   * @param ctx 回调函数的上下文。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 foreach(visit : Function, ctx : any) : TRet  {
    return widget_foreach(this != null ? (this.nativeObj || this) : null, visit, ctx);
 }


  /**
   * 获取当前控件所在的窗口。
   * 
   *
   * @returns 窗口对象。
   */
 getWindow() : TWidget  {
    return new TWidget(widget_get_window(this != null ? (this.nativeObj || this) : null));
 }


  /**
   * 获取当前的窗口管理器。
   * 
   *
   * @returns 窗口管理器对象。
   */
 getWindowManager() : TWidget  {
    return new TWidget(widget_get_window_manager(this != null ? (this.nativeObj || this) : null));
 }


  /**
   * 获取当前控件的类型名称。
   * 
   *
   * @returns 返回类型名。
   */
 getType() : string  {
    return widget_get_type(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * clone。
   * 
   * @param parent clone新控件的parent对象。
   *
   * @returns 返回clone的对象。
   */
 clone(parent : TWidget) : TWidget  {
    return new TWidget(widget_clone(this != null ? (this.nativeObj || this) : null, parent != null ? (parent.nativeObj || parent) : null));
 }


  /**
   * 判断两个widget是否相同。
   * 
   * @param other 要比较的控件对象。
   *
   * @returns 返回TRUE表示相同，否则表示不同。
   */
 equal(other : TWidget) : boolean  {
    return widget_equal(this != null ? (this.nativeObj || this) : null, other != null ? (other.nativeObj || other) : null);
 }


  /**
   * 转换为widget对象(供脚本语言使用)。
   * 
   * @param widget widget对象。
   *
   * @returns widget对象。
   */
 static cast(widget : TWidget) : TWidget  {
    return new TWidget(widget_cast(widget != null ? (widget.nativeObj || widget) : null));
 }


  /**
   * 从父控件中移除控件，并调用unref函数销毁控件。
   *
   *> 一般无需直接调用，关闭窗口时，自动销毁相关控件。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 destroy() : TRet  {
    return widget_destroy(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 从父控件中移除控件，并调用unref函数销毁控件。
   *
   *> 一般无需直接调用，关闭窗口时，自动销毁相关控件。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 destroyAsync() : TRet  {
    return widget_destroy_async(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 减少控件的引用计数。引用计数为0时销毁控件。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 unref() : TRet  {
    return widget_unref(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 根据控件的style绘制边框矩形。
   * 
   * @param c 画布对象。
   * @param r 矩形区域。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 strokeBorderRect(c : TCanvas, r : TRect) : TRet  {
    return widget_stroke_border_rect(this != null ? (this.nativeObj || this) : null, c != null ? (c.nativeObj || c) : null, r != null ? (r.nativeObj || r) : null);
 }


  /**
   * 根据控件的style绘制背景矩形。
   * 
   * @param c 画布对象。
   * @param r 矩形区域。
   * @param draw_type 图片缺省绘制方式。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 fillBgRect(c : TCanvas, r : TRect, draw_type : TImageDrawType) : TRet  {
    return widget_fill_bg_rect(this != null ? (this.nativeObj || this) : null, c != null ? (c.nativeObj || c) : null, r != null ? (r.nativeObj || r) : null, draw_type);
 }


  /**
   * 根据控件的style绘制前景矩形。
   * 
   * @param c 画布对象。
   * @param r 矩形区域。
   * @param draw_type 图片缺省绘制方式。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 fillFgRect(c : TCanvas, r : TRect, draw_type : TImageDrawType) : TRet  {
    return widget_fill_fg_rect(this != null ? (this.nativeObj || this) : null, c != null ? (c.nativeObj || c) : null, r != null ? (r.nativeObj || r) : null, draw_type);
 }


  /**
   * 递归的分发一个事件到所有target子控件。
   * 
   * @param e 事件。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 dispatchToTarget(e : TEvent) : TRet  {
    return widget_dispatch_to_target(this != null ? (this.nativeObj || this) : null, e != null ? (e.nativeObj || e) : null);
 }


  /**
   * 递归的分发一个事件到所有key_target子控件。
   * 
   * @param e 事件。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 dispatchToKeyTarget(e : TEvent) : TRet  {
    return widget_dispatch_to_key_target(this != null ? (this.nativeObj || this) : null, e != null ? (e.nativeObj || e) : null);
 }


  /**
   * 获取 widget 对应风格类型
   * 
   *
   * @returns 返回 widget 的对应风格类型。
   */
 getStyleType() : string  {
    return widget_get_style_type(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 让控件根据自己当前状态更新style。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 updateStyle() : TRet  {
    return widget_update_style(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 让控件及子控件根据自己当前状态更新style。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 updateStyleRecursive() : TRet  {
    return widget_update_style_recursive(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 递归的把父控件的key_target设置为自己。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setAsKeyTarget() : TRet  {
    return widget_set_as_key_target(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 把焦点移动下一个控件。
   *
   *>widget必须是当前焦点控件。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 focusNext() : TRet  {
    return widget_focus_next(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 把焦点移动前一个控件。
   *
   *>widget必须是当前焦点控件。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 focusPrev() : TRet  {
    return widget_focus_prev(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 把控件的状态转成获取style选要的状态，一般只在子类中使用。
   * 
   * @param active 控件是否为当前项。
   * @param checked 控件是否为选中项。
   *
   * @returns 返回状态值。
   */
 getStateForStyle(active : boolean, checked : boolean) : string  {
    return widget_get_state_for_style(this != null ? (this.nativeObj || this) : null, active, checked);
 }


  /**
   * 布局当前控件及子控件。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 layout() : TRet  {
    return widget_layout(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 设置控件自己的布局参数。
   * 
   * @param params 布局参数。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setSelfLayout(params : string) : TRet  {
    return widget_set_self_layout(this != null ? (this.nativeObj || this) : null, params);
 }


  /**
   * 设置子控件的布局参数。
   * 
   * @param params 布局参数。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setChildrenLayout(params : string) : TRet  {
    return widget_set_children_layout(this != null ? (this.nativeObj || this) : null, params);
 }


  /**
   * 设置控件自己的布局(缺省布局器)参数(过时，请用widget\_set\_self\_layout)。
   * 
   * @param x x参数。
   * @param y y参数。
   * @param w w参数。
   * @param h h参数。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setSelfLayoutParams(x : string, y : string, w : string, h : string) : TRet  {
    return widget_set_self_layout_params(this != null ? (this.nativeObj || this) : null, x, y, w, h);
 }


  /**
   * 设置整数类型的style。
   *
   *> * [state 的取值](https://github.com/zlgopen/awtk/blob/master/docs/manual/widget_state_t.md)
   *> * [name 的取值](https://github.com/zlgopen/awtk/blob/master/docs/theme.md)
   * 
   * @param state_and_name 状态和名字，用英文的冒号分隔。
   * @param value 值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setStyleInt(state_and_name : string, value : any) : TRet  {
    return widget_set_style_int(this != null ? (this.nativeObj || this) : null, state_and_name, value);
 }


  /**
   * 设置字符串类型的style。
   *
   *> * [state 的取值](https://github.com/zlgopen/awtk/blob/master/docs/manual/widget_state_t.md)
   *> * [name 的取值](https://github.com/zlgopen/awtk/blob/master/docs/theme.md)
   * 
   * @param state_and_name 状态和名字，用英文的冒号分隔。
   * @param value 值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setStyleStr(state_and_name : string, value : string) : TRet  {
    return widget_set_style_str(this != null ? (this.nativeObj || this) : null, state_and_name, value);
 }


  /**
   * widget_set_style_color(label, "normal:bg_color", 0xFF332211);
   *```
   * 
   * @param state_and_name 状态和名字，用英文的冒号分隔。
   * @param value 值。颜色值一般用十六进制表示，每两个数字表示一个颜色通道，从高位到低位，依次是ABGR。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setStyleColor(state_and_name : string, value : any) : TRet  {
    return widget_set_style_color(this != null ? (this.nativeObj || this) : null, state_and_name, value);
 }


  /**
   * x坐标(相对于父控件的x坐标)。
   *
   */
 get x() : number {
   return widget_t_get_prop_x(this.nativeObj);
 }


  /**
   * y坐标(相对于父控件的y坐标)。
   *
   */
 get y() : number {
   return widget_t_get_prop_y(this.nativeObj);
 }


  /**
   * 宽度。
   *
   */
 get w() : number {
   return widget_t_get_prop_w(this.nativeObj);
 }


  /**
   * 高度。
   *
   */
 get h() : number {
   return widget_t_get_prop_h(this.nativeObj);
 }


  /**
   * 控件名字。
   *
   */
 get name() : string {
   return widget_t_get_prop_name(this.nativeObj);
 }

 set name(v : string) {
   this.setName(v);
 }


  /**
   * 鼠标光标图片名称。
   *
   */
 get pointerCursor() : string {
   return widget_t_get_prop_pointer_cursor(this.nativeObj);
 }

 set pointerCursor(v : string) {
   this.setPointerCursor(v);
 }


  /**
   * 保存用于翻译的字符串。
   *
   */
 get trText() : string {
   return widget_t_get_prop_tr_text(this.nativeObj);
 }

 set trText(v : string) {
   this.setTrText(v);
 }


  /**
   * style的名称。
   *
   */
 get style() : string {
   return widget_t_get_prop_style(this.nativeObj);
 }


  /**
   * 动画参数。请参考[控件动画](https://github.com/zlgopen/awtk/blob/master/docs/widget_animator.md)
   *
   */
 get animation() : string {
   return widget_t_get_prop_animation(this.nativeObj);
 }

 set animation(v : string) {
   this.setAnimation(v);
 }


  /**
   * 启用/禁用状态。
   *
   */
 get enable() : boolean {
   return widget_t_get_prop_enable(this.nativeObj);
 }

 set enable(v : boolean) {
   this.setEnable(v);
 }


  /**
   * 是否启用按键音、触屏音和震动等反馈。
   *
   */
 get feedback() : boolean {
   return widget_t_get_prop_feedback(this.nativeObj);
 }

 set feedback(v : boolean) {
   this.setFeedback(v);
 }


  /**
   * 是否可见。
   *
   */
 get visible() : boolean {
   return widget_t_get_prop_visible(this.nativeObj);
 }

 set visible(v : boolean) {
   this.setVisible(v);
 }


  /**
   * 是否接受用户事件。
   *
   */
 get sensitive() : boolean {
   return widget_t_get_prop_sensitive(this.nativeObj);
 }

 set sensitive(v : boolean) {
   this.setSensitive(v);
 }


  /**
   * 是否支持焦点停留。
   *
   */
 get focusable() : boolean {
   return widget_t_get_prop_focusable(this.nativeObj);
 }

 set focusable(v : boolean) {
   this.setFocusable(v);
 }


  /**
   * 是否支持焦点状态。
   *> 如果希望style支持焦点状态，但又不希望焦点停留，可用本属性。
   *
   */
 get withFocusState() : boolean {
   return widget_t_get_prop_with_focus_state(this.nativeObj);
 }


  /**
   * 是否根据子控件和文本自动调整控件自身大小。
   *
   *> 为true时，最好不要使用child_layout，否则可能有冲突。
   *> 注意：只是调整控件的本身的宽高，不会修改控件本身的位置。
   *
   */
 get autoAdjustSize() : boolean {
   return widget_t_get_prop_auto_adjust_size(this.nativeObj);
 }

 set autoAdjustSize(v : boolean) {
   this.setAutoAdjustSize(v);
 }


  /**
   * 标识控件是否启用浮动布局，不受父控件的children_layout的控制。
   *
   */
 get floating() : boolean {
   return widget_t_get_prop_floating(this.nativeObj);
 }

 set floating(v : boolean) {
   this.setFloating(v);
 }


  /**
   * 脏矩形超出控件本身大小的最大范围(一般不用指定)。
   *
   *> 如果 border 太粗或 offset 太大等原因，导致脏矩形超出控件本身大小太多（大于缺省值）时，才需要指定。
   *
   */
 get dirtyRectTolerance() : number {
   return widget_t_get_prop_dirty_rect_tolerance(this.nativeObj);
 }

 set dirtyRectTolerance(v : number) {
   this.setDirtyRectTolerance(v);
 }


  /**
   * 父控件
   *
   */
 get parent() : TWidget {
   return new TWidget(widget_t_get_prop_parent(this.nativeObj));
 }

};
/**
 * #include "conf_io/app_conf.h"
 *```
 *
 */
export class TAppConf { 

  /**
   * 持久保存配置。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 static save() : TRet  {
    return app_conf_save();
 }


  /**
   * 重新加载配置(内存中的配置丢失)。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 static reload() : TRet  {
    return app_conf_reload();
 }


  /**
   * 释放conf对象。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 static deinit() : TRet  {
    return app_conf_deinit();
 }


  /**
   * 检查配置项是否存在。
   * 
   * @param key 配置项的名称。
   *
   * @returns 返回TRUE表示存在，FALSE表示不存在。
   */
 static exist(key : string) : boolean  {
    return app_conf_exist(key);
 }


  /**
   * 设置整数类型配置项的值。
   * 
   * @param key 配置项的名称。
   * @param v 配置项的值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 static setInt(key : string, v : number) : TRet  {
    return app_conf_set_int(key, v);
 }


  /**
   * 设置64位整数类型配置项的值。
   * 
   * @param key 配置项的名称。
   * @param v 配置项的值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 static setInt64(key : string, v : number) : TRet  {
    return app_conf_set_int64(key, v);
 }


  /**
   * 设置bool类型配置项的值。
   * 
   * @param key 配置项的名称。
   * @param v 配置项的值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 static setBool(key : string, v : boolean) : TRet  {
    return app_conf_set_bool(key, v);
 }


  /**
   * 设置双精度类型配置项的值。
   * 
   * @param key 配置项的名称。
   * @param v 配置项的值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 static setDouble(key : string, v : number) : TRet  {
    return app_conf_set_double(key, v);
 }


  /**
   * 设置字符串类型配置项的值。
   * 
   * @param key 配置项的名称。
   * @param v 配置项的值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 static setStr(key : string, v : string) : TRet  {
    return app_conf_set_str(key, v);
 }


  /**
   * 获取整数类型配置项的值。
   * 
   * @param key 配置项的名称。
   * @param defval 缺省值。
   *
   * @returns 返回配置项的值（如果不存在返回缺省值）。
   */
 static getInt(key : string, defval : number) : number  {
    return app_conf_get_int(key, defval);
 }


  /**
   * 获取64位整数类型配置项的值。
   * 
   * @param key 配置项的名称。
   * @param defval 缺省值。
   *
   * @returns 返回配置项的值（如果不存在返回缺省值）。
   */
 static getInt64(key : string, defval : number) : number  {
    return app_conf_get_int64(key, defval);
 }


  /**
   * 获取bool类型配置项的值。
   * 
   * @param key 配置项的名称。
   * @param defval 缺省值。
   *
   * @returns 返回配置项的值（如果不存在返回缺省值）。
   */
 static getBool(key : string, defval : boolean) : boolean  {
    return app_conf_get_bool(key, defval);
 }


  /**
   * 获取单精度浮点数类型配置项的值。
   * 
   * @param key 配置项的名称。
   * @param defval 缺省值。
   *
   * @returns 返回配置项的值（如果不存在返回缺省值）。
   */
 static getDouble(key : string, defval : number) : number  {
    return app_conf_get_double(key, defval);
 }


  /**
   * 获取字符串类型配置项的值。
   * 
   * @param key 配置项的名称。
   * @param defval 缺省值。
   *
   * @returns 返回配置项的值（如果不存在返回缺省值）。
   */
 static getStr(key : string, defval : string) : string  {
    return app_conf_get_str(key, defval);
 }


  /**
   * 删除配置项。
   * 
   * @param key 配置项的名称。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 static remove(key : string) : TRet  {
    return app_conf_remove(key);
 }

};
/**
 * 扩展控件。
 *
 */
export class TExtWidgets { 

  /**
   * 初始化AWTK扩展控件。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 static init() : TRet  {
    return tk_ext_widgets_init();
 }

};
/**
 * 指示器默认绘制的类型。
 *
 */
export enum TIndicatorDefaultPaint {

  /**
   * 自动选择。
   *
   */
 AUTO = INDICATOR_DEFAULT_PAINT_AUTO(),

  /**
   * 实心圆点指示器，当前项填充selected_fg_color，其他填充fg_color。
   *
   */
 FILL_DOT = INDICATOR_DEFAULT_PAINT_FILL_DOT(),

  /**
   * 镂空圆点指示器，当前项填充selected_fg_color，其他镂空fg_color。
   *
   */
 STROKE_DOT = INDICATOR_DEFAULT_PAINT_STROKE_DOT(),

  /**
   * 实心矩形指示器，当前项填充selected_fg_color，其他填充fg_color。
   *
   */
 FILL_RECT = INDICATOR_DEFAULT_PAINT_FILL_RECT(),

  /**
   * 镂空矩形指示器，当前项填充selected_fg_color，其他镂空fg_color。
   *
   */
 STROKE_RECT = INDICATOR_DEFAULT_PAINT_STROKE_RECT(),
};


/**
 * 虚拟页面的事件。
 *
 */
export enum TVpageEvent {

  /**
   * 页面即将打开(动画前)。
   *
   */
 VPAGE_WILL_OPEN = EVT_VPAGE_WILL_OPEN(),

  /**
   * 页面打开完成(动画后)。
   *
   */
 VPAGE_OPEN = EVT_VPAGE_OPEN(),

  /**
   * 页面已经关闭(动画后)。
   *
   */
 VPAGE_CLOSE = EVT_VPAGE_CLOSE(),
};


/**
 * 资源类型常量定义。
 *
 */
export enum TAssetType {

  /**
   * 无效资源。
   *
   */
 NONE = ASSET_TYPE_NONE(),

  /**
   * 字体资源。
   *
   */
 FONT = ASSET_TYPE_FONT(),

  /**
   * 图片资源。
   *
   */
 IMAGE = ASSET_TYPE_IMAGE(),

  /**
   * 窗体样式资源。
   *
   */
 STYLE = ASSET_TYPE_STYLE(),

  /**
   * UI数据资源。
   *
   */
 UI = ASSET_TYPE_UI(),

  /**
   * XML数据资源。
   *
   */
 XML = ASSET_TYPE_XML(),

  /**
   * 字符串数据资源。
   *
   */
 STRINGS = ASSET_TYPE_STRINGS(),

  /**
   * JS等脚本资源。
   *
   */
 SCRIPT = ASSET_TYPE_SCRIPT(),

  /**
   * 流图资源。
   *
   */
 FLOW = ASSET_TYPE_FLOW(),

  /**
   * 其它数据资源。
   *
   */
 DATA = ASSET_TYPE_DATA(),
};


/**
 * 单个资源的描述信息。
 *
 */
export class TAssetInfo { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   this.nativeObj = nativeObj;
 }


  /**
   * 获取类型。
   * 
   *
   * @returns 返回类型。
   */
 getType() : number  {
    return asset_info_get_type(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 获取名称。
   * 
   *
   * @returns 返回名称。
   */
 getName() : string  {
    return asset_info_get_name(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 类型。
   *
   */
 get type() : number {
   return asset_info_t_get_prop_type(this.nativeObj);
 }


  /**
   * 子类型。
   *
   */
 get subtype() : number {
   return asset_info_t_get_prop_subtype(this.nativeObj);
 }


  /**
   * 资源是否在ROM中。
   *
   */
 get isInRom() : number {
   return asset_info_t_get_prop_is_in_rom(this.nativeObj);
 }


  /**
   * 大小。
   *
   */
 get size() : number {
   return asset_info_t_get_prop_size(this.nativeObj);
 }


  /**
   * 引用计数。
   *is\_in\_rom == FALSE时才有效。
   *
   */
 get refcount() : number {
   return asset_info_t_get_prop_refcount(this.nativeObj);
 }


  /**
   * 名称。
   *
   */
 get name() : string {
   return asset_info_t_get_prop_name(this.nativeObj);
 }

};
/**
 * 颜色。
 *
 */
export class TColor { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   this.nativeObj = nativeObj;
 }


  /**
   * 创建color对象。
   *
   *> 主要供脚本语言使用。
   * 
   * @param r 红色通道。
   * @param b 蓝色通道。
   * @param g 绿色通道。
   * @param a alpha通道。
   *
   * @returns color对象。
   */
 static create(r : number, b : number, g : number, a : number) : TColor  {
    return new TColor(color_create(r, b, g, a));
 }


  /**
   * 创建color对象。
   *
   *> 主要供脚本语言使用。
   * 
   * @param str css类似的颜色值。
   *
   * @returns color对象。
   */
 fromStr(str : string) : TColor  {
    return new TColor(color_from_str(this != null ? (this.nativeObj || this) : null, str));
 }


  /**
   * 获取红色通道的值。
   *
   *> 主要供脚本语言使用。
   * 
   *
   * @returns 返回红色通道的值。
   */
 r() : number  {
    return color_r(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 获取绿色通道的值。
   *
   *> 主要供脚本语言使用。
   * 
   *
   * @returns 返回绿色通道的值。
   */
 g() : number  {
    return color_g(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 获取蓝色通道的值。
   *
   *> 主要供脚本语言使用。
   * 
   *
   * @returns 返回蓝色通道的值。
   */
 b() : number  {
    return color_b(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 获取alpha通道的值。
   *
   *> 主要供脚本语言使用。
   * 
   *
   * @returns 返回alpha通道的值。
   */
 a() : number  {
    return color_a(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 获取颜色值。
   *
   *> 主要供脚本语言使用。
   * 
   *
   * @returns 返回颜色值。
   */
 getColor() : number  {
    return color_get_color(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 转换为color对象。
   *
   *> 供脚本语言使用。
   * 
   * @param color color对象。
   *
   * @returns color对象。
   */
 static cast(color : TColor) : TColor  {
    return new TColor(color_cast(color != null ? (color.nativeObj || color) : null));
 }


  /**
   * 销毁color对象。
   *> 主要供脚本语言使用。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 destroy() : TRet  {
    return color_destroy(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 颜色的数值。
   *
   */
 get color() : number {
   return color_t_get_prop_color(this.nativeObj);
 }

 set color(v : number) {
   color_t_set_prop_color(this.nativeObj, v);
 }

};
/**
 * 日期时间。
 *
 *> 在嵌入式平台中，在系统初始时，需要调用date\_time\_global\_init设置实际获取/设置系统时间的函数。
 *
 */
export class TDateTime { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   this.nativeObj = nativeObj;
 }


  /**
   * 创建date_time对象，并初始为当前日期和时间(一般供脚本语言中使用)。
   * 
   *
   * @returns 返回date_time对象。
   */
 static create() : TDateTime  {
    return new TDateTime(date_time_create());
 }


  /**
   * 设置年。
   * 
   * @param year 年。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setYear(year : number) : TRet  {
    return date_time_set_year(this != null ? (this.nativeObj || this) : null, year);
 }


  /**
   * 设置月。
   * 
   * @param month 月。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setMonth(month : number) : TRet  {
    return date_time_set_month(this != null ? (this.nativeObj || this) : null, month);
 }


  /**
   * 设置日。
   * 
   * @param day 日。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setDay(day : number) : TRet  {
    return date_time_set_day(this != null ? (this.nativeObj || this) : null, day);
 }


  /**
   * 设置小时。
   * 
   * @param hour 小时。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setHour(hour : number) : TRet  {
    return date_time_set_hour(this != null ? (this.nativeObj || this) : null, hour);
 }


  /**
   * 设置分钟。
   * 
   * @param minute 分钟。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setMinute(minute : number) : TRet  {
    return date_time_set_minute(this != null ? (this.nativeObj || this) : null, minute);
 }


  /**
   * 设置秒。
   * 
   * @param second 秒。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setSecond(second : number) : TRet  {
    return date_time_set_second(this != null ? (this.nativeObj || this) : null, second);
 }


  /**
   * 设置当前时间。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 set() : TRet  {
    return date_time_set(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 从time转换而来。
   * 
   * @param time 时间。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 fromTime(time : number) : TRet  {
    return date_time_from_time(this != null ? (this.nativeObj || this) : null, time);
 }


  /**
   * 转换成time。
   * 
   *
   * @returns 返回time。
   */
 toTime() : number  {
    return date_time_to_time(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 加上一个偏移量(s)。
   * 
   * @param delta 偏移量(s)。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 addDelta(delta : number) : TRet  {
    return date_time_add_delta(this != null ? (this.nativeObj || this) : null, delta);
 }


  /**
   * 是否是闰年。
   * 
   * @param year 年份。
   *
   * @returns 返回TRUE表示是，否则表示否。
   */
 static isLeap(year : number) : boolean  {
    return date_time_is_leap(year);
 }


  /**
   * 获取指定年份月份的天数。
   * 
   * @param year 年份。
   * @param montn 月份(1-12)。
   *
   * @returns 返回大于0表示天数，否则表示失败。
   */
 static getDays(year : number, montn : number) : number  {
    return date_time_get_days(year, montn);
 }


  /**
   * 获取指定日期是周几(0-6, Sunday = 0)。。
   * 
   * @param year 年份。
   * @param montn 月份(1-12)。
   * @param day 日(1-31)。
   *
   * @returns 返回大于等于0表示周几(0-6)，否则表示失败。
   */
 static getWday(year : number, montn : number, day : number) : number  {
    return date_time_get_wday(year, montn, day);
 }


  /**
   * 获取指定月份的英文名称(简写)。
   * 
   * @param montn 月份(1-12)。
   *
   * @returns 返回指定月份的英文名称(简写)。
   */
 static getMonthName(montn : number) : string  {
    return date_time_get_month_name(montn);
 }


  /**
   * 获取周几的英文名称(简写)。
   * 
   * @param wday 星期几(0-6, Sunday = 0)。
   *
   * @returns 返回指定周几的英文名称(简写)。
   */
 static getWdayName(wday : number) : string  {
    return date_time_get_wday_name(wday);
 }


  /**
   * 销毁date_time对象(一般供脚本语言中使用)。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 destroy() : TRet  {
    return date_time_destroy(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 秒(0 - 59)。
   *
   */
 get second() : number {
   return date_time_t_get_prop_second(this.nativeObj);
 }

 set second(v : number) {
   this.setSecond(v);
 }


  /**
   * 分(0 - 59)。
   *
   */
 get minute() : number {
   return date_time_t_get_prop_minute(this.nativeObj);
 }

 set minute(v : number) {
   this.setMinute(v);
 }


  /**
   * 时(0 - 23)。
   *
   */
 get hour() : number {
   return date_time_t_get_prop_hour(this.nativeObj);
 }

 set hour(v : number) {
   this.setHour(v);
 }


  /**
   * 日(1-31)。
   *
   */
 get day() : number {
   return date_time_t_get_prop_day(this.nativeObj);
 }

 set day(v : number) {
   this.setDay(v);
 }


  /**
   * 星期几(0-6, Sunday = 0)。
   *
   */
 get wday() : number {
   return date_time_t_get_prop_wday(this.nativeObj);
 }


  /**
   * 月(1-12)。
   *
   */
 get month() : number {
   return date_time_t_get_prop_month(this.nativeObj);
 }

 set month(v : number) {
   this.setMonth(v);
 }


  /**
   * 年。
   *
   */
 get year() : number {
   return date_time_t_get_prop_year(this.nativeObj);
 }

 set year(v : number) {
   this.setYear(v);
 }

};
/**
 * 缓动作动画常量定义。
 *
 */
export enum TEasingType {

  /**
   * EASING_LINEAR。
   *
   */
 LINEAR = EASING_LINEAR(),

  /**
   * EASING_QUADRATIC_IN
   *
   */
 QUADRATIC_IN = EASING_QUADRATIC_IN(),

  /**
   * EASING_QUADRATIC_OUT
   *
   */
 QUADRATIC_OUT = EASING_QUADRATIC_OUT(),

  /**
   * EASING_QUADRATIC_INOUT
   *
   */
 QUADRATIC_INOUT = EASING_QUADRATIC_INOUT(),

  /**
   * EASING_CUBIC_IN
   *
   */
 CUBIC_IN = EASING_CUBIC_IN(),

  /**
   * EASING_CUBIC_OUT
   *
   */
 CUBIC_OUT = EASING_CUBIC_OUT(),

  /**
   * EASING_SIN_IN
   *
   */
 SIN_IN = EASING_SIN_IN(),

  /**
   * EASING_SIN_OUT
   *
   */
 SIN_OUT = EASING_SIN_OUT(),

  /**
   * EASING_SIN_OUT
   *
   */
 SIN_INOUT = EASING_SIN_INOUT(),

  /**
   * EASING_POW_IN
   *
   */
 POW_IN = EASING_POW_IN(),

  /**
   * EASING_POW_OUT
   *
   */
 POW_OUT = EASING_POW_OUT(),

  /**
   * EASING_POW_INOUT
   *
   */
 POW_INOUT = EASING_POW_INOUT(),

  /**
   * EASING_CIRCULAR_IN
   *
   */
 CIRCULAR_IN = EASING_CIRCULAR_IN(),

  /**
   * EASING_CIRCULAR_OUT
   *
   */
 CIRCULAR_OUT = EASING_CIRCULAR_OUT(),

  /**
   * EASING_CIRCULAR_INOUT
   *
   */
 CIRCULAR_INOUT = EASING_CIRCULAR_INOUT(),

  /**
   * EASING_ELASTIC_IN
   *
   */
 ELASTIC_IN = EASING_ELASTIC_IN(),

  /**
   * EASING_ELASTIC_OUT
   *
   */
 ELASTIC_OUT = EASING_ELASTIC_OUT(),

  /**
   * EASING_ELASTIC_INOUT
   *
   */
 ELASTIC_INOUT = EASING_ELASTIC_INOUT(),

  /**
   * EASING_BACK_IN
   *
   */
 BACK_IN = EASING_BACK_IN(),

  /**
   * EASING_BACK_OUT
   *
   */
 BACK_OUT = EASING_BACK_OUT(),

  /**
   * EASING_BACK_INOUT
   *
   */
 BACK_INOUT = EASING_BACK_INOUT(),

  /**
   * EASING_BOUNCE_IN
   *
   */
 BOUNCE_IN = EASING_BOUNCE_IN(),

  /**
   * EASING_BOUNCE_OUT
   *
   */
 BOUNCE_OUT = EASING_BOUNCE_OUT(),

  /**
   * EASING_BOUNCE_INOUT
   *
   */
 BOUNCE_INOUT = EASING_BOUNCE_INOUT(),
};


/**
 * idle_manager_t管理器。
 *
 */
export class TIdleManager { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   this.nativeObj = nativeObj;
 }

};
/**
 * MIME_TYPE。
 *
 */
export enum TMIME_TYPE {

  /**
   * "application/envoy"。
   *
   */
 APPLICATION_ENVOY = MIME_TYPE_APPLICATION_ENVOY(),

  /**
   * "application/fractals"。
   *
   */
 APPLICATION_FRACTALS = MIME_TYPE_APPLICATION_FRACTALS(),

  /**
   * "application/futuresplash"。
   *
   */
 APPLICATION_FUTURESPLASH = MIME_TYPE_APPLICATION_FUTURESPLASH(),

  /**
   * "application/hta"。
   *
   */
 APPLICATION_HTA = MIME_TYPE_APPLICATION_HTA(),

  /**
   * "application/json"。
   *
   */
 APPLICATION_JSON = MIME_TYPE_APPLICATION_JSON(),

  /**
   * "application/ubjson"。
   *
   */
 APPLICATION_UBJSON = MIME_TYPE_APPLICATION_UBJSON(),

  /**
   * "application/mac-binhex40"。
   *
   */
 APPLICATION_MAC_BINHEX40 = MIME_TYPE_APPLICATION_MAC_BINHEX40(),

  /**
   * "application/msword"。
   *
   */
 APPLICATION_MSWORD = MIME_TYPE_APPLICATION_MSWORD(),

  /**
   * "application/octet-stream"。
   *
   */
 APPLICATION_OCTET_STREAM = MIME_TYPE_APPLICATION_OCTET_STREAM(),

  /**
   * "application/oda"。
   *
   */
 APPLICATION_ODA = MIME_TYPE_APPLICATION_ODA(),

  /**
   * "application/olescript"。
   *
   */
 APPLICATION_OLESCRIPT = MIME_TYPE_APPLICATION_OLESCRIPT(),

  /**
   * "application/pdf"。
   *
   */
 APPLICATION_PDF = MIME_TYPE_APPLICATION_PDF(),

  /**
   * "application/pics-rules"。
   *
   */
 APPLICATION_PICS_RULES = MIME_TYPE_APPLICATION_PICS_RULES(),

  /**
   * "application/pkcs10"。
   *
   */
 APPLICATION_PKCS10 = MIME_TYPE_APPLICATION_PKCS10(),

  /**
   * "application/pkix-crl"。
   *
   */
 APPLICATION_PKIX_CRL = MIME_TYPE_APPLICATION_PKIX_CRL(),

  /**
   * "application/postscript"。
   *
   */
 APPLICATION_POSTSCRIPT = MIME_TYPE_APPLICATION_POSTSCRIPT(),

  /**
   * "application/rtf"。
   *
   */
 APPLICATION_RTF = MIME_TYPE_APPLICATION_RTF(),

  /**
   * "application/vnd.ms-excel"。
   *
   */
 APPLICATION_VND_MS_EXCEL = MIME_TYPE_APPLICATION_VND_MS_EXCEL(),

  /**
   * "application/vnd.ms-outlook"。
   *
   */
 APPLICATION_VND_MS_OUTLOOK = MIME_TYPE_APPLICATION_VND_MS_OUTLOOK(),

  /**
   * "application/vnd.ms-pkicertstore"。
   *
   */
 APPLICATION_VND_MS_PKICERTSTORE = MIME_TYPE_APPLICATION_VND_MS_PKICERTSTORE(),

  /**
   * "application/vnd.ms-pkiseccat"。
   *
   */
 APPLICATION_VND_MS_PKISECCAT = MIME_TYPE_APPLICATION_VND_MS_PKISECCAT(),

  /**
   * "application/vnd.ms-pkistl"。
   *
   */
 APPLICATION_VND_MS_PKISTL = MIME_TYPE_APPLICATION_VND_MS_PKISTL(),

  /**
   * "application/vnd.ms-powerpoint"。
   *
   */
 APPLICATION_VND_MS_POWERPOINT = MIME_TYPE_APPLICATION_VND_MS_POWERPOINT(),

  /**
   * "application/vnd.ms-project"。
   *
   */
 APPLICATION_VND_MS_PROJECT = MIME_TYPE_APPLICATION_VND_MS_PROJECT(),

  /**
   * "application/vnd.ms-works"。
   *
   */
 APPLICATION_VND_MS_WORKS = MIME_TYPE_APPLICATION_VND_MS_WORKS(),

  /**
   * "application/winhlp"。
   *
   */
 APPLICATION_WINHLP = MIME_TYPE_APPLICATION_WINHLP(),

  /**
   * "application/x-bcpio"。
   *
   */
 APPLICATION_X_BCPIO = MIME_TYPE_APPLICATION_X_BCPIO(),

  /**
   * "application/x-cdf"。
   *
   */
 APPLICATION_X_CDF = MIME_TYPE_APPLICATION_X_CDF(),

  /**
   * "application/x-compress"。
   *
   */
 APPLICATION_X_COMPRESS = MIME_TYPE_APPLICATION_X_COMPRESS(),

  /**
   * "application/x-compressed"。
   *
   */
 APPLICATION_X_COMPRESSED = MIME_TYPE_APPLICATION_X_COMPRESSED(),

  /**
   * "application/x-cpio"。
   *
   */
 APPLICATION_X_CPIO = MIME_TYPE_APPLICATION_X_CPIO(),

  /**
   * "application/x-csh"。
   *
   */
 APPLICATION_X_CSH = MIME_TYPE_APPLICATION_X_CSH(),

  /**
   * "application/x-director"。
   *
   */
 APPLICATION_X_DIRECTOR = MIME_TYPE_APPLICATION_X_DIRECTOR(),

  /**
   * "application/x-dvi"。
   *
   */
 APPLICATION_X_DVI = MIME_TYPE_APPLICATION_X_DVI(),

  /**
   * "application/x-gtar"。
   *
   */
 APPLICATION_X_GTAR = MIME_TYPE_APPLICATION_X_GTAR(),

  /**
   * "application/x-gzip"。
   *
   */
 APPLICATION_X_GZIP = MIME_TYPE_APPLICATION_X_GZIP(),

  /**
   * "application/x-hdf"。
   *
   */
 APPLICATION_X_HDF = MIME_TYPE_APPLICATION_X_HDF(),

  /**
   * "application/x-iphone"。
   *
   */
 APPLICATION_X_IPHONE = MIME_TYPE_APPLICATION_X_IPHONE(),

  /**
   * "application/x-javascript"。
   *
   */
 APPLICATION_X_JAVASCRIPT = MIME_TYPE_APPLICATION_X_JAVASCRIPT(),

  /**
   * "application/x-latex"。
   *
   */
 APPLICATION_X_LATEX = MIME_TYPE_APPLICATION_X_LATEX(),

  /**
   * "application/x-msaccess"。
   *
   */
 APPLICATION_X_MSACCESS = MIME_TYPE_APPLICATION_X_MSACCESS(),

  /**
   * "application/x-mscardfile"。
   *
   */
 APPLICATION_X_MSCARDFILE = MIME_TYPE_APPLICATION_X_MSCARDFILE(),

  /**
   * "application/x-msclip"。
   *
   */
 APPLICATION_X_MSCLIP = MIME_TYPE_APPLICATION_X_MSCLIP(),

  /**
   * "application/x-msdownload"。
   *
   */
 APPLICATION_X_MSDOWNLOAD = MIME_TYPE_APPLICATION_X_MSDOWNLOAD(),

  /**
   * "application/x-msmediaview"。
   *
   */
 APPLICATION_X_MSMEDIAVIEW = MIME_TYPE_APPLICATION_X_MSMEDIAVIEW(),

  /**
   * "application/x-msmetafile"。
   *
   */
 APPLICATION_X_MSMETAFILE = MIME_TYPE_APPLICATION_X_MSMETAFILE(),

  /**
   * "application/x-msmoney"。
   *
   */
 APPLICATION_X_MSMONEY = MIME_TYPE_APPLICATION_X_MSMONEY(),

  /**
   * "application/x-mspublisher"。
   *
   */
 APPLICATION_X_MSPUBLISHER = MIME_TYPE_APPLICATION_X_MSPUBLISHER(),

  /**
   * "application/x-msschedule"。
   *
   */
 APPLICATION_X_MSSCHEDULE = MIME_TYPE_APPLICATION_X_MSSCHEDULE(),

  /**
   * "application/x-msterminal"。
   *
   */
 APPLICATION_X_MSTERMINAL = MIME_TYPE_APPLICATION_X_MSTERMINAL(),

  /**
   * "application/x-mswrite"。
   *
   */
 APPLICATION_X_MSWRITE = MIME_TYPE_APPLICATION_X_MSWRITE(),

  /**
   * "application/x-netcdf"。
   *
   */
 APPLICATION_X_NETCDF = MIME_TYPE_APPLICATION_X_NETCDF(),

  /**
   * "application/x-perfmon"。
   *
   */
 APPLICATION_X_PERFMON = MIME_TYPE_APPLICATION_X_PERFMON(),

  /**
   * "application/x-pkcs12"。
   *
   */
 APPLICATION_X_PKCS12 = MIME_TYPE_APPLICATION_X_PKCS12(),

  /**
   * "application/x-sh"。
   *
   */
 APPLICATION_X_SH = MIME_TYPE_APPLICATION_X_SH(),

  /**
   * "application/x-shar"。
   *
   */
 APPLICATION_X_SHAR = MIME_TYPE_APPLICATION_X_SHAR(),

  /**
   * "application/x-shockwave-flash"。
   *
   */
 APPLICATION_X_SHOCKWAVE_FLASH = MIME_TYPE_APPLICATION_X_SHOCKWAVE_FLASH(),

  /**
   * "application/x-stuffit"。
   *
   */
 APPLICATION_X_STUFFIT = MIME_TYPE_APPLICATION_X_STUFFIT(),

  /**
   * "application/x-sv4cpio"。
   *
   */
 APPLICATION_X_SV4CPIO = MIME_TYPE_APPLICATION_X_SV4CPIO(),

  /**
   * "application/x-sv4crc"。
   *
   */
 APPLICATION_X_SV4CRC = MIME_TYPE_APPLICATION_X_SV4CRC(),

  /**
   * "application/x-tar"。
   *
   */
 APPLICATION_X_TAR = MIME_TYPE_APPLICATION_X_TAR(),

  /**
   * "application/x-tcl"。
   *
   */
 APPLICATION_X_TCL = MIME_TYPE_APPLICATION_X_TCL(),

  /**
   * "application/x-tex"。
   *
   */
 APPLICATION_X_TEX = MIME_TYPE_APPLICATION_X_TEX(),

  /**
   * "application/x-texinfo"。
   *
   */
 APPLICATION_X_TEXINFO = MIME_TYPE_APPLICATION_X_TEXINFO(),

  /**
   * "application/x-troff"。
   *
   */
 APPLICATION_X_TROFF = MIME_TYPE_APPLICATION_X_TROFF(),

  /**
   * "application/x-ustar"。
   *
   */
 APPLICATION_X_USTAR = MIME_TYPE_APPLICATION_X_USTAR(),

  /**
   * "application/zip"。
   *
   */
 APPLICATION_ZIP = MIME_TYPE_APPLICATION_ZIP(),

  /**
   * "audio/basic"。
   *
   */
 AUDIO_BASIC = MIME_TYPE_AUDIO_BASIC(),

  /**
   * "audio/mid"。
   *
   */
 AUDIO_MID = MIME_TYPE_AUDIO_MID(),

  /**
   * "audio/mpeg"。
   *
   */
 AUDIO_MPEG = MIME_TYPE_AUDIO_MPEG(),

  /**
   * "audio/x-aiff"。
   *
   */
 AUDIO_X_AIFF = MIME_TYPE_AUDIO_X_AIFF(),

  /**
   * "audio/x-mpegurl"。
   *
   */
 AUDIO_X_MPEGURL = MIME_TYPE_AUDIO_X_MPEGURL(),

  /**
   * "audio/x-wav"。
   *
   */
 AUDIO_X_WAV = MIME_TYPE_AUDIO_X_WAV(),

  /**
   * "image/bmp"。
   *
   */
 IMAGE_BMP = MIME_TYPE_IMAGE_BMP(),

  /**
   * "image/cis-cod"。
   *
   */
 IMAGE_CIS_COD = MIME_TYPE_IMAGE_CIS_COD(),

  /**
   * "image/gif"。
   *
   */
 IMAGE_GIF = MIME_TYPE_IMAGE_GIF(),

  /**
   * "image/ief"。
   *
   */
 IMAGE_IEF = MIME_TYPE_IMAGE_IEF(),

  /**
   * "image/jpeg"。
   *
   */
 IMAGE_JPEG = MIME_TYPE_IMAGE_JPEG(),

  /**
   * "image/pipeg"。
   *
   */
 IMAGE_PIPEG = MIME_TYPE_IMAGE_PIPEG(),

  /**
   * "image/svg+xml"。
   *
   */
 IMAGE_SVG_XML = MIME_TYPE_IMAGE_SVG_XML(),

  /**
   * "image/tiff"。
   *
   */
 IMAGE_TIFF = MIME_TYPE_IMAGE_TIFF(),

  /**
   * "image/x-cmx"。
   *
   */
 IMAGE_X_CMX = MIME_TYPE_IMAGE_X_CMX(),

  /**
   * "image/x-icon"。
   *
   */
 IMAGE_X_ICON = MIME_TYPE_IMAGE_X_ICON(),

  /**
   * "image/x-rgb"。
   *
   */
 IMAGE_X_RGB = MIME_TYPE_IMAGE_X_RGB(),

  /**
   * "image/x-xbitmap"。
   *
   */
 IMAGE_X_XBITMAP = MIME_TYPE_IMAGE_X_XBITMAP(),

  /**
   * "image/x-xpixmap"。
   *
   */
 IMAGE_X_XPIXMAP = MIME_TYPE_IMAGE_X_XPIXMAP(),

  /**
   * "image/x-xwindowdump"。
   *
   */
 IMAGE_X_XWINDOWDUMP = MIME_TYPE_IMAGE_X_XWINDOWDUMP(),

  /**
   * "message/rfc822"。
   *
   */
 MESSAGE_RFC822 = MIME_TYPE_MESSAGE_RFC822(),

  /**
   * "text/css"。
   *
   */
 TEXT_CSS = MIME_TYPE_TEXT_CSS(),

  /**
   * "text/h323"。
   *
   */
 TEXT_H323 = MIME_TYPE_TEXT_H323(),

  /**
   * "text/html"。
   *
   */
 TEXT_HTML = MIME_TYPE_TEXT_HTML(),

  /**
   * "text/iuls"。
   *
   */
 TEXT_IULS = MIME_TYPE_TEXT_IULS(),

  /**
   * "text/plain"。
   *
   */
 TEXT_PLAIN = MIME_TYPE_TEXT_PLAIN(),

  /**
   * "text/richtext"。
   *
   */
 TEXT_RICHTEXT = MIME_TYPE_TEXT_RICHTEXT(),

  /**
   * "text/scriptlet"。
   *
   */
 TEXT_SCRIPTLET = MIME_TYPE_TEXT_SCRIPTLET(),

  /**
   * "text/webviewhtml"。
   *
   */
 TEXT_WEBVIEWHTML = MIME_TYPE_TEXT_WEBVIEWHTML(),

  /**
   * "text/x-component"。
   *
   */
 TEXT_X_COMPONENT = MIME_TYPE_TEXT_X_COMPONENT(),

  /**
   * "text/x-setext"。
   *
   */
 TEXT_X_SETEXT = MIME_TYPE_TEXT_X_SETEXT(),

  /**
   * "text/x-vcard"。
   *
   */
 TEXT_X_VCARD = MIME_TYPE_TEXT_X_VCARD(),

  /**
   * "video/mpeg"。
   *
   */
 VIDEO_MPEG = MIME_TYPE_VIDEO_MPEG(),

  /**
   * "video/quicktime"。
   *
   */
 VIDEO_QUICKTIME = MIME_TYPE_VIDEO_QUICKTIME(),

  /**
   * "video/x-msvideo"。
   *
   */
 VIDEO_X_MSVIDEO = MIME_TYPE_VIDEO_X_MSVIDEO(),
};


/**
 * 命名的值。
 *
 */
export class TNamedValue { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   this.nativeObj = nativeObj;
 }


  /**
   * 创建named_value对象。
   * 
   *
   * @returns 返回named_value对象。
   */
 static create() : TNamedValue  {
    return new TNamedValue(named_value_create());
 }


  /**
   * 转换为named_value对象(供脚本语言使用)。
   * 
   * @param nv named_value对象。
   *
   * @returns 返回named_value对象。
   */
 static cast(nv : TNamedValue) : TNamedValue  {
    return new TNamedValue(named_value_cast(nv != null ? (nv.nativeObj || nv) : null));
 }


  /**
   * 设置名称。
   * 
   * @param name 名称。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setName(name : string) : TRet  {
    return named_value_set_name(this != null ? (this.nativeObj || this) : null, name);
 }


  /**
   * 设置值。
   * 
   * @param value 值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setValue(value : TValue) : TRet  {
    return named_value_set_value(this != null ? (this.nativeObj || this) : null, value != null ? (value.nativeObj || value) : null);
 }


  /**
   * 获取值对象(主要给脚本语言使用)。
   * 
   *
   * @returns 返回值对象。
   */
 getValue() : TValue  {
    return new TValue(named_value_get_value(this != null ? (this.nativeObj || this) : null));
 }


  /**
   * 销毁named_value对象。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 destroy() : TRet  {
    return named_value_destroy(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 名称。
   *
   */
 get name() : string {
   return named_value_t_get_prop_name(this.nativeObj);
 }

 set name(v : string) {
   this.setName(v);
 }

};
/**
 * 对象常见命令定义
 *
 */
export enum TObjectCmd {

  /**
   * 保存命令
   *
   */
 SAVE = OBJECT_CMD_SAVE(),

  /**
   * 重新加载命令
   *
   */
 RELOAD = OBJECT_CMD_RELOAD(),

  /**
   * 和前一个属性交换位置
   *>参数为属性的名称或路径。
   *
   */
 MOVE_UP = OBJECT_CMD_MOVE_UP(),

  /**
   * 和后一个属性交换位置
   *>参数为属性的名称或路径。
   *
   */
 MOVE_DOWN = OBJECT_CMD_MOVE_DOWN(),

  /**
   * 删除属性。
   *>参数为属性的名称或路径。
   *
   */
 REMOVE = OBJECT_CMD_REMOVE(),

  /**
   * 删除勾选的属性。
   *>参数为属性的名称或路径。
   *
   */
 REMOVE_CHECKED = OBJECT_CMD_REMOVE_CHECKED(),

  /**
   * 清除全部属性。
   *>参数为属性的名称或路径。
   *
   */
 CLEAR = OBJECT_CMD_CLEAR(),

  /**
   * 增加子项。
   *>参数为属性的名称或路径。
   *
   */
 ADD = OBJECT_CMD_ADD(),

  /**
   * 显示对象详细信息。
   *>参数为属性的名称或路径。
   *
   */
 DETAIL = OBJECT_CMD_DETAIL(),

  /**
   * 编辑子项。
   *>参数为属性的名称或路径。
   *
   */
 EDIT = OBJECT_CMD_EDIT(),
};


/**
 * 对象常见属性定义
 *
 */
export enum TObjectProp {

  /**
   * 属性的个数。
   *
   */
 SIZE = OBJECT_PROP_SIZE(),

  /**
   * 属性是否勾选。
   *
   */
 CHECKED = OBJECT_PROP_CHECKED(),
};


/**
 * 循环记录日志(支持多线程访问)。
 *如果我们把日志写入文件中，随着时间的推移，日志文件会越来越大，最终占满这个磁盘，出现不可预料的错误。
 *rlog提供一个循环记录日志的功能，让日志文件始终不会超出指定的大小，达到指定大小后再从头开始写。
 *
 *> 为了实现简单，我们把日志文件分成0和1两个文件，先写文件0，到达指定最大值的一半时，再写文件1。
 *> 文件1到达指定最大值的一半时，删除文件0，并将文件1改名为文件0，重新创建文件1，继续写文件1，重复此过程。
 *
 */
export class TRlog { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   this.nativeObj = nativeObj;
 }


  /**
   * rlog_t* log = rlog_create("./logs/%d.log", 1020*1024, 256);
   *rlog_write(log, "hello\n");
   *rlog_destroy(log);
   *```
   * 
   * @param filename_pattern 用来确定文件名的路径和文件名。
   * @param max_size log文件占用最大磁盘空间(字节)。
   * @param buff_size 用于指定print时的buff大小。
   *
   * @returns 返回rlog对象。
   */
 static create(filename_pattern : string, max_size : number, buff_size : number) : TRlog  {
    return new TRlog(rlog_create(filename_pattern, max_size, buff_size));
 }


  /**
   * 写入一条日志记录。
   * 
   * @param str 日志字符串。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 write(str : string) : TRet  {
    return rlog_write(this != null ? (this.nativeObj || this) : null, str);
 }

};
/**
 * 获取当前时间的函数。
 *这里的当前时间是相对的，在嵌入式系统一般相对于开机时间。
 *它本身并没有任何意义，一般用来计算时间间隔，如实现定时器和动画等等。
 *
 */
export class TTimeNow { 

  /**
   * 获取当前时间(秒)。
   * 
   *
   * @returns 返回当前时间(秒)。
   */
 static s() : number  {
    return time_now_s();
 }


  /**
   * 获取当前时间(毫秒)。
   * 
   *
   * @returns 返回当前时间(毫秒)。
   */
 static ms() : number  {
    return time_now_ms();
 }


  /**
   * 获取当前时间(微秒)。
   * 
   *
   * @returns 返回当前时间(微秒)。
   */
 static us() : number  {
    return time_now_us();
 }

};
/**
 * 定时器管理器。
 *
 */
export class TTimerManager { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   this.nativeObj = nativeObj;
 }

};
/**
 * 函数返回值常量定义。
 *
 */
export enum TRet {

  /**
   * 成功。
   *
   */
 OK = RET_OK(),

  /**
   * Out of memory。
   *
   */
 OOM = RET_OOM(),

  /**
   * 失败。
   *
   */
 FAIL = RET_FAIL(),

  /**
   * 没有实现/不支持。
   *
   */
 NOT_IMPL = RET_NOT_IMPL(),

  /**
   * 退出。通常用于主循环。
   *
   */
 QUIT = RET_QUIT(),

  /**
   * 找到。
   *
   */
 FOUND = RET_FOUND(),

  /**
   * 对象忙。
   *
   */
 BUSY = RET_BUSY(),

  /**
   * 移出。通常用于定时器。
   *
   */
 REMOVE = RET_REMOVE(),

  /**
   * 重复。通常用于定时器。
   *
   */
 REPEAT = RET_REPEAT(),

  /**
   * 没找到。
   *
   */
 NOT_FOUND = RET_NOT_FOUND(),

  /**
   * 操作完成。
   *
   */
 DONE = RET_DONE(),

  /**
   * 停止后续操作。
   *
   */
 STOP = RET_STOP(),

  /**
   * 跳过当前项。
   *
   */
 SKIP = RET_SKIP(),

  /**
   * 继续后续操作。
   *
   */
 CONTINUE = RET_CONTINUE(),

  /**
   * 对象属性变化。
   *
   */
 OBJECT_CHANGED = RET_OBJECT_CHANGED(),

  /**
   * 集合数目变化。
   *
   */
 ITEMS_CHANGED = RET_ITEMS_CHANGED(),

  /**
   * 无效参数。
   *
   */
 BAD_PARAMS = RET_BAD_PARAMS(),

  /**
   * 超时。
   *
   */
 TIMEOUT = RET_TIMEOUT(),

  /**
   * CRC错误。
   *
   */
 CRC = RET_CRC(),

  /**
   * IO错误。
   *
   */
 IO = RET_IO(),

  /**
   * End of Stream
   *
   */
 EOS = RET_EOS(),

  /**
   * 没有改变。
   *
   */
 NOT_MODIFIED = RET_NOT_MODIFIED(),
};


/**
 * 类型常量定义。
 *
 */
export enum TValueType {

  /**
   * 无效类型。
   *
   */
 INVALID = VALUE_TYPE_INVALID(),

  /**
   * BOOL类型。
   *
   */
 BOOL = VALUE_TYPE_BOOL(),

  /**
   * int8_t类型。
   *
   */
 INT8 = VALUE_TYPE_INT8(),

  /**
   * uint8_t类型。
   *
   */
 UINT8 = VALUE_TYPE_UINT8(),

  /**
   * int16_t类型。
   *
   */
 INT16 = VALUE_TYPE_INT16(),

  /**
   * uint16_t类型。
   *
   */
 UINT16 = VALUE_TYPE_UINT16(),

  /**
   * int32_t类型。
   *
   */
 INT32 = VALUE_TYPE_INT32(),

  /**
   * uint32_t类型。
   *
   */
 UINT32 = VALUE_TYPE_UINT32(),

  /**
   * int64_t类型。
   *
   */
 INT64 = VALUE_TYPE_INT64(),

  /**
   * uint64_t类型。
   *
   */
 UINT64 = VALUE_TYPE_UINT64(),

  /**
   * void*类型。
   *
   */
 POINTER = VALUE_TYPE_POINTER(),

  /**
   * float_t类型。
   *
   */
 FLOAT = VALUE_TYPE_FLOAT(),

  /**
   * float类型。
   *
   */
 FLOAT32 = VALUE_TYPE_FLOAT32(),

  /**
   * double类型。
   *
   */
 DOUBLE = VALUE_TYPE_DOUBLE(),

  /**
   * char*类型。
   *
   */
 STRING = VALUE_TYPE_STRING(),

  /**
   * wchar_t*类型。
   *
   */
 WSTRING = VALUE_TYPE_WSTRING(),

  /**
   * object_t*类型。
   *
   */
 OBJECT = VALUE_TYPE_OBJECT(),

  /**
   * 带长度的字符串。
   *
   */
 SIZED_STRING = VALUE_TYPE_SIZED_STRING(),

  /**
   * 二进制数据。
   *
   */
 BINARY = VALUE_TYPE_BINARY(),

  /**
   * 二进制数据(UBJSON)。
   *
   */
 UBJSON = VALUE_TYPE_UBJSON(),

  /**
   * 特殊用途。
   *
   */
 TOKEN = VALUE_TYPE_TOKEN(),
};


/**
 * 资源管理器。
 *这里的资源管理器并非Windows下的文件浏览器，而是负责对各种资源，比如字体、窗体样式、图片、界面数据、字符串和其它数据的进行集中管理的组件。引入资源管理器的目的有以下几个：
 *
 ** 让上层不需要了解存储的方式。
 *在没有文件系统时或者内存紧缺时，把资源转成常量数组直接编译到代码中。在有文件系统而且内存充足时，资源放在文件系统中。在有网络时，资源也可以存放在服务器上(暂未实现)。资源管理器为上层提供统一的接口，让上层而不用关心底层的存储方式。
 *
 ** 让上层不需要了解资源的具体格式。
 *比如一个名为earth的图片，没有文件系统或内存紧缺，图片直接用位图数据格式存在ROM中，而有文件系统时，则用PNG格式存放在文件系统中。资源管理器让上层不需要关心图片的格式，访问时指定图片的名称即可(不用指定扩展名)。
 *
 ** 让上层不需要了解屏幕的密度。
 *不同的屏幕密度下需要加载不同的图片，比如MacPro的Retina屏就需要用双倍解析度的图片，否则就出现界面模糊。AWTK以后会支持PC软件和手机软件的开发，所以资源管理器需要为此提供支持，让上层不需关心屏幕的密度。
 *
 ** 对资源进行内存缓存。
 *不同类型的资源使用方式是不一样的，比如字体和窗体样式加载之后会一直使用，UI文件在生成界面之后就暂时不需要了，PNG文件解码之后就只需要保留解码的位图数据即可。资源管理器配合图片管理器等其它组件实现资源的自动缓存。
 *
 *当从文件系统加载资源时，目录结构要求如下：
 *
 *```
 *assets/{theme}/raw/
 *fonts   字体
 *images  图片
 *x1   普通密度屏幕的图片。
 *x2   2倍密度屏幕的图片。
 *x3   3倍密度屏幕的图片。
 *xx   密度无关的图片。
 *strings 需要翻译的字符串。
 *styles  窗体样式数据。
 *ui      UI描述数据。
 *```
 *
 */
export class TAssetsManager extends TEmitter { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 获取缺省资源管理器。
   * 
   *
   * @returns 返回asset manager对象。
   */
 static instance() : TAssetsManager  {
    return new TAssetsManager(assets_manager());
 }


  /**
   * 设置当前的主题。
   * 
   * @param theme 主题名称。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setTheme(theme : string) : TRet  {
    return assets_manager_set_theme(this != null ? (this.nativeObj || this) : null, theme);
 }


  /**
   * 在资源管理器的缓存中查找指定的资源并引用它，如果缓存中不存在，尝试加载该资源。
   * 
   * @param type 资源的类型。
   * @param name 资源的名称。
   *
   * @returns 返回资源。
   */
 ref(type : TAssetType, name : string) : TAssetInfo  {
    return new TAssetInfo(assets_manager_ref(this != null ? (this.nativeObj || this) : null, type, name));
 }


  /**
   * 在资源管理器的缓存中查找指定的资源并引用它，如果缓存中不存在，尝试加载该资源。
   * 
   * @param type 资源的类型。
   * @param subtype 资源的子类型。
   * @param name 资源的名称。
   *
   * @returns 返回资源。
   */
 refEx(type : TAssetType, subtype : number, name : string) : TAssetInfo  {
    return new TAssetInfo(assets_manager_ref_ex(this != null ? (this.nativeObj || this) : null, type, subtype, name));
 }


  /**
   * 释放指定的资源。
   * 
   * @param info 资源。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 unref(info : TAssetInfo) : TRet  {
    return assets_manager_unref(this != null ? (this.nativeObj || this) : null, info != null ? (info.nativeObj || info) : null);
 }

};
/**
 * 滚轮事件。
 *
 */
export class TWheelEvent extends TEvent { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 把event对象转wheel_event_t对象，主要给脚本语言使用。
   * 
   * @param event event对象。
   *
   * @returns event对象。
   */
 static cast(event : TEvent) : TWheelEvent  {
    return new TWheelEvent(wheel_event_cast(event != null ? (event.nativeObj || event) : null));
 }


  /**
   * 滚轮的y值。
   *
   */
 get dy() : number {
   return wheel_event_t_get_prop_dy(this.nativeObj);
 }


  /**
   * alt键是否按下。
   *
   */
 get alt() : boolean {
   return wheel_event_t_get_prop_alt(this.nativeObj);
 }


  /**
   * ctrl键是否按下。
   *
   */
 get ctrl() : boolean {
   return wheel_event_t_get_prop_ctrl(this.nativeObj);
 }


  /**
   * shift键是否按下。
   *
   */
 get shift() : boolean {
   return wheel_event_t_get_prop_shift(this.nativeObj);
 }

};
/**
 * 滚轮事件。
 *
 */
export class TOrientationEvent extends TEvent { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 把event对象转orientation_event_t对象，主要给脚本语言使用。
   * 
   * @param event event对象。
   *
   * @returns event对象。
   */
 static cast(event : TEvent) : TOrientationEvent  {
    return new TOrientationEvent(orientation_event_cast(event != null ? (event.nativeObj || event) : null));
 }


  /**
   * 屏幕方向。
   *
   */
 get orientation() : number {
   return orientation_event_t_get_prop_orientation(this.nativeObj);
 }

};
/**
 * 值变化事件。
 *
 */
export class TValueChangeEvent extends TEvent { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 把event对象转value_change_event_t对象，主要给脚本语言使用。
   * 
   * @param event event对象。
   *
   * @returns event对象。
   */
 static cast(event : TEvent) : TValueChangeEvent  {
    return new TValueChangeEvent(value_change_event_cast(event != null ? (event.nativeObj || event) : null));
 }

};
/**
 * 指针事件。
 *
 */
export class TPointerEvent extends TEvent { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 把event对象转pointer_event_t对象，主要给脚本语言使用。
   * 
   * @param event event对象。
   *
   * @returns event对象。
   */
 static cast(event : TEvent) : TPointerEvent  {
    return new TPointerEvent(pointer_event_cast(event != null ? (event.nativeObj || event) : null));
 }


  /**
   * x坐标。
   *
   */
 get x() : number {
   return pointer_event_t_get_prop_x(this.nativeObj);
 }


  /**
   * y坐标。
   *
   */
 get y() : number {
   return pointer_event_t_get_prop_y(this.nativeObj);
 }


  /**
   * button。
   *
   */
 get button() : number {
   return pointer_event_t_get_prop_button(this.nativeObj);
 }


  /**
   * 指针是否按下。
   *
   */
 get pressed() : boolean {
   return pointer_event_t_get_prop_pressed(this.nativeObj);
 }


  /**
   * alt键是否按下。
   *
   */
 get alt() : boolean {
   return pointer_event_t_get_prop_alt(this.nativeObj);
 }


  /**
   * ctrl键是否按下。
   *
   */
 get ctrl() : boolean {
   return pointer_event_t_get_prop_ctrl(this.nativeObj);
 }


  /**
   * cmd键是否按下。
   *
   */
 get cmd() : boolean {
   return pointer_event_t_get_prop_cmd(this.nativeObj);
 }


  /**
   * menu键是否按下。
   *
   */
 get menu() : boolean {
   return pointer_event_t_get_prop_menu(this.nativeObj);
 }


  /**
   * shift键是否按下。
   *
   */
 get shift() : boolean {
   return pointer_event_t_get_prop_shift(this.nativeObj);
 }

};
/**
 * 按键事件。
 *
 */
export class TKeyEvent extends TEvent { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 把event对象转key_event_t对象，主要给脚本语言使用。
   * 
   * @param event event对象。
   *
   * @returns event对象。
   */
 static cast(event : TEvent) : TKeyEvent  {
    return new TKeyEvent(key_event_cast(event != null ? (event.nativeObj || event) : null));
 }


  /**
   * 键值。
   *
   */
 get key() : number {
   return key_event_t_get_prop_key(this.nativeObj);
 }


  /**
   * alt键是否按下。
   *
   */
 get alt() : boolean {
   return key_event_t_get_prop_alt(this.nativeObj);
 }


  /**
   * left alt键是否按下。
   *
   */
 get lalt() : boolean {
   return key_event_t_get_prop_lalt(this.nativeObj);
 }


  /**
   * right alt键是否按下。
   *
   */
 get ralt() : boolean {
   return key_event_t_get_prop_ralt(this.nativeObj);
 }


  /**
   * right alt键是否按下。
   *ctrl键是否按下。
   *
   */
 get ctrl() : boolean {
   return key_event_t_get_prop_ctrl(this.nativeObj);
 }


  /**
   * left ctrl键是否按下。
   *
   */
 get lctrl() : boolean {
   return key_event_t_get_prop_lctrl(this.nativeObj);
 }


  /**
   * right ctrl键是否按下。
   *
   */
 get rctrl() : boolean {
   return key_event_t_get_prop_rctrl(this.nativeObj);
 }


  /**
   * shift键是否按下。
   *
   */
 get shift() : boolean {
   return key_event_t_get_prop_shift(this.nativeObj);
 }


  /**
   * left shift键是否按下。
   *
   */
 get lshift() : boolean {
   return key_event_t_get_prop_lshift(this.nativeObj);
 }


  /**
   * right shift键是否按下。
   *
   */
 get rshift() : boolean {
   return key_event_t_get_prop_rshift(this.nativeObj);
 }


  /**
   * left shift键是否按下。
   *cmd/win键是否按下。
   *
   */
 get cmd() : boolean {
   return key_event_t_get_prop_cmd(this.nativeObj);
 }


  /**
   * menu键是否按下。
   *
   */
 get menu() : boolean {
   return key_event_t_get_prop_menu(this.nativeObj);
 }


  /**
   * capslock键是否按下。
   *
   */
 get capslock() : boolean {
   return key_event_t_get_prop_capslock(this.nativeObj);
 }

};
/**
 * 绘制事件。
 *
 */
export class TPaintEvent extends TEvent { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 把event对象转paint_event_t对象。主要给脚本语言使用。
   * 
   * @param event event对象。
   *
   * @returns event 对象。
   */
 static cast(event : TEvent) : TPaintEvent  {
    return new TPaintEvent(paint_event_cast(event != null ? (event.nativeObj || event) : null));
 }


  /**
   * canvas。
   *
   */
 get c() : TCanvas {
   return new TCanvas(paint_event_t_get_prop_c(this.nativeObj));
 }

};
/**
 * 窗口事件，由窗口管理器触发。
 *
 */
export class TWindowEvent extends TEvent { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 把event对象转window_event_t对象。主要给脚本语言使用。
   * 
   * @param event event对象。
   *
   * @returns 对象。
   */
 static cast(event : TEvent) : TWindowEvent  {
    return new TWindowEvent(window_event_cast(event != null ? (event.nativeObj || event) : null));
 }


  /**
   * canvas。
   *
   */
 get window() : TWidget {
   return new TWidget(window_event_t_get_prop_window(this.nativeObj));
 }

};
/**
 * 多点触摸手势事件。
 *
 */
export class TMultiGestureEvent extends TEvent { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 把event对象转multi_gesture_event_t对象，主要给脚本语言使用。
   * 
   * @param event event对象。
   *
   * @returns event对象。
   */
 static cast(event : TEvent) : TMultiGestureEvent  {
    return new TMultiGestureEvent(multi_gesture_event_cast(event != null ? (event.nativeObj || event) : null));
 }


  /**
   * 中心点x坐标。
   *
   */
 get x() : number {
   return multi_gesture_event_t_get_prop_x(this.nativeObj);
 }


  /**
   * 中心点y坐标。
   *
   */
 get y() : number {
   return multi_gesture_event_t_get_prop_y(this.nativeObj);
 }


  /**
   * 旋转角度(幅度)增量。（单位弧度）
   *
   */
 get rotation() : number {
   return multi_gesture_event_t_get_prop_rotation(this.nativeObj);
 }


  /**
   * 两点间的距离增量。(-1,0)表示缩小，(0-1)表示增加。
   *
   */
 get distance() : number {
   return multi_gesture_event_t_get_prop_distance(this.nativeObj);
 }

};
/**
 * 图片控件基类。
 *
 *本类把图片相关控件的公共行为进行抽象，放到一起方便重用。目前已知的具体实现如下图：
 *
 *
 *
 *> 本类是一个抽象类，不能进行实例化。请在应用程序中使用具体的类，如image\_t。
 *
 *如果需要显示文件系统中的图片，只需将图片名称换成实际的文件名，并加上"file://"前缀即可。如：
 *
 *```
 *<image draw_type="center" image="file://./design/default/images/xx/flag_CN.png" />
 *<gif image="file://./design/default/images/x2/bee.gif" />
 *<svg image="file://./design/default/images/svg/china.bsvg" />
 *```
 *
 */
export class TImageBase extends TWidget { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 设置控件的图片名称。
   *
   *> 如果需要显示文件系统中的图片，只需将图片名称换成实际的文件名，并加上"file://"前缀即可。
   * 
   * @param name 图片名称，该图片必须存在于资源管理器。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setImage(name : string) : TRet  {
    return image_base_set_image(this != null ? (this.nativeObj || this) : null, name);
 }


  /**
   * 设置控件的旋转角度(仅在WITH_VGCANVAS定义时生效)。
   * 
   * @param rotation 旋转角度(幅度)。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setRotation(rotation : number) : TRet  {
    return image_base_set_rotation(this != null ? (this.nativeObj || this) : null, rotation);
 }


  /**
   * 设置控件的缩放比例(仅在WITH_VGCANVAS定义时生效)。
   * 
   * @param scale_x X方向缩放比例。
   * @param scale_y Y方向缩放比例。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setScale(scale_x : number, scale_y : number) : TRet  {
    return image_base_set_scale(this != null ? (this.nativeObj || this) : null, scale_x, scale_y);
 }


  /**
   * 设置控件的锚点(仅在WITH_VGCANVAS定义时生效)。
   * 
   * @param anchor_x 锚点X(0-1)。0在控件左边，0.5在控件中间，1在控件右边。
   * @param anchor_y 锚点Y(0-1)。0在控件顶部，0.5在控件中间，1在控件底部。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setAnchor(anchor_x : number, anchor_y : number) : TRet  {
    return image_base_set_anchor(this != null ? (this.nativeObj || this) : null, anchor_x, anchor_y);
 }


  /**
   * 设置控件的选中状态。
   * 
   * @param selected 是否被选中。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setSelected(selected : boolean) : TRet  {
    return image_base_set_selected(this != null ? (this.nativeObj || this) : null, selected);
 }


  /**
   * 设置控件是否可以被选中。
   * 
   * @param selectable 是否可以被选中。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setSelectable(selectable : boolean) : TRet  {
    return image_base_set_selectable(this != null ? (this.nativeObj || this) : null, selectable);
 }


  /**
   * 设置控件是否可以被点击。
   * 
   * @param clickable 是否可以被点击。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setClickable(clickable : boolean) : TRet  {
    return image_base_set_clickable(this != null ? (this.nativeObj || this) : null, clickable);
 }


  /**
   * 转换为image_base对象(供脚本语言使用)。
   * 
   * @param widget image_base对象。
   *
   * @returns image_base对象。
   */
 static cast(widget : TWidget) : TImageBase  {
    return new TImageBase(image_base_cast(widget != null ? (widget.nativeObj || widget) : null));
 }


  /**
   * 图片的名称。
   *
   */
 get image() : string {
   return image_base_t_get_prop_image(this.nativeObj);
 }

 set image(v : string) {
   this.setImage(v);
 }


  /**
   * 锚点X(0-1)。0在控件左边，0.5在控件中间，1在控件右边。
   *
   */
 get anchorX() : number {
   return image_base_t_get_prop_anchor_x(this.nativeObj);
 }


  /**
   * 锚点Y(0-1)。0在控件顶部，0.5在控件中间，1在控件底部。
   *
   */
 get anchorY() : number {
   return image_base_t_get_prop_anchor_y(this.nativeObj);
 }


  /**
   * 控件在X方向上的缩放比例。
   *
   */
 get scaleX() : number {
   return image_base_t_get_prop_scale_x(this.nativeObj);
 }


  /**
   * 控件在Y方向上的缩放比例。
   *
   */
 get scaleY() : number {
   return image_base_t_get_prop_scale_y(this.nativeObj);
 }


  /**
   * 控件的旋转角度(幅度)。
   *
   */
 get rotation() : number {
   return image_base_t_get_prop_rotation(this.nativeObj);
 }

 set rotation(v : number) {
   this.setRotation(v);
 }


  /**
   * 点击时，是否触发EVT_CLICK事件。
   *
   */
 get clickable() : boolean {
   return image_base_t_get_prop_clickable(this.nativeObj);
 }

 set clickable(v : boolean) {
   this.setClickable(v);
 }


  /**
   * 是否设置选中状态。
   *
   */
 get selectable() : boolean {
   return image_base_t_get_prop_selectable(this.nativeObj);
 }

 set selectable(v : boolean) {
   this.setSelectable(v);
 }


  /**
   * 当前是否被选中。
   *
   */
 get selected() : boolean {
   return image_base_t_get_prop_selected(this.nativeObj);
 }

 set selected(v : boolean) {
   this.setSelected(v);
 }

};
/**
 * 可变的style(可实时修改并生效，主要用于在designer中被编辑的控件，或者一些特殊控件)。
 *
 *style\_mutable也对style\_const进行了包装，当用户没修改某个值时，便从style\_const中获取。
 *
 */
export class TStyleMutable extends TStyle { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 设置style的名称。
   * 
   * @param name 名称。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setName(name : string) : TRet  {
    return style_mutable_set_name(this != null ? (this.nativeObj || this) : null, name);
 }


  /**
   * 设置指定名称整数格式的值。
   * 
   * @param state 控件状态。
   * @param name 属性名。
   * @param val 值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setInt(state : string, name : string, val : number) : TRet  {
    return style_mutable_set_int(this != null ? (this.nativeObj || this) : null, state, name, val);
 }


  /**
   * 转换为style_mutable对象。
   * 
   * @param s style对象。
   *
   * @returns style对象。
   */
 static cast(s : TStyle) : TStyleMutable  {
    return new TStyleMutable(style_mutable_cast(s != null ? (s.nativeObj || s) : null));
 }


  /**
   * 创建style\_mutable对象。
   *
   *> 除了测试程序外不需要直接调用，widget会通过style\_factory\_create创建。
   * 
   * @param default_style 缺省的style。
   *
   * @returns style对象。
   */
 static create(default_style : TStyle) : TStyleMutable  {
    return new TStyleMutable(style_mutable_create(default_style != null ? (default_style.nativeObj || default_style) : null));
 }


  /**
   * 名称。
   *
   */
 get name() : string {
   return style_mutable_t_get_prop_name(this.nativeObj);
 }

 set name(v : string) {
   this.setName(v);
 }

};
/**
 * 窗口。
 *
 *本类把窗口相关的公共行为进行抽象，放到一起方便重用。目前已知的具体实现如下图：
 *
 *
 *
 *> 本类是一个抽象类，不能进行实例化。请在应用程序中使用具体的类，如window\_t。
 *
 */
export class TWindowBase extends TWidget { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 转换为window_base对象(供脚本语言使用)。
   * 
   * @param widget window_base对象。
   *
   * @returns window_base对象。
   */
 static cast(widget : TWidget) : TWindowBase  {
    return new TWindowBase(window_base_cast(widget != null ? (widget.nativeObj || widget) : null));
 }


  /**
   * 窗体样式资源的名称。
   *每个窗口都可以有独立的窗体样式文件，如果没指定，则使用系统缺省的窗体样式文件。
   *窗体样式是一个XML文件，放在assets/raw/styles目录下。
   *请参考[窗体样式](https://github.com/zlgopen/awtk/blob/master/docs/theme.md)
   *
   */
 get theme() : string {
   return window_base_t_get_prop_theme(this.nativeObj);
 }


  /**
   * 设计时宽度。
   *
   */
 get designW() : number {
   return window_base_t_get_prop_design_w(this.nativeObj);
 }


  /**
   * 设计时高度。
   *
   */
 get designH() : number {
   return window_base_t_get_prop_design_h(this.nativeObj);
 }


  /**
   * 窗口大小与设计时大小不同时，是否自动调整子控件的x坐标。
   *
   */
 get autoScaleChildrenX() : boolean {
   return window_base_t_get_prop_auto_scale_children_x(this.nativeObj);
 }


  /**
   * 窗口大小与设计时大小不同时，是否自动调整子控件的y坐标。
   *
   */
 get autoScaleChildrenY() : boolean {
   return window_base_t_get_prop_auto_scale_children_y(this.nativeObj);
 }


  /**
   * 窗口大小与设计时大小不同时，是否自动调整子控件的宽度。
   *
   */
 get autoScaleChildrenW() : boolean {
   return window_base_t_get_prop_auto_scale_children_w(this.nativeObj);
 }


  /**
   * 窗口大小与设计时大小不同时，是否自动调整子控件的高度。
   *
   */
 get autoScaleChildrenH() : boolean {
   return window_base_t_get_prop_auto_scale_children_h(this.nativeObj);
 }


  /**
   * 禁用窗口动画。
   *
   */
 get disableAnim() : boolean {
   return window_base_t_get_prop_disable_anim(this.nativeObj);
 }


  /**
   * 收到EVT_REQUEST_CLOSE_WINDOW是否自动关闭窗口。
   *
   *如果关闭窗口时，需要用户确认:
   *
   ** 1.将closable设置为WINDOW\_CLOSABLE\_CONFIRM
   *
   ** 2.处理窗口的EVT\_REQUEST\_CLOSE\_WINDOW事件
   *
   *> closable在XML中取值为：yes/no/confirm，缺省为yes。
   *
   */
 get closable() : TWindowClosable {
   return window_base_t_get_prop_closable(this.nativeObj);
 }


  /**
   * 打开窗口动画的名称。
   *请参考[窗口动画](https://github.com/zlgopen/awtk/blob/master/docs/window_animator.md)
   *
   */
 get openAnimHint() : string {
   return window_base_t_get_prop_open_anim_hint(this.nativeObj);
 }


  /**
   * 关闭窗口动画的名称。
   *请参考[窗口动画](https://github.com/zlgopen/awtk/blob/master/docs/window_animator.md)
   *
   */
 get closeAnimHint() : string {
   return window_base_t_get_prop_close_anim_hint(this.nativeObj);
 }


  /**
   * 向前移动焦点的键值。
   *
   *请参考[控件焦点](https://github.com/zlgopen/awtk/blob/master/docs/widget_focus.md)
   *
   */
 get moveFocusPrevKey() : string {
   return window_base_t_get_prop_move_focus_prev_key(this.nativeObj);
 }


  /**
   * 向后移动焦点的键值。
   *
   *请参考[控件焦点](https://github.com/zlgopen/awtk/blob/master/docs/widget_focus.md)
   *
   */
 get moveFocusNextKey() : string {
   return window_base_t_get_prop_move_focus_next_key(this.nativeObj);
 }


  /**
   * 向上移动焦点的键值。
   *
   *请参考[控件焦点](https://github.com/zlgopen/awtk/blob/master/docs/widget_focus.md)
   *
   */
 get moveFocusUpKey() : string {
   return window_base_t_get_prop_move_focus_up_key(this.nativeObj);
 }


  /**
   * 向下移动焦点的键值。
   *
   *请参考[控件焦点](https://github.com/zlgopen/awtk/blob/master/docs/widget_focus.md)
   *
   */
 get moveFocusDownKey() : string {
   return window_base_t_get_prop_move_focus_down_key(this.nativeObj);
 }


  /**
   * 向左移动焦点的键值。
   *
   *请参考[控件焦点](https://github.com/zlgopen/awtk/blob/master/docs/widget_focus.md)
   *
   */
 get moveFocusLeftKey() : string {
   return window_base_t_get_prop_move_focus_left_key(this.nativeObj);
 }


  /**
   * 向右移动焦点的键值。
   *
   *请参考[控件焦点](https://github.com/zlgopen/awtk/blob/master/docs/widget_focus.md)
   *
   */
 get moveFocusRightKey() : string {
   return window_base_t_get_prop_move_focus_right_key(this.nativeObj);
 }


  /**
   * 单例。如果窗口存在，先关闭再打开。
   *
   */
 get singleInstance() : boolean {
   return window_base_t_get_prop_single_instance(this.nativeObj);
 }


  /**
   * 点击非focusable控件时，是否让当前焦点控件失去焦点。比如点击窗口空白区域，是否让编辑器失去焦点。
   *
   */
 get stronglyFocus() : boolean {
   return window_base_t_get_prop_strongly_focus(this.nativeObj);
 }

};
/**
 * 窗口管理器。
 *
 */
export class TWindowManager extends TWidget { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 获取全局window_manager对象
   * 
   *
   * @returns 对象。
   */
 static instance() : TWindowManager  {
    return new TWindowManager(window_manager());
 }


  /**
   * 转换为window_manager对象(供脚本语言使用)。
   * 
   * @param widget window_manager对象。
   *
   * @returns window_manager对象。
   */
 static cast(widget : TWidget) : TWindowManager  {
    return new TWindowManager(window_manager_cast(widget != null ? (widget.nativeObj || widget) : null));
 }


  /**
   * 获取最上面的主窗口。
   * 
   *
   * @returns 返回窗口对象。
   */
 getTopMainWindow() : TWidget  {
    return new TWidget(window_manager_get_top_main_window(this != null ? (this.nativeObj || this) : null));
 }


  /**
   * 获取最上面的窗口。
   * 
   *
   * @returns 返回窗口对象。
   */
 getTopWindow() : TWidget  {
    return new TWidget(window_manager_get_top_window(this != null ? (this.nativeObj || this) : null));
 }


  /**
   * 获取前一个的窗口。
   * 
   *
   * @returns 返回窗口对象。
   */
 getPrevWindow() : TWidget  {
    return new TWidget(window_manager_get_prev_window(this != null ? (this.nativeObj || this) : null));
 }


  /**
   * 获取指针当前的X坐标。
   * 
   *
   * @returns 返回指针当前的X坐标。
   */
 getPointerX() : number  {
    return window_manager_get_pointer_x(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 获取指针当前的Y坐标。
   * 
   *
   * @returns 返回指针当前的X坐标。
   */
 getPointerY() : number  {
    return window_manager_get_pointer_y(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 获取指针当前是否按下。
   * 
   *
   * @returns 返回指针当前是否按下。
   */
 getPointerPressed() : boolean  {
    return window_manager_get_pointer_pressed(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 获取当前窗口动画是否正在播放。
   * 
   *
   * @returns 返回TRUE表示正在播放，FALSE表示没有播放。
   */
 isAnimating() : boolean  {
    return window_manager_is_animating(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 设置是否显示FPS。
   * 
   * @param show_fps 是否显示FPS。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setShowFps(show_fps : boolean) : TRet  {
    return window_manager_set_show_fps(this != null ? (this.nativeObj || this) : null, show_fps);
 }


  /**
   * 限制最大帧率。
   *
   *> TK\_MAX\_LOOP\_FPS/max\_fps最好是整数，比如TK\_MAX\_LOOP\_FPS为120，max\_fps可取60/30/20/10等。
   * 
   * @param max_fps 最大帧率。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setMaxFps(max_fps : number) : TRet  {
    return window_manager_set_max_fps(this != null ? (this.nativeObj || this) : null, max_fps);
 }


  /**
   * 设置是否忽略用户输入事件。
   * 
   * @param ignore_input_events 是否忽略用户输入事件。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setIgnoreInputEvents(ignore_input_events : boolean) : TRet  {
    return window_manager_set_ignore_input_events(this != null ? (this.nativeObj || this) : null, ignore_input_events);
 }


  /**
   * 设置屏保时间。
   * 
   * @param screen_saver_time 屏保时间(单位毫秒), 为0关闭屏保。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setScreenSaverTime(screen_saver_time : number) : TRet  {
    return window_manager_set_screen_saver_time(this != null ? (this.nativeObj || this) : null, screen_saver_time);
 }


  /**
   * 设置鼠标指针。
   * 
   * @param cursor 图片名称(从图片管理器中加载)。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setCursor(cursor : string) : TRet  {
    return window_manager_set_cursor(this != null ? (this.nativeObj || this) : null, cursor);
 }


  /**
   * 请求关闭顶层窗口。
   *
   *> 如果顶层窗口时模态对话框，用DIALOG\_QUIT\_NONE调用dialog\_quit。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 back() : TRet  {
    return window_manager_back(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 回到主窗口，关闭之上的全部窗口。
   *
   *> 如果顶层窗口时模态对话框，用DIALOG\_QUIT\_NONE调用dialog\_quit。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 backToHome() : TRet  {
    return window_manager_back_to_home(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 回到指定的窗口，关闭之上的全部窗口。
   *
   *> 如果顶层窗口时模态对话框，用DIALOG\_QUIT\_NONE调用dialog\_quit。
   * 
   * @param target 目标窗口的名称。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 backTo(target : string) : TRet  {
    return window_manager_back_to(this != null ? (this.nativeObj || this) : null, target);
 }


  /**
   * 调整原生窗口的大小。
   * 
   * @param w 宽度
   * @param h 高度
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 resize(w : number, h : number) : TRet  {
    return window_manager_resize(this != null ? (this.nativeObj || this) : null, w, h);
 }


  /**
   * 关闭全部窗口。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 closeAll() : TRet  {
    return window_manager_close_all(this != null ? (this.nativeObj || this) : null);
 }

};
/**
 * 画布控件。
 *
 *画布控件让开发者可以自己在控件上绘制需要的内容。
 *
 *canvas\_widget\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于canvas\_widget\_t控件。
 *
 *在xml中使用"canvas"标签创建画布控件。如：
 *
 *```xml
 *<canvas name="paint_vgcanvas" x="0" y="0" w="100%" h="100%" />
 *```
 *
 *> 更多用法请参考：
 *[canvas_widget.xml](https://github.com/zlgopen/awtk/blob/master/design/default/ui/vgcanvas.xml)
 *
 *在c代码中使用函数canvas\_widget\_create创建画布控件。如：
 *
 *
 *> 创建之后，需要用widget\_on注册EVT\_PAINT事件，并在EVT\_PAINT事件处理函数中绘制。
 *
 *
 *绘制时，可以通过canvas接口去绘制，也可以通过vgcanvas接口去绘制。
 *先从evt获取canvas对象，再通过canvas\_get\_vgcanvas从canvas中获取vgcanvas对象。
 *
 *
 *> 完整示例请参考：
 *[canvas demo](https://github.com/zlgopen/awtk-c-demos/blob/master/demos/canvas.c)
 *
 *参考：
 *
 ** [canvas接口描述](canvas_t.md)
 ** [vgcanvas接口描述](vgcanvas_t.md)
 *
 */
export class TCanvasWidget extends TWidget { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 创建canvas_widget对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TCanvasWidget  {
    return new TCanvasWidget(canvas_widget_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }


  /**
   * 转换为canvas_widget对象(供脚本语言使用)。
   * 
   * @param widget canvas_widget对象。
   *
   * @returns canvas_widget对象。
   */
 static cast(widget : TWidget) : TCanvasWidget  {
    return new TCanvasWidget(canvas_widget_cast(widget != null ? (widget.nativeObj || widget) : null));
 }

};
/**
 * 颜色选择器的颜色分量。
 *控件的名称有严格规定：
 *COLOR_PICKER_CHILD_SV: 水平为Value/Brightness(递增)，垂直为Saturation(递减)。
 *COLOR_PICKER_CHILD_H: 水平为同色，垂直为Hue(递减)。
 *
 */
export class TColorComponent extends TWidget { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 创建color_component对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TColorComponent  {
    return new TColorComponent(color_component_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }


  /**
   * 转换为color_component对象(供脚本语言使用)。
   * 
   * @param widget color_component对象。
   *
   * @returns color_component对象。
   */
 static cast(widget : TWidget) : TColorComponent  {
    return new TColorComponent(color_component_cast(widget != null ? (widget.nativeObj || widget) : null));
 }

};
/**
 * 颜色选择器。
 *
 *color\_picker\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于color\_picker\_t控件。
 *
 *在xml中使用"color\_picker"标签创建颜色选择器控件。如：
 *
 *```xml
 *<color_picker x="0" y="0" w="100%" h="100%" value="orange">
 *<color_component x="0" y="0" w="200" h="200" name="sv"/>
 *<color_component x="210" y="0" w="20" h="200" name="h"/>
 *<color_tile x="0" y="210" w="50%" h="20" name="new" bg_color="green"/>
 *<color_tile x="right" y="210" w="50%" h="20" name="old" bg_color="blue"/>
 *</color_picker>
 *```
 *
 *> 更多用法请参考：
 *[color\_picker](https://github.com/zlgopen/awtk/blob/master/design/default/ui/color_picker.xml)
 *
 *其中的子控件必须按下列规则命名：
 *
 ** r 红色分量。可以是spin_box、edit和slider。
 ** g 绿色分量。可以是spin_box、edit和slider。
 ** b 蓝色分量。可以是spin_box、edit和slider。
 ** h Hue分量。可以是spin_box、edit、slider和color_component。
 ** s Saturation分量。可以是spin_box、edit和slider。
 ** v Value/Brightness分量。可以是spin_box、edit和slider。
 ** sv Saturation和Value/Brightness分量。可以是color_component。
 ** old 旧的值。可以是spin_box、edit和color_tile。
 ** new 新的值。可以是spin_box、edit和color_tile。
 *
 */
export class TColorPicker extends TWidget { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 创建color_picker对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TColorPicker  {
    return new TColorPicker(color_picker_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }


  /**
   * 设置颜色。
   * 
   * @param color 颜色。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setColor(color : string) : TRet  {
    return color_picker_set_color(this != null ? (this.nativeObj || this) : null, color);
 }


  /**
   * 转换为color_picker对象(供脚本语言使用)。
   * 
   * @param widget color_picker对象。
   *
   * @returns color_picker对象。
   */
 static cast(widget : TWidget) : TColorPicker  {
    return new TColorPicker(color_picker_cast(widget != null ? (widget.nativeObj || widget) : null));
 }


  /**
   * 颜色。
   *
   */
 get value() : string {
   return color_picker_t_get_prop_value(this.nativeObj);
 }

};
/**
 * 将draggable放入目标控件，即可让目标控件或当前窗口可以被拖动。
 *
 *draggable\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于draggable\_t控件。
 *
 *在xml中使用"draggable"标签创建draggable控件。如：
 *
 *```xml
 *<button text="Drag Me" w="80" h="40" x="10" y="10">
 *<draggable />
 *</button>
 *```
 *
 *拖动对话框标题时移动对话框：
 *
 *```xml
 *<dialog_title x="0" y="0" w="100%" h="30" text="Hello AWTK"
 *<draggable drag_window="true"/>
 *</dialog_title>
 *```
 *
 *> 更多用法请参考：
 *[draggable.xml](https://github.com/zlgopen/awtk/blob/master/design/default/ui/draggable.xml)
 *
 *在c代码中使用函数draggable\_create创建按钮控件。如：
 *
 *
 *> draggable本身不可见，故无需style。
 *
 */
export class TDraggable extends TWidget { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 创建draggable对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TDraggable  {
    return new TDraggable(draggable_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }


  /**
   * 转换为draggable对象(供脚本语言使用)。
   * 
   * @param widget draggable对象。
   *
   * @returns draggable对象。
   */
 static cast(widget : TWidget) : TDraggable  {
    return new TDraggable(draggable_cast(widget != null ? (widget.nativeObj || widget) : null));
 }


  /**
   * 设置top。
   * 
   * @param top 拖动范围的顶部限制。缺省为父控件的顶部。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setTop(top : number) : TRet  {
    return draggable_set_top(this != null ? (this.nativeObj || this) : null, top);
 }


  /**
   * 设置bottom。
   * 
   * @param bottom 拖动范围的底部限制。缺省为父控件的底部。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setBottom(bottom : number) : TRet  {
    return draggable_set_bottom(this != null ? (this.nativeObj || this) : null, bottom);
 }


  /**
   * 设置left。
   * 
   * @param left 拖动范围的左边限制。缺省为父控件的左边。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setLeft(left : number) : TRet  {
    return draggable_set_left(this != null ? (this.nativeObj || this) : null, left);
 }


  /**
   * 设置right。
   * 
   * @param right 拖动范围的右边限制。缺省为父控件的右边边。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setRight(right : number) : TRet  {
    return draggable_set_right(this != null ? (this.nativeObj || this) : null, right);
 }


  /**
   * 设置vertical_only。
   * 
   * @param vertical_only 只允许垂直拖动。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setVerticalOnly(vertical_only : boolean) : TRet  {
    return draggable_set_vertical_only(this != null ? (this.nativeObj || this) : null, vertical_only);
 }


  /**
   * 设置horizontal_only。
   * 
   * @param horizontal_only 只允许水平拖动。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setHorizontalOnly(horizontal_only : boolean) : TRet  {
    return draggable_set_horizontal_only(this != null ? (this.nativeObj || this) : null, horizontal_only);
 }


  /**
   * 设置drag_window。
   *拖动窗口而不是父控件。比如放在对话框的titlebar上，拖动titlebar其实是希望拖动对话框。
   * 
   * @param drag_window drag_window
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setDragWindow(drag_window : boolean) : TRet  {
    return draggable_set_drag_window(this != null ? (this.nativeObj || this) : null, drag_window);
 }


  /**
   * 拖动范围的顶部限制。缺省为父控件的顶部。
   *
   */
 get top() : number {
   return draggable_t_get_prop_top(this.nativeObj);
 }

 set top(v : number) {
   this.setTop(v);
 }


  /**
   * 拖动范围的底部限制。缺省为父控件的底部。
   *
   */
 get bottom() : number {
   return draggable_t_get_prop_bottom(this.nativeObj);
 }

 set bottom(v : number) {
   this.setBottom(v);
 }


  /**
   * 拖动范围的左边限制。缺省为父控件的左边。
   *
   */
 get left() : number {
   return draggable_t_get_prop_left(this.nativeObj);
 }

 set left(v : number) {
   this.setLeft(v);
 }


  /**
   * 拖动范围的右边限制。缺省为父控件的右边边。
   *
   */
 get right() : number {
   return draggable_t_get_prop_right(this.nativeObj);
 }

 set right(v : number) {
   this.setRight(v);
 }


  /**
   * 只允许垂直拖动。
   *
   */
 get verticalOnly() : boolean {
   return draggable_t_get_prop_vertical_only(this.nativeObj);
 }

 set verticalOnly(v : boolean) {
   this.setVerticalOnly(v);
 }


  /**
   * 只允许水平拖动。
   *
   */
 get horizontalOnly() : boolean {
   return draggable_t_get_prop_horizontal_only(this.nativeObj);
 }

 set horizontalOnly(v : boolean) {
   this.setHorizontalOnly(v);
 }


  /**
   * 拖动窗口而不是父控件。比如放在对话框的titlebar上，拖动titlebar其实是希望拖动对话框。
   *
   */
 get dragWindow() : boolean {
   return draggable_t_get_prop_drag_window(this.nativeObj);
 }

 set dragWindow(v : boolean) {
   this.setDragWindow(v);
 }

};
/**
 * 文件管理/浏览/选择控件。
 *
 *file\_browser\_view\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于file\_browser\_view\_t控件。
 *
 *考虑到文件浏览器界面呈现的多样性，界面呈现工作完全有子控件来完成。
 *
 *file\_browser\_view\_t负责关联文件/文件夹数据到子控件上，子控件需要特定的规范命名。
 *
 ** 名为 "cwd" 的子控件用于显示当前路径。
 *
 ** 名为 "selected_file" 的子控件用于显示当前选择的文件。
 *
 ** 名为 "file" 的子控件用于显示文件项的模板控件。
 *
 ** 名为 "folder" 的子控件用于显示文件夹项的模板控件。
 *
 ** 名为 "return_up" 的子控件用于返回上一级文件夹的模板控件。
 *
 ** 名为 "container" 的子控件为容器控件，通常是scrollview。
 *
 ** 名为 "name" 的子控件用于显示文件和文件夹的名称(放在列表项目内)。
 *
 ** 名为 "size" 的子控件用于显示文件和文件夹的大小(放在列表项目内)。
 *
 ** 名为 "mtime" 的子控件用于显示文件和文件夹的修改时间(放在列表项目内)。
 *
 ** 名为 "ctime" 的子控件用于显示文件和文件夹的创建时间(放在列表项目内)。
 *
 ** 名为 "icon" 的子控件用于显示文件和文件夹的图标(放在列表项目内)。
 *
 ** 类型为 "check_button" 的子控件用于选择(放在列表项目内)。
 *
 *完整示例请参考：
 *
 *https://github.com/zlgopen/awtk/blob/master/design/default/ui/file_chooser_for_open.xml
 *
 */
export class TFileBrowserView extends TWidget { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 创建file_browser_view对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TFileBrowserView  {
    return new TFileBrowserView(file_browser_view_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }


  /**
   * 转换为file_browser_view对象(供脚本语言使用)。
   * 
   * @param widget file_browser_view对象。
   *
   * @returns file_browser_view对象。
   */
 static cast(widget : TWidget) : TFileBrowserView  {
    return new TFileBrowserView(file_browser_view_cast(widget != null ? (widget.nativeObj || widget) : null));
 }


  /**
   * 设置 初始文件夹。
   * 
   * @param init_dir 初始文件夹。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setInitDir(init_dir : string) : TRet  {
    return file_browser_view_set_init_dir(this != null ? (this.nativeObj || this) : null, init_dir);
 }


  /**
   * 设置 顶层文件夹。
   * 
   * @param top_dir 初始文件夹。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setTopDir(top_dir : string) : TRet  {
    return file_browser_view_set_top_dir(this != null ? (this.nativeObj || this) : null, top_dir);
 }


  /**
   * 设置 过滤规则。
   *> files_only 表示只列出文件，dir_only 表示只列出目录，其它表示只列出满足扩展名文件集合(如：.jpg.png.gif)。
   * 
   * @param filter 过滤规则。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setFilter(filter : string) : TRet  {
    return file_browser_view_set_filter(this != null ? (this.nativeObj || this) : null, filter);
 }


  /**
   * 重新加载。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 reload() : TRet  {
    return file_browser_view_reload(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 设置 忽略隐藏文件。
   * 
   * @param ignore_hidden_files 忽略隐藏文件。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setIgnoreHiddenFiles(ignore_hidden_files : boolean) : TRet  {
    return file_browser_view_set_ignore_hidden_files(this != null ? (this.nativeObj || this) : null, ignore_hidden_files);
 }


  /**
   * 设置 是否为升序排序。
   * 
   * @param sort_ascending 是否为升序排序。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setSortAscending(sort_ascending : boolean) : TRet  {
    return file_browser_view_set_sort_ascending(this != null ? (this.nativeObj || this) : null, sort_ascending);
 }


  /**
   * 设置 是否显示checkbutton。
   * 
   * @param show_check_button 是否显示checkbutton。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setShowCheckButton(show_check_button : boolean) : TRet  {
    return file_browser_view_set_show_check_button(this != null ? (this.nativeObj || this) : null, show_check_button);
 }


  /**
   * 设置 排序方式。可选值(name, size, mtime, type)。
   * 
   * @param sort_by 排序方式。可选值(name, size, mtime, type)。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setSortBy(sort_by : string) : TRet  {
    return file_browser_view_set_sort_by(this != null ? (this.nativeObj || this) : null, sort_by);
 }


  /**
   * 获取当前路径。
   * 
   *
   * @returns 返回当前路径。
   */
 getCwd() : string  {
    return file_browser_view_get_cwd(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 在当前文件夹创建子文件夹。
   * 
   * @param name 子文件夹名。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 createDir(name : string) : TRet  {
    return file_browser_view_create_dir(this != null ? (this.nativeObj || this) : null, name);
 }


  /**
   * 在当前文件夹创建文件。
   * 
   * @param name 文件名。
   * @param data 数据。
   * @param size 数据长度。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 createFile(name : string, data : string, size : number) : TRet  {
    return file_browser_view_create_file(this != null ? (this.nativeObj || this) : null, name, data, size);
 }


  /**
   * 初始文件夹。
   *
   */
 get initDir() : string {
   return file_browser_view_t_get_prop_init_dir(this.nativeObj);
 }

 set initDir(v : string) {
   this.setInitDir(v);
 }


  /**
   * 最顶层目录。到达本目录后，不允许往上。
   *
   */
 get topDir() : string {
   return file_browser_view_t_get_prop_top_dir(this.nativeObj);
 }

 set topDir(v : string) {
   this.setTopDir(v);
 }


  /**
   * 过滤规则。
   *
   */
 get filter() : string {
   return file_browser_view_t_get_prop_filter(this.nativeObj);
 }

 set filter(v : string) {
   this.setFilter(v);
 }


  /**
   * 是否忽略隐藏文件。
   *
   */
 get ignoreHiddenFiles() : boolean {
   return file_browser_view_t_get_prop_ignore_hidden_files(this.nativeObj);
 }

 set ignoreHiddenFiles(v : boolean) {
   this.setIgnoreHiddenFiles(v);
 }


  /**
   * 是否为升序排序。
   *
   */
 get sortAscending() : boolean {
   return file_browser_view_t_get_prop_sort_ascending(this.nativeObj);
 }

 set sortAscending(v : boolean) {
   this.setSortAscending(v);
 }


  /**
   * 是否显示checkbutton。
   *
   */
 get showCheckButton() : boolean {
   return file_browser_view_t_get_prop_show_check_button(this.nativeObj);
 }

 set showCheckButton(v : boolean) {
   this.setShowCheckButton(v);
 }


  /**
   * 排序方式。可选值(name, size, mtime, type)。
   *
   */
 get sortBy() : string {
   return file_browser_view_t_get_prop_sort_by(this.nativeObj);
 }

 set sortBy(v : string) {
   this.setSortBy(v);
 }

};
/**
 * 文件/目录选择器
 *
 */
export class TFileChooser extends TEmitter { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 创建file_chooser对象
   * 
   *
   * @returns 对象。
   */
 static create() : TFileChooser  {
    return new TFileChooser(file_chooser_create());
 }


  /**
   * 设置初始目录。
   * 
   * @param init_dir 初始目录
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setInitDir(init_dir : string) : TRet  {
    return file_chooser_set_init_dir(this != null ? (this.nativeObj || this) : null, init_dir);
 }


  /**
   * 设置初始目录。
   * 
   * @param top_dir 初始目录
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setTopDir(top_dir : string) : TRet  {
    return file_chooser_set_top_dir(this != null ? (this.nativeObj || this) : null, top_dir);
 }


  /**
   * 设置过滤规则。
   *> files_only 表示只列出文件，dir_only 表示只列出目录，其它表示只列出满足扩展名文件集合(如：.jpg.png.gif)。
   * 
   * @param filter 过滤规则。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setFilter(filter : string) : TRet  {
    return file_chooser_set_filter(this != null ? (this.nativeObj || this) : null, filter);
 }


  /**
   * 转换为file_chooser对象(供脚本语言使用)。
   * 
   * @param chooser file_chooser对象。
   *
   * @returns 对象。
   */
 static cast(chooser : TFileChooser) : TFileChooser  {
    return new TFileChooser(file_chooser_cast(chooser != null ? (chooser.nativeObj || chooser) : null));
 }


  /**
   * 为了保存而选择文件。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 chooseFileForSave() : TRet  {
    return file_chooser_choose_file_for_save(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 为了打开而选择文件。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 chooseFileForOpen() : TRet  {
    return file_chooser_choose_file_for_open(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 选择目录。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 chooseFolder() : TRet  {
    return file_chooser_choose_folder(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 获取目录。
   * 
   *
   * @returns 返回选择的目录。
   */
 getDir() : string  {
    return file_chooser_get_dir(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 获取文件名。
   * 
   *
   * @returns 返回选择的文件名。
   */
 getFilename() : string  {
    return file_chooser_get_filename(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 用户是否取消了选择。
   * 
   *
   * @returns 返回用户是否取消了选择。
   */
 isAborted() : boolean  {
    return file_chooser_is_aborted(this != null ? (this.nativeObj || this) : null);
 }

};
/**
 * 仪表指针控件。
 *
 *仪表指针就是一张旋转的图片，图片可以是普通图片也可以是SVG图片。
 *
 *在嵌入式平台上，对于旋转的图片，SVG图片的效率比位图高数倍，所以推荐使用SVG图片。
 *
 *gauge\_pointer\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于gauge\_pointer\_t控件。
 *
 *在xml中使用"gauge\_pointer"标签创建仪表指针控件。如：
 *
 *```xml
 *<gauge_pointer x="c" y="50" w="24" h="140" value="-128" image="gauge_pointer" />
 *```
 *
 *> 更多用法请参考：
 *[gauge.xml](https://github.com/zlgopen/awtk/blob/master/design/default/ui/gauge.xml)
 *
 *在c代码中使用函数gauge\_pointer\_create创建仪表指针控件。如：
 *
 *
 *> 创建之后，需要用gauge\_pointer\_set\_image设置仪表指针图片。
 *
 */
export class TGaugePointer extends TWidget { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 创建gauge_pointer对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TGaugePointer  {
    return new TGaugePointer(gauge_pointer_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }


  /**
   * 转换为gauge_pointer对象(供脚本语言使用)。
   * 
   * @param widget gauge_pointer对象。
   *
   * @returns gauge_pointer对象。
   */
 static cast(widget : TWidget) : TGaugePointer  {
    return new TGaugePointer(gauge_pointer_cast(widget != null ? (widget.nativeObj || widget) : null));
 }


  /**
   * 设置指针角度。12点钟方向为0度，顺时钟方向为正，单位为度。
   * 
   * @param angle 指针角度。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setAngle(angle : number) : TRet  {
    return gauge_pointer_set_angle(this != null ? (this.nativeObj || this) : null, angle);
 }


  /**
   * 设置指针的图片。
   * 
   * @param image 指针的图片。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setImage(image : string) : TRet  {
    return gauge_pointer_set_image(this != null ? (this.nativeObj || this) : null, image);
 }


  /**
   * 设置指针的旋转锚点。
   * 
   * @param anchor_x 指针的锚点坐标x。(后面加上px为像素点，不加px为相对百分比坐标)
   * @param anchor_y 指针的锚点坐标y。(后面加上px为像素点，不加px为相对百分比坐标)
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setAnchor(anchor_x : string, anchor_y : string) : TRet  {
    return gauge_pointer_set_anchor(this != null ? (this.nativeObj || this) : null, anchor_x, anchor_y);
 }


  /**
   * 指针角度。12点钟方向为0度，顺时钟方向为正，单位为度。
   *
   */
 get angle() : number {
   return gauge_pointer_t_get_prop_angle(this.nativeObj);
 }

 set angle(v : number) {
   this.setAngle(v);
 }


  /**
   * 指针图片。
   *
   *图片须垂直向上，图片的中心点为旋转方向。
   *
   */
 get image() : string {
   return gauge_pointer_t_get_prop_image(this.nativeObj);
 }

 set image(v : string) {
   this.setImage(v);
 }


  /**
   * 图片旋转锚点x坐标。(后面加上px为像素点，不加px为相对百分比坐标0.0f到1.0f)
   *
   */
 get anchorX() : string {
   return gauge_pointer_t_get_prop_anchor_x(this.nativeObj);
 }


  /**
   * 图片旋转锚点x坐标。(后面加上px为像素点，不加px为相对百分比坐标0.0f到1.0f)
   *
   */
 get anchorY() : string {
   return gauge_pointer_t_get_prop_anchor_y(this.nativeObj);
 }

};
/**
 * 表盘控件。
 *
 *表盘控件就是一张图片。
 *
 *gauge\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于gauge\_t控件。
 *
 *在xml中使用"gauge"标签创建表盘控件。如：
 *
 *```xml
 *<gauge x="c" y="10" w="240" h="240" image="gauge_bg"
 *```
 *
 *> 更多用法请参考：
 *[gauge.xml](https://github.com/zlgopen/awtk/blob/master/design/default/ui/gauge.xml)
 *
 *在c代码中使用函数gauge\_create创建表盘控件。如：
 *
 *
 *可用通过style来设置控件的显示风格，如背景和边框等。如：
 *
 *```xml
 *<gauge>
 *<style name="border">
 *<normal border_color="#000000" bg_color="#e0e0e0" text_color="black"/>
 *</style>
 *</gauge>
 *```
 *
 *> 更多用法请参考：
 *[theme
 *default](https://github.com/zlgopen/awtk/blob/master/design/default/styles/default.xml)
 *
 */
export class TGauge extends TWidget { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 创建gauge对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TGauge  {
    return new TGauge(gauge_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }


  /**
   * 转换为gauge对象(供脚本语言使用)。
   * 
   * @param widget gauge对象。
   *
   * @returns gauge对象。
   */
 static cast(widget : TWidget) : TGauge  {
    return new TGauge(gauge_cast(widget != null ? (widget.nativeObj || widget) : null));
 }


  /**
   * 设置背景图片的名称。
   * 
   * @param name 图片名称，该图片必须存在于资源管理器。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setImage(name : string) : TRet  {
    return gauge_set_image(this != null ? (this.nativeObj || this) : null, name);
 }


  /**
   * 设置图片的显示方式。
   *
   *> 绘制方式的属性值和枚举值:
   *[image\_draw\_type\_name\_value](https://github.com/zlgopen/awtk/blob/master/src/base/enums.c#L98)
   * 
   * @param draw_type 显示方式。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setDrawType(draw_type : TImageDrawType) : TRet  {
    return gauge_set_draw_type(this != null ? (this.nativeObj || this) : null, draw_type);
 }


  /**
   * 背景图片。
   *
   */
 get image() : string {
   return gauge_t_get_prop_image(this.nativeObj);
 }

 set image(v : string) {
   this.setImage(v);
 }


  /**
   * 图片的绘制方式。
   *
   */
 get drawType() : TImageDrawType {
   return gauge_t_get_prop_draw_type(this.nativeObj);
 }

 set drawType(v : TImageDrawType) {
   this.setDrawType(v);
 }

};
/**
 * 图片动画控件，指定一个图片前缀，依次显示指定序列的图片，从而形成动画效果。
 *
 *图片序列可以用sequence指定，也可以用start\_index和end\_index指定一个范围。
 *
 *image\_animation\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于image\_animation\_t控件。
 *
 *在xml中使用"image\_animation"标签创建图片动画控件。如：
 *
 *```xml
 *<image_animation image="ani" start_index="1" end_index="9" auto_play="true" interval="50"
 *delay="100"/>
 *```
 *
 *> 更多用法请参考：
 *[image_animation.xml](https://github.com/zlgopen/awtk/blob/master/design/default/ui/image_animation.xml)
 *
 *在c代码中使用函数image\_animation\_create创建图片动画控件。如：
 *
 *
 *> 完整示例请参考：
 *[image_animation
 *demo](https://github.com/zlgopen/awtk-c-demos/blob/master/demos/image_animation.c)
 *
 *可用通过style来设置控件的显示风格，如背景颜色和边框等等，不过一般情况并不需要。
 *
 */
export class TImageAnimation extends TWidget { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 创建image_animation对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TImageAnimation  {
    return new TImageAnimation(image_animation_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }


  /**
   * 设置是否循环播放。
   * 
   * @param loop 是否循环播放。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setLoop(loop : boolean) : TRet  {
    return image_animation_set_loop(this != null ? (this.nativeObj || this) : null, loop);
 }


  /**
   * 设置图片前缀。
   * 
   * @param image 图片前缀。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setImage(image : string) : TRet  {
    return image_animation_set_image(this != null ? (this.nativeObj || this) : null, image);
 }


  /**
   * 设置播放间隔时间。
   * 
   * @param interval 间隔时间(毫秒)。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setInterval(interval : number) : TRet  {
    return image_animation_set_interval(this != null ? (this.nativeObj || this) : null, interval);
 }


  /**
   * 设置延迟播放时间(仅适用于自动播放)。
   * 
   * @param delay 延迟播放时间(毫秒)。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setDelay(delay : number) : TRet  {
    return image_animation_set_delay(this != null ? (this.nativeObj || this) : null, delay);
 }


  /**
   * 设置是否自动播放。
   * 
   * @param auto_play 是否自动播放。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setAutoPlay(auto_play : boolean) : TRet  {
    return image_animation_set_auto_play(this != null ? (this.nativeObj || this) : null, auto_play);
 }


  /**
   * 设置播放序列。比如image为"fire"，sequence为"12223", 将依次播放"fire1", "fire2", "fire2", "fire2",
   *"fire3"。
   * 
   * @param sequence 播放序列。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setSequence(sequence : string) : TRet  {
    return image_animation_set_sequence(this != null ? (this.nativeObj || this) : null, sequence);
 }


  /**
   * 设置播放序列。比如image为"fire"，start_index为0, end_index为99, 将依次播放"fire0", ...,
   *"fire99"。
   *
   *若指定的图片不存在，则重复上一张图片。
   * 
   * @param start_index 图片起始序数。
   * @param end_index 图片结束序数。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setRangeSequence(start_index : number, end_index : number) : TRet  {
    return image_animation_set_range_sequence(this != null ? (this.nativeObj || this) : null, start_index, end_index);
 }


  /**
   * 播放。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 play() : TRet  {
    return image_animation_play(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 停止(并重置index为-1)。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 stop() : TRet  {
    return image_animation_stop(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 暂停。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 pause() : TRet  {
    return image_animation_pause(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 手动切换到下一张图片。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 next() : TRet  {
    return image_animation_next(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 设置生成图片名的格式。
   *
   *XXX:生成图片名时，第一个参数是图片名前缀，第二个是序数，只能在此前提下设置格式。
   *
   *```
   *const char* format = image_animation->format ? image_animation->format : "%s%d";
   *tk_snprintf(name, TK_NAME_LEN, format, image_animation->image, image_animation->index);
   *```
   * 
   * @param format 格式。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setFormat(format : string) : TRet  {
    return image_animation_set_format(this != null ? (this.nativeObj || this) : null, format);
 }


  /**
   * 设置绘制完成后unload图片，以释放内存空间。
   * 
   * @param unload_after_paint 是否绘制完成后unload图片。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setUnloadAfterPaint(unload_after_paint : boolean) : TRet  {
    return image_animation_set_unload_after_paint(this != null ? (this.nativeObj || this) : null, unload_after_paint);
 }


  /**
   * 设置是否倒序播放。
   * 
   * @param reverse 是否倒序播放。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setReverse(reverse : boolean) : TRet  {
    return image_animation_set_reverse(this != null ? (this.nativeObj || this) : null, reverse);
 }


  /**
   * 设置结束播放后是否保持显示最后一帧。
   * 
   * @param show_when_done 是否继续显示最后一帧。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setShowWhenDone(show_when_done : boolean) : TRet  {
    return image_animation_set_show_when_done(this != null ? (this.nativeObj || this) : null, show_when_done);
 }


  /**
   * 转换为image_animation对象(供脚本语言使用)。
   * 
   * @param widget image_animation对象。
   *
   * @returns image_animation对象。
   */
 static cast(widget : TWidget) : TImageAnimation  {
    return new TImageAnimation(image_animation_cast(widget != null ? (widget.nativeObj || widget) : null));
 }


  /**
   * 判断是否在播放。
   * 
   *
   * @returns 返回TRUE表示是，否则表示否。
   */
 isPlaying() : boolean  {
    return image_animation_is_playing(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 图片名称的前缀。
   *
   */
 get image() : string {
   return image_animation_t_get_prop_image(this.nativeObj);
 }

 set image(v : string) {
   this.setImage(v);
 }


  /**
   * 播放的序列，字符可选值为数字和英文大小写字母，字符可以重复。如：0123456789或者123123abcd。
   *
   */
 get sequence() : string {
   return image_animation_t_get_prop_sequence(this.nativeObj);
 }

 set sequence(v : string) {
   this.setSequence(v);
 }


  /**
   * 图片起始序数。
   *
   */
 get startIndex() : number {
   return image_animation_t_get_prop_start_index(this.nativeObj);
 }


  /**
   * 图片结束序数。
   *
   */
 get endIndex() : number {
   return image_animation_t_get_prop_end_index(this.nativeObj);
 }


  /**
   * 是否倒序播放。
   *
   */
 get reverse() : boolean {
   return image_animation_t_get_prop_reverse(this.nativeObj);
 }

 set reverse(v : boolean) {
   this.setReverse(v);
 }


  /**
   * 是否循环播放。
   *
   */
 get loop() : boolean {
   return image_animation_t_get_prop_loop(this.nativeObj);
 }

 set loop(v : boolean) {
   this.setLoop(v);
 }


  /**
   * 是否自动播放。
   *
   */
 get autoPlay() : boolean {
   return image_animation_t_get_prop_auto_play(this.nativeObj);
 }

 set autoPlay(v : boolean) {
   this.setAutoPlay(v);
 }


  /**
   * 绘制完成后unload图片，以释放内存空间。
   *
   */
 get unloadAfterPaint() : boolean {
   return image_animation_t_get_prop_unload_after_paint(this.nativeObj);
 }

 set unloadAfterPaint(v : boolean) {
   this.setUnloadAfterPaint(v);
 }


  /**
   * 索引到图片名转换时的格式，缺省为"%s%d"。
   *
   */
 get format() : string {
   return image_animation_t_get_prop_format(this.nativeObj);
 }

 set format(v : string) {
   this.setFormat(v);
 }


  /**
   * 每张图片播放的时间(毫秒)。
   *
   */
 get interval() : number {
   return image_animation_t_get_prop_interval(this.nativeObj);
 }

 set interval(v : number) {
   this.setInterval(v);
 }


  /**
   * 自动播放时延迟播放的时间(毫秒)。
   *
   */
 get delay() : number {
   return image_animation_t_get_prop_delay(this.nativeObj);
 }

 set delay(v : number) {
   this.setDelay(v);
 }


  /**
   * 结束后是否继续显示最后一帧。
   *
   */
 get showWhenDone() : boolean {
   return image_animation_t_get_prop_show_when_done(this.nativeObj);
 }

 set showWhenDone(v : boolean) {
   this.setShowWhenDone(v);
 }

};
/**
 * 图片值控件。
 *
 *可以用图片来表示如电池电量、WIFI信号强度和其它各种数值的值。
 *
 *其原理如下：
 *
 ** 1.把value以format为格式转换成字符串。
 ** 2.把每个字符与image(图片文件名前缀)映射成一个图片名。
 ** 3.最后把这些图片显示出来。
 *
 *如果设置click\_add\_delta为非0，那么点击时自动增加指定的增量，值超过最大值时回到最小值,
 *或者值超过最小值时回到最大值。
 *
 *image\_value\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于image\_value\_t控件。
 *
 *在xml中使用"image\_value"标签创建图片值控件。如：
 *
 *```xml
 *<image_value  value="0" image="num_" />
 *```
 *
 *> 更多用法请参考：
 *[image\_value](https://github.com/zlgopen/awtk/blob/master/design/default/ui/image_value.xml)
 *
 *在c代码中使用函数image\_value\_create创建图片值控件。如：
 *
 *
 *> 完整示例请参考：
 *[image_value demo](https://github.com/zlgopen/awtk-c-demos/blob/master/demos/image_value.c)
 *
 *可用通过style来设置控件的显示风格，如背景颜色和边框等等，不过一般情况并不需要。
 *
 */
export class TImageValue extends TWidget { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 创建image_value对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TImageValue  {
    return new TImageValue(image_value_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }


  /**
   * 设置图片前缀。
   * 
   * @param image 图片前缀。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setImage(image : string) : TRet  {
    return image_value_set_image(this != null ? (this.nativeObj || this) : null, image);
 }


  /**
   * 设置格式。
   * 
   * @param format 格式。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setFormat(format : string) : TRet  {
    return image_value_set_format(this != null ? (this.nativeObj || this) : null, format);
 }


  /**
   * 设置点击时加上的增量。
   * 
   * @param delta 增量。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setClickAddDelta(delta : number) : TRet  {
    return image_value_set_click_add_delta(this != null ? (this.nativeObj || this) : null, delta);
 }


  /**
   * 设置值。
   * 
   * @param value 值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setValue(value : any) : TRet  {
    return image_value_set_value(this != null ? (this.nativeObj || this) : null, value);
 }


  /**
   * 设置最小值。
   * 
   * @param min 最小值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setMin(min : number) : TRet  {
    return image_value_set_min(this != null ? (this.nativeObj || this) : null, min);
 }


  /**
   * 设置最大值。
   * 
   * @param max 最大值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setMax(max : number) : TRet  {
    return image_value_set_max(this != null ? (this.nativeObj || this) : null, max);
 }


  /**
   * 转换为image_value对象(供脚本语言使用)。
   * 
   * @param widget image_value对象。
   *
   * @returns image_value对象。
   */
 static cast(widget : TWidget) : TImageValue  {
    return new TImageValue(image_value_cast(widget != null ? (widget.nativeObj || widget) : null));
 }


  /**
   * 图片名称的前缀。
   *
   */
 get image() : string {
   return image_value_t_get_prop_image(this.nativeObj);
 }

 set image(v : string) {
   this.setImage(v);
 }


  /**
   * 数值到字符串转换时的格式，缺省为"%d"。
   *
   */
 get format() : string {
   return image_value_t_get_prop_format(this.nativeObj);
 }

 set format(v : string) {
   this.setFormat(v);
 }


  /**
   * 点击时加上一个增量。
   *
   */
 get clickAddDelta() : number {
   return image_value_t_get_prop_click_add_delta(this.nativeObj);
 }

 set clickAddDelta(v : number) {
   this.setClickAddDelta(v);
 }


  /**
   * 值。
   *
   */
 get value() : number {
   return image_value_t_get_prop_value(this.nativeObj);
 }

 set value(v : number) {
   this.setValue(v);
 }


  /**
   * 最小值(如果设置了click\_add\_delta，到达最小值后回到最大值)。
   *
   */
 get min() : number {
   return image_value_t_get_prop_min(this.nativeObj);
 }

 set min(v : number) {
   this.setMin(v);
 }


  /**
   * 最大值(如果设置了click\_add\_delta，到达最大值后回到最小值)。
   *
   */
 get max() : number {
   return image_value_t_get_prop_max(this.nativeObj);
 }

 set max(v : number) {
   this.setMax(v);
 }

};
/**
 * 输入法候选字词控件。
 *
 *如果希望启用用数字选择对应的候选字，请设置属性grab_keys="true"。如：
 *
 *```xml
 *<candidates x="0" y="0" w="100%" h="30" grab_keys="true"/>
 *```
 *
 *>相关文件： assets/default/raw/ui/kb_default.xml
 *
 *如果希望通过左右键切换不同的候选字，除了设置属性grab_keys="true"，还需要设置按钮的focused状态的style。
 *
 *```xml
 *<style name="candidates" text_color="black">
 *<normal  />
 *<pressed    bg_color="#c0c0c0" border_color="#a0a0a0"/>
 *<over       bg_color="#e0e0e0" border_color="#a0a0a0"/>
 *<focused    border_color="#a0a0a0"/>
 *</style>
 *```
 *
 *>相关文件：assets/default/raw/styles/keyboard.xml
 *
 */
export class TCandidates extends TWidget { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 创建candidates对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TCandidates  {
    return new TCandidates(candidates_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }


  /**
   * 转换为candidates对象(供脚本语言使用)。
   * 
   * @param widget candidates对象。
   *
   * @returns candidates对象。
   */
 static cast(widget : TWidget) : TCandidates  {
    return new TCandidates(candidates_cast(widget != null ? (widget.nativeObj || widget) : null));
 }


  /**
   * 设置是否为预候选字列表。
   *
   *> 为预候选字列表则注册EVT\_IM\_SHOW\_PRE\_CANDIDATES，否则注册EVT\_IM\_SHOW\_CANDIDATES事件。
   * 
   * @param pre 是否为预候选字列表。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setPre(pre : boolean) : TRet  {
    return candidates_set_pre(this != null ? (this.nativeObj || this) : null, pre);
 }


  /**
   * 设置是否启用用数字选择候选字。
   * 
   * @param select_by_num 是否启用用数字选择候选字。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setSelectByNum(select_by_num : boolean) : TRet  {
    return candidates_set_select_by_num(this != null ? (this.nativeObj || this) : null, select_by_num);
 }


  /**
   * 设置是否自动隐藏。
   * 
   * @param auto_hide 是否自动隐藏。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setAutoHide(auto_hide : boolean) : TRet  {
    return candidates_set_auto_hide(this != null ? (this.nativeObj || this) : null, auto_hide);
 }


  /**
   * 设置按钮的style名称。
   * 
   * @param button_style 按钮的style名称。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setButtonStyle(button_style : string) : TRet  {
    return candidates_set_button_style(this != null ? (this.nativeObj || this) : null, button_style);
 }


  /**
   * 是否为预候选字。
   *
   *> 预候选字: 在有的输入法中，比如T9硬键盘输入时，按下12两个键时，预候选字会显示可用的拼音列表。
   *> 从预候选字列表中选择拼音，再查询拼音对应的候选字列表。
   *
   */
 get pre() : boolean {
   return candidates_t_get_prop_pre(this.nativeObj);
 }

 set pre(v : boolean) {
   this.setPre(v);
 }


  /**
   * 是否启用用数字选择候选字。比如按下1选择第1个候选字，按下2选择第2个候选字。
   *
   */
 get selectByNum() : boolean {
   return candidates_t_get_prop_select_by_num(this.nativeObj);
 }

 set selectByNum(v : boolean) {
   this.setSelectByNum(v);
 }


  /**
   * 没有候选字时，是否自动隐藏控件。
   *
   */
 get autoHide() : boolean {
   return candidates_t_get_prop_auto_hide(this.nativeObj);
 }

 set autoHide(v : boolean) {
   this.setAutoHide(v);
 }


  /**
   * 按钮的style名称。
   *
   */
 get buttonStyle() : string {
   return candidates_t_get_prop_button_style(this.nativeObj);
 }

 set buttonStyle(v : string) {
   this.setButtonStyle(v);
 }

};
/**
 * 输入法语言指示器。
 *
 *用于显示输入法的输入语言或类型，主要用于T9输入法。
 *
 *lang_indicator\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于lang_indicator\_t控件。
 *
 *在xml中使用"lang_indicator"标签创建lang_indicator。如：
 *
 *```xml
 *<lang_indicator x="0" y="0" w="100%" h="100%" children_layout="default(c=2,r=2,m=5,s=5)">
 *</lang_indicator>
 *```
 *
 *可用通过style来设置控件的显示风格，如背景颜色等。如：
 *
 *```xml
 *<style name="default" border_color="#a0a0a0">
 *<normal     bg_color="#f0f0f0" />
 *</style>
 *```
 *
 */
export class TLangIndicator extends TWidget { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 创建lang_indicator对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TLangIndicator  {
    return new TLangIndicator(lang_indicator_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }


  /**
   * 设置缺省获得焦点的子控件(可用控件名或类型)。
   * 
   * @param image 缺省获得焦点的子控件(可用控件名或类型)。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setImage(image : string) : TRet  {
    return lang_indicator_set_image(this != null ? (this.nativeObj || this) : null, image);
 }


  /**
   * 转换为lang_indicator对象(供脚本语言使用)。
   * 
   * @param widget lang_indicator对象。
   *
   * @returns lang_indicator对象。
   */
 static cast(widget : TWidget) : TLangIndicator  {
    return new TLangIndicator(lang_indicator_cast(widget != null ? (widget.nativeObj || widget) : null));
 }


  /**
   * 如果希望用图片格式显示，本属性用于指定图片的前缀。
   *
   */
 get image() : string {
   return lang_indicator_t_get_prop_image(this.nativeObj);
 }

 set image(v : string) {
   this.setImage(v);
 }

};
/**
 * 行号。多行编辑器的行号。
 *
 *line\_number\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于line\_number\_t控件。
 *
 *在xml中使用"lin\e_number"标签创建行号控件，一般配合mledit使用。如：
 *
 *```xml
 *<mledit x="c" y="10" h="40%" w="90%" focus="true" left_margin="36" right_margin="16"
 *wrap_word="true">
 *<line_number x="0" y="0" w="32" h="100%" value="0"/>
 *<scroll_bar_d x="right" y="0" w="14" h="100%" value="0"/>
 *</mledit>
 *```
 *
 *> 更多用法请参考：[mledit.xml](
 *https://github.com/zlgopen/awtk/blob/master/design/default/ui/mledit.xml)
 *
 *可用通过style来设置控件的显示风格，如字体的大小和颜色等等。如：
 *
 *```xml
 *<line_number>
 *<style name="default">
 *<normal text_color="black" bg_color="#d0d0d0" text_align_h="right"/>
 *</style>
 *</line_number>
 *```
 *
 *> 更多用法请参考：
 *[theme default](
 *https://github.com/zlgopen/awtk/blob/master/design/default/styles/default.xml#L556)
 *
 */
export class TLineNumber extends TWidget { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 创建line_number对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TLineNumber  {
    return new TLineNumber(line_number_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }


  /**
   * 设置顶部边距。
   * 
   * @param top_margin 顶部边距。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setTopMargin(top_margin : number) : TRet  {
    return line_number_set_top_margin(this != null ? (this.nativeObj || this) : null, top_margin);
 }


  /**
   * 设置顶部边距。
   * 
   * @param bottom_margin 顶部边距。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setBottomMargin(bottom_margin : number) : TRet  {
    return line_number_set_bottom_margin(this != null ? (this.nativeObj || this) : null, bottom_margin);
 }


  /**
   * 设置行高。
   * 
   * @param line_height 行高。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setLineHeight(line_height : number) : TRet  {
    return line_number_set_line_height(this != null ? (this.nativeObj || this) : null, line_height);
 }


  /**
   * 设置y偏移。
   * 
   * @param yoffset 行高。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setYoffset(yoffset : number) : TRet  {
    return line_number_set_yoffset(this != null ? (this.nativeObj || this) : null, yoffset);
 }


  /**
   * 转换为line_number对象(供脚本语言使用)。
   * 
   * @param widget line_number对象。
   *
   * @returns line_number对象。
   */
 static cast(widget : TWidget) : TLineNumber  {
    return new TLineNumber(line_number_cast(widget != null ? (widget.nativeObj || widget) : null));
 }

};
/**
 * 多行编辑器控件。
 *
 *mledit\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于mledit\_t控件。
 *
 *在xml中使用"mledit"标签创建多行编辑器控件。如：
 *
 *```xml
 *<mledit x="c" y="m" w="300" h="300" />
 *```
 *
 *> 更多用法请参考：[mledit.xml](
 *https://github.com/zlgopen/awtk/blob/master/design/default/ui/mledit.xml)
 *
 *在c代码中使用函数mledit\_create创建多行编辑器控件。如：
 *
 *
 *> 完整示例请参考：[mledit demo](
 *https://github.com/zlgopen/awtk-c-demos/blob/master/demos/mledit.c)
 *
 *time\_clock一般不需要设置style。
 *
 */
export class TMledit extends TWidget { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 创建mledit对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TMledit  {
    return new TMledit(mledit_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }


  /**
   * 设置编辑器是否为只读。
   * 
   * @param readonly 只读。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setReadonly(readonly : boolean) : TRet  {
    return mledit_set_readonly(this != null ? (this.nativeObj || this) : null, readonly);
 }


  /**
   * 设置编辑器是否为可撤销修改。
   * 
   * @param cancelable 是否为可撤销修。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setCancelable(cancelable : boolean) : TRet  {
    return mledit_set_cancelable(this != null ? (this.nativeObj || this) : null, cancelable);
 }


  /**
   * 设置为焦点。
   * 
   * @param focus 是否为焦点。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setFocus(focus : boolean) : TRet  {
    return mledit_set_focus(this != null ? (this.nativeObj || this) : null, focus);
 }


  /**
   * 设置编辑器是否自动折行。
   * 
   * @param wrap_word 是否自动折行。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setWrapWord(wrap_word : boolean) : TRet  {
    return mledit_set_wrap_word(this != null ? (this.nativeObj || this) : null, wrap_word);
 }


  /**
   * 设置编辑器的最大行数。
   * 
   * @param max_lines 最大行数。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setMaxLines(max_lines : number) : TRet  {
    return mledit_set_max_lines(this != null ? (this.nativeObj || this) : null, max_lines);
 }


  /**
   * 设置编辑器的最大字符数（0 为不限制字符数）。
   * 
   * @param max_chars 最大字符数。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setMaxChars(max_chars : number) : TRet  {
    return mledit_set_max_chars(this != null ? (this.nativeObj || this) : null, max_chars);
 }


  /**
   * 设置编辑器的输入提示。
   * 
   * @param tips 输入提示。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setTips(tips : string) : TRet  {
    return mledit_set_tips(this != null ? (this.nativeObj || this) : null, tips);
 }


  /**
   * 获取翻译之后的文本，然后调用mledit_set_tips。
   * 
   * @param tr_tips 提示信息。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setTrTips(tr_tips : string) : TRet  {
    return mledit_set_tr_tips(this != null ? (this.nativeObj || this) : null, tr_tips);
 }


  /**
   * 设置自定义软键盘名称。
   * 
   * @param keyboard 键盘名称(相应UI资源必须存在)。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setKeyboard(keyboard : string) : TRet  {
    return mledit_set_keyboard(this != null ? (this.nativeObj || this) : null, keyboard);
 }


  /**
   * 设置编辑器光标位置。
   * 
   * @param cursor 光标位置。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setCursor(cursor : number) : TRet  {
    return mledit_set_cursor(this != null ? (this.nativeObj || this) : null, cursor);
 }


  /**
   * 获取编辑器光标位置。
   * 
   *
   * @returns 返回光标位置。
   */
 getCursor() : number  {
    return mledit_get_cursor(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 设置编辑器滚动速度。
   * 
   * @param scroll_line 滚动行数。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setScrollLine(scroll_line : number) : TRet  {
    return mledit_set_scroll_line(this != null ? (this.nativeObj || this) : null, scroll_line);
 }


  /**
   * 设置编辑器滚动到指定偏移位置。
   * 
   * @param offset 偏移位置。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 scrollToOffset(offset : number) : TRet  {
    return mledit_scroll_to_offset(this != null ? (this.nativeObj || this) : null, offset);
 }


  /**
   * 设置编辑器是否在获得焦点时打开输入法。
   *
   *> * 设置默认焦点时，打开窗口时不弹出软键盘。
   *> * 用键盘切换焦点时，编辑器获得焦点时不弹出软键盘。
   * 
   * @param open_im_when_focused 是否在获得焦点时打开输入法。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setOpenImWhenFocused(open_im_when_focused : boolean) : TRet  {
    return mledit_set_open_im_when_focused(this != null ? (this.nativeObj || this) : null, open_im_when_focused);
 }


  /**
   * 设置编辑器是否在失去焦点时关闭输入法。
   * 
   * @param close_im_when_blured 是否是否在失去焦点时关闭输入法。在失去焦点时关闭输入法。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setCloseImWhenBlured(close_im_when_blured : boolean) : TRet  {
    return mledit_set_close_im_when_blured(this != null ? (this.nativeObj || this) : null, close_im_when_blured);
 }


  /**
   * 选择编辑器中指定范围的文本。
   * 
   * @param start 起始偏移。
   * @param end 结束偏移。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setSelect(start : number, end : number) : TRet  {
    return mledit_set_select(this != null ? (this.nativeObj || this) : null, start, end);
 }


  /**
   * 获取选中的文本。
   *使用完后需调用 TKMEM_FREE() 进行释放文本占有内存。
   * 
   *
   * @returns 返回选中文本。
   */
 getSelectedText() : string  {
    return mledit_get_selected_text(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 转换为mledit对象(供脚本语言使用)。
   * 
   * @param widget mledit对象。
   *
   * @returns mledit对象。
   */
 static cast(widget : TWidget) : TMledit  {
    return new TMledit(mledit_cast(widget != null ? (widget.nativeObj || widget) : null));
 }


  /**
   * 输入提示。
   *
   */
 get tips() : string {
   return mledit_t_get_prop_tips(this.nativeObj);
 }

 set tips(v : string) {
   this.setTips(v);
 }


  /**
   * 保存用于翻译的提示信息。
   *
   */
 get trTips() : string {
   return mledit_t_get_prop_tr_tips(this.nativeObj);
 }

 set trTips(v : string) {
   this.setTrTips(v);
 }


  /**
   * 自定义软键盘名称。
   *
   */
 get keyboard() : string {
   return mledit_t_get_prop_keyboard(this.nativeObj);
 }

 set keyboard(v : string) {
   this.setKeyboard(v);
 }


  /**
   * 最大行数。
   *
   */
 get maxLines() : number {
   return mledit_t_get_prop_max_lines(this.nativeObj);
 }

 set maxLines(v : number) {
   this.setMaxLines(v);
 }


  /**
   * 最大字符数。
   *
   */
 get maxChars() : number {
   return mledit_t_get_prop_max_chars(this.nativeObj);
 }

 set maxChars(v : number) {
   this.setMaxChars(v);
 }


  /**
   * 是否自动折行。
   *
   */
 get wrapWord() : boolean {
   return mledit_t_get_prop_wrap_word(this.nativeObj);
 }

 set wrapWord(v : boolean) {
   this.setWrapWord(v);
 }


  /**
   * 鼠标一次滚动行数。
   *
   */
 get scrollLine() : number {
   return mledit_t_get_prop_scroll_line(this.nativeObj);
 }

 set scrollLine(v : number) {
   this.setScrollLine(v);
 }


  /**
   * 编辑器是否为只读。
   *
   */
 get readonly() : boolean {
   return mledit_t_get_prop_readonly(this.nativeObj);
 }

 set readonly(v : boolean) {
   this.setReadonly(v);
 }


  /**
   * 是否支持撤销编辑。如果为TRUE，在失去焦点之前可以撤销所有修改(恢复获得焦点之前的内容)。
   *
   *> * 1.一般配合keyboard的"cancel"按钮使用。
   *> * 2.为TRUE时，如果内容有变化，会设置编辑器的状态为changed，所以此时编辑器需要支持changed状态的style。
   *
   */
 get cancelable() : boolean {
   return mledit_t_get_prop_cancelable(this.nativeObj);
 }

 set cancelable(v : boolean) {
   this.setCancelable(v);
 }


  /**
   * 获得焦点时打开输入法。
   *
   *> 主要用于没有指针设备的情况，否则每次切换焦点时都打开输入法。
   *
   */
 get openImWhenFocused() : boolean {
   return mledit_t_get_prop_open_im_when_focused(this.nativeObj);
 }

 set openImWhenFocused(v : boolean) {
   this.setOpenImWhenFocused(v);
 }


  /**
   * 是否在失去焦点时关闭输入法(默认是)。
   *
   */
 get closeImWhenBlured() : boolean {
   return mledit_t_get_prop_close_im_when_blured(this.nativeObj);
 }

 set closeImWhenBlured(v : boolean) {
   this.setCloseImWhenBlured(v);
 }

};
/**
 * 进度圆环控件。
 *
 *progress\_circle\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于progress\_circle\_t控件。
 *
 *在xml中使用"progress\_circle"标签创建进度圆环控件。如：
 *
 *```xml
 *<progress_circle max="360" show_text="true" start_angle="90" />
 *```
 *
 *> 更多用法请参考：
 *[progress_circle.xml](https://github.com/zlgopen/awtk/blob/master/design/default/ui/progress_circle.xml)
 *
 *在c代码中使用函数progress\_circle\_create创建进度圆环控件。如：
 *
 *
 *> 完整示例请参考：
 *[progress_circle
 *demo](https://github.com/zlgopen/awtk-c-demos/blob/master/demos/progress_circle.c)
 *
 *可用通过style来设置控件的显示风格，如字体的大小和颜色等等。如：
 *
 *```xml
 *<style name="default">
 *<normal text_color="green" fg_color="black" />
 *</style>
 *```
 *
 *> 更多用法请参考：
 *[theme
 *default](https://github.com/zlgopen/awtk/blob/master/design/default/styles/default.xml#L467)
 *
 */
export class TProgressCircle extends TWidget { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 创建progress_circle对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TProgressCircle  {
    return new TProgressCircle(progress_circle_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }


  /**
   * 转换为progress_circle对象(供脚本语言使用)。
   * 
   * @param widget progress_circle对象。
   *
   * @returns progress_circle对象。
   */
 static cast(widget : TWidget) : TProgressCircle  {
    return new TProgressCircle(progress_circle_cast(widget != null ? (widget.nativeObj || widget) : null));
 }


  /**
   * 设置值。
   * 
   * @param value 值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setValue(value : any) : TRet  {
    return progress_circle_set_value(this != null ? (this.nativeObj || this) : null, value);
 }


  /**
   * 设置最大值。
   * 
   * @param max 最大值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setMax(max : number) : TRet  {
    return progress_circle_set_max(this != null ? (this.nativeObj || this) : null, max);
 }


  /**
   * 设置格式。
   * 
   * @param format 格式。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setFormat(format : string) : TRet  {
    return progress_circle_set_format(this != null ? (this.nativeObj || this) : null, format);
 }


  /**
   * 设置环线的厚度。
   * 
   * @param line_width 环线的厚度。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setLineWidth(line_width : number) : TRet  {
    return progress_circle_set_line_width(this != null ? (this.nativeObj || this) : null, line_width);
 }


  /**
   * 设置起始角度。
   * 
   * @param start_angle 起始角度。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setStartAngle(start_angle : number) : TRet  {
    return progress_circle_set_start_angle(this != null ? (this.nativeObj || this) : null, start_angle);
 }


  /**
   * 设置线帽类型。
   * 
   * @param line_cap 线帽类型(round:圆头，square:方头)。。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setLineCap(line_cap : string) : TRet  {
    return progress_circle_set_line_cap(this != null ? (this.nativeObj || this) : null, line_cap);
 }


  /**
   * 设置是否显示文本。
   * 
   * @param show_text 是否显示文本。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setShowText(show_text : boolean) : TRet  {
    return progress_circle_set_show_text(this != null ? (this.nativeObj || this) : null, show_text);
 }


  /**
   * 设置是否为逆时针方向。
   * 
   * @param counter_clock_wise 是否为逆时针方向。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setCounterClockWise(counter_clock_wise : boolean) : TRet  {
    return progress_circle_set_counter_clock_wise(this != null ? (this.nativeObj || this) : null, counter_clock_wise);
 }


  /**
   * 值(缺省为0)。
   *
   */
 get value() : number {
   return progress_circle_t_get_prop_value(this.nativeObj);
 }

 set value(v : number) {
   this.setValue(v);
 }


  /**
   * 最大值(缺省为100)。
   *
   */
 get max() : number {
   return progress_circle_t_get_prop_max(this.nativeObj);
 }

 set max(v : number) {
   this.setMax(v);
 }


  /**
   * 数值到字符串转换时的格式，缺省为"%d"。
   *
   */
 get format() : string {
   return progress_circle_t_get_prop_format(this.nativeObj);
 }

 set format(v : string) {
   this.setFormat(v);
 }


  /**
   * 起始角度(单位为度，缺省-90)。
   *
   */
 get startAngle() : number {
   return progress_circle_t_get_prop_start_angle(this.nativeObj);
 }

 set startAngle(v : number) {
   this.setStartAngle(v);
 }


  /**
   * 环线的厚度(缺省为8)。
   *
   */
 get lineWidth() : number {
   return progress_circle_t_get_prop_line_width(this.nativeObj);
 }

 set lineWidth(v : number) {
   this.setLineWidth(v);
 }


  /**
   * 线帽类型(round:圆头，square:方头)。
   *
   */
 get lineCap() : string {
   return progress_circle_t_get_prop_line_cap(this.nativeObj);
 }

 set lineCap(v : string) {
   this.setLineCap(v);
 }


  /**
   * 是否为逆时针方向(缺省为FALSE)。
   *
   */
 get counterClockWise() : boolean {
   return progress_circle_t_get_prop_counter_clock_wise(this.nativeObj);
 }

 set counterClockWise(v : boolean) {
   this.setCounterClockWise(v);
 }


  /**
   * 是否显示文本(缺省为TRUE)。
   *
   */
 get showText() : boolean {
   return progress_circle_t_get_prop_show_text(this.nativeObj);
 }

 set showText(v : boolean) {
   this.setShowText(v);
 }

};
/**
 * rich_text_view是一个专用容器，用来放rich text和 scroll bar，并在两者之间建立联系。
 *
 *rich_text_view\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于rich_text_view\_t控件。
 *
 *在xml中使用"rich_text_view"标签创建rich_text_view。如：
 *
 *```xml
 *<rich_text_view x="0" y="10" w="100%" h="300">
 *<rich_text line_gap="5" x="0" y="10" w="-12" h="100%" margin="10">
 *...
 *</rich_text>
 *<scroll_bar_d name="bar" x="right" y="0" w="12" h="100%" value="0"/>
 *</rich_text_view>
 *```
 *
 *可用通过style来设置控件的显示风格，如背景颜色等。如：
 *
 *```xml
 *<style name="default" border_color="#a0a0a0">
 *<normal     bg_color="#f0f0f0" />
 *</style>
 *```
 *
 */
export class TRichTextView extends TWidget { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 创建rich_text_view对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TRichTextView  {
    return new TRichTextView(rich_text_view_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }


  /**
   * 转换为rich_text_view对象(供脚本语言使用)。
   * 
   * @param widget rich_text_view对象。
   *
   * @returns rich_text_view对象。
   */
 static cast(widget : TWidget) : TRichTextView  {
    return new TRichTextView(rich_text_view_cast(widget != null ? (widget.nativeObj || widget) : null));
 }

};
/**
 * 图文混排控件，实现简单的图文混排。
 *
 *rich\_text\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于rich\_text\_t控件。
 *
 *在xml中使用"rich\_text"标签创建图文混排控件。如：
 *
 *```xml
 *<rich_text x="0" y="0" w="100%" h="60"
 *text="<image name=&quota;bricks&quota;/><font align_v=&quota;middle&quota;>hello awtk!</font>" />
 *```
 *>
 *
 *> 更多用法请参考：
 *[rich_text.xml](https://github.com/zlgopen/awtk/blob/master/design/default/ui/rich_text.xml)
 *
 *在c代码中使用函数rich\_text\_create创建图文混排控件。如：
 *
 *
 *> 完整示例请参考：
 *[rich_text demo](https://github.com/zlgopen/awtk-c-demos/blob/master/demos/rich_text.c)
 *
 *可用通过style来设置控件的显示风格，如背景颜色等等。而字体的大小和颜色则由文本内部的属性决定。
 *
 *目前支持image和font两个tag：
 *
 ** image 支持的属性有：
 ** name 图片的名称。
 ** w 图片的宽度。
 ** h 图片的高度。
 *
 ** font 支持的属性有：
 ** color 颜色。
 ** size 大小。
 ** align_v 垂直方向对齐的方式(top|middle|bottom)。
 ** bold 粗体(暂不支持)
 ** italic 斜体(暂不支持)
 ** underline 下划线(暂不支持)
 *
 */
export class TRichText extends TWidget { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 创建rich_text对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TRichText  {
    return new TRichText(rich_text_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }


  /**
   * 设置文本。
   * 
   * @param text 文本。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setText(text : string) : TRet  {
    return rich_text_set_text(this != null ? (this.nativeObj || this) : null, text);
 }


  /**
   * 设置是否允许y方向滑动。
   * 
   * @param yslidable 是否允许滑动。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setYslidable(yslidable : boolean) : TRet  {
    return rich_text_set_yslidable(this != null ? (this.nativeObj || this) : null, yslidable);
 }


  /**
   * 转换为rich_text对象(供脚本语言使用)。
   * 
   * @param widget rich_text对象。
   *
   * @returns rich_text对象。
   */
 static cast(widget : TWidget) : TRichText  {
    return new TRichText(rich_text_cast(widget != null ? (widget.nativeObj || widget) : null));
 }


  /**
   * 行间距。
   *
   */
 get lineGap() : number {
   return rich_text_t_get_prop_line_gap(this.nativeObj);
 }


  /**
   * 标识控件是否允许上下拖动。
   *
   */
 get yslidable() : boolean {
   return rich_text_t_get_prop_yslidable(this.nativeObj);
 }

 set yslidable(v : boolean) {
   this.setYslidable(v);
 }

};
/**
 * 可水平滚动的文本控件，方便实现长文本滚动。
 *
 *
 *hscroll\_label\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于hscroll\_label\_t控件。
 *
 *在xml中使用"hscroll\_label"标签创建行号控件，一般配合mledit使用。如：
 *
 *```xml
 *```
 *
 *> 更多用法请参考：[mledit.xml](
 *https://github.com/zlgopen/awtk/blob/master/design/default/ui/mledit.xml)
 *
 *可用通过style来设置控件的显示风格，如字体的大小和颜色等等。如：
 *
 *```xml
 *<style name="default" text_color="black">
 *<normal   />
 *<focused  />
 *</style>
 *```
 *
 *> 更多用法请参考：
 *[theme default](
 *https://github.com/zlgopen/awtk/blob/master/design/default/styles/default.xml)
 *
 */
export class THscrollLabel extends TWidget { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 创建hscroll_label对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
 static create(parent : TWidget, x : number, y : number, w : number, h : number) : THscrollLabel  {
    return new THscrollLabel(hscroll_label_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }


  /**
   * 设置lull。
   * 
   * @param lull 间歇时间(ms)。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setLull(lull : number) : TRet  {
    return hscroll_label_set_lull(this != null ? (this.nativeObj || this) : null, lull);
 }


  /**
   * 设置duration。
   * 
   * @param duration 滚动时间(ms)。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setDuration(duration : number) : TRet  {
    return hscroll_label_set_duration(this != null ? (this.nativeObj || this) : null, duration);
 }


  /**
   * 设置only_focus。
   * 
   * @param only_focus 是否只有处于focus时才滚动。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setOnlyFocus(only_focus : boolean) : TRet  {
    return hscroll_label_set_only_focus(this != null ? (this.nativeObj || this) : null, only_focus);
 }


  /**
   * 设置only_parent_focus。
   * 
   * @param only_parent_focus 是否只有处于focus时才滚动。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setOnlyParentFocus(only_parent_focus : boolean) : TRet  {
    return hscroll_label_set_only_parent_focus(this != null ? (this.nativeObj || this) : null, only_parent_focus);
 }


  /**
   * 设置loop。
   * 
   * @param loop 是否循环滚动。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setLoop(loop : boolean) : TRet  {
    return hscroll_label_set_loop(this != null ? (this.nativeObj || this) : null, loop);
 }


  /**
   * 设置yoyo。
   * 
   * @param yoyo 是否往返滚动。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setYoyo(yoyo : boolean) : TRet  {
    return hscroll_label_set_yoyo(this != null ? (this.nativeObj || this) : null, yoyo);
 }


  /**
   * 设置ellipses。
   * 
   * @param ellipses 是否在文本超长时在行尾显示"..."。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setEllipses(ellipses : boolean) : TRet  {
    return hscroll_label_set_ellipses(this != null ? (this.nativeObj || this) : null, ellipses);
 }


  /**
   * 设置x偏移(一般无需用户调用)。。
   * 
   * @param xoffset x偏移。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setXoffset(xoffset : number) : TRet  {
    return hscroll_label_set_xoffset(this != null ? (this.nativeObj || this) : null, xoffset);
 }


  /**
   * 启动(一般无需用户调用)。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 start() : TRet  {
    return hscroll_label_start(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 停止(一般无需用户调用)。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 stop() : TRet  {
    return hscroll_label_stop(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 转换为hscroll_label对象(供脚本语言使用)。
   * 
   * @param widget hscroll_label对象。
   *
   * @returns hscroll_label对象。
   */
 static cast(widget : TWidget) : THscrollLabel  {
    return new THscrollLabel(hscroll_label_cast(widget != null ? (widget.nativeObj || widget) : null));
 }


  /**
   * 只有处于focus时才滚动(缺省否)。
   *
   */
 get onlyFocus() : boolean {
   return hscroll_label_t_get_prop_only_focus(this.nativeObj);
 }

 set onlyFocus(v : boolean) {
   this.setOnlyFocus(v);
 }


  /**
   * 只有父控件处于focus时才滚动(缺省否)。
   *
   */
 get onlyParentFocus() : boolean {
   return hscroll_label_t_get_prop_only_parent_focus(this.nativeObj);
 }

 set onlyParentFocus(v : boolean) {
   this.setOnlyParentFocus(v);
 }


  /**
   * loop是否循环滚动(缺省FALSE)。
   *
   */
 get loop() : boolean {
   return hscroll_label_t_get_prop_loop(this.nativeObj);
 }

 set loop(v : boolean) {
   this.setLoop(v);
 }


  /**
   * 是否往返滚动(缺省FALSE)。
   *
   */
 get yoyo() : boolean {
   return hscroll_label_t_get_prop_yoyo(this.nativeObj);
 }

 set yoyo(v : boolean) {
   this.setYoyo(v);
 }


  /**
   * 文本显示不下时，在行尾显示省略号(缺省FALSE)。
   *
   */
 get ellipses() : boolean {
   return hscroll_label_t_get_prop_ellipses(this.nativeObj);
 }

 set ellipses(v : boolean) {
   this.setEllipses(v);
 }


  /**
   * 滚动之间的间歇时间(ms)，缺省3000ms。
   *
   */
 get lull() : number {
   return hscroll_label_t_get_prop_lull(this.nativeObj);
 }

 set lull(v : number) {
   this.setLull(v);
 }


  /**
   * 完整的滚动一次需要的时间(ms)，缺省5000ms。
   *
   */
 get duration() : number {
   return hscroll_label_t_get_prop_duration(this.nativeObj);
 }

 set duration(v : number) {
   this.setDuration(v);
 }


  /**
   * 偏移量。
   *
   */
 get xoffset() : number {
   return hscroll_label_t_get_prop_xoffset(this.nativeObj);
 }

 set xoffset(v : number) {
   this.setXoffset(v);
 }


  /**
   * 文本的宽度。
   *
   */
 get textW() : number {
   return hscroll_label_t_get_prop_text_w(this.nativeObj);
 }

};
/**
 * 列表项控件。
 *
 *列表项控件是一个简单的容器控件，一般作为列表视图中滚动视图的子控件。
 *
 *list\_item\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于list\_item\_t控件。
 *
 *在xml中使用"list\_item"标签创建列表项控件。如：
 *
 *```xml
 *<list_view x="0"  y="30" w="100%" h="-80" item_height="60">
 *<scroll_view name="view" x="0"  y="0" w="100%" h="100%">
 *<list_item style="odd" children_layout="default(rows=1,cols=0)">
 *<image draw_type="icon" w="30" image="earth"/>
 *<label w="-30" text="1.Hello AWTK !">
 *<switch x="r:10" y="m" w="60" h="20"/>
 *</label>
 *</list_item>
 *...
 *</scroll_view>
 *</list_view>
 *```
 *
 *> 更多用法请参考：[list\_view\_m.xml](
 *https://github.com/zlgopen/awtk/blob/master/design/default/ui/list_view_m.xml)
 *
 *在c代码中使用函数list\_item\_create创建列表项控件。如：
 *
 *
 *> 列表项控件大小一般由列表控制，不需指定xywh参数。
 *
 *可以用style来实现可点击或不可点击的效果。如：
 *
 *```xml
 *<style name="odd_clickable" border_color="#a0a0a0"  border="bottom" text_color="black">
 *<normal     bg_color="#f5f5f5" />
 *<pressed    bg_color="#c0c0c0" />
 *<over       bg_color="#f5f5f5" />
 *</style>
 *```
 *
 *> 更多用法请参考：[theme default](
 *https://github.com/zlgopen/awtk/blob/master/design/default/styles/default.xml#L372)
 *
 */
export class TListItem extends TWidget { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 创建list_item对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TListItem  {
    return new TListItem(list_item_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }


  /**
   * 转换为list_item对象(供脚本语言使用)。
   * 
   * @param widget list_item对象。
   *
   * @returns list_item对象。
   */
 static cast(widget : TWidget) : TListItem  {
    return new TListItem(list_item_cast(widget != null ? (widget.nativeObj || widget) : null));
 }

};
/**
 * 水平列表视图控件。
 *
 *list\_view\_h\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于list\_view\_h\_t控件。
 *
 *在xml中使用"list\_view\_h"标签创建水平列表视图控件。如：
 *
 *```xml
 *<list_view_h x="center"  y="10" w="90%" h="100" item_width="200" spacing="5">
 *<scroll_view name="view" w="100%" h="100%">
 *<image style="border" draw_type="auto" image="1" text="1"/>
 *...
 *</scroll_view>
 *</list_view_h>
 *```
 *
 *> 注意：列表项不是作为列表视图控件的直接子控件，而是作为滚动视图的子控件。
 *
 *
 *> 更多用法请参考：[list\_view\_h.xml](
 *https://github.com/zlgopen/awtk/blob/master/design/default/ui/list_view_h.xml)
 *
 *在c代码中使用函数list\_view\_h\_create创建水平列表视图控件。如：
 *
 *
 *用代码构造列表视图是比较繁琐的事情，最好用XML来构造。
 *如果需要动态修改，可以使用widget\_clone来增加列表项，使用widget\_remove\_child来移出列表项。
 *
 *可用通过style来设置控件的显示风格，如背景颜色和边框颜色等(一般情况不需要)。
 *
 */
export class TListViewH extends TWidget { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 创建list_view_h对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TListViewH  {
    return new TListViewH(list_view_h_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }


  /**
   * 设置列表项的宽度。
   * 
   * @param item_width 列表项的宽度。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setItemWidth(item_width : number) : TRet  {
    return list_view_h_set_item_width(this != null ? (this.nativeObj || this) : null, item_width);
 }


  /**
   * 设置列表项的间距。
   * 
   * @param spacing 列表项的间距。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setSpacing(spacing : number) : TRet  {
    return list_view_h_set_spacing(this != null ? (this.nativeObj || this) : null, spacing);
 }


  /**
   * 转换为list_view_h对象(供脚本语言使用)。
   * 
   * @param widget list_view_h对象。
   *
   * @returns list_view_h对象。
   */
 static cast(widget : TWidget) : TListViewH  {
    return new TListViewH(list_view_h_cast(widget != null ? (widget.nativeObj || widget) : null));
 }


  /**
   * 列表项的宽度。
   *
   */
 get itemWidth() : number {
   return list_view_h_t_get_prop_item_width(this.nativeObj);
 }

 set itemWidth(v : number) {
   this.setItemWidth(v);
 }


  /**
   * 间距。
   *
   */
 get spacing() : number {
   return list_view_h_t_get_prop_spacing(this.nativeObj);
 }

 set spacing(v : number) {
   this.setSpacing(v);
 }

};
/**
 * 列表视图控件。
 *
 *列表视图控件是一个可以垂直滚动的列表控件。
 *
 *如果不需要滚动，可以用view控件配置适当的layout参数作为列表控件。
 *
 *列表视图中的列表项可以固定高度，也可以使用不同高度。请参考[变高列表项](
 *https://github.com/zlgopen/awtk/blob/master/design/default/ui/list_view_vh.xml)
 *
 *列表视图控件的中可以有滚动条，也可以没有滚动条。
 *可以使用移动设备风格的滚动条，也可以使用桌面风格的滚动条。
 *
 *list\_view\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于list\_view\_t控件。
 *
 *在xml中使用"list\_view"标签创建列表视图控件。如：
 *
 *```xml
 *<list_view x="0"  y="30" w="100%" h="-80" item_height="60">
 *<scroll_view name="view" x="0"  y="0" w="100%" h="100%">
 *<list_item style="odd" children_layout="default(rows=1,cols=0)">
 *<image draw_type="icon" w="30" image="earth"/>
 *<label w="-30" text="1.Hello AWTK !">
 *<switch x="r:10" y="m" w="60" h="20"/>
 *</label>
 *</list_item>
 *...
 *</scroll_view>
 *</list_view>
 *```
 *
 *> 注意：列表项不是作为列表视图控件的直接子控件，而是作为滚动视图的子控件。
 *
 *
 *> 更多用法请参考：[list\_view\_m.xml](
 *https://github.com/zlgopen/awtk/blob/master/design/default/ui/list_view_m.xml)
 *
 *在c代码中使用函数list\_view\_create创建列表视图控件。如：
 *
 *
 *用代码构造列表视图是比较繁琐的事情，最好用XML来构造。
 *如果需要动态修改，可以使用widget\_clone来增加列表项，使用widget\_remove\_child来移出列表项。
 *
 *可用通过style来设置控件的显示风格，如背景颜色和边框颜色等(一般情况不需要)。
 *
 *备注：list_view 下的 scroll_view 控件不支持遍历所有子控件的效果。
 *
 *下面是针对 scroll_bar_d （桌面版）有效果，scroll_bar_m（移动版）没有效果。
 *如果 floating_scroll_bar 属性为 TRUE 和 auto_hide_scroll_bar 属性为 TRUE，scroll_view 宽默认为 list_view 的 100% 宽，鼠标在 list_view 上滚动条才显示，不在的就自动隐藏，如果 scroll_view 的高比虚拟高要大的话，滚动条变成不可见，scroll_view 宽不会变。
 *如果 floating_scroll_bar 属性为 TRUE 和 auto_hide_scroll_bar 属性为 FALSE ，scroll_view 宽默认为 list_view 的 100% 宽，滚动条不隐藏，如果 scroll_view 的高比虚拟高要大的话，滚动条变成不可见，scroll_view 宽不会变。
 *如果 floating_scroll_bar 属性为 FALSE 和 auto_hide_scroll_bar 属性为 FALSE，如果 scroll_view 的高比虚拟高要大的话，滚动条变成不可用，scroll_view 宽不会变。
 *如果 floating_scroll_bar 属性为 FALSE 和 auto_hide_scroll_bar 属性为 TRUE，如果 scroll_view 的高比虚拟高要大的话，滚动条变成不可见，scroll_view 宽会合并原来滚动条的宽。
 *
 */
export class TListView extends TWidget { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 创建list_view对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TListView  {
    return new TListView(list_view_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }


  /**
   * 设置列表项的高度。
   * 
   * @param item_height 列表项的高度。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setItemHeight(item_height : number) : TRet  {
    return list_view_set_item_height(this != null ? (this.nativeObj || this) : null, item_height);
 }


  /**
   * 设置列表项的缺省高度。
   * 
   * @param default_item_height 列表项的高度。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setDefaultItemHeight(default_item_height : number) : TRet  {
    return list_view_set_default_item_height(this != null ? (this.nativeObj || this) : null, default_item_height);
 }


  /**
   * 设置是否自动隐藏滚动条。
   * 
   * @param auto_hide_scroll_bar 是否自动隐藏滚动条。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setAutoHideScrollBar(auto_hide_scroll_bar : boolean) : TRet  {
    return list_view_set_auto_hide_scroll_bar(this != null ? (this.nativeObj || this) : null, auto_hide_scroll_bar);
 }


  /**
   * 设置滚动条是否悬浮在 scroll_view 上面。
   * 
   * @param floating_scroll_bar 滚动条是否悬浮在 scroll_view 上面。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setFloatingScrollBar(floating_scroll_bar : boolean) : TRet  {
    return list_view_set_floating_scroll_bar(this != null ? (this.nativeObj || this) : null, floating_scroll_bar);
 }


  /**
   * 转换为list_view对象(供脚本语言使用)。
   * 
   * @param widget list_view对象。
   *
   * @returns list_view对象。
   */
 static cast(widget : TWidget) : TListView  {
    return new TListView(list_view_cast(widget != null ? (widget.nativeObj || widget) : null));
 }


  /**
   * list_view重新初始化。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 reinit() : TRet  {
    return list_view_reinit(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 列表项的高度。如果 item_height 0，所有列表项使用固定高度，否则使用列表项自身的高度。
   *
   */
 get itemHeight() : number {
   return list_view_t_get_prop_item_height(this.nativeObj);
 }

 set itemHeight(v : number) {
   this.setItemHeight(v);
 }


  /**
   * 列表项的缺省高度。如果item_height <= 0 而且列表项自身的高度 <= 0，则使用缺省高度。
   *
   */
 get defaultItemHeight() : number {
   return list_view_t_get_prop_default_item_height(this.nativeObj);
 }

 set defaultItemHeight(v : number) {
   this.setDefaultItemHeight(v);
 }


  /**
   * 如果不需要滚动条时，自动隐藏滚动条。
   *
   */
 get autoHideScrollBar() : boolean {
   return list_view_t_get_prop_auto_hide_scroll_bar(this.nativeObj);
 }

 set autoHideScrollBar(v : boolean) {
   this.setAutoHideScrollBar(v);
 }


  /**
   * 滚动条是否悬浮在 scroll_view 上面
   *
   */
 get floatingScrollBar() : boolean {
   return list_view_t_get_prop_floating_scroll_bar(this.nativeObj);
 }

 set floatingScrollBar(v : boolean) {
   this.setFloatingScrollBar(v);
 }

};
/**
 * 滚动条控件。
 *
 *> 目前只支持垂直滚动。
 *
 *scroll\_bar\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于scroll\_bar\_t控件。
 *
 *在xml中使用"scroll\_bar"或"scroll\_bar\_d"或"scroll\_bar\_m"标签创建滚动条控件。如：
 *
 *```xml
 *<list_view x="0"  y="30" w="100%" h="-80" item_height="60">
 *<scroll_view name="view" x="0"  y="0" w="100%" h="100%">
 *...
 *</scroll_view>
 *<scroll_bar_m name="bar" x="right" y="0" w="6" h="100%" value="0"/>
 *</list_view>
 *```
 *
 *> 更多用法请参考：[list\_view\_m.xml](
 *https://github.com/zlgopen/awtk/blob/master/design/default/ui/list_view_m.xml)
 *
 *在c代码中使用函数scroll\_bar\_create创建列表项控件。如：
 *
 *
 *```xml
 *<style name="default">
 *<normal bg_color="#c0c0c0" fg_color="#808080"/>
 *<over bg_color="#c0c0c0" fg_color="#808080"/>
 *<pressed bg_color="#c0c0c0" fg_color="#808080"/>
 *</style>
 *```
 *
 *> 更多用法请参考：[theme default](
 *https://github.com/zlgopen/awtk/blob/master/design/default/styles/default.xml#L350)
 *
 */
export class TScrollBar extends TWidget { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 创建scroll_bar对象
   *
   *> 根据宏WITH_DESKTOP_STYLE决定创建desktop风格还是mobile风格的滚动条
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TScrollBar  {
    return new TScrollBar(scroll_bar_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }


  /**
   * 转换为scroll_bar对象(供脚本语言使用)。
   * 
   * @param widget scroll_bar对象。
   *
   * @returns scroll_bar对象。
   */
 static cast(widget : TWidget) : TScrollBar  {
    return new TScrollBar(scroll_bar_cast(widget != null ? (widget.nativeObj || widget) : null));
 }


  /**
   * 创建mobile风格的scroll_bar对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
 static createMobile(parent : TWidget, x : number, y : number, w : number, h : number) : TScrollBar  {
    return new TScrollBar(scroll_bar_create_mobile(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }


  /**
   * 创建desktop风格的scroll_bar对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
 static createDesktop(parent : TWidget, x : number, y : number, w : number, h : number) : TScrollBar  {
    return new TScrollBar(scroll_bar_create_desktop(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }


  /**
   * 设置参数。
   * 
   * @param virtual_size 虚拟高度。
   * @param row 每一行的高度。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setParams(virtual_size : number, row : number) : TRet  {
    return scroll_bar_set_params(this != null ? (this.nativeObj || this) : null, virtual_size, row);
 }


  /**
   * 滚动到指定的值。
   * 
   * @param value 值。
   * @param duration 动画持续时间。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 scrollTo(value : any, duration : number) : TRet  {
    return scroll_bar_scroll_to(this != null ? (this.nativeObj || this) : null, value, duration);
 }


  /**
   * 设置值，并触发EVT_VALUE_CHANGED事件。
   * 
   * @param value 值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setValue(value : any) : TRet  {
    return scroll_bar_set_value(this != null ? (this.nativeObj || this) : null, value);
 }


  /**
   * 在当前的值上增加一个值，并触发EVT_VALUE_CHANGED事件。
   * 
   * @param delta 值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 addDelta(delta : number) : TRet  {
    return scroll_bar_add_delta(this != null ? (this.nativeObj || this) : null, delta);
 }


  /**
   * 在当前的值上增加一个值，并滚动到新的值，并触发EVT_VALUE_CHANGED事件。
   * 
   * @param delta 值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 scrollDelta(delta : number) : TRet  {
    return scroll_bar_scroll_delta(this != null ? (this.nativeObj || this) : null, delta);
 }


  /**
   * 设置值，但不触发EVT_VALUE_CHANGED事件。
   * 
   * @param value 值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setValueOnly(value : any) : TRet  {
    return scroll_bar_set_value_only(this != null ? (this.nativeObj || this) : null, value);
 }


  /**
   * 设置auto_hide属性。
   *
   *>仅对mobile风格的滚动条有效
   * 
   * @param auto_hide 值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setAutoHide(auto_hide : boolean) : TRet  {
    return scroll_bar_set_auto_hide(this != null ? (this.nativeObj || this) : null, auto_hide);
 }


  /**
   * 判断是否是mobile风格的滚动条。
   * 
   *
   * @returns 返回TRUE表示是mobile风格的，否则表示不是mobile风格的。
   */
 isMobile() : boolean  {
    return scroll_bar_is_mobile(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 虚拟宽度或高度。
   *
   */
 get virtualSize() : number {
   return scroll_bar_t_get_prop_virtual_size(this.nativeObj);
 }


  /**
   * 当前的值。
   *
   */
 get value() : number {
   return scroll_bar_t_get_prop_value(this.nativeObj);
 }

 set value(v : number) {
   this.setValue(v);
 }


  /**
   * 行的高度。
   *
   */
 get row() : number {
   return scroll_bar_t_get_prop_row(this.nativeObj);
 }


  /**
   * 滚动时是否启用动画。
   *
   */
 get animatable() : boolean {
   return scroll_bar_t_get_prop_animatable(this.nativeObj);
 }


  /**
   * 是否自动隐藏(仅对mobile风格的滚动条有效)。
   *
   */
 get autoHide() : boolean {
   return scroll_bar_t_get_prop_auto_hide(this.nativeObj);
 }

 set autoHide(v : boolean) {
   this.setAutoHide(v);
 }

};
/**
 * 滚动视图。
 *
 *scroll\_view\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于scroll\_view\_t控件。
 *
 *在xml中使用"scroll\_view"标签创建滚动视图控件。如：
 *
 *```xml
 *<list_view x="0"  y="30" w="100%" h="-80" item_height="60">
 *<scroll_view name="view" x="0"  y="0" w="100%" h="100%">
 *<list_item style="odd" children_layout="default(rows=1,cols=0)">
 *<image draw_type="icon" w="30" image="earth"/>
 *<label w="-30" text="1.Hello AWTK !">
 *<switch x="r:10" y="m" w="60" h="20"/>
 *</label>
 *</list_item>
 *...
 *</scroll_view>
 *</list_view>
 *```
 *
 *> 滚动视图一般作为列表视图的子控件使用。
 *
 *> 更多用法请参考：[list\_view\_m.xml](
 *https://github.com/zlgopen/awtk/blob/master/design/default/ui/list_view_m.xml)
 *
 *在c代码中使用函数scroll\_view\_create创建列表视图控件。如：
 *
 *
 *可用通过style来设置控件的显示风格，如背景颜色和边框颜色等(一般情况不需要)。
 *
 */
export class TScrollView extends TWidget { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 创建scroll_view对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TScrollView  {
    return new TScrollView(scroll_view_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }


  /**
   * 转换为scroll_view对象(供脚本语言使用)。
   * 
   * @param widget scroll_view对象。
   *
   * @returns scroll_view对象。
   */
 static cast(widget : TWidget) : TScrollView  {
    return new TScrollView(scroll_view_cast(widget != null ? (widget.nativeObj || widget) : null));
 }


  /**
   * 设置虚拟宽度。
   * 
   * @param w 虚拟宽度。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setVirtualW(w : number) : TRet  {
    return scroll_view_set_virtual_w(this != null ? (this.nativeObj || this) : null, w);
 }


  /**
   * 设置虚拟高度。
   * 
   * @param h 虚拟高度。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setVirtualH(h : number) : TRet  {
    return scroll_view_set_virtual_h(this != null ? (this.nativeObj || this) : null, h);
 }


  /**
   * 设置是否允许x方向滑动。
   * 
   * @param xslidable 是否允许滑动。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setXslidable(xslidable : boolean) : TRet  {
    return scroll_view_set_xslidable(this != null ? (this.nativeObj || this) : null, xslidable);
 }


  /**
   * 设置是否允许y方向滑动。
   * 
   * @param yslidable 是否允许滑动。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setYslidable(yslidable : boolean) : TRet  {
    return scroll_view_set_yslidable(this != null ? (this.nativeObj || this) : null, yslidable);
 }


  /**
   * 设置滚动时offset是否按页面对齐。
   * 
   * @param snap_to_page 是否按页面对齐。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setSnapToPage(snap_to_page : boolean) : TRet  {
    return scroll_view_set_snap_to_page(this != null ? (this.nativeObj || this) : null, snap_to_page);
 }


  /**
   * 设置滚动时是否每次翻一页
   *备注：当 snap_to_page 为ture 的时候才有效果，主要用于区分一次翻一页还是一次翻多页。
   * 
   * @param move_to_page 是否每次翻一页。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setMoveToPage(move_to_page : boolean) : TRet  {
    return scroll_view_set_move_to_page(this != null ? (this.nativeObj || this) : null, move_to_page);
 }


  /**
   * 设置是否递归查找全部子控件。
   * 
   * @param recursive 是否递归查找全部子控件。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setRecursive(recursive : boolean) : TRet  {
    return scroll_view_set_recursive(this != null ? (this.nativeObj || this) : null, recursive);
 }


  /**
   * 设置是否递归查找全部子控件。(不触发repaint和relayout)。
   * 
   * @param recursive 是否递归查找全部子控件。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setRecursiveOnly(recursive : boolean) : TRet  {
    return scroll_view_set_recursive_only(this != null ? (this.nativeObj || this) : null, recursive);
 }


  /**
   * 设置偏移量。
   * 
   * @param xoffset x偏移量。
   * @param yoffset y偏移量。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setOffset(xoffset : number, yoffset : number) : TRet  {
    return scroll_view_set_offset(this != null ? (this.nativeObj || this) : null, xoffset, yoffset);
 }


  /**
   * 设置偏移速度比例。
   * 
   * @param xspeed_scale x偏移速度比例。
   * @param yspeed_scale y偏移速度比例。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setSpeedScale(xspeed_scale : number, yspeed_scale : number) : TRet  {
    return scroll_view_set_speed_scale(this != null ? (this.nativeObj || this) : null, xspeed_scale, yspeed_scale);
 }


  /**
   * 滚动到指定的偏移量。
   * 
   * @param xoffset_end x偏移量。
   * @param yoffset_end y偏移量。
   * @param duration 时间。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 scrollTo(xoffset_end : number, yoffset_end : number, duration : number) : TRet  {
    return scroll_view_scroll_to(this != null ? (this.nativeObj || this) : null, xoffset_end, yoffset_end, duration);
 }


  /**
   * 滚动到指定的偏移量。
   * 
   * @param xoffset_delta x偏移量。
   * @param yoffset_delta y偏移量。
   * @param duration 时间。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 scrollDeltaTo(xoffset_delta : number, yoffset_delta : number, duration : number) : TRet  {
    return scroll_view_scroll_delta_to(this != null ? (this.nativeObj || this) : null, xoffset_delta, yoffset_delta, duration);
 }


  /**
   * 虚拟宽度。
   *
   */
 get virtualW() : number {
   return scroll_view_t_get_prop_virtual_w(this.nativeObj);
 }

 set virtualW(v : number) {
   this.setVirtualW(v);
 }


  /**
   * 虚拟高度。
   *
   */
 get virtualH() : number {
   return scroll_view_t_get_prop_virtual_h(this.nativeObj);
 }

 set virtualH(v : number) {
   this.setVirtualH(v);
 }


  /**
   * x偏移量。
   *
   */
 get xoffset() : number {
   return scroll_view_t_get_prop_xoffset(this.nativeObj);
 }


  /**
   * y偏移量。
   *
   */
 get yoffset() : number {
   return scroll_view_t_get_prop_yoffset(this.nativeObj);
 }


  /**
   * x偏移速度比例。
   *
   */
 get xspeedScale() : number {
   return scroll_view_t_get_prop_xspeed_scale(this.nativeObj);
 }


  /**
   * y偏移速度比例。
   *
   */
 get yspeedScale() : number {
   return scroll_view_t_get_prop_yspeed_scale(this.nativeObj);
 }


  /**
   * 是否允许x方向滑动。
   *
   */
 get xslidable() : boolean {
   return scroll_view_t_get_prop_xslidable(this.nativeObj);
 }

 set xslidable(v : boolean) {
   this.setXslidable(v);
 }


  /**
   * 是否允许y方向滑动。
   *
   */
 get yslidable() : boolean {
   return scroll_view_t_get_prop_yslidable(this.nativeObj);
 }

 set yslidable(v : boolean) {
   this.setYslidable(v);
 }


  /**
   * 滚动时offset是否按页面对齐。
   *
   */
 get snapToPage() : boolean {
   return scroll_view_t_get_prop_snap_to_page(this.nativeObj);
 }

 set snapToPage(v : boolean) {
   this.setSnapToPage(v);
 }


  /**
   * 是否每次翻一页（当 move_to_page 为ture 的时候才有效果，主要用于区分一次翻一页还是一次翻多页）。
   *
   */
 get moveToPage() : boolean {
   return scroll_view_t_get_prop_move_to_page(this.nativeObj);
 }

 set moveToPage(v : boolean) {
   this.setMoveToPage(v);
 }


  /**
   * 是否递归查找全部子控件。
   *
   */
 get recursive() : boolean {
   return scroll_view_t_get_prop_recursive(this.nativeObj);
 }

 set recursive(v : boolean) {
   this.setRecursive(v);
 }

};
/**
 * 左右滑动菜单控件。
 *
 *一般用一组按钮作为子控件，通过左右滑动改变当前的项。除了当菜单使用外，也可以用来切换页面。
 *
 *slide\_menu\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于slide\_menu\_t控件。
 *
 *在xml中使用"slide\_menu"标签创建左右滑动菜单控件。如：
 *
 *```xml
 *<slide_menu style="mask" align_v="top">
 *<button style="slide_button" text="0"/>
 *<button style="slide_button" text="1"/>
 *<button style="slide_button" text="2"/>
 *<button style="slide_button" text="3"/>
 *<button style="slide_button" text="4"/>
 *</slide_menu>
 *```
 *
 *> 更多用法请参考：[slide_menu.xml](
 *https://github.com/zlgopen/awtk/blob/master/design/default/ui/slide_menu.xml)
 *
 *在c代码中使用函数slide\_menu\_create创建左右滑动菜单控件。如：
 *
 *
 *可按下面的方法关注当前项改变的事件：
 *
 *
 *可按下面的方法关注当前按钮被点击的事件：
 *
 *
 *> 完整示例请参考：[slide_menu demo](
 *https://github.com/zlgopen/awtk-c-demos/blob/master/demos/slide_menu.c)
 *
 *可用通过style来设置控件的显示风格，如背景颜色和蒙版颜色等等。如：
 *
 *```xml
 *<style name="mask">
 *<normal     bg_color="#f0f0f0" mask_color="#f0f0f0"/>
 *</style>
 *```
 *
 *> 更多用法请参考：[theme default](
 *https://github.com/zlgopen/awtk/blob/master/design/default/styles/default.xml#L493)
 *
 */
export class TSlideMenu extends TWidget { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 创建slide_menu对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TSlideMenu  {
    return new TSlideMenu(slide_menu_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }


  /**
   * 转换slide_menu对象(供脚本语言使用)。
   * 
   * @param widget slide_menu对象。
   *
   * @returns slide_menu对象。
   */
 static cast(widget : TWidget) : TSlideMenu  {
    return new TSlideMenu(slide_menu_cast(widget != null ? (widget.nativeObj || widget) : null));
 }


  /**
   * 设置当前项。
   * 
   * @param value 当前项的索引。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setValue(value : any) : TRet  {
    return slide_menu_set_value(this != null ? (this.nativeObj || this) : null, value);
 }


  /**
   * 设置垂直对齐方式。
   * 
   * @param align_v 对齐方式。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setAlignV(align_v : TAlignV) : TRet  {
    return slide_menu_set_align_v(this != null ? (this.nativeObj || this) : null, align_v);
 }


  /**
   * 设置最小缩放比例。
   * 
   * @param min_scale 最小缩放比例，范围[0.5-1]。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setMinScale(min_scale : number) : TRet  {
    return slide_menu_set_min_scale(this != null ? (this.nativeObj || this) : null, min_scale);
 }


  /**
   * 值。代表当前选中项的索引。
   *
   */
 get value() : number {
   return slide_menu_t_get_prop_value(this.nativeObj);
 }

 set value(v : number) {
   this.setValue(v);
 }


  /**
   * 垂直对齐方式。
   *
   */
 get alignV() : TAlignV {
   return slide_menu_t_get_prop_align_v(this.nativeObj);
 }

 set alignV(v : TAlignV) {
   this.setAlignV(v);
 }


  /**
   * 最小缩放比例。
   *
   */
 get minScale() : number {
   return slide_menu_t_get_prop_min_scale(this.nativeObj);
 }

 set minScale(v : number) {
   this.setMinScale(v);
 }

};
/**
 * slide_view的指示器控件。
 *
 *> 支持直线、弧线排布，默认有4种绘制样式，若设置了icon/active_icon，则优先使用icon/active_icon
 *
 *slide\_indicator\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于slide\_indicator\_t控件。
 *
 *在xml中使用"slide\_indicator"或"slide\_indicator\_arc"标签创建指示器控件。如：
 *
 *```xml
 *<slide_view name="view" x="0"  y="0" w="100%" h="100%">
 *...
 *</slide_view>
 *<slide_indicator name="indicator" x="right" y="0" w="6" h="100%"/>
 *```
 *
 *> 更多用法请参考：[slide\_view.xml](
 *https://github.com/zlgopen/awtk/blob/master/design/default/ui/slide_view.xml)
 *
 *在c代码中使用函数slide\_indicator\_create创建指示器控件。如：
 *
 *
 *```xml
 *<style name="default">
 *<normal fg_color="#FFFFFF80" selected_fg_color="#FFFFFF"/>
 *</style>
 *```
 *
 *> 更多用法请参考：[theme default](
 *https://github.com/zlgopen/awtk/blob/master/design/default/styles/default.xml#L350)
 *
 */
export class TSlideIndicator extends TWidget { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 创建slide_indicator对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TSlideIndicator  {
    return new TSlideIndicator(slide_indicator_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }


  /**
   * 创建slide_indicator对象（线性显示）
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
 static createLinear(parent : TWidget, x : number, y : number, w : number, h : number) : TSlideIndicator  {
    return new TSlideIndicator(slide_indicator_create_linear(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }


  /**
   * 创建slide_indicator对象（圆弧显示）
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
 static createArc(parent : TWidget, x : number, y : number, w : number, h : number) : TSlideIndicator  {
    return new TSlideIndicator(slide_indicator_create_arc(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }


  /**
   * 转换为slide_indicator对象(供脚本语言使用)。
   * 
   * @param widget slide_indicator对象。
   *
   * @returns slide_indicator对象。
   */
 static cast(widget : TWidget) : TSlideIndicator  {
    return new TSlideIndicator(slide_indicator_cast(widget != null ? (widget.nativeObj || widget) : null));
 }


  /**
   * 设置当前页的序号。
   * 
   * @param value 当前项的序号。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setValue(value : any) : TRet  {
    return slide_indicator_set_value(this != null ? (this.nativeObj || this) : null, value);
 }


  /**
   * 设置指示器的数量。
   * 
   * @param max 数量。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setMax(max : number) : TRet  {
    return slide_indicator_set_max(this != null ? (this.nativeObj || this) : null, max);
 }


  /**
   * 设置指示器的默认绘制类型。
   * 
   * @param default_paint 默认绘制类型。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setDefaultPaint(default_paint : TIndicatorDefaultPaint) : TRet  {
    return slide_indicator_set_default_paint(this != null ? (this.nativeObj || this) : null, default_paint);
 }


  /**
   * 设置指示器是否自动隐藏。
   * 
   * @param auto_hide 0表示禁止，非0表示无操作后延迟多久隐藏。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setAutoHide(auto_hide : number) : TRet  {
    return slide_indicator_set_auto_hide(this != null ? (this.nativeObj || this) : null, auto_hide);
 }


  /**
   * 设置指示器的边距(默认为10像素)。
   * 
   * @param margin 指示器的边距。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setMargin(margin : number) : TRet  {
    return slide_indicator_set_margin(this != null ? (this.nativeObj || this) : null, margin);
 }


  /**
   * 设置指示器的间距(指示器有弧度时为角度值，否则为直线间距)。
   * 
   * @param spacing 指示器的间距。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setSpacing(spacing : number) : TRet  {
    return slide_indicator_set_spacing(this != null ? (this.nativeObj || this) : null, spacing);
 }


  /**
   * 设置指示器的大小(默认为8)。
   * 
   * @param size 指示器的大小。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setSize(size : number) : TRet  {
    return slide_indicator_set_size(this != null ? (this.nativeObj || this) : null, size);
 }


  /**
   * 设置旋转锚点。
   * 
   * @param anchor_x 锚点坐标x。(后面加上px为像素点，不加px为相对百分比坐标)
   * @param anchor_y 锚点坐标y。(后面加上px为像素点，不加px为相对百分比坐标)
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setAnchor(anchor_x : string, anchor_y : string) : TRet  {
    return slide_indicator_set_anchor(this != null ? (this.nativeObj || this) : null, anchor_x, anchor_y);
 }


  /**
   * 设置指示器指示的目标。
   * 
   * @param target_name 指示器指示的目标控件的名称
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setIndicatedTarget(target_name : string) : TRet  {
    return slide_indicator_set_indicated_target(this != null ? (this.nativeObj || this) : null, target_name);
 }


  /**
   * 值(缺省为0)。
   *
   */
 get value() : number {
   return slide_indicator_t_get_prop_value(this.nativeObj);
 }

 set value(v : number) {
   this.setValue(v);
 }


  /**
   * 最大值(缺省为100)。
   *
   */
 get max() : number {
   return slide_indicator_t_get_prop_max(this.nativeObj);
 }

 set max(v : number) {
   this.setMax(v);
 }


  /**
   * 指示器的类型。
   *
   */
 get defaultPaint() : TIndicatorDefaultPaint {
   return slide_indicator_t_get_prop_default_paint(this.nativeObj);
 }

 set defaultPaint(v : TIndicatorDefaultPaint) {
   this.setDefaultPaint(v);
 }


  /**
   * 自动隐藏。0表示禁止，非0表示无操作后延迟多久隐藏。
   *
   */
 get autoHide() : number {
   return slide_indicator_t_get_prop_auto_hide(this.nativeObj);
 }

 set autoHide(v : number) {
   this.setAutoHide(v);
 }


  /**
   * 指示器与边缘的边距。
   *
   */
 get margin() : number {
   return slide_indicator_t_get_prop_margin(this.nativeObj);
 }

 set margin(v : number) {
   this.setMargin(v);
 }


  /**
   * 指示器的中心之间的间距（圆弧显示时，间距的单位为弧度，否则为像素）。
   *
   */
 get spacing() : number {
   return slide_indicator_t_get_prop_spacing(this.nativeObj);
 }

 set spacing(v : number) {
   this.setSpacing(v);
 }


  /**
   * 指示器的大小。
   *
   */
 get size() : number {
   return slide_indicator_t_get_prop_size(this.nativeObj);
 }

 set size(v : number) {
   this.setSize(v);
 }


  /**
   * 锚点x坐标。
   *
   */
 get anchorX() : number {
   return slide_indicator_t_get_prop_anchor_x(this.nativeObj);
 }


  /**
   * 锚点y坐标。
   *
   */
 get anchorY() : number {
   return slide_indicator_t_get_prop_anchor_y(this.nativeObj);
 }


  /**
   * 指示器指示的目标控件的名称。
   *
   */
 get indicatedTarget() : string {
   return slide_indicator_t_get_prop_indicated_target(this.nativeObj);
 }

 set indicatedTarget(v : string) {
   this.setIndicatedTarget(v);
 }

};
/**
 * 滑动视图。
 *
 *滑动视图可以管理多个页面，并通过滑动来切换当前页面。也可以管理多张图片，让它们自动切换。
 *
 *slide\_view\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于slide\_view\_t控件。
 *
 *在xml中使用"slide\_view"标签创建滑动视图控件。如：
 *
 *```xml
 *<slide_view x="0" y="0" w="100%" h="100%" style="dot">
 *<view x="0" y="0" w="100%" h="100%" children_layout="default(w=60,h=60,m=5,s=10)">
 *...
 *</view>
 *<view x="0" y="0" w="100%" h="100%" children_layout="default(w=60,h=60,m=5,s=10)">
 *...
 *</view>
 *</slide_view>
 *```
 *
 *> 更多用法请参考：[slide_view.xml](
 *https://github.com/zlgopen/awtk/blob/master/design/default/ui/slide_view.xml)
 *
 *在c代码中使用函数slide\_view\_create创建滑动视图控件。如：
 *
 *
 *> 完整示例请参考：
 *[slide_view demo](
 *https://github.com/zlgopen/awtk-c-demos/blob/master/demos/slide_view.c)
 *
 *可用通过style来设置控件的显示风格，如背景颜色和指示器的图标等等。如：
 *
 *```xml
 *<style name="dot">
 *<normal  icon="dot" active_icon="active_dot"/>
 *</style>
 *```
 *
 *> 如果希望背景图片跟随滚动，请将背景图片设置到页面上，否则设置到slide\_view上。
 *
 *> 更多用法请参考：[theme default](
 *https://github.com/zlgopen/awtk/blob/master/design/default/styles/default.xml#L458)
 *
 */
export class TSlideView extends TWidget { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 创建slide_view对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TSlideView  {
    return new TSlideView(slide_view_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }


  /**
   * 转换为slide_view对象(供脚本语言使用)。
   * 
   * @param widget slide_view对象。
   *
   * @returns slide_view对象。
   */
 static cast(widget : TWidget) : TSlideView  {
    return new TSlideView(slide_view_cast(widget != null ? (widget.nativeObj || widget) : null));
 }


  /**
   * 设置为自动播放模式。
   * 
   * @param auto_play 0表示禁止自动播放，非0表示自动播放时每一页播放的时间。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setAutoPlay(auto_play : number) : TRet  {
    return slide_view_set_auto_play(this != null ? (this.nativeObj || this) : null, auto_play);
 }


  /**
   * 设置当前页的序号(默认启用动画)。
   * 
   * @param index 当前页的序号。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setActive(index : number) : TRet  {
    return slide_view_set_active(this != null ? (this.nativeObj || this) : null, index);
 }


  /**
   * 设置当前页的序号。
   * 
   * @param index 当前页的序号。
   * @param animate 是否启用动画。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setActiveEx(index : number, animate : boolean) : TRet  {
    return slide_view_set_active_ex(this != null ? (this.nativeObj || this) : null, index, animate);
 }


  /**
   * 设置为上下滑动(缺省为左右滑动)。
   * 
   * @param vertical TRUE表示上下滑动，FALSE表示左右滑动。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setVertical(vertical : boolean) : TRet  {
    return slide_view_set_vertical(this != null ? (this.nativeObj || this) : null, vertical);
 }


  /**
   * 设置页面切换动画。
   *
   *anim_hint取值如下：
   *
   ** "translate"：平移。
   ** "overlap"：覆盖。
   ** "overlap\_with\_alpha"：覆盖并改变透明度。
   *
   *> 使用"overlap"或"overlap\_with\_alpha"动画时，背景图片最好指定到page上。
   *>
   *> 使用"overlap\_with\_alpha"动画时，slideview的背景设置为黑色，
   *> 或slideview的背景设置为透明，窗口的背景设置为黑色，以获得更好的视觉效果和性能。
   * 
   * @param anim_hint 页面切换动画。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setAnimHint(anim_hint : string) : TRet  {
    return slide_view_set_anim_hint(this != null ? (this.nativeObj || this) : null, anim_hint);
 }


  /**
   * 设置循环切换模式。
   * 
   * @param loop 是否启用循环切换模式。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setLoop(loop : boolean) : TRet  {
    return slide_view_set_loop(this != null ? (this.nativeObj || this) : null, loop);
 }


  /**
   * 删除指定序号页面。
   * 
   * @param index 删除页面的序号。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 removeIndex(index : number) : TRet  {
    return slide_view_remove_index(this != null ? (this.nativeObj || this) : null, index);
 }


  /**
   * 是否为上下滑动模式。
   *
   */
 get vertical() : boolean {
   return slide_view_t_get_prop_vertical(this.nativeObj);
 }

 set vertical(v : boolean) {
   this.setVertical(v);
 }


  /**
   * 自动播放。0表示禁止自动播放，非0表示自动播放时每一页播放的时间。
   *
   */
 get autoPlay() : number {
   return slide_view_t_get_prop_auto_play(this.nativeObj);
 }

 set autoPlay(v : number) {
   this.setAutoPlay(v);
 }


  /**
   * 循环切换模式。
   *
   *向后切换：切换到最后一页时，再往后切换就到第一页。
   *向前切换：切换到第一页时，再往前切换就到最后一页。
   *
   */
 get loop() : boolean {
   return slide_view_t_get_prop_loop(this.nativeObj);
 }

 set loop(v : boolean) {
   this.setLoop(v);
 }


  /**
   * 页面切换效果。
   *
   */
 get animHint() : string {
   return slide_view_t_get_prop_anim_hint(this.nativeObj);
 }

 set animHint(v : string) {
   this.setAnimHint(v);
 }

};
/**
 * 开关控件。
 *
 *switch\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于switch\_t控件。
 *
 *在xml中使用"switch"标签创建开关控件。如：
 *
 *```xml
 *<switch x="10" y="60" w="60" h="22" />
 *```
 *
 *> 更多用法请参考：[switch.xml](
 *https://github.com/zlgopen/awtk/blob/master/design/default/ui/switch.xml)
 *
 *在c代码中使用函数switch\_create创建开关控件。如：
 *
 *
 *> 完整示例请参考：[switch demo](
 *https://github.com/zlgopen/awtk-c-demos/blob/master/demos/switch.c)
 *
 *可用通过style来设置控件的显示风格，如背景图片等。如：
 *
 *```xml
 *<style name="default">
 *<normal  bg_image="switch" />
 *</style>
 *```
 *
 *> 更多用法请参考：[theme default](
 *https://github.com/zlgopen/awtk/blob/master/design/default/styles/default.xml#L452)
 *
 */
export class TSwitch extends TWidget { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 创建switch对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TSwitch  {
    return new TSwitch(switch_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }


  /**
   * 设置控件的值。
   * 
   * @param value 值
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setValue(value : any) : TRet  {
    return switch_set_value(this != null ? (this.nativeObj || this) : null, value);
 }


  /**
   * 转换switch对象(供脚本语言使用)。
   * 
   * @param widget switch对象。
   *
   * @returns switch对象。
   */
 static cast(widget : TWidget) : TSwitch  {
    return new TSwitch(switch_cast(widget != null ? (widget.nativeObj || widget) : null));
 }


  /**
   * 值。
   *
   */
 get value() : boolean {
   return switch_t_get_prop_value(this.nativeObj);
 }

 set value(v : boolean) {
   this.setValue(v);
 }


  /**
   * 当开关处于关闭时，图片偏移相对于图片宽度的比例(缺省为1/3)。
   *
   */
 get maxXoffsetRatio() : number {
   return switch_t_get_prop_max_xoffset_ratio(this.nativeObj);
 }

};
/**
 * 文本选择器控件，通常用于选择日期和时间等。
 *
 *> XXX: 目前需要先设置options和visible_nr，再设置其它参数(在XML中也需要按此顺序)。
 *
 *text\_selector\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于text\_selector\_t控件。
 *
 *在xml中使用"text\_selector"标签创建文本选择器控件。如：
 *
 *```xml
 *<text_selector options="red;green;blue;gold;orange" visible_nr="3" text="red"/>
 *```
 *
 *> 更多用法请参考：[text\_selector.xml](
 *https://github.com/zlgopen/awtk/blob/master/design/default/ui/text_selector.xml)
 *
 *在c代码中使用函数text\_selector\_create创建文本选择器控件。如：
 *
 *
 *> 完整示例请参考：[text\_selector demo](
 *https://github.com/zlgopen/awtk-c-demos/blob/master/demos/text_selector.c)
 *
 *可用通过style来设置控件的显示风格，如字体和背景颜色等。如：
 *
 *```xml
 *<style name="dark" fg_color="#a0a0a0"  text_color="black" text_align_h="center">
 *<normal     bg_color="#ffffff" mask_color="#404040" border_color="#404040"/>
 *</style>
 *```
 *
 *> 更多用法请参考：[theme default](
 *https://github.com/zlgopen/awtk/blob/master/design/default/styles/default.xml#L443)
 *
 */
export class TTextSelector extends TWidget { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 创建text_selector对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TTextSelector  {
    return new TTextSelector(text_selector_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }


  /**
   * 转换text_selector对象(供脚本语言使用)。
   * 
   * @param widget text_selector对象。
   *
   * @returns text_selector对象。
   */
 static cast(widget : TWidget) : TTextSelector  {
    return new TTextSelector(text_selector_cast(widget != null ? (widget.nativeObj || widget) : null));
 }


  /**
   * 重置所有选项。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 resetOptions() : TRet  {
    return text_selector_reset_options(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 获取选项个数。
   * 
   *
   * @returns 返回选项个数。
   */
 countOptions() : number  {
    return text_selector_count_options(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 追加一个选项。
   * 
   * @param value 值。
   * @param text 文本。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 appendOption(value : any, text : string) : TRet  {
    return text_selector_append_option(this != null ? (this.nativeObj || this) : null, value, text);
 }


  /**
   * 设置选项。
   * 
   * @param options 选项。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setOptions(options : string) : TRet  {
    return text_selector_set_options(this != null ? (this.nativeObj || this) : null, options);
 }


  /**
   * 设置一系列的整数选项。
   * 
   * @param start 起始值。
   * @param nr 个数。
   * @param step 步长。
   * @param format 选项的格式化。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setRangeOptionsEx(start : number, nr : number, step : number, format : string) : TRet  {
    return text_selector_set_range_options_ex(this != null ? (this.nativeObj || this) : null, start, nr, step, format);
 }


  /**
   * 设置一系列的整数选项。
   * 
   * @param start 起始值。
   * @param nr 个数。
   * @param step 步长。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setRangeOptions(start : number, nr : number, step : number) : TRet  {
    return text_selector_set_range_options(this != null ? (this.nativeObj || this) : null, start, nr, step);
 }


  /**
   * 获取text_selector的值。
   * 
   *
   * @returns 返回值。
   */
 getValue() : number  {
    return text_selector_get_value(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 设置text_selector的值。
   * 
   * @param value 值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setValue(value : any) : TRet  {
    return text_selector_set_value(this != null ? (this.nativeObj || this) : null, value);
 }


  /**
   * 获取text_selector的文本。
   * 
   *
   * @returns 返回文本。
   */
 getTextValue() : string  {
    return text_selector_get_text(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 设置text_selector的文本。
   * 
   * @param text 文本。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setText(text : string) : TRet  {
    return text_selector_set_text(this != null ? (this.nativeObj || this) : null, text);
 }


  /**
   * 设置第index个选项为当前选中的选项。
   * 
   * @param index 选项的索引。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setSelectedIndex(index : number) : TRet  {
    return text_selector_set_selected_index(this != null ? (this.nativeObj || this) : null, index);
 }


  /**
   * 设置可见的选项数。
   * 
   * @param visible_nr 选项数。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setVisibleNr(visible_nr : number) : TRet  {
    return text_selector_set_visible_nr(this != null ? (this.nativeObj || this) : null, visible_nr);
 }


  /**
   * 设置是否本地化(翻译)选项。
   * 
   * @param localize_options 是否本地化(翻译)选项。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setLocalizeOptions(localize_options : boolean) : TRet  {
    return text_selector_set_localize_options(this != null ? (this.nativeObj || this) : null, localize_options);
 }


  /**
   * 设置是否循环选项。
   * 
   * @param loop_options 是否循环选项。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setLoopOptions(loop_options : boolean) : TRet  {
    return text_selector_set_loop_options(this != null ? (this.nativeObj || this) : null, loop_options);
 }


  /**
   * 设置Y轴偏移速度比例。
   * 
   * @param yspeed_scale y偏移速度比例。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setYspeedScale(yspeed_scale : number) : TRet  {
    return text_selector_set_yspeed_scale(this != null ? (this.nativeObj || this) : null, yspeed_scale);
 }


  /**
   * 设置滚动动画播放时间。
   * 
   * @param animating_time 滚动动画播放时间。(单位毫秒)
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setAnimatingTime(animating_time : number) : TRet  {
    return text_selector_set_animating_time(this != null ? (this.nativeObj || this) : null, animating_time);
 }


  /**
   * 设置是否修改值时启用动画。
   * 
   * @param enable_value_animator 是否修改值时启用动画
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setEnableValueAnimator(enable_value_animator : boolean) : TRet  {
    return text_selector_set_enable_value_animator(this != null ? (this.nativeObj || this) : null, enable_value_animator);
 }


  /**
   * 可见的选项数量(只能是1或者3或者5，缺省为5)。
   *
   */
 get visibleNr() : number {
   return text_selector_t_get_prop_visible_nr(this.nativeObj);
 }

 set visibleNr(v : number) {
   this.setVisibleNr(v);
 }


  /**
   * 当前选中的选项。
   *
   */
 get selectedIndex() : number {
   return text_selector_t_get_prop_selected_index(this.nativeObj);
 }

 set selectedIndex(v : number) {
   this.setSelectedIndex(v);
 }


  /**
   * 设置可选项(冒号分隔值和文本，分号分隔选项，如:1:red;2:green;3:blue)。
   *对于数值选项，也可以指定一个范围，用『-』分隔起始值、结束值和格式。
   *如："1-7-%02d"表示1到7，格式为『02d』，格式为可选，缺省为『%d』。
   *
   */
 get options() : string {
   return text_selector_t_get_prop_options(this.nativeObj);
 }

 set options(v : string) {
   this.setOptions(v);
 }


  /**
   * y偏移速度比例。
   *
   */
 get yspeedScale() : number {
   return text_selector_t_get_prop_yspeed_scale(this.nativeObj);
 }

 set yspeedScale(v : number) {
   this.setYspeedScale(v);
 }


  /**
   * 滚动动画播放时间。(单位毫秒)
   *
   */
 get animatingTime() : number {
   return text_selector_t_get_prop_animating_time(this.nativeObj);
 }

 set animatingTime(v : number) {
   this.setAnimatingTime(v);
 }


  /**
   * 是否本地化(翻译)选项(缺省为FALSE)。
   *
   */
 get localizeOptions() : boolean {
   return text_selector_t_get_prop_localize_options(this.nativeObj);
 }

 set localizeOptions(v : boolean) {
   this.setLocalizeOptions(v);
 }


  /**
   * 是否循环选项(缺省为FALSE)。
   *
   */
 get loopOptions() : boolean {
   return text_selector_t_get_prop_loop_options(this.nativeObj);
 }

 set loopOptions(v : boolean) {
   this.setLoopOptions(v);
 }


  /**
   * 是否修改值时启用动画。
   *
   */
 get enableValueAnimator() : boolean {
   return text_selector_t_get_prop_enable_value_animator(this.nativeObj);
 }

 set enableValueAnimator(v : boolean) {
   this.setEnableValueAnimator(v);
 }

};
/**
 * 模拟时钟控件。
 *
 *time\_clock\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于time\_clock\_t控件。
 *
 *在xml中使用"time\_clock"标签创建模拟时钟控件。如：
 *
 *```xml
 *<time_clock x="c" y="m" w="300" h="300" bg_image="clock_bg" image="clock"
 *hour_image="clock_hour" minute_image="clock_minute" second_image="clock_second"/>
 *```
 *
 *> 更多用法请参考：[time\_clock.xml](
 *https://github.com/zlgopen/awtk/blob/master/design/default/ui/time_clock.xml)
 *
 *在c代码中使用函数time\_clock\_create创建模拟时钟控件。如：
 *
 *
 *> 完整示例请参考：[time_clock demo](
 *https://github.com/zlgopen/awtk-c-demos/blob/master/demos/time_clock.c)
 *
 *time\_clock一般不需要设置style。
 *
 */
export class TTimeClock extends TWidget { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 创建time_clock对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TTimeClock  {
    return new TTimeClock(time_clock_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }


  /**
   * 转换为time_clock对象(供脚本语言使用)。
   * 
   * @param widget time_clock对象。
   *
   * @returns time_clock对象。
   */
 static cast(widget : TWidget) : TTimeClock  {
    return new TTimeClock(time_clock_cast(widget != null ? (widget.nativeObj || widget) : null));
 }


  /**
   * 设置小时的值。
   * 
   * @param hour 小时的值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setHour(hour : number) : TRet  {
    return time_clock_set_hour(this != null ? (this.nativeObj || this) : null, hour);
 }


  /**
   * 设置分钟的值。
   * 
   * @param minute 分钟的值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setMinute(minute : number) : TRet  {
    return time_clock_set_minute(this != null ? (this.nativeObj || this) : null, minute);
 }


  /**
   * 设置秒的值。
   * 
   * @param second 秒的值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setSecond(second : number) : TRet  {
    return time_clock_set_second(this != null ? (this.nativeObj || this) : null, second);
 }


  /**
   * 设置小时的图片。
   * 
   * @param hour 小时的图片。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setHourImage(hour : string) : TRet  {
    return time_clock_set_hour_image(this != null ? (this.nativeObj || this) : null, hour);
 }


  /**
   * 设置分钟的图片。
   * 
   * @param minute_image 分钟的图片。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setMinuteImage(minute_image : string) : TRet  {
    return time_clock_set_minute_image(this != null ? (this.nativeObj || this) : null, minute_image);
 }


  /**
   * 设置秒的图片。
   * 
   * @param second_image 秒的图片。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setSecondImage(second_image : string) : TRet  {
    return time_clock_set_second_image(this != null ? (this.nativeObj || this) : null, second_image);
 }


  /**
   * 设置背景图片。
   * 
   * @param bg_image 背景图片。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setBgImage(bg_image : string) : TRet  {
    return time_clock_set_bg_image(this != null ? (this.nativeObj || this) : null, bg_image);
 }


  /**
   * 设置中心图片。
   * 
   * @param image 图片。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setImage(image : string) : TRet  {
    return time_clock_set_image(this != null ? (this.nativeObj || this) : null, image);
 }


  /**
   * 设置小时指针的旋转锚点。
   *> 后面加上px为像素点，不加px为相对百分比坐标0.0f到1.0f
   * 
   * @param anchor_x 指针的锚点坐标x。
   * @param anchor_y 指针的锚点坐标y。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setHourAnchor(anchor_x : string, anchor_y : string) : TRet  {
    return time_clock_set_hour_anchor(this != null ? (this.nativeObj || this) : null, anchor_x, anchor_y);
 }


  /**
   * 设置分钟指针的旋转锚点。
   *> 后面加上px为像素点，不加px为相对百分比坐标0.0f到1.0f
   * 
   * @param anchor_x 指针的锚点坐标x。
   * @param anchor_y 指针的锚点坐标y。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setMinuteAnchor(anchor_x : string, anchor_y : string) : TRet  {
    return time_clock_set_minute_anchor(this != null ? (this.nativeObj || this) : null, anchor_x, anchor_y);
 }


  /**
   * 设置秒钟指针的旋转锚点。
   *> 后面加上px为像素点，不加px为相对百分比坐标0.0f到1.0f
   * 
   * @param anchor_x 指针的锚点坐标x。
   * @param anchor_y 指针的锚点坐标y。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setSecondAnchor(anchor_x : string, anchor_y : string) : TRet  {
    return time_clock_set_second_anchor(this != null ? (this.nativeObj || this) : null, anchor_x, anchor_y);
 }


  /**
   * 小时。
   *
   */
 get hour() : number {
   return time_clock_t_get_prop_hour(this.nativeObj);
 }

 set hour(v : number) {
   this.setHour(v);
 }


  /**
   * 分钟。
   *
   */
 get minute() : number {
   return time_clock_t_get_prop_minute(this.nativeObj);
 }

 set minute(v : number) {
   this.setMinute(v);
 }


  /**
   * 秒。
   *
   */
 get second() : number {
   return time_clock_t_get_prop_second(this.nativeObj);
 }

 set second(v : number) {
   this.setSecond(v);
 }


  /**
   * 中心图片。
   *
   */
 get image() : string {
   return time_clock_t_get_prop_image(this.nativeObj);
 }

 set image(v : string) {
   this.setImage(v);
 }


  /**
   * 背景图片。
   *
   */
 get bgImage() : string {
   return time_clock_t_get_prop_bg_image(this.nativeObj);
 }

 set bgImage(v : string) {
   this.setBgImage(v);
 }


  /**
   * 时针图片。
   *
   */
 get hourImage() : string {
   return time_clock_t_get_prop_hour_image(this.nativeObj);
 }

 set hourImage(v : string) {
   this.setHourImage(v);
 }


  /**
   * 分针图片。
   *
   */
 get minuteImage() : string {
   return time_clock_t_get_prop_minute_image(this.nativeObj);
 }

 set minuteImage(v : string) {
   this.setMinuteImage(v);
 }


  /**
   * 秒针图片。
   *
   */
 get secondImage() : string {
   return time_clock_t_get_prop_second_image(this.nativeObj);
 }

 set secondImage(v : string) {
   this.setSecondImage(v);
 }


  /**
   * 时针图片旋转锚点x坐标。(后面加上px为像素点，不加px为相对百分比坐标0.0f到1.0f)
   *
   */
 get hourAnchorX() : string {
   return time_clock_t_get_prop_hour_anchor_x(this.nativeObj);
 }


  /**
   * 时针图片旋转锚点y坐标。(后面加上px为像素点，不加px为相对百分比坐标0.0f到1.0f)
   *
   */
 get hourAnchorY() : string {
   return time_clock_t_get_prop_hour_anchor_y(this.nativeObj);
 }


  /**
   * 分针图片旋转锚点x坐标。(后面加上px为像素点，不加px为相对百分比坐标0.0f到1.0f)
   *
   */
 get minuteAnchorX() : string {
   return time_clock_t_get_prop_minute_anchor_x(this.nativeObj);
 }


  /**
   * 分针图片旋转锚点y坐标。(后面加上px为像素点，不加px为相对百分比坐标0.0f到1.0f)
   *
   */
 get minuteAnchorY() : string {
   return time_clock_t_get_prop_minute_anchor_y(this.nativeObj);
 }


  /**
   * 秒针图片旋转锚点x坐标。(后面加上px为像素点，不加px为相对百分比坐标0.0f到1.0f)
   *
   */
 get secondAnchorX() : string {
   return time_clock_t_get_prop_second_anchor_x(this.nativeObj);
 }


  /**
   * 秒针图片旋转锚点y坐标。(后面加上px为像素点，不加px为相对百分比坐标0.0f到1.0f)
   *
   */
 get secondAnchorY() : string {
   return time_clock_t_get_prop_second_anchor_y(this.nativeObj);
 }

};
/**
 * 虚拟页面(根据情况自动加载/卸载页面，并提供入场/出场动画)。
 *
 *> 虚拟页面只能作为pages的直接子控件使用。
 *
 *如果指定了ui_asset:
 *
 ** 当页面切换到后台时自动卸载，并触发EVT\_VPAGE\_CLOSE消息。
 ** 当页面切换到前台时自动加载，在动画前出发EVT\_VPAGE\_WILL\_OPEN消息，在动画完成时触发 EVT\_VPAGE\_CLOSE消息。
 *
 *vpage\_t也可以当作普通view嵌入到pages中，让tab控件在切换时具有动画效果。
 *
 *在xml中使用"vpage"标签创建控件。如：
 *
 *```xml
 *<!-- ui -->
 *<vpage x="c" y="50" w="100" h="100" ui_asset="mypage"/>
 *```
 *
 *可用通过style来设置控件的显示风格，如字体的大小和颜色等等(一般无需指定)。如：
 *
 *```xml
 *<!-- style -->
 *<vpage>
 *<style name="default">
 *<normal />
 *</style>
 *</vpage>
 *```
 *
 */
export class TVpage extends TWidget { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 创建vpage对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns vpage对象。
   */
 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TVpage  {
    return new TVpage(vpage_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }


  /**
   * 转换为vpage对象(供脚本语言使用)。
   * 
   * @param widget vpage对象。
   *
   * @returns vpage对象。
   */
 static cast(widget : TWidget) : TVpage  {
    return new TVpage(vpage_cast(widget != null ? (widget.nativeObj || widget) : null));
 }


  /**
   * 设置 UI资源名称。
   * 
   * @param ui_asset UI资源名称。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setUiAsset(ui_asset : string) : TRet  {
    return vpage_set_ui_asset(this != null ? (this.nativeObj || this) : null, ui_asset);
 }


  /**
   * 设置动画类型(vtranslate: 垂直平移，htranslate: 水平平移)。
   * 
   * @param anim_hint 动画类型。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setAnimHint(anim_hint : string) : TRet  {
    return vpage_set_anim_hint(this != null ? (this.nativeObj || this) : null, anim_hint);
 }


  /**
   * UI资源名称。
   *
   */
 get uiAsset() : string {
   return vpage_t_get_prop_ui_asset(this.nativeObj);
 }

 set uiAsset(v : string) {
   this.setUiAsset(v);
 }


  /**
   * 动画类型(目前支持：vtranslate: 垂直平移，htranslate: 水平平移)。
   *
   */
 get animHint() : string {
   return vpage_t_get_prop_anim_hint(this.nativeObj);
 }

 set animHint(v : string) {
   this.setAnimHint(v);
 }

};
/**
 * 对象属性变化事件。
 *
 */
export class TPropChangeEvent extends TEvent { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 把event对象转prop_change_event_t对象，主要给脚本语言使用。
   * 
   * @param event event对象。
   *
   * @returns 返回event对象。
   */
 static cast(event : TEvent) : TPropChangeEvent  {
    return new TPropChangeEvent(prop_change_event_cast(event != null ? (event.nativeObj || event) : null));
 }


  /**
   * 属性的名称。
   *
   */
 get name() : string {
   return prop_change_event_t_get_prop_name(this.nativeObj);
 }


  /**
   * 属性的值。
   *
   */
 get value() : TValue {
   return new TValue(prop_change_event_t_get_prop_value(this.nativeObj));
 }

};
/**
 * 进度变化事件。
 *
 */
export class TProgressEvent extends TEvent { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 把event对象转progress_event_t对象，主要给脚本语言使用。
   * 
   * @param event event对象。
   *
   * @returns 返回event对象。
   */
 static cast(event : TEvent) : TProgressEvent  {
    return new TProgressEvent(progress_event_cast(event != null ? (event.nativeObj || event) : null));
 }


  /**
   * 进度百分比。
   *
   */
 get percent() : number {
   return progress_event_t_get_prop_percent(this.nativeObj);
 }

};
/**
 * 执行完成事件。
 *
 */
export class TDoneEvent extends TEvent { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 把event对象转done_event_t对象，主要给脚本语言使用。
   * 
   * @param event event对象。
   *
   * @returns 返回event对象。
   */
 static cast(event : TEvent) : TDoneEvent  {
    return new TDoneEvent(done_event_cast(event != null ? (event.nativeObj || event) : null));
 }


  /**
   * 执行结果。
   *
   */
 get result() : TRet {
   return done_event_t_get_prop_result(this.nativeObj);
 }

};
/**
 * 执行完成事件。
 *
 */
export class TErrorEvent extends TEvent { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 把event对象转error_event_t对象，主要给脚本语言使用。
   * 
   * @param event event对象。
   *
   * @returns 返回event对象。
   */
 static cast(event : TEvent) : TErrorEvent  {
    return new TErrorEvent(error_event_cast(event != null ? (event.nativeObj || event) : null));
 }


  /**
   * 错误码。
   *
   */
 get code() : number {
   return error_event_t_get_prop_code(this.nativeObj);
 }


  /**
   * 错误信息。
   *
   */
 get message() : string {
   return error_event_t_get_prop_message(this.nativeObj);
 }

};
/**
 * 对象执行命令的事件。
 *
 */
export class TCmdExecEvent extends TEvent { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 把event对象转cmd_exec_event_t对象，主要给脚本语言使用。
   * 
   * @param event event对象。
   *
   * @returns 返回event对象。
   */
 static cast(event : TEvent) : TCmdExecEvent  {
    return new TCmdExecEvent(cmd_exec_event_cast(event != null ? (event.nativeObj || event) : null));
 }


  /**
   * 命令的名称。
   *
   */
 get name() : string {
   return cmd_exec_event_t_get_prop_name(this.nativeObj);
 }


  /**
   * 命令的参数。
   *
   */
 get args() : string {
   return cmd_exec_event_t_get_prop_args(this.nativeObj);
 }


  /**
   * 执行结果(适用于EXECED)。
   *
   */
 get result() : TRet {
   return cmd_exec_event_t_get_prop_result(this.nativeObj);
 }


  /**
   * 标识命令是否可以执行(适用于CAN_EXEC)。
   *
   */
 get canExec() : boolean {
   return cmd_exec_event_t_get_prop_can_exec(this.nativeObj);
 }

};
/**
 * app_bar控件。
 *
 *一个简单的容器控件，一般在窗口的顶部，用于显示本窗口的状态和信息。
 *
 *它本身不提供布局功能，仅提供具有语义的标签，让xml更具有可读性。
 *子控件的布局可用layout\_children属性指定。
 *请参考[布局参数](https://github.com/zlgopen/awtk/blob/master/docs/layout.md)。
 *
 *app\_bar\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于app\_bar\_t控件。
 *
 *在xml中使用"app\_bar"标签创建app\_bar。如：
 *
 *```xml
 *<app_bar x="0" y="0" w="100%" h="30"
 *<label x="0" y="0" w="100%" h="100%" text="Basic Controls" />
 *</app_bar>
 *```
 *
 *在c代码中使用函数app\_bar\_create创建app\_bar。如：
 *
 *
 *可用通过style来设置控件的显示风格，如背景颜色等。如：
 *
 *```xml
 *<style name="default" border_color="#a0a0a0">
 *<normal     bg_color="#f0f0f0" />
 *</style>
 *```
 *
 */
export class TAppBar extends TWidget { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 创建app_bar对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TAppBar  {
    return new TAppBar(app_bar_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }


  /**
   * 转换为app_bar对象(供脚本语言使用)。
   * 
   * @param widget app_bar对象。
   *
   * @returns app_bar对象。
   */
 static cast(widget : TWidget) : TAppBar  {
    return new TAppBar(app_bar_cast(widget != null ? (widget.nativeObj || widget) : null));
 }

};
/**
 * Button Group控件。一个简单的容器控件，用于容纳一组按钮控件。
 *
 *它本身不提供布局功能，仅提供具有语义的标签，让xml更具有可读性。
 *子控件的布局可用layout\_children属性指定。
 *请参考[布局参数](https://github.com/zlgopen/awtk/blob/master/docs/layout.md)。
 *
 *button\_group\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于button\_group\_t控件。
 *
 *在xml中使用"button\_group"标签创建button\_group。如：
 *
 *```xml
 *<button_group x="0" y="m" w="100%" h="40" children_layout="default(c=4,r=1,s=5,m=5)">
 *<button name="open:basic" text="Basic"/>
 *<button name="open:button" text="Buttons"/>
 *<button name="open:edit" text="Edits"/>
 *<button name="open:keyboard" text="KeyBoard"/>
 *</button_group>
 *```
 *
 *可用通过style来设置控件的显示风格，如背景颜色等。如：
 *
 *```xml
 *<style name="default" border_color="#a0a0a0">
 *<normal     bg_color="#f0f0f0" />
 *</style>
 *```
 *
 */
export class TButtonGroup extends TWidget { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 创建button_group对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TButtonGroup  {
    return new TButtonGroup(button_group_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }


  /**
   * 转换为button_group对象(供脚本语言使用)。
   * 
   * @param widget button_group对象。
   *
   * @returns button_group对象。
   */
 static cast(widget : TWidget) : TButtonGroup  {
    return new TButtonGroup(button_group_cast(widget != null ? (widget.nativeObj || widget) : null));
 }

};
/**
 * 按钮控件。
 *
 *点击按钮之后会触发EVT\_CLICK事件，注册EVT\_CLICK事件以执行特定操作。
 *
 *按钮控件也可以作为容器使用，使用图片和文本作为其子控件，可以实现很多有趣的效果。
 *
 *button\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于button\_t控件。
 *
 *在xml中使用"button"标签创建按钮控件。如：
 *
 *```xml
 *<button x="c" y="m" w="80" h="30" text="OK"/>
 *```
 *
 *> 更多用法请参考：
 *[button.xml](https://github.com/zlgopen/awtk/blob/master/design/default/ui/button.xml)
 *
 *在c代码中使用函数button\_create创建按钮控件。如：
 *
 *
 *> 创建之后，需要用widget\_set\_text或widget\_set\_text\_utf8设置文本内容。
 *
 *> 完整示例请参考：
 *[button demo](https://github.com/zlgopen/awtk-c-demos/blob/master/demos/button.c)
 *
 *可用通过style来设置控件的显示风格，如字体的大小和颜色等等。如：
 *
 *```xml
 *<style name="default" border_color="#a0a0a0"  text_color="black">
 *<normal     bg_color="#f0f0f0" />
 *<pressed    bg_color="#c0c0c0" x_offset="1" y_offset="1"/>
 *<over       bg_color="#e0e0e0" />
 *<disable    bg_color="gray" text_color="#d0d0d0" />
 *</style>
 *```
 *
 *> 更多用法请参考：
 *[theme
 *default](https://github.com/zlgopen/awtk/blob/master/design/default/styles/default.xml#L31)
 *
 */
export class TButton extends TWidget { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 创建button对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TButton  {
    return new TButton(button_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }


  /**
   * 转换为button对象(供脚本语言使用)。
   * 
   * @param widget button对象。
   *
   * @returns button对象。
   */
 static cast(widget : TWidget) : TButton  {
    return new TButton(button_cast(widget != null ? (widget.nativeObj || widget) : null));
 }


  /**
   * 设置触发EVT\_CLICK事件的时间间隔。为0则不重复触发EVT\_CLICK事件。
   * 
   * @param repeat 触发EVT_CLICK事件的时间间隔(毫秒)。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setRepeat(repeat : number) : TRet  {
    return button_set_repeat(this != null ? (this.nativeObj || this) : null, repeat);
 }


  /**
   * 设置触发长按事件的时间。
   * 
   * @param long_press_time 触发长按事件的时间(毫秒)。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setLongPressTime(long_press_time : number) : TRet  {
    return button_set_long_press_time(this != null ? (this.nativeObj || this) : null, long_press_time);
 }


  /**
   * 设置是否启用长按事件。
   * 
   * @param enable_long_press 是否启用长按事件。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setEnableLongPress(enable_long_press : boolean) : TRet  {
    return button_set_enable_long_press(this != null ? (this.nativeObj || this) : null, enable_long_press);
 }


  /**
   * 重复触发EVT\_CLICK事件的时间间隔。
   *
   *为0则不重复触发EVT\_CLICK事件。
   *
   */
 get repeat() : number {
   return button_t_get_prop_repeat(this.nativeObj);
 }

 set repeat(v : number) {
   this.setRepeat(v);
 }


  /**
   * 是否启用长按事件，为true时才触发长按事件。
   *
   *触发长按事件后不再触发点击事件。
   *缺省不启用。
   *
   */
 get enableLongPress() : boolean {
   return button_t_get_prop_enable_long_press(this.nativeObj);
 }

 set enableLongPress(v : boolean) {
   this.setEnableLongPress(v);
 }


  /**
   * 触发长按事件的时间(ms)
   *
   */
 get longPressTime() : number {
   return button_t_get_prop_long_press_time(this.nativeObj);
 }

 set longPressTime(v : number) {
   this.setLongPressTime(v);
 }

};
/**
 * 勾选按钮控件(单选/多选)。
 *
 *check\_button\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于check\_button\_t控件。
 *
 *在xml中使用"check_button"标签创建多选按钮控件。如：
 *
 *```xml
 *<check_button name="c1" text="Book"/>
 *```
 *
 *在xml中使用"radio_button"标签创建单选按钮控件。如：
 *
 *```xml
 *<radio_button name="r1" text="Book"/>
 *```
 *
 *> 更多用法请参考：
 *[button.xml](https://github.com/zlgopen/awtk/blob/master/design/default/ui/basic.xml)
 *
 *在c代码中使用函数check\_button\_create创建多选按钮控件。如：
 *
 *
 *在c代码中使用函数check\_button\_create\_radio创建单选按钮控件。如：
 *
 *
 *> 完整示例请参考：
 *[button demo](https://github.com/zlgopen/awtk-c-demos/blob/master/demos/check_button.c)
 *
 *可用通过style来设置控件的显示风格，如字体的大小和颜色等等。如：
 *
 *```xml
 *<style name="default" icon_at="left">
 *<normal  icon="unchecked" />
 *<pressed icon="unchecked" />
 *<over    icon="unchecked" text_color="green"/>
 *<normal_of_checked icon="checked" text_color="blue"/>
 *<pressed_of_checked icon="checked" text_color="blue"/>
 *<over_of_checked icon="checked" text_color="green"/>
 *</style>
 *```
 *
 *> 更多用法请参考：
 *[theme
 *default](https://github.com/zlgopen/awtk/blob/master/design/default/styles/default.xml#L227)
 *
 */
export class TCheckButton extends TWidget { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 创建多选按钮对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns widget对象。
   */
 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TCheckButton  {
    return new TCheckButton(check_button_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }


  /**
   * 创建单选按钮对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns widget对象。
   */
 static createRadio(parent : TWidget, x : number, y : number, w : number, h : number) : TCheckButton  {
    return new TCheckButton(check_button_create_radio(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }


  /**
   * 设置控件的值。
   * 
   * @param value 值(勾选为TRUE，非勾选为FALSE)。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setValue(value : any) : TRet  {
    return check_button_set_value(this != null ? (this.nativeObj || this) : null, value);
 }


  /**
   * 转换check_button对象(供脚本语言使用)。
   * 
   * @param widget check_button对象。
   *
   * @returns check_button对象。
   */
 static cast(widget : TWidget) : TCheckButton  {
    return new TCheckButton(check_button_cast(widget != null ? (widget.nativeObj || widget) : null));
 }


  /**
   * 值(勾选为TRUE，非勾选为FALSE)。
   *
   */
 get value() : boolean {
   return check_button_t_get_prop_value(this.nativeObj);
 }

 set value(v : boolean) {
   this.setValue(v);
 }

};
/**
 * 一个裁剪子控件的容器控件。
 *
 *它本身不提供布局功能，仅提供具有语义的标签，让xml更具有可读性。
 *子控件的布局可用layout\_children属性指定。
 *请参考[布局参数](https://github.com/zlgopen/awtk/blob/master/docs/layout.md)。
 *
 *clip\_view\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于clip\_view\_t控件。
 *
 *在xml中使用"clip_view"标签创建clip_view，在clip_view控件下的所有子控件都会被裁剪。如下button控件会被裁剪，无法画出clip_view控件 ：
 *
 *```xml
 *<clip_view x="0" y="0" w="100" h="100">
 *<button x="50" y="10" w="100" h="50" />
 *</clip_view>
 *```
 *
 *备注：在clip_view控件下的所有子控件都会被裁剪，如果子控件本身会设置裁剪区的话，在子控件中计算裁剪区的交集，具体请参考scroll_view控件的scroll_view_on_paint_children函数。
 *
 *可用通过style来设置控件的显示风格，如背景颜色等。如：
 *
 *```xml
 *<style name="default" border_color="#a0a0a0">
 *<normal     bg_color="#f0f0f0" />
 *</style>
 *```
 *
 */
export class TClipView extends TWidget { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 创建clip_view对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TClipView  {
    return new TClipView(clip_view_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }


  /**
   * 转换为clip_view对象(供脚本语言使用)。
   * 
   * @param widget clip_view对象。
   *
   * @returns clip_view对象。
   */
 static cast(widget : TWidget) : TClipView  {
    return new TClipView(clip_view_cast(widget != null ? (widget.nativeObj || widget) : null));
 }

};
/**
 * 色块控件。
 *
 *用来显示一个颜色块，它通过属性而不是窗体样式来设置颜色，方便在运行时动态改变颜色。
 *
 *可以使用value属性访问背景颜色的颜色值。
 *
 *color\_tile\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于color\_tile\_t控件。
 *
 *在xml中使用"color_tile"标签创建色块控件。如：
 *
 *```xml
 *<color_tile x="c" y="m" w="80" h="30" bg_color="green" />
 *```
 *
 *> 更多用法请参考：
 *[color_tile](https://github.com/zlgopen/awtk/blob/master/design/default/ui/color_picker_rgb.xml)
 *
 *在c代码中使用函数color_tile\_create创建色块控件。如：
 *
 *> 创建之后，用color\_tile\_set\_bg\_color设置背景颜色。
 *
 */
export class TColorTile extends TWidget { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 创建color_tile对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TColorTile  {
    return new TColorTile(color_tile_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }


  /**
   * 转换为color_tile对象(供脚本语言使用)。
   * 
   * @param widget color_tile对象。
   *
   * @returns color_tile对象。
   */
 static cast(widget : TWidget) : TColorTile  {
    return new TColorTile(color_tile_cast(widget != null ? (widget.nativeObj || widget) : null));
 }


  /**
   * 设置背景颜色。
   * 
   * @param color 背景颜色。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setBgColor(color : string) : TRet  {
    return color_tile_set_bg_color(this != null ? (this.nativeObj || this) : null, color);
 }


  /**
   * 获取背景颜色。
   * 
   *
   * @returns 返回背景颜色。
   */
 getBgColor() : string  {
    return color_tile_get_bg_color(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 获取边框颜色。
   * 
   *
   * @returns 返回边框颜色。
   */
 getBorderColor() : string  {
    return color_tile_get_border_color(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 背景颜色。
   *
   */
 get bgColor() : string {
   return color_tile_t_get_prop_bg_color(this.nativeObj);
 }

 set bgColor(v : string) {
   this.setBgColor(v);
 }


  /**
   * 边框颜色。
   *
   */
 get borderColor() : string {
   return color_tile_t_get_prop_border_color(this.nativeObj);
 }

};
/**
 * column。一个简单的容器控件，垂直排列其子控件。
 *
 *它本身不提供布局功能，仅提供具有语义的标签，让xml更具有可读性。
 *子控件的布局可用layout\_children属性指定。
 *请参考[布局参数](https://github.com/zlgopen/awtk/blob/master/docs/layout.md)。
 *
 *column\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于column\_t控件。
 *
 *在xml中使用"column"标签创建column。如：
 *
 *```xml
 *<column x="0" y="0" w="100%" h="100%" children_layout="default(c=1,r=0)">
 *<button name="open:basic" text="Basic"/>
 *<button name="open:button" text="Buttons"/>
 *<button name="open:edit" text="Edits"/>
 *<button name="open:keyboard" text="KeyBoard"/>
 *</column>
 *```
 *
 *可用通过style来设置控件的显示风格，如背景颜色等。如：
 *
 *```xml
 *<style name="default" border_color="#a0a0a0">
 *<normal     bg_color="#f0f0f0" />
 *</style>
 *```
 *
 */
export class TColumn extends TWidget { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 创建column对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TColumn  {
    return new TColumn(column_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }


  /**
   * 转换为column对象(供脚本语言使用)。
   * 
   * @param widget column对象。
   *
   * @returns column对象。
   */
 static cast(widget : TWidget) : TColumn  {
    return new TColumn(column_cast(widget != null ? (widget.nativeObj || widget) : null));
 }

};
/**
 * ComboBox Item控件。
 *
 *本类仅供combo\_box控件内部使用。
 *
 */
export class TComboBoxItem extends TWidget { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 创建combo_box_item对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TComboBoxItem  {
    return new TComboBoxItem(combo_box_item_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }


  /**
   * 转换combo_box_item对象(供脚本语言使用)。
   * 
   * @param widget combo_box_item对象。
   *
   * @returns combo_box_item对象。
   */
 static cast(widget : TWidget) : TComboBoxItem  {
    return new TComboBoxItem(combo_box_item_cast(widget != null ? (widget.nativeObj || widget) : null));
 }


  /**
   * 设置控件是否被选中。
   * 
   * @param checked 是否被选中。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setChecked(checked : boolean) : TRet  {
    return combo_box_item_set_checked(this != null ? (this.nativeObj || this) : null, checked);
 }


  /**
   * 设置控件的值。
   * 
   * @param value 值
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setValue(value : any) : TRet  {
    return combo_box_item_set_value(this != null ? (this.nativeObj || this) : null, value);
 }


  /**
   * 值。
   *
   */
 get value() : number {
   return combo_box_item_t_get_prop_value(this.nativeObj);
 }

 set value(v : number) {
   this.setValue(v);
 }


  /**
   * 是否被选中。
   *
   */
 get checked() : boolean {
   return combo_box_item_t_get_prop_checked(this.nativeObj);
 }

 set checked(v : boolean) {
   this.setChecked(v);
 }

};
/**
 * 对话框客户区控件。
 *
 *它本身不提供布局功能，仅提供具有语义的标签，让xml更具有可读性。
 *子控件的布局可用layout\_children属性指定。
 *请参考[布局参数](https://github.com/zlgopen/awtk/blob/master/docs/layout.md)。
 *
 *dialog\_client\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于dialog\_client\_t控件。
 *
 *在xml中使用"dialog\_client"标签创建dialog\_client。如：
 *
 *```xml
 *<dialog anim_hint="center_scale(duration=300)" x="c" y="m" w="80%" h="160" text="Dialog">
 *<dialog_title x="0" y="0" w="100%" h="30" text="Hello AWTK" />
 *<dialog_client x="0" y="bottom" w="100%" h="-30">
 *<label name="" x="center" y="middle:-20" w="200" h="30" text="Are you ready?"/>
 *<button name="quit" x="10" y="bottom:10" w="40%" h="30" text="确定"/>
 *<button name="quit" x="right:10" y="bottom:10" w="40%" h="30" text="取消"/>
 *</dialog_client>
 *</dialog>
 *```
 *
 *在c代码中，用dialog\_create\_simple创建对话框时，自动创建dialog客户区对象。
 *
 */
export class TDialogClient extends TWidget { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 创建dialog客户区对象。
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns dialog对象。
   */
 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TDialogClient  {
    return new TDialogClient(dialog_client_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }


  /**
   * 转换为dialog_client对象(供脚本语言使用)。
   * 
   * @param widget dialog_client对象。
   *
   * @returns dialog_client对象。
   */
 static cast(widget : TWidget) : TDialogClient  {
    return new TDialogClient(dialog_client_cast(widget != null ? (widget.nativeObj || widget) : null));
 }

};
/**
 * 对话框标题控件。
 *
 *它本身不提供布局功能，仅提供具有语义的标签，让xml更具有可读性。
 *子控件的布局可用layout\_children属性指定。
 *请参考[布局参数](https://github.com/zlgopen/awtk/blob/master/docs/layout.md)。
 *
 *dialog\_title\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于dialog\_title\_t控件。
 *
 *在xml中使用"dialog\_title"标签创建dialog\_title。如：
 *
 *```xml
 *<dialog anim_hint="center_scale(duration=300)" x="c" y="m" w="80%" h="160" text="Dialog">
 *<dialog_title x="0" y="0" w="100%" h="30" text="Hello AWTK" />
 *<dialog_client x="0" y="bottom" w="100%" h="-30">
 *<label name="" x="center" y="middle:-20" w="200" h="30" text="Are you ready?"/>
 *<button name="quit" x="10" y="bottom:10" w="40%" h="30" text="确定"/>
 *<button name="quit" x="right:10" y="bottom:10" w="40%" h="30" text="取消"/>
 *</dialog_client>
 *</dialog>
 *```
 *
 *在c代码中，用dialog\_create\_simple创建对话框时，自动创建dialog标题对象。
 *
 */
export class TDialogTitle extends TWidget { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 创建dialog对象。
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns dialog对象。
   */
 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TDialogTitle  {
    return new TDialogTitle(dialog_title_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }


  /**
   * 转换为dialog_title对象(供脚本语言使用)。
   * 
   * @param widget dialog_title对象。
   *
   * @returns dialog_title对象。
   */
 static cast(widget : TWidget) : TDialogTitle  {
    return new TDialogTitle(dialog_title_cast(widget != null ? (widget.nativeObj || widget) : null));
 }

};
/**
 * 数字时钟控件。
 *
 *digit\_clock\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于digit\_clock\_t控件。
 *
 *在xml中使用"digit\_clock"标签创建数字时钟控件。如：
 *
 *```xml
 *<digit_clock format="YY/MM/DD h:mm:ss"/>
 *```
 *
 *> 更多用法请参考：[digit\_clock.xml](
 *https://github.com/zlgopen/awtk/blob/master/design/default/ui/digit_clock.xml)
 *
 *在c代码中使用函数digit\_clock\_create创建数字时钟控件。如：
 *
 *
 *> 完整示例请参考：[digit\_clock demo](
 *https://github.com/zlgopen/awtk-c-demos/blob/master/demos/digit_clock.c)
 *
 *可用通过style来设置控件的显示风格，如字体的大小和颜色等等。如：
 *
 *```xml
 *<style name="default">
 *<normal text_color="black" />
 *</style>
 *```
 *
 *> 更多用法请参考：[theme default](
 *https://github.com/zlgopen/awtk/blob/master/design/default/styles/default.xml#L138)
 *
 */
export class TDigitClock extends TWidget { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 创建digit_clock对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TDigitClock  {
    return new TDigitClock(digit_clock_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }


  /**
   * 转换为digit_clock对象(供脚本语言使用)。
   * 
   * @param widget digit_clock对象。
   *
   * @returns digit_clock对象。
   */
 static cast(widget : TWidget) : TDigitClock  {
    return new TDigitClock(digit_clock_cast(widget != null ? (widget.nativeObj || widget) : null));
 }


  /**
   * 设置显示格式。
   * 
   * @param format 格式。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setFormat(format : string) : TRet  {
    return digit_clock_set_format(this != null ? (this.nativeObj || this) : null, format);
 }


  /**
   * 显示格式。
   *
   ** Y 代表年(完整显示)
   ** M 代表月(1-12)
   ** D 代表日(1-31)
   ** h 代表时(0-23)
   ** m 代表分(0-59)
   ** s 代表秒(0-59)
   ** w 代表星期(0-6)
   ** W 代表星期的英文缩写(支持翻译)
   ** YY 代表年(只显示末两位)
   ** MM 代表月(01-12)
   ** DD 代表日(01-31)
   ** hh 代表时(00-23)
   ** mm 代表分(00-59)
   ** ss 代表秒(00-59)
   ** MMM 代表月的英文缩写(支持翻译)
   *
   *如 日期时间为：2018/11/12 9:10:20
   ** "Y/M/D"显示为"2018/11/12"
   ** "Y-M-D"显示为"2018-11-12"
   ** "Y-M-D h:m:s"显示为"2018-11-12 9:10:20"
   ** "Y-M-D hh:mm:ss"显示为"2018-11-12 09:10:20"
   *
   */
 get format() : string {
   return digit_clock_t_get_prop_format(this.nativeObj);
 }

 set format(v : string) {
   this.setFormat(v);
 }

};
/**
 * dragger控件。
 *
 *目前主要用于scrollbar里的滑块。
 *
 */
export class TDragger extends TWidget { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 创建dragger对象。
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TDragger  {
    return new TDragger(dragger_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }


  /**
   * 转换为dragger对象(供脚本语言使用)。
   * 
   * @param widget dragger对象。
   *
   * @returns dragger对象。
   */
 static cast(widget : TWidget) : TDragger  {
    return new TDragger(dragger_cast(widget != null ? (widget.nativeObj || widget) : null));
 }


  /**
   * 设置拖动的范围。
   * 
   * @param x_min x坐标最小值。
   * @param y_min y坐标最小值。
   * @param x_max x坐标最大值。
   * @param y_max y坐标最大值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setRange(x_min : number, y_min : number, x_max : number, y_max : number) : TRet  {
    return dragger_set_range(this != null ? (this.nativeObj || this) : null, x_min, y_min, x_max, y_max);
 }


  /**
   * x坐标的最小值。
   *
   */
 get xMin() : number {
   return dragger_t_get_prop_x_min(this.nativeObj);
 }


  /**
   * y坐标的最小值。
   *
   */
 get yMin() : number {
   return dragger_t_get_prop_y_min(this.nativeObj);
 }


  /**
   * x坐标的最大值。
   *
   */
 get xMax() : number {
   return dragger_t_get_prop_x_max(this.nativeObj);
 }


  /**
   * y坐标的最大值。
   *
   */
 get yMax() : number {
   return dragger_t_get_prop_y_max(this.nativeObj);
 }

};
/**
 * 单行编辑器控件。
 *
 *在基于SDL的平台，单行编辑器控件使用平台原生的输入法，对于嵌入式平台使用内置的输入法。
 *
 *在使用内置的输入法时，软键盘由输入类型决定，开发者可以自定义软键盘的界面。
 *
 *edit\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于edit\_t控件。
 *
 *edit\_t本身可以做为容器，放入按钮等控件。有几个特殊的子控件：
 *
 ** 名为"clear"的按钮。点击时清除编辑器中的内容。
 ** 名为"inc"的按钮。点击时增加编辑器的值，用于实现类似于spinbox的功能。
 ** 名为"dec"的按钮。点击时减少编辑器的值，用于实现类似于spinbox的功能。
 ** 名为"visible"的复选框。勾选时显示密码，反之不显示密码。
 *
 *在xml中使用"edit"标签创建编辑器控件。如：
 *
 *```xml
 *<edit x="c" y="m" w="80" h="30"
 *tips="age" input_type="uint" min="0" max="150" step="1" auto_fix="true" style="number" />
 *```
 *
 *> XXX：需要在min/max/step之前设置input\_type。
 *
 *>更多用法请参考：
 *[edit.xml](https://github.com/zlgopen/awtk/blob/master/design/default/ui/edit.xml)
 *
 *在c代码中使用函数edit\_create创建编辑器控件。如：
 *
 *
 *> 创建之后，可以用widget\_set\_text或widget\_set\_text\_utf8设置文本内容。
 *
 *> 完整示例请参考：
 *[edit demo](https://github.com/zlgopen/awtk-c-demos/blob/master/demos/edit.c)
 *
 *可用通过style来设置控件的显示风格，如字体的大小和颜色等等。如：
 *
 *```xml
 *<style name="default" border_color="#a0a0a0"  text_color="black" text_align_h="left">
 *<normal     bg_color="#f0f0f0" />
 *<focused    bg_color="#f0f0f0" border_color="black"/>
 *<disable    bg_color="gray" text_color="#d0d0d0" />
 *<error      bg_color="#f0f0f0" text_color="red" />
 *<empty      bg_color="#f0f0f0" text_color="#a0a0a0" />
 *</style>
 *```
 *
 *> 更多用法请参考：
 *[theme
 *default](https://github.com/zlgopen/awtk/blob/master/design/default/styles/default.xml#L104)
 *
 */
export class TEdit extends TWidget { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 创建edit对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TEdit  {
    return new TEdit(edit_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }


  /**
   * 转换为edit对象(供脚本语言使用)。
   * 
   * @param widget edit对象。
   *
   * @returns edit对象。
   */
 static cast(widget : TWidget) : TEdit  {
    return new TEdit(edit_cast(widget != null ? (widget.nativeObj || widget) : null));
 }


  /**
   * 获取int类型的值。
   * 
   *
   * @returns 返回int的值。
   */
 getInt() : number  {
    return edit_get_int(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 获取double类型的值。
   * 
   *
   * @returns 返回double的值。
   */
 getDouble() : number  {
    return edit_get_double(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 设置int类型的值。
   * 
   * @param value 值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setInt(value : any) : TRet  {
    return edit_set_int(this != null ? (this.nativeObj || this) : null, value);
 }


  /**
   * 设置double类型的值。
   * 
   * @param value 值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setDouble(value : any) : TRet  {
    return edit_set_double(this != null ? (this.nativeObj || this) : null, value);
 }


  /**
   * 设置为文本输入及其长度限制，不允许输入超过max个字符，少于min个字符时进入error状态。
   * 
   * @param min 最小长度。
   * @param max 最大长度。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setTextLimit(min : number, max : number) : TRet  {
    return edit_set_text_limit(this != null ? (this.nativeObj || this) : null, min, max);
 }


  /**
   * 设置为整数输入及取值范围。
   * 
   * @param min 最小值。
   * @param max 最大值。
   * @param step 步长。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setIntLimit(min : number, max : number, step : number) : TRet  {
    return edit_set_int_limit(this != null ? (this.nativeObj || this) : null, min, max, step);
 }


  /**
   * 设置为浮点数输入及取值范围。
   * 
   * @param min 最小值。
   * @param max 最大值。
   * @param step 步长。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setFloatLimit(min : number, max : number, step : number) : TRet  {
    return edit_set_float_limit(this != null ? (this.nativeObj || this) : null, min, max, step);
 }


  /**
   * 设置编辑器是否为只读。
   * 
   * @param readonly 只读。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setReadonly(readonly : boolean) : TRet  {
    return edit_set_readonly(this != null ? (this.nativeObj || this) : null, readonly);
 }


  /**
   * 设置编辑器是否为可撤销修改。
   * 
   * @param cancelable 是否为可撤销修。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setCancelable(cancelable : boolean) : TRet  {
    return edit_set_cancelable(this != null ? (this.nativeObj || this) : null, cancelable);
 }


  /**
   * 设置编辑器是否为自动改正。
   * 
   * @param auto_fix 自动改正。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setAutoFix(auto_fix : boolean) : TRet  {
    return edit_set_auto_fix(this != null ? (this.nativeObj || this) : null, auto_fix);
 }


  /**
   * 设置编辑器是否在获得焦点时不选中文本。
   * 
   * @param select_none_when_focused 是否在获得焦点时不选中文本。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setSelectNoneWhenFocused(select_none_when_focused : boolean) : TRet  {
    return edit_set_select_none_when_focused(this != null ? (this.nativeObj || this) : null, select_none_when_focused);
 }


  /**
   * 设置编辑器是否在获得焦点时打开输入法。
   *
   *> * 设置默认焦点时，打开窗口时不弹出软键盘。
   *> * 用键盘切换焦点时，编辑器获得焦点时不弹出软键盘。
   * 
   * @param open_im_when_focused 是否在获得焦点时打开输入法。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setOpenImWhenFocused(open_im_when_focused : boolean) : TRet  {
    return edit_set_open_im_when_focused(this != null ? (this.nativeObj || this) : null, open_im_when_focused);
 }


  /**
   * 设置编辑器是否在失去焦点时关闭输入法。
   * 
   * @param close_im_when_blured 是否是否在失去焦点时关闭输入法。在失去焦点时关闭输入法。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setCloseImWhenBlured(close_im_when_blured : boolean) : TRet  {
    return edit_set_close_im_when_blured(this != null ? (this.nativeObj || this) : null, close_im_when_blured);
 }


  /**
   * 设置编辑器的输入类型。
   * 
   * @param type 输入类型。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setInputType(type : TInputType) : TRet  {
    return edit_set_input_type(this != null ? (this.nativeObj || this) : null, type);
 }


  /**
   * 设置软键盘上action按钮的文本。
   * 
   * @param action_text 软键盘上action按钮的文本。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setActionText(action_text : string) : TRet  {
    return edit_set_action_text(this != null ? (this.nativeObj || this) : null, action_text);
 }


  /**
   * 设置编辑器的输入提示。
   * 
   * @param tips 输入提示。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setTips(tips : string) : TRet  {
    return edit_set_tips(this != null ? (this.nativeObj || this) : null, tips);
 }


  /**
   * 获取翻译之后的文本，然后调用edit_set_tips。
   * 
   * @param tr_tips 提示信息。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setTrTips(tr_tips : string) : TRet  {
    return edit_set_tr_tips(this != null ? (this.nativeObj || this) : null, tr_tips);
 }


  /**
   * 设置自定义软键盘名称。
   * 
   * @param keyboard 键盘名称(相应UI资源必须存在)。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setKeyboard(keyboard : string) : TRet  {
    return edit_set_keyboard(this != null ? (this.nativeObj || this) : null, keyboard);
 }


  /**
   * 当编辑器输入类型为密码时，设置密码是否可见。
   * 
   * @param password_visible 密码是否可见。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setPasswordVisible(password_visible : boolean) : TRet  {
    return edit_set_password_visible(this != null ? (this.nativeObj || this) : null, password_visible);
 }


  /**
   * 设置为焦点。
   * 
   * @param focus 是否为焦点。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setFocus(focus : boolean) : TRet  {
    return edit_set_focus(this != null ? (this.nativeObj || this) : null, focus);
 }


  /**
   * 设置输入框的光标位置。
   * 
   * @param cursor 光标位置。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setCursor(cursor : number) : TRet  {
    return edit_set_cursor(this != null ? (this.nativeObj || this) : null, cursor);
 }


  /**
   * 获取输入框的光标位置。
   * 
   *
   * @returns 返回光标位置。
   */
 getCursor() : number  {
    return edit_get_cursor(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 选择指定范围的文本。
   * 
   * @param start 起始偏移。
   * @param end 结束偏移。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setSelect(start : number, end : number) : TRet  {
    return edit_set_select(this != null ? (this.nativeObj || this) : null, start, end);
 }


  /**
   * 获取选中的文本。
   *使用完后需调用 TKMEM_FREE() 进行释放文本占有内存。
   * 
   *
   * @returns 返回选中文本。
   */
 getSelectedText() : string  {
    return edit_get_selected_text(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 输入提示。
   *
   */
 get tips() : string {
   return edit_t_get_prop_tips(this.nativeObj);
 }

 set tips(v : string) {
   this.setTips(v);
 }


  /**
   * 保存用于翻译的提示信息。
   *
   */
 get trTips() : string {
   return edit_t_get_prop_tr_tips(this.nativeObj);
 }

 set trTips(v : string) {
   this.setTrTips(v);
 }


  /**
   * 软键盘上action按钮的文本。内置取值有：
   *
   ** next 将焦点切换到下一个控件。
   ** done 完成，关闭软键盘。
   *
   *也可以使用其它文本，比如send表示发送。这个需要自己实现相应的功能，处理EVT\_IM\_ACTION事件即可。
   *
   */
 get actionText() : string {
   return edit_t_get_prop_action_text(this.nativeObj);
 }

 set actionText(v : string) {
   this.setActionText(v);
 }


  /**
   * 自定义软键盘名称。AWTK优先查找keyboard属性设置的键盘文件名（该键盘的XML文件需要在default\raw\ui目录下存在），如果keyboard为空就找input_type设置的键盘类型
   *
   */
 get keyboard() : string {
   return edit_t_get_prop_keyboard(this.nativeObj);
 }

 set keyboard(v : string) {
   this.setKeyboard(v);
 }


  /**
   * 最小值或最小长度。
   *
   */
 get min() : number {
   return edit_t_get_prop_min(this.nativeObj);
 }


  /**
   * 最大值或最大长度。
   *
   */
 get max() : number {
   return edit_t_get_prop_max(this.nativeObj);
 }


  /**
   * 步长。
   *作为数值型编辑器时，一次增加和减少时的数值。
   *
   */
 get step() : number {
   return edit_t_get_prop_step(this.nativeObj);
 }


  /**
   * 输入类型。
   *
   */
 get inputType() : TInputType {
   return edit_t_get_prop_input_type(this.nativeObj);
 }

 set inputType(v : TInputType) {
   this.setInputType(v);
 }


  /**
   * 编辑器是否为只读。
   *
   */
 get readonly() : boolean {
   return edit_t_get_prop_readonly(this.nativeObj);
 }

 set readonly(v : boolean) {
   this.setReadonly(v);
 }


  /**
   * 密码是否可见。
   *
   */
 get passwordVisible() : boolean {
   return edit_t_get_prop_password_visible(this.nativeObj);
 }

 set passwordVisible(v : boolean) {
   this.setPasswordVisible(v);
 }


  /**
   * 输入无效时，是否自动改正。
   *
   */
 get autoFix() : boolean {
   return edit_t_get_prop_auto_fix(this.nativeObj);
 }

 set autoFix(v : boolean) {
   this.setAutoFix(v);
 }


  /**
   * 获得焦点时不选中文本。
   *
   *> 主要用于没有指针设备的情况，否则软键盘无法取消选中文本。
   *
   */
 get selectNoneWhenFocused() : boolean {
   return edit_t_get_prop_select_none_when_focused(this.nativeObj);
 }

 set selectNoneWhenFocused(v : boolean) {
   this.setSelectNoneWhenFocused(v);
 }


  /**
   * 获得焦点时打开输入法。
   *
   *> 主要用于没有指针设备的情况，否则每次切换焦点时都打开输入法。
   *
   */
 get openImWhenFocused() : boolean {
   return edit_t_get_prop_open_im_when_focused(this.nativeObj);
 }

 set openImWhenFocused(v : boolean) {
   this.setOpenImWhenFocused(v);
 }


  /**
   * 是否在失去焦点时关闭输入法(默认是)。
   *
   */
 get closeImWhenBlured() : boolean {
   return edit_t_get_prop_close_im_when_blured(this.nativeObj);
 }

 set closeImWhenBlured(v : boolean) {
   this.setCloseImWhenBlured(v);
 }


  /**
   * 是否支持撤销编辑。如果为TRUE，在失去焦点之前可以撤销所有修改(恢复获得焦点之前的内容)。
   *
   *> * 1.一般配合keyboard的"cancel"按钮使用。
   *> * 2.为TRUE时，如果内容有变化，会设置编辑器的状态为changed，所以此时编辑器需要支持changed状态的style。
   *
   */
 get cancelable() : boolean {
   return edit_t_get_prop_cancelable(this.nativeObj);
 }

 set cancelable(v : boolean) {
   this.setCancelable(v);
 }

};
/**
 * grid_item。一个简单的容器控件，一般作为grid的子控件。
 *
 *它本身不提供布局功能，仅提供具有语义的标签，让xml更具有可读性。
 *子控件的布局可用layout\_children属性指定。
 *请参考[布局参数](https://github.com/zlgopen/awtk/blob/master/docs/layout.md)。
 *
 *grid\_item\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于grid\_item\_t控件。
 *
 *在xml中使用"grid\_item"标签创建grid\_item。如：
 *
 *```xml
 *<grid x="0" y="0" w="100%" h="100%" children_layout="default(c=2,r=2,m=5,s=5)">
 *<grid_item>
 *<button x="c" y="m" w="80%" h="30" name="0" text="0"/>
 *</grid_item>
 *<grid_item>
 *<button x="c" y="m" w="80%" h="30" name="1" text="1"/>
 *</grid_item>
 *<grid_item>
 *<button x="c" y="m" w="80%" h="30" name="2" text="2"/>
 *</grid_item>
 *<grid_item>
 *<button x="c" y="m" w="80%" h="30" name="3" text="3"/>
 *</grid_item>
 *</grid>
 *
 *```
 *
 *可用通过style来设置控件的显示风格，如背景颜色等。如：
 *
 *```xml
 *<style name="default" border_color="#a0a0a0">
 *<normal     bg_color="#f0f0f0" />
 *</style>
 *```
 *
 */
export class TGridItem extends TWidget { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 创建grid_item对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TGridItem  {
    return new TGridItem(grid_item_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }


  /**
   * 转换为grid_item对象(供脚本语言使用)。
   * 
   * @param widget grid_item对象。
   *
   * @returns grid_item对象。
   */
 static cast(widget : TWidget) : TGridItem  {
    return new TGridItem(grid_item_cast(widget != null ? (widget.nativeObj || widget) : null));
 }

};
/**
 * grid控件。一个简单的容器控件，用于网格排列一组控件。
 *
 *它本身不提供布局功能，仅提供具有语义的标签，让xml更具有可读性。
 *子控件的布局可用layout\_children属性指定。
 *请参考[布局参数](https://github.com/zlgopen/awtk/blob/master/docs/layout.md)。
 *
 *grid\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于grid\_t控件。
 *
 *在xml中使用"grid"标签创建grid。如：
 *
 *```xml
 *<grid x="0" y="0" w="100%" h="100%" children_layout="default(c=2,r=2,m=5,s=5)">
 *<button name="open:basic" text="Basic"/>
 *<button name="open:button" text="Buttons"/>
 *<button name="open:edit" text="Edits"/>
 *<button name="open:keyboard" text="KeyBoard"/>
 *</grid>
 *```
 *
 *可用通过style来设置控件的显示风格，如背景颜色等。如：
 *
 *```xml
 *<style name="default" border_color="#a0a0a0">
 *<normal     bg_color="#f0f0f0" />
 *</style>
 *```
 *
 */
export class TGrid extends TWidget { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 创建grid对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TGrid  {
    return new TGrid(grid_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }


  /**
   * 转换为grid对象(供脚本语言使用)。
   * 
   * @param widget grid对象。
   *
   * @returns grid对象。
   */
 static cast(widget : TWidget) : TGrid  {
    return new TGrid(grid_cast(widget != null ? (widget.nativeObj || widget) : null));
 }

};
/**
 * 分组控件。
 *
 *单选按钮在同一个父控件中是互斥的，所以通常将相关的单选按钮放在一个group\_box中。
 *
 *它本身不提供布局功能，仅提供具有语义的标签，让xml更具有可读性。
 *子控件的布局可用layout\_children属性指定。
 *请参考[布局参数](https://github.com/zlgopen/awtk/blob/master/docs/layout.md)。
 *
 *group\_box\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于group\_box\_t控件。
 *
 *在xml中使用"group\_box"标签创建group\_box。如：
 *
 *```xml
 *<group_box x="20" y="230" w="50%" h="90" children_layout="default(r=3,c=1,ym=2,s=10)"
 *<radio_button name="r1" text="Book"/>
 *<radio_button name="r2" text="Food"/>
 *<radio_button name="r3" text="Pencil" value="true"/>
 *</group_box>
 *```
 *
 *可用通过style来设置控件的显示风格，如背景颜色等。如：
 *
 *```xml
 *<style name="default" border_color="#a0a0a0">
 *<normal     bg_color="#f0f0f0" />
 *</style>
 *```
 *
 */
export class TGroupBox extends TWidget { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 创建group_box对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TGroupBox  {
    return new TGroupBox(group_box_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }


  /**
   * 转换为group_box对象(供脚本语言使用)。
   * 
   * @param widget group_box对象。
   *
   * @returns group_box对象。
   */
 static cast(widget : TWidget) : TGroupBox  {
    return new TGroupBox(group_box_cast(widget != null ? (widget.nativeObj || widget) : null));
 }

};
/**
 * 文本控件。用于显示一行或多行文本。
 *
 *文本控件不会根据文本的长度自动换行，只有文本内容包含换行符时才会换行。
 *
 *如需自动换行请使用[rich\_text\_t](rich_text_t.md)控件。
 *
 *label\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于label\_t控件。
 *
 *在xml中使用"label"标签创建文本控件。如：
 *
 *```xml
 *<label style="center" text="center"/>
 *```
 *
 *> 更多用法请参考：[label.xml](
 *https://github.com/zlgopen/awtk/blob/master/design/default/ui/label.xml)
 *
 *在c代码中使用函数label\_create创建文本控件。如：
 *
 *
 *> 创建之后，需要用widget\_set\_text或widget\_set\_text\_utf8设置文本内容。
 *
 *> 完整示例请参考：[label demo](
 *https://github.com/zlgopen/awtk-c-demos/blob/master/demos/label.c)
 *
 *可用通过style来设置控件的显示风格，如字体的大小和颜色等等。如：
 *
 *```xml
 *<style name="left">
 *<normal text_color="red" text_align_h="left" border_color="#a0a0a0" margin="4" />
 *</style>
 *```
 *
 *> 更多用法请参考：
 *[theme default](
 *https://github.com/zlgopen/awtk/blob/master/design/default/styles/default.xml#L144)
 *
 */
export class TLabel extends TWidget { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 创建label对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TLabel  {
    return new TLabel(label_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }


  /**
   * 设置显示字符的个数(小余0时全部显示)。
   * 
   * @param length 最大可显示字符个数。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setLength(length : number) : TRet  {
    return label_set_length(this != null ? (this.nativeObj || this) : null, length);
 }


  /**
   * 设置max_w。
   * 
   * @param max_w 最大宽度。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setMaxW(max_w : number) : TRet  {
    return label_set_max_w(this != null ? (this.nativeObj || this) : null, max_w);
 }


  /**
   * 设置是否自动换行。
   * 
   * @param line_wrap 是否自动换行。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setLineWrap(line_wrap : boolean) : TRet  {
    return label_set_line_wrap(this != null ? (this.nativeObj || this) : null, line_wrap);
 }


  /**
   * 设置是否允许整个单词换行。(需要开启自动换行才有效果)
   * 
   * @param word_wrap 是否允许整个单词换行。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setWordWrap(word_wrap : boolean) : TRet  {
    return label_set_word_wrap(this != null ? (this.nativeObj || this) : null, word_wrap);
 }


  /**
   * 根据文本内容调节控件大小。
   * 
   * @param min_w 最小宽度。
   * @param max_w 最大宽度。
   * @param min_h 最小高度。
   * @param max_h 最大高度。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 resizeToContent(min_w : number, max_w : number, min_h : number, max_h : number) : TRet  {
    return label_resize_to_content(this != null ? (this.nativeObj || this) : null, min_w, max_w, min_h, max_h);
 }


  /**
   * 转换为label对象(供脚本语言使用)。
   * 
   * @param widget label对象。
   *
   * @returns label对象。
   */
 static cast(widget : TWidget) : TLabel  {
    return new TLabel(label_cast(widget != null ? (widget.nativeObj || widget) : null));
 }


  /**
   * 显示字符的个数(小余0时全部显示)。
   *主要用于动态改变显示字符的个数，来实现类似[拨号中...]的动画效果。
   *
   */
 get length() : number {
   return label_t_get_prop_length(this.nativeObj);
 }

 set length(v : number) {
   this.setLength(v);
 }


  /**
   * 是否自动换行(默认FALSE)。
   *
   */
 get lineWrap() : boolean {
   return label_t_get_prop_line_wrap(this.nativeObj);
 }

 set lineWrap(v : boolean) {
   this.setLineWrap(v);
 }


  /**
   * 是否允许整个单词换行(默认FALSE)。
   *> 需要开启自动换行才有效果
   *
   */
 get wordWrap() : boolean {
   return label_t_get_prop_word_wrap(this.nativeObj);
 }

 set wordWrap(v : boolean) {
   this.setWordWrap(v);
 }


  /**
   * 当auto_adjust_size为TRUE时，用于控制控件的最大宽度，超出该宽度后才自动换行。
   *>为0表示忽略该参数。小于0时取父控件宽度加上max_w。
   *
   */
 get maxW() : number {
   return label_t_get_prop_max_w(this.nativeObj);
 }

 set maxW(v : number) {
   this.setMaxW(v);
 }

};
/**
 * 页面管理控件。
 *
 *只有一个Page处于active状态，处于active状态的Page才能显示并接收事件。
 *常用于实现标签控件中的页面管理。
 *
 *pages\_t是[widget\_t](widget_t.md)的子类控件，
 *widget\_t的函数均适用于pages\_t控件。
 *
 *在xml中使用"pages"标签创建页面管理控件。如：
 *
 *```xml
 *<tab_control x="0" y="0" w="100%" h="100%"
 *<pages x="c" y="20" w="90%" h="-60" value="1">
 *...
 *</pages>
 *<tab_button_group>
 *...
 *</tab_button_group>
 *</tab_control>
 *```
 *
 *> 更多用法请参考：
 *[tab control](https://github.com/zlgopen/awtk/blob/master/design/default/ui/)
 *
 */
export class TPages extends TWidget { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 创建pages对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TPages  {
    return new TPages(pages_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }


  /**
   * 转换为pages对象(供脚本语言使用)。
   * 
   * @param widget pages对象。
   *
   * @returns pages对象。
   */
 static cast(widget : TWidget) : TPages  {
    return new TPages(pages_cast(widget != null ? (widget.nativeObj || widget) : null));
 }


  /**
   * 设置当前的Page。
   * 
   * @param index 当前Page的序号。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setActive(index : number) : TRet  {
    return pages_set_active(this != null ? (this.nativeObj || this) : null, index);
 }


  /**
   * 通过页面的名字设置当前的Page。
   * 
   * @param name 当前Page的名字。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setActiveByName(name : string) : TRet  {
    return pages_set_active_by_name(this != null ? (this.nativeObj || this) : null, name);
 }


  /**
   * 当前活跃的page。
   *
   */
 get active() : number {
   return pages_t_get_prop_active(this.nativeObj);
 }

 set active(v : number) {
   this.setActive(v);
 }

};
/**
 * 进度条控件。
 *
 *进度条控件可以水平显示也可以垂直显示，由vertical属性决定。
 *
 *progress\_bar\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于progress\_bar\_t控件。
 *
 *在xml中使用"progress\_bar"标签创建进度条控件。如：
 *
 *```xml
 *<progress_bar name="bar1" x="10" y="128" w="240" h="30" value="40"/>
 *<progress_bar name="bar2" x="280" y="128" w="30" h="118" value="20" vertical="true"/>
 *```
 *
 *> 更多用法请参考：
 *[basic demo](https://github.com/zlgopen/awtk/blob/master/design/default/ui/basic.xml)
 *
 *在c代码中使用函数progress\_bar\_create创建进度条控件。如：
 *
 *
 *> 完整示例请参考：
 *[progress_bar demo](https://github.com/zlgopen/awtk-c-demos/blob/master/demos/progress_bar.c)
 *
 *可用通过style来设置控件的显示风格，如字体的大小和颜色等等。如：
 *
 *```xml
 *<style>
 *<normal bg_color="#f0f0f0" text_color="gold" fg_color="#c0c0c0" border_color="#a0a0a0" />
 *</style>
 *```
 *
 *> 更多用法请参考：
 *[theme
 *default](https://github.com/zlgopen/awtk/blob/master/design/default/styles/default.xml#L183)
 *
 */
export class TProgressBar extends TWidget { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 创建progress_bar对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TProgressBar  {
    return new TProgressBar(progress_bar_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }


  /**
   * 转换为progress_bar对象(供脚本语言使用)。
   * 
   * @param widget progress_bar对象。
   *
   * @returns progress_bar对象。
   */
 static cast(widget : TWidget) : TProgressBar  {
    return new TProgressBar(progress_bar_cast(widget != null ? (widget.nativeObj || widget) : null));
 }


  /**
   * 设置进度条的进度。
   * 
   * @param value 进度
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setValue(value : any) : TRet  {
    return progress_bar_set_value(this != null ? (this.nativeObj || this) : null, value);
 }


  /**
   * 设置最大值。
   * 
   * @param max 最大值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setMax(max : number) : TRet  {
    return progress_bar_set_max(this != null ? (this.nativeObj || this) : null, max);
 }


  /**
   * 设置格式。
   * 
   * @param format 格式。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setFormat(format : string) : TRet  {
    return progress_bar_set_format(this != null ? (this.nativeObj || this) : null, format);
 }


  /**
   * 设置进度条的方向。
   * 
   * @param vertical 是否为垂直方向。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setVertical(vertical : boolean) : TRet  {
    return progress_bar_set_vertical(this != null ? (this.nativeObj || this) : null, vertical);
 }


  /**
   * 设置进度条的是否显示文本。
   * 
   * @param show_text 是否显示文本。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setShowText(show_text : boolean) : TRet  {
    return progress_bar_set_show_text(this != null ? (this.nativeObj || this) : null, show_text);
 }


  /**
   * 设置进度条是否反向。
   * 
   * @param reverse 是否反向。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setReverse(reverse : boolean) : TRet  {
    return progress_bar_set_reverse(this != null ? (this.nativeObj || this) : null, reverse);
 }


  /**
   * 获取进度百分比。
   *
   *> 当max为100时，percent和value取整后一致。
   * 
   *
   * @returns 返回百分比。
   */
 getPercent() : number  {
    return progress_bar_get_percent(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 进度条的值[0-max]。
   *
   */
 get value() : number {
   return progress_bar_t_get_prop_value(this.nativeObj);
 }

 set value(v : number) {
   this.setValue(v);
 }


  /**
   * 最大值(缺省为100)。
   *
   */
 get max() : number {
   return progress_bar_t_get_prop_max(this.nativeObj);
 }

 set max(v : number) {
   this.setMax(v);
 }


  /**
   * 数值到字符串转换时的格式，缺省为"%d"。
   *
   */
 get format() : string {
   return progress_bar_t_get_prop_format(this.nativeObj);
 }

 set format(v : string) {
   this.setFormat(v);
 }


  /**
   * 进度条的是否为垂直方向。
   *
   */
 get vertical() : boolean {
   return progress_bar_t_get_prop_vertical(this.nativeObj);
 }

 set vertical(v : boolean) {
   this.setVertical(v);
 }


  /**
   * 是否显示文本。
   *
   */
 get showText() : boolean {
   return progress_bar_t_get_prop_show_text(this.nativeObj);
 }

 set showText(v : boolean) {
   this.setShowText(v);
 }


  /**
   * 是否反向显示。如果为TRUE，水平方向从右向左表示增加，垂直方向从上到下表示增加。
   *
   */
 get reverse() : boolean {
   return progress_bar_t_get_prop_reverse(this.nativeObj);
 }

 set reverse(v : boolean) {
   this.setReverse(v);
 }

};
/**
 * row。一个简单的容器控件，用于水平排列其子控件。
 *
 *它本身不提供布局功能，仅提供具有语义的标签，让xml更具有可读性。
 *子控件的布局可用layout\_children属性指定。
 *请参考[布局参数](https://github.com/zlgopen/awtk/blob/master/docs/layout.md)。
 *
 *row\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于row\_t控件。
 *
 *在xml中使用"row"标签创建row。如：
 *
 *```xml
 *<row x="0" y="0" w="100%" h="100%" children_layout="default(c=0,r=1)">
 *<button name="open:basic" text="Basic"/>
 *<button name="open:button" text="Buttons"/>
 *<button name="open:edit" text="Edits"/>
 *<button name="open:keyboard" text="KeyBoard"/>
 *</row>
 *```
 *
 *可用通过style来设置控件的显示风格，如背景颜色等。如：
 *
 *```xml
 *<style name="default" border_color="#a0a0a0">
 *<normal     bg_color="#f0f0f0" />
 *</style>
 *```
 *
 */
export class TRow extends TWidget { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 创建row对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TRow  {
    return new TRow(row_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }


  /**
   * 转换为row对象(供脚本语言使用)。
   * 
   * @param widget row对象。
   *
   * @returns row对象。
   */
 static cast(widget : TWidget) : TRow  {
    return new TRow(row_cast(widget != null ? (widget.nativeObj || widget) : null));
 }

};
/**
 * 滑块控件。
 *
 *slider\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于slider\_t控件。
 *
 *在xml中使用"slider"标签创建滑块控件。如：
 *
 *```xml
 *<slider x="center" y="10" w="80%" h="20" value="10"/>
 *<slider style="img" x="center" y="50" w="80%" h="30" value="20" />
 *<slider style="img" x="center" y="90" w="80%" h="30" value="30" min="5" max="50" step="5"/>
 *```
 *
 *> 更多用法请参考：
 *[basic](https://github.com/zlgopen/awtk/blob/master/design/default/ui/basic.xml)
 *
 *在c代码中使用函数slider\_create创建滑块控件。如：
 *
 *
 *> 完整示例请参考：
 *[slider demo](https://github.com/zlgopen/awtk-c-demos/blob/master/demos/slider.c)
 *
 *可用通过style来设置控件的显示风格，如图片和颜色等等。如：
 *
 *```xml
 *<style name="img" bg_image="slider_bg" fg_image="slider_fg">
 *<normal icon="slider_drag"/>
 *<pressed icon="slider_drag_p"/>
 *<over icon="slider_drag_o"/>
 *</style>
 *```
 *
 *> 更多用法请参考：
 *[theme
 *default](https://github.com/zlgopen/awtk/blob/master/design/default/styles/default.xml#L179)
 *
 */
export class TSlider extends TWidget { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 创建slider对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TSlider  {
    return new TSlider(slider_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }


  /**
   * 转换为slider对象(供脚本语言使用)。
   * 
   * @param widget slider对象。
   *
   * @returns slider对象。
   */
 static cast(widget : TWidget) : TSlider  {
    return new TSlider(slider_cast(widget != null ? (widget.nativeObj || widget) : null));
 }


  /**
   * 设置滑块的值。
   * 
   * @param value 值
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setValue(value : any) : TRet  {
    return slider_set_value(this != null ? (this.nativeObj || this) : null, value);
 }


  /**
   * 设置滑块的最小值。
   * 
   * @param min 最小值
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setMin(min : number) : TRet  {
    return slider_set_min(this != null ? (this.nativeObj || this) : null, min);
 }


  /**
   * 设置滑块的最大值。
   * 
   * @param max 最大值
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setMax(max : number) : TRet  {
    return slider_set_max(this != null ? (this.nativeObj || this) : null, max);
 }


  /**
   * 设置滑块的拖动的最小单位。
   * 
   * @param step 拖动的最小单位。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setStep(step : number) : TRet  {
    return slider_set_step(this != null ? (this.nativeObj || this) : null, step);
 }


  /**
   * 设置bar的宽度或高度。
   * 
   * @param bar_size bar的宽度或高度。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setBarSize(bar_size : number) : TRet  {
    return slider_set_bar_size(this != null ? (this.nativeObj || this) : null, bar_size);
 }


  /**
   * 设置滑块的方向。
   * 
   * @param vertical 是否为垂直方向。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setVertical(vertical : boolean) : TRet  {
    return slider_set_vertical(this != null ? (this.nativeObj || this) : null, vertical);
 }


  /**
   * 值。
   *
   */
 get value() : number {
   return slider_t_get_prop_value(this.nativeObj);
 }

 set value(v : number) {
   this.setValue(v);
 }


  /**
   * 最小值。
   *
   */
 get min() : number {
   return slider_t_get_prop_min(this.nativeObj);
 }

 set min(v : number) {
   this.setMin(v);
 }


  /**
   * 最大值。
   *
   */
 get max() : number {
   return slider_t_get_prop_max(this.nativeObj);
 }

 set max(v : number) {
   this.setMax(v);
 }


  /**
   * 拖动的最小单位。
   *
   */
 get step() : number {
   return slider_t_get_prop_step(this.nativeObj);
 }

 set step(v : number) {
   this.setStep(v);
 }


  /**
   * 滑块的是否为垂直方向。
   *
   */
 get vertical() : boolean {
   return slider_t_get_prop_vertical(this.nativeObj);
 }

 set vertical(v : boolean) {
   this.setVertical(v);
 }


  /**
   * 轴的宽度或高度（单位：像素），为0表示为控件的宽度或高度的一半，缺省为0。
   *
   */
 get barSize() : number {
   return slider_t_get_prop_bar_size(this.nativeObj);
 }

 set barSize(v : number) {
   this.setBarSize(v);
 }


  /**
   * 滑块的宽度或高度（单位：像素），缺省为10。
   *
   */
 get draggerSize() : number {
   return slider_t_get_prop_dragger_size(this.nativeObj);
 }


  /**
   * 滑块的宽度或高度是否与icon适应，缺省为true。
   *
   */
 get draggerAdaptToIcon() : boolean {
   return slider_t_get_prop_dragger_adapt_to_icon(this.nativeObj);
 }


  /**
   * 是否允许在轴上滑动来改变滑块位置，缺省为FALSE。
   *
   */
 get slideWithBar() : boolean {
   return slider_t_get_prop_slide_with_bar(this.nativeObj);
 }

};
/**
 * 标签按钮分组控件。
 *
 *一个简单的容器，主要用于对标签按钮进行布局和管理。
 *
 *tab\_button\_group\_t是[widget\_t](widget_t.md)的子类控件，
 *widget\_t的函数均适用于tab\_button\_group\_t控件。
 *
 *在xml中使用"tab\_button\_group"标签创建标签按钮分组控件。如：
 *
 *```xml
 *<tab_button_group x="c" y="bottom:10" w="90%" h="30" compact="true"
 *<tab_button text="General"/>
 *<tab_button text="Network" value="true" />
 *<tab_button text="Security"/>
 *</tab_button_group>
 *```
 *
 *> 更多用法请参考：
 *[tab control](https://github.com/zlgopen/awtk/blob/master/design/default/ui/)
 *
 *可用通过style来设置控件的显示风格，如颜色等等。如：
 *
 *```xml
 *<tab_button_group>
 *<style name="default">
 *<normal/>
 *</style>
 *</tab_button_group>
 *```
 *
 */
export class TTabButtonGroup extends TWidget { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 创建tab_button_group对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TTabButtonGroup  {
    return new TTabButtonGroup(tab_button_group_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }


  /**
   * 设置compact。
   * 
   * @param compact 是否使用紧凑布局(缺省FALSE)。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setCompact(compact : boolean) : TRet  {
    return tab_button_group_set_compact(this != null ? (this.nativeObj || this) : null, compact);
 }


  /**
   * 设置scrollable。
   * 
   * @param scrollable 是否允许滚动(缺省FALSE)。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setScrollable(scrollable : boolean) : TRet  {
    return tab_button_group_set_scrollable(this != null ? (this.nativeObj || this) : null, scrollable);
 }


  /**
   * 转换tab_button_group对象(供脚本语言使用)。
   * 
   * @param widget tab_button_group对象。
   *
   * @returns tab_button_group对象。
   */
 static cast(widget : TWidget) : TTabButtonGroup  {
    return new TTabButtonGroup(tab_button_group_cast(widget != null ? (widget.nativeObj || widget) : null));
 }


  /**
   * 紧凑型排版子控件(缺省FALSE)。
   *
   */
 get compact() : boolean {
   return tab_button_group_t_get_prop_compact(this.nativeObj);
 }

 set compact(v : boolean) {
   this.setCompact(v);
 }


  /**
   * 是否支持滚动(缺省FALSE)。
   *
   *> 紧凑型排版子控件时才支持滚动。
   *
   */
 get scrollable() : boolean {
   return tab_button_group_t_get_prop_scrollable(this.nativeObj);
 }

 set scrollable(v : boolean) {
   this.setScrollable(v);
 }

};
/**
 * 标签按钮控件。
 *
 *标签按钮有点类似单选按钮，但点击标签按钮之后会自动切换当前的标签页。
 *
 *tab\_button\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于tab\_button\_t控件。
 *
 *在xml中使用"tab\_button"标签创建标签按钮控件。如：
 *
 *```xml
 *<!-- tab_button_view_page1.xml -->
 *<view w="100%" h="100%">
 *<label x="c" y="m" w="100%" h="60" text="page1" />
 *<button name="close" x="c" y="bottom:100" w="80" h="40" text="Close" />
 *</view>
 *```
 *
 *```xml
 *<!-- tab_button dynamic load UI -->
 *<pages name="pages" x="right" y="0" w="70%" h="100%">
 *</pages>
 *<list_view x="0" y="0" w="30%" h="100%" item_height="40" auto_hide_scroll_bar="true">
 *<scroll_view name="view" x="0"  y="0" w="-12" h="100%">
 *<tab_button text="page1" load_ui="tab_button_view_page1" value="true"/>
 *<tab_button text="page2" load_ui="tab_button_view_page2" />
 *<tab_button text="page3" load_ui="tab_button_view_page3" />
 *<scroll_view />
 *<scroll_bar_d name="bar" x="right" y="0" w="12" h="100%" value="0"/>
 *</list_view>
 *```
 *
 *```xml
 *<!-- tab_button static load UI -->
 *<tab_button_group x="c" y="bottom:10" w="90%" h="30" compact="true"
 *<tab_button text="General"/>
 *<tab_button text="Network" value="true" />
 *<tab_button text="Security"/>
 *</tab_button_group>
 *```
 *
 *标签按钮一般放在标签按钮分组中，布局由标签按钮分组控件决定，不需要指定自己的布局参数和坐标。
 *
 *> 更多用法请参考：
 *[tab control](https://github.com/zlgopen/awtk/blob/master/design/default/ui/)
 *
 *可用通过style来设置控件的显示风格，如字体的大小和颜色等等。如：
 *
 *```xml
 *<tab_button>
 *<style name="default" border_color="#a0a0a0"  text_color="black">
 *<normal     bg_color="#d0d0d0" />
 *<pressed    bg_color="#f0f0f0" />
 *<over       bg_color="#e0e0e0" />
 *<normal_of_active     bg_color="#f0f0f0" />
 *<pressed_of_active    bg_color="#f0f0f0" />
 *<over_of_active       bg_color="#f0f0f0" />
 *</style>
 *</tab_button>
 *```
 *
 */
export class TTabButton extends TWidget { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 创建tab_button对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TTabButton  {
    return new TTabButton(tab_button_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }


  /**
   * 转换tab_button对象(供脚本语言使用)。
   * 
   * @param widget tab_button对象。
   *
   * @returns tab_button对象。
   */
 static cast(widget : TWidget) : TTabButton  {
    return new TTabButton(tab_button_cast(widget != null ? (widget.nativeObj || widget) : null));
 }


  /**
   * 设置为当前标签。
   * 
   * @param value 是否为当前标签。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setValue(value : any) : TRet  {
    return tab_button_set_value(this != null ? (this.nativeObj || this) : null, value);
 }


  /**
   * 设置控件的图标。
   * 
   * @param name 当前项的图标。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setIcon(name : string) : TRet  {
    return tab_button_set_icon(this != null ? (this.nativeObj || this) : null, name);
 }


  /**
   * 设置控件的active图标。
   * 
   * @param name 当前项的图标。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setActiveIcon(name : string) : TRet  {
    return tab_button_set_active_icon(this != null ? (this.nativeObj || this) : null, name);
 }


  /**
   * 设置控件动态加载显示UI。
   * 
   * @param name 动态加载UI的资源名称。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setLoadUi(name : string) : TRet  {
    return tab_button_set_load_ui(this != null ? (this.nativeObj || this) : null, name);
 }


  /**
   * 值。
   *
   */
 get value() : boolean {
   return tab_button_t_get_prop_value(this.nativeObj);
 }

 set value(v : boolean) {
   this.setValue(v);
 }


  /**
   * 激活后加载的UI名字。
   *
   */
 get loadUi() : string {
   return tab_button_t_get_prop_load_ui(this.nativeObj);
 }

 set loadUi(v : string) {
   this.setLoadUi(v);
 }


  /**
   * 当前项的图标的名称。
   *
   */
 get activeIcon() : string {
   return tab_button_t_get_prop_active_icon(this.nativeObj);
 }

 set activeIcon(v : string) {
   this.setActiveIcon(v);
 }


  /**
   * 非当前项的图标的名称。
   *
   */
 get icon() : string {
   return tab_button_t_get_prop_icon(this.nativeObj);
 }

 set icon(v : string) {
   this.setIcon(v);
 }

};
/**
 * 标签控件。
 *
 *它本身不提供布局功能，仅提供具有语义的标签，让xml更具有可读性。
 *
 *标签控件通常会包含一个pages控件和一个tab\_button\_group控件。
 *
 *
 *
 *tab\_control\_t是[widget\_t](widget_t.md)的子类控件，
 *widget\_t的函数均适用于tab\_control\_t控件。
 *
 *在xml中使用"tab\_control"标签创建标签控件。如：
 *
 *```xml
 *<tab_control x="0" y="0" w="100%" h="100%"
 *<pages x="c" y="20" w="90%" h="-60" value="1">
 *...
 *</pages>
 *<tab_button_group>
 *...
 *</tab_button_group>
 *</tab_control>
 *```
 *
 *> 更多用法请参考：
 *[tab control](https://github.com/zlgopen/awtk/blob/master/design/default/ui/)
 *
 */
export class TTabControl extends TWidget { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 创建tab_control对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TTabControl  {
    return new TTabControl(tab_control_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }


  /**
   * 转换tab_control对象(供脚本语言使用)。
   * 
   * @param widget tab_control对象。
   *
   * @returns tab_control对象。
   */
 static cast(widget : TWidget) : TTabControl  {
    return new TTabControl(tab_control_cast(widget != null ? (widget.nativeObj || widget) : null));
 }

};
/**
 * 一个通用的容器控件。
 *
 *它本身不提供布局功能，仅提供具有语义的标签，让xml更具有可读性。
 *子控件的布局可用layout\_children属性指定。
 *请参考[布局参数](https://github.com/zlgopen/awtk/blob/master/docs/layout.md)。
 *
 *view\_t是[widget\_t](widget_t.md)的子类控件，widget\_t的函数均适用于view\_t控件。
 *
 *在xml中使用"view"标签创建view。如：
 *
 *```xml
 *<view x="0" y="0" w="100%" h="100%" children_layout="default(c=2,r=2,m=5,s=5)">
 *</view>
 *```
 *
 *可用通过style来设置控件的显示风格，如背景颜色等。如：
 *
 *```xml
 *<style name="default" border_color="#a0a0a0">
 *<normal     bg_color="#f0f0f0" />
 *</style>
 *```
 *
 */
export class TView extends TWidget { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 创建view对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TView  {
    return new TView(view_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }


  /**
   * 设置缺省获得焦点的子控件(可用控件名或类型)。
   * 
   * @param default_focused_child 缺省获得焦点的子控件(可用控件名或类型)。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setDefaultFocusedChild(default_focused_child : string) : TRet  {
    return view_set_default_focused_child(this != null ? (this.nativeObj || this) : null, default_focused_child);
 }


  /**
   * 转换为view对象(供脚本语言使用)。
   * 
   * @param widget view对象。
   *
   * @returns view对象。
   */
 static cast(widget : TWidget) : TView  {
    return new TView(view_cast(widget != null ? (widget.nativeObj || widget) : null));
 }


  /**
   * 缺省获得焦点的子控件(可用控件名或类型)。
   *
   *> view作为pages/slideview的直接子控件才需要设置。
   *> 正常情况下，一个窗口只能指定一个初始焦点。
   *> 但是对于pages/slideview来说，可能希望每一个页面都有一个初始焦点，此时可用default\_focused\_child来指定。
   *
   */
 get defaultFocusedChild() : string {
   return view_t_get_prop_default_focused_child(this.nativeObj);
 }

 set defaultFocusedChild(v : string) {
   this.setDefaultFocusedChild(v);
 }

};
/**
 * 对话框。 对话框是一种特殊的窗口，大小和位置可以自由设置。
 *
 *AWTK中的对话框可以是模态的，也可以是非模态的。
 *
 *如果dialog有透明或半透效果则不支持窗口动画。
 *
 *> 由于浏览器中无法实现主循环嵌套，因此无法实现模态对话框。
 *如果希望自己写的AWTK应用程序可以在浏览器(包括各种小程序)中运行或演示，
 *请避免使用模态对话框。
 *
 *对话框通常由对话框标题和对话框客户区两部分组成：
 *
 *
 *
 *dialog\_t是[window\_base\_t](window_base_t.md)的子类控件，window\_base\_t的函数均适用于dialog\_t控件。
 *
 *在xml中使用"dialog"标签创建对话框。如：
 *
 *```xml
 *<dialog anim_hint="center_scale(duration=300)" x="c" y="m" w="80%" h="160" text="Dialog">
 *<dialog_title x="0" y="0" w="100%" h="30" text="Hello AWTK" />
 *<dialog_client x="0" y="bottom" w="100%" h="-30">
 *<label name="" x="center" y="middle:-20" w="200" h="30" text="Are you ready?"/>
 *<button name="quit" x="10" y="bottom:10" w="40%" h="30" text="确定"/>
 *<button name="quit" x="right:10" y="bottom:10" w="40%" h="30" text="取消"/>
 *</dialog_client>
 *</dialog>
 *```
 *
 *如果你不需要对话框的标题，可以这样写：
 *
 *```xml
 *<dialog anim_hint="center_scale(duration=300)" x="c" y="m" w="80%" h="160" text="Dialog">
 *<label name="" x="center" y="middle:-20" w="200" h="30" text="Are you ready?"/>
 *<button name="quit" x="10" y="bottom:10" w="40%" h="30" text="确定"/>
 *<button name="quit" x="right:10" y="bottom:10" w="40%" h="30" text="取消"/>
 *</dialog>
 *```
 *
 *打开非模态对话框时，其用法与普通窗口一样。打开非模态对话框时，还需要调用dialog\_modal。
 *
 *
 *关闭模态对话框用dialog\_quit
 *
 *
 *关闭非模态对话框用window\_close。
 *
 *
 *> 更多用法请参考：
 *[dialog.xml](https://github.com/zlgopen/awtk/blob/master/design/default/ui/)
 *
 *> 完整C代码示例请参考：
 *
 ** [非模态对话框](https://github.com/zlgopen/awtk-c-demos/blob/master/demos/dialog.c)
 *
 ** [模态对话框](https://github.com/zlgopen/awtk-c-demos/blob/master/demos/dialog_modal.c)
 *
 *可用通过style来设置控件的显示风格，如字体的大小和颜色等等。如：
 *
 *```xml
 *<style name="default">
 *<normal border_color="#606060" />
 *</style>
 *```
 *
 *> 更多用法请参考：
 *[theme default]
 *(https://github.com/zlgopen/awtk/blob/master/design/default/styles/default.xml#L324)
 *
 */
export class TDialog extends TWindowBase { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 创建dialog对象。
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns dialog对象。
   */
 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TDialog  {
    return new TDialog(dialog_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }


  /**
   * 创建dialog对象，同时创建title/client。
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns dialog对象。
   */
 static createSimple(parent : TWidget, x : number, y : number, w : number, h : number) : TDialog  {
    return new TDialog(dialog_create_simple(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }


  /**
   * 转换dialog对象(供脚本语言使用)。
   * 
   * @param widget dialog对象。
   *
   * @returns dialog对象。
   */
 static cast(widget : TWidget) : TDialog  {
    return new TDialog(dialog_cast(widget != null ? (widget.nativeObj || widget) : null));
 }


  /**
   * 获取title控件。
   * 
   *
   * @returns title对象。
   */
 getTitle() : TWidget  {
    return new TWidget(dialog_get_title(this != null ? (this.nativeObj || this) : null));
 }


  /**
   * 获取client控件。
   * 
   *
   * @returns client对象。
   */
 getClient() : TWidget  {
    return new TWidget(dialog_get_client(this != null ? (this.nativeObj || this) : null));
 }


  /**
   * 从资源文件中加载并创建Dialog对象。
   *
   *本函数在ui\_loader/ui\_builder_default里实现。
   * 
   * @param name dialog的名称。
   *
   * @returns 对象。
   */
 static open(name : string) : TDialog  {
    return new TDialog(dialog_open(name));
 }


  /**
   * 设置对话框的标题文本。
   * 
   * @param title 标题。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setTitle(title : string) : TRet  {
    return dialog_set_title(this != null ? (this.nativeObj || this) : null, title);
 }


  /**
   * 模态显示对话框。
   *dialog_modal返回后，dialog对象将在下一个idle函数中回收。
   *也就是在dialog_modal调用完成后仍然可以访问dialog中控件，直到本次事件结束。
   * 
   *
   * @returns 返回退出码。
   */
 modal() : TDialogQuitCode  {
    return dialog_modal(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 退出模态显示，关闭对话框。
   *
   *> 比如，在对话框中关闭按钮的事件处理函数中，调用本函数关闭对话框。
   * 
   * @param code 退出码，作为dialog_modal的返回值(参考：[dialog_quit_code_t](dialog_quit_code_t.md))。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 quit(code : number) : TRet  {
    return dialog_quit(this != null ? (this.nativeObj || this) : null, code);
 }


  /**
   * 检查对话框是否已经退出模态。
   * 
   *
   * @returns 返回TRUE表示已经退出，否则表示没有。
   */
 isQuited() : boolean  {
    return dialog_is_quited(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 检查对话框是否为模态对话框。
   * 
   *
   * @returns 返回TRUE表示是模态对话框，否则表示不是。
   */
 isModal() : boolean  {
    return dialog_is_modal(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 显示『短暂提示信息』对话框。
   *
   *窗体样式由dialog_toast.xml文件决定。
   * 
   * @param text 文本内容。
   * @param duration 显示时间(单位为毫秒)。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 static toast(text : string, duration : number) : TRet  {
    return dialog_toast(text, duration);
 }


  /**
   * 显示『提示信息』对话框。
   *
   *窗体样式由dialog_info.xml文件决定。
   * 
   * @param title 标题。
   * @param text 文本内容。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 static info(title : string, text : string) : TRet  {
    return dialog_info(title, text);
 }


  /**
   * 显示『警告』对话框。
   *
   *窗体样式由dialog_warn.xml文件决定。
   * 
   * @param title 标题。
   * @param text 文本内容。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 static warn(title : string, text : string) : TRet  {
    return dialog_warn(title, text);
 }


  /**
   * 显示『确认』对话框。
   *
   *窗体样式由dialog_confirm.xml文件决定。
   * 
   * @param title 标题。
   * @param text 文本内容。
   *
   * @returns 返回RET_OK表示确认，否则表示取消。
   */
 static confirm(title : string, text : string) : TRet  {
    return dialog_confirm(title, text);
 }


  /**
   * 对话框高亮策略。
   *
   *> 请参考 [对话框高亮策略](https://github.com/zlgopen/awtk/blob/master/docs/dialog_highlight.md)
   *
   */
 get highlight() : string {
   return dialog_t_get_prop_highlight(this.nativeObj);
 }

};
/**
 * 原生窗口。
 *
 */
export class TNativeWindow extends TObject { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 移动窗口。
   * 
   * @param x x坐标。
   * @param y y坐标。
   * @param force 无论是否shared都move。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 move(x : number, y : number, force : boolean) : TRet  {
    return native_window_move(this != null ? (this.nativeObj || this) : null, x, y, force);
 }


  /**
   * 调整窗口大小。
   * 
   * @param w 宽。
   * @param h 高。
   * @param force 无论是否shared都resize。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 resize(w : number, h : number, force : boolean) : TRet  {
    return native_window_resize(this != null ? (this.nativeObj || this) : null, w, h, force);
 }


  /**
   * 最小化窗口。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 minimize() : TRet  {
    return native_window_minimize(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 最大化窗口。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 maximize() : TRet  {
    return native_window_maximize(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 恢复窗口大小。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 restore() : TRet  {
    return native_window_restore(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 窗口居中。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 center() : TRet  {
    return native_window_center(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 是否显示边框。
   * 
   * @param show 是否显示。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 showBorder(show : boolean) : TRet  {
    return native_window_show_border(this != null ? (this.nativeObj || this) : null, show);
 }


  /**
   * 是否全屏。
   * 
   * @param fullscreen 是否全屏。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setFullscreen(fullscreen : boolean) : TRet  {
    return native_window_set_fullscreen(this != null ? (this.nativeObj || this) : null, fullscreen);
 }


  /**
   * 设置鼠标光标。
   * 
   * @param name 鼠标光标的名称。
   * @param img 鼠标光标的图片。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setCursor(name : string, img : TBitmap) : TRet  {
    return native_window_set_cursor(this != null ? (this.nativeObj || this) : null, name, img != null ? (img.nativeObj || img) : null);
 }

};
/**
 * 窗口。
 *
 *缺省的应用程序窗口，占用除system\_bar\_t之外的整个区域，请不要修改它的位置和大小(除非你清楚后果)。
 *
 *window\_t是[window\_base\_t](window_base_t.md)的子类控件，window\_base\_t的函数均适用于window\_t控件。
 *
 *在xml中使用"window"标签创建窗口。无需指定坐标和大小，可以指定窗体样式和动画名称。如：
 *
 *```xml
 *<window theme="basic" anim_hint="htranslate">
 *...
 *</window>
 *```
 *
 *>
 *更多用法请参考：[window.xml](https://github.com/zlgopen/awtk/blob/master/design/default/ui/)
 *
 *在c代码中使用函数window\_create创建窗口。如：
 *
 *
 *> 无需指定父控件、坐标和大小，使用0即可。
 *
 *> 完整示例请参考：[window
 *demo](https://github.com/zlgopen/awtk-c-demos/blob/master/demos/)
 *
 *可用通过style来设置窗口的风格，如背景颜色或图片等。如：
 *
 *```xml
 *<style name="bricks">
 *<normal bg_image="bricks"  bg_image_draw_type="repeat"/>
 *</style>
 *```
 *
 *> 更多用法请参考：[theme
 *default](https://github.com/zlgopen/awtk/blob/master/design/default/styles/default.xml#L0)
 *
 */
export class TWindow extends TWindowBase { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 创建window对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TWindow  {
    return new TWindow(window_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }


  /**
   * 以缺省的方式创建window对象。
   * 
   *
   * @returns 对象。
   */
 static createDefault() : TWindow  {
    return new TWindow(window_create_default());
 }


  /**
   * 设置为全屏窗口。
   *
   *>如果app_type是SIMULATOR，全屏是指与LCD相同大小，而非让SDL窗口全屏。
   * 
   * @param fullscreen 是否全屏。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setFullscreen(fullscreen : boolean) : TRet  {
    return window_set_fullscreen(this != null ? (this.nativeObj || this) : null, fullscreen);
 }


  /**
   * 当设计分辨率和实际分辨率不一致时，自动调整子控件的位置和大小。
   *
   *> 当子控件有self_layout参数或者子控件的父控件有children_layout参数时，不会自动调整。
   * 
   * @param design_w 设计时宽度。
   * @param design_h 设计时高度。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setAutoScaleChildren(design_w : number, design_h : number) : TRet  {
    return window_set_auto_scale_children(this != null ? (this.nativeObj || this) : null, design_w, design_h);
 }


  /**
   * 从资源文件中加载并创建window_base对象。本函数在ui_loader/ui_builder_default里实现。
   * 
   * @param name window的名称。
   *
   * @returns 对象。
   */
 static open(name : string) : TWindow  {
    return new TWindow(window_open(name));
 }


  /**
   * 从资源文件中加载并创建window对象。本函数在ui_loader/ui_builder_default里实现。
   * 
   * @param name window的名称。
   * @param to_close 关闭该窗口。
   *
   * @returns 对象。
   */
 static openAndClose(name : string, to_close : TWidget) : TWindow  {
    return new TWindow(window_open_and_close(name, to_close != null ? (to_close.nativeObj || to_close) : null));
 }


  /**
   * 关闭窗口。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 close() : TRet  {
    return window_close(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 立即无条件关闭窗口(无动画)。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 closeForce() : TRet  {
    return window_close_force(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 转换为window对象(供脚本语言使用)。
   * 
   * @param widget window对象。
   *
   * @returns window对象。
   */
 static cast(widget : TWidget) : TWindow  {
    return new TWindow(window_cast(widget != null ? (widget.nativeObj || widget) : null));
 }


  /**
   * 是否全屏。
   *
   *>对于模拟器，全屏是让窗口和LCD具有相同大小，而非让SDL窗口全屏。
   *
   */
 get fullscreen() : boolean {
   return window_t_get_prop_fullscreen(this.nativeObj);
 }

 set fullscreen(v : boolean) {
   this.setFullscreen(v);
 }

};
/**
 * GIF图片控件。
 *
 *> 注意：GIF图片的尺寸大于控件大小时会自动缩小图片，但一般的嵌入式系统的硬件加速都不支持图片缩放，
 *所以缩放图片会导致性能明显下降。如果性能不满意时，请确认一下GIF图片的尺寸是否小余控件大小。
 *
 *gif\_image\_t是[image\_base\_t](image_base_t.md)的子类控件，image\_base\_t的函数均适用于gif\_image\_t控件。
 *
 *在xml中使用"gif"标签创建GIF图片控件。如：
 *
 *```xml
 *<gif image="bee"/>
 *```
 *
 *>更多用法请参考：
 *[gif
 *image](https://github.com/zlgopen/awtk/blob/master/design/default/ui/gif_image.xml)
 *
 *在c代码中使用函数gif\_image\_create创建GIF图片控件。如：
 *
 *
 *> 创建之后:
 *>
 *> 需要用widget\_set\_image设置图片名称。
 *
 *> 完整示例请参考：[gif image demo](
 *https://github.com/zlgopen/awtk-c-demos/blob/master/demos/gif_image.c)
 *
 *可用通过style来设置控件的显示风格，如背景和边框等。如：
 *
 *```xml
 *<gif>
 *<style name="border">
 *<normal border_color="#000000" bg_color="#e0e0e0" text_color="black"/>
 *</style>
 *</gif>
 *```
 *
 *> 更多用法请参考：[theme default](
 *https://github.com/zlgopen/awtk/blob/master/design/default/styles/default.xml)
 *
 */
export class TGifImage extends TImageBase { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 创建gif_image对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TGifImage  {
    return new TGifImage(gif_image_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }


  /**
   * 播放。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 play() : TRet  {
    return gif_image_play(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 停止(并重置index为-1)。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 stop() : TRet  {
    return gif_image_stop(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 暂停。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 pause() : TRet  {
    return gif_image_pause(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 转换为gif_image对象(供脚本语言使用)。
   * 
   * @param widget gif_image对象。
   *
   * @returns gif_image对象。
   */
 static cast(widget : TWidget) : TGifImage  {
    return new TGifImage(gif_image_cast(widget != null ? (widget.nativeObj || widget) : null));
 }

};
/**
 * 软键盘。
 *
 *软键盘是一个特殊的窗口，由编辑器通过输入法自动打开和关闭。
 *
 *这里介绍一下定制软键盘的方法：
 *
 *编辑器输入类型和软键盘UI资源文件的对应关系:
 *
 *| 输入类型       | 软键盘UI资源文件|
 *|----------------|:---------------:|
 *| INPUT\_PHONE    | kb\_phone.xml    |
 *| INPUT\_INT      | kb\_int.xml      |
 *| INPUT\_FLOAT    | kb\_float.xml    |
 *| INPUT\_UINT     | kb\_uint.xml     |
 *| INPUT\_UFLOAT   | kb\_ufloat.xml   |
 *| INPUT\_HEX      | kb\_hex.xml      |
 *| INPUT\_EMAIL    | kb\_ascii.xml    |
 *| INPUT\_PASSWORD | kb\_ascii.xml    |
 *| INPUT\_ASCII    | kb\_ascii.xml    |
 *| INPUT\_CUSTOM   | 使用自定义的键盘 |
 *| 其它            | kb\_default.xml  |
 *
 *keyboard中按钮子控件的名称有些特殊要求：
 *
 *|  名称          | 功能            |
 *|----------------|:---------------:|
 *| return         | 回车键          |
 *| action         | 定制按钮        |
 *| backspace      | 删除键          |
 *| tab            | tab键           |
 *| space          | 空格键          |
 *| close          | 关闭软键盘       |
 *| clear          | 清除编辑器的内容 |
 *| cancel         | 恢复编辑器的内容 |
 *| back           | 关闭当前窗口     |
 *| back_to_home   | 返回home窗口    |
 *| 前缀key:        | 键值           |
 *| 前缀hard_key:   | 模拟物理键盘    |
 *| 前缀page:       | 切换到页面      |
 *| 前缀opt:        | 多个字符选择一个，点击切换到下一个，超时提交字符(用于实现九宫格输入) |
 *
 *示例：
 *
 ** 按键"a"，提交输入法处理。
 *
 *```xml
 *<button repeat="300" name="key:a" text="a"/>
 *```
 *
 ** 字符"a"，直接提交到编辑器。
 *
 *```xml
 *<button repeat="300" name="a" text="a"/>
 *```
 *
 ** 模拟物理键盘数字"1"，触发key down/up事件（可以用来选择候选字）。
 *
 *```xml
 *<button repeat="300" name="hard_key:1" text="1"/>
 *```
 *
 ** 九宫格输入
 *
 *```xml
 *<button repeat="300" name="opt:._@/#" text="._@/#"/>
 *<button repeat="300" name="opt:abc" text="abc"/>
 *<button repeat="300" name="opt:def" text="def"/>
 *```
 *
 *
 ** 输入语言切换
 *
 *有的输入法，同时支持输入多种语言。
 *比如T9，可以同时支持中文和英文输入，配合软键盘随时切换输入的语言。
 *
 *可以在pages的页面里指定lang属性，切换到该页面时会设置输入法的语言。如：
 *
 *```xml
 *<pages x="0" y="bottom" w="100%" h="-28" active="2">
 *<view name="lower" lang="en_us"
 *x="0" y="0" w="100%" h="100%" children_layout="default(r=4,c=4,s=2,m=2)">
 *...
 *</view>
 *<view name="chinese" lang="zh_cn"
 *x="0" y="0" w="100%" h="100%" children_layout="default(r=4,c=4,s=2,m=2)">
 *...
 *</view>
 *</pages>
 *```
 *
 ** 键盘跟随。
 *默认情况下，键盘从底部弹出。如果需要让键盘在编辑器附近弹出，可以指定floating属性为true。如：
 *
 *```xml
 *<keyboard theme="keyboard" w="200" h="200" floating="true">
 *```
 *
 *> 更多用法请参考：
 *[kb_default](https://github.com/zlgopen/awtk/blob/master/design/default/ui/kb_default.xml)
 *
 */
export class TKeyboard extends TWindowBase { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 创建keyboard对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TKeyboard  {
    return new TKeyboard(keyboard_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }


  /**
   * 转换为keyboard对象(供脚本语言使用)。
   * 
   * @param widget keyboard对象。
   *
   * @returns keyboard对象。
   */
 static cast(widget : TWidget) : TKeyboard  {
    return new TKeyboard(keyboard_cast(widget != null ? (widget.nativeObj || widget) : null));
 }

};
/**
 * mutable图片控件。
 *
 *像摄像头和视频的图像是变化的，每一帧都不同，我们把这类图片称为mutable image。
 *
 *本控件辅助实现摄像头和视频的显示功能。
 *
 *mutable\_image\_t是[image\_base\_t](image_base_t.md)的子类控件，image\_base\_t的函数均适用于mutable\_image\_t控件。
 *
 *在xml中使用"mutable\_image"标签创建mutable图片控件。如：
 *
 *```xml
 *<mutable_image w="100%" h="100%"/>
 *```
 *
 *>更多用法请参考：
 *[mutable
 *image](https://github.com/zlgopen/awtk/blob/master/design/default/ui/mutable_image.xml)
 *
 *在c代码中使用函数mutable\_image\_create创建mutable图片控件。如：
 *
 *
 *> 创建之后:
 *>
 *> 需要用mutable\_image\_set\_create\_image设置创建图片的回调函数。
 *> 需要用mutable\_image\_set\_prepare\_image设置准备图片的回调函数。
 *
 *> 完整示例请参考：[mutable image demo](
 *https://github.com/zlgopen/awtk-c-demos/blob/master/demos/mutable_image.c)
 *
 *一般不需通过style来设置控件的显示风格，如果在特殊情况下需要，可以参考其它控件。
 *
 */
export class TMutableImage extends TImageBase { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 创建mutable_image对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TMutableImage  {
    return new TMutableImage(mutable_image_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }

};
/**
 * SVG图片控件。
 *
 *svg\_image\_t是[image\_base\_t](image_base_t.md)的子类控件，image\_base\_t的函数均适用于svg\_image\_t控件。
 *
 *在xml中使用"svg"标签创建SVG图片控件。如：
 *
 *```xml
 *<svg image="girl"/>
 *```
 *
 *>更多用法请参考：[svg image](
 *https://github.com/zlgopen/awtk/blob/master/design/default/ui/svg_image.xml)
 *
 *在c代码中使用函数svg\_image\_create创建SVG图片控件。如：
 *
 *
 *> 创建之后: 需要用widget\_set\_image设置图片名称。
 *
 *> 完整示例请参考：[svg image demo](
 *https://github.com/zlgopen/awtk-c-demos/blob/master/demos/svg_image.c)
 *
 *可用通过style来设置控件的显示风格，如背景和边框等。如：
 *
 *```xml
 *<svg>
 *<style name="default">
 *<normal border_color="green" fg_color="red" />
 *</style>
 *</svg>
 *```
 *
 *> 更多用法请参考：[theme default](
 *https://github.com/zlgopen/awtk/blob/master/design/default/styles/default.xml)
 *
 */
export class TSvgImage extends TImageBase { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 创建svg_image对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TSvgImage  {
    return new TSvgImage(svg_image_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }


  /**
   * 设置控件的图片名称。
   *
   *> 如果需要显示文件系统中的图片，只需将图片名称换成实际的文件名，并加上"file://"前缀即可。
   * 
   * @param name 图片名称，该图片必须存在于资源管理器。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setImage(name : string) : TRet  {
    return svg_image_set_image(this != null ? (this.nativeObj || this) : null, name);
 }


  /**
   * 转换为svg_image对象(供脚本语言使用)。
   * 
   * @param widget svg_image对象。
   *
   * @returns svg_image对象。
   */
 static cast(widget : TWidget) : TSvgImage  {
    return new TSvgImage(svg_image_cast(widget != null ? (widget.nativeObj || widget) : null));
 }

};
/**
 * 单个idle的信息。
 *
 */
export class TIdleInfo extends TObject { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 转换为idle_info对象(供脚本语言使用)。
   * 
   * @param idle idle_info对象。
   *
   * @returns idle_info对象。
   */
 static cast(idle : TIdleInfo) : TIdleInfo  {
    return new TIdleInfo(idle_info_cast(idle != null ? (idle.nativeObj || idle) : null));
 }


  /**
   * idle回调函数上下文。
   *
   */
 get ctx() : any {
   return idle_info_t_get_prop_ctx(this.nativeObj);
 }


  /**
   * idle回调函数上下文。
   *
   */
 get extraCtx() : any {
   return idle_info_t_get_prop_extra_ctx(this.nativeObj);
 }


  /**
   * idle的ID
   *
   *> 为TK\_INVALID\_ID时表示无效idle。
   *
   */
 get id() : number {
   return idle_info_t_get_prop_id(this.nativeObj);
 }

};
/**
 * 简单的动态数组，内部存放value对象。
 *
 *访问时属性名称为：
 *
 ** "size"/"length" 用于获取数组的长度。
 ** index 用于访问属性，-1可以用来追加新元素。
 *
 */
export class TObjectArray extends TObject { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 创建对象。
   * 
   *
   * @returns 返回object对象。
   */
 static create() : TObjectArray  {
    return new TObjectArray(object_array_create());
 }


  /**
   * for script gc
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 unref() : TRet  {
    return object_array_unref(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 清除全部属性。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 clearProps() : TRet  {
    return object_array_clear_props(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 在指定位置插入一个元素。
   * 
   * @param index 位置。
   * @param v 值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 insert(index : number, v : TValue) : TRet  {
    return object_array_insert(this != null ? (this.nativeObj || this) : null, index, v != null ? (v.nativeObj || v) : null);
 }


  /**
   * 追加一个元素。
   * 
   * @param v 值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 push(v : TValue) : TRet  {
    return object_array_push(this != null ? (this.nativeObj || this) : null, v != null ? (v.nativeObj || v) : null);
 }


  /**
   * 查找元素出现的第一个位置。
   * 
   * @param v 值。
   *
   * @returns 如果找到返回其位置，否则返回-1。
   */
 indexOf(v : TValue) : number  {
    return object_array_index_of(this != null ? (this.nativeObj || this) : null, v != null ? (v.nativeObj || v) : null);
 }


  /**
   * 查找元素出现的最后一个位置。
   * 
   * @param v 值。
   *
   * @returns 如果找到返回其位置，否则返回-1。
   */
 lastIndexOf(v : TValue) : number  {
    return object_array_last_index_of(this != null ? (this.nativeObj || this) : null, v != null ? (v.nativeObj || v) : null);
 }


  /**
   * 在指定位置删除一个元素。
   * 
   * @param index 位置。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 remove(index : number) : TRet  {
    return object_array_remove(this != null ? (this.nativeObj || this) : null, index);
 }


  /**
   * 在指定位置删除一个元素，并返回它。
   * 
   * @param index 位置。
   * @param v 用于返回值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 getAndRemove(index : number, v : TValue) : TRet  {
    return object_array_get_and_remove(this != null ? (this.nativeObj || this) : null, index, v != null ? (v.nativeObj || v) : null);
 }


  /**
   * 属性个数。
   *
   */
 get size() : number {
   return object_array_t_get_prop_size(this.nativeObj);
 }

};
/**
 * 对象接口的缺省实现。
 *
 *内部使用有序数组保存所有属性，可以快速查找指定名称的属性。
 *
 */
export class TObjectDefault extends TObject { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 创建对象。
   * 
   *
   * @returns 返回object对象。
   */
 static create() : TObjectDefault  {
    return new TObjectDefault(object_default_create());
 }


  /**
   * for script gc
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 unref() : TRet  {
    return object_default_unref(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 清除全部属性。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 clearProps() : TRet  {
    return object_default_clear_props(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 属性个数。
   *
   */
 get propsSize() : number {
   return object_default_t_get_prop_props_size(this.nativeObj);
 }

};
/**
 * 单个定时器的信息。
 *
 */
export class TTimerInfo extends TObject { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 转换为timer_info对象(供脚本语言使用)。
   * 
   * @param timer timer_info对象。
   *
   * @returns timer_info对象。
   */
 static cast(timer : TTimerInfo) : TTimerInfo  {
    return new TTimerInfo(timer_info_cast(timer != null ? (timer.nativeObj || timer) : null));
 }


  /**
   * 定时器回调函数的上下文
   *
   */
 get ctx() : any {
   return timer_info_t_get_prop_ctx(this.nativeObj);
 }


  /**
   * 定时器回调函数的上下文
   *
   */
 get extraCtx() : any {
   return timer_info_t_get_prop_extra_ctx(this.nativeObj);
 }


  /**
   * 定时器的ID
   *
   *> 为TK\_INVALID\_ID时表示无效定时器。
   *
   */
 get id() : number {
   return timer_info_t_get_prop_id(this.nativeObj);
 }


  /**
   * 当前时间(相对时间，单位为毫秒)。
   *
   */
 get now() : number {
   return timer_info_t_get_prop_now(this.nativeObj);
 }

};
/**
 * 电阻屏校准窗口。
 *
 *calibration\_win\_t是[window\_base\_t](window_base_t.md)的子类控件，
 *window\_base\_t的函数均适用于calibration\_win\_t控件。
 *
 *在xml中使用"calibration\_win"标签创建电阻屏校准窗口。如：
 *
 *```xml
 *<calibration_win name="cali" w="100%" h="100%" text="Please click the center of cross">
 *</calibration_win>
 *```
 *
 *> 更多用法请参考：
 *[window.xml](https://github.com/zlgopen/awtk/blob/master/design/default/ui/calibration_win.xml)
 *
 *在c代码中使用函数calibration\_win\_create创建窗口。如：
 *
 *
 *通过calibration\_win\_set\_on\_done注册回调函数，用于保存校准数据。
 *
 */
export class TCalibrationWin extends TWindowBase { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 创建calibration_win对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TCalibrationWin  {
    return new TCalibrationWin(calibration_win_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }


  /**
   * 转换为calibration_win对象(供脚本语言使用)。
   * 
   * @param widget calibration_win对象。
   *
   * @returns calibration_win对象。
   */
 static cast(widget : TWidget) : TCalibrationWin  {
    return new TCalibrationWin(calibration_win_cast(widget != null ? (widget.nativeObj || widget) : null));
 }

};
/**
 * 下拉列表控件。
 *
 *点击右边的按钮，可弹出一个下拉列表，从中选择一项作为当前的值。
 *
 *combo\_box\_t是[edit\_t](edit_t.md)的子类控件，edit\_t的函数均适用于combo\_box\_t控件。
 *
 *在xml中使用"combo_box"标签创建下拉列表控件。
 *
 *列表选项可以直接写在"options"属性中。如：
 *
 *```xml
 *<combo_box readonly="true" x="10" y="bottom:5" w="200" h="30" tr_text="ok"
 *options="1:ok;2:cancel;"/>
 *```
 *
 *列表选项也可以放在独立的窗口中，用属性"open_window"指定窗口的名称。如：
 *
 *```xml
 *<combo_box open_window="language" readonly="true" x="10" y="bottom:50" w="200" h="30"
 *tr_text="english"/>
 *```
 *
 *language.xml:
 *
 *```xml
 *<popup close_when_click_outside="true" h="80"
 *<list_view x="0"  y="0" w="100%" h="100%" item_height="30">
 *<scroll_view name="view" x="0"  y="0" w="-12" h="100%">
 *<combo_box_item tr_text="english"/>
 *<combo_box_item tr_text="chinese" />
 *</scroll_view>
 *<scroll_bar_d name="bar" x="right" y="0" w="12" h="100%" value="0"/>
 *</list_view>
 *</popup>
 *```
 *
 *> 更多用法请参考：[combo_box.xml](https://github.com/zlgopen/awtk/blob/master/design/default/ui/combo_box.xml)
 *
 *
 *
 *如果在文本比较长时，希望在获得焦点时文本自动滚动，可以放入一个hscroll_label为子控件，并命名为"value"。如：
 *
 *```xml
 *<combo_box left_margin="6" readonly="true" x="10" y="50" w="80" h="30" options="leftttttttttt;centerrrrrrrrrrrrrrrr;rightttttttttt;"
 *selected_index="1">
 *<hscroll_label x="0" y="0" w="-30" h="100%"
 *name="value"
 *lull="1000"
 *loop="true"
 *yoyo="true"
 *ellipses="true"
 *only_parent_focus="true"/>
 *<button style="combobox_down" x="right:5" y="middle" w="20" h="20"/>
 *</combo_box>
 *```
 *
 *在c代码中使用函数combo\_box\_create创建下拉列表控件。如：
 *
 *
 *创建之后：
 *
 ** 用combo\_box\_set\_options设置可选项目。
 ** 用combo\_box\_set\_selected\_index设置缺省项。
 *
 *> 完整示例请参考：[combo_box
 *demo](https://github.com/zlgopen/awtk-c-demos/blob/master/demos/combo_box.c)
 *
 *可用通过style来设置控件的显示风格，如字体的大小和颜色等等。如：
 *
 *```xml
 *<combo_box>
 *<style name="default" border_color="#a0a0a0"  text_color="black" text_align_h="left">
 *<normal     bg_color="#f0f0f0" />
 *<focused    bg_color="#f0f0f0" border_color="black"/>
 *<empty      bg_color="#f0f0f0" text_color="#a0a0a0" />
 *</style>
 *</combo_box>
 *```
 *
 ** 1.combobox的下拉按钮的style名称为combobox_down，可以在窗体样式文件中设置。
 *
 *```xml
 *<button>
 *<style name="combobox_down" border_color="#a0a0a0">
 *<normal     bg_color="#f0f0f0" icon="arrow_down_n"/>
 *<pressed    bg_color="#c0c0c0" icon="arrow_down_p"/>
 *<over       bg_color="#e0e0e0" icon="arrow_down_o"/>
 *</style>
 *</button>
 *```
 *
 ** 2.combobox的弹出popup窗口的style名称为combobox_popup，可以在窗体样式文件中设置。
 *
 *```xml
 *<popup>
 *<style name="combobox_popup" border_color="red">
 *<normal bg_color="#808080"/>
 *</style>
 *</popup>
 *```
 *
 *> 更多用法请参考：[theme
 *default](https://github.com/zlgopen/awtk/blob/master/design/default/styles/default.xml#L422)
 *
 */
export class TComboBox extends TEdit { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 创建combo_box对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TComboBox  {
    return new TComboBox(combo_box_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }


  /**
   * 转换combo_box对象(供脚本语言使用)。
   * 
   * @param widget combo_box对象。
   *
   * @returns combo_box对象。
   */
 static cast(widget : TWidget) : TComboBox  {
    return new TComboBox(combo_box_cast(widget != null ? (widget.nativeObj || widget) : null));
 }


  /**
   * 点击按钮时可以打开popup窗口，本函数可设置窗口的名称。
   * 
   * @param open_window 弹出窗口的名称。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setOpenWindow(open_window : string) : TRet  {
    return combo_box_set_open_window(this != null ? (this.nativeObj || this) : null, open_window);
 }


  /**
   * 重置所有选项。
   * 
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 resetOptions() : TRet  {
    return combo_box_reset_options(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 获取选项个数。
   * 
   *
   * @returns 返回选项个数。
   */
 countOptions() : number  {
    return combo_box_count_options(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 设置第index个选项为当前选中的选项。
   * 
   * @param index 选项的索引。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setSelectedIndex(index : number) : TRet  {
    return combo_box_set_selected_index(this != null ? (this.nativeObj || this) : null, index);
 }


  /**
   * 设置是否本地化(翻译)选项。
   * 
   * @param localize_options 是否本地化(翻译)选项。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setLocalizeOptions(localize_options : boolean) : TRet  {
    return combo_box_set_localize_options(this != null ? (this.nativeObj || this) : null, localize_options);
 }


  /**
   * 设置值。
   * 
   * @param value 值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setValue(value : any) : TRet  {
    return combo_box_set_value(this != null ? (this.nativeObj || this) : null, value);
 }


  /**
   * 设置item高度。
   * 
   * @param item_height item的高度。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setItemHeight(item_height : number) : TRet  {
    return combo_box_set_item_height(this != null ? (this.nativeObj || this) : null, item_height);
 }


  /**
   * 追加一个选项。
   * 
   * @param value 值。
   * @param text 文本。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 appendOption(value : any, text : string) : TRet  {
    return combo_box_append_option(this != null ? (this.nativeObj || this) : null, value, text);
 }


  /**
   * 删除选项。
   * 
   * @param value 值。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 removeOption(value : any) : TRet  {
    return combo_box_remove_option(this != null ? (this.nativeObj || this) : null, value);
 }


  /**
   * 设置选项。
   * 
   * @param options 选项。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setOptions(options : string) : TRet  {
    return combo_box_set_options(this != null ? (this.nativeObj || this) : null, options);
 }


  /**
   * 获取combo_box的值。
   * 
   *
   * @returns 返回值。
   */
 getValue() : number  {
    return combo_box_get_value(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 获取combo_box的文本。
   * 
   *
   * @returns 返回文本。
   */
 getTextValue() : string  {
    return combo_box_get_text(this != null ? (this.nativeObj || this) : null);
 }


  /**
   * 为点击按钮时，要打开窗口的名称。
   *
   */
 get openWindow() : string {
   return combo_box_t_get_prop_open_window(this.nativeObj);
 }

 set openWindow(v : string) {
   this.setOpenWindow(v);
 }


  /**
   * 当前选中的选项。
   *
   */
 get selectedIndex() : number {
   return combo_box_t_get_prop_selected_index(this.nativeObj);
 }

 set selectedIndex(v : number) {
   this.setSelectedIndex(v);
 }


  /**
   * 值。
   *
   */
 get value() : number {
   return combo_box_t_get_prop_value(this.nativeObj);
 }

 set value(v : number) {
   this.setValue(v);
 }


  /**
   * 是否本地化(翻译)选项(缺省为TRUE)。
   *
   */
 get localizeOptions() : boolean {
   return combo_box_t_get_prop_localize_options(this.nativeObj);
 }

 set localizeOptions(v : boolean) {
   this.setLocalizeOptions(v);
 }


  /**
   * 设置可选项(冒号分隔值和文本，分号分隔选项，如:1:red;2:green;3:blue)。
   *
   */
 get options() : string {
   return combo_box_t_get_prop_options(this.nativeObj);
 }

 set options(v : string) {
   this.setOptions(v);
 }


  /**
   * 下拉选项的高度。如果open_window为空，则使用缺省高度。
   *
   */
 get itemHeight() : number {
   return combo_box_t_get_prop_item_height(this.nativeObj);
 }

 set itemHeight(v : number) {
   this.setItemHeight(v);
 }

};
/**
 * 图片控件。
 *
 *用来显示一张静态图片，目前支持bmp/png/jpg等格式。
 *
 *如果要显示gif文件，请用[gif\_image](gif_image_t.md)。
 *
 *如果要显示svg文件，请用[svg\_image](svg_image_t.md)。
 *
 *如果需要支持勾选效果，请设置**selectable**属性。
 *
 *如果需要支持点击效果，请设置**clickable**属性。
 *
 *image\_t是[image\_base\_t](image_base_t.md)的子类控件，image\_base\_t的函数均适用于image\_t控件。
 *
 *在xml中使用"image"标签创建图片控件。如：
 *
 *```xml
 *<image style="border" image="earth" draw_type="icon" />
 *```
 *
 *> 更多用法请参考：
 *[image.xml](https://github.com/zlgopen/awtk/blob/master/design/default/ui/images.xml)
 *
 *在c代码中使用函数image\_create创建图片控件。如：
 *
 *
 *> 创建之后:
 *>
 *> 需要用widget\_set\_image设置图片名称。
 *>
 *> 可以用image\_set\_draw\_type设置图片的绘制方式。
 *
 *> 绘制方式请参考[image\_draw\_type\_t](image_draw_type_t.md)
 *
 *> 绘制方式的属性值和枚举值:
 *[image\_draw\_type\_name\_value](https://github.com/zlgopen/awtk/blob/master/src/base/enums.c#L98)
 *
 *> 完整示例请参考：
 *[image demo](https://github.com/zlgopen/awtk-c-demos/blob/master/demos/image.c)
 *
 *可用通过style来设置控件的显示风格，如背景和边框等。如：
 *
 *```xml
 *<image>
 *<style name="border">
 *<normal border_color="#000000" bg_color="#e0e0e0" text_color="black"/>
 *</style>
 *</image>
 *```
 *
 *> 更多用法请参考：
 *[theme
 *default](https://github.com/zlgopen/awtk/blob/master/design/default/styles/default.xml#L313)
 *
 */
export class TImage extends TImageBase { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 创建image对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TImage  {
    return new TImage(image_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }


  /**
   * 设置图片的绘制方式。
   * 
   * @param draw_type 绘制方式(仅在没有旋转和缩放时生效)。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setDrawType(draw_type : TImageDrawType) : TRet  {
    return image_set_draw_type(this != null ? (this.nativeObj || this) : null, draw_type);
 }


  /**
   * 转换为image对象(供脚本语言使用)。
   * 
   * @param widget image对象。
   *
   * @returns image对象。
   */
 static cast(widget : TWidget) : TImage  {
    return new TImage(image_cast(widget != null ? (widget.nativeObj || widget) : null));
 }


  /**
   * 图片的绘制方式(仅在没有旋转和缩放时生效)。
   *
   */
 get drawType() : TImageDrawType {
   return image_t_get_prop_draw_type(this.nativeObj);
 }

 set drawType(v : TImageDrawType) {
   this.setDrawType(v);
 }

};
/**
 * overlay窗口。
 *
 *overlay窗口有点类似于非模态的dialog，但是它位置和大小是完全自由的，窗口管理器不会对它做任何限制。
 *
 *如果overlay窗口有透明或半透效果，则不支持窗口动画，但可以通过移动窗口位置来实现类似动画的效果。
 *
 *overlay\_t是[window\_base\_t](window_base_t.md)的子类控件，window\_base\_t的函数均适用于overlay\_t控件。
 *
 *在xml中使用"overlay"标签创建窗口。需要指定坐标和大小，可以指定窗体样式和动画名称。如：
 *
 *```xml
 *<overlay theme="basic" x="100" y="100" w="200" h="300">
 *...
 *</overlay>
 *```
 *
 *>
 *更多用法请参考：[overlay.xml](https://github.com/zlgopen/awtk/blob/master/design/default/ui/)
 *
 *在c代码中使用函数overlay\_create创建窗口。如：
 *
 *
 *> 完整示例请参考：[overlay
 *demo](https://github.com/zlgopen/awtk-c-demos/blob/master/demos/)
 *
 *可用通过style来设置窗口的风格，如背景颜色或图片等。如：
 *
 *```xml
 *<style name="bricks">
 *<normal bg_image="bricks"  bg_image_draw_type="repeat"/>
 *</style>
 *```
 *
 *> 更多用法请参考：[theme
 *default](https://github.com/zlgopen/awtk/blob/master/design/default/styles/default.xml#L0)
 *
 */
export class TOverlay extends TWindowBase { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 创建overlay对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TOverlay  {
    return new TOverlay(overlay_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }


  /**
   * 设置是否启用点击穿透。
   * 
   * @param click_through 是否启用点击穿透。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setClickThrough(click_through : boolean) : TRet  {
    return overlay_set_click_through(this != null ? (this.nativeObj || this) : null, click_through);
 }


  /**
   * 设置是否总是在最上面。
   * 
   * @param always_on_top 是否总是在最上面。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setAlwaysOnTop(always_on_top : boolean) : TRet  {
    return overlay_set_always_on_top(this != null ? (this.nativeObj || this) : null, always_on_top);
 }


  /**
   * 转换为overlay对象(供脚本语言使用)。
   * 
   * @param widget overlay对象。
   *
   * @returns overlay对象。
   */
 static cast(widget : TWidget) : TOverlay  {
    return new TOverlay(overlay_cast(widget != null ? (widget.nativeObj || widget) : null));
 }


  /**
   * 点击穿透。点击没有子控件的位置，是否穿透到底层窗口。
   *
   *缺省不启用。
   *
   */
 get clickThrough() : boolean {
   return overlay_t_get_prop_click_through(this.nativeObj);
 }

 set clickThrough(v : boolean) {
   this.setClickThrough(v);
 }


  /**
   * 是否总在最上面。
   *
   *缺省不启用。
   *
   */
 get alwaysOnTop() : boolean {
   return overlay_t_get_prop_always_on_top(this.nativeObj);
 }

 set alwaysOnTop(v : boolean) {
   this.setAlwaysOnTop(v);
 }

};
/**
 * 弹出窗口。
 *
 *弹出窗口是一种特殊的窗口，大小和位置可以自由设置，主要用来实现右键菜单和combo\_box的下列列表等功能。
 *
 *popup\_t是[window\_base\_t](window_base_t.md)的子类控件，window\_base\_t的函数均适用于popup\_t控件。
 *
 *在xml中使用"popup"标签创建弹出窗口。如：
 *
 *```xml
 *<popup close_when_click_outside="true" x="c" y="m" w="80%" h="80"
 *<list_view x="0"  y="0" w="100%" h="100%" item_height="30">
 *<scroll_view name="view" x="0"  y="0" w="-12" h="100%">
 *<combo_box_item tr_text="english"/>
 *<combo_box_item tr_text="chinese" />
 *</scroll_view>
 *<scroll_bar_d name="bar" x="right" y="0" w="12" h="100%" value="0"/>
 *</list_view>
 *</popup>
 *```
 *
 *>
 *更多用法请参考：[popup](https://github.com/zlgopen/awtk/blob/master/design/default/ui/)
 *
 *在c代码中使用函数popup\_create创建弹出窗口。如：
 *
 *
 *> 创建之后，和使用普通窗口是一样的。
 *
 *> 完整示例请参考：[combo_box.c](https://github.com/zlgopen/awtk-c-demos/blob/master/demos/combo_box.c)
 *
 *可用通过style来设置控件的显示风格，如字体的大小和颜色等等。如：
 *
 *```xml
 *<popup>
 *<style name="default" border_color="#a0a0a0">
 *<normal bg_color="#f0f0f0"/>
 *</style>
 *</popup>
 *```
 *
 *> 更多用法请参考：[theme
 *default](https://github.com/zlgopen/awtk/blob/master/design/default/styles/default.xml#L324)
 *
 */
export class TPopup extends TWindowBase { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 创建popup对象。
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns popup对象。
   */
 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TPopup  {
    return new TPopup(popup_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }


  /**
   * 转换为popup对象(供脚本语言使用)。
   * 
   * @param widget popup对象。
   *
   * @returns popup对象。
   */
 static cast(widget : TWidget) : TPopup  {
    return new TPopup(popup_cast(widget != null ? (widget.nativeObj || widget) : null));
 }


  /**
   * 设置点击时是否关闭窗口。
   * 
   * @param close_when_click 点击时是否关闭窗口。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setCloseWhenClick(close_when_click : boolean) : TRet  {
    return popup_set_close_when_click(this != null ? (this.nativeObj || this) : null, close_when_click);
 }


  /**
   * 设置点击窗口外部时是否关闭窗口。
   * 
   * @param close_when_click_outside 点击窗口外部时是否关闭窗口。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setCloseWhenClickOutside(close_when_click_outside : boolean) : TRet  {
    return popup_set_close_when_click_outside(this != null ? (this.nativeObj || this) : null, close_when_click_outside);
 }


  /**
   * 设置超时关闭时间(ms)。
   * 
   * @param close_when_timeout 大于0时，为定时器时间(ms)，超时关闭窗口。
   *
   * @returns 返回RET_OK表示成功，否则表示失败。
   */
 setCloseWhenTimeout(close_when_timeout : number) : TRet  {
    return popup_set_close_when_timeout(this != null ? (this.nativeObj || this) : null, close_when_timeout);
 }


  /**
   * 点击时是否关闭窗口。
   *
   */
 get closeWhenClick() : boolean {
   return popup_t_get_prop_close_when_click(this.nativeObj);
 }

 set closeWhenClick(v : boolean) {
   this.setCloseWhenClick(v);
 }


  /**
   * 点击到窗口外时是否关闭窗口。
   *
   */
 get closeWhenClickOutside() : boolean {
   return popup_t_get_prop_close_when_click_outside(this.nativeObj);
 }

 set closeWhenClickOutside(v : boolean) {
   this.setCloseWhenClickOutside(v);
 }


  /**
   * 超时后自动关闭窗口(ms)。
   *
   */
 get closeWhenTimeout() : number {
   return popup_t_get_prop_close_when_timeout(this.nativeObj);
 }

 set closeWhenTimeout(v : number) {
   this.setCloseWhenTimeout(v);
 }

};
/**
 * spinbox控件。
 *
 *一个特殊的数值编辑器，将edit\_t和button\_t进行组合，方便编辑数值。
 *
 *点击向上的按钮将数值增加一个step，点击向下的按钮将数值减小一个step。
 *step的值可以通过step属性进行设置。
 *
 *spin_box\_t是[edit\_t](edit_t.md)的子类控件，edit\_t的函数均适用于spin\_box\_t控件。
 *
 *在xml中使用"spin_box"标签创建spinbox控件。如：
 *
 *```xml
 *<spin_box w="70%" input_type="int" min="-100" max="100" step="5">
 *```
 *
 *>
 *更多用法请参考：[spin_box.xml](https://github.com/zlgopen/awtk/blob/master/design/default/ui/spinbox.xml)
 *
 *在c代码中使用函数spin_box\_create创建spinbox控件。如：
 *
 *
 *> 创建之后:
 *>
 *> 可以用edit相关函数去设置它的各种属性。
 *
 *> 完整示例请参考：[spin_box
 *demo](https://github.com/zlgopen/awtk-c-demos/blob/master/demos/spin_box.c)
 *
 *可用通过style来设置控件的显示风格，如背景和边框等。如：
 *
 *```xml
 *<spin_box>
 *<style name="default" border_color="#a0a0a0"  text_color="black" text_align_h="left">
 *<normal     bg_color="#f0f0f0" />
 *<focused    bg_color="#f0f0f0" border_color="black"/>
 *<disable    bg_color="gray" text_color="#d0d0d0" />
 *<error      bg_color="#f0f0f0" text_color="red" />
 *<empty      bg_color="#f0f0f0" text_color="#a0a0a0" />
 *</style>
 *</spin_box>
 *```
 *
 *> 更多用法请参考：[theme
 *default](https://github.com/zlgopen/awtk/blob/master/design/default/styles/default.xml#L128)
 *
 */
export class TSpinBox extends TEdit { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 创建spin_box对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TSpinBox  {
    return new TSpinBox(spin_box_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }


  /**
   * 转换为spin_box对象(供脚本语言使用)。
   * 
   * @param widget spin_box对象。
   *
   * @returns spin_box对象。
   */
 static cast(widget : TWidget) : TSpinBox  {
    return new TSpinBox(spin_box_cast(widget != null ? (widget.nativeObj || widget) : null));
 }

};
/**
 * system\_bar窗口。
 *
 *system\_bar窗口是一种特殊的窗口，独占LCD顶部区域，用来显示当前窗口的标题和关闭按钮等内容。
 *
 *> system\_bar窗口需要在打开第一个应用程序窗口之前打开。
 *
 *system_bar对两个子控件会做特殊处理：
 *
 ** 1.名为"title"的label控件，自动显示当前主窗口的name或text。
 ** 2.名为"close"的button控件，点击之后向当前主窗口发送EVT\_REQUEST\_CLOSE\_WINDOW消息。
 *
 *system\_bar\_t是[window\_base\_t](window_base_t.md)的子类控件，
 *window\_base\_t的函数均适用于system\_bar\_t控件。
 *
 *在xml中使用"system\_bar"标签创建system\_bar窗口。如：
 *
 *```xml
 *<system_bar h="30">
 *<column x="0" y="0" w="-40" h="100%">
 *<label style="title" x="10" y="m" w="55%" h="100%" name="title"/>
 *<digit_clock style="time" x="r" y="m" w="40%" h="100%" format="hh:mm"/>
 *</column>
 *<button style="close" x="r:5" y="m" w="26" h="26" name="close" text="x"/>
 *</system_bar>
 *```
 *
 *> 更多用法请参考：
 *[system_bar](https://github.com/zlgopen/awtk/blob/master/design/default/ui/system_bar.xml)
 *
 *在c代码中使用函数system\_bar\_create创建system\_bar窗口。如：
 *
 *
 *> 创建之后，和使用普通窗口是一样的。
 *
 *可用通过style来设置控件的显示风格，如背景颜色等等。如：
 *
 *```xml
 *<system_bar>
 *<style name="default">
 *<normal bg_color="#a0a0a0"/>
 *</style>
 *</system_bar>
 *```
 *
 *> 更多用法请参考：
 *[system_bar.xml](https://github.com/zlgopen/awtk/blob/master/design/default/styles/system_bar.xml)
 *
 */
export class TSystemBar extends TWindowBase { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 创建system_bar对象。
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns system_bar对象。
   */
 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TSystemBar  {
    return new TSystemBar(system_bar_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }


  /**
   * 转换为system_bar对象(供脚本语言使用)。
   * 
   * @param widget system_bar对象。
   *
   * @returns system_bar对象。
   */
 static cast(widget : TWidget) : TSystemBar  {
    return new TSystemBar(system_bar_cast(widget != null ? (widget.nativeObj || widget) : null));
 }

};
/**
 * 可滚动的combo_box控件。
 *
 */
export class TComboBoxEx extends TComboBox { 
 public nativeObj : any;
 constructor(nativeObj : any) {
   super(nativeObj);
 }


  /**
   * 创建combo_box_ex对象
   * 
   * @param parent 父控件
   * @param x x坐标
   * @param y y坐标
   * @param w 宽度
   * @param h 高度
   *
   * @returns 对象。
   */
 static create(parent : TWidget, x : number, y : number, w : number, h : number) : TComboBoxEx  {
    return new TComboBoxEx(combo_box_ex_create(parent != null ? (parent.nativeObj || parent) : null, x, y, w, h));
 }

};