export type TGenericCreatedResponse = {
  id: string;
};

export type TGenericErrorResponse = {
  statusCode: number;
  error: string;
  message?: string[];
};
