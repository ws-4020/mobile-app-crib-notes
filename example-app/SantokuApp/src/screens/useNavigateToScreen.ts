import {NavigationProp, NavigatorScreenParams, useNavigation} from '@react-navigation/native';
import {AuthenticatedStackParamList, DemoStackParamList, RootStackParamList} from 'navigation/types';
import {useCallback} from 'react';

const useNavigateToRootStackScreen = (screen: keyof RootStackParamList) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return useCallback(() => navigation.navigate(screen), [navigation, screen]);
};

const useNavigateToAuthenticatedStackScreen = (screen: keyof AuthenticatedStackParamList) => {
  const navigation = useNavigation<NavigationProp<AuthenticatedStackParamList>>();
  return useCallback(() => navigation.navigate(screen), [navigation, screen]);
};

const useNavigateToDemoStackScreen = (screen: keyof DemoStackParamList, params?: DemoStackParamList[typeof screen]) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return useCallback(() => {
    const demoStackParams = {screen, params} as NavigatorScreenParams<DemoStackParamList>;
    return navigation.navigate('DemoStackNav', demoStackParams);
  }, [navigation, screen, params]);
};

export {useNavigateToRootStackScreen, useNavigateToAuthenticatedStackScreen, useNavigateToDemoStackScreen};
