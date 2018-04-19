import { Component } from '@angular/core';
import { CertData } from '../certdata';

@Component({
  selector: 'app-csr-form',
  templateUrl: './csr-form.component.html',
  styleUrls: ['./csr-form.component.css']
})
export class CsrFormComponent {
  certData = new CertData('', '', '', '', '', '', '', '');
  certSubject: string;
  submitted = false;
  onSubmit() { this.submitted = true; }

  get diagnostic() { return JSON.stringify(this.certData); }

  newCert() {
    this.certData = new CertData('', '', '', '', '', '', '', '');
  }
}
