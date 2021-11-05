import React from 'react';
import {StyleSheet, View} from 'react-native';

import LocalAuthnTestScreen from './LocalAuthnTestScreen';

const ScreenName = 'LocalAuthn';
const Screen = () => {
  return (
    <View style={styles.container}>
      <LocalAuthnTestScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

export const LocalAuthnScreen = {
  name: ScreenName,
  component: Screen,
};
