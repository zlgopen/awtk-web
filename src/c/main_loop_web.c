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

static ret_t main_loop_web_queue_event(main_loop_t* l, const event_queue_req_t* r) {
  return RET_OK;
}

ret_t main_loop_web_step(main_loop_t* l) {
  main_loop_web_t* loop = (main_loop_web_t*)l;

  timer_dispatch();
  idle_dispatch();
  window_manager_paint(loop->base.wm, &(loop->base.canvas));

  return RET_OK;
}

static ret_t main_loop_web_quit(main_loop_t* l) {
  /*do nothing: as it can not be blocked in browser.*/

  return RET_OK;
}

static ret_t main_loop_web_run(main_loop_t* l) {
  /*do nothing: as it can not be blocked in browser.*/

  return RET_OK;
}

main_loop_t* main_loop_init(int w, int h) {
  canvas_t* canvas = NULL;
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

  main_loop_set((main_loop_t*)loop);

  wm = WINDOW_MANAGER(loop->base.wm);
  canvas = canvas_init(&(loop->base.canvas), lcd, font_manager());
  window_manager_resize(loop->base.wm, lcd->w, lcd->h);
  wm->canvas = canvas;

  EM_ASM_INT({ return mainLoopInit(); }, 0);

  return &(loop->base);
}

int32_t awtk_web_on_key_down(int32_t key, uint32_t timestamp) {
  key_event_t e;
  main_loop_web_t* loop = (main_loop_web_t*)main_loop();
  widget_t* wm = (loop->base.wm);

  loop->last_key = key;
  loop->key_pressed = TRUE;

  memset(&e, 0x00, sizeof(e));
  e.e = event_init(EVT_KEY_DOWN, wm);
  e.key = key;
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

  memset(&e, 0x00, sizeof(e));
  e.e = event_init(EVT_KEY_UP, wm);
  e.key = key;
  e.e.time = timestamp;

  window_manager_dispatch_input_event(wm, (event_t*)(&e));

  return TRUE;
}

int32_t awtk_web_on_wheel(int32_t delta, uint32_t timestamp) {
  wheel_event_t e;
  main_loop_web_t* loop = (main_loop_web_t*)main_loop();
  widget_t* wm = (loop->base.wm);

  memset(&e, 0x00, sizeof(e));
  e.e = event_init(EVT_WHEEL, wm);
  e.dy = delta;
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

  memset(&e, 0x00, sizeof(e));
  e.e = event_init(EVT_POINTER_DOWN, wm);
  e.x = x;
  e.y = y;
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

  memset(&e, 0x00, sizeof(e));
  e.e = event_init(EVT_POINTER_MOVE, wm);
  e.x = x;
  e.y = y;
  e.e.time = timestamp;
  e.pressed = loop->pressed;

  window_manager_dispatch_input_event(wm, (event_t*)(&e));

  return TRUE;
}

int32_t awtk_web_on_pointer_up(int32_t x, int32_t y, uint32_t timestamp) {
  pointer_event_t e;
  main_loop_web_t* loop = (main_loop_web_t*)main_loop();
  widget_t* wm = (loop->base.wm);

  loop->last_x = x;
  loop->last_y = y;
  loop->pressed = FALSE;

  memset(&e, 0x00, sizeof(e));
  e.e = event_init(EVT_POINTER_UP, wm);
  e.x = x;
  e.y = y;
  e.e.time = timestamp;

  window_manager_dispatch_input_event(wm, (event_t*)(&e));

  return TRUE;
}

