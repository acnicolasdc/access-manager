import axios from "axios";

const CLIENT_HEADERS = {
  "Content-Type": "application/json",
};

export const httpClient = axios.create({
  headers: CLIENT_HEADERS,
});
