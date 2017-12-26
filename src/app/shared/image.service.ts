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
  {"id": 1, "category": "covers", "caption": "sample caption", "url": "assets/images/overtrekker1.jpg"},
  {"id": 2, "category": "covers", "caption": "sample caption", "url": "assets/images/overtrekker2.jpg"},
  {"id": 3, "category": "covers", "caption": "sample caption", "url": "assets/images/overtrekker3.jpg"},
  {"id": 4, "category": "covers", "caption": "sample caption", "url": "assets/images/overtrekker4.jpg"},
  {"id": 5, "category": "boats", "caption": "sample caption", "url": "assets/images/batkalesjer1.jpg"},
  {"id": 6, "category": "boats", "caption": "sample caption", "url": "assets/images/batkalesjer2.jpg"},
  {"id": 7, "category": "boats", "caption": "sample caption", "url": "assets/images/batputer1.jpg"},
  {"id": 8, "category": "boats", "caption": "sample caption", "url": "assets/images/batputer2.jpg"},
  {"id": 9, "category": "bags", "caption": "sample caption", "url": "assets/images/mopperveske1.jpg"},
  {"id": 10, "category": "bags", "caption": "sample caption", "url": "assets/images/mopperveske2.jpg"},
  {"id": 11, "category": "bags", "caption": "sample caption", "url": "assets/images/rengjoringvesker1.jpg"},
  {"id": 12, "category": "bags", "caption": "sample caption", "url": "assets/images/rengjoringvesker2.jpg"}
];