import { Component } from '@angular/core';
import { WOW } from 'wowjs/dist/wow.min.js'
import { AfterViewInit } from "@angular/core";

@Component({
  selector: 'app-covers',
  templateUrl: './covers.component.html',
  styleUrls: ['./covers.component.css']
})
export class CoversComponent implements AfterViewInit {
  title = "Overtrekker";
  items = [
    {"name": "Musikkovertrekker", "image": "assets/images/musikkovertrekker1.jpg", "url": "/musikkovertrekker"}
  ];

  ngAfterViewInit() {
    new WOW().init(); // Initialize WOW.js
  }
}
