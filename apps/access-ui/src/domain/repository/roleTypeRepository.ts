import type { TApplicationResponse } from "@core/types/http";
import type { TRoleType } from "@access-manager/types";

export interface IRoleTypeRepository {
  getAll(): Promise<TApplicationResponse<TRoleType[]>>;
}
