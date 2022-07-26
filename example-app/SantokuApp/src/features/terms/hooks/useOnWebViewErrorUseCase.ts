import {useCallback} from 'react';

import {useIsWebViewErrorClientState} from './useIsWebViewErrorClientState';

export const useOnWebViewErrorUseCase = () => {
  const [, setIsWebViewError] = useIsWebViewErrorClientState();
  const onWebViewError = useCallback(() => {
    setIsWebViewError(true);
  }, [setIsWebViewError]);
  return {onWebViewError};
};
