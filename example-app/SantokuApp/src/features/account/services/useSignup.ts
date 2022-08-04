/**
 * サインアップします。
 * @param nickname ニックネーム
 * @param password パスワード
 * @returns アカウント
 */

import {generatePassword} from 'bases/core/utils/generatePassword';
import {TermsOfServiceAgreementStatus} from 'features/backend/apis/model';
import {useMutation} from 'react-query';

import {signup} from './auth/signup';
import {postAccountsMeTerms} from './postAccountsMeTerms';
import {useLogin} from './useLogin';

export const useSignup = () => {
  const {mutateAsync: login} = useLogin();
  return useMutation(async (arg: {nickname: string; termsAgreementStatus: TermsOfServiceAgreementStatus}) => {
    const nickname = arg.nickname;
    const termsAgreementStatus = arg.termsAgreementStatus;
    const password = await generatePassword();
    const account = await signup(nickname, password);
    const accountData = await login({accountId: account.accountId, password});
    await postAccountsMeTerms(termsAgreementStatus);
    return accountData;
  });
};
