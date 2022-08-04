import {useCallback} from 'react';

import {useDate1CanceledKey} from '../client-states/useDate1CanceledKey';
import {useSelectedDate1} from '../client-states/useSelectedDate1';

export const useNeutralButtonPressedDate1UseCase = () => {
  const [, setCanceledKey] = useDate1CanceledKey();
  const [, setSelectedDate1] = useSelectedDate1();
  // Neutralボタンをタップすると、選択された値をクリアします。
  const onNeutralButtonPressedForDate1 = useCallback(() => {
    setSelectedDate1(undefined);
    setCanceledKey(undefined);
  }, [setCanceledKey, setSelectedDate1]);
  return {onNeutralButtonPressedForDate1};
};
