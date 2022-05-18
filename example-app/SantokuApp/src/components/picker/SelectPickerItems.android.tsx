import React, {useCallback, useMemo} from 'react';
import {FlatList, FlatListProps, ListRenderItemInfo, StyleSheet, View} from 'react-native';
import Reanimated from 'react-native-reanimated';

import {Fader, FaderPosition} from './Fader';
import {Item} from './SelectPicker';
import {SelectPickerItem} from './SelectPickerItem';
import {SelectPickerItemsProps} from './SelectPickerItems';
import {useSelectPickerItemsUseCase} from './useSelectPickerItemsUseCase';

const Separator: React.FC<{height: number}> = React.memo(({height}) => {
  const separatorHeightStyle = useMemo(() => ({height}), [height]);
  return <View pointerEvents="none" style={StyleSheet.flatten([styles.separators, separatorHeightStyle])} />;
});

const FADER_SIZE = 60;
const FaderTop: React.FC = () => <Fader visible position={FaderPosition.TOP} size={FADER_SIZE} />;
const FaderBottom: React.FC = () => <Fader visible position={FaderPosition.BOTTOM} size={FADER_SIZE} />;

const DECELERATION_RATE = 0.98;

const defaultKeyExtractor = <ItemT extends unknown>(item: Item<ItemT>, index: number) =>
  `${String(item.key ?? item.value)}.${index}`;

const AnimatedFlatList = Reanimated.createAnimatedComponent<FlatListProps<Item<any>>>(FlatList);

type SelectPickerItemsAndroid<ItemT> = Omit<SelectPickerItemsProps<ItemT>, 'style'>;

export const SelectPickerItems = <ItemT extends unknown>({
  selectedValue,
  onValueChange,
  items,
  keyExtractor,
  itemHeight = 44,
  numberOfLines = 5,
  itemStyle,
  accessibilityLabel,
  activeColor,
  inactiveColor,
  ...rest
}: SelectPickerItemsAndroid<ItemT>) => {
  const {
    offset,
    height,
    handleValueChange,
    scrollToPassedIndex,
    currentIndex,
    selectItem,
    getItemLayout,
    flatListRef,
    scrollHandler,
  } = useSelectPickerItemsUseCase<ItemT>({
    selectedValue,
    items,
    itemHeight,
    numberOfLines,
    onValueChange,
  });

  const itemsHeightStyle = useMemo(() => ({height}), [height]);
  const contentContainerStyle = useMemo(() => ({paddingVertical: height / 2 - itemHeight / 2}), [height, itemHeight]);

  const renderItem = useCallback(
    (info: ListRenderItemInfo<Item<ItemT>>) => {
      return (
        <SelectPickerItem
          item={info.item}
          offset={offset}
          index={info.index}
          itemHeight={itemHeight}
          selectItem={selectItem}
          accessibilityLabel={accessibilityLabel}
          itemStyle={itemStyle}
          activeColor={activeColor}
          inactiveColor={inactiveColor}
        />
      );
    },
    [accessibilityLabel, activeColor, inactiveColor, itemHeight, itemStyle, offset, selectItem],
  );

  return (
    <View style={styles.container} pointerEvents="box-none" {...rest}>
      <AnimatedFlatList
        data={items}
        keyExtractor={keyExtractor ?? defaultKeyExtractor}
        style={StyleSheet.flatten([itemsHeightStyle, styles.items])}
        onScroll={scrollHandler}
        onMomentumScrollEnd={handleValueChange}
        showsVerticalScrollIndicator={false}
        onLayout={scrollToPassedIndex}
        ref={flatListRef}
        contentContainerStyle={contentContainerStyle}
        snapToInterval={itemHeight}
        renderItem={renderItem}
        decelerationRate={DECELERATION_RATE}
        getItemLayout={getItemLayout}
        initialScrollIndex={currentIndex}
        centerContent
      />
      <FaderBottom />
      <FaderTop />
      <Separator height={itemHeight} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  items: {
    width: '100%',
  },
  separators: {
    position: 'absolute',
    borderRadius: 8,
    backgroundColor: 'rgba(0,0,0,0.06)',
    width: '95%',
    borderColor: 'grey',
  },
});
