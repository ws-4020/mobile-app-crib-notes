import {getGetAccountsMeQueryKey} from 'features/backend/apis/account/account';
import {useQuery} from 'react-query';

import {getAccountsMeTerms} from './getAccountsMeTerms';

export const useGetAccountsMeTerms = (options?: {query?: {enabled?: boolean}}) => {
  return useQuery(getGetAccountsMeQueryKey(), getAccountsMeTerms, {enabled: options?.query?.enabled});
};
