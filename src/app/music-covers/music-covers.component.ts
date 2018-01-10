import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music-covers',
  templateUrl: './music-covers.component.html',
  styleUrls: ['./music-covers.component.css']
})
export class MusicCoversComponent {
  title = "Musikkovertrekker";
  description = "Hvis du vil forsikre din musikkutstyr bare ta kontakt med meg.";
  images = [
    "assets/images/musikkovertrekker1.jpg",
    "assets/images/musikkovertrekker2.jpg",
    "assets/images/musikkovertrekker3.jpg",
    "assets/images/musikkovertrekker4.jpg",
    "assets/images/musikkovertrekker5.jpg",
    "assets/images/musikkovertrekker6.jpg",
    "assets/images/musikkovertrekker7.jpg",
    "assets/images/musikkovertrekker8.jpg",
    "assets/images/musikkovertrekker9.jpg"
  ]
}
