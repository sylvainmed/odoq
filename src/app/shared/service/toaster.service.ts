import {Injectable} from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  /**
   * Configuration par défaut pour les projets OMP
   */
  private static defaultConfig: MatSnackBarConfig<any> = {
    duration: 7000,
    horizontalPosition: 'end',
    verticalPosition: 'bottom'
  };

  constructor(private bar: MatSnackBar) {
  }

  success(message: string, action?: string) {
    this.bar.open(message, action, {
      ...ToasterService.defaultConfig,
      panelClass: 'toaster-success'
    });
  }

  error(message: string, action?: string) {
    this.bar.open(message, action, {
      ...ToasterService.defaultConfig,
      panelClass: 'toaster-error'
    });
  }

  info(message: string, action?: string) {
    this.bar.open(message, action, {
      ...ToasterService.defaultConfig,
      panelClass: 'toaster-info'
    });
  }

  warn(message: string, action?: string) {
    this.bar.open(message, action, {
      ...ToasterService.defaultConfig,
      panelClass: 'toaster-warn'
    });
  }
}
