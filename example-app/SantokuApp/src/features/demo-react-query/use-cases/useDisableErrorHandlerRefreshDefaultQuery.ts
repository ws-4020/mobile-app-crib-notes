import {useCallback} from 'react';

import {useDisableErrorHandlerDefaultQuery} from '../services/useDisableErrorHandlerDefaultQuery';

export const useDisableErrorHandlerRefreshDefaultQuery = () => {
  const {refetch} = useDisableErrorHandlerDefaultQuery();
  const refresh = useCallback(() => refetch({}), [refetch]);
  return {refresh};
};
