import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarClienteComponent } from './cliente/buscar-cliente/buscar-cliente.component';
import { CrearClienteComponent } from './cliente/crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './cliente/editar-cliente/editar-cliente.component';
import { EliminarClienteComponent } from './cliente/eliminar-cliente/eliminar-cliente.component';
import { BuscarCodeudorComponent } from './codeudor/buscar-codeudor/buscar-codeudor.component';
import { CrearCodeudorComponent } from './codeudor/crear-codeudor/crear-codeudor.component';
import { EditarCodeudorComponent } from './codeudor/editar-codeudor/editar-codeudor.component';
import { EliminarCodeudorComponent } from './codeudor/eliminar-codeudor/eliminar-codeudor.component';

const routes: Routes = [
  {
    path:'crear-cliente',
    component: CrearClienteComponent
  },
  {
    path:'buscar-cliente',
    component: BuscarClienteComponent
  },
  {
    path:'eliminar-cliente',
    component: EliminarClienteComponent
  },
  {
    path:'editar-cliente',
    component: EditarClienteComponent
  },
  {
    path:'buscar-codeudor',
    component: BuscarCodeudorComponent
  },
  {
    path:'crear-codeudor',
    component: CrearCodeudorComponent
  },
  {
    path:'editar-codeudor',
    component: EditarCodeudorComponent
  },
  {
    path:'eliminar-codeudor',
    component: EliminarCodeudorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
