import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloAsesor } from '../modelos/asesor.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class AsesorService {
  url ='http://localhost:3000';
  token:string = '';

  constructor(private Http:HttpClient, private seguridadServicio:SeguridadService) {
      this.token=this.seguridadServicio.ObtenerToken();
   }

  ObtenerRegistrosAsesor():Observable<ModeloAsesor[]>{
    return this.Http.get<ModeloAsesor[]>(`${this.url}/asesors`)
  }

  ObtenerRegistrosAsesorPorId(id:string):Observable<ModeloAsesor>{
    return this.Http.get<ModeloAsesor>(`${this.url}/asesors/${id}`)
  }

  CrearAsesor(asesor:ModeloAsesor):Observable<ModeloAsesor>
  {
    return this.Http.post<ModeloAsesor>(`${this.url}/asesors`,asesor,{
      headers: new HttpHeaders({
        'Authorization':`Bearer ${this.token}`
      })
    })
  }

  ActualizarAsesor(asesor:ModeloAsesor):Observable<ModeloAsesor>
  {
    return this.Http.put<ModeloAsesor>(`${this.url}/asesors/${asesor.id}`,asesor,{
      headers: new HttpHeaders({
        'Authorization':`Bearer ${this.token}`
      })
    })
  }

  EliminarAsesor(id:string):Observable<any>
  {
    return this.Http.delete(`${this.url}/asesors/${id}`,{
      headers: new HttpHeaders({
        'Authorization':`Bearer ${this.token}`
      })
    })
  }

}
