import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AppConfService} from '../service/app-conf.service';

@Injectable()
export class UrlInterceptor implements HttpInterceptor {

  private readonly exceptions = [
    '.xml', '.json', '.svg', '.png'
  ];

  constructor(private readonly _appConfService: AppConfService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.exceptions.some(it => req.url.endsWith(it))) {
      req = req.clone({
        url: !req.url.startsWith('http') ? this._appConfService.resolveOdoqUrl(req.url) : req.url,
      });
    }
    return next.handle(req);
  }
}
