import {useCallback} from 'react';

import {useYearMonth} from './useYearMonth';
import {useYearMonthCanceledKey} from './useYearMonthCanceledKey';

export const useDeleteYearMonthUseCase = () => {
  const [, setYearMonth] = useYearMonth();
  const [, setYearMonthCanceledKey] = useYearMonthCanceledKey();
  const onDeleteForYearMonthPicker = useCallback(() => {
    setYearMonth(undefined);
    setYearMonthCanceledKey(undefined);
  }, [setYearMonth, setYearMonthCanceledKey]);
  return {onDeleteForYearMonthPicker};
};
