import {useGetTerms} from 'generated/backend/terms/terms';

import {BackendServiceQueryOptions, convertQueryResult, getQueryOptions} from './base';

export const useGetTermsService = (options?: BackendServiceQueryOptions) => {
  const query = useGetTerms({query: getQueryOptions(options)});
  return convertQueryResult(query);
};
