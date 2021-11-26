import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import { repository } from '@loopback/repository';
import { Administrador } from '../models';
import { AdministradorRepository } from '../repositories';
import { Llaves} from '../config/llaves';
const generador = require("password-generator");
const cryptoJS = require("crypto-js"); 
const jwt = require("jsonwebtoken");

@injectable({scope: BindingScope.TRANSIENT})
export class AutenticacionService {
  constructor(
    @repository(AdministradorRepository) 
    public administradorRepository: AdministradorRepository) 
    {}

  GenerarClave(){
    let clave = generador(8, false);
    return clave;
  }

  cifrarClave(clave: string) {
    let claveCifrada = cryptoJS.MD5(clave).toString();
    return claveCifrada;

  }
// codigo generado 22-11

  IdentificarAdministrador(correo: string, clave: string){
    try{
        let p = this.administradorRepository.findOne({where: {correo: correo, clave: clave}});
        
        if (p){
            return p;
        }
        return false;
    }catch{
        return false;
    }

  }

  GenerarTokenJWT(administrador: Administrador){
    let token = jwt.sign({
      data:{
        id: administrador.id,
        documento: administrador.documento,
        nombre: administrador.nombre,
        apellido: administrador.apellido,
        direccion: administrador.direccion,
        telefono: administrador.telefono,
        correo: administrador.correo,
        sede: administrador.sede,
        clave: administrador.clave,
        roles: administrador.rolesId

      }
    },
    Llaves.claveJWT);
    return token;
  }

  ValidarTokenJWT(token: string){
    try{
      let datos = jwt.verify(token, Llaves.claveJWT);
      return datos;
    }catch{
     return false; 
    } 
  }
  
}
