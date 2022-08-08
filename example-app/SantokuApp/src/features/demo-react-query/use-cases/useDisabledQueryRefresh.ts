import {useCallback} from 'react';

import {useDisabledQueryTodos} from './useDisabledQueryTodos';

export const useDisabledQueryRefresh = () => {
  const {refetch} = useDisabledQueryTodos();
  const refresh = useCallback(() => refetch({}), [refetch]);
  return {refresh};
};
