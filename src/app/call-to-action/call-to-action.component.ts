import { Component } from '@angular/core';

@Component({
  selector: 'app-call-to-action',
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.css']
})
export class CallToActionComponent {
  title = "Oppfordring til handling";
  text1 = "Vi er for deg, vi er eksisterende av deg, vi vil holde deg nær deg. Hvis du har spørsmål,";
  text2 = "klager, tviler eller bare vil drikke varm te sammen bare bare ta kontakt med oss.";
  buttonText = "Oppfordring til handling";
}
