import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModeloIdentificar } from 'src/app/modelos/identificar.modelo';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent implements OnInit {
  seInicioSesion: boolean = false;
  seInicioSesionAsesor: boolean = false;
  seInicioSesionAdministrador: boolean = false;
  seInicioSesionCliente: boolean = false;

  rol:string='';

  subs:Subscription = new Subscription();
  constructor(private seguridadServicio:SeguridadService) { }

  ngOnInit(): void {
    this.isLogin();
  }

  isLogin(){
    this.subs=this.seguridadServicio.ObtenerDatosUsuarioSesion().subscribe((datos:ModeloIdentificar)=>{
      this.seInicioSesion= datos.isIdentificado

      if(this.seInicioSesion){
        this.rol=this.seguridadServicio.ObtenerRol();
        if(this.rol=="ADMINISTRADOR"){
          this.seInicioSesionAdministrador = true;
        }else{
          if(this.rol=="ASESOR"){
            this.seInicioSesionAsesor = true;
          }else{
            if(this.rol=="CLIENTE"){
              this.seInicioSesionCliente = true;
            }
          }
        }
      }
    })
  }
}
