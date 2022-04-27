import {useMemo} from 'react';

import {YearMonthPickerProps} from './YearMonthPicker';
import {useYearMonthPickerUseCase} from './useYearMonthPickerUseCase';

export const useYearMonthPickerIOSUseCase = (props: YearMonthPickerProps) => {
  const {unselectItem, ...yearMonthPickerProps} = props;
  const {selectedYear, selectedMonth, ...useCase} = useYearMonthPickerUseCase(yearMonthPickerProps);
  const {yearSuffixLabel, monthSuffixLabel} = yearMonthPickerProps;
  const selectedLabel = useMemo(
    () =>
      selectedYear && selectedMonth
        ? `${selectedYear}${yearSuffixLabel ?? ''}${selectedMonth}${monthSuffixLabel ?? ''}`
        : undefined,
    [monthSuffixLabel, selectedMonth, selectedYear, yearSuffixLabel],
  );

  return {...useCase, selectedYear, selectedMonth, selectedLabel};
};
