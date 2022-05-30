import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import {StyleSheet, TextInputProps, View, ViewProps, ViewStyle} from 'react-native';

import {DateTimePicker} from './DateTimePicker.ios';
import {DateTimePickerItemsIOSProps} from './DateTimePickerItems';
import {PickerBackdropProps} from './PickerBackdrop';
import {PickerContainerProps} from './PickerContainer';

describe('DateTimePicker only with required props', () => {
  it('renders successfully if invisible', () => {
    const sut = render(
      <DateTimePicker
        textInputProps={{testID: 'textInput'}}
        pickerBackdropProps={{testID: 'pickerBackdrop'}}
        pickerContainerProps={{testID: 'pickerContainer'}}
        pickerAccessoryProps={{containerProps: {testID: 'pickerAccessory'}}}
        pickerItemsContainerProps={{testID: 'pickerItemsContainer'}}
      />,
    );

    expect(sut).toMatchSnapshot('DateTimePicker if invisible.');

    const pickerBackdrop = sut.queryByTestId('pickerBackdrop');
    const pickerContainer = sut.queryByTestId('pickerContainer');
    const pickerAccessory = sut.queryByTestId('pickerAccessory');
    const pickerItemsContainer = sut.queryByTestId('pickerItemsContainer');
    const textInput = sut.queryByTestId('textInput');
    expect(pickerBackdrop).toBeNull();
    expect(pickerContainer).toBeNull();
    expect(pickerAccessory).toBeNull();
    expect(pickerItemsContainer).toBeNull();
    expect(textInput).not.toBeNull();
  });

  it('renders successfully if visible', () => {
    // selectedValueに固定値を入れないと、Snapshot取得時に毎回値が変わってしまうので、OptionalPropsですが指定しています。
    const selectedValue = new Date(2022, 5, 31, 0, 0, 0, 0);
    // formatTextを指定しないと、タイムゾーンの表記が環境によって違うので、どの環境でも変わらないように指定しています。
    const formatText = (date?: Date) => (date ? date.toISOString() : '');
    const sut = render(
      <DateTimePicker
        selectedValue={selectedValue}
        textInputProps={{testID: 'textInput'}}
        pickerBackdropProps={{testID: 'pickerBackdrop'}}
        pickerContainerProps={{testID: 'pickerContainer'}}
        pickerAccessoryProps={{containerProps: {testID: 'pickerAccessory'}}}
        pickerItemsContainerProps={{testID: 'pickerItemsContainer'}}
        pickerItemsProps={{testID: 'pickerItems'}}
        formatText={formatText}
      />,
    );
    const pressableContainer = sut.getByTestId('pressableContainer');
    fireEvent.press(pressableContainer);

    expect(sut).toMatchSnapshot('DateTimePicker if visible.');

    const pickerBackdrop = sut.queryByTestId('pickerBackdrop');
    const pickerContainer = sut.queryByTestId('pickerContainer');
    const pickerAccessory = sut.queryByTestId('pickerAccessory');
    const pickerItemsContainer = sut.queryByTestId('pickerItemsContainer');
    const textInput = sut.queryByTestId('textInput');
    expect(pickerBackdrop).not.toBeNull();
    expect(pickerContainer).not.toBeNull();
    expect(pickerAccessory).not.toBeNull();
    expect(pickerItemsContainer).not.toBeNull();
    expect(textInput).not.toBeNull();
  });
});

describe('DateTimePicker with default value', () => {
  it('defaultValue should be set at open if selectedValue does not exist,', () => {
    const defaultValue = new Date(2022, 5, 10);
    const sut = render(<DateTimePicker defaultValue={defaultValue} pickerItemsProps={{testID: 'pickerItems'}} />);
    const pressableContainer = sut.getByTestId('pressableContainer');
    fireEvent.press(pressableContainer);
    expect(sut.getByTestId('pickerItems').props.date).toBe(defaultValue.getTime());
  });
});

describe('DateTimePicker with all props', () => {
  it('should be applied all properly with default xxx component', () => {
    const onSelectedItemChange = jest.fn();
    const onDismiss = jest.fn();
    const onDelete = jest.fn();
    const onCancel = jest.fn();
    const onDone = jest.fn();
    const formatText = jest.fn();
    const selectedValue = new Date(2022, 1, 1, 0, 0, 0, 0);
    const maximumDate = new Date(2022, 5, 31, 0, 0, 0, 0);
    const minimumDate = new Date(maximumDate.getFullYear() - 1, 1, 1, 0, 0, 0, 0);
    const sut = render(
      <DateTimePicker
        selectedValue={selectedValue}
        maximumDate={maximumDate}
        minimumDate={minimumDate}
        defaultValue={maximumDate}
        onSelectedItemChange={onSelectedItemChange}
        onDismiss={onDismiss}
        placeholder="please select..."
        textInputProps={{style: {color: 'red'}, testID: 'textInput'}}
        pickerItemsContainerProps={{pointerEvents: 'none', testID: 'pickerItemsContainer'}}
        pickerItemsProps={{style: {backgroundColor: 'yellow'}, testID: 'pickerItems'}}
        pickerBackdropProps={{
          style: {backgroundColor: 'green', borderColor: 'red'},
          modalProps: {testID: 'modal'},
          testID: 'pickerBackdrop',
        }}
        pickerContainerProps={{style: {backgroundColor: 'yellow', borderColor: 'black'}, testID: 'pickerContainer'}}
        pickerAccessoryProps={{
          containerProps: {style: {backgroundColor: 'blue'}, testID: 'pickerAccessory'},
          deleteLabel: 'delete',
          cancelLabel: 'cancel',
          doneLabel: 'done',
          deleteTouchableContainerProps: {testID: 'deleteLink'},
          cancelTouchableContainerProps: {testID: 'cancelLink'},
          doneTouchableContainerProps: {testID: 'doneLink'},
        }}
        onDelete={onDelete}
        onCancel={onCancel}
        onDone={onDone}
        formatText={formatText}
        mode="date"
        displayIOS="spinner"
      />,
    );

    const pressableContainer = sut.getByTestId('pressableContainer');
    fireEvent.press(pressableContainer);

    expect(sut).toMatchSnapshot('DateTimePicker all properly with default xxx component.');

    // assert pickerContainer
    const pickerContainer = sut.getByTestId('pickerContainer');
    const pickerContainerProps = pickerContainer.props as PickerContainerProps;
    expect(pickerContainerProps.style).toEqual({backgroundColor: 'yellow', borderColor: 'black'});

    // assert pickerItemsContainer
    const pickerItemsContainer = sut.getByTestId('pickerItemsContainer');
    const pickerItemsContainerProps = pickerItemsContainer.props as ViewProps;
    expect(pickerItemsContainerProps.pointerEvents).toBe('none');

    // assert PickerItems
    const pickerItems = sut.getByTestId('pickerItems');
    const pickerItemsProps = pickerItems.props as DateTimePickerItemsIOSProps;
    expect(pickerItemsProps.date).toBe(selectedValue.getTime());
    expect(pickerItemsProps.maximumDate).toBe(maximumDate.getTime());
    expect(pickerItemsProps.minimumDate).toBe(minimumDate.getTime());
    expect(pickerItemsProps.mode).toBe('date');
    // displayはdisplayIOSというPropでレンダリングされます
    // @ts-ignore
    // @ts-ignore
    expect(pickerItemsProps.displayIOS).toBe('spinner');
    const pickerItemsStyle = pickerItemsProps.style as ViewStyle;
    const flattenPickerItemsStyle = StyleSheet.flatten(pickerItemsStyle);
    expect(flattenPickerItemsStyle.backgroundColor).toBe('yellow');

    // assert textInput
    const textInput = sut.getByTestId('textInput');
    const textInputProps = textInput.props as TextInputProps;
    expect(textInputProps.style).toEqual({color: 'red'});

    // assert pickerBackdrop
    const pickerBackdrop = sut.getByTestId('pickerBackdrop');
    const modal = sut.getByTestId('modal');
    const pickerBackdropProps = pickerBackdrop.props as PickerBackdropProps;
    fireEvent(modal, 'onRequestClose');
    expect(pickerBackdropProps.style).toEqual({flex: 1, backgroundColor: 'green', borderColor: 'red'});
    expect(onDismiss).toHaveBeenCalledTimes(1);

    fireEvent.press(pressableContainer);

    // assert pickerAccessory
    const pickerAccessory = sut.getByTestId('pickerAccessory');
    const pickerAccessoryProps = pickerAccessory.props as ViewProps;
    expect(pickerAccessoryProps.style).toEqual({
      backgroundColor: 'blue',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      paddingHorizontal: 10,
      paddingVertical: 8,
    });
    const deleteLink = sut.getByTestId('deleteLink');
    const deleteText = sut.queryByText('delete');
    expect(deleteText).not.toBeNull();
    fireEvent.press(deleteLink);
    expect(onDelete).toHaveBeenCalledTimes(1);
    fireEvent.press(pressableContainer);
    const cancelLink = sut.getByTestId('cancelLink');
    const cancelText = sut.queryByText('cancel');
    expect(cancelText).not.toBeNull();
    fireEvent.press(cancelLink);
    expect(onCancel).toHaveBeenCalledTimes(1);
    fireEvent.press(pressableContainer);
    const doneLink = sut.getByTestId('doneLink');
    const doneText = sut.queryByText('done');
    expect(doneText).not.toBeNull();
    fireEvent.press(doneLink);
    expect(onDone).toHaveBeenCalledTimes(1);

    // formatText
    expect(formatText).toHaveBeenCalledTimes(1);
  });

  it('should be applied all properly with custom xxx component', () => {
    const CustomPickerAccessory = <View testID="customPickerAccessory" />;
    const CustomPicker = <View testID="customPicker" />;
    const CustomTextInput = <View testID="customTextInput" />;
    const selectedValue = new Date(2022, 1, 1, 0, 0, 0, 0);
    const maximumDate = new Date(2022, 5, 31, 0, 0, 0, 0);
    const minimumDate = new Date(maximumDate.getFullYear() - 1, 1, 1, 0, 0, 0, 0);
    const onSelectedItemChange = jest.fn();
    const onDismiss = jest.fn();
    const formatText = jest.fn();
    const sut = render(
      <DateTimePicker
        selectedValue={selectedValue}
        maximumDate={maximumDate}
        minimumDate={minimumDate}
        defaultValue={maximumDate}
        onSelectedItemChange={onSelectedItemChange}
        onDismiss={onDismiss}
        placeholder="please select..."
        textInputProps={{testID: 'defaultTextInput'}}
        pickerItemsContainerProps={{pointerEvents: 'none', testID: 'pickerItemsContainer'}}
        pickerBackdropProps={{
          style: {backgroundColor: 'green', borderColor: 'red'},
          modalProps: {testID: 'modal'},
          testID: 'pickerBackdrop',
        }}
        pickerContainerProps={{style: {backgroundColor: 'yellow', borderColor: 'black'}, testID: 'pickerContainer'}}
        pickerAccessoryProps={{containerProps: {testID: 'defaultPickerAccessory'}}}
        pickerAccessoryComponent={CustomPickerAccessory}
        pickerItemsComponent={CustomPicker}
        textInputComponent={CustomTextInput}
        formatText={formatText}
        mode="date"
        displayIOS="spinner"
      />,
    );
    const pressableContainer = sut.getByTestId('pressableContainer');
    fireEvent.press(pressableContainer);

    expect(sut).toMatchSnapshot('DateTimePicker all properly with custom xxx component.');

    // assert pickerBackdrop
    const pickerBackdrop = sut.getByTestId('pickerBackdrop');
    const modal = sut.getByTestId('modal');
    const pickerBackdropProps = pickerBackdrop.props as PickerBackdropProps;
    fireEvent(modal, 'onRequestClose');
    expect(pickerBackdropProps.style).toEqual({flex: 1, backgroundColor: 'green', borderColor: 'red'});
    expect(onDismiss).toHaveBeenCalledTimes(1);

    fireEvent.press(pressableContainer);

    // assert pickerContainer
    const pickerContainer = sut.getByTestId('pickerContainer');
    const pickerContainerProps = pickerContainer.props as PickerContainerProps;
    expect(pickerContainerProps.style).toEqual({backgroundColor: 'yellow', borderColor: 'black'});

    // assert pickerAccessory
    const defaultPickerAccessory = sut.queryByTestId('defaultPickerAccessory');
    const customPickerAccessory = sut.queryByTestId('customPickerAccessory');
    expect(defaultPickerAccessory).toBeNull();
    expect(customPickerAccessory).not.toBeNull();

    // assert pickerItemsContainer
    const pickerItemsContainer = sut.getByTestId('pickerItemsContainer');
    const pickerItemsContainerProps = pickerItemsContainer.props as ViewProps;
    expect(pickerItemsContainerProps.pointerEvents).toBe('none');

    // assert textInput
    const defaultTextInput = sut.queryByTestId('defaultTextInput');
    const customTextInput = sut.queryByTestId('customTextInput');
    expect(defaultTextInput).toBeNull();
    expect(customTextInput).not.toBeNull();
  });
});
