import {FirebaseMessagingTypes} from '@react-native-firebase/messaging';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigationParameter, RootStackParamList} from 'apps/app/navigators/types';
import {AppInitialData} from 'apps/app/types/AppInitialData';
import React, {useCallback} from 'react';

import {WithFirebaseMessagingHandlersComponent} from '../../components/WithFirebaseMessagingHandlersComponent';

type Props = {
  initialData: AppInitialData;
};

const getNavigateToScreen = (
  message: FirebaseMessagingTypes.RemoteMessage,
  initialData: AppInitialData,
): NavigationParameter<RootStackParamList> => {
  return ['AuthenticatedStackNav', {screen: 'MainTabNav', params: {screen: 'HomeStackNav', params: {screen: 'Home'}}}];
};

export const WithFirebaseMessagingHandlers: React.FC<Props> = ({children, initialData}) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const navigateIfRequired = useCallback(
    (message: FirebaseMessagingTypes.RemoteMessage, initialData: AppInitialData) => {
      const to = getNavigateToScreen(message, initialData);
      navigation.navigate(...to);
    },
    [navigation],
  );
  return (
    <WithFirebaseMessagingHandlersComponent initialData={initialData} navigateIfRequired={navigateIfRequired}>
      {children}
    </WithFirebaseMessagingHandlersComponent>
  );
};
