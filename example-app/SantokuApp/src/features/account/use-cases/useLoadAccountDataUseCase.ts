import {resolveErrorMessage} from 'bases/error/resolveErrorMessage';
import {sendErrorLog} from 'bases/error/sendErrorLog';
import {useCallback} from 'react';
import {Alert} from 'react-native';

import {useIsLoggedIn} from '../client-states/useIsLoggedIn';
import {useAccountData} from '../services/useAccountData';

export const useLoadAccountDataUseCase = (isAutoLoggedIn?: boolean) => {
  const [isLoggedIn] = useIsLoggedIn();
  const {isLoading, isLoadingError, errorUpdateCount, error} = useAccountData({
    enabled: isLoggedIn,
    meta: {disableGlobalErrorHandler: true},
  });

  const handleLoadError = useCallback(() => {
    // オートログイン済で初回のデータ取得時にエラーが発生した場合は
    if (isAutoLoggedIn && isLoadingError) {
      if (errorUpdateCount === 1) {
        const {title, message} = resolveErrorMessage(error);
        sendErrorLog(error);
        Alert.alert(title, message);
      }
    }
  }, [error, errorUpdateCount, isAutoLoggedIn, isLoadingError]);
  return {isLoading, isLoadingError, handleLoadError};
};
