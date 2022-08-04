import {useClientState} from 'bases/react-query/hooks/useClientState';

export const useIsExited = () => {
  return useClientState(['terms', 'isExited'], false);
};
