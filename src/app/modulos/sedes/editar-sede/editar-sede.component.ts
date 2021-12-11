import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloSede } from 'src/app/modelos/sede.modelo';
import { SedeService } from 'src/app/servicios/sede.service';

@Component({
  selector: 'app-editar-sede',
  templateUrl: './editar-sede.component.html',
  styleUrls: ['./editar-sede.component.css']
})
export class EditarSedeComponent implements OnInit {

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
    let ciudad = this.fgValidador.controls["ciudad"].value;
    let departamento = this.fgValidador.controls["departamento"].value;
    let sede = new ModeloSede();
    sede.ciudad=ciudad;
    sede.departamento=departamento;
    sede.id=this.id;
    this.sedeServicio.ActualizarSede(sede).subscribe((datos:ModeloSede)=>{
      alert("Sede Actualizado correctamente");
      this.router.navigate(["/sedes/buscar-sede"]);
    },(error:any)=>{
      alert("Error al actualizar sede");
        })
  }

}
