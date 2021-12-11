import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {RentaCarDataSource} from '../datasources';
import {Vehiculo, VehiculoRelations, Solicitud} from '../models';
import {SolicitudRepository} from './solicitud.repository';

export class VehiculoRepository extends DefaultCrudRepository<
  Vehiculo,
  typeof Vehiculo.prototype.id,
  VehiculoRelations
> {

  public readonly solicitud: HasOneRepositoryFactory<Solicitud, typeof Vehiculo.prototype.id>;

  constructor(
    @inject('datasources.renta_car') dataSource: RentaCarDataSource, @repository.getter('SolicitudRepository') protected solicitudRepositoryGetter: Getter<SolicitudRepository>,
  ) {
    super(Vehiculo, dataSource);
    this.solicitud = this.createHasOneRepositoryFactoryFor('solicitud', solicitudRepositoryGetter);
    this.registerInclusionResolver('solicitud', this.solicitud.inclusionResolver);
  }
}
