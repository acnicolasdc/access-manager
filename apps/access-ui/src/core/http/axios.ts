import axios from "axios";
import { environment } from "@core/constants/env";
import { DEFAULT_SESSION_LOCAL_STORAGE_KEY } from "@presentation/providers/providerUserSession/providerUserSession.constants";

const CLIENT_HEADERS = {
  "Content-Type": "application/json",
};
const WIN: Window = window;
export const httpClient = axios.create({
  headers: CLIENT_HEADERS,
  baseURL: environment.apiBase,
});

httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      localStorage.removeItem(DEFAULT_SESSION_LOCAL_STORAGE_KEY);
      WIN.location.replace("/");
    }
    return error.response;
  }
);
httpClient.interceptors.request.use((config) => {
  const interceptedConfig = config;
  interceptedConfig.headers.Authorization = `Bearer ${localStorage.getItem(
    DEFAULT_SESSION_LOCAL_STORAGE_KEY
  )}`;
  return interceptedConfig;
});

export const httpStandAloneClient = axios.create({
  headers: CLIENT_HEADERS,
  baseURL: environment.apiBase,
});
httpStandAloneClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      console.log("error");
    }
    return error.response;
  }
);
