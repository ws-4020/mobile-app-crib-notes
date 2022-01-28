import {BACKEND_AXIOS_INSTANCE, setCsrfTokenHeader} from './useCustomInstance';

type CsrfTokenResponse = {
  csrfTokenHeaderName: string;
  csrfTokenValue: string;
};

const refreshCsrfToken = async () => {
  const axiosResponse = await BACKEND_AXIOS_INSTANCE.get<CsrfTokenResponse>('/csrf_token');
  setCsrfTokenHeader(axiosResponse.data.csrfTokenHeaderName, axiosResponse.data.csrfTokenValue);
};

export {refreshCsrfToken};
