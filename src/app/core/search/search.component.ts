import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {QuoteService} from '../../shared/service/quote.service';
import {take} from 'rxjs/operators';
import {Quote} from '../../shared/model/quote.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  resultsSearch: Array<Quote> = [];

  valueToSearch: string;

  constructor(private readonly router: Router,
              private readonly quoteService: QuoteService,
              private readonly location: Location) {
  }

  ngOnInit() {
  }

  handleSearch(value: string) {
    this.valueToSearch = value;
    const params = {
      content: this.valueToSearch
    };
    this.quoteService.search(params).pipe(take(1))
      .subscribe(result => {
        this.resultsSearch = result;
      });
  }

}
