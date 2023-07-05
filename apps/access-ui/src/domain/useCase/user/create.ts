import type { TApplicationResponse } from "@core/types/http";
import type { IUserRepository } from "@domain/repository/userRepository";
import type {
  TGenericCreatedOrUpdateResponse,
  TUser,
} from "@access-manager/types";

export interface ICreateUseCase {
  invoke: (
    params: Omit<TUser, "createdAt" | "updatedAt">
  ) => Promise<TApplicationResponse<TGenericCreatedOrUpdateResponse | null>>;
}
export class Create implements ICreateUseCase {
  private createRepo: IUserRepository;
  constructor(_createRepo: IUserRepository) {
    this.createRepo = _createRepo;
  }
  async invoke(params: Omit<TUser, "createdAt" | "updatedAt">) {
    return this.createRepo.create(params);
  }
}
