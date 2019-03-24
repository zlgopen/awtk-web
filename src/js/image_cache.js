
let AwtkNextImageID = 100;
let AwtkImageCaches = {};

function imageCacheAddImage(image) {
    let id = AwtkNextImageID++;
    let key = id.toString();
    
    AwtkImageCaches[key] = image;

    return id;
}

function imageCacheGetImage(id) {
    let key = id.toString();
    let image = AwtkImageCaches[key];
    
    return image;
}

function imageCacheRemoveImage(id) {
    let key = id.toString();
    let image = AwtkImageCaches[key];
    
    delete AwtkImageCaches[key]; 
    
    return image;
}