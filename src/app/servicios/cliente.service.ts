import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloCliente } from '../modelos/cliente.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  url ='http://localhost:3000';
  token:string = '';

  constructor(private Http:HttpClient, private seguridadServicio:SeguridadService) {
      this.token=this.seguridadServicio.ObtenerToken();
   }

  ObtenerRegistrosCliente():Observable<ModeloCliente[]>{
    return this.Http.get<ModeloCliente[]>(`${this.url}/clientes`)
  }

  ObtenerRegistrosClientePorId(id:string):Observable<ModeloCliente>{
    return this.Http.get<ModeloCliente>(`${this.url}/clientes/${id}`)
  }

  CrearCliente(asesor:ModeloCliente):Observable<ModeloCliente>
  {
    return this.Http.post<ModeloCliente>(`${this.url}/clientes`,asesor,{
      headers: new HttpHeaders({
        'Authorization':`Bearer ${this.token}`
      })
    })
  }

  ActualizarCliente(asesor:ModeloCliente):Observable<ModeloCliente>
  {
    return this.Http.put<ModeloCliente>(`${this.url}/clientes/${asesor.id}`,asesor,{
      headers: new HttpHeaders({
        'Authorization':`Bearer ${this.token}`
      })
    })
  }

  EliminarCliente(id:string):Observable<any>
  {
    return this.Http.delete(`${this.url}/clientes/${id}`,{
      headers: new HttpHeaders({
        'Authorization':`Bearer ${this.token}`
      })
    })
  }
}
