import {useCallback} from 'react';

import {useYearMonth} from '../client-states/useYearMonth';
import {useYearMonthCanceledKey} from '../client-states/useYearMonthCanceledKey';

export const useDeleteYearMonthUseCase = () => {
  const [, setYearMonth] = useYearMonth();
  const [, setYearMonthCanceledKey] = useYearMonthCanceledKey();
  const onDeleteForYearMonthPicker = useCallback(() => {
    setYearMonth(undefined);
    setYearMonthCanceledKey(undefined);
  }, [setYearMonth, setYearMonthCanceledKey]);
  return {onDeleteForYearMonthPicker};
};
