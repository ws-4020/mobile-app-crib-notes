import {useClientState} from 'bases/react-query/useClientState';

export const useAccountIdInput = () => {
  return useClientState(['demo-authentication', 'accountIdInput'], '');
};
