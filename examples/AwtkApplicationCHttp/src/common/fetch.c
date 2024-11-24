#include "fetch.h"

#include <stdio.h>
#include <string.h>
#include "tkc/mem.h"
#include <emscripten.h>
#include <emscripten/fetch.h>

typedef struct _emscripten_fetch_info_t {
  void* ctx;
  fetch_on_data_t on_data;
  fetch_on_error_t on_error;
  fetch_on_progress_t on_progress;
} emscripten_fetch_info_t;

emscripten_fetch_info_t* emscripten_fetch_info_create(void* ctx, fetch_on_data_t on_data,
                                                      fetch_on_error_t on_error,
                                                      fetch_on_progress_t on_progress) {
  emscripten_fetch_info_t* info = TKMEM_ZALLOC(emscripten_fetch_info_t);
  return_value_if_fail(info != NULL, NULL);

  info->ctx = ctx;
  info->on_data = on_data;
  info->on_error = on_error;
  info->on_progress = on_progress;

  return info;
}

static void downloadSucceeded(emscripten_fetch_t* fetch) {
  emscripten_fetch_info_t* info = (emscripten_fetch_info_t*)fetch->userData;
  if (info->on_data) {
    info->on_data(info->ctx, fetch->data, fetch->numBytes);
  }
  printf("Finished downloading %llu bytes from URL %s.\n", fetch->numBytes, fetch->url);
  // The data is now available at fetch->data[0] through fetch->data[fetch->numBytes-1];
  emscripten_fetch_close(fetch);  // Free data associated with the fetch.
}

static void downloadFailed(emscripten_fetch_t* fetch) {
  emscripten_fetch_info_t* info = (emscripten_fetch_info_t*)fetch->userData;
  if (info->on_error) {
    info->on_error(info->ctx, fetch->url);
  }
  printf("Downloading %s failed, HTTP failure status code: %d.\n", fetch->url, fetch->status);
  emscripten_fetch_close(fetch);  // Also free data on failure.
}

static void downloadProgress(emscripten_fetch_t* fetch) {
  emscripten_fetch_info_t* info = (emscripten_fetch_info_t*)fetch->userData;
  if (info->on_progress) {
    info->on_progress(info->ctx, fetch->dataOffset, fetch->totalBytes);
  }
  printf("Downloading %s [%d%%] (%llu/%llu bytes)\n", fetch->url,
         (int)(fetch->dataOffset * 100 / fetch->totalBytes), fetch->dataOffset, fetch->totalBytes);
}

ret_t fetch_data(void* ctx, const char* method, const char* url, fetch_on_data_t on_data,
                 fetch_on_error_t on_error, fetch_on_progress_t on_progress) {
  emscripten_fetch_attr_t attr;
  emscripten_fetch_info_t* info = NULL;
  return_value_if_fail(url != NULL && on_data != NULL, RET_BAD_PARAMS);
  info = emscripten_fetch_info_create(ctx, on_data, on_error, on_progress);
  return_value_if_fail(info != NULL, RET_OOM);

  emscripten_fetch_attr_init(&attr);
  attr.userData = info;

  strcpy(attr.requestMethod, method);
  attr.attributes = EMSCRIPTEN_FETCH_LOAD_TO_MEMORY;
  attr.onsuccess = downloadSucceeded;
  attr.onerror = downloadFailed;
  attr.onprogress = downloadProgress;

  emscripten_fetch(&attr, url);

  return RET_OK;
}
