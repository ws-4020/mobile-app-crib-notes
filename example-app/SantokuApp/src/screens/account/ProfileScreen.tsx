import {m} from 'framework/message';
import {RootStackParamList} from 'navigation/types';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';

const ScreenName = 'Profile';

const Screen: React.FC = () => {
  return (
    <View style={styles.container} testID="Profile">
      <Text>Profile</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const ProfileScreen: NativeStackScreenConfig<RootStackParamList, typeof ScreenName> = {
  component: Screen,
  name: ScreenName,
  options: {
    title: m('プロフィール登録'),
  },
};
