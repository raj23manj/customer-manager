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

  getRequest(type: string, options = {}) {
    //const req = new HttpRequest('GET', this.API_URL + type);
    //return this.httpClient.request(req);
    return this.httpClient.get<any[]>(this.API_URL + type, options);
  }

}
