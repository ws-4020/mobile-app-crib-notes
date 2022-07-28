import {useClientState} from 'bases/react-query/hooks/useClientState';

export const useRedirectOptionIndex = () => {
  return useClientState(['demo-http-api', 'redirectOptionIndex'], 0);
};
