import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class RestService {
  readonly API_URL = 'https://customer-manager-7a910.firebaseio.com/';

  constructor(
                private httpClient: HttpClient
              ) {

  }

  postRequest(payload: any, type: string) {
    const req = new HttpRequest('POST',
                                 this.API_URL + type,
                                payload,
                                {
                                  reportProgress: true
                                }
                              );
    return this.httpClient.request(req);
  }

}
