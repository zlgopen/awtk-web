/**
 * File:   platform_web.c
 * Author: AWTK Develop Team
 * Brief:  web implemented platform functions
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
 * 2019-04-07 Li XianJing <xianjimli@hotmail.com> created
 *
 */

#include <tkc/types_def.h>
#include <emscripten.h>

uint32_t get_time_ms() {
  uint32_t now = EM_ASM_INT({ return Date.now(); }, 0);

  return now;
}

ret_t platform_prepare(void) {
  return RET_OK;
}

