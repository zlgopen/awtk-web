/**
 * File:   vgcanvas_web.c
 * Author: AWTK Develop Team
 * Brief:  web implemented vgcanvas interface
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

#include "tkc/utils.h"
#include <emscripten.h>
#include "base/vgcanvas.h"

#define MAX_STATES 32

typedef struct _vgcanvas_web_t {
  vgcanvas_t base;
  int nstates;
  rect_t clip_rect[MAX_STATES + 1];
  char text_color[TK_COLOR_RGBA_LEN + 1];
  char fill_color[TK_COLOR_RGBA_LEN + 1];
  char stroke_color[TK_COLOR_RGBA_LEN + 1];
  char start_color[TK_COLOR_RGBA_LEN + 1];
  char end_color[TK_COLOR_RGBA_LEN + 1];
} vgcanvas_web_t;

static ret_t vgcanvas_web_reinit(vgcanvas_t *vg, uint32_t w, uint32_t h,
                                 uint32_t stride, bitmap_format_t format,
                                 void *data) {
  (void)vg;
  (void)w;
  (void)h;
  (void)format;
  (void)data;
  return RET_OK;
}

static const rectf_t* vgcanvas_web_get_clip_rect(vgcanvas_t* vgcanvas) {
  return &vgcanvas->clip_rect;
}

static bool_t vgcanvas_web_is_rectf_in_clip_rect(vgcanvas_t* vgcanvas, float_t left, float_t top,
                                                 float_t right, float_t bottom) {
  float_t clip_left = vgcanvas->clip_rect.x;
  float_t clip_right = vgcanvas->clip_rect.x + vgcanvas->clip_rect.w;
  float_t clip_top = vgcanvas->clip_rect.y;
  float_t clip_bottom = vgcanvas->clip_rect.y + vgcanvas->clip_rect.h;
  if (left > clip_right || right < clip_left || top > clip_bottom || bottom < clip_top) {
    return FALSE;
  }
  return TRUE;
}

static ret_t vgcanvas_web_begin_frame(vgcanvas_t *vgcanvas,
                                      const dirty_rects_t *dirty_rect) {
  EM_ASM_INT({ return VGCanvas.beginFrame(); }, 0);

  return RET_OK;
}

static ret_t vgcanvas_web_end_frame(vgcanvas_t *vgcanvas) {
  EM_ASM_INT({ return VGCanvas.endFrame(); }, 0);

  return RET_OK;
}

static ret_t vgcanvas_web_create_fbo(vgcanvas_t *vgcanvas, uint32_t w, uint32_t h,
                                     bool_t custom_draw_model, framebuffer_object_t *fbo) {
  fbo->w = w;
  fbo->h = h;
  fbo->ratio = vgcanvas->ratio;
  fbo->id = EM_ASM_INT({ return VGCanvas.createFBO(); }, 0);

  return RET_OK;
}

static ret_t vgcanvas_web_destroy_fbo(vgcanvas_t *vgcanvas,
                                      framebuffer_object_t *fbo) {
  EM_ASM_INT({ return VGCanvas.destroyFBO($0); }, fbo->id);

  return RET_OK;
}

static ret_t vgcanvas_web_bind_fbo(vgcanvas_t *vgcanvas,
                                   framebuffer_object_t *fbo) {
  vgcanvas_web_t *web = (vgcanvas_web_t *)vgcanvas;
  EM_ASM_INT({ return VGCanvas.bindFBO($0); }, fbo->id);
  vgcanvas_save(vgcanvas);

  return RET_OK;
}

static ret_t vgcanvas_web_unbind_fbo(vgcanvas_t *vgcanvas,
                                     framebuffer_object_t *fbo) {
  vgcanvas_restore(vgcanvas);
  EM_ASM_INT({ return VGCanvas.unbindFBO($0); }, fbo->id);
  return RET_OK;
}

static ret_t vgcanvas_web_fbo_to_bitmap(vgcanvas_t* vg, framebuffer_object_t* fbo, bitmap_t* img, const rect_t* r) {
  img->specific = tk_pointer_from_int(fbo->id);

  return RET_OK;
}

static ret_t vgcanvas_web_destroy(vgcanvas_t *vgcanvas) { return RET_OK; }

static ret_t vgcanvas_web_reset(vgcanvas_t *vgcanvas) {
  (void)vgcanvas;

  return RET_OK;
}

static ret_t vgcanvas_web_flush(vgcanvas_t *vgcanvas) {
  (void)vgcanvas;

  return RET_OK;
}

static ret_t vgcanvas_web_clear_rect(vgcanvas_t *vgcanvas, float_t x, float_t y,
                                     float_t w, float_t h, color_t c) {
  vgcanvas_set_fill_color(vgcanvas, c);
  vgcanvas_rect(vgcanvas, x, y, w, h);
  vgcanvas_fill(vgcanvas);

  return RET_OK;
}

static ret_t vgcanvas_web_begin_path(vgcanvas_t *vgcanvas) {
  EM_ASM_INT({ return VGCanvas.beginPath(); }, 0);

  return RET_OK;
}

static ret_t vgcanvas_web_move_to(vgcanvas_t *vgcanvas, float_t x, float_t y) {
  EM_ASM_INT({ return VGCanvas.moveTo($0, $1); }, x, y);

  return RET_OK;
}

static ret_t vgcanvas_web_line_to(vgcanvas_t *vgcanvas, float_t x, float_t y) {
  EM_ASM_INT({ return VGCanvas.lineTo($0, $1); }, x, y);

  return RET_OK;
}

static ret_t vgcanvas_web_quad_to(vgcanvas_t *vgcanvas, float_t cpx,
                                  float_t cpy, float_t x, float_t y) {
  EM_ASM_INT({ return VGCanvas.quadTo($0, $1, $2, $3); }, cpx, cpy, x, y);

  return RET_OK;
}

static ret_t vgcanvas_web_bezier_to(vgcanvas_t *vgcanvas, float_t cp1x,
                                    float_t cp1y, float_t cp2x, float_t cp2y,
                                    float_t x, float_t y) {
  EM_ASM_INT({ return VGCanvas.bezierTo($0, $1, $2, $3, $4, $5); }, cp1x, cp1y,
             cp2x, cp2y, x, y);

  return RET_OK;
}

static ret_t vgcanvas_web_arc_to(vgcanvas_t *vgcanvas, float_t x1, float_t y1,
                                 float_t x2, float_t y2, float_t r) {
  EM_ASM_INT({ return VGCanvas.arcTo($0, $1, $2, $3, $4); }, x1, y1, x2, y2, r);
  return RET_OK;
}

static ret_t vgcanvas_web_arc(vgcanvas_t *vgcanvas, float_t x, float_t y,
                              float_t r, float_t start, float_t end,
                              bool_t ccw) {
  EM_ASM_INT({ return VGCanvas.arc($0, $1, $2, $3, $4, $5); }, x, y, r, start,
             end, ccw);

  return RET_OK;
}

static bool_t vgcanvas_web_is_point_in_path(vgcanvas_t *vgcanvas, float_t x,
                                            float_t y) {
  return (bool_t)EM_ASM_INT({ return VGCanvas.isPointIntPath($0, $1); }, x, y);
}

static ret_t vgcanvas_web_rotate(vgcanvas_t *vgcanvas, float_t rad) {
  EM_ASM_INT({ return VGCanvas.rotate($0); }, rad);

  return RET_OK;
}

static ret_t vgcanvas_web_scale(vgcanvas_t *vgcanvas, float_t x, float_t y) {
  EM_ASM_INT({ return VGCanvas.scale($0, $1); }, x, y);

  return RET_OK;
}

static ret_t vgcanvas_web_translate(vgcanvas_t *vgcanvas, float_t x,
                                    float_t y) {
  EM_ASM_INT({ return VGCanvas.translate($0, $1); }, x, y);

  return RET_OK;
}

static ret_t vgcanvas_web_transform(vgcanvas_t *vgcanvas, float_t a, float_t b,
                                    float_t c, float_t d, float_t e,
                                    float_t f) {
  EM_ASM_INT({ return VGCanvas.transform($0, $1, $2, $3, $4, $5); }, a, b, c, d,
             e, f);

  return RET_OK;
}

static ret_t vgcanvas_web_set_transform(vgcanvas_t *vgcanvas, float_t a,
                                        float_t b, float_t c, float_t d,
                                        float_t e, float_t f) {
  EM_ASM_INT({ return VGCanvas.setTransform($0, $1, $2, $3, $4, $5); }, a, b, c,
             d, e, f);
  return RET_OK;
}

static ret_t vgcanvas_web_rounded_rect(vgcanvas_t *vgcanvas, float_t x,
                                       float_t y, float_t w, float_t h,
                                       float_t r) {
  EM_ASM_INT({ return VGCanvas.roundRect($0, $1, $2, $3, $4); }, x, y, w, h, r);

  return RET_OK;
}

static ret_t vgcanvas_web_ellipse(vgcanvas_t *vgcanvas, float_t x, float_t y,
                                  float_t rx, float_t ry) {
  EM_ASM_INT({ return VGCanvas.ellipse($0, $1, $2, $3); }, x, y, rx, ry);

  return RET_OK;
}

static ret_t vgcanvas_web_close_path(vgcanvas_t *vgcanvas) {
  EM_ASM_INT({ return VGCanvas.closePath(); }, 0);

  return RET_OK;
}

static ret_t vgcanvas_web_clip_rect(vgcanvas_t *vgcanvas, float_t x, float_t y,
                                    float_t w, float_t h) {
  EM_ASM_INT({ return VGCanvas.clipRect($0, $1, $2, $3); }, x, y, w, h);
  vgcanvas->clip_rect.x = x;
  vgcanvas->clip_rect.y = y;
  vgcanvas->clip_rect.w = w;
  vgcanvas->clip_rect.h = h;
  return RET_OK;
}

static ret_t vgcanvas_web_fill(vgcanvas_t *vgcanvas) {
  EM_ASM_INT({ return VGCanvas.fill(); }, 0);

  return RET_OK;
}

static ret_t vgcanvas_web_stroke(vgcanvas_t *vgcanvas) {
  EM_ASM_INT({ return VGCanvas.stroke(); }, 0);

  return RET_OK;
}

static ret_t vgcanvas_web_paint(vgcanvas_t *vgcanvas, bool_t stroke,
                                bitmap_t *img) {
  int32_t id = tk_pointer_to_int(img->specific);

  EM_ASM_INT({ return VGCanvas.paint($0, $1); }, stroke, id);

  return RET_OK;
}

static ret_t vgcanvas_web_set_font_size(vgcanvas_t *vgcanvas, float_t font_size) {
  const char *font = vgcanvas->font != NULL ? vgcanvas->font : "Sans";
  EM_ASM_INT({ return VGCanvas.setFont($0, $1); }, font, font_size);

  return RET_OK;
}

static ret_t vgcanvas_web_set_font(vgcanvas_t *vgcanvas, const char *name) {
  const char *font = name != NULL ? name : "Sans";
  EM_ASM_INT({ return VGCanvas.setFont($0, $1); }, font, vgcanvas->font_size);

  return RET_OK;
}

static ret_t vgcanvas_web_set_text_align(vgcanvas_t *vgcanvas,
                                         const char *text_align) {
  EM_ASM_INT({ return VGCanvas.setTextAlign($0); }, text_align);
  return RET_OK;
}

static ret_t vgcanvas_web_set_text_baseline(vgcanvas_t *vgcanvas,
                                            const char *text_baseline) {
  EM_ASM_INT({ return VGCanvas.setTextBaseline($0); }, text_baseline);
  return RET_OK;
}

static ret_t vgcanvas_web_fill_text(vgcanvas_t *vgcanvas, const char *text,
                                    float_t x, float_t y, float_t max_width) {
  return_value_if_fail(text != NULL, RET_BAD_PARAMS);

  EM_ASM_INT({ return VGCanvas.fillText($0, $1, $2, $3); }, text, x, y,
             max_width);
  return RET_OK;
}

static float_t vgcanvas_web_measure_text(vgcanvas_t *vgcanvas,
                                         const char *text) {
  return EM_ASM_INT({ return VGCanvas.measureText($0); }, text);
}

static ret_t vgcanvas_web_draw_image(vgcanvas_t *vgcanvas, bitmap_t *img,
                                     float_t sx, float_t sy, float_t sw,
                                     float_t sh, float_t dx, float_t dy,
                                     float_t dw, float_t dh) {
  int32_t id = tk_pointer_to_int(img->specific);
  return_value_if_fail(id > 0, RET_BAD_PARAMS);

  if(img->flags & BITMAP_FLAG_CHANGED) {
    EM_ASM_INT({ return VGCanvas.updateMutableImage($0); }, id);
  }

  EM_ASM_INT({ return VGCanvas.drawImage($0, $1, $2, $3, $4, $5, $6, $7, $8); },
             id, sx, sy, sw, sh, dx, dy, dw, dh);

  return RET_OK;
}

static ret_t vgcanvas_web_set_antialias(vgcanvas_t *vgcanvas, bool_t value) {
  return RET_OK;
}

static ret_t vgcanvas_web_set_line_width(vgcanvas_t *vgcanvas, float_t value) {
  vgcanvas_web_t *web = (vgcanvas_web_t *)vgcanvas;

  EM_ASM_INT({ return VGCanvas.setLineWidth($0); }, value);

  return RET_OK;
}

static ret_t vgcanvas_web_set_global_alpha(vgcanvas_t *vgcanvas,
                                           float_t value) {
  vgcanvas_web_t *web = (vgcanvas_web_t *)vgcanvas;

  EM_ASM_INT({ return VGCanvas.setGlobalAlpha($0); }, value);

  return RET_OK;
}

static ret_t vgcanvas_web_set_fill_color(vgcanvas_t *vgcanvas, color_t c) {
  vgcanvas_web_t *web = (vgcanvas_web_t *)vgcanvas;

  color_rgba_str(c, web->fill_color);
  EM_ASM_INT({ return VGCanvas.setFillColor($0); }, web->fill_color);

  return RET_OK;
}

static ret_t vgcanvas_web_set_fill_linear_gradient(vgcanvas_t *vgcanvas,
                                                   float_t sx, float_t sy,
                                                   float_t ex, float_t ey,
                                                   color_t icolor,
                                                   color_t ocolor) {
  vgcanvas_web_t *web = (vgcanvas_web_t *)vgcanvas;

  color_rgba_str(icolor, web->start_color);
  color_rgba_str(ocolor, web->end_color);

  EM_ASM_INT({ return VGCanvas.setFillLinearGradient($0, $1, $2, $3, $4, $5); },
             sx, sy, ex, ey, web->start_color, web->end_color);

  return RET_OK;
}

static ret_t vgcanvas_web_set_fill_radial_gradient(vgcanvas_t *vgcanvas,
                                                   float_t cx, float_t cy,
                                                   float_t inr, float_t outr,
                                                   color_t icolor,
                                                   color_t ocolor) {
  vgcanvas_web_t *web = (vgcanvas_web_t *)vgcanvas;
  color_rgba_str(icolor, web->start_color);
  color_rgba_str(ocolor, web->end_color);

  EM_ASM_INT({ return VGCanvas.setFillRadialGradient($0, $1, $2, $3, $4, $5); },
             cx, cy, inr, outr, web->start_color, web->end_color);

  return RET_OK;
}

static ret_t vgcanvas_web_set_stroke_color(vgcanvas_t *vgcanvas, color_t c) {
  vgcanvas_web_t *web = (vgcanvas_web_t *)vgcanvas;

  color_rgba_str(c, web->stroke_color);
  EM_ASM_INT({ return VGCanvas.setStrokeColor($0); }, web->stroke_color);

  return RET_OK;
}

static ret_t vgcanvas_web_set_stroke_linear_gradient(vgcanvas_t *vgcanvas,
                                                     float_t sx, float_t sy,
                                                     float_t ex, float_t ey,
                                                     color_t icolor,
                                                     color_t ocolor) {
  vgcanvas_web_t *web = (vgcanvas_web_t *)vgcanvas;
  color_rgba_str(icolor, web->start_color);
  color_rgba_str(ocolor, web->end_color);

  EM_ASM_INT({
    return VGCanvas.setStrokeLinearGradient($0, $1, $2, $3, $4, $5);
  }, sx, sy, ex, ey, web->start_color, web->end_color);

  return RET_OK;
}

static ret_t vgcanvas_web_set_stroke_radial_gradient(vgcanvas_t *vgcanvas,
                                                     float_t cx, float_t cy,
                                                     float_t inr, float_t outr,
                                                     color_t icolor,
                                                     color_t ocolor) {
  vgcanvas_web_t *web = (vgcanvas_web_t *)vgcanvas;
  color_rgba_str(icolor, web->start_color);
  color_rgba_str(ocolor, web->end_color);

  EM_ASM_INT({
    return VGCanvas.setStrokeRadialGradient($0, $1, $2, $3, $4, $5);
  }, cx, cy, inr, outr, web->start_color, web->end_color);

  return RET_OK;
}

static ret_t vgcanvas_web_set_line_cap(vgcanvas_t *vgcanvas,
                                       const char *value) {
  int32_t ret = EM_ASM_INT({ return VGCanvas.setLineCap($0); }, value);

  return RET_OK;
}

static ret_t vgcanvas_web_set_line_join(vgcanvas_t *vgcanvas,
                                        const char *value) {
  int32_t ret = EM_ASM_INT({ return VGCanvas.setLineJoin($0); }, value);
  return RET_OK;
}

static ret_t vgcanvas_web_set_miter_limit(vgcanvas_t *vgcanvas, float_t value) {
  int32_t ret = EM_ASM_INT({ return VGCanvas.setMitterLimit($0); }, value);

  return RET_OK;
}

static ret_t vgcanvas_web_save(vgcanvas_t *vgcanvas) {
  vgcanvas_web_t *web = (vgcanvas_web_t *)vgcanvas;
  int32_t ret = EM_ASM_INT({ return VGCanvas.save(); }, 0);
  web->clip_rect[web->nstates].x = vgcanvas->clip_rect.x;
  web->clip_rect[web->nstates].y = vgcanvas->clip_rect.y;
  web->clip_rect[web->nstates].w = vgcanvas->clip_rect.w;
  web->clip_rect[web->nstates].h = vgcanvas->clip_rect.h;
  web->nstates++;
  return ret ? RET_OK : RET_FAIL;
}

static ret_t vgcanvas_web_restore(vgcanvas_t *vgcanvas) {
  vgcanvas_web_t *web = (vgcanvas_web_t *)vgcanvas;
  int32_t ret = EM_ASM_INT({ return VGCanvas.restore(); }, 0);

  web->nstates--;
  vgcanvas->clip_rect.x = web->clip_rect[web->nstates].x;
  vgcanvas->clip_rect.y = web->clip_rect[web->nstates].y;
  vgcanvas->clip_rect.w = web->clip_rect[web->nstates].w;
  vgcanvas->clip_rect.h = web->clip_rect[web->nstates].h;
  return ret ? RET_OK : RET_FAIL;
}

static const vgcanvas_vtable_t vt = {
    .reinit = vgcanvas_web_reinit,
    .begin_frame = vgcanvas_web_begin_frame,
    .get_clip_rect = vgcanvas_web_get_clip_rect,
    .is_rectf_in_clip_rect = vgcanvas_web_is_rectf_in_clip_rect,
    .reset = vgcanvas_web_reset,
    .flush = vgcanvas_web_flush,
    .clear_rect = vgcanvas_web_clear_rect,
    .begin_path = vgcanvas_web_begin_path,
    .move_to = vgcanvas_web_move_to,
    .line_to = vgcanvas_web_line_to,
    .arc = vgcanvas_web_arc,
    .arc_to = vgcanvas_web_arc_to,
    .bezier_to = vgcanvas_web_bezier_to,
    .quad_to = vgcanvas_web_quad_to,
    .is_point_in_path = vgcanvas_web_is_point_in_path,
    .ellipse = vgcanvas_web_ellipse,
    .rounded_rect = vgcanvas_web_rounded_rect,
    .close_path = vgcanvas_web_close_path,
    .scale = vgcanvas_web_scale,
    .rotate = vgcanvas_web_rotate,
    .translate = vgcanvas_web_translate,
    .transform = vgcanvas_web_transform,
    .set_transform = vgcanvas_web_set_transform,
    .clip_rect = vgcanvas_web_clip_rect,
    .fill = vgcanvas_web_fill,
    .stroke = vgcanvas_web_stroke,
    .paint = vgcanvas_web_paint,
    .set_font = vgcanvas_web_set_font,
    .set_font_size = vgcanvas_web_set_font_size,
    .set_text_align = vgcanvas_web_set_text_align,
    .set_text_baseline = vgcanvas_web_set_text_baseline,
    .fill_text = vgcanvas_web_fill_text,
    .measure_text = vgcanvas_web_measure_text,
    .draw_image = vgcanvas_web_draw_image,
    .set_antialias = vgcanvas_web_set_antialias,
    .set_global_alpha = vgcanvas_web_set_global_alpha,
    .set_line_width = vgcanvas_web_set_line_width,
    .set_fill_color = vgcanvas_web_set_fill_color,
    .set_fill_linear_gradient = vgcanvas_web_set_fill_linear_gradient,
    .set_fill_radial_gradient = vgcanvas_web_set_fill_radial_gradient,
    .set_stroke_color = vgcanvas_web_set_stroke_color,
    .set_stroke_linear_gradient = vgcanvas_web_set_stroke_linear_gradient,
    .set_stroke_radial_gradient = vgcanvas_web_set_stroke_radial_gradient,
    .set_line_join = vgcanvas_web_set_line_join,
    .set_line_cap = vgcanvas_web_set_line_cap,
    .set_miter_limit = vgcanvas_web_set_miter_limit,
    .save = vgcanvas_web_save,
    .restore = vgcanvas_web_restore,
    .end_frame = vgcanvas_web_end_frame,
    .create_fbo = vgcanvas_web_create_fbo,
    .bind_fbo = vgcanvas_web_bind_fbo,
    .destroy_fbo = vgcanvas_web_destroy_fbo,
    .unbind_fbo = vgcanvas_web_unbind_fbo,
    .fbo_to_bitmap = vgcanvas_web_fbo_to_bitmap,
    .destroy = vgcanvas_web_destroy};

vgcanvas_t *vgcanvas_create(uint32_t w, uint32_t h, uint32_t stride,
                            bitmap_format_t format, void *sdl_window) {
  vgcanvas_web_t *web = (vgcanvas_web_t *)malloc(sizeof(vgcanvas_web_t));
  return_value_if_fail(web != NULL, NULL);

  web->base.vt = &vt;
  EM_ASM_INT({ return VGCanvas.init(); }, 0);

  web->base.w = EM_ASM_INT({ return VGCanvas.getWidth(); }, 0);
  web->base.h = EM_ASM_INT({ return VGCanvas.getHeight(); }, 0);
  web->base.ratio =
      EM_ASM_DOUBLE({ return VGCanvas.getDevicePixelRatio(); }, 0);

  web->nstates = 0;
  web->clip_rect[web->nstates].x = 0;
  web->clip_rect[web->nstates].y = 0;
  web->clip_rect[web->nstates].w = w;
  web->clip_rect[web->nstates].h = h;

  printf("w=%d h=%d r=%lf\n", web->base.w, web->base.h, web->base.ratio);

  return &(web->base);
}

