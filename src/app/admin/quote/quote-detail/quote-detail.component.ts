import { Component, OnInit } from '@angular/core';
import {AbstractDetailComponent} from '../../shared/abstract-detail.component';
import {Quote} from '../../../shared/model/quote.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.scss']
})
export class QuoteDetailComponent extends  AbstractDetailComponent<Quote> implements OnInit {

  constructor(protected readonly activatedRoute: ActivatedRoute) {
    super(activatedRoute);
  }

  ngOnInit() {
    super.ngOnInit();
    console.log(this.objet);
  }
}
