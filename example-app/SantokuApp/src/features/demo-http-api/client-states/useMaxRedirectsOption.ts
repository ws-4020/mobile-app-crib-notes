import {useClientState} from 'bases/react-query/hooks/useClientState';

export const useMaxRedirectsOption = () => {
  return useClientState(['demo-http-api', 'maxRedirectsOption'], '5');
};
