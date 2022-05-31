import {Event, AndroidEvent} from '@react-native-community/datetimepicker';
import {useCallback} from 'react';

import {DateTimePickerProps} from './DateTimePicker';
import {useDateTimePickerUseCase} from './useDateTimePickerUseCase';

export const useDateTimePickerAndroidUseCase = (props: DateTimePickerProps) => {
  const {setIsVisible, close, ...useCase} = useDateTimePickerUseCase(props);
  const {onDismiss, onDone, onSelectedItemChange} = props;

  const open = useCallback(() => {
    setIsVisible(true);
  }, [setIsVisible]);

  const handleDismiss = useCallback(
    (selectedValue?: Date) => {
      onDismiss?.(selectedValue);
      close();
    },
    [close, onDismiss],
  );

  const handleDone = useCallback(
    (selectedValue?: Date) => {
      onDone?.(selectedValue);
      close();
    },
    [close, onDone],
  );

  const onValueChange = useCallback(
    (event: Event | AndroidEvent, date?: Date) => {
      onSelectedItemChange?.(date);
      if (event.type === 'dismissed') {
        handleDismiss(date);
      } else if (event.type === 'set') {
        handleDone(date);
      }
    },
    [handleDismiss, handleDone, onSelectedItemChange],
  );

  return {
    ...useCase,
    onValueChange,
    open,
  };
};
