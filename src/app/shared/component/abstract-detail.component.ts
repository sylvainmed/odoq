import {EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Data, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AbstractOdoqService} from '../service/abstract-odoq.service';
import {ToasterService} from '../service/toaster.service';
import {TraductionService} from '../service/traduction.service';

export abstract class AbstractDetailComponent<T> implements OnInit, OnDestroy {

  /** l'entité en cours de consultation/création */
  objet: T;

  /** le formulaire du détail de l'objet */
  formGroup: FormGroup;

  /** L'objet Subscription contenant l'ensemble des souscriptions effectuées */
  subscriptions = new Subscription();

  service: AbstractOdoqService<T>;

  listeUrl: string;

  /** boolean qui indique dans quel mode on est (création ou modification)*/
  isCreation: boolean = true;

  /** Evènement indiquant que l'objet a changé */
  @Output() objectChanged: EventEmitter<T> = new EventEmitter<T>();

  /** Evènement indiquant que l'objet a été supprimé */
  @Output() objectDeleted: EventEmitter<T> = new EventEmitter<T>();

  constructor(protected readonly activatedRoute: ActivatedRoute,
              protected readonly router: Router,
              protected readonly fb: FormBuilder,
              protected readonly toasterService: ToasterService,
              protected readonly traductionService: TraductionService) {
  }

  ngOnInit(): void {
    this.subscriptions.add(
      this.activatedRoute.data.subscribe(data => {
          this.formGroup = this.fb.group([]);
          this.initDataFromRoute(data);
          this.initForm();
        }
      ));
  }

  initForm() {
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  initDataFromRoute(data: Data) {
    // Récupération de l'objet dans la route (via le resolver)
    if (data.hasOwnProperty('objet')) {
      this.objet = data['objet'];
      this.isCreation = false;
    } else {
      this.objet = null;
      this.isCreation = true;
    }
  }

  /** Annule les modifications en cours et remet le forme a l'état de départ*/
  resetForm() {
    this.formGroup.reset(this.objet);
  }

  /** appel au service pour enregistrer le form */
  save() {
    if (this.objet) {
      this.service.update(this.formGroup.value).subscribe(res => {
        this.objet = res;
        this.objectChanged.emit(res);
        this.markFormAsPristine();
        this.toasterService.success(`${this.traductionService.traduire('odoq.shared.toaster.update.success')} : ${res['id']}`);
      });
    } else {
      this.service.create(this.formGroup.value).subscribe(res => {
        this.objet = res;
        this.objectChanged.emit(res);
        this.gotoDetail(res);
        this.toasterService.success(`${this.traductionService.traduire('odoq.shared.toaster.create.success')} : ${res['id']}`);
      });
    }
  }

  /** action de suppression de l'objet */
  delete() {
    this.service.delete(this.objet['id']).subscribe(() => {
      this.objectDeleted.emit(this.objet);
      this.toasterService.success(`${this.traductionService.traduire('odoq.shared.toaster.delete.success')} : ${this.objet['id']}`);
      this.gotoListe();
    });
  }

  /**
   * Navigue vers la liste des objets
   */
  protected gotoListe() {
    this.router.navigate([this.listeUrl])
      .catch(error => console.error(this.traductionService.traduire('odoq.admin.detail.goToListe.error'), error));
  }

  /**
   * Navigue vers le détail d'un objet
   */
  private gotoDetail(objet: T) {
    this.router.navigate([`${this.listeUrl}/${objet['id']}`])
      .catch(error => console.error(this.traductionService.traduire('odoq.admin.detail.goToDetail.error'), error));
  }

  /** remet le form en pristine */
  private markFormAsPristine() {
    this.formGroup.markAsPristine();
  }

}
