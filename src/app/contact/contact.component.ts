import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import { MailService, IMessage } from "../shared/mail.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  title: string = 'Kontakt';

  lat: number = 61.354352;
  lng: number = 7.252331;
  signupForm: FormGroup;

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
    })
  }


  onSubmit(message: IMessage) {
    this.mailService.sendEmail(message).subscribe(res => {
      // console.log('MailService success', res);
      this.signupForm.reset(); // Reset form on submit.
    }, error => {
      // console.log('MailService error', error);
    });
    // console.log(this.signupForm.value.userData.name);
    // console.log(message);
  }
}
