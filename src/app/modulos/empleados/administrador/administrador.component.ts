import { Component, OnInit } from '@angular/core';
import { SeguridadService } from 'src/app/servicios/seguridad.service';


@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {
  constructor(private seguridadServicio:SeguridadService) { }
  nombre:String='';
  ngOnInit(): void {
   this.nombre= this.seguridadServicio.ObtenerNombre();
  }
}
