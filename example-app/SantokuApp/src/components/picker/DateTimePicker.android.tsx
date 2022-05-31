import React from 'react';
import {Pressable, TextInput, View} from 'react-native';

import {DateTimePickerProps} from './DateTimePicker';
import {DateTimePickerItems, DateTimePickerItemsAndroidProps, DateTimePickerItemsProps} from './DateTimePickerItems';
import {useDateTimePickerAndroidUseCase} from './useDateTimePickerAndroidUseCase';

type DateTimePickerAndroidProps = Omit<
  DateTimePickerProps,
  | 'onDelete'
  | 'onCancel'
  | 'mode'
  | 'displayIOS'
  | 'pickerAccessoryComponent'
  | 'pickerItemsComponent'
  | 'pickerItemsContainerProps'
  | 'pickerItemsProps'
  | 'pickerBackdropProps'
  | 'pickerContainerProps'
  | 'pickerAccessoryProps'
> & {
  pickerItemsProps?: Omit<
    DateTimePickerItemsAndroidProps,
    'value' | 'onChange' | 'mode' | 'display' | 'maximumDate' | 'minimumDate'
  >;
  mode?: Exclude<DateTimePickerItemsProps['mode'], 'countdown' | 'datetime'>;
};
export const DateTimePicker = (props: DateTimePickerAndroidProps) => {
  const {isVisible, requiredSelectedValue, inputValue, onValueChange, open} = useDateTimePickerAndroidUseCase(props);
  const {
    maximumDate,
    minimumDate,
    mode,
    displayAndroid,
    placeholder,
    textInputProps,
    textInputComponent,
    pickerItemsProps,
  } = props;
  return (
    <>
      <Pressable onPress={open} testID="pressableContainer">
        <View pointerEvents="box-only">
          {textInputComponent ? (
            textInputComponent
          ) : (
            // テキスト入力とスタイルを合わせるために、TextではなくTextInputを使用する
            <TextInput placeholder={placeholder} value={inputValue} editable={false} {...textInputProps} />
          )}
        </View>
      </Pressable>
      <DateTimePickerItemsComponent
        isVisible={isVisible}
        value={requiredSelectedValue}
        onChange={onValueChange}
        mode={mode}
        display={displayAndroid}
        maximumDate={maximumDate}
        minimumDate={minimumDate}
        {...pickerItemsProps}
      />
    </>
  );
};

type DateTimePickerItemsComponentProps = DateTimePickerItemsProps & {isVisible: boolean};

// Memo workaround for https://github.com/react-native-community/datetimepicker/issues/54
const areEqual = (prevProps: DateTimePickerItemsComponentProps, nextProps: DateTimePickerItemsComponentProps) => {
  return prevProps.isVisible === nextProps.isVisible && prevProps.value.getTime() === nextProps.value.getTime();
};

const DateTimePickerItemsComponent = React.memo((props: DateTimePickerItemsProps & {isVisible: boolean}) => {
  const {isVisible, ...pickerItemsProps} = props;
  if (!isVisible) {
    return null;
  }
  return <DateTimePickerItems {...pickerItemsProps} />;
}, areEqual);
