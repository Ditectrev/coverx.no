import { Component } from '@angular/core';

@Component({
  selector: 'app-stands-bags',
  templateUrl: './stands-bags.component.html',
  styleUrls: ['./stands-bags.component.css']
})
export class StandsBagsComponent {
  title = "Stativvesker";
  price = "290 kr. netto";
  description = "Størrelse: H-135cm B-13cm";
  images = [
    "assets/images/stativvesker1.jpg",
    "assets/images/stativvesker2.jpg",
    "assets/images/stativvesker3.jpg",
    "assets/images/stativvesker4.jpg",
    "assets/images/stativvesker5.jpg"
  ]
}
