import type { TApplicationResponse } from "@core/types/http";
import type { TGenericCreatedOrUpdateResponse, TRole, TRoleCreate, TRoleUpdate } from "@access-manager/types";

export interface IRoleRepository {
  getAll(): Promise<TApplicationResponse<TRole[]>>;
  update(
    params: TRoleUpdate
  ): Promise<TApplicationResponse<TGenericCreatedOrUpdateResponse | null>>;
  create(
    params: TRoleCreate
  ): Promise<TApplicationResponse<TGenericCreatedOrUpdateResponse | null>>;
}
