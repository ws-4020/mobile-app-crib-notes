import {useGetCsrfTokenService, usePostLoginService, usePostLogoutService, usePostSignupService} from 'service/backend';

import {ApplicationError} from '../error/ApplicationError';
import {SecureStorageAdapter} from './SecureStorageAdapter';

/** アクティブなアカウントIDがセキュアストレージに存在しない場合に送出するエラー */
class ActiveAccountIdNotFoundError extends ApplicationError {}
/** パスワードがセキュアストレージに存在しない場合に送出するエラー */
class PasswordNotFoundError extends ApplicationError {}

const useAuthenticationService = () => {
  const csrfTokenQuery = useGetCsrfTokenService({enabled: false});
  const postSignup = usePostSignupService();
  const postLogin = usePostLoginService();
  const postLogout = usePostLogoutService();

  /**
   * サインアップします。
   * @param nickname ニックネーム
   * @param password パスワード
   * @returns アカウント
   */
  const signup = async (nickname: string, password: string) => {
    const account = await postSignup.mutateAsync({data: {nickname, password}});
    await SecureStorageAdapter.savePassword(account.accountId, password);
    return account;
  };

  /**
   * アカウントを切り替えます。
   * @param accountId アカウントID
   * @returns アカウントの切り替え結果
   */
  const changeAccount = async (accountId: string) => {
    const password = await SecureStorageAdapter.loadPassword(accountId);
    if (!password) {
      throw new PasswordNotFoundError('The password for the account ID does not exist.');
    }
    return login(accountId, password);
  };

  /**
   * ログインします。
   * @param accountId アカウントID
   * @param password パスワード
   * @returns アカウントの切り替え結果
   */
  const login = async (accountId: string, password: string) => {
    const data = await postLogin.mutateAsync({data: {accountId, password}});
    await SecureStorageAdapter.saveActiveAccountId(accountId);
    await csrfTokenQuery.refetch();
    return data;
  };

  /**
   * 自動ログインします。
   * @returns アカウントのログイン結果
   */
  const autoLogin = async () => {
    const accountId = await SecureStorageAdapter.loadActiveAccountId();
    if (!accountId) {
      throw new ActiveAccountIdNotFoundError('There is no auto-login enabled account.');
    }
    return changeAccount(accountId);
  };

  /**
   * アクティブなアカウントIDとそれに該当するパスワードがセキュアストアに存在するかをチェックします。
   * @returns 自動ログイン可能な場合はtrue、そうでない場合はfalse
   */
  const canAutoLogin = async () => {
    const accountId = await SecureStorageAdapter.loadActiveAccountId();
    if (!accountId) {
      return false;
    }
    const password = await SecureStorageAdapter.loadPassword(accountId);
    return !!password;
  };

  /**
   * ログイン資格情報を再取得します。
   * @returns アカウントのログイン結果
   */
  const refresh = async () => {
    return autoLogin();
  };

  /**
   * ログアウトします。
   */
  const logout = async () => {
    await postLogout.mutateAsync();
    const accountId = await SecureStorageAdapter.loadActiveAccountId();
    if (accountId) {
      await SecureStorageAdapter.deleteActiveAccountId();
      await SecureStorageAdapter.deletePassword(accountId);
    }
    await csrfTokenQuery.refetch();
  };

  return {
    signup,
    changeAccount,
    canAutoLogin,
    autoLogin,
    refresh,
    logout,
  };
};

export {useAuthenticationService, ActiveAccountIdNotFoundError, PasswordNotFoundError};
