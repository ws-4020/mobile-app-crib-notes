import {log} from 'framework/logging';
import React, {createContext, useContext, useEffect, useMemo, useState} from 'react';

import {initialize, hideSplashScreen, NavigatorOptions} from './Initialize';

type InitializeContextValue = {
  initialized: boolean;
  navigatorOptions: NavigatorOptions;
};

const defaultInitializeContextValue: InitializeContextValue = {
  initialized: false,
  navigatorOptions: {},
};

export const InitializeContext = createContext<InitializeContextValue>(defaultInitializeContextValue);

export const WithInitializeContext: React.FC = ({children}) => {
  const [error, setError] = useState<Error>();
  const [initialized, setInitialized] = useState<boolean>(defaultInitializeContextValue.initialized);
  const [navigatorOptions, setNavigatorOptions] = useState<NavigatorOptions>(
    defaultInitializeContextValue.navigatorOptions,
  );
  const contextValue = useMemo(() => {
    return {
      initialized,
      navigatorOptions,
    };
  }, [initialized, navigatorOptions]);

  useEffect(() => {
    initialize()
      .then((navigatorOptions: NavigatorOptions) => {
        setNavigatorOptions(navigatorOptions);
        setInitialized(true);
        hideSplashScreen().catch(() => {});
      })
      .catch((e) => {
        if (e instanceof Error) {
          setError(e);
        } else {
          setError(new Error('Failed to initialize.'));
        }
      });
  }, []);

  useEffect(() => {
    if (error) {
      // 可能ならログ送信
      try {
        log.error(error.message, 'InitializeFailure');
      } catch (e) {}
      // 初期化処理に失敗した場合はアプリをクラッシュ扱いで終了
      throw error;
    }
  }, [error]);

  if (initialized) {
    return <InitializeContext.Provider value={contextValue}>{children}</InitializeContext.Provider>;
  } else {
    return <InitializeContext.Provider value={contextValue} />;
  }
};

export const useInitializeContext = () => {
  return useContext(InitializeContext);
};
