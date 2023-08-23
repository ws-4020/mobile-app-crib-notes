import {useOnlySetClientState} from 'bases/react-query/useClientState';

export const useSetDeepLinkUrl = () => {
  return useOnlySetClientState<string | null>(['deepLink', 'url']);
};
