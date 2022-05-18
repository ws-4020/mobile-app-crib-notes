import {usePrevious, useVisibility} from 'framework/utilities';
import {useWorkletCallback} from 'framework/utilities/useWorkletCallback';
import {useCallback, useEffect} from 'react';
import {BackHandler} from 'react-native';

type BackdropAnimationConfig = {
  isVisible: boolean;
  enteringCallback?: (finished: boolean) => unknown;
  exitingCallback?: (finished: boolean) => unknown;
};

export const useOverlayBackdropUseCase = ({isVisible, enteringCallback, exitingCallback}: BackdropAnimationConfig) => {
  const {
    isVisible: isOverlayVisible,
    setVisible: setOverlayVisible,
    setInvisible: setOverlayInvisible,
  } = useVisibility(isVisible);

  const show = useCallback(() => {
    setOverlayVisible();
  }, [setOverlayVisible]);

  const composedEnteringWorkletCallback = useWorkletCallback(enteringCallback);
  const composedExitingCallback = useCallback(
    (finished: boolean) => {
      setOverlayInvisible();
      if (exitingCallback) {
        exitingCallback(finished);
      }
    },
    [setOverlayInvisible, exitingCallback],
  );
  const composedExitingWorkletCallback = useWorkletCallback(composedExitingCallback);

  const isVisiblePrevious = usePrevious(isVisible);
  useEffect(() => {
    if (!isVisiblePrevious && isVisible) {
      show();
    }
  }, [isVisiblePrevious, isVisible, show, exitingCallback, composedExitingCallback]);

  useEffect(() => {
    // Androidの仮想バックキーの制御
    // ローディングオーバレイ表示中は仮想バックキーをタップしても何も動作しないようにする
    const subscription = BackHandler.addEventListener('hardwareBackPress', () => isOverlayVisible);
    return () => {
      subscription.remove();
    };
  }, [isOverlayVisible]);

  return {
    isOverlayVisible,
    show,
    composedEnteringCallback: composedEnteringWorkletCallback,
    composedExitingCallback: composedExitingWorkletCallback,
  };
};
