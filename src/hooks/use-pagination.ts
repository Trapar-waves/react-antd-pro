import { produce } from "immer";
import { useState } from "react";

interface IPagination {
  current: number;
  pageSize: number;
}

interface usePaginationResult {
  current: number;
  onChange: (current: number, pageSize: number) => void;
  pageSize: number;
}

const DEFAULT_PAGINATION: IPagination = { current: 1, pageSize: 10 };

export function usePagination(defaultPagination?: IPagination): usePaginationResult {
  const [pagination, setPagination] = useState(defaultPagination ?? DEFAULT_PAGINATION);
  function handlePaginationChange(current: number, pageSize: number) {
    setPagination(produce((draft) => {
      draft.current = current;
      draft.pageSize = pageSize;
    }));
  }

  return { current: pagination.current, onChange: handlePaginationChange, pageSize: pagination.pageSize };
}
