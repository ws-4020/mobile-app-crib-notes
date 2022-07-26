import {useCallback} from 'react';

import {useButtonDisableClientState} from './useButtonDisableClientState';

export const useOnScrollEndOnceUseCase = () => {
  const [, setButtonDisable] = useButtonDisableClientState();
  const onScrollEndOnce = useCallback(() => setButtonDisable(false), [setButtonDisable]);
  return {onScrollEndOnce};
};
