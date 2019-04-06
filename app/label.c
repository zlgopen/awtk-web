/**
 * File:   label.c
 * Author: AWTK Develop Team
 * Brief:  label demo
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
 * 2018-08-15 Li XianJing <xianjimli@hotmail.com> created
 *
 */

#include "awtk.h"
#include <stdio.h>

ret_t application_init(void) {
  widget_t* win = window_open("main");
  printf("win name=%s\n", win->name);
  
  return RET_OK;
}

