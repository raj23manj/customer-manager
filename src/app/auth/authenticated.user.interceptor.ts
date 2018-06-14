// http://array151.com/blog/http-interceptor-angular4/

import { Injectable, Inject } from "@angular/core";
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from "@angular/common/http";
import { DOCUMENT } from "@angular/common";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { AuthService } from './auth.service';


@Injectable()
export class AuthenticatedUserInterceptor implements HttpInterceptor {
  constructor( @Inject(DOCUMENT) private document: any,
               @Inject(AuthService) private authService: AuthService
             ) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(tap(
      (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
              return event;
          }
      },
      (err) => {
          if (err instanceof HttpErrorResponse) {
              if (err.status === 401) {
                this.authService.storeToken('');
                  this.document.location.href =
                  `${this.document.location.protocol}//${this.document.location.hostname}:${this.document.location.port}/`;
              }
          }
      })
    );
  }
}
