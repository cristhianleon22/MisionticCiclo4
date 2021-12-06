import {AuthenticationStrategy} from '@loopback/authentication';
import { service } from '@loopback/core';
import { HttpErrors,Request } from '@loopback/rest';
import {UserProfile}from '@loopback/security';
import parseBearerToken from 'parse-bearer-token';
import { AutenticacionService } from '../services';

export class EstrategiaAdministrador implements AuthenticationStrategy {
  name: string = 'admin';

  constructor(
      @service(AutenticacionService)
      public servicioAutenticacion:AutenticacionService
  ){

  }

  async authenticate(request: Request): Promise<UserProfile | undefined> {
  let token = parseBearerToken(request);
  if (token){

    let datos = this.servicioAutenticacion.ValidarTokenJWT(token);
    if(datos){
        if(datos){//reoles para validar
        let rol: UserProfile = Object.assign({
            rolesid: datos.data.rolesId
        });
        return rol;
        
        }  

    }else{
        throw new HttpErrors[401]("el token no es valido.")
    }

  }else{
      throw new HttpErrors[401]("no se ha incluido un token en la solicitud.")
  }
  }
}
