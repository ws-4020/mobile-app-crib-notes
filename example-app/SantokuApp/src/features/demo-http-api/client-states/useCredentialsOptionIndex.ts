import {useClientState} from 'bases/react-query/utils/useClientState';

export const useCredentialsOptionIndex = () => {
  return useClientState(['demo-http-api', 'credentialsOptionIndex'], 0);
};
