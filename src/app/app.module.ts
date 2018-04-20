import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CsrFormComponent } from './csr-form/csr-form.component';
import { CertService } from './cert.service';
import { MessageService } from './message.service';


@NgModule({
  declarations: [
    AppComponent,
    CsrFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [CertService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
