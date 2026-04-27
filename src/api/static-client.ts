import type { AxiosRequestConfig } from "axios";
import { staticLoginToken, staticTablePageBody } from "../mock/static-api.ts";

function axiosLikeError(status: number, message: string, data?: unknown) {
  const err = new Error(message) as Error & {
    response: { status: number; data: unknown };
  };
  err.response = { status, data: data ?? { message } };
  return err;
}

/**
 * 在 `PUBLIC_STATIC_API=true` 的构建中模拟 `/api` 行为，不发起网络请求（适用于 GitHub Pages）。
 */
export async function staticApiRequest<T>(url: string, options?: AxiosRequestConfig): Promise<T> {
  const method = (options?.method ?? "get").toLowerCase();

  if (url === "login" && method === "post") {
    const body = (options?.data ?? {}) as Record<string, unknown>;
    const token = staticLoginToken(body.username, body.password);
    if (token) {
      return token as T;
    }
    throw axiosLikeError(401, "error", { code: 401, message: "error" });
  }

  if (url === "table" && method === "get") {
    const p = (options?.params ?? {}) as Record<string, unknown>;
    return staticTablePageBody({
      current: Number(p.current),
      pageSize: Number(p.pageSize),
      name: typeof p.name === "string" ? p.name : undefined,
      creator: typeof p.creator === "string" ? p.creator : undefined,
      status: typeof p.status === "string" ? p.status : undefined,
    }) as T;
  }

  throw axiosLikeError(404, "Static demo: API not implemented", { message: "Not found" });
}
