import { Component } from '@angular/core';
import { WOW } from 'wowjs/dist/wow.min.js'
import { AfterViewInit } from "@angular/core";

@Component({
  selector: 'app-music-bags',
  templateUrl: './music-bags.component.html',
  styleUrls: ['./music-bags.component.css']
})
export class MusicBagsComponent implements AfterViewInit {
  title = "Musikkvesker";
  description = "Veldig praktiske vesker til keybord, slagverk eller lydutstyr o.s.l. Alle vesker er styrket av skummet.";
  images = [
    "assets/images/musikkvesker1.jpg",
    "assets/images/musikkvesker2.jpg",
    "assets/images/musikkvesker3.jpg",
    "assets/images/musikkvesker4.jpg",
    "assets/images/musikkvesker5.jpg",
    "assets/images/musikkvesker6.jpg",
    "assets/images/musikkvesker7.jpg",
    "assets/images/musikkvesker8.jpg",
    "assets/images/musikkvesker9.jpg"
  ];

  ngAfterViewInit() {
    new WOW().init(); // Initialize WOW.js
  }
}
