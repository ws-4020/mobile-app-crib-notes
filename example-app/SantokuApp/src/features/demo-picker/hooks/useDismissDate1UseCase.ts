import {useCallback} from 'react';
import {Platform} from 'react-native';

import {useDate1CanceledKey} from './useDate1CanceledKey';
import {useSelectedDate1} from './useSelectedDate1';

export const useDismissDate1UseCase = () => {
  const [canceledKey, setCanceledKey] = useDate1CanceledKey();
  const [, setSelectedDate1] = useSelectedDate1();
  const onDismissForDate1 = useCallback(
    (selectedValue?: Date) => {
      if (Platform.OS === 'android') {
        // Androidの場合は、「キャンセル」ボタンタップ、またはBackdrop領域をタップした場合に、前回選択した値を設定します。
        setSelectedDate1(canceledKey);
      } else if (Platform.OS === 'ios') {
        setCanceledKey(selectedValue);
      }
    },
    [canceledKey, setCanceledKey, setSelectedDate1],
  );
  return {onDismissForDate1};
};
