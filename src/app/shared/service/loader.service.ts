import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  isLoading = new Subject<boolean>();
  message = new BehaviorSubject<string>('');
  /**
   * Compteur de reqûete HTTP en cours d'execution
   */
  loadingReqNumber: number;

  constructor() {
    this.loadingReqNumber = 0;
  }

  show() {
    this.isLoading.next(true);
  }

  hide() {
    this.isLoading.next(false);
    this.loadingReqNumber = 0;
    this.message.next('');
  }

  setMessage(msg: string) {
    this.message.next(msg);
  }

  /**
   * On ajoute une requete en cours dans le compteur
   * Et on émet la valeur : si elle est supérieur à 0, au moins une requête est en cours, donc on affiche le loader Spinner
   */
  addLoadingReq() {
    this.loadingReqNumber++;
    this.isLoading.next(this.loadingReqNumber > 0);
  }

  /**
   * On supprimer une requete qui vient de s'achever du compteur
   * Et on émet la valeur : si elle est égale à 0, il n'y a plus de requete en cours, donc on retire le loaderSpinner, sinon on le laisse affiché
   */
  deleteLoadingReq() {
    this.loadingReqNumber--;
    this.loadingReqNumber = this.loadingReqNumber < 0 ? 0 : this.loadingReqNumber;
    this.isLoading.next(this.loadingReqNumber > 0);
  }
}
