import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  title: string = 'Vår plassering';
  lat: number = 61.354352;
  lng: number = 7.252331;
  signupForm: FormGroup;

  constructor() { }

  ngOnInit() {
    // Set up form inputs.
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'name': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'subject': new FormControl(null, Validators.required),
        'message': new FormControl(null, Validators.required)
      })
    })
  }

  // Reset form on submit.
  onSubmit() {
    this.signupForm.reset();
  }
}
