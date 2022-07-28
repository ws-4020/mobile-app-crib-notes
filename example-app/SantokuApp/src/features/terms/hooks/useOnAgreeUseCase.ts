import {useAccountContext} from 'features/account/contexts/useAccountContext';
import {useAccountContextOperation} from 'features/account/contexts/useAccountContextOperation';
import {usePostAccountsMeTerms} from 'features/account/hooks/usePostAccountsMeTerms';
import {TermsOfService} from 'features/backend/apis/model';
import {useCallback} from 'react';

import {useAgreedClientState} from './useAgreedClientState';

export const useOnAgreeUseCase = (close: () => void, termsOfService: TermsOfService) => {
  const [, setAgreedStatus] = useAgreedClientState();
  const accountContext = useAccountContext();
  const accountContextOperation = useAccountContextOperation();
  const {mutateAsync: callPostAccountsMeTerms, isLoading} = usePostAccountsMeTerms();
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
    close,
    setAgreedStatus,
    termsOfService.version,
  ]);
  return {onAgree, isLoading};
};
