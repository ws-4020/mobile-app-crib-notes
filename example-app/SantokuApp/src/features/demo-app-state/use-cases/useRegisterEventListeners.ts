import {useIsMounted} from 'bases/core/utils/useIsMounted';
import {useCallback} from 'react';
import {AppState, AppStateEvent, AppStateStatus, Platform} from 'react-native';

import {useAppStateHistory} from '../client-states/useAppStateHistory';

export const useRegisterEventListeners = () => {
  const isMounted = useIsMounted();
  const [, setAppStateHistory] = useAppStateHistory();
  const saveEvent = useCallback(
    (event: AppStateEvent, next: AppStateStatus) => {
      if (isMounted()) {
        setAppStateHistory(history => {
          return [...(history ?? []), {event, timestamp: new Date(), state: next}];
        });
      }
    },
    [isMounted, setAppStateHistory],
  );

  const registerEventListener = useCallback(
    (event: AppStateEvent) => {
      if (Platform.OS !== 'android' && (event === 'focus' || event === 'blur')) {
        return;
      }

      const listener = (next: AppStateStatus) => saveEvent(event, next);
      const subscription = AppState.addEventListener(event, listener);
      return () => subscription.remove();
    },
    [saveEvent],
  );

  const registerEventListeners = useCallback(() => {
    const states: AppStateEvent[] = ['focus', 'blur', 'change', 'memoryWarning'];
    const unregisterEventListeners = states.map(event => registerEventListener(event));
    return () => {
      unregisterEventListeners.forEach(unregister => unregister?.());
    };
  }, [registerEventListener]);

  return {registerEventListeners};
};
