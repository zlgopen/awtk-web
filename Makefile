
AWTK_ROOT=../awtk
AWTK_SRC=$(AWTK_ROOT)/src

AWTK_TKC=$(AWTK_SRC)/tkc
AWTK_XML=$(AWTK_SRC)/xml
AWTK_BASE=$(AWTK_SRC)/base
AWTK_WIDGETS=$(AWTK_SRC)/widgets
AWTK_LAYOUTERS=$(AWTK_SRC)/layouters
AWTK_UI_LOADER=$(AWTK_SRC)/ui_loader
AWTK_SVG=$(AWTK_SRC)/svg
AWTK_CLIPBOARD=$(AWTK_SRC)/clip_board
AWTK_WIDGET_ANIMATORS=$(AWTK_SRC)/widget_animators
AWTK_WINDOW_ANIMATORS=$(AWTK_SRC)/window_animators
AWTK_VGCANVAS=$(AWTK_SRC)/vgcanvas
AWTK_EXT_WIDGETS=$(AWTK_SRC)/ext_widgets

CC      = emcc 
OUTPUT  = -o awtk.js
EXTRA_FLAGS=
EXPORT_FUNCTIONS=-s EXPORTED_FUNCTIONS="['_awtkMainLoopStep', '_awtkInit', '_awtkDeinit']"
#CC      = cppcheck
#EXTRA_FLAGS= --enable=warning  --enable=performance -DWITH_CPPCHECK
CPPFLAGS= -DHAS_STD_MALLOC -DNDEBUG -DAWTK_WEB \
					-I$(AWTK_ROOT) -I$(AWTK_SRC) -I$(AWTK_SRC)/ext_widgets

include ./build-scripts/tkc_files.mk
include ./build-scripts/xml_files.mk
include ./build-scripts/base_files.mk
include ./build-scripts/layouters_files.mk
include ./build-scripts/widgets_files.mk
include ./build-scripts/ui_loader_files.mk
include ./build-scripts/svg_files.mk
include ./build-scripts/clipboard_files.mk
include ./build-scripts/widget_animators_files.mk
include ./build-scripts/window_animators_files.mk
include ./build-scripts/vgcanvas_files.mk
include ./build-scripts/awtk_files.mk
include ./build-scripts/app_files.mk
include ./build-scripts/ext_widgets_files.mk

ALL_FILES=$(TKC_FILES) \
					$(XML_FILES) \
					$(BASE_FILES) \
#					$(LAYOUTERS_FILES) \
#					$(WIDGETS_FILES) \
#					$(UI_LOADER_FILES) \
#					$(SVG_FILES) \
#					$(CLIPBOARD_FILES) \
#					$(WIDGET_ANIMATORS_FILES) \
#					$(WINDOW_ANIMATORS_FILES) \
#					$(EXT_WIDGETS_FILES) \
#					$(AWTK_FILES) \
#					$(APP_FILES)
#
OTHER_FILES=src/c/vgcanvas_web.c src/c/dummy.c src/c/main.c

all:
	$(CC) $(EXPORT_FUNCTIONS) $(CPPFLAGS) $(EXTRA_FLAGS) $(ALL_FILES) $(OTHER_FILES) $(OUTPUT)

.PHONY:clean
clean:
	-rm -f *.js
