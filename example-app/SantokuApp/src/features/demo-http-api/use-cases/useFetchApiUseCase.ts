import {useCallback} from 'react';

import {useCredentialsOptionIndex} from '../client-states/useCredentialsOptionIndex';
import {useRedirectOptionIndex} from '../client-states/useRedirectOptionIndex';
import {useResponseInfo} from '../client-states/useResponseInfo';
import {credentialsOptions} from '../constants/credentialsOptions';
import {redirectOptions} from '../constants/redirectOptions';
import {fetchWithFetchApi} from '../services/fetchWithFetchApi';

export const useFetchApiUseCase = () => {
  const [redirectOptionIndex] = useRedirectOptionIndex();
  const [credentialsOptionIndex] = useCredentialsOptionIndex();
  const [, setResponseInfo] = useResponseInfo();
  const callFetchApi = useCallback(async () => {
    try {
      const response = await fetchWithFetchApi(
        redirectOptions[redirectOptionIndex],
        credentialsOptions[credentialsOptionIndex],
      );
      const json = (await response.json()) as {message: string};
      setResponseInfo(`redirect option:${redirectOptions[redirectOptionIndex]}
credentials option:${credentialsOptions[credentialsOptionIndex]}
response.uri:${response.url}
response.redirected:${String(response.redirected)}
${json.message}`);
    } catch (e) {
      setResponseInfo('Error occurred\n' + JSON.stringify(e));
      console.error(e);
    }
  }, [redirectOptionIndex, credentialsOptionIndex, setResponseInfo]);
  return {callFetchApi};
};
