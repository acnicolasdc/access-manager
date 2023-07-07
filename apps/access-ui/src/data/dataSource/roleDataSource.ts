import type { TApplicationResponse } from "@core/types/http";
import type {
  TGenericCreatedOrUpdateResponse,
  TRole,
  TRoleUpdate,
} from "@access-manager/types";

export default interface IRoleDataSource {
  getAll(): Promise<TApplicationResponse<TRole[]>>;
  update(
    params: TRoleUpdate
  ): Promise<TApplicationResponse<TGenericCreatedOrUpdateResponse | null>>;
  create(
    params: Omit<TRole, "createdAt" | "updatedAt" | "id" | "roleType">
  ): Promise<TApplicationResponse<TGenericCreatedOrUpdateResponse | null>>;
}
