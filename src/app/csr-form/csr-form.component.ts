import { Component, OnInit } from '@angular/core';
import { CertData } from '../certdata';

@Component({
  selector: 'app-csr-form',
  templateUrl: './csr-form.component.html',
  styleUrls: ['./csr-form.component.css']
})
export class CsrFormComponent implements OnInit {
  certData = new CertData('', '', '', '', '', '', '', '');
  certSubject: string;
  submitted = false;
  onSubmit() { this.submitted = true; }

  get diagnostic() { return JSON.stringify(this.certData); }

  constructor() {
   }

  ngOnInit() {
  }
}
