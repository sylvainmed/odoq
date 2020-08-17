import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {EMPTY} from 'rxjs';
import {ToasterService} from '../service/toaster.service';
import {TraductionService} from '../service/traduction.service';

@Injectable({
  providedIn: 'root'
})
export class ResolverUtilService {

  constructor(private readonly toasterService: ToasterService,
              private readonly router: Router,
              private readonly traductionService: TraductionService) {
  }

  public handleUnresolved(typeEntite: string, parametresRoute: any[]) {
    const id = parametresRoute.length > 1 ? parametresRoute[1] : 'ID undefined';
    const msgError = `${this.traductionService.traduire('odoq.admin.quote.error.get')} ${id}`;

    console.error(msgError);
    this.toasterService.error(msgError);

    this.router.navigate(parametresRoute).then();
    return EMPTY;
  }
}
