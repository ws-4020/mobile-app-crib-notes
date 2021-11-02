import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';

export type HomeTemplateProps = {
  testID?: string;
};

export const HomeTemplate: React.FC<HomeTemplateProps> = ({testID}) => (
  <View style={styles.container} testID={testID}>
    <Text h2>開発中</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
