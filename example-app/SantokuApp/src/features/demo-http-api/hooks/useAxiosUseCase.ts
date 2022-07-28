import {useCallback} from 'react';

import {fetchWithAxios} from '../utils/fetchWithAxios';
import {useMaxRedirectsOption} from './useMaxRedirectsOption';
import {useResponseInfo} from './useResponseInfo';
import {useWithCredentialsOption} from './useWithCredentialsOption';

export const useAxiosUseCase = () => {
  const [maxRedirectsOption] = useMaxRedirectsOption();
  const [withCredentialsOption] = useWithCredentialsOption();
  const [, setResponseInfo] = useResponseInfo();
  const callAxiosApi = useCallback(async () => {
    const maxRedirects = isNaN(Number(maxRedirectsOption)) ? undefined : Number(maxRedirectsOption);
    try {
      const response = await fetchWithAxios(withCredentialsOption, maxRedirects);
      setResponseInfo(`maxRedirects option:${String(maxRedirects)}
withCredentials option:${String(withCredentialsOption)}
${response.data.message}`);
    } catch (e) {
      setResponseInfo('Error occurred\n' + JSON.stringify(e));
      console.error(e);
    }
  }, [maxRedirectsOption, withCredentialsOption, setResponseInfo]);
  return {callAxiosApi};
};
