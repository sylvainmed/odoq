import {Component} from '@angular/core';
import {QuoteService} from '../../shared/service/quote.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AbstractListComponent} from '../../shared/component/abstract-list.component';
import {Quote} from '../../shared/model/quote.model';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent extends AbstractListComponent<Quote> {

  constructor(public quoteService: QuoteService,
              protected readonly router: Router,
              protected readonly activatedRoute: ActivatedRoute) {
    super(router, activatedRoute);
  }

}

