import {Component, Input, OnInit} from '@angular/core';

declare const resizeCards: any;

@Component({
  selector: 'app-grid-cards',
  templateUrl: './grid-cards.component.html',
  styleUrls: ['./grid-cards.component.css']
})
export class GridCardsComponent implements OnInit {

  @Input() cardsList: Array<any>;

  ngOnInit(): void {
    resizeCards();
  }

}
