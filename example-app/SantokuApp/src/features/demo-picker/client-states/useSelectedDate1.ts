import {useClientState} from 'bases/react-query/utils/useClientState';

export const useSelectedDate1 = () => {
  return useClientState<Date>(['demo-picker', 'selectedDate1']);
};
