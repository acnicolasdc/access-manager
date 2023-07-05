import type { TApplicationResponse } from "@core/types/http";
import type {
  TUser,
  TGenericCreatedOrUpdateResponse,
} from "@access-manager/types";

export interface IUserRepository {
  getAll(): Promise<TApplicationResponse<TUser[]>>;
  update(
    params: Omit<TUser, "createdAt" | "updatedAt">
  ): Promise<TApplicationResponse<TGenericCreatedOrUpdateResponse | null>>;
}
