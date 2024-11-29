function ImageCache() {}

ImageCache.nextID = 100;
ImageCache.images = {};
ImageCache.invalidImageId = 0;

ImageCache.add = function (image) {
  let id = ImageCache.nextID++;
  let key = id.toString();

  ImageCache.images[key] = image;

  return id;
};

ImageCache.remove = function (id) {
  let key = id.toString();
  let image = ImageCache.images[key];

  delete ImageCache.images[key];

  return image;
};

ImageCache.get = function (id) {
  let key = id.toString();
  if (ImageCache.images.hasOwnProperty(key)) {
    return ImageCache.images[key];
  } else {
    return null;
  }
};

ImageCache.getIdOfNameAndTheme = function (name, theme = "default") {
  let name_with_theme = theme + ":" + name;
  const images = ImageCache.images;

  for (const key in images) {
    const image = images[key];
    if (image.name === name_with_theme) {
      return key;
    }
  }

  return ImageCache.invalidImageId;
};
