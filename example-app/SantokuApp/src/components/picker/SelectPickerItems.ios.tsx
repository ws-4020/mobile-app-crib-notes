import {Picker} from '@react-native-picker/picker';
import React from 'react';
import {StyleSheet, View} from 'react-native';

import {SelectPickerItemsProps} from './SelectPickerItems';

export const SelectPickerItems = <ItemT extends unknown>({
  selectedValue,
  onValueChange,
  items,
  keyExtractor,
  pickerItemsContainerProps: {style, ...pickerItemsContainerProps} = {},
  ...rest
}: SelectPickerItemsProps<ItemT>) => {
  return (
    <View style={StyleSheet.flatten([styles.container, style])} {...pickerItemsContainerProps}>
      <Picker selectedValue={selectedValue} onValueChange={onValueChange} {...rest}>
        {items.map((item, index) => (
          <Picker.Item
            key={keyExtractor ? keyExtractor(item.value, index) : item.key ?? item.label}
            label={item.label}
            value={item.key ?? item.value}
            color={item.color}
            fontFamily={item.fontFamily}
            style={item.style}
          />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});
