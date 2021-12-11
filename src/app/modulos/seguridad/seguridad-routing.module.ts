import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidadorSesionGuard } from 'src/app/guardianes/validador-sesion.guard';
import { CambioClaveComponent } from './cambio-clave/cambio-clave.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { IdentificacionAdministradorComponent } from './identificacion/identificacion-administrador/identificacion-administrador.component';
import { IdentificacionAsesorComponent } from './identificacion/identificacion-asesor/identificacion-asesor.component';
import { IdentificacionClienteComponent } from './identificacion/identificacion-cliente/identificacion-cliente.component';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';

const routes: Routes = [
  {
    path:'cambio-clave',
    component: CambioClaveComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path:'recuperar-clave',
    component: RecuperarClaveComponent
  },
  {
    path:'cerrar-sesion',
    component: CerrarSesionComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path:'identificacion-administrador',
    component: IdentificacionAdministradorComponent
  },
  {
    path:'identificacion-asesor',
    component: IdentificacionAsesorComponent
  },
  {
    path:'identificacion-cliente',
    component: IdentificacionClienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
