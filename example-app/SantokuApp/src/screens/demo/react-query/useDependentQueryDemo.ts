import {useGetCsrfToken} from 'generated/backend/system/system';
import {useCallback, useEffect, useMemo, useState} from 'react';
import {useQueryClient, UseQueryResult} from 'react-query';
import {useGetTodoDetails} from 'service/backend';

const getCombinedQueryStatus = (queryResults: UseQueryResult[]) => {
  return {
    isIdle: queryResults.every(query => query.isIdle),
    isLoading: queryResults.some(query => query.isLoading),
    isFetching: queryResults.some(query => query.isFetching),
    isSuccess: queryResults.every(query => query.isSuccess),
    isError: queryResults.some(query => query.isError),
  };
};

const useDependentQueryDemo = () => {
  const [queryEnabled, setQueryEnabled] = useState<boolean>(false);
  const queryClient = useQueryClient();
  const queryParameters = {page: 1, size: 5};

  // 直列API呼び出し (GET /todos の後に GET /todos/:id を呼び出し)
  // 依存関係のあるAPI呼び出しは処理を1つのQuery Functionにまとめた上でuseQueryを用いる
  const getTodoDetailsQuery = useGetTodoDetails(queryParameters, {enabled: queryEnabled});

  // 並列クエリ (上記のクエリとGET /accounts/meを並列で呼び出し)
  // 並列で実行したクエリの総合的な結果をもとに画面描画を切り替える場合はそれぞれのクエリのstatusを統合する
  const getCsrfTokenQuery = useGetCsrfToken();
  const {isIdle, isLoading, isSuccess, isError} = getCombinedQueryStatus([getTodoDetailsQuery, getCsrfTokenQuery]);

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
    todos,
    isIdle,
    isLoading,
    isSuccess,
    isError,
    start,
    reset,
  };
};

export {useDependentQueryDemo};
