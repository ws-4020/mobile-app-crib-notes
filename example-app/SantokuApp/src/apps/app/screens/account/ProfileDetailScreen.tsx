import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TeamDetailPage} from 'features/team/pages/TeamDetailPage';
import React, {useCallback} from 'react';

import {RootStackParamList, AccountStackParamList} from '../../navigators/types';

export const ProfileDetailScreen: React.FC<
  CompositeScreenProps<
    NativeStackScreenProps<AccountStackParamList, 'ProfileDetail'>,
    NativeStackScreenProps<RootStackParamList, 'DemoStackNav'>
  >
> = ({navigation}) => {
  const navigateToDemo = useCallback(() => navigation.navigate('DemoStackNav', {screen: 'DemoMenu'}), [navigation]);
  return <TeamDetailPage navigateToDemo={navigateToDemo} />;
};
