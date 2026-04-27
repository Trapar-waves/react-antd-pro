import type { IncomingMessage, ServerResponse } from "node:http";
import { staticLoginToken, staticTablePageBody } from "../src/mock/static-api.ts";

type Next = () => void;

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

    if ((path === "/api/login" || path.endsWith("/api/login")) && req.method === "POST") {
      readJsonBody(req)
        .then((body) => {
          const token = staticLoginToken(body.username, body.password);
          if (token) {
            sendJson(res, 200, {
              code: 200,
              message: "success",
              body: token,
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

    if ((path === "/api/table" || path.endsWith("/api/table")) && req.method === "GET") {
      const current = Number(url.searchParams.get("current")) || 1;
      const pageSize = Number(url.searchParams.get("pageSize")) || 10;
      const name = url.searchParams.get("name") ?? undefined;
      const creator = url.searchParams.get("creator") ?? undefined;
      const status = url.searchParams.get("status") ?? undefined;

      const body = staticTablePageBody({ current, pageSize, name, creator, status });

      sendJson(res, 200, {
        code: 200,
        message: "success",
        body,
      });
      return;
    }

    next();
  };
}
