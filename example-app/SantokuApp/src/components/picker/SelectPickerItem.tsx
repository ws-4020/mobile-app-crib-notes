import React, {useCallback, useMemo} from 'react';
import {Pressable, StyleProp, StyleSheet, Text, TextProps} from 'react-native';
import Animated, {interpolateColor, useAnimatedStyle} from 'react-native-reanimated';

import {Item} from './SelectPicker';

export type SelectPickerItemType<ItemT extends unknown> = {
  item: Item<ItemT>;
  index: number;
  offset: Animated.SharedValue<number>;
  itemHeight: number;
  selectItem: (index: number) => void;
  activeColor?: string;
  inactiveColor?: string;
  itemStyle?: StyleProp<TextProps>;
  accessibilityLabel?: string;
};

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const AnimatedText = Animated.createAnimatedComponent(Text);

export const SelectPickerItem = <ItemT extends unknown>({
  item,
  index,
  offset,
  activeColor = '#000000',
  inactiveColor = '#999999',
  itemHeight,
  selectItem,
  itemStyle,
  accessibilityLabel,
}: SelectPickerItemType<ItemT>) => {
  const itemOffset = index * itemHeight;

  const onPress = useCallback(() => selectItem(index), [index, selectItem]);
  const animatedTextStyle = useAnimatedStyle(() => {
    const color = interpolateColor(
      offset.value,
      [itemOffset - itemHeight, itemOffset, itemOffset + itemHeight],
      [inactiveColor, activeColor, inactiveColor],
    );
    return {color};
  }, [itemHeight]);

  const pressableHeightStyle = useMemo(() => ({height: itemHeight}), [itemHeight]);
  const itemPropsStyle = useMemo(
    () => ({color: item.color, fontFamily: item.fontFamily}),
    [item.color, item.fontFamily],
  );

  return (
    <AnimatedPressable
      onPress={onPress}
      style={StyleSheet.flatten([pressableHeightStyle, styles.pressable])}
      accessibilityLabel={accessibilityLabel}>
      {/* AnimatedStyleの場合はStyleSheet.flattenだとマージされないため、配列で指定 */}
      <AnimatedText style={[animatedTextStyle, styles.text, itemStyle, item.style, itemPropsStyle]}>
        {item.label}
      </AnimatedText>
    </AnimatedPressable>
  );
};

const styles = StyleSheet.create({
  pressable: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
});
