#include "tkc.h"
#include "base/types_def.h"

typedef struct _web_font_glyph_t {
  uint32_t x;
  uint32_t y;
  uint32_t w;
  uint32_t h;
  uint32_t glyph_index;
  color_t curr_color;
  font_size_t font_size;
} web_font_glyph_t;

typedef struct _web_font_t {
  int32_t id;
  uint32_t w;
  uint32_t h;
  uint32_t start_x;
  uint32_t start_y;
  uint32_t line_length;
  darray_t glyphs;
  uint8_t* data;
  uint8_t* data_head;
} web_font_t;

static int web_font_glyph_compare(const void* a, const void* b) {
  web_font_glyph_t* glyph_a = (web_font_glyph_t*)a;
  web_font_glyph_t* glyph_b = (web_font_glyph_t*)b;
  if (glyph_a->glyph_index != glyph_b->glyph_index) {
    /* glyph_index是uint32_t，用显式比较避免相减溢出 */
    return glyph_a->glyph_index > glyph_b->glyph_index ? 1 : -1;
  }
  if (glyph_a->font_size != glyph_b->font_size) {
    return glyph_a->font_size > glyph_b->font_size ? 1 : -1;
  }
  return 0;
}

ret_t web_font_destroy(web_font_t* web_font) {
  return_value_if_fail(web_font != NULL, RET_BAD_PARAMS);
  darray_deinit(&web_font->glyphs);
  if (web_font->data_head != NULL) {
    EM_ASM_INT({ return VGCanvas.destroyMutableImage($0); }, web_font->id);
    TKMEM_FREE(web_font->data_head);
  }
  TKMEM_FREE(web_font);
  return RET_OK;
}

web_font_t* web_font_create(uint32_t w, uint32_t h) {
  uint32_t size = 0;
  uint8_t* data = NULL;
  web_font_t* web_font = TKMEM_ZALLOC(web_font_t);
  return_value_if_fail(web_font != NULL, NULL);
  goto_error_if_fail(darray_init(&web_font->glyphs, 128, default_destroy, web_font_glyph_compare) != NULL);

  web_font->w = w;
  web_font->h = h;
  web_font->line_length = w * 4;

  size = web_font->line_length * h;
  size = TK_ROUND_TO(size, BITMAP_ALIGN_SIZE) + BITMAP_ALIGN_SIZE;

  data = (uint8_t*)TKMEM_ALLOC(size);
  goto_error_if_fail(data != NULL);

  web_font->data_head = data;
  memset(data, 0x00, size);
  while (((uint32_t)(data - (uint8_t*)NULL)) % BITMAP_ALIGN_SIZE) {
    data++;
  }
  web_font->data = data;
  web_font->id = EM_ASM_INT({ return VGCanvas.createMutableImage($0, $1, $2, $3, $4); }, web_font->data, 
                              web_font->w, web_font->h, web_font->line_length, BITMAP_FMT_RGBA8888);
  return web_font;
error :
  web_font_destroy(web_font);
  return NULL;
}

static ret_t web_font_set_glyph_data(web_font_t* web_font, uint32_t x, uint32_t y, uint32_t w, uint32_t h, const uint8_t* data, color_t color) {
  uint32_t xx, yy;
  uint8_t* dst= NULL;
  return_value_if_fail(web_font != NULL && data != NULL, RET_BAD_PARAMS);
  dst = web_font->data + x * 4 + y * web_font->line_length;

  for (yy = 0; yy < h; yy++) {
    uint8_t* d = dst;
    for (xx = 0; xx < w; xx++) {
      d[0] = color.rgba.r;
      d[1] = color.rgba.g;
      d[2] = color.rgba.b;
      d[3] = (*data * (uint32_t)color.rgba.a) >> 8;
      d += 4;
      data++;
    }
    dst += web_font->line_length;
  }
  EM_ASM_INT({ return VGCanvas.updateMutableImageForRect($0, $1, $2, $3, $4); },
             web_font->id, x, y, w, h);
  return RET_OK;
}

static web_font_glyph_t* web_font_get_glyph(web_font_t* web_font, uint32_t glyph_index, font_size_t font_size, uint32_t w, uint32_t h, const uint8_t* data, color_t color) {
  int32_t x = -1, y = -1;
  uint32_t next_x, next_y;
  web_font_glyph_t* glyph = NULL;
  web_font_glyph_t tmp_glyph = { .glyph_index = glyph_index, .font_size = font_size };
  return_value_if_fail(web_font != NULL && data != NULL, NULL);
  glyph = darray_bsearch(&web_font->glyphs, web_font_glyph_compare, &tmp_glyph);
  if (glyph == NULL) {
    /* 每个字模预留1像素透明边距，避免LINEAR采样时混合相邻字模 */
    uint32_t alloc_w = w + 1;
    uint32_t alloc_h = h + 1;
    uint32_t r = web_font->start_x + alloc_w;
    uint32_t b = web_font->start_y + alloc_h;
    if (r <= web_font->w && b <= web_font->h) {
      x = web_font->start_x;
      y = web_font->start_y;
      next_x = x + alloc_w;
      next_y = y;
    } else if (r > web_font->w && b + alloc_h <= web_font->h) {
      x = 0;
      y = web_font->start_y + alloc_h;
      next_x = alloc_w;
      next_y = y;
    }

    if (x >= 0 && y >= 0) {
      glyph = TKMEM_ZALLOC(web_font_glyph_t);
      return_value_if_fail(glyph != NULL, NULL);
      web_font_set_glyph_data(web_font, x, y, w, h, data, color);
      glyph->glyph_index = glyph_index;
      glyph->font_size = font_size;
      glyph->x = x;
      glyph->y = y;
      glyph->w = w;
      glyph->h = h;
      glyph->curr_color = color;
      web_font->start_x = next_x;
      web_font->start_y = next_y;
      darray_sorted_insert(&web_font->glyphs, glyph, web_font_glyph_compare, TRUE);
    }
  }
  if (glyph->curr_color.color != color.color) {
    glyph->curr_color = color;
    web_font_set_glyph_data(web_font, glyph->x, glyph->y, glyph->w, glyph->h, data, color);
  }
  return glyph;
}

ret_t web_font_draw_glyph(web_font_t* web_font, uint32_t glyph_index, font_size_t font_size, float_t x, float_t y, uint32_t w, uint32_t h, const uint8_t* data, color_t color) {
  web_font_glyph_t* glyph = NULL;
  return_value_if_fail(web_font != NULL && data != NULL, RET_BAD_PARAMS);
  glyph = web_font_get_glyph(web_font, glyph_index, font_size, w, h, data, color);
  return_value_if_fail(glyph != NULL, RET_OOM);

  /* 临时撤销canvas的scale变换，用物理像素1:1绘制字模 */
  EM_ASM_DOUBLE({
    VGCanvas.ctx.save();
    VGCanvas.ctx.setTransform(1, 0, 0, 1, 0, 0);
    var ret = VGCanvas.drawImage($0, $1, $2, $3, $4, $5, $6, $7, $8);
    VGCanvas.ctx.restore();
    return ret;
  }, web_font->id, glyph->x, glyph->y, w, h, x, y, w, h);

  return RET_OK;
}
