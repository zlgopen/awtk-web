import os
import json

EXPORT_JSON = "export.json"

def join_path(root, subdir):
    return os.path.abspath(os.path.normpath(os.path.join(root, subdir)))

def abs_conf_files(group, app_root):
    for i in range(len(group)):
        group[i] = join_path(app_root, group[i])

def merge_config_files(group1, group2):
    for key in group2:
        group1.append(key)

def merge_config_flags(group1, group2):
    for key in group2:
        group1.append(key);

def merge_depend(config, root, depend, target_platform):
  filename = os.path.abspath(os.path.normpath(os.path.join(root, depend, EXPORT_JSON)))

  if os.path.exists(filename):
    depend_config = load_config(filename, target_platform)
    if 'sources' in depend_config:    
        if 'sources' not in config:
            config['sources'] = []
        merge_config_files(config['sources'], depend_config['sources'])
    if 'includes' in depend_config:
        if 'includes' not in config:
            config['includes'] = []
        merge_config_files(config['includes'], depend_config['includes'])
    if 'cflags' in depend_config:
        if 'cflags' not in config:
            config['cflags'] = []
        merge_config_flags(config['cflags'], depend_config['cflags'])
    if 'cxxflags' in depend_config:
        if 'cxxflags' not in config:
            config['cxxflags'] = []
        merge_config_flags(config['cxxflags'], depend_config['cxxflags'])

def merge_platform_config(config, root_dir, platform):
    if platform in config:
        for key in config[platform]:
            if key not in config:
                config[key] = config[platform][key]
            else:   
                if isinstance(config[key], list):
                    config[key] = config[key] + config[platform][key]
                elif isinstance(config[key], dict):
                    config[key].update(config[platform][key])
                else:
                    config[key] = config[platform][key]
    if platform == 'web':
        if 'sources' in config:
            abs_conf_files(config['sources'], root_dir)

        if 'includes' in config:
            abs_conf_files(config['includes'], root_dir)

def load_config(filename, target_platform):
    config_root = os.path.dirname(filename)
    component_name = os.path.basename(config_root)
    config_name = os.path.basename(filename)

    with open(filename, 'r') as f:
        config = json.load(f)
        merge_platform_config(config, config_root, target_platform)
    
        # depend itself
        if not config_name == EXPORT_JSON:
            merge_depend(config, os.path.dirname(config_root), component_name, target_platform)

        if 'depends' in config:
            for key in config['depends']:
                merge_depend(config, config_root, key, target_platform);

        return config

def load_app_config(filename, target_platform):
    config = load_config(filename, target_platform)

    if 'sources' in config:
        config['sources'] = list(set(config['sources']));
    if 'includes' in config:
        config['includes'] = list(set(config['includes']));
    if 'cflags' in config:
        config['cflags'] = list(set(config['cflags']));
    if 'cxxflags' in config:
        config['cxxflags'] = list(set(config['cxxflags']));

    return config
