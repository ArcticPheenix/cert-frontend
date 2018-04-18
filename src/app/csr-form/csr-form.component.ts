import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-csr-form',
  templateUrl: './csr-form.component.html',
  styleUrls: ['./csr-form.component.css']
})
export class CsrFormComponent implements OnInit {
  private Country: string;
  private State: string;
  private City: string;
  private Organization: string;
  private OrganizationalUnit: string;
  private CommonName: string;
  private EmailAddress: string;
  private Days: string;
  private Subject: string;

  constructor() {
    this.Days = '730';
   }

  ngOnInit() {
  }
}
