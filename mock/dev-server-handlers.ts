import type { IncomingMessage, ServerResponse } from "node:http";

type Next = () => void;

const creators = ["付小小", "曲丽丽", "林东东", "陈帅帅", "兼某某"];
const valueEnum: Record<"0" | "1" | "2" | "3", string> = {
  0: "close",
  1: "running",
  2: "online",
  3: "error",
};

function sendJson(res: ServerResponse, statusCode: number, data: unknown) {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.end(JSON.stringify(data));
}

function readJsonBody(req: IncomingMessage): Promise<Record<string, unknown>> {
  return new Promise((resolve, reject) => {
    let raw = "";
    req.setEncoding("utf8");
    req.on("data", (chunk: string) => {
      raw += chunk;
    });
    req.on("end", () => {
      if (!raw) {
        resolve({});
        return;
      }
      try {
        resolve(JSON.parse(raw) as Record<string, unknown>);
      }
      catch {
        resolve({});
      }
    });
    req.on("error", reject);
  });
}

/**
 * Rsbuild dev server middleware：在代理之前拦截 `/api/login`、`/api/table`，替代 rspack-plugin-mock。
 */
export function createMockMiddleware() {
  return function devApiMock(req: IncomingMessage, res: ServerResponse, next: Next) {
    const url = new URL(req.url ?? "/", "http://localhost");
    const path = url.pathname;

    if (path === "/api/login" && req.method === "POST") {
      readJsonBody(req)
        .then((body) => {
          if (body.username === "test" && body.password === "test") {
            sendJson(res, 200, {
              code: 200,
              message: "success",
              body: `token-${Math.random().toString(32)}`,
            });
          }
          else {
            sendJson(res, 401, { code: 401, message: "error" });
          }
        })
        .catch(() => {
          sendJson(res, 401, { code: 401, message: "error" });
        });
      return;
    }

    if (path === "/api/table" && req.method === "GET") {
      const current = Number(url.searchParams.get("current")) || 1;
      const pageSize = Number(url.searchParams.get("pageSize")) || 10;
      const name = url.searchParams.get("name") ?? undefined;
      const creator = url.searchParams.get("creator") ?? undefined;
      const status = url.searchParams.get("status") ?? undefined;

      sendJson(res, 200, {
        code: 200,
        message: "success",
        body: {
          data: Array.from({ length: pageSize }).map((_, i) => ({
            key: current * 20 + i,
            name: name || "AppName",
            containers: Math.floor(Math.random() * 20),
            creator: creator || creators[Math.floor(Math.random() * creators.length)],
            status: status || valueEnum[`${Math.floor(Math.random() * 10) % 4}` as "0"],
            createdAt: Date.now() - Math.floor(Math.random() * 2000),
            money: Math.floor(Math.random() * 2000) * i,
            progress: Math.ceil(Math.random() * 100) + 1,
            memo: i % 2 === 1
              ? "很长很长很长很长很长很长很长的文字要展示但是要留下尾巴"
              : "简短备注文案",
          })),
          total: 100,
        },
      });
      return;
    }

    next();
  };
}
