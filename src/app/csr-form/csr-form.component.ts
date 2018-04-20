import { Component, Input } from '@angular/core';
import { CertData } from '../certdata';
import { CertService } from '../cert.service';

@Component({
  selector: 'app-csr-form',
  templateUrl: './csr-form.component.html',
  styleUrls: ['./csr-form.component.css']
})
export class CsrFormComponent {
  // @Input() certData: CertData;
  certData = new CertData('', '', '', '', '', '', '', '');
  certSubject: string;
  submitted = false;

  constructor(
    private certService: CertService
  ) {}

  onSubmit() {
    this.submitted = true;
    this.certService.createCert(this.certData).subscribe(certBundle => this.certData);
  }

  get diagnostic() { return JSON.stringify(this.certData); }

  newCert() {
    this.certData = new CertData('', '', '', '', '', '', '', '');
  }
}
