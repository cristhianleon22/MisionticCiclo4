import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidadorSesionGuard } from 'src/app/guardianes/validador-sesion.guard';
import { BuscarClienteComponent } from './cliente/buscar-cliente/buscar-cliente.component';
import { CrearClienteComponent } from './cliente/crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './cliente/editar-cliente/editar-cliente.component';
import { EliminarClienteComponent } from './cliente/eliminar-cliente/eliminar-cliente.component';

const routes: Routes = [
  {
    path:'crear-cliente',
    component: CrearClienteComponent
  },
  {
    path:'editar-cliente/:id',
    component: EditarClienteComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path:'eliminar-cliente/:id',
    component: EliminarClienteComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path:'buscar-cliente',
    component: BuscarClienteComponent,
    canActivate:[ValidadorSesionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
