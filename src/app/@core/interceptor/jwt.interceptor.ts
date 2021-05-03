import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/auth-service/authentication.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) { }
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let currentUser = this.authenticationService.currentUserValue;
    // let token: any = currentUser.data.jwt;
    let lang = localStorage.getItem('lang');

    let user = localStorage.getItem('currentUser');
    let token = localStorage.getItem('token');

    if (user) {
      request = request.clone({
        setHeaders: {
          jwt: `${token ? token : ''}`,
          'lang': lang ? lang : 'en',
        },
      });
    }

    return next.handle(request);
  }
}
