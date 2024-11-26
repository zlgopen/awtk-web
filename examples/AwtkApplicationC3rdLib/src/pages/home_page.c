#include "awtk.h"
#include "foo/foo.h"
#include "../common/navigator.h"

static ret_t on_compute(void* ctx, event_t* evt) {
  widget_t* win = WIDGET(ctx);
  widget_t* edit_n1 = widget_lookup(win, "n1", TRUE);
  int n1 = widget_get_value_int(edit_n1);
  
  widget_t* edit_n2 = widget_lookup(win, "n2", TRUE);
  int n2 = widget_get_value_int(edit_n2);
  
  widget_t* edit_n3 = widget_lookup(win, "n3", TRUE);
  int n3 = widget_get_value_int(edit_n3);

  widget_t* edit_n4 = widget_lookup(win, "n4", TRUE);

  widget_set_value_int(edit_n4, sum(n1, n2, n3));

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
    if (tk_str_ieq(name, "compute")) {
      widget_on(widget, EVT_CLICK, on_compute, win);
    }
  }

  return RET_OK;
}

/**
 * 初始化窗口
 */
ret_t home_page_init(widget_t* win, void* ctx) {
  (void)ctx;
  return_value_if_fail(win != NULL, RET_BAD_PARAMS);

  widget_foreach(win, visit_init_child, win);

  return RET_OK;
}
