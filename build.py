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
    str = str.replace('$AWTK_ROOT', AWTK_ROOT_DIR)
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
    os.system('python update_res.py all')
    os.system('python update_res.py json')
    os.system('python update_res.py web')
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
    target_app= join_path(get_app_target_dir(config), 'app.html');
    target_index = join_path(get_app_target_dir(config), 'index.html');
    shutil.copyfile('data/app.html', target_app);
    shutil.copyfile('data/index.html', target_index);
    update_assets(config)

def build_awtk_js(src_app_root, config):
    app_target_dir = get_app_target_dir(config)
    assert_c = join_path(app_target_dir, 'assets_web.c')

    app_files = [assert_c]
    sources = config['sources']
    for f in sources:
        app_files.append(os.path.normpath(os.path.join(src_app_root, f)))

    web_files = glob.glob('src/c/*.c')
    all_files = awtk.getWebFiles() + web_files + app_files

    output = join_path(get_js_dir(config), "awtk.js")
    CPPFLAGS = '-s EXPORTED_FUNCTIONS=@configs/export_funcs.json -o ' + output
    CPPFLAGS = CPPFLAGS + ' -DSAFE_HEAP=1 -DHAS_STD_MALLOC -DNDEBUG -DAWTK_WEB -Isrc/c '
    CPPFLAGS = CPPFLAGS + ' -DWITH_WINDOW_ANIMATORS -DWITH_NANOVG_GPU '
    awtk.run('emcc', CPPFLAGS, all_files)


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

