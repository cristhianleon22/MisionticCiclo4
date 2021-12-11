import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {RentaCarDataSource} from '../datasources';
import {Cliente, ClienteRelations, Solicitud} from '../models';
import {SolicitudRepository} from './solicitud.repository';

export class ClienteRepository extends DefaultCrudRepository<
  Cliente,
  typeof Cliente.prototype.id,
  ClienteRelations
> {

  public readonly solicitud: HasOneRepositoryFactory<Solicitud, typeof Cliente.prototype.id>;

  constructor(
    @inject('datasources.renta_car') dataSource: RentaCarDataSource, @repository.getter('SolicitudRepository') protected solicitudRepositoryGetter: Getter<SolicitudRepository>,
  ) {
    super(Cliente, dataSource);
    this.solicitud = this.createHasOneRepositoryFactoryFor('solicitud', solicitudRepositoryGetter);
    this.registerInclusionResolver('solicitud', this.solicitud.inclusionResolver);
  }
}
