import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import * as cryptoJS from "crypto-js";
import { Router } from '@angular/router';
@Component({
  selector: 'app-identificacion-cliente',
  templateUrl: './identificacion-cliente.component.html',
  styleUrls: ['./identificacion-cliente.component.css']
})
export class IdentificacionClienteComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group(
    {
      'usuario':['',[Validators.required,Validators.email]],
      'clave':['',[Validators.required]]
  });
  constructor(private fb: FormBuilder,
    private serviciosSeguridad: SeguridadService,
    private router:Router
    ) { }

  ngOnInit(): void {
  }

  IdentificarAsesor(){
    let usuario=this.fgValidador.controls["usuario"].value;
    let clave=this.fgValidador.controls["clave"].value;
    let claveCifrada = cryptoJS.MD5(clave).toString();
    this.serviciosSeguridad.IdentificarCliente(usuario,claveCifrada).subscribe((datos:any)=>{
    this.serviciosSeguridad.AlmacenarSesion(datos);
    },(error:any)=>{
      //KO
      alert("Datos Invalidos ")
    })
    this.router.navigate(['/inicio']);
  }
}
