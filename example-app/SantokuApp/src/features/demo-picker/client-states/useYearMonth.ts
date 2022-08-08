import {useClientState} from 'bases/react-query/useClientState';
import {YearMonth} from 'bases/ui/picker/YearMonth';

export const useYearMonth = () => {
  return useClientState<YearMonth>(['demo-picker', 'yearMonth']);
};
