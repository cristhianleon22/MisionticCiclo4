import {Entity, model, property, hasMany} from '@loopback/repository';
import {Asesor} from './asesor.model';
import {Administrador} from './administrador.model';

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

  @hasMany(() => Asesor)
  asesors: Asesor[];

  @hasMany(() => Administrador)
  administradors: Administrador[];

  constructor(data?: Partial<Roles>) {
    super(data);
  }
}

export interface RolesRelations {
  // describe navigational properties here
}

export type RolesWithRelations = Roles & RolesRelations;
