import { Component } from '@angular/core';

@Component({
  selector: 'app-covers',
  templateUrl: './covers.component.html',
  styleUrls: ['./covers.component.css']
})
export class CoversComponent {
  title = "Overtrekker";
  items = [
    {"name": "Musikkovertrekker", "image": "assets/images/musikkovertrekker1.jpg", "url": "/musikkovertrekker"}
  ]
}
