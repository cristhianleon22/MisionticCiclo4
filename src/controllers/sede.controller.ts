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
import {Sede} from '../models';
import {SedeRepository} from '../repositories';

export class SedeController {
  constructor(
    @repository(SedeRepository)
    public sedeRepository : SedeRepository,
  ) {}

  @post('/sedes')
  @response(200, {
    description: 'Sede model instance',
    content: {'application/json': {schema: getModelSchemaRef(Sede)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sede, {
            title: 'NewSede',
            exclude: ['id'],
          }),
        },
      },
    })
    sede: Omit<Sede, 'id'>,
  ): Promise<Sede> {
    return this.sedeRepository.create(sede);
  }

  @get('/sedes/count')
  @response(200, {
    description: 'Sede model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Sede) where?: Where<Sede>,
  ): Promise<Count> {
    return this.sedeRepository.count(where);
  }

  @get('/sedes')
  @response(200, {
    description: 'Array of Sede model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Sede, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Sede) filter?: Filter<Sede>,
  ): Promise<Sede[]> {
    return this.sedeRepository.find(filter);
  }

  @patch('/sedes')
  @response(200, {
    description: 'Sede PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sede, {partial: true}),
        },
      },
    })
    sede: Sede,
    @param.where(Sede) where?: Where<Sede>,
  ): Promise<Count> {
    return this.sedeRepository.updateAll(sede, where);
  }

  @get('/sedes/{id}')
  @response(200, {
    description: 'Sede model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Sede, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Sede, {exclude: 'where'}) filter?: FilterExcludingWhere<Sede>
  ): Promise<Sede> {
    return this.sedeRepository.findById(id, filter);
  }

  @patch('/sedes/{id}')
  @response(204, {
    description: 'Sede PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sede, {partial: true}),
        },
      },
    })
    sede: Sede,
  ): Promise<void> {
    await this.sedeRepository.updateById(id, sede);
  }

  @put('/sedes/{id}')
  @response(204, {
    description: 'Sede PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() sede: Sede,
  ): Promise<void> {
    await this.sedeRepository.replaceById(id, sede);
  }

  @del('/sedes/{id}')
  @response(204, {
    description: 'Sede DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.sedeRepository.deleteById(id);
  }
}
