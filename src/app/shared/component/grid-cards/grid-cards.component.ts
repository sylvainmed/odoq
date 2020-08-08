import {Component, DoCheck, Input, OnInit} from '@angular/core';

declare const resizeCards: any;

@Component({
  selector: 'app-grid-cards',
  templateUrl: './grid-cards.component.html',
  styleUrls: ['./grid-cards.component.scss']
})
export class GridCardsComponent implements OnInit, DoCheck {

  @Input() cardsList: Array<any>;

  ngOnInit(): void {
  }

  ngDoCheck() {
    resizeCards();
  }

}
