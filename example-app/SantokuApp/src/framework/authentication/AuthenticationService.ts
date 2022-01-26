import {Account, AccountLoginResponse} from '../../generated/api';
import {useGetCsrfToken, usePostLogin, usePostLogout, usePostSignup} from '../backend/api';
import {ApplicationError} from '../error/ApplicationError';
import {SecureStorageAdapter} from './SecureStorageAdapter';

/** アクティブなアカウントIDがセキュアストレージに存在しない場合に送出するエラー */
class ActiveAccountIdNotFoundError extends ApplicationError {}
/** パスワードがセキュアストレージに存在しない場合に送出するエラー */
class PasswordNotFoundError extends ApplicationError {}

const useAuthenticationService = () => {
  const csrfTokenQuery = useGetCsrfToken(undefined, {enabled: false});
  const postSignup = usePostSignup();
  const postLogin = usePostLogin();
  const postLogout = usePostLogout();

  /**
   * サインアップします。
   * @param nickname ニックネーム
   * @param password パスワード
   * @returns アカウント
   */
  const signup = async (nickname: string, password: string): Promise<Account> => {
    const account = await postSignup.mutateAsync({nickname, password});
    await SecureStorageAdapter.savePassword(account.accountId, password);
    return account;
  };

  /**
   * アカウントを切り替えます。
   * @param accountId アカウントID
   * @returns アカウントの切り替え結果
   */
  const changeAccount = async (accountId: string): Promise<AccountLoginResponse> => {
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
  const login = async (accountId: string, password: string): Promise<AccountLoginResponse> => {
    const data = await postLogin.mutateAsync({accountId, password});
    await SecureStorageAdapter.saveActiveAccountId(accountId);
    await csrfTokenQuery.refetch();
    return data;
  };

  /**
   * 自動ログインします。
   * @returns アカウントのログイン結果
   */
  const autoLogin = async (): Promise<AccountLoginResponse> => {
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
  const canAutoLogin = async (): Promise<boolean> => {
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
  const refresh = async (): Promise<AccountLoginResponse> => {
    return autoLogin();
  };

  /**
   * ログアウトします。
   */
  const logout = async (): Promise<void> => {
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
