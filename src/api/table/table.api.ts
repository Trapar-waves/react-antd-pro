import type { ResponsePagination } from "../axios-instance.ts";
import type { CommonPaginationParameter } from "../common.type.ts";
import { request } from "../axios-instance.ts";

export interface TableListItem {
  containers: number;
  createdAt: number;
  creator: string;
  key: number;
  memo: string;
  money: number;
  name: string;
  progress: number;
  status: string;
}

export interface TableListParameters {
  creator?: string;
  name?: string;
  status?: string;
}

export function getTableList(parameters: CommonPaginationParameter & TableListParameters) {
  return request<ResponsePagination<TableListItem>>("table", { params: parameters });
}
