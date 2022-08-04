import {useClientState} from 'bases/react-query/hooks/useClientState';

export const useResponseInfo = () => {
  return useClientState(['demo-http-api', 'responseInfo'], '');
};
