import { Component } from '@angular/core';

@Component({
  selector: 'app-mopper-bags',
  templateUrl: './mopper-bags.component.html',
  styleUrls: ['./mopper-bags.component.css']
})
export class MopperBagsComponent {
  title = "Mopperveske";
  images = [
    "assets/images/mopperveske1.jpg",
    "assets/images/mopperveske2.jpg"
  ];
  boxes = [
    {"title": "Praktisk", "description": "Veldig praktisk veske til alle renholdere. Ingen poser, alt du trenger  er i veske.", "icon": "fa-plug"},
    {"title": "Alle midler", "description": "To store lommer: en på rene mopper og en på skitne mopper. Denne lommen har folierefill.", "icon": "fa-check"},
    {"title": "Våte ting", "description": "Da bruker du ingen poser.", "icon": "fa-cloud"},
    {"title": "Enkelt vaske", "description": "Man kan enkelt vaske denne folierefillen med van og det er ren og fersk til daglig bruk.", "icon": "fa-shower"},
    {"title": "Ledig hånd", "description": "Du kan bære veske på arm. Da har du ledig hånd.", "icon": "fa-hand-paper-o"},
    {"title": "Profesionelt", "description": "Med slike vesken renholdere ser renslig og profesionelt ut.", "icon": "fa-gears"}
  ]
}
