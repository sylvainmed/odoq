import {AfterViewInit, Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements AfterViewInit {

  value: string;

  @ViewChild('appContainer') appContainer: ElementRef;

  constructor(private router: Router) {
  }

  /**
   * Calcul la marge du champ de recherche en fonction des autres éléments du dom pour qu'il soit bien aligné avec le container principal
   */
  ngAfterViewInit(): void {
    this.getMargeMenu();
  }

  /**
   * Set une margin Left au champ de recherche pour qu'il soit toujours aligné avec le container principal du site
   * (prend en compte la marge-left du app-container + la largeur du logo dans la toolbar)
   */
  @HostListener('window:resize')
  getMargeMenu() {
    if (this.getViewport() > 1100) {
      const margeContainer = (this.appContainer.nativeElement as HTMLElement).offsetLeft;
      const logoElement = (document.getElementsByClassName('logo-container')[0] as HTMLElement);
      const result = margeContainer - logoElement.clientWidth - logoElement.offsetLeft;
      (document.getElementById('toolbarContainer') as HTMLElement).style.marginLeft = `${result}px`;
    } else {
      (document.getElementById('toolbarContainer') as HTMLElement).style.marginLeft = '2em';
    }
  }

  /**
   * Récupère le viewport
   */
  private getViewport() {
    return window.innerWidth;
  }

  /**
   * Méthode pour gérer la recherche d'une quote dans le champ de la toolbar
   */
  handleSearch() {
    this.router.navigate(['/search']);
  }
}
