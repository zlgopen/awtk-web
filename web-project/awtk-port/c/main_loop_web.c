/**
 * File:   main_loop_web.c
 * Author: AWTK Develop Team
 * Brief:  a web main loop
 *
 * Copyright (c) 2018 - 2019  Guangzhou ZHIYUAN Electronics Co.,Ltd.
 *
 * this program is distributed in the hope that it will be useful,
 * but without any warranty; without even the implied warranty of
 * merchantability or fitness for a particular purpose.  see the
 * license file for more details.
 *
 */

/**
 * history:
 * ================================================================
 * 2019-03-31 li xianjing <xianjimli@hotmail.com> created
 *
 */

#include <stdio.h>
#include <emscripten.h>

#include "lcd_web.h"
#include "tkc/time_now.h"
#include "main_loop_web.h"
#include "base/input_method.h"
#include "native_window/native_window_raw.h"

static ret_t main_loop_web_queue_event(main_loop_t* l, const event_queue_req_t* r) {
  return RET_OK;
}

ret_t main_loop_web_step(main_loop_t* l) {
  main_loop_web_t* loop = (main_loop_web_t*)l;

  timer_dispatch();
  idle_dispatch();
  window_manager_check_and_layout(loop->base.wm);
  window_manager_paint(loop->base.wm);

  return RET_OK;
}

static ret_t main_loop_web_quit(main_loop_t* l) {
  /*do nothing: as it can not be blocked in browser.*/
  native_window_raw_deinit();

  return RET_OK;
}

static ret_t main_loop_web_run(main_loop_t* l) {
  /*do nothing: as it can not be blocked in browser.*/

  return RET_OK;
}

main_loop_t* main_loop_init(int w, int h) {
  window_manager_t* wm = NULL;
  lcd_t* lcd = lcd_web_init();
  static main_loop_web_t s_main_loop_web;
  main_loop_web_t* loop = &s_main_loop_web;

  memset(loop, 0x00, sizeof(main_loop_web_t));
  printf("main_loop_init\n");
  loop->base.wm = window_manager();
  return_value_if_fail(loop->base.wm != NULL, NULL);

  loop->base.run = main_loop_web_run;
  loop->base.quit = main_loop_web_quit;
  loop->base.queue_event = main_loop_web_queue_event;

  native_window_raw_init(lcd);

  main_loop_set((main_loop_t*)loop);
  EM_ASM_INT({ return mainLoopInit(); }, 0);

  window_manager_post_init(loop->base.wm, lcd_get_width(lcd), lcd_get_height(lcd));

  return &(loop->base);
}

int32_t awtk_web_on_key_down(int32_t key, uint32_t timestamp) {
  key_event_t e;
  main_loop_web_t* loop = (main_loop_web_t*)main_loop();
  widget_t* wm = (loop->base.wm);

  loop->last_key = key;
  loop->key_pressed = TRUE;

  key_event_init(&e, EVT_KEY_DOWN, wm, key);
  e.e.time = timestamp;

  window_manager_dispatch_input_event(wm, (event_t*)(&e));

  return TRUE;
}

int32_t awtk_web_on_key_up(int32_t key, uint32_t timestamp) {
  key_event_t e;
  main_loop_web_t* loop = (main_loop_web_t*)main_loop();
  widget_t* wm = (loop->base.wm);

  loop->last_key = key;
  loop->key_pressed = FALSE;

  key_event_init(&e, EVT_KEY_UP, wm, key);
  e.e.time = timestamp;

  window_manager_dispatch_input_event(wm, (event_t*)(&e));

  return TRUE;
}

int32_t awtk_web_on_wheel(int32_t delta, uint32_t timestamp) {
  wheel_event_t e;
  main_loop_web_t* loop = (main_loop_web_t*)main_loop();
  widget_t* wm = (loop->base.wm);

  wheel_event_init(&e, EVT_WHEEL, wm, delta);
  e.e.time = timestamp;

  window_manager_dispatch_input_event(wm, (event_t*)(&e));

  return TRUE;
}

int32_t awtk_web_on_pointer_down(int32_t x, int32_t y, uint32_t timestamp) {
  pointer_event_t e;
  main_loop_web_t* loop = (main_loop_web_t*)main_loop();
  widget_t* wm = (loop->base.wm);

  loop->last_x = x;
  loop->last_y = y;
  loop->pressed = TRUE;

  pointer_event_init(&e, EVT_POINTER_DOWN, wm, x, y);
  e.e.time = timestamp;

  window_manager_dispatch_input_event(wm, (event_t*)(&e));

  return TRUE;
}

int32_t awtk_web_on_pointer_move(int32_t x, int32_t y, uint32_t timestamp) {
  pointer_event_t e;
  main_loop_web_t* loop = (main_loop_web_t*)main_loop();
  widget_t* wm = (loop->base.wm);

  loop->last_x = x;
  loop->last_y = y;

  pointer_event_init(&e, EVT_POINTER_MOVE, wm, x, y);
  e.e.time = timestamp;
  e.pressed = loop->pressed;

  window_manager_dispatch_input_event(wm, (event_t*)(&e));

  return TRUE;
}

int32_t awtk_web_on_pointer_up(int32_t x, int32_t y, uint32_t timestamp) {
  pointer_event_t e;
  main_loop_web_t* loop = (main_loop_web_t*)main_loop();
  widget_t* wm = (loop->base.wm);

  pointer_event_init(&e, EVT_POINTER_UP, wm, x, y);
  e.e.time = timestamp;
  e.pressed = loop->pressed;

  loop->last_x = x;
  loop->last_y = y;
  loop->pressed = FALSE;

  window_manager_dispatch_input_event(wm, (event_t*)(&e));

  return TRUE;
}

int32_t awtk_web_on_im_commit(const char* text, uint32_t timestamp) {
  log_debug("awtk_web_on_im_commit text=%s\n", text);

  return input_method_commit_text_ex(input_method(), TRUE, text) == RET_OK;
}

int32_t awtk_web_on_touch(int32_t touch_type, int32_t id, int32_t x, int32_t y,
                          uint32_t timestamp) {
  event_t* e = NULL;
  touch_event_t event;
  int type = EVT_TOUCH_DOWN;
  widget_t* widget = window_manager();
  float fx = (float)x / (float)(widget->w);
  float fy = (float)y / (float)(widget->h);

  memset(&event, 0x00, sizeof(event));
  switch (touch_type) {
    case 0: {
      type = EVT_TOUCH_DOWN;
      break;
    }
    case 1: {
      type = EVT_TOUCH_MOVE;
      break;
    }
    case 2: {
      type = EVT_TOUCH_UP;
      break;
    }
    default:
      break;
  }

  e = touch_event_init(&event, type, widget, 0xffff, id, fx, fy, 0);

  if (e != NULL) {
    widget_t* win = window_manager_get_top_window(widget);
    widget_dispatch(win, e);
  }

  log_debug("awtk_web_on_touch type=%d id=%d x=(%d %f) y=(%d %f)\n", touch_type, (int)id, x, fx, y,
            fy);

  return TRUE;
}