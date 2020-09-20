import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit {

  itemsMenu = [{
    name: 'odoq.admin.menu.dashboard',
    routerLink: '/admin'
  }, {
    name: 'odoq.admin.menu.quote',
    routerLink: 'quote'
  }, {
    name: 'odoq.admin.menu.theme',
    routerLink: 'theme'
  }, {
    name: 'odoq.admin.menu.author',
    routerLink: 'author'
  }];

  constructor() {
  }

  ngOnInit(): void {
  }

}
