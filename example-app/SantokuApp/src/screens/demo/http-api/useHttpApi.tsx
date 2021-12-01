import axios from 'axios';
import {AppConfig} from 'framework/config';
import {useCallback, useState} from 'react';

const redirectOptions: ['follow', 'error', 'manual'] = ['follow', 'error', 'manual'];
const credentialsOptions: ['include', 'same-origin', 'omit'] = ['include', 'same-origin', 'omit'];

export const useHttpApi = () => {
  const [redirectOptionIndex, setRedirectOptionIndex] = useState(0);
  const [credentialsOptionIndex, setCredentialsOptionIndex] = useState(0);
  const [maxRedirectsOption, setMaxRedirectsOption] = useState('5');
  const [withCredentialsOption, setWithCredentialsOption] = useState(true);
  const [responseInfo, setResponseInfo] = useState('');

  const callFetch = useCallback(() => {
    fetch(AppConfig.santokuAppBackendUrl + '/api/fetch_test/redirect', {
      redirect: redirectOptions[redirectOptionIndex],
      credentials: credentialsOptions[credentialsOptionIndex],
    })
      .then(async response => {
        const json = (await response.json()) as {message: string};
        const info =
          'redirect option:' +
          redirectOptions[redirectOptionIndex] +
          '\n' +
          'credentials option:' +
          credentialsOptions[credentialsOptionIndex] +
          '\n' +
          'response.uri:' +
          response.url +
          '\n' +
          'response.redirected :' +
          String(response.redirected) +
          '\n' +
          json.message;
        setResponseInfo(info);
      })
      .catch(error => {
        console.error(error);
      });
  }, [redirectOptionIndex, credentialsOptionIndex]);

  const callAxios = useCallback(() => {
    const maxRedirects = isNaN(Number(maxRedirectsOption)) ? undefined : Number(maxRedirectsOption);
    axios
      .get<{message: string}>(AppConfig.santokuAppBackendUrl + '/api/fetch_test/redirect', {
        maxRedirects,
        withCredentials: withCredentialsOption,
      })
      .then(response => {
        const info =
          'maxRedirects option:' +
          String(maxRedirects) +
          '\n' +
          'withCredentials option:' +
          String(withCredentialsOption) +
          '\n' +
          response.data.message;
        setResponseInfo(info);
      })
      .catch(error => {
        console.error(error);
      });
  }, [maxRedirectsOption, withCredentialsOption]);

  return {
    redirectOptions,
    credentialsOptions,
    redirectOptionIndex,
    credentialsOptionIndex,
    maxRedirectsOption,
    withCredentialsOption,
    responseInfo,
    setRedirectOptionIndex,
    setCredentialsOptionIndex,
    setMaxRedirectsOption,
    setWithCredentialsOption,
    callFetch,
    callAxios,
  };
};
