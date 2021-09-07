import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text, ThemeContext} from 'react-native-elements';

import {ErrorCase} from '../demo/error/ErrorCase';

export const Home: React.FC = () => {
  const navigation = useNavigation();
  const {theme} = useContext(ThemeContext);
  const onGoToInstructionButtonPress = useCallback(() => navigation.navigate('Instructions'), [navigation]);
  const onViewApplicationInformationButtonPress = useCallback(() => navigation.navigate('AppInfo'), [navigation]);
  const onGlobalErrorHandlingButtonPress = useCallback(() => navigation.navigate(ErrorCase.ScreenName), [navigation]);
  return (
    <View style={StyleSheet.flatten([styles.container, {backgroundColor: theme.colors?.primary}])}>
      <Text h1 style={styles.textColor}>
        Hello, World!
      </Text>
      <Button title="Go to instructions" onPress={onGoToInstructionButtonPress} />
      <Button title="View application information" onPress={onViewApplicationInformationButtonPress} />
      <Button title="Global error handling" onPress={onGlobalErrorHandlingButtonPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textColor: {
    color: '#fefefe',
  },
});
