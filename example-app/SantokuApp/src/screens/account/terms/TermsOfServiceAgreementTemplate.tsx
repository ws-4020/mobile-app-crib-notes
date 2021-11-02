import React from 'react';
import {GestureResponderEvent, StyleSheet, View} from 'react-native';
import {Button, Text} from 'react-native-elements';

export type TermsOfServiceAgreementTemplateProps = {
  onGoToHomeScreen?: (event: GestureResponderEvent) => void;
  testID?: string;
};

export const TermsOfServiceAgreementTemplate: React.FC<TermsOfServiceAgreementTemplateProps> = ({
  onGoToHomeScreen,
  testID,
}) => (
  <View style={styles.container} testID={testID}>
    <Text h1>利用規約</Text>
    <Button title="Go to Home" testID="goToHomeButton" onPress={onGoToHomeScreen} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
