import React from 'react';
import {GestureResponderEvent, StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-elements';

export type TeamDetailTemplateProps = {
  onGoToDemoScreen?: (event: GestureResponderEvent) => void;
  testID?: string;
};

export const TeamDetailTemplate: React.FC<TeamDetailTemplateProps> = ({onGoToDemoScreen, testID}) => (
  <View style={styles.container} testID={testID}>
    <Text h2>開発中</Text>
    <Button title="Go to Demo" onPress={onGoToDemoScreen} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
