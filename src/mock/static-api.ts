/**
 * 与 `mock/dev-server-handlers.ts` 中逻辑一致，供开发态中间件与纯静态构建（PUBLIC_STATIC_API）复用。
 */

const creators = ["付小小", "曲丽丽", "林东东", "陈帅帅", "兼某某"];
const valueEnum: Record<"0" | "1" | "2" | "3", string> = {
  0: "close",
  1: "running",
  2: "online",
  3: "error",
};

export function staticLoginToken(username: unknown, password: unknown): string | null {
  if (username === "test" && password === "test") {
    return `token-${Math.random().toString(32).slice(2)}`;
  }
  return null;
}

export interface StaticTableParams {
  current?: number;
  pageSize?: number;
  name?: string;
  creator?: string;
  status?: string;
}

export function staticTablePageBody(params: StaticTableParams): { data: Array<Record<string, unknown>>; total: number } {
  const current = Number(params.current) || 1;
  const pageSize = Number(params.pageSize) || 10;
  const name = params.name;
  const creator = params.creator;
  const status = params.status;

  const data = Array.from({ length: pageSize }).map((_, i) => ({
    key: current * 20 + i,
    name: name || "AppName",
    containers: Math.floor(Math.random() * 20),
    creator: creator || (creators[Math.floor(Math.random() * creators.length)] || creators[0]),
    status: status || valueEnum[`${Math.floor(Math.random() * 10) % 4}` as "0"],
    createdAt: Date.now() - Math.floor(Math.random() * 2000),
    money: Math.floor(Math.random() * 2000) * i,
    progress: Math.ceil(Math.random() * 100) + 1,
    memo: i % 2 === 1
      ? "很长很长很长很长很长很长很长的文字要展示但是要留下尾巴"
      : "简短备注文案",
  }));

  return { data, total: 100 };
}
