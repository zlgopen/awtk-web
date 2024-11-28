#include "awtk.h"
#include "blend/image_g2d.h"

#include "../common/navigator.h"

#define IMAGE_WIDTH 32
#define IMAGE_HEIGHT 32

static bitmap_t* s_bitmap_r = NULL;
static bitmap_t* s_bitmap_g = NULL;
static bitmap_t* s_bitmap_b = NULL;

static uint32_t s_count = 0;
static ret_t on_timer(const timer_info_t* info) {
  color_t c;
  uint8_t value = (s_count * 10) % 255;
  widget_t* win = WIDGET(info->ctx);
  rect_t r = rect_init(0, 0, IMAGE_WIDTH, IMAGE_HEIGHT);

  c = color_init(value, 0, 0, 0xff);
  image_fill(s_bitmap_r, &r, c);

  c = color_init(0, value, 0, 0xff);
  image_fill(s_bitmap_g, &r, c);

  c = color_init(0, 0, value, 0xff);
  image_fill(s_bitmap_b, &r, c);

  s_count++;

  widget_invalidate_force(win, NULL);

  return RET_REPEAT;
}

static ret_t on_close(void* ctx, event_t* evt) {
  if (s_bitmap_r != NULL) {
    bitmap_destroy(s_bitmap_r);
    s_bitmap_r = NULL;
  }

  if (s_bitmap_g != NULL) {
    bitmap_destroy(s_bitmap_g);
    s_bitmap_g = NULL;
  }

  if (s_bitmap_b != NULL) {
    bitmap_destroy(s_bitmap_b);
    s_bitmap_b = NULL;
  }

  return tk_quit();
}

static ret_t on_paint(void* ctx, event_t* evt) {
  paint_event_t* e = (paint_event_t*)evt;
  canvas_t* canvas = e->c;
  vgcanvas_t* vg = canvas_get_vgcanvas(canvas);
  bitmap_t* img = s_bitmap_r;

  if (img != NULL) {
    vgcanvas_draw_image(vg, img, 0, 0, img->w, img->h, 100, 100, img->w * 2, img->h * 2);
  }

  img = s_bitmap_g;
  if (img != NULL) {
    vgcanvas_draw_image(vg, img, 0, 0, img->w, img->h, 200, 100, img->w * 2, img->h * 2);
  }

  img = s_bitmap_b;
  if (img != NULL) {
    vgcanvas_draw_image(vg, img, 0, 0, img->w, img->h, 300, 100, img->w * 2, img->h * 2);
  }

  img = bitmap_create_ex(IMAGE_WIDTH, IMAGE_HEIGHT, IMAGE_WIDTH * 4, BITMAP_FMT_RGBA8888);
  if (img != NULL) {
    uint32_t* data = (uint32_t*)bitmap_lock_buffer_for_write(img);
    uint32_t n = img->w * img->h;
    uint32_t color = (0xff1122 << 8) | ((s_count * 10) % 255);

    tk_memset32(data, color, n);

    bitmap_unlock_buffer(img);
    vgcanvas_draw_image(vg, img, 0, 0, img->w, img->h, 400, 100, img->w * 2, img->h * 2);
    bitmap_destroy(img);
  }

  return RET_OK;
}

/**
 * 初始化窗口的子控件
 */
static ret_t visit_init_child(void* ctx, const void* iter) {
  widget_t* win = WIDGET(ctx);
  widget_t* widget = WIDGET(iter);
  const char* name = widget->name;

  // 初始化指定名称的控件（设置属性或注册事件），请保证控件名称在窗口上唯一
  if (name != NULL && *name != '\0') {
    if (tk_str_ieq(name, "close")) {
      widget_on(widget, EVT_CLICK, on_close, win);
    }
  }

  return RET_OK;
}

/**
 * 初始化窗口
 */
ret_t home_page_init(widget_t* win, void* ctx) {
  int w = IMAGE_WIDTH;
  int h = IMAGE_HEIGHT;
  return_value_if_fail(win != NULL, RET_BAD_PARAMS);

  s_bitmap_r = bitmap_create_ex(w, h, w * 4, BITMAP_FMT_RGBA8888);
  if (s_bitmap_r != NULL) {
    color_t c = color_init(0xff, 0, 0, 0xff);
    rect_t r = rect_init(0, 0, w, h);
    image_fill(s_bitmap_r, &r, c);
  }

  s_bitmap_g = bitmap_create_ex(w, h, w * 4, BITMAP_FMT_RGBA8888);
  if (s_bitmap_g != NULL) {
    color_t c = color_init(0, 0xff, 0, 0xff);
    rect_t r = rect_init(0, 0, w, h);
    image_fill(s_bitmap_g, &r, c);
  }

  s_bitmap_b = bitmap_create_ex(w, h, w * 4, BITMAP_FMT_RGBA8888);
  if (s_bitmap_b != NULL) {
    color_t c = color_init(0, 0, 0xff, 0xff);
    rect_t r = rect_init(0, 0, w, h);
    image_fill(s_bitmap_b, &r, c);
  }

  widget_on(win, EVT_PAINT, on_paint, win);
  widget_foreach(win, visit_init_child, win);
  widget_add_timer(win, on_timer, 100);

  return RET_OK;
}
