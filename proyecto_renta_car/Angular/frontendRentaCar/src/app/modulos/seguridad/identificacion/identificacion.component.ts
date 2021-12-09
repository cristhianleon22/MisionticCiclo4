import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import * as cryptoJS from "crypto-js"; 
import { Router } from '@angular/router';

//logica del componente
@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css']
})
export class IdentificacionComponent implements OnInit {

   //definir un arreglo de propiedades primera propiedad el valor predeterminado del campo, los validadores del campo con 
   //los esquemas ejemplo esquema de correo email 
  fgValidador: FormGroup = this.fb.group({
    'usuario': ['', [Validators.required, Validators.email]],
    'clave': ['',[Validators.required]] 
  });  
  
  constructor(private fb: FormBuilder, 
    private servicioSeguridad: SeguridadService, 
    private router: Router) { }

  //este metodo se ejecuta cuando el componente se inicializa
  
  ngOnInit(): void {
  }

    //crear metodo para obtener los datos que están en usuario y en clave
  IdentificarUsuario(){
    let usuario = this.fgValidador.controls["usuario"].value;
    let clave = this.fgValidador.controls["clave"].value;
    let claveCifrada = cryptoJS.MD5(clave).toString(); 
    this.servicioSeguridad.Identificar(usuario, claveCifrada).subscribe((datos:any) => {
      this.servicioSeguridad.AlmacenarSesion(datos);
      this.router.navigate(["/inicio"]);
    }, (error: any) => {
      // ok
      alert("Datos invalidos")
    })
  }
}
