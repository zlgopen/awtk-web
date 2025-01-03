﻿/**
 * File:   image_g2d.c
 * Author: AWTK Develop Team
 * Brief:  image 2d operations.
 *
 * Copyright (c) 2018 - 2025 Guangzhou ZHIYUAN Electronics Co.,Ltd.
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
#include "blend/soft_g2d.h"
#include "blend/image_g2d.h"
#include <emscripten.h>

ret_t image_fill(bitmap_t* dst, const rect_t* dst_r, color_t c) {
  return_value_if_fail(dst != NULL && dst_r != NULL, RET_OK);

  assert(dst_r->x >= 0 && (dst_r->x + dst_r->w) <= bitmap_get_physical_width(dst));
  assert(dst_r->y >= 0 && (dst_r->y + dst_r->h) <= bitmap_get_physical_height(dst));

  if (dst->buffer == NULL) {
    log_debug("image_fill only apply for mutable image\n");
    return RET_NOT_IMPL;
  }

  return soft_fill_rect(dst, dst_r, c);
}

ret_t image_clear(bitmap_t* dst, const rect_t* dst_r, color_t c) {
  return_value_if_fail(dst != NULL && dst_r != NULL, RET_OK);

  assert(dst_r->x >= 0 && (dst_r->x + dst_r->w) <= bitmap_get_physical_width(dst));
  assert(dst_r->y >= 0 && (dst_r->y + dst_r->h) <= bitmap_get_physical_height(dst));

  if (dst->buffer == NULL) {
    log_debug("image_fill only apply for mutable image\n");
    return RET_NOT_IMPL;
  }

  return soft_clear_rect(dst, dst_r, c);
}

ret_t image_copy(bitmap_t* dst, bitmap_t* src, const rect_t* src_r, xy_t dx, xy_t dy) {
  return_value_if_fail(dst != NULL && src != NULL && src_r != NULL, RET_OK);

  assert(dx >= 0 && (dx + src_r->w) <= bitmap_get_physical_width(dst));
  assert(dy >= 0 && (dy + src_r->h) <= bitmap_get_physical_height(dst));

  if (dst->buffer == NULL) {
    log_debug("image_copy only apply for mutable image\n");
    return RET_NOT_IMPL;
  }

  if (src->buffer == NULL) {
    int dst_id = tk_pointer_to_int(dst->specific);
    int src_id = tk_pointer_to_int(src->specific);
    EM_ASM_INT(
        { return VGCanvas.mutableImageDrawImage($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10); },
        dst_id, src_id, src_r->x, src_r->y, src_r->w, src_r->h, dx, dy, src->w, src->h, 0xff);
    return RET_OK;
  } else {
    return soft_copy_image(dst, src, src_r, dx, dy);
  }
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

  if (dst->buffer == NULL) {
    log_debug("image_rotate only apply for mutable image\n");
    return RET_NOT_IMPL;
  }

  return soft_rotate_image(dst, src, src_r, o);
}

ret_t image_blend(bitmap_t* dst, bitmap_t* src, const rectf_t* dst_r, const rectf_t* src_r,
                  uint8_t global_alpha) {
  return_value_if_fail(dst != NULL && src != NULL && dst_r != NULL && src_r != NULL,
                       RET_BAD_PARAMS);

  assert(dst_r->x >= 0 && (dst_r->x + dst_r->w) <= bitmap_get_physical_width(dst));
  assert(dst_r->y >= 0 && (dst_r->y + dst_r->h) <= bitmap_get_physical_height(dst));

  if (dst->buffer == NULL) {
    log_debug("image_blend only apply for mutable image\n");
    return RET_NOT_IMPL;
  }

  if (src->buffer == NULL) {
    int dst_id = tk_pointer_to_int(dst->specific);
    int src_id = tk_pointer_to_int(src->specific);
    EM_ASM_INT(
        { return VGCanvas.mutableImageDrawImage($0, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10); },
        dst_id, src_id, src_r->x, src_r->y, src_r->w, src_r->h, dst_r->x, dst_r->y, src->w, src->h,
        global_alpha);
    return RET_OK;
  } else {
    return soft_blend_image(dst, src, dst_r, src_r, global_alpha);
  }
}
