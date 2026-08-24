import { request } from "../axios-instance.ts";

export function Login({ password, username }: { password: string; username: string }) {
  return request<string>("login", { data: { password, username }, method: "post" });
}
