/**
 * File:   image_loader_web.h
 * Author: AWTK Develop Team
 * Brief:  web image loader
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
 * 2019-04-14 Li XianJing <xianjimli@hotmail.com> created
 *
 */

#ifndef TK_IMAGE_LOADER_WEB_H
#define TK_IMAGE_LOADER_WEB_H

#include "base/image_loader.h"

BEGIN_C_DECLS

/**
 * @class image_loader_web_t
 * @parent image_loader_t
 * web图片加载器。
 *
 * @annotation["fake"]
 *
 */

/**
 * @method image_loader_web
 * @annotation ["constructor"]
 *
 * 获取web图片加载器对象。
 *
 * @return {image_loader_t*} 返回图片加载器对象。
 */
image_loader_t *image_loader_web(void);

END_C_DECLS

#endif /*TK_IMAGE_LOADER_WEB_H*/
