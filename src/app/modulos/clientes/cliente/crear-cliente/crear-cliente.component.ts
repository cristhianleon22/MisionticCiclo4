import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloCliente } from 'src/app/modelos/cliente.modelo';
import { ClienteService } from 'src/app/servicios/cliente.service';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {
  public archivos:any=[];
  fgValidador : FormGroup=this.fb.group({
    'nombre':['',[Validators.required]],
    'apellido':['',[Validators.required]],
    'correo':['',[Validators.required,Validators.email]],
    'documento':['',[Validators.required]],
    'direccion':['',[Validators.required]],
    'telefono':['',[Validators.required]],
    'cartaLaboral':['',[Validators.required]]
  })
  constructor(private fb:FormBuilder,
    private clienteServicio:ClienteService,
    private router:Router) { }

  ngOnInit(): void {
  }

  getFileChange(event: Event): any {
    const archivoCapturado = (event.target as HTMLInputElement).files;
    this.archivos.push(archivoCapturado);
  }

  GuardarCliente(){
    let nombre = this.fgValidador.controls["nombre"].value;
    let apellido = this.fgValidador.controls["apellido"].value;
    let correo = this.fgValidador.controls["correo"].value;
    let documento = this.fgValidador.controls["documento"].value;
    let direccion = this.fgValidador.controls["direccion"].value;
    let telefono =this.fgValidador.controls["telefono"].value;
    let cartaLaboral =this.fgValidador.controls["cartaLaboral"].value;
    let rol = "CLIENTE";
    let cliente = new ModeloCliente();
    cliente.nombre=nombre;
    cliente.apellido=apellido;
    cliente.correo=correo;
    cliente.direccion=direccion;
    cliente.documento=documento;
    cliente.telefono=telefono;
    cliente.cartaLaboral=cartaLaboral;
    cliente.rol=rol;
    this.clienteServicio.CrearCliente(cliente).subscribe((datos:ModeloCliente)=>{
      alert("Almacenado cliente correctamente");
      this.router.navigate(["/seguridad/identificacion-cliente"]);
    },(error:any)=>{
      alert("Error almacenando cliente");
        })
  }



}
