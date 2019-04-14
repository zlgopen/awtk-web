
AWTK_ROOT=../awtk
AWTK_SRC=$(AWTK_ROOT)/src

include $(AWTK_ROOT)/staticcheck/common/awtk_all.mk

CC      = emcc 
OUTPUT  = -o awtk.js

EXTRA_FLAGS=-DSAFE_HEAP=1
EXPORT_FUNCTIONS=-s EXPORTED_FUNCTIONS=@configs/export_funcs.json
CPPFLAGS = -DHAS_STD_MALLOC -DNDEBUG -DAWTK_WEB \
					-I$(AWTK_ROOT) -I$(AWTK_SRC) -I$(AWTK_SRC)/ext_widgets -I./ -I./src/c

include ./build-scripts/app_files.mk
include ./build-scripts/awtk_web_files.mk

ALL_FILES=$(TKC_FILES) \
					$(XML_FILES) \
					$(BASE_FILES) \
					$(LAYOUTERS_FILES) \
					$(WIDGETS_FILES) \
					$(UI_LOADER_FILES) \
					$(SVG_FILES) \
					$(CLIPBOARD_FILES) \
					$(WIDGET_ANIMATORS_FILES) \
					$(WINDOW_ANIMATORS_FILES) \
					$(EXT_WIDGETS_FILES) \
					$(AWTK_FILES) \
          $(APP_FILES) \
					$(AWTK_WEB_FILES)



all:
	$(CC) $(EXPORT_FUNCTIONS) $(CPPFLAGS) $(EXTRA_FLAGS) $(ALL_FILES) $(OUTPUT)

.PHONY:clean
clean:
	-rm -f *.js
