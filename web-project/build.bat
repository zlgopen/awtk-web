@echo off
if not exist build md build
cd build

call emcmake cmake ..
call cmake --build . --target awtk
call cmake --build . --target awtk_asm

cd..
copy .\build\awtk_asm.* js /Y
copy assets_web.js js /Y