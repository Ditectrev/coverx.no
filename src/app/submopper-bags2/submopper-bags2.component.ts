import {Component, OnInit} from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage } from 'ngx-gallery';

@Component({
  selector: 'app-submopper-bags2',
  templateUrl: './submopper-bags2.component.html',
  styleUrls: ['./submopper-bags2.component.css']
})
export class SubmopperBags2Component implements OnInit {
  title = "Stor (5-10 mopper)";
  price = "790 kr. netto";
  description = "Størrelse: H-30cm B-40cm D-19cm";

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  ngOnInit(): void {
    this.galleryOptions = [
      {
        image: false,
        width: "1152px",
        height: "600px",
        thumbnailsColumns: 3,
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
        "height": "1620px",
        "thumbnailsColumns": 1,
        thumbnailsRows: 5
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/images/moppervesker1.jpg',
        medium: 'assets/images/moppervesker1.jpg',
        big: 'assets/images/moppervesker1.jpg'
      },
      {
        small: 'assets/images/moppervesker2.jpg',
        medium: 'assets/images/moppervesker2.jpg',
        big: 'assets/images/moppervesker2.jpg'
      },
      {
        small: 'assets/images/moppervesker3.jpg',
        medium: 'assets/images/moppervesker3.jpg',
        big: 'assets/images/moppervesker3.jpg'
      },
      {
        small: 'assets/images/moppervesker4.jpg',
        medium: 'assets/images/moppervesker4.jpg',
        big: 'assets/images/moppervesker4.jpg'
      },
      {
        small: 'assets/images/moppervesker5.jpg',
        medium: 'assets/images/moppervesker5.jpg',
        big: 'assets/images/moppervesker5.jpg'
      }
    ];
  }
}
