import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloTipoVehiculo } from 'src/app/modelos/tipo-vehiculo.modelo';
import { TipoVehiculoService } from 'src/app/servicios/tipo-vehiculo.service';

@Component({
  selector: 'app-editar-tipo-vehiculo',
  templateUrl: './editar-tipo-vehiculo.component.html',
  styleUrls: ['./editar-tipo-vehiculo.component.css']
})
export class EditarTipoVehiculoComponent implements OnInit {
  id:string ='';
  fgValidador : FormGroup=this.fb.group({
    'id':['',[Validators.required]],
    'nombre':['',[Validators.required]],
    'descripcion':['',[Validators.required]],
    'porcentaje':['',[Validators.required]]
  })
  constructor(private fb:FormBuilder,
    private servicioTipoVehiculo:TipoVehiculoService,
    private router:Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id =  this.route.snapshot.params["id"]
    this.BuscarTipoVehiculo();
  }

  BuscarTipoVehiculo(){
    this.servicioTipoVehiculo.ObtenerRegistrosTipoVehiculoPorId(this.id).subscribe((datos:ModeloTipoVehiculo)=>{
      this.fgValidador.controls["id"].setValue(this.id),
      this.fgValidador.controls["nombre"].setValue(datos.nombre),
      this.fgValidador.controls["descripcion"].setValue(datos.descripcion),
      this.fgValidador.controls["porcentaje"].setValue(datos.porcentaje)
    });
  }
  EditarTipoVehiculo(){
    let nombre = this.fgValidador.controls["nombre"].value;
    let descripcion = this.fgValidador.controls["descripcion"].value;
    let porcentaje = this.fgValidador.controls["porcentaje"].value;
    let tipoVehiculo = new ModeloTipoVehiculo();
    tipoVehiculo.id=this.id;
    tipoVehiculo.nombre=nombre;
    tipoVehiculo.descripcion=descripcion;
    tipoVehiculo.porcentaje=porcentaje;
    this.servicioTipoVehiculo.ActualizarTipoVehiculo(tipoVehiculo).subscribe((datos:ModeloTipoVehiculo)=>{
      alert("Tipo de vehiculo actualizado correctamente");
      this.router.navigate(["/vehiculos/buscar-tipo-vehiculo"]);
    },(error:any)=>{
      alert("Error al actualizar: tipo de vehiculo ");
        })
  }

}
