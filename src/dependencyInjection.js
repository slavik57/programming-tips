"use strict";
// The video for this file:
// https://youtu.be/of44UvHimHY
Object.defineProperty(exports, "__esModule", { value: true });
function downloadPicture(url) {
    return new Picture(url, "pixels");
}
exports.downloadPicture = downloadPicture;
class Picture {
    constructor(url, pixels) {
        this.url = url;
        this.pixels = pixels;
    }
}
exports.Picture = Picture;
function showPicture(picture) {
    console.log(picture.pixels);
}
exports.showPicture = showPicture;
function haveAccessToTheInternet() {
    return true;
}
exports.haveAccessToTheInternet = haveAccessToTheInternet;
function getPictureFromCache(url) {
    return new Picture(url, "cached pixels");
}
exports.getPictureFromCache = getPictureFromCache;
function downloadAndShow(url, dependencies) {
    const picture = dependencies.getPicture(url);
    picture.pixels = picture.pixels.toUpperCase();
    dependencies.showPicture(picture);
}
exports.downloadAndShow = downloadAndShow;
