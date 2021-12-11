import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminSolicitudComponent } from './solicitud/admin-solicitud/admin-solicitud.component';
import { BuscarSolicitudComponent } from './solicitud/buscar-solicitud/buscar-solicitud.component';
import { CrearSolicitudComponent } from './solicitud/crear-solicitud/crear-solicitud.component';
import { EditarSolicitudComponent } from './solicitud/editar-solicitud/editar-solicitud.component';
import { EliminarSolicitudComponent } from './solicitud/eliminar-solicitud/eliminar-solicitud.component';

const routes: Routes = [
  {
    path:'crear-solicitud/:id',
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
  },
  {
    path:'admin-solicitud',
    component: AdminSolicitudComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitudesRoutingModule { }
