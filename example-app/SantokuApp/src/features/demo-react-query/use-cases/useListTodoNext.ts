import {useCallback} from 'react';

import {useListTodoTodos} from './useListTodoTodos';

export const useListTodoNext = () => {
  const {hasNextPage, fetchNextPage} = useListTodoTodos();
  const next = useCallback(() => {
    if (hasNextPage) {
      fetchNextPage().catch(() => {});
    }
  }, [hasNextPage, fetchNextPage]);
  return {next};
};
