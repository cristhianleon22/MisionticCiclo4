import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {RentaCarDataSource} from '../datasources';
import {Administrador, AdministradorRelations} from '../models';

export class AdministradorRepository extends DefaultCrudRepository<
  Administrador,
  typeof Administrador.prototype.id,
  AdministradorRelations
> {
  constructor(
    @inject('datasources.renta_car') dataSource: RentaCarDataSource,
  ) {
    super(Administrador, dataSource);
  }
}
