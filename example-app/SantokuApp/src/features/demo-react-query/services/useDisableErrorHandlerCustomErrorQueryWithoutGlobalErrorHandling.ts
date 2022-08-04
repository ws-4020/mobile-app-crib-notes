import {useQuery} from 'react-query';

import {queryErrorFn} from '../utils/queryErrorFn';

export const useDisableErrorHandlerCustomErrorQueryWithoutGlobalErrorHandling = (onError: () => void) => {
  return useQuery('dummy3', queryErrorFn, {
    enabled: false,
    meta: {disableGlobalErrorHandler: true},
    onError,
  });
};
