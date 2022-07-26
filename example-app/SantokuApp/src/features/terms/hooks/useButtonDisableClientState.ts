import {useClientState} from 'bases/react-query/hooks/useClientState';

export const useButtonDisableClientState = () => {
  return useClientState(['terms', 'buttonDisable'], true);
};
