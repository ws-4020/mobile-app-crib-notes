import {Item} from 'bases/ui/components/picker/SelectPicker';
import {useCallback} from 'react';

import {useItems1CanceledKey} from '../client-states/useItems1CanceledKey';
import {Item1Type} from '../types/Item1Type';

export const useDoneItem1UseCase = () => {
  const [, setCancelKey] = useItems1CanceledKey();
  const onDoneForItem1 = useCallback(
    (selectedItem?: Item<Item1Type>) => {
      setCancelKey(selectedItem?.key);
    },
    [setCancelKey],
  );
  return {onDoneForItem1};
};
