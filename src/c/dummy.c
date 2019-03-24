#include "tkc/rect.h"
#include "base/bitmap.h"
#include "base/main_loop.h"
#include "base/input_method.h"

ret_t image_copy(bitmap_t* dst, bitmap_t* src, rect_t* src_r, xy_t dx, xy_t dy) {
  return RET_OK;
}

main_loop_t* main_loop_init(int w, int h) {
  return NULL;
}

ret_t assets_init(void) {
  return RET_OK;
}

input_method_t* input_method_create(void) {
  return NULL;
}

ret_t platform_prepare(void) {
  return RET_OK;
}

uint32_t get_time_ms() {
  return 0;
}
