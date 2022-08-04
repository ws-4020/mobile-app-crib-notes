import {useQuery} from 'react-query';

import {queryErrorFn} from '../utils/queryErrorFn';

export const useDisableErrorHandlerDefaultQuery = () => {
  return useQuery('dummy1', queryErrorFn, {
    enabled: false,
  });
};
