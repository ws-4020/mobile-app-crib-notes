import {useClientState} from 'bases/react-query/useClientState';

export const useSelectedDate1 = () => {
  return useClientState<Date>(['demo-picker', 'selectedDate1']);
};
