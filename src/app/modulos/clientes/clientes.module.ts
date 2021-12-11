import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { CrearClienteComponent } from './cliente/crear-cliente/crear-cliente.component';
import { EditarClienteComponent } from './cliente/editar-cliente/editar-cliente.component';
import { EliminarClienteComponent } from './cliente/eliminar-cliente/eliminar-cliente.component';
import { BuscarClienteComponent } from './cliente/buscar-cliente/buscar-cliente.component';
import { BuscarCodeudorComponent } from './codeudor/buscar-codeudor/buscar-codeudor.component';
import { CrearCodeudorComponent } from './codeudor/crear-codeudor/crear-codeudor.component';
import { EditarCodeudorComponent } from './codeudor/editar-codeudor/editar-codeudor.component';
import { EliminarCodeudorComponent } from './codeudor/eliminar-codeudor/eliminar-codeudor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrearClienteComponent,
    EditarClienteComponent,
    EliminarClienteComponent,
    BuscarClienteComponent,
    BuscarCodeudorComponent,
    CrearCodeudorComponent,
    EditarCodeudorComponent,
    EliminarCodeudorComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ClientesModule { }
