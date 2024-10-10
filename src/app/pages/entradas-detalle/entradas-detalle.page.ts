import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entradas-detalle',
  templateUrl: './entradas-detalle.page.html',
  styleUrls: ['./entradas-detalle.page.scss'],
})
export class EntradasDetallePage implements OnInit {
 
  entrada: {
    fecha: string,
    fechaTexto: string,
    texto: string
  } =
    {
      fecha: '',
      fechaTexto: '',
      texto: ''
    }

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      this.entrada = navigation.extras.state['entrada'];
      //console.log(this.entrada);
     }
    }

  ngOnInit() {
  }

}
