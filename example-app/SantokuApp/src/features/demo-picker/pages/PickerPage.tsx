import {m} from 'bases/message/Message';
import {DateTimePicker} from 'bases/ui/picker/DateTimePicker';
import {SelectPicker} from 'bases/ui/picker/SelectPicker';
import {YearMonthPicker} from 'bases/ui/picker/YearMonthPicker';
import React from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {Input, Text} from 'react-native-elements';

import {useItems1Key} from '../client-states/useItems1Key';
import {useSelectedDate1} from '../client-states/useSelectedDate1';
import {useSelectedDate2} from '../client-states/useSelectedDate2';
import {useSelectedDate3} from '../client-states/useSelectedDate3';
import {useYearMonth} from '../client-states/useYearMonth';
import {items1} from '../constants/items1';
import {placeholder} from '../constants/placeholder';
import {useCancelDate1} from '../use-cases/useCancelDate1';
import {useCancelItem1} from '../use-cases/useCancelItem1';
import {useCancelYearMonth} from '../use-cases/useCancelYearMonth';
import {useChangeSelectedDate1} from '../use-cases/useChangeSelectedDate1';
import {useChangeSelectedDate2} from '../use-cases/useChangeSelectedDate2';
import {useChangeSelectedDate3} from '../use-cases/useChangeSelectedDate3';
import {useChangeSelectedItem1} from '../use-cases/useChangeSelectedItem1';
import {useChangeSelectedYearMonth} from '../use-cases/useChangeSelectedYearMonth';
import {useDeleteDate1} from '../use-cases/useDeleteDate1';
import {useDeleteItem1} from '../use-cases/useDeleteItem1';
import {useDeleteYearMonth} from '../use-cases/useDeleteYearMonth';
import {useDismissDate1} from '../use-cases/useDismissDate1';
import {useDismissItem1} from '../use-cases/useDismissItem1';
import {useDismissYearMonth} from '../use-cases/useDismissYearMonth';
import {useDoneDate1} from '../use-cases/useDoneDate1';
import {useDoneItem1} from '../use-cases/useDoneItem1';
import {useDoneYearMonth} from '../use-cases/useDoneYearMonth';
import {useItems1InputValue} from '../use-cases/useItems1InputValue';
import {useMaximumDate} from '../use-cases/useMaximumDate';
import {useMaximumYearMonth} from '../use-cases/useMaximumYearMonth';
import {useMinimumDate} from '../use-cases/useMinimumDate';
import {useMinimumYearMonth} from '../use-cases/useMinimumYearMonth';
import {useNeutralButtonPressedDate1} from '../use-cases/useNeutralButtonPressedDate1';
import {formatDate} from '../utils/formatDate';

export const PickerPage: React.FC = () => {
  const [items1Key] = useItems1Key();
  const {items1InputValue} = useItems1InputValue();
  const {onSelectedItem1Change} = useChangeSelectedItem1();
  const {onDismissForItem1} = useDismissItem1();
  const {onDeleteForItem1} = useDeleteItem1();
  const {onCancelForItem1} = useCancelItem1();
  const {onDoneForItem1} = useDoneItem1();
  const maximumYearMonth = useMaximumYearMonth();
  const minimumYearMonth = useMinimumYearMonth();
  const [yearMonth] = useYearMonth();
  const {onSelectedYearMonthChange} = useChangeSelectedYearMonth();
  const {onDismissForYearMonthPicker} = useDismissYearMonth();
  const {onDeleteForYearMonthPicker} = useDeleteYearMonth();
  const {onCancelForYearMonthPicker} = useCancelYearMonth();
  const {onDoneForYearMonthPicker} = useDoneYearMonth();
  const maximumDate = useMaximumDate();
  const minimumDate = useMinimumDate();
  const [selectedDate1] = useSelectedDate1();
  const {onSelectedItemChangeForDate1} = useChangeSelectedDate1();
  const {onDismissForDate1} = useDismissDate1();
  const {onDeleteForDate1} = useDeleteDate1();
  const {onCancelForDate1} = useCancelDate1();
  const {onDoneForDate1} = useDoneDate1();
  const {onNeutralButtonPressedForDate1} = useNeutralButtonPressedDate1();
  const [selectedDate2] = useSelectedDate2();
  const {onSelectedItemChangeForDate2} = useChangeSelectedDate2();
  const [selectedDate3] = useSelectedDate3();
  const {onSelectedItemChangeForDate3} = useChangeSelectedDate3();

  return (
    <View style={styles.container}>
      <Text>■SelectPicker</Text>
      <SelectPicker
        selectedItemKey={items1Key}
        onSelectedItemChange={onSelectedItem1Change}
        items={items1}
        onDismiss={onDismissForItem1}
        onDelete={onDeleteForItem1}
        onCancel={onCancelForItem1}
        onDone={onDoneForItem1}
        pickerAccessoryProps={{deleteLabel: m('消去'), cancelLabel: m('キャンセル'), doneLabel: m('完了')}}
        textInputComponent={<Input placeholder={placeholder} value={items1InputValue} editable={false} />}
      />
      <Text>■YearMonthPicker</Text>
      <YearMonthPicker
        selectedValue={yearMonth}
        maximumYearMonth={maximumYearMonth}
        minimumYearMonth={minimumYearMonth}
        yearSuffixLabel={m('年')}
        monthSuffixLabel={m('月')}
        placeholder={placeholder}
        onSelectedItemChange={onSelectedYearMonthChange}
        onDismiss={onDismissForYearMonthPicker}
        onDelete={onDeleteForYearMonthPicker}
        onCancel={onCancelForYearMonthPicker}
        onDone={onDoneForYearMonthPicker}
        pickerAccessoryProps={{deleteLabel: m('消去'), cancelLabel: m('キャンセル'), doneLabel: m('完了')}}
        textInputProps={{style: styles.pickerTextInputStyle}}
      />
      <View style={styles.space} />
      <Text>■DateTimePicker1</Text>
      <DateTimePicker
        selectedValue={selectedDate1}
        maximumDate={maximumDate}
        minimumDate={minimumDate}
        defaultValue={maximumDate}
        onSelectedItemChange={onSelectedItemChangeForDate1}
        onDismiss={onDismissForDate1}
        onDelete={onDeleteForDate1}
        onCancel={onCancelForDate1}
        onDone={onDoneForDate1}
        onNeutralButtonPressed={onNeutralButtonPressedForDate1}
        formatText={formatDate}
        mode="date"
        displayIOS="spinner"
        displayAndroid="calendar"
        pickerAccessoryProps={{deleteLabel: m('消去'), cancelLabel: m('キャンセル'), doneLabel: m('完了')}}
        pickerItemsProps={{neutralButtonLabel: m('消去')}}
        textInputProps={{style: styles.pickerTextInputStyle}}
        placeholder={`mode:date,${Platform.OS === 'ios' ? 'display: spinner' : 'display: calendar'}`}
      />
      <View style={styles.space} />
      <Text>■DateTimePicker2</Text>
      <DateTimePicker
        selectedValue={selectedDate2}
        maximumDate={maximumDate}
        minimumDate={minimumDate}
        defaultValue={maximumDate}
        onSelectedItemChange={onSelectedItemChangeForDate2}
        formatText={formatDate}
        mode="date"
        displayIOS="inline"
        displayAndroid="spinner"
        pickerAccessoryProps={{doneLabel: m('完了')}}
        // displayIOSを「inline」に設定すると、一部機種で曜日が潰れて表示されるため、少し大きめのheightを設定して潰れないようにしています。
        pickerItemsProps={{style: styles.dateTimePickerWithInline}}
        textInputProps={{style: styles.pickerTextInputStyle}}
        placeholder={`mode:date,${Platform.OS === 'ios' ? 'display: inline' : 'display: spinner'}`}
      />
      <View style={styles.space} />
      <Text>■DateTimePicker3</Text>
      <DateTimePicker
        selectedValue={selectedDate3}
        defaultValue={maximumDate}
        onSelectedItemChange={onSelectedItemChangeForDate3}
        mode="time"
        displayIOS="spinner"
        displayAndroid="clock"
        pickerAccessoryProps={{doneLabel: m('完了')}}
        textInputProps={{style: styles.pickerTextInputStyle}}
        placeholder={`mode:date,${Platform.OS === 'ios' ? 'display: spinner' : 'display: clock'}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  dateMonthContainer: {
    flexDirection: 'row',
  },
  dateMonthPicker: {
    width: '50%',
  },
  pickerTextInputStyle: {
    borderBottomWidth: 1,
    borderColor: 'grey',
    paddingVertical: 5,
    color: 'black',
  },
  dateTimePickerWithInline: {
    height: 400,
  },
  space: {
    height: 20,
  },
});
