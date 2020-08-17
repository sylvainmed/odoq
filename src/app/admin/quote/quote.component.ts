import {Component, OnInit} from '@angular/core';
import {QuoteService} from '../../shared/service/quote.service';
import {Quote} from '../../shared/model/quote.model';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {

  selectedItem: Quote;

  constructor(protected quoteService: QuoteService) {
  }

  ngOnInit(): void {
  }

}
