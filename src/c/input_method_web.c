/**
 * File:   input_method_web.c
 * Author: AWTK Develop Team
 * Brief:  input method web
 *
 * Copyright (c) 2018 - 2019  Guangzhou ZHIYUAN Electronics Co.,Ltd.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * License file for more details.
 *
 */

/**
 * History:
 * ================================================================
 * 2019-04-20 Li XianJing <xianjimli@hotmail.com> created
 *
 */

#include "tkc/mem.h"
#include "tkc/utf8.h"
#include <emscripten.h>
#include "widgets/edit.h"
#include "mledit/mledit.h"
#include "base/input_method.h"

static bool_t widget_is_mledit(widget_t* widget) {
  return tk_str_eq(widget->vt->type, WIDGET_TYPE_MLEDIT);
}

static ret_t input_method_web_on_window_close(void* ctx, event_t* e) {
  EM_ASM_INT({ return InputMethodWeb.stop(); }, 0);

  return RET_REMOVE;
}

static bool_t widget_need_custom_keyboard(widget_t* widget) {
  if(widget != NULL && widget_get_prop_int(widget, WIDGET_PROP_INPUT_TYPE, 0) == INPUT_CUSTOM) {
    return TRUE;
  }

  return FALSE;
}

static const char* awtk_input_type_to_web_input_type(int32_t input_type) {
  switch(input_type) {
    case INPUT_PASSWORD: 
      {
        return "password";
      }
    case INPUT_EMAIL: 
      {
        return "email";
      }
    case INPUT_PHONE: 
      {
        return "tel";
      }
    case INPUT_TEXT: 
      {
        return "text";
      }
    default:
      {
        return "number";
      }
  }
}

static ret_t input_method_web_request(input_method_t *im, widget_t *widget) {
  if (widget != NULL) {
    rect_t r;
    char text[2048];
    point_t p = {0, 0};
    edit_t *edit = EDIT(widget);
    const char *font = "sans";
    uint32_t font_size = 18;
    const char *bg_color = "white";
    const char *text_color = "black";
    bool_t is_mledit = widget_is_mledit(widget);
    int32_t input_type = widget_get_prop_int(widget, WIDGET_PROP_INPUT_TYPE, 0);
    const char* sinput_type = awtk_input_type_to_web_input_type(input_type);

    if(widget_need_custom_keyboard(widget)) {
      log_debug("custom keyboard open ime\n");
      im->widget = widget;
      return RET_OK;
    }

    widget_to_screen(widget, &p);
    r = rect_init(p.x, p.y, widget->w, widget->h);

    // r.y += edit->top_margin;
    // r.h -= edit->top_margin + edit->bottom_margin;
    r.y += 2;
    r.x += edit->left_margin;
    r.w -= edit->left_margin + edit->right_margin;

    memset(text, 0x00, sizeof(text));
    wstr_get_utf8(&(widget->text), text, sizeof(text) - 1);
    EM_ASM_INT({ return InputMethodWeb.start($0, $1, $2, $3, $4, $5); }, r.x, r.y, r.w,
               r.h, sinput_type, is_mledit);
    EM_ASM_INT({ return InputMethodWeb.initEdit($0, $1, $2, $3, $4); }, text,
               font, font_size, text_color, bg_color);
    widget_on(widget_get_window(widget), EVT_WINDOW_CLOSE, input_method_web_on_window_close, NULL);
  } else {
    if(widget_need_custom_keyboard(im->widget)) {
      log_debug("custom keyboard close ime\n");
      im->widget = NULL;
      return RET_OK;
    }

    EM_ASM_INT({ return InputMethodWeb.stop(); }, 0);
  }

  im->widget = widget;

  return RET_OK;
}

static ret_t input_method_web_destroy(input_method_t *im) {
  return_value_if_fail(im != NULL, RET_BAD_PARAMS);

  emitter_deinit(&(im->emitter));
  TKMEM_FREE(im);

  return RET_OK;
}

input_method_t *input_method_web_create(void) {
  input_method_t *im = TKMEM_ZALLOC(input_method_t);
  return_value_if_fail(im != NULL, NULL);

  im->request = input_method_web_request;
  im->destroy = input_method_web_destroy;

  emitter_init(&(im->emitter));

  return im;
}
