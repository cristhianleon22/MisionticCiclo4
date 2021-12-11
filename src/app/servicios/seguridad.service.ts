import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModeloIdentificar} from '../modelos/identificar.modelo';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {
  constructor(private http:HttpClient) {
    this.VerificarSesionActual();
  }
  url='http://localhost:3000';
  datosUsuariosEnSesion = new BehaviorSubject<ModeloIdentificar>(new ModeloIdentificar());

  IdentificarAsesor(usuario:string,clave:string): Observable<ModeloIdentificar>{
    return this.http.post<ModeloIdentificar>(`${this.url}/identificarAsesor`,{
      usuario:usuario,
      clave:clave
    },{
      headers: new HttpHeaders({
      })
    })
  }

  IdentificarCliente(usuario:string,clave:string): Observable<ModeloIdentificar>{
    return this.http.post<ModeloIdentificar>(`${this.url}/identificarCliente`,{
      usuario:usuario,
      clave:clave
    },{
      headers: new HttpHeaders({
      })
    })
  }

  IdentificarAdministrador(usuario:string,clave:string): Observable<ModeloIdentificar>{
    return this.http.post<ModeloIdentificar>(`${this.url}/identificarAdministrador`,{
      usuario:usuario,
      clave:clave
    },{
      headers: new HttpHeaders({
      })
    })
  }

  AlmacenarSesion(datos:ModeloIdentificar)
  {
    datos.isIdentificado=true;
    let stringDatos = JSON.stringify(datos);
    localStorage.setItem("datosSesion",stringDatos);
    this.RefrescarDatosSesion(datos);
  }

  ObtenerInformacionSesion()
  {
    let datosString = localStorage.getItem("datosSesion");
    if(datosString)
    {
      let datos = JSON.parse(datosString);
      return datos
    }else{
      return null
    }
  }

  ObtenerToken()
  {
    let datosString = localStorage.getItem("datosSesion");
    if (datosString){
      let datos = JSON.parse(datosString);
      return datos.tk;
    }else{
      return '';
    }
  }
  ObtenerNombre()
  {
    let datosString = localStorage.getItem("datosSesion");
    if (datosString){
      let datos = JSON.parse(datosString);
      let datosDatos = datos.datos;
      let nombre = datosDatos.nombre;
      return nombre;
    }else{
      return '';
    }
  }
  ObtenerRol()
  {
    let datosString = localStorage.getItem("datosSesion");
    if (datosString){
      let datos = JSON.parse(datosString);
      let datosDatos = datos.datos;
      let rol = datosDatos.rol;
      return rol;
    }else{
      return '';
    }
  }

  SeHaIniciadoSesion(){
    let datosString = localStorage.getItem("datosSesion");
    return datosString;
  }

  RefrescarDatosSesion(datos:ModeloIdentificar){
    this.datosUsuariosEnSesion.next(datos);
  }

  ObtenerDatosUsuarioSesion(){
    return this.datosUsuariosEnSesion.asObservable();
  }

  VerificarSesionActual(){
    let datos=this.ObtenerInformacionSesion();
    if(datos){
      this.RefrescarDatosSesion(datos);
    }
  }

  EliminarInformacionSesion()
  {
    localStorage.removeItem("datosSesion");
    this.RefrescarDatosSesion(new ModeloIdentificar());
  }
}
