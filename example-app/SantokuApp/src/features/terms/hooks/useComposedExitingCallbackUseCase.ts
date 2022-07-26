import {useCallback} from 'react';

import {useButtonDisableClientState} from './useButtonDisableClientState';
import {useIsExitedClientState} from './useIsExitedClientState';

export const useComposedExitingCallbackUseCase = (exitingCallback?: (finished: boolean) => unknown) => {
  const [, setButtonDisable] = useButtonDisableClientState();
  const [, setIsExited] = useIsExitedClientState();
  const composedExitingCallback = useCallback(
    (finished: boolean) => {
      try {
        exitingCallback?.(finished);
      } finally {
        setButtonDisable(true);
        setIsExited(true);
      }
    },
    [exitingCallback, setButtonDisable, setIsExited],
  );
  return {composedExitingCallback};
};
