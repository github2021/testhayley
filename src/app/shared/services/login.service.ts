import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandler, HandleError } from './http-error-handler-service.service';


@Injectable()
export class LoginService {

  configuration: any = {
    baseUrl: "jdskkjdskj",
    apiToken: "djkdkjsjkdsk"
  }

  constructor(
    private httpClient: HttpClient,
    private handleError: HandleError
  ) {}

  getJWTToken(): Observable < any > {

    const loginPost = {
      ApiToken: this.configuration.apiToken,
      // CommunityName: this.baseHref.slice(1),
      // EmailAddress: username,
      // PassPhrase: password
    };

    const body: string = JSON.stringify(loginPost);
    const url: string = this.configuration.baseUrl + '/login';

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
    }

    return this.httpClient.post < any > (url, body, httpOptions)
      .pipe(
        catchError(
          this.handleError('addHero', body))
      );

  }

}
