import React, {useCallback, useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import {Input} from 'react-native-elements';

import {Item, ItemWithKey, SelectPickerProps} from './SelectPicker';
import {SelectPickerItems} from './SelectPickerItems';

const DEFAULT_PLACEHOLDER_COLOR = 'grey';
export const DEFAULT_DURATION = 500;

const handlePlaceholder = <ItemT extends unknown>(placeholder?: Item<ItemT>): (Item<ItemT> | ItemWithKey<ItemT>)[] => {
  return placeholder ? [{color: DEFAULT_PLACEHOLDER_COLOR, ...placeholder}] : [];
};

type SelectPickerAndroid<ItemT> = Omit<
  SelectPickerProps<ItemT>,
  | 'headerComponent'
  | 'itemsComponent'
  | 'backdropProps'
  | 'containerProps'
  | 'pickerAccessoryProps'
  | 'pickerItemsContainerProps'
>;

export const SelectPicker = <ItemT extends unknown>({
  items,
  selectedItemKey,
  onSelectedItemChange,
  onDone,
  placeholder,
  textInputProps,
  keyExtractor,
  pickerProps,
  useNativeAndroidPickerStyle = false,
}: SelectPickerAndroid<ItemT>) => {
  const itemsWithPlaceholder = useMemo(() => handlePlaceholder(placeholder).concat(items), [items, placeholder]);
  const getSelectedItem = useCallback(
    (key?: React.Key) => {
      if (key) {
        const found = itemsWithPlaceholder.find(item => item.key === key);
        return found ?? itemsWithPlaceholder.find(item => item.value === key);
      }
      if (placeholder) {
        return placeholder;
      }
      return undefined;
    },
    [itemsWithPlaceholder, placeholder],
  );
  const onValueChange = useCallback(
    (key: React.Key, index: number) => {
      const selectedItem = getSelectedItem(key);
      onSelectedItemChange?.(index, selectedItem?.value, key);
      onDone?.(selectedItem);
    },
    [getSelectedItem, onDone, onSelectedItemChange],
  );

  const selectedItem = useMemo(() => getSelectedItem(selectedItemKey), [getSelectedItem, selectedItemKey]);

  return (
    <>
      {useNativeAndroidPickerStyle ? (
        <SelectPickerItems
          selectedValue={selectedItemKey}
          items={itemsWithPlaceholder}
          onValueChange={onValueChange}
          keyExtractor={keyExtractor}
          {...pickerProps}
        />
      ) : (
        <View>
          <Input value={selectedItem?.inputLabel ?? selectedItem?.label} editable={false} {...textInputProps} />

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
