import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloSede } from 'src/app/modelos/sede.modelo';
import { SedeService } from 'src/app/servicios/sede.service';

@Component({
  selector: 'app-eliminar-sede',
  templateUrl: './eliminar-sede.component.html',
  styleUrls: ['./eliminar-sede.component.css']
})
export class EliminarSedeComponent implements OnInit {

  id:string='';
  fgValidador : FormGroup=this.fb.group({
    'id':['',[Validators.required]],
    'ciudad':['',[Validators.required]],
    'departamento':['',[Validators.required]]
  })
  constructor(private fb:FormBuilder,
    private sedeServicio:SedeService,
    private router:Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id =  this.route.snapshot.params["id"]
    this.BuscarSede();
  }
  BuscarSede(){
    this.sedeServicio.ObtenerRegistrosSedePorId(this.id).subscribe((datos: ModeloSede)=>{
      this.fgValidador.controls["id"].setValue(this.id),
      this.fgValidador.controls["ciudad"].setValue(datos.ciudad),
      this.fgValidador.controls["departamento"].setValue(datos.departamento)
    });
  }

  EditarSede(){
    this.sedeServicio.EliminarSede(this.id).subscribe((datos:ModeloSede)=>{
      alert("Sede Eliminada correctamente");
      this.router.navigate(["/sedes/buscar-sede"]);
    },(error:any)=>{
      alert("Error al eliminar sede");
        })
  }

}
