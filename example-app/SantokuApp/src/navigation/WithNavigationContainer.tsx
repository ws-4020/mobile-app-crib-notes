import {createNavigationContainerRef, NavigationContainer} from '@react-navigation/native';
import {createUseContextAndProvider} from 'framework/utilities';
import React, {useEffect, useMemo, useState} from 'react';

import {AppNavigatorOptions, NavigationArgs} from './types';

type NavigationContainerContextValue = {
  isReady: boolean;
  navigatorOptions: AppNavigatorOptions;
  setNavigatorOptions: React.Dispatch<any>;
  setReservedNavigationArgs: React.Dispatch<any>;
};

const [useNavigationContainerContext, NavigationContainerContextProvider] =
  createUseContextAndProvider<NavigationContainerContextValue>();

const WithNavigationContainer: React.FC = ({children}) => {
  const [isReady, setIsReady] = useState<boolean>(false);
  const [reservedNavigationArgs, setReservedNavigationArgs] = useState<NavigationArgs | undefined>();
  const [navigatorOptions, setNavigatorOptions] = useState<AppNavigatorOptions>({});
  const navigationContainerRef = createNavigationContainerRef();

  const contextValue = useMemo(() => {
    return {
      isReady,
      navigatorOptions,
      setNavigatorOptions,
      setReservedNavigationArgs,
    };
  }, [isReady, navigatorOptions]);

  useEffect(() => {
    if (reservedNavigationArgs && isReady && navigationContainerRef.isReady()) {
      navigationContainerRef.navigate(...reservedNavigationArgs);
      setReservedNavigationArgs(undefined);
    }
  }, [isReady, reservedNavigationArgs, navigationContainerRef]);

  return (
    <NavigationContainerContextProvider value={contextValue}>
      <NavigationContainer
        ref={navigationContainerRef}
        onReady={() => {
          setIsReady(true);
        }}
        // TODO: DeepLink設定
      >
        {children}
      </NavigationContainer>
    </NavigationContainerContextProvider>
  );
};

export {useNavigationContainerContext, WithNavigationContainer};
