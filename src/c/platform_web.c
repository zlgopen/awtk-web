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
#include "base/timer.h"
#include "tkc/platform.h"
#include "tkc/date_time.h"

#include <emscripten.h>

static ret_t date_time_get_now_impl(date_time_t *dt) {
  return_value_if_fail(dt != NULL, RET_BAD_PARAMS);

  EM_ASM_INT({ return TBrowser.updateDate(); }, 0);
  dt->second = EM_ASM_INT({ return TBrowser.getSeconds(); }, 0);
  dt->minute = EM_ASM_INT({ return TBrowser.getMinutes(); }, 0);
  dt->hour = EM_ASM_INT({ return TBrowser.getHours(); }, 0);
  dt->day = EM_ASM_INT({ return TBrowser.getDate(); }, 0);
  dt->month = EM_ASM_INT({ return TBrowser.getMonth(); }, 0);
  dt->year = EM_ASM_INT({ return TBrowser.getFullYear(); }, 0);
  dt->wday = EM_ASM_INT({ return TBrowser.getDay(); }, 0);

  return RET_OK;
}

uint32_t get_time_ms() {
  return EM_ASM_INT({ return Date.now(); }, 0);
}

ret_t platform_prepare(void) {
  date_time_set_impl(date_time_get_now_impl);

  EM_ASM_INT({ console.log('platform_prepare'); }, 0);

  return RET_OK;
}
