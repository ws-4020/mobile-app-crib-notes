import {useCallback} from 'react';

import {useSelectedDate1} from '../client-states/useSelectedDate1';

export const useChangeSelectedDate1 = () => {
  const [, setSelectedDate1] = useSelectedDate1();
  const onSelectedItemChangeForDate1 = useCallback(
    (selectedValue?: Date) => {
      setSelectedDate1(selectedValue);
    },
    [setSelectedDate1],
  );
  return {onSelectedItemChangeForDate1};
};
