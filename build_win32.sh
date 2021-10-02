AWTK_WEB=${PWD}

if [ "$#" -ne 2 ]; then
  echo "Usage: $0 app.json action(all|debug|release|assets|awtk_web_js|awtk_js|js)"
  echo "============================================================="
  echo "  debug:        build debug version."
  echo "  release:      build release version."
  echo "  assets:       build assets only."
  echo "  awtk_js:      build awtk_js only."
  echo "  awtk_web_js:  build awtk_web_js only."
  echo "  js:           build awtk_js and awtk_web_js only."
  echo "  all:          same as debug. build debug version."
  echo "============================================================="
else
  #use abs path of python, to avoid use python in emsdk
  PYTHON_PATH=`where 'python'` #'/d/Program Files (x86)/Microsoft Visual Studio/Shared/Python37_64/python.exe'
  echo "python path : $PYTHON_PATH"

  source /d/work/tools/emsdk/emsdk_env.sh
  ${PYTHON_PATH} -m pip install --upgrade pip
  ${PYTHON_PATH} -m pip install Pillow
  ${PYTHON_PATH} build.py $*
fi

cd ${AWTK_WEB}

