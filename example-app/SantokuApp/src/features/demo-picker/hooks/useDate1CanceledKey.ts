import {useClientState} from 'bases/react-query/hooks/useClientState';

export const useDate1CanceledKey = () => {
  return useClientState<Date>(['demo-picker', 'date1CanceledKey']);
};
