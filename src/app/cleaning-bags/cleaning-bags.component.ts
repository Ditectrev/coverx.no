import { Component } from '@angular/core';
import { WOW } from 'wowjs/dist/wow.min.js'
import { AfterViewInit } from "@angular/core";

@Component({
  selector: 'app-cleaning-bags',
  templateUrl: './cleaning-bags.component.html',
  styleUrls: ['./cleaning-bags.component.css']
})
export class CleaningBagsComponent implements AfterViewInit {
  title = "Rengjøringvesker";
  description1 = "Veldig praktisk veske til alle renholdere. Av og til glemmer du hansker eller noen annen midle. Hvis du har slik vesken altid har alle midler og utstyr på sted med deg. Vesken inkluder en liten folie veske på svamper eller andre våte ting. Man kan enkelt vaske denne folieveske med van og det er ren og fersk til daglig bruk. Du kan bære veske på arm. Da har du ledig hånd.";
  description2 = "Med slike vesken renholdere ser profesionelt ut.";

  ngAfterViewInit() {
    new WOW().init(); // Initialize WOW.js
  }
}
