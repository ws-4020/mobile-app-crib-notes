import axios from 'axios';
import {useAuthenticationService, generatePassword, PasswordNotFoundError} from 'framework';
import {ApplicationError} from 'framework/error/ApplicationError';
import {ErrorResponse} from 'generated/backend/model';
import {useCallback, useState} from 'react';

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
      if (axios.isAxiosError(e) && e.response) {
        const data = e.response.data as ErrorResponse | undefined;
        const message = data?.message ?? '予期せぬ通信エラー';
        alert(message);
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
      if (axios.isAxiosError(e) && e.response) {
        const data = e.response.data as ErrorResponse | undefined;
        const message = data?.message ?? '予期せぬ通信エラー';
        alert(message);
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
      if (axios.isAxiosError(e) && e.response) {
        const data = e.response.data as ErrorResponse | undefined;
        const message = data?.message ?? '予期せぬ通信エラー';
        alert(message);
        return;
      }
      if (e instanceof ApplicationError) {
        alert(e.message);
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
      if (axios.isAxiosError(e) && e.response) {
        const data = e.response.data as ErrorResponse | undefined;
        const message = data?.message ?? '予期せぬ通信エラー';
        alert(message);
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
