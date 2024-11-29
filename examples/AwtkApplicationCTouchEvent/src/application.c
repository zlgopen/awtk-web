#include "awtk.h"
#include "common/navigator.h"

#ifndef APP_SYSTEM_BAR
#define APP_SYSTEM_BAR ""
#endif /*APP_SYSTEM_BAR*/

#ifndef APP_BOTTOM_SYSTEM_BAR
#define APP_BOTTOM_SYSTEM_BAR ""
#endif /*APP_BOTTOM_SYSTEM_BAR*/

#ifndef APP_START_PAGE
#define APP_START_PAGE "home_page"
#endif /*APP_START_PAGE*/

/**
 * 注册自定义控件
 */
static ret_t custom_widgets_register(void) {

  return RET_OK;
}

/**
 * 当程序初始化完成时调用，全局只触发一次。
 */
static ret_t application_on_launch(void) {

  return RET_OK;
}

/**
 * 当程序退出时调用，全局只触发一次。
 */
static ret_t application_on_exit(void) {

  return RET_OK;
}

/**
 * 初始化程序
 */
ret_t application_init(void) {
  custom_widgets_register();
  application_on_launch();

  if (strlen(APP_SYSTEM_BAR) > 0) {
    navigator_to(APP_SYSTEM_BAR);
  }

  if (strlen(APP_BOTTOM_SYSTEM_BAR) > 0) {
    navigator_to(APP_BOTTOM_SYSTEM_BAR);
  }

  return navigator_to(APP_START_PAGE);
}

/**
 * 退出程序
 */
ret_t application_exit(void) {
  application_on_exit();
  log_debug("application_exit\n");

  return RET_OK;
}
