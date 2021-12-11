import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloSede } from '../modelos/sede.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class SedeService {

  url ='http://localhost:3000';
  token:string = '';
  constructor(private Http:HttpClient, private seguridadServicio:SeguridadService) {
    this.token=this.seguridadServicio.ObtenerToken()
  }

  ObtenerRegistrosSede():Observable<ModeloSede[]>{
    return this.Http.get<ModeloSede[]>(`${this.url}/sedes`)
  }

  ObtenerRegistrosSedePorId(id:string):Observable<ModeloSede>{
    return this.Http.get<ModeloSede>(`${this.url}/sedes/${id}`)
  }

  CrearSede(sede:ModeloSede):Observable<ModeloSede>
  {
    return this.Http.post<ModeloSede>(`${this.url}/sedes`,sede,{
      headers: new HttpHeaders({
        'Authorization':`Bearer ${this.token}`
      })
    })
  }

  ActualizarSede(sede:ModeloSede):Observable<ModeloSede>
  {
    return this.Http.put<ModeloSede>(`${this.url}/sedes/${sede.id}`,sede,{
      headers: new HttpHeaders({
        'Authorization':`Bearer ${this.token}`
      })
    })
  }

  EliminarSede(id:string):Observable<any>
  {
    return this.Http.delete(`${this.url}/sedes/${id}`,{
      headers: new HttpHeaders({
        'Authorization':`Bearer ${this.token}`
      })
    })
  }
}
