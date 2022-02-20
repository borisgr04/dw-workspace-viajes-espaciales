import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication.service';

@Injectable()
export class JwtHttpInterceptor implements HttpInterceptor {

  constructor(private authenticationService: AuthenticationService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer SE_OBTENER_EL_TOKEN_Y_ENVIARSE_AL_SERVER`
                }
            });
        }

    return next.handle(request);
  }
}
