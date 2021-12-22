import {createNavigationContainerRef, NavigationContainer} from '@react-navigation/native';
import {useInitializeContext} from 'components/initialize';
import React, {useEffect, useState} from 'react';

export const WithNavigationContainer: React.FC = ({children}) => {
  const [isReady, setIsReady] = useState<boolean>(false);
  const {reservedNavigation, clearReservedNavigation} = useInitializeContext();
  const navigationContainerRef = createNavigationContainerRef();

  useEffect(() => {
    if (isReady && reservedNavigation) {
      navigationContainerRef.navigate(reservedNavigation.screen, reservedNavigation.params);
      clearReservedNavigation();
    }
  }, [isReady, reservedNavigation, navigationContainerRef, clearReservedNavigation]);

  return (
    <NavigationContainer
      ref={navigationContainerRef}
      onReady={() => {
        setIsReady(true);
      }}
      // TODO: DeepLink設定
    >
      {children}
    </NavigationContainer>
  );
};
