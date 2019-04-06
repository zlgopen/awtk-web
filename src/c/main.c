#include <stdio.h>
#include "base/vgcanvas.h"
#include "awtk.h"
#include "app/assets.h"
#include "main_loop_web.h"

extern ret_t application_init(void);

int32_t awtk_web_init(void)
{
  tk_init(0, 0, APP_MOBILE, NULL, NULL);

  assets_init();
  tk_ext_widgets_init();
  application_init();
  
  main_loop_t *loop = main_loop();

  printf("init %p window_nr=%d\n", loop->wm, widget_count_children(loop->wm));

  return TRUE;
}

int32_t awtk_web_run(void)
{
  main_loop_t *loop = main_loop();
  printf("run %p window_nr=%d\n", loop->wm, widget_count_children(loop->wm));
  //tk_run();

  return TRUE;
}

int32_t awtk_web_deinit(void)
{
  return TRUE;
}

extern void awtk_draw(vgcanvas_t *vg);

int32_t awtk_web_main_loop_step(double timestamp)
{
  main_loop_t *loop = main_loop();
  /*
  canvas_t *canvas = NULL;
  vgcanvas_t *vg = NULL;
  return_value_if_fail(loop != NULL, FALSE);

  canvas = &(loop->canvas);
  canvas_begin_frame(canvas, NULL, 0);
  vg = canvas_get_vgcanvas(canvas);
  return_value_if_fail(vg != NULL, FALSE);
  return_value_if_fail(canvas != NULL, FALSE);

  awtk_draw(vg);
  canvas_end_frame(canvas);
  */

  main_loop_web_step(loop);
  return 0;
}
