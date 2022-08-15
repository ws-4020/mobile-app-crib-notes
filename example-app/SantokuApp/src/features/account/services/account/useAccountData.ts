import {useQuery} from 'react-query';

import {getAccuontData} from './getAccuontData';

const queryKey = ['account', 'accountData'];

export const useAccountData = (args: {enabled?: boolean; meta?: {disableGlobalErrorHandler?: boolean}} = {}) => {
  const query = useQuery(queryKey, getAccuontData, {enabled: args.enabled, meta: args.meta, staleTime: Infinity});
  return {...query, accountData: query.data};
};
