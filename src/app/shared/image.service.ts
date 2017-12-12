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
  {"id": 1, "category": "boat-chairs", "caption": "sample caption", "url": "assets/images/gallery/app1.jpg"},
  {"id": 2, "category": "boat-chairs", "caption": "sample caption", "url": "assets/images/gallery/app2.jpg"},
  {"id": 3, "category": "boat-chairs", "caption": "sample caption", "url": "assets/images/gallery/app3.jpg"},
  {"id": 4, "category": "boat-covers", "caption": "sample caption", "url": "assets/images/gallery/card1.jpg"},
  {"id": 5, "category": "boat-covers", "caption": "sample caption", "url": "assets/images/gallery/card2.jpg"},
  {"id": 6, "category": "boat-covers", "caption": "sample caption", "url": "assets/images/gallery/card3.jpg"},
  {"id": 7, "category": "cleaning-bags", "caption": "sample caption", "url": "assets/images/gallery/logo1.jpg"},
  {"id": 8, "category": "cleaning-bags", "caption": "sample caption", "url": "assets/images/gallery/logo2.jpg"},
  {"id": 9, "category": "cleaning-bags", "caption": "sample caption", "url": "assets/images/gallery/logo3.jpg"}
];