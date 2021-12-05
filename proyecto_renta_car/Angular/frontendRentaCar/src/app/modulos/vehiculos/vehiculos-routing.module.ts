import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarTipovehiculoComponent } from './tipo-vehiculo/buscar-tipovehiculo/buscar-tipovehiculo.component';
import { CrearTipovehiculoComponent } from './tipo-vehiculo/crear-tipovehiculo/crear-tipovehiculo.component';
import { EditarTipovehiculoComponent } from './tipo-vehiculo/editar-tipovehiculo/editar-tipovehiculo.component';
import { EliminarTipovehiculoComponent } from './tipo-vehiculo/eliminar-tipovehiculo/eliminar-tipovehiculo.component';
import { BuscarVehiculoComponent } from './vehiculo/buscar-vehiculo/buscar-vehiculo.component';
import { CrearVehiculoComponent } from './vehiculo/crear-vehiculo/crear-vehiculo.component';
import { EliminarVehiculoComponent } from './vehiculo/eliminar-vehiculo/eliminar-vehiculo.component';

const routes: Routes = [
  {
    path:'editar-tipovehiculo',
    component: EditarTipovehiculoComponent
  },
  {
    path:'crear-tipovehiculo',
    component: CrearTipovehiculoComponent
  },
  {
    path:'eliminar-tipovehiculo',
    component: EliminarTipovehiculoComponent
  },
  {
    path:'buscar-tipovehiculo',
    component: BuscarTipovehiculoComponent
  },
  {
    path:'crear-vehiculo',
    component: CrearVehiculoComponent
  },
  {
    path:'buscar-vehiculo',
    component: BuscarVehiculoComponent
  },
  {
    path:'eliminar-vehiculo',
    component: EliminarVehiculoComponent
  },
  {
    path:'buscar-vehiculo',
    component: BuscarVehiculoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiculosRoutingModule { }
