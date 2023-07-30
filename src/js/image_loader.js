function ImageLoader() { }

ImageLoader.getWidth = function (name) {
  let image = AssetsManager.getImage(name);

  return image ? image.w : 0;
}

ImageLoader.getHeight = function (name) {
  let image = AssetsManager.getImage(name);

  return image ? image.h : 0;
}

ImageLoader.load = function (name, theme = 'default') {
  let id = ImageCache.getIdOfNameAndTheme(name, theme);
  if (id == ImageCache.invalidImageId) {
    let is_default_theme = (theme == 'default');
    let uri = AssetsManager.getImageURI(name, theme, is_default_theme);
    if (uri) {
      let image = new Image();
      let name_with_theme = theme + ':' + name;

      if (TBrowser.nonce) {
        image.setAttribute('nonce', TBrowser.nonce);
      }

      if (TBrowser.rootUri) {
        uri = TBrowser.rootUri + '/' + uri;
      } 

      image.src = uri;
      image.name = name_with_theme;
      image.onload = function () {
        console.log('image loaded: ' + name_with_theme + ' ' + uri);
        Awtk.requestRepaint(1);
      }
      id = ImageCache.add(image);
    } else if (!is_default_theme) {
      id = ImageLoader.load(name);
    }
  }
  return id;
}

function testImageLoader() {
  let id = ImageLoader.load('me');
  let w = ImageLoader.getWidth('me');
  let h = ImageLoader.getHeight('me');

  console.log(`me: ${id} ${w} ${h}`);
  id = ImageLoader.load('me');
}
