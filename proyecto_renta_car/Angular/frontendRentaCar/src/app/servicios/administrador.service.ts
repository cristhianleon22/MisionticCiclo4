import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloAdministrador} from '../modelos/administrador.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  url='http://localhost:3000';
  token: String = '';
  constructor(private http:HttpClient, 
    private seguridadService: SeguridadService) {
    //his.token = this.seguridadService.ObtenerToken();
   }

  ObtenerRegistros(): Observable<ModeloAdministrador[]>{
    return this.http.get<ModeloAdministrador[]>(`${this.url}/administradors`);
  }

  CrearAdministrador(administrador: ModeloAdministrador): Observable<ModeloAdministrador>{
    return this.http.post<ModeloAdministrador>(`${this.url}/administradors`, administrador,{
      headers: new HttpHeaders({
        //'Authorization': `Bearer ${this.token}` 
      })
    }) 
    
  }

  ActualizarAdministrador(administrador: ModeloAdministrador): Observable<ModeloAdministrador>{
    return this.http.put<ModeloAdministrador>(`${this.url}/administradors`, administrador,{
      headers: new HttpHeaders({
       // 'Authorization': `Bearer ${this.token}` 
      })
    }) 
  }

  
  EliminarAdministrador(id: string): Observable<any>{
    return this.http.delete(`${this.url}/administradors/${id}`,{
      headers: new HttpHeaders({
        //'Authorization': `Bearer ${this.token}` 
      })
    }) 
    
  }

}
