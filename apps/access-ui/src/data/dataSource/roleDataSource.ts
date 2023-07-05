import type { TApplicationResponse } from "@core/types/http";
import type {
  TGenericCreatedOrUpdateResponse,
  TRole,
} from "@access-manager/types";

export default interface IRoleDataSource {
  getAll(): Promise<TApplicationResponse<TRole[]>>;
  update(
    params: Omit<TRole, "createdAt" | "updatedAt">
  ): Promise<TApplicationResponse<TGenericCreatedOrUpdateResponse | null>>;
  create(
    params: Omit<TRole, "createdAt" | "updatedAt" | "id">
  ): Promise<TApplicationResponse<TGenericCreatedOrUpdateResponse | null>>;
}
