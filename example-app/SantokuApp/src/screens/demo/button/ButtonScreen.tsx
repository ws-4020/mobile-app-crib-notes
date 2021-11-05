import {Button} from 'components/basics/Button';
import React from 'react';
import {StyleSheet, View} from 'react-native';

const ScreenName = 'Button';
const Screen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Button title="あいうえ" />
      <Button title="あいうえおか" size="middle" />
      <Button title="あいうえおかきくけこ" size="large" />
      <Button title="ボタン" size="full" />
    </View>
  );
};

export const ButtonScreen = {
  name: ScreenName,
  component: Screen,
  options: {
    title: 'Button',
    presentation: 'formSheet' as const,
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
