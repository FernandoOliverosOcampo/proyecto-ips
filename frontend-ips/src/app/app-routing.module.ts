import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './components/home/home/home.component';

const routes: Routes = [

  // Otras rutas de la aplicación aquí
  { path: 'login', component: LoginComponent }, // Ruta para la página de inicio de sesión
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirige a la página de inicio de sesión por defecto
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
