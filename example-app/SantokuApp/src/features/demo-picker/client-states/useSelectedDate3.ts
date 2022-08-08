import {useClientState} from 'bases/react-query/useClientState';

export const useSelectedDate3 = () => {
  return useClientState<Date>(['demo-picker', 'selectedDate3']);
};
