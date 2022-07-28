import {useMemo} from 'react';

import {items1} from '../constants/items1';
import {placeholder} from '../constants/placeholder';
import {useItems1Key} from './useItems1Key';

export const useItems1InputValue = () => {
  const [items1Key] = useItems1Key();
  const items1InputValue = useMemo(
    () => items1.find(item => item.key === items1Key)?.inputLabel ?? placeholder,
    [items1Key],
  );
  return {items1InputValue};
};
