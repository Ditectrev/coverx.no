import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import { MailService, IMessage } from "../shared/mail.service";
import { WOW } from 'wowjs/dist/wow.min.js'
import { AfterViewInit } from "@angular/core";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, AfterViewInit {
  title = 'Kontakt';

  street = 'Høgisvegen 44';
  city = '6873 Marifjøra';
  mail = 'kontakt@coverx.no';
  phone = '+47 47 74 26 48';
  orgNumber = 'Org. Nr. 916559305';

  wrongName = 'Skriv navnet ditt';
  wrongEmail = 'Skriv din epost';
  wrongSubject = 'Skriv emne';
  wrongMessage = 'Skriv melding';
  sendMessage = 'Sende melding';
  wrongForm = 'Vennligst fyll inn gyldige data!';
  sentMessage = 'Meldingen har blitt sendt';

  lat: number = 61.354352;
  lng: number = 7.252331;
  signupForm: FormGroup;
  submitted: boolean;

  constructor(private mailService: MailService) { }

  ngOnInit() {
    // Set up form inputs.
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'name': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'subject': new FormControl(null, Validators.required),
        'message': new FormControl(null, Validators.required)
      })
    });

    this.submitted = false;
  }

  ngAfterViewInit() {
    new WOW().init(); // Initialize WOW.js
  }


  onSubmit(message: IMessage) {
    this.submitted = true;

    this.mailService.sendEmail(message).subscribe(res => {
      // console.log('MailService success', res);
      this.signupForm.reset(); // Reset form on submit.

      setTimeout(function () {
        this.submitted = false;
      }, 5000);
    }, error => {
      // console.log('MailService error', error);
    });
    // console.log(this.signupForm.value.userData.name);
    // console.log(message);
  }
}
