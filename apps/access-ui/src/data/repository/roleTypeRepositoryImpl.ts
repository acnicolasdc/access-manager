import type { TApplicationResponse } from "@core/types/http";
import type { IRoleTypeRepository } from "@domain/repository/roleTypeRepository";
import type { TRoleType } from "@access-manager/types";
import IRoleTypeDataSource from "@data/dataSource/roleTypeDataSource";

export class RoleTypeRepositoryImpl implements IRoleTypeRepository {
  dataSource: IRoleTypeDataSource;

  constructor(_dataSource: IRoleTypeDataSource) {
    this.dataSource = _dataSource;
  }
  async getAll(): Promise<TApplicationResponse<TRoleType[]>> {
    return this.dataSource.getAll();
  }
}
