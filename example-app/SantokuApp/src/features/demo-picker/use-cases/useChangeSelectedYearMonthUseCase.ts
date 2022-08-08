import {YearMonth} from 'bases/ui/picker/YearMonth';
import {useCallback} from 'react';

import {useYearMonth} from '../client-states/useYearMonth';

export const useChangeSelectedYearMonthUseCase = () => {
  const [, setYearMonth] = useYearMonth();
  const onSelectedYearMonthChange = useCallback((yearMonth?: YearMonth) => setYearMonth(yearMonth), [setYearMonth]);
  return {onSelectedYearMonthChange};
};
