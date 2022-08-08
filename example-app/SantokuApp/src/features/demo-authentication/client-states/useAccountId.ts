import {useClientState} from 'bases/react-query/useClientState';

export const useAccountId = () => {
  return useClientState<string>(['demo-authentication', 'accountId']);
};
