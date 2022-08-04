import {useClientState} from 'bases/react-query/hooks/useClientState';

export const useIsWebViewError = () => {
  return useClientState(['terms', 'isWebViewError'], false);
};
