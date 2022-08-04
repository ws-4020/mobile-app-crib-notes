import {useClientState} from 'bases/react-query/hooks/useClientState';

export const useSelectedDate2 = () => {
  return useClientState<Date>(['demo-picker', 'selectedDate2']);
};
