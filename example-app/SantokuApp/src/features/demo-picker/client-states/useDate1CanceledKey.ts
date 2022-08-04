import {useClientState} from 'bases/react-query/utils/useClientState';

export const useDate1CanceledKey = () => {
  return useClientState<Date>(['demo-picker', 'date1CanceledKey']);
};
