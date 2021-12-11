import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Codeudor} from '../models';
import {CodeudorRepository} from '../repositories';
import {service} from '@loopback/core';
import {AutenticacionService} from '../services';
import { Llaves } from '../config/llaves';
const fetch = require('node-fetch');

export class CodeudorController {
  constructor(
    @repository(CodeudorRepository)
    public codeudorRepository : CodeudorRepository,
    @service(AutenticacionService)
    public servicioAutenticacion:AutenticacionService
  ) {}

  @post('/codeudors')
  @response(200, {
    description: 'Codeudor model instance',
    content: {'application/json': {schema: getModelSchemaRef(Codeudor)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Codeudor, {
            title: 'NewCodeudor',
            exclude: ['id'],
          }),
        },
      },
    })
    codeudor: Omit<Codeudor, 'id'>,
  ): Promise<Codeudor> {
    //generar clave y cifrarla
    let clave = this.servicioAutenticacion.GenerarClave();
    let claveCifrada = this.servicioAutenticacion.CifrarClave(clave);
    codeudor.clave = claveCifrada;

    let cl = await this.codeudorRepository.create(codeudor);
    
    //Notificar al cliente por correo
    let destino = codeudor.correo;
    let asunto = 'Registro en la plataforma';
    let contenido = `Hola ${codeudor.nombre}, su nombre de usuario es: ${codeudor.correo} y su contraseña es: ${clave}`;
    fetch(`${Llaves.urlServicioNotificaciones}/envio-correo?correo-destino=${destino}&asunto=${asunto}&contenido=${contenido}`)
      .then((data:any)=>{
      console.log(data);
    })
    /*
    //Notificar al cliente por sms
    let telefonoDestino = codeudor.telefono;
    let mensaje = `Hola ${codeudor.nombre}, su nombre de usuario es: ${codeudor.correo} y su contraseña es: ${clave}`;
    fetch(`http://127.0.0.1:5000/sms?mensaje=${mensaje}&telefono=${telefonoDestino}`)
      .then((data:any)=>{
      console.log(data);
    })
    */
    return cl;
  }

  @get('/codeudors/count')
  @response(200, {
    description: 'Codeudor model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Codeudor) where?: Where<Codeudor>,
  ): Promise<Count> {
    return this.codeudorRepository.count(where);
  }

  @get('/codeudors')
  @response(200, {
    description: 'Array of Codeudor model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Codeudor, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Codeudor) filter?: Filter<Codeudor>,
  ): Promise<Codeudor[]> {
    return this.codeudorRepository.find(filter);
  }

  @patch('/codeudors')
  @response(200, {
    description: 'Codeudor PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Codeudor, {partial: true}),
        },
      },
    })
    codeudor: Codeudor,
    @param.where(Codeudor) where?: Where<Codeudor>,
  ): Promise<Count> {
    return this.codeudorRepository.updateAll(codeudor, where);
  }

  @get('/codeudors/{id}')
  @response(200, {
    description: 'Codeudor model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Codeudor, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Codeudor, {exclude: 'where'}) filter?: FilterExcludingWhere<Codeudor>
  ): Promise<Codeudor> {
    return this.codeudorRepository.findById(id, filter);
  }

  @patch('/codeudors/{id}')
  @response(204, {
    description: 'Codeudor PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Codeudor, {partial: true}),
        },
      },
    })
    codeudor: Codeudor,
  ): Promise<void> {
    await this.codeudorRepository.updateById(id, codeudor);
  }

  @put('/codeudors/{id}')
  @response(204, {
    description: 'Codeudor PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() codeudor: Codeudor,
  ): Promise<void> {
    await this.codeudorRepository.replaceById(id, codeudor);
  }

  @del('/codeudors/{id}')
  @response(204, {
    description: 'Codeudor DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.codeudorRepository.deleteById(id);
  }
}
