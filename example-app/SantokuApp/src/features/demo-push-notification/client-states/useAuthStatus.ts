import {useClientState} from 'bases/react-query/hooks/useClientState';

import {AuthStatusType} from '../types/AuthStatusType';

export const useAuthStatus = () => {
  return useClientState<AuthStatusType>(['demo-push-notification', 'authState']);
};
