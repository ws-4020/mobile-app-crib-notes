import {NavigationProp, useNavigation} from '@react-navigation/native';
import {DemoStackParamList, RootStackParamList} from 'navigation/types';
import {useCallback} from 'react';

const useNavigateToRootStackScreen = (screen: keyof RootStackParamList) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return useCallback(() => navigation.navigate(screen), [navigation, screen]);
};

const useNavigateToDemoStackScreen = (screen: keyof DemoStackParamList, params?: DemoStackParamList[typeof screen]) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return useCallback(() => {
    if (screen === 'EditTodoDemo') {
      const screenParams = params as DemoStackParamList[typeof screen];
      return navigation.navigate('DemoStackNav', {screen, params: screenParams});
    } else {
      return navigation.navigate('DemoStackNav', {screen});
    }
  }, [navigation, screen, params]);
};

export {useNavigateToRootStackScreen, useNavigateToDemoStackScreen};
