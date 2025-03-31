import type { ResponsePagination } from "../axios-instance.ts";
import type { CommonPaginationParam } from "../common.type.ts";
import { request } from "../axios-instance.ts";

export interface TableListItem {
  key: number;
  name: string;
  containers: number;
  creator: string;
  status: string;
  createdAt: number;
  progress: number;
  money: number;
  memo: string;
}

export interface TableListParams {
  name?: string;
  creator?: string;
  status?: string;
}

export function getTableList(params: TableListParams & CommonPaginationParam) {
  return request<ResponsePagination<TableListItem>>("/table", { params });
}
