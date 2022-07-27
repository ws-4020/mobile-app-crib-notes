import {useClientState} from 'bases/react-query/hooks/useClientState';

export const useAccountId = () => {
  return useClientState<string>(['demo-authentication', 'accountId']);
};
