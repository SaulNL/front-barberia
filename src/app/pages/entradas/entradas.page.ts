import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-entradas',
  templateUrl: './entradas.page.html',
  styleUrls: ['./entradas.page.scss'],
})
export class EntradasPage implements OnInit {
  entradas: Array<{
    fecha: string,
    fechaTexto: string,
    texto: string
  }> =[];
 // entradas2: { fecha: string; fechaTexto: string; texto: string }[] = [];
  constructor(private router: Router) {
    this.cargarEntradas();
  }

  ngOnInit() {
  }

  // cargarEntradas(){
   // this.entradas = JSON.parse(localStorage.getItem('entradas'));
   //   const entradasStorage = localStorage.getItem('entradas');
  //   this.entradas = entradasStorage ? JSON.parse(entradasStorage) : [];
  //   this.entradas.sort((item1,item2)=>{
  //     if(item1.fecha < item2.fecha) return 1;
  //     if(item1.fecha > item2.fecha) return -1;
  //     return 0;
  //   });
  // }

  cargarEntradas(){
     this.entradas = JSON.parse(localStorage.getItem('entradas') || '[]');
    // const entradasStorage = localStorage.getItem('entradas');
    // this.entradas = entradasStorage ? JSON.parse(entradasStorage) : [];
    if(!this.entradas)return;
    this.entradas.sort((item1,item2)=>{
      if(new Date(item1.fecha) < new Date(item2.fecha)) return 1;
      if(new Date(item1.fecha) > new Date(item2.fecha)) return -1;
      return 0;
    });
  }

  irDetalle(entrada:{
    fecha: string,
    fechaTexto: string,
    texto: string
  }){
    let datosNavegacion: NavigationExtras = {
      state: {
        entrada: entrada
      }
    }

    this.router.navigate(['/entradas-detalle'],datosNavegacion);
  }


}
