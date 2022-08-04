import {useClientState} from 'bases/react-query/utils/useClientState';

export const useButtonDisable = () => {
  return useClientState(['terms', 'buttonDisable'], true);
};
