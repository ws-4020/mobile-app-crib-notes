import {useLoadingOverlay} from 'bases/ui/contexts/useLoadingOverlay';
import {useEffect, useMemo} from 'react';

import {useAutoLoginUseCase} from './useAutoLoginUseCase';
import {useChangeAccountUseCase} from './useChangeAccountUseCase';
import {useLogoutUseCase} from './useLogoutUseCase';
import {useSignupUseCase} from './useSignupUseCase';

export const useLoadingUseCase = () => {
  const {isLoading: isLoadingSignup} = useSignupUseCase();
  const {isLoading: isLoadingAutoLogin} = useAutoLoginUseCase();
  const {isLoading: isLoadingChangeAccount} = useChangeAccountUseCase();
  const {isLoading: isLoadingLogout} = useLogoutUseCase();
  const isLoading = useMemo(
    () => isLoadingSignup || isLoadingAutoLogin || isLoadingChangeAccount || isLoadingLogout,
    [isLoadingAutoLogin, isLoadingChangeAccount, isLoadingLogout, isLoadingSignup],
  );
  const loadingOverlay = useLoadingOverlay();
  useEffect(() => {
    loadingOverlay.setVisible(isLoading);
  }, [isLoading, loadingOverlay]);
};
