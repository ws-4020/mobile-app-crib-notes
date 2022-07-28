import {YearMonth} from 'bases/ui/utils/YearMonth';
import {useCallback} from 'react';

import {useYearMonthCanceledKey} from './useYearMonthCanceledKey';

export const useDoneYearMonthUseCase = () => {
  const [, setYearMonthCanceledKey] = useYearMonthCanceledKey();
  const onDoneForYearMonthPicker = useCallback(
    (yearMonth?: YearMonth) => {
      setYearMonthCanceledKey(yearMonth);
    },
    [setYearMonthCanceledKey],
  );
  return {onDoneForYearMonthPicker};
};
