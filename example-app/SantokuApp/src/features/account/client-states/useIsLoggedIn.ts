import {useClientState} from 'bases/react-query/utils/useClientState';

export const useIsLoggedIn = () => {
  return useClientState<boolean>(['account', 'isLoggedIn']);
};
