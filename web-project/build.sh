mkdir build
cd build

emcmake cmake ..
cmake --build . --target awtk
cmake --build . --target awtk_asm

cd -
cp -f build/awtk_asm.* js
cp assets_web.js js
