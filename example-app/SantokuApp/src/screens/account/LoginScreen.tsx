import {m} from 'framework';
import {RootStackParamList} from 'navigation/types';
import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-elements';

const ScreenName = 'Login';

const Screen: React.FC = () => {
  return (
    <View style={{flex: 1}} testID="Login">
      <Text>Login</Text>
    </View>
  );
};

export const LoginScreen: NativeStackScreenConfig<RootStackParamList, typeof ScreenName> = {
  component: Screen,
  name: ScreenName,
  options: () => ({
    title: m('ログイン'),
  }),
};
