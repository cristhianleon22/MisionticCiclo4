import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ModeloVehiculo } from 'src/app/modelos/vehiculo.modelo';
import { TipoVehiculoService } from 'src/app/servicios/tipo-vehiculo.service';
import { VehiculoService } from 'src/app/servicios/vehiculo.service';

@Component({
  selector: 'app-detalle-vehiculo',
  templateUrl: './detalle-vehiculo.component.html',
  styleUrls: ['./detalle-vehiculo.component.css']
})
export class DetalleVehiculoComponent implements OnInit {

  id:string='';

  marca: string | undefined;
  modelo: string | undefined;
  linea: string | undefined;
  matricula: string | undefined;
  color: string | undefined;
  descripcion: string | undefined;
  precio: number | undefined;
  foto: string | undefined;
  video: string | undefined;
  ubicacion: string | undefined;
  cilindraje: string | undefined;
  estado: string | undefined;

  constructor(private fb:FormBuilder,
    private servicioVehiculo:VehiculoService,
    private servicioTipoVehiculo:TipoVehiculoService,
    private router:Router,
    private route: ActivatedRoute,
    private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.id =  this.route.snapshot.params["id"]
    this.BuscarVehiculo();
    const tag = document.createElement('script');
  	tag.src = "https://www.youtube.com/iframe_api";
  	document.body.appendChild(tag);
  }

  BuscarVehiculo(){
    this.servicioVehiculo.ObtenerRegistrosVehiculoPorId(this.id).subscribe((datos:ModeloVehiculo)=>{
    this.marca = datos.marca;
    this.modelo = datos.modelo;
    this.linea = datos.linea;
    this.matricula = datos.matricula;
    this.color = datos.color;
    this.descripcion = datos.descripcion;
    this.precio = datos.precio;
    this.foto = datos.foto;
    this.video = datos.video;
    this.ubicacion = datos.ubicacion;
    this.cilindraje = datos.cilindraje;
    this.estado = datos.estado;
    });
  }
}
