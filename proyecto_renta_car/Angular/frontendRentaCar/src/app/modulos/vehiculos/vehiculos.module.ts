import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiculosRoutingModule } from './vehiculos-routing.module';
import { CrearVehiculoComponent } from './vehiculo/crear-vehiculo/crear-vehiculo.component';
import { EditarVehiculoComponent } from './vehiculo/editar-vehiculo/editar-vehiculo.component';
import { EliminarVehiculoComponent } from './vehiculo/eliminar-vehiculo/eliminar-vehiculo.component';
import { BuscarVehiculoComponent } from './vehiculo/buscar-vehiculo/buscar-vehiculo.component';
import { CrearTipovehiculoComponent } from './tipo-vehiculo/crear-tipovehiculo/crear-tipovehiculo.component';
import { EditarTipovehiculoComponent } from './tipo-vehiculo/editar-tipovehiculo/editar-tipovehiculo.component';
import { BuscarTipovehiculoComponent } from './tipo-vehiculo/buscar-tipovehiculo/buscar-tipovehiculo.component';
import { EliminarTipovehiculoComponent } from './tipo-vehiculo/eliminar-tipovehiculo/eliminar-tipovehiculo.component';


@NgModule({
  declarations: [
    CrearVehiculoComponent,
    EditarVehiculoComponent,
    EliminarVehiculoComponent,
    BuscarVehiculoComponent,
    CrearTipovehiculoComponent,
    EditarTipovehiculoComponent,
    BuscarTipovehiculoComponent,
    EliminarTipovehiculoComponent
  ],
  imports: [
    CommonModule,
    VehiculosRoutingModule
  ]
})
export class VehiculosModule { }
