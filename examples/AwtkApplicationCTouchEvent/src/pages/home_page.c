#include "awtk.h"
#include "../common/navigator.h"

typedef struct _finger_status_t {
  int64_t id;
  darray_t points;
} finger_status_t;

static ret_t finger_status_add_point(finger_status_t* finger_status, int x, int y);

static finger_status_t* finger_status_create(int64_t id, int x, int y) {
  finger_status_t* finger_status = TKMEM_ZALLOC(finger_status_t);
  if (finger_status != NULL) {
    finger_status->id = id;
    darray_init(&(finger_status->points), 10, default_destroy, NULL);
    finger_status_add_point(finger_status, x, y);
  }
  return finger_status;
}

static ret_t finger_status_add_point(finger_status_t* finger_status, int x, int y) {
  point_t* p = NULL;
  return_value_if_fail(finger_status != NULL, RET_BAD_PARAMS);
  p = TKMEM_ZALLOC(point_t);
  return_value_if_fail(p != NULL, RET_OOM);

  p->x = x;
  p->y = y;
  darray_push(&(finger_status->points), p);

  return RET_OK;
}

static int32_t finger_status_compare_by_id(const void* l, const void* r) {
  finger_status_t* tl = (finger_status_t*)l;
  finger_status_t* tr = (finger_status_t*)r;
  return tl->id - tr->id;
}

static ret_t finger_status_destroy(finger_status_t* finger_status) {
  if (finger_status != NULL) {
    TKMEM_FREE(finger_status);
  }
  return RET_OK;
}

static darray_t s_fingers_status = {0};

static finger_status_t* fingers_status_find(int64_t id) {
  finger_status_t key = {0};
  key.id = id;
  return darray_find(&s_fingers_status, &key);
}

static ret_t fingers_status_remove(int64_t id) {
  finger_status_t key = {0};
  key.id = id;
  return darray_remove(&s_fingers_status, &key);
}

static ret_t on_close(void* ctx, event_t* evt) {
  darray_deinit(&s_fingers_status);

  return tk_quit();
}

static ret_t on_touch_down(void* ctx, event_t* evt) {
  widget_t* win = WIDGET(ctx);
  touch_event_t* e = (touch_event_t*)evt;
  int x = e->x * win->w;
  int y = e->y * win->h;
  finger_status_t* finger_status = finger_status_create(e->finger_id, x, y);
  return_value_if_fail(finger_status != NULL, RET_OOM);

  darray_push(&s_fingers_status, finger_status);

  widget_invalidate(win, NULL);

  return RET_OK;
}

static ret_t on_touch_up(void* ctx, event_t* evt) {
  widget_t* win = WIDGET(ctx);
  touch_event_t* e = (touch_event_t*)evt;

  if (e->finger_id) {
    fingers_status_remove(e->finger_id);
  } else {
    darray_clear(&s_fingers_status);
  }

  log_debug("on_touch_up: %d size=%u\n", (int)(e->finger_id), s_fingers_status.size);

  widget_invalidate(win, NULL);

  return RET_OK;
}

static ret_t on_touch_move(void* ctx, event_t* evt) {
  widget_t* win = WIDGET(ctx);
  touch_event_t* e = (touch_event_t*)evt;
  int x = e->x * win->w;
  int y = e->y * win->h;
  finger_status_t* finger_status = fingers_status_find(e->finger_id);

  if (finger_status != NULL) {
    finger_status_add_point(finger_status, x, y);
  }

  widget_invalidate(win, NULL);

  return RET_OK;
}

static ret_t on_paint(void* ctx, event_t* evt) {
  uint32_t i = 0;
  uint32_t j = 0;
  paint_event_t* e = (paint_event_t*)evt;
  canvas_t* c = e->c;
  vgcanvas_t* vg = canvas_get_vgcanvas(c);
  uint32_t count = s_fingers_status.size;
  const char* colors[] = {"#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#00FFFF", "#FF00FF"};

  vgcanvas_set_line_width(vg, 5);
  for (i = 0; i < count; i++) {
    finger_status_t* finger_status = (finger_status_t*)darray_get(&s_fingers_status, i);
    uint32_t points_count = finger_status->points.size;

    vgcanvas_begin_path(vg);
    vgcanvas_set_stroke_color_str(vg, colors[i % ARRAY_SIZE(colors)]);
    for (j = 0; j < points_count; j++) {
      point_t* p = (point_t*)darray_get(&(finger_status->points), j);

      if (j == 0) {
        vgcanvas_move_to(vg, p->x, p->y);
      } else {
        vgcanvas_line_to(vg, p->x, p->y);
      }
    }
    vgcanvas_stroke(vg);
  }

  return RET_OK;
}

/**
 * 初始化窗口
 */
ret_t home_page_init(widget_t* win, void* ctx) {
  (void)ctx;
  return_value_if_fail(win != NULL, RET_BAD_PARAMS);

  darray_init(&s_fingers_status, 10, (tk_destroy_t)finger_status_destroy,
              (tk_compare_t)finger_status_compare_by_id);

  widget_on(win, EVT_TOUCH_DOWN, on_touch_down, win);
  widget_on(win, EVT_TOUCH_UP, on_touch_up, win);
  widget_on(win, EVT_TOUCH_MOVE, on_touch_move, win);
  widget_on(win, EVT_PAINT, on_paint, win);


  return RET_OK;
}
