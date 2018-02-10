// The video for this file:
// https://youtu.be/of44UvHimHY

export function downloadPicture(url: string): Picture {
  return new Picture(url, "pixels");
}

export class Picture {
  constructor(public url: string, public pixels: string) {}
}

export function showPicture(picture: Picture): void {
  console.log(picture.pixels);
}

export function haveAccessToTheInternet(): boolean {
  return true;
}

export function getPictureFromCache(url: string): Picture {
  return new Picture(url, "cached pixels");
}

export interface Dependencies {
  getPicture(url: string): Picture;
  showPicture(picture: Picture): void;
}

export function downloadAndShow(url: string, dependencies: Dependencies): void {
  const picture: Picture = dependencies.getPicture(url);
  picture.pixels = picture.pixels.toUpperCase();
  dependencies.showPicture(picture);
}