import {TeamStackParamList} from 'apps/app/navigators/types';
import {m} from 'bases';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-elements';
import {useNavigateToDemoStackScreen} from 'screens/useNavigateToScreen';

const ScreenName = 'TeamDetail';
const Screen: React.FC = () => {
  const onGoToDemoScreen = useNavigateToDemoStackScreen('Demo');

  return (
    <View style={styles.container} testID="TeamDetailScreen">
      <Text h2>開発中</Text>
      <Button title="Go to Demo" onPress={onGoToDemoScreen} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const TeamDetailScreen: StackScreenConfig<TeamStackParamList, typeof ScreenName> = {
  component: Screen,
  name: ScreenName,
  options: () => ({
    title: m('チーム詳細'),
  }),
};
