import { Component } from '@angular/core';
import { WOW } from 'wowjs/dist/wow.min.js'
import { AfterViewInit } from "@angular/core";

@Component({
  selector: 'app-bags',
  templateUrl: './bags.component.html',
  styleUrls: ['./bags.component.css']
})
export class BagsComponent implements AfterViewInit {
  title = "Vesker";
  items = [
    {"name": "Rengjøringvesker", "image": "assets/images/rengjoringvesker06.jpg", "url": "/rengjoringvesker"},
    {"name": "Moppervesker", "image": "assets/images/moppervesker1.jpg", "url": "/moppervesker"},
    {"name": "Musikkvesker", "image": "assets/images/musikkvesker4.jpg", "url": "/musikkvesker"},
    {"name": "Stativvesker", "image": "assets/images/stativvesker1.jpg", "url": "/stativvesker"}
  ];

  ngAfterViewInit() {
    new WOW().init(); // Initialize WOW.js
  }
}
