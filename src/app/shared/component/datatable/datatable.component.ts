import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AbstractOdoqService} from '../../service/abstract-odoq.service';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {

  @Input() service: AbstractOdoqService<any>;

  @Output() selectedItemChanged: EventEmitter<any> = new EventEmitter<any>();

  displayedColumns = ['id', 'title', 'content'];

  items: Array<any>;

  constructor() {
  }

  ngOnInit() {
    this.loadData();
  }

  /**
   * Sélectionne un objet dans la datatable et l'émet en output
   * @param rowSelected
   */
  clickRow(rowSelected) {
    this.selectedItemChanged.emit(rowSelected);
  }

  loadData() {
    this.service.search().subscribe(res => {
      this.items = res;
    });
  }

}
