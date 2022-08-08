import {useMemo} from 'react';

import {useItems1Key} from '../client-states/useItems1Key';
import {items1} from '../constants/items1';
import {placeholder} from '../constants/placeholder';

export const useItems1InputValue = () => {
  const [items1Key] = useItems1Key();
  const items1InputValue = useMemo(
    () => items1.find(item => item.key === items1Key)?.inputLabel ?? placeholder,
    [items1Key],
  );
  return {items1InputValue};
};
