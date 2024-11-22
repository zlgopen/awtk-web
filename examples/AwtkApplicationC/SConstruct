import os
import scripts.app_helper as app

CUSTOM_WIDGET_LIBS = []

DEPENDS_LIBS = CUSTOM_WIDGET_LIBS + []

helper = app.Helper(ARGUMENTS)
helper.set_deps(DEPENDS_LIBS)

app.prepare_depends_libs(ARGUMENTS, helper, DEPENDS_LIBS)
helper.call(DefaultEnvironment)

SConscriptFiles = ['src/SConscript', 'tests/SConscript']
helper.SConscript(SConscriptFiles)
