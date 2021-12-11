import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ModeloDatos } from 'src/app/modelos/datos.modelo';
import { ModeloIdentificar } from 'src/app/modelos/identificar.modelo';
import { ModeloVehiculo } from 'src/app/modelos/vehiculo.modelo';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { VehiculoService } from 'src/app/servicios/vehiculo.service';

@Component({
  selector: 'app-mirar-vehiculo',
  templateUrl: './mirar-vehiculo.component.html',
  styleUrls: ['./mirar-vehiculo.component.css']
})
export class MirarVehiculoComponent implements OnInit {
  seInicioSesion: boolean = false;
  seInicioSesionCliente: boolean = false;

  rol:string='';

  listadoVehiculos: ModeloVehiculo[]=[];

  subs:Subscription = new Subscription();

  constructor(private vehiculoServicio:VehiculoService,
    private seguridadServicio:SeguridadService,
    private router:Router) { }

  ngOnInit(): void {
    this.ObtenerListadoVehiculos();
    this.isLogin();
  }

  ObtenerListadoVehiculos(){
    this.vehiculoServicio.ObtenerRegistrosVehiculo().subscribe((datos:ModeloVehiculo[])=>{
    this.listadoVehiculos = datos;
    })
  }
  isLogin(){
    this.subs=this.seguridadServicio.ObtenerDatosUsuarioSesion().subscribe((datos:ModeloIdentificar)=>{
      this.seInicioSesion= datos.isIdentificado

      if(this.seInicioSesion){
        this.rol=this.seguridadServicio.ObtenerRol();
        if(this.rol=="CLIENTE"){
          this.seInicioSesionCliente = true;
        }
      }
    })
  }
}
