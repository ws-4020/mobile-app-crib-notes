import {getGetTermsQueryKey} from 'features/backend/apis/terms/terms';
import {useQuery} from 'react-query';

import {getTerms} from '../utils/getTerms';

export const useGetTermsService = (options?: {query?: {enabled?: boolean; refetchInterval?: number}}) => {
  return useQuery(getGetTermsQueryKey(), getTerms, {
    enabled: options?.query?.enabled,
    refetchInterval: options?.query?.refetchInterval,
  });
};
