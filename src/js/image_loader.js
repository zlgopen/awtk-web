function ImageLoader() {}

ImageLoader.getWidth = function (name) {
  let image = AssetsManager.getImage(name);

  return image ? image.w : 0;
}

ImageLoader.getHeight = function (name) {
  let image = AssetsManager.getImage(name);

  return image ? image.h : 0;
}

ImageLoader.load = function (name) {
  let id = ImageCache.getIdOfName(name);
  if (id !== ImageCache.invalidImageId) {
    return id;
  } else {
    let uri = AssetsManager.getImageURI(name);
    if (uri) {
      let image = new Image();
      image.src = uri;
      image.name = name;

      return ImageCache.add(image);
    }
  }
  return ImageCache.invalidImageId;
}

function testImageLoader() {
  let id = ImageLoader.load('me');
  let w = ImageLoader.getWidth('me');
  let h = ImageLoader.getHeight('me');

  console.log(`me: ${id} ${w} ${h}`);
  id = ImageLoader.load('me');
}

