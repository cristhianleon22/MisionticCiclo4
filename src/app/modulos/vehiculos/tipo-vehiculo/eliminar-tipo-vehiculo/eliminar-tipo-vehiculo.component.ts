import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloTipoVehiculo } from 'src/app/modelos/tipo-vehiculo.modelo';
import { TipoVehiculoService } from 'src/app/servicios/tipo-vehiculo.service';

@Component({
  selector: 'app-eliminar-tipo-vehiculo',
  templateUrl: './eliminar-tipo-vehiculo.component.html',
  styleUrls: ['./eliminar-tipo-vehiculo.component.css']
})
export class EliminarTipoVehiculoComponent implements OnInit {

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
  EliminarTipoVehiculo(){
    this.servicioTipoVehiculo.EliminarTipoVehiculo(this.id).subscribe((datos:ModeloTipoVehiculo)=>{
      alert("Tipo de vehiculo eliminado correctamente");
      this.router.navigate(["/vehiculos/buscar-tipo-vehiculo"]);
    },(error:any)=>{
      alert("Error al eliminar tipo de vehiculo ");
        })
  }
}
