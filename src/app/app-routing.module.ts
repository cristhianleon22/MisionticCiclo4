import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './plantilla/contacto/contacto.component';
import { CotizacionComponent } from './plantilla/cotizacion/cotizacion.component';
import { ErrorComponent } from './plantilla/error/error.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';
import { MirarVehiculoComponent } from './plantilla/mirar-vehiculo/mirar-vehiculo.component';
import { MisionComponent } from './plantilla/mision/mision.component';
import { UploadCartaLaboralComponent } from './plantilla/upload-carta-laboral/upload-carta-laboral.component';
import { VisionComponent } from './plantilla/vision/vision.component';

const routes: Routes = [
  {
    path:"inicio",
    component: InicioComponent
  },
  {
    path:"",
    pathMatch:'full',
    redirectTo:'/inicio'
  },
  {
    path:"mision",
    component: MisionComponent
  },
  {
    path:"vision",
    component: VisionComponent
  },
  {
    path:"solicitar-cotizacion",
    component: CotizacionComponent
  },
  {
    path:"mirar-vehiculos",
    component: MirarVehiculoComponent
  },
  {
    path:"upload-carta-laboral",
    component: UploadCartaLaboralComponent,
  },
  {
    path:"contacto",
    component: ContactoComponent
  },
  {
  path: 'seguridad',
  loadChildren: () => import("./modulos/seguridad/seguridad.module").then(x => x.SeguridadModule)
  },

  {
    path: 'empleados',
    loadChildren: () => import("./modulos/empleados/empleados.module").then(x => x.EmpleadosModule)
  },
  {
    path: 'clientes',
    loadChildren: () => import("./modulos/clientes/clientes.module").then(x => x.ClientesModule)
  },
  {
    path: 'solicitudes',
    loadChildren: () => import("./modulos/solicitudes/solicitudes.module").then(x => x.SolicitudesModule)
  },
  {
    path: 'vehiculos',
    loadChildren: () => import("./modulos/vehiculos/vehiculos.module").then(x => x.VehiculosModule)
  },
  {
    path: 'sedes',
    loadChildren: () => import("./modulos/sedes/sedes.module").then(x => x.SedesModule)
  },
  {
    path:'**',
    component: ErrorComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
