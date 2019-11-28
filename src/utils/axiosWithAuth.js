import axios from "axios";
import refreshAccessToken from "./refreshAccessToken";

export const axiosWithAuth = () => {
  let instance = axios.create({
    baseURL: "https://us-central1-form-builder-97c3a.cloudfunctions.net/api"
  });
  instance.interceptors.request.use(async config => {
    const token = localStorage.getItem("token");
    const refreshedToken = await refreshAccessToken(token);

    config.headers["Authorization"] = `Bearer ${refreshedToken}`;
    return config;
  });
  return instance;
};
