import {useClientState} from 'bases/react-query/hooks/useClientState';

export const useAccountIdInput = () => {
  return useClientState(['demo-authentication', 'accountIdInput'], '');
};
