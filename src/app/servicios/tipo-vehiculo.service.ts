import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloTipoVehiculo } from '../modelos/tipo-vehiculo.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class TipoVehiculoService {
  url ='http://localhost:3000';
  token:string = '';

  constructor(private Http:HttpClient, private seguridadServicio:SeguridadService) {
      this.token=this.seguridadServicio.ObtenerToken();
   }

  ObtenerRegistrosTipoVehiculo():Observable<ModeloTipoVehiculo[]>{
    return this.Http.get<ModeloTipoVehiculo[]>(`${this.url}/tipo-vehiculos`)
  }

  ObtenerRegistrosTipoVehiculoPorId(id:string):Observable<ModeloTipoVehiculo>{
    return this.Http.get<ModeloTipoVehiculo>(`${this.url}/tipo-vehiculos/${id}`)
  }

  CrearTipoVehiculo(tipoVehiculo:ModeloTipoVehiculo):Observable<ModeloTipoVehiculo>
  {
    return this.Http.post<ModeloTipoVehiculo>(`${this.url}/tipo-vehiculos`,tipoVehiculo,{
      headers: new HttpHeaders({
        'Authorization':`Bearer ${this.token}`
      })
    })
  }

  ActualizarTipoVehiculo(tipoVehiculo:ModeloTipoVehiculo):Observable<ModeloTipoVehiculo>
  {
    return this.Http.put<ModeloTipoVehiculo>(`${this.url}/tipo-vehiculos/${tipoVehiculo.id}`,tipoVehiculo,{
      headers: new HttpHeaders({
        'Authorization':`Bearer ${this.token}`
      })
    })
  }

  EliminarTipoVehiculo(id:string):Observable<any>
  {
    return this.Http.delete(`${this.url}/tipo-vehiculos/${id}`,{
      headers: new HttpHeaders({
        'Authorization':`Bearer ${this.token}`
      })
    })
  }
}
