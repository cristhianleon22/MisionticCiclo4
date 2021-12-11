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
  Administrador,
} from '../models';
import {RolesRepository} from '../repositories';

export class RolesAdministradorController {
  constructor(
    @repository(RolesRepository) protected rolesRepository: RolesRepository,
  ) { }

  @get('/roles/{id}/administrador', {
    responses: {
      '200': {
        description: 'Roles has one Administrador',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Administrador),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Administrador>,
  ): Promise<Administrador> {
    return this.rolesRepository.administrador(id).get(filter);
  }

  @post('/roles/{id}/administrador', {
    responses: {
      '200': {
        description: 'Roles model instance',
        content: {'application/json': {schema: getModelSchemaRef(Administrador)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Roles.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Administrador, {
            title: 'NewAdministradorInRoles',
            exclude: ['id'],
            optional: ['rolesId']
          }),
        },
      },
    }) administrador: Omit<Administrador, 'id'>,
  ): Promise<Administrador> {
    return this.rolesRepository.administrador(id).create(administrador);
  }

  @patch('/roles/{id}/administrador', {
    responses: {
      '200': {
        description: 'Roles.Administrador PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Administrador, {partial: true}),
        },
      },
    })
    administrador: Partial<Administrador>,
    @param.query.object('where', getWhereSchemaFor(Administrador)) where?: Where<Administrador>,
  ): Promise<Count> {
    return this.rolesRepository.administrador(id).patch(administrador, where);
  }

  @del('/roles/{id}/administrador', {
    responses: {
      '200': {
        description: 'Roles.Administrador DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Administrador)) where?: Where<Administrador>,
  ): Promise<Count> {
    return this.rolesRepository.administrador(id).delete(where);
  }
}
