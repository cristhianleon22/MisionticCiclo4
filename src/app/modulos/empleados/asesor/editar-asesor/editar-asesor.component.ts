import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloAsesor } from 'src/app/modelos/asesor.modelo';
import { ModeloSede } from 'src/app/modelos/sede.modelo';
import { AsesorService } from 'src/app/servicios/asesor.service';
import { SedeService } from 'src/app/servicios/sede.service';

@Component({
  selector: 'app-editar-asesor',
  templateUrl: './editar-asesor.component.html',
  styleUrls: ['./editar-asesor.component.css']
})
export class EditarAsesorComponent implements OnInit {
  id:string ='';
  listadoSedes: ModeloSede[]=[];
  fgValidador: FormGroup =this.fb.group({
    'id':['',[Validators.required]],
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
    private router:Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id =  this.route.snapshot.params["id"]
    this.BuscarAsesor();
    this.ObtenerListadoSedes();
  }

  ObtenerListadoSedes(){
    this.sedeServicio.ObtenerRegistrosSede().subscribe((datos:ModeloSede[])=>{
      this.listadoSedes = datos;
    })
  }
  BuscarAsesor(){
    this.servicioAsesor.ObtenerRegistrosAsesorPorId(this.id).subscribe((datos: ModeloAsesor)=>{
      this.fgValidador.controls["id"].setValue(this.id),
      this.fgValidador.controls["nombre"].setValue(datos.nombre),
      this.fgValidador.controls["apellido"].setValue(datos.apellido),
      this.fgValidador.controls["correo"].setValue(datos.correo),
      this.fgValidador.controls["documento"].setValue(datos.documento),
      this.fgValidador.controls["direccion"].setValue(datos.direccion),
      this.fgValidador.controls["telefono"].setValue(datos.telefono),
      this.fgValidador.controls["sede"].setValue(datos.sede)
    });
  }

  EditarAsesor(){
    let nombre = this.fgValidador.controls["nombre"].value;
    let apellido = this.fgValidador.controls["apellido"].value;
    let correo = this.fgValidador.controls["correo"].value;
    let documento = this.fgValidador.controls["documento"].value;
    let direccion = this.fgValidador.controls["direccion"].value;
    let telefono =this.fgValidador.controls["telefono"].value;
    let sede =this.fgValidador.controls["sede"].value.toString();
    let asesor = new ModeloAsesor();
    asesor.nombre=nombre;
    asesor.apellido=apellido;
    asesor.correo=correo;
    asesor.direccion=direccion;
    asesor.documento=documento;
    asesor.telefono=telefono;
    asesor.sede=sede;
    asesor.id=this.id;
    this.servicioAsesor.ActualizarAsesor(asesor).subscribe((datos:ModeloAsesor)=>{
      alert("Asesor Actualizado correctamente");
      this.router.navigate(["/empleados/buscar-asesor"]);
    },(error:any)=>{
      alert("Error al actualizar asesor");
        })
  }

}
