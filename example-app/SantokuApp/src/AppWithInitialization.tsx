import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';

import {WithFirebaseMessagingHandlers} from './framework/firebase/WithFirebaseMessagingHandlers';
import {useAppInitializer} from './framework/initialize';
import {showUpdateRequiredDialog} from './framework/initialize/helpers';
import {RootStackNav} from './navigation';

export const AppWithInitialization: React.FC = () => {
  const {initialize, initializationResult} = useAppInitializer();
  const [initializationError, setInitializationError] = useState<unknown>();

  useEffect(() => {
    // 初期化処理が1回だけ実行されるようにする。
    if (initializationResult.code === 'Initializing') {
      initialize().catch(e => setInitializationError(e));
    }
  }, [initialize, initializationResult]);

  useEffect(() => {
    // 初期化処理に失敗した場合はアプリをクラッシュ扱いで終了
    if (initializationError) {
      throw initializationError;
    }
  }, [initializationError]);

  if (initializationResult.code === 'Initializing') {
    return null;
  } else if (initializationResult.code === 'UpdateRequired') {
    showUpdateRequiredDialog(initializationResult.supportedVersion);
    return null;
  } else if (initializationResult.code === 'Failed') {
    Alert.alert(initializationResult.title, initializationResult.message);
    return null;
  } else {
    return (
      <NavigationContainer>
        <WithFirebaseMessagingHandlers initialData={initializationResult.data}>
          <RootStackNav initialData={initializationResult.data} />
        </WithFirebaseMessagingHandlers>
      </NavigationContainer>
    );
  }
};
