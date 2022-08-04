import {useClientState} from 'bases/react-query/utils/useClientState';
import {YearMonth} from 'bases/ui/utils/YearMonth';

export const useYearMonth = () => {
  return useClientState<YearMonth>(['demo-picker', 'yearMonth']);
};
