import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { CambioClaveComponent } from './cambio-clave/cambio-clave.component';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { IdentificacionClienteComponent } from './identificacion/identificacion-cliente/identificacion-cliente.component';
import { IdentificacionAsesorComponent } from './identificacion/identificacion-asesor/identificacion-asesor.component';
import { IdentificacionAdministradorComponent } from './identificacion/identificacion-administrador/identificacion-administrador.component';


@NgModule({
  declarations: [
    CambioClaveComponent,
    RecuperarClaveComponent,
    CerrarSesionComponent,
    IdentificacionClienteComponent,
    IdentificacionAsesorComponent,
    IdentificacionAdministradorComponent
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SeguridadModule { }
