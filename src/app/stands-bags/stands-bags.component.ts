import { Component } from '@angular/core';
import { WOW } from 'wowjs/dist/wow.min.js'
import { AfterViewInit } from "@angular/core";

@Component({
  selector: 'app-stands-bags',
  templateUrl: './stands-bags.component.html',
  styleUrls: ['./stands-bags.component.css']
})
export class StandsBagsComponent implements AfterViewInit {
  title = "Stativvesker";
  price = "290 kr. netto";
  description = "Størrelse: H-135cm B-13cm";
  images = [
    "assets/images/stativvesker1.jpg",
    "assets/images/stativvesker2.jpg",
    "assets/images/stativvesker3.jpg",
    "assets/images/stativvesker4.jpg",
    "assets/images/stativvesker5.jpg"
  ];

  ngAfterViewInit() {
    new WOW().init(); // Initialize WOW.js
  }
}
