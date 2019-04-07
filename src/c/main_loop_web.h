/**
 * File:   main_loop_web.h
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

#ifndef TK_MAIN_LOOP_WEB_H
#define TK_MAIN_LOOP_WEB_H

#include "base/idle.h"
#include "base/timer.h"
#include "base/main_loop.h"
#include "base/event_queue.h"
#include "base/font_manager.h"
#include "base/window_manager.h"

BEGIN_C_DECLS

struct _main_loop_web_t;
typedef struct _main_loop_web_t main_loop_web_t;

struct _main_loop_web_t {
  main_loop_t base;
};

main_loop_t* main_loop_init(int w, int h);
ret_t main_loop_web_step(main_loop_t* l);

END_C_DECLS

#endif /*TK_MAIN_LOOP_WEB_H*/
