import React, {useCallback, useMemo, useState} from 'react';
import {Pressable, View} from 'react-native';
import {Input} from 'react-native-elements';

import {PickerAccessory} from './PickerAccessory';
import {
  DEFAULT_ENTERING as DEFAULT_PICKER_BACKDROP_ENTERING,
  DEFAULT_EXITING as DEFAULT_PICKER_BACKDROP_EXITING,
  PickerBackdrop,
} from './PickerBackdrop';
import {
  DEFAULT_ENTERING as DEFAULT_PICKER_CONTAINER_ENTERING,
  DEFAULT_EXITING as DEFAULT_PICKER_CONTAINER_EXITING,
  PickerContainer,
} from './PickerContainer';
import {Item, ItemWithKey, SelectPickerProps} from './SelectPicker';
import {SelectPickerItems} from './SelectPickerItems';

const DEFAULT_PLACEHOLDER_COLOR = 'grey';
export const DEFAULT_DURATION = 500;

const handlePlaceholder = <ItemT extends unknown>(placeholder?: Item<ItemT>): (Item<ItemT> | ItemWithKey<ItemT>)[] => {
  return placeholder ? [{color: DEFAULT_PLACEHOLDER_COLOR, ...placeholder}] : [];
};

type SelectPickerIOS<ItemT> = Omit<SelectPickerProps<ItemT>, 'useNativeAndroidPickerStyle'>;

export const SelectPicker = <ItemT extends unknown>({
  items,
  selectedItemKey,
  onSelectedItemChange,
  onDelete,
  onCancel,
  onDone,
  placeholder,
  textInputProps,
  keyExtractor,
  headerComponent,
  itemsComponent,
  pickerItemsContainerProps,
  pickerProps,
  backdropProps: {entering: backdropEntering, exiting: backdropExiting, onPress, ...backdropProps} = {},
  containerProps: {entering: containerEntering, exiting: containerExiting, ...containerProps} = {},
  pickerAccessoryProps,
}: SelectPickerIOS<ItemT>) => {
  const [isVisible, setIsVisible] = useState(false);
  const close = useCallback(() => setIsVisible(false), []);
  const handleBackdropPress = useCallback(() => {
    onPress?.();
    close();
  }, [close, onPress]);
  const pickerBackdropEntering = useMemo(
    () => backdropEntering ?? DEFAULT_PICKER_BACKDROP_ENTERING.duration(DEFAULT_DURATION),
    [backdropEntering],
  );
  const pickerBackdropExiting = useMemo(
    () => backdropExiting ?? DEFAULT_PICKER_BACKDROP_EXITING.duration(DEFAULT_DURATION),
    [backdropExiting],
  );
  const pickerContainerEntering = useMemo(
    () => containerEntering ?? DEFAULT_PICKER_CONTAINER_ENTERING.duration(DEFAULT_DURATION),
    [containerEntering],
  );
  const pickerContainerExiting = useMemo(
    () => containerExiting ?? DEFAULT_PICKER_CONTAINER_EXITING.duration(DEFAULT_DURATION),
    [containerExiting],
  );
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
    },
    [getSelectedItem, onSelectedItemChange],
  );

  const selectedItem = useMemo(() => getSelectedItem(selectedItemKey), [getSelectedItem, selectedItemKey]);

  const handleDelete = useCallback(() => {
    onDelete?.(selectedItem);
    close();
  }, [close, onDelete, selectedItem]);
  const handleCancel = useCallback(() => {
    onCancel?.(selectedItem);
    close();
  }, [close, onCancel, selectedItem]);
  const handleDone = useCallback(() => {
    onDone?.(selectedItem);
    close();
  }, [close, onDone, selectedItem]);

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
          {itemsComponent ? (
            itemsComponent
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
      <Pressable onPress={() => setIsVisible(true)}>
        <View pointerEvents="box-only">
          <Input value={selectedItem?.inputLabel ?? selectedItem?.label} editable={false} {...textInputProps} />
        </View>
      </Pressable>
    </>
  );
};
