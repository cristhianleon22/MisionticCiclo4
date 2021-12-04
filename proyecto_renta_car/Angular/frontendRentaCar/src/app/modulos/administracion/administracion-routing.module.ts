import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarAdministradorComponent } from './administradores/buscar-administrador/buscar-administrador.component';
import { CrearAdministradorComponent } from './administradores/crear-administrador/crear-administrador.component';
import { EditarAdministradorComponent } from './administradores/editar-administrador/editar-administrador.component';
import { EliminarAdministradorComponent } from './administradores/eliminar-administrador/eliminar-administrador.component';

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
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
