import {Entity, model, property, hasOne} from '@loopback/repository';
import {Administrador} from './administrador.model';
import {Asesor} from './asesor.model';

@model()
export class Roles extends Entity {
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
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;

  @hasOne(() => Administrador)
  administrador: Administrador;

  @hasOne(() => Asesor)
  asesor: Asesor;

  constructor(data?: Partial<Roles>) {
    super(data);
  }
}

export interface RolesRelations {
  // describe navigational properties here
}

export type RolesWithRelations = Roles & RolesRelations;
