import {YearMonth} from 'bases/ui/picker/YearMonth';
import {useCallback} from 'react';

import {useYearMonthCanceledKey} from '../client-states/useYearMonthCanceledKey';

export const useDoneYearMonth = () => {
  const [, setYearMonthCanceledKey] = useYearMonthCanceledKey();
  const onDoneForYearMonthPicker = useCallback(
    (yearMonth?: YearMonth) => {
      setYearMonthCanceledKey(yearMonth);
    },
    [setYearMonthCanceledKey],
  );
  return {onDoneForYearMonthPicker};
};
