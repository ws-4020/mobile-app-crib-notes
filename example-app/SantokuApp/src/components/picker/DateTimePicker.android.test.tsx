import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import {StyleSheet, TextInputProps, View, ViewStyle} from 'react-native';

import {DateTimePicker} from './DateTimePicker.android';
import {DateTimePickerItemsAndroidProps} from './DateTimePickerItems';

describe('DateTimePicker only with required props', () => {
  it('renders successfully if invisible', () => {
    const sut = render(
      <DateTimePicker textInputProps={{testID: 'textInput'}} pickerItemsProps={{testID: 'pickerItems'}} />,
    );

    expect(sut).toMatchSnapshot('DateTimePicker if invisible.');

    const textInput = sut.queryByTestId('textInput');
    const pickerItems = sut.queryByTestId('pickerItems');
    expect(textInput).not.toBeNull();
    expect(pickerItems).toBeNull();
  });

  it('renders successfully if visible', () => {
    // selectedValueに固定値を入れないと、Snapshot取得時に毎回値が変わってしまうので、OptionalPropsですが指定しています。
    const selectedValue = new Date(1656601200000);
    // 自動テストだと、displayを指定しないとレンダリングされなかったため、OptionalPropsですがdisplayAndroidを指定してます。
    const displayAndroid = 'calendar';
    // formatTextを指定しないと、タイムゾーンの表記が環境によって違うので、どの環境でも変わらないように指定しています。
    const formatText = (date?: Date) => (date ? date.toISOString() : '');
    const sut = render(
      <DateTimePicker
        selectedValue={selectedValue}
        textInputProps={{testID: 'textInput'}}
        pickerItemsProps={{testID: 'pickerItems'}}
        displayAndroid={displayAndroid}
        formatText={formatText}
      />,
    );
    const pressableContainer = sut.getByTestId('pressableContainer');
    fireEvent.press(pressableContainer);

    expect(sut).toMatchSnapshot('DateTimePicker if visible.');

    const textInput = sut.queryByTestId('textInput');
    const pickerItems = sut.queryByTestId('pickerItems');
    expect(textInput).not.toBeNull();
    expect(pickerItems).not.toBeNull();
  });
});

describe('DateTimePicker with default value', () => {
  it('defaultValue should be set at open if selectedValue does not exist,', () => {
    const defaultValue = new Date(1654786800000);
    const sut = render(
      <DateTimePicker
        defaultValue={defaultValue}
        pickerItemsProps={{testID: 'pickerItems'}}
        displayAndroid="calendar"
      />,
    );
    const pressableContainer = sut.getByTestId('pressableContainer');
    fireEvent.press(pressableContainer);
    expect(sut.getByTestId('pickerItems').props.date).toBe(defaultValue.getTime());
  });
});

describe('DateTimePicker with all props', () => {
  it('should be applied all properly with default xxx component', () => {
    const onSelectedItemChange = jest.fn();
    const onDone = jest.fn();
    const formatText = jest.fn();
    const selectedValue = new Date(1643641200000);
    const maximumDate = new Date(1656601200000);
    const minimumDate = new Date(1612105200000);
    /**
     * onDoneは自動テストではイベント発火できませんでした
     */
    const sut = render(
      <DateTimePicker
        selectedValue={selectedValue}
        maximumDate={maximumDate}
        minimumDate={minimumDate}
        defaultValue={maximumDate}
        onSelectedItemChange={onSelectedItemChange}
        placeholder="please select..."
        textInputProps={{style: {color: 'red'}, testID: 'textInput'}}
        pickerItemsProps={{style: {backgroundColor: 'yellow'}, testID: 'pickerItems'}}
        onDone={onDone}
        formatText={formatText}
        mode="date"
        displayAndroid="calendar"
      />,
    );

    const pressableContainer = sut.getByTestId('pressableContainer');
    fireEvent.press(pressableContainer);

    expect(sut).toMatchSnapshot('DateTimePicker all properly with default xxx component.');

    // assert PickerItems
    const pickerItems = sut.getByTestId('pickerItems');
    const pickerItemsProps = pickerItems.props as DateTimePickerItemsAndroidProps;
    // selectedValueはDateTimePickerItemsAndroidPropsで定義されていない「date」でレンダリングされます
    // @ts-ignore
    expect(pickerItemsProps.date).toBe(selectedValue.getTime());
    expect(pickerItemsProps.maximumDate).toBe(maximumDate.getTime());
    expect(pickerItemsProps.minimumDate).toBe(minimumDate.getTime());
    expect(pickerItemsProps.mode).toBe('date');
    // displayはdisplayIOSというPropでレンダリングされます
    // Platform.OSをモック化してandroidを返却するようにしても「displayIOS」でレンダリングされます
    // @ts-ignore
    expect(pickerItemsProps.displayIOS).toBe('calendar');
    const pickerItemsStyle = pickerItemsProps.style as ViewStyle;
    const flattenPickerItemsStyle = StyleSheet.flatten(pickerItemsStyle);
    expect(flattenPickerItemsStyle.backgroundColor).toBe('yellow');

    // assert textInput
    const textInput = sut.getByTestId('textInput');
    const textInputProps = textInput.props as TextInputProps;
    expect(textInputProps.style).toEqual({color: 'red'});
  });

  it('should be applied all properly with custom xxx component', () => {
    const CustomTextInput = <View testID="customTextInput" />;
    const onSelectedItemChange = jest.fn();
    const onDone = jest.fn();
    const formatText = jest.fn();
    const selectedValue = new Date(1643641200000);
    const maximumDate = new Date(1656601200000);
    const minimumDate = new Date(1612105200000);
    /**
     * onDoneは自動テストではイベント発火できませんでした
     */
    const sut = render(
      <DateTimePicker
        selectedValue={selectedValue}
        maximumDate={maximumDate}
        minimumDate={minimumDate}
        defaultValue={maximumDate}
        onSelectedItemChange={onSelectedItemChange}
        placeholder="please select..."
        textInputProps={{testID: 'defaultTextInput'}}
        pickerItemsProps={{style: {backgroundColor: 'yellow'}, testID: 'pickerItems'}}
        textInputComponent={CustomTextInput}
        onDone={onDone}
        formatText={formatText}
        mode="date"
        displayAndroid="calendar"
      />,
    );

    const pressableContainer = sut.getByTestId('pressableContainer');
    fireEvent.press(pressableContainer);

    expect(sut).toMatchSnapshot('DateTimePicker all properly with custom xxx component.');

    // assert PickerItems
    const pickerItems = sut.getByTestId('pickerItems');
    const pickerItemsProps = pickerItems.props as DateTimePickerItemsAndroidProps;
    // selectedValueはDateTimePickerItemsAndroidPropsで定義されていない「date」でレンダリングされます
    // @ts-ignore
    expect(pickerItemsProps.date).toBe(selectedValue.getTime());
    expect(pickerItemsProps.maximumDate).toBe(maximumDate.getTime());
    expect(pickerItemsProps.minimumDate).toBe(minimumDate.getTime());
    expect(pickerItemsProps.mode).toBe('date');
    // displayはdisplayIOSというPropでレンダリングされます
    // Platform.OSをモック化してandroidを返却するようにしても「displayIOS」でレンダリングされます
    // @ts-ignore
    expect(pickerItemsProps.displayIOS).toBe('calendar');
    const pickerItemsStyle = pickerItemsProps.style as ViewStyle;
    const flattenPickerItemsStyle = StyleSheet.flatten(pickerItemsStyle);
    expect(flattenPickerItemsStyle.backgroundColor).toBe('yellow');

    // assert textInput
    const defaultTextInput = sut.queryByTestId('defaultTextInput');
    const customTextInput = sut.queryByTestId('customTextInput');
    expect(defaultTextInput).toBeNull();
    expect(customTextInput).not.toBeNull();
  });
});
