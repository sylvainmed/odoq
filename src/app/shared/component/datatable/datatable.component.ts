import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {AbstractOdoqService} from '../../service/abstract-odoq.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTable, MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {

  /** liste des colonnes à afficher ex : ['id', 'content', 'date'] */
  @Input() service: AbstractOdoqService<any>;

  /** clé de traduction pour traduire les headers */
  @Input() keyTraduction: string;

  @Output() selectedItemChanged: EventEmitter<any> = new EventEmitter<any>();

  /** liste des colonnées à afficher */
  @Input() displayedColumns = ['id'];

  items = new MatTableDataSource<any>();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatTable, {static: true}) table: MatTable<any>;

  constructor() {
  }

  ngOnInit() {
    this.items.paginator = this.paginator;
    this.loadData();
  }

  /**
   * Sélectionne un objet dans la datatable et l'émet en output
   * @param rowSelected
   */
  clickRow(rowSelected) {
    this.selectedItemChanged.emit(rowSelected);
  }

  /**
   * Appel au webservice Search pour récupérer la liste des données
   */
  loadData() {
    this.service.search().subscribe(res => {
      this.items.data = res;
    });
  }

}
