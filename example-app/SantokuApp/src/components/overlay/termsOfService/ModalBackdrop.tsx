import {composePressableStyles} from 'framework/utilities';
import React, {useMemo} from 'react';
import {Omit, Pressable, PressableProps, StyleSheet, View, ViewProps} from 'react-native';
import Reanimated, {BaseAnimationBuilder, FadeIn, FadeOut, Keyframe} from 'react-native-reanimated';
import {useSafeAreaFrame} from 'react-native-safe-area-context';

import {useModalBackdropUseCase} from './useModalBackdropUseCase';

export const MODAL_BACKDROP_DEFAULT_COLOR = 'rgba(0,0,0,0.4)';
export const MODAL_BACKDROP_DEFAULT_FADE_IN_DURATION = 300;
export const MODAL_BACKDROP_DEFAULT_FADE_OUT_DURATION = 300;
export const MODAL_BACKDROP_DEFAULT_ENTERING = FadeIn.duration(MODAL_BACKDROP_DEFAULT_FADE_IN_DURATION);
export const MODAL_BACKDROP_DEFAULT_EXITING = FadeOut.duration(MODAL_BACKDROP_DEFAULT_FADE_OUT_DURATION);

export type ModalBackdropProps = Omit<Reanimated.AnimateProps<ViewProps>, 'entering' | 'exiting'> & {
  isVisible: boolean;
  onPress?: () => unknown;
  /**
   * iOSの場合、アニメーションが終わった後に呼び出されます。
   * Androidの場合、アニメーションが始まった時に呼び出されます。
   */
  enteringCallback?: (finished: boolean) => unknown;
  exitingCallback?: (finished: boolean) => unknown;
  pressableProps?: PressableProps;
  modalProps?: ViewProps;
  /**
   * enteringに指定したAnimationBuilderなどでwithCallbackを指定しても、このコンポーネントの中で上書きしているため実行できません。
   * withCallbackで実行する関数は、enteringCallbackで指定してください。
   */
  entering?: BaseAnimationBuilder | Keyframe;
  /**
   * exitingに指定したAnimationBuilderなどでwithCallbackを指定しても、このコンポーネントの中で上書きしているため実行できません。
   * withCallbackで実行する関数は、exitingCallbackで指定してください。
   */
  exiting?: BaseAnimationBuilder | Keyframe;
};

export const ModalBackdrop: React.FC<ModalBackdropProps> = ({
  isVisible,
  onPress,
  entering = MODAL_BACKDROP_DEFAULT_ENTERING,
  exiting = MODAL_BACKDROP_DEFAULT_EXITING,
  enteringCallback,
  exitingCallback,
  pressableProps: {style: pressableStyle, ...pressableProps} = {},
  modalProps: {style: modalStyle, ...modalProps} = {},
  /**
   * このコンポーネントでは、ReanimatedのEntering/Exitingを使用してアニメーションを実現しています。
   * Entering/Exitingを使用した場合は、opacityを設定しても反映されません。
   * backgroundColorにrgbaで指定してください。（e.g. backgroundColor: rgba(0,0,0,0.4)）
   */
  style,
  children,
  ...animatedViewProps
}) => {
  const {isModalVisible, composedEnteringCallback, composedExitingCallback} = useModalBackdropUseCase({
    isVisible,
    enteringCallback,
    exitingCallback,
  });

  const styles = useStyles();

  const composedPressableStyles = useMemo(
    () => composePressableStyles([styles.pressable, pressableStyle]),
    [pressableStyle, styles.pressable],
  );

  return !isModalVisible ? null : (
    <View style={StyleSheet.flatten([styles.modal, modalStyle])} {...modalProps}>
      {isVisible && (
        <Pressable onPress={onPress} style={composedPressableStyles} {...pressableProps}>
          <Reanimated.View
            entering={entering.withCallback(composedEnteringCallback)}
            exiting={exiting.withCallback(composedExitingCallback)}
            style={StyleSheet.flatten([styles.backdrop, style])}
            {...animatedViewProps}
          />
        </Pressable>
      )}
      {children}
    </View>
  );
};

const useStyles = () => {
  const {width, height} = useSafeAreaFrame();
  return useMemo(
    () =>
      StyleSheet.create({
        modal: {
          position: 'absolute',
          bottom: 0,
          width,
          height,
        },
        pressable: {
          ...StyleSheet.absoluteFillObject,
        },
        backdrop: {
          flex: 1,
          backgroundColor: MODAL_BACKDROP_DEFAULT_COLOR,
        },
      } as const),
    [height, width],
  );
};
