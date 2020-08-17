import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TraductionService {

  public codeLangue: string = 'FR';

  constructor(private readonly translateService: TranslateService) {
  }

  /**
   * Traduit la clé
   * Si cette valeur n'est pas fournie et que la traduction n'est pas trouvée, c'est la clé qui est
   * renvoyée.
   * @return le résultat de la traduction (ou la valeur par défaut si fournie ou la clé)
   */
  public traduire(key: string | Array<string>): string {
    const trad: string = this.translateService.instant(key);
    if (trad === key) {
      console.warn('La clé de traduction ' + key + ' est introuvable.');

    }
    return trad;
  }

  /**
   * Récupère la traduction pour une clé
   * @param key la clé
   * @param interpolateParams
   */
  public get(key: string | Array<string>, interpolateParams?: Object): Observable<string | any> {
    return this.translateService.get(key, interpolateParams);
  }
}
