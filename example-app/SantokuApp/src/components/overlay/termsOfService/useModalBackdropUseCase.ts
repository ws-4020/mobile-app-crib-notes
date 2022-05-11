import {usePrevious, useVisibility} from 'framework/utilities';
import {useWorkletCallback} from 'framework/utilities/useWorkletCallback';
import {useCallback, useEffect} from 'react';
import {BackHandler} from 'react-native';

type BackdropAnimationConfig = {
  isVisible: boolean;
  enteringCallback?: (finished: boolean) => unknown;
  exitingCallback?: (finished: boolean) => unknown;
};

export const useModalBackdropUseCase = ({isVisible, enteringCallback, exitingCallback}: BackdropAnimationConfig) => {
  const {
    isVisible: isModalVisible,
    setVisible: setModalVisible,
    setInvisible: setModalInvisible,
  } = useVisibility(isVisible);

  const show = useCallback(() => {
    setModalVisible();
  }, [setModalVisible]);

  const composedEnteringWorkletCallback = useWorkletCallback(enteringCallback);
  const composedExitingCallback = useCallback(
    (finished: boolean) => {
      setModalInvisible();
      if (exitingCallback) {
        exitingCallback(finished);
      }
    },
    [setModalInvisible, exitingCallback],
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
    const subscription = BackHandler.addEventListener('hardwareBackPress', () => isModalVisible);
    return () => {
      subscription.remove();
    };
  }, [isModalVisible]);

  return {
    isModalVisible,
    show,
    composedEnteringCallback: composedEnteringWorkletCallback,
    composedExitingCallback: composedExitingWorkletCallback,
  };
};
