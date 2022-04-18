import {PickerProps} from '@react-native-picker/picker';
import {log} from 'framework/logging';
import React from 'react';
import {Platform, ViewProps} from 'react-native';
import {Input} from 'react-native-elements';

import {PickerAccessoryProps} from './PickerAccessory';
import {PickerBackdropProps} from './PickerBackdrop';
import {PickerContainerProps} from './PickerContainer';

export type Item<T> = {
  label: string;
  value: T;
  inputLabel?: string;
  key?: never;
  color?: string;
};

export type ItemWithKey<T> = {
  label: string;
  value: T;
  inputLabel?: string;
  key: React.Key;
  color?: string;
};
type TextInputProps = Omit<typeof Input.defaultProps, 'value' | 'editable'>;
export type SelectPickerProps<ItemT> = {
  items: Item<ItemT>[] | ItemWithKey<ItemT>[];
  selectedItemKey: React.Key | undefined;
  onSelectedItemChange?: (itemIndex: number, itemValue?: ItemT, itemKey?: React.Key) => void;
  onDelete?: (selectedItem: Item<ItemT> | ItemWithKey<ItemT> | undefined) => void;
  onCancel?: (selectedItem: Item<ItemT> | ItemWithKey<ItemT> | undefined) => void;
  onDone?: (selectedItem: Item<ItemT> | ItemWithKey<ItemT> | undefined) => void;
  placeholder?: Item<ItemT>;
  headerComponent?: React.ReactNode;
  itemsComponent?: React.ReactNode;
  keyExtractor?: ((item: ItemT, index: number) => string) | undefined;
  textInputProps?: TextInputProps;
  pickerItemsContainerProps?: ViewProps;
  pickerProps?: Omit<PickerProps<ItemT>, 'selectedValue' | 'onValueChange'>;
  backdropProps?: Omit<PickerBackdropProps, 'isVisible'>;
  containerProps?: Omit<PickerContainerProps, 'isVisible'>;
  pickerAccessoryProps?: Omit<PickerAccessoryProps, 'onDelete' | 'onCancel' | 'onDone'>;
  useNativeAndroidPickerStyle: boolean;
};

export const SelectPicker = <ItemT extends unknown>(props: SelectPickerProps<ItemT>) => {
  React.useEffect(() => {
    log.warn(`SelectPicker is not supported on: ${Platform.OS}`);
  }, []);
  return null;
};
