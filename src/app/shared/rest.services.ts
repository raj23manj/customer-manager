import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './../auth/auth.service';

@Injectable()
export class RestService {

  constructor(
                private httpClient: HttpClient,
                private authService: AuthService
              ) {

  }

  postRequest(payload: any, type: string) {
    const req = new HttpRequest('POST',
                                'https://customer-manager-7a910.firebaseio.com/' + type,
                                payload,
                                {
                                  reportProgress: true
                                }
                              );
    return this.httpClient.request(req);
  }

}
