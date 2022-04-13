import {usePrevious, useVisibility} from 'framework/utilities';
import {useCallback, useEffect} from 'react';
import {runOnJS} from 'react-native-reanimated';

type BackdropAnimationConfig = {
  isVisible: boolean;
  enteringCallback?: (finished: boolean) => unknown;
  exitingCallback?: (finished: boolean) => unknown;
};

export const usePickerBackdropUseCase = ({isVisible, enteringCallback, exitingCallback}: BackdropAnimationConfig) => {
  const {
    isVisible: isModalVisible,
    setVisible: setModalVisible,
    setInvisible: setModalInvisible,
  } = useVisibility(isVisible);

  const show = useCallback(() => {
    setModalVisible();
  }, [setModalVisible]);

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
      runOnJS(setModalInvisible)();
      if (exitingCallback) {
        runOnJS(exitingCallback)(finished);
      }
    },
    [setModalInvisible, exitingCallback],
  );

  const isVisiblePrevious = usePrevious(isVisible);
  useEffect(() => {
    if (!isVisiblePrevious && isVisible) {
      show();
    }
  }, [isVisiblePrevious, isVisible, show, exitingCallback, composedExitingCallback]);

  return {
    isModalVisible,
    show,
    composedEnteringCallback,
    composedExitingCallback,
  };
};
