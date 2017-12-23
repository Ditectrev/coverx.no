import { Component } from '@angular/core';

@Component({
  selector: 'app-breakfast-bags',
  templateUrl: './breakfast-bags.component.html',
  styleUrls: ['./breakfast-bags.component.css']
})
export class BreakfastBagsComponent {
  title = "Frokostveske";
  description = "Veldig praktisk frokostveske til alle som kjører bil og må spise i blen.";
  images = [
    "assets/images/rengjoringvesker1.jpg",
    "assets/images/rengjoringvesker2.jpg"
  ];
}
