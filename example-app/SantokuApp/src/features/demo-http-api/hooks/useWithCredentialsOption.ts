import {useClientState} from 'bases/react-query/hooks/useClientState';

export const useWithCredentialsOption = () => {
  return useClientState(['demo-http-api', 'withCredentialsOption'], true);
};
