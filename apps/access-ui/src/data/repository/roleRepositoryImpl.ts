import type { TApplicationResponse } from "@core/types/http";
import type { IRoleRepository } from "@domain/repository/roleRepository";
import type { TRole } from "@access-manager/types";
import IRoleDataSource from "@data/dataSource/roleDataSource";

export class RoleRepositoryImpl implements IRoleRepository {
  dataSource: IRoleDataSource;

  constructor(_dataSource: IRoleDataSource) {
    this.dataSource = _dataSource;
  }
  async getAll(): Promise<TApplicationResponse<TRole[]>> {
    return this.dataSource.getAll();
  }
}
