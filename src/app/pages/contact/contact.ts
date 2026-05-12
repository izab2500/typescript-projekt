import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Image } from '../../components/image/image';

@Component({
  selector: 'app-contact',
  imports: [Image, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  name = "";
  email = "";
  message = "";

  successMessage = "";
  errorMessage = "";

  onSubmit(form: NgForm) {
    if (form.invalid) {
      this.successMessage = "";
      this.errorMessage = "Fyll i alla fält korrekt";
      return;
    }

    this.successMessage = "Meddelandet har skickats";
    this.errorMessage = "";

    form.resetForm();
  }
}
