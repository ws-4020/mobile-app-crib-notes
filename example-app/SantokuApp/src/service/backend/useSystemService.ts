import {useGetCsrfToken} from 'generated/backend/system/system';

import {BackendServiceQueryOptions, convertQueryResult, getQueryOptions} from './base';

export const useGetCsrfTokenService = (options?: BackendServiceQueryOptions) => {
  const query = useGetCsrfToken({query: getQueryOptions(options)});
  return convertQueryResult(query);
};
