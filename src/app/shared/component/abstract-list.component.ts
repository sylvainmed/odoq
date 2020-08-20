import {OnDestroy, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AbstractDetailComponent} from './abstract-detail.component';
import {DatatableComponent} from './datatable/datatable.component';
import {Subscription} from 'rxjs';

export abstract class AbstractListComponent<T> implements OnDestroy {

  @ViewChild('datatable', {static: false})
  datatable: DatatableComponent;

  subscriptions = new Subscription();

  keyTraduction: string;

    protected constructor(protected readonly router: Router,
                        protected readonly activatedRoute: ActivatedRoute) {
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  navigateToDetail(o: T) {
    this.router.navigate([`${o['id']}`], {relativeTo: this.activatedRoute}).then();
  }

  navigateToCreation() {
    this.router.navigate([`add`], {relativeTo: this.activatedRoute}).then();
  }

  handleRouteActivate(detailComponent: AbstractDetailComponent<any>) {
    // A la modification de l'objet édité, on recharge la table et on sélectionne l'objet (utile pour création/duplication)
    this.subscriptions.add(detailComponent.objectChanged.subscribe(() => this.datatable.loadData()));
    // A la suppression de l'objet édité, on recharge simplement la table
    this.subscriptions.add(detailComponent.objectDeleted.subscribe(() => this.datatable.loadData()));
  }

}
