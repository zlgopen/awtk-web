/**
 * File:   image_loader_web.h
 * Author: AWTK Develop Team
 * Brief:  image_loader interface
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
 * 2018-01-21 Li XianJing <xianjimli@hotmail.com> created
 *
 */

#include "tkc/utils.h"
#include "image_loader_web.h"

#ifdef AWTK_WEB
#include <emscripten.h>

static ret_t image_loader_web_load(image_loader_t *l, const asset_info_t *asset,
                                   bitmap_t *image) {
  int32_t w = 0;
  int32_t h = 0;
  int32_t id = 0;
  const char *name = NULL;
  return_value_if_fail(l != NULL && asset != NULL && image != NULL,
                       RET_BAD_PARAMS);

  name = asset->name;
  id = EM_ASM_INT({ return ImageLoader.load(pointerToString($0)); }, name);
  w = EM_ASM_INT({ return ImageLoader.getWidth(pointerToString($0)); }, name);
  h = EM_ASM_INT({ return ImageLoader.getHeight(pointerToString($0)); }, name);

  memset(image, 0x00, sizeof(bitmap_t));
  image->w = w;
  image->h = h;
  image->specific = tk_pointer_from_int(id);

  return RET_OK;
}

static const image_loader_t s_web_loader = {.load = image_loader_web_load};

image_loader_t *image_loader_web() { return (image_loader_t *)&s_web_loader; }

#endif /*AWTK_WEB*/
