import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Codeudor,
  Solicitud,
} from '../models';
import {CodeudorRepository} from '../repositories';

export class CodeudorSolicitudController {
  constructor(
    @repository(CodeudorRepository) protected codeudorRepository: CodeudorRepository,
  ) { }

  @get('/codeudors/{id}/solicituds', {
    responses: {
      '200': {
        description: 'Array of Codeudor has many Solicitud',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Solicitud)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Solicitud>,
  ): Promise<Solicitud[]> {
    return this.codeudorRepository.solicituds(id).find(filter);
  }

  @post('/codeudors/{id}/solicituds', {
    responses: {
      '200': {
        description: 'Codeudor model instance',
        content: {'application/json': {schema: getModelSchemaRef(Solicitud)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Codeudor.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Solicitud, {
            title: 'NewSolicitudInCodeudor',
            exclude: ['id'],
            optional: ['codeudorId']
          }),
        },
      },
    }) solicitud: Omit<Solicitud, 'id'>,
  ): Promise<Solicitud> {
    return this.codeudorRepository.solicituds(id).create(solicitud);
  }

  @patch('/codeudors/{id}/solicituds', {
    responses: {
      '200': {
        description: 'Codeudor.Solicitud PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Solicitud, {partial: true}),
        },
      },
    })
    solicitud: Partial<Solicitud>,
    @param.query.object('where', getWhereSchemaFor(Solicitud)) where?: Where<Solicitud>,
  ): Promise<Count> {
    return this.codeudorRepository.solicituds(id).patch(solicitud, where);
  }

  @del('/codeudors/{id}/solicituds', {
    responses: {
      '200': {
        description: 'Codeudor.Solicitud DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Solicitud)) where?: Where<Solicitud>,
  ): Promise<Count> {
    return this.codeudorRepository.solicituds(id).delete(where);
  }
}
