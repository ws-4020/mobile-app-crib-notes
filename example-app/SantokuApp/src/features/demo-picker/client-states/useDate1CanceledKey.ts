import {useClientState} from 'bases/react-query/useClientState';

export const useDate1CanceledKey = () => {
  return useClientState<Date>(['demo-picker', 'date1CanceledKey']);
};
