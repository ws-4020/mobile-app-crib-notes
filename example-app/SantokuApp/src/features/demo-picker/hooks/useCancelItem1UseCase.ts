import {useCallback} from 'react';

import {useItems1CanceledKey} from './useItems1CanceledKey';
import {useItems1Key} from './useItems1Key';

export const useCancelItem1UseCase = () => {
  const [cancelKey] = useItems1CanceledKey();
  const [, setItems1Key] = useItems1Key();
  const onCancelForItem1 = useCallback(() => {
    setItems1Key(cancelKey);
  }, [cancelKey, setItems1Key]);
  return {onCancelForItem1};
};
