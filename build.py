import os
import sys
import glob
import json
import shutil

WEB_ROOT = os.path.abspath('webroot')
AWTK_ROOT_DIR = os.path.abspath('../awtk')
os.environ['AWTK_ROOT_DIR'] = AWTK_ROOT_DIR

def join_path(root, subdir):
    return os.path.normpath(os.path.join(root, subdir))

sys.path.append(join_path(AWTK_ROOT_DIR, 'staticcheck/common'))
import awtk_files as awtk

def mkdir_if_not_exist(fullpath):
    if os.path.exists(fullpath):
        print(fullpath+" exist.")
    else:
        os.makedirs(fullpath)


def copy_and_overwrite(from_path, to_path):
    print(from_path + '=>' + to_path)
    if os.path.exists(to_path):
        shutil.rmtree(to_path)
    shutil.copytree(from_path, to_path)


def get_app_target_dir(config):
    return join_path(WEB_ROOT, config['name'])


def get_js_dir(config):
    return join_path(get_app_target_dir(config), "js")


def get_target_assets_dir(config):
    return join_path(get_app_target_dir(config), "assets")


def get_src_assets_dir(src_app_root, config):
    return join_path(src_app_root, config['assets'])


def prepare_update_res(config):
    infile = 'data/update_res.py'
    outfile = join_path(get_app_target_dir(config), 'update_res.py')

    fo = open(infile, "r+")
    str = fo.read()
    str = str.replace('$AWTK_ROOT', AWTK_ROOT_DIR).replace('\\', '\\\\');
    fo.close()

    fo = open(outfile, "w")
    fo.write(str)
    fo.close()

    print(infile + '=>' + outfile)


def update_assets(config):
    prepare_update_res(config);
    get_app_target_dir(config)

    cwd = os.getcwd()
    app_target_dir = get_app_target_dir(config)
    os.chdir(app_target_dir)
    os.system(sys.executable + ' update_res.py all')
    os.system(sys.executable + ' update_res.py json')
    os.system(sys.executable + ' update_res.py web')
    os.chdir(cwd)


def merge_js_files(filenames, ouputjs):
    print(ouputjs)
    with open(ouputjs, 'w') as outfile:
        for fname in filenames:
            print(fname)
            with open(fname) as infile:
                outfile.write(infile.read())
                outfile.write("\n");


def build_awtk_web_js(config):
    app_target_dir = get_app_target_dir(config)
    assert_js = join_path(app_target_dir, 'assets_web.js')
    outfile = join_path(get_js_dir(config), 'awtk_web.js')
    awtk_web_js_files = [assert_js,
                         'src/js/browser.js',
                         'src/js/image_cache.js',
                         'src/js/assets_manager.js',
                         'src/js/image_loader.js',
                         'src/js/input_method_web.js',
                         'src/js/utils.js',
                         'src/js/edit_element.js',
                         'src/js/vgcanvas_web.js',
                         'src/js/awtk_wrap.js',
                         'src/js/events_source.js',
                         'src/js/main_loop_web.js']
    merge_js_files(awtk_web_js_files, outfile)


def prepare_app_target_dir(config):
    js_dir = get_js_dir(config)
    mkdir_if_not_exist(js_dir)

def build_app_assets(src_app_root, config):
    target_assets_dir = get_target_assets_dir(config)
    src_assets_dir = get_src_assets_dir(src_app_root, config)
    copy_and_overwrite(src_assets_dir, target_assets_dir)
    target_app_js = join_path(get_app_target_dir(config), 'app_js.html');
    target_app_asm = join_path(get_app_target_dir(config), 'app_asm.html');	
    target_index = join_path(get_app_target_dir(config), 'index.html');
    shutil.copyfile('data/app_js.html', target_app_js);
    shutil.copyfile('data/app_asm.html', target_app_asm);
    shutil.copyfile('data/index.html', target_index);
    update_assets(config)

def build_awtk_js(src_app_root, config):
    cwd = os.path.abspath(os.getcwd())
    app_target_dir = get_app_target_dir(config)
    assert_c = join_path(app_target_dir, 'assets_web.c')

    app_files = [assert_c]
    sources = config['sources']
    for f in sources:
        app_files.append(os.path.normpath(os.path.join(src_app_root, f)))

    web_files = glob.glob('src/c/*.c')
    files = awtk.getWebFiles() + web_files + app_files
    all_files = [];
    for f in files:
        all_files.append(os.path.normpath(os.path.abspath(f)))
    
    COMMON_FLAGS=' -Os '
    COMMON_FLAGS = COMMON_FLAGS + ' -s EXPORTED_FUNCTIONS=@configs/export_app_funcs.json '
    COMMON_FLAGS = COMMON_FLAGS + ' -s EXTRA_EXPORTED_RUNTIME_METHODS=@configs/export_runtime_funcs.json '
    COMMON_FLAGS = COMMON_FLAGS + ' -DSAFE_HEAP=1 -DHAS_STD_MALLOC -DNDEBUG -DAWTK_WEB -Isrc/c '
    COMMON_FLAGS = COMMON_FLAGS + ' -DWITH_WINDOW_ANIMATORS -DWITH_NANOVG_GPU '
	
    output = join_path(get_js_dir(config), "awtk.js")
    CPPFLAGS_JS = ' -o ' + output + ' -s WASM=0 ' + COMMON_FLAGS;
    awtk.runArgsInFile('emcc -v ', CPPFLAGS_JS, all_files)
	
    output = join_path(get_js_dir(config), "awtk_asm.js")
    CPPFLAGS_ASM = ' -o ' + output + COMMON_FLAGS;
    awtk.runArgsInFile('emcc -v ', CPPFLAGS_ASM, all_files)

action = 'all'
filename = os.path.abspath('./demo.json')

if len(sys.argv) < 3:
    print('Usage: python build.py app.json action(all|assets|awtk_web_js|awtk_js|js)')
    sys.exit(0)
else:
    action = sys.argv[2]
    filename = os.path.abspath(sys.argv[1])

def clean_temp_files(config):
    app_target_dir = get_app_target_dir(config)
    os.remove(join_path(app_target_dir, 'update_res.py'));
    os.remove(join_path(app_target_dir, 'assets.c'));
    os.remove(join_path(app_target_dir, 'assets_web.c'));
    os.remove(join_path(app_target_dir, 'assets_web.js'));

with open(filename, 'r') as load_f:
    config = json.load(load_f)
    src_app_root = os.path.dirname(filename)
    prepare_app_target_dir(config);

    if action == 'all':
        build_app_assets(src_app_root, config)
        build_awtk_js(src_app_root, config)
        build_awtk_web_js(config)
#        clean_temp_files(config)
    elif action == 'assets':
        build_app_assets(src_app_root, config)
    elif action == 'awtk_js':
        build_awtk_js(src_app_root, config)
    elif action == 'awtk_web_js':
        build_awtk_web_js(config)
    elif action == 'js':
        build_awtk_web_js(config)
        build_awtk_js(src_app_root, config)
    else:
        print(action + ' is invalid action!')

