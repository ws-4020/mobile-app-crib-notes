import {useCallback} from 'react';

import {useIsWebViewError} from '../client-states/useIsWebViewError';

export const useOnWebViewErrorUseCase = () => {
  const [, setIsWebViewError] = useIsWebViewError();
  const onWebViewError = useCallback(() => {
    setIsWebViewError(true);
  }, [setIsWebViewError]);
  return {onWebViewError};
};
