import {useClientState} from 'bases/react-query/utils/useClientState';

export const useAccountId = () => {
  return useClientState<string>(['demo-authentication', 'accountId']);
};
