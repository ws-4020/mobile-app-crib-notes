import {Item} from 'bases/ui/components/picker/SelectPicker';
import {useCallback} from 'react';

import {Item1Type} from '../types/Item1Type';
import {useItems1Key} from './useItems1Key';

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
