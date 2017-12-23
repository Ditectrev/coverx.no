import { Component } from '@angular/core';

@Component({
  selector: 'app-cleaning-bags',
  templateUrl: './cleaning-bags.component.html',
  styleUrls: ['./cleaning-bags.component.css']
})
export class CleaningBagsComponent {
  title = "Rengjøringvesker";
  images = [
    "assets/images/rengjoringvesker1.jpg",
    "assets/images/rengjoringvesker2.jpg"
  ];
  boxes = [
    {"title": "Praktisk", "description": "Veldig praktisk veske til alle renholdere. Av og til glemmer du hansker eller noen annen midle.", "icon": "fa-plug"},
    {"title": "Alle midler", "description": "Hvis du har slik vesken altid har alle midler og utstyr på sted med deg.", "icon": "fa-check"},
    {"title": "Våte ting", "description": "Vesken inkluder en liten folie veske på svamper eller andre våte ting.", "icon": "fa-cloud"},
    {"title": "Enkelt vaske", "description": "Man kan enkelt vaske denne folieveske med van og det er ren og fersk til daglig bruk.", "icon": "fa-shower"},
    {"title": "Ledig hånd", "description": "Du kan bære veske på arm. Da har du ledig hånd.", "icon": "fa-hand-paper-o"},
    {"title": "Profesionelt", "description": "Med slike vesken renholdere ser profesionelt ut.", "icon": "fa-gears"}
  ]
}
