import { Component } from '@angular/core';

@Component({
  selector: 'app-mopper-bags',
  templateUrl: './mopper-bags.component.html',
  styleUrls: ['./mopper-bags.component.css']
})
export class MopperBagsComponent {
  title = "Mopperveske";
  description1 = "Veldig praktisk veske til alle renholdere. Ingen poser, alt du trenger  er i veske. To store lommer: en på rene mopper og en på skitne mopper. Denne lommen har folierefill. Da bruker du ingen poser. Man kan enkelt vaske denne folierefillen med van og det er ren og fersk til daglig bruk. Du kan bære veske på arm. Da har du ledig hånd.";
  description2 = "Med slike vesken renholdere ser renslig og profesionelt ut.";
  price = "790 kr. netto";
  images = [
    "assets/images/mopperveske1.jpg",
    "assets/images/mopperveske2.jpg",
    "assets/images/mopperveske3.jpg",
    "assets/images/mopperveske4.jpg",
    "assets/images/mopperveske5.jpg"
  ]
}
