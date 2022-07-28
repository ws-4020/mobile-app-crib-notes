import {useCallback} from 'react';

import {useSelectedDate1} from './useSelectedDate1';

export const useChangeSelectedDate1UseCase = () => {
  const [, setSelectedDate1] = useSelectedDate1();
  const onSelectedItemChangeForDate1 = useCallback(
    (selectedValue?: Date) => {
      setSelectedDate1(selectedValue);
    },
    [setSelectedDate1],
  );
  return {onSelectedItemChangeForDate1};
};
