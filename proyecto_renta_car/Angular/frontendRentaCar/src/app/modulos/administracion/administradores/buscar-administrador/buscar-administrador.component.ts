import { Component, OnInit } from '@angular/core';
import { ModeloAdministrador } from 'src/app/modelos/administrador.modelo';
import { AdministradorService } from 'src/app/servicios/administrador.service';
//import { AdministradorService } from 'src/app/servicios/administrador.service';

@Component({
  selector: 'app-buscar-administrador',
  templateUrl: './buscar-administrador.component.html',
  styleUrls: ['./buscar-administrador.component.css']
})
export class BuscarAdministradorComponent implements OnInit {

listadoRegistros: ModeloAdministrador[] = [];  

  constructor(private administradorServicio: AdministradorService)  {

   }

  ngOnInit(): void {
    this.ObtenerListadoAdministrador();
  }

  ObtenerListadoAdministrador(){
    this.administradorServicio.ObtenerRegistros().subscribe((datos: ModeloAdministrador[]) =>{
      this.listadoRegistros = datos;
    })
   
  }

}
