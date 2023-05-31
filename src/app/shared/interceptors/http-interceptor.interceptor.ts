import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {

  constructor(private localStorageService: LocalStorageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url.indexOf('login') > -1 || request.url.indexOf('register') > -1) {
      return next.handle(request);
    }
    const authToken = this.localStorageService.getAuthToken();

    const authRequest = request.clone({
      headers: request.headers.set('Authorization', `Bearer ${authToken || ""}`)
    });
    return next.handle(authRequest);
  }
}
