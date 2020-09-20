import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, finalize} from 'rxjs/operators';
import {LoaderService} from '../service/loader.service';

/**
 * Intercepteur Http permettant d'afficher un spinner lorsqu'une requête est en cours
 */
@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

  constructor(public loaderService: LoaderService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.addLoadingReq();
    return next.handle(req).pipe(
      finalize(() => this.loaderService.deleteLoadingReq()),
      catchError(error => {
        this.loaderService.hide();
        return throwError(error);
      })
    );
  }
}
