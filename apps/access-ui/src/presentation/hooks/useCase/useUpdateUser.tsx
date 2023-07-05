import { useState } from "react";
import type {
  TGenericCreatedOrUpdateResponse,
  TUser,
} from "@access-manager/types";
import UserApiDataSourceImpl from "@data/dataSource/api/userApiDataSource";
import { UserRepositoryImpl } from "@data/repository/userRepositoryImpl";
import { Update } from "@domain/useCase/user/update";

export default function useUpdateUser() {
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUsers] = useState<TGenericCreatedOrUpdateResponse | null>(
    null
  );

  const updateUserUseCase = new Update(
    new UserRepositoryImpl(new UserApiDataSourceImpl())
  );

  async function updateUser(params: Omit<TUser, "createdAt" | "updatedAt">) {
    setLoading(true);
    const response = await updateUserUseCase.invoke(params);
    setLoading(false);
    setUsers(response.result);
    return response;
  }
  function resetUpdateUser() {
    if (!updateUser) return;
    setLoading(false);
    return setUsers(null);
  }
  return {
    updateUser,
    resetUpdateUser,
    user,
    loading,
  };
}
