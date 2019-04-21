#include "tkc/rect.h"
#include "base/bitmap.h"
#include "base/main_loop.h"
#include "base/input_method.h"

ret_t image_copy(bitmap_t *dst, bitmap_t *src, rect_t *src_r, xy_t dx,
                 xy_t dy) {
  return RET_OK;
}

void awtk_draw(vgcanvas_t *vg) {
  int32_t w = 0;
  bitmap_t bmp;
  framebuffer_object_t fbo;
  color_t stroke_color = color_init(0xff, 0, 0, 0xff);
  color_t fill_color = color_init(0, 0xff, 0, 0xff);
  color_t white = color_init(0xff, 0xff, 0xff, 0xff);
  color_t black = color_init(0, 0, 0, 0xff);
  color_t green = color_init(0, 0xff, 0, 0xff);
  color_t red = color_init(0xff, 0, 0, 0xff);

  memset(&bmp, 0x00, sizeof(bitmap_t));
  vgcanvas_save(vg);
  vgcanvas_clear_rect(vg, 0, 0, vg->w, vg->h, white);

  vgcanvas_set_stroke_color(vg, stroke_color);
  vgcanvas_set_fill_color(vg, fill_color);
  vgcanvas_set_global_alpha(vg, 1);
  vgcanvas_set_line_width(vg, 1);
  vgcanvas_begin_path(vg);
  /*
  vgcanvas_set_miter_limit(vg, 3.5);
  vgcanvas_move_to(vg, 10, 10);
  vgcanvas_line_to(vg, 100, 10);
  vgcanvas_line_to(vg, 100, 100);
  vgcanvas_line_to(vg, 10, 100);
  vgcanvas_close_path(vg);
  vgcanvas_fill(vg);

  vgcanvas_move_to(vg, 20, 20);
  vgcanvas_quad_to(vg, 20,100,200,20);
  vgcanvas_stroke(vg);

  vgcanvas_move_to(vg, 20, 20);
  vgcanvas_bezier_to(vg, 20,100,200,100,200,20);
  vgcanvas_stroke(vg);

  vgcanvas_move_to(vg, 20, 20);
  vgcanvas_line_to(vg, 100, 20);
  vgcanvas_arc_to(vg, 150,20,150,70,50);
  vgcanvas_line_to(vg, 150,120);
  vgcanvas_stroke(vg);

  vgcanvas_arc(vg, 100, 75, 50, 0, 2*3.15, FALSE);
  vgcanvas_stroke(vg);

  vgcanvas_translate(vg, 100, 100);
  vgcanvas_move_to(vg, 0, 0);
  vgcanvas_line_to(vg, 100, 100);

  vgcanvas_rotate(vg, 3.14);
  vgcanvas_scale(vg, 0.5, 0.5);
  vgcanvas_move_to(vg, 0, 0);
  vgcanvas_line_to(vg, 100, 0);

  vgcanvas_stroke(vg);

  vgcanvas_set_transform(vg, 1,0.5,-0.5,1,30,10);

  vgcanvas_transform(vg, 1,0.5,-0.5,1,30,10);
  vgcanvas_move_to(vg, 0, 0);
  vgcanvas_line_to(vg, 100, 100);

  vgcanvas_move_to(vg, 10, 10);
  vgcanvas_rounded_rect(vg, 10, 10, 200, 100, 10);
  assert(vgcanvas_is_point_in_path(vg, 50, 50));
  assert(!vgcanvas_is_point_in_path(vg, 5, 5));
  vgcanvas_stroke(vg);

  vgcanvas_ellipse(vg, 100, 100, 80, 50);
  vgcanvas_stroke(vg);

  vgcanvas_set_text_align(vg, "left");
  vgcanvas_set_text_baseline(vg, "top");
  vgcanvas_set_font(vg, "Sans");
  vgcanvas_set_font_size(vg, 24.0);

  w = vgcanvas_measure_text(vg, "Hello  AWTK");
  printf("w=%d\n", w);
  vgcanvas_set_fill_color(vg, black);
  vgcanvas_fill_text(vg, "Hello  AWTK", 10, 10, 200);

  vgcanvas_set_global_alpha(vg, 0.8);
  vgcanvas_draw_image(vg, &bmp, 0, 0, 60, 60, 10, 10, 100, 100);

  vgcanvas_rect(vg, 10, 10, 200, 100);
  vgcanvas_set_fill_linear_gradient(vg, 10, 10, 200, 100, red, green);
  vgcanvas_fill(vg);

  vgcanvas_move_to(vg, 10, 10);
  vgcanvas_line_to(vg, 200, 100);
  vgcanvas_set_stroke_linear_gradient(vg, 10, 10, 200, 100, red, green);
  vgcanvas_stroke(vg);

  vgcanvas_arc(vg, 100, 100, 50, 0, 3.1416 * 2, TRUE);
  //vgcanvas_set_stroke_radial_gradient(vg, 100, 100, 20, 50, red, green);
  vgcanvas_set_fill_radial_gradient(vg, 100, 100, 20, 50, red, green);
  vgcanvas_fill(vg);


  vgcanvas_create_fbo(vg, &fbo);
  vgcanvas_bind_fbo(vg, &fbo);
  vgcanvas_move_to(vg, 0, 0);
  vgcanvas_line_to(vg, 200, 200);
  vgcanvas_set_stroke_radial_gradient(vg, 100, 100, 0, 100, red, green);
  vgcanvas_stroke(vg);
  vgcanvas_unbind_fbo(vg, &fbo);
  bmp.specific = (char*)NULL + fbo.id;
  bmp.w = fbo.w;
  bmp.h = fbo.h;
  vgcanvas_draw_image(vg, &bmp, 0, 0, fbo.w, fbo.h, 0, 0, fbo.w, fbo.h);
  vgcanvas_destroy_fbo(vg, &fbo);

  vgcanvas_move_to(vg, 0, 0);
  vgcanvas_line_to(vg, 200, 200);
  vgcanvas_set_stroke_radial_gradient(vg, 100, 100, 0, 100, red, green);
  vgcanvas_stroke(vg);
*/

  vgcanvas_rect(vg, 10, 10, vg->w - 20, vg->h - 20);
  vgcanvas_fill(vg);

  vgcanvas_restore(vg);

  return;
}

void awtk_test_draw(void) {
  vgcanvas_t *vg = NULL;
  canvas_t *canvas = NULL;
  main_loop_t *loop = main_loop();

  canvas = &(loop->canvas);
  canvas_begin_frame(canvas, NULL, 0);
  vg = canvas_get_vgcanvas(canvas);

  awtk_draw(vg);
  canvas_end_frame(canvas);
}
