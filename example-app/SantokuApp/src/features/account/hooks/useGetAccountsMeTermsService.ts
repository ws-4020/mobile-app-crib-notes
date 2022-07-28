import {getGetAccountsMeQueryKey} from 'features/backend/apis/account/account';
import {useQuery} from 'react-query';

import {getAccountsMeTerms} from '../utils/auth/getAccountsMeTerms';

export const useGetAccountsMeTermsService = (options?: {query?: {enabled?: boolean}}) => {
  return useQuery(getGetAccountsMeQueryKey(), getAccountsMeTerms, {enabled: options?.query?.enabled});
};
