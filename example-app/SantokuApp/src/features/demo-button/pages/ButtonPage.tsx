import {Button} from 'bases/ui/button/Button';
import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {Alert, StyleSheet, View, Platform} from 'react-native';

const handlePress = () => {
  Alert.alert('clicked');
};

export const ButtonPage: React.FC = () => {
  return (
    <View style={styles.container}>
      {Platform.OS === 'ios' && <StatusBar style="light" />}
      <Button title="Small" onPress={handlePress} />
      <Button title="Middle" size="middle" />
      <Button title="Large" size="large" />
      <Button title="Full" size="full" />
      <Button
        title="custom style"
        size="large"
        buttonStyle={{backgroundColor: 'red', width: 340}}
        containerStyle={{width: 340}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
