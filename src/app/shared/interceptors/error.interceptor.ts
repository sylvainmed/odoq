import {Injectable, Injector} from '@angular/core';
import {HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {ToasterService} from '../service/toaster.service';
import {LocationStrategy, PathLocationStrategy} from '@angular/common';
import {Router} from '@angular/router';
import {catchError} from 'rxjs/operators';
import {EMPTY} from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private injector: Injector) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    return next.handle(request)
      .pipe(
        catchError((err: HttpErrorResponse) => {

          /*const loaderService = this.injector.get(LoaderService);
          loaderService.deleteLoadingReq();*/

          const error: { status: number, message: string, developerMessage: string } = err.error;

          if (error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', err.error.message);
          } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(`Backend returned code ${err.status}, body was: ${JSON.stringify(err.error.message)}`);
            const notificationService = this.injector.get(ToasterService);

            if (error.status === 401) {
              this.handleError401(notificationService, error);
            } else {
              // Erreur remontée par le serveur : notification à l'utilisateur
              notificationService.error(error.message);
            }
          }

          // ...optionally return a default fallback value so app can continue
          // which could be a default value (which has to be a HttpResponse here)

          // throwError(err); log l'erreur dans la console
          // EMPTY si on ne veut un observable vide
          return EMPTY;
        })
      );
  }

  private handleError401(notificationService: ToasterService, error: { status: number; message: string; developerMessage: string }) {
    const location = this.injector.get(LocationStrategy);
    // const authService = this.injector.get(AuthService);
    // Non authentifié : pas de token en session ou token expiré
    const url = location instanceof PathLocationStrategy ? location.path() : null;

    // On teste qu'on n'est pas déjà sur la page de login (peut arriver si plusieurs requêtes reviennent presque simultanément avec le code d'erreur 401)
    /* if (!url.includes('login')) {
       authService.redirectUrl = url;
       notificationService.error(error.message);
     }*/

    // Si token expiré, on récupère l'aliasBase pour la reconnexion, sinon on utilise celui par défaut
    /*const aliasBase = authService.isLoggedIn() ? authService.getLoggedUser().context.aliasBase : environment.defaultAliasBase;
    authService.deleteLoggedInUser();*/

    // On redirige vers la page de login
    const router: Router = this.injector.get(Router);
    router.navigate(['login']);
  }
}
