import { Component, OnInit } from '@angular/core';
import { ModeloSede } from 'src/app/modelos/sede.modelo';
import { SedeService } from 'src/app/servicios/sede.service';

@Component({
  selector: 'app-buscar-sede',
  templateUrl: './buscar-sede.component.html',
  styleUrls: ['./buscar-sede.component.css']
})
export class BuscarSedeComponent implements OnInit {

  listadoSedes: ModeloSede[]=[];
  constructor(private sedeServicio:SedeService) { }

  ngOnInit(): void {
    this.ObtenerListadoSedes()
  }
  ObtenerListadoSedes(){
    this.sedeServicio.ObtenerRegistrosSede().subscribe((datos:ModeloSede[])=>{
      this.listadoSedes = datos;
    })
  }
}
