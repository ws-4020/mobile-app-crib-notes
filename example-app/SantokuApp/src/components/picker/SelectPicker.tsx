import {PickerProps} from '@react-native-picker/picker';
import {log} from 'framework/logging';
import React from 'react';
import {Platform, ViewProps} from 'react-native';
import {Input} from 'react-native-elements';

import {DefaultPickerAccessoryProps} from './DefaultPickerAccessory';
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
  /**
   * SelectPickerに表示するアイテム
   */
  items: Item<ItemT>[] | ItemWithKey<ItemT>[];
  /**
   * 選択されたアイテムのKey
   */
  selectedItemKey: React.Key | undefined;
  /**
   * アイテムが選択された場合に呼び出される関数
   */
  onSelectedItemChange?: (itemIndex: number, itemValue?: ItemT, itemKey?: React.Key) => void;
  /**
   * PickerBackdropをタップして閉じた場合に呼び出される関数
   * iOS Only
   */
  onDismiss?: (selectedItem: Item<ItemT> | ItemWithKey<ItemT> | undefined) => void;
  /**
   * DeleteLabelがタップされた場合に呼び出される関数
   * タップ後、SelectPickerは自動で閉じます。
   * iOS Only
   */
  onDelete?: (selectedItem: Item<ItemT> | ItemWithKey<ItemT> | undefined) => void;
  /**
   * CancelLabelがタップされた場合に呼び出される関数
   * タップ後、SelectPickerは自動で閉じます。
   * iOS Only
   */
  onCancel?: (selectedItem: Item<ItemT> | ItemWithKey<ItemT> | undefined) => void;
  /**
   * [iOS]
   * DoneLabelがタップされた場合に呼び出される関数
   * タップ後、SelectPickerは自動で閉じます。
   *
   * [Android]
   * アイテムが選択された場合に呼び出される関数
   */
  onDone?: (selectedItem: Item<ItemT> | ItemWithKey<ItemT> | undefined) => void;
  /**
   * プレースホルダ
   */
  placeholder?: Item<ItemT>;
  /**
   * ヘッダコンポーネント
   * 指定しない場合は、PickerAccessoryがデフォルトで表示されます。
   * iOS Only
   */
  pickerAccessoryComponent?: React.ReactNode;
  /**
   * Pickerコンポーネント
   * 指定しない場合は、SelectPickerItemsがデフォルトで表示されます。
   */
  pickerItemsComponent?: React.ReactNode;
  /**
   * 選択されたアイテムを表示するテキストコンポーネント
   * Androidでは、useNativeAndroidPickerStyleがfalseの場合のみ指定できます。
   */
  textInputComponent?: React.ReactNode;
  /**
   * Keyを作成する関数
   */
  keyExtractor?: ((item: ItemT, index: number) => React.Key) | undefined;
  /**
   * 選択されたアイテムを表示するテキストコンポーネントのProps
   * Androidでは、useNativeAndroidPickerStyleがfalseの場合のみ指定できます。
   * なお、textInputComponentを指定した場合は使用されません。
   */
  textInputProps?: TextInputProps;
  /**
   * Pickerコンポーネントを囲むContainerのProps
   * iOS Only
   */
  pickerItemsContainerProps?: ViewProps;
  /**
   * PickerのProps
   */
  pickerProps?: Omit<PickerProps<ItemT>, 'selectedValue' | 'onValueChange'>;
  /**
   * PickerBackdropのProps
   * iOS Only
   */
  backdropProps?: Omit<PickerBackdropProps, 'isVisible'>;
  /**
   * PickerContainerのProps
   * iOS Only
   */
  containerProps?: Omit<PickerContainerProps, 'isVisible'>;
  /**
   * PickerAccessoryのProps
   * iOS Only
   */
  pickerAccessoryProps?: Omit<DefaultPickerAccessoryProps, 'onDelete' | 'onCancel' | 'onDone'>;
  /**
   * NativeのPickerを使用するかどうか
   * trueの場合、選択されたアイテムを表示するテキストコンポーネントもNativeのモジュールを使用します。
   * falseの場合、選択されたアイテムを表示するテキストコンポーネントはJavaScript側で指定したモジュールを使用します。
   * Android Only
   */
  useNativeAndroidPickerStyle?: boolean;
};

export const SelectPicker = <ItemT extends unknown>(props: SelectPickerProps<ItemT>) => {
  React.useEffect(() => {
    log.warn(`SelectPicker is not supported on: ${Platform.OS}`);
  }, []);
  return null;
};
