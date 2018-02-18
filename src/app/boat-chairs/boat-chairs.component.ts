import { Component } from '@angular/core';
import { WOW } from 'wowjs/dist/wow.min.js'
import { AfterViewInit } from "@angular/core";

@Component({
  selector: 'app-boat-chairs',
  templateUrl: './boat-chairs.component.html',
  styleUrls: ['./boat-chairs.component.css']
})
export class BoatChairsComponent implements AfterViewInit {
  title = "Båtputer";
  description = "Jeg kan reparere dine båtputer eller kan sy nye.";
  images = [
    "assets/images/batputer1.jpg",
    "assets/images/batputer2.jpg"
  ];

  ngAfterViewInit() {
    new WOW().init(); // Initialize WOW.js
  }
}
