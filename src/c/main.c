#include <stdio.h>
#include "awtk.h"
#include "base/vgcanvas.h"
#include "main_loop_web.h"

extern ret_t assets_init(void);

#ifdef AWTK_WEB_JS
#include <emscripten.h>
#else
extern ret_t application_init(void);
#endif/*AWTK_WEB_JS*/

int32_t awtk_web_init(void) {
  tk_init(0, 0, APP_MOBILE, NULL, NULL);
  tk_ext_widgets_init();

  assets_init();
#ifdef AWTK_WEB_JS
  EM_ASM_INT({ TBrowser.loadScript("js/app.js"); }, 0);
#else
  application_init();
#endif/*AWTK_WEB_JS*/

  return TRUE;
}

int32_t awtk_web_deinit(void) {
  tk_exit();

  return TRUE;
}

int32_t awtk_web_main_loop_step(double timestamp) {
  main_loop_web_step(main_loop());

  return 0;
}
