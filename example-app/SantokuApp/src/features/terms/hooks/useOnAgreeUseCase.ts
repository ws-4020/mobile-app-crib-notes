import {useAccountContextOperation} from 'account/contexts/useAccountContextOperation';
import {useAccountContext} from 'features/account/contexts/useAccountContext';
import {usePostAccountsMeTermsService} from 'features/account/hooks/usePostAccountsMeTermsService';
import {TermsOfService} from 'features/backend/apis/model';
import {useCallback} from 'react';

import {useAgreedClientState} from './useAgreedClientState';

export const useOnAgreeUseCase = (termsOfService: TermsOfService) => {
  const [, setAgreedStatus] = useAgreedClientState();
  const accountContext = useAccountContext();
  const accountContextOperation = useAccountContextOperation();
  const {mutateAsync: callPostAccountsMeTerms, isLoading} = usePostAccountsMeTermsService();
  const onAgree = useCallback(async () => {
    try {
      const termsAgreementStatus = {
        hasAgreed: true,
        agreedVersion: termsOfService.version,
      };
      if (accountContext.isLoggedIn) {
        await callPostAccountsMeTerms(termsAgreementStatus);
        accountContextOperation.agreedToTerms(termsAgreementStatus.agreedVersion);
      }
      setAgreedStatus(termsAgreementStatus);
      close();
    } catch {
      // 個別のエラーハンドリングは不要
    }
  }, [
    accountContext.isLoggedIn,
    accountContextOperation,
    callPostAccountsMeTerms,
    setAgreedStatus,
    termsOfService.version,
  ]);
  return {onAgree, isLoading};
};
