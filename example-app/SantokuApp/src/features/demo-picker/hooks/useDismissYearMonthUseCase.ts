import {YearMonth} from 'bases/ui/utils/YearMonth';
import {useCallback} from 'react';

import {useYearMonthCanceledKey} from './useYearMonthCanceledKey';

export const useDismissYearMonthUseCase = () => {
  const [, setYearMonthCanceledKey] = useYearMonthCanceledKey();
  const onDismissForYearMonthPicker = useCallback(
    (yearMonth?: YearMonth) => {
      setYearMonthCanceledKey(yearMonth);
    },
    [setYearMonthCanceledKey],
  );
  return {onDismissForYearMonthPicker};
};
