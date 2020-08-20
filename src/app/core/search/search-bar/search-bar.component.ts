import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  value: string;

  @Output() resultsSearchEmit: EventEmitter<string> = new EventEmitter<string>();

  constructor(private location: Location) {
  }

  ngOnInit(): void {
    // on regarde si il ya une value à chercher dans la route
    // (normalement executée une seule fois grace a la reuse strategy)
    if (this.location.getState()) {
      this.value = this.location.getState()['valueToSearch'];
      this.handleSearch();
    }
    // puis on écoute les changements d'url du coup
    this.location.onUrlChange((url, state) => {
      if (state['valueToSearch']) {
        this.value = state['valueToSearch'];
        this.handleSearch();
      }
    });
  }

  handleSearch() {
    if (this.value) {
      this.resultsSearchEmit.emit(this.value);
    }
  }
}
