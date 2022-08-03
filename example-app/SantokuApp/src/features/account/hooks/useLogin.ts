/**
 * ログインします。
 * @returns アカウントの切り替え結果
 */

import {getAccountsMe} from 'features/backend/apis/account/account';
import {TermsOfService} from 'features/backend/apis/model';
import {useMutation} from 'react-query';

import {getAccountsMeTerms} from '../utils/auth/getAccountsMeTerms';
import {login} from '../utils/auth/login';
import {savePassword} from '../utils/secure-storage/savePassword';

export const useLogin = () => {
  return useMutation(async (arg: {accountId: string; password: string; termsOfService?: TermsOfService}) => {
    const accountId = arg.accountId;
    const password = arg.password;
    const termsOfService = arg.termsOfService;
    await login(accountId, password);
    await savePassword(accountId, password);
    // callGetAccountMe.dataは必ず存在する想定
    const account = (await getAccountsMe()).data;
    const termsAgreementStatus = (await getAccountsMeTerms()).data;
    return {account, terms: {termsAgreementStatus, termsOfService}};
  });
};
