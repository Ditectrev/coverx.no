import { Component } from '@angular/core';

@Component({
  selector: 'app-specialist-bags',
  templateUrl: './specialist-bags.component.html',
  styleUrls: ['./specialist-bags.component.css']
})
export class SpecialistBagsComponent {
  title = "Verktøyveske";
  description = "Skreddersydd verktøyveske til alle profesjonell arbeidere.";
  images = [
    "assets/images/renjoringveske1.jpg",
    "assets/images/renjoringveske2.jpg"
  ];
}
