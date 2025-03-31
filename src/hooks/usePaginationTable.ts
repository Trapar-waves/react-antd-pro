import type { ResponsePagination } from "../api/axios-instance.ts";
import type { CommonPaginationParam } from "../api/common.type.ts";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { usePagination } from "./usePagination.ts";

interface UsePaginationTableOptions<T, U> {
  queryFn: (params: U & CommonPaginationParam) => Promise<ResponsePagination<T>>;
  current?: number;
  pageSize?: number;
  queryKey: string;
}
export function usePaginationTable<T, U extends Record<string, any>>(options: UsePaginationTableOptions<T, U>) {
  const { queryFn, queryKey, current = 1, pageSize = 10 } = options;

  const pagination = usePagination({ current, pageSize });
  const [tableParams, setTableParams] = useState<U>({} as U);
  const { data, isLoading } = useQuery({
    queryFn: () => queryFn({ ...tableParams, ...pagination }),
    queryKey: [queryKey, pagination, tableParams],
  });

  return {
    onSubmit: setTableParams,
    dataSource: data?.data,
    loading: isLoading,
    pagination: { ...pagination, total: data?.total },
  };
}
