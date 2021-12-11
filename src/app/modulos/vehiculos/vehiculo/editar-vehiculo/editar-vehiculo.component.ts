import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloTipoVehiculo } from 'src/app/modelos/tipo-vehiculo.modelo';
import { ModeloVehiculo } from 'src/app/modelos/vehiculo.modelo';
import { TipoVehiculoService } from 'src/app/servicios/tipo-vehiculo.service';
import { VehiculoService } from 'src/app/servicios/vehiculo.service';

@Component({
  selector: 'app-editar-vehiculo',
  templateUrl: './editar-vehiculo.component.html',
  styleUrls: ['./editar-vehiculo.component.css']
})
export class EditarVehiculoComponent implements OnInit {
  id:string='';
  listadoTipoVehiculo: ModeloTipoVehiculo[]=[];
  fgValidador : FormGroup=this.fb.group({
    'id':['',[Validators.required]],
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
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id =  this.route.snapshot.params["id"]
    this.ObtenerListadoTipoVehiculo();
    this.BuscarVehiculo();
  }

  ObtenerListadoTipoVehiculo(){
    this.servicioTipoVehiculo.ObtenerRegistrosTipoVehiculo().subscribe((datos:ModeloTipoVehiculo[])=>{
      this.listadoTipoVehiculo = datos;
    })
  }

  BuscarVehiculo(){
    this.servicioVehiculo.ObtenerRegistrosVehiculoPorId(this.id).subscribe((datos:ModeloVehiculo)=>{
      this.fgValidador.controls["id"].setValue(this.id),
      this.fgValidador.controls["matricula"].setValue(datos.matricula),
      this.fgValidador.controls["marca"].setValue(datos.marca),
      this.fgValidador.controls["linea"].setValue(datos.linea),
      this.fgValidador.controls["modelo"].setValue(datos.modelo),
      this.fgValidador.controls["cilindraje"].setValue(datos.cilindraje),
      this.fgValidador.controls["precio"].setValue(datos.precio),
      this.fgValidador.controls["foto"].setValue(datos.foto),
      this.fgValidador.controls["estado"].setValue(datos.estado),
      this.fgValidador.controls["video"].setValue(datos.video),
      this.fgValidador.controls["descripcion"].setValue(datos.descripcion),
      this.fgValidador.controls["ubicacion"].setValue(datos.ubicacion),
      this.fgValidador.controls["color"].setValue(datos.color),
      this.fgValidador.controls["tipoVehiculo"].setValue(datos.tipoVehiculo)
    });
  }

  EditarVehiculo(){
    let matricula = this.fgValidador.controls["matricula"].value;
    let marca = this.fgValidador.controls["marca"].value;
    let linea = this.fgValidador.controls["linea"].value;
    let modelo = this.fgValidador.controls["modelo"].value;
    let cilindraje = this.fgValidador.controls["cilindraje"].value;
    let precio = this.fgValidador.controls["precio"].value;
    let foto = this.fgValidador.controls["foto"].value;
    let estado = this.fgValidador.controls["estado"].value;
    let video = this.fgValidador.controls["video"].value;
    let descripcion = this.fgValidador.controls["descripcion"].value;
    let ubicacion = this.fgValidador.controls["ubicacion"].value;
    let color = this.fgValidador.controls["color"].value;
    let tipoVehiculo = this.fgValidador.controls["tipoVehiculo"].value.toString();
    let vehiculo = new ModeloVehiculo();
    vehiculo.id=this.id;
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
    this.servicioVehiculo.ActualizarVehiculo(vehiculo).subscribe((datos:ModeloVehiculo)=>{
      alert("Actualizado vehiculo correctamente");
      this.router.navigate(["/vehiculos/buscar-vehiculo"]);
    },(error:any)=>{
      alert("Error actualizando vehiculo ");
        })
  }

}
