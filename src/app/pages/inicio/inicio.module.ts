import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioPageRoutingModule } from './inicio-routing.module';

import { InicioPage } from './inicio.page';
import { ModuloComponentesModule } from '../../components/modulo-componentes.module';
import { SharedModule } from 'src/app/shared/components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioPageRoutingModule,
    //importamos el modulo de para los componentes para poder usarlos en los pages
    ModuloComponentesModule,
    SharedModule
  ],
  declarations: [InicioPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InicioPageModule {}
