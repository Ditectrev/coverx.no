import {Component, OnInit} from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage } from 'ngx-gallery';

@Component({
  selector: 'app-subcleaning-bags2',
  templateUrl: './subcleaning-bags2.component.html',
  styleUrls: ['./subcleaning-bags2.component.css']
})
export class SubcleaningBags2Component implements OnInit {
  title = "MED GLIDELÅS";
  price = "1090 kr. netto";
  description = "Størrelse: H-30cm B-40cm D-19cm";


  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  ngOnInit(): void {
    this.galleryOptions = [
      {
        image: false,
        width: "768px",
        height: "630px",
        thumbnailsColumns: 2,
        thumbnailsRows: 2,
        thumbnailMargin: 30
      },
      {
        "breakpoint": 1200,
        "width": "798px",
        "height": "970px",
        "thumbnailsColumns": 2,
        thumbnailsRows: 3
      },
      {
        "breakpoint": 992,
        "width": "384px",
        "height": "1300px",
        "thumbnailsColumns": 1,
        thumbnailsRows: 4
      }
    ];
    this.galleryImages = [
      {
        small: 'assets/images/rengjoringvesker07.jpg',
        medium: 'assets/images/rengjoringvesker07.jpg',
        big: 'assets/images/rengjoringvesker07.jpg'
      },
      {
        small: 'assets/images/rengjoringvesker08.jpg',
        medium: 'assets/images/rengjoringvesker08.jpg',
        big: 'assets/images/rengjoringvesker08.jpg'
      },
      {
        small: 'assets/images/rengjoringvesker09.jpg',
        medium: 'assets/images/rengjoringvesker09.jpg',
        big: 'assets/images/rengjoringvesker09.jpg'
      },
      {
        small: 'assets/images/rengjoringvesker10.jpg',
        medium: 'assets/images/rengjoringvesker10.jpg',
        big: 'assets/images/rengjoringvesker10.jpg'
      }
    ];
  }
}
