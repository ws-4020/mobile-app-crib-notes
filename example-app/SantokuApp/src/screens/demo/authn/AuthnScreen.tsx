import axios, {AxiosError} from 'axios';
import React, {useCallback, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, Button, Input} from 'react-native-elements';

import {AuthnService, csrfToken, generatePassword} from '../../../framework';
import {ActiveAccountIdNotFoundError, PasswordNotFoundError} from '../../../framework/authn/AuthnService';
import {ErrorResponse} from '../../../generated/api';

const ScreenName = 'Authn';
const Screen = () => {
  const [accountId, setAccountId] = useState<string>();
  const [accountIdInput, setAccountIdInput] = useState('');

  const getCsrfToken = useCallback(async () => {
    try {
      await csrfToken();
      alert('CSRFトークンを取得して、API Clientに設定しました');
    } catch (e) {
      alert(e);
    }
  }, []);

  const signup = useCallback(async () => {
    try {
      const password = await generatePassword();
      const res = await AuthnService.signup('demoNickname', password);
      setAccountId(res.accountId);
      alert(`アカウントIDは${res.accountId}です`);
    } catch (e) {
      const backendErrorMessage = resolveBackendErrorMessage(e);
      if (backendErrorMessage) {
        alert(backendErrorMessage);
        return;
      }
      alert(e);
    }
  }, [setAccountId]);

  const changeAccount = useCallback(async () => {
    try {
      const res = await AuthnService.changeAccount(accountIdInput);
      alert(`ログイン成功しました state=${res.status}`);
    } catch (e) {
      const backendErrorMessage = resolveBackendErrorMessage(e);
      if (backendErrorMessage) {
        alert(backendErrorMessage);
        return;
      }
      if (e instanceof PasswordNotFoundError) {
        alert('アカウントIDに紐づくパスワードが見つかりません');
        return;
      }
      alert(e);
    }
  }, [accountIdInput]);

  const canAutoLogin = useCallback(async () => {
    try {
      const res = await AuthnService.canAutoLogin();
      alert(res ? '自動ログイン可能です' : '自動ログインできません');
    } catch (e) {
      alert(e);
    }
  }, []);

  const autoLogin = useCallback(async () => {
    try {
      const res = await AuthnService.autoLogin();
      alert(`自動ログイン成功しました state=${res.status}`);
    } catch (e) {
      const backendErrorMessage = resolveBackendErrorMessage(e);
      if (backendErrorMessage) {
        alert(backendErrorMessage);
        return;
      }
      if (e instanceof ActiveAccountIdNotFoundError) {
        alert('自動ログイン可能なアカウントIDが見つかりません');
        return;
      }
      if (e instanceof PasswordNotFoundError) {
        alert('アカウントIDに紐づくパスワードが見つかりません');
        return;
      }
      alert(e);
    }
  }, []);

  const logout = useCallback(async () => {
    try {
      await AuthnService.logout();
      alert(`ログアウト成功しました`);
    } catch (e) {
      const backendErrorMessage = resolveBackendErrorMessage(e);
      if (backendErrorMessage) {
        alert(backendErrorMessage);
        return;
      }
      alert(e);
    }
  }, []);

  return (
    <View style={styles.container}>
      <Button onPress={getCsrfToken} title="CSRF Token取得" />
      <Button onPress={signup} title="サインアップ" />
      <View>
        <Text>【AccountId】</Text>
        <Text selectable>{accountId ?? 'サインアップするとアカウントIDが表示されます'}</Text>
      </View>
      <View>
        <Input
          placeholder="アカウントIDを入力してください"
          value={accountIdInput}
          onChangeText={(value) => setAccountIdInput(value)}
        />
        <Button onPress={changeAccount} title="アカウント切り替え" />
      </View>
      <Button onPress={canAutoLogin} title="自動ログイン可能かチェック" />
      <Button onPress={autoLogin} title="自動ログイン" />
      <Button onPress={logout} title="ログアウト" />
    </View>
  );
};

const resolveBackendErrorMessage = (e: unknown): string | undefined => {
  if (axios.isAxiosError(e)) {
    const axiosError = e as AxiosError<ErrorResponse>;
    if (axiosError.response) {
      return axiosError.response.data.message;
    }
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },
});

export const AuthnScreen = {
  name: ScreenName,
  component: Screen,
};
