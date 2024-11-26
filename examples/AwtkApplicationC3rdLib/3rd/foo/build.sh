mkdir build
cd build

source /Users/jim/work/tools/emsdk/emsdk_env.sh

emcmake cmake ..
cmake --build . --target foo
cd -

mkdir -p ../lib
cp -vf build/libfoo.a ../lib

