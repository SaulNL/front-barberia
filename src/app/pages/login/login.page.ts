import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formulariologin!: FormGroup;


  constructor(
    //para el formulario reactivo
    public fb: FormBuilder, 
    //para las alertas
    public alertController: AlertController,
    // para moveernos entre paginas
    public navCtrl:  NavController,
  ) {
    this.formulariologin = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)

    })
   }

  ngOnInit() {
  }

  async ingresar(){
    var f = this.formulariologin.value;
    var usuario = JSON.parse(localStorage.getItem('usuario') ?? 'null');
    if(usuario.nombre === f.nombre && usuario.password === f.password){
      console.log('ingresado')
      localStorage.setItem('ingresado','true');
      this.navCtrl.navigateRoot('menu/inicio');

    }else{
      const alert = await this.alertController.create({
        mode:'ios',
        header : 'Datos incorrectos',
        message : 'Los datos ingresados son incorrectos',
        buttons : ['Aceptar'],
      });
      await alert.present();
      return;
    }
  }

}
