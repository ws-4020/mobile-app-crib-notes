import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StatusBar, setStatusBarStyle} from 'expo-status-bar';
import {ProfileDetailPage} from 'features/account/pages/ProfileDetailPage';
import React, {useCallback, useEffect} from 'react';

import {RootStackParamList, AccountStackParamList} from '../../navigators/types';

export const ProfileDetailScreen: React.FC<
  CompositeScreenProps<
    NativeStackScreenProps<AccountStackParamList, 'ProfileDetail'>,
    NativeStackScreenProps<RootStackParamList, 'DemoStackNav'>
  >
> = ({navigation}) => {
  const navigateToDemo = useCallback(() => navigation.navigate('DemoStackNav', {screen: 'DemoMenu'}), [navigation]);
  useEffect(() => {
    const listener = navigation.addListener('focus', () => {
      setStatusBarStyle('dark');
    });
    return listener;
  }, [navigation]);
  return (
    <>
      <StatusBar style="dark" />
      <ProfileDetailPage navigateToDemo={navigateToDemo} />
    </>
  );
};
