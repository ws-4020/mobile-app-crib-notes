import {StackActions, useFocusEffect, useNavigation} from '@react-navigation/core';
import React, {useCallback} from 'react';
import {View} from 'react-native';

export const BackendAuthUnauthed: React.FC = () => {
  const navigation = useNavigation();
  useFocusEffect(
    useCallback(() => {
      navigation.dispatch(StackActions.push('BackendAuthSignIn'));
    }, [navigation]),
  );

  return <View />;
};
