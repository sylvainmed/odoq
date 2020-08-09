import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-quote-card',
  templateUrl: './quote-card.component.html',
  styleUrls: ['./quote-card.component.scss']
})
export class QuoteCardComponent implements OnInit {

  @Input() quote: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
