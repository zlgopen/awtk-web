function ImageLoader() {}

ImageLoader.getWidth = function (name) {
  let image = AssetsManager.getImage(name);

  return image ? image.w : 0;
};

ImageLoader.getHeight = function (name) {
  let image = AssetsManager.getImage(name);

  return image ? image.h : 0;
};

ImageLoader.load = function (name, theme = "default") {
  let id = ImageCache.getIdOfNameAndTheme(name, theme);
  if (id == ImageCache.invalidImageId) {
    let is_default_theme = theme == "default";
    let uri = AssetsManager.getImageURI(name, theme, is_default_theme);
    if (uri) {
      let image = new Image();
      let name_with_theme = theme + ":" + name;

      if (TBrowser.nonce) {
        image.setAttribute("nonce", TBrowser.nonce);
      }

      if (TBrowser.rootUri) {
        uri = TBrowser.rootUri + "/" + uri;
      }

      image.src = uri;
      image.name = name_with_theme;
      image.onload = function () {
        console.log("image loaded: " + name_with_theme + " " + uri);
        Awtk.requestRepaint(1);
      };
      id = ImageCache.add(image);
    } else if (!is_default_theme) {
      id = ImageLoader.load(name);
    }
  }
  return id;
};

ImageLoader.RAW_NONE = 0;
ImageLoader.RAW_LOADING = 1;
ImageLoader.RAW_READY = 2;
ImageLoader.RAW_FAIL = 3;

ImageLoader.rawCache = {};

ImageLoader._rawKey = function (name, theme) {
  return theme + ":" + name;
};

ImageLoader.requestRaw = function (name, theme) {
  theme = theme || "default";
  let key = ImageLoader._rawKey(name, theme);
  let item = ImageLoader.rawCache[key];
  if (item && item.status !== ImageLoader.RAW_NONE) {
    return item.status;
  }

  let is_default_theme = theme === "default";
  let uri = AssetsManager.getImageURI(name, theme, is_default_theme);
  if (!uri && !is_default_theme) {
    return ImageLoader.requestRaw(name, "default");
  }
  if (!uri) {
    ImageLoader.rawCache[key] = { status: ImageLoader.RAW_FAIL, ptr: 0, size: 0 };
    return ImageLoader.RAW_FAIL;
  }
  if (TBrowser.rootUri) {
    uri = TBrowser.rootUri + "/" + uri;
  }

  item = { status: ImageLoader.RAW_LOADING, ptr: 0, size: 0 };
  ImageLoader.rawCache[key] = item;

  fetch(uri)
    .then(function (resp) {
      if (!resp.ok) {
        throw new Error("fetch gif raw failed: " + uri);
      }
      return resp.arrayBuffer();
    })
    .then(function (buf) {
      let bytes = new Uint8Array(buf);
      item.ptr = copyArrayToMemory(bytes);
      item.size = bytes.length;
      item.status = ImageLoader.RAW_READY;
      Awtk.requestRepaint(1);
    })
    .catch(function (e) {
      console.log(e);
      item.status = ImageLoader.RAW_FAIL;
      Awtk.requestRepaint(1);
    });

  return ImageLoader.RAW_LOADING;
};

ImageLoader.getRawStatus = function (name, theme) {
  theme = theme || "default";
  let item = ImageLoader.rawCache[ImageLoader._rawKey(name, theme)];
  if (!item && theme !== "default") {
    item = ImageLoader.rawCache[ImageLoader._rawKey(name, "default")];
  }
  return item ? item.status : ImageLoader.RAW_NONE;
};

ImageLoader.getRawPtr = function (name, theme) {
  theme = theme || "default";
  let item = ImageLoader.rawCache[ImageLoader._rawKey(name, theme)];
  if ((!item || item.status !== ImageLoader.RAW_READY) && theme !== "default") {
    item = ImageLoader.rawCache[ImageLoader._rawKey(name, "default")];
  }
  return item && item.status === ImageLoader.RAW_READY ? item.ptr : 0;
};

ImageLoader.getRawSize = function (name, theme) {
  theme = theme || "default";
  let item = ImageLoader.rawCache[ImageLoader._rawKey(name, theme)];
  if ((!item || item.status !== ImageLoader.RAW_READY) && theme !== "default") {
    item = ImageLoader.rawCache[ImageLoader._rawKey(name, "default")];
  }
  return item && item.status === ImageLoader.RAW_READY ? item.size : 0;
};

function testImageLoader() {
  let id = ImageLoader.load("me");
  let w = ImageLoader.getWidth("me");
  let h = ImageLoader.getHeight("me");

  console.log(`me: ${id} ${w} ${h}`);
  id = ImageLoader.load("me");
}
