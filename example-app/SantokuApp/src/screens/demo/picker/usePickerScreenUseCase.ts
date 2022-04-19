import React, {useCallback, useMemo, useState} from 'react';

import {Item, ItemWithKey} from '../../../components/picker/SelectPicker';

type Item1Type = {
  a?: string;
};
const items1: Item<Item1Type>[] | ItemWithKey<Item1Type>[] = [
  {value: {a: '1'}, label: 'test1', key: '1', inputLabel: 'テスト1'},
  {value: {a: '2'}, label: 'test2', key: '2', inputLabel: 'テスト2'},
  {value: {a: '3'}, label: 'test3', key: '3', inputLabel: 'テスト3'},
];

const items2 = [
  {value: '1', label: 'test1', inputLabel: 'テスト1'},
  {value: '2', label: 'test2', inputLabel: 'テスト2'},
  {value: '3', label: 'test3', inputLabel: 'テスト3'},
];

const items3 = [
  {value: '1', label: 'test1', inputLabel: 'テスト1'},
  {value: '2', label: 'test2', inputLabel: 'テスト2'},
  {value: '3', label: 'test3', inputLabel: 'テスト3'},
];

export const usePickerScreenUseCase = () => {
  //////////////////////////////////////////////////////////////////////////////////
  // Items1
  //////////////////////////////////////////////////////////////////////////////////
  const [items1Key, setItems1Key] = useState<React.Key>();
  const [items1CanceledKey, setItems1CanceledKey] = useState<React.Key>();
  const onSelectedItemChangeForItem1 = useCallback((_, __, key?: React.Key) => {
    setItems1Key(key);
  }, []);
  const onDismissForItem1 = useCallback((selectedItem: Item<Item1Type> | ItemWithKey<Item1Type> | undefined) => {
    setItems1CanceledKey(selectedItem?.key);
  }, []);
  const onDeleteForItem1 = useCallback(() => {
    setItems1Key(undefined);
    setItems1CanceledKey(undefined);
  }, []);
  const onCancelForItem1 = useCallback(() => {
    setItems1Key(items1CanceledKey);
  }, [items1CanceledKey]);
  const onDoneForItem1 = useCallback((selectedItem: Item<Item1Type> | ItemWithKey<Item1Type> | undefined) => {
    setItems1CanceledKey(selectedItem?.key);
  }, []);

  //////////////////////////////////////////////////////////////////////////////////
  // Items2
  //////////////////////////////////////////////////////////////////////////////////
  const [items2Value, setItems2Value] = useState<string>();
  const onSelectedItemChangeForItem2 = useCallback((_, value?: string, __?) => {
    setItems2Value(value);
  }, []);

  //////////////////////////////////////////////////////////////////////////////////
  // Items3
  //////////////////////////////////////////////////////////////////////////////////
  const [items3Key, setItems3Key] = useState<React.Key>();
  const onSelectedItemChangeForItem3 = useCallback((_, __, key?: React.Key) => {
    setItems3Key(key);
  }, []);

  //////////////////////////////////////////////////////////////////////////////////
  // Items4
  //////////////////////////////////////////////////////////////////////////////////
  const now = new Date();
  const nowYear = now.getFullYear();
  const nowMonth = now.getMonth() + 1;
  const nowYearMonth = useMemo(() => new Date(nowYear, nowMonth), [nowMonth, nowYear]);
  const yearTenYearsAgo = useMemo(() => nowYear - 10, [nowYear]);
  const yearMonthTenYearsAgo = useMemo(() => new Date(yearTenYearsAgo, nowMonth), [nowMonth, yearTenYearsAgo]);
  const yearItems = useMemo(() => {
    const tenYearsAgo = nowYear - 10;
    return [...Array<number>(11)].map((_, index: number) => {
      const y = tenYearsAgo + index;
      return {value: y, label: `${y}年`};
    });
  }, [nowYear]);
  const monthItems = useMemo(
    () =>
      [...Array<number>(12)].map((_, index: number) => {
        const m = index + 1;
        return {value: m, label: `${m}月`};
      }),
    [],
  );
  const [items4YearValue, setItems4YearValue] = useState<number>(nowYear);
  const [items4MonthValue, setItems4MonthValue] = useState<number>(nowMonth);
  const onValueChangeYear = useCallback(
    (value: React.Key) => {
      const castedValue = value as number;
      setItems4YearValue(castedValue);
      // 選択した日付が現在日付より未来日の場合は、現在月に設定する
      if (nowYearMonth < new Date(castedValue, items4MonthValue)) {
        setItems4MonthValue(nowMonth);
        return;
      }
      // 選択した日付が現在日付の10年前より過去日の場合は、現在月に設定する
      if (new Date(castedValue, items4MonthValue) < yearMonthTenYearsAgo) {
        setItems4MonthValue(nowMonth);
      }
    },
    [items4MonthValue, nowMonth, nowYearMonth, yearMonthTenYearsAgo],
  );
  const onValueChangeMonth = useCallback(
    (value: React.Key) => {
      const castedValue = value as number;
      // 選択した日付が現在日付より未来日の場合は、現在月に設定する
      if (nowYearMonth < new Date(items4YearValue, castedValue)) {
        setItems4MonthValue(nowMonth);
        return;
      }
      // 選択した日付が現在日付の10年前より過去日の場合は、現在月に設定する
      if (new Date(items4YearValue, castedValue) < yearMonthTenYearsAgo) {
        setItems4MonthValue(nowMonth);
        return;
      }
      setItems4MonthValue(castedValue);
    },
    [items4YearValue, nowMonth, nowYearMonth, yearMonthTenYearsAgo],
  );
  const selectedYearLabel = useMemo(
    () => yearItems.find(item => item.value === items4YearValue)?.label!,
    [items4YearValue, yearItems],
  );
  const selectedMonthLabel = useMemo(
    () => monthItems.find(item => item.value === items4MonthValue)?.label!,
    [items4MonthValue, monthItems],
  );
  const selectedLabelForItem4 = useMemo(
    () => `${selectedYearLabel}${selectedMonthLabel}`,
    [selectedMonthLabel, selectedYearLabel],
  );

  return {
    items1,
    items1Key,
    onSelectedItemChangeForItem1,
    onDismissForItem1,
    onDeleteForItem1,
    onCancelForItem1,
    onDoneForItem1,
    items2,
    items2Value,
    onSelectedItemChangeForItem2,
    items3,
    items3Key,
    onSelectedItemChangeForItem3,
    items4: {yearItems, monthItems},
    items4YearValue,
    items4MonthValue,
    onValueChangeYear,
    onValueChangeMonth,
    selectedLabelForItem4,
  };
};
