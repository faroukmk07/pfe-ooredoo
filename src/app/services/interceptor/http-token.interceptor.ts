import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpHeaders, HttpErrorResponse
} from '@angular/common/http';
import {catchError, Observable, switchMap, throwError} from 'rxjs';
import {TokenService} from '../token/token.service';
import {AuthServiceService} from "../../auth-service.service";

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {

  constructor(
    private tokenService: TokenService,
    private  authservice : AuthServiceService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authservice.getToken();

    let authReq = req;
    if (token) {
      authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401 && token) {
          return this.authservice.refreshToken().pipe(
            switchMap((newToken: string) => {
              this.authservice.setToken(newToken);
              authReq = req.clone({
                setHeaders: {
                  Authorization: `Bearer ${newToken}`
                }
              });
              return next.handle(authReq);
            })
          );
        } else {
          return throwError(error);
        }
      })
    );
  }
}
