import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {RentaCarDataSource} from '../datasources';
import {Sede, SedeRelations} from '../models';

export class SedeRepository extends DefaultCrudRepository<
  Sede,
  typeof Sede.prototype.id,
  SedeRelations
> {
  constructor(
    @inject('datasources.renta_car') dataSource: RentaCarDataSource,
  ) {
    super(Sede, dataSource);
  }
}
