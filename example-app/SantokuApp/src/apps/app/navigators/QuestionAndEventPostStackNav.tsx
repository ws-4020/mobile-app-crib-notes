import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import {QuestionAndEventPostScreen} from '../screens/qa-post/QuestionAndEventPostScreen';
import {QuestionAndEventPostStackParamList} from './types';
import {useCloseThisNavigatorButton} from './useCloseThisNavigatorButton';

const nav = createNativeStackNavigator<QuestionAndEventPostStackParamList>();

export const QuestionAndEventPostStackNav: React.VFC = () => {
  const {CloseThisNavigatorButton} = useCloseThisNavigatorButton();
  return (
    <nav.Navigator>
      <nav.Screen
        name="QuestionAndEventPost"
        component={QuestionAndEventPostScreen}
        options={{headerTitle: '', headerLeft: CloseThisNavigatorButton, headerShadowVisible: false}}
      />
    </nav.Navigator>
  );
};
