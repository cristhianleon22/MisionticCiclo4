import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ModeloAdministrador } from 'src/app/modelos/administrador.modelo';
import { AdministradorService } from 'src/app/servicios/administrador.service';

@Component({
  selector: 'app-eliminar-administrador',
  templateUrl: './eliminar-administrador.component.html',
  styleUrls: ['./eliminar-administrador.component.css']
})
export class EliminarAdministradorComponent implements OnInit {

  id:string = '';
  fgValidador: FormGroup = this.fb.group({
    
    'id': ['', [Validators.required]],
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
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarAdministrador();
  }

  BuscarAdministrador(){
    this.servicioAdministrador.ObtenerRegistroPorId(this.id).subscribe((datos: ModeloAdministrador) =>{
      this.fgValidador.controls["id"].setValue(this.id);
      this.fgValidador.controls["documento"].setValue(datos.documento);
      this.fgValidador.controls["nombre"].setValue(datos.nombre);
      this.fgValidador.controls["apellido"].setValue(datos.apellido);
      this.fgValidador.controls["direccion"].setValue(datos.direccion);
      this.fgValidador.controls["telefono"].setValue(datos.telefono);
      this.fgValidador.controls["correo"].setValue(datos.correo);
      this.fgValidador.controls["sede"].setValue(datos.sede);
      this.fgValidador.controls["clave"].setValue(datos.clave);
      this.fgValidador.controls["roles"].setValue(datos.rolesId);
    });
  }

  BorrarAdministrador()
  {
    let documento = this.fgValidador.controls["documento"].value;
    let nombre = this.fgValidador.controls["nombre"].value;
    let apellido = this.fgValidador.controls["apellido"].value;
    let direccion = this.fgValidador.controls["direccion"].value;
    let telefono = this.fgValidador.controls["telefono"].value;
    let correo = this.fgValidador.controls["correo"].value;
    let sede = this.fgValidador.controls["sede"].value;
    let clave = this.fgValidador.controls["clave"].value;
    let rol = this.fgValidador.controls["roles"].value;

    
   
    let p = new ModeloAdministrador();
    p.documento = documento;
    p.nombre = nombre;
    p.apellido = apellido;
    p.direccion = direccion;
    p.telefono = telefono;
    p.correo = correo;
    p.sede = sede;
    p.clave = clave;
    p.rolesId = rol;
    p.id = this.id;

   this.servicioAdministrador.EliminarAdministrador(p.id).subscribe((datos: ModeloAdministrador) =>{
       alert("Administrador eliminado correctamente"); 
        this.router.navigate(["./administracion/listar-administrador"])
    }, (error: any) =>{
      alert("Error eliminando el administrador");
    });


    this.servicioAdministrador.CrearAdministrador(new ModeloAdministrador)
    
  }

}
