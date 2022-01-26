import {QueryKey, UseQueryOptions} from 'react-query';

import {CsrfTokenResponse, SystemApi} from '../../../generated/api';
import {
  ApiError,
  axiosInstance,
  basePath,
  defaultOpenApiConfiguration,
  useBackendQuery,
  setCsrfTokenHeader,
} from './base';

const systemApiClient = new SystemApi(defaultOpenApiConfiguration, basePath, axiosInstance);

// GET /csrf_token
const useGetCsrfToken = (
  queryKey?: QueryKey,
  queryOptions?: UseQueryOptions<CsrfTokenResponse, ApiError, CsrfTokenResponse>,
) => {
  const key = queryKey ?? ['/csrf_token'];
  const queryFn = () => {
    return systemApiClient.getCsrfToken();
  };
  const options = {
    onSuccess: (data: CsrfTokenResponse) => {
      setCsrfTokenHeader(data.csrfTokenHeaderName, data.csrfTokenValue);
    },
    ...queryOptions,
  };
  return useBackendQuery(key, queryFn, options);
};

export {useGetCsrfToken};
