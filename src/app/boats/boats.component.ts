import { Component } from '@angular/core';

@Component({
  selector: 'app-boats',
  templateUrl: './boats.component.html',
  styleUrls: ['./boats.component.css']
})
export class BoatsComponent {
  title = "Båttilbehør";
  items = [
    {"name": "Båtkalesjer", "image": "assets/images/batkalesjer1.jpg", "url": "/batkalesjer"},
    {"name": "Båtputer", "image": "assets/images/batputer1.jpg", "url": "/batputer"}
  ]
}
