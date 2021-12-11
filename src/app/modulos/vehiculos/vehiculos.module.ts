import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YouTubePlayerModule } from '@angular/youtube-player'
import { VehiculosRoutingModule } from './vehiculos-routing.module';
import { CrearTipoVehiculoComponent } from './tipo-vehiculo/crear-tipo-vehiculo/crear-tipo-vehiculo.component';
import { EditarTipoVehiculoComponent } from './tipo-vehiculo/editar-tipo-vehiculo/editar-tipo-vehiculo.component';
import { BuscarTipoVehiculoComponent } from './tipo-vehiculo/buscar-tipo-vehiculo/buscar-tipo-vehiculo.component';
import { EliminarTipoVehiculoComponent } from './tipo-vehiculo/eliminar-tipo-vehiculo/eliminar-tipo-vehiculo.component';
import { CrearVehiculoComponent } from './vehiculo/crear-vehiculo/crear-vehiculo.component';
import { EditarVehiculoComponent } from './vehiculo/editar-vehiculo/editar-vehiculo.component';
import { BuscarVehiculoComponent } from './vehiculo/buscar-vehiculo/buscar-vehiculo.component';
import { EliminarVehiculoComponent } from './vehiculo/eliminar-vehiculo/eliminar-vehiculo.component';
import { AdminTipoVehiculoComponent } from './tipo-vehiculo/admin-tipo-vehiculo/admin-tipo-vehiculo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetalleVehiculoComponent } from './vehiculo/detalle-vehiculo/detalle-vehiculo.component';


@NgModule({
  declarations: [
    CrearTipoVehiculoComponent,
    EditarTipoVehiculoComponent,
    BuscarTipoVehiculoComponent,
    EliminarTipoVehiculoComponent,
    CrearVehiculoComponent,
    EditarVehiculoComponent,
    BuscarVehiculoComponent,
    EliminarVehiculoComponent,
    AdminTipoVehiculoComponent,
    DetalleVehiculoComponent,
  ],
  imports: [
    CommonModule,
    VehiculosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    YouTubePlayerModule
  ]
})
export class VehiculosModule { }
