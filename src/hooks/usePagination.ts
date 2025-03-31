import { produce } from "immer";
import { useState } from "react";

interface IPagination {
  current: number;
  pageSize: number;
}

interface usePaginationResult {
  pageSize: number;
  current: number;
  onChange: (current: number, pageSize: number) => void;
}

export function usePagination(defaultPagination: IPagination = { current: 1, pageSize: 10 }): usePaginationResult {
  const [pagination, setPagination] = useState(defaultPagination);
  function handlePaginationChange(current: number, pageSize: number) {
    setPagination(produce((draft) => {
      draft.current = current;
      draft.pageSize = pageSize;
    }));
  }

  return { pageSize: pagination.pageSize, current: pagination.current, onChange: handlePaginationChange };
}
