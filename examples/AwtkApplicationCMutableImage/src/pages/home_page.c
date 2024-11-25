#include "awtk.h"
#include "blend/image_g2d.h"

#include "../common/navigator.h"

static bitmap_t* s_bitmap_r = NULL;
static bitmap_t* s_bitmap_g = NULL;
static bitmap_t* s_bitmap_b = NULL;

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

  if (s_bitmap_r != NULL) {
    canvas_draw_image_at(e->c, s_bitmap_r, 100, 100);
  }
  
  if (s_bitmap_g != NULL) {
    canvas_draw_image_at(e->c, s_bitmap_g, 200, 100);
  }

  if (s_bitmap_b != NULL) {
    canvas_draw_image_at(e->c, s_bitmap_b, 300, 100);
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
  int w = 32;
  int h = 32;
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

  return RET_OK;
}
