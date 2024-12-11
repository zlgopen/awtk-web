#ifndef MY_WEBSOCKET_H
#define MY_WEBSOCKET_H

#ifdef AWTK_WEB
#include <emscripten/websocket.h>
#else
typedef int EMSCRIPTEN_WEBSOCKET_T;
#define emscripten_websocket_is_supported() 0
#define emscripten_websocket_new(attr) 0
#define emscripten_websocket_delete(socket) 0
#define emscripten_websocket_send_utf8_text(socket, text) 0
#define emscripten_websocket_send_binary(socket, data, size) 0
#define emscripten_websocket_set_onopen_callback(socket, user_data, callback) 0
#define emscripten_websocket_set_onclose_callback(socket, user_data, callback) 0
#define emscripten_websocket_set_onerror_callback(socket, user_data, callback) 0
#define emscripten_websocket_set_onmessage_callback(socket, user_data, callback) 0
#define emscripten_websocket_init_create_attributes(attr) 0
#define emscripten_websocket_close(socket, code, reason) 0

typedef struct _EmscriptenWebSocketCreateAttributes {
  const char* url;
  const char* protocols;
} EmscriptenWebSocketCreateAttributes;

typedef struct _EmscriptenWebSocketOpenEvent {
  EMSCRIPTEN_WEBSOCKET_T socket;
} EmscriptenWebSocketOpenEvent;

typedef struct _EmscriptenWebSocketCloseEvent {
  EMSCRIPTEN_WEBSOCKET_T socket;
  int wasClean;
  int code;
  const char* reason;
} EmscriptenWebSocketCloseEvent;

typedef struct _EmscriptenWebSocketErrorEvent {
  EMSCRIPTEN_WEBSOCKET_T socket;
  int message;
} EmscriptenWebSocketErrorEvent;

typedef struct _EmscriptenWebSocketMessageEvent {
  EMSCRIPTEN_WEBSOCKET_T socket;
  int isText;
  const void* data;
  size_t numBytes;
} EmscriptenWebSocketMessageEvent;
typedef bool_t bool;
#endif/*AWTK_WEB*/

#endif/*MY_WEBSOCKET_H*/