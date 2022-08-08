import {LoadingOverlay} from 'bases/ui/loading/LoadingOverlay';
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Input, Text} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';

import {useAccountId} from '../client-states/useAccountId';
import {useAccountIdInput} from '../client-states/useAccountIdInput';
import {useAutoLogin} from '../use-cases/useAutoLogin';
import {useCanAutoLogin} from '../use-cases/useCanAutoLogin';
import {useChangeAccount} from '../use-cases/useChangeAccount';
import {useCopyAccountIdInput} from '../use-cases/useCopyAccountIdInput';
import {useIsLoading} from '../use-cases/useIsLoading';
import {useLogout} from '../use-cases/useLogout';
import {useSignup} from '../use-cases/useSignup';

export const AuthenticationPage = () => {
  const [accountId] = useAccountId();
  const [accountIdInput, setAccountIdInput] = useAccountIdInput();
  const {copyAccountIdInput} = useCopyAccountIdInput();
  const {signup} = useSignup();
  const {changeAccount} = useChangeAccount();
  const {canAutoLogin} = useCanAutoLogin();
  const {autoLogin} = useAutoLogin();
  const {logout} = useLogout();
  const {isLoading} = useIsLoading();

  useEffect(() => {
    LoadingOverlay.visible(isLoading);
  }, [isLoading]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Button containerStyle={styles.button} onPress={signup} title="匿名サインアップ" />
        <View>
          <Text>【AccountId】</Text>
          <Text selectable>{accountId ?? '匿名サインアップするとアカウントIDが表示されます'}</Text>
          <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <Button containerStyle={styles.button} onPress={copyAccountIdInput} title="入力欄にコピー" />
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
