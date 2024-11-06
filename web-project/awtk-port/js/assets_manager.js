function AssetsManager() { }

AssetsManager.exist = function (type, name) {
  const assets = g_awtk_assets[type];
  if (assets) {
    const asset = assets.find(iter => {
      return name == iter.name;
    });

    return !!asset;
  }

  return false;
}

AssetsManager.getImageByDPI = function (name, dpi, theme = 'default') {
  let anydpi = '/xx/';
  let _theme = '/' + theme + '/';
  const assets = g_awtk_assets['image'];

  if (assets) {
    let asset = assets.find(iter => {
      return name == iter.name && iter.uri.indexOf(_theme) >= 0 && iter.uri.indexOf(dpi) >= 0;
    });
    if (asset == null) {
      asset = assets.find(iter => {
        return name == iter.name && iter.uri.indexOf(_theme) >= 0 && iter.uri.indexOf(anydpi) >= 0;
      });
    }

    return asset;
  }

  return null;
}

AssetsManager.getImage = function (name, theme = 'default', log = true) {
  let dpi = '/x' + Math.round(TBrowser.getDevicePixelRatio()) + '/';
  let asset = AssetsManager.getImageByDPI(name, dpi, theme);

  if (!asset && log) {
    console.log('Not found ' + name);
  }

  return asset;
}

AssetsManager.getImageURI = function (name, theme = 'default', log = true) {
  const asset = AssetsManager.getImage(name, theme, log);

  return asset ? asset.uri : null;
}

AssetsManager.getFontURI = function (name) {
  const assets = g_awtk_assets['font'];
  if (assets) {
    const asset = assets.find(iter => {
      return name == iter.name;
    });

    return asset ? asset.uri : null;
  }

  return null;
}

AssetsManager.preloadFonts = function () {
  const fonts = g_awtk_assets['font'];
  if (fonts && fonts.length > 0) {
    fonts.forEach(function (iter) {
      if (iter.name.indexOf('default') != 0) {
        TBrowser.loadFont(iter.name, iter.uri);
      }
    });
  }

  return true;
}


function testAssetManager() {
  console.log(AssetsManager.exist('image', 'msg'));
  console.log(AssetsManager.getImage('msg'));
  console.log(AssetsManager.getImageURI('msg'));
  console.log(AssetsManager.getFontURI('default'));
}
