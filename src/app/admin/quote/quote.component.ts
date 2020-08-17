import {Component, OnInit, ViewChild} from '@angular/core';
import {QuoteService} from '../../shared/service/quote.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AbstractDetailComponent} from '../../shared/component/abstract-detail.component';
import {DatatableComponent} from '../../shared/component/datatable/datatable.component';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {

  @ViewChild('datatable', {static: false})
  datatable: DatatableComponent;

  subscriptions = new Subscription();

  constructor(public quoteService: QuoteService,
              private router: Router,
              protected readonly activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  navigateToDetail(o: any) {
    this.router.navigate([`${o.id}`], {relativeTo: this.activatedRoute}).then();
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

