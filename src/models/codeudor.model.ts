import {Entity, model, property, hasOne} from '@loopback/repository';
import {Solicitud} from './solicitud.model';

@model({settings: {strict: false}})
export class Codeudor extends Entity {
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
  nombre: string;

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
  cartaLaboral: string;

  @property({
    type: 'string',
    required: false,
  })
  clave: string;
  
  @hasOne(() => Solicitud)
  solicitud: Solicitud;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Codeudor>) {
    super(data);
  }
}

export interface CodeudorRelations {
  // describe navigational properties here
}

export type CodeudorWithRelations = Codeudor & CodeudorRelations;
