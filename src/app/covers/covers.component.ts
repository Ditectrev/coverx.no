import { Component } from '@angular/core';

@Component({
  selector: 'app-covers',
  templateUrl: './covers.component.html',
  styleUrls: ['./covers.component.css']
})
export class CoversComponent {
  title = "Overtrekker";
  description1 = "Har du musik utstyr og trenger du overtrekk eller veske på det?";
  description2 = "Bare ta kantakt med meg.";
  images = [
    "assets/images/overtrekker1.jpg",
    "assets/images/overtrekker2.jpg"
  ]
}
