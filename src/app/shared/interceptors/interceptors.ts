/** Http interceptor providers in outside-in order */
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {UrlInterceptor} from './url.interceptor';
import {AppConfService} from '../service/app-conf.service';
import {ErrorInterceptor} from './error.interceptor';

export const httpInterceptorProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: UrlInterceptor, multi: true, deps: [AppConfService]},
  {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
];

