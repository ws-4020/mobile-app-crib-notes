import {NativeStackNavigationOptions, NativeStackScreenProps} from '@react-navigation/native-stack';
import {QuestionAndEventPostPage} from 'features/qa-post/pages/QuestionAndEventPostPage';
import React, {useCallback} from 'react';

import {QuestionAndEventPostStackParamList} from '../../navigators/types';

export const QuestionAndEventPostScreen: React.VFC<
  NativeStackScreenProps<QuestionAndEventPostStackParamList, 'QuestionAndEventPost'>
> = ({navigation}) => {
  const setNavigationOptions = useCallback(
    (options: NativeStackNavigationOptions) => navigation.setOptions(options),
    [navigation],
  );
  return <QuestionAndEventPostPage setNavigationOptions={setNavigationOptions} />;
};
