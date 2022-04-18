import {Picker} from '@react-native-picker/picker';
import React from 'react';

import {SelectPickerItemsProps} from './SelectPickerItems';

type SelectPickerItemsAndroid<ItemT> = Omit<SelectPickerItemsProps<ItemT>, 'pickerItemsContainerProps'>;

export const SelectPickerItems = <ItemT extends unknown>({
  selectedValue,
  onValueChange,
  items,
  keyExtractor,
  ...rest
}: SelectPickerItemsAndroid<ItemT>) => {
  return (
    <Picker selectedValue={selectedValue} onValueChange={onValueChange} {...rest}>
      {items.map((item, index) => (
        <Picker.Item
          key={keyExtractor ? keyExtractor(item.value, index) : item.key ?? item.label}
          label={item.label}
          value={item.value}
          color={item.color}
        />
      ))}
    </Picker>
  );
};
