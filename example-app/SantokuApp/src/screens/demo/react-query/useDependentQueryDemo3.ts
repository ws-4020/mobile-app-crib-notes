import {useCallback, useEffect, useMemo, useState} from 'react';
import {useQueryClient} from 'react-query';
import {useGetTodoDetails} from 'service/backend';

const useDependentQueryDemo3 = () => {
  const [queryEnabled, setQueryEnabled] = useState<boolean>(false);
  const queryClient = useQueryClient();
  const queryParameters = {page: 1, size: 5};

  // 直列API呼び出し (GET /todos の後に GET /todos/:id を呼び出し)
  // 依存関係のあるAPI呼び出しは処理を1つのQuery Functionにまとめた上でuseQueryを用いる
  const getTodoDetailsQuery = useGetTodoDetails(queryParameters, {enabled: queryEnabled});

  const todos = useMemo(() => {
    return getTodoDetailsQuery.isSuccess ? getTodoDetailsQuery.data?.map(response => response.data) ?? [] : [];
  }, [getTodoDetailsQuery]);

  const start = useCallback(() => {
    setQueryEnabled(true);
  }, []);

  const reset = useCallback(() => {
    setQueryEnabled(false);
  }, []);

  useEffect(() => {
    if (!queryEnabled) {
      queryClient.resetQueries().catch(() => {});
    }
  }, [queryEnabled, queryClient]);

  return {
    queryEnabled,
    query: getTodoDetailsQuery,
    todos,
    start,
    reset,
  };
};

export {useDependentQueryDemo3};
