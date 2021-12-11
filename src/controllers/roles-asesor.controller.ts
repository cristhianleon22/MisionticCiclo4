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
  Roles,
  Asesor,
} from '../models';
import {RolesRepository} from '../repositories';

export class RolesAsesorController {
  constructor(
    @repository(RolesRepository) protected rolesRepository: RolesRepository,
  ) { }

  @get('/roles/{id}/asesor', {
    responses: {
      '200': {
        description: 'Roles has one Asesor',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Asesor),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Asesor>,
  ): Promise<Asesor> {
    return this.rolesRepository.asesor(id).get(filter);
  }

  @post('/roles/{id}/asesor', {
    responses: {
      '200': {
        description: 'Roles model instance',
        content: {'application/json': {schema: getModelSchemaRef(Asesor)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Roles.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Asesor, {
            title: 'NewAsesorInRoles',
            exclude: ['id'],
            optional: ['rolesId']
          }),
        },
      },
    }) asesor: Omit<Asesor, 'id'>,
  ): Promise<Asesor> {
    return this.rolesRepository.asesor(id).create(asesor);
  }

  @patch('/roles/{id}/asesor', {
    responses: {
      '200': {
        description: 'Roles.Asesor PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Asesor, {partial: true}),
        },
      },
    })
    asesor: Partial<Asesor>,
    @param.query.object('where', getWhereSchemaFor(Asesor)) where?: Where<Asesor>,
  ): Promise<Count> {
    return this.rolesRepository.asesor(id).patch(asesor, where);
  }

  @del('/roles/{id}/asesor', {
    responses: {
      '200': {
        description: 'Roles.Asesor DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Asesor)) where?: Where<Asesor>,
  ): Promise<Count> {
    return this.rolesRepository.asesor(id).delete(where);
  }
}
