import {useLoadingOverlay} from 'bases/ui/contexts/useLoadingOverlay';
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Input, Text} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler';

import {useAccountId} from '../hooks/useAccountId';
import {useAccountIdInput} from '../hooks/useAccountIdInput';
import {useAutoLoginUseCase} from '../hooks/useAutoLoginUseCase';
import {useCanAutoLoginUseCase} from '../hooks/useCanAutoLoginUseCase';
import {useChangeAccountUseCase} from '../hooks/useChangeAccountUseCase';
import {useCopyAccountIdInputUseCase} from '../hooks/useCopyAccountIdInputUseCase';
import {useIsLoading} from '../hooks/useIsLoading';
import {useLogoutUseCase} from '../hooks/useLogoutUseCase';
import {useSignupUseCase} from '../hooks/useSignupUseCase';

export const AuthenticationPage = () => {
  const [accountId] = useAccountId();
  const [accountIdInput, setAccountIdInput] = useAccountIdInput();
  const {copyAccountIdInput} = useCopyAccountIdInputUseCase();
  const {signup} = useSignupUseCase();
  const {changeAccount} = useChangeAccountUseCase();
  const {canAutoLogin} = useCanAutoLoginUseCase();
  const {autoLogin} = useAutoLoginUseCase();
  const {logout} = useLogoutUseCase();
  const {isLoading} = useIsLoading();

  const loadingOverlay = useLoadingOverlay();
  useEffect(() => {
    loadingOverlay.setVisible(isLoading);
  }, [isLoading, loadingOverlay]);

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
