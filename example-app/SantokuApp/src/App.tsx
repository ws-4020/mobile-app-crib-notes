import {WithInitializeContext} from 'components/initialize';
import {RootStackNav} from 'navigation';
import React from 'react';
import {Platform} from 'react-native';

import {WithSnackbar} from './components/snackbar/';
import {WithAppTheme} from './components/theme';
import {WithNavigationContainer} from './navigation/WithNavigationContainer';

type AppProperties = {
  [key: string]: any;
};

export const App = ({isHeadless}: AppProperties) => {
  // isHeadlessを取得するためにはAppDelegate.mに変更が必要
  // https://rnfirebase.io/messaging/usage#background-application-state
  if (Platform.OS === 'ios' && isHeadless) {
    // iOSでバックグラウンド時にリモート通知を受信するとアプリケーションがサイレントに起動される
    // この時にはReact Componentを返さないようにし、useEffectなどの処理がバックグラウンドで走ることを防止する
    // Androidの場合はApp自体が読み込まれないので追加対応は必要ない
    return null;
  }
  return (
    <WithInitializeContext>
      <WithAppTheme>
        <WithSnackbar>
          <WithNavigationContainer>
            <RootStackNav />
          </WithNavigationContainer>
        </WithSnackbar>
      </WithAppTheme>
    </WithInitializeContext>
  );
};
