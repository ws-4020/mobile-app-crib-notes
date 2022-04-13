import {usePrevious, useVisibility} from 'framework/utilities';
import React, {useCallback, useEffect, useState} from 'react';
import {Dimensions, LayoutChangeEvent, StyleSheet, useWindowDimensions, View} from 'react-native';
import Reanimated, {
  cancelAnimation,
  Easing,
  runOnJS,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export type PickerContainerProps = {
  isVisible: boolean;
};

export const PickerContainer: React.FC<PickerContainerProps> = ({isVisible, children}) => {
  const {
    isVisible: isPickerVisible,
    setVisible: setPickerIsVisible,
    setInvisible: setPickerIsNotVisible,
  } = useVisibility(false);

  const isVisiblePrevious = usePrevious(isVisible);

  // PickerContainerが表示された状態で、画面分割や回転などで画面サイズが変更されたときに、できるだけ違和感なく動くように調整する。
  // TODO: これ入れないとどうなるんだったか忘れたので、動作確認して何を避けるために入れている処理なのかコメント追記。。。
  const {height: windowHeight} = useWindowDimensions();
  const [contentHeight, setContentHeight] = useState(Dimensions.get('screen').height);
  const updateContentHeight = useCallback((e: LayoutChangeEvent) => {
    setContentHeight(e.nativeEvent.layout.height);
  }, []);

  const clock = useSharedValue(1);
  const yOffset = useDerivedValue(() => {
    return Math.max(clock.value * contentHeight, contentHeight - windowHeight);
  }, [contentHeight, windowHeight]);

  const show = useCallback(() => {
    setPickerIsVisible();
    cancelAnimation(clock);
    clock.value = withTiming(0, {
      easing: Easing.out(Easing.quad),
      duration: 250,
    });
  }, [setPickerIsVisible, clock]);

  const hide = useCallback(() => {
    cancelAnimation(clock);
    clock.value = withTiming(
      1,
      {
        easing: Easing.in(Easing.quad),
        duration: 250,
      },
      () => runOnJS(setPickerIsNotVisible)(),
    );
  }, [clock, setPickerIsNotVisible]);

  const transform = useAnimatedStyle(() => ({transform: [{translateY: yOffset.value}]}));

  useEffect(() => {
    if (isVisible && !isVisiblePrevious) {
      show();
    } else if (!isVisible && isVisiblePrevious) {
      hide();
    }
  }, [hide, isVisible, isVisiblePrevious, show]);

  return !isPickerVisible ? null : (
    <View style={[styles.container]} pointerEvents="box-none">
      <Reanimated.View style={[{borderWidth: 1, borderColor: 'yellow'}, transform]} onLayout={updateContentHeight}>
        {children}
      </Reanimated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
