import {Picker, PickerProps} from '@react-native-picker/picker';
import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Item, ItemWithKey} from './SelectPicker';

// TODO: 表示するItemの数を指定できるようにする

export type SelectPickerItemsPropsIOS<ItemT> = PickerProps<React.Key> & {
  items: (Item<ItemT> | ItemWithKey<ItemT>)[];
  keyExtractor?: ((item: ItemT, index: number) => string) | undefined;
};

export const SelectPickerItems = <ItemT extends unknown>({
  selectedValue,
  onValueChange,
  items,
  keyExtractor,
  ...rest
}: SelectPickerItemsPropsIOS<ItemT>) => {
  return (
    <View style={[styles.container]}>
      <Picker selectedValue={selectedValue} onValueChange={onValueChange} {...rest}>
        {items.map((item, index) => (
          <Picker.Item
            key={keyExtractor ? keyExtractor(item.value, index) : item.key ?? item.label}
            label={item.label}
            value={item.key ?? item.value}
            color={item.color}
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
