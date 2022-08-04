import {useCallback} from 'react';

import {useListTodoTodosUseCase} from './useListTodoTodosUseCase';

export const useListTodoNextUseCase = () => {
  const {hasNextPage, fetchNextPage} = useListTodoTodosUseCase();
  const next = useCallback(() => {
    if (hasNextPage) {
      fetchNextPage().catch(() => {});
    }
  }, [hasNextPage, fetchNextPage]);
  return {next};
};
