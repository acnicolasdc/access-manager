import type { TApplicationResponse } from "@core/types/http";
import type { TRole } from "@access-manager/types";

export interface IRoleRepository {
  getAll(): Promise<TApplicationResponse<TRole[]>>;
}
