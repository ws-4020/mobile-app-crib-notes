import {useCallback} from 'react';

import {useItems1CanceledKey} from '../client-states/useItems1CanceledKey';
import {useItems1Key} from '../client-states/useItems1Key';

export const useCancelItem1 = () => {
  const [cancelKey] = useItems1CanceledKey();
  const [, setItems1Key] = useItems1Key();
  const onCancelForItem1 = useCallback(() => {
    setItems1Key(cancelKey);
  }, [cancelKey, setItems1Key]);
  return {onCancelForItem1};
};
