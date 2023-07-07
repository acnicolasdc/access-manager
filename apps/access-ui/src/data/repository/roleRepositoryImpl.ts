import type { TApplicationResponse } from "@core/types/http";
import type { IRoleRepository } from "@domain/repository/roleRepository";
import type {
  TGenericCreatedOrUpdateResponse,
  TRole,
  TRoleCreate,
  TRoleUpdate,
} from "@access-manager/types";
import IRoleDataSource from "@data/dataSource/roleDataSource";

export class RoleRepositoryImpl implements IRoleRepository {
  dataSource: IRoleDataSource;

  constructor(_dataSource: IRoleDataSource) {
    this.dataSource = _dataSource;
  }
  async getAll(): Promise<TApplicationResponse<TRole[]>> {
    return this.dataSource.getAll();
  }
  async create(
    params: TRoleCreate
  ): Promise<TApplicationResponse<TGenericCreatedOrUpdateResponse | null>> {
    return this.dataSource.create(params);
  }
  async update(
    params: TRoleUpdate
  ): Promise<TApplicationResponse<TGenericCreatedOrUpdateResponse | null>> {
    return this.dataSource.update(params);
  }
}
