import {useQuery} from 'react-query';

import {queryErrorFn} from '../../utils/queryErrorFn';

export const useDefaultQuery = () => {
  return useQuery('dummy1', queryErrorFn, {
    enabled: false,
  });
};
