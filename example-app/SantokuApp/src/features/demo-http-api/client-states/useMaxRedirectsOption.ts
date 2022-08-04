import {useClientState} from 'bases/react-query/utils/useClientState';

export const useMaxRedirectsOption = () => {
  return useClientState(['demo-http-api', 'maxRedirectsOption'], '5');
};
