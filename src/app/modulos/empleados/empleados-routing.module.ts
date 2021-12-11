import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidadorSesionGuard } from 'src/app/guardianes/validador-sesion.guard';
import { AdministradorComponent } from './administrador/administrador.component';
import { AsesorHomeComponent } from './asesor/asesor-home/asesor-home.component';
import { BuscarAsesorComponent } from './asesor/buscar-asesor/buscar-asesor.component';
import { CrearAsesorComponent } from './asesor/crear-asesor/crear-asesor.component';
import { EditarAsesorComponent } from './asesor/editar-asesor/editar-asesor.component';
import { EliminarAsesorComponent } from './asesor/eliminar-asesor/eliminar-asesor.component';

const routes: Routes = [
  {
    path:'crear-asesor',
    component: CrearAsesorComponent,
    canActivate: [ValidadorSesionGuard]
  },
  {
    path:'editar-asesor/:id',
    component: EditarAsesorComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path:'eliminar-asesor/:id',
    component: EliminarAsesorComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path:'buscar-asesor',
    component: BuscarAsesorComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path:'administrador',
    component: AdministradorComponent,
    canActivate:[ValidadorSesionGuard]
  },
  {
    path:'asesor-home',
    component: AsesorHomeComponent,
    canActivate:[ValidadorSesionGuard]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpleadosRoutingModule { }
