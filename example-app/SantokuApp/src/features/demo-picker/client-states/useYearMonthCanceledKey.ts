import {useClientState} from 'bases/react-query/utils/useClientState';
import {YearMonth} from 'bases/ui/utils/YearMonth';

export const useYearMonthCanceledKey = () => {
  return useClientState<YearMonth>(['demo-picker', 'yearMonthCanceledKey']);
};
