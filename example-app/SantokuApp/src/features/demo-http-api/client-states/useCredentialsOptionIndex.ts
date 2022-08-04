import {useClientState} from 'bases/react-query/hooks/useClientState';

export const useCredentialsOptionIndex = () => {
  return useClientState(['demo-http-api', 'credentialsOptionIndex'], 0);
};
