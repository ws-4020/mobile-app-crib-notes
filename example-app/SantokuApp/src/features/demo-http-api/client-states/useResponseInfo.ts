import {useClientState} from 'bases/react-query/utils/useClientState';

export const useResponseInfo = () => {
  return useClientState(['demo-http-api', 'responseInfo'], '');
};
