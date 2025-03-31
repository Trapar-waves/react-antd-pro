import { request } from "../axios-instance.ts";

export function Login({ username, password }: { username: string; password: string }) {
  return request<string>("/login", { method: "post", data: { username, password } });
}
