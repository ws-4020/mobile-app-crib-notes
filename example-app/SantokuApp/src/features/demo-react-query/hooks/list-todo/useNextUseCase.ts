import {useCallback} from 'react';

import {useTodosUseCase} from './useTodosUseCase';

export const useNextUseCase = () => {
  const {hasNextPage, fetchNextPage} = useTodosUseCase();
  const next = useCallback(() => {
    if (hasNextPage) {
      fetchNextPage().catch(() => {});
    }
  }, [hasNextPage, fetchNextPage]);
  return {next};
};
