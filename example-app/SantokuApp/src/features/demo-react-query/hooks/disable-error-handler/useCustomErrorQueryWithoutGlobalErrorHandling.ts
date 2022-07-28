import {useQuery} from 'react-query';

import {queryErrorFn} from '../../utils/queryErrorFn';

export const useCustomErrorQueryWithoutGlobalErrorHandling = (onError: () => void) => {
  return useQuery('dummy3', queryErrorFn, {
    enabled: false,
    meta: {disableGlobalErrorHandler: true},
    onError,
  });
};
