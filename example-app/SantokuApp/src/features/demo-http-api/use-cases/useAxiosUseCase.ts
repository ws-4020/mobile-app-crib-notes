import {useCallback} from 'react';

import {useMaxRedirectsOption} from '../client-states/useMaxRedirectsOption';
import {useResponseInfo} from '../client-states/useResponseInfo';
import {useWithCredentialsOption} from '../client-states/useWithCredentialsOption';
import {fetchWithAxios} from '../services/fetchWithAxios';

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
