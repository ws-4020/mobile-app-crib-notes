import {useQuery} from 'react-query';

import {queryErrorFn} from '../../utils/queryErrorFn';

export const useCustomErrorQuery = (onError: () => void) => {
  return useQuery('dummy2', queryErrorFn, {
    enabled: false,
    onError,
  });
};
