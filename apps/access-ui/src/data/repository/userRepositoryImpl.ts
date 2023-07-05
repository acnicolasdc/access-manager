import type { TApplicationResponse } from "@core/types/http";
import type { IUserRepository } from "@domain/repository/userRepository";
import type {
  TGenericCreatedOrUpdateResponse,
  TUser,
} from "@access-manager/types";
import IUserDataSource from "@data/dataSource/userDataSource";

export class UserRepositoryImpl implements IUserRepository {
  dataSource: IUserDataSource;

  constructor(_dataSource: IUserDataSource) {
    this.dataSource = _dataSource;
  }
  async update(
    params: Omit<TUser, "createdAt" | "updatedAt">
  ): Promise<TApplicationResponse<TGenericCreatedOrUpdateResponse | null>> {
    return this.dataSource.update(params);
  }
  async create({
    id,
    ...params
  }: Omit<TUser, "createdAt" | "updatedAt">): Promise<
    TApplicationResponse<TGenericCreatedOrUpdateResponse | null>
  > {
    return this.dataSource.create({ ...params });
  }
  async getAll(): Promise<TApplicationResponse<TUser[]>> {
    return this.dataSource.getAll();
  }
}
