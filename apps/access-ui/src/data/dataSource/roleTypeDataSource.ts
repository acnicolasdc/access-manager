import type { TApplicationResponse } from "@core/types/http";
import type { TRoleType } from "@access-manager/types";

export default interface IRoleTypeDataSource {
  getAll(): Promise<TApplicationResponse<TRoleType[]>>;
}
