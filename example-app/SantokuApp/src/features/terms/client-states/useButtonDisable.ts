import {useClientState} from 'bases/react-query/hooks/useClientState';

export const useButtonDisable = () => {
  return useClientState(['terms', 'buttonDisable'], true);
};
