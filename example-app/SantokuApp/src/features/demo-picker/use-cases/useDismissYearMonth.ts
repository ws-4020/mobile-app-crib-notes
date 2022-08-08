import {YearMonth} from 'bases/ui/picker/YearMonth';
import {useCallback} from 'react';

import {useYearMonthCanceledKey} from '../client-states/useYearMonthCanceledKey';

export const useDismissYearMonth = () => {
  const [, setYearMonthCanceledKey] = useYearMonthCanceledKey();
  const onDismissForYearMonthPicker = useCallback(
    (yearMonth?: YearMonth) => {
      setYearMonthCanceledKey(yearMonth);
    },
    [setYearMonthCanceledKey],
  );
  return {onDismissForYearMonthPicker};
};
