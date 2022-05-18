import React, {useCallback, useEffect, useMemo, useRef} from 'react';
import {FlatList, NativeScrollEvent, NativeSyntheticEvent} from 'react-native';
import {useAnimatedRef, useAnimatedScrollHandler, useSharedValue} from 'react-native-reanimated';

import {Item} from './SelectPicker';
import {useListMiddleIndex} from './useListMiddleIndex';

type SelectPickerItemsUseCaseTypes<ItemT> = {
  selectedValue?: React.Key | ItemT;
  children?: JSX.Element | JSX.Element[];
  items: Item<ItemT>[];
  itemHeight: number;
  numberOfLines: number;
  onValueChange?: (itemValue: ItemT, itemIndex: number) => void;
};

export const useSelectPickerItemsUseCase = <ItemT extends unknown>({
  selectedValue,
  items,
  itemHeight,
  numberOfLines,
  onValueChange,
}: SelectPickerItemsUseCaseTypes<ItemT>) => {
  const flatListRef = useAnimatedRef<FlatList>();
  const offset = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler(e => {
    offset.value = e.contentOffset.y;
  });

  const middleIndex = useListMiddleIndex({itemHeight, listSize: items.length});

  const currentIndex = useMemo(() => {
    return items.findIndex(item => item.key === selectedValue || item.value === selectedValue);
  }, [items, selectedValue]);

  const prevIndex = useRef(currentIndex);
  const _onChange = useCallback(
    (value: ItemT, index: number) => {
      onValueChange?.(value, index);
    },
    [onValueChange],
  );

  const getRowItemAtOffset = useCallback(
    (offset: number) => {
      const index = middleIndex(offset);
      const value = items[index].value;
      return {index, value};
    },
    [items, middleIndex],
  );

  const handleValueChange = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const {index, value} = getRowItemAtOffset(event.nativeEvent.contentOffset.y);
      _onChange(value, index);
    },
    [_onChange, getRowItemAtOffset],
  );

  const onMomentumScrollEndAndroid = useCallback(
    (index: number) => {
      // handle Android bug: ScrollView does not call 'onMomentumScrollEnd' when scrolled programmatically (https://github.com/facebook/react-native/issues/26661)
      if (prevIndex.current !== index) {
        prevIndex.current = index;
        _onChange(items?.[index]?.value, index);
      }
    },
    [_onChange, items],
  );

  const scrollToOffset = useCallback(
    (index: number, animated: boolean) => {
      flatListRef.current?.scrollToOffset({offset: index * itemHeight, animated});
    },
    [itemHeight, flatListRef],
  );

  const scrollToIndex = useCallback(
    (index: number, animated: boolean) => {
      onMomentumScrollEndAndroid(index);
      setTimeout(() => scrollToOffset(index, animated), 100);
    },
    [onMomentumScrollEndAndroid, scrollToOffset],
  );

  const selectItem = useCallback(
    (index: number) => {
      scrollToIndex(index, true);
    },
    [scrollToIndex],
  );

  const scrollToPassedIndex = useCallback(() => {
    scrollToIndex(currentIndex, false);
  }, [currentIndex, scrollToIndex]);

  const height = useMemo(() => itemHeight * numberOfLines, [itemHeight, numberOfLines]);

  const getItemLayout = useCallback(
    (_data: any, index: number) => {
      return {length: itemHeight, offset: itemHeight * index, index};
    },
    [itemHeight],
  );

  useEffect(() => {
    currentIndex !== undefined && scrollToIndex(currentIndex, true);
  }, [currentIndex, scrollToIndex]);

  return {
    offset,
    flatListRef,
    handleValueChange,
    scrollToPassedIndex,
    scrollHandler,
    currentIndex,
    height,
    selectItem,
    getItemLayout,
  };
};
