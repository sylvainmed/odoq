import {Component, Input} from '@angular/core';
import {Quote} from '../../model/quote.model';

@Component({
  selector: 'app-quote-card',
  templateUrl: './quote-card.component.html',
  styleUrls: ['./quote-card.component.scss']
})
export class QuoteCardComponent {

  @Input() quote: Quote;

  @Input() displayDate: boolean = false;

  @Input() alignRight: boolean = false;
}
