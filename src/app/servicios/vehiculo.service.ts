import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloVehiculo } from '../modelos/vehiculo.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
  url ='http://localhost:3000';
  token:string = '';

  constructor(private Http:HttpClient, private seguridadServicio:SeguridadService) {
      this.token=this.seguridadServicio.ObtenerToken();
   }

  ObtenerRegistrosVehiculo():Observable<ModeloVehiculo[]>{
    return this.Http.get<ModeloVehiculo[]>(`${this.url}/vehiculos`)
  }

  ObtenerRegistrosVehiculoPorId(id:string):Observable<ModeloVehiculo>{
    return this.Http.get<ModeloVehiculo>(`${this.url}/vehiculos/${id}`)
  }

  CrearVehiculo(asesor:ModeloVehiculo):Observable<ModeloVehiculo>
  {
    return this.Http.post<ModeloVehiculo>(`${this.url}/vehiculos`,asesor,{
      headers: new HttpHeaders({
        'Authorization':`Bearer ${this.token}`
      })
    })
  }

  ActualizarVehiculo(asesor:ModeloVehiculo):Observable<ModeloVehiculo>
  {
    return this.Http.put<ModeloVehiculo>(`${this.url}/vehiculos/${asesor.id}`,asesor,{
      headers: new HttpHeaders({
        'Authorization':`Bearer ${this.token}`
      })
    })
  }

  EliminarVehiculo(id:string):Observable<any>
  {
    return this.Http.delete(`${this.url}/vehiculos/${id}`,{
      headers: new HttpHeaders({
        'Authorization':`Bearer ${this.token}`
      })
    })
  }
}
