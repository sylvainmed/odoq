import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() mainQuote: any;

  @Output() beforeEvent: EventEmitter<any> = new EventEmitter<any>();
  @Output() nextEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }

  handleNext() {
    this.nextEvent.emit();
  }

  handleBefore() {
    this.beforeEvent.emit();
  }

}
