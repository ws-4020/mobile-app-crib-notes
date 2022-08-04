import {useClientState} from 'bases/react-query/utils/useClientState';

export const useWithCredentialsOption = () => {
  return useClientState(['demo-http-api', 'withCredentialsOption'], true);
};
