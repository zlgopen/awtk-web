#include "awtk.h"
#include "conf_io/conf_json.h"

#include "../common/navigator.h"
#include "../common/fetch.h"

// C 函数，用于处理接收到的数据
void home_page_on_fetch_data(void* ctx, const char* data, uint32_t data_size) {
  widget_t* win = WIDGET(ctx);

  conf_doc_t* doc = conf_doc_load_json(data, data_size);
  if (doc != NULL) {
    const char* city = conf_doc_get_str(doc, "cityInfo.city", "unknown");
    const char* shidu = conf_doc_get_str(doc, "data.shidu", "unknown");
    const char* wendu = conf_doc_get_str(doc, "data.wendu", "unknown");
    const char* quality = conf_doc_get_str(doc, "data.quality", "unknown");
    const char* ganmao = conf_doc_get_str(doc, "data.ganmao", "unknown");
    double pm25 = conf_doc_get_float(doc, "data.pm25", 0);

    widget_set_child_text_utf8(win, "city", city);
    widget_set_child_text_utf8(win, "shidu", shidu);
    widget_set_child_text_utf8(win, "wendu", wendu);
    widget_set_child_text_utf8(win, "quality", quality);
    widget_set_child_text_utf8(win, "ganmao", ganmao);
    widget_set_child_text_with_double(win, "pm25", "%.0f", pm25);

    conf_doc_destroy(doc);
  }

  printf("Received data (%d bytes): %s\n", data_size, data);
}

// C 函数，用于处理错误
void home_page_on_fetch_error(void* ctx, const char* error_message) {
  printf("Error: %s\n", error_message);
}

static ret_t on_update(void* ctx, event_t* e) {
  widget_t* win = WIDGET(ctx);
  const char* url = "http://localhost:8080/AwtkApplicationCHttp/res/assets/default/raw/data/weather.json";
  return_value_if_fail(win != NULL, RET_BAD_PARAMS);

  fetch_data(win, "GET", url, home_page_on_fetch_data, home_page_on_fetch_error, NULL);

  return RET_OK;
}

/**
 * 初始化窗口
 */
ret_t home_page_init(widget_t* win, void* ctx) {
  (void)ctx;
  return_value_if_fail(win != NULL, RET_BAD_PARAMS);

  widget_child_on(win, "update", EVT_CLICK, on_update, win);

  return RET_OK;
}
