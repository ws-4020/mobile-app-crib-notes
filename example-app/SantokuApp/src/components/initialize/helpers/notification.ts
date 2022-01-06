import {FirebaseMessagingTypes} from '@react-native-firebase/messaging';
import {useNavigationContainerRef} from '@react-navigation/core';
import {useSnackbar} from 'components/snackbar';
import {useNavigationContainerContext} from 'navigation/WithNavigationContainer';
import {useCallback} from 'react';

import {getNavigationArgsFromNotification} from './navigation';

const useOnMessageCallback = () => {
  const snackbar = useSnackbar();
  return useCallback(
    (message: FirebaseMessagingTypes.RemoteMessage) => {
      if (message.notification) {
        // アプリ操作中に受信した場合は通知内容をスナックバーに表示し、通知データに応じた処理は行わない
        const snackBarText = message.notification.body ?? message.notification.title;
        if (snackBarText) {
          snackbar.show(snackBarText);
        }
      }
    },
    [snackbar],
  );
};

const useOnNotificationOpenedAppCallback = () => {
  const navigationContainerRef = useNavigationContainerRef();
  const {setReservedNavigationArgs} = useNavigationContainerContext();
  return useCallback(
    (message: FirebaseMessagingTypes.RemoteMessage) => {
      // バックグラウンド時に受信した場合は通知を開いた際に通知内容に応じた画面へ遷移する
      const navigationArgs = getNavigationArgsFromNotification(message);
      if (navigationArgs) {
        if (navigationContainerRef.isReady()) {
          navigationContainerRef.navigate(...navigationArgs);
        } else {
          // アプリがバックグラウンドから前面に戻った直後はまだNavigationContainerがReadyではなく画面遷移に失敗する
          // https://github.com/react-navigation/react-navigation/issues/6879
          // そのためNavigationContainerの準備ができてから画面遷移を行えるように遷移に必要な情報を残しておく
          setReservedNavigationArgs(navigationArgs);
        }
      }
    },
    [navigationContainerRef, setReservedNavigationArgs],
  );
};

export {useOnMessageCallback, useOnNotificationOpenedAppCallback};
