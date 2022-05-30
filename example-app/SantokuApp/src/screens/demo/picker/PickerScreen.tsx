import {SelectPicker, YearMonthPicker} from 'components/picker';
import {DateTimePicker} from 'components/picker/DateTimePicker';
import {m} from 'framework/message';
import {DemoStackParamList} from 'navigation/types';
import React from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {Input, Text} from 'react-native-elements';

import {usePickerScreenUseCase} from './usePickerScreenUseCase';

const ScreenName = 'Picker';
const Screen: React.FC = () => {
  const {
    items1,
    items1Key,
    items1InputValue,
    onSelectedItemChangeForItem1,
    onDismissForItem1,
    onDeleteForItem1,
    onCancelForItem1,
    onDoneForItem1,
    maximumYearMonth,
    minimumYearMonth,
    yearMonth,
    onSelectedItemChangeForYearMonth,
    onDismissForYearMonthPicker,
    onDeleteForYearMonthPicker,
    onCancelForYearMonthPicker,
    onDoneForYearMonthPicker,
    maximumDate,
    minimumDate,
    formatDate,
    selectedDate1,
    onSelectedItemChangeForDate1,
    onDismissForDate1,
    onDeleteForDate1,
    onCancelForDate1,
    onDoneForDate1,
    selectedDate2,
    onSelectedItemChangeForDate2,
    selectedDate3,
    onSelectedItemChangeForDate3,
    placeholder,
  } = usePickerScreenUseCase();

  return (
    <View style={styles.container}>
      <Text>■SelectPicker</Text>
      <SelectPicker
        selectedItemKey={items1Key}
        onSelectedItemChange={onSelectedItemChangeForItem1}
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
        onSelectedItemChange={onSelectedItemChangeForYearMonth}
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
        formatText={formatDate}
        mode="date"
        displayIOS="spinner"
        displayAndroid="calendar"
        pickerAccessoryProps={{deleteLabel: m('消去'), cancelLabel: m('キャンセル'), doneLabel: m('完了')}}
        textInputProps={{style: styles.pickerTextInputStyle}}
        placeholder={`mode:date,${Platform.OS === 'ios' ? 'display: spinner' : 'display: calendar'}`}
      />
      <View style={styles.space} />
      <Text>■DateTimePicker</Text>
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
        textInputProps={{style: styles.pickerTextInputStyle}}
        placeholder={`mode:date,${Platform.OS === 'ios' ? 'display: inline' : 'display: spinner'}`}
      />
      <View style={styles.space} />
      <Text>■DateTimePicker</Text>
      <DateTimePicker
        selectedValue={selectedDate3}
        defaultValue={maximumDate}
        onSelectedItemChange={onSelectedItemChangeForDate3}
        mode="time"
        displayIOS="spinner"
        displayAndroid="clock"
        textInputProps={{style: styles.pickerTextInputStyle}}
        placeholder={`mode:date,${Platform.OS === 'ios' ? 'display: spinner' : 'display: clock'}`}
      />
    </View>
  );
};

export const PickerScreen: NativeStackScreenConfig<DemoStackParamList, typeof ScreenName> = {
  name: ScreenName,
  component: Screen,
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
  space: {
    height: 20,
  },
});
