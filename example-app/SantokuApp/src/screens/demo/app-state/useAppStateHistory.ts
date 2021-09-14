import {useCallback, useState} from 'react';
import {AppState, AppStateEvent, AppStateStatus} from 'react-native';

import {useIsMounted} from '../../../framework/utilities/useIsMounted';

export type StateChangedEventRecord = {
  event: AppStateEvent;
  state: AppStateStatus;
  timestamp: Date;
};

export const useAppStateHistory = () => {
  const [appStateHistory, setAppStateHistory] = useState<StateChangedEventRecord[]>([
    {
      event: 'change',
      timestamp: new Date(),
      state: AppState.currentState,
    },
  ]);
  const isMounted = useIsMounted();

  const changeEventListener = useCallback(
    (nextAppState: AppStateStatus) => {
      if (isMounted()) {
        setAppStateHistory((history) => {
          return [...history, {event: 'change', timestamp: new Date(), state: nextAppState}];
        });
      }
    },
    [isMounted],
  );

  const registerChangeEventListener = () => {
    AppState.addEventListener('change', changeEventListener);
    // 0.65からは、addEventListenerからの返り値をそのままreturnすれば良くなっている。（以下のコードの実装時は0.63.4を利用）
    // https://reactnative.dev/docs/0.65/appstate
    // https://reactnative.dev/docs/0.64/appstate
    return () => AppState.removeEventListener('change', changeEventListener);
  };

  const historyKeyExtractor = (_: unknown, index: number) => index.toString();

  return {
    appStateHistory,
    registerChangeEventListener,
    historyKeyExtractor,
  };
};
