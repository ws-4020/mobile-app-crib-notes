import {useCallback} from 'react';

import {useTodos} from './useTodos';

export const useNextUseCase = () => {
  const {hasNextPage, fetchNextPage} = useTodos();
  const next = useCallback(() => {
    if (hasNextPage) {
      fetchNextPage().catch(() => {});
    }
  }, [hasNextPage, fetchNextPage]);
  return {next};
};
