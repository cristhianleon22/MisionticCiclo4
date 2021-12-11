import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModeloSede } from 'src/app/modelos/sede.modelo';
import { ModeloVehiculo } from 'src/app/modelos/vehiculo.modelo';
import { SedeService } from 'src/app/servicios/sede.service';
import { VehiculoService } from 'src/app/servicios/vehiculo.service';

@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.component.html',
  styleUrls: ['./cotizacion.component.css']
})
export class CotizacionComponent implements OnInit {
  listadoVehiculos: ModeloVehiculo[]=[];
  listadoSedes: ModeloSede[]=[];
  fgValidador : FormGroup=this.fb.group({
    'tipo':['',[Validators.required]],
    'modelo':['',[Validators.required]],
    'nombre-cliente':['',[Validators.required]],
    'apellido-cliente':['',[Validators.required]],
    'correo-cliente':['',[Validators.required,Validators.email]],
    'documento-cliente':['',[Validators.required]],
    'nota-cliente':['',[Validators.required]],
    'telefono-cliente':['',[Validators.required]],
    'sede':['',[Validators.required]]
  })

  constructor(private sedeServicio:SedeService,
    private fb:FormBuilder,
    private vehiculoServicio:VehiculoService) { }

  ngOnInit(): void {
    this.ObtenerListadoSedes();
    this.ObtenerListadoVehiculos();
  }

  ObtenerListadoSedes(){
    this.sedeServicio.ObtenerRegistrosSede().subscribe((datos:ModeloSede[])=>{
      this.listadoSedes = datos;
    })
  }

  ObtenerListadoVehiculos(){
    this.vehiculoServicio.ObtenerRegistrosVehiculo().subscribe((datos:ModeloVehiculo[])=>{
      this.listadoVehiculos = datos;
    })
  }

}
