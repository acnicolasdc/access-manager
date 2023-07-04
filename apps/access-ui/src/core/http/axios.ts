import axios from "axios";
import { environment } from "@core/constants/env";

const CLIENT_HEADERS = {
  "Content-Type": "application/json",
};

export const httpClient = axios.create({
  headers: CLIENT_HEADERS,
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
