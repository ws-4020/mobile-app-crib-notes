import {useClientState} from 'bases/react-query/utils/useClientState';

export const useAccountIdInput = () => {
  return useClientState(['demo-authentication', 'accountIdInput'], '');
};
