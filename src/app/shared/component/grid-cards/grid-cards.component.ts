import {AfterViewInit, Component, HostListener, Input, OnChanges, SimpleChanges} from '@angular/core';

declare const resizeCards: any;
declare const masonry: any;

@Component({
  selector: 'app-grid-cards',
  templateUrl: './grid-cards.component.html',
  styleUrls: ['./grid-cards.component.scss']
})
export class GridCardsComponent implements OnChanges, AfterViewInit {

  @Input() cardsList: Array<any>;

  @HostListener('window:resize')
  reloadMasonry() {
    masonry('.masonry', '.masonry-brick', 10, 3, 2, 1);
  }

  ngAfterViewInit(): void {
    this.reloadMasonry();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['cardsList']) {
      this.reloadMasonry();
    }
  }
}
