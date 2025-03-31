import type { AxiosRequestConfig } from "axios";
import { message } from "antd";
import axios from "axios";
import { router } from "../router.ts";
import { useAuthStore } from "../store/auth.store.ts";

const AxiosInstance = axios.create({
  timeout: 10000,
  baseURL: "/api",
});
AxiosInstance.interceptors.response.use(
  (response) => {
    switch (response?.status) {
      case 200:
      case 201:
        return Promise.resolve(response.data?.body ? response.data?.body : response.data);
      default:
        return Promise.reject(response);
    }
  },
  (error) => {
    if (error?.response?.data?.message) {
      message.error(error.response.data.message).then();
    }
    else {
      switch (error.response.status) {
        case 401:
          useAuthStore.getState().updateToken("");
          router.navigate({ to: "/login" });
          return;
      }
    }
    return Promise.reject(error);
  },
);
AxiosInstance.interceptors.request.use(
  (config) => {
    const token = useAuthStore.getState().token;
    if (token) {
      config.headers.set("Authorization", `Bearer ${token}`);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

function request<ResponseType = unknown>(url: string, options?: AxiosRequestConfig): Promise<ResponseType> {
  return AxiosInstance<unknown, ResponseType>(url, options);
}
interface ResponsePagination<T> {
  data: T[];
  total: number;
}
export { AxiosInstance, request, type ResponsePagination };
