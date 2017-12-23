import { Component } from '@angular/core';

@Component({
  selector: 'app-bags',
  templateUrl: './bags.component.html',
  styleUrls: ['./bags.component.css']
})
export class BagsComponent {
  title = "Vesker";
  items = [
    {"name": "Rengjøringvesker", "image": "assets/images/rengjoringvesker1.jpg", "url": "/rengjoringvesker"},
    {"name": "Mopperveske", "image": "assets/images/mopperveske1.jpg", "url": "/mopperveske"},
    {"name": "Frokostveske", "image": "assets/images/rengjoringvesker1.jpg", "url": "/frokostveske"},
    {"name": "Verktøyveske", "image": "assets/images/mopperveske1.jpg", "url": "/verktoyveske"}
  ]
}
