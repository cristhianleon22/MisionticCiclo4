import {Entity, model, property, hasOne} from '@loopback/repository';
import {Vehiculo} from './vehiculo.model';

@model()
export class Solicitud extends Entity {
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
  estado: string;

  @property({
    type: 'string',
    required: true,
  })
  tipo: string;

  @property({
    type: 'string',
    required: true,
  })
  fechasolicitud: string;

  @property({
    type: 'string',
    required: true,
  })
  nota: string;

  @hasOne(() => Vehiculo)
  vehiculo: Vehiculo;

  @property({
    type: 'string',
  })
  clienteId?: string;

  @property({
    type: 'string',
  })
  codeudorId?: string;

  @property({
    type: 'string',
  })
  asesorId?: string;

  constructor(data?: Partial<Solicitud>) {
    super(data);
  }
}

export interface SolicitudRelations {
  // describe navigational properties here
}

export type SolicitudWithRelations = Solicitud & SolicitudRelations;
