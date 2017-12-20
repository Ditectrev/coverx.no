import {Injectable} from "@angular/core";

@Injectable()
export class ImageService {
  visibleImages = [];

  getImages() {
    return this.visibleImages = IMAGES.slice(0); // Return copy of IMAGES array, "slice(0)" means take items from 0 index to the end.
  }

  getImage(id: number) {
    return IMAGES.slice(0).find(image => image.id == id); // From IMAGES array return image with ID, which was passed in "getImage" function.
  }
}

const IMAGES = [
  {"id": 1, "category": "bags", "caption": "sample caption", "url": "assets/images/gallery/bags/bags-01.jpg"},
  {"id": 2, "category": "bags", "caption": "sample caption", "url": "assets/images/gallery/bags/bags-02.jpg"},
  {"id": 3, "category": "bags", "caption": "sample caption", "url": "assets/images/gallery/bags/bags-03.jpg"},
  {"id": 4, "category": "bags", "caption": "sample caption", "url": "assets/images/gallery/bags/bags-04.jpg"},
  {"id": 5, "category": "bags", "caption": "sample caption", "url": "assets/images/gallery/bags/bags-05.jpg"},
  {"id": 6, "category": "bags", "caption": "sample caption", "url": "assets/images/gallery/bags/bags-06.jpg"},
  {"id": 7, "category": "bags", "caption": "sample caption", "url": "assets/images/gallery/bags/bags-07.jpg"},
  {"id": 8, "category": "bags", "caption": "sample caption", "url": "assets/images/gallery/bags/bags-08.jpg"},
  {"id": 9, "category": "bags", "caption": "sample caption", "url": "assets/images/gallery/bags/bags-09.jpg"},
  {"id": 10, "category": "bags", "caption": "sample caption", "url": "assets/images/gallery/bags/bags-10.jpg"},
  {"id": 11, "category": "bags", "caption": "sample caption", "url": "assets/images/gallery/bags/bags-11.jpg"},
  {"id": 12, "category": "bags", "caption": "sample caption", "url": "assets/images/gallery/bags/bags-12.jpg"},
  {"id": 13, "category": "bags", "caption": "sample caption", "url": "assets/images/gallery/bags/bags-13.jpg"},
  {"id": 14, "category": "bags", "caption": "sample caption", "url": "assets/images/gallery/bags/bags-14.jpg"},
  {"id": 15, "category": "bags", "caption": "sample caption", "url": "assets/images/gallery/bags/bags-15.jpg"},
  {"id": 16, "category": "bags", "caption": "sample caption", "url": "assets/images/gallery/bags/bags-16.jpg"},
  {"id": 17, "category": "cleaning-bags", "caption": "sample caption", "url": "assets/images/gallery/cleaning-bags/cleaning-bags-01.jpg"},
  {"id": 18, "category": "cleaning-bags", "caption": "sample caption", "url": "assets/images/gallery/cleaning-bags/cleaning-bags-02.jpg"},
  {"id": 19, "category": "cleaning-bags", "caption": "sample caption", "url": "assets/images/gallery/cleaning-bags/cleaning-bags-03.jpg"},
  {"id": 20, "category": "cleaning-bags", "caption": "sample caption", "url": "assets/images/gallery/cleaning-bags/cleaning-bags-04.jpg"},
  {"id": 21, "category": "cleaning-bags", "caption": "sample caption", "url": "assets/images/gallery/cleaning-bags/cleaning-bags-05.jpg"},
  {"id": 22, "category": "cleaning-bags", "caption": "sample caption", "url": "assets/images/gallery/cleaning-bags/cleaning-bags-06.jpg"},
  {"id": 23, "category": "cleaning-bags", "caption": "sample caption", "url": "assets/images/gallery/cleaning-bags/cleaning-bags-07.jpg"},
  {"id": 24, "category": "cleaning-bags", "caption": "sample caption", "url": "assets/images/gallery/cleaning-bags/cleaning-bags-08.jpg"},
  {"id": 25, "category": "others", "caption": "sample caption", "url": "assets/images/gallery/others/others1.jpg"},
  {"id": 26, "category": "others", "caption": "sample caption", "url": "assets/images/gallery/others/others2.jpg"},
  {"id": 27, "category": "others", "caption": "sample caption", "url": "assets/images/gallery/others/others-03.jpg"}
];