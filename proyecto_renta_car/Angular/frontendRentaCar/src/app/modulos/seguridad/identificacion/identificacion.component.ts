import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// const cryptoJS = require("cryptojs"); 

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
    'clave':['',[Validators.required]] 
  });  
  
  constructor(private fb: FormBuilder) { }
  //este metodo se ejecuta cuando el componente se inicializa
  ngOnInit(): void {
  }

    //crear metodo para obtener los datos que están en usuario y en clave
  IdentificarUsuario(){
    
    let usuario = this.fgValidador.controls["usuario"].value;
    let clave = this.fgValidador.controls["clave"].value;
  //  let claveCifrada = cryptoJS.MD5(clave); no funciona Error: src/app/modulos/seguridad/identificacion/identificacion.component.ts:3:18 - error TS2591: Cannot find name 'require'
    alert(usuario)
    alert(clave)
  }

}
