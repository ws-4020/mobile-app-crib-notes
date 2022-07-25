import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';

import {InitialDataDependingComponent, useAppInitializer} from './initialize';
import {showUpdateRequiredDialog} from './initialize/helpers';
import {WithAccountContext} from './providers/WithAccountContext';
import {WithReactQuery} from './providers/WithReactQuery';
import {WithTermsAgreementOverlay} from './providers/WithTermsAgreementOverlay';

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
    // RootStackNav、WithFirebaseMessagingHandlersをimportしてしまうと、アプリの初期化処理が完了する前に各画面でimportしているモジュールも読み込まれてしまうため、
    // アプリの初期化処理が完了した時点でrequireする。
    // requireした場合の型はanyとなってしまいESLintエラーが発生しますが無視します。
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const RootStackNav = require('./navigators/RootStackNav').RootStackNav as InitialDataDependingComponent;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const WithFirebaseMessagingHandlers = require('./providers/WithFirebaseMessagingHandlers')
      .WithFirebaseMessagingHandlers as InitialDataDependingComponent;
    return (
      <NavigationContainer>
        <WithAccountContext accountData={initializationResult.data.accountData}>
          <WithReactQuery>
            <WithTermsAgreementOverlay>
              <WithFirebaseMessagingHandlers initialData={initializationResult.data.initialData}>
                <RootStackNav initialData={initializationResult.data.initialData} />
              </WithFirebaseMessagingHandlers>
            </WithTermsAgreementOverlay>
          </WithReactQuery>
        </WithAccountContext>
      </NavigationContainer>
    );
  }
};
