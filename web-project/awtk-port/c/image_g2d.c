/**
 * File:   image_g2d.c
 * Author: AWTK Develop Team
 * Brief:  image 2d operations.
 *
 * Copyright (c) 2018 - 2024  Guangzhou ZHIYUAN Electronics Co.,Ltd.
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
 * 2018-06-14 Li XianJing <xianjimli@hotmail.com> created
 *
 */

#include "tkc/utils.h"
#include "base/g2d.h"
#include <emscripten.h>
#include "blend/soft_g2d.h"
#include "blend/image_g2d.h"

ret_t image_fill(bitmap_t* dst, const rect_t* dst_r, color_t c) {
  return_value_if_fail(dst != NULL && dst_r != NULL, RET_OK);

  assert(dst_r->x >= 0 && (dst_r->x + dst_r->w) <= bitmap_get_physical_width(dst));
  assert(dst_r->y >= 0 && (dst_r->y + dst_r->h) <= bitmap_get_physical_height(dst));

  int x = dst_r->x;
  int y = dst_r->y;
  int w = dst_r->w;
  int h = dst_r->h;
  char scolor[32];
  int r = c.rgba.r;
  int g = c.rgba.g;
  int b = c.rgba.b;
  int a = c.rgba.a;

  int32_t id = tk_pointer_to_int(dst->specific);
  snprintf(scolor, sizeof(scolor), "#%02x%02x%02x%02x", r, g, b, a);

  log_debug("%s\n", scolor);

  EM_ASM_INT({ return VGCanvas.mutableImageFillRect($0, $1, $2, $3, $4, $5); }, id, x, y, w, h, scolor);

  return RET_OK;
}

ret_t image_clear(bitmap_t* dst, const rect_t* dst_r, color_t c) {
  return_value_if_fail(dst != NULL && dst_r != NULL, RET_OK);

  assert(dst_r->x >= 0 && (dst_r->x + dst_r->w) <= bitmap_get_physical_width(dst));
  assert(dst_r->y >= 0 && (dst_r->y + dst_r->h) <= bitmap_get_physical_height(dst));

  int x = dst_r->x;
  int y = dst_r->y;
  int w = dst_r->w;
  int h = dst_r->h;
  char scolor[32];
  int32_t id = tk_pointer_to_int(dst->specific);
  snprintf(scolor, sizeof(scolor), "#%08u", c.color);

  EM_ASM_INT({ return VGCanvas.mutableImageClearRect($0, $1, $2, $3, $4, $5); }, id, x, y, w, h, scolor);

  return RET_OK;
}

ret_t image_copy(bitmap_t* dst, bitmap_t* src, const rect_t* src_r, xy_t dx, xy_t dy) {
  return_value_if_fail(dst != NULL && src != NULL && src_r != NULL, RET_OK);

  assert(dx >= 0 && (dx + src_r->w) <= bitmap_get_physical_width(dst));
  assert(dy >= 0 && (dy + src_r->h) <= bitmap_get_physical_height(dst));

  return RET_NOT_IMPL;
}

ret_t image_rotate(bitmap_t* dst, bitmap_t* src, const rect_t* src_r, lcd_orientation_t o) {
  return_value_if_fail(dst != NULL && src != NULL && src_r != NULL, RET_OK);

  if (o == LCD_ORIENTATION_0 || o == LCD_ORIENTATION_180) {
    assert(src_r->w <= bitmap_get_physical_width(dst));
    assert(src_r->h <= bitmap_get_physical_height(dst));
  } else if (o == LCD_ORIENTATION_90 || o == LCD_ORIENTATION_270) {
    assert(src_r->w <= bitmap_get_physical_height(dst));
    assert(src_r->h <= bitmap_get_physical_width(dst));
  }

  return RET_NOT_IMPL;
}

ret_t image_blend(bitmap_t* dst, bitmap_t* src, const rectf_t* dst_r, const rectf_t* src_r,
                  uint8_t global_alpha) {
  return_value_if_fail(dst != NULL && src != NULL && dst_r != NULL && src_r != NULL,
                       RET_BAD_PARAMS);

  assert(dst_r->x >= 0 && (dst_r->x + dst_r->w) <= bitmap_get_physical_width(dst));
  assert(dst_r->y >= 0 && (dst_r->y + dst_r->h) <= bitmap_get_physical_height(dst));

  return RET_NOT_IMPL;
}

