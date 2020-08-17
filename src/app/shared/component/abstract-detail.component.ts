import {OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Data} from '@angular/router';
import {Subscription} from 'rxjs';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AbstractOdoqService} from '../service/abstract-odoq.service';

export abstract class AbstractDetailComponent<T> implements OnInit, OnDestroy {

  /** l'entité en cours de consultation/création */
  objet: T;

  /** le formulaire du détail de l'objet */
  formGroup: FormGroup;

  /** L'objet Subscription contenant l'ensemble des souscriptions effectuées */
  subscriptions = new Subscription();

  service: AbstractOdoqService<T>;

  constructor(protected readonly activatedRoute: ActivatedRoute,
              protected readonly fb: FormBuilder) {
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
  saveForm() {
    this.service.create(this.formGroup.value).subscribe(res => this.objet = res);
  }

}
