import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloSede } from 'src/app/modelos/sede.modelo';
import { SedeService } from 'src/app/servicios/sede.service';

@Component({
  selector: 'app-crear-sede',
  templateUrl: './crear-sede.component.html',
  styleUrls: ['./crear-sede.component.css']
})
export class CrearSedeComponent implements OnInit {

  fgValidador : FormGroup=this.fb.group({
    'ciudad':['',[Validators.required]],
    'departamento':['',[Validators.required]],
  })
  constructor(private fb:FormBuilder,
    private servicioSede:SedeService,
    private router:Router) { }

  ngOnInit(): void {
  }

  GuardarSede(){
    let ciudad = this.fgValidador.controls["ciudad"].value;
    let departamento = this.fgValidador.controls["departamento"].value;
    let sede = new ModeloSede();
    sede.ciudad=ciudad;
    sede.departamento=departamento;
    this.servicioSede.CrearSede(sede).subscribe((datos:ModeloSede)=>{
      alert("Almacenado sede correctamente");
      this.router.navigate(["/sedes/buscar-sede"]);
    },(error:any)=>{
      alert("Error almacenando sede");
        })
  }
}
