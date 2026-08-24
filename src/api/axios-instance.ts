import type { AxiosRequestConfig } from "axios";
import { message } from "antd";
import axios from "axios";
import { router } from "../router.ts";
import { useAuthStore } from "../store/auth.store.ts";
import { staticApiRequest } from "./static-client.ts";

const basePrefix = (import.meta.env.BASE_URL ?? "/").replace(/\/$/, "");
const apiBaseUrl = basePrefix ? `${basePrefix}/api` : "/api";

const isUseStaticApi = import.meta.env.PUBLIC_STATIC_API === "true";

const AxiosInstance = axios.create({
  baseURL: apiBaseUrl,
  timeout: 10000,
});

// eslint-disable-next-line unicorn/no-top-level-side-effects -- axios interceptors must be registered at module level
AxiosInstance.interceptors.response.use(
  (response) => {
    switch (response?.status) {
      case 200:
      case 201: {
        return Promise.resolve(response.data?.body ?? response.data);
      }
      default: {
        return Promise.reject(response);
      }
    }
  },
  (error) => {
    if (error?.response?.data?.message) {
      void message.error(error.response.data.message);
    }
    else if (error?.response?.status === 401) {
      useAuthStore.getState().updateToken("");
      void router.navigate({ to: "/login" });
      return;
    }
    return Promise.reject(error);
  },
);
// eslint-disable-next-line unicorn/no-top-level-side-effects -- axios interceptors must be registered at module level
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

interface ResponsePagination<T> {
  data: T[];
  total: number;
}

async function request<ResponseType = unknown>(url: string, options?: AxiosRequestConfig): Promise<ResponseType> {
  if (isUseStaticApi) {
    return staticApiRequest<ResponseType>(url, options);
  }
  const response = await AxiosInstance<ResponseType>(url, options);
  return response.data;
}
export { AxiosInstance, request, type ResponsePagination };
