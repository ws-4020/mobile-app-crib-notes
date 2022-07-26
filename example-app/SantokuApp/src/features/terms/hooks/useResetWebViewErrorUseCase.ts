import {useCallback} from 'react';

import {useIsWebViewErrorClientState} from './useIsWebViewErrorClientState';

export const useResetWebViewErrorUseCase = () => {
  const [, setIsWebViewError] = useIsWebViewErrorClientState();
  const resetWebViewError = useCallback(() => {
    setIsWebViewError(false);
  }, [setIsWebViewError]);
  return {resetWebViewError};
};
