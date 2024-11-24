#ifndef APP_FETCH_H
#define APP_FETCH_H

#include "tkc/types_def.h"

BEGIN_C_DECLS

typedef void (*fetch_on_data_t)(void* ctx, const char* data, uint32_t data_size);
typedef void (*fetch_on_progress_t)(void* ctx, uint64_t offset, uint64_t total);
typedef void (*fetch_on_error_t)(void* ctx, const char* message);

ret_t fetch_data(void* ctx, const char* method, const char* url, fetch_on_data_t on_data,
                 fetch_on_error_t on_error, fetch_on_progress_t on_progress);

END_C_DECLS

#endif /*APP_NAVIGATOR_H*/
