import {
  useAuthenticationService,
  ActiveAccountIdNotFoundError,
  generatePassword,
  PasswordNotFoundError,
} from 'framework';
import {useCallback, useState} from 'react';

import {ApiResponseError} from '../../../framework/backend';

export const useAuthentication = () => {
  const [accountId, setAccountId] = useState<string>();
  const [accountIdInput, setAccountIdInput] = useState('');
  const AuthenticationService = useAuthenticationService();

  const signup = useCallback(async () => {
    try {
      const password = await generatePassword();
      const account = await AuthenticationService.signup('demoNickname', password);
      setAccountId(account.accountId);
      alert(`アカウントIDは${account.accountId}です`);
    } catch (e) {
      if (e instanceof ApiResponseError) {
        alert(e.response.data.message);
        return;
      }
      alert(e);
    }
  }, [AuthenticationService]);

  const changeAccount = useCallback(async () => {
    try {
      const accountLoginResponse = await AuthenticationService.changeAccount(accountIdInput);
      alert(`ログイン成功しました state=${accountLoginResponse.status}`);
    } catch (e) {
      if (e instanceof ApiResponseError) {
        alert(e.response.data.message);
        return;
      }
      if (e instanceof PasswordNotFoundError) {
        alert('アカウントIDに紐づくパスワードが見つかりません');
        return;
      }
      alert(e);
    }
  }, [AuthenticationService, accountIdInput]);

  const canAutoLogin = useCallback(async () => {
    try {
      const res = await AuthenticationService.canAutoLogin();
      alert(res ? '自動ログイン可能です' : '自動ログインできません');
    } catch (e) {
      alert(e);
    }
  }, [AuthenticationService]);

  const autoLogin = useCallback(async () => {
    try {
      const accountLoginResponse = await AuthenticationService.autoLogin();
      alert(`自動ログイン成功しました state=${accountLoginResponse.status}`);
    } catch (e) {
      if (e instanceof ApiResponseError) {
        alert(e.response.data.message);
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
  }, [AuthenticationService]);

  const logout = useCallback(async () => {
    try {
      await AuthenticationService.logout();
      alert(`ログアウト成功しました`);
    } catch (e) {
      if (e instanceof ApiResponseError) {
        alert(e.response.data.message);
        return;
      }
      alert(e);
    }
  }, [AuthenticationService]);

  const copyAccountIdInput = useCallback(() => {
    if (accountId) {
      setAccountIdInput(accountId);
    }
  }, [accountId]);

  return {
    accountId,
    accountIdInput,
    setAccountIdInput,
    copyAccountIdInput,
    signup,
    changeAccount,
    canAutoLogin,
    autoLogin,
    logout,
  };
};
