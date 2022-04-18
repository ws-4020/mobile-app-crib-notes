import {PickerProps} from '@react-native-picker/picker';
import {log} from 'framework/logging';
import React from 'react';
import {Platform, ViewProps} from 'react-native';

import {Item, ItemWithKey} from './SelectPicker';

export type SelectPickerItemsProps<ItemT> = PickerProps<React.Key> & {
  items: (Item<ItemT> | ItemWithKey<ItemT>)[];
  keyExtractor?: ((item: ItemT, index: number) => string) | undefined;
  pickerItemsContainerProps?: ViewProps;
};

export const SelectPickerItems = <ItemT extends unknown>(props: SelectPickerItemsProps<ItemT>) => {
  React.useEffect(() => {
    log.warn(`SelectPickerItems is not supported on: ${Platform.OS}`);
  }, []);
  return null;
};
