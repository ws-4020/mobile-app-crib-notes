import React, {useCallback} from 'react';
import {StyleSheet} from 'react-native';
import Reanimated, {BaseAnimationBuilder, runOnJS, SlideInDown, SlideOutDown, Keyframe} from 'react-native-reanimated';

export type PickerContainerProps = {
  isVisible: boolean;
  enteringCallback?: (finished: boolean) => unknown;
  exitingCallback?: (finished: boolean) => unknown;
  /**
   * enteringに指定したAnimationBuilderなどでwithCallbackを指定しても、本コンポーネント内で上書きしているため実行できません。
   * withCallbackで実行する関数は、enteringCallbackで指定してください。
   */
  entering?: BaseAnimationBuilder | Keyframe;
  /**
   * exitingに指定したAnimationBuilderなどでwithCallbackを指定しても、本コンポーネント内で上書きしているため実行できません。
   * withCallbackで実行する関数は、exitingCallbackで指定してください。
   */
  exiting?: BaseAnimationBuilder | Keyframe;
};

export const DEFAULT_SLIDE_IN_DURATION = 300;
export const DEFAULT_SLIDE_OUT_DURATION = 300;
export const DEFAULT_ENTERING = SlideInDown.duration(DEFAULT_SLIDE_IN_DURATION);
export const DEFAULT_EXITING = SlideOutDown.duration(DEFAULT_SLIDE_OUT_DURATION);

export const PickerContainer: React.FC<PickerContainerProps> = ({
  isVisible,
  entering = DEFAULT_ENTERING,
  exiting = DEFAULT_EXITING,
  enteringCallback,
  exitingCallback,
  children,
}) => {
  const composedEnteringCallback = useCallback(
    (finished: boolean) => {
      'worklet';
      if (enteringCallback) {
        runOnJS(enteringCallback)(finished);
      }
    },
    [enteringCallback],
  );

  const composedExitingCallback = useCallback(
    (finished: boolean) => {
      'worklet';
      if (exitingCallback) {
        runOnJS(exitingCallback)(finished);
      }
    },
    [exitingCallback],
  );

  return (
    <>
      {isVisible && (
        <Reanimated.View
          entering={entering.withCallback(composedEnteringCallback)}
          exiting={exiting.withCallback(composedExitingCallback)}
          style={styles.container}
          pointerEvents="box-none">
          {children}
        </Reanimated.View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
