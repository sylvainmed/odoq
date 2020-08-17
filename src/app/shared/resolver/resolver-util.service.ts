import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {EMPTY} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResolverUtilService {

  constructor(/*private readonly notificationService: NotificationService,*/
              private readonly router: Router) {
  }

  public handleUnresolved(typeEntite: string, parametresRoute: any[]) {
    console.error(`Impossible de récupérer l'objet de ${typeEntite}`);
    //this.notificationService.error(this.traductionService.traduire('shared.resolver.error'));
    this.router.navigate(parametresRoute[0]).then();
    return EMPTY;
  }
}
