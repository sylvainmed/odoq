import {EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Data, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AbstractOdoqService} from '../service/abstract-odoq.service';
import {ToasterService} from '../service/toaster.service';

export abstract class AbstractDetailComponent<T> implements OnInit, OnDestroy {

  /** l'entité en cours de consultation/création */
  objet: T;

  /** le formulaire du détail de l'objet */
  formGroup: FormGroup;

  /** L'objet Subscription contenant l'ensemble des souscriptions effectuées */
  subscriptions = new Subscription();

  service: AbstractOdoqService<T>;

  listeUrl: string;

  /** Evènement indiquant que l'objet a changé */
  @Output() objectChanged: EventEmitter<T> = new EventEmitter<T>();

  /** Evènement indiquant que l'objet a été supprimé */
  @Output() objectDeleted: EventEmitter<T> = new EventEmitter<T>();

  constructor(protected readonly activatedRoute: ActivatedRoute,
              protected readonly router: Router,
              protected readonly fb: FormBuilder,
              protected readonly toasterService: ToasterService) {
  }

  ngOnInit(): void {
    this.subscriptions.add(
      this.activatedRoute.data.subscribe(data => {
          this.initDataFromRoute(data);
          this.initForm();
        }
      ));
  }

  initForm() {
    this.formGroup = this.fb.group([]);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  initDataFromRoute(data: Data) {
    // Récupération de l'objet dans la route (via le resolver)
    if (data.hasOwnProperty('objet')) {
      this.objet = data['objet'];
    }
    /*  } else if (this.mode === RouteMode.CREATION) {
        this.objet = {...this.buildDefaultObject(data['objet']), code: null};
      }
    }*/
  }

  /** Annule les modifications en cours et remet le forme a l'état de départ*/
  resetForm() {

  }

  /** appel au service pour enregistrer le form */
  save() {
    if (this.objet) {
      this.service.update(this.formGroup.value).subscribe(res => {
        this.objet = res;
        this.objectChanged.emit(res);
        this.toasterService.success('quote bien créée' + res['id']);
      });
    } else {
      this.service.create(this.formGroup.value).subscribe(res => {
        this.objet = res;
        this.objectChanged.emit(res);
        this.gotoDetail(res);
        this.toasterService.success('quote bien modifiée' + res['id']);
      });
    }
  }

  delete() {
    this.service.delete(this.objet['id']).subscribe(() => {
      this.objectDeleted.emit(this.objet);
      this.toasterService.success('quote bien modifiée' + this.objet['id']);
      this.gotoListe();
    });
  }

  /**
   * Navigue vers la liste des objets
   */
  protected gotoListe() {
    this.router.navigate([this.listeUrl])
      .catch(error => console.error('Impossible de naviguer vers la liste', error));
  }

  /**
   * Navigue vers le détail d'un objet
   */
  private gotoDetail(objet: T) {
    this.router.navigate([`${this.listeUrl}/${objet['id']}`])
      .catch(error => console.error('Impossible de naviguer vers le détail de l\'entité.', error));
  }

}
