import {FirebaseMessagingTypes} from '@react-native-firebase/messaging';
import {DefaultRouterOptions} from '@react-navigation/routers';
import {NavigationArgs} from 'navigation/WithNavigationContainer';

import {InitialData} from './initialData';

export type NavigatorOptions = {
  [navigatorName: string]: DefaultRouterOptions;
};

const getInitialNavigatorOptions = (
  initialData: InitialData,
  initialNotificationMessage: FirebaseMessagingTypes.RemoteMessage | null,
): NavigatorOptions => {
  // TODO: 未認証状態ならログイン画面へ
  // 利用規約に同意していなければ利用規約画面へ
  if (!initialData.terms?.hasAgreedValidTermsOfService) {
    return {
      RootStackNav: {
        initialRouteName: 'TermsOfServiceAgreement',
      },
    };
  }
  // TODO: チーム未参加状態ならチーム新規登録画面へ
  // 通知パラメータがあればそれに応じた画面へ
  if (initialNotificationMessage?.data?.type) {
    switch (initialNotificationMessage.data.type) {
      case 'StartedTimetable': {
        // ホーム画面
        return {
          RootStackNav: {
            initialRouteName: 'AuthenticatedStackNav',
          },
          AuthenticatedStackNav: {
            initialRouteName: 'MainTabNav',
          },
          MainTabNav: {
            initialRouteName: 'HomeStackNav',
          },
          HomeStackNav: {
            initialRouteName: 'Home',
          },
        };
      }
      default: {
        break;
      }
    }
  }
  // TODO: ディープリンクパラメータがあればそれに応じた画面へ
  // 何もなければ初期設定に従う
  return {};
};

const getNavigationArgsFromNotification = (message: FirebaseMessagingTypes.RemoteMessage): NavigationArgs | null => {
  // 通知パラメータがあればそれに応じた画面へ
  if (message.data?.type) {
    switch (message.data?.type) {
      case 'StartedTimetable': {
        // ホーム画面へ遷移する
        return [
          'AuthenticatedStackNav',
          {
            screen: 'MainTabNav',
            params: {
              screen: 'HomeStackNav',
              params: {
                screen: 'HomeDetail',
              },
            },
          },
        ];
      }
      default: {
        return null;
      }
    }
  } else {
    return null;
  }
};

export {getInitialNavigatorOptions, getNavigationArgsFromNotification};
