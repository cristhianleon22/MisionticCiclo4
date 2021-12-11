import { Component, OnInit } from '@angular/core';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-asesor-home',
  templateUrl: './asesor-home.component.html',
  styleUrls: ['./asesor-home.component.css']
})
export class AsesorHomeComponent implements OnInit {

  constructor(private seguridadServicio:SeguridadService) { }
  nombre:String='';
  ngOnInit(): void {
   this.nombre= this.seguridadServicio.ObtenerNombre();
  }

}
