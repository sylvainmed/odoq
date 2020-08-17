import {OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Data} from '@angular/router';
import {Subscription} from 'rxjs';
import {FormGroup} from '@angular/forms';

export abstract class AbstractDetailComponent<T> implements OnInit, OnDestroy{

  /** l'entité en cours de consultation/création */
  objet: T;

  /** le formulaire du détail de l'objet */
  formGroup: FormGroup;

  /** L'objet Subscription contenant l'ensemble des souscriptions effectuées */
  subscriptions = new Subscription();

  constructor(protected readonly activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.subscriptions.add(
      this.activatedRoute.data.subscribe(data => {
          this.initDataFromRoute(data);
        }
      ));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  initDataFromRoute(data: Data){
    // Récupération de l'objet dans la route (via le resolver)
    if (data.hasOwnProperty('objet')) {
      this.objet = data['objet'];
    }
    /*  } else if (this.mode === RouteMode.CREATION) {
        this.objet = {...this.buildDefaultObject(data['objet']), code: null};
      }
    }*/
  }

}
