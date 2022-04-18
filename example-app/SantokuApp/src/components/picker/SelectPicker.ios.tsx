import React from 'react';
import {Pressable, View} from 'react-native';
import {Input} from 'react-native-elements';

import {PickerAccessory} from './PickerAccessory';
import {PickerBackdrop} from './PickerBackdrop';
import {PickerContainer} from './PickerContainer';
import {SelectPickerProps} from './SelectPicker';
import {SelectPickerItems} from './SelectPickerItems';
import {useSelectPickerIOSUseCase} from './useSelectPickerIOSUseCase';

export type SelectPickerPropsIOS<ItemT> = Omit<SelectPickerProps<ItemT>, 'useNativeAndroidPickerStyle'>;

export const SelectPicker = <ItemT extends unknown>(props: SelectPickerPropsIOS<ItemT>) => {
  const {
    isVisible,
    itemsWithPlaceholder,
    selectedItem,
    handleBackdropPress,
    pickerBackdropEntering,
    pickerBackdropExiting,
    pickerContainerEntering,
    pickerContainerExiting,
    onValueChange,
    open,
    handleDelete,
    handleCancel,
    handleDone,
  } = useSelectPickerIOSUseCase<ItemT>(props);
  const {
    selectedItemKey,
    textInputProps,
    keyExtractor,
    headerComponent,
    pickerItemsComponent,
    textInputComponent,
    pickerItemsContainerProps,
    pickerProps,
    backdropProps: {
      entering: backdropEntering,
      exiting: backdropExiting,
      onPress: onBackdropPress,
      ...backdropProps
    } = {},
    containerProps: {entering: containerEntering, exiting: containerExiting, ...containerProps} = {},
    pickerAccessoryProps,
  } = props;

  return (
    <>
      <PickerBackdrop
        isVisible={isVisible}
        onPress={handleBackdropPress}
        entering={pickerBackdropEntering}
        exiting={pickerBackdropExiting}
        {...backdropProps}>
        <PickerContainer
          isVisible={isVisible}
          entering={pickerContainerEntering}
          exiting={pickerContainerExiting}
          {...containerProps}>
          {headerComponent ? (
            headerComponent
          ) : (
            <PickerAccessory
              onDelete={handleDelete}
              onCancel={handleCancel}
              onDone={handleDone}
              {...pickerAccessoryProps}
            />
          )}
          {pickerItemsComponent ? (
            pickerItemsComponent
          ) : (
            <SelectPickerItems
              selectedValue={selectedItemKey}
              items={itemsWithPlaceholder}
              onValueChange={onValueChange}
              keyExtractor={keyExtractor}
              {...pickerProps}
              {...pickerItemsContainerProps}
            />
          )}
        </PickerContainer>
      </PickerBackdrop>
      <Pressable onPress={open}>
        <View pointerEvents="box-only">
          {textInputComponent ? (
            textInputComponent
          ) : (
            <Input value={selectedItem?.inputLabel ?? selectedItem?.label} editable={false} {...textInputProps} />
          )}
        </View>
      </Pressable>
    </>
  );
};
