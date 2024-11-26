#ifndef APP_NAVIGATOR_H
#define APP_NAVIGATOR_H

#include "tkc/types_def.h"

BEGIN_C_DECLS

#ifndef WITH_MVVM

/**
 * 用于标识打开对话框时是否模态显示，如果需非模态显示，请在对话框初始化时使用 widget_set_prop 显式设置为FALSE。
 */
#define NAVIGATOR_PROP_DIALOG_TO_MODAL "to_modal"

/**
 * @class navigator_t
 * @annotation ["fake"]
 * 导航器。负责打开指定的窗口。
 *
 */

/**
 * @method navigator_to
 * 请求打开指定的窗口。
 * @annotation ["static"]
 * @param {const char*} target 目标窗口的名称。
 * 
 * @return {ret_t} 返回RET_OK表示成功，否则表示失败。
 */
ret_t navigator_to(const char* target);

/**
 * @method navigator_to_with_context
 * 请求打开指定的窗口，并可传递参数和返回结果。
 * @annotation ["static"]
 * @param {const char*} target 目标窗口的名称。
 * @param {void*} ctx 上下文。
 *
 * @return {ret_t} 返回RET_OK表示成功，否则表示失败。
 */
ret_t navigator_to_with_context(const char* target, void* ctx);

/**
 * @method navigator_replace
 * 请求打开指定的窗口，并关闭当前窗口。
 * @annotation ["static"]
 * @param {const char*} target 目标窗口的名称。
 *
 * @return {ret_t} 返回RET_OK表示成功，否则表示失败。
 */
ret_t navigator_replace(const char* target);

/**
 * @method navigator_switch_to
 * 如果目标窗口已经存在，直接切换到该窗口，否则打开新窗口。
 * @annotation ["static"]
 * @param {const char*} target 目标窗口的名称。
 * @param {bool_t} close_current 是否关闭当前窗口。
 *
 * @return {ret_t} 返回RET_OK表示成功，否则表示失败。
 */
ret_t navigator_switch_to(const char* target, bool_t close_current);

/**
 * @method navigator_back_to_home
 * 回到主屏。
 * @annotation ["static"]
 *
 * @return {ret_t} 返回RET_OK表示成功，否则表示失败。
 */
ret_t navigator_back_to_home(void);

/**
 * @method navigator_back
 * 关闭当前窗口，回到前一窗口。
 * @annotation ["static"]
 *
 * @return {ret_t} 返回RET_OK表示成功，否则表示失败。
 */
ret_t navigator_back(void);

/**
 * @method navigator_close
 * 关闭指定窗口。
 * @param {const char*} target 目标窗口的名称。
 * @annotation ["static"]
 *
 * @return {ret_t} 返回RET_OK表示成功，否则表示失败。
 */
ret_t navigator_close(const char* target);

/**
 * @method navigator_request_close
 * 请求关闭指定窗口。
 * > 窗口是否被关闭，取决于窗口本身的处理逻辑。
 * @param {const char*} target 目标窗口的名称。
 * @annotation ["static"]
 *
 * @return {ret_t} 返回RET_OK表示成功，否则表示失败。
 */
ret_t navigator_request_close(const char* target);

/**
 * @method navigator_global_widget_on
 * 注册全局事件。
 * @param {event_type_t} type 事件类型。
 * @param {event_func_t} on_event 事件处理函数。
 * @param {void*} ctx 事件处理函数上下文。
 * @annotation ["static"]
 *
 * @return {ret_t} 返回RET_OK表示成功，否则表示失败。
 */
ret_t navigator_global_widget_on(uint32_t type, event_func_t on_event, void* ctx);

#else
#include "mvvm/base/navigator.h"
#endif /*WITH_MVVM*/

END_C_DECLS

#endif /*APP_NAVIGATOR_H*/
