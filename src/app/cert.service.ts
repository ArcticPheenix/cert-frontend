import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { createViewContainerData } from '@angular/core/src/view/refs';
import { CertData } from './certdata';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
const certServerUrl = 'http://localhost:8080';

@Injectable()
export class CertService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  private log(message: string) {
    this.messageService.add('CertService: ' + message);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // Log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  createCert(cert: CertData): Observable<CertData> {
    return this.http.post<CertData>(certServerUrl, cert, httpOptions)
      .pipe(
        tap((cert: CertData) => this.log(`Created cert with the following values:
        C=${cert.country}, ST=${cert.state}, L=${cert.city},
        O=${cert.organization}, OU=${cert.organizationalUnit}, CN=${cert.commonName},
        emailAddress=${cert.emailAddress}, days=${cert.days}`)),
        catchError(this.handleError('createCert', cert))
      );
  }
}
