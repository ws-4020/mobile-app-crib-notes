import {NavigationContainer} from '@react-navigation/native';
import {AppConfig} from 'bases/core/configs/AppConfig';
import {useIsLoggedIn} from 'features/account/client-states/useIsLoggedIn';
import React, {useCallback, useMemo} from 'react';
import {Linking} from 'react-native';

import {useSetDeepLinkUrl} from '../../../features/deep-link/client-states/useSetDeepLinkUrl';
import {AppInitialData} from '../types/AppInitialData';

type Props = {
  initialData: AppInitialData;
};

export const ReactNavigationContainer: React.FC<React.PropsWithChildren<Props>> = ({children, initialData}) => {
  const [isLoggedIn] = useIsLoggedIn();
  const setDeepLinkUrl = useSetDeepLinkUrl();

  const getInitialURL = useCallback(async () => {
    const url = await Linking.getInitialURL();
    setDeepLinkUrl(url);
    return url;
  }, [setDeepLinkUrl]);

  const subscribe = useCallback(listener => {
    const linkingSubscription = Linking.addEventListener('url', ({url}) => {
      listener(url);
    });

    return () => {
      // Clean up the event listeners
      linkingSubscription.remove();
    };
  }, []);

  const config = useMemo(
    () =>
      isLoggedIn
        ? {
            initialRouteName: 'AuthenticatedStackNav',
            screens: {
              AuthenticatedStackNav: {
                initialRouteName: 'MainTabNav',
                screens: {
                  QuestionDetail: {
                    path: 'question/:questionId',
                    exact: true,
                    parse: {
                      questionId: (questionId: string) => {
                        return questionId;
                      },
                    },
                  },
                },
              },
              DemoStackNav: {
                initialRouteName: 'DemoMenu',
                screens: {
                  AppInfo: {
                    path: 'demo/app-info',
                  },
                },
              },
            },
          }
        : undefined,
    [isLoggedIn],
  );

  const linking = {
    prefixes: AppConfig.deepLinkPrefixes,
    config,
    getInitialURL,
    subscribe,
  };

  return <NavigationContainer linking={linking}>{children}</NavigationContainer>;
};
