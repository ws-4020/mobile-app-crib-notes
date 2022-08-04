import {useCallback} from 'react';

import {useDate1CanceledKey} from '../client-states/useDate1CanceledKey';
import {useSelectedDate1} from '../client-states/useSelectedDate1';

export const useDeleteDate1UseCase = () => {
  const [, setCanceledKey] = useDate1CanceledKey();
  const [, setSelectedDate1] = useSelectedDate1();
  const onDeleteForDate1 = useCallback(() => {
    setSelectedDate1(undefined);
    setCanceledKey(undefined);
  }, [setCanceledKey, setSelectedDate1]);
  return {onDeleteForDate1};
};
