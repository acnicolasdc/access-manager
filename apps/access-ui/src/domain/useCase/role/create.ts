import type { TApplicationResponse } from "@core/types/http";
import type { IRoleRepository } from "@domain/repository/roleRepository";
import type {
  TGenericCreatedOrUpdateResponse,
  TRole,
} from "@access-manager/types";

export interface ICreateUseCase {
  invoke: (
    params: Omit<TRole, "createdAt" | "updatedAt">
  ) => Promise<TApplicationResponse<TGenericCreatedOrUpdateResponse | null>>;
}
export class Create implements ICreateUseCase {
  private createRepo: IRoleRepository;
  constructor(_createRepo: IRoleRepository) {
    this.createRepo = _createRepo;
  }
  async invoke(params: Omit<TRole, "createdAt" | "updatedAt">) {
    return this.createRepo.create(params);
  }
}
