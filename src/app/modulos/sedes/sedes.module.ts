import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SedesRoutingModule } from './sedes-routing.module';
import { CrearSedeComponent } from './crear-sede/crear-sede.component';
import { BuscarSedeComponent } from './buscar-sede/buscar-sede.component';
import { EditarSedeComponent } from './editar-sede/editar-sede.component';
import { EliminarSedeComponent } from './eliminar-sede/eliminar-sede.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrearSedeComponent,
    BuscarSedeComponent,
    EditarSedeComponent,
    EliminarSedeComponent
  ],
  imports: [
    CommonModule,
    SedesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SedesModule { }
