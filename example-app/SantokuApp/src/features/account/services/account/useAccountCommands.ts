import {AccountData} from 'features/account/types/AccountData';
import {TermsOfServiceAgreementStatus} from 'features/backend/apis/model';
import {useMutation, useQueryClient} from 'react-query';

import {getAccountData} from './getAccountData';
import {postAccountsMeTerms} from './postAccountsMeTerms';

export const useAccountCommands = () => {
  const queryClient = useQueryClient();

  /**
   * サービス利用規約に同意します。
   */
  const agreeTermsMutation = useMutation(
    async (data: TermsOfServiceAgreementStatus) => {
      await postAccountsMeTerms(data);
      return getAccountData();
    },
    {
      onSuccess: accountData => {
        queryClient.setQueryData<AccountData>(['account', 'accountData'], accountData);
      },
    },
  );

  return {
    agreeTerms: agreeTermsMutation.mutateAsync,
    isAgreeingTerms: agreeTermsMutation.isLoading,
    isProcessing: agreeTermsMutation.isLoading,
  };
};
