import {composePressableStyles} from 'framework/utilities';
import React, {useMemo} from 'react';
import {Modal as RNModal, ModalProps, Omit, Pressable, PressableProps, StyleSheet, Text, ViewProps} from 'react-native';
import Reanimated, {BaseAnimationBuilder, FadeIn, FadeOut, Keyframe} from 'react-native-reanimated';

import {usePickerBackdropUseCase} from './usePickerBackdropUseCase';

export const DEFAULT_COLOR = 'rgba(0,0,0,0.4)';
export const DEFAULT_ENTERING = FadeIn.duration(300);
export const DEFAULT_EXITING = FadeOut.duration(150);

type Props = Omit<Reanimated.AnimateProps<ViewProps>, 'entering' | 'exiting'> & {
  isVisible: boolean;
  onPress?: () => unknown;
  enteringCallback?: (finished: boolean) => unknown;
  exitingCallback?: (finished: boolean) => unknown;
  pressableProps?: PressableProps;
  modalProps?: ModalProps;
  entering?: BaseAnimationBuilder | Keyframe;
  exiting?: BaseAnimationBuilder | Keyframe;
};

export const PickerBackdrop: React.FC<Props> = ({
  isVisible,
  onPress,
  entering = DEFAULT_ENTERING,
  exiting = DEFAULT_EXITING,
  enteringCallback,
  exitingCallback,
  pressableProps: {style: pressableStyle, ...pressableProps} = {},
  modalProps: {style: modalStyle, ...modalProps} = {},
  style,
  children,
  ...animatedViewProps
}) => {
  const {isModalVisible, composedEnteringCallback, composedExitingCallback} = usePickerBackdropUseCase({
    isVisible,
    enteringCallback,
    exitingCallback,
  });

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
      {isVisible && (
        <Pressable onPress={onPress} style={composedPressableStyles} {...pressableProps}>
          <Reanimated.View
            entering={entering.withCallback(composedEnteringCallback)}
            exiting={exiting.withCallback(composedExitingCallback)}
            style={composedBackdropStyle}
            {...animatedViewProps}>
            <Text>test</Text>
          </Reanimated.View>
        </Pressable>
      )}
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
    backgroundColor: DEFAULT_COLOR,
  },
});
