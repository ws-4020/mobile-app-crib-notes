import {useCallback} from 'react';

import {useTodos} from './useTodos';

export const useRefreshUseCase = () => {
  const {refetch} = useTodos();
  const refresh = useCallback(() => refetch({}), [refetch]);
  return {refresh};
};
