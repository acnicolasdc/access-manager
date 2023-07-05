import type { TApplicationResponse } from "@core/types/http";
import type { IRoleRepository } from "@domain/repository/roleRepository";
import type {
  TGenericCreatedOrUpdateResponse,
  TRole,
} from "@access-manager/types";

export interface IUpdateUseCase {
  invoke: (
    params: Omit<TRole, "createdAt" | "updatedAt">
  ) => Promise<TApplicationResponse<TGenericCreatedOrUpdateResponse | null>>;
}
export class Update implements IUpdateUseCase {
  private updateRepo: IRoleRepository;
  constructor(_updateRepo: IRoleRepository) {
    this.updateRepo = _updateRepo;
  }
  async invoke(params: Omit<TRole, "createdAt" | "updatedAt">) {
    return this.updateRepo.update(params);
  }
}
