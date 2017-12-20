import { Component } from '@angular/core';

@Component({
  selector: 'app-boat-chairs',
  templateUrl: './boat-chairs.component.html',
  styleUrls: ['./boat-chairs.component.css']
})
export class BoatChairsComponent {
  title = "Båtputer";
  description = "Jeg kan reperere din båtputer eller kan jeg sy nye";
  images = [
    "assets/images/batputer1.jpg",
    "assets/images/batputer2.jpg"
  ]
}
