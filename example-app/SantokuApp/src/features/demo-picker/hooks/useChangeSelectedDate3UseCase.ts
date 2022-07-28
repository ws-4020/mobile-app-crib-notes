import {useCallback} from 'react';

import {useSelectedDate3} from './useSelectedDate3';

export const useChangeSelectedDate3UseCase = () => {
  const [, setSelectedDate3] = useSelectedDate3();
  const onSelectedItemChangeForDate3 = useCallback(
    (selectedValue?: Date) => {
      setSelectedDate3(selectedValue);
    },
    [setSelectedDate3],
  );
  return {onSelectedItemChangeForDate3};
};
