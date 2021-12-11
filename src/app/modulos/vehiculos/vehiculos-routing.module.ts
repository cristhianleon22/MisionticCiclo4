import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidadorSesionGuard } from 'src/app/guardianes/validador-sesion.guard';
import { AdminTipoVehiculoComponent } from './tipo-vehiculo/admin-tipo-vehiculo/admin-tipo-vehiculo.component';
import { BuscarTipoVehiculoComponent } from './tipo-vehiculo/buscar-tipo-vehiculo/buscar-tipo-vehiculo.component';
import { CrearTipoVehiculoComponent } from './tipo-vehiculo/crear-tipo-vehiculo/crear-tipo-vehiculo.component';
import { EditarTipoVehiculoComponent } from './tipo-vehiculo/editar-tipo-vehiculo/editar-tipo-vehiculo.component';
import { EliminarTipoVehiculoComponent } from './tipo-vehiculo/eliminar-tipo-vehiculo/eliminar-tipo-vehiculo.component';
import { BuscarVehiculoComponent } from './vehiculo/buscar-vehiculo/buscar-vehiculo.component';
import { CrearVehiculoComponent } from './vehiculo/crear-vehiculo/crear-vehiculo.component';
import { DetalleVehiculoComponent } from './vehiculo/detalle-vehiculo/detalle-vehiculo.component';
import { EditarVehiculoComponent } from './vehiculo/editar-vehiculo/editar-vehiculo.component';
import { EliminarVehiculoComponent } from './vehiculo/eliminar-vehiculo/eliminar-vehiculo.component';

const routes: Routes = [
  //Tipo de vehiculo
  {
    path:'crear-tipo-vehiculo',
    component: CrearTipoVehiculoComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path:'editar-tipo-vehiculo/:id',
    component: EditarTipoVehiculoComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path:'eliminar-tipo-vehiculo/:id',
    component: EliminarTipoVehiculoComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path:'buscar-tipo-vehiculo',
    component: BuscarTipoVehiculoComponent,
    canActivate:[ValidadorSesionGuard]
  },
  //vehiculo
  {
    path:'crear-vehiculo',
    component: CrearVehiculoComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path:'editar-vehiculo/:id',
    component: EditarVehiculoComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path:'detalle-vehiculo/:id',
    component: DetalleVehiculoComponent,
  },
  {
    path:'eliminar-vehiculo/:id',
    component: EliminarVehiculoComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path:'buscar-vehiculo',
    component: BuscarVehiculoComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path:'admin-tipo-vehiculo',
    component: AdminTipoVehiculoComponent,
    canActivate:[ValidadorSesionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiculosRoutingModule { }
