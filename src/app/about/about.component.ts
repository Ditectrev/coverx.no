import {Component} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  title = "Om meg";
  description = "Jeg heter Hanna. Jeg har over 20 års erfaring med å sy. Sying er min lidenskap. Jeg spesialiserer meg på tunge materialer som polyester, kalesjestoff, skai, skinn, folie. I mitt yrkesarbeid har jeg designet og sydd forskjellige ting, slike som:";
  list = [
    "poser og ryggsekker",
    "poser til verktøy",
    "overtrekk til høyttalere og musikkinstrumenter",
    "trekk til barnevogner",
    "overtrekk til seilfly",
    "overtrekk til spesialisert undervisningsutstyr",
    "båtkalesjer og sofa- og putetrekk"
  ];
  bolded = "Jeg er klar til å designe og sy alt du ønsker deg.";
  images = [
    "assets/images/om-meg1.jpg",
    "assets/images/om-meg2.jpg",
    "assets/images/om-meg3.jpg",
    "assets/images/om-meg4.jpg"
  ]
}
