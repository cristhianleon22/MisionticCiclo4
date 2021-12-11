import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {RentaCarDataSource} from '../datasources';
import {Solicitud, SolicitudRelations} from '../models';

export class SolicitudRepository extends DefaultCrudRepository<
  Solicitud,
  typeof Solicitud.prototype.id,
  SolicitudRelations
> {
  constructor(
    @inject('datasources.renta_car') dataSource: RentaCarDataSource,
  ) {
    super(Solicitud, dataSource);
  }
}
