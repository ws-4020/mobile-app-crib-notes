import {useClientState} from 'bases/react-query/hooks/useClientState';

export const useIsLoggedIn = () => {
  return useClientState<boolean>(['account', 'isLoggedIn']);
};
