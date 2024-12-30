import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1/",
});
