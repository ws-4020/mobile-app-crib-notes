import {useClientState} from 'bases/react-query/hooks/useClientState';

export const useIsExitedClientState = () => {
  return useClientState(['terms', 'isExited'], false);
};
