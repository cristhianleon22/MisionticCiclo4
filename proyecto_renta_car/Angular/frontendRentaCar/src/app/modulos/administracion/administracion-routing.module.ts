import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarAdministradorComponent } from './administradores/buscar-administrador/buscar-administrador.component';
import { CrearAdministradorComponent } from './administradores/crear-administrador/crear-administrador.component';
import { EditarAdministradorComponent } from './administradores/editar-administrador/editar-administrador.component';
import { EliminarAdministradorComponent } from './administradores/eliminar-administrador/eliminar-administrador.component';
import { BuscarAsesorComponent } from './asesores/buscar-asesor/buscar-asesor.component';
import { CrearAsesorComponent } from './asesores/crear-asesor/crear-asesor.component';
import { EditarAsesorComponent } from './asesores/editar-asesor/editar-asesor.component';
import { EliminarAsesorComponent } from './asesores/eliminar-asesor/eliminar-asesor.component';

const routes: Routes = [
  {
    path:'crear-administrador',
    component: CrearAdministradorComponent
  },
  {
    path:'editar-administrador',
    component: EditarAdministradorComponent
  },
  {
    path:'eliminar-administrador',
    component: EliminarAdministradorComponent
  },
  {
    path:'buscar-administrador',
    component: BuscarAdministradorComponent
  },
  {
    path:'crear-asesor',
    component: CrearAsesorComponent
  },
  {
    path:'editar-asesor',
    component: EditarAsesorComponent
  },
  {
    path:'eliminar-asesor',
    component: EliminarAsesorComponent
  },
  {
    path:'buscar-asesor',
    component: BuscarAsesorComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
