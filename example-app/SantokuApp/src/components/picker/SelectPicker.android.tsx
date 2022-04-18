import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Input} from 'react-native-elements';

import {SelectPickerProps} from './SelectPicker';
import {SelectPickerItems} from './SelectPickerItems';
import {useSelectPickerAndroidUseCase} from './useSelectPickerAndroidUseCase';

type SelectPickerPropsAndroid<ItemT> = Omit<
  SelectPickerProps<ItemT>,
  'headerComponent' | 'backdropProps' | 'containerProps' | 'pickerAccessoryProps' | 'pickerItemsContainerProps'
>;

export const SelectPicker = <ItemT extends unknown>(props: SelectPickerPropsAndroid<ItemT>) => {
  const {itemsWithPlaceholder, selectedItem, onValueChange} = useSelectPickerAndroidUseCase<ItemT>(props);
  const {
    selectedItemKey,
    textInputProps,
    keyExtractor,
    pickerItemsComponent,
    textInputComponent,
    pickerProps,
    useNativeAndroidPickerStyle = false,
  } = props;

  return (
    <>
      {pickerItemsComponent ? (
        pickerItemsComponent
      ) : useNativeAndroidPickerStyle ? (
        <SelectPickerItems
          selectedValue={selectedItemKey}
          items={itemsWithPlaceholder}
          onValueChange={onValueChange}
          keyExtractor={keyExtractor}
          {...pickerProps}
        />
      ) : (
        <View>
          {textInputComponent ? (
            textInputComponent
          ) : (
            <Input value={selectedItem?.inputLabel ?? selectedItem?.label} editable={false} {...textInputProps} />
          )}
          <SelectPickerItems
            selectedValue={selectedItemKey}
            items={itemsWithPlaceholder}
            onValueChange={onValueChange}
            keyExtractor={keyExtractor}
            style={styles.headlessPicker}
            {...pickerProps}
          />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  headlessPicker: {
    opacity: 0,
    position: 'absolute',
    width: '100%',
    height: '100%',
    color: 'transparent',
    backgroundColor: 'transparent',
  },
});
