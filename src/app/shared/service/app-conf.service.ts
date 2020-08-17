import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConf} from '../model/app-conf.model';

@Injectable({
  providedIn: 'root'
})
export class AppConfService {

  static conf: AppConf;

  constructor(private readonly http: HttpClient) {
  }

  public resolveOdoqUrl(uri: string): string {
    if (AppConfService.conf) {
      const urlFinale = `${AppConfService.conf.odoqApiRest}/${uri}`;
      return urlFinale;
    }
    console.log('App configuration pas encore chargée');
    return uri;
  }

  /**
   * récupère la configuration de l'application
   */
  getConf() {
    const jsonFile = `./assets/config/app.conf.json`;
    return new Promise<void>((resolve, reject) => {
      this.http.get(jsonFile).toPromise().then((response: AppConf) => {
        AppConfService.conf = response;
        resolve();
      }).catch((response: any) => {
        reject(`Impossible de charger le fichier : '${jsonFile}': ${JSON.stringify(response)}`);
      });
    });
  }
}
