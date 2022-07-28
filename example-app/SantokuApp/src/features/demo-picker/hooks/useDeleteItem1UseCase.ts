import {useCallback} from 'react';

import {useItems1CanceledKey} from './useItems1CanceledKey';
import {useItems1Key} from './useItems1Key';

export const useDeleteItem1UseCase = () => {
  const [, setCancelKey] = useItems1CanceledKey();
  const [, setItems1Key] = useItems1Key();
  const onDeleteForItem1 = useCallback(() => {
    setItems1Key(undefined);
    setCancelKey(undefined);
  }, [setCancelKey, setItems1Key]);
  return {onDeleteForItem1};
};
