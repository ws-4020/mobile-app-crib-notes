import {useMemo} from 'react';

import {useAutoLogin} from './useAutoLogin';
import {useChangeAccount} from './useChangeAccount';
import {useLogout} from './useLogout';
import {useSignup} from './useSignup';

export const useIsLoading = () => {
  const {isLoading: isLoadingSignup} = useSignup();
  const {isLoading: isLoadingAutoLogin} = useAutoLogin();
  const {isLoading: isLoadingChangeAccount} = useChangeAccount();
  const {isLoading: isLoadingLogout} = useLogout();
  const isLoading = useMemo(
    () => isLoadingSignup || isLoadingAutoLogin || isLoadingChangeAccount || isLoadingLogout,
    [isLoadingAutoLogin, isLoadingChangeAccount, isLoadingLogout, isLoadingSignup],
  );
  return {isLoading};
};
