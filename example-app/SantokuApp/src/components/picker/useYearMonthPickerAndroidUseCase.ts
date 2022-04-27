import React, {useCallback, useMemo} from 'react';

import {YearMonthPickerProps} from './YearMonthPicker';
import {useYearMonthPickerUseCase} from './useYearMonthPickerUseCase';

export const useYearMonthPickerAndroidUseCase = (props: YearMonthPickerProps) => {
  const {selectedYear, selectedMonth, getSelectedYearMonth, ...useCase} = useYearMonthPickerUseCase(props);
  const {onDone, onSelectedItemChange} = props;
  const selectedYearLabel = useMemo(() => (selectedYear ? String(selectedYear) : undefined), [selectedYear]);
  const selectedMonthLabel = useMemo(() => (selectedMonth ? String(selectedMonth) : undefined), [selectedMonth]);
  const onValueChangeYear = useCallback(
    (value: React.Key) => {
      const year = value as number;
      const selectedYearMonth = getSelectedYearMonth({year, month: selectedMonth});
      onSelectedItemChange?.(selectedYearMonth);
      onDone?.(selectedYearMonth);
    },
    [getSelectedYearMonth, onDone, onSelectedItemChange, selectedMonth],
  );
  const onValueChangeMonth = useCallback(
    (value: React.Key) => {
      const month = value as number;
      const selectedYearMonth = getSelectedYearMonth({year: selectedYear, month});
      onSelectedItemChange?.(getSelectedYearMonth(selectedYearMonth));
      onDone?.(selectedYearMonth);
    },
    [getSelectedYearMonth, onDone, onSelectedItemChange, selectedYear],
  );

  return {
    ...useCase,
    selectedYear,
    selectedMonth,
    selectedYearLabel,
    selectedMonthLabel,
    onValueChangeYear,
    onValueChangeMonth,
  };
};
