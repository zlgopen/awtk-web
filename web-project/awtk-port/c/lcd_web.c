﻿/**
 * File:   lcd_web.c
 * Author: AWTK Develop Team
 * Brief:  web implemented lcd interface
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
 * 2019-03-31 Li XianJing <xianjimli@hotmail.com> created
 *
 */

#include <emscripten.h>

#include "lcd_web.h"
#include "base/lcd.h"
#include "base/vgcanvas.h"
#include "lcd/lcd_vgcanvas.inc"

lcd_t *lcd_web_init(void) {
  lcd_t* lcd = NULL;
  vgcanvas_t *vg = vgcanvas_create(0, 0, 0, 0, NULL);
  return_value_if_fail(vg != NULL, NULL);

  lcd = lcd_vgcanvas_init(vg->w, vg->h, vg);
  return_value_if_fail(lcd != NULL, NULL);

  lcd->support_dirty_rect = EM_ASM_INT({ return TBrowser.supportDirtyRect() }, 0);

  return lcd;
}
