import {AfterViewInit, Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {

  /** boolean pour binder l'état ouvert ou fermé du menu */
  menuOpened: boolean = true;

  constructor() {
  }

  ngAfterViewInit(): void {
    this.getScreenSize();
  }

  /**
   * calcul dynamiquement la hauteur minimal du container (prend au minimum la hauteur du viewport)
   * Et check si on ouvre ou non le menu en fonction de la largeur du viewport (responsive)
   */
  @HostListener('window:resize')
  getScreenSize() {
    const toolbar = (document.getElementById('admin-toolbar') as HTMLElement);
    const screenHeight = window.innerHeight;
    const screenWidth = window.innerWidth;

    (document.getElementById('admin-container') as HTMLElement).style.minHeight = `${screenHeight - toolbar.offsetHeight - 1}px`;
    this.menuOpened = screenWidth > 1100;
  }

}
