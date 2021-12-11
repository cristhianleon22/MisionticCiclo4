import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Sede extends Entity {
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
  ciudad: string;

  @property({
    type: 'string',
    required: true,
  })
  departamento: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Sede>) {
    super(data);
  }
}

export interface SedeRelations {
  // describe navigational properties here
}

export type SedeWithRelations = Sede & SedeRelations;
