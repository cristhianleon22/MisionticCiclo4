import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidadorSesionGuard } from 'src/app/guardianes/validador-sesion.guard';
import { BuscarSedeComponent } from './buscar-sede/buscar-sede.component';
import { CrearSedeComponent } from './crear-sede/crear-sede.component';
import { EditarSedeComponent } from './editar-sede/editar-sede.component';
import { EliminarSedeComponent } from './eliminar-sede/eliminar-sede.component';

const routes: Routes = [

  {
    path:'buscar-sede',
    component: BuscarSedeComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path:'editar-sede/:id',
    component: EditarSedeComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path:'crear-sede',
    component: CrearSedeComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path:'eliminar-sede/:id',
    component: EliminarSedeComponent,
    canActivate:[ValidadorSesionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SedesRoutingModule { }
