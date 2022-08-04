import {useClientState} from 'bases/react-query/utils/useClientState';

export const useIsWebViewError = () => {
  return useClientState(['terms', 'isWebViewError'], false);
};
