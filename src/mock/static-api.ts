/**
 * 与 `mock/development-server-handlers.ts` 中逻辑一致，供开发态中间件与纯静态构建（PUBLIC_STATIC_API）复用。
 */

const creators = ["付小小", "曲丽丽", "林东东", "陈帅帅", "兼某某"];
const valueEnum: Record<"0" | "1" | "2" | "3", string> = {
  0: "close",
  1: "running",
  2: "online",
  3: "error",
};

export interface StaticTableParameters {
  creator?: string;
  current?: number;
  name?: string;
  pageSize?: number;
  status?: string;
}

export function staticLoginToken(username: unknown, password: unknown): null | string {
  if (username === "test" && password === "test") {
    return `token-${Math.random().toString(32).slice(2)}`;
  }
  return null;
}

export function staticTablePageBody(parameters: StaticTableParameters): { data: Array<Record<string, unknown>>; total: number } {
  const current = Number(parameters.current) || 1;
  const pageSize = Number(parameters.pageSize) || 10;
  const name = parameters.name;
  const creator = parameters.creator;
  const status = parameters.status;

  const data = Array.from({ length: pageSize }, (_, index) => ({
    containers: Math.floor(Math.random() * 20),
    createdAt: Date.now() - Math.floor(Math.random() * 2000),
    creator: creator || (creators[Math.floor(Math.random() * creators.length)] || creators[0]),
    key: current * 20 + index,
    memo: index % 2 === 1
      ? "很长很长很长很长很长很长很长的文字要展示但是要留下尾巴"
      : "简短备注文案",
    money: Math.floor(Math.random() * 2000) * index,
    name: name || "AppName",
    progress: Math.ceil(Math.random() * 100) + 1,
    status: status || valueEnum[`${Math.floor(Math.random() * 10) % 4}` as "0"],
  }));

  return { data, total: 100 };
}
