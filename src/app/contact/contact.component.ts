import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  title: string = 'Vår plassering';
  lat: number = 61.354352;
  lng: number = 7.252331;

  constructor() { }

  ngOnInit() {
  }

}
