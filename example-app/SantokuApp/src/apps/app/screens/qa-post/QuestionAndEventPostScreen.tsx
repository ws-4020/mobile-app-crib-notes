import {NativeStackNavigationOptions, NativeStackScreenProps} from '@react-navigation/native-stack';
import {StatusBar} from 'expo-status-bar';
import {QuestionAndEventPostPage} from 'features/qa-post/pages/QuestionAndEventPostPage';
import React, {useCallback} from 'react';
import {Platform} from 'react-native';

import {QuestionAndEventPostStackParamList} from '../../navigators/types';

export const QuestionAndEventPostScreen: React.FC<
  NativeStackScreenProps<QuestionAndEventPostStackParamList, 'QuestionAndEventPost'>
> = ({navigation}) => {
  const setNavigationOptions = useCallback(
    (options: NativeStackNavigationOptions) => navigation.setOptions(options),
    [navigation],
  );
  const goBack = useCallback(() => navigation.goBack(), [navigation]);
  return (
    <>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'dark'} />
      <QuestionAndEventPostPage setNavigationOptions={setNavigationOptions} goBack={goBack} />
    </>
  );
};
