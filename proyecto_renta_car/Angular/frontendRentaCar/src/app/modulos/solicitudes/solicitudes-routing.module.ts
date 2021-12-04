import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarSolicitudComponent } from './solicitud/buscar-solicitud/buscar-solicitud.component';
import { CrearSolicitudComponent } from './solicitud/crear-solicitud/crear-solicitud.component';
import { EditarSolicitudComponent } from './solicitud/editar-solicitud/editar-solicitud.component';
import { EliminarSolicitudComponent } from './solicitud/eliminar-solicitud/eliminar-solicitud.component';

const routes: Routes = [
  {
    path:'crear-solicitud',
    component: CrearSolicitudComponent
  },
  {
    path:'editar-solicitud',
    component: EditarSolicitudComponent
  },
  {
    path:'eliminar-solicitud',
    component: EliminarSolicitudComponent
  },
  {
    path:'buscar-solicitud',
    component: BuscarSolicitudComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitudesRoutingModule { }
