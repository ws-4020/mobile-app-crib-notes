import {useCallback} from 'react';

import {credentialsOptions} from '../constants/credentialsOptions';
import {redirectOptions} from '../constants/redirectOptions';
import {fetchWithFetchApi} from '../utils/fetchWithFetchApi';
import {useCredentialsOptionIndex} from './useCredentialsOptionIndex';
import {useRedirectOptionIndex} from './useRedirectOptionIndex';
import {useResponseInfo} from './useResponseInfo';

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