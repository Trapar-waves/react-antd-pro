import type { IncomingMessage, ServerResponse } from "node:http";
import { staticLoginToken, staticTablePageBody } from "../src/mock/static-api.ts";

type Next = () => void;

/**
 * Rsbuild dev server middleware：在代理之前拦截 `/api/login`、`/api/table`，替代 rspack-plugin-mock。
 */
export function createMockMiddleware() {
  return async function developmentApiMock(request: IncomingMessage, response: ServerResponse, next: Next) {
    const url = new URL(request.url ?? "/", "http://localhost");
    const path = url.pathname;

    if ((path === "/api/login" || path.endsWith("/api/login")) && request.method === "POST") {
      try {
        const body = await readJsonBody(request);
        const token = staticLoginToken(body.username, body.password);
        if (token) {
          sendJson(response, 200, {
            body: token,
            code: 200,
            message: "success",
          });
        }
        else {
          sendJson(response, 401, { code: 401, message: "error" });
        }
      }
      catch {
        sendJson(response, 401, { code: 401, message: "error" });
      }
      return;
    }

    if ((path === "/api/table" || path.endsWith("/api/table")) && request.method === "GET") {
      const current = Number(url.searchParams.get("current")) || 1;
      const pageSize = Number(url.searchParams.get("pageSize")) || 10;
      const name = url.searchParams.get("name") ?? undefined;
      const creator = url.searchParams.get("creator") ?? undefined;
      const status = url.searchParams.get("status") ?? undefined;

      const body = staticTablePageBody({ creator, current, name, pageSize, status });

      sendJson(response, 200, {
        body,
        code: 200,
        message: "success",
      });
      return;
    }

    next();
  };
}

function readJsonBody(request: IncomingMessage): Promise<Record<string, unknown>> {
  return new Promise((resolve, reject) => {
    let raw = "";
    request.setEncoding("utf8");
    request.on("data", (chunk: string) => {
      raw += chunk;
    });
    request.on("end", () => {
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
    request.on("error", reject);
  });
}

function sendJson(response: ServerResponse, statusCode: number, data: unknown) {
  response.statusCode = statusCode;
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.end(JSON.stringify(data));
}
