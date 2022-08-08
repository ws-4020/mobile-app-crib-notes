import {useClientState} from 'bases/react-query/useClientState';

export const useWithCredentialsOption = () => {
  return useClientState(['demo-http-api', 'withCredentialsOption'], true);
};
