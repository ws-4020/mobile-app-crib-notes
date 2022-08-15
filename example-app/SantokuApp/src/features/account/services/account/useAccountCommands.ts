import {AccountData} from 'features/account/types/AccountData';
import {useMutation, useQueryClient} from 'react-query';

import {postAccountsMeTerms} from './postAccountsMeTerms';

export const useAccountCommands = () => {
  const queryClient = useQueryClient();

  /**
   * サービス利用規約に同意します。
   */
  const agreeTermsMutation = useMutation(postAccountsMeTerms, {
    onSuccess: (_, variables) => {
      queryClient.setQueryData<AccountData>(['account', 'accountData'], prev => ({
        ...(prev ?? {}),
        terms: {termsAgreementStatus: {hasAgreed: true, agreedVersion: variables.agreedVersion}},
      }));
    },
  });

  return {
    agreeTerms: agreeTermsMutation.mutateAsync,
    isaAgreeingTerms: agreeTermsMutation.isLoading,
    isProcessing: agreeTermsMutation.isLoading,
  };
};
