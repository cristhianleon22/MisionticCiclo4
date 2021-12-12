import { Component, OnInit } from '@angular/core';
import { ModeloAdministrador } from 'src/app/modelos/administrador.modelo';
import { AdministradorService } from 'src/app/servicios/administrador.service';


@Component({
  selector: 'app-listar-administradores',
  templateUrl: './listar-administradores.component.html',
  styleUrls: ['./listar-administradores.component.css']
})

export class ListarAdministradoresComponent implements OnInit {

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
