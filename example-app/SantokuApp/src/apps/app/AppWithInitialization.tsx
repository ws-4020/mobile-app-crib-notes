import {NavigationContainer} from '@react-navigation/native';
import {WithCheckAppUpdates} from 'features/app-updates/components/WithCheckAppUpdates';
import {WithTermsAgreementOverlay} from 'features/terms/contexts/WithTermsAgreementOverlay';
import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';

import {WithAccountData} from '../../features/account/components/WithAccountData';
import {WithAutoLogin} from '../../features/account/components/WithAutoLogin';
import {WithReactQuery} from './contexts/WithReactQuery';
import {useAppInitializer} from './hooks/useAppInitializer';
import {AppInitialData} from './types/AppInitialData';

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
  } else if (initializationResult.code === 'Failed') {
    Alert.alert(initializationResult.title, initializationResult.message);
    return null;
  } else {
    // RootStackNav、WithFirebaseMessagingHandlersをimportしてしまうと、アプリの初期化処理が完了する前に各画面でimportしているモジュールも読み込まれてしまうため、
    // アプリの初期化処理が完了した時点でrequireする。
    // requireした場合の型はanyとなってしまいESLintエラーが発生しますが無視します。
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const RootStackNav = require('./navigators/RootStackNav').RootStackNav as React.FC<{initialData: AppInitialData}>;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const WithFirebaseMessagingHandlers = require('./components/WithFirebaseMessagingHandlers')
      .WithFirebaseMessagingHandlers as React.FC<{initialData: AppInitialData}>;
    return (
      <WithCheckAppUpdates>
        <NavigationContainer>
          <WithReactQuery>
            <WithAutoLogin>
              <WithAccountData>
                <WithTermsAgreementOverlay>
                  <WithFirebaseMessagingHandlers initialData={initializationResult.data.initialData}>
                    <RootStackNav initialData={initializationResult.data.initialData} />
                  </WithFirebaseMessagingHandlers>
                </WithTermsAgreementOverlay>
              </WithAccountData>
            </WithAutoLogin>
          </WithReactQuery>
        </NavigationContainer>
      </WithCheckAppUpdates>
    );
  }
};
