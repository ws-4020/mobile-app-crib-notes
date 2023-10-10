import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {setStatusBarStyle} from 'expo-status-bar';
import {ProfileDetailPage} from 'features/account/pages/ProfileDetailPage';
import React, {useCallback, useEffect} from 'react';
import {Platform} from 'react-native';

import {RootStackParamList, AccountStackParamList} from '../../navigators/types';

export const ProfileDetailScreen: React.FC<
  CompositeScreenProps<
    NativeStackScreenProps<AccountStackParamList, 'ProfileDetail'>,
    NativeStackScreenProps<RootStackParamList, 'DemoStackNav'>
  >
> = ({navigation}) => {
  const navigateToDemo = useCallback(() => navigation.navigate('DemoStackNav', {screen: 'DemoMenu'}), [navigation]);
  useEffect(() => {
    navigation.addListener('focus', () => {
      setStatusBarStyle(Platform.OS === 'ios' ? 'dark' : 'light');
    });
  }, [navigation]);
  return <ProfileDetailPage navigateToDemo={navigateToDemo} />;
};
