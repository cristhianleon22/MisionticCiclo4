import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {Roles} from './roles.model';
import {Solicitud} from './solicitud.model';

@model()
export class Asesor extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  documento: string;

  @property({
    type: 'string',
    required: true,
  })
  apellido: string;

  @property({
    type: 'string',
    required: true,
  })
  direccion: string;

  @property({
    type: 'string',
    required: true,
  })
  telefono: string;

  @property({
    type: 'string',
    required: true,
  })
  correo: string;

  @property({
    type: 'string',
    required: true,
  })
  sede: string;

  @property({
    type: 'string',
    required: true,
  })
  clave: string;

  @property({
    type: 'string',
  })
  rolesId?: string;

  @hasMany(() => Solicitud)
  solicituds: Solicitud[];
  /*

  @belongsTo(() => Roles)
  rolesId: string;

  constructor(data?: Partial<Asesor>) {
    super(data);
  }
  */
}

export interface AsesorRelations {
  // describe navigational properties here
}

export type AsesorWithRelations = Asesor & AsesorRelations;
