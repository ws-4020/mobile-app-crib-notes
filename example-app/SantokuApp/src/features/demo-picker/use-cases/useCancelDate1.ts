import {useCallback} from 'react';

import {useDate1CanceledKey} from '../client-states/useDate1CanceledKey';
import {useSelectedDate1} from '../client-states/useSelectedDate1';

export const useCancelDate1 = () => {
  const [canceledKey] = useDate1CanceledKey();
  const [, setSelectedDate1] = useSelectedDate1();
  const onCancelForDate1 = useCallback(() => {
    setSelectedDate1(canceledKey);
  }, [canceledKey, setSelectedDate1]);
  return {onCancelForDate1};
};
