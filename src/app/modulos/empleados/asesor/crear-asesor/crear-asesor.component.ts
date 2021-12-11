import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { ModeloAsesor } from 'src/app/modelos/asesor.modelo';
import { ModeloSede } from 'src/app/modelos/sede.modelo';
import { AsesorService } from 'src/app/servicios/asesor.service';
import { SedeService } from 'src/app/servicios/sede.service';


@Component({
  selector: 'app-crear-asesor',
  templateUrl: './crear-asesor.component.html',
  styleUrls: ['./crear-asesor.component.css']
})
export class CrearAsesorComponent implements OnInit {

  listadoSedes: ModeloSede[]=[];
  fgValidador : FormGroup=this.fb.group({
    'nombre':['',[Validators.required]],
    'apellido':['',[Validators.required]],
    'correo':['',[Validators.required,Validators.email]],
    'documento':['',[Validators.required]],
    'direccion':['',[Validators.required]],
    'telefono':['',[Validators.required]],
    'sede':['',[Validators.required]]
  })
  constructor(private fb:FormBuilder,
    private servicioAsesor:AsesorService,
    private sedeServicio:SedeService,
    private router:Router) { }

  ngOnInit(): void {
    this.ObtenerListadoSedes()
  }

  ObtenerListadoSedes(){
    this.sedeServicio.ObtenerRegistrosSede().subscribe((datos:ModeloSede[])=>{
      this.listadoSedes = datos;
    })
  }
  GuardarAsesor(){
    let nombre = this.fgValidador.controls["nombre"].value;
    let apellido = this.fgValidador.controls["apellido"].value;
    let correo = this.fgValidador.controls["correo"].value;
    let documento = this.fgValidador.controls["documento"].value;
    let direccion = this.fgValidador.controls["direccion"].value;
    let telefono =this.fgValidador.controls["telefono"].value;
    let sede =this.fgValidador.controls["sede"].value.toString();
    let rol = "ASESOR";
    let asesor = new ModeloAsesor();
    asesor.nombre=nombre;
    asesor.apellido=apellido;
    asesor.correo=correo;
    asesor.direccion=direccion;
    asesor.documento=documento;
    asesor.telefono=telefono;
    asesor.sede=sede;
    asesor.rol=rol;
    this.servicioAsesor.CrearAsesor(asesor).subscribe((datos:ModeloAsesor)=>{
      alert("Almacenado asesor correctamente");
      this.router.navigate(["/empleados/buscar-asesor"]);
    },(error:any)=>{
      alert("Error almacenando asesor");
        })
  }

}
