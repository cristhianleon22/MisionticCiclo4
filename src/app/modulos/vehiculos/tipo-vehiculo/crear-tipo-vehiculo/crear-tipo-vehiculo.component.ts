import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloTipoVehiculo } from 'src/app/modelos/tipo-vehiculo.modelo';
import { TipoVehiculoService } from 'src/app/servicios/tipo-vehiculo.service';

@Component({
  selector: 'app-crear-tipo-vehiculo',
  templateUrl: './crear-tipo-vehiculo.component.html',
  styleUrls: ['./crear-tipo-vehiculo.component.css']
})
export class CrearTipoVehiculoComponent implements OnInit {

  fgValidador : FormGroup=this.fb.group({
    'nombre':['',[Validators.required]],
    'descripcion':['',[Validators.required]],
    'porcentaje':['',[Validators.required]]
  })
  constructor(private fb:FormBuilder,
    private servicioTipoVehiculo:TipoVehiculoService,
    private router:Router) { }

  ngOnInit(): void {
  }

  GuardarTipoVehiculo(){
    let nombre = this.fgValidador.controls["nombre"].value;
    let descripcion = this.fgValidador.controls["descripcion"].value;
    let porcentaje = this.fgValidador.controls["porcentaje"].value;
    let tipoVehiculo = new ModeloTipoVehiculo();
    tipoVehiculo.nombre=nombre;
    tipoVehiculo.descripcion=descripcion;
    tipoVehiculo.porcentaje=porcentaje;
    this.servicioTipoVehiculo.CrearTipoVehiculo(tipoVehiculo).subscribe((datos:ModeloTipoVehiculo)=>{
      alert("Almacenado tipo de vehiculo correctamente");
      this.router.navigate(["/vehiculos/buscar-tipo-vehiculo"]);
    },(error:any)=>{
      alert("Error tipo de vehiculo ");
        })
  }


}
