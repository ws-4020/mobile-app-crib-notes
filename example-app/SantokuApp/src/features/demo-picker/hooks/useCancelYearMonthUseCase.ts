import {useCallback} from 'react';

import {useYearMonth} from './useYearMonth';
import {useYearMonthCanceledKey} from './useYearMonthCanceledKey';

export const useCancelYearMonthUseCase = () => {
  const [, setYearMonth] = useYearMonth();
  const [yearMonthCanceledKey] = useYearMonthCanceledKey();
  const onCancelForYearMonthPicker = useCallback(() => {
    setYearMonth(yearMonthCanceledKey);
  }, [setYearMonth, yearMonthCanceledKey]);
  return {onCancelForYearMonthPicker};
};
