import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';

import {RootStackNav} from '../../navigation';
import {WithFirebaseMessagingHandlers} from './WithFirebaseMessagingHandlers';
import {useAppInitializer} from './useAppInitializer';

export const AppWithInitialization: React.FC = () => {
  const {initialize, isInitialized, initialData} = useAppInitializer();
  const [initializationError, setInitializationError] = useState<unknown>();

  useEffect(() => {
    // 初期化処理が1回だけ実行されるようにする。
    if (!isInitialized) {
      initialize().catch(e => setInitializationError(e));
    }
  }, [initialize, isInitialized]);

  useEffect(() => {
    // 初期化処理に失敗した場合はアプリをクラッシュ扱いで終了
    if (initializationError) {
      throw initializationError;
    }
  }, [initializationError]);

  return isInitialized && initialData ? (
    <NavigationContainer>
      <WithFirebaseMessagingHandlers initialData={initialData}>
        <RootStackNav initialData={initialData} />
      </WithFirebaseMessagingHandlers>
    </NavigationContainer>
  ) : null;
};
