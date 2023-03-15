import React from 'react';
import {View, StyleSheet, Switch} from 'react-native';

type ToggleButtonProps = {
  isPressed: boolean;
  setIsPressed: (isPressed: boolean) => void;
};
export const ToggleButton: React.FC<ToggleButtonProps> = ({isPressed, setIsPressed}) => {
  return (
    <View style={styles.container}>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isPressed ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={setIsPressed}
        value={isPressed}
      />
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
