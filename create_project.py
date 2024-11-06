import os
import sys
import glob
import json
import shutil


build_debug = False
build_release = False

build_assets = False
build_awtk_js = False
build_awtk_web_js = False


if len(sys.argv) < 2:
    helper.show_usage()
    sys.exit(1)

app_json = os.path.abspath(sys.argv[1])

if len(sys.argv) < 3:
    action = "release"
else:
    action = sys.argv[2]

if action == "debug" or action == "all":
    build_debug = True
    build_assets = True
    build_awtk_js = True
    build_awtk_web_js = True
elif action == "release":
    build_release = True
    build_assets = True
    build_awtk_js = True
    build_awtk_web_js = True
elif action == "assets":
    build_assets = True
elif action == "awtk_js":
    build_awtk_js = True
elif action == "awtk_web_js":
    build_awtk_web_js = True
elif action == "js":
    build_awtk_js = True
    build_awtk_web_js = True
else:
    print("unknown action:" + action)
    sys.exit(1)

AWTK_ROOT = os.path.normpath(os.path.abspath(os.path.join(os.getcwd(), "../awtk")))
sys.path.append(os.path.join(AWTK_ROOT, "scripts"))

import mobile_project_helper as helper  # type: ignore

WORK_DIR = os.path.abspath(os.path.normpath(os.getcwd()))
BUILD_DIR = helper.join_path(WORK_DIR, "build")
TEMPLATE_DIR = helper.join_path(WORK_DIR, "web-project")

print("WORK_DIR:" + WORK_DIR)


def replace_files_content(app_root_dst, config):
    files = ["app.html"]
    helper.files_replace_with_config(files, app_root_dst, config)
    cmakefile = helper.join_path(app_root_dst, "CMakeLists.txt")
    if build_debug:
        helper.file_replace(cmakefile, "DEBUG_FLAGS", "-O0 -g -gsource-map ")
    else:
        helper.file_replace(cmakefile, "DEBUG_FLAGS", "-Os")


def show_result(app_name):
    print("====================================================")
    print("project is created at: build/" + app_name)
    print("====================================================")


def config_get_app_target_dir(config):
    return helper.join_path(BUILD_DIR, config["name"])


def config_get_js_dir(config):
    return helper.join_path(config_get_app_target_dir(config), "js")


def config_get_target_assets_dir(config):
    return helper.join_path(config_get_app_target_dir(config), "design")


def config_get_src_assets_dir(src_app_root, config):
    if "assets" in config:
        assets_dir = config["assets"]
        return helper.join_path(src_app_root, assets_dir)
    else:
        return helper.join_path(src_app_root, "design")


def config_get_target_project_json(config):
    return helper.join_path(config_get_app_target_dir(config), "project.json")


def config_get_src_project_json(src_app_root, config):
    return helper.join_path(src_app_root, "project.json")


def prepare_update_res(config):
    src = "scripts"
    dst = helper.join_path(config_get_app_target_dir(config), "scripts")

    helper.copy_folder(src, dst)


def update_assets(config):
    cwd = os.getcwd()
    app_target_dir = config_get_app_target_dir(config)
    os.chdir(app_target_dir)
    os.system('"' + sys.executable + '"' + " scripts/update_res.py res")
    os.system('"' + sys.executable + '"' + " scripts/update_res.py json")
    os.system('"' + sys.executable + '"' + " scripts/update_res.py web")
    os.chdir(cwd)


def copy_assets(src_app_root, config):
    target_assets_dir = config_get_target_assets_dir(config)
    src_assets_dir = config_get_src_assets_dir(src_app_root, config)
    helper.copy_folder(src_assets_dir, target_assets_dir)


def copy_project_json(src_app_root, config):
    dst = config_get_target_project_json(config)
    src = config_get_src_project_json(src_app_root, config)
    shutil.copyfile(src, dst)


def build_romfs(src_app_root, config):
    if "romfs" in config:
        romfs = helper.join_path(src_app_root, config["romfs"])
        romfs_make = helper.join_path(AWTK_ROOT, "bin/romfs_make")
        output = helper.join_path(config_get_app_target_dir(config), "data/romfs")
        helper.mkdir_if_not_exist(
            helper.join_path(config_get_app_target_dir(config), "data")
        )

        cmd = romfs_make + " " + romfs + " " + output + " true"
        os.system(cmd)
        return True


def build_app_assets(app_root_src, config):
    copy_assets(app_root_src, config)
    copy_project_json(app_root_src, config)
    update_assets(config)
    build_romfs(app_root_src, config)


def gen_app_config(config, filename):
    app_config = '{"defaultFont": "serif", "fontScale":"1"}'
    if "config" in config:
        app_config = json.dumps(config["config"])

    if "romfs" in config:
        app_config.romfs = True
        
    str = "TBrowser.config = " + app_config + ";\n"
    helper.file_write(filename, str)


def is_js_app(config):
    return config["app_type"] == "js"


def is_reactjs(config):
    if "react" in config:
        return config["react"]
    return False


def need_awtk_api_js(config):
    return is_js_app(config) and not is_reactjs(config)


def build_app_js(app_root_src, config):
    api_files = []
    sources = config["sources"]
    api_output = helper.join_path(config_get_js_dir(config), "awtk_api.js")
    if need_awtk_api_js(config):
        api_files.append("web-project/api/awtk_api_browser_prefix.js")
        api_files.append("web-project/api/awtk_api.js")
        api_files.append("web-project/api/awtk_api_browser_appendix.js")
        helper.merge_files(api_files, api_output)

    app_files = []
    app_output = helper.join_path(config_get_js_dir(config), "app.js")
    for f in sources:
        if f.endswith(".js"):
            app_files = app_files + glob.glob(helper.join_path(app_root_src, f))
    helper.merge_files(app_files, app_output)
    print(app_files, app_output)


def build_awtk_web_js(app_root_src, app_root_dst, config):
    build_app_js(app_root_src, config)
    outfile = helper.join_path(config_get_js_dir(config), "awtk_web.js")
    app_config_filename = helper.join_path(app_root_dst, "temp/app_config.js")
    gen_app_config(config, app_config_filename)

    awtk_web_js_files = [
        "awtk-port/js/browser.js",
        app_config_filename,
        "awtk-port/js/webgl2d.js",
        "awtk-port/js/image_cache.js",
        "awtk-port/js/assets_manager.js",
        "awtk-port/js/image_loader.js",
        "awtk-port/js/input_method_web.js",
        "awtk-port/js/utils.js",
        "awtk-port/js/edit_element.js",
        "awtk-port/js/vgcanvas_web.js",
        "awtk-port/js/awtk_wrap.js",
        "awtk-port/js/key_event.js",
        "awtk-port/js/events_source.js",
        "awtk-port/js/main_loop_web.js",
    ]
    for f in awtk_web_js_files:
        if os.path.isabs(f):
            pass
        else:
            index = awtk_web_js_files.index(f)
            abspath = helper.join_path(app_root_dst, f)
            awtk_web_js_files[index] = abspath

    helper.merge_files(awtk_web_js_files, outfile)

def release_to_web(app_name):
    src = helper.join_path(BUILD_DIR, app_name)
    webroot = helper.join_path(WORK_DIR, "webroot")
    dst = helper.join_path(webroot, app_name)

    helper.mkdir_if_not_exist(dst)
    files = ["index.html", "app.html", "simulator_bg.png", "simulator.html", "js", "design", "data"]
    for f in files:
        src_file = helper.join_path(src, f)
        dst_file = helper.join_path(dst, f)
        if os.path.isdir(src_file):
            helper.copy_folder(src_file, dst_file)
        elif os.path.isfile(src_file):
            shutil.copyfile(src_file, dst_file)

    print("====================================================")
    print("web files are created at: webroot/" + app_name)
    print("====================================================")

def create_project(config, app_root_src):
    app_name = helper.config_get_app_name(config)
    app_root_dst = helper.join_path(BUILD_DIR, app_name)
    awtk_dst_source_dir = helper.join_path(app_root_dst, "awtk")
    app_dst_source_dir = helper.join_path(app_root_dst, "app")

    if build_debug or build_release:
        helper.copy_folder(TEMPLATE_DIR, app_root_dst)
        helper.copy_file(
            helper.join_path(AWTK_ROOT, "scripts/awtk_mobile_common.mk"),
            helper.join_path(app_root_dst, "awtk_common.mk"),
        )
        replace_files_content(app_root_dst, config)
        helper.update_cmake_file(config, helper.join_path(app_root_dst, "CMakeLists.txt"))
    export_all_funcs = helper.join_path(app_root_dst, "gen/export_all_funcs.json");        
    if need_awtk_api_js(config):
        helper.copy_file(
            helper.join_path(app_root_dst, "configs/export_awtk_funcs.json"),
            export_all_funcs
        )
    else:
        helper.copy_file(
            helper.join_path(app_root_dst, "configs/export_awtk_web_funcs.json"),
            export_all_funcs
        )
      

    if build_assets:
        build_app_assets(app_root_src, config)
    
    if build_awtk_web_js:
        build_awtk_web_js(app_root_src, app_root_dst, config)

    if build_awtk_js:
        helper.copy_awtk_files(awtk_dst_source_dir)
        helper.copy_app_sources(config, app_dst_source_dir, app_root_src)
        os.system("cd " + app_root_dst + " && sh build.sh")

    show_result(app_name)
    release_to_web(app_name)


config = helper.load_config(app_json, "web")
app_root_src = os.path.dirname(app_json)
create_project(config, app_root_src)
