import {useCallback} from 'react';

import {useDefaultQuery} from './useDefaultQuery';

export const useRefreshDefaultQueryUseCase = () => {
  const {refetch} = useDefaultQuery();
  const refresh = useCallback(() => refetch({}), [refetch]);
  return {refresh};
};
