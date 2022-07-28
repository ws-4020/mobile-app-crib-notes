import {Item} from 'bases/ui/components/picker/SelectPicker';
import {useCallback} from 'react';

import {Item1Type} from '../types/Item1Type';
import {useItems1CanceledKey} from './useItems1CanceledKey';

export const useDismissItem1UseCase = () => {
  const [, setCancelKey] = useItems1CanceledKey();
  const onDismissForItem1 = useCallback(
    (selectedItem?: Item<Item1Type>) => {
      setCancelKey(selectedItem?.key);
    },
    [setCancelKey],
  );
  return {onDismissForItem1};
};
