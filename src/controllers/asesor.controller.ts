import {service} from '@loopback/core';
import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, HttpErrors, param, patch, post, put, requestBody,
  response
} from '@loopback/rest';
import {Llaves} from '../config/llaves';
import {Asesor} from '../models';
import {Credenciales} from '../models/credenciales.model';
import {AsesorRepository} from '../repositories';
import {AutenticacionService} from '../services';
const fetch = require('node-fetch');

export class AsesorController {
  constructor(
    @repository(AsesorRepository)
    public asesorRepository : AsesorRepository,
    @service(AutenticacionService)
    public servicioAutenticacion:AutenticacionService
  ) {}

    @post("/identificarAsesor",
    {
      responses:
      {
        "200":
        {
          description: "Identificacion del asesor"
        }
      }
    })
    async identificarAsesor(
      @requestBody() credenciales : Credenciales
    ){
      let as =  await this.servicioAutenticacion.identificarAsesor(credenciales.usuario, credenciales.clave)
      if(as)
      {
        let token = this.servicioAutenticacion.GenerarTokenAsesorJWT(as);
        return {
          datos: {
            nombre: as.nombre,
            correo: as.correo,
            id: as.id,
            rol:as.rol
          },
          tk: token
        }
      }else
      {
        throw new HttpErrors[401]("Datos Invalidos");
      }
    }


  @post('/asesors')
  @response(200, {
    description: 'Asesor model instance',
    content: {'application/json': {schema: getModelSchemaRef(Asesor)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Asesor, {
            title: 'NewAsesor',
            exclude: ['id'],
          }),
        },
      },
    })
    asesor: Omit<Asesor, 'id'>,
  ): Promise<Asesor> {
    //generar clave y cifrarla
    let clave = this.servicioAutenticacion.GenerarClave();
    let claveCifrada = this.servicioAutenticacion.CifrarClave(clave);
    asesor.clave = claveCifrada;

    let as = await this.asesorRepository.create(asesor);

    //Notificar al asesor por correo
    let destino = asesor.correo;
    let asunto = 'Registro en la plataforma';
    let contenido = `<h1>Bienvenido Asesor ${asesor.nombre},</h1> su nombre de usuario es: ${asesor.correo} y su contraseña es: ${clave}`;
    fetch(`${Llaves.urlServicioNotificaciones}/envio-correo?correo-destino=${destino}&asunto=${asunto}&contenido=${contenido}`)
      .then((data:any)=>{
      console.log(data);
    })
    return as;
  }

  @get('/asesors/count')
  @response(200, {
    description: 'Asesor model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Asesor) where?: Where<Asesor>,
  ): Promise<Count> {
    return this.asesorRepository.count(where);
  }

  @get('/asesors')
  @response(200, {
    description: 'Array of Asesor model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Asesor, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Asesor) filter?: Filter<Asesor>,
  ): Promise<Asesor[]> {
    return this.asesorRepository.find(filter);
  }

  @patch('/asesors')
  @response(200, {
    description: 'Asesor PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Asesor, {partial: true}),
        },
      },
    })
    asesor: Asesor,
    @param.where(Asesor) where?: Where<Asesor>,
  ): Promise<Count> {
    return this.asesorRepository.updateAll(asesor, where);
  }

  @get('/asesors/{id}')
  @response(200, {
    description: 'Asesor model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Asesor, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Asesor, {exclude: 'where'}) filter?: FilterExcludingWhere<Asesor>
  ): Promise<Asesor> {
    return this.asesorRepository.findById(id, filter);
  }

  @patch('/asesors/{id}')
  @response(204, {
    description: 'Asesor PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Asesor, {partial: true}),
        },
      },
    })
    asesor: Asesor,
  ): Promise<void> {
    await this.asesorRepository.updateById(id, asesor);
  }

  @put('/asesors/{id}')
  @response(204, {
    description: 'Asesor PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() asesor: Asesor,
  ): Promise<void> {
    await this.asesorRepository.replaceById(id, asesor);
  }

  @del('/asesors/{id}')
  @response(204, {
    description: 'Asesor DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.asesorRepository.deleteById(id);
  }
}
