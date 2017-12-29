import {Component, OnInit} from '@angular/core';
import { Gallery, GalleryItem } from 'ng-gallery';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  title = "Om meg";
  description = "Jeg heter Hanna. Jeg har over 20 års erfaring med å sy. Sying er min lidenskap. Jeg spesialiserer meg på tunge materialer som polyester, kalesjestoff, skai, skinn, folie. I mitt yrkesarbeid har jeg designet og sydd forskjellige ting, slike som:";
  list = [
    "poser og ryggsekker",
    "poser til verktøy",
    "overtrekk til høyttalere og musikkinstrumenter",
    "trekk til barnevogner",
    "overtrekk til seilfly",
    "overtrekk til spesialisert undervisningsutstyr",
    "båtkalesjer og sofa- og putetrekk"
  ];
  bolded = "Jeg er klar til å designe og sy alt du ønsker deg.";

  // images = [
  //   {
  //     src: 'assets/images/about1.jpg',
  //     thumbnail: 'assets/images/about1.jpg'
  //   },
  //   {
  //     src: 'assets/images/about2.jpg',
  //     thumbnail: 'assets/images/about2.jpg'
  //   },
  //   {
  //     src: 'assets/images/about3.jpg',
  //     thumbnail: 'assets/images/about3.jpg'
  //   },
  //   {
  //     src: 'assets/images/about4.jpg',
  //     thumbnail: 'assets/images/about4.jpg'
  //   }
  // ];

  constructor(public gallery: Gallery) {
  }

  ngOnInit() {
    // this.gallery.load(this.images);
  }
}
