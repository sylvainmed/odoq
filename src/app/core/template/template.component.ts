import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements AfterViewInit, OnInit {

  valueToSearch: string;
  hideSearchField: boolean;

  false;

  @ViewChild('appContainer') appContainer: ElementRef;

  constructor(private router: Router, private location: Location) {
  }

  ngOnInit() {
    // on regarde si on est sur la page de recherche, si oui on cache le champ de la toolbar
    this.hideSearchField = this.location.path().includes('/search');
    // on écoute les changements de route pour cahcer/Afficher le champ de recherche
    this.location.onUrlChange(url => {
      this.hideSearchField = url.includes('/search');
    });
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
    this.router.navigate(['/search'], {state: {valueToSearch: this.valueToSearch}});
  }
}
