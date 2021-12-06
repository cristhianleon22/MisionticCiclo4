import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './plantilla/error/error.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';
import { MisionComponent } from './plantilla/mision/mision.component';
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
    //solo se importa cuando llamen al módulo mision
    path:'mision',
    component: MisionComponent
  },
  {
    //solo se importa cuando llamen al módulo vision
    path:'vision',
    component: VisionComponent
  },
   {
    //solo se importa cuando llamen al módulo seguridad
    path:'seguridad',
    loadChildren: () => import("./modulos/seguridad/seguridad.module").then(x => x.SeguridadModule)
  }
  ,
  {
    //solo se importa cuando llamen al módulo seguridad
    path:'administracion',
    loadChildren: () => import("./modulos/administracion/administracion.module").then(x => x.AdministracionModule)
  }
  ,
  {
    //solo se importa cuando llamen al módulo seguridad
    path:'clientes',
    loadChildren: () => import("./modulos/clientes/clientes.module").then(x => x.ClientesModule)
  }
  ,
  {
    //solo se importa cuando llamen al módulo seguridad
    path:'solicitudes',
    loadChildren: () => import("./modulos/solicitudes/solicitudes.module").then(x => x.SolicitudesModule)
  }
  ,
  {
    //solo se importa cuando llamen al módulo seguridad
    path:'vehiculos',
    loadChildren: () => import("./modulos/vehiculos/vehiculos.module").then(x => x.VehiculosModule)
  }
  ,
  {
    //ruta incorrecta 
    path:'**',
    component: ErrorComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
