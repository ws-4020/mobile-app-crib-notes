import {useCallback} from 'react';

import {useSelectedDate3} from '../client-states/useSelectedDate3';

export const useChangeSelectedDate3 = () => {
  const [, setSelectedDate3] = useSelectedDate3();
  const onSelectedItemChangeForDate3 = useCallback(
    (selectedValue?: Date) => {
      setSelectedDate3(selectedValue);
    },
    [setSelectedDate3],
  );
  return {onSelectedItemChangeForDate3};
};
