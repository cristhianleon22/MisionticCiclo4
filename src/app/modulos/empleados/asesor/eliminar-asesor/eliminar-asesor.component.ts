import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloAsesor } from 'src/app/modelos/asesor.modelo';
import { AsesorService } from 'src/app/servicios/asesor.service';

@Component({
  selector: 'app-eliminar-asesor',
  templateUrl: './eliminar-asesor.component.html',
  styleUrls: ['./eliminar-asesor.component.css']
})
export class EliminarAsesorComponent implements OnInit {

  id:string ='';
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
    private router:Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id =  this.route.snapshot.params["id"]
    this.BuscarAsesor();
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

  EliminarAsesor(){
    this.servicioAsesor.EliminarAsesor(this.id).subscribe((datos:ModeloAsesor)=>{
      alert("Asesor eliminado correctamente");
      this.router.navigate(["/empleados/buscar-asesor"]);
    },(error:any)=>{
      alert("Error al eliminar asesor");
        })
  }

}
