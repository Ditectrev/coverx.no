import { Component } from '@angular/core';
import { WOW } from 'wowjs/dist/wow.min.js'
import { AfterViewInit } from "@angular/core";

@Component({
  selector: 'app-boats',
  templateUrl: './boats.component.html',
  styleUrls: ['./boats.component.css']
})
export class BoatsComponent implements AfterViewInit {
  title = "Båttilbehør";
  items = [
    {"name": "Båtkalesjer", "image": "assets/images/batkalesjer1.jpg", "url": "/batkalesjer"},
    {"name": "Båtputer", "image": "assets/images/batputer1.jpg", "url": "/batputer"}
  ];

  ngAfterViewInit() {
    new WOW().init(); // Initialize WOW.js
  }
}
