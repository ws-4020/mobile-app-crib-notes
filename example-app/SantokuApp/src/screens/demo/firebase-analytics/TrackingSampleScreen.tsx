import analytics from '@react-native-firebase/analytics';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-elements';

const ScreenName = 'TrackingSample';
const Screen = () => {
  // 注意：イベント名には空白文字を入れない（含まれているとエラー発生）
  const trackEvent = async (eventName: string, eventValues: object) => {
    await analytics().logEvent(eventName, {
      ...eventValues,
    });
  };

  return (
    <View style={styles.container}>
      <Button onPress={() => trackEvent('event_A', {value: 123})} title="イベントA その1" />
      <Button onPress={() => trackEvent('event_A', {value: 456})} title="イベントA その2" />
      <Button onPress={() => trackEvent('event_B', {value1: 'asdfg', value2: 12345})} title="イベントB その1" />
      <Button onPress={() => trackEvent('event_B', {value3: 'qwert', value4: 67890})} title="イベントB その2" />
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

export const TrackingSampleScreen = {
  name: ScreenName,
  component: Screen,
};
