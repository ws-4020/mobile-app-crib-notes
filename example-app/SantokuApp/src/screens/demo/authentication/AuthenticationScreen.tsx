import {DemoStackParamList} from 'navigation/types';
import React, {useCallback} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Input, Text} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';

import {useAuthentication} from './useAuthentication';

const ScreenName = 'Authentication';
const Screen = () => {
  const {accountId, accountIdInput, setAccountIdInput, signup, changeAccount, canAutoLogin, autoLogin, logout} =
    useAuthentication();
  const copyInput = useCallback(() => {
    if (accountId) {
      setAccountIdInput(accountId);
    }
  }, [setAccountIdInput, accountId]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Button containerStyle={styles.button} onPress={signup} title="匿名サインアップ" />
        <View>
          <Text>【AccountId】</Text>
          <Text selectable>{accountId ?? '匿名サインアップするとアカウントIDが表示されます'}</Text>
          <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <Button containerStyle={styles.button} onPress={copyInput} title="入力欄にコピー" />
          </View>
        </View>
        <View>
          <Input
            placeholder="アカウントIDを入力してください"
            value={accountIdInput}
            onChangeText={value => setAccountIdInput(value)}
          />
          <Button containerStyle={styles.button} onPress={changeAccount} title="アカウント切り替え" />
        </View>
        <View>
          <Button containerStyle={styles.button} onPress={canAutoLogin} title="自動ログイン可能かチェック" />
          <Button containerStyle={styles.button} onPress={autoLogin} title="自動ログイン" />
          <View>
            <Button
              containerStyle={styles.button}
              buttonStyle={{backgroundColor: 'red'}}
              onPress={logout}
              title="ログアウト"
            />
            <Text style={{color: 'red'}}>※匿名アカウントでログアウトすると再ログイン出来ません。</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    margin: 10,
  },
});

export const AuthenticationScreen: NativeStackScreenConfig<DemoStackParamList, typeof ScreenName> = {
  name: ScreenName,
  component: Screen,
};
