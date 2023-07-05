import type { TApplicationResponse } from "@core/types/http";
import type { TGenericCreatedOrUpdateResponse, TRole } from "@access-manager/types";

export interface IRoleRepository {
  getAll(): Promise<TApplicationResponse<TRole[]>>;
  update(
    params: Omit<TRole, "createdAt" | "updatedAt">
  ): Promise<TApplicationResponse<TGenericCreatedOrUpdateResponse | null>>;
}
