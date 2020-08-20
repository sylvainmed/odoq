import {Component, OnInit} from '@angular/core';
import {Quote} from '../../shared/model/quote.model';
import {QuoteService} from '../../shared/service/quote.service';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  quotes: Array<Quote>;

  isLoading: boolean = true;

  constructor(private readonly  quoteService: QuoteService) {
  }

  ngOnInit(): void {
    this.quoteService.search().pipe(take(1))
      .subscribe(result => {
          this.quotes = result;
        },
        (err) => (console.log(err)),
        () => this.isLoading = false);
  }

}
