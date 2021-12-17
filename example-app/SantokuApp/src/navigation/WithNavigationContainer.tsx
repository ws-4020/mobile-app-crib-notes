import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

export const WithNavigationContainer: React.FC = ({children}) => {
  return (
    <NavigationContainer
    // TODO: DeepLink設定
    >
      {children}
    </NavigationContainer>
  );
};
