import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {RentaCarDataSource} from '../datasources';
import {TipoVehiculo, TipoVehiculoRelations, Vehiculo} from '../models';
import {VehiculoRepository} from './vehiculo.repository';

export class TipoVehiculoRepository extends DefaultCrudRepository<
  TipoVehiculo,
  typeof TipoVehiculo.prototype.id,
  TipoVehiculoRelations
> {

  public readonly vehiculos: HasManyRepositoryFactory<Vehiculo, typeof TipoVehiculo.prototype.id>;

  constructor(
    @inject('datasources.renta_car') dataSource: RentaCarDataSource, @repository.getter('VehiculoRepository') protected vehiculoRepositoryGetter: Getter<VehiculoRepository>,
  ) {
    super(TipoVehiculo, dataSource);
    this.vehiculos = this.createHasManyRepositoryFactoryFor('vehiculos', vehiculoRepositoryGetter,);
    this.registerInclusionResolver('vehiculos', this.vehiculos.inclusionResolver);
  }
}
