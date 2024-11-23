#include "awtk.h"
#include "my_websocket.h"
#include "../common/navigator.h"

typedef struct _home_page_t {
  widget_t* send;
  widget_t* send_text;
  widget_t* recv_text;
  EMSCRIPTEN_WEBSOCKET_T sock;
} home_page_t;

static home_page_t* home_page_create(widget_t* win) {
  home_page_t* home_page = TKMEM_ZALLOC(home_page_t);

  assert(win != NULL);
  assert(home_page != NULL);
  if (home_page != NULL) {
    home_page->send = widget_lookup(win, "send", TRUE);
    assert(home_page->send != NULL);
    home_page->send_text = widget_lookup(win, "send_text", TRUE);
    assert(home_page->send_text != NULL);
    home_page->recv_text = widget_lookup(win, "recv_text", TRUE);
    assert(home_page->recv_text != NULL);
  }

  return home_page;
}

static ret_t home_page_destroy(home_page_t* home_page) {
  if (home_page != NULL) {
    emscripten_websocket_close(home_page->sock, 0, 0);
    TKMEM_FREE(home_page);
  }

  return RET_OK;
}

bool WebSocketOpen(int eventType, const EmscriptenWebSocketOpenEvent* e, void* userData) {
  home_page_t* home_page = (home_page_t*)userData;
  return_value_if_fail(home_page != NULL, FALSE);

  widget_set_text_utf8(home_page->recv_text, "opened");

  /*
  emscripten_websocket_send_utf8_text(e->socket, "hello on the other side");
  char data[] = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
  emscripten_websocket_send_binary(e->socket, data, sizeof(data));
  */

  return 0;
}

bool WebSocketClose(int eventType, const EmscriptenWebSocketCloseEvent* e, void* userData) {
  home_page_t* home_page = (home_page_t*)userData;
  return_value_if_fail(home_page != NULL, FALSE);

  emscripten_websocket_delete(e->socket);
  widget_set_text_utf8(home_page->recv_text, "closed");
  home_page->sock = 0;

  return 0;
}

bool WebSocketError(int eventType, const EmscriptenWebSocketErrorEvent* e, void* userData) {
  home_page_t* home_page = (home_page_t*)userData;
  return_value_if_fail(home_page != NULL, FALSE);

  widget_set_text_utf8(home_page->recv_text, "error");

  return 0;
}

bool WebSocketMessage(int eventType, const EmscriptenWebSocketMessageEvent* e, void* userData) {
  home_page_t* home_page = (home_page_t*)userData;
  return_value_if_fail(home_page != NULL, FALSE);

  if (e->isText) {
    widget_set_text_utf8(home_page->recv_text, (const char*)(e->data));
  }

  return 0;
}

static ret_t on_send(void* ctx, event_t* e) {
  home_page_t* home_page = (home_page_t*)ctx;
  return_value_if_fail(home_page != NULL, RET_BAD_PARAMS);

  if (home_page->sock > 0) {
    char text[1024];
    widget_get_text_utf8(home_page->send_text, text, sizeof(text) - 1);
    if (text[0] != '\0') {
      emscripten_websocket_send_utf8_text(home_page->sock, text);
    }
  }

  return RET_OK;
}

EMSCRIPTEN_WEBSOCKET_T create_socket(void* user_data, const char* url) {
  EmscriptenWebSocketCreateAttributes attr;
  emscripten_websocket_init_create_attributes(&attr);

  attr.url = url;
  attr.protocols = "binary,base64";
  EMSCRIPTEN_WEBSOCKET_T socket = emscripten_websocket_new(&attr);

  emscripten_websocket_set_onopen_callback(socket, user_data, WebSocketOpen);
  emscripten_websocket_set_onclose_callback(socket, user_data, WebSocketClose);
  emscripten_websocket_set_onerror_callback(socket, user_data, WebSocketError);
  emscripten_websocket_set_onmessage_callback(socket, user_data, WebSocketMessage);

  return socket;
}

/**
 * 初始化窗口
 */
ret_t home_page_init(widget_t* win, void* ctx) {
  (void)ctx;
  const char* url = "ws://localhost:8090/";
  home_page_t* home_page = home_page_create(win);
  return_value_if_fail(win != NULL && home_page != NULL, RET_BAD_PARAMS);

  assert(emscripten_websocket_is_supported());

  home_page->sock = create_socket(home_page, url);
  widget_on(home_page->send, EVT_CLICK, on_send, home_page);

  return RET_OK;
}
