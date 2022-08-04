import {useClientState} from 'bases/react-query/utils/useClientState';

import {AuthStatusType} from '../types/AuthStatusType';

export const useAuthStatus = () => {
  return useClientState<AuthStatusType>(['demo-push-notification', 'authState']);
};
