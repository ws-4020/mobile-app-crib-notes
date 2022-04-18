import React, {useCallback, useMemo, useState} from 'react';

import {
  DEFAULT_ENTERING as DEFAULT_PICKER_BACKDROP_ENTERING,
  DEFAULT_EXITING as DEFAULT_PICKER_BACKDROP_EXITING,
} from './PickerBackdrop';
import {
  DEFAULT_ENTERING as DEFAULT_PICKER_CONTAINER_ENTERING,
  DEFAULT_EXITING as DEFAULT_PICKER_CONTAINER_EXITING,
} from './PickerContainer';
import {Item, ItemWithKey, SelectPickerProps} from './SelectPicker';

const DEFAULT_DURATION = 500;
const DEFAULT_PLACEHOLDER_COLOR = 'grey';

const handlePlaceholder = <ItemT extends unknown>(placeholder?: Item<ItemT>): (Item<ItemT> | ItemWithKey<ItemT>)[] => {
  return placeholder ? [{color: DEFAULT_PLACEHOLDER_COLOR, ...placeholder}] : [];
};

export const useSelectPickerUseCase = <ItemT extends unknown>({
  items,
  selectedItemKey,
  onSelectedItemChange,
  onDismiss,
  onDelete,
  onCancel,
  onDone,
  placeholder,
  backdropProps: {entering: backdropEntering, exiting: backdropExiting, onPress: onBackdropPress} = {},
  containerProps: {entering: containerEntering, exiting: containerExiting} = {},
}: SelectPickerProps<ItemT>) => {
  const [isVisible, setIsVisible] = useState(false);
  const close = useCallback(() => setIsVisible(false), []);
  const handleBackdropPress = useCallback(() => {
    onBackdropPress?.();
    close();
  }, [close, onBackdropPress]);
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
  const itemsWithPlaceholder = useMemo(
    () => (items ? handlePlaceholder(placeholder).concat(items) : []),
    [items, placeholder],
  );
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

  const open = useCallback(() => {
    setIsVisible(true);
  }, []);
  const handleDismiss = useCallback(() => {
    onDismiss?.(selectedItem);
    close();
  }, [close, onDismiss, selectedItem]);
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

  return {
    isVisible,
    itemsWithPlaceholder,
    getSelectedItem,
    selectedItem,
    handleBackdropPress,
    pickerBackdropEntering,
    pickerBackdropExiting,
    pickerContainerEntering,
    pickerContainerExiting,
    onValueChange,
    open,
    handleDismiss,
    handleDelete,
    handleCancel,
    handleDone,
  };
};
