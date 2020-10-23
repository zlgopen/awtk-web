/*XXX: GENERATED CODE, DONT EDIT IT.*/
#include "tkc/utf8.h"
#include "tkc/mem.h"
#include "tkc/event.h"
#include "tkc/rect.h"
#include "tkc/emitter.h"
#include "base/bitmap.h"
#include "tkc/value.h"
#include "tkc/object.h"
#include "src/awtk_global.h"
#include "base/clip_board.h"
#include "base/dialog.h"
#include "base/events.h"
#include "base/font_manager.h"
#include "base/font.h"
#include "base/idle.h"
#include "base/image_manager.h"
#include "base/input_method.h"
#include "base/keys.h"
#include "base/locale_info.h"
#include "base/assets_manager.h"
#include "base/style.h"
#include "base/theme.h"
#include "base/timer.h"
#include "base/types_def.h"
#include "base/vgcanvas.h"
#include "base/widget_consts.h"
#include "base/widget.h"
#include "conf_io/app_conf.h"
#include "tkc/types_def.h"
#include "tkc/timer_manager.h"
#include "tkc/time_now.h"
#include "base/bidi.h"
#include "tkc/named_value.h"
#include "tkc/mime_types.h"
#include "slide_view/slide_indicator.h"
#include "tkc/idle_manager.h"
#include "base/canvas_offline.h"
#include "base/canvas.h"
#include "tkc/easing.h"
#include "tkc/date_time.h"
#include "tkc/color.h"
#include "tkc/asset_info.h"
#include "guage/guage_pointer.h"
#include "widgets/view.h"
#include "widgets/tab_control.h"
#include "widgets/tab_button.h"
#include "widgets/tab_button_group.h"
#include "widgets/slider.h"
#include "widgets/row.h"
#include "widgets/progress_bar.h"
#include "widgets/pages.h"
#include "widgets/label.h"
#include "widgets/group_box.h"
#include "widgets/grid.h"
#include "widgets/grid_item.h"
#include "widgets/edit.h"
#include "widgets/dragger.h"
#include "widgets/digit_clock.h"
#include "widgets/dialog_title.h"
#include "widgets/dialog_client.h"
#include "widgets/combo_box_item.h"
#include "widgets/column.h"
#include "widgets/color_tile.h"
#include "widgets/clip_view.h"
#include "widgets/check_button.h"
#include "time_clock/time_clock.h"
#include "widgets/button.h"
#include "text_selector/text_selector.h"
#include "switch/switch.h"
#include "widgets/button_group.h"
#include "widgets/app_bar.h"
#include "slide_view/slide_view.h"
#include "slide_menu/slide_menu.h"
#include "scroll_view/scroll_view.h"
#include "scroll_view/scroll_bar.h"
#include "scroll_view/list_view.h"
#include "scroll_view/list_view_h.h"
#include "scroll_view/list_item.h"
#include "scroll_label/hscroll_label.h"
#include "rich_text/rich_text.h"
#include "rich_text/rich_text_view.h"
#include "progress_circle/progress_circle.h"
#include "mledit/mledit.h"
#include "mledit/line_number.h"
#include "keyboard/lang_indicator.h"
#include "keyboard/candidates.h"
#include "image_value/image_value.h"
#include "image_animation/image_animation.h"
#include "guage/guage.h"
#include "file_browser/file_chooser.h"
#include "file_browser/file_browser_view.h"
#include "features/draggable.h"
#include "color_picker/color_picker.h"
#include "color_picker/color_component.h"
#include "canvas_widget/canvas_widget.h"
#include "base/image_base.h"
#include "base/window_manager.h"
#include "base/window_base.h"
#include "base/style_mutable.h"
#include "widgets/combo_box.h"
#include "base/window.h"
#include "tkc/timer_info.h"
#include "gif_image/gif_image.h"
#include "keyboard/keyboard.h"
#include "mutable_image/mutable_image.h"
#include "tkc/object_default.h"
#include "tkc/object_array.h"
#include "svg_image/svg_image.h"
#include "tkc/idle_info.h"
#include "widgets/calibration_win.h"
#include "base/native_window.h"
#include "widgets/system_bar.h"
#include "widgets/spin_box.h"
#include "widgets/popup.h"
#include "widgets/overlay.h"
#include "widgets/image.h"
#include "combo_box_ex/combo_box_ex.h"
int32_t event_t_get_prop_type (event_t* obj) {
  return obj->type;
}

int32_t event_t_get_prop_size (event_t* obj) {
  return obj->size;
}

uint64_t event_t_get_prop_time (event_t* obj) {
  return obj->time;
}

void* event_t_get_prop_target (event_t* obj) {
  return obj->target;
}

xy_t rect_t_get_prop_x (rect_t* obj) {
  return obj->x;
}

xy_t rect_t_get_prop_y (rect_t* obj) {
  return obj->y;
}

wh_t rect_t_get_prop_w (rect_t* obj) {
  return obj->w;
}

wh_t rect_t_get_prop_h (rect_t* obj) {
  return obj->h;
}

wh_t bitmap_t_get_prop_w (bitmap_t* obj) {
  return obj->w;
}

wh_t bitmap_t_get_prop_h (bitmap_t* obj) {
  return obj->h;
}

uint32_t bitmap_t_get_prop_line_length (bitmap_t* obj) {
  return obj->line_length;
}

uint16_t bitmap_t_get_prop_flags (bitmap_t* obj) {
  return obj->flags;
}

uint16_t bitmap_t_get_prop_format (bitmap_t* obj) {
  return obj->format;
}

const char* bitmap_t_get_prop_name (bitmap_t* obj) {
  return obj->name;
}

int32_t object_t_get_prop_ref_count (object_t* obj) {
  return obj->ref_count;
}

char* object_t_get_prop_name (object_t* obj) {
  return obj->name;
}

int32_t get_CLIP_BOARD_DATA_TYPE_NONE (void) {
  return CLIP_BOARD_DATA_TYPE_NONE;
}

int32_t get_CLIP_BOARD_DATA_TYPE_TEXT (void) {
  return CLIP_BOARD_DATA_TYPE_TEXT;
}

int32_t get_DIALOG_QUIT_NONE (void) {
  return DIALOG_QUIT_NONE;
}

int32_t get_DIALOG_QUIT_OK (void) {
  return DIALOG_QUIT_OK;
}

int32_t get_DIALOG_QUIT_YES (void) {
  return DIALOG_QUIT_YES;
}

int32_t get_DIALOG_QUIT_CANCEL (void) {
  return DIALOG_QUIT_CANCEL;
}

int32_t get_DIALOG_QUIT_NO (void) {
  return DIALOG_QUIT_NO;
}

int32_t get_DIALOG_QUIT_OTHER (void) {
  return DIALOG_QUIT_OTHER;
}

int32_t get_EVT_POINTER_DOWN (void) {
  return EVT_POINTER_DOWN;
}

int32_t get_EVT_POINTER_DOWN_BEFORE_CHILDREN (void) {
  return EVT_POINTER_DOWN_BEFORE_CHILDREN;
}

int32_t get_EVT_POINTER_MOVE (void) {
  return EVT_POINTER_MOVE;
}

int32_t get_EVT_POINTER_MOVE_BEFORE_CHILDREN (void) {
  return EVT_POINTER_MOVE_BEFORE_CHILDREN;
}

int32_t get_EVT_POINTER_UP (void) {
  return EVT_POINTER_UP;
}

int32_t get_EVT_POINTER_UP_BEFORE_CHILDREN (void) {
  return EVT_POINTER_UP_BEFORE_CHILDREN;
}

int32_t get_EVT_WHEEL (void) {
  return EVT_WHEEL;
}

int32_t get_EVT_WHEEL_BEFORE_CHILDREN (void) {
  return EVT_WHEEL_BEFORE_CHILDREN;
}

int32_t get_EVT_POINTER_DOWN_ABORT (void) {
  return EVT_POINTER_DOWN_ABORT;
}

int32_t get_EVT_CONTEXT_MENU (void) {
  return EVT_CONTEXT_MENU;
}

int32_t get_EVT_POINTER_ENTER (void) {
  return EVT_POINTER_ENTER;
}

int32_t get_EVT_POINTER_LEAVE (void) {
  return EVT_POINTER_LEAVE;
}

int32_t get_EVT_LONG_PRESS (void) {
  return EVT_LONG_PRESS;
}

int32_t get_EVT_CLICK (void) {
  return EVT_CLICK;
}

int32_t get_EVT_FOCUS (void) {
  return EVT_FOCUS;
}

int32_t get_EVT_BLUR (void) {
  return EVT_BLUR;
}

int32_t get_EVT_KEY_DOWN (void) {
  return EVT_KEY_DOWN;
}

int32_t get_EVT_KEY_LONG_PRESS (void) {
  return EVT_KEY_LONG_PRESS;
}

int32_t get_EVT_KEY_DOWN_BEFORE_CHILDREN (void) {
  return EVT_KEY_DOWN_BEFORE_CHILDREN;
}

int32_t get_EVT_KEY_REPEAT (void) {
  return EVT_KEY_REPEAT;
}

int32_t get_EVT_KEY_UP (void) {
  return EVT_KEY_UP;
}

int32_t get_EVT_KEY_UP_BEFORE_CHILDREN (void) {
  return EVT_KEY_UP_BEFORE_CHILDREN;
}

int32_t get_EVT_WILL_MOVE (void) {
  return EVT_WILL_MOVE;
}

int32_t get_EVT_MOVE (void) {
  return EVT_MOVE;
}

int32_t get_EVT_WILL_RESIZE (void) {
  return EVT_WILL_RESIZE;
}

int32_t get_EVT_RESIZE (void) {
  return EVT_RESIZE;
}

int32_t get_EVT_WILL_MOVE_RESIZE (void) {
  return EVT_WILL_MOVE_RESIZE;
}

int32_t get_EVT_MOVE_RESIZE (void) {
  return EVT_MOVE_RESIZE;
}

int32_t get_EVT_VALUE_WILL_CHANGE (void) {
  return EVT_VALUE_WILL_CHANGE;
}

int32_t get_EVT_VALUE_CHANGED (void) {
  return EVT_VALUE_CHANGED;
}

int32_t get_EVT_VALUE_CHANGING (void) {
  return EVT_VALUE_CHANGING;
}

int32_t get_EVT_PAINT (void) {
  return EVT_PAINT;
}

int32_t get_EVT_BEFORE_PAINT (void) {
  return EVT_BEFORE_PAINT;
}

int32_t get_EVT_AFTER_PAINT (void) {
  return EVT_AFTER_PAINT;
}

int32_t get_EVT_PAINT_DONE (void) {
  return EVT_PAINT_DONE;
}

int32_t get_EVT_LOCALE_CHANGED (void) {
  return EVT_LOCALE_CHANGED;
}

int32_t get_EVT_ANIM_START (void) {
  return EVT_ANIM_START;
}

int32_t get_EVT_ANIM_STOP (void) {
  return EVT_ANIM_STOP;
}

int32_t get_EVT_ANIM_PAUSE (void) {
  return EVT_ANIM_PAUSE;
}

int32_t get_EVT_ANIM_ONCE (void) {
  return EVT_ANIM_ONCE;
}

int32_t get_EVT_ANIM_END (void) {
  return EVT_ANIM_END;
}

int32_t get_EVT_WINDOW_LOAD (void) {
  return EVT_WINDOW_LOAD;
}

int32_t get_EVT_WIDGET_LOAD (void) {
  return EVT_WIDGET_LOAD;
}

int32_t get_EVT_WINDOW_WILL_OPEN (void) {
  return EVT_WINDOW_WILL_OPEN;
}

int32_t get_EVT_WINDOW_OPEN (void) {
  return EVT_WINDOW_OPEN;
}

int32_t get_EVT_WINDOW_TO_BACKGROUND (void) {
  return EVT_WINDOW_TO_BACKGROUND;
}

int32_t get_EVT_WINDOW_TO_FOREGROUND (void) {
  return EVT_WINDOW_TO_FOREGROUND;
}

int32_t get_EVT_WINDOW_CLOSE (void) {
  return EVT_WINDOW_CLOSE;
}

int32_t get_EVT_REQUEST_CLOSE_WINDOW (void) {
  return EVT_REQUEST_CLOSE_WINDOW;
}

int32_t get_EVT_TOP_WINDOW_CHANGED (void) {
  return EVT_TOP_WINDOW_CHANGED;
}

int32_t get_EVT_IM_COMMIT (void) {
  return EVT_IM_COMMIT;
}

int32_t get_EVT_IM_CLEAR (void) {
  return EVT_IM_CLEAR;
}

int32_t get_EVT_IM_CANCEL (void) {
  return EVT_IM_CANCEL;
}

int32_t get_EVT_IM_PREEDIT (void) {
  return EVT_IM_PREEDIT;
}

int32_t get_EVT_IM_PREEDIT_CONFIRM (void) {
  return EVT_IM_PREEDIT_CONFIRM;
}

int32_t get_EVT_IM_PREEDIT_ABORT (void) {
  return EVT_IM_PREEDIT_ABORT;
}

int32_t get_EVT_IM_SHOW_CANDIDATES (void) {
  return EVT_IM_SHOW_CANDIDATES;
}

int32_t get_EVT_IM_SHOW_PRE_CANDIDATES (void) {
  return EVT_IM_SHOW_PRE_CANDIDATES;
}

int32_t get_EVT_IM_LANG_CHANGED (void) {
  return EVT_IM_LANG_CHANGED;
}

int32_t get_EVT_IM_ACTION (void) {
  return EVT_IM_ACTION;
}

int32_t get_EVT_IM_ACTION_INFO (void) {
  return EVT_IM_ACTION_INFO;
}

int32_t get_EVT_DRAG_START (void) {
  return EVT_DRAG_START;
}

int32_t get_EVT_DRAG (void) {
  return EVT_DRAG;
}

int32_t get_EVT_DRAG_END (void) {
  return EVT_DRAG_END;
}

int32_t get_EVT_RESET (void) {
  return EVT_RESET;
}

int32_t get_EVT_SCREEN_SAVER (void) {
  return EVT_SCREEN_SAVER;
}

int32_t get_EVT_LOW_MEMORY (void) {
  return EVT_LOW_MEMORY;
}

int32_t get_EVT_OUT_OF_MEMORY (void) {
  return EVT_OUT_OF_MEMORY;
}

int32_t get_EVT_ORIENTATION_WILL_CHANGED (void) {
  return EVT_ORIENTATION_WILL_CHANGED;
}

int32_t get_EVT_ORIENTATION_CHANGED (void) {
  return EVT_ORIENTATION_CHANGED;
}

int32_t get_EVT_WIDGET_CREATED (void) {
  return EVT_WIDGET_CREATED;
}

int32_t get_EVT_REQUEST_QUIT_APP (void) {
  return EVT_REQUEST_QUIT_APP;
}

int32_t get_EVT_THEME_CHANGED (void) {
  return EVT_THEME_CHANGED;
}

int32_t get_EVT_WIDGET_ADD_CHILD (void) {
  return EVT_WIDGET_ADD_CHILD;
}

int32_t get_EVT_WIDGET_REMOVE_CHILD (void) {
  return EVT_WIDGET_REMOVE_CHILD;
}

int32_t get_EVT_SCROLL_START (void) {
  return EVT_SCROLL_START;
}

int32_t get_EVT_SCROLL (void) {
  return EVT_SCROLL;
}

int32_t get_EVT_SCROLL_END (void) {
  return EVT_SCROLL_END;
}

int32_t get_EVT_MULTI_GESTURE (void) {
  return EVT_MULTI_GESTURE;
}

int32_t get_EVT_REQ_START (void) {
  return EVT_REQ_START;
}

int32_t get_EVT_USER_START (void) {
  return EVT_USER_START;
}

int32_t get_EVT_NONE (void) {
  return EVT_NONE;
}

int32_t get_EVT_PROP_WILL_CHANGE (void) {
  return EVT_PROP_WILL_CHANGE;
}

int32_t get_EVT_PROP_CHANGED (void) {
  return EVT_PROP_CHANGED;
}

int32_t get_EVT_CMD_WILL_EXEC (void) {
  return EVT_CMD_WILL_EXEC;
}

int32_t get_EVT_CMD_EXECED (void) {
  return EVT_CMD_EXECED;
}

int32_t get_EVT_CMD_CAN_EXEC (void) {
  return EVT_CMD_CAN_EXEC;
}

int32_t get_EVT_ITEMS_WILL_CHANGE (void) {
  return EVT_ITEMS_WILL_CHANGE;
}

int32_t get_EVT_ITEMS_CHANGED (void) {
  return EVT_ITEMS_CHANGED;
}

int32_t get_EVT_PROPS_CHANGED (void) {
  return EVT_PROPS_CHANGED;
}

int32_t get_EVT_PROGRESS (void) {
  return EVT_PROGRESS;
}

int32_t get_EVT_DONE (void) {
  return EVT_DONE;
}

int32_t get_EVT_ERROR (void) {
  return EVT_ERROR;
}

int32_t get_EVT_DESTROY (void) {
  return EVT_DESTROY;
}

int32_t get_GLYPH_FMT_ALPHA (void) {
  return GLYPH_FMT_ALPHA;
}

int32_t get_GLYPH_FMT_MONO (void) {
  return GLYPH_FMT_MONO;
}

int32_t get_GLYPH_FMT_RGBA (void) {
  return GLYPH_FMT_RGBA;
}

int32_t get_INPUT_TEXT (void) {
  return INPUT_TEXT;
}

int32_t get_INPUT_INT (void) {
  return INPUT_INT;
}

int32_t get_INPUT_UINT (void) {
  return INPUT_UINT;
}

int32_t get_INPUT_HEX (void) {
  return INPUT_HEX;
}

int32_t get_INPUT_FLOAT (void) {
  return INPUT_FLOAT;
}

int32_t get_INPUT_UFLOAT (void) {
  return INPUT_UFLOAT;
}

int32_t get_INPUT_EMAIL (void) {
  return INPUT_EMAIL;
}

int32_t get_INPUT_PASSWORD (void) {
  return INPUT_PASSWORD;
}

int32_t get_INPUT_PHONE (void) {
  return INPUT_PHONE;
}

int32_t get_INPUT_IPV4 (void) {
  return INPUT_IPV4;
}

int32_t get_INPUT_DATE (void) {
  return INPUT_DATE;
}

int32_t get_INPUT_TIME (void) {
  return INPUT_TIME;
}

int32_t get_INPUT_TIME_FULL (void) {
  return INPUT_TIME_FULL;
}

int32_t get_INPUT_CUSTOM (void) {
  return INPUT_CUSTOM;
}

int32_t get_INPUT_CUSTOM_PASSWORD (void) {
  return INPUT_CUSTOM_PASSWORD;
}

int32_t get_TK_KEY_RETURN (void) {
  return TK_KEY_RETURN;
}

int32_t get_TK_KEY_ESCAPE (void) {
  return TK_KEY_ESCAPE;
}

int32_t get_TK_KEY_BACKSPACE (void) {
  return TK_KEY_BACKSPACE;
}

int32_t get_TK_KEY_TAB (void) {
  return TK_KEY_TAB;
}

int32_t get_TK_KEY_SPACE (void) {
  return TK_KEY_SPACE;
}

int32_t get_TK_KEY_EXCLAIM (void) {
  return TK_KEY_EXCLAIM;
}

int32_t get_TK_KEY_QUOTEDBL (void) {
  return TK_KEY_QUOTEDBL;
}

int32_t get_TK_KEY_HASH (void) {
  return TK_KEY_HASH;
}

int32_t get_TK_KEY_PERCENT (void) {
  return TK_KEY_PERCENT;
}

int32_t get_TK_KEY_DOLLAR (void) {
  return TK_KEY_DOLLAR;
}

int32_t get_TK_KEY_AMPERSAND (void) {
  return TK_KEY_AMPERSAND;
}

int32_t get_TK_KEY_QUOTE (void) {
  return TK_KEY_QUOTE;
}

int32_t get_TK_KEY_LEFTPAREN (void) {
  return TK_KEY_LEFTPAREN;
}

int32_t get_TK_KEY_RIGHTPAREN (void) {
  return TK_KEY_RIGHTPAREN;
}

int32_t get_TK_KEY_ASTERISK (void) {
  return TK_KEY_ASTERISK;
}

int32_t get_TK_KEY_PLUS (void) {
  return TK_KEY_PLUS;
}

int32_t get_TK_KEY_COMMA (void) {
  return TK_KEY_COMMA;
}

int32_t get_TK_KEY_MINUS (void) {
  return TK_KEY_MINUS;
}

int32_t get_TK_KEY_PERIOD (void) {
  return TK_KEY_PERIOD;
}

int32_t get_TK_KEY_SLASH (void) {
  return TK_KEY_SLASH;
}

int32_t get_TK_KEY_0 (void) {
  return TK_KEY_0;
}

int32_t get_TK_KEY_1 (void) {
  return TK_KEY_1;
}

int32_t get_TK_KEY_2 (void) {
  return TK_KEY_2;
}

int32_t get_TK_KEY_3 (void) {
  return TK_KEY_3;
}

int32_t get_TK_KEY_4 (void) {
  return TK_KEY_4;
}

int32_t get_TK_KEY_5 (void) {
  return TK_KEY_5;
}

int32_t get_TK_KEY_6 (void) {
  return TK_KEY_6;
}

int32_t get_TK_KEY_7 (void) {
  return TK_KEY_7;
}

int32_t get_TK_KEY_8 (void) {
  return TK_KEY_8;
}

int32_t get_TK_KEY_9 (void) {
  return TK_KEY_9;
}

int32_t get_TK_KEY_COLON (void) {
  return TK_KEY_COLON;
}

int32_t get_TK_KEY_SEMICOLON (void) {
  return TK_KEY_SEMICOLON;
}

int32_t get_TK_KEY_LESS (void) {
  return TK_KEY_LESS;
}

int32_t get_TK_KEY_EQUAL (void) {
  return TK_KEY_EQUAL;
}

int32_t get_TK_KEY_GREATER (void) {
  return TK_KEY_GREATER;
}

int32_t get_TK_KEY_QUESTION (void) {
  return TK_KEY_QUESTION;
}

int32_t get_TK_KEY_AT (void) {
  return TK_KEY_AT;
}

int32_t get_TK_KEY_LEFTBRACKET (void) {
  return TK_KEY_LEFTBRACKET;
}

int32_t get_TK_KEY_BACKSLASH (void) {
  return TK_KEY_BACKSLASH;
}

int32_t get_TK_KEY_RIGHTBRACKET (void) {
  return TK_KEY_RIGHTBRACKET;
}

int32_t get_TK_KEY_CARET (void) {
  return TK_KEY_CARET;
}

int32_t get_TK_KEY_UNDERSCORE (void) {
  return TK_KEY_UNDERSCORE;
}

int32_t get_TK_KEY_BACKQUOTE (void) {
  return TK_KEY_BACKQUOTE;
}

int32_t get_TK_KEY_a (void) {
  return TK_KEY_a;
}

int32_t get_TK_KEY_b (void) {
  return TK_KEY_b;
}

int32_t get_TK_KEY_c (void) {
  return TK_KEY_c;
}

int32_t get_TK_KEY_d (void) {
  return TK_KEY_d;
}

int32_t get_TK_KEY_e (void) {
  return TK_KEY_e;
}

int32_t get_TK_KEY_f (void) {
  return TK_KEY_f;
}

int32_t get_TK_KEY_g (void) {
  return TK_KEY_g;
}

int32_t get_TK_KEY_h (void) {
  return TK_KEY_h;
}

int32_t get_TK_KEY_i (void) {
  return TK_KEY_i;
}

int32_t get_TK_KEY_j (void) {
  return TK_KEY_j;
}

int32_t get_TK_KEY_k (void) {
  return TK_KEY_k;
}

int32_t get_TK_KEY_l (void) {
  return TK_KEY_l;
}

int32_t get_TK_KEY_m (void) {
  return TK_KEY_m;
}

int32_t get_TK_KEY_n (void) {
  return TK_KEY_n;
}

int32_t get_TK_KEY_o (void) {
  return TK_KEY_o;
}

int32_t get_TK_KEY_p (void) {
  return TK_KEY_p;
}

int32_t get_TK_KEY_q (void) {
  return TK_KEY_q;
}

int32_t get_TK_KEY_r (void) {
  return TK_KEY_r;
}

int32_t get_TK_KEY_s (void) {
  return TK_KEY_s;
}

int32_t get_TK_KEY_t (void) {
  return TK_KEY_t;
}

int32_t get_TK_KEY_u (void) {
  return TK_KEY_u;
}

int32_t get_TK_KEY_v (void) {
  return TK_KEY_v;
}

int32_t get_TK_KEY_w (void) {
  return TK_KEY_w;
}

int32_t get_TK_KEY_x (void) {
  return TK_KEY_x;
}

int32_t get_TK_KEY_y (void) {
  return TK_KEY_y;
}

int32_t get_TK_KEY_z (void) {
  return TK_KEY_z;
}

int32_t get_TK_KEY_A (void) {
  return TK_KEY_A;
}

int32_t get_TK_KEY_B (void) {
  return TK_KEY_B;
}

int32_t get_TK_KEY_C (void) {
  return TK_KEY_C;
}

int32_t get_TK_KEY_D (void) {
  return TK_KEY_D;
}

int32_t get_TK_KEY_E (void) {
  return TK_KEY_E;
}

int32_t get_TK_KEY_F (void) {
  return TK_KEY_F;
}

int32_t get_TK_KEY_G (void) {
  return TK_KEY_G;
}

int32_t get_TK_KEY_H (void) {
  return TK_KEY_H;
}

int32_t get_TK_KEY_I (void) {
  return TK_KEY_I;
}

int32_t get_TK_KEY_J (void) {
  return TK_KEY_J;
}

int32_t get_TK_KEY_K (void) {
  return TK_KEY_K;
}

int32_t get_TK_KEY_L (void) {
  return TK_KEY_L;
}

int32_t get_TK_KEY_M (void) {
  return TK_KEY_M;
}

int32_t get_TK_KEY_N (void) {
  return TK_KEY_N;
}

int32_t get_TK_KEY_O (void) {
  return TK_KEY_O;
}

int32_t get_TK_KEY_P (void) {
  return TK_KEY_P;
}

int32_t get_TK_KEY_Q (void) {
  return TK_KEY_Q;
}

int32_t get_TK_KEY_R (void) {
  return TK_KEY_R;
}

int32_t get_TK_KEY_S (void) {
  return TK_KEY_S;
}

int32_t get_TK_KEY_T (void) {
  return TK_KEY_T;
}

int32_t get_TK_KEY_U (void) {
  return TK_KEY_U;
}

int32_t get_TK_KEY_V (void) {
  return TK_KEY_V;
}

int32_t get_TK_KEY_W (void) {
  return TK_KEY_W;
}

int32_t get_TK_KEY_X (void) {
  return TK_KEY_X;
}

int32_t get_TK_KEY_Y (void) {
  return TK_KEY_Y;
}

int32_t get_TK_KEY_Z (void) {
  return TK_KEY_Z;
}

int32_t get_TK_KEY_DOT (void) {
  return TK_KEY_DOT;
}

int32_t get_TK_KEY_DELETE (void) {
  return TK_KEY_DELETE;
}

int32_t get_TK_KEY_LEFTBRACE (void) {
  return TK_KEY_LEFTBRACE;
}

int32_t get_TK_KEY_RIGHTBRACE (void) {
  return TK_KEY_RIGHTBRACE;
}

int32_t get_TK_KEY_LSHIFT (void) {
  return TK_KEY_LSHIFT;
}

int32_t get_TK_KEY_RSHIFT (void) {
  return TK_KEY_RSHIFT;
}

int32_t get_TK_KEY_LCTRL (void) {
  return TK_KEY_LCTRL;
}

int32_t get_TK_KEY_RCTRL (void) {
  return TK_KEY_RCTRL;
}

int32_t get_TK_KEY_LALT (void) {
  return TK_KEY_LALT;
}

int32_t get_TK_KEY_RALT (void) {
  return TK_KEY_RALT;
}

int32_t get_TK_KEY_CAPSLOCK (void) {
  return TK_KEY_CAPSLOCK;
}

int32_t get_TK_KEY_HOME (void) {
  return TK_KEY_HOME;
}

int32_t get_TK_KEY_END (void) {
  return TK_KEY_END;
}

int32_t get_TK_KEY_INSERT (void) {
  return TK_KEY_INSERT;
}

int32_t get_TK_KEY_UP (void) {
  return TK_KEY_UP;
}

int32_t get_TK_KEY_DOWN (void) {
  return TK_KEY_DOWN;
}

int32_t get_TK_KEY_LEFT (void) {
  return TK_KEY_LEFT;
}

int32_t get_TK_KEY_RIGHT (void) {
  return TK_KEY_RIGHT;
}

int32_t get_TK_KEY_PAGEUP (void) {
  return TK_KEY_PAGEUP;
}

int32_t get_TK_KEY_PAGEDOWN (void) {
  return TK_KEY_PAGEDOWN;
}

int32_t get_TK_KEY_F1 (void) {
  return TK_KEY_F1;
}

int32_t get_TK_KEY_F2 (void) {
  return TK_KEY_F2;
}

int32_t get_TK_KEY_F3 (void) {
  return TK_KEY_F3;
}

int32_t get_TK_KEY_F4 (void) {
  return TK_KEY_F4;
}

int32_t get_TK_KEY_F5 (void) {
  return TK_KEY_F5;
}

int32_t get_TK_KEY_F6 (void) {
  return TK_KEY_F6;
}

int32_t get_TK_KEY_F7 (void) {
  return TK_KEY_F7;
}

int32_t get_TK_KEY_F8 (void) {
  return TK_KEY_F8;
}

int32_t get_TK_KEY_F9 (void) {
  return TK_KEY_F9;
}

int32_t get_TK_KEY_F10 (void) {
  return TK_KEY_F10;
}

int32_t get_TK_KEY_F11 (void) {
  return TK_KEY_F11;
}

int32_t get_TK_KEY_F12 (void) {
  return TK_KEY_F12;
}

int32_t get_TK_KEY_MENU (void) {
  return TK_KEY_MENU;
}

int32_t get_TK_KEY_COMMAND (void) {
  return TK_KEY_COMMAND;
}

int32_t get_TK_KEY_BACK (void) {
  return TK_KEY_BACK;
}

int32_t get_TK_KEY_CANCEL (void) {
  return TK_KEY_CANCEL;
}

int32_t get_VALUE_TYPE_INVALID (void) {
  return VALUE_TYPE_INVALID;
}

int32_t get_VALUE_TYPE_BOOL (void) {
  return VALUE_TYPE_BOOL;
}

int32_t get_VALUE_TYPE_INT8 (void) {
  return VALUE_TYPE_INT8;
}

int32_t get_VALUE_TYPE_UINT8 (void) {
  return VALUE_TYPE_UINT8;
}

int32_t get_VALUE_TYPE_INT16 (void) {
  return VALUE_TYPE_INT16;
}

int32_t get_VALUE_TYPE_UINT16 (void) {
  return VALUE_TYPE_UINT16;
}

int32_t get_VALUE_TYPE_INT32 (void) {
  return VALUE_TYPE_INT32;
}

int32_t get_VALUE_TYPE_UINT32 (void) {
  return VALUE_TYPE_UINT32;
}

int32_t get_VALUE_TYPE_INT64 (void) {
  return VALUE_TYPE_INT64;
}

int32_t get_VALUE_TYPE_UINT64 (void) {
  return VALUE_TYPE_UINT64;
}

int32_t get_VALUE_TYPE_POINTER (void) {
  return VALUE_TYPE_POINTER;
}

int32_t get_VALUE_TYPE_FLOAT (void) {
  return VALUE_TYPE_FLOAT;
}

int32_t get_VALUE_TYPE_FLOAT32 (void) {
  return VALUE_TYPE_FLOAT32;
}

int32_t get_VALUE_TYPE_DOUBLE (void) {
  return VALUE_TYPE_DOUBLE;
}

int32_t get_VALUE_TYPE_STRING (void) {
  return VALUE_TYPE_STRING;
}

int32_t get_VALUE_TYPE_WSTRING (void) {
  return VALUE_TYPE_WSTRING;
}

int32_t get_VALUE_TYPE_OBJECT (void) {
  return VALUE_TYPE_OBJECT;
}

int32_t get_VALUE_TYPE_SIZED_STRING (void) {
  return VALUE_TYPE_SIZED_STRING;
}

int32_t get_VALUE_TYPE_BINARY (void) {
  return VALUE_TYPE_BINARY;
}

int32_t get_VALUE_TYPE_UBJSON (void) {
  return VALUE_TYPE_UBJSON;
}

int32_t get_VALUE_TYPE_TOKEN (void) {
  return VALUE_TYPE_TOKEN;
}

const char* get_STYLE_ID_BG_COLOR (void) {
  return STYLE_ID_BG_COLOR;
}

const char* get_STYLE_ID_FG_COLOR (void) {
  return STYLE_ID_FG_COLOR;
}

const char* get_STYLE_ID_MASK_COLOR (void) {
  return STYLE_ID_MASK_COLOR;
}

const char* get_STYLE_ID_FONT_NAME (void) {
  return STYLE_ID_FONT_NAME;
}

const char* get_STYLE_ID_FONT_SIZE (void) {
  return STYLE_ID_FONT_SIZE;
}

const char* get_STYLE_ID_FONT_STYLE (void) {
  return STYLE_ID_FONT_STYLE;
}

const char* get_STYLE_ID_TEXT_COLOR (void) {
  return STYLE_ID_TEXT_COLOR;
}

const char* get_STYLE_ID_HIGHLIGHT_FONT_NAME (void) {
  return STYLE_ID_HIGHLIGHT_FONT_NAME;
}

const char* get_STYLE_ID_HIGHLIGHT_FONT_SIZE (void) {
  return STYLE_ID_HIGHLIGHT_FONT_SIZE;
}

const char* get_STYLE_ID_HIGHLIGHT_TEXT_COLOR (void) {
  return STYLE_ID_HIGHLIGHT_TEXT_COLOR;
}

const char* get_STYLE_ID_TIPS_TEXT_COLOR (void) {
  return STYLE_ID_TIPS_TEXT_COLOR;
}

const char* get_STYLE_ID_TEXT_ALIGN_H (void) {
  return STYLE_ID_TEXT_ALIGN_H;
}

const char* get_STYLE_ID_TEXT_ALIGN_V (void) {
  return STYLE_ID_TEXT_ALIGN_V;
}

const char* get_STYLE_ID_BORDER_COLOR (void) {
  return STYLE_ID_BORDER_COLOR;
}

const char* get_STYLE_ID_BORDER_WIDTH (void) {
  return STYLE_ID_BORDER_WIDTH;
}

const char* get_STYLE_ID_BORDER (void) {
  return STYLE_ID_BORDER;
}

const char* get_STYLE_ID_BG_IMAGE (void) {
  return STYLE_ID_BG_IMAGE;
}

const char* get_STYLE_ID_BG_IMAGE_DRAW_TYPE (void) {
  return STYLE_ID_BG_IMAGE_DRAW_TYPE;
}

const char* get_STYLE_ID_ICON (void) {
  return STYLE_ID_ICON;
}

const char* get_STYLE_ID_FG_IMAGE (void) {
  return STYLE_ID_FG_IMAGE;
}

const char* get_STYLE_ID_FG_IMAGE_DRAW_TYPE (void) {
  return STYLE_ID_FG_IMAGE_DRAW_TYPE;
}

const char* get_STYLE_ID_SPACER (void) {
  return STYLE_ID_SPACER;
}

const char* get_STYLE_ID_MARGIN (void) {
  return STYLE_ID_MARGIN;
}

const char* get_STYLE_ID_MARGIN_LEFT (void) {
  return STYLE_ID_MARGIN_LEFT;
}

const char* get_STYLE_ID_MARGIN_RIGHT (void) {
  return STYLE_ID_MARGIN_RIGHT;
}

const char* get_STYLE_ID_MARGIN_TOP (void) {
  return STYLE_ID_MARGIN_TOP;
}

const char* get_STYLE_ID_MARGIN_BOTTOM (void) {
  return STYLE_ID_MARGIN_BOTTOM;
}

const char* get_STYLE_ID_ICON_AT (void) {
  return STYLE_ID_ICON_AT;
}

const char* get_STYLE_ID_ACTIVE_ICON (void) {
  return STYLE_ID_ACTIVE_ICON;
}

const char* get_STYLE_ID_X_OFFSET (void) {
  return STYLE_ID_X_OFFSET;
}

const char* get_STYLE_ID_Y_OFFSET (void) {
  return STYLE_ID_Y_OFFSET;
}

const char* get_STYLE_ID_SELECTED_BG_COLOR (void) {
  return STYLE_ID_SELECTED_BG_COLOR;
}

const char* get_STYLE_ID_SELECTED_FG_COLOR (void) {
  return STYLE_ID_SELECTED_FG_COLOR;
}

const char* get_STYLE_ID_SELECTED_TEXT_COLOR (void) {
  return STYLE_ID_SELECTED_TEXT_COLOR;
}

const char* get_STYLE_ID_ROUND_RADIUS (void) {
  return STYLE_ID_ROUND_RADIUS;
}

const char* get_STYLE_ID_ROUND_RADIUS_TOP_LETF (void) {
  return STYLE_ID_ROUND_RADIUS_TOP_LETF;
}

const char* get_STYLE_ID_ROUND_RADIUS_TOP_RIGHT (void) {
  return STYLE_ID_ROUND_RADIUS_TOP_RIGHT;
}

const char* get_STYLE_ID_ROUND_RADIUS_BOTTOM_LETF (void) {
  return STYLE_ID_ROUND_RADIUS_BOTTOM_LETF;
}

const char* get_STYLE_ID_ROUND_RADIUS_BOTTOM_RIGHT (void) {
  return STYLE_ID_ROUND_RADIUS_BOTTOM_RIGHT;
}

const char* get_STYLE_ID_CHILDREN_LAYOUT (void) {
  return STYLE_ID_CHILDREN_LAYOUT;
}

const char* get_STYLE_ID_SELF_LAYOUT (void) {
  return STYLE_ID_SELF_LAYOUT;
}

int32_t get_ALIGN_V_NONE (void) {
  return ALIGN_V_NONE;
}

int32_t get_ALIGN_V_MIDDLE (void) {
  return ALIGN_V_MIDDLE;
}

int32_t get_ALIGN_V_TOP (void) {
  return ALIGN_V_TOP;
}

int32_t get_ALIGN_V_BOTTOM (void) {
  return ALIGN_V_BOTTOM;
}

int32_t get_ALIGN_H_NONE (void) {
  return ALIGN_H_NONE;
}

int32_t get_ALIGN_H_CENTER (void) {
  return ALIGN_H_CENTER;
}

int32_t get_ALIGN_H_LEFT (void) {
  return ALIGN_H_LEFT;
}

int32_t get_ALIGN_H_RIGHT (void) {
  return ALIGN_H_RIGHT;
}

int32_t get_APP_MOBILE (void) {
  return APP_MOBILE;
}

int32_t get_APP_SIMULATOR (void) {
  return APP_SIMULATOR;
}

int32_t get_APP_DESKTOP (void) {
  return APP_DESKTOP;
}

int32_t get_BITMAP_FMT_NONE (void) {
  return BITMAP_FMT_NONE;
}

int32_t get_BITMAP_FMT_RGBA8888 (void) {
  return BITMAP_FMT_RGBA8888;
}

int32_t get_BITMAP_FMT_ABGR8888 (void) {
  return BITMAP_FMT_ABGR8888;
}

int32_t get_BITMAP_FMT_BGRA8888 (void) {
  return BITMAP_FMT_BGRA8888;
}

int32_t get_BITMAP_FMT_ARGB8888 (void) {
  return BITMAP_FMT_ARGB8888;
}

int32_t get_BITMAP_FMT_RGB565 (void) {
  return BITMAP_FMT_RGB565;
}

int32_t get_BITMAP_FMT_BGR565 (void) {
  return BITMAP_FMT_BGR565;
}

int32_t get_BITMAP_FMT_RGB888 (void) {
  return BITMAP_FMT_RGB888;
}

int32_t get_BITMAP_FMT_BGR888 (void) {
  return BITMAP_FMT_BGR888;
}

int32_t get_BITMAP_FMT_GRAY (void) {
  return BITMAP_FMT_GRAY;
}

int32_t get_BITMAP_FMT_MONO (void) {
  return BITMAP_FMT_MONO;
}

int32_t get_BITMAP_FLAG_NONE (void) {
  return BITMAP_FLAG_NONE;
}

int32_t get_BITMAP_FLAG_OPAQUE (void) {
  return BITMAP_FLAG_OPAQUE;
}

int32_t get_BITMAP_FLAG_IMMUTABLE (void) {
  return BITMAP_FLAG_IMMUTABLE;
}

int32_t get_BITMAP_FLAG_TEXTURE (void) {
  return BITMAP_FLAG_TEXTURE;
}

int32_t get_BITMAP_FLAG_CHANGED (void) {
  return BITMAP_FLAG_CHANGED;
}

int32_t get_BITMAP_FLAG_PREMULTI_ALPHA (void) {
  return BITMAP_FLAG_PREMULTI_ALPHA;
}

wh_t vgcanvas_t_get_prop_w (vgcanvas_t* obj) {
  return obj->w;
}

wh_t vgcanvas_t_get_prop_h (vgcanvas_t* obj) {
  return obj->h;
}

uint32_t vgcanvas_t_get_prop_stride (vgcanvas_t* obj) {
  return obj->stride;
}

float_t vgcanvas_t_get_prop_ratio (vgcanvas_t* obj) {
  return obj->ratio;
}

bool_t vgcanvas_t_get_prop_anti_alias (vgcanvas_t* obj) {
  return obj->anti_alias;
}

float_t vgcanvas_t_get_prop_line_width (vgcanvas_t* obj) {
  return obj->line_width;
}

float_t vgcanvas_t_get_prop_global_alpha (vgcanvas_t* obj) {
  return obj->global_alpha;
}

float_t vgcanvas_t_get_prop_miter_limit (vgcanvas_t* obj) {
  return obj->miter_limit;
}

const char* vgcanvas_t_get_prop_line_cap (vgcanvas_t* obj) {
  return obj->line_cap;
}

const char* vgcanvas_t_get_prop_line_join (vgcanvas_t* obj) {
  return obj->line_join;
}

char* vgcanvas_t_get_prop_font (vgcanvas_t* obj) {
  return obj->font;
}

float_t vgcanvas_t_get_prop_font_size (vgcanvas_t* obj) {
  return obj->font_size;
}

const char* vgcanvas_t_get_prop_text_align (vgcanvas_t* obj) {
  return obj->text_align;
}

const char* vgcanvas_t_get_prop_text_baseline (vgcanvas_t* obj) {
  return obj->text_baseline;
}

const char* get_VGCANVAS_LINE_CAP_ROUND (void) {
  return VGCANVAS_LINE_CAP_ROUND;
}

const char* get_VGCANVAS_LINE_CAP_SQUARE (void) {
  return VGCANVAS_LINE_CAP_SQUARE;
}

const char* get_VGCANVAS_LINE_JOIN_ROUND (void) {
  return VGCANVAS_LINE_JOIN_ROUND;
}

const char* get_VGCANVAS_LINE_JOIN_BEVEL (void) {
  return VGCANVAS_LINE_JOIN_BEVEL;
}

const char* get_VGCANVAS_LINE_JOIN_MITTER (void) {
  return VGCANVAS_LINE_JOIN_MITTER;
}

const char* get_WIDGET_PROP_EXEC (void) {
  return WIDGET_PROP_EXEC;
}

const char* get_WIDGET_PROP_X (void) {
  return WIDGET_PROP_X;
}

const char* get_WIDGET_PROP_Y (void) {
  return WIDGET_PROP_Y;
}

const char* get_WIDGET_PROP_W (void) {
  return WIDGET_PROP_W;
}

const char* get_WIDGET_PROP_H (void) {
  return WIDGET_PROP_H;
}

const char* get_WIDGET_PROP_INPUTING (void) {
  return WIDGET_PROP_INPUTING;
}

const char* get_WIDGET_PROP_CARET_X (void) {
  return WIDGET_PROP_CARET_X;
}

const char* get_WIDGET_PROP_CARET_Y (void) {
  return WIDGET_PROP_CARET_Y;
}

const char* get_WIDGET_PROP_DIRTY_RECT_TOLERANCE (void) {
  return WIDGET_PROP_DIRTY_RECT_TOLERANCE;
}

const char* get_WIDGET_PROP_BIDI (void) {
  return WIDGET_PROP_BIDI;
}

const char* get_WIDGET_PROP_CANVAS (void) {
  return WIDGET_PROP_CANVAS;
}

const char* get_WIDGET_PROP_LOCALIZE_OPTIONS (void) {
  return WIDGET_PROP_LOCALIZE_OPTIONS;
}

const char* get_WIDGET_PROP_NATIVE_WINDOW (void) {
  return WIDGET_PROP_NATIVE_WINDOW;
}

const char* get_WIDGET_PROP_HIGHLIGHT (void) {
  return WIDGET_PROP_HIGHLIGHT;
}

const char* get_WIDGET_PROP_BAR_SIZE (void) {
  return WIDGET_PROP_BAR_SIZE;
}

const char* get_WIDGET_PROP_OPACITY (void) {
  return WIDGET_PROP_OPACITY;
}

const char* get_WIDGET_PROP_MIN_W (void) {
  return WIDGET_PROP_MIN_W;
}

const char* get_WIDGET_PROP_MAX_W (void) {
  return WIDGET_PROP_MAX_W;
}

const char* get_WIDGET_PROP_AUTO_ADJUST_SIZE (void) {
  return WIDGET_PROP_AUTO_ADJUST_SIZE;
}

const char* get_WIDGET_PROP_SINGLE_INSTANCE (void) {
  return WIDGET_PROP_SINGLE_INSTANCE;
}

const char* get_WIDGET_PROP_CHILDREN_LAYOUT (void) {
  return WIDGET_PROP_CHILDREN_LAYOUT;
}

const char* get_WIDGET_PROP_LAYOUT (void) {
  return WIDGET_PROP_LAYOUT;
}

const char* get_WIDGET_PROP_SELF_LAYOUT (void) {
  return WIDGET_PROP_SELF_LAYOUT;
}

const char* get_WIDGET_PROP_LAYOUT_W (void) {
  return WIDGET_PROP_LAYOUT_W;
}

const char* get_WIDGET_PROP_LAYOUT_H (void) {
  return WIDGET_PROP_LAYOUT_H;
}

const char* get_WIDGET_PROP_VIRTUAL_W (void) {
  return WIDGET_PROP_VIRTUAL_W;
}

const char* get_WIDGET_PROP_VIRTUAL_H (void) {
  return WIDGET_PROP_VIRTUAL_H;
}

const char* get_WIDGET_PROP_NAME (void) {
  return WIDGET_PROP_NAME;
}

const char* get_WIDGET_PROP_TYPE (void) {
  return WIDGET_PROP_TYPE;
}

const char* get_WIDGET_PROP_CLOSABLE (void) {
  return WIDGET_PROP_CLOSABLE;
}

const char* get_WIDGET_PROP_POINTER_CURSOR (void) {
  return WIDGET_PROP_POINTER_CURSOR;
}

const char* get_WIDGET_PROP_VALUE (void) {
  return WIDGET_PROP_VALUE;
}

const char* get_WIDGET_PROP_LENGTH (void) {
  return WIDGET_PROP_LENGTH;
}

const char* get_WIDGET_PROP_LINE_WRAP (void) {
  return WIDGET_PROP_LINE_WRAP;
}

const char* get_WIDGET_PROP_TEXT (void) {
  return WIDGET_PROP_TEXT;
}

const char* get_WIDGET_PROP_TR_TEXT (void) {
  return WIDGET_PROP_TR_TEXT;
}

const char* get_WIDGET_PROP_STYLE (void) {
  return WIDGET_PROP_STYLE;
}

const char* get_WIDGET_PROP_ENABLE (void) {
  return WIDGET_PROP_ENABLE;
}

const char* get_WIDGET_PROP_FEEDBACK (void) {
  return WIDGET_PROP_FEEDBACK;
}

const char* get_WIDGET_PROP_FLOATING (void) {
  return WIDGET_PROP_FLOATING;
}

const char* get_WIDGET_PROP_MARGIN (void) {
  return WIDGET_PROP_MARGIN;
}

const char* get_WIDGET_PROP_SPACING (void) {
  return WIDGET_PROP_SPACING;
}

const char* get_WIDGET_PROP_LEFT_MARGIN (void) {
  return WIDGET_PROP_LEFT_MARGIN;
}

const char* get_WIDGET_PROP_RIGHT_MARGIN (void) {
  return WIDGET_PROP_RIGHT_MARGIN;
}

const char* get_WIDGET_PROP_TOP_MARGIN (void) {
  return WIDGET_PROP_TOP_MARGIN;
}

const char* get_WIDGET_PROP_BOTTOM_MARGIN (void) {
  return WIDGET_PROP_BOTTOM_MARGIN;
}

const char* get_WIDGET_PROP_STEP (void) {
  return WIDGET_PROP_STEP;
}

const char* get_WIDGET_PROP_VISIBLE (void) {
  return WIDGET_PROP_VISIBLE;
}

const char* get_WIDGET_PROP_SENSITIVE (void) {
  return WIDGET_PROP_SENSITIVE;
}

const char* get_WIDGET_PROP_ANIMATION (void) {
  return WIDGET_PROP_ANIMATION;
}

const char* get_WIDGET_PROP_ANIM_HINT (void) {
  return WIDGET_PROP_ANIM_HINT;
}

const char* get_WIDGET_PROP_FULLSCREEN (void) {
  return WIDGET_PROP_FULLSCREEN;
}

const char* get_WIDGET_PROP_DISABLE_ANIM (void) {
  return WIDGET_PROP_DISABLE_ANIM;
}

const char* get_WIDGET_PROP_OPEN_ANIM_HINT (void) {
  return WIDGET_PROP_OPEN_ANIM_HINT;
}

const char* get_WIDGET_PROP_CLOSE_ANIM_HINT (void) {
  return WIDGET_PROP_CLOSE_ANIM_HINT;
}

const char* get_WIDGET_PROP_MIN (void) {
  return WIDGET_PROP_MIN;
}

const char* get_WIDGET_PROP_ACTION_TEXT (void) {
  return WIDGET_PROP_ACTION_TEXT;
}

const char* get_WIDGET_PROP_TIPS (void) {
  return WIDGET_PROP_TIPS;
}

const char* get_WIDGET_PROP_TR_TIPS (void) {
  return WIDGET_PROP_TR_TIPS;
}

const char* get_WIDGET_PROP_INPUT_TYPE (void) {
  return WIDGET_PROP_INPUT_TYPE;
}

const char* get_WIDGET_PROP_KEYBOARD (void) {
  return WIDGET_PROP_KEYBOARD;
}

const char* get_WIDGET_PROP_DEFAULT_FOCUSED_CHILD (void) {
  return WIDGET_PROP_DEFAULT_FOCUSED_CHILD;
}

const char* get_WIDGET_PROP_READONLY (void) {
  return WIDGET_PROP_READONLY;
}

const char* get_WIDGET_PROP_CANCELABLE (void) {
  return WIDGET_PROP_CANCELABLE;
}

const char* get_WIDGET_PROP_PASSWORD_VISIBLE (void) {
  return WIDGET_PROP_PASSWORD_VISIBLE;
}

const char* get_WIDGET_PROP_ACTIVE (void) {
  return WIDGET_PROP_ACTIVE;
}

const char* get_WIDGET_PROP_VERTICAL (void) {
  return WIDGET_PROP_VERTICAL;
}

const char* get_WIDGET_PROP_SHOW_TEXT (void) {
  return WIDGET_PROP_SHOW_TEXT;
}

const char* get_WIDGET_PROP_XOFFSET (void) {
  return WIDGET_PROP_XOFFSET;
}

const char* get_WIDGET_PROP_YOFFSET (void) {
  return WIDGET_PROP_YOFFSET;
}

const char* get_WIDGET_PROP_ALIGN_V (void) {
  return WIDGET_PROP_ALIGN_V;
}

const char* get_WIDGET_PROP_ALIGN_H (void) {
  return WIDGET_PROP_ALIGN_H;
}

const char* get_WIDGET_PROP_AUTO_PLAY (void) {
  return WIDGET_PROP_AUTO_PLAY;
}

const char* get_WIDGET_PROP_LOOP (void) {
  return WIDGET_PROP_LOOP;
}

const char* get_WIDGET_PROP_AUTO_FIX (void) {
  return WIDGET_PROP_AUTO_FIX;
}

const char* get_WIDGET_PROP_SELECT_NONE_WHEN_FOCUSED (void) {
  return WIDGET_PROP_SELECT_NONE_WHEN_FOCUSED;
}

const char* get_WIDGET_PROP_OPEN_IM_WHEN_FOCUSED (void) {
  return WIDGET_PROP_OPEN_IM_WHEN_FOCUSED;
}

const char* get_WIDGET_PROP_CLOSE_IM_WHEN_BLURED (void) {
  return WIDGET_PROP_CLOSE_IM_WHEN_BLURED;
}

const char* get_WIDGET_PROP_X_MIN (void) {
  return WIDGET_PROP_X_MIN;
}

const char* get_WIDGET_PROP_X_MAX (void) {
  return WIDGET_PROP_X_MAX;
}

const char* get_WIDGET_PROP_Y_MIN (void) {
  return WIDGET_PROP_Y_MIN;
}

const char* get_WIDGET_PROP_Y_MAX (void) {
  return WIDGET_PROP_Y_MAX;
}

const char* get_WIDGET_PROP_MAX (void) {
  return WIDGET_PROP_MAX;
}

const char* get_WIDGET_PROP_GRAB_KEYS (void) {
  return WIDGET_PROP_GRAB_KEYS;
}

const char* get_WIDGET_PROP_ROW (void) {
  return WIDGET_PROP_ROW;
}

const char* get_WIDGET_PROP_STATE_FOR_STYLE (void) {
  return WIDGET_PROP_STATE_FOR_STYLE;
}

const char* get_WIDGET_PROP_THEME (void) {
  return WIDGET_PROP_THEME;
}

const char* get_WIDGET_PROP_STAGE (void) {
  return WIDGET_PROP_STAGE;
}

const char* get_WIDGET_PROP_IMAGE_MANAGER (void) {
  return WIDGET_PROP_IMAGE_MANAGER;
}

const char* get_WIDGET_PROP_ASSETS_MANAGER (void) {
  return WIDGET_PROP_ASSETS_MANAGER;
}

const char* get_WIDGET_PROP_LOCALE_INFO (void) {
  return WIDGET_PROP_LOCALE_INFO;
}

const char* get_WIDGET_PROP_FONT_MANAGER (void) {
  return WIDGET_PROP_FONT_MANAGER;
}

const char* get_WIDGET_PROP_THEME_OBJ (void) {
  return WIDGET_PROP_THEME_OBJ;
}

const char* get_WIDGET_PROP_DEFAULT_THEME_OBJ (void) {
  return WIDGET_PROP_DEFAULT_THEME_OBJ;
}

const char* get_WIDGET_PROP_ITEM_WIDTH (void) {
  return WIDGET_PROP_ITEM_WIDTH;
}

const char* get_WIDGET_PROP_ITEM_HEIGHT (void) {
  return WIDGET_PROP_ITEM_HEIGHT;
}

const char* get_WIDGET_PROP_DEFAULT_ITEM_HEIGHT (void) {
  return WIDGET_PROP_DEFAULT_ITEM_HEIGHT;
}

const char* get_WIDGET_PROP_XSLIDABLE (void) {
  return WIDGET_PROP_XSLIDABLE;
}

const char* get_WIDGET_PROP_YSLIDABLE (void) {
  return WIDGET_PROP_YSLIDABLE;
}

const char* get_WIDGET_PROP_REPEAT (void) {
  return WIDGET_PROP_REPEAT;
}

const char* get_WIDGET_PROP_LONG_PRESS_TIME (void) {
  return WIDGET_PROP_LONG_PRESS_TIME;
}

const char* get_WIDGET_PROP_ENABLE_LONG_PRESS (void) {
  return WIDGET_PROP_ENABLE_LONG_PRESS;
}

const char* get_WIDGET_PROP_CLICK_THROUGH (void) {
  return WIDGET_PROP_CLICK_THROUGH;
}

const char* get_WIDGET_PROP_ANIMATABLE (void) {
  return WIDGET_PROP_ANIMATABLE;
}

const char* get_WIDGET_PROP_AUTO_HIDE_SCROLL_BAR (void) {
  return WIDGET_PROP_AUTO_HIDE_SCROLL_BAR;
}

const char* get_WIDGET_PROP_IMAGE (void) {
  return WIDGET_PROP_IMAGE;
}

const char* get_WIDGET_PROP_FORMAT (void) {
  return WIDGET_PROP_FORMAT;
}

const char* get_WIDGET_PROP_DRAW_TYPE (void) {
  return WIDGET_PROP_DRAW_TYPE;
}

const char* get_WIDGET_PROP_SELECTABLE (void) {
  return WIDGET_PROP_SELECTABLE;
}

const char* get_WIDGET_PROP_CLICKABLE (void) {
  return WIDGET_PROP_CLICKABLE;
}

const char* get_WIDGET_PROP_SCALE_X (void) {
  return WIDGET_PROP_SCALE_X;
}

const char* get_WIDGET_PROP_SCALE_Y (void) {
  return WIDGET_PROP_SCALE_Y;
}

const char* get_WIDGET_PROP_ANCHOR_X (void) {
  return WIDGET_PROP_ANCHOR_X;
}

const char* get_WIDGET_PROP_ANCHOR_Y (void) {
  return WIDGET_PROP_ANCHOR_Y;
}

const char* get_WIDGET_PROP_ROTATION (void) {
  return WIDGET_PROP_ROTATION;
}

const char* get_WIDGET_PROP_COMPACT (void) {
  return WIDGET_PROP_COMPACT;
}

const char* get_WIDGET_PROP_SCROLLABLE (void) {
  return WIDGET_PROP_SCROLLABLE;
}

const char* get_WIDGET_PROP_ICON (void) {
  return WIDGET_PROP_ICON;
}

const char* get_WIDGET_PROP_OPTIONS (void) {
  return WIDGET_PROP_OPTIONS;
}

const char* get_WIDGET_PROP_SELECTED (void) {
  return WIDGET_PROP_SELECTED;
}

const char* get_WIDGET_PROP_CHECKED (void) {
  return WIDGET_PROP_CHECKED;
}

const char* get_WIDGET_PROP_ACTIVE_ICON (void) {
  return WIDGET_PROP_ACTIVE_ICON;
}

const char* get_WIDGET_PROP_LOAD_UI (void) {
  return WIDGET_PROP_LOAD_UI;
}

const char* get_WIDGET_PROP_OPEN_WINDOW (void) {
  return WIDGET_PROP_OPEN_WINDOW;
}

const char* get_WIDGET_PROP_SELECTED_INDEX (void) {
  return WIDGET_PROP_SELECTED_INDEX;
}

const char* get_WIDGET_PROP_CLOSE_WHEN_CLICK (void) {
  return WIDGET_PROP_CLOSE_WHEN_CLICK;
}

const char* get_WIDGET_PROP_CLOSE_WHEN_CLICK_OUTSIDE (void) {
  return WIDGET_PROP_CLOSE_WHEN_CLICK_OUTSIDE;
}

const char* get_WIDGET_PROP_LINE_GAP (void) {
  return WIDGET_PROP_LINE_GAP;
}

const char* get_WIDGET_PROP_BG_COLOR (void) {
  return WIDGET_PROP_BG_COLOR;
}

const char* get_WIDGET_PROP_BORDER_COLOR (void) {
  return WIDGET_PROP_BORDER_COLOR;
}

const char* get_WIDGET_PROP_DELAY (void) {
  return WIDGET_PROP_DELAY;
}

const char* get_WIDGET_PROP_IS_KEYBOARD (void) {
  return WIDGET_PROP_IS_KEYBOARD;
}

const char* get_WIDGET_PROP_FOCUSED (void) {
  return WIDGET_PROP_FOCUSED;
}

const char* get_WIDGET_PROP_FOCUS (void) {
  return WIDGET_PROP_FOCUS;
}

const char* get_WIDGET_PROP_FOCUSABLE (void) {
  return WIDGET_PROP_FOCUSABLE;
}

const char* get_WIDGET_PROP_WITH_FOCUS_STATE (void) {
  return WIDGET_PROP_WITH_FOCUS_STATE;
}

const char* get_WIDGET_PROP_MOVE_FOCUS_PREV_KEY (void) {
  return WIDGET_PROP_MOVE_FOCUS_PREV_KEY;
}

const char* get_WIDGET_PROP_MOVE_FOCUS_NEXT_KEY (void) {
  return WIDGET_PROP_MOVE_FOCUS_NEXT_KEY;
}

const char* get_WIDGET_PROP_MOVE_FOCUS_UP_KEY (void) {
  return WIDGET_PROP_MOVE_FOCUS_UP_KEY;
}

const char* get_WIDGET_PROP_MOVE_FOCUS_DOWN_KEY (void) {
  return WIDGET_PROP_MOVE_FOCUS_DOWN_KEY;
}

const char* get_WIDGET_PROP_MOVE_FOCUS_LEFT_KEY (void) {
  return WIDGET_PROP_MOVE_FOCUS_LEFT_KEY;
}

const char* get_WIDGET_PROP_MOVE_FOCUS_RIGHT_KEY (void) {
  return WIDGET_PROP_MOVE_FOCUS_RIGHT_KEY;
}

const char* get_WIDGET_TYPE_NONE (void) {
  return WIDGET_TYPE_NONE;
}

const char* get_WIDGET_TYPE_WINDOW_MANAGER (void) {
  return WIDGET_TYPE_WINDOW_MANAGER;
}

const char* get_WIDGET_TYPE_NORMAL_WINDOW (void) {
  return WIDGET_TYPE_NORMAL_WINDOW;
}

const char* get_WIDGET_TYPE_OVERLAY (void) {
  return WIDGET_TYPE_OVERLAY;
}

const char* get_WIDGET_TYPE_TOOL_BAR (void) {
  return WIDGET_TYPE_TOOL_BAR;
}

const char* get_WIDGET_TYPE_DIALOG (void) {
  return WIDGET_TYPE_DIALOG;
}

const char* get_WIDGET_TYPE_POPUP (void) {
  return WIDGET_TYPE_POPUP;
}

const char* get_WIDGET_TYPE_SYSTEM_BAR (void) {
  return WIDGET_TYPE_SYSTEM_BAR;
}

const char* get_WIDGET_TYPE_SYSTEM_BAR_BOTTOM (void) {
  return WIDGET_TYPE_SYSTEM_BAR_BOTTOM;
}

const char* get_WIDGET_TYPE_SPRITE (void) {
  return WIDGET_TYPE_SPRITE;
}

const char* get_WIDGET_TYPE_KEYBOARD (void) {
  return WIDGET_TYPE_KEYBOARD;
}

const char* get_WIDGET_TYPE_DND (void) {
  return WIDGET_TYPE_DND;
}

const char* get_WIDGET_TYPE_LABEL (void) {
  return WIDGET_TYPE_LABEL;
}

const char* get_WIDGET_TYPE_BUTTON (void) {
  return WIDGET_TYPE_BUTTON;
}

const char* get_WIDGET_TYPE_IMAGE (void) {
  return WIDGET_TYPE_IMAGE;
}

const char* get_WIDGET_TYPE_EDIT (void) {
  return WIDGET_TYPE_EDIT;
}

const char* get_WIDGET_TYPE_PROGRESS_BAR (void) {
  return WIDGET_TYPE_PROGRESS_BAR;
}

const char* get_WIDGET_TYPE_GROUP_BOX (void) {
  return WIDGET_TYPE_GROUP_BOX;
}

const char* get_WIDGET_TYPE_CHECK_BUTTON (void) {
  return WIDGET_TYPE_CHECK_BUTTON;
}

const char* get_WIDGET_TYPE_RADIO_BUTTON (void) {
  return WIDGET_TYPE_RADIO_BUTTON;
}

const char* get_WIDGET_TYPE_DIALOG_TITLE (void) {
  return WIDGET_TYPE_DIALOG_TITLE;
}

const char* get_WIDGET_TYPE_DIALOG_CLIENT (void) {
  return WIDGET_TYPE_DIALOG_CLIENT;
}

const char* get_WIDGET_TYPE_SLIDER (void) {
  return WIDGET_TYPE_SLIDER;
}

const char* get_WIDGET_TYPE_VIEW (void) {
  return WIDGET_TYPE_VIEW;
}

const char* get_WIDGET_TYPE_COMBO_BOX (void) {
  return WIDGET_TYPE_COMBO_BOX;
}

const char* get_WIDGET_TYPE_COMBO_BOX_ITEM (void) {
  return WIDGET_TYPE_COMBO_BOX_ITEM;
}

const char* get_WIDGET_TYPE_SLIDE_VIEW (void) {
  return WIDGET_TYPE_SLIDE_VIEW;
}

const char* get_WIDGET_TYPE_SLIDE_INDICATOR (void) {
  return WIDGET_TYPE_SLIDE_INDICATOR;
}

const char* get_WIDGET_TYPE_SLIDE_INDICATOR_ARC (void) {
  return WIDGET_TYPE_SLIDE_INDICATOR_ARC;
}

const char* get_WIDGET_TYPE_PAGES (void) {
  return WIDGET_TYPE_PAGES;
}

const char* get_WIDGET_TYPE_TAB_BUTTON (void) {
  return WIDGET_TYPE_TAB_BUTTON;
}

const char* get_WIDGET_TYPE_TAB_CONTROL (void) {
  return WIDGET_TYPE_TAB_CONTROL;
}

const char* get_WIDGET_TYPE_TAB_BUTTON_GROUP (void) {
  return WIDGET_TYPE_TAB_BUTTON_GROUP;
}

const char* get_WIDGET_TYPE_BUTTON_GROUP (void) {
  return WIDGET_TYPE_BUTTON_GROUP;
}

const char* get_WIDGET_TYPE_CANDIDATES (void) {
  return WIDGET_TYPE_CANDIDATES;
}

const char* get_WIDGET_TYPE_SPIN_BOX (void) {
  return WIDGET_TYPE_SPIN_BOX;
}

const char* get_WIDGET_TYPE_DRAGGER (void) {
  return WIDGET_TYPE_DRAGGER;
}

const char* get_WIDGET_TYPE_SCROLL_BAR (void) {
  return WIDGET_TYPE_SCROLL_BAR;
}

const char* get_WIDGET_TYPE_SCROLL_BAR_DESKTOP (void) {
  return WIDGET_TYPE_SCROLL_BAR_DESKTOP;
}

const char* get_WIDGET_TYPE_SCROLL_BAR_MOBILE (void) {
  return WIDGET_TYPE_SCROLL_BAR_MOBILE;
}

const char* get_WIDGET_TYPE_SCROLL_VIEW (void) {
  return WIDGET_TYPE_SCROLL_VIEW;
}

const char* get_WIDGET_TYPE_LIST_VIEW (void) {
  return WIDGET_TYPE_LIST_VIEW;
}

const char* get_WIDGET_TYPE_LIST_VIEW_H (void) {
  return WIDGET_TYPE_LIST_VIEW_H;
}

const char* get_WIDGET_TYPE_LIST_ITEM (void) {
  return WIDGET_TYPE_LIST_ITEM;
}

const char* get_WIDGET_TYPE_COLOR_PICKER (void) {
  return WIDGET_TYPE_COLOR_PICKER;
}

const char* get_WIDGET_TYPE_COLOR_COMPONENT (void) {
  return WIDGET_TYPE_COLOR_COMPONENT;
}

const char* get_WIDGET_TYPE_COLOR_TILE (void) {
  return WIDGET_TYPE_COLOR_TILE;
}

const char* get_WIDGET_TYPE_CLIP_VIEW (void) {
  return WIDGET_TYPE_CLIP_VIEW;
}

const char* get_WIDGET_TYPE_RICH_TEXT (void) {
  return WIDGET_TYPE_RICH_TEXT;
}

const char* get_WIDGET_TYPE_APP_BAR (void) {
  return WIDGET_TYPE_APP_BAR;
}

const char* get_WIDGET_TYPE_GRID (void) {
  return WIDGET_TYPE_GRID;
}

const char* get_WIDGET_TYPE_GRID_ITEM (void) {
  return WIDGET_TYPE_GRID_ITEM;
}

const char* get_WIDGET_TYPE_ROW (void) {
  return WIDGET_TYPE_ROW;
}

const char* get_WIDGET_TYPE_COLUMN (void) {
  return WIDGET_TYPE_COLUMN;
}

const char* get_WIDGET_TYPE_CALIBRATION_WIN (void) {
  return WIDGET_TYPE_CALIBRATION_WIN;
}

int32_t get_WINDOW_STAGE_NONE (void) {
  return WINDOW_STAGE_NONE;
}

int32_t get_WINDOW_STAGE_CREATED (void) {
  return WINDOW_STAGE_CREATED;
}

int32_t get_WINDOW_STAGE_OPENED (void) {
  return WINDOW_STAGE_OPENED;
}

int32_t get_WINDOW_STAGE_CLOSED (void) {
  return WINDOW_STAGE_CLOSED;
}

int32_t get_WINDOW_STAGE_SUSPEND (void) {
  return WINDOW_STAGE_SUSPEND;
}

int32_t get_WINDOW_CLOSABLE_YES (void) {
  return WINDOW_CLOSABLE_YES;
}

int32_t get_WINDOW_CLOSABLE_NO (void) {
  return WINDOW_CLOSABLE_NO;
}

int32_t get_WINDOW_CLOSABLE_CONFIRM (void) {
  return WINDOW_CLOSABLE_CONFIRM;
}

const char* get_WIDGET_STATE_NONE (void) {
  return WIDGET_STATE_NONE;
}

const char* get_WIDGET_STATE_NORMAL (void) {
  return WIDGET_STATE_NORMAL;
}

const char* get_WIDGET_STATE_CHANGED (void) {
  return WIDGET_STATE_CHANGED;
}

const char* get_WIDGET_STATE_PRESSED (void) {
  return WIDGET_STATE_PRESSED;
}

const char* get_WIDGET_STATE_OVER (void) {
  return WIDGET_STATE_OVER;
}

const char* get_WIDGET_STATE_DISABLE (void) {
  return WIDGET_STATE_DISABLE;
}

const char* get_WIDGET_STATE_FOCUSED (void) {
  return WIDGET_STATE_FOCUSED;
}

const char* get_WIDGET_STATE_CHECKED (void) {
  return WIDGET_STATE_CHECKED;
}

const char* get_WIDGET_STATE_UNCHECKED (void) {
  return WIDGET_STATE_UNCHECKED;
}

const char* get_WIDGET_STATE_EMPTY (void) {
  return WIDGET_STATE_EMPTY;
}

const char* get_WIDGET_STATE_EMPTY_FOCUS (void) {
  return WIDGET_STATE_EMPTY_FOCUS;
}

const char* get_WIDGET_STATE_ERROR (void) {
  return WIDGET_STATE_ERROR;
}

const char* get_WIDGET_STATE_SELECTED (void) {
  return WIDGET_STATE_SELECTED;
}

const char* get_WIDGET_STATE_NORMAL_OF_CHECKED (void) {
  return WIDGET_STATE_NORMAL_OF_CHECKED;
}

const char* get_WIDGET_STATE_PRESSED_OF_CHECKED (void) {
  return WIDGET_STATE_PRESSED_OF_CHECKED;
}

const char* get_WIDGET_STATE_OVER_OF_CHECKED (void) {
  return WIDGET_STATE_OVER_OF_CHECKED;
}

const char* get_WIDGET_STATE_DISABLE_OF_CHECKED (void) {
  return WIDGET_STATE_DISABLE_OF_CHECKED;
}

const char* get_WIDGET_STATE_FOCUSED_OF_CHECKED (void) {
  return WIDGET_STATE_FOCUSED_OF_CHECKED;
}

const char* get_WIDGET_STATE_NORMAL_OF_ACTIVE (void) {
  return WIDGET_STATE_NORMAL_OF_ACTIVE;
}

const char* get_WIDGET_STATE_PRESSED_OF_ACTIVE (void) {
  return WIDGET_STATE_PRESSED_OF_ACTIVE;
}

const char* get_WIDGET_STATE_OVER_OF_ACTIVE (void) {
  return WIDGET_STATE_OVER_OF_ACTIVE;
}

const char* get_WIDGET_STATE_DISABLE_OF_ACTIVE (void) {
  return WIDGET_STATE_DISABLE_OF_ACTIVE;
}

const char* get_WIDGET_STATE_FOCUSED_OF_ACTIVE (void) {
  return WIDGET_STATE_FOCUSED_OF_ACTIVE;
}

const char* get_WIDGET_CURSOR_DEFAULT (void) {
  return WIDGET_CURSOR_DEFAULT;
}

const char* get_WIDGET_CURSOR_EDIT (void) {
  return WIDGET_CURSOR_EDIT;
}

const char* get_WIDGET_CURSOR_HAND (void) {
  return WIDGET_CURSOR_HAND;
}

const char* get_WIDGET_CURSOR_WAIT (void) {
  return WIDGET_CURSOR_WAIT;
}

const char* get_WIDGET_CURSOR_CROSS (void) {
  return WIDGET_CURSOR_CROSS;
}

const char* get_WIDGET_CURSOR_NO (void) {
  return WIDGET_CURSOR_NO;
}

const char* get_WIDGET_CURSOR_SIZENWSE (void) {
  return WIDGET_CURSOR_SIZENWSE;
}

const char* get_WIDGET_CURSOR_SIZENESW (void) {
  return WIDGET_CURSOR_SIZENESW;
}

const char* get_WIDGET_CURSOR_SIZEWE (void) {
  return WIDGET_CURSOR_SIZEWE;
}

const char* get_WIDGET_CURSOR_SIZENS (void) {
  return WIDGET_CURSOR_SIZENS;
}

const char* get_WIDGET_CURSOR_SIZEALL (void) {
  return WIDGET_CURSOR_SIZEALL;
}

xy_t widget_t_get_prop_x (widget_t* obj) {
  return obj->x;
}

xy_t widget_t_get_prop_y (widget_t* obj) {
  return obj->y;
}

wh_t widget_t_get_prop_w (widget_t* obj) {
  return obj->w;
}

wh_t widget_t_get_prop_h (widget_t* obj) {
  return obj->h;
}

char* widget_t_get_prop_name (widget_t* obj) {
  return obj->name;
}

char* widget_t_get_prop_pointer_cursor (widget_t* obj) {
  return obj->pointer_cursor;
}

char* widget_t_get_prop_tr_text (widget_t* obj) {
  return obj->tr_text;
}

char* widget_t_get_prop_style (widget_t* obj) {
  return obj->style;
}

char* widget_t_get_prop_animation (widget_t* obj) {
  return obj->animation;
}

bool_t widget_t_get_prop_enable (widget_t* obj) {
  return obj->enable;
}

bool_t widget_t_get_prop_feedback (widget_t* obj) {
  return obj->feedback;
}

bool_t widget_t_get_prop_visible (widget_t* obj) {
  return obj->visible;
}

bool_t widget_t_get_prop_sensitive (widget_t* obj) {
  return obj->sensitive;
}

bool_t widget_t_get_prop_focusable (widget_t* obj) {
  return obj->focusable;
}

bool_t widget_t_get_prop_with_focus_state (widget_t* obj) {
  return obj->with_focus_state;
}

bool_t widget_t_get_prop_auto_adjust_size (widget_t* obj) {
  return obj->auto_adjust_size;
}

bool_t widget_t_get_prop_floating (widget_t* obj) {
  return obj->floating;
}

uint16_t widget_t_get_prop_dirty_rect_tolerance (widget_t* obj) {
  return obj->dirty_rect_tolerance;
}

widget_t* widget_t_get_prop_parent (widget_t* obj) {
  return obj->parent;
}

int32_t get_RET_OK (void) {
  return RET_OK;
}

int32_t get_RET_OOM (void) {
  return RET_OOM;
}

int32_t get_RET_FAIL (void) {
  return RET_FAIL;
}

int32_t get_RET_NOT_IMPL (void) {
  return RET_NOT_IMPL;
}

int32_t get_RET_QUIT (void) {
  return RET_QUIT;
}

int32_t get_RET_FOUND (void) {
  return RET_FOUND;
}

int32_t get_RET_BUSY (void) {
  return RET_BUSY;
}

int32_t get_RET_REMOVE (void) {
  return RET_REMOVE;
}

int32_t get_RET_REPEAT (void) {
  return RET_REPEAT;
}

int32_t get_RET_NOT_FOUND (void) {
  return RET_NOT_FOUND;
}

int32_t get_RET_DONE (void) {
  return RET_DONE;
}

int32_t get_RET_STOP (void) {
  return RET_STOP;
}

int32_t get_RET_SKIP (void) {
  return RET_SKIP;
}

int32_t get_RET_CONTINUE (void) {
  return RET_CONTINUE;
}

int32_t get_RET_OBJECT_CHANGED (void) {
  return RET_OBJECT_CHANGED;
}

int32_t get_RET_ITEMS_CHANGED (void) {
  return RET_ITEMS_CHANGED;
}

int32_t get_RET_BAD_PARAMS (void) {
  return RET_BAD_PARAMS;
}

int32_t get_RET_TIMEOUT (void) {
  return RET_TIMEOUT;
}

int32_t get_RET_CRC (void) {
  return RET_CRC;
}

int32_t get_RET_IO (void) {
  return RET_IO;
}

int32_t get_RET_EOS (void) {
  return RET_EOS;
}

int32_t get_BIDI_TYPE_AUTO (void) {
  return BIDI_TYPE_AUTO;
}

int32_t get_BIDI_TYPE_LTR (void) {
  return BIDI_TYPE_LTR;
}

int32_t get_BIDI_TYPE_RTL (void) {
  return BIDI_TYPE_RTL;
}

int32_t get_BIDI_TYPE_LRO (void) {
  return BIDI_TYPE_LRO;
}

int32_t get_BIDI_TYPE_RLO (void) {
  return BIDI_TYPE_RLO;
}

int32_t get_BIDI_TYPE_WLTR (void) {
  return BIDI_TYPE_WLTR;
}

int32_t get_BIDI_TYPE_WRTL (void) {
  return BIDI_TYPE_WRTL;
}

const char* get_OBJECT_PROP_SIZE (void) {
  return OBJECT_PROP_SIZE;
}

const char* get_OBJECT_PROP_CHECKED (void) {
  return OBJECT_PROP_CHECKED;
}

const char* get_OBJECT_CMD_SAVE (void) {
  return OBJECT_CMD_SAVE;
}

const char* get_OBJECT_CMD_RELOAD (void) {
  return OBJECT_CMD_RELOAD;
}

const char* get_OBJECT_CMD_MOVE_UP (void) {
  return OBJECT_CMD_MOVE_UP;
}

const char* get_OBJECT_CMD_MOVE_DOWN (void) {
  return OBJECT_CMD_MOVE_DOWN;
}

const char* get_OBJECT_CMD_REMOVE (void) {
  return OBJECT_CMD_REMOVE;
}

const char* get_OBJECT_CMD_REMOVE_CHECKED (void) {
  return OBJECT_CMD_REMOVE_CHECKED;
}

const char* get_OBJECT_CMD_CLEAR (void) {
  return OBJECT_CMD_CLEAR;
}

const char* get_OBJECT_CMD_ADD (void) {
  return OBJECT_CMD_ADD;
}

const char* get_OBJECT_CMD_DETAIL (void) {
  return OBJECT_CMD_DETAIL;
}

const char* get_OBJECT_CMD_EDIT (void) {
  return OBJECT_CMD_EDIT;
}

int32_t get_IMAGE_DRAW_DEFAULT (void) {
  return IMAGE_DRAW_DEFAULT;
}

int32_t get_IMAGE_DRAW_CENTER (void) {
  return IMAGE_DRAW_CENTER;
}

int32_t get_IMAGE_DRAW_ICON (void) {
  return IMAGE_DRAW_ICON;
}

int32_t get_IMAGE_DRAW_SCALE (void) {
  return IMAGE_DRAW_SCALE;
}

int32_t get_IMAGE_DRAW_SCALE_AUTO (void) {
  return IMAGE_DRAW_SCALE_AUTO;
}

int32_t get_IMAGE_DRAW_SCALE_DOWN (void) {
  return IMAGE_DRAW_SCALE_DOWN;
}

int32_t get_IMAGE_DRAW_SCALE_W (void) {
  return IMAGE_DRAW_SCALE_W;
}

int32_t get_IMAGE_DRAW_SCALE_H (void) {
  return IMAGE_DRAW_SCALE_H;
}

int32_t get_IMAGE_DRAW_REPEAT (void) {
  return IMAGE_DRAW_REPEAT;
}

int32_t get_IMAGE_DRAW_REPEAT_X (void) {
  return IMAGE_DRAW_REPEAT_X;
}

int32_t get_IMAGE_DRAW_REPEAT_Y (void) {
  return IMAGE_DRAW_REPEAT_Y;
}

int32_t get_IMAGE_DRAW_REPEAT_Y_INVERSE (void) {
  return IMAGE_DRAW_REPEAT_Y_INVERSE;
}

int32_t get_IMAGE_DRAW_PATCH9 (void) {
  return IMAGE_DRAW_PATCH9;
}

int32_t get_IMAGE_DRAW_PATCH3_X (void) {
  return IMAGE_DRAW_PATCH3_X;
}

int32_t get_IMAGE_DRAW_PATCH3_Y (void) {
  return IMAGE_DRAW_PATCH3_Y;
}

int32_t get_IMAGE_DRAW_PATCH3_X_SCALE_Y (void) {
  return IMAGE_DRAW_PATCH3_X_SCALE_Y;
}

int32_t get_IMAGE_DRAW_PATCH3_Y_SCALE_X (void) {
  return IMAGE_DRAW_PATCH3_Y_SCALE_X;
}

int32_t get_IMAGE_DRAW_REPEAT9 (void) {
  return IMAGE_DRAW_REPEAT9;
}

int32_t get_IMAGE_DRAW_REPEAT3_X (void) {
  return IMAGE_DRAW_REPEAT3_X;
}

int32_t get_IMAGE_DRAW_REPEAT3_Y (void) {
  return IMAGE_DRAW_REPEAT3_Y;
}

char* named_value_t_get_prop_name (named_value_t* obj) {
  return obj->name;
}

const char* get_MIME_TYPE_APPLICATION_ENVOY (void) {
  return MIME_TYPE_APPLICATION_ENVOY;
}

const char* get_MIME_TYPE_APPLICATION_FRACTALS (void) {
  return MIME_TYPE_APPLICATION_FRACTALS;
}

const char* get_MIME_TYPE_APPLICATION_FUTURESPLASH (void) {
  return MIME_TYPE_APPLICATION_FUTURESPLASH;
}

const char* get_MIME_TYPE_APPLICATION_HTA (void) {
  return MIME_TYPE_APPLICATION_HTA;
}

const char* get_MIME_TYPE_APPLICATION_JSON (void) {
  return MIME_TYPE_APPLICATION_JSON;
}

const char* get_MIME_TYPE_APPLICATION_UBJSON (void) {
  return MIME_TYPE_APPLICATION_UBJSON;
}

const char* get_MIME_TYPE_APPLICATION_MAC_BINHEX40 (void) {
  return MIME_TYPE_APPLICATION_MAC_BINHEX40;
}

const char* get_MIME_TYPE_APPLICATION_MSWORD (void) {
  return MIME_TYPE_APPLICATION_MSWORD;
}

const char* get_MIME_TYPE_APPLICATION_OCTET_STREAM (void) {
  return MIME_TYPE_APPLICATION_OCTET_STREAM;
}

const char* get_MIME_TYPE_APPLICATION_ODA (void) {
  return MIME_TYPE_APPLICATION_ODA;
}

const char* get_MIME_TYPE_APPLICATION_OLESCRIPT (void) {
  return MIME_TYPE_APPLICATION_OLESCRIPT;
}

const char* get_MIME_TYPE_APPLICATION_PDF (void) {
  return MIME_TYPE_APPLICATION_PDF;
}

const char* get_MIME_TYPE_APPLICATION_PICS_RULES (void) {
  return MIME_TYPE_APPLICATION_PICS_RULES;
}

const char* get_MIME_TYPE_APPLICATION_PKCS10 (void) {
  return MIME_TYPE_APPLICATION_PKCS10;
}

const char* get_MIME_TYPE_APPLICATION_PKIX_CRL (void) {
  return MIME_TYPE_APPLICATION_PKIX_CRL;
}

const char* get_MIME_TYPE_APPLICATION_POSTSCRIPT (void) {
  return MIME_TYPE_APPLICATION_POSTSCRIPT;
}

const char* get_MIME_TYPE_APPLICATION_RTF (void) {
  return MIME_TYPE_APPLICATION_RTF;
}

const char* get_MIME_TYPE_APPLICATION_VND_MS_EXCEL (void) {
  return MIME_TYPE_APPLICATION_VND_MS_EXCEL;
}

const char* get_MIME_TYPE_APPLICATION_VND_MS_OUTLOOK (void) {
  return MIME_TYPE_APPLICATION_VND_MS_OUTLOOK;
}

const char* get_MIME_TYPE_APPLICATION_VND_MS_PKICERTSTORE (void) {
  return MIME_TYPE_APPLICATION_VND_MS_PKICERTSTORE;
}

const char* get_MIME_TYPE_APPLICATION_VND_MS_PKISECCAT (void) {
  return MIME_TYPE_APPLICATION_VND_MS_PKISECCAT;
}

const char* get_MIME_TYPE_APPLICATION_VND_MS_PKISTL (void) {
  return MIME_TYPE_APPLICATION_VND_MS_PKISTL;
}

const char* get_MIME_TYPE_APPLICATION_VND_MS_POWERPOINT (void) {
  return MIME_TYPE_APPLICATION_VND_MS_POWERPOINT;
}

const char* get_MIME_TYPE_APPLICATION_VND_MS_PROJECT (void) {
  return MIME_TYPE_APPLICATION_VND_MS_PROJECT;
}

const char* get_MIME_TYPE_APPLICATION_VND_MS_WORKS (void) {
  return MIME_TYPE_APPLICATION_VND_MS_WORKS;
}

const char* get_MIME_TYPE_APPLICATION_WINHLP (void) {
  return MIME_TYPE_APPLICATION_WINHLP;
}

const char* get_MIME_TYPE_APPLICATION_X_BCPIO (void) {
  return MIME_TYPE_APPLICATION_X_BCPIO;
}

const char* get_MIME_TYPE_APPLICATION_X_CDF (void) {
  return MIME_TYPE_APPLICATION_X_CDF;
}

const char* get_MIME_TYPE_APPLICATION_X_COMPRESS (void) {
  return MIME_TYPE_APPLICATION_X_COMPRESS;
}

const char* get_MIME_TYPE_APPLICATION_X_COMPRESSED (void) {
  return MIME_TYPE_APPLICATION_X_COMPRESSED;
}

const char* get_MIME_TYPE_APPLICATION_X_CPIO (void) {
  return MIME_TYPE_APPLICATION_X_CPIO;
}

const char* get_MIME_TYPE_APPLICATION_X_CSH (void) {
  return MIME_TYPE_APPLICATION_X_CSH;
}

const char* get_MIME_TYPE_APPLICATION_X_DIRECTOR (void) {
  return MIME_TYPE_APPLICATION_X_DIRECTOR;
}

const char* get_MIME_TYPE_APPLICATION_X_DVI (void) {
  return MIME_TYPE_APPLICATION_X_DVI;
}

const char* get_MIME_TYPE_APPLICATION_X_GTAR (void) {
  return MIME_TYPE_APPLICATION_X_GTAR;
}

const char* get_MIME_TYPE_APPLICATION_X_GZIP (void) {
  return MIME_TYPE_APPLICATION_X_GZIP;
}

const char* get_MIME_TYPE_APPLICATION_X_HDF (void) {
  return MIME_TYPE_APPLICATION_X_HDF;
}

const char* get_MIME_TYPE_APPLICATION_X_IPHONE (void) {
  return MIME_TYPE_APPLICATION_X_IPHONE;
}

const char* get_MIME_TYPE_APPLICATION_X_JAVASCRIPT (void) {
  return MIME_TYPE_APPLICATION_X_JAVASCRIPT;
}

const char* get_MIME_TYPE_APPLICATION_X_LATEX (void) {
  return MIME_TYPE_APPLICATION_X_LATEX;
}

const char* get_MIME_TYPE_APPLICATION_X_MSACCESS (void) {
  return MIME_TYPE_APPLICATION_X_MSACCESS;
}

const char* get_MIME_TYPE_APPLICATION_X_MSCARDFILE (void) {
  return MIME_TYPE_APPLICATION_X_MSCARDFILE;
}

const char* get_MIME_TYPE_APPLICATION_X_MSCLIP (void) {
  return MIME_TYPE_APPLICATION_X_MSCLIP;
}

const char* get_MIME_TYPE_APPLICATION_X_MSDOWNLOAD (void) {
  return MIME_TYPE_APPLICATION_X_MSDOWNLOAD;
}

const char* get_MIME_TYPE_APPLICATION_X_MSMEDIAVIEW (void) {
  return MIME_TYPE_APPLICATION_X_MSMEDIAVIEW;
}

const char* get_MIME_TYPE_APPLICATION_X_MSMETAFILE (void) {
  return MIME_TYPE_APPLICATION_X_MSMETAFILE;
}

const char* get_MIME_TYPE_APPLICATION_X_MSMONEY (void) {
  return MIME_TYPE_APPLICATION_X_MSMONEY;
}

const char* get_MIME_TYPE_APPLICATION_X_MSPUBLISHER (void) {
  return MIME_TYPE_APPLICATION_X_MSPUBLISHER;
}

const char* get_MIME_TYPE_APPLICATION_X_MSSCHEDULE (void) {
  return MIME_TYPE_APPLICATION_X_MSSCHEDULE;
}

const char* get_MIME_TYPE_APPLICATION_X_MSTERMINAL (void) {
  return MIME_TYPE_APPLICATION_X_MSTERMINAL;
}

const char* get_MIME_TYPE_APPLICATION_X_MSWRITE (void) {
  return MIME_TYPE_APPLICATION_X_MSWRITE;
}

const char* get_MIME_TYPE_APPLICATION_X_NETCDF (void) {
  return MIME_TYPE_APPLICATION_X_NETCDF;
}

const char* get_MIME_TYPE_APPLICATION_X_PERFMON (void) {
  return MIME_TYPE_APPLICATION_X_PERFMON;
}

const char* get_MIME_TYPE_APPLICATION_X_PKCS12 (void) {
  return MIME_TYPE_APPLICATION_X_PKCS12;
}

const char* get_MIME_TYPE_APPLICATION_X_SH (void) {
  return MIME_TYPE_APPLICATION_X_SH;
}

const char* get_MIME_TYPE_APPLICATION_X_SHAR (void) {
  return MIME_TYPE_APPLICATION_X_SHAR;
}

const char* get_MIME_TYPE_APPLICATION_X_SHOCKWAVE_FLASH (void) {
  return MIME_TYPE_APPLICATION_X_SHOCKWAVE_FLASH;
}

const char* get_MIME_TYPE_APPLICATION_X_STUFFIT (void) {
  return MIME_TYPE_APPLICATION_X_STUFFIT;
}

const char* get_MIME_TYPE_APPLICATION_X_SV4CPIO (void) {
  return MIME_TYPE_APPLICATION_X_SV4CPIO;
}

const char* get_MIME_TYPE_APPLICATION_X_SV4CRC (void) {
  return MIME_TYPE_APPLICATION_X_SV4CRC;
}

const char* get_MIME_TYPE_APPLICATION_X_TAR (void) {
  return MIME_TYPE_APPLICATION_X_TAR;
}

const char* get_MIME_TYPE_APPLICATION_X_TCL (void) {
  return MIME_TYPE_APPLICATION_X_TCL;
}

const char* get_MIME_TYPE_APPLICATION_X_TEX (void) {
  return MIME_TYPE_APPLICATION_X_TEX;
}

const char* get_MIME_TYPE_APPLICATION_X_TEXINFO (void) {
  return MIME_TYPE_APPLICATION_X_TEXINFO;
}

const char* get_MIME_TYPE_APPLICATION_X_TROFF (void) {
  return MIME_TYPE_APPLICATION_X_TROFF;
}

const char* get_MIME_TYPE_APPLICATION_X_USTAR (void) {
  return MIME_TYPE_APPLICATION_X_USTAR;
}

const char* get_MIME_TYPE_APPLICATION_ZIP (void) {
  return MIME_TYPE_APPLICATION_ZIP;
}

const char* get_MIME_TYPE_AUDIO_BASIC (void) {
  return MIME_TYPE_AUDIO_BASIC;
}

const char* get_MIME_TYPE_AUDIO_MID (void) {
  return MIME_TYPE_AUDIO_MID;
}

const char* get_MIME_TYPE_AUDIO_MPEG (void) {
  return MIME_TYPE_AUDIO_MPEG;
}

const char* get_MIME_TYPE_AUDIO_X_AIFF (void) {
  return MIME_TYPE_AUDIO_X_AIFF;
}

const char* get_MIME_TYPE_AUDIO_X_MPEGURL (void) {
  return MIME_TYPE_AUDIO_X_MPEGURL;
}

const char* get_MIME_TYPE_AUDIO_X_WAV (void) {
  return MIME_TYPE_AUDIO_X_WAV;
}

const char* get_MIME_TYPE_IMAGE_BMP (void) {
  return MIME_TYPE_IMAGE_BMP;
}

const char* get_MIME_TYPE_IMAGE_CIS_COD (void) {
  return MIME_TYPE_IMAGE_CIS_COD;
}

const char* get_MIME_TYPE_IMAGE_GIF (void) {
  return MIME_TYPE_IMAGE_GIF;
}

const char* get_MIME_TYPE_IMAGE_IEF (void) {
  return MIME_TYPE_IMAGE_IEF;
}

const char* get_MIME_TYPE_IMAGE_JPEG (void) {
  return MIME_TYPE_IMAGE_JPEG;
}

const char* get_MIME_TYPE_IMAGE_PIPEG (void) {
  return MIME_TYPE_IMAGE_PIPEG;
}

const char* get_MIME_TYPE_IMAGE_SVG_XML (void) {
  return MIME_TYPE_IMAGE_SVG_XML;
}

const char* get_MIME_TYPE_IMAGE_TIFF (void) {
  return MIME_TYPE_IMAGE_TIFF;
}

const char* get_MIME_TYPE_IMAGE_X_CMX (void) {
  return MIME_TYPE_IMAGE_X_CMX;
}

const char* get_MIME_TYPE_IMAGE_X_ICON (void) {
  return MIME_TYPE_IMAGE_X_ICON;
}

const char* get_MIME_TYPE_IMAGE_X_RGB (void) {
  return MIME_TYPE_IMAGE_X_RGB;
}

const char* get_MIME_TYPE_IMAGE_X_XBITMAP (void) {
  return MIME_TYPE_IMAGE_X_XBITMAP;
}

const char* get_MIME_TYPE_IMAGE_X_XPIXMAP (void) {
  return MIME_TYPE_IMAGE_X_XPIXMAP;
}

const char* get_MIME_TYPE_IMAGE_X_XWINDOWDUMP (void) {
  return MIME_TYPE_IMAGE_X_XWINDOWDUMP;
}

const char* get_MIME_TYPE_MESSAGE_RFC822 (void) {
  return MIME_TYPE_MESSAGE_RFC822;
}

const char* get_MIME_TYPE_TEXT_CSS (void) {
  return MIME_TYPE_TEXT_CSS;
}

const char* get_MIME_TYPE_TEXT_H323 (void) {
  return MIME_TYPE_TEXT_H323;
}

const char* get_MIME_TYPE_TEXT_HTML (void) {
  return MIME_TYPE_TEXT_HTML;
}

const char* get_MIME_TYPE_TEXT_IULS (void) {
  return MIME_TYPE_TEXT_IULS;
}

const char* get_MIME_TYPE_TEXT_PLAIN (void) {
  return MIME_TYPE_TEXT_PLAIN;
}

const char* get_MIME_TYPE_TEXT_RICHTEXT (void) {
  return MIME_TYPE_TEXT_RICHTEXT;
}

const char* get_MIME_TYPE_TEXT_SCRIPTLET (void) {
  return MIME_TYPE_TEXT_SCRIPTLET;
}

const char* get_MIME_TYPE_TEXT_WEBVIEWHTML (void) {
  return MIME_TYPE_TEXT_WEBVIEWHTML;
}

const char* get_MIME_TYPE_TEXT_X_COMPONENT (void) {
  return MIME_TYPE_TEXT_X_COMPONENT;
}

const char* get_MIME_TYPE_TEXT_X_SETEXT (void) {
  return MIME_TYPE_TEXT_X_SETEXT;
}

const char* get_MIME_TYPE_TEXT_X_VCARD (void) {
  return MIME_TYPE_TEXT_X_VCARD;
}

const char* get_MIME_TYPE_VIDEO_MPEG (void) {
  return MIME_TYPE_VIDEO_MPEG;
}

const char* get_MIME_TYPE_VIDEO_QUICKTIME (void) {
  return MIME_TYPE_VIDEO_QUICKTIME;
}

const char* get_MIME_TYPE_VIDEO_X_MSVIDEO (void) {
  return MIME_TYPE_VIDEO_X_MSVIDEO;
}

int32_t get_INDICATOR_DEFAULT_PAINT_AUTO (void) {
  return INDICATOR_DEFAULT_PAINT_AUTO;
}

int32_t get_INDICATOR_DEFAULT_PAINT_FILL_DOT (void) {
  return INDICATOR_DEFAULT_PAINT_FILL_DOT;
}

int32_t get_INDICATOR_DEFAULT_PAINT_STROKE_DOT (void) {
  return INDICATOR_DEFAULT_PAINT_STROKE_DOT;
}

int32_t get_INDICATOR_DEFAULT_PAINT_FILL_RECT (void) {
  return INDICATOR_DEFAULT_PAINT_FILL_RECT;
}

int32_t get_INDICATOR_DEFAULT_PAINT_STROKE_RECT (void) {
  return INDICATOR_DEFAULT_PAINT_STROKE_RECT;
}

xy_t canvas_t_get_prop_ox (canvas_t* obj) {
  return obj->ox;
}

xy_t canvas_t_get_prop_oy (canvas_t* obj) {
  return obj->oy;
}

char* canvas_t_get_prop_font_name (canvas_t* obj) {
  return obj->font_name;
}

uint16_t canvas_t_get_prop_font_size (canvas_t* obj) {
  return obj->font_size;
}

uint8_t canvas_t_get_prop_global_alpha (canvas_t* obj) {
  return obj->global_alpha;
}

int32_t get_EASING_LINEAR (void) {
  return EASING_LINEAR;
}

int32_t get_EASING_QUADRATIC_IN (void) {
  return EASING_QUADRATIC_IN;
}

int32_t get_EASING_QUADRATIC_OUT (void) {
  return EASING_QUADRATIC_OUT;
}

int32_t get_EASING_QUADRATIC_INOUT (void) {
  return EASING_QUADRATIC_INOUT;
}

int32_t get_EASING_CUBIC_IN (void) {
  return EASING_CUBIC_IN;
}

int32_t get_EASING_CUBIC_OUT (void) {
  return EASING_CUBIC_OUT;
}

int32_t get_EASING_SIN_IN (void) {
  return EASING_SIN_IN;
}

int32_t get_EASING_SIN_OUT (void) {
  return EASING_SIN_OUT;
}

int32_t get_EASING_SIN_INOUT (void) {
  return EASING_SIN_INOUT;
}

int32_t get_EASING_POW_IN (void) {
  return EASING_POW_IN;
}

int32_t get_EASING_POW_OUT (void) {
  return EASING_POW_OUT;
}

int32_t get_EASING_POW_INOUT (void) {
  return EASING_POW_INOUT;
}

int32_t get_EASING_CIRCULAR_IN (void) {
  return EASING_CIRCULAR_IN;
}

int32_t get_EASING_CIRCULAR_OUT (void) {
  return EASING_CIRCULAR_OUT;
}

int32_t get_EASING_CIRCULAR_INOUT (void) {
  return EASING_CIRCULAR_INOUT;
}

int32_t get_EASING_ELASTIC_IN (void) {
  return EASING_ELASTIC_IN;
}

int32_t get_EASING_ELASTIC_OUT (void) {
  return EASING_ELASTIC_OUT;
}

int32_t get_EASING_ELASTIC_INOUT (void) {
  return EASING_ELASTIC_INOUT;
}

int32_t get_EASING_BACK_IN (void) {
  return EASING_BACK_IN;
}

int32_t get_EASING_BACK_OUT (void) {
  return EASING_BACK_OUT;
}

int32_t get_EASING_BACK_INOUT (void) {
  return EASING_BACK_INOUT;
}

int32_t get_EASING_BOUNCE_IN (void) {
  return EASING_BOUNCE_IN;
}

int32_t get_EASING_BOUNCE_OUT (void) {
  return EASING_BOUNCE_OUT;
}

int32_t get_EASING_BOUNCE_INOUT (void) {
  return EASING_BOUNCE_INOUT;
}

int32_t date_time_t_get_prop_second (date_time_t* obj) {
  return obj->second;
}

int32_t date_time_t_get_prop_minute (date_time_t* obj) {
  return obj->minute;
}

int32_t date_time_t_get_prop_hour (date_time_t* obj) {
  return obj->hour;
}

int32_t date_time_t_get_prop_day (date_time_t* obj) {
  return obj->day;
}

int32_t date_time_t_get_prop_wday (date_time_t* obj) {
  return obj->wday;
}

int32_t date_time_t_get_prop_month (date_time_t* obj) {
  return obj->month;
}

int32_t date_time_t_get_prop_year (date_time_t* obj) {
  return obj->year;
}

ret_t color_t_set_prop_color (color_t* obj, uint32_t value) {
  obj->color = value;
  return RET_OK;
}

uint32_t color_t_get_prop_color (color_t* obj) {
  return obj->color;
}

uint16_t asset_info_t_get_prop_type (asset_info_t* obj) {
  return obj->type;
}

uint8_t asset_info_t_get_prop_subtype (asset_info_t* obj) {
  return obj->subtype;
}

uint8_t asset_info_t_get_prop_is_in_rom (asset_info_t* obj) {
  return obj->is_in_rom;
}

uint32_t asset_info_t_get_prop_size (asset_info_t* obj) {
  return obj->size;
}

uint32_t asset_info_t_get_prop_refcount (asset_info_t* obj) {
  return obj->refcount;
}

char* asset_info_t_get_prop_name (asset_info_t* obj) {
  return obj->name;
}

int32_t get_ASSET_TYPE_NONE (void) {
  return ASSET_TYPE_NONE;
}

int32_t get_ASSET_TYPE_FONT (void) {
  return ASSET_TYPE_FONT;
}

int32_t get_ASSET_TYPE_IMAGE (void) {
  return ASSET_TYPE_IMAGE;
}

int32_t get_ASSET_TYPE_STYLE (void) {
  return ASSET_TYPE_STYLE;
}

int32_t get_ASSET_TYPE_UI (void) {
  return ASSET_TYPE_UI;
}

int32_t get_ASSET_TYPE_XML (void) {
  return ASSET_TYPE_XML;
}

int32_t get_ASSET_TYPE_STRINGS (void) {
  return ASSET_TYPE_STRINGS;
}

int32_t get_ASSET_TYPE_SCRIPT (void) {
  return ASSET_TYPE_SCRIPT;
}

int32_t get_ASSET_TYPE_DATA (void) {
  return ASSET_TYPE_DATA;
}

int32_t guage_pointer_t_get_prop_angle (guage_pointer_t* obj) {
  return obj->angle;
}

char* guage_pointer_t_get_prop_image (guage_pointer_t* obj) {
  return obj->image;
}

char* guage_pointer_t_get_prop_anchor_x (guage_pointer_t* obj) {
  return obj->anchor_x;
}

char* guage_pointer_t_get_prop_anchor_y (guage_pointer_t* obj) {
  return obj->anchor_y;
}

int32_t wheel_event_t_get_prop_dy (wheel_event_t* obj) {
  return obj->dy;
}

bool_t wheel_event_t_get_prop_alt (wheel_event_t* obj) {
  return obj->alt;
}

bool_t wheel_event_t_get_prop_ctrl (wheel_event_t* obj) {
  return obj->ctrl;
}

bool_t wheel_event_t_get_prop_shift (wheel_event_t* obj) {
  return obj->shift;
}

char* view_t_get_prop_default_focused_child (view_t* obj) {
  return obj->default_focused_child;
}

bool_t tab_button_t_get_prop_value (tab_button_t* obj) {
  return obj->value;
}

char* tab_button_t_get_prop_load_ui (tab_button_t* obj) {
  return obj->load_ui;
}

char* tab_button_t_get_prop_active_icon (tab_button_t* obj) {
  return obj->active_icon;
}

char* tab_button_t_get_prop_icon (tab_button_t* obj) {
  return obj->icon;
}

bool_t tab_button_group_t_get_prop_compact (tab_button_group_t* obj) {
  return obj->compact;
}

bool_t tab_button_group_t_get_prop_scrollable (tab_button_group_t* obj) {
  return obj->scrollable;
}

double slider_t_get_prop_value (slider_t* obj) {
  return obj->value;
}

double slider_t_get_prop_min (slider_t* obj) {
  return obj->min;
}

double slider_t_get_prop_max (slider_t* obj) {
  return obj->max;
}

double slider_t_get_prop_step (slider_t* obj) {
  return obj->step;
}

bool_t slider_t_get_prop_vertical (slider_t* obj) {
  return obj->vertical;
}

uint32_t slider_t_get_prop_bar_size (slider_t* obj) {
  return obj->bar_size;
}

uint32_t slider_t_get_prop_dragger_size (slider_t* obj) {
  return obj->dragger_size;
}

bool_t slider_t_get_prop_dragger_adapt_to_icon (slider_t* obj) {
  return obj->dragger_adapt_to_icon;
}

bool_t slider_t_get_prop_slide_with_bar (slider_t* obj) {
  return obj->slide_with_bar;
}

float_t progress_bar_t_get_prop_value (progress_bar_t* obj) {
  return obj->value;
}

float_t progress_bar_t_get_prop_max (progress_bar_t* obj) {
  return obj->max;
}

bool_t progress_bar_t_get_prop_vertical (progress_bar_t* obj) {
  return obj->vertical;
}

bool_t progress_bar_t_get_prop_show_text (progress_bar_t* obj) {
  return obj->show_text;
}

uint32_t pages_t_get_prop_active (pages_t* obj) {
  return obj->active;
}

int32_t label_t_get_prop_length (label_t* obj) {
  return obj->length;
}

bool_t label_t_get_prop_line_wrap (label_t* obj) {
  return obj->line_wrap;
}

bool_t edit_t_get_prop_readonly (edit_t* obj) {
  return obj->readonly;
}

bool_t edit_t_get_prop_password_visible (edit_t* obj) {
  return obj->password_visible;
}

bool_t edit_t_get_prop_auto_fix (edit_t* obj) {
  return obj->auto_fix;
}

bool_t edit_t_get_prop_select_none_when_focused (edit_t* obj) {
  return obj->select_none_when_focused;
}

bool_t edit_t_get_prop_open_im_when_focused (edit_t* obj) {
  return obj->open_im_when_focused;
}

bool_t edit_t_get_prop_close_im_when_blured (edit_t* obj) {
  return obj->close_im_when_blured;
}

uint8_t edit_t_get_prop_top_margin (edit_t* obj) {
  return obj->top_margin;
}

uint8_t edit_t_get_prop_bottom_margin (edit_t* obj) {
  return obj->bottom_margin;
}

uint8_t edit_t_get_prop_left_margin (edit_t* obj) {
  return obj->left_margin;
}

uint8_t edit_t_get_prop_right_margin (edit_t* obj) {
  return obj->right_margin;
}

char* edit_t_get_prop_tips (edit_t* obj) {
  return obj->tips;
}

char* edit_t_get_prop_tr_tips (edit_t* obj) {
  return obj->tr_tips;
}

char* edit_t_get_prop_action_text (edit_t* obj) {
  return obj->action_text;
}

char* edit_t_get_prop_keyboard (edit_t* obj) {
  return obj->keyboard;
}

input_type_t edit_t_get_prop_input_type (edit_t* obj) {
  return obj->input_type;
}

double edit_t_get_prop_min (edit_t* obj) {
  return obj->min;
}

double edit_t_get_prop_max (edit_t* obj) {
  return obj->max;
}

double edit_t_get_prop_step (edit_t* obj) {
  return obj->step;
}

bool_t edit_t_get_prop_cancelable (edit_t* obj) {
  return obj->cancelable;
}

xy_t dragger_t_get_prop_x_min (dragger_t* obj) {
  return obj->x_min;
}

xy_t dragger_t_get_prop_y_min (dragger_t* obj) {
  return obj->y_min;
}

xy_t dragger_t_get_prop_x_max (dragger_t* obj) {
  return obj->x_max;
}

xy_t dragger_t_get_prop_y_max (dragger_t* obj) {
  return obj->y_max;
}

char* digit_clock_t_get_prop_format (digit_clock_t* obj) {
  return obj->format;
}

int32_t combo_box_item_t_get_prop_value (combo_box_item_t* obj) {
  return obj->value;
}

bool_t combo_box_item_t_get_prop_checked (combo_box_item_t* obj) {
  return obj->checked;
}

const char* color_tile_t_get_prop_bg_color (color_tile_t* obj) {
  return obj->bg_color;
}

const char* color_tile_t_get_prop_border_color (color_tile_t* obj) {
  return obj->border_color;
}

bool_t check_button_t_get_prop_value (check_button_t* obj) {
  return obj->value;
}

const char* prop_change_event_t_get_prop_name (prop_change_event_t* obj) {
  return obj->name;
}

const value_t* prop_change_event_t_get_prop_value (prop_change_event_t* obj) {
  return obj->value;
}

uint32_t progress_event_t_get_prop_percent (progress_event_t* obj) {
  return obj->percent;
}

ret_t done_event_t_get_prop_result (done_event_t* obj) {
  return obj->result;
}

int32_t error_event_t_get_prop_code (error_event_t* obj) {
  return obj->code;
}

const char* error_event_t_get_prop_message (error_event_t* obj) {
  return obj->message;
}

const char* cmd_exec_event_t_get_prop_name (cmd_exec_event_t* obj) {
  return obj->name;
}

const char* cmd_exec_event_t_get_prop_args (cmd_exec_event_t* obj) {
  return obj->args;
}

ret_t cmd_exec_event_t_get_prop_result (cmd_exec_event_t* obj) {
  return obj->result;
}

bool_t cmd_exec_event_t_get_prop_can_exec (cmd_exec_event_t* obj) {
  return obj->can_exec;
}

int32_t time_clock_t_get_prop_hour (time_clock_t* obj) {
  return obj->hour;
}

int32_t time_clock_t_get_prop_minute (time_clock_t* obj) {
  return obj->minute;
}

int32_t time_clock_t_get_prop_second (time_clock_t* obj) {
  return obj->second;
}

char* time_clock_t_get_prop_image (time_clock_t* obj) {
  return obj->image;
}

char* time_clock_t_get_prop_bg_image (time_clock_t* obj) {
  return obj->bg_image;
}

char* time_clock_t_get_prop_hour_image (time_clock_t* obj) {
  return obj->hour_image;
}

char* time_clock_t_get_prop_minute_image (time_clock_t* obj) {
  return obj->minute_image;
}

char* time_clock_t_get_prop_second_image (time_clock_t* obj) {
  return obj->second_image;
}

char* time_clock_t_get_prop_hour_anchor_x (time_clock_t* obj) {
  return obj->hour_anchor_x;
}

char* time_clock_t_get_prop_hour_anchor_y (time_clock_t* obj) {
  return obj->hour_anchor_y;
}

char* time_clock_t_get_prop_minute_anchor_x (time_clock_t* obj) {
  return obj->minute_anchor_x;
}

char* time_clock_t_get_prop_minute_anchor_y (time_clock_t* obj) {
  return obj->minute_anchor_y;
}

char* time_clock_t_get_prop_second_anchor_x (time_clock_t* obj) {
  return obj->second_anchor_x;
}

char* time_clock_t_get_prop_second_anchor_y (time_clock_t* obj) {
  return obj->second_anchor_y;
}

int32_t button_t_get_prop_repeat (button_t* obj) {
  return obj->repeat;
}

bool_t button_t_get_prop_enable_long_press (button_t* obj) {
  return obj->enable_long_press;
}

uint32_t button_t_get_prop_long_press_time (button_t* obj) {
  return obj->long_press_time;
}

uint32_t text_selector_t_get_prop_visible_nr (text_selector_t* obj) {
  return obj->visible_nr;
}

int32_t text_selector_t_get_prop_selected_index (text_selector_t* obj) {
  return obj->selected_index;
}

char* text_selector_t_get_prop_options (text_selector_t* obj) {
  return obj->options;
}

bool_t text_selector_t_get_prop_localize_options (text_selector_t* obj) {
  return obj->localize_options;
}

float_t text_selector_t_get_prop_yspeed_scale (text_selector_t* obj) {
  return obj->yspeed_scale;
}

bool_t text_selector_t_get_prop_loop_options (text_selector_t* obj) {
  return obj->loop_options;
}

bool_t switch_t_get_prop_value (switch_t* obj) {
  return obj->value;
}

float_t switch_t_get_prop_max_xoffset_ratio (switch_t* obj) {
  return obj->max_xoffset_ratio;
}

int32_t orientation_event_t_get_prop_orientation (orientation_event_t* obj) {
  return obj->orientation;
}

bool_t slide_view_t_get_prop_vertical (slide_view_t* obj) {
  return obj->vertical;
}

uint16_t slide_view_t_get_prop_auto_play (slide_view_t* obj) {
  return obj->auto_play;
}

bool_t slide_view_t_get_prop_loop (slide_view_t* obj) {
  return obj->loop;
}

char* slide_view_t_get_prop_anim_hint (slide_view_t* obj) {
  return obj->anim_hint;
}

uint32_t slide_indicator_t_get_prop_value (slide_indicator_t* obj) {
  return obj->value;
}

uint32_t slide_indicator_t_get_prop_max (slide_indicator_t* obj) {
  return obj->max;
}

indicator_default_paint_t slide_indicator_t_get_prop_default_paint (slide_indicator_t* obj) {
  return obj->default_paint;
}

uint16_t slide_indicator_t_get_prop_auto_hide (slide_indicator_t* obj) {
  return obj->auto_hide;
}

int32_t slide_indicator_t_get_prop_margin (slide_indicator_t* obj) {
  return obj->margin;
}

float_t slide_indicator_t_get_prop_spacing (slide_indicator_t* obj) {
  return obj->spacing;
}

uint32_t slide_indicator_t_get_prop_size (slide_indicator_t* obj) {
  return obj->size;
}

float_t slide_indicator_t_get_prop_anchor_x (slide_indicator_t* obj) {
  return obj->anchor_x;
}

float_t slide_indicator_t_get_prop_anchor_y (slide_indicator_t* obj) {
  return obj->anchor_y;
}

char* slide_indicator_t_get_prop_indicated_target (slide_indicator_t* obj) {
  return obj->indicated_target;
}

int32_t slide_menu_t_get_prop_value (slide_menu_t* obj) {
  return obj->value;
}

align_v_t slide_menu_t_get_prop_align_v (slide_menu_t* obj) {
  return obj->align_v;
}

float_t slide_menu_t_get_prop_min_scale (slide_menu_t* obj) {
  return obj->min_scale;
}

wh_t scroll_view_t_get_prop_virtual_w (scroll_view_t* obj) {
  return obj->virtual_w;
}

wh_t scroll_view_t_get_prop_virtual_h (scroll_view_t* obj) {
  return obj->virtual_h;
}

int32_t scroll_view_t_get_prop_xoffset (scroll_view_t* obj) {
  return obj->xoffset;
}

int32_t scroll_view_t_get_prop_yoffset (scroll_view_t* obj) {
  return obj->yoffset;
}

float_t scroll_view_t_get_prop_xspeed_scale (scroll_view_t* obj) {
  return obj->xspeed_scale;
}

float_t scroll_view_t_get_prop_yspeed_scale (scroll_view_t* obj) {
  return obj->yspeed_scale;
}

bool_t scroll_view_t_get_prop_xslidable (scroll_view_t* obj) {
  return obj->xslidable;
}

bool_t scroll_view_t_get_prop_yslidable (scroll_view_t* obj) {
  return obj->yslidable;
}

int32_t scroll_bar_t_get_prop_virtual_size (scroll_bar_t* obj) {
  return obj->virtual_size;
}

int32_t scroll_bar_t_get_prop_value (scroll_bar_t* obj) {
  return obj->value;
}

int32_t scroll_bar_t_get_prop_row (scroll_bar_t* obj) {
  return obj->row;
}

bool_t scroll_bar_t_get_prop_animatable (scroll_bar_t* obj) {
  return obj->animatable;
}

int32_t list_view_t_get_prop_item_height (list_view_t* obj) {
  return obj->item_height;
}

int32_t list_view_t_get_prop_default_item_height (list_view_t* obj) {
  return obj->default_item_height;
}

bool_t list_view_t_get_prop_auto_hide_scroll_bar (list_view_t* obj) {
  return obj->auto_hide_scroll_bar;
}

int32_t list_view_h_t_get_prop_item_width (list_view_h_t* obj) {
  return obj->item_width;
}

int32_t list_view_h_t_get_prop_spacing (list_view_h_t* obj) {
  return obj->spacing;
}

xy_t pointer_event_t_get_prop_x (pointer_event_t* obj) {
  return obj->x;
}

xy_t pointer_event_t_get_prop_y (pointer_event_t* obj) {
  return obj->y;
}

uint8_t pointer_event_t_get_prop_button (pointer_event_t* obj) {
  return obj->button;
}

bool_t pointer_event_t_get_prop_pressed (pointer_event_t* obj) {
  return obj->pressed;
}

bool_t pointer_event_t_get_prop_alt (pointer_event_t* obj) {
  return obj->alt;
}

bool_t pointer_event_t_get_prop_ctrl (pointer_event_t* obj) {
  return obj->ctrl;
}

bool_t pointer_event_t_get_prop_cmd (pointer_event_t* obj) {
  return obj->cmd;
}

bool_t pointer_event_t_get_prop_menu (pointer_event_t* obj) {
  return obj->menu;
}

bool_t pointer_event_t_get_prop_shift (pointer_event_t* obj) {
  return obj->shift;
}

bool_t hscroll_label_t_get_prop_only_focus (hscroll_label_t* obj) {
  return obj->only_focus;
}

bool_t hscroll_label_t_get_prop_only_parent_focus (hscroll_label_t* obj) {
  return obj->only_parent_focus;
}

bool_t hscroll_label_t_get_prop_loop (hscroll_label_t* obj) {
  return obj->loop;
}

bool_t hscroll_label_t_get_prop_yoyo (hscroll_label_t* obj) {
  return obj->yoyo;
}

bool_t hscroll_label_t_get_prop_ellipses (hscroll_label_t* obj) {
  return obj->ellipses;
}

int32_t hscroll_label_t_get_prop_lull (hscroll_label_t* obj) {
  return obj->lull;
}

int32_t hscroll_label_t_get_prop_duration (hscroll_label_t* obj) {
  return obj->duration;
}

int32_t hscroll_label_t_get_prop_xoffset (hscroll_label_t* obj) {
  return obj->xoffset;
}

int32_t hscroll_label_t_get_prop_text_w (hscroll_label_t* obj) {
  return obj->text_w;
}

uint32_t rich_text_t_get_prop_line_gap (rich_text_t* obj) {
  return obj->line_gap;
}

uint32_t rich_text_t_get_prop_margin (rich_text_t* obj) {
  return obj->margin;
}

bool_t rich_text_t_get_prop_yslidable (rich_text_t* obj) {
  return obj->yslidable;
}

float_t progress_circle_t_get_prop_value (progress_circle_t* obj) {
  return obj->value;
}

uint32_t progress_circle_t_get_prop_max (progress_circle_t* obj) {
  return obj->max;
}

int32_t progress_circle_t_get_prop_start_angle (progress_circle_t* obj) {
  return obj->start_angle;
}

uint32_t progress_circle_t_get_prop_line_width (progress_circle_t* obj) {
  return obj->line_width;
}

char* progress_circle_t_get_prop_unit (progress_circle_t* obj) {
  return obj->unit;
}

char* progress_circle_t_get_prop_line_cap (progress_circle_t* obj) {
  return obj->line_cap;
}

bool_t progress_circle_t_get_prop_counter_clock_wise (progress_circle_t* obj) {
  return obj->counter_clock_wise;
}

bool_t progress_circle_t_get_prop_show_text (progress_circle_t* obj) {
  return obj->show_text;
}

bool_t mledit_t_get_prop_readonly (mledit_t* obj) {
  return obj->readonly;
}

uint8_t mledit_t_get_prop_top_margin (mledit_t* obj) {
  return obj->top_margin;
}

uint8_t mledit_t_get_prop_bottom_margin (mledit_t* obj) {
  return obj->bottom_margin;
}

uint8_t mledit_t_get_prop_left_margin (mledit_t* obj) {
  return obj->left_margin;
}

uint8_t mledit_t_get_prop_right_margin (mledit_t* obj) {
  return obj->right_margin;
}

char* mledit_t_get_prop_tips (mledit_t* obj) {
  return obj->tips;
}

char* mledit_t_get_prop_tr_tips (mledit_t* obj) {
  return obj->tr_tips;
}

char* mledit_t_get_prop_keyboard (mledit_t* obj) {
  return obj->keyboard;
}

bool_t mledit_t_get_prop_wrap_word (mledit_t* obj) {
  return obj->wrap_word;
}

uint32_t mledit_t_get_prop_max_lines (mledit_t* obj) {
  return obj->max_lines;
}

uint32_t mledit_t_get_prop_scroll_line (mledit_t* obj) {
  return obj->scroll_line;
}

bool_t mledit_t_get_prop_cancelable (mledit_t* obj) {
  return obj->cancelable;
}

bool_t mledit_t_get_prop_open_im_when_focused (mledit_t* obj) {
  return obj->open_im_when_focused;
}

bool_t mledit_t_get_prop_close_im_when_blured (mledit_t* obj) {
  return obj->close_im_when_blured;
}

char* lang_indicator_t_get_prop_image (lang_indicator_t* obj) {
  return obj->image;
}

bool_t candidates_t_get_prop_pre (candidates_t* obj) {
  return obj->pre;
}

bool_t candidates_t_get_prop_select_by_num (candidates_t* obj) {
  return obj->select_by_num;
}

bool_t candidates_t_get_prop_auto_hide (candidates_t* obj) {
  return obj->auto_hide;
}

char* candidates_t_get_prop_button_style (candidates_t* obj) {
  return obj->button_style;
}

char* image_value_t_get_prop_image (image_value_t* obj) {
  return obj->image;
}

char* image_value_t_get_prop_format (image_value_t* obj) {
  return obj->format;
}

float_t image_value_t_get_prop_click_add_delta (image_value_t* obj) {
  return obj->click_add_delta;
}

float_t image_value_t_get_prop_value (image_value_t* obj) {
  return obj->value;
}

float_t image_value_t_get_prop_min (image_value_t* obj) {
  return obj->min;
}

float_t image_value_t_get_prop_max (image_value_t* obj) {
  return obj->max;
}

char* image_animation_t_get_prop_image (image_animation_t* obj) {
  return obj->image;
}

char* image_animation_t_get_prop_sequence (image_animation_t* obj) {
  return obj->sequence;
}

uint32_t image_animation_t_get_prop_start_index (image_animation_t* obj) {
  return obj->start_index;
}

uint32_t image_animation_t_get_prop_end_index (image_animation_t* obj) {
  return obj->end_index;
}

bool_t image_animation_t_get_prop_loop (image_animation_t* obj) {
  return obj->loop;
}

bool_t image_animation_t_get_prop_auto_play (image_animation_t* obj) {
  return obj->auto_play;
}

bool_t image_animation_t_get_prop_unload_after_paint (image_animation_t* obj) {
  return obj->unload_after_paint;
}

char* image_animation_t_get_prop_format (image_animation_t* obj) {
  return obj->format;
}

uint32_t image_animation_t_get_prop_interval (image_animation_t* obj) {
  return obj->interval;
}

uint32_t image_animation_t_get_prop_delay (image_animation_t* obj) {
  return obj->delay;
}

char* guage_t_get_prop_image (guage_t* obj) {
  return obj->image;
}

image_draw_type_t guage_t_get_prop_draw_type (guage_t* obj) {
  return obj->draw_type;
}

uint32_t key_event_t_get_prop_key (key_event_t* obj) {
  return obj->key;
}

bool_t key_event_t_get_prop_alt (key_event_t* obj) {
  return obj->alt;
}

bool_t key_event_t_get_prop_lalt (key_event_t* obj) {
  return obj->lalt;
}

bool_t key_event_t_get_prop_ralt (key_event_t* obj) {
  return obj->ralt;
}

bool_t key_event_t_get_prop_ctrl (key_event_t* obj) {
  return obj->ctrl;
}

bool_t key_event_t_get_prop_lctrl (key_event_t* obj) {
  return obj->lctrl;
}

bool_t key_event_t_get_prop_rctrl (key_event_t* obj) {
  return obj->rctrl;
}

bool_t key_event_t_get_prop_shift (key_event_t* obj) {
  return obj->shift;
}

bool_t key_event_t_get_prop_lshift (key_event_t* obj) {
  return obj->lshift;
}

bool_t key_event_t_get_prop_rshift (key_event_t* obj) {
  return obj->rshift;
}

bool_t key_event_t_get_prop_cmd (key_event_t* obj) {
  return obj->cmd;
}

bool_t key_event_t_get_prop_menu (key_event_t* obj) {
  return obj->menu;
}

bool_t key_event_t_get_prop_capslock (key_event_t* obj) {
  return obj->capslock;
}

canvas_t* paint_event_t_get_prop_c (paint_event_t* obj) {
  return obj->c;
}

char* file_browser_view_t_get_prop_init_dir (file_browser_view_t* obj) {
  return obj->init_dir;
}

char* file_browser_view_t_get_prop_filter (file_browser_view_t* obj) {
  return obj->filter;
}

bool_t file_browser_view_t_get_prop_ignore_hidden_files (file_browser_view_t* obj) {
  return obj->ignore_hidden_files;
}

bool_t file_browser_view_t_get_prop_sort_ascending (file_browser_view_t* obj) {
  return obj->sort_ascending;
}

bool_t file_browser_view_t_get_prop_show_check_button (file_browser_view_t* obj) {
  return obj->show_check_button;
}

char* file_browser_view_t_get_prop_sort_by (file_browser_view_t* obj) {
  return obj->sort_by;
}

int32_t draggable_t_get_prop_top (draggable_t* obj) {
  return obj->top;
}

int32_t draggable_t_get_prop_bottom (draggable_t* obj) {
  return obj->bottom;
}

int32_t draggable_t_get_prop_left (draggable_t* obj) {
  return obj->left;
}

int32_t draggable_t_get_prop_right (draggable_t* obj) {
  return obj->right;
}

bool_t draggable_t_get_prop_vertical_only (draggable_t* obj) {
  return obj->vertical_only;
}

bool_t draggable_t_get_prop_horizontal_only (draggable_t* obj) {
  return obj->horizontal_only;
}

bool_t draggable_t_get_prop_drag_window (draggable_t* obj) {
  return obj->drag_window;
}

widget_t* window_event_t_get_prop_window (window_event_t* obj) {
  return obj->window;
}

const char* color_picker_t_get_prop_value (color_picker_t* obj) {
  return obj->value;
}

int64_t multi_gesture_event_t_get_prop_touch_id (multi_gesture_event_t* obj) {
  return obj->touch_id;
}

xy_t multi_gesture_event_t_get_prop_x (multi_gesture_event_t* obj) {
  return obj->x;
}

xy_t multi_gesture_event_t_get_prop_y (multi_gesture_event_t* obj) {
  return obj->y;
}

float multi_gesture_event_t_get_prop_rotation (multi_gesture_event_t* obj) {
  return obj->rotation;
}

float multi_gesture_event_t_get_prop_distance (multi_gesture_event_t* obj) {
  return obj->distance;
}

uint32_t multi_gesture_event_t_get_prop_fingers (multi_gesture_event_t* obj) {
  return obj->fingers;
}

char* image_base_t_get_prop_image (image_base_t* obj) {
  return obj->image;
}

float_t image_base_t_get_prop_anchor_x (image_base_t* obj) {
  return obj->anchor_x;
}

float_t image_base_t_get_prop_anchor_y (image_base_t* obj) {
  return obj->anchor_y;
}

float_t image_base_t_get_prop_scale_x (image_base_t* obj) {
  return obj->scale_x;
}

float_t image_base_t_get_prop_scale_y (image_base_t* obj) {
  return obj->scale_y;
}

float_t image_base_t_get_prop_rotation (image_base_t* obj) {
  return obj->rotation;
}

bool_t image_base_t_get_prop_clickable (image_base_t* obj) {
  return obj->clickable;
}

bool_t image_base_t_get_prop_selectable (image_base_t* obj) {
  return obj->selectable;
}

bool_t image_base_t_get_prop_selected (image_base_t* obj) {
  return obj->selected;
}

char* window_base_t_get_prop_theme (window_base_t* obj) {
  return obj->theme;
}

bool_t window_base_t_get_prop_disable_anim (window_base_t* obj) {
  return obj->disable_anim;
}

window_closable_t window_base_t_get_prop_closable (window_base_t* obj) {
  return obj->closable;
}

char* window_base_t_get_prop_open_anim_hint (window_base_t* obj) {
  return obj->open_anim_hint;
}

char* window_base_t_get_prop_close_anim_hint (window_base_t* obj) {
  return obj->close_anim_hint;
}

char* window_base_t_get_prop_move_focus_prev_key (window_base_t* obj) {
  return obj->move_focus_prev_key;
}

char* window_base_t_get_prop_move_focus_next_key (window_base_t* obj) {
  return obj->move_focus_next_key;
}

char* window_base_t_get_prop_move_focus_up_key (window_base_t* obj) {
  return obj->move_focus_up_key;
}

char* window_base_t_get_prop_move_focus_down_key (window_base_t* obj) {
  return obj->move_focus_down_key;
}

char* window_base_t_get_prop_move_focus_left_key (window_base_t* obj) {
  return obj->move_focus_left_key;
}

char* window_base_t_get_prop_move_focus_right_key (window_base_t* obj) {
  return obj->move_focus_right_key;
}

bool_t window_base_t_get_prop_single_instance (window_base_t* obj) {
  return obj->single_instance;
}

char* style_mutable_t_get_prop_name (style_mutable_t* obj) {
  return obj->name;
}

char* combo_box_t_get_prop_open_window (combo_box_t* obj) {
  return obj->open_window;
}

int32_t combo_box_t_get_prop_selected_index (combo_box_t* obj) {
  return obj->selected_index;
}

int32_t combo_box_t_get_prop_value (combo_box_t* obj) {
  return obj->value;
}

bool_t combo_box_t_get_prop_localize_options (combo_box_t* obj) {
  return obj->localize_options;
}

char* combo_box_t_get_prop_options (combo_box_t* obj) {
  return obj->options;
}

int32_t combo_box_t_get_prop_item_height (combo_box_t* obj) {
  return obj->item_height;
}

bool_t window_t_get_prop_fullscreen (window_t* obj) {
  return obj->fullscreen;
}

void* timer_info_t_get_prop_ctx (timer_info_t* obj) {
  return obj->ctx;
}

uint32_t timer_info_t_get_prop_id (timer_info_t* obj) {
  return obj->id;
}

uint64_t timer_info_t_get_prop_now (timer_info_t* obj) {
  return obj->now;
}

const char* dialog_t_get_prop_highlight (dialog_t* obj) {
  return obj->highlight;
}

uint32_t object_default_t_get_prop_props_size (object_default_t* obj) {
  return obj->props_size;
}

uint32_t object_array_t_get_prop_props_size (object_array_t* obj) {
  return obj->props_size;
}

void* idle_info_t_get_prop_ctx (idle_info_t* obj) {
  return obj->ctx;
}

uint32_t idle_info_t_get_prop_id (idle_info_t* obj) {
  return obj->id;
}

bool_t popup_t_get_prop_close_when_click (popup_t* obj) {
  return obj->close_when_click;
}

bool_t popup_t_get_prop_close_when_click_outside (popup_t* obj) {
  return obj->close_when_click_outside;
}

bool_t overlay_t_get_prop_click_through (overlay_t* obj) {
  return obj->click_through;
}

image_draw_type_t image_t_get_prop_draw_type (image_t* obj) {
  return obj->draw_type;
}

