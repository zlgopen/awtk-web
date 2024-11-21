@echo off
setlocal

set AWTK_WEB=%CD%

if "%~2"=="" (
  echo Usage: %0 app.json action(all^|debug^|release^|assets^|awtk_web_js^|awtk_js^|js)
  echo =============================================================
  echo   debug:        build debug version.
  echo   release:      build release version.
  echo   assets:       build assets only.
  echo   awtk_js:      build awtk_js only.
  echo   awtk_web_js:  build awtk_web_js only.
  echo   js:           build awtk_js and awtk_web_js only.
  echo   all:          same as debug. build debug version.
  echo =============================================================
) else (
  rem Use absolute path of python, to avoid using python in emsdk
  set PYTHON=python
  echo python path : %PYTHON%

  call D:\work\tools\emsdk\emsdk_env.bat
  %PYTHON% -m pip install --upgrade pip
  %PYTHON% -m pip install Pillow
  %PYTHON% create_project.py %*
)

cd %AWTK_WEB%
