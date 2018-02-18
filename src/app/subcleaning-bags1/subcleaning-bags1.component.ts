import { Component } from '@angular/core';
import { WOW } from 'wowjs/dist/wow.min.js'
import { AfterViewInit } from "@angular/core";

@Component({
  selector: 'app-subcleaning-bags1',
  templateUrl: './subcleaning-bags1.component.html',
  styleUrls: ['./subcleaning-bags1.component.css']
})
export class SubcleaningBags1Component implements AfterViewInit {
  title = "MED BORRELÅS";
  price = "890 kr. netto";
  description = "Størrelse: H-30cm B-40cm D-19cm";
  images = [
    "assets/images/rengjoringvesker01.jpg",
    "assets/images/rengjoringvesker02.jpg",
    "assets/images/rengjoringvesker03.jpg",
    "assets/images/rengjoringvesker04.jpg",
    "assets/images/rengjoringvesker05.jpg",
    "assets/images/rengjoringvesker06.jpg"
  ];

  ngAfterViewInit() {
    new WOW().init(); // Initialize WOW.js
  }
}
