import {useCallback} from 'react';

import {useDate1CanceledKey} from '../client-states/useDate1CanceledKey';

export const useDoneDate1UseCase = () => {
  const [, setCanceledKey] = useDate1CanceledKey();
  const onDoneForDate1 = useCallback(
    (selectedValue?: Date) => {
      setCanceledKey(selectedValue);
    },
    [setCanceledKey],
  );
  return {onDoneForDate1};
};
