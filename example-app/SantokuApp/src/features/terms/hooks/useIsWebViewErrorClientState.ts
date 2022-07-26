import {useClientState} from 'bases/react-query/hooks/useClientState';

export const useIsWebViewErrorClientState = () => {
  return useClientState(['terms', 'isWebViewError'], false);
};
