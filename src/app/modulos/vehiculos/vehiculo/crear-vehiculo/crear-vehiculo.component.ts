import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloSede } from 'src/app/modelos/sede.modelo';
import { ModeloTipoVehiculo } from 'src/app/modelos/tipo-vehiculo.modelo';
import { ModeloVehiculo } from 'src/app/modelos/vehiculo.modelo';
import { SedeService } from 'src/app/servicios/sede.service';
import { TipoVehiculoService } from 'src/app/servicios/tipo-vehiculo.service';
import { VehiculoService } from 'src/app/servicios/vehiculo.service';

@Component({
  selector: 'app-crear-vehiculo',
  templateUrl: './crear-vehiculo.component.html',
  styleUrls: ['./crear-vehiculo.component.css']
})
export class CrearVehiculoComponent implements OnInit {

  listadoSedes: ModeloSede[]=[];
  listadoTipoVehiculo: ModeloTipoVehiculo[]=[];
  fgValidador : FormGroup=this.fb.group({
    'matricula':['',[Validators.required]],
    'marca':['',[Validators.required]],
    'linea':['',[Validators.required]],
    'modelo':['',[Validators.required]],
    'cilindraje':['',[Validators.required]],
    'precio':['',[Validators.required]],
    'foto':['',[Validators.required]],
    'estado':['',[Validators.required]],
    'video':['',[Validators.required]],
    'descripcion':['',[Validators.required]],
    'ubicacion':['',[Validators.required]],
    'tipoVehiculo':['',[Validators.required]],
    'color':['',[Validators.required]]
  })
  constructor(private fb:FormBuilder,
    private servicioVehiculo:VehiculoService,
    private servicioTipoVehiculo:TipoVehiculoService,
    private router:Router,
    private sedeServicio:SedeService,) { }

  ngOnInit(): void {
    this.ObtenerListadoTipoVehiculo();
    this.ObtenerListadoSedes();
  }
  ObtenerListadoSedes(){
    this.sedeServicio.ObtenerRegistrosSede().subscribe((datos:ModeloSede[])=>{
      this.listadoSedes = datos;
    })
  }

  ObtenerListadoTipoVehiculo(){
    this.servicioTipoVehiculo.ObtenerRegistrosTipoVehiculo().subscribe((datos:ModeloTipoVehiculo[])=>{
      this.listadoTipoVehiculo = datos;
    })
  }

  GuardarVehiculo(){
    let matricula = this.fgValidador.controls["matricula"].value;
    let marca = this.fgValidador.controls["marca"].value;
    let linea = this.fgValidador.controls["linea"].value;
    let modelo = this.fgValidador.controls["modelo"].value;
    let cilindraje = this.fgValidador.controls["cilindraje"].value;
    let precio = this.fgValidador.controls["precio"].value;
    let foto = this.fgValidador.controls["foto"].value;
    let estado = this.fgValidador.controls["estado"].value.toString();
    let video = this.fgValidador.controls["video"].value;
    let descripcion = this.fgValidador.controls["descripcion"].value;
    let ubicacion = this.fgValidador.controls["ubicacion"].value.toString();
    let color = this.fgValidador.controls["color"].value;
    let tipoVehiculo = this.fgValidador.controls["tipoVehiculo"].value.toString();
    let vehiculo = new ModeloVehiculo();
    vehiculo.color=color;
    vehiculo.matricula=matricula;
    vehiculo.marca=marca;
    vehiculo.linea=linea;
    vehiculo.modelo=modelo;
    vehiculo.cilindraje=cilindraje;
    vehiculo.precio=precio;
    vehiculo.foto=foto;
    vehiculo.estado=estado;
    vehiculo.video=video;
    vehiculo.descripcion=descripcion;
    vehiculo.ubicacion=ubicacion;
    vehiculo.tipoVehiculo=tipoVehiculo;
    this.servicioVehiculo.CrearVehiculo(vehiculo).subscribe((datos:ModeloVehiculo)=>{
      alert("Almacenado vehiculo correctamente");
      this.router.navigate(["/vehiculos/buscar-vehiculo"]);
    },(error:any)=>{
      alert("Error almacenando vehiculo ");
        })
  }

}
