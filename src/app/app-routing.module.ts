import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { noIngresadoGuard } from './components/no-ingresado.guard';
import { ingresadoGuard } from './components/ingresado.guard';

const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canActivate:[noIngresadoGuard]
  },
  {
    path: 'registro-cliente',
    loadChildren: () => import('./pages/registro-cliente/registro-cliente.module').then( m => m.RegistroClientePageModule),
    canActivate:[noIngresadoGuard]
  },

  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule),
    canActivate:[ingresadoGuard]
  },
  {
    path: 'entradas-detalle',
    loadChildren: () => import('./pages/entradas-detalle/entradas-detalle.module').then( m => m.EntradasDetallePageModule)
  }

  



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
