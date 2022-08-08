import {useClientState} from 'bases/react-query/useClientState';

export const useRedirectOptionIndex = () => {
  return useClientState(['demo-http-api', 'redirectOptionIndex'], 0);
};
