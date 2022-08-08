import {Item} from 'bases/ui/picker/SelectPicker';
import {useCallback} from 'react';

import {useItems1CanceledKey} from '../client-states/useItems1CanceledKey';
import {Item1Type} from '../types/Item1Type';

export const useDismissItem1 = () => {
  const [, setCancelKey] = useItems1CanceledKey();
  const onDismissForItem1 = useCallback(
    (selectedItem?: Item<Item1Type>) => {
      setCancelKey(selectedItem?.key);
    },
    [setCancelKey],
  );
  return {onDismissForItem1};
};
