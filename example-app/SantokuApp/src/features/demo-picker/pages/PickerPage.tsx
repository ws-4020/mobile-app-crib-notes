import {m} from 'bases/message/utils/Message';
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
import {useCancelDate1UseCase} from '../use-cases/useCancelDate1UseCase';
import {useCancelItem1UseCase} from '../use-cases/useCancelItem1UseCase';
import {useCancelYearMonthUseCase} from '../use-cases/useCancelYearMonthUseCase';
import {useChangeSelectedDate1UseCase} from '../use-cases/useChangeSelectedDate1UseCase';
import {useChangeSelectedDate2UseCase} from '../use-cases/useChangeSelectedDate2UseCase';
import {useChangeSelectedDate3UseCase} from '../use-cases/useChangeSelectedDate3UseCase';
import {useChangeSelectedItem1UseCase} from '../use-cases/useChangeSelectedItem1UseCase';
import {useChangeSelectedYearMonthUseCase} from '../use-cases/useChangeSelectedYearMonthUseCase';
import {useDeleteDate1UseCase} from '../use-cases/useDeleteDate1UseCase';
import {useDeleteItem1UseCase} from '../use-cases/useDeleteItem1UseCase';
import {useDeleteYearMonthUseCase} from '../use-cases/useDeleteYearMonthUseCase';
import {useDismissDate1UseCase} from '../use-cases/useDismissDate1UseCase';
import {useDismissItem1UseCase} from '../use-cases/useDismissItem1UseCase';
import {useDismissYearMonthUseCase} from '../use-cases/useDismissYearMonthUseCase';
import {useDoneDate1UseCase} from '../use-cases/useDoneDate1UseCase';
import {useDoneItem1UseCase} from '../use-cases/useDoneItem1UseCase';
import {useDoneYearMonthUseCase} from '../use-cases/useDoneYearMonthUseCase';
import {useItems1InputValueUseCase} from '../use-cases/useItems1InputValueUseCase';
import {useMaximumDateUseCase} from '../use-cases/useMaximumDateUseCase';
import {useMaximumYearMonthUseCase} from '../use-cases/useMaximumYearMonthUseCase';
import {useMinimumDateUseCase} from '../use-cases/useMinimumDateUseCase';
import {useMinimumYearMonthUseCase} from '../use-cases/useMinimumYearMonthUseCase';
import {useNeutralButtonPressedDate1UseCase} from '../use-cases/useNeutralButtonPressedDate1UseCase';
import {formatDate} from '../utils/formatDate';

export const PickerPage: React.FC = () => {
  const [items1Key] = useItems1Key();
  const {items1InputValue} = useItems1InputValueUseCase();
  const {onSelectedItem1Change} = useChangeSelectedItem1UseCase();
  const {onDismissForItem1} = useDismissItem1UseCase();
  const {onDeleteForItem1} = useDeleteItem1UseCase();
  const {onCancelForItem1} = useCancelItem1UseCase();
  const {onDoneForItem1} = useDoneItem1UseCase();
  const maximumYearMonth = useMaximumYearMonthUseCase();
  const minimumYearMonth = useMinimumYearMonthUseCase();
  const [yearMonth] = useYearMonth();
  const {onSelectedYearMonthChange} = useChangeSelectedYearMonthUseCase();
  const {onDismissForYearMonthPicker} = useDismissYearMonthUseCase();
  const {onDeleteForYearMonthPicker} = useDeleteYearMonthUseCase();
  const {onCancelForYearMonthPicker} = useCancelYearMonthUseCase();
  const {onDoneForYearMonthPicker} = useDoneYearMonthUseCase();
  const maximumDate = useMaximumDateUseCase();
  const minimumDate = useMinimumDateUseCase();
  const [selectedDate1] = useSelectedDate1();
  const {onSelectedItemChangeForDate1} = useChangeSelectedDate1UseCase();
  const {onDismissForDate1} = useDismissDate1UseCase();
  const {onDeleteForDate1} = useDeleteDate1UseCase();
  const {onCancelForDate1} = useCancelDate1UseCase();
  const {onDoneForDate1} = useDoneDate1UseCase();
  const {onNeutralButtonPressedForDate1} = useNeutralButtonPressedDate1UseCase();
  const [selectedDate2] = useSelectedDate2();
  const {onSelectedItemChangeForDate2} = useChangeSelectedDate2UseCase();
  const [selectedDate3] = useSelectedDate3();
  const {onSelectedItemChangeForDate3} = useChangeSelectedDate3UseCase();

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
