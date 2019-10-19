import os
import sys 
AWTK_ROOT='$AWTK_ROOT'
sys.path.append(os.path.join(AWTK_ROOT, "scripts"))
import update_res_common as common

APP_ROOT=os.getcwd()

ASSETS_ROOT=common.joinPath(APP_ROOT, 'assets')
ASSET_C=common.joinPath(APP_ROOT, 'assets.c')

common.init(AWTK_ROOT, ASSETS_ROOT, 'default', ASSET_C);

common.updateRes()
