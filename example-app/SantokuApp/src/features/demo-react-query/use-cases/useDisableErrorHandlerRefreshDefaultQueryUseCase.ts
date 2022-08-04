import {useCallback} from 'react';

import {useDisableErrorHandlerDefaultQuery} from '../services/useDisableErrorHandlerDefaultQuery';

export const useDisableErrorHandlerRefreshDefaultQueryUseCase = () => {
  const {refetch} = useDisableErrorHandlerDefaultQuery();
  const refresh = useCallback(() => refetch({}), [refetch]);
  return {refresh};
};
