import type { TApplicationResponse } from "@core/types/http";
import type { IUserRepository } from "@domain/repository/userRepository";
import type { TUser } from "@access-manager/types";

export interface IGetAllUseCase {
  invoke: () => Promise<TApplicationResponse<TUser[]>>;
}
export class GetAll implements IGetAllUseCase {
  private getAllRepo: IUserRepository;
  constructor(_getAllRepo: IUserRepository) {
    this.getAllRepo = _getAllRepo;
  }
  async invoke() {
    return this.getAllRepo.getAll();
  }
}
