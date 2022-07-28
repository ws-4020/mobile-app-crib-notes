import {YearMonth} from 'bases/ui/utils/YearMonth';
import {useCallback} from 'react';

import {useYearMonth} from './useYearMonth';

export const useChangeSelectedYearMonthUseCase = () => {
  const [, setYearMonth] = useYearMonth();
  const onSelectedYearMonthChange = useCallback((yearMonth?: YearMonth) => setYearMonth(yearMonth), [setYearMonth]);
  return {onSelectedYearMonthChange};
};
