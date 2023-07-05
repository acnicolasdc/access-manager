import type { TApplicationResponse } from "@core/types/http";
import type { TRole } from "@access-manager/types";

export default interface IRoleDataSource {
  getAll(): Promise<TApplicationResponse<TRole[]>>;
}
