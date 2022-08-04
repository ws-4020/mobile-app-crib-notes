import {useCallback} from 'react';

import {useYearMonth} from '../client-states/useYearMonth';
import {useYearMonthCanceledKey} from '../client-states/useYearMonthCanceledKey';

export const useCancelYearMonthUseCase = () => {
  const [, setYearMonth] = useYearMonth();
  const [yearMonthCanceledKey] = useYearMonthCanceledKey();
  const onCancelForYearMonthPicker = useCallback(() => {
    setYearMonth(yearMonthCanceledKey);
  }, [setYearMonth, yearMonthCanceledKey]);
  return {onCancelForYearMonthPicker};
};
