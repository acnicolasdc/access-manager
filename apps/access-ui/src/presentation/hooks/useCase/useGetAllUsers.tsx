import { useState } from "react";
import type { TUser } from "@access-manager/types";
import UserApiDataSourceImpl from "@data/dataSource/api/userApiDataSource";
import { UserRepositoryImpl } from "@data/repository/userRepositoryImpl";
import { GetAll } from "@domain/useCase/user/getAll";

export default function useGetAllUsers() {
  const [loading, setLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<TUser[]>([]);

  const getAllUseCase = new GetAll(
    new UserRepositoryImpl(new UserApiDataSourceImpl())
  );

  async function getAllUsers() {
    setLoading(true);
    const response = await getAllUseCase.invoke();
    setLoading(false);
    setUsers(response.result);
    return response;
  }
  function resetGetAllUsers() {
    if (!getAllUsers) return;
    setLoading(false);
    return setUsers([]);
  }
  return {
    getAllUsers,
    resetGetAllUsers,
    users,
    loading,
  };
}
