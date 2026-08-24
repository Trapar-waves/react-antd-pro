import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import type { ResponsePagination } from "../api/axios-instance.ts";
import type { CommonPaginationParameter } from "../api/common.type.ts";
import { usePagination } from "./use-pagination.ts";

interface UsePaginationTableOptions<T, U> {
  current?: number;
  pageSize?: number;
  queryFn: (parameters: CommonPaginationParameter & U) => Promise<ResponsePagination<T>>;
  queryKey: string;
}
export function usePaginationTable<T, U extends Record<string, any>>(options: UsePaginationTableOptions<T, U>) {
  const { current = 1, pageSize = 10, queryFn, queryKey } = options;

  const pagination = usePagination({ current, pageSize });
  const [tableParameters, setTableParameters] = useState<U>({} as U);
  const { data, isLoading } = useQuery({
    queryFn: () => queryFn({ ...tableParameters, ...pagination }),
    queryKey: [queryKey, queryFn, pagination, tableParameters],
  });

  return {
    dataSource: data?.data,
    loading: isLoading,
    onSubmit: setTableParameters,
    pagination: { ...pagination, total: data?.total },
  };
}
