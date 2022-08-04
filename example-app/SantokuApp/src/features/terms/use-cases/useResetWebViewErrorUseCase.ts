import {useCallback} from 'react';

import {useIsWebViewError} from '../client-states/useIsWebViewError';

export const useResetWebViewErrorUseCase = () => {
  const [, setIsWebViewError] = useIsWebViewError();
  const resetWebViewError = useCallback(() => {
    setIsWebViewError(false);
  }, [setIsWebViewError]);
  return {resetWebViewError};
};
