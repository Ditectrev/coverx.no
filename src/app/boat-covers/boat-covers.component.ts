import { Component } from '@angular/core';
import { WOW } from 'wowjs/dist/wow.min.js'
import { AfterViewInit } from "@angular/core";

@Component({
  selector: 'app-boat-covers',
  templateUrl: './boat-covers.component.html',
  styleUrls: ['./boat-covers.component.css']
})
export class BoatCoversComponent implements AfterViewInit {
  title = "Båtkalesjer";
  description1 = "Trenger du å reparere din gammel kalesje eller vil du ha ny?";
  description2 = "Send meg e-post.";
  images = [
    "assets/images/batkalesjer1.jpg",
    "assets/images/batkalesjer2.jpg"
  ];

  ngAfterViewInit() {
    new WOW().init(); // Initialize WOW.js
  }
}
