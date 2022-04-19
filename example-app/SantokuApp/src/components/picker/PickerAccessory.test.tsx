import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import {ViewProps} from 'react-native';
import {TextProps} from 'react-native-elements';

import {PickerAccessory} from './PickerAccessory';

describe('PickerAccessory with `xxxLabel`', () => {
  it('renders successfully only with delete link', () => {
    const onDelete = jest.fn();
    const sut = render(<PickerAccessory deleteLabel="delete" onDelete={onDelete} />);
    const deleteLink = sut.getByTestId('deleteLink');
    const cancelLink = sut.queryByTestId('cancelLink');
    const doneLink = sut.queryByTestId('doneLink');
    const deleteText = sut.queryByText('delete');
    fireEvent.press(deleteLink);
    expect(onDelete).toHaveBeenCalledTimes(1);
    expect(deleteText).not.toBeNull();
    expect(cancelLink).toBeNull();
    expect(doneLink).toBeNull();
  });

  it('renders successfully only with cancel link', () => {
    const onCancel = jest.fn();
    const sut = render(<PickerAccessory cancelLabel="cancel" onCancel={onCancel} />);
    const deleteLink = sut.queryByTestId('deleteLink');
    const cancelLink = sut.getByTestId('cancelLink');
    const doneLink = sut.queryByTestId('doneLink');
    const cancelText = sut.queryByText('cancel');
    fireEvent.press(cancelLink);
    expect(onCancel).toHaveBeenCalledTimes(1);
    expect(cancelText).not.toBeNull();
    expect(deleteLink).toBeNull();
    expect(doneLink).toBeNull();
  });

  it('renders successfully only with done link', () => {
    const onDone = jest.fn();
    const sut = render(<PickerAccessory doneLabel="done" onDone={onDone} />);
    const deleteLink = sut.queryByTestId('deleteLink');
    const cancelLink = sut.queryByTestId('cancelLink');
    const doneLink = sut.getByTestId('doneLink');
    const doneText = sut.queryByText('done');
    fireEvent.press(doneLink);
    expect(onDone).toHaveBeenCalledTimes(1);
    expect(doneText).not.toBeNull();
    expect(deleteLink).toBeNull();
    expect(cancelLink).toBeNull();
  });
});

describe('PickerAccessory with all props', () => {
  it('should be applied properly', () => {
    const onDelete = jest.fn();
    const onCancel = jest.fn();
    const onDone = jest.fn();
    const sut = render(
      <PickerAccessory
        pickerAccessoryContainerProps={{style: {backgroundColor: 'red'}, testID: 'PickerAccessory'}}
        onDelete={onDelete}
        onCancel={onCancel}
        onDone={onDone}
        deleteLabel="delete"
        cancelLabel="cancel"
        doneLabel="done"
        deleteTextProps={{style: {color: 'yellow'}, testID: 'deleteText'}}
        cancelTextProps={{style: {color: 'green'}, testID: 'cancelText'}}
        doneTextProps={{style: {color: 'aqua'}, testID: 'doneText'}}
      />,
    );
    expect(sut).toMatchSnapshot('PickerBackdrop with all props.');
    const pickerAccessory = sut.getByTestId('PickerAccessory');
    const deleteLink = sut.getByTestId('deleteLink');
    const cancelLink = sut.getByTestId('cancelLink');
    const doneLink = sut.getByTestId('doneLink');
    const deleteTextComponent = sut.getByTestId('deleteText');
    const cancelTextComponent = sut.getByTestId('cancelText');
    const doneTextComponent = sut.getByTestId('doneText');
    const deleteText = sut.queryByText('delete');
    const cancelText = sut.queryByText('cancel');
    const doneText = sut.queryByText('done');

    fireEvent.press(deleteLink);
    fireEvent.press(cancelLink);
    fireEvent.press(doneLink);

    const pickerAccessoryProps = pickerAccessory.props as ViewProps;
    const deleteTextProps = deleteTextComponent.props as TextProps;
    const cancelTextProps = cancelTextComponent.props as TextProps;
    const doneTextProps = doneTextComponent.props as TextProps;
    expect(pickerAccessoryProps.style).toEqual({
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingVertical: 8,
      backgroundColor: 'red',
    });
    expect(onDelete).toHaveBeenCalledTimes(1);
    expect(onCancel).toHaveBeenCalledTimes(1);
    expect(onDone).toHaveBeenCalledTimes(1);
    expect(deleteTextProps.style).toEqual({color: 'yellow', fontWeight: 'bold', paddingHorizontal: 10});
    expect(cancelTextProps.style).toEqual({color: 'green', fontWeight: 'bold', paddingHorizontal: 10});
    expect(doneTextProps.style).toEqual({color: 'aqua', fontWeight: 'bold', paddingHorizontal: 10});
    expect(deleteText).not.toBeNull();
    expect(cancelText).not.toBeNull();
    expect(doneText).not.toBeNull();
  });
});
