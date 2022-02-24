import axios from 'axios';
import {AuthenticationService, generatePassword, PasswordNotFoundError} from 'framework';
import {ApplicationError} from 'framework/error/ApplicationError';
import {ErrorResponse} from 'generated/backend/model';
import {useCallback, useState} from 'react';

export const useAuthentication = () => {
  const [accountId, setAccountId] = useState<string>();
  const [accountIdInput, setAccountIdInput] = useState('');
  const mutationSignup = AuthenticationService.useSignup();
  const mutationChangeAccount = AuthenticationService.useChangeAccount();
  const mutationAutoLogin = AuthenticationService.useAutoLogin();
  const mutationLogout = AuthenticationService.useLogout();

  const signup = useCallback(async () => {
    try {
      const password = await generatePassword();
      const account = await mutationSignup.mutateAsync({nickname: 'demoNickname', password});
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
  }, [mutationSignup]);

  const changeAccount = useCallback(async () => {
    try {
      const accountLoginResponse = await mutationChangeAccount.mutateAsync({accountId: accountIdInput});
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
  }, [mutationChangeAccount, accountIdInput]);

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
      const accountLoginResponse = await mutationAutoLogin.mutateAsync();
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
  }, [mutationAutoLogin]);

  const logout = useCallback(async () => {
    try {
      await mutationLogout.mutateAsync();
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
  }, [mutationLogout]);

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
