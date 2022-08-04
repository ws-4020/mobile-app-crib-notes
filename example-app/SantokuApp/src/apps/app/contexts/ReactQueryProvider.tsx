import NetInfo from '@react-native-community/netinfo';
import React, {useCallback, useEffect, useMemo} from 'react';
import {AppState, AppStateStatus, Platform} from 'react-native';
import {focusManager, onlineManager, QueryClient, QueryClientProvider} from 'react-query';

import {defaultQueryCache, defaultMutationCache} from '../utils/defaultCache';
import {defaultOptions} from '../utils/defaultOptions';

const ReactQueryProvider: React.FC = ({children}) => {
  const queryClient: QueryClient = useMemo(() => {
    return new QueryClient({
      queryCache: defaultQueryCache(queryClient),
      mutationCache: defaultMutationCache(queryClient),
      defaultOptions,
    });
  }, []);

  const onAppStateChange = useCallback((newAppState: AppStateStatus) => {
    if (Platform.OS !== 'web') {
      focusManager.setFocused(newAppState === 'active');
    }
  }, []);

  useEffect(() => {
    // アプリがバックグラウンドからアクティブに変化した際にrefetchできるようにする
    const subscription = AppState.addEventListener('change', onAppStateChange);
    return () => subscription.remove();
  }, [onAppStateChange]);

  useEffect(() => {
    // オフライン状態からオンライン状態に変化した際にrefetchできるようにする
    onlineManager.setEventListener(setOnline => {
      return NetInfo.addEventListener(state => {
        setOnline(state.isConnected ?? false);
      });
    });
  }, []);

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export {ReactQueryProvider};
