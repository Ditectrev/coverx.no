import {Component, HostListener, Inject} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser'
import {WINDOW} from '../shared/window.service';

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

  public fixed: boolean = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window
  ) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    let num = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;

    if (num >= 100) {
      this.fixed = true;
    } else if (this.fixed && num < 600) {
      this.fixed = false;
    }
  }
}
