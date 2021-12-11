import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {RentaCarDataSource} from '../datasources';
import {Asesor, AsesorRelations, Solicitud} from '../models';
import {SolicitudRepository} from './solicitud.repository';

export class AsesorRepository extends DefaultCrudRepository<
  Asesor,
  typeof Asesor.prototype.id,
  AsesorRelations
> {

  public readonly solicituds: HasManyRepositoryFactory<Solicitud, typeof Asesor.prototype.id>;

  constructor(
    @inject('datasources.renta_car') dataSource: RentaCarDataSource, @repository.getter('SolicitudRepository') protected solicitudRepositoryGetter: Getter<SolicitudRepository>,
  ) {
    super(Asesor, dataSource);
    this.solicituds = this.createHasManyRepositoryFactoryFor('solicituds', solicitudRepositoryGetter,);
    this.registerInclusionResolver('solicituds', this.solicituds.inclusionResolver);
  }
}
