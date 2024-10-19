import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  indiceSeleccionado: number = 0;

  paginas = [
    {
      titulo: 'Inicio',
      url: '/menu/inicio',
      icono: 'home'
    },
    {
      titulo: 'Entradas',
      url: '/menu/entradas',
      icono: 'book'
    },
    {
      titulo: 'Productos',
      url: '/menu/entradas',
      icono: 'car'
    },
    {
      titulo: 'Cortes',
      url: '/menu/entradas',
      icono: 'cut'
    },
    {
      titulo: 'Citas agendadas',
      url: '/menu/entradas',
      icono: 'calendar'
    },
    {
      titulo: 'Agendar citas',
      url: '/menu/entradas',
      icono: 'calendar-clear'
    },
    {
      titulo: 'Favoritos',
      url: '/menu/entradas',
      icono: 'heart'
    }
    ,
    {
      titulo: 'Bolsa de compra',
      url: '/menu/entradas',
      icono: 'bag-handle'
    },
    {
      titulo: 'Apartados',
      url: '/menu/entradas',
      icono: 'archive'
    }
  ]

  constructor(public alertController: AlertController,
    public navCtrl: NavController) { }

  ngOnInit() {
  }

  cambiarIndiceSeleccionado(i: number){
    this.indiceSeleccionado = i;
  }

  async salir(){
    const alert = await this.alertController.create({
      mode:'ios',  
      header: 'Salir',
      message: '¿Deberitas te quieres salir?',
      buttons: [
        {
          text: 'No mejor no',
          handler: () => {
            
          }
        }, {
          text: 'Sii',
          handler: () => {
            localStorage.removeItem('ingresado');
            this.navCtrl.navigateRoot('login');
          }
        }
      ]
    });

    await alert.present();
  }

}
