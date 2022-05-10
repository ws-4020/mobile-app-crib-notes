import {CommonActions} from '@react-navigation/core';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {AuthenticatedStackParamList} from 'navigation/types';
import {useCallback} from 'react';

export const useOnAgreedInitialTermsOfService = () => {
  const navigation = useNavigation<NavigationProp<AuthenticatedStackParamList>>();

  return useCallback(
    () =>
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'MainTabNav'}],
        }),
      ),
    [navigation],
  );
};
