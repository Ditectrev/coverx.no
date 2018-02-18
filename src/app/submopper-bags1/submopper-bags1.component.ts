import { Component } from '@angular/core';
import { WOW } from 'wowjs/dist/wow.min.js'
import { AfterViewInit } from "@angular/core";

@Component({
  selector: 'app-submopper-bags1',
  templateUrl: './submopper-bags1.component.html',
  styleUrls: ['./submopper-bags1.component.css']
})
export class SubmopperBags1Component implements AfterViewInit {
  title = "LITEN (1-5 mopper)";
  price = "490 kr. netto";
  description = "Størrelse: H-34cm B-24cm D-19cm";

  images = [
    "assets/images/moppervesker5.jpg",
    "assets/images/moppervesker6.jpg",
    "assets/images/moppervesker7.jpg"
  ];

  ngAfterViewInit() {
    new WOW().init(); // Initialize WOW.js
  }
}
