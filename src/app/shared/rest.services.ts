import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './../auth/auth.service';

@Injectable()
export class RestService {

  constructor(
                private httpClient: HttpClient,
                private authService: AuthService
              ) {

  }

  putRequest(payload: any, type: string) {
    const token = this.authService.getStoredToken();

    const req = new HttpRequest('PUT',
                                'https://customer-manager-7a910.firebaseio.com/' + type,
                                payload,
                                {
                                  reportProgress: true,
                                  params: new HttpParams().set('auth', token.token)
                                }
                              );
    return this.httpClient.request(req);
  }

}
