import { Component } from '@angular/core';

@Component({
  selector: 'app-boat-covers',
  templateUrl: './boat-covers.component.html',
  styleUrls: ['./boat-covers.component.css']
})
export class BoatCoversComponent {
  title = "Båtkalesjer";
  description1 = "Trenger du å reperere din gamle kaleskje eller vill du ha ny?";
  description2 = "Send meg e-post.";
  images = [
    "assets/images/batkalesjer1.jpg",
    "assets/images/batkalesjer2.jpg"
  ]
}
