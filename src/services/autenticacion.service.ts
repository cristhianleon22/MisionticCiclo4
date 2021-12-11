import { /* inject, */ BindingScope, injectable} from '@loopback/core';
import {repository} from '@loopback/repository';
import {Llaves} from '../config/llaves';
import {Administrador, Asesor, Cliente} from '../models';
import {AdministradorRepository, AsesorRepository, ClienteRepository} from '../repositories';
const generador = require("password-generator");
const cryptoJs = require("crypto-js");
const jwt = require("jsonwebtoken");

@injectable({scope: BindingScope.TRANSIENT})
export class AutenticacionService {
  constructor(
    //Repositorio Asesor
    @repository(AsesorRepository)
    public asesorRepository:AsesorRepository,
    //Repositorio Administrador
    @repository(AdministradorRepository)
    public administradorRepository:AdministradorRepository,
    //Repositorio CLiente
    @repository(ClienteRepository)
    public clienteRepository:ClienteRepository
  ) {}

  /*
   * Add service methods here
   */
/*
  Importacion de paquetes para la autenticacion :
  npm i crypto-js = cifra la clave
  npm i password-generator = genera una clave aleatoria
*/
    GenerarClave()
    {
      let clave = generador(10, false);
      return clave;
    }

    CifrarClave(clave: string)
    {
      let claveCifrada = cryptoJs.MD5(clave).toString();
      return claveCifrada;
    }

    identificarAsesor(usuario:string, clave:string)
    {
      try
      {
        //Asesor
        let as = this.asesorRepository.findOne({where: {correo:usuario,clave:clave}});
        if(as)
        {
          return as;
        }
        return false;
      }catch
      {
        return false;
      }
    }

    identificarAdministrador(usuario:string, clave:string)
    {
      try
      {
        //Asesor
        let ad = this.administradorRepository.findOne({where: {correo:usuario,clave:clave}});
        if(ad)
        {
          return ad;
        }
        return false;
      }catch
      {
        return false;
      }
    }

    identificarCliente(usuario:string, clave:string)
    {
      try
      {
        //Asesor
        let ad = this.clienteRepository.findOne({where: {correo:usuario,clave:clave}});
        if(ad)
        {
          return ad;
        }
        return false;
      }catch
      {
        return false;
      }
    }

    GenerarTokenAsesorJWT(asesor:Asesor)
      {
        let token = jwt.sign(
          {
            data:
            {
              id:asesor.id,
              correo:asesor.correo,
              nombre: asesor.nombre+" "+asesor.apellido,
              rol: asesor.rol
            }
          },
        Llaves.claveJWT);
        return token;
      }

      GenerarTokenAdministradorJWT(administrador:Administrador)
      {
        let token = jwt.sign(
          {
            data:
            {
              id:administrador.id,
              correo:administrador.correo,
              nombre: administrador.nombre+" "+administrador.apellido,
              rol: administrador.rol
            }
          },
        Llaves.claveJWT);
        return token;
      }

      GenerarTokenClienteJWT(cliente:Cliente)
      {
        let token = jwt.sign(
          {
            data:
            {
              id:cliente.id,
              correo:cliente.correo,
              nombre: cliente.nombre+" "+cliente.apellido,
              rol: cliente.rol
            }
          },
        Llaves.claveJWT);
        return token;
      }

  validarTokenJWT(token:string)
  {
    try{
      let datos = jwt.verify(token, Llaves.claveJWT);
      return datos;
    }catch{
      return false;
    }
  }
}
