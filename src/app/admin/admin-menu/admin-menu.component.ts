import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit {

  private itemsMenu = [{
    name: 'Dashboard',
    routerLink: '/admin'
  }, {
    name: 'Quote',
    routerLink: 'quote'
  }, {
    name: 'Auteur',
    routerLink: 'auteur'
  }];

  constructor() {
  }

  ngOnInit(): void {
  }

}
