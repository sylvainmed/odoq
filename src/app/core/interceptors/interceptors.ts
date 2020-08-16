/** Http interceptor providers in outside-in order */
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {UrlInterceptor} from './url.interceptor';
import {AppConfService} from '../services/app-conf.service';

export const httpInterceptorProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: UrlInterceptor, multi: true, deps: [AppConfService]}
];

