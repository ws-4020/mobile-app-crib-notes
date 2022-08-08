import {useCallback} from 'react';

import {useSelectedDate2} from '../client-states/useSelectedDate2';

export const useChangeSelectedDate2 = () => {
  const [, setSelectedDate2] = useSelectedDate2();
  const onSelectedItemChangeForDate2 = useCallback(
    (selectedValue?: Date) => {
      setSelectedDate2(selectedValue);
    },
    [setSelectedDate2],
  );
  return {onSelectedItemChangeForDate2};
};
