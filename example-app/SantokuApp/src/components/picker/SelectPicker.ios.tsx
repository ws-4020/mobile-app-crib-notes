import React from 'react';
import {Pressable, View} from 'react-native';
import {Input} from 'react-native-elements';

import {DefaultPickerAccessory} from './DefaultPickerAccessory';
import {PickerBackdrop} from './PickerBackdrop';
import {PickerContainer} from './PickerContainer';
import {SelectPickerProps} from './SelectPicker';
import {SelectPickerItems} from './SelectPickerItems';
import {useSelectPickerIOSUseCase} from './useSelectPickerIOSUseCase';

export type SelectPickerPropsIOS<ItemT> = Omit<SelectPickerProps<ItemT>, 'useNativeAndroidPickerStyle'>;

export const SelectPicker = <ItemT extends unknown>(props: SelectPickerPropsIOS<ItemT>) => {
  const {
    isVisible,
    inputValue,
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
    items,
    selectedItemKey,
    placeholder,
    textInputProps,
    keyExtractor,
    pickerAccessoryComponent,
    pickerItemsComponent,
    textInputComponent,
    pickerItemsContainerProps,
    pickerProps,
    backdropProps: {entering: backdropEntering, exiting: backdropExiting, ...backdropProps} = {},
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
          {pickerAccessoryComponent ? (
            pickerAccessoryComponent
          ) : (
            <DefaultPickerAccessory
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
              items={items}
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
            // テキスト入力とスタイルを合わせるために、TextではなくInputを使用する
            <Input placeholder={placeholder} value={inputValue} editable={false} {...textInputProps} />
          )}
        </View>
      </Pressable>
    </>
  );
};
