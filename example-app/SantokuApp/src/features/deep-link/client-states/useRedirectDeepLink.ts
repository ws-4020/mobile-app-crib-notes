import {useClientState} from 'bases/react-query/useClientState';

export const useRedirectDeepLink = () => {
  return useClientState<string>(['deep-link', 'redirectUrl'], '');
};
