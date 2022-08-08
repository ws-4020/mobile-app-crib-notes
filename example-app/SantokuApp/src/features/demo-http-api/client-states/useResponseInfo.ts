import {useClientState} from 'bases/react-query/useClientState';

export const useResponseInfo = () => {
  return useClientState(['demo-http-api', 'responseInfo'], '');
};
