import {useClientState} from 'bases/react-query/useClientState';

export const useDeepLinkUrl = () => {
  return useClientState<string | null>(['deepLink', 'url']);
};
