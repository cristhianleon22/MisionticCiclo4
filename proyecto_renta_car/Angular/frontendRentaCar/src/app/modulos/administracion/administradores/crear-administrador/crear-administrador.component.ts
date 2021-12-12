import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloAdministrador } from 'src/app/modelos/administrador.modelo';
import { AdministradorService } from 'src/app/servicios/administrador.service';

@Component({
  selector: 'app-crear-administrador',
  templateUrl: './crear-administrador.component.html',
  styleUrls: ['./crear-administrador.component.css']
})
export class CrearAdministradorComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    
    'documento': ['', [Validators.required]],
    'nombre': ['', [Validators.required]],
    'apellido': ['', [Validators.required]],
    'direccion': ['', [Validators.required]],
    'telefono': ['', [Validators.required]],
    'correo': ['', [Validators.required]],
    'sede': ['', [Validators.required]],
    'clave': ['', [Validators.required]],
    'roles': ['', [Validators.required]]

  });

  constructor(private fb: FormBuilder,
    private servicioAdministrador: AdministradorService,
    private router: Router ) { }

  ngOnInit(): void {
  }

  GuardarAdministrador()
  {
    let documento = this.fgValidador.controls["documento"].value;
    let nombre = this.fgValidador.controls["nombre"].value;
    let apellido = this.fgValidador.controls["apellido"].value;
    let direccion = this.fgValidador.controls["direccion"].value;
    let telefono = this.fgValidador.controls["telefono"].value;
    let correo = this.fgValidador.controls["correo"].value;
    let sede = this.fgValidador.controls["sede"].value;
    let clave = this.fgValidador.controls["clave"].value;
    let roles = this.fgValidador.controls["roles"].value;
   
    let p = new ModeloAdministrador();
    p.documento = documento;
    p.nombre = nombre;
    p.apellido = apellido;
    p.direccion = direccion;
    p.telefono = telefono;
    p.correo = correo;
    p.sede = sede;
    p.clave = clave;
    p.rolesId = roles;

    alert("VALOR:"+ this.fgValidador.controls["nombre"].value);

    this.servicioAdministrador.CrearAdministrador(p).subscribe((datos: ModeloAdministrador) =>{
       alert("Administrador almacenado correctamente"); 
        this.router.navigate(["./administracion/listar-administrador"])
    }, (error: any) =>{
      alert("Error almacenando el administrador");
    });


    this.servicioAdministrador.CrearAdministrador(new ModeloAdministrador)
    
  }

}
