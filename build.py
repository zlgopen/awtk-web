import os
import sys
import glob
import json
import shutil

def join_path(root, subdir):
    return os.path.normpath(os.path.join(root, subdir))
  
WEB_ROOT = os.path.abspath('webroot')
AWTK_ROOT_DIR = os.path.abspath('../awtk')
os.environ['AWTK_ROOT_DIR'] = AWTK_ROOT_DIR
sys.path.append(join_path(AWTK_ROOT_DIR, 'staticcheck/common'))
import awtk_files as awtk


def mkdir_if_not_exist(fullpath):
    if os.path.exists(fullpath):
        print(fullpath+" exist.")
    else:
        os.makedirs(fullpath)


def copy_folder(src, dst):
    print(src + '=>' + dst)
    if os.path.exists(dst):
        shutil.rmtree(dst)
    shutil.copytree(src, dst)
    print(src + "=>" + dst)


def copy_file(src, dst):
    print(src + '=>' + dst)
    with open(dst, 'w') as outfile:
        with open(src) as infile:
            outfile.write(infile.read())
            outfile.write("\n")


def merge_files(srcs, dst):
    print(dst)
    with open(dst, 'w') as outfile:
        for fname in srcs:
            print(fname)
            with open(fname) as infile:
                outfile.write(infile.read())
                outfile.write("\n")


def append_file(src, dst):
    with open(dst, 'a') as outfile:
        with open(src) as infile:
            outfile.write(infile.read())
            outfile.write("\n")


def config_get_app_target_dir(config):
    return join_path(WEB_ROOT, config['name'])


def config_get_js_dir(config):
    return join_path(config_get_app_target_dir(config), "js")


def config_get_target_assets_dir(config):
    return join_path(config_get_app_target_dir(config), "design")


def config_get_src_assets_dir(src_app_root, config):
    if 'assets' in config:
        assets_dir = config['assets']
        return join_path(src_app_root, assets_dir)
    else:
        return join_path(src_app_root, "design")


def config_get_target_project_json(config):
    return join_path(config_get_app_target_dir(config), "project.json")


def config_get_src_project_json(src_app_root, config):
    return join_path(src_app_root, 'project.json')


def prepare_update_res(config):
    src = 'scripts'
    dst = join_path(config_get_app_target_dir(config), 'scripts')

    copy_folder(src, dst)


def update_assets(config):
    prepare_update_res(config)
    config_get_app_target_dir(config)

    cwd = os.getcwd()
    app_target_dir = config_get_app_target_dir(config)
    os.chdir(app_target_dir)
    os.system('\"'+sys.executable+'\"' + ' scripts/update_res.py all')
    os.system('\"'+sys.executable+'\"' + ' scripts/update_res.py json')
    os.system('\"'+sys.executable+'\"' + ' scripts/update_res.py web')
    os.chdir(cwd)


def gen_app_config(config, filename):
    app_config = '{"defaultFont": "serif", "fontScale":"1"}'
    if 'config' in config:
        app_config = json.dumps(config['config'])

    str = 'TBrowser.config = ' + app_config + ';\n'
    fo = open(filename, "w")
    fo.write(str)
    fo.close()


def build_app_js(config):
    app_files = []
    sources = config['sources']
    output = join_path(config_get_js_dir(config), 'app.js')
    if(need_awtk_api_js(config)):
        app_files.append('api/awtk_api_browser_prefix.js')
        app_files.append('api/awtk_api.js')
    for f in sources:
        if f.endswith('.js'):
            app_files = app_files + glob.glob(join_path(src_app_root, f))
    merge_files(app_files, output)
    print(app_files, output)


def build_awtk_web_js(config):
    build_app_js(config)
    app_target_dir = config_get_app_target_dir(config)
    assets_js = join_path(app_target_dir, 'assets_web.js')
    outfile = join_path(config_get_js_dir(config), 'awtk_web.js')
    gen_app_config(config, 'gen/app_config.js')
    awtk_web_js_files = [assets_js,
                         'src/js/browser.js',
                         'gen/app_config.js',
                         'src/js/webgl2d.js',
                         'src/js/image_cache.js',
                         'src/js/assets_manager.js',
                         'src/js/image_loader.js',
                         'src/js/input_method_web.js',
                         'src/js/utils.js',
                         'src/js/edit_element.js',
                         'src/js/vgcanvas_web.js',
                         'src/js/awtk_wrap.js',
                         'src/js/key_event.js',
                         'src/js/events_source.js',
                         'src/js/main_loop_web.js']
    merge_files(awtk_web_js_files, outfile)


def is_js_app(config):
    return config['app_type'] == 'js'


def is_reactjs(config):
    if 'react' in config:
        return config['react']
    return False


def need_awtk_api_js(config):
    return is_js_app(config) and not is_reactjs(config)


def prepare_app_target_dir(config):
    js_dir = config_get_js_dir(config)
    mkdir_if_not_exist(js_dir)
    mkdir_if_not_exist("gen")
    mkdir_if_not_exist("gen/c")
    mkdir_if_not_exist("gen/ts")


def copy_data_file(config, filename):
    src = 'data/' + filename
    dst = join_path(config_get_app_target_dir(config), filename)
    shutil.copyfile(src, dst)


def copy_assets(src_app_root, config):
    target_assets_dir = config_get_target_assets_dir(config)
    src_assets_dir = config_get_src_assets_dir(src_app_root, config)
    copy_folder(src_assets_dir, target_assets_dir)


def copy_project_json(src_app_root, config):
    dst = config_get_target_project_json(config)
    src = config_get_src_project_json(src_app_root, config)
    shutil.copyfile(src, dst)


def build_app_assets(src_app_root, config):
    copy_assets(src_app_root, config)
    copy_project_json(src_app_root, config)
    copy_data_file(config, 'app.html')
    copy_data_file(config, 'index.html')
    update_assets(config)


def prepare_export_funcs(src_app_root, config):
    awtk_export = ""
    output_file = "gen/export_all_funcs.json"

    if is_js_app(config):
        awtk_export = "configs/export_awtk_funcs.json"
    else:
        awtk_export = "configs/export_awtk_web_funcs.json"

    if 'exports' in config:
        app_export = join_path(src_app_root, config['exports'])
        with open(app_export, 'r') as f:
            data_app_exprot = json.load(f)
        with open(awtk_export, 'r') as f:
            data_awtk_exprot = json.load(f)
        data = data_app_exprot + data_awtk_exprot

        with open(output_file, 'w') as f:
            json.dump(data, f, indent=4)
    else:
        shutil.copyfile(awtk_export, output_file)


def build_awtk_js(src_app_root, config, flags):
    app_target_dir = config_get_app_target_dir(config)
    app_files = []

    if(is_js_app(config)):
        app_files.append(join_path('./', 'gen/c/awtk_wrap.c'))

    sources = config['sources']
    for f in sources:
        if f.endswith('.c') or f.endswith('.cpp'):
            app_files = app_files + glob.glob(join_path(src_app_root, f))

    web_files = glob.glob('src/c/*.c')
    files = awtk.getWebFiles() + web_files + app_files

    all_files = []
    for f in files:
        all_files.append(os.path.normpath(os.path.abspath(f)))

    includes_path = ' -I' + join_path(app_target_dir, 'res') + ' '

    if 'includes' in config:
        includes_files = config['includes']
        for f in includes_files:
            includes_path += ('-I ' + join_path(src_app_root, f) + " ")

    COMMON_FLAGS = ' ' + flags + ' -Werror '
    COMMON_FLAGS = COMMON_FLAGS + ' -DSAFE_HEAP=1 -DASSERTIONS=1 -DSTACK_OVERFLOW_CHECK=1 '
    COMMON_FLAGS = COMMON_FLAGS + \
        ' -s EXTRA_EXPORTED_RUNTIME_METHODS=@configs/export_runtime_funcs.json '
    if(is_js_app(config)):
        COMMON_FLAGS = COMMON_FLAGS + ' -DAWTK_WEB_JS '
        COMMON_FLAGS = COMMON_FLAGS + ' -s RESERVED_FUNCTION_POINTERS=1000 '

    COMMON_FLAGS = COMMON_FLAGS + ' -s EXPORTED_FUNCTIONS=@gen/export_all_funcs.json'

    COMMON_FLAGS = COMMON_FLAGS + ' -DHAS_STD_MALLOC -DNDEBUG -DAWTK_WEB -Isrc/c '
    COMMON_FLAGS = COMMON_FLAGS + ' -DWITH_WINDOW_ANIMATORS -DWITH_NANOVG_GPU '
    output = join_path(config_get_js_dir(config), "awtk.js")
    CPPFLAGS_JS = ' -o ' + output + ' -s WASM=0 ' + COMMON_FLAGS + includes_path
    awtk.runArgsInFile('emcc -v ', CPPFLAGS_JS, all_files)

    output = join_path(config_get_js_dir(config), "awtk_asm.js")
    CPPFLAGS_ASM = ' -o ' + output + COMMON_FLAGS + includes_path
    awtk.runArgsInFile('emcc -v ', CPPFLAGS_ASM, all_files)


action = 'all'
filename = os.path.abspath('./demo.json')


def show_usage():
    print('Usage: python build.py app.json action(all|debug|release|assets|awtk_web_js|awtk_js|js)')
    print('=============================================================')
    print('  debug:        build debug version.')
    print('  release:      build release version.')
    print('  assets:       build assets only.')
    print('  awtk_js:      build awtk_js only.')
    print('  awtk_web_js:  build awtk_web_js only.')
    print('  js:           build awtk_js and awtk_web_js only.')
    print('  app:          build app.js only(js app).')
    print('  all:          same as debug. build debug version.')
    print('=============================================================')

    sys.exit(0)


if len(sys.argv) < 3:
    show_usage()

else:
    action = sys.argv[2]
    filename = os.path.abspath(sys.argv[1])


def clean_temp_files(config):
    app_target_dir = config_get_app_target_dir(config)
    os.remove(join_path(app_target_dir, 'assets_web.js'))


def merge_and_check_config(config):
    if 'web' in config:
        for key in config['web']:
            config[key] = config['web'][key]

    return config


with open(filename, 'r') as load_f:
    config = merge_and_check_config(json.load(load_f))
    src_app_root = os.path.dirname(filename)
    prepare_app_target_dir(config)
    prepare_export_funcs(src_app_root, config)

    if action == 'all':
        build_app_assets(src_app_root, config)
        build_awtk_js(src_app_root, config, '')
        build_awtk_web_js(config)
    elif action == 'debug':
        build_app_assets(src_app_root, config)
        build_awtk_js(src_app_root, config, '-g')
        build_awtk_web_js(config)
    elif action == 'release':
        build_app_assets(src_app_root, config)
        build_awtk_js(src_app_root, config, '-Os --memory-init-file 0')
        build_awtk_web_js(config)
        clean_temp_files(config)
    elif action == 'assets':
        build_app_assets(src_app_root, config)
    elif action == 'awtk_js':
        build_awtk_js(src_app_root, config, '')
    elif action == 'awtk_web_js':
        build_awtk_web_js(config)
    elif action == 'app':
        build_app_js(config)
    elif action == 'js':
        build_awtk_web_js(config)
        build_awtk_js(src_app_root, config, '')
    else:
        show_usage()
