import type { TGenericErrorResponse } from "@access-manager/types";

export type TApplicationResponse<T> = {
  result: T;
} & TGenericErrorResponse
