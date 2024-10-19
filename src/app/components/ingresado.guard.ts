import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ingresadoGuard implements CanActivate {

  constructor(private navCtrl: NavController) {} 

  canActivate(): boolean {
    if (localStorage.getItem('ingresado')) {
      return true;
    } else {
      this.navCtrl.navigateRoot('login');  
      return false;
    }
  }
}

