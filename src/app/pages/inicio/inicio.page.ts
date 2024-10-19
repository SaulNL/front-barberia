import { Component, ElementRef, OnInit, ViewChild, viewChild } from '@angular/core';
import { InfiniteScrollCustomEvent, ToastController } from '@ionic/angular';
import * as moment from 'moment';
import Swiper from 'swiper';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  fecha: string;
  entradas: Array<{
    fecha: string,
    fechaTexto: string,
    texto: string
  }> =[];
  
  entradaActual: {
    fecha: string,
    fechaTexto: string,
    texto: string
  }
  = {
    fecha: '',
    fechaTexto: '',
    texto: ''
  };

  items:any []=[];

 //PARA EL BANNER  
  // Opciones del slider
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 1,  // Cambiado a 1
    slidesPerGroup: 1, // Cambiado a 1
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
  };

  @ViewChild('swiper') swiperRef: ElementRef | undefined;
  swiper?: Swiper;

  images = [
    'assets/imagenes/barbería.png',
    'assets/imagenes/barbería (1).png',
    'assets/imagenes/Losmostacho.png',
  ]
 
  constructor(public toastController: ToastController) {
    moment.locale('es-mx');
    this.fecha = moment().format();
    this.cargarEntradas();
  }


  ngOnInit() {
   
   

    this.generateItems();
  }
  ngAfterViewInit() {
    this.swiperReady(); // Asegúrate de que swiper esté listo después de que la vista se haya inicializado
  }

  swiperReady() {
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }

  goNext() {
    this.swiper?.slideNext();
  }

  goPrev() {
    this.swiper?.slidePrev();
  }

  swiperSlideChanged(e: any) {
    console.log('cambiado', e);
  }


  private generateItems() {
    const count = this.items.length + 1;
    for (let i = 0; i < 50; i++) {
      this.items.push(`Item ${count + i}`);
    }
  }

  onIonInfinite(ev:any) {
    this.generateItems();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }
  
  
  cargarEntradas() {
    var fecha = moment(this.fecha).format('MM-DD-YY');
    this.entradas = JSON.parse(localStorage.getItem('entradas' ) || '[]');
    if(this.entradas){
      var entradaActual = this.entradas.find((elemento)=>{
        return elemento.fecha == fecha;
      });
      if(entradaActual){
        this.entradaActual = entradaActual;
      }else{
        this.inicializarNuevaEntrada();
      }
    }else{
      this.inicializarNuevaEntrada();
    }
  }

  inicializarNuevaEntrada() {
    var fecha = moment(this.fecha).format('MM-DD-YY');
    var dia = moment(this.fecha).format('DD');
    var mes = moment(this.fecha).format('MMMM');
    var year = moment(this.fecha).format('YYYY');

    this.entradaActual = {
      fechaTexto: dia + 'de'+ mes + 'del'+ year,
      fecha: fecha,
      texto: '',
    };
  }

  async guardar(entradaActual: {
    fecha: string,
    fechaTexto: string,
    texto: string
  }){

    var fecha = moment(this.fecha).format('MM-DD-YY');

    if(this.entradas){
      var item = this.entradas.find((elemento)=>{
        return elemento.fecha == fecha;
      });
      if(item){
        localStorage.setItem('entradas',JSON.stringify(this.entradas));
      }else{
        this.guardarItem(entradaActual);
      }

    }else{
      this.entradas = [];
      this.guardarItem(entradaActual);
    }

    const toast = await this.toastController.create({
      message: 'Datos guardados',
      duration: 2000
    });
    toast.present();
  }

  guardarItem(entrada:{fecha: string,fechaTexto: string,texto: string }){
    this.entradas.push(entrada);
    localStorage.setItem('entradas',JSON.stringify(this.entradas));
  }

}
