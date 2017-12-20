import { Component } from '@angular/core';

@Component({
  selector: 'app-drafts',
  templateUrl: './drafts.component.html',
  styleUrls: ['./drafts.component.css']
})
export class DraftsComponent {
  title = "Overtrekker";
  description1 = "Har du musik utstyr og trenger du overtrekk eller veske på det?";
  description2 = "Bare ta kantakt med meg.";
  images = [
    "assets/images/others1.jpg",
    "assets/images/others2.jpg"
  ]
}
