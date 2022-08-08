import {useClientState} from 'bases/react-query/useClientState';
import {YearMonth} from 'bases/ui/picker/YearMonth';

export const useYearMonthCanceledKey = () => {
  return useClientState<YearMonth>(['demo-picker', 'yearMonthCanceledKey']);
};
