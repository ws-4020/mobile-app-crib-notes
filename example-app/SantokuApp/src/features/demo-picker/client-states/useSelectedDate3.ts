import {useClientState} from 'bases/react-query/hooks/useClientState';

export const useSelectedDate3 = () => {
  return useClientState<Date>(['demo-picker', 'selectedDate3']);
};
