import {useOnlySetClientState} from 'bases/react-query/useClientState';

export const useSetRedirectDeepLinkUrl = (deepLinkUrl?: string) => {
  return useOnlySetClientState(['deep-link', 'url']);
};
