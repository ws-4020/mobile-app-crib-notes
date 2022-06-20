import {composePressableStyles} from 'framework/utilities';
import React, {useMemo} from 'react';
import {Modal as RNModal, ModalProps, Pressable, PressableProps, StyleSheet, ViewProps} from 'react-native';
import Reanimated, {useAnimatedStyle, WithTimingConfig} from 'react-native-reanimated';

import {usePickerBackdropUseCase} from './usePickerBackdropUseCase';

export const DEFAULT_BACKGROUND_COLOR = 'black';
export const DEFAULT_OPACITY = 0.4;
export const DEFAULT_FADE_IN_DURATION = 300;
export const DEFAULT_FADE_OUT_DURATION = 150;

// React Native ReanimatedのLayout Animationsを使用すると↓の不具合が発生するため、指定できないようにしています。
// https://github.com/software-mansion/react-native-reanimated/issues/2906
export type PickerBackdropProps = Omit<Reanimated.AnimateProps<ViewProps>, 'exiting' | 'entering'> & {
  isVisible: boolean;
  onPress?: () => unknown;
  afterFadeIn?: (finished?: boolean) => unknown;
  afterFadeOut?: (finished?: boolean) => unknown;
  fadeInDuration?: number;
  fadeOutDuration?: number;
  opacity?: number;
  pressableProps?: PressableProps;
  modalProps?: ModalProps;
  fadeInConfig?: WithTimingConfig;
  fadeOutConfig?: WithTimingConfig;
};

export const PickerBackdrop: React.FC<PickerBackdropProps> = ({
  isVisible,
  opacity = DEFAULT_OPACITY,
  onPress,
  afterFadeIn,
  afterFadeOut,
  fadeInDuration = DEFAULT_FADE_IN_DURATION,
  fadeOutDuration = DEFAULT_FADE_OUT_DURATION,
  pressableProps: {style: pressableStyle, ...pressableProps} = {},
  modalProps: {style: modalStyle, ...modalProps} = {},
  fadeInConfig,
  fadeOutConfig,
  style,
  children,
  ...animatedViewProps
}) => {
  const {isModalVisible, animatedOpacity} = usePickerBackdropUseCase({
    isVisible,
    opacity,
    afterFadeIn,
    afterFadeOut,
    fadeInDuration,
    fadeOutDuration,
    fadeInConfig,
    fadeOutConfig,
  });

  const animatedStyle = useAnimatedStyle(() => ({opacity: animatedOpacity.value}));
  const composedPressableStyles = useMemo(
    () => composePressableStyles([styles.pressable, pressableStyle]),
    [pressableStyle],
  );
  const composedBackdropStyle = useMemo(() => StyleSheet.flatten([styles.backdrop, style]), [style]);

  return !isModalVisible ? null : (
    <RNModal
      visible
      statusBarTranslucent
      animationType="none"
      transparent
      // 戻るボタンが押されたとき（onRequestClose）は、背景がタップされたときと同じ振る舞いになるようにしておく。
      onRequestClose={onPress}
      style={modalStyle}
      {...modalProps}>
      <Pressable onPress={onPress} style={composedPressableStyles} {...pressableProps}>
        <Reanimated.View style={[composedBackdropStyle, animatedStyle]} {...animatedViewProps} />
      </Pressable>
      {children}
    </RNModal>
  );
};

const styles = StyleSheet.create({
  pressable: {
    ...StyleSheet.absoluteFillObject,
    display: 'flex',
  },
  backdrop: {
    flex: 1,
    backgroundColor: DEFAULT_BACKGROUND_COLOR,
  },
});
