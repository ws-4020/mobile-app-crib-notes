import {useCallback} from 'react';

import {DateTimePickerProps} from './DateTimePicker';
import {useDateTimePickerUseCase} from './useDateTimePickerUseCase';

export const useDateTimePickerAndroidUseCase = (props: DateTimePickerProps) => {
  const {handleDone, ...useCase} = useDateTimePickerUseCase(props);
  const {onSelectedItemChange} = props;

  const onValueChange = useCallback(
    (_, date?: Date) => {
      onSelectedItemChange?.(date);
      handleDone();
    },
    [handleDone, onSelectedItemChange],
  );

  return {
    ...useCase,
    onValueChange,
  };
};
