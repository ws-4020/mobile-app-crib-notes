import {useClientState} from 'bases/react-query/utils/useClientState';

export const useIsExited = () => {
  return useClientState(['terms', 'isExited'], false);
};
