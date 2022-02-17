import {setCsrfTokenHeader} from 'framework/backend/customInstance';
import {useGetCsrfToken as useGetCsrfTokenApi} from 'generated/backend/system/system';

const useGetCsrfToken = (options?: {enabled: boolean}) => {
  return useGetCsrfTokenApi({
    query: {
      enabled: options?.enabled,
      onSuccess: response => {
        setCsrfTokenHeader(response.data.csrfTokenHeaderName, response.data.csrfTokenValue);
      },
    },
  });
};

export {useGetCsrfToken};
