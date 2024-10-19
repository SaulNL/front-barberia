import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-entrada',
  templateUrl: './card-entrada.component.html',
  styleUrls: ['./card-entrada.component.scss'],
})
export class CardEntradaComponent  implements OnInit {
@Input() entrada ={
  fecha: '',
  fechaTexto:'',
  texto: ''
}
@Input() sololectura:boolean = false;

  constructor() { }
@Output()  eventoGuardar: EventEmitter<{
  fecha: string;
  fechaTexto: string;
  texto: string;
}> = new   EventEmitter<{
  fecha: string;
  fechaTexto: string;
  texto: string; }
  >();

  ngOnInit() {}
guardar(){
  this.eventoGuardar.emit(this.entrada);
}
}
