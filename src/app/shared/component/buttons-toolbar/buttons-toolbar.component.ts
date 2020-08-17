import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-buttons-toolbar',
  templateUrl: './buttons-toolbar.component.html',
  styleUrls: ['./buttons-toolbar.component.scss']
})
export class ButtonsToolbarComponent {

  @Input() isCreation: boolean = false;
  @Input() isDirtyValid: boolean = false;

  @Output() cancelEvent: EventEmitter<void> = new EventEmitter<void>();
  @Output() deleteEvent: EventEmitter<void> = new EventEmitter<void>();
  @Output() saveEvent: EventEmitter<void> = new EventEmitter<void>();

}
