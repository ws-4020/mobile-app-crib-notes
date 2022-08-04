import {useCallback} from 'react';

import {useDisabledQueryTodosUseCase} from './useDisabledQueryTodosUseCase';

export const useDisabledQueryRefreshUseCase = () => {
  const {refetch} = useDisabledQueryTodosUseCase();
  const refresh = useCallback(() => refetch({}), [refetch]);
  return {refresh};
};
