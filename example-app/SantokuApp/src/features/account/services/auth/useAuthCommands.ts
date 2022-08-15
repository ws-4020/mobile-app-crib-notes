import {generatePassword} from 'bases/core/utils/generatePassword';
import {getAccountsMe} from 'features/backend/apis/account/account';
import {TermsOfServiceAgreementStatus} from 'features/backend/apis/model';
import {savePassword} from 'features/secure-storage/services/savePassword';
import {useTerms} from 'features/terms/services/useTerms';
import {Query, useMutation, useQueryClient, hashQueryKey} from 'react-query';
import {QueryFilters} from 'react-query/types/core/utils';

import {useIsLoggedIn} from '../../client-states/useIsLoggedIn';
import {isUnauthorizedError} from '../../errors/UnauthorizedError';
import {AccountData} from '../../types/AccountData';
import {getAccountsMeTerms} from '../account/getAccountsMeTerms';
import {postAccountsMeTerms} from '../account/postAccountsMeTerms';
import {autoLogin} from './autoLogin';
import {canAutoLogin} from './canAutoLogin';
import {changeAccount} from './changeAccount';
import {login} from './login';
import {logout} from './logout';
import {signup} from './signup';

const defaultQueryFilters = {predicate: (query: Query) => query.queryHash !== hashQueryKey(['account', 'isLoggedIn'])};

export const useAuthCommands = () => {
  const queryClient = useQueryClient();
  const {termsOfService} = useTerms();
  const [, setIsLoggedIn] = useIsLoggedIn();

  /**
   * ログインします。
   */
  const loginMutation = useMutation(
    async (arg: {accountId: string; password: string}) => {
      const accountId = arg.accountId;
      const password = arg.password;
      await login(accountId, password);
      await savePassword(accountId, password);
      // callGetAccountMe.dataは必ず存在する想定
      const account = (await getAccountsMe()).data;
      const termsAgreementStatus = (await getAccountsMeTerms()).data;
      return {account, terms: {termsAgreementStatus, termsOfService: termsOfService?.data}};
    },
    {
      onSuccess: accountData => {
        queryClient.setQueryData<AccountData>(['account', 'accountData'], accountData);
        setIsLoggedIn(true);
      },
    },
  );

  /**
   * 自動ログインします。
   */
  const autoLoginMutation = useMutation(
    async () => {
      if (await canAutoLogin()) {
        try {
          return autoLogin();
        } catch (e) {
          if (isUnauthorizedError(e)) {
            // 認証エラーは処理成功として扱う
            return undefined;
          } else {
            throw e;
          }
        }
      }
    },
    {
      onSuccess: response => {
        setIsLoggedIn(response && response.status === 'COMPLETE');
      },
    },
  );

  /**
   * ログアウトします。
   */
  const logoutMutation = useMutation(
    async (arg: {queryRemovalFilters?: QueryFilters} = {queryRemovalFilters: defaultQueryFilters}) => {
      return logout(queryClient, arg.queryRemovalFilters);
    },
    {
      onSuccess: () => {
        setIsLoggedIn(false);
      },
    },
  );

  /**
   * サインアップします。
   */
  const signupMutation = useMutation(
    async (arg: {nickname: string; termsAgreementStatus: TermsOfServiceAgreementStatus}) => {
      const nickname = arg.nickname;
      const termsAgreementStatus = arg.termsAgreementStatus;
      const password = await generatePassword();
      const account = await signup(nickname, password);
      const accountData = await loginMutation.mutateAsync({accountId: account.accountId, password});
      await postAccountsMeTerms(termsAgreementStatus);
      return accountData;
    },
    {
      onSuccess: accountData => {
        queryClient.setQueryData<AccountData>(['account', 'accountData'], accountData);
        setIsLoggedIn(true);
      },
    },
  );

  /**
   * アカウントを切り替えます。
   */
  const changeAccountMutation = useMutation((arg: {accountId: string}) => changeAccount(arg.accountId));

  return {
    login: loginMutation.mutateAsync,
    autoLogin: autoLoginMutation.mutateAsync,
    logout: logoutMutation.mutateAsync,
    signup: signupMutation.mutateAsync,
    changeAccount: changeAccountMutation.mutateAsync,
    isLoggingIn: loginMutation.isLoading,
    isAutoLoggingIn: autoLoginMutation.isLoading,
    isAutoLoginSuccess: autoLoginMutation.isSuccess,
    isLoggingOut: logoutMutation.isLoading,
    isSigningUp: signupMutation.isLoading,
    isChangingAccount: changeAccountMutation.isLoading,
    isProcessing:
      loginMutation.isLoading ||
      autoLoginMutation.isLoading ||
      logoutMutation.isLoading ||
      signupMutation.isLoading ||
      changeAccountMutation.isLoading,
    isSuccessAutoLogin: autoLoginMutation.isSuccess,
  };
};
