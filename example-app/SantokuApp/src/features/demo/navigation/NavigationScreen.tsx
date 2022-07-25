import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {DemoStackParamList, RootStackParamList} from 'apps/app/navigators/types';
import {Button} from 'bases/ui/components/button/Button';
import React from 'react';
import {StyleSheet, View} from 'react-native';

const ScreenName = 'Navigation';

type Props = CompositeScreenProps<
  NativeStackScreenProps<DemoStackParamList, typeof ScreenName>,
  NativeStackScreenProps<RootStackParamList>
>;

const Screen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button size="large" title="Go to Snackbar Demo" onPress={() => navigation.navigate('Snackbar')} />
      <Button
        size="large"
        title="Go to Home"
        onPress={() =>
          navigation.navigate('AuthenticatedStackNav', {screen: 'MainTabNav', params: {screen: 'HomeStackNav'}})
        }
      />
      <Button
        size="large"
        title="Go to Team"
        onPress={() =>
          navigation.navigate('AuthenticatedStackNav', {screen: 'MainTabNav', params: {screen: 'TeamStackNav'}})
        }
      />
    </View>
  );
};

export const NavigationScreen: NativeStackScreenConfig<DemoStackParamList, typeof ScreenName> = {
  name: ScreenName,
  component: Screen,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
