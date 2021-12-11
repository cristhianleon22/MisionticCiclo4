import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloAdministrador } from '../modelos/administrador.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {
  url ='http://localhost:3000';
  token:string = '';

  constructor(private Http:HttpClient, private seguridadServicio:SeguridadService) {
      this.token=this.seguridadServicio.ObtenerToken();
   }

  ObtenerRegistrosAdmin():Observable<ModeloAdministrador[]>{
    return this.Http.get<ModeloAdministrador[]>(`${this.url}/administradors`)
  } 
}
