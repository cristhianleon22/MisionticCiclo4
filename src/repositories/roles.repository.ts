import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {RentaCarDataSource} from '../datasources';
import {Roles, RolesRelations, Administrador, Asesor} from '../models';
import {AdministradorRepository} from './administrador.repository';
import {AsesorRepository} from './asesor.repository';

export class RolesRepository extends DefaultCrudRepository<
  Roles,
  typeof Roles.prototype.id,
  RolesRelations
> {

  public readonly administrador: HasOneRepositoryFactory<Administrador, typeof Roles.prototype.id>;

  public readonly asesor: HasOneRepositoryFactory<Asesor, typeof Roles.prototype.id>;

  constructor(
    @inject('datasources.renta_car') dataSource: RentaCarDataSource, @repository.getter('AdministradorRepository') protected administradorRepositoryGetter: Getter<AdministradorRepository>, @repository.getter('AsesorRepository') protected asesorRepositoryGetter: Getter<AsesorRepository>,
  ) {
    super(Roles, dataSource);
    this.asesor = this.createHasOneRepositoryFactoryFor('asesor', asesorRepositoryGetter);
    this.registerInclusionResolver('asesor', this.asesor.inclusionResolver);
    this.administrador = this.createHasOneRepositoryFactoryFor('administrador', administradorRepositoryGetter);
    this.registerInclusionResolver('administrador', this.administrador.inclusionResolver);
  }
}
