import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class noIngresadoGuard implements CanActivate {

  constructor(private navCtrl: NavController) {} 

  canActivate(): boolean {
    if (localStorage.getItem('ingresado')) {
      this.navCtrl.navigateRoot('menu/inicio')
      return false;
    } else {  
      return true;
    }
  }
}