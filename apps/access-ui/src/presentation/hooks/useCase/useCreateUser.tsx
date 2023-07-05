import { useState } from "react";
import type {
  TGenericCreatedOrUpdateResponse,
  TUser,
} from "@access-manager/types";
import UserApiDataSourceImpl from "@data/dataSource/api/userApiDataSource";
import { UserRepositoryImpl } from "@data/repository/userRepositoryImpl";
import { Create } from "@domain/useCase/user/create";

export default function useCreateUser() {
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUsers] = useState<TGenericCreatedOrUpdateResponse | null>(
    null
  );

  const createUserUseCase = new Create(
    new UserRepositoryImpl(new UserApiDataSourceImpl())
  );

  async function createUser(params: Omit<TUser, "createdAt" | "updatedAt">) {
    setLoading(true);
    const response = await createUserUseCase.invoke(params);
    setLoading(false);
    setUsers(response.result);
    return response;
  }
  function resetCreateUser() {
    if (!createUser) return;
    setLoading(false);
    return setUsers(null);
  }
  return {
    createUser,
    resetCreateUser,
    user,
    loading,
  };
}
