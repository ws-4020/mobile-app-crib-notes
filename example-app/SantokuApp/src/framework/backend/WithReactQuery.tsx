import NetInfo from '@react-native-community/netinfo';
import React, {useEffect, useMemo} from 'react';
import {AppState, Platform} from 'react-native';
import {focusManager, onlineManager, QueryClient, QueryClientProvider} from 'react-query';

import {useDefaultQueryCache, useDefaultMutaitonCache} from './useDefaultCache';

const WithReactQuery: React.FC = ({children}) => {
  const queryCache = useDefaultQueryCache();
  const mutationCache = useDefaultMutaitonCache();

  const queryClient = useMemo(() => {
    // defaultOptionsは初期化処理(メッセージのロードとFirebase Clashlytics接続)完了後に設定する
    return new QueryClient({
      queryCache,
      mutationCache,
    });
  }, [queryCache, mutationCache]);

  useEffect(() => {
    // アプリがバックグラウンドからアクティブに変化した際にrefetchできるようにする
    return AppState.addEventListener('change', newAppState => {
      if (Platform.OS !== 'web') {
        focusManager.setFocused(newAppState === 'active');
      }
    });
  });

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

export {WithReactQuery};
