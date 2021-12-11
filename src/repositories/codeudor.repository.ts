import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {RentaCarDataSource} from '../datasources';
import {Codeudor, CodeudorRelations, Solicitud} from '../models';
import {SolicitudRepository} from './solicitud.repository';

export class CodeudorRepository extends DefaultCrudRepository<
  Codeudor,
  typeof Codeudor.prototype.id,
  CodeudorRelations
> {

  public readonly solicitud: HasOneRepositoryFactory<Solicitud, typeof Codeudor.prototype.id>;

  constructor(
    @inject('datasources.renta_car') dataSource: RentaCarDataSource, @repository.getter('SolicitudRepository') protected solicitudRepositoryGetter: Getter<SolicitudRepository>,
  ) {
    super(Codeudor, dataSource);
    this.solicitud = this.createHasOneRepositoryFactoryFor('solicitud', solicitudRepositoryGetter);
    this.registerInclusionResolver('solicitud', this.solicitud.inclusionResolver);
  }
}
