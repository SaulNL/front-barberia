import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppComponent } from '../../app.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports:[CommonModule, IonicModule],
  exports:[HeaderComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }

