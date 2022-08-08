import {Item} from 'bases/ui/picker/SelectPicker';
import {useCallback} from 'react';

import {useItems1Key} from '../client-states/useItems1Key';
import {Item1Type} from '../types/Item1Type';

export const useChangeSelectedItem1UseCase = () => {
  const [, setItems1Key] = useItems1Key();
  const onSelectedItem1Change = useCallback(
    (selectedItem?: Item<Item1Type>) => {
      setItems1Key(selectedItem?.key);
    },
    [setItems1Key],
  );
  return {onSelectedItem1Change};
};
