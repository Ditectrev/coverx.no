import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  mainRoutes = [
    { "url": "/", "name": "Hovedside" },
    { "url": "/om-meg", "name": "Om meg" },
    { "url": "/overtrekker", "name": "Overtrekker" },
    { "url": "/battilbehor", "name": "Båttilbehør" },
    { "url": "/vesker", "name": "Vesker" },
    { "url": "/kontakt", "name": "Kontakt" }
  ];
  subroutesOne = [
    { "url": "/musikkovertrekker", "name": "Musikkovertrekker" }
  ];
  subroutesTwo = [
    { "url": "/batkalesjer", "name": "Båtkalesjer" },
    { "url": "/batputer", "name": "Båtputer" }
  ];
  subroutesThree = [
    { "url": "/rengjoringvesker", "name": "Rengjøringvesker" },
    { "url": "/moppervesker", "name": "Moppervesker" },
    { "url": "/musikkvesker", "name": "Musikkvesker" },
    { "url": "/stativvesker", "name": "Stativvesker" }
  ];
}
