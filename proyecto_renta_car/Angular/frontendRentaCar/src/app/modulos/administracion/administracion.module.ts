import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { CrearAdministradorComponent } from './administradores/crear-administrador/crear-administrador.component';
import { EditarAdministradorComponent } from './administradores/editar-administrador/editar-administrador.component';
import { EliminarAdministradorComponent } from './administradores/eliminar-administrador/eliminar-administrador.component';
import { BuscarAdministradorComponent } from './administradores/buscar-administrador/buscar-administrador.component';
import { CrearAsesorComponent } from './asesores/crear-asesor/crear-asesor.component';
import { EditarAsesorComponent } from './asesores/editar-asesor/editar-asesor.component';
import { EliminarAsesorComponent } from './asesores/eliminar-asesor/eliminar-asesor.component';
import { BuscarAsesorComponent } from './asesores/buscar-asesor/buscar-asesor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrearAdministradorComponent,
    EditarAdministradorComponent,
    EliminarAdministradorComponent,
    BuscarAdministradorComponent,
    CrearAsesorComponent,
    EditarAsesorComponent,
    EliminarAsesorComponent,
    BuscarAsesorComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdministracionModule { }
